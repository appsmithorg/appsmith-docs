---
description: Appsmith can be deployed locally or on your private instance using Docker
sidebar_position: 1
---

# Docker

Docker is an open-source [containerization](https://www.ibm.com/in-en/cloud/learn/containerization) platform. It enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

<object data="https://www.youtube.com/embed/Tde7GqE6FQQ?autoplay=0" width='860px' height='515px'></object> 

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/) (version 20.10.7 or later)
* [Docker-Compose ](https://docs.docker.com/compose/install/)(version 1.29.2 or later)

Create an installation folder called `appsmith` where you would like your Appsmith installation and data storage.

`cd` into the installation folder.

## Quick Start (with docker-compose)

:::caution
Appsmith [auto-update](./#enabling-appsmith-auto-updates-with-docker-compose) now also supports auto-backup feature. This backup can be used to roll back an update to a previous version of Appsmith, if the user wants to.
:::

The Appsmith Docker image is built with all the components required to run within a single Docker container. All these multiple processes are managed by a Supervisord instance, which is a lightweight process manager.

:::caution
You can expect one container running when using the `docker-compose ps` command. Something like:

_#Container appsmith Running_
:::

### Docker-compose configuration

:::info
Currently, auto-update is disabled on the docker-compose file. If you want to enable auto-update for Appsmith, please uncomment all the commented lines in the docker-compose file.
:::

Download the below `docker-compose.yml` file into the appsmith installation folder

{% file src="/img/docker-compose_(3).yml" %}

**or** run the following curl if you're on a remote machine:

```bash
curl -L https://bit.ly/3AQzII6 -o $PWD/docker-compose.yml
```

:::caution
For the **Business Edition** - change the **image** name from `appsmith-ce` to `appsmith-ee` for the `image:` key in the `docker-compose.yml` file.
:::

This configuration runs an Appsmith instance and a Watchtower instance to keep Appsmith automatically up-to-date.

:::caution
For the **Business Edition** - add your **license key** (`APPSMITH_LICENSE_KEY`) to the `environment:` key in the `docker-compose.yml` file.
:::

Bring the docker container up by running the following command. (You may need to run as `sudo` if docker and docker-compose are not accessible by your user)

```bash
docker-compose up -d
```

If it is not available locally, the command above will download the Docker images and start the services. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

You should see a message `Appsmith is Running!` once the container is ready. The message is also logged and available in server logs(<mark>`stacks/logs/backend/backend.log`</mark>).

![Appsmith is running message](/img/InstallationGuides__Docker__AppsmithRunningMessage.png)

:::caution
If you are **unable** to **locate** the message but can **access** Appsmith via **localhost** or a **custom domain** you have **created**, then Appsmith is up and running.
:::

If this is your first time using docker, you should expect a welcome page similar to the one below.

![Welcome Page](</img/image_(1)_(1).png>)

:::tip
Congratulations! Your Appsmith server should be up and running now. You can access it at [http://localhost](http://localhost).
:::

### Updating Appsmith (with docker-compose)

To update Appsmith (configured with docker-compose) manually, go to the root directory of your setup and run the following command:

```
docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

### Enabling Appsmith Auto-updates (with docker-compose)

If your Appsmith setup does not have auto-update enabled (i.e. it will not have the Watchtower container running along with Appsmith in the host machine). You can enable auto-update by following the following steps:

1. Go to the root directory of your Appsmith set up and run:

```
docker-compose down
```

1. Open the `docker-compose.yml` file with any text editor and uncomment all the lines that are commented out (lines 13-23).
2. Run the command:

```
docker-compose up -d
```

## Explore Appsmith (without docker-compose)

To quickly get Appsmith up and running, run the following command on your machine:

### Community Edition

```bash
docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" --pull always appsmith/appsmith-ce
```

### Business Edition

```
docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<Add_YOUR_LICENSE_KEY> --pull always appsmith/appsmith-ee
```

This command will download the image and start Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

You should see a message `Appsmith is Running!` once the container is ready. The message is also logged and available in server logs(<mark>`stacks/logs/backend/backend.log`</mark>).

![Appsmith is running message](/img/InstallationGuides__Docker__AppsmithRunningMessage.png)

:::caution
If you are **unable** to **locate** the message but can **access** Appsmith via **localhost** or a **custom domain** you have **created**, then Appsmith is up and running.
:::

## Restarting Containers

If your containers are failing to restart, you can execute the below script to bring them up:

{% file src="/img/restart-container.sh" %}
restart-containers.sh
{% endfile %}

copy the script to your installation folder and make it executable

```bash
chmod +x restart-containers.sh
./restart-containers.sh
```

### Updating Appsmith (without docker-compose)

To update Appsmith manually, go to the root directory of your setup and run the following commands:

#### Community Edition

```
docker rmi appsmith/appsmith-ce -f
docker pull appsmith/appsmith-ce
docker rm -f appsmith
docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" appsmith/appsmith-ce
```

#### Business Edition

```
docker rmi appsmith/appsmith-ee -f
docker pull appsmith/appsmith-ee
docker rm -f appsmith
docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<YOUR_LICENSE_KEY> appsmith/appsmith-ee
```

:::info
Follow the instructions to [upgrade your existing installation](../../upgrade-to-business-edition/) to a Business Edition.
:::

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../../../../help-and-support/troubleshooting-guide/deployment-errors.md). If you are still facing any issues, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly!

## Further Reading

* [Configuring Self Hosted Instances](../../instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](../../instance-management/)
* [Tutorials](../../../../learning-and-resources/tutorials/)
