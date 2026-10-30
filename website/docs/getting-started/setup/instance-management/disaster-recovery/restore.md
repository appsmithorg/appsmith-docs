---
title: Restore and Validate Recovery
description: Recover a self-hosted Appsmith installation, validate applications before redirecting traffic, and test your disaster recovery runbook.
---

# Restore and Validate Recovery

Use this sequence to build the recovery runbook for your self-hosted Appsmith deployment. Complete [DR setup](/getting-started/setup/instance-management/disaster-recovery/setup) first. Your infrastructure team must supply the commands for its databases, storage, orchestration, and routing; the exact service names and stop/start operations depend on your deployment.

:::warning Restoring an instance replaces its state
Treat the destination as a replacement for the source instance. A restore can overwrite configuration, including authentication and SSO settings. Do not restore a production backup into a shared test or UAT instance and expect its existing settings or data to remain intact. Use a dedicated recovery destination, preserve any destination state you need, and keep it isolated from normal traffic until validation is complete.
:::

## 1. Assess the incident and isolate the primary

Determine whether recovery of one component is sufficient or whether the whole instance must move to another site. Record the selected recovery point, expected data loss, incident owner, and failover decision.

Before activating a replacement, remove the primary from user traffic and prevent it from accepting writes or executing background work, even if it later becomes reachable. Your team might stop the deployment, disable its ingress, or isolate its network access according to the failure scenario. Removing DNS alone does not stop existing sessions, direct access, or background jobs.

For a drill, use a separate hostname and isolated dependencies. Prevent scheduled workflows, webhooks, and application queries from producing unintended effects in production systems.

:::warning Avoid two active copies of the same recovered instance
Do not let the old and recovered sites accept independent writes or execute the same scheduled work. The backup and restore procedure does not reconcile divergent changes or establish an active-active deployment. Include a way to keep the primary isolated when it returns.
:::

## 2. Recover infrastructure and dependencies

Recover the platform resources, network access, secret store access, and storage using your infrastructure runbook. Keep the replacement outside normal user traffic. Use a dedicated destination running the same Appsmith version as the backup, with compatible database and deployment configuration.

Choose the path you prepared and tested:

| Recovery path | Sequence |
| --- | --- |
| Appsmith instance archive | Prepare the destination Appsmith installation and required database services. Copy the archive to the destination, then use the instance restore procedure below. Recover any additional data stores separately. |
| Native subsystem backups | Keep application services stopped while your database and storage owners restore MongoDB, the matching persistent filesystem and instance keys, and any additional data stores. Update destination connections before starting application services. |

Restore any PostgreSQL database required by your deployed authentication or workflow services before enabling those features. Bring up Redis with the destination's intended connection and authentication settings. Coordinate startup so that dependent services use the recovered data stores rather than accidentally reconnecting to the primary.

:::caution Do not restore the same state twice without a plan
An instance archive restore and a native MongoDB/filesystem restore are different recovery paths. Applying them in an arbitrary order can overwrite the state you just recovered. Document which backup is authoritative for each component and the recovery points that belong together.
:::

## 3. Restore Appsmith instance data

For an instance archive, follow [Restore Instance](/getting-started/setup/instance-management/backup-and-restore/restore-instance) for Docker or Kubernetes. That guide covers copying the archive, running `appsmithctl restore`, supplying the archive password, and restarting the Appsmith server or pods as required by your deployment.

