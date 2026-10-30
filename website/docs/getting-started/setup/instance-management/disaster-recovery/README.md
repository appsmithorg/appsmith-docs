---
title: Disaster Recovery
description: Plan disaster recovery for self-hosted Appsmith, including recovery objectives, responsibilities, and data dependencies.
---

# Disaster Recovery

Disaster recovery (DR) is the process of restoring your Appsmith service after an event such as data loss, storage failure, or loss of a hosting site. This guide describes the Appsmith components you need to protect and how to prepare and validate recovery for a self-hosted installation.

## Responsibilities

For self-hosted Appsmith, your organization owns the disaster recovery plan for its environment. Appsmith provides deployment guidance, backup and restore tools, and information about how its services and data stores interact. Your infrastructure team designs, operates, and tests the infrastructure those services depend on, working with your cloud, database, and storage providers as needed.

| Area | Responsibility for a self-hosted deployment |
| --- | --- |
| Appsmith services | Appsmith documents service dependencies, configuration, and product backup and restore procedures. Appsmith support can help investigate product issues using logs and configuration details. |
| Infrastructure | Your team provisions and recovers clusters or hosts, databases, storage, networking, identity permissions, and access to secrets and backup encryption keys. |
| Traffic and connectivity | Your team configures DNS, load balancers, ingress, service mesh routing, TLS, firewall rules, and connectivity to application datasources at the recovery site. |
| Recovery operations | Your team chooses recovery objectives, schedules and monitors backups, maintains the runbook, decides when to fail over, and validates recovery and failback. |

Infrastructure choices vary across deployments. Use the Appsmith recovery requirements in this guide to build a runbook for your topology; provider-specific provisioning, replication, and failover procedures belong in your organization's infrastructure runbook. Appsmith cannot provide or validate a recovery procedure for every combination of customer-managed infrastructure. Arrange any assistance you need for planning or testing in advance, so that executing your runbook does not depend on scheduling a support session during an incident.

This guide covers **self-hosted** installations. For Appsmith Cloud or Managed Hosting, confirm the recovery arrangements for your service with Appsmith.

## Choose recovery objectives

Set these objectives before choosing a backup or replication strategy:

- **Recovery point objective (RPO):** The maximum acceptable loss of recent data, measured in time. For backup-based recovery, account for the age of the last usable backup available at the recovery site, including transfer delays and failed backup jobs.
- **Recovery time objective (RTO):** The maximum acceptable time to restore usable service. Include incident assessment, infrastructure provisioning, data transfer and restore, service startup, traffic changes, and application validation.

For example, taking a backup every 24 hours does not by itself ensure a 24-hour RPO: the latest backup might fail or might not have reached the recovery site. Measure both objectives in a recovery exercise with representative data and infrastructure.

:::caution Recovery objectives are deployment-specific
This guide does not establish an RPO or RTO guarantee for self-hosted Appsmith. Recovery time and data loss depend on your backup policy, data volume, infrastructure availability, and tested procedures.
:::

## Choose a recovery approach

| Approach | How data reaches the recovery environment | Considerations |
| --- | --- | --- |
| Backup and restore | Create an instance backup, copy it outside the primary failure domain, and restore it to a replacement installation when needed. | A starting point for many deployments. Backup frequency and transfer time affect RPO; provisioning and restore time affect RTO. |
| Recovery using subsystem backups | Back up MongoDB, the complete Appsmith persistent filesystem, and any other required data stores using their native tools. | Your team must coordinate recoverable database and filesystem state, preserve instance encryption keys, and test the complete restore. |
| Replication across sites | Your infrastructure replicates the required database and filesystem state to another site. | Requires a separate architecture and operational plan for consistency, replication lag, promotion, and preventing conflicting writes. |

:::warning A second installation does not automatically synchronize
Installing Appsmith in a DR cluster does not establish replication with production. With backup-based DR, the recovery environment reflects the backup you last restored. S3 backup uploads transfer archives; they do not continuously synchronize a running Appsmith instance. Database and filesystem replication must be configured and operated separately by your infrastructure team.
:::

High availability (HA) and DR address different failure scenarios. Multiple Appsmith replicas using the same databases and storage can improve availability, but those replicas still depend on the shared services. Protect those services and plan for failures beyond their availability zone, cluster, or site. See [High Availability on Kubernetes](/getting-started/setup/installation-guides/kubernetes/configure-high-availability).

:::caution Replication does not replace backups
Replication can also copy accidental deletions or corrupted state. Retain recoverable historical backups even when you replicate between sites. Two standalone Appsmith containers with their own embedded databases do not become an HA cluster simply by running together; use the documented HA architecture when multiple replicas must serve traffic.
:::

## Identify what you must recover

| Component | Recovery requirement |
| --- | --- |
| MongoDB | Recover Appsmith applications, users, permissions, datasource definitions, and other instance state. This is Appsmith's primary data store. |
| Instance encryption keys | Preserve the source instance's `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT`. Stored datasource credentials require the matching values. |
| Persistent filesystem | Protect the complete `/appsmith-stacks` filesystem, including configuration, Git data, certificates, and other deployment-specific artifacts. An instance archive covers Appsmith-managed data, not every infrastructure artifact. |
| Additional data stores | Recover PostgreSQL when your deployed SSO or workflow architecture uses it. Determine whether Redis is used only for cache and sessions or also for [In-Memory Git](/getting-started/setup/instance-configuration/in-memory-git). |
| Deployment configuration | Recover the Appsmith image version, Helm chart or Compose configuration, secret references, and infrastructure manifests needed to rebuild the environment. |
| Application datasources | Recover the external databases and APIs that your apps use through their own recovery plans, and verify that Appsmith can reach them from the DR site. |

For component details, see [Deployment Architecture](/getting-started/setup/deployment-architecture#data-criticality-and-backup-considerations). Dependencies vary with your Appsmith version and enabled features; inventory the services in your actual deployment.

:::warning An Appsmith backup does not back up your business databases
An instance backup protects Appsmith's configuration and application state. It does not back up the external databases or APIs your applications query. Restoring the Appsmith login page is not sufficient evidence that your business applications have recovered.
:::

## Next steps

1. [Set up disaster recovery](/getting-started/setup/instance-management/disaster-recovery/setup): Protect data, prepare infrastructure, and maintain readiness.
2. [Restore and validate recovery](/getting-started/setup/instance-management/disaster-recovery/restore): Build a failover runbook, test applications, and plan failback.
3. [Helpful infrastructure resources](/getting-started/setup/instance-management/disaster-recovery/setup#helpful-infrastructure-resources): Find Kubernetes, EKS, storage, MongoDB, and Redis documentation for your platform team.
