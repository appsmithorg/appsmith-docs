---
description: Keep your Appsmith installation up-to-date. Follow these simple steps to update the Appsmith installation to the latest version for your platform.
---

# Update Appsmith
This page describes the steps for updating Appsmith to the latest version for your installation type.

## Prerequisites
Before you update your Appsmith installation, ensure that you have completed the following steps:

* A minimum of 2 GB of free storage must be available for both the backup and update tasks to run successfully.
* Create a backup of the Appsmith instance before performing a manual update. For more information about creating a backup, see [Backup Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance).
* If you are on a version earlier than v1.9.2, upgrade to version v1.9.2 before upgrading to the latest version. For more information about upgrading to checkpoint version, see [Checkpoint version and upgrade](/getting-started/setup/instance-management#checkpoint-version-and-upgrades).

## Docker Compose
To update Appsmith, follow these steps on Docker Compose or any other platform that uses docker-compose (like AWS AMI or DigitalOcean). You can update Appsmith by one of the following ways:

* [Update manually](#update-manually)
* [Automatic update](#automatic-update)

### Update manually
To update Appsmith manually, go to the root directory of the installation and run the following command:

```
docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

### Automatic update

To update Appsmith automatically, you need to turn on the automatic updates. Follow the below steps:

1. Go to the root directory of the Appsmith installation and run:

   ```
   docker-compose down
   ```

2. Open the `docker-compose.yml` file with any text editor and uncomment lines 13-23.
3. Save the file and run:

   ```
   docker-compose up -d
   ```

The server restart updates the Appsmith to the latest version. 

If you face issues:
* Try to roll back to a previous version, see [Rollback](#rollback) section.
* Check the troubleshooting guide, see [Deployment Errors](/help-and-support/troubleshooting-guide/deployment-errors)

## Rollback
The auto backup feature is also turned on when you turn on automatic updates. This means that Appsmith is first backed up before updating to the latest version. You can use the backup version to roll back if you face any issues during the update. For more information, see [the rollback instructions using the `appsmithctl` command](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance). 

## Troubleshooting

If you see any errors during deployment, refer to [Deployment Errors](/help-and-support/troubleshooting-guide/deployment-errors) troubleshooting guide. This guide provides detailed information on troubleshooting common deployment errors you may encounter.