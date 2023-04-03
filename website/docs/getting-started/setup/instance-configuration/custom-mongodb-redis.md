---
sidebar_position: 3
toc_max_heading_level: 4
---
# External MongoDB & Redis

This page provides steps for setting up Appsmith with external MongoDB and Redis. By setting up an external MongoDB, you can link your managed MongoDB to Appsmith. At the same time, an external Redis allows you to customize your Redis session management. With external MongoDB and Redis, you can manage your application's scalability and performance.

:::caution Attention
To use a custom MongoDB with Appsmith v1.9.0 and later, you need MongoDB version 5 or higher. Follow the steps detailed in the MongoDB official documentation to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/).
:::

## External MongoDB
Follow the below steps to set up an external MongoDB:

### Prerequisites
* Ensure a replica set configuration is in place on your external MongoDB. See [How to configure the replica set using rs.initiate()](https://docs.mongodb.com/manual/reference/method/rs.initiate/).
* Ensure that the user you are connecting with has `readWrite` and `clusterMonitor` permissions.

### Configure
On Appsmith, you can add your external MongoDB by using one of the below ways:

* [Admin Settings](#admin-settings)
* [Environment Variables](#environment-variable)

#### Admin settings
You can use the Admin Settings User Interface to set up an external MongoDB. The **MongoDB URI** property is present under **Advanced** Settings. Add the MongoDB URI to the setting and click the **SAVE & RESTART** button. The server restart establishes a connection with the external MongoDB.

<figure>
  <img src="/img/setup-external-mongodb-using-admin-settings.png" style= {{width:"700px", height:"auto"}} alt="Setup an external MongoDB using Admin settings"/>
  <figcaption align = "center"><i>Setup an external MongoDB using Admin settings</i></figcaption>
</figure>

#### Environment variable
To connect to an external MongoDB server, update the environment variable `APPSMITH_MONGODB_URI`. For example, if you want to connect to [MongoDB Cloud](https://www.mongodb.com/cloud), set the value as shown below:

```bash
APPSMITH_MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<MONGO.HOST.NAME>/<DATABASENAME>
```
Restart the Appsmith container by using the below command:

```bash
docker-compose restart appsmith
```

## Custom Redis
You can add your external Redis to Appsmith using one of the below ways:

* [Admin Settings](#admin-settings-1)
* [Environment Variables](#environment-variable-1)

#### Admin settings
You can use the Admin Settings User Interface to set up an external Redis. The **Redis URL** property is present under **Advanced** Settings. Add the Redis URL to the setting and click the **SAVE & RESTART** button. The server restart establishes a connection with the external Redis.

<figure>
  <img src="/img/setup-external-redis-using-admin-settings.png" style= {{width:"700px", height:"auto"}} alt="Setup an external Redis using Admin settings"/>
  <figcaption align = "center"><i>Setup an external Redis using Admin settings</i></figcaption>
</figure>

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
Some common errors that you may face after external configuration:
* [The server is not booting because of MongoCommandException](/help-and-support/troubleshooting-guide/deployment-errors?current-edition=BE#server-not-booting-because-of-mongocommandexception)
* [The server shuts down with a Schema mismatch error](/help-and-support/troubleshooting-guide/deployment-errors?current-edition=BE#server-shuts-down-with-schema-mismatch-error)
* [Illegal instruction (core dumped) exception](/help-and-support/troubleshooting-guide/deployment-errors?current-edition=BE#illegal-instruction-core-dumped) 

If you continue to face issues, reach out to the [support team](mailto:support@appsmith.com).

## Further reading
- [System logs](/learning-and-resources/how-to-guides/how-to-get-container-logs)
- [Instance Management](/getting-started/setup/instance-management) 