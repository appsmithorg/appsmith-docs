---
sidebar_position: 3
toc_max_heading_level: 4
---

# External MongoDB and Redis

Appsmith runs embedded instances of MongoDB and Redis. It uses MongoDB and Redis for data storage and session management. You can also switch to external instances. Using external instances makes the Appsmith container stateless, enabling better performance and scalability. Follow the steps on this page to set up external MongoDB and Redis for Appsmith.

:::caution Attention
To use external MongoDB with Appsmith v1.9.0 onwards, you need MongoDB version 5 or higher. Follow the steps in the MongoDB official documentation to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/)
:::

## External MongoDB

Follow the steps below to configure Appsmith to use an external MongoDB instance:

### Prerequisites

- A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
- Ensure that your external MongoDB has a replica set configuration in place. Connect to your database as an admin user and run [rs.initiate()](https://docs.mongodb.com/manual/reference/method/rs.initiate/). Note that if you're using MongoDB Cloud, the replica set configuration is already set up for you.
- Ensure the MongoDB user account has `readWrite` and `clusterMonitor` roles assigned.
- At least 2 GB of free storage space for backup and update tasks.
- Before migrating your Appsmith instance to connect with the new MongoDB, make sure to perform a [backup](/getting-started/setup/instance-management/appsmithctl#backup-database) of the old MongoDB and [restore](/getting-started/setup/instance-management/appsmithctl#restore-database) it to the new MongoDB.

### Configure instance

On Appsmith, you can add your external MongoDB by using one of the below ways:

- [Admin Settings](#admin-settings)
- [Environment Variables](#environment-variable)

#### Admin settings

You can use [Admin Settings](/getting-started/setup/instance-configuration#admin-settings) to set up an external MongoDB. The **MongoDB URI** property is present under **Advanced** Settings. Add your MongoDB URI to the setting and click the **SAVE & RESTART** button. The server restart establishes a connection with the external MongoDB.

<ZoomImage src="/img/setup-external-mongodb-using-admin-settings.png" alt="Setup an external MongoDB using Admin settings" caption="Setup an external MongoDB using Admin settings" />

:::info
If you have set values using [environment variables](#environment-variables) for your instance, those values take precedence over values specified in the Admin Settings UI.
:::

#### Environment variable

To connect to an external MongoDB server, update the environment variable `APPSMITH_MONGODB_URI`. For example, if you want to connect to [MongoDB Cloud](https://www.mongodb.com/cloud), set the value as shown below:

```bash
APPSMITH_MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<MONGO.HOST.NAME>/<DATABASENAME>
```

Restart the Appsmith container by using the below command:

```bash
docker-compose restart appsmith
```

## External Redis

You can add your external Redis to Appsmith using one of the below ways:

- [Admin Settings](#admin-settings-1)
- [Environment Variables](#environment-variable-1)

#### Admin settings

You can use [Admin Settings](/getting-started/setup/instance-configuration#admin-settings) to set up an external Redis. The **Redis URL** property is present under **Advanced** Settings. Add your Redis URL to the setting and click the **SAVE & RESTART** button. The server restart establishes a connection with the external Redis.

<ZoomImage src="/img/setup-external-redis-using-admin-settings.png" alt="Setup an external Redis using Admin settings" caption="Setup an external Redis using Admin settings" />

#### Environment variable

To connect to an external Redis server, update the environment variable `APPSMITH_REDIS_URL`:

```bash
APPSMITH_REDIS_URL=redis://hostname:6379
```

Restart the Appsmith container by using the below command:

```bash
docker-compose restart appsmith
```

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

- [Container logs](/getting-started/setup/instance-management/how-to-get-container-logs)
- [Instance Management](/getting-started/setup/instance-management)
