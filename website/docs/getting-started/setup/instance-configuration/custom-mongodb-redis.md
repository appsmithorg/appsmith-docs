---
sidebar_position: 3
toc_max_heading_level: 4
---

# External MongoDB

Appsmith defaults to an embedded MongoDB database. Users may also choose to set up an external MongoDB instance to host Appsmith data. This page provides instructions for configuring an external MongoDB database for Appsmith.

## Prerequisites

Before you begin with the setup, ensure that your environment meets the necessary requirements.

- A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
- Ensure that your external MongoDB instance has a replica set configuration in place. Connect to your database as the `admin` user and run [rs.initiate()](https://docs.mongodb.com/manual/reference/method/rs.initiate/). Note that if you're using MongoDB Cloud _excluding serverless instances of MongoDB Atlas, which don't support replica sets,_ the replica set configuration is already set up for you.
- Ensure the MongoDB user account has `readWrite` and `clusterMonitor` roles assigned.
- At least 2 GB of free storage space for backup and update tasks.
- Before migrating your Appsmith instance to connect with the new MongoDB, make sure to perform a [backup](/getting-started/setup/instance-management/appsmithctl#backup-database) of the old MongoDB and [restore](/getting-started/setup/instance-management/appsmithctl#restore-database) it to the new MongoDB.

## Set up external MongoDB instance

To use an external MongoDB instance with Appsmith, you can either use an existing instance or set up a new one. Follow these steps:

1. Select or create a MongoDB instance. If you don’t already have an instance, you can either create one on your infrastructure or use a cloud provider like MongoDB Atlas. For setting up MongoDB on an Azure VM, follow this guide. 

2. Connect to your MongoDB instance as the admin user and run `rs.initiate()` to enable replica set configuration.

3. Ensure the MongoDB user account that Appsmith will use has `readWrite` and `clusterMonitor` roles assigned.

4. If migrating to an external MongoDB, restore your Appsmith database backup to the new MongoDB instance. For more information, see the Restore Appsmith database guide.

## Connect Appsmith to external MongoDB

Follow these steps to configure Appsmith to connect to an external MongoDB instance:


1. Go to the directory containing the Appsmith configuration file, such as `docker.env` for Docker or `values.yaml` for Kubernetes.


2. Set the `APPSMITH_MONGODB_URI` environment variable with the following format:

<dd>

To connect to an external MongoDB server, you need to update the environment variable `APPSMITH_MONGODB_URI` with your MongoDB credentials in the connection string format. 

If your password or username contains special characters, you need to URL encode them. For instance, if the password is `Something@123`, it should be URL encoded as `Something%40123`, like:

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