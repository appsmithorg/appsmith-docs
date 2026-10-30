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

### Check MongoDB restore status

Use the status source that matches the restore method:

| Restore method | What to check |
| --- | --- |
| Appsmith instance or database restore | Capture the restore command's output and exit status. Review database restore errors before starting validation. Output from a command run with `kubectl exec` may be in your terminal or runner logs rather than the pod's normal logs. |
| Native logical restore with `mongorestore` | Wait for the process to finish, inspect its final successful/failed document summary, and investigate errors or unexpected skipped namespaces and index failures. The [mongorestore reference](https://www.mongodb.com/docs/database-tools/mongorestore/) explains that duplicate-key and document-validation errors can allow processing to continue by default; do not infer success from progress output alone. |
| MongoDB Atlas snapshot restore | Track the restore job in Atlas using [View Status of Snapshot Restorations](https://www.mongodb.com/docs/atlas/backup/cloud-backup/restore-overview/). Verify the destination cluster and recovery point, and wait for the job to complete before allowing application traffic. |

Once the restore completes, have your database owner connect to the **recovery** database using the approved authenticated connection. The following read-only `mongosh` checks are examples; replace `APPSMITH_DATABASE_NAME` with the actual Appsmith database name:

```javascript
db.runCommand({ ping: 1 })
db.getSiblingDB("APPSMITH_DATABASE_NAME").runCommand({ dbStats: 1 })
```

MongoDB's [ping command](https://www.mongodb.com/docs/manual/reference/command/ping/) checks responsiveness, while [dbStats](https://www.mongodb.com/docs/manual/reference/command/dbstats/) reports database statistics. Compare expected collections and document counts with the selected recovery point, and check representative records. For replica-set deployments, your database owner can also inspect [rs.status()](https://www.mongodb.com/docs/manual/reference/method/rs.status/) to confirm expected member health and roles before enabling writes. Use provider monitoring where direct administrative commands are restricted.

:::caution Database availability is not restore completeness
A responsive MongoDB server, healthy replica set, or plausible document count does not prove every collection, index, or credential was restored correctly. Confirm the restore job completed without unresolved errors, then validate Appsmith users, apps, permissions, and datasource credentials. Do not retry a restore into a partially populated database without following the database owner's cleanup or rebuild procedure.
:::

## 4. Check site-specific settings and start services

Review the restored configuration against the recovery-site inventory before directing traffic to it. Reapply destination-specific values through the appropriate Appsmith settings or deployment configuration:

- Database endpoints and credentials, ensuring every service uses the intended recovered data store.
- Public hostname, TLS certificates, ingress, load balancer, and service mesh routes.
- SSO identity-provider settings and callback URLs, including access through the intended recovery hostname.
- Datasource endpoints, private connectivity, firewall allowlists, and any separate business-database failover.
- Git access, SMTP, outbound proxy settings, and licensing configuration as applicable.

Keep the **source instance encryption keys** when applying destination configuration; replacing them with newly generated destination keys prevents decryption of restored credentials.

Start or restart Appsmith and its configured supporting services in the order recorded in your runbook. Confirm that dependencies are available and inspect [container logs](/getting-started/setup/instance-management/how-to-get-container-logs) for startup, connection, authentication, or decryption errors. If a restore fails after modifying data, keep the destination isolated and investigate or rebuild it before retrying; it may be partially restored.

### Check Redis and cache recovery

Decide how to recover Redis from its role in your deployment, rather than treating every Redis instance as disposable:

| Role or condition | Recovery consideration |
| --- | --- |
| Cache and sessions | A fresh cache may be acceptable under your runbook, but users may need to sign in again. Expect additional database/API load and slower requests while caches repopulate; monitor before restoring full traffic. |
| In-Memory Git | Inventory the dedicated Redis endpoint and `APPSMITH_REDIS_GIT_URL`. Cached repositories and branch metadata need recovery planning. Verify remote access and branch state using the [In-Memory Git guide](/getting-started/setup/instance-configuration/in-memory-git); a fresh clone is not proof that all previous local state survived. |
| Persistence or replication enabled | If you rely on Redis persistence, confirm the intended snapshot or AOF loaded successfully. Check the expected primary/replica roles and replication state for your topology. See [Redis persistence](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/). |
| Connection or authentication errors | Verify the destination endpoint, TLS, credentials, and client configuration. A restored configuration may refer to source-site values; make sure Appsmith and Redis agree before sending users to the site. |

From an approved Redis client connection with the required permissions, use [PING](https://redis.io/docs/latest/commands/ping/) to test responsiveness and the following [INFO](https://redis.io/docs/latest/commands/info/) sections to inspect recovery:

```text
PING
INFO persistence
INFO replication
INFO memory
INFO stats
```

Check that data loading has finished (`loading:0`), review persistence errors if persistence is configured, and confirm the intended replication role. Watch memory use, eviction counters, and errors as traffic returns. Available fields and commands vary by Redis version and managed service; use provider metrics when commands are restricted. A `PONG` response alone does not validate data, application permissions, or successful Git operations.

:::warning Do not flush Redis as a general recovery step
Avoid blanket cache-clearing operations such as `FLUSHALL` or `FLUSHDB`. They can remove sessions, Git metadata, or other data used by the deployment. Any reset must target an identified instance and database, with a documented recovery plan and coordination with its owner. Keep test and DR clients from accidentally connecting to production Redis.
:::

## 5. Validate before redirecting traffic

Validate through the hostname and network path users will actually use:

| Check | Evidence of recovery |
| --- | --- |
| Login and authorization | Expected users can sign in, including through SSO where configured, and retain the expected permissions. |
| Instance state | Expected workspaces, applications, and recent changes are present for the selected recovery point. |
| MongoDB recovery | The restore operation completed without unresolved errors, the expected database state is present, and the destination topology is healthy. |
| Redis and cache behavior | Destination connections work, loading is complete, expected sessions/Git behavior is verified, and cache warm-up does not overload dependencies. |
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
