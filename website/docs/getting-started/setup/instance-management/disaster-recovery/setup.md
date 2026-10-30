---
title: Set Up Disaster Recovery
description: Prepare backups, configuration, infrastructure, and connectivity for recovering a self-hosted Appsmith installation.
---

# Set Up Disaster Recovery

Use this checklist to prepare a recovery environment for self-hosted Appsmith. Start with the [recovery objectives and responsibilities](/getting-started/setup/instance-management/disaster-recovery). Your infrastructure team should turn these requirements into deployment-specific procedures before the first DR exercise.

## 1. Record your deployment

Keep an inventory accessible outside the primary site:

- Appsmith edition, exact image version, and the Helm chart version and values or Docker Compose files that deploy it. Keep this configuration and any infrastructure definitions in version control, and keep secret values in your secret store.
- MongoDB, Redis, and any PostgreSQL services used by the deployment, including their versions, endpoints, and backup owners.
- Persistent volumes and their mount paths, storage classes, access modes, capacity, and restore procedures.
- DNS records, TLS certificates, ingress or gateway configuration, service mesh policies, and datasource network requirements.
- Recovery owners, access procedures, backup locations, and the criteria for declaring a failover.

Verify the licensing arrangements for the recovery environment before an exercise. Do not assume that creating a standby installation establishes its license entitlement.

## 2. Protect instance data and keys

Choose a recovery approach and test it as a complete procedure.

### Instance backups

Follow [Backup Instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance) to create an archive containing the Appsmith MongoDB database, configuration, and Git data. Set the backup frequency to match your RPO and monitor that backups complete and reach the recovery location.

