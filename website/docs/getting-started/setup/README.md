---
description: Appsmith is open source and very easy to deploy on your machine.
slug: /getting-started/setup
sidebar_position: 3
---

# Self Hosting

Self-hosting is hosting and managing Appsmith directly on your server, giving you complete control over your data and how it's used.

When you are just starting to use Appsmith, there are two options -
1. **Appsmith Cloud** - Easy solution for the users who don't have their infrastructure. YOu can sign up at [appsmith.com](https://appsmith.com) start using Appsmith.
2. **Self-hosted Instances** - For users who want to plug into their own infrastructure.


## Self-hosted instance

You can choose to deploy Appsmith on your own infrastructure without the need to maintain a different setup. Having your data and apps hosted on your infrastructure, its easier to manage things such as [backups](/getting-started/setup/instance-management/appsmithctl) and scaling that follow the rules across deployed instances. Get started by following the [installation guides](/getting-started/setup/installation-guides).

:::info
Appsmith collects [usage data](../../product/telemetry.md) to serve you better. You can choose to [opt out](../../product/telemetry.md#disable-telemetry) at any time.
:::

Deploying Appsmith as a self-hosted instance has its own perks:

### Security

You get to keep your data on-premise. It also ensures that your API keys or security credentials would never leave your server and have the same security rules applied to any other app. The applications you build would be on your infrastructure, inside your corporate networks. You may choose to host it on internal networks behind a firewall for a defined set of users. You may also configure your [custom domain](./instance-configuration/custom-domain/README.md) and extend the security policies to Appsmith installation.

Appsmith provides a [secured environment](../../product/security) for cloud-hosted and self-hosted instances by encrypting sensitive information like database credentials using [AES 256 Encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard). For self-hosted instances, it also supports setting up [SSL certificates](./instance-configuration/custom-domain/README.md#custom-ssl-certificate) via [LetsEncrypt](https://letsencrypt.org/) during installation.

### Internal database

A self-hosted instance could allow you to connect with a database running on the same machine/intranet and use it to build apps.

:::info
Using a **cloud-hosted instance** would require the ability to access the **internal databases**. For example, you would be required to use tunneling services like [ngrok](../../advanced-concepts/more/how-to-work-with-local-apis-on-appsmith/#using-ngrok) to expose your internal database to the internet or whitelist Appsmith cloud's external IP addresses to build apps.
:::

Appsmith uses MongoDB to store app data and Redis to store session information and non-critical caches. You may want to integrate with custom MongoDB or Redis servers hosted on your infrastructure. For this, you would have to [modify the configuration of environment variables and point them to the custom MongoDB/Redis](./instance-configuration/custom-mongodb-redis.md) instances.

### Updates

You can configure more flexible updates, schedules, and other maintenance activities for a self-hosted instance. You can follow the steps to configure [maintenance window and schedule auto updates](./instance-management/maintenance-window.md).

:::note
The self-hosted version isn't air-gapped and reaches out to the Appsmith cloud. For example, to fetch release notes about product updates. It helps you stay updated with the latest releases. If you would like a fully air-gapped deployment, please write to [**support@appsmith.com**](mailto:support@appsmith.com).
:::

## Deploy

You can choose from various popular platforms to deploy Appsmith, like Docker, Kubernetes, AWS, Digital Ocean, and more.

> 🔔 Appsmith officially supports [docker-based installations](/getting-started/setup/installation-guides/docker/).

### Pre-setup checklist

It's simple and quick to deploy Appsmith. Please ensure that your system has the following recommended configuration for optimal performance before moving forward with the deployment:

* Two virtual CPU \[vCPU]
* A four GB of memory

:::info
On Amazon Web Services(AWS), a [t3.medium](https://aws.amazon.com/ec2/instance-types/t3/) instance would be ideal for installing Appsmith.
:::

### Deployment options

With a variety of[ deployment options](./installation-guides/README.md), choose the one that best suits you:

* [Docker](/getting-started/setup/installation-guides/docker/)
* [Kubernetes](/getting-started/setup/installation-guides/kubernetes/)
* [AWS AMI](/getting-started/setup/installation-guides/aws-ami)
* [AWS ECS](/getting-started/setup/installation-guides/aws-ecs)
* [DigitalOcean](/getting-started/setup/installation-guides/digitalocean)

And [more](/getting-started/setup/installation-guides/).

:::info
[DigitalOcean](https://marketplace.digitalocean.com/apps/appsmith) or [AWS](https://aws.amazon.com/marketplace/seller-profile?id=f12088a7-c7be-46e5-8c5d-9cd7a16c8c1e) offers a one-click deployment from their marketplaces.
:::

### Configure

You can configure and manage the self-hosted instance with the help of a [Super Admin](./instance-configuration/admin-settings.md) user. There are out-of-the-box integrations like:

* [Custom authentication](/getting-started/setup/instance-configuration/authentication/) to onboard your existing user base.
* [Email](/getting-started/setup/instance-configuration/email/) to invite users and notify admins.
* [Sign-up restriction](/getting-started/setup/instance-configuration/disable-user-signup) to turn off signing up using the signup form or OAuth buttons, ensuring that only users you invite can signup.

And [more](/getting-started/setup/instance-configuration/) that can be configured.

### Manage

You can also effectively [manage your self-hosted instance](/getting-started/setup/instance-management) like [database backup](/getting-started/setup/instance-management/appsmithctl#export-database), [instance backup](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance), and [more](/getting-started/setup/instance-management/appsmithctl).


:::info
Are you having trouble deploying Appsmith? Check out the [deployment troubleshooting guide](/help-and-support/troubleshooting-guide/deployment-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/). If you **know** the error and want to **reinstall**, **delete** the **installation** and **templates** folder, and **execute** the script **again**.
:::
