---
sidebar_position: 2
---
# Backup and Restore CLI

Appsmith comes with a command line utility, `appsmithctl`.  You can use it to:
* [Backup your Appsmith instance](#backup-appsmith-instance)
* [Restore your Appsmith instance to a previous version](#restore-appsmith-instance)
* [Export the Appsmith database](#export-database)
* [Import the Appsmith database to a previous version](#import-database)

## Usage
```bash
appsmithctl <subcommand> <options>
```
<VideoEmbed host="youtube" videoId="tlbK8Cke3sw" title="How To Use Appsmithctl For Instance Management" caption="How To Use Appsmithctl For Instance Management"/>


### Subcommands

Subcommands allow you to trigger different operations like exporting or importing databases.

| Subcommand                                        | Description                                  |
| ------------------------------------------------- | -------------------------------------------- |
| `--help`                                          | Show help.                                   |
| [`ex`, `export_db`](appsmithctl.md#ex-export\_db) | Export internal database.                    |
| [`im`, `import_db`](appsmithctl.md#im-import\_db) | Import internal database.                    |
| `mi`, `migrate`                                   | Migrate to a new server.                     |
| `crs`, `check_replica_set`                        | Check Replica Set MongoDB.                   |
| [`backup`](appsmithctl.md#backup)                 | Create a backup of the Appsmith instance.    |
| [`restore`](appsmithctl.md#restore)               | Restore the Appsmith instance from a backup. |

:::info
With **Business Edition,** you can also sync the backups to an AWS S3 bucket.
:::

## Export Database

Use the following command to backup Appsmith's database.

:::info
You can restore the backups onto another instance using the [import](appsmithctl.md#im-import\_db) command to restore data.
:::

### `ex`, `export_db`

Before running this, ensure you are in the directory where <mark >`docker-compose.yml`</mark> is located.

```bash
docker-compose exec appsmith appsmithctl export_db
```

The output file will be stored in the container directory <mark >`/appsmith-stacks/data/backup/appsmith-data.archive`</mark>. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at <mark >`./stacks/data/backup/appsmith-data.archive`</mark>.

If your volume configuration is different or unavailable, you can use the following command to copy the archive file to your host disk:

```bash
docker cp appsmith:/appsmith-stacks/data/backup/appsmith-data.archive .
```

:::info
You may want to **save** the <mark >`docker.env`</mark> file in addition to this **archive** file if you intend to be able to reproduce this environment elsewhere in case of a disaster,
:::

The <mark >`docker.env`</mark> file can be copied from the container with the following command:

```bash
docker cp appsmith:/appsmith-stacks/configuration/docker.env .
```

:::note
Please save the encryption environment variables <mark >`APPSMITH_ENCRYPTION_PASSWORD`</mark> and <mark >`APPSMITH_ENCRYPTION_SALT`</mark>values, from <mark >docker.env</mark> because the backup archive does not include them for security reasons.
:::

## Import Database

The following command can restore the backup archive created by the [export](appsmithctl.md#ex-export\_db) command.

### `im`, `import_db`

* First, copy the archive file into the container using the following command:

```bash
docker cp ./appsmith-data.archive appsmith:/appsmith-stacks/data/restore/
```

* Second, run the following command to import data from this file:

```bash
docker-compose exec appsmith appsmithctl import_db
```

:::info
You may also want to copy the <mark >`docker.env`</mark> from the original instance into this one when you restore.
:::

* Copy the <mark>`docker.env`</mark> file using the below command:

:::tip
If you are in the installation folder and <mark>`docker.env`</mark> exists in the same folder. If not, please append the path where the file resides to the below command.
:::

```bash
docker cp ./docker.env appsmith:/appsmith-stacks/configuration/
```

* Restart the Appsmith server using the following command:

```bash
docker-compose exec appsmith supervisorctl restart backend
```

## Backup Appsmith Instance

Use the following command to create a backup archive of the Appsmith instance. The backup includes the database, `docker.env` data, and Git data.

### backup

Use the command to backup the archive.

:::info
The backed-up archive can then be used to restore an Appsmith instance to the previous state using the restore command.
:::

Before running this, ensure you are in the docker host root directory where <mark>`docker-compose.yml`</mark> is located.

```bash
docker-compose exec appsmith appsmithctl backup
```

The archive file will be stored in the container directory <mark >`/appsmith-stacks/data/backup/`</mark>. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at <mark >`./stacks/data/backup/`</mark>

:::danger
Please save the **encryption env values**, `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT,` from docker.env because the backup archive **does not include** them for security reasons
:::

#### Optional arguments for backup

#### Sync Backup (only for Business Edition)

```bash
appsmithctl backup --upload-to-s3
```

You can choose to sync backups to an AWS S3 bucket (**only for Business Edition**).

* Add the below entries to the <mark >`docker.env`</mark> file to enable the sync:


```
APPSMITH_BACKUP_S3_ACCESS_KEY=<aws access key> 
APPSMITH_BACKUP_S3_SECRET_KEY=<aws secret key>
APPSMITH_BACKUP_S3_BUCKET_NAME=<bucket name> 
APPSMITH_BACKUP_S3_REGION=<aws bucket region>
```


* Use the `--upload-to-s3` option for the **backup** command. The backup command reads bucket details set in the environment variables above and uploads the backup to it.

:::info
Once configured correctly, the [**restore**](appsmithctl.md#restore) command automatically lists the backups in the bucket and the local backups in the CLI menu.
:::

## Restore Appsmith instance

The following command can be used to restore an Appsmith instance from a backup archive.

### `restore`

```bash
docker-compose exec appsmith appsmithctl restore
```

The command first lists all the backup archives in the directory <mark>`/appsmith-stacks/data/backup/`</mark> in ascending/chronological order (the most recent backup archive at the bottom).

:::note
You may see a **warning** if you restore an instance with an **older Appsmith version**. You can follow the **instructions to update** the <mark >`docker-compose.yml`</mark> file with the correct Appsmith image corresponding to the **instance to be restored**.
:::

Enter the index of the corresponding backup archive you want to use to restore.

![Command Line Interface :appsmithctl restore](/img/Restore\_appsmith\_1.png)

In the restored instance, you may use the existing encryption environment variables `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT` of the current Appsmith instance. You can also choose to add the corresponding variables to the backed-up instance.

![Restore option to use existing encryption values](/img/Restore\_appsmith\_2.png)
