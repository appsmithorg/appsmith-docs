---
description: Appsmith can be deployed locally or on your private instance using Docker
---

# Docker

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/) \(version 20.10.7 or later\)
* [Docker-Compose](https://docs.docker.com/compose/install/) \(version 1.29.2 or later\)

Create an installation folder called `appsmith`, where you would like your Appsmith installation, and data to live in. 

`cd` into the installation folder.

## Quick Start \(without docker-compose\)

To quickly get Appsmith up and running, run the following command on your machine:

```bash
docker run -d --name appsmith -p 80:80 -p 9001:9001 -v "$PWD/stacks:/appsmith-stacks" appsmith/appsmith-ce
```

This will download the image and start Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

## Long Start \(with docker-compose\)

The Appsmith Docker image is built with all the components required for it to run, within a single Docker container. All these multiple processes are managed by a Supervisord instance, which is a lightweight process manager.

### Docker compose configuration

Download the below `docker-compose.yml` file into the appsmith installation folder

{% file src="../.gitbook/assets/docker-compose.yml" caption="docker-compose.yml" %}

{% code title="docker-compose.yml" %}
```yaml
version: "3"

services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ce
    container_name: appsmith
    ports:
      - "80:80"
      - "443:443"
      - "9001:9001"
    volumes:
      - ./stacks:/appsmith-stacks
    labels:
      com.centurylinklabs.watchtower.enable: "true"

  auto_update:
    image: containrrr/watchtower:latest-dev
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    # Update check interval in seconds.
    command: --interval 300 --label-enable --cleanup
```
{% endcode %}

This configuration runs an Appsmith instance, and a Watchtower instance to keep Appsmith automatically up-to-date.

Now, `cd` to the appsmith installation folder with this **docker-compose.yml** file and run:

```bash
docker-compose up -d
```

This command will download the Docker images, if not already locally available, and start the services. You can see the status with `docker-compose ps`, and view the logs with `docker-compose logs -f appsmith`.

{% hint style="success" %}
Congratulations! Your Appsmith server should be up and running now. You can access it at [http://localhost](http://localhost).
{% endhint %}

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../troubleshooting-guide/deployment-errors.md), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the appsmith team!

## Further Reading

* [Configuring Self Hosted Instances](instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](instance-management.md)
* [Tutorials](../tutorials/)

