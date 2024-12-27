---
description: Learn how to set up an external MongoDB instance for your Appsmith application to store application data.
toc_max_heading_level: 2
---

# Configure External MongoDB

Appsmith runs embedded instances of MongoDB and Redis. It uses MongoDB for data storage. You can also switch to an external MongoDB instance to enable better performance, scalability, and reliability. This page provides steps on how to set up an external MongoDB instance and how to connect it to your Appsmith instance.

## Prerequisites

Before configuring an external MongoDB instance for your Appsmith application, ensure the following:

- This guide applies only to **self-hosted Appsmith** instances. If not already installed, refer to the [installation](/getting-started/setup/installation-guides) guides.
- Ensure at least **2 GB of free storage space** is available on your server to manage backups and configurations.

## Create MongoDB instance (optional)

Follow these steps to set up an external MongoDB instance for Appsmith. If you already have a MongoDB instance, skip this step and move to [Verify external MongoDB permissions](#verify-external-mongodb-permissions).

1. From Appsmith v1.9.0 onwards, MongoDB version 5.0 or later is required. Create a MongoDB instance using one of the following options:  
   - **Cloud-hosted MongoDB:** Refer to the [MongoDB Atlas setup guide](https://www.mongodb.com/cloud/atlas).  
   - **Self-hosted MongoDB:** Install and configure it by following the [MongoDB installation documentation](https://www.mongodb.com/docs/manual/installation/).  
    <br/>
    :::caution Attention
    If you're using an existing MongoDB instance with a version earlier than 5.0, refer to the [MongoDB 5.0 upgrade guide](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/) to upgrade.
    :::
    
2. Log in to your MongoDB instance as an admin user.

3. Run the following command to set up the replica set:

   ```bash
   rs.initiate()
   ```

4. Retrieve the connection string for your MongoDB instance. For example:

   ```bash
   mongodb+srv://{username}:{password}@{mongo.host.name}/{db_name}
   ```
   Store this connection string securely. You need this to configure the MongoDB instance on Appsmith.

## Verify external MongoDB permissions

Ensure the user Appsmith uses to connect to the database has the necessary permissions:

- **For a new user**: Create a new user and assign the following roles:  
  - `readWrite`  
  - `clusterMonitor`  

- **For an existing user**: Check if the user already has the required roles. If not, update the user to assign the following roles:  
  - `readWrite`  
  - `clusterMonitor`  

## Restore MongoDB data

Follow these steps to migrate the data from the old MongoDB instance to the new instance:

1. Take a backup of your existing MongoDB instance. For detailed steps, see the [Backup database](/getting-started/setup/instance-management/backup-and-restore/backup-database) guide.
2. Restore the backup to your new MongoDB instance. For detailed steps, see the [Restore database backup](/getting-started/setup/instance-management/backup-and-restore/restore-database) guide.

## Connect Appsmith to external MongoDB

Follow these steps to connect the Appsmith instance to the external MongoDB instance:

1. Go to the directory containing the Appsmith configuration file, such as `docker.env` for Docker or `values.yaml` for Kubernetes.

2. Set the `APPSMITH_DB_URL` environment variable with the following format. If your `{username}` or `{password}` contains special characters, encode them before adding it to the environment variable. For more information, see [Encode special characters to URL-encoded format](https://www.urlencoder.org/).

    ```yaml
    APPSMITH_DB_URL=mongodb+srv://{username}:{password}@{mongo.host.name}/{db_name}
    ```

    Replace the placeholders with the actual values:  
      - **`{username}`:** The username for your MongoDB database.  
      - **`{password}`:** The corresponding password for the specified username.  
      - **`{mongo.host.name}`:** The hostname or IP address of your MongoDB server. 
      - **`{db_name}`:** The name of your database within MongoDB. This is the database you want to connect to.  

3. Update the Appsmith server configuration to establish a connection with the external MongoDB database. This ensures that Appsmith starts using the configured MongoDB instance for all database operations.

   - **Docker**:

     ```bash
     docker-compose down && docker-compose up -d
     ```

   - **Kubernetes:**

     ```bash
     helm upgrade -i appsmith-ee appsmith-ee/appsmith -n appsmith-ee -f values.yaml
     ```

4. Log in to your Appsmith application and check if the instance is functioning as expected.

5. Verify that the data is stored in the external MongoDB instance.

## Troubleshooting

If you face connection issues:
- Ensure your MongoDB instance is accessible from the Appsmith server.
- Verify the user credentials used for setting up the connection.
- Ensure the roles are accurately configured.

If you continue facing issues, contact support using the chat widget available in the bottom-right corner of this page.

## See also

- [Configure External Redis](/getting-started/setup/instance-configuration/external-redis): Learn how to set up an external Redis instance.