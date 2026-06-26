---
description: Enable Redis authentication for the bundled Redis on existing Appsmith Helm chart deployments.
toc_max_heading_level: 2
---

# Enable Redis Authentication

Starting with Helm chart version **3.8.2**, the bundled Redis instance is password-protected by default. The chart generates the password automatically, stores it in a Kubernetes Secret, and wires it into both Redis and Appsmith.

This page explains how to enable Redis authentication on existing deployments, including deployments running chart versions older than 3.8.2.

This page applies only to the **bundled Redis** subchart (`redis.enabled: true`). If you use an external Redis instance, see [External Redis](/getting-started/setup/instance-configuration/external-redis).

## Upgrade an existing deployment to chart 3.8.2 or later

For most deployments, enabling Redis authentication is a standard chart upgrade.

1. Remove any explicit `redis.auth.enabled: false` from your `values.yaml`, or set it to `true`. An explicit `false` overrides the new default and leaves authentication disabled after the upgrade:

   ```yaml
   redis:
     auth:
       enabled: true
   ```

2. Update your local chart repository and upgrade:

   ```bash
   helm repo update
   helm upgrade -i appsmith-ee appsmith-ee/appsmith -n appsmith-ee -f values.yaml
   ```

3. Verify that the Secret exists:

   ```bash
   kubectl get secret appsmith-redis-secret -n appsmith-ee
   ```

4. Verify that all pods are running and that Appsmith can reach Redis:

   ```bash
   kubectl get pods -n appsmith-ee
   ```

   Optionally, test the authenticated connection directly:

   ```bash
   kubectl exec -it appsmith-ee-redis-master-0 -n appsmith-ee -- \
     sh -c 'REDISCLI_AUTH="<your-redis-password>" redis-cli ping'
   ```

   Replace `<your-redis-password>` with the value from the `appsmith-redis-secret` Secret. The command should return `PONG`.

### Bring your own password

To control the password yourself, create the Secret **before** installing or upgrading:

```bash
kubectl create secret generic appsmith-redis-secret \
  --from-literal=redis-password='<your-password>' \
  -n appsmith-ee
```

To use a different Secret name or key, point the chart at it in `values.yaml`:

```yaml
redis:
  auth:
    existingSecret: my-redis-secret
    existingSecretPasswordKey: my-password-key
```

### Self-manage the Redis password

To set the Redis password directly instead of letting the chart manage a Secret (for example, when migrating a deployment that already sets `redis.auth.password`), set all three values in `values.yaml`:

```yaml
redis:
  auth:
    password: "<your-password>"
    existingSecret: ""
applicationConfig:
  APPSMITH_REDIS_URL: "redis://:<your-password>@<release-name>-redis-master.<namespace>.svc.cluster.local:6379"
```

`existingSecret` must be empty so the chart skips its bootstrap Secret, and `APPSMITH_REDIS_URL` must carry the same password. The chart rejects the install with an error if `redis.auth.password` is set without both.

### Opt out

To keep the bundled Redis unauthenticated (for example, in an isolated development cluster), disable auth in `values.yaml`:

```yaml
redis:
  auth:
    enabled: false
```

This restores the behavior of earlier chart versions: a passwordless Redis.

### Air-gapped and restricted networks

The bootstrap Job pulls `docker.io/alpine/kubectl:latest` by default. If your cluster cannot reach Docker Hub, mirror the image to your private registry and override it in `values.yaml`:

```yaml
redisAuth:
  passwordInit:
    image:
      registry: registry.example.com
      repository: mirrored/alpine-kubectl
      tag: "1.33.1"
```

Pinning a specific tag is also recommended if you need reproducible deployments.

## Enable auth on chart versions before 3.8.2

Chart versions older than 3.8.2 require manual configuration to enable Redis authentication:

1. Create the password Secret:

   ```bash
   kubectl create secret generic appsmith-redis-secret \
     --from-literal=redis-password='<your-password>' \
     -n appsmith-ee
   ```

2. Point the bundled Redis subchart at the Secret in `values.yaml`:

   ```yaml
   redis:
     auth:
       enabled: true
       existingSecret: appsmith-redis-secret
       existingSecretPasswordKey: redis-password
   ```

3. Set the authenticated Redis URL explicitly:

   ```yaml
   applicationConfig:
     APPSMITH_REDIS_URL: "redis://:<your-password>@<release-name>-redis-master.<namespace>.svc.cluster.local:6379"
   ```

   Replace `<release-name>` and `<namespace>` with your Helm release name and namespace.

   :::caution
   On charts older than 3.8.2, the password set in `applicationConfig` is stored in cleartext in the rendered ConfigMap and in your `values.yaml`. Upgrading to chart 3.8.2 or later avoids this: the password is injected by Secret reference instead. Remove the manual `APPSMITH_REDIS_URL` override after upgrading so the chart can manage the URL.
   :::

4. Apply the changes:

   ```bash
   helm upgrade -i appsmith-ee appsmith-ee/appsmith -n appsmith-ee -f values.yaml
   ```

## Troubleshooting

**Install fails with `redis.auth.password is set, which is only supported on the self-managed path`**

Either unset `redis.auth.password` and use a Secret instead (see [Bring your own password](#bring-your-own-password)), or set the full self-managed configuration (see [Self-manage the Redis password](#self-manage-the-redis-password)).

**Appsmith logs show `NOAUTH Authentication required` or `WRONGPASS`**

The password in the Secret doesn't match what Redis was started with, typically after editing the Secret manually. After changing the password, restart both Redis and Appsmith so they pick up the new value:

```bash
kubectl rollout restart statefulset appsmith-ee-redis-master -n appsmith-ee
kubectl rollout restart statefulset appsmith-ee -n appsmith-ee
```

**The bootstrap Job pod shows `ImagePullBackOff`**

Your cluster can't pull `docker.io/alpine/kubectl`. Mirror the image and override `redisAuth.passwordInit.image` as described in [Air-gapped and restricted networks](#air-gapped-and-restricted-networks).

## See also

- [Helm Chart](/getting-started/setup/instance-configuration/helm-chart#redis): Architecture and configuration reference for the Appsmith Helm chart.
- [External Redis](/getting-started/setup/instance-configuration/external-redis): Connect Appsmith to a Redis instance outside the cluster.
- [Chart parameters reference](https://github.com/appsmithorg/appsmith/tree/release/deploy/helm#parameters): Full list of configurable Helm values.
