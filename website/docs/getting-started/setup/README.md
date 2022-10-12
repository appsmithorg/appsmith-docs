---
description: Appsmith is open source and very easy to deploy on your machine.
slug: /getting-started/setup
sidebar_position: 2
---

# Self Hosting

[Self-hosting](https://en.wikipedia.org/wiki/Self-hosting\_\(web\_services\)) Appsmith means hosting and managing Appsmith directly on your server rather than relying on third-party service providers. Self-hosting is often seen as more secure and private, as you have complete control over your data and how it's used.

Appsmith provides a [cloud-hosted version](https://app.appsmith.com)\[**cloud-hosted**] and the option to set up your instance on some popular [platforms](./#deploy).

## Cloud-hosted

Cloud-hosted version is available over the internet, which makes it easy for users to sign up and start building apps. It's a perfect solution for users who don't have their infrastructure set up. You can sign up on [appsmith.com](https://appsmith.com) and follow the [Quick start guide](../start-building.md) to get started.

## Self-hosted

You can choose to deploy Appsmith on your own infrastructure. It's often useful when you want to plug it into existing infrastructure without the need to maintain a different setup. It enables you to take advantage of what your infrastructure has to offer and extend it to Appsmith.&#x20;

{% hint style="warning" %}
Appsmith collects [usage data](../../product/telemetry.md) to serve you better. You can choose to [opt out](../../product/telemetry.md#disable-telemetry) at any time.
{% endhint %}

Deploying Appsmith on your infrastructure offers the following benefits:

#### Security

You get to keep your data on-premise. It also ensures that your API keys or security credentials would never leave your server and have the same security rules applied to any other app. The applications you build would be on your infrastructure, inside your corporate networks. You may choose to host it on internal networks behind a firewall for a defined set of users. You may also configure your [custom domain](instance-configuration/custom-domain/) and extend the security policies to Appsmith installation.

Appsmith provides a [secured environment](../../product/security.md) for cloud-hosted and self-hosted instances by encrypting sensitive information like database credentials using [AES 256 Encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard). For self-hosted instances, it also supports setting up [SSL certificates](instance-configuration/custom-domain/#setting-up-ssl) via [LetsEncrypt](https://letsencrypt.org/) during installation.

#### Internal database

A self-hosted instance could allow you to connect with a database running on the same machine/intranet and use it to build apps.

{% hint style="info" %}
Using a **cloud-hosted instance** would require the ability to access the **internal databases**. For example, you would be required to use tunneling services like [ngrok](../../advanced-concepts/more/how-to-work-with-local-apis-on-appsmith.md#using-ngrok) to expose your internal database to the internet or whitelist Appsmith cloud's external IP addresses to build apps.
{% endhint %}

Appsmith uses MongoDB to store app data and Redis to store session information and non-critical caches. You may wish to integrate with custom MongoDB or Redis servers hosted on your infrastructure. For this, you would have to [modify the configuration of environment variables and point them to the custom MongoDB/Redis](instance-configuration/custom-mongodb-redis.md) instances.

#### Updates

You can configure more flexible updates, schedules, and other maintenance activities for a self-hosted instance. You can follow the steps to configure \[maintenance window and schedule auto updates]\(Link to Maintenance window page).

{% hint style="warning" %}
The self-hosted version isn't air-gapped and reaches out to the Appsmith cloud. For example, to fetch release notes about product updates. It helps you stay updated with the latest releases. If you would like a fully air-gapped deployment, please write to [**support@appsmith.com**](mailto:support@appsmith.com).
{% endhint %}

## Deploy

You can choose from various popular platforms to deploy Appsmith, like Docker, Kubernetes, AWS, Digital Ocean, and more.

> 🔔 Appsmith officially supports [docker-based installations.](installation-guides/docker/)

### Pre-setup checklist

It's simple and quick to deploy Appsmith. Please ensure that your system has the following recommended configuration for optimal performance before moving forward with the deployment:

* Two virtual CPUs \[vCPU]
* A four GB of memory&#x20;

{% hint style="info" %}
On Amazon Web Services(AWS), a [t3.medium](https://aws.amazon.com/ec2/instance-types/t3/) instance would be ideal for installing Appsmith.
{% endhint %}

### Deployment options

With a variety of[ deployment options](installation-guides/), choose the one that best suits you:



{% content-ref url="installation-guides/docker/" %}
[docker](installation-guides/docker/)
{% endcontent-ref %}

{% content-ref url="installation-guides/kubernetes/" %}
[kubernetes](installation-guides/kubernetes/)
{% endcontent-ref %}

{% content-ref url="installation-guides/aws-ami.md" %}
[aws-ami.md](installation-guides/aws-ami.md)
{% endcontent-ref %}

{% content-ref url="installation-guides/aws-ecs.md" %}
[aws-ecs.md](installation-guides/aws-ecs.md)
{% endcontent-ref %}

{% content-ref url="installation-guides/digitalocean.md" %}
[digitalocean.md](installation-guides/digitalocean.md)
{% endcontent-ref %}

And [more](installation-guides/).

{% hint style="info" %}
[DigitalOcean](https://marketplace.digitalocean.com/apps/appsmith) or [AWS](https://aws.amazon.com/marketplace/seller-profile?id=f12088a7-c7be-46e5-8c5d-9cd7a16c8c1e) offers a one-click deployment from their marketplaces.
{% endhint %}

### Configure

You can configure and manage the self-hosted instance with the help of a [Super Admin](instance-configuration/admin-settings.md) user. There are out-of-the-box integrations like:

* &#x20;[Custom authentication](instance-configuration/authentication/) to onboard your existing user base
* [Email](instance-configuration/email/) to invite users and notify admins&#x20;
* [Sign-up restriction](instance-configuration/disable-user-signup.md) to turn off signing up using the signup form or OAuth buttons, ensuring that only users you invite can signup

And [more](instance-configuration/) that can be configured.&#x20;

### Manage

You can also effectively [manage your self-hosted instance](instance-management/) like [database backup](instance-management/appsmithctl.md#export-database), [instance backup](instance-management/appsmithctl.md#backup-appsmith-instance), and [more](instance-management/appsmithctl.md).

Deploying Appsmith as a self-hosted instance has its own perks - having your data and apps hosted on your infrastructure. It's also easier to manage things such as \[backups]\(Link to Appsmithctl page) and scaling that follow the rules across deployed instances. Get started by following the \[installation guides]\(link to the installation guide) that work for you.

{% hint style="warning" %}
Are you having trouble deploying Appsmith? Check out the [deployment troubleshooting guide](../../help-and-support/troubleshooting-guide/deployment-errors.md) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/). If you **know** the error and want to **reinstall**, **delete** the **installation** and **templates** folder, and **execute** the script **again**.
{% endhint %}
