---
description: Appsmith can be deployed locally or on your private instance using Docker
sidebar_position: 1
---

# Docker

Docker is an open-source [containerization](https://www.ibm.com/in-en/cloud/learn/containerization) platform. It enables developers to package applications into standardized executable components called containers. These containers combine the app's source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

<object data="https://www.youtube.com/embed/Tde7GqE6FQQ?autoplay=0" width='750px' height='400px'></object> 

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/) (version 20.10.7 or later)
* [Docker-Compose](https://docs.docker.com/compose/install/) (version 1.29.2 or later) _(Optional)_

1. Create an installation folder called `appsmith` where you would like your Appsmith installation and data storage.
2. `cd` into the installation folder.

:::tip
If you'd like to name your installation directory something other than `appsmith`, update your docker-compose.yml file with the name you'd like:
```yml
# docker-compose.yml

# ...
services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ce
    container_name: <YOUR_DIRECTORY_NAME>
# ...
```
:::

## Setup with docker-compose

The Appsmith Docker image contains all the components required to run within a single Docker container. All these multiple processes are managed by a [Supervisord](http://supervisord.org/) instance, which is a lightweight process manager.

### Docker-compose configuration

Click the link below to download the `docker-compose.yml` file, and place it into your Appsmith installation folder.

<a target="_blank" href='/img/docker-compose_(3).yml' download="docker-compose_(3).yml">docker-compose.yml (Click to Download)</a>

**OR,** run the following curl:

```bash
curl -L https://bit.ly/3AQzII6 -o $PWD/docker-compose.yml
```

:::info
**For Business Edition users:**

1. Change the **image** name from `appsmith-ce` to `appsmith-ee` for the `image:` key in the `docker-compose.yml` file.

2. Add your **license key** (`APPSMITH_LICENSE_KEY`) to the `environment:` key in the `docker-compose.yml` file.

To upgrade your existing Community Edition installation to the Business Edition, [follow these instructions](../../upgrade-to-business-edition/).
:::

Start up the Docker container by running the following command - You may need to run with `sudo` if docker and docker-compose aren't accessible by your user.

```bash
docker-compose up -d
```

If the image doesn't exist locally, this command downloads the Docker images and starts its services. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

Once the container is ready, you should see `Appsmith is Running!` in the Docker logs. This message is also logged and available in server logs in (<mark>`stacks/logs/backend/backend.log`</mark>).

![Appsmith is running message](/img/InstallationGuides__Docker__AppsmithRunningMessage.png)

Congratulations, your Appsmith server should be up and running now. You can access it at [http://localhost](http://localhost). If this is your first time setting up using Docker, you should expect a welcome page similar to the one below.

![Welcome Page](</img/image_(1)_(1).png>)

### Updating Appsmith manually

To update Appsmith (configured with docker-compose) manually, go to the root directory of your installation and run the following command:

```
docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

### Enabling Appsmith auto-updates

Automatic updates are disabled by default in the docker-compose.yml file. If you would like to enable automatic updates for Appsmith, please follow these steps:

1. Go to the root directory of your Appsmith instance and run:

```
docker-compose down
```

2. Open the `docker-compose.yml` file with any text editor and uncomment all the lines that are commented out (lines 13-23).
3. Save the file and run:

```
docker-compose up -d
```

:::info
To compliment automatic updates, Appsmith now also has an auto-backup feature. Before an automatic update, Appsmith first creates a backup to ensure you can [roll back](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance) an update to a previous version of Appsmith if necessary.
:::

This configuration runs an Appsmith instance and a Watchtower instance to keep Appsmith automatically up-to-date. Your installation is now configured to stay up-to-date automatically.

---

## Setup without docker-compose

To get Appsmith up and running, run the following command on your machine:

### Community Edition

```bash
docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" --pull always appsmith/appsmith-ce
```

### Business Edition

```
docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<YOUR_LICENSE_KEY> --pull always appsmith/appsmith-ee
```

This command downloads the image and starts Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

Once the container is ready, you should see `Appsmith is Running!` in the Docker logs. This message is also logged and available in server logs in (<mark>`stacks/logs/backend/backend.log`</mark>).

![Appsmith is running message](/img/InstallationGuides__Docker__AppsmithRunningMessage.png)

### Updating Appsmith

To update Appsmith manually, go to the root directory of your installation and run the following commands:

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

---

## Restarting containers

If your containers are failing to restart, you can download and run the script linked below to bring them up:

<div class="downloadAssets">
    <a target="_blank" download="restart-container.sh" href="/img/restart-container.sh">
     <img src="/img/FileDownload.png" alt="Click to Download"/>
    </a>
</div>

Copy the script (restart-container.sh) to your installation folder and make it executable:

```bash
chmod +x restart-container.sh
./restart-container.sh
```

## Troubleshooting

If you encounter any errors during this process, try following this guide on [debugging deployment errors](../../../../help-and-support/troubleshooting-guide/deployment-errors.md). If you are still facing issues, please contact [support@appsmith.com](mailto:support@appsmith.com) or join the Appsmith [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly.

## Further reading

* [Configuring Self-Hosted Instances](../../instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](../../instance-management/)
* [Tutorials](../../../../learning-and-resources/tutorials/)
