---
description: Appsmith can be deployed locally or on your private instance using Docker
---

# Docker

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/) (version 20.10.7 or later)
* [Docker-Compose](https://docs.docker.com/compose/install/) (version 1.29.2 or later)

Create an installation folder called `appsmith`where you would like your Appsmith installation and data storage.

**`cd` ** into the installation folder.

## Quick Start (with docker-compose)

The Appsmith Docker image is built with all the components required to run within a single Docker container. All these multiple processes are managed by a Supervisord instance, which is a lightweight process manager.

### Docker-compose configuration

Download the below `docker-compose.yml` file into the appsmith installation folder

{% file src="../.gitbook/assets/docker-compose (1).yml" %}

**or** run the following curl if you're on a remote machine

```bash
curl -L https://bit.ly/32jBNin -o $PWD/docker-compose.yml
```

This configuration runs an Appsmith instance and a Watchtower instance to keep Appsmith automatically up-to-date.

Bring the docker container up by running the following command. (You may need to run as sudo if docker and docker-compose are not accessible by your user)

```bash
docker-compose up -d
```

This command will download the Docker images, if not already locally available, and start the services. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

You should see a message `Appsmith is Running!` once the container is ready

{% hint style="success" %}
Congratulations! Your Appsmith server should be up and running now. You can access it at [http://localhost](http://localhost).
{% endhint %}

## Explore Appsmith (without docker-compose)

To quickly get Appsmith up and running, run the following command on your machine:

```bash
docker run -d --name appsmith -p 80:80 -p 9001:9001 -v "$PWD/stacks:/appsmith-stacks" appsmith/appsmith-ce
```

This will download the image and start Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:

```bash
docker logs -f appsmith
```

You should see a message `Appsmith is Running!` once the container is ready

## Restarting Containers

If your containers are failing to restart, you can execute the below script to bring them up

{% file src="../.gitbook/assets/restart-container.sh" %}
restart-containers.sh
{% endfile %}

copy the script to your installation folder and make it executable

```bash
chmod +x restart-containers.sh
./restart-containers.sh
```

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../troubleshooting-guide/deployment-errors.md). If you are still facing any issue, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly!

## Further Reading

* [Configuring Self Hosted Instances](instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](instance-management.md)
* [Tutorials](../tutorials/)
