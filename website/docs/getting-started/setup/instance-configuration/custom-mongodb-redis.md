---
sidebar_position: 3
toc_max_heading_level: 4
---

# External MongoDB

Appsmith defaults to an embedded MongoDB database. Users may also choose to set up an external MongoDB instance to host Appsmith data. This page provides instructions for configuring an external MongoDB database for Appsmith.

## Prerequisites

Before you begin with the setup, ensure that your environment meets the necessary requirements.

- Ensure you are on Appsmith version v1.47 or greater. For more information, see [Update Appsmith](/getting-started/setup/instance-management/update-appsmith).
- Make sure you have at least 2 GB of free storage space for backup and restore tasks.
- Ensure you have PostgreSQL version 14 or higher. 
- Create a backup of the current Appsmith database. For more information, see the [Backup Appsmith database](/getting-started/setup/instance-management/appsmithctl#backup-database) guide.

## Set up external MongoDB instance

To use an external MongoDB instance with Appsmith, you can either use an existing instance or set up a new one. Follow these steps:

1. Select or create a MongoDB instance. If you don’t already have an instance, you can either create one on your infrastructure or use a cloud provider like MongoDB Atlas. For setting up MongoDB on an Azure VM, follow this guide. 

2. Connect to your MongoDB instance as the admin user and run `rs.initiate()` to enable replica set configuration.

3. Ensure the MongoDB user account that Appsmith will use has `readWrite` and `clusterMonitor` roles assigned.

4. If migrating to an external MongoDB, restore your Appsmith database backup to the new MongoDB instance. For more information, see the Restore Appsmith database guide.

## Connect Appsmith to external MongoDB

1. Go to the directory containing the Appsmith configuration file, such as docker.env for Docker or values.yaml for Kubernetes.


2. Set the `APPSMITH_MONGODB_URI` environment variable with the following format:

<dd>

To connect to an external MongoDB server, you need to update the environment variable APPSMITH_MONGODB_URI with your MongoDB credentials in the connection string format. 

If your password or username contains special characters, you need to URL encode them. For instance, if the password is Something@123, it should be URL encoded as Something%40123, like:

```js
// Syntax
APPSMITH_MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<MONGO.HOST.NAME>/<DATABASENAME>

// Example - password encoded
APPSMITH_MONGODB_URI=mongodb://appsmithadmin:Something%40123@1.3.4.5:27017/appsmith?retryWrites=true
```

To learn how to URL encode your username and password, see Encode to URL-encoded format.



</dd>

3. Restart the Appsmith server after setting `APPSMITH_MONGODB_URI` to establish a connection with the external MongoDB database.

<dd>

```bash
docker-compose restart appsmith
```

</dd>