---
description: What the Redis authentication change means for self-hosted Appsmith and how to upgrade for each deployment type.
---

# Secure Redis on self-hosted Appsmith

Appsmith uses Redis for session storage and caching. On some older self-hosted setups, the bundled Redis ran **without a password by default**, so a user who could reach it could read or write that data. Recent releases enable Redis authentication by default.

**Quick impact check:** if your Redis already requires a password, you are not affected. Otherwise, follow the section for your deployment.

## Docker / Docker Compose

Upgrade to **v2.0 or later**. Password authentication on the embedded Redis is enabled by default, for both new and existing installs, so there is no manual step. You can find the latest release on the [Appsmith releases page](https://github.com/appsmithorg/appsmith/releases).

If you are on a version older than v1.96, upgrade to **v1.99 first** (a required checkpoint), then move to v2.0 or later. See [Upgrade to Checkpoint Version](/getting-started/setup/instance-management/upgrade-to-checkpoint-version).

## Kubernetes (Appsmith Helm chart)

Upgrade to **chart 3.9.0 or later**, where the bundled Redis is password-protected by default.

**Upgrading alone is not enough if your `values.yaml` sets `redis.auth.enabled: false`.** Remove that override, since it keeps Redis unauthenticated. If you already manage a Redis password, you keep using it.

Full steps for every scenario: [Enable Redis Authentication](/getting-started/setup/installation-guides/kubernetes/enable-redis-auth).

## External or cloud-managed Redis

For AWS ElastiCache, Azure Cache for Redis, GCP Memorystore, or Redis Cloud, **enable authentication on the instance and connect with credentials**. The chart and container will not add it for you.

Provider-specific formats and steps: [Enable authentication for external Redis](/getting-started/setup/instance-configuration/external-redis#enable-authentication).

## How urgent is this?

It depends on who can access your Appsmith instance.

- **If your instance is publicly accessible with signups enabled, upgrade as soon as possible.** Anyone who can register and log in could reach Redis.
- **If your instance is internal only and signups are disabled**, the exposure is limited to trusted users, so you can accept the risk until a normal maintenance window.

If you have questions about upgrading or how this affects your deployment, reach out to support@appsmith.com.