For automated recovery on Appsmith **v2.4.1 or later**, use [Automate restores](/getting-started/setup/instance-management/backup-and-restore/restore-instance#automate-restores). Select an exact backup filename and inject the required secrets through your secret management process. Make the pipeline stop on failure and verify completion before proceeding.

:::warning Preserve the source instance encryption keys
An encrypted archive carries the instance encryption keys and requires its archive password. An unencrypted archive needs the original `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT`. A native database restore also requires matching instance keys. Missing or incorrect keys can leave restored datasource credentials unusable. A completed restore command alone does not verify that the credentials can be decrypted and used.
:::

For subsystem recovery, follow the database and storage procedures you tested during setup. See [Restore Database](/getting-started/setup/instance-management/backup-and-restore/restore-database) for the Appsmith MongoDB procedure. It does not recover the filesystem or other data stores for you.

## 4. Check site-specific settings and start services

Review the restored configuration against the recovery-site inventory before directing traffic to it. Reapply destination-specific values through the appropriate Appsmith settings or deployment configuration:

- Database endpoints and credentials, ensuring every service uses the intended recovered data store.
- Public hostname, TLS certificates, ingress, load balancer, and service mesh routes.
- SSO identity-provider settings and callback URLs, including access through the intended recovery hostname.
- Datasource endpoints, private connectivity, firewall allowlists, and any separate business-database failover.
- Git access, SMTP, outbound proxy settings, and licensing configuration as applicable.

Keep the **source instance encryption keys** when applying destination configuration; replacing them with newly generated destination keys prevents decryption of restored credentials.

Start or restart Appsmith and its configured supporting services in the order recorded in your runbook. Confirm that dependencies are available and inspect [container logs](/getting-started/setup/instance-management/how-to-get-container-logs) for startup, connection, authentication, or decryption errors. If a restore fails after modifying data, keep the destination isolated and investigate or rebuild it before retrying; it may be partially restored.

## 5. Validate before redirecting traffic

Validate through the hostname and network path users will actually use:

| Check | Evidence of recovery |
| --- | --- |
| Login and authorization | Expected users can sign in, including through SSO where configured, and retain the expected permissions. |
| Instance state | Expected workspaces, applications, and recent changes are present for the selected recovery point. |
| Datasource credentials and connectivity | Representative queries succeed from the recovery site using restored credentials. Use controlled test data for write operations. |
| Application behavior | Critical apps work in deployed mode; authorized developers can open and edit apps. |
| Git and persistent artifacts | Git operations, certificates, and other required filesystem artifacts work as expected. |
| Workflows and schedules | If used, workflow services and required state are available. Confirm how interrupted work will be handled before enabling execution; avoid duplicate business actions. |
| Monitoring | Health checks and logs show stable operation, and alerts target the replacement environment. |

After validation, redirect DNS, load balancer, or gateway traffic using your infrastructure runbook. Allow for DNS caching and existing connections, and repeat critical checks through the production hostname. Confirm the old site remains isolated.

Record when users can resume work, the age of the recovered data, and any lost or incomplete operations. Resume or configure backups for the recovered instance, verify an off-site copy, and confirm monitoring is active.

## 6. Plan failback

Once the replacement accepts writes, it contains new state that the old site may not have. Treat it as authoritative. Returning to the original site requires a planned transfer of that state, another validation step, and a controlled traffic change.

:::warning Do not fail back by restoring an old backup
Switching traffic to the original site without transferring changes made during recovery can lose data. Keep the original site isolated until you have a tested failback plan, including how to stop writes, transfer current data and keys, and avoid duplicate scheduled work.
:::

## Run a recovery exercise

Run an exercise before relying on the recovery plan and after material deployment changes. Agree on the scope, owners, maintenance window, and rollback procedure in advance. Use a dedicated environment and controlled external systems for the initial test; test real traffic changes separately during an approved exercise.

Record the following evidence:

- Failure scenario and target RPO/RTO.
- Backup identity, creation time, transfer completion, and the keys or secret references required to restore it. Do not put secret values in the report.
- Whether recovery completed without access to the primary cluster, its storage, or a live configuration export from it.
- Start and completion times for provisioning, data recovery, startup, validation, and traffic changes.
- Validation results for applications, datasource queries, SSO, Git, and any workflow services in use.
- Actual recovered data point and elapsed time to usable service, compared with the targets.
- How the primary was isolated, how duplicate work was prevented, and how test resources were cleaned up.
- Confirmation that the recovered instance can create a new usable backup and that the failback plan preserves subsequent changes.

Use the results to update your runbook and address gaps. A backup job completing successfully, or a pod reporting ready, is only one part of a successful DR exercise.