The built-in [automatic backup schedule](/getting-started/setup/environment-variables#automatic-backups) is available on the plans identified in that reference. For other deployments, use the documented manual backup procedure or your infrastructure's backup tooling. Do not assume that automatic backups are configured simply because Appsmith is installed.

Git integration can help recover committed application definitions, but it does not replace instance backups of users, permissions, credentials, and configuration. Choose backup frequency from your RPO, even when your applications use Git.

:::warning Archive encryption and instance encryption are different
An encrypted instance archive requires the password chosen when creating that archive. An unencrypted archive requires the source instance's `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT` during restore. These instance keys protect stored datasource credentials; they are not a MongoDB login password.

`appsmithctl backup` creates an unencrypted archive when run non-interactively or without a terminal, including typical scheduled jobs. Setting `APPSMITH_BACKUP_ARCHIVE_PASSWORD` does not encrypt backups; that variable is for restores. Protect these archives at rest and in transit, and do not publish them as pipeline artifacts. See [Backup Instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance).
:::

Preserve the instance encryption password and salt in a secret store that is recoverable outside the primary site. Depending on your configuration, the values originate in Kubernetes Secrets or `/appsmith-stacks/configuration/docker.env`. Record which keys belong to each recovery point and test access without depending on the unavailable primary cluster.

### Subsystem and filesystem backups

If you use native database and storage backups, protect MongoDB and the **complete** Appsmith persistent filesystem, not just `/appsmith-stacks/data/backup/`. For on-premises storage, use your NAS, SAN, or filesystem provider's backup and restore tools. Preserve deployment configuration and secrets separately where they are not on that volume.

:::caution Coordinate database and filesystem recovery points
A storage snapshot alone is not proof of a recoverable Appsmith instance. Your database and storage owners must define how to capture consistent state, including any required pause in writes, and how to restore the matching keys and configuration. Do not copy live database files with a generic file-copy job and assume they form a valid database backup.
:::

For Kubernetes, [Volume Snapshots](https://kubernetes.io/docs/concepts/storage/volume-snapshots/) describes snapshot support for CSI-backed volumes. Confirm support and recovery behavior with your storage provider. For EFS, see [Backing up EFS file systems](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html).

Back up external PostgreSQL separately if your deployed authentication or workflow services use it; `appsmithctl` instance backups do not include that database. Assess Redis according to its role in your deployment. Cache and sessions are generally rebuildable, but losing them can log users out; Redis used for In-Memory Git needs additional recovery planning. See [Data criticality and backup considerations](/getting-started/setup/deployment-architecture#data-criticality-and-backup-considerations).

## 3. Keep recoverable copies outside the primary site

Keep backups in a location available when the primary cluster, storage system, or region is unavailable. Define retention independently of instance deletion and test that deleting a deployment cannot also remove its only recovery copy. Protect backup access and encryption keys against the failure scenarios in your plan.

For deployments using Amazon S3, follow [Sync Backups to S3](/getting-started/setup/instance-management/backup-and-restore/sync-backup-to-s3). This integration requires an active paid plan. Cross-region copies and retention policies are your infrastructure team's responsibility. AWS documents [S3 replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html), including the distinction between replication of new objects and copying existing objects.

:::caution S3 sync is not a general object-storage integration
The built-in integration documents AWS access key, secret key, bucket, and region settings. It does not expose a custom S3 endpoint setting. Do not assume an on-premises or S3-compatible object store works with it. For other destinations, use your own backup transfer tooling and validate retrieval and restore.
:::

Verify archive age, transfer completion, retention, and available storage. A successful backup on the primary volume does not show that the recovery site has a usable copy.

## 4. Prepare the recovery infrastructure

Your infrastructure team should provision, or document how to provision, the replacement hosts or cluster, storage, database services, and networking. Start recovery with the Appsmith version used to create the backup. Plan upgrades separately after recovery; do not use a DR incident to introduce an untested version change.

Use the [Installation Guides](/getting-started/setup/installation-guides) for the Appsmith deployment steps. For Kubernetes or EKS infrastructure, use your platform runbook and [Amazon EKS reliability guidance](https://docs.aws.amazon.com/eks/latest/best-practices/reliability.html).

Before declaring the site ready, verify that it can:

- Retrieve backups, images, configuration, and secrets without depending on the primary site.
- Mount the recovered storage with the permissions and access modes Appsmith requires.
- Reach its own recovered database services and the business datasources its apps use, including private endpoints, VPNs, proxies, and firewall allowlists.
- Reach identity providers, Git repositories, and any required outbound services. For connected deployments, see [Verify connectivity to cs.appsmith.com](/help-and-support/troubleshooting-guide/verify-cs-appsmith-connectivity).
- Accept traffic through the intended hostname, load balancer, gateway, and TLS configuration after validation.

:::warning Check egress as well as ingress
The recovery site may use different outbound IP addresses or private network paths. Preconfigure and test access to datasources from that site. A healthy Appsmith deployment can still have unusable applications if datasource firewalls allow only the primary site's addresses.
:::

Plan how traffic from your users reaches Appsmith at the recovery site. This covers DNS, the load balancer, TLS termination, and whichever ingress controller or service mesh routes requests to the Appsmith pods or hosts. Keep those routing manifests and the recovery hostnames with your deployment configuration, because the recovery site may use different hostnames and endpoints than the primary.

## 5. Maintain readiness

Record the exact recovery commands, resource names, namespaces, dependency order, secret delivery steps, and traffic changes for your deployment. Include a way to isolate the primary and prevent both sites from accepting writes or running scheduled work during a transition.

After changes to Appsmith, authentication, databases, storage, networking, or backup tooling, review and retest the runbook. Monitor backup failures and stale off-site copies. Validate both the database and filesystem restore, then record the measured RPO and RTO using the [recovery exercise checklist](/getting-started/setup/instance-management/disaster-recovery/restore#run-a-recovery-exercise).

## Helpful infrastructure resources

Use these upstream resources with your platform team's runbook. Select documentation for the versions and services you operate. These references describe infrastructure capabilities; they do not establish an Appsmith integration or guarantee that a cluster backup contains every Appsmith dependency. Check coverage, consistency, permissions, regional availability, and restore limitations before choosing a tool.

### Kubernetes and routing

| Resource | When it helps |
| --- | --- |
| [Kubernetes Volume Snapshots](https://kubernetes.io/docs/concepts/storage/volume-snapshots/) | Understand CSI snapshot prerequisites and how volume snapshots relate to persistent storage. Test database consistency separately. |
| [Operating etcd clusters for Kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/) | Plan control-plane backup and recovery for clusters where your team manages etcd. An etcd snapshot does not contain application volume data or external databases; managed services such as EKS manage their own control plane. |
| [Kubernetes Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) | Rebuild how user traffic reaches Appsmith: hostname, TLS, and HTTP routing. Use it with the documentation for the ingress controller or service mesh your cluster runs. |
| [Velero documentation](https://velero.io/docs/v1.18/) | Evaluate cluster-resource and volume backup tooling for cloud or on-premises Kubernetes. Use the version selector for your installation and validate provider/plugin support and application consistency. |

### Amazon EKS and AWS storage

| Resource | When it helps |
| --- | --- |
| [Amazon EKS reliability best practices](https://docs.aws.amazon.com/eks/latest/best-practices/reliability.html) | Plan reliability across the control plane, data plane, and applications. |
| [Amazon EKS backups with AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/eks-backups.html) | Review cluster-state and supported persistent-volume backup coverage, prerequisites, and limitations. Account for external databases and other resources separately. |
| [Backing up EFS file systems](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html) | Configure and test recovery of Appsmith persistent storage hosted on EFS. |
| [S3 replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html) | Plan copies of backup objects across buckets or regions, including handling objects that existed before replication was enabled. |
| [S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) | Evaluate retention controls that protect backup objects against deletion or overwrite. Choose retention deliberately and test how it affects cleanup. |

### Database and cache recovery

| Resource | When it helps |
| --- | --- |
| [MongoDB backup methods](https://www.mongodb.com/docs/manual/core/backups/) | Choose a native backup method appropriate to a self-managed MongoDB deployment. |
| [MongoDB Atlas restore status](https://www.mongodb.com/docs/atlas/backup/cloud-backup/restore-overview/) | Track snapshot restoration in Atlas when using Atlas-managed backups. |
| [mongorestore reference](https://www.mongodb.com/docs/database-tools/mongorestore/) | Interpret logical restore output, errors, and tool options. |
| [Redis persistence](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/) | Decide whether and how to persist Redis data based on its role, and understand RDB/AOF recovery trade-offs. |
| [Redis INFO reference](https://redis.io/docs/latest/commands/info/) | Inspect loading, persistence, replication, memory, and eviction indicators during recovery. |

For the operational checks to perform after data recovery, see [MongoDB restore checks](/getting-started/setup/instance-management/disaster-recovery/restore#check-mongodb-restore-status) and [Redis and cache checks](/getting-started/setup/instance-management/disaster-recovery/restore#check-redis-and-cache-recovery).
