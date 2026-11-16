---
description: Helm chart architecture decisions, features, and configuration reference for Appsmith on Kubernetes.
toc_max_heading_level: 3
---

# Helm Chart

The Appsmith Helm chart is the recommended way to deploy and manage Appsmith on Kubernetes. For an overview of Appsmith's components and how they fit together, see [Deployment Architecture](/getting-started/setup/deployment-architecture). For the full list of configurable values, see the [chart README](https://github.com/appsmithorg/appsmith/tree/release/deploy/helm#parameters).

## Planning your deployment

Some choices are easy to change after installation—resource limits and environment variables are a `helm upgrade` away. Others require a migration to change because they affect where data is stored.

Review the decisions below before your first `helm install`.

| Decision | Default | Migration required to change? |
|---|---|---|
| [Storage and workload type](#storage-and-workload-type) | StatefulSet with a single replica | **Yes**—volume migration and workload recreation |
| [MongoDB](#mongodb) | Bitnami subchart | **Yes**—data export/import between MongoDB deployments |
| [Redis](#redis) | Bitnami subchart | No—Redis data is ephemeral |
| [PostgreSQL](#postgresql) | Bitnami subchart | Yes—Keycloak data migration needed |

### Storage and workload type

In addition to its databases, Appsmith persists data to files on disk—logs and other runtime state. The workload type and storage configuration are tightly coupled, and together they determine how volumes are provisioned and whether you can run multiple replicas.

The chart supports two workload modes, each with different storage behavior:

**StatefulSet (default)**—runs a single replica with its own persistent volume. The pod is replaced in place during upgrades and configuration changes, preserving the same volume. This is the simplest option and works out of the box with most clusters' default block storage `StorageClass` (EBS `gp3`, GCE PD, Azure Disk), but is restricted to a single replica.

**Deployment**—use this when you need high availability with multiple replicas. Set `workload.kind: Deployment` or enable `autoscaling.enabled`. In this mode, all pods mount the same volume, so you need shared storage (`ReadWriteMany`) backed by AWS EFS, GCP Filestore, Azure Files, or NFS.

| Configuration | Workload | Storage | Replicas | Values |
|---|---|---|---|---|
| **Single replica** (recommended starting point) | StatefulSet | Block storage (`ReadWriteOnce`)—typically the cluster default | 1 | Defaults work out of the box |
| **Multi-replica / HA** | Deployment | Shared filesystem (`ReadWriteMany`)—[AWS EFS](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html), [GCP Filestore](https://cloud.google.com/filestore/docs/csi-driver), Azure Files, NFS | 2+ | `workload.kind: Deployment`, `persistence.storageClass: <shared-sc>` |
| **Existing claim** | Deployment | Pre-provisioned PVC | 1+ | `workload.kind: Deployment`, `persistence.existingClaim.enabled: true`, `persistence.existingClaim.claimName: <name>` |

A `StorageClass` with `allowVolumeExpansion: true` is recommended to allow resizing volumes without reprovisioning.

Changing the storage backend or switching between StatefulSet and Deployment on an existing release requires a migration—recreating volumes and the workload resource. See [Migrate to High Availability](/getting-started/setup/installation-guides/kubernetes/migrate-non-ha-to-ha-helm) for the procedure. Plan this before your first install.

### MongoDB

MongoDB is Appsmith's primary data store. The chart supports three approaches, and **new installations should use the MongoDB Kubernetes Operator**:

| Option | Status | When to use |
|---|---|---|
| **MongoDB Kubernetes Operator** (recommended) | Available since chart 3.7.0 | **New installations.** Uses the official [MongoDB Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes) for operator-managed lifecycle, credential management, and version upgrades. |
| **Bitnami subchart** (default) | Being phased out | Existing installations that haven't migrated yet. The upstream Bitnami MongoDB images have been deprecated by their publisher. |
| **External MongoDB** | Stable | Managed services (Atlas) or self-managed MongoDB outside the cluster. |

For a complete walkthrough of the MongoDB Operator, see the [MongoDB Kubernetes Operator](/getting-started/setup/instance-configuration/mongodb-kubernetes-operator) guide. If you have an existing install using the Bitnami subchart, see [Migrate from Bitnami to MongoDB Operator](/getting-started/setup/instance-configuration/mongodb-kubernetes-operator#migrate-from-bitnami-subchart) for the migration procedure. To configure an external MongoDB instance, see [Custom MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis).

### Redis

Redis is used for session storage and caching. The chart bundles Redis by default (`redis.enabled: true`) and runs it in the cluster alongside Appsmith. You can also bring your own Redis—for example, a cloud-managed service like AWS ElastiCache—by disabling the bundled instance and setting `APPSMITH_REDIS_URL` in `applicationConfig`.

Since chart 3.9.0, the bundled Redis is password-protected by default. The chart generates the password and stores it in a Kubernetes Secret automatically. See [Enable Redis Authentication](/getting-started/setup/installation-guides/kubernetes/enable-redis-auth) for how it works and how to enable it on existing deployments.

Redis data is ephemeral, so switching between bundled and external doesn't require a data migration. See [External Redis](/getting-started/setup/instance-configuration/external-redis) for configuration details.

### PostgreSQL

PostgreSQL is used by Keycloak for identity management. The chart bundles PostgreSQL by default (`postgresql.enabled: true`) and runs it in the cluster alongside Appsmith. You can also bring your own PostgreSQL—for example, Amazon RDS or Azure Database for PostgreSQL—by disabling the bundled instance and configuring the Keycloak database connection via `applicationConfig`.

Switching to an external PostgreSQL on an existing install requires migrating Keycloak's data. See [External PostgreSQL](/getting-started/setup/instance-configuration/external-postgresql-rds) for configuration details.

## Health probes

The chart configures a startup, liveness, and readiness probe on the Appsmith container. All three send an HTTP request to the health endpoint, `/api/v1/health`. The liveness and readiness probes start only after the startup probe succeeds.

Saving some admin settings restarts the Appsmith server inside the container, and the restart takes about 45 seconds. The probe defaults in chart 3.9.2 and later are sized so that Kubernetes doesn't kill the container during these restarts.

| Probe | `periodSeconds` | `timeoutSeconds` | `failureThreshold` | Effect |
|---|---|---|---|---|
| `startupProbe` | 10 | 5 | 60 | Allows 600 seconds for the server to boot. |
| `livenessProbe` | 10 | 5 | 18 | Restarts the container after 180 seconds of continuous failure. |
| `readinessProbe` | 10 | 5 | 3 | Stops sending traffic to the pod after 30 seconds of failure. |

Each probe accepts the following keys under `probes.startupProbe`, `probes.livenessProbe`, and `probes.readinessProbe`:

- `port`: the container port to probe. Defaults to `80`.
- `api`: the HTTP path to request. Defaults to `/api/v1/health`.
- `periodSeconds`: how often to run the probe.
- `timeoutSeconds`: how long to wait for a response before the attempt counts as a failure.
- `failureThreshold`: how many failures in a row trigger the probe's effect.

To change a probe, set only the keys you need in your `values.yaml`. Keys you don't set keep their defaults. For example, to give the liveness probe a longer timeout:

```yaml
probes:
  livenessProbe:
    timeoutSeconds: 15
```

### Upgrading from an older chart

Charts before 3.9.2 ran each probe every 60 seconds with a 1-second timeout and a `failureThreshold` of 3. When you upgrade:

- Keys you set under `probes` still take effect, and keys you didn't set take the new defaults.
- If you set `failureThreshold` with a 60-second interval in mind, the probe now runs every 10 seconds and reaches your threshold six times faster. Multiply `failureThreshold` by 6 to keep the same window, for example `3` becomes `18`. You can also set `periodSeconds: 60` for that probe to keep the old timing, but a 60-second period makes [pod restarts after saving admin settings](/help-and-support/troubleshooting-guide/performance-resource-errors#pod-restarts-after-saving-admin-settings) more likely.
- `periodSeconds`, `timeoutSeconds`, and `failureThreshold` must be positive integers. Other values, such as `0`, make `helm install` and `helm upgrade` fail with a schema validation error. Quoted numbers such as `"60"` are accepted.

### Custom HTTP port

The probe `port` defaults to `80` and doesn't follow `HTTPContainerPort`. If you set `HTTPContainerPort`, also set `port` for every probe to the same value. Otherwise the probes call a port the server doesn't listen on, the startup probe never succeeds, and Kubernetes keeps restarting the container:

```yaml
HTTPContainerPort: 8080
probes:
  startupProbe:
    port: 8080
  livenessProbe:
    port: 8080
  readinessProbe:
    port: 8080
```

## Community edition

The community and enterprise editions use the same Helm chart. To install the community edition, set the image repository in your `values.yaml`:

```yaml
image:
  repository: appsmith/appsmith-ce
```

The enterprise image (`appsmith/appsmith-ee`) is used by default. You can run the enterprise image on a free plan without a license key—the community image is only needed if you prefer to run the open source edition.

## Uninstall

If you installed with the MongoDB Kubernetes Operator (as recommended in the [install guide](/getting-started/setup/installation-guides/kubernetes)), the operator's custom resource has a finalizer that must be cleared before uninstalling. See the [MongoDB Operator uninstall procedure](/getting-started/setup/instance-configuration/mongodb-kubernetes-operator#uninstall) for the full steps.

If you're using the Bitnami subchart or an external MongoDB, a standard uninstall is sufficient:

```bash
helm uninstall appsmith-ee -n appsmith-ee
kubectl delete namespace appsmith-ee
```

## See also

- [Ingress and TLS](/getting-started/setup/installation-guides/kubernetes/publish-appsmith-online)—Configure ingress and TLS for Kubernetes.
- [Kubernetes Installation Guide](/getting-started/setup/installation-guides/kubernetes)—Step-by-step install for Appsmith on Kubernetes.
- [Environment Variables](/getting-started/setup/environment-variables)—Application-level configuration reference.
- [High Availability Setup](/getting-started/setup/installation-guides/kubernetes/configure-high-availability)—Configure HA on AWS EKS.
- [Upgrade Helm Chart Versions](/getting-started/setup/instance-management)—Migration guides for older chart versions (v1→v2, CE→EE chart consolidation, Bitnami image deprecation).
