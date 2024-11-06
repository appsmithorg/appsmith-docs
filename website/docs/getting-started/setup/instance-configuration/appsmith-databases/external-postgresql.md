# External PostgreSQL

Appsmith defaults to an embedded PostgreSQL database. Users may also choose to set up an external PostgreSQL instance to host Appsmith data. This page provides instructions for configuring an external PostgreSQL database for Appsmith.

## Prerequisites

Before you begin with the setup, ensure that your environment meets the necessary requirements.

- Ensure you are on Appsmith version [V.No]. For more information, see [Update Appsmith](/getting-started/setup/instance-management/update-appsmith).
- Make sure you have at least 2 GB of free storage space for backup and restore tasks.
- Ensure you have PostgreSQL version 14 or higher. 
- Create a backup of the current Appsmith database. For more information, see the [Backup Appsmith database](/getting-started/setup/instance-management/appsmithctl#backup-database) guide.

## Set up external PostgreSQL instance

To use an external PostgreSQL database with Appsmith, you can either use an existing instance or set up a new one. Follow these steps:

- Select or create a PostgreSQL instance. If you don’t already have an instance, you can create one either on your infrastructure or by using cloud providers like Amazon RDS or Google Cloud SQL for managed options.
- Assign the following permissions to the user account that Appsmith will use to connect to the database:
  - `CREATE SCHEMA`
  - `CREATE EXTENSION`
- Verify the connection by testing access to the instance with the provided user credentials to ensure they work as expected and have the required permissions.
- Restore the Appsmith database backup taken in the [Prerequisites](#prerequisites) section to this PostgreSQL instance. For more information, see the [Restore Appsmith database](/getting-started/setup/instance-management/appsmithctl#restore-database) guide.

## Connect Appsmith to external PostgreSQL

Once the external PostgreSQL instance is set up, connect the Appsmith instance to the external PostgreSQL. Follow these steps to complete the connection:

- Set the `APPSMITH_DB_URL` environment variable with the following format:
  ```bash
  postgresql://{username}:{password}@{host}:{port}/{db_name}?options
  ```
  Replace `{username}`, `{password}`, `{host}`, `{port}`, and `{db_name}` with the actual details of your PostgreSQL instance.
- Restart the Appsmith server after setting `APPSMITH_DB_URL` to establish a connection with the external PostgreSQL database. This ensures that Appsmith starts using the configured PostgreSQL instance for all database operations.

## Troubleshooting

If you are facing issues, contact the support team using the chat widget at the bottom right of this page.

## See also
* [Migrate MongoDB to PostgreSQL](/getting-started/setup/instance-configuration/appsmith-databases/migrate-mongodb-postgresql) - Stepwise instructions to migrate your MongoDB data to PostgreSQL.

