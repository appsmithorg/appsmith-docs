---
description: Appsmith is open source and very easy to deploy on your machine.
slug: /getting-started/setup
sidebar_position: 3
---

# Self Hosting

You can host and manage Appsmith directly on your server, giving you complete control over your data privacy, security, and integrity.

You can use Appsmith in two ways:

* **[Appsmith Cloud](https://app.appsmith.com/user/login)** - For users who don't have an infrastructure. Appsmith only acts as a proxy layer and doesn't store any data returned from your API endpoints or database queries. See [Security](/product/security)
* **Self-host Appsmith** - For users who want to deploy Appsmith on their own infrastructure, manage the instance, updates, etc.


## Self-host Appsmith

Deploying Appsmith on your infrastructure gives complete control over security, updates and scaling your infrastructure as per requirements.

The self-hosted version isn't air-gapped and needs internet access to reach Appsmith cloud services (cs.appsmith.com) for a few features to work, such as fetching release notes, more than three private repositories for git version control, templates, business license validity checks, etc. If you want a fully air-gapped deployment, please write to [**support@appsmith.com**](mailto:support@appsmith.com).

Installing Appsmith as a self-hosted instance has the following advantages:

- **Security**: You get to keep your data on-premise. It also ensures that your API keys or security credentials never leave your server and have the same security rules applied to any other app. The applications you build would be on your infrastructure, inside your virtual private networks/VPC. You can host it on internal networks behind a firewall and also configure [SSL and custom domain](/getting-started/setup/instance-configuration/custom-domain).

 Appsmith provides a secure environment for cloud-hosted and self-hosted instances by encrypting sensitive information like database credentials using [AES 256 Encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard). 

- **Local database**: A self-hosted instance allows you to connect to a database running on the same machine/intranet and use it to build apps.

- **Storage**: Appsmith uses MongoDB to store app data and Redis to store session information and non-critical caches. You can also connect to [external MongoDB or Redis](/getting-started/setup/instance-configuration/custom-mongodb-redis) servers hosted on your infrastructure.

- **Updates**: You can set up [auto updates](/getting-started/setup/instance-management/maintenance-window) and manage your self-hosted instance.


## System requirements

It's simple and quick to deploy Appsmith. Please ensure that your system has the following recommended configuration for optimal performance before moving forward with the deployment:

* Two virtual CPU \[vCPU]
* A four GB of memory

:::info
On Amazon Web Services(AWS), the [t3.medium](https://aws.amazon.com/ec2/instance-types/t3/) instance would be ideal for installing Appsmith.
:::

## Deployment options

Appsmith officially supports all Docker-based installations. You can choose from different [deployment platforms](/getting-started/setup/installation-guides). 

[DigitalOcean](https://marketplace.digitalocean.com/apps/appsmith) and [AWS](https://aws.amazon.com/marketplace/seller-profile?id=f12088a7-c7be-46e5-8c5d-9cd7a16c8c1e) offer a one-click deployment from their marketplaces.


## Configure and manage instance

You can configure and manage the self-hosted instance if you are a [Super Admin](/getting-started/setup/instance-configuration/) user.

* [User authentication](/getting-started/setup/instance-configuration/authentication/) - manage how users login to applications.
* [Email configuration](/getting-started/setup/instance-configuration/email/) - invite users and notify admins.
* [Signup restriction](/getting-started/setup/instance-configuration/disable-user-signup) - turn off signing up using the signup form or OAuth buttons, ensuring that only users you invite can signup.
* [SSL configuration](/getting-started/setup/instance-configuration/custom-domain) - make Appsmith available on a custom domain and configure SSL.
* [Manage updates](/getting-started/setup/instance-management) - manually update to the latest release or schedule auto updates.
* [Backup Instance](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance) - create a backup archive of the Appsmith instance.