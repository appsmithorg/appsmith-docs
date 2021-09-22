# Docker

Appsmith can be deployed locally or on your private instance using Docker.Just ensure you have `docker` and `docker-compose` installed on your system and you're ready to go!

{% hint style="warning" %}
For Mac on M1, we've seen problems with Docker getting into a corrupt state and throwing errors like `error creating overlay mount`. Please follow [Docker's troubleshooting guide](https://docs.docker.com/docker-for-mac/troubleshoot/) to resolve and then proceed with the installation.
{% endhint %}

## Quick Start

To quickly get a taste of this, run the following command on your machine:

```sh
docker run -d --name appsmith -p 80:80 -p 9001:9001 appsmith/appsmith-ce
```

This will download the image and start Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:

```sh
docker logs -f appsmith
```

## Long Start

The Appsmith Docker image is built with all the components required for it to run, within a single Docker container. All these multiple processes are managed by a supervisord instance, which is a lightweight process manager.

### 1. Prerequisites

Ensure you have `docker` and `docker-compose` installed with at least the following versions:

```sh
$ docker --version
Docker version 20.10.7, build f0df350
$ docker-compose --version
docker-compose version 1.29.2, build 5becea4c
```

### 2. Docker compose configuration

Create a folder called `appsmith`, where you would like your Appsmith installation, and data to live in, and in it, create a file called `docker-compose.yml` with the following contents:

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

In this configuration, we run an Appsmith instance, and a watchtower instance to keep Appsmith automatically up-to-date.

Now, `cd` to the folder where this file was saved to, and run:

```sh
docker-compose up -d
```

This command will download the Docker images, if not already locally available, and start the services. You can see the status with `docker-compose ps`, and view the logs with `docker-compose logs -f appsmith`.

After the server is up, your Appsmith instance should be accessible at <http://localhost>.

To manage the various processes inside the Appsmith container, we can use the Supervisord web UI. This is available at port 9001, and should be accessible at <http://localhost:9001>. More on this discussed further below.

## Custom Domain

To make Appsmith available on a custom domain, please update your domain's DNS records to point to the instance running Appsmith. Most domain registrars / DNS-providers have documentation on how you can do this yourself.

* [GoDaddy](https://in.godaddy.com/help/create-a-subdomain-4080)
* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/)
* [Digital Ocean](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/)
* [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9776/2237/how-to-create-a-subdomain-for-my-domain)
* [Domain.com](https://www.domain.com/help/article/domain-management-how-to-update-subdomains)

## Instance Management

Appsmith comes with an `appsmithctl` command to help with the management and maintenance of your instance. The following subsections describe what's available.

### Export database

The following command can be used to take a backup dump of Appsmith's database. This can be restored onto another instance using the import command (discussed below) to restore all data.

Before running this, ensure you are in the directory where `docker-compose.yml` is located.

```sh
docker-compose exec appsmith appsmithctl export_db
```

The output file will be stored in the container directory `/appsmith-stacks/data/backup/appsmith-data.archive`. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at `./stacks/data/backup/appsmith-data.archive`.

If your volume configuration is different or unavailable, you can use the following command to copy the archive file to your host disk:

```sh
docker-compose cp appsmith:/appsmith-stacks/data/backup/appsmith-data.archive .
```

Note that you may want to save the `docker.env` file in addition to this archive file, if you intend to be able to reproduce this environment elsewhere, or in case of a disaster. This file can be copied out of the container with the following command:

```sh
docker-compose cp appsmith:/appsmith-stacks/configuration/docker.env .
```

**Be sure to keep this file safe**, since it contains information that can be used to decrypt datasource information from the database archive.

### Import database

The following command can restore backup archive, that was produced by the export command (discussed above).

First, copy the archive file into the container using the following command:

```sh
docker-compose cp ./appsmith-data.archive appsmith:/appsmith-stacks/data/restore/
```

Second, run the following command to import data from this file:

```sh
docker-compose exec appsmith appsmithctl import_db
```

Note that when you restore, you may also want to copy a `docker.env` from the original instance into this one. You can use the following command to do this (assuming you are in the installation folder and `docker.env` exists in the same folder):

```sh
docker-compose cp ./docker.env appsmith:/appsmith-stacks/configuration/
```

This will need a restart of the Appsmith server, which can be done using the following command:

```sh
docker-compose exec appsmith supervisorctl restart backend
```

## Supervisor

The container runs multiple processes, including the Appsmith server, Nginx, MongoDB etc., inside a single Docker container. These processes are started and managed by [supervisord](http://supervisord.org/).

Supervisord comes with a web interface for managing the various processes, available at <http://localhost:9001>, as well as a command line interface towards the same goal.

Here's a screenshot of the web interface listing all the processes managed:

<p>
  <img src="https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/docker/images/appsmith_supervisord_ui.png" width="80%">
</p>

The command line interface can also be used to perform operations like restarting the Appsmith server, or restarting Nginx etc. For example, the following command (run in the installation folder) can be used to get a status of all running processes:

```sh
docker-compose exec appsmith supervisorctl status
```

Or to view the last few lines of stderr output of one of the processes:

```sh
docker-compose exec appsmith supervisorctl tail backend stderr
```

To learn more, please refer to [Supervisor's documentation](http://supervisord.org/running.html#supervisorctl-actions) on what actions are available to be performed by the command line interface.

## Troubleshooting

If you encounter any errors during this process, please reach out to [**support@appsmith.com**](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) and reach out on the #support channel.
Fetch the **install.sh** script on the system you want to deploy Appsmith. The following command will download the `install.sh` script:







## Common Issues

You can debug common errors faced during deployment at the link below

{% page-ref page="../../troubleshooting-guide/deployment-errors.md" %}

## Updating to the latest release

Appsmith auto-updates using Watchtower so you do not need to manually update your appsmith installation. In the odd event that you do, you can run the following command in the installation directory.

```sh
docker-compose pull && docker-compose up -d --force-recreate appsmith
```

## Disable Signup

To disable users from signing up on your self hosted instance, set the below env variables in your docker.env file

```sh
APPSMITH_SIGNUP_DISABLED=true
APPSMITH_ADMIN_EMAILS=YOUR_ADMIN_EMAIL
```

Restart docker and Nginx using the following command

```sh
sudo docker-compose exec supervisorctl restart editor backend
```

This will disable allowing users other than those specified in the `APPSMITH_ADMIN_EMAILS` field from signing up on your appsmith instance. Other users can only signup once they have been invited by an existing user.

{% hint style="success" %}
The signup page will continue to show up but will throw an error when a user tries to sign up.
{% endhint %}

{% hint style="info" %}
Learn about more options to restrict signup, including allowing emails with specific domains to signup at the page on [Restricting Sign-up](../../how-to-guides/restricting-signup.md).
{% endhint %}

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

You may need root access to modify the `docker.env` file.

After making any changes, remember to restart editor and backend for the changes to take affect.

```sh
sudo docker-compose exec supervisorctl restart editor backend
```

{% page-ref page="../../tutorials/" %}
