---
description: Follow the steps to update Appsmith to the latest version.
---

# Update Appsmith
This page provides instructions to update Appsmith to the latest version.

## Prerequisites
Ensure that you complete the following steps before starting the update process.

* At least 2 GB of free storage.
* Create a backup of the Appsmith instance before a manual update. Refer to the [Backup Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance) section.
* If you are on a version earlier than v1.9.2, first upgrade to version v1.9.2. Refer to the [Checkpoint version and upgrade](/getting-started/setup/instance-management#checkpoint-version-and-upgrades) section.

## Docker Compose
Follow the below steps on Docker or platforms that use `docker-compose`. For example, AWS AMI or DigitalOcean.  

You can update Appsmith in one of the following ways:

* [Manual update](#manual-update)
* [Automatic update](#automatic-update)

### Manual update
Go to the root directory of the installation and run:

```
docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

### Automatic update

Follow the below steps to turn on the auto updates:

1. Go to the root directory of the Appsmith installation and run:

   ```
   docker-compose down
   ```

2. Open the `docker-compose.yml` file with any text editor and uncomment lines 13-23.
3. Save the file and run:

   ```
   docker-compose up -d
   ```

The server restart updates the Appsmith to the latest version. You can choose to schedule automatic updates. Refer to [Configure a maintenance window](/getting-started/setup/instance-management/maintenance-window#adding-a-configurable-maintenance-window-for-appsmiths-auto-updates).

## Troubleshooting

When you turn on automatic updates, it turns on the auto backup feature. And creates a backup before an update. You can roll back to a previous version if you see deployment errors. Refer to [the rollback instructions using the `appsmithctl` command](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance). 

If you are still having issues, reach out to the support team on the <a href="#!" onclick="Intercom('show')">chat widget</a>.
