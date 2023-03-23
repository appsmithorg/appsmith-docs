---
description: Follow the steps to update Appsmith to the latest version.
---

# Update Appsmith
This page provides instructions to update Appsmith to the latest version.

## Prerequisites
Ensure that you complete the following steps before starting the update process.

* For backup and update tasks, you need at least 2 GB of free storage.
* You need to create a backup of the Appsmith instance before a manual update. To create a backup, see the [Backup Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance) section.
* If you are on a version earlier than v1.9.2, first upgrade to version v1.9.2. To upgrade, see the [Checkpoint version and upgrade](/getting-started/setup/instance-management#checkpoint-version-and-upgrades) section.

## Docker Compose
Follow the below steps on Docker or platforms that use `docker-compose`. For example, AWS AMI or DigitalOcean.  

You can update Appsmith in one of the following ways:

* [Manual update](#manual-update)
* [Automatic update](#automatic-update)

### Manual update
Go to the root directory of your installation and run:

```
docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

### Automatic update

Follow the below steps to turn on the auto updates:

1. Go to the root directory of the Appsmith installation and run:

   ```
   docker-compose down
   ```

2. Open the `docker-compose.yml` file and uncomment lines 13-23.
3. Save the file and run:

   ```
   docker-compose up -d
   ```

Restarting the server deploys the latest version of Appsmith. You have the option to schedule automatic updates for your instance. To schedule automatic updates, see [Configure auto-updates](/getting-started/setup/instance-management/maintenance-window#adding-a-configurable-maintenance-window-for-appsmiths-auto-updates).

## Troubleshooting

When you turn on automatic update, it first creates a backup and then starts the update. If you see deployment errors, you can roll back to a previous version to fix the issue. To roll back, see [the rollback instructions using the `appsmithctl` command](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance). 

If you continue to face issues, reach out to the support team on the <a href="#!" onclick="Intercom('show')">chat widget</a>.
