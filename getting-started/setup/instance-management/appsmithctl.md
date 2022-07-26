# Appsmithctl

Appsmith comes with an `appsmithctl` command to help with the management and maintenance of your instance.

### Appsmithctl Command-Line Options

| Subcommand                                        | Description                              |
| ------------------------------------------------- | ---------------------------------------- |
| `--help`                                          | Show help.                               |
| [`ex`, `export_db`](appsmithctl.md#ex-export_db)  | Export internal database.                |
| [`im`, `import_db`](appsmithctl.md#im-import_db)  | Import internal database.                |
| `mi`, `migrate`                                   | Migrate to a new server.                 |
| `crs`, `check_replica_set`                        | Check Replica Set MongoDB.               |
| [`backup`](appsmithctl.md#backup)                 | Create a backup of Appsmith instance.    |
| [`restore`](appsmithctl.md#restore)               | Restore Appsmith instance from a backup. |

### Export Database

The following command can be used to make a backup dump of Appsmith's database. This can be restored onto another instance using the import command (discussed below) to restore all data.

#### `ex`, `export_db`

Before running this, ensure you are in the directory where `docker-compose.yml` is located.

```bash
docker-compose exec appsmith appsmithctl export_db
```

The output file will be stored in the container directory <mark style="color:red;">`/appsmith-stacks/data/backup/appsmith-data.archive`</mark>. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at <mark style="color:red;">`./stacks/data/backup/appsmith-data.archive`</mark>.

If your volume configuration is different or unavailable, you can use the following command to copy the archive file to your host disk:

```bash
docker cp appsmith:/appsmith-stacks/data/backup/appsmith-data.archive .
```

{% hint style="info" %}
You may want to **save** the `docker.env` file in addition to this **archive** file if you intend to be able to reproduce this environment elsewhere in case of a disaster,
{% endhint %}

The `docker.env`  file can be copied out of the container with the following command:

```bash
docker cp appsmith:/appsmith-stacks/configuration/docker.env .
```

**Be sure to keep this file safe**, since it contains information that can be used to decrypt datasource information from the database archive.

### Import Database

The following command can restore the backup archive, that was produced by the export command (discussed above).

#### `im`, `import_db`

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

### Backup Appsmith instance

The following command can be used to create a backup archive of the Appsmith instance, which includes the database, `docker.env` data, and Git data.

#### backup

This archive can be used to restore an Appsmith instance to the backed-up state using the restore command.

Before running this, ensure you are in the directory where `docker-compose.yml` is located (Docker host root Directory).

```
docker-compose exec appsmith appsmithctl backup
```

The archive file will be stored in the container directory <mark style="color:red;">`/appsmith-stacks/data/backup/`</mark>. Thanks to the volume configuration in the `docker-compose.yml` file, it should be available on your host machine at <mark style="color:red;">`./stacks/data/backup/`</mark>

{% hint style="danger" %}
Please save the **encryption env values**, `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT` from docker.env because the backup archive **does not include** them for security reasons.
{% endhint %}

### Restore Appsmith instance

The following command can be used to restore an Appsmith instance from a backup archive.&#x20;

#### `restore`

```
docker-compose exec appsmith appsmithctl restore
```

The command first lists all the backup archives in the directory `/appsmith-stacks/data/backup/` in ascending/chronological with the most recent backup archive located at the bottom.

{% hint style="warning" %}
If you are restoring an instance with an **older Appsmith version**, then you may observe a **warning**. In this case, please follow the **instructions to update** the `docker-compose.yml` file with the correct Appsmith image corresponding to the **instance to be restored**.
{% endhint %}

Enter the index of the corresponding backup archive you want to use to restore.

![](../../../.gitbook/assets/Restore\_appsmith\_1.png)

In the restored instance, you have the option to use the existing encryption environment variables `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT` of the existing Appsmith instance, or you can manually input these values corresponding to the backed-up instance.

![](../../../.gitbook/assets/Restore\_appsmith\_2.png)
