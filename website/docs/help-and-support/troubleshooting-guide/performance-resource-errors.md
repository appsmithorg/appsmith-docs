# Performance and Resource Errors

This page shows how to resolve common performance and resource problems on self-hosted Appsmith, including instances running out of memory, high CPU, slow apps and queries, gateway timeouts, and scaling.

### Appsmith server is taking too long to respond

<Message
 messageContainerClassName='error'
messageContent='Appsmith server is taking too long to respond. Please try again after some time'></Message>

#### Cause

The Appsmith server is unreachable or crashing. A common root cause on self-managed deployments is that no persistent volume is mounted to the Appsmith pod, so the instance is left in a bad state on restart. Missing readiness and liveness probes make this worse by keeping unhealthy pods in rotation.

#### Solution

- Mount a persistent volume to the Appsmith pod so configuration and data survive restarts. See [Self-hosting Best Practices](/getting-started/setup/best-practices) and [High Availability Setup on Kubernetes](/getting-started/setup/installation-guides/kubernetes/configure-high-availability).
- Configure `readinessProbe` and `livenessProbe` so unhealthy pods are restarted and removed from rotation. If you deployed with your own manifests rather than the Appsmith Helm chart, add these probes to your deployment.
- Collect the server logs covering the time of the crash (not just after the restart) and share them with support. See [How to Get Container Logs](/getting-started/setup/instance-management/how-to-get-container-logs).

### Instance runs out of memory (OOM) or fails health checks

#### Cause

When the Appsmith instance is undersized, the backend can start and then be terminated mid-startup, often because a health endpoint marks it unhealthy or because the process is killed under memory pressure (OOM). This is common on platforms with strict health checks such as AWS Elastic Beanstalk and AWS ECS.

#### Solution

- Increase the memory allocated to the instance. Support has resolved health-check and OOM cases by raising available memory.
- Ensure the instance meets the minimum size: `t3.large` or equivalent (2 vCPU, 8 GB of memory). See [Self-hosting Best Practices](/getting-started/setup/best-practices).
- On platforms with health checks, increase the failed-health-check threshold or extend the health-check timeout so the service has time to stabilize before being marked unhealthy.

### High CPU and memory usage with few users

#### Cause

CPU and memory can spike to 100% even with very few active users. In some cases this has been tied to a specific operation triggering excessive memory usage on an undersized instance.

#### Solution

- Confirm the instance meets the minimum size of `t3.large` or equivalent (2 vCPU, 8 GB of memory). Setups running on 2 vCPU / 4 GB are below this recommendation. See [Self-hosting Best Practices](/getting-started/setup/best-practices).
- For spikes tied to a specific operation, increase the memory available to the instance and share the server logs for the affected time window with support so the operation driving the spike can be identified. See [How to Get Container Logs](/getting-started/setup/instance-management/how-to-get-container-logs).

### App or page loads slowly

#### Cause

Slow app and page loads are frequently caused by queries that fetch large datasets, by multiple actions running at once on page load, or by too many widgets on a single page. Backend query latency and client-side scripting both contribute to the total time.

#### Solution

- Enable server-side pagination so only the required rows are fetched at a time. See [Server-side Pagination in Table](/build-apps/how-to-guides/Server-side-pagination-in-table) and [Set up Server-side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List).
- Defer actions until the data is actually needed (just-in-time), rather than running many queries at once on page load.
- Split heavy pages so a single page does not load too many widgets at once.
- Optimize the underlying database queries, especially when many parameters drive a complex query.
- If the problem persists, share your Appsmith version (append `/info` to your instance URL), a screen recording, and a browser performance profile of the page with support.

### Scaling to multiple replicas or high availability

#### Cause

Running multiple Appsmith replicas without shared storage leads to restarts and inconsistent behavior. Configuration is written to `/appsmith-stacks/configuration/docker.env` on the filesystem; if that is not in sync across containers, the result ranges from unexpected behavior to data loss. Running multiple replicas against unshared local storage is not a tested or supported configuration.

#### Solution

- Before scaling to more than one replica, set up shared RWX storage (for example, NFS/NAS, or AWS EFS on Fargate) that all pods read from and write to. See [High Availability Setup on Kubernetes](/getting-started/setup/installation-guides/kubernetes/configure-high-availability) and [Self-hosting Best Practices](/getting-started/setup/best-practices).
- Use external MongoDB and Redis for multi-replica setups. See [Set up External MongoDB and Redis](/getting-started/setup/instance-configuration/custom-mongodb-redis) and [Set up External Redis](/getting-started/setup/instance-configuration/external-redis).
- Do not scale a single instance that uses only unshared local storage; migrate to shared storage first. See [Migrate Helm deployment from non-HA to HA](/getting-started/setup/installation-guides/kubernetes/migrate-non-ha-to-ha-helm).

### MongoDB or Redis resource pressure causes slowness

#### Cause

Appsmith depends on MongoDB (system database) and Redis (caching and session data). Platform-wide slowness is often traced to these dependencies: MongoDB memory utilization sitting consistently near its limit, MongoDB pod restarts caused by running on spot instances, or Redis spending too long writing to disk on slow or overloaded storage.

#### Solution

- Increase the memory limit for the MongoDB container when utilization is consistently high.
- Run MongoDB and Redis on on-demand (reserved/dedicated) instances rather than spot instances, which are terminated unexpectedly and cause restarts. See [Self-hosting Best Practices](/getting-started/setup/best-practices).
- For Redis disk-write latency, set explicit CPU/memory limits and move Redis to a faster storage tier.
- To diagnose, check the status and logs of the MongoDB and Redis pods, and test Redis responsiveness from the Appsmith pod. See [How to Get Container Logs](/getting-started/setup/instance-management/how-to-get-container-logs).

### Large audit logs consuming disk and slowing the instance

#### Cause

The audit log collection can grow very large over time, consuming disk space and impacting performance.

#### Solution

- Export old audit logs first if you may need to reference them, then delete the old records from the database. Clearing the records has no impact on the system. For accessing and exporting audit log data, see [Audit Logs](/advanced-concepts/audit-logs) and [Export Audit Logs](/build-apps/how-to-guides/export-audit-logs).
- For automatic cleanup, see the audit log retention steps in [Monitoring and Audit Log Errors](/help-and-support/troubleshooting-guide/monitoring-audit-log-errors).
