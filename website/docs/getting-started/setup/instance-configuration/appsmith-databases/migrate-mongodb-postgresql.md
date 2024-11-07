# Migrate Data from External MongoDB to External PostgreSQL

Starting from version v1.47, Appsmith uses PostgreSQL as the default primary database. If you're upgrading to a newer version, you need to migrate your data from External MongoDB to External PostgreSQL. This page provides the steps and guidance for the migration process.

## Prerequisites

Before starting the migration, ensure the following requirements are met:

- Back up the Appsmith instance to ensure you can revert if necessary. For more information, see the [Backup Appsmith instance](/getting-started/setup/instance-management/appsmithctl#backup-instance) guide.
- Take note of the external MongoDB URL that Appsmith connects to. If you don’t have it, retrieve the value from the `APPSMITH_DB_URL` environment variable in either the `docker.env` for Docker or `values.yaml` for Kubernetes.
- Ensure you have PostgreSQL version 14 or higher. 
- Use an existing PostgreSQL instance or set up a new one. For more information on creating a new PostgreSQL instance, see the [How to set up external PostgreSQL](/getting-started/setup/instance-configuration/appsmith-databases/external-postgresql.md) guide.
- Verify that the external PostgreSQL instance has `CREATE SCHEMA` and `CREATE EXTENSION` permissions granted to the user that Appsmith will use to connect.

## Migrate Appsmith data

Before you begin the Appsmith update, ensure you have met all the [prerequisites](#prerequisites). Follow these steps to perform the migration:

1. Access the `appsmith` container to run migration commands.

2. Run the following command to create a dump of your MongoDB data in JSONL format. Replace `<mongo_db_url>` with your MongoDB connection URL that you noted in the [Prerequisites](#prerequisites) section:

      ```bash
      node /opt/appsmith/utils/bin/move-to-postgres.mjs --mongodb-url=<mongo_db_url>
      ```
      This will store the MongoDB data in the `/appsmith-stacks/mongo-data` directory for transfer.

3. Go to the directory containing the Appsmith configuration file, such as `docker.env` for Docker or `values.yaml` for Kubernetes.

4. Update the `APPSMITH_DB_URL` environment variable with your PostgreSQL connection details. An example update is shown below:

      ```bash
      APPSMITH_DB_URL=postgresql://{username}:{password}@{host}:{port}/{db_name}?options
      ```
5. Restart the Appsmith container to apply the changes. The migration process may take time depending on the data volume, so it’s advisable to schedule it during a maintenance window as Appsmith will be unavailable during this process.

6. Log into your Appsmith instance and verify the Apps and App data to confirm the migration is successful.

## Troubleshooting

If issues arise during migration, consider these steps:
* Verify that the specified MongoDB URL in the migration command is accurate.
* Confirm that your PostgreSQL instance is accessible and has the necessary permissions.
* Roll back to the backup you created in the [Prerequisites](#prerequisites) section. For more information, see [Restore Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-instance).

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.
