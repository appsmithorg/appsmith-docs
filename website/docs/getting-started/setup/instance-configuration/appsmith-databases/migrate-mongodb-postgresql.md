# Migrate from MongoDB to PostgreSQL

Starting from version v1.47 and above, Appsmith defaults to PostgreSQL as its primary database. When updating to a newer version, you must migrate your data from MongoDB to PostgreSQL. This page provides information and instructions for performing this migration.

## Prerequisites

Before starting the migration, ensure the following requirements are met:

- Back up the Appsmith instance to ensure you can revert if necessary. For more information, see the [Backup Appsmith instance](/getting-started/setup/instance-management/appsmithctl#backup-instance) guide.
- Ensure you have PostgreSQL version 14 or higher. 
- If using an external PostgreSQL instance, verify that the PostgreSQL instance has permissions for both `CREATE SCHEMA` and `CREATE EXTENSION`.

## Get MongoDB connection URL

Follow these steps to get MongoDB connection URL:

1. In Appsmith, open the **Admin settings** page from the top-right corner.

2. Open the Advanced tab, and copy the **Appsmith DB URL**. If the URL is not available, open the environment variable file (`docker.env` for Docker or `values.yaml` for Kubernetes) and copy the `APPSMITH_DB_URL`. The URL looks like:

      ```js
      mongodb://appsmith:Oabc123@localhost:27017/appsmith
      ```

## Migrate Appsmith data

Follow these steps to perform the migration:

1. Access the `appsmith` container to run migration commands.

2. Run the following command to create a dump of your MongoDB data in JSONL format. Replace `<mongo_db_url>` with your MongoDB connection URL that you noted in [Get MongoDB connection URL](#get-mongodb-connection-url) section:

      ```bash
      node /opt/appsmith/utils/bin/move-to-postgres.mjs --mongodb-url=<mongo_db_url>
      ```
      This will store the MongoDB data in the `/appsmith-stacks/mongo-data` directory for transfer.

3. Go to the directory containing the Appsmith configuration file, such as `docker.env` for Docker or `values.yaml` for Kubernetes.

4. Update `APPSMITH_DB_URL` environment variable. If using an external PostgreSQL database, update the `APPSMITH_DB_URL` environment variable with your PostgreSQL connection details:

      ```bash
      export APPSMITH_DB_URL=postgresql://{username}:{password}@{host}:{port}/{db_name}?options
      ```
5. Restart the Appsmith container to apply the changes. The migration process may take time depending on the data volume, so it’s advisable to schedule it during a maintenance window as Appsmith will be unavailable during this process.

6. Log into your Appsmith instance and verify the Apps and App data to confirm the migration is successful.

## Troubleshooting

If issues arise during migration, consider these steps:
* Verify that the specified MongoDB URL in the migration command is accurate.
* Confirm that your PostgreSQL instance is accessible and has the necessary permissions.
* Rollback to the previous version of Appsmith. For more information, see [Restore Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-instance).

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## See also
* [Set up external PostgreSQL for Appsmith](/getting-started/setup/instance-configuration/appsmith-databases/external-postgresql) - Guide to setting up and connecting Appsmith with an external PostgreSQL instance.