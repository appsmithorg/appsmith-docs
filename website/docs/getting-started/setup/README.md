---
description: Appsmith is open source and very easy to deploy on your machine.
slug: /getting-started/setup
sidebar_position: 3
---

# Self Hosting

You can host and manage Appsmith on your local machine or server, giving you complete control over your data privacy, security, and integrity.

## Deployment options

Appsmith works best on AMD and ARM architectures on AWS, Azure, GCP, and DigitalOcean. By default, Kubernetes and Docker Compose are recommended methods to run Appsmith. The current certified and recommended configurations are:

- Two virtual CPUs
- 4 GB of memory

You can follow one of the below guides to deploy Appsmith on the platform you prefer:

- [Docker](/getting-started/setup/installation-guides/docker) (_Recommended_)
- [Kubernetes](/getting-started/setup/installation-guides/kubernetes) (_High Availability and Scalability_)
- [AWS AMI](/getting-started/setup/installation-guides/aws-ami)
- [DigitalOcean](/getting-started/setup/installation-guides/digitalocean)

While Appsmith is a dockerized application that works on other platforms, official support is limited to these configurations. For other environments, support is provided on a case-by-case basis. For more information about installation platforms, see all [installation guides](/getting-started/setup/installation-guides).

:::info
Appsmith needs internet access for several important features such as templates, Google Sheets, and fetching release notes. If you would like an **[Air-gapped version](/getting-started/setup/installation-guides/air-gapped)**, you can write to sales@appsmith.com.
:::

## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.