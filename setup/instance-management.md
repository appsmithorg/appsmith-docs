# Instance Management

Appsmith comes with an `appsmithctl` command to help with the management and maintenance of your instance. The following subsections describe what's available.

## Updating to the latest release

Appsmith auto-updates using Watchtower so you do not need to manually update your appsmith installation. In the odd event that you do, you can run the following command in the installation directory.

```bash
// To restart appsmith without docker compose
docker pull appsmith/appsmith-ce && docker restart appsmith

// To restart appsmith with docker compose
docker-compose pull && docker-compose up -d --force-recreate appsmith
```

## Export database

The following command can be used to make a backup dump of Appsmith's database. This can be restored onto another instance using the import command (discussed below) to restore all data.

Before running this, ensure you are in the directory where `docker-compose.yml` is located.

```bash
docker-compose exec appsmith appsmithctl export_db
```

The output file will be stored in the container directory <mark style="color:red;">`/appsmith-stacks/data/backup/appsmith-data.archive`</mark>. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at <mark style="color:red;">`./stacks/data/backup/appsmith-data.archive`</mark>.

If your volume configuration is different or unavailable, you can use the following command to copy the archive file to your host disk:

```bash
docker cp appsmith:/appsmith-stacks/data/backup/appsmith-data.archive .
```

Note that you may want to save the `docker.env` file in addition to this archive file, if you intend to be able to reproduce this environment elsewhere, or in case of a disaster. This file can be copied out of the container with the following command:

```bash
docker cp appsmith:/appsmith-stacks/configuration/docker.env .
```

**Be sure to keep this file safe**, since it contains information that can be used to decrypt datasource information from the database archive.

## Import database

The following command can restore the backup archive, that was produced by the export command (discussed above).

First, copy the archive file into the container using the following command:

```bash
docker cp ./appsmith-data.archive appsmith:/appsmith-stacks/data/restore/
```

Second, run the following command to import data from this file:

```bash
docker-compose exec appsmith appsmithctl import_db
```

Note that when you restore, you may also want to copy a `docker.env` from the original instance into this one. You can use the following command to do this (assuming you are in the installation folder and `docker.env` exists in the same folder):

```bash
docker cp ./docker.env appsmith:/appsmith-stacks/configuration/
```

This will need a restart of the Appsmith server, which can be done using the following command:

```bash
docker-compose exec appsmith supervisorctl restart backend
```

## Supervisor

The container runs multiple processes, including the Appsmith server, Nginx, MongoDB, etc., inside a single Docker container. These processes are started and managed by [Supervisor](http://supervisord.org).

Supervisor comes with a web interface for managing the various processes, available at [http://localhost:9001](http://localhost:9001), as well as a command-line interface towards the same goal.

Here's a screenshot of the web interface listing all the processes managed:

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/docker/images/appsmith\_supervisord\_ui.png)

The command-line interface can also be used to perform operations like restarting the Appsmith server, restarting Nginx, etc. For example, the following command (run in the installation folder) can be used to get the status of all running processes:

```bash
docker-compose exec appsmith supervisorctl status
```

Or to view the last few lines of stderr output of one of the processes:

```bash
docker-compose exec appsmith supervisorctl tail backend stderr
```

To learn more, please refer to [Supervisor's documentation](http://supervisord.org/running.html#supervisorctl-actions) on what actions are available to be performed by the command-line interface.

## Turn auto-updates off

In your `docker-compose.yml` file, the `auto_update` container is responsible for periodically checking for updates to Appsmith and applying those updates. If you wish to disable this auto-updating, please run the following command:

```
docker-compose rm -s -v -f auto_update
```

This will bring down the `auto_update` container, and update checks are no-longer performed. Note that however, if you run `docker-compose up -d` later, for any reason, then this `auto_update` will be brought up again. You can use that to turn auto-updates on again in the future.

To check if auto updates are turned on in your instance, please run `docker-compose ps` and see if there a server called `auto_update` listed in the output, and if it's status is `Up`. If not, then auto updates are turned off for your instance.
