---
description: Appsmith is open source and very easy to deploy on your machine.
slug: /getting-started/setup
sidebar_position: 3
---

# Self Hosting

You can host and manage Appsmith directly on your server, giving you complete control over your data privacy, security, and integrity.

## System requirements

It's simple and quick to deploy Appsmith. Please ensure that your system has the following recommended configuration for optimal performance before moving forward with the deployment:

* Two virtual CPU \[vCPU]
* 4 GB of memory ([t3.medium](https://aws.amazon.com/ec2/instance-types/t3/) on AWS)

## Deployment options

Appsmith officially supports only Docker-based installations.  

You can follow one of the guides to deploy Appsmith on the platform you prefer:

* [Docker](/getting-started/setup/installation-guides/docker) (*Recommended*)
* [Kubernetes](/getting-started/setup/installation-guides/kubernetes) (*High Availability and Scalability*)
* [AWS AMI](/getting-started/setup/installation-guides/aws-ami)
* [DigitalOcean](/getting-started/setup/installation-guides/digitalocean)

See all [installation guides](/getting-started/setup/installation-guides).

## Self-hosting benefits

Deploying Appsmith on your infrastructure gives complete control over security, updates and scaling your infrastructure as per requirements.

:::info
The self-hosted version isn't air-gapped and needs internet access to reach Appsmith cloud services (cs.appsmith.com) for a few features to work, such as fetching release notes, more than three private repositories for Git version control, templates, business license validity checks, etc. If you want a fully air-gapped deployment, please write to [**support@appsmith.com**](mailto:support@appsmith.com).
:::

Installing Appsmith as a self-hosted instance has the following advantages:

- **Security**: You get to keep your data on-premise. It also ensures that your API keys or security credentials never leave your server and have the same security rules applied to any other app. The applications you build would be on your infrastructure, inside your virtual private networks/VPC. You can host it on internal networks behind a firewall and also configure [SSL and custom domain](/getting-started/setup/instance-configuration/custom-domain).

- **Local database**: A self-hosted instance allows you to connect to a database running on the same machine/intranet and use it to build apps.

- **Performance & Scalability**: Appsmith supports high availability(HA) and scalability on [Kubernetes](/getting-started/setup/installation-guides/kubernetes) installation where you can deploy Appsmith having EFS/NFS as a common shared storage which helps in deploying Appsmith without any downtime. You can also configure the Horizontal Pod Autoscaler which helps in scaling the pods.

## Further reading

* [Installation guides](/getting-started/setup/installation-guides)
* [Instance configuration](/getting-started/setup/instance-configuration)
* [Instance Management](/getting-started/setup/instance-management)