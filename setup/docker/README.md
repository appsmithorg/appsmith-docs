# Docker

Appsmith can be deployed locally or on your private instance using Docker.Just ensure you have `docker` and `docker-compose` installed on your system and you're ready to go!

{% hint style="warning" %}
Machines like M1 laptops that require a docker ARM image are not currently supported
{% endhint %}

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/) \(version 20.10.7 or later\)
* [Docker-Compose](https://docs.docker.com/compose/install/) \(version 1.29.2 or later\)

## Quick Start \(without docker-compose\)

To quickly get a taste of this, run the following command on your machine:

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

Create a folder called `appsmith`, where you would like your Appsmith installation, and data to live in. Download the below `docker-compose.yml` file into the folder

{% file src="../../.gitbook/assets/docker-compose.yml" caption="docker-compose.yml" %}

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

Now, `cd` to the folder where this file was saved to, and run:

```bash
docker-compose up -d
```

This command will download the Docker images, if not already locally available, and start the services. You can see the status with `docker-compose ps`, and view the logs with `docker-compose logs -f appsmith`.

Congratulations! Your Appsmith server should be up and running now. You can access it at [http://localhost](http://localhost).

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../../troubleshooting-guide/deployment-errors.md), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the appsmith team!

### Further Reading

* [Enabling Services for Self Hosting](./#enabling-services-for-self-hosting)
* [Managing the Appsmith instance](instance-management.md)
* [Tutorials](../../tutorials/)

## Enabling Services for Self Hosting

Appsmith ships with third-party services that improve the app building experience. All third-party services are entirely optional.

{% hint style="success" %}
All third party services are enabled by default in our [cloud-hosted](https://app.appsmith.com) version.
{% endhint %}

Our self-hosted version allows you to configure your own keys to enable third party services such as Google OAuth. To enable a service, simply open the folder of your Appsmith installation and edit the `docker.env` file.

Each service requires a specific key or configuration to be enabled. Configure the service of your choice using the following guides

* [Email](email/)
* [Google OAuth](google-login.md)
* [GitHub OAuth](github-login.md)
* [Google Maps](google-maps.md)
* [Disable Signups](disable-user-signup.md)
* [Custom Domain](custom-domain.md)

You may need root access to modify the `docker.env` file.

After making any changes, remember to restart editor and backend for the changes to take affect.

```bash
sudo docker-compose exec supervisorctl restart editor backend
```

{% page-ref page="../../tutorials/" %}

