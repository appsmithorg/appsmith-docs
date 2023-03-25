---
description: Follow the steps to update Appsmith to the latest version.
---

# Update Appsmith
This page provides steps to update Appsmith to the latest version.

:::info
The steps below apply to both the Community and Business editions.
:::

## Prerequisites
Before you start the update process, make sure you complete the below steps:

* Ensure you have at least 2 GB of free storage space for backup and update tasks.
* You can create a backup of the Appsmith instance before a manual update. For more information, see [Backup Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance) (_Recommended_)
* If you are on a version earlier than v1.9.2, first upgrade to version v1.9.2.  For more information, see [Checkpoint version and upgrade](/getting-started/setup/instance-management#checkpoint-version-and-upgrades).

## Docker Compose
The steps below work with any platform that supports Docker. For example, Docker, AWS AMI, or DigitalOcean.

You can update Appsmith in one of the following ways:

* [Manual update](#manual-update)
* [Automatic update](#automatic-update)

:::info
To find the Appsmith installation directory, run the following command:

```
docker inspect -f '{{ (index .Mounts 0).Source }}' <APPSMITH_CONTAINER_ID>
```
:::

### Manual update
Go to the root directory of your installation and run:

```
docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

### Automatic update

Follow the below steps to turn on the auto updates:

:::info
Before an automatic update, Appsmith creates a backup. You may use this to rollback to a previous version in case of any issues.
:::

1. Go to the root directory of the Appsmith installation and run:

   ```
   docker-compose down
   ```

2. Open the `docker-compose.yml` file and uncomment the below code block:
   
   ```yaml
   #auto_update:
   #  image: containrrr/watchtower
   #  volumes:
   #    - /var/run/docker.sock:/var/run/docker.sock
   #  # Update check interval in seconds.
   #  command: --schedule "0 0 * ? * *" --label-enable --cleanup
   #  restart: unless-stopped
   #  depends_on:
   #    - appsmith
   #  environment:
   #    - WATCHTOWER_LIFECYCLE_HOOKS=true
   ```

3. Save the file and run:

   ```
   docker-compose up -d
   ```

When the server restarts, Appsmith updates to the latest version. This setup runs an Appsmith and a Watchtower container. The Watchtower checks and updates Appsmith when a new version becomes available. 

You may also schedule automatic updates for your instance. For more information, see [Configure auto-updates](/getting-started/setup/instance-management/maintenance-window#adding-a-configurable-maintenance-window-for-appsmiths-auto-updates).

## Troubleshooting

If you see deployment errors, you can rollback to a previous version to fix the issue. For more information, see [Restore Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance). 

If you continue to face issues, contact the [support team](mailto:support@appsmith.com).
