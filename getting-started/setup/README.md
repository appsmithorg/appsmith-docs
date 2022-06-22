---
description: Appsmith is open source and very easy to deploy on your own machine
---

# Self Hosting

> 🔔 The only officially supported installs of Appsmith are [Docker](https://www.docker.io) based.

You can follow one of our guides to deploy Appsmith via the technology you prefer

* [Docker](installation-guides/docker/) **(Recommended)**
* [Kubernetes](installation-guides/kubernetes/)
* [AWS AMI](installation-guides/aws-ami.md)
* [AWS ECS](installation-guides/aws-ecs.md)
* [DigitalOcean](installation-guides/digitalocean.md)
* [Heroku](installation-guides/heroku.md)
* [Ansible](installation-guides/ansible.md)

{% hint style="info" %}
**Minimum system requirements:** We recommend 4 GB RAM with 2 CPUs (t3.medium on AWS).
{% endhint %}

{% hint style="warning" %}
The self-hosted version is not air-gapped and pings a cloud service to fetch release notes about our product updates. It helps you stay up to date with the latest changes to your Appsmith deployment. If you would like a fully air-gapped deployment, please write to support@appsmith.com
{% endhint %}

{% hint style="warning" %}
Please note that Appsmith's Docker image does **not** run open OpenShift platform today.
{% endhint %}

## Troubleshooting

If you encounter an error while installing Appsmith on any platform, reach out to **support@appsmith.com** or join our [Discord Server](https://discord.com/invite/rBTTVJp).

If you know the error and want to reinstall Appsmith, delete the installation folder and the templates folder and execute the script again.
