# Instance Management

Appsmith comes with an `appsmithctl` command to help with the management and maintenance of your instance. The following subsections describe what's available.

## Updating to the latest release

Appsmith auto-updates using Watchtower so you do not need to manually update your appsmith installation. In the odd event that you do, you can run the following command in the installation directory.

```bash
docker-compose pull && docker-compose up -d --force-recreate appsmith
```

## Export database

The following command can be used to take a backup dump of Appsmith's database. This can be restored onto another instance using the import command \(discussed below\) to restore all data.

Before running this, ensure you are in the directory where `docker-compose.yml` is located.

```bash
docker-compose exec appsmith appsmithctl export_db
```

The output file will be stored in the container directory `/appsmith-stacks/data/backup/appsmith-data.archive`. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at `./stacks/data/backup/appsmith-data.archive`.

If your volume configuration is different or unavailable, you can use the following command to copy the archive file to your host disk:

```bash
docker-compose cp appsmith:/appsmith-stacks/data/backup/appsmith-data.archive .
```

Note that you may want to save the `docker.env` file in addition to this archive file, if you intend to be able to reproduce this environment elsewhere, or in case of a disaster. This file can be copied out of the container with the following command:

```bash
docker-compose cp appsmith:/appsmith-stacks/configuration/docker.env .
```

**Be sure to keep this file safe**, since it contains information that can be used to decrypt datasource information from the database archive.

## Import database

The following command can restore backup archive, that was produced by the export command \(discussed above\).

First, copy the archive file into the container using the following command:

```bash
docker-compose cp ./appsmith-data.archive appsmith:/appsmith-stacks/data/restore/
```

Second, run the following command to import data from this file:

```bash
docker-compose exec appsmith appsmithctl import_db
```

Note that when you restore, you may also want to copy a `docker.env` from the original instance into this one. You can use the following command to do this \(assuming you are in the installation folder and `docker.env` exists in the same folder\):

```bash
docker-compose cp ./docker.env appsmith:/appsmith-stacks/configuration/
```

This will need a restart of the Appsmith server, which can be done using the following command:

```bash
docker-compose exec appsmith supervisorctl restart backend
```

## Supervisor

The container runs multiple processes, including the Appsmith server, Nginx, MongoDB etc., inside a single Docker container. These processes are started and managed by [supervisord](http://supervisord.org/).

Supervisord comes with a web interface for managing the various processes, available at [http://localhost:9001](http://localhost:9001), as well as a command line interface towards the same goal.

Here's a screenshot of the web interface listing all the processes managed:

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/docker/images/appsmith_supervisord_ui.png)

The command line interface can also be used to perform operations like restarting the Appsmith server, or restarting Nginx etc. For example, the following command \(run in the installation folder\) can be used to get a status of all running processes:

```bash
docker-compose exec appsmith supervisorctl status
```

Or to view the last few lines of stderr output of one of the processes:

```bash
docker-compose exec appsmith supervisorctl tail backend stderr
```

To learn more, please refer to [Supervisor's documentation](http://supervisord.org/running.html#supervisorctl-actions) on what actions are available to be performed by the command line interface.

