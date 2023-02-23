---
description: Appsmith is open source and very easy to deploy on your machine.
slug: /getting-started/setup
sidebar_position: 3
---

# Self Hosting

You can host and manage Appsmith directly on your server, giving you complete control over your data's privacy, security, and integrity.

You can use Appsmith in two ways:

1. **[Appsmith Cloud](https://appsmith.com)** - It's a perfect solution for users who don't have an on-premise infrastructure. Appsmith only acts as a proxy layer and does not store any data returned from your API endpoints or database queries. See [Security](/product/security)
2. **Self-hosted Appsmith** - For users who want to deploy Appsmith in their infrastructure, manage the instance, updates, etc.


## Self-hosted instance

Deploying Appsmith on your infrastructure makes it easier to manage [updates](/getting-started/setup/instance-management), create [backups](/getting-started/setup/instance-management/appsmithctl), and scale your infrastructure as per requirements.

The self-hosted version isn't air-gapped and needs Internet access to reach Appsmith cloud services (cs.appsmith.com) for a few features to work, such as fetching release notes, more than three private repositories for git version control, templates, business license validity checks, etc. If you want a fully air-gapped deployment, please write to [**support@appsmith.com**](mailto:support@appsmith.com).

:::info
Appsmith collects [usage data](/product/telemetry), and you can [disable](/product/telemetry#disable-telemetry) this in your instance configuration file.
:::

Deploying Appsmith as a self-hosted instance has the following advantages:

- **Security**: You get to keep your data on-premise. It also ensures that your API keys or security credentials never leave your server and have the same security rules applied to any other app. The applications you build would be on your infrastructure, inside your virtual private networks/VPC. You may host it on internal networks behind a firewall for a defined set of users. You may also configure your [SSL and custom domain](/getting-started/setup/instance-configuration/custom-domain).

 Appsmith provides a [secure environment](/product/security) for cloud-hosted and self-hosted instances by encrypting sensitive information like database credentials using [AES 256 Encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard). 

- **Local database**: A self-hosted instance allows you to connect with a database running on the same machine/intranet and use it to build apps.

- **Storage**: Appsmith uses MongoDB to store app data and Redis to store session information and non-critical caches. You can also connect to [external MongoDB or Redis](/getting-started/setup/instance-configuration/custom-mongodb-redis) servers hosted on your infrastructure.

- **Updates**: You can configure more flexible updates, schedules, and other maintenance activities for a self-hosted instance. You can follow the steps to configure [maintenance window and schedule auto updates](/getting-started/setup/instance-management/maintenance-window).


## System Requirements

It's simple and quick to deploy Appsmith. Please ensure that your system has the following recommended configuration for optimal performance before moving forward with the deployment:

* Two virtual CPU \[vCPU]
* A four GB of memory

:::info
On Amazon Web Services(AWS), a [t3.medium](https://aws.amazon.com/ec2/instance-types/t3/) instance would be ideal for installing Appsmith.
:::


## Deployment options

You can choose from various popular platforms to deploy Appsmith, like Docker, Kubernetes, AWS, Digital Ocean, and more. Appsmith officially supports [docker-based installations](/getting-started/setup/installation-guides/docker/).

With a variety of [deployment options](./installation-guides/README.md), choose the one that best suits you.

:::info
[DigitalOcean](https://marketplace.digitalocean.com/apps/appsmith) or [AWS](https://aws.amazon.com/marketplace/seller-profile?id=f12088a7-c7be-46e5-8c5d-9cd7a16c8c1e) offers a one-click deployment from their marketplaces.
:::

## Configure and manage instance

You can [configure](/getting-started/setup/instance-configuration) and [manage](/getting-started/setup/instance-management) the self-hosted instance if you are a [Super Admin](/getting-started/setup/instance-configuration/admin-settings) user.

* [Instance authentication](/getting-started/setup/instance-configuration/authentication/) to onboard your existing user base.
* [Email configuration](/getting-started/setup/instance-configuration/email/) to invite users and notify admins.
* [Sign-up restriction](/getting-started/setup/instance-configuration/disable-user-signup) to turn off signing up using the signup form or OAuth buttons, ensuring that only users you invite can signup.
* [SSL configuration](/getting-started/setup/instance-configuration/custom-domain) to make Appsmith available on a custom domain
* [Database backup](/getting-started/setup/instance-management/appsmithctl#export-database) to backup Appsmith's database.
* [Backup Instance](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance) to create a backup archive of the Appsmith instance.

:::info
Do you need help deploying Appsmith? Check out the [deployment troubleshooting guide](/help-and-support/troubleshooting-guide/deployment-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/). If you know the error and want to reinstall, **delete** the installation and templates folder and execute the script again.
:::