---
description: Guidance for planning CPU, memory, and disk capacity for self-hosted Appsmith deployments.
---

# Infrastructure and capacity planning

Appsmith can provide baseline infrastructure guidance, but exact sizing depends heavily on the applications you build and how those applications are used. Appsmith is an application development platform, so two environments with the same number of users can have very different resource profiles.

## What affects resource requirements

When planning capacity, consider factors such as:

- Number and complexity of apps
- Query and API volume
- Page load frequency and concurrency
- Size of datasets returned to the browser
- Use of JavaScript transformations, workflows, and integrations
- Authentication, Git, audit and logging, and other enterprise features
- High availability requirements and backup or retention policies

## How deployment architecture affects sizing

Deployment architecture significantly impacts sizing requirements.

### Docker-based deployments

For Docker-based deployments, sizing depends on whether **MongoDB**, **Redis**, and **PostgreSQL** are externalized services or running locally within the deployment stack:

- **Externalized or managed services** — If MongoDB, Redis, and PostgreSQL run outside the Appsmith container (for example, MongoDB Atlas, Amazon ElastiCache, or Amazon RDS), Appsmith application containers generally require fewer and more predictable resources.
- **Services in the same Docker environment** — If these services run inside the same container or compose stack as Appsmith, overall CPU, memory, and disk requirements are higher and can vary substantially depending on workload, data growth, logging, and retention policies.

For more information on externalizing data stores, see [Custom MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis), [External Redis](/getting-started/setup/instance-configuration/external-redis), and [External PostgreSQL](/getting-started/setup/instance-configuration/external-postgresql-rds).

### Kubernetes and production deployments

For production environments where scalability and availability are important, **Kubernetes** is the recommended deployment model because it allows Appsmith services and dependencies to scale more cleanly. For more information, see the [Kubernetes installation](/getting-started/setup/installation-guides/kubernetes) guide and [Deployment Architecture](/getting-started/setup/deployment-architecture).

## Baseline starting points

Appsmith’s current self-hosting guidance recommends **2 vCPU** and **8 GB of memory** as a starting point for standard deployments. The [AWS AMI](/getting-started/setup/installation-guides/aws-ami) guide lists **`t3.large`** or **`t3a.large`** as the minimum instance size (2 vCPU, 8 GB memory).

These recommendations should generally be viewed as **entry-level baselines** suitable for:

- Testing and proof-of-concept environments
- Evaluation environments
- Low-traffic workloads

They are not a guarantee of capacity for production use with sustained activity or heavy application workloads.

For production environments with sustained activity or higher CPU utilization, consider newer-generation instance families with stronger CPU performance. **T3** instances use burstable CPU credits and can become a bottleneck under heavier or sustained workloads.

## Recommended approach

Follow this workflow when planning capacity for a self-hosted Appsmith deployment:

1. **Choose a deployment model** — Start with the documented baseline for a non-HA deployment (for example, Docker or a single VM), or use [Kubernetes](/getting-started/setup/installation-guides/kubernetes) for production and high availability requirements.
2. **Decide on supporting services** — Determine whether MongoDB, Redis, and PostgreSQL will be externalized or hosted locally with Appsmith.
3. **Run a pilot** — Deploy using representative applications, data sources, and expected concurrent usage patterns.
4. **Monitor utilization** — Track CPU, memory, disk utilization, database growth, Redis usage, API latency, and application and page load times.
5. **Scale on observed workload** — Adjust capacity based on measured usage rather than named user counts alone.
6. **Load-test before production** — For larger or business-critical deployments, use a Kubernetes or HA architecture and conduct load testing before finalizing capacity.

:::caution User count is not a reliable sizing metric
Avoid presenting a fixed VM or instance size as guaranteed for a given user count. User count alone does not predict resource needs. **Concurrent active usage** and **application workload** are more important indicators when sizing infrastructure.
:::

## See also

- [Self-hosting Best Practices](/getting-started/setup/best-practices) — Platform selection, HA, security, and operations
- [Deployment Architecture](/getting-started/setup/deployment-architecture) — Components and data flow
- [Helm Chart — Planning your deployment](/getting-started/setup/instance-configuration/helm-chart#planning-your-deployment) — Kubernetes architecture decisions before install
- [In-Memory Git (Redis-backed)](/getting-started/setup/instance-configuration/in-memory-git) — Additional memory and Redis sizing for Git workloads
