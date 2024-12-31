---
description: This page outlines how to migrate Keycloak data for Appsmith Users on AWS ECS using Fargate.
toc_max_heading_level: 2
---

# Migrate Keycloak Data on Fargate

This page outlines how to migrate Keycloak data for Appsmith Users on AWS ECS using Fargate.

## Prerequisites

Before migrating the Keycloak data, ensure you have completed the following:

1. Ensure you have at least 2 GB of free storage available to perform backups and handle update tasks without interruptions.
2. Ensure you have created a PostgreSQL RDS instance. If not already, see [Configure PostgreSQL instance](/getting-started/setup/installation-guides/aws-ecs/set-up-high-availability#configure-postgresql) guide.


## Backup Keycloak data

Before setting up PostgreSQL for Keycloak, **backing up Keycloak’s data is only necessary if you have an Appsmith installation with user data** and are migrating to an external PostgreSQL database. Follow these steps to create a backup of the user data:

1. Navigate to the Keycloak directory:
   ```
      cd /opt/keycloak/bin
   ```
2. Export Keycloak data to a backup directory:
   ```
      ./kc.sh export --dir /appsmith-stacks/data/kc_data/
   ```
3. Verify that the data back up is available in the specified directory.

## Restore Keycloak data

If you have created a backup of Keycloak data in the [Backup Keycloak data](#backup-keycloak-data-optional) section, you need to restore that data to the new PostgreSQL database to migrate the user data. Follow these steps to migrate the user data to the new database:

1. Navigate to the Keycloak directory:
   ```
      cd /opt/keycloak/bin
   ```
2. Stop the Keycloak service:
   ```
      supervisorctl stop keycloak
   ```
3. Import the backup data into PostgreSQL:
   ```
      ./kc.sh import --db postgres --db-password ${APPSMITH_KEYCLOAK_DB_PASSWORD} --db-username ${APPSMITH_KEYCLOAK_DB_USERNAME} --db-url "jdbc:${APPSMITH_KEYCLOAK_DB_DRIVER}://${APPSMITH_KEYCLOAK_DB_URL}" --dir /appsmith-stacks/data/kc_data/
   ```
4. Once the data is restored, restart Keycloak:
   ```
      supervisorctl start keycloak
   ```

Verify that Keycloak is running properly by logging into the Appsmith dashboard after the restoration.

## Troubleshooting

If you encounter issues, follow these steps:

- Check the **logs** in the ECS console for detailed error messages that may indicate the root cause. For more information, see [Get Container Logs](/getting-started/setup/instance-management/how-to-get-container-logs?current-platform=ecs#get-logs) guide.

If you continue facing issues, contact support using the chat widget available in the bottom-right corner of this page.
