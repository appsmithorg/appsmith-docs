---
sidebar_position: 3
---
# Custom MongoDB & Redis

Appsmith runs its instances of MongoDB database for storing all application data, and Redis for storing session information. It's easy to switch to externally running instances of these services, by just changing the relevant environment variables.

:::caution Attention
To use a custom MongoDB with Appsmith v1.9.0 and later, note that it needs to be upgraded to version 5 for compatibility. To upgrade, migrate your MongoDB server to use MongoDB v5 on compliant hardware. See the list of [suggested platforms](https://www.mongodb.com/docs/manual/administration/production-notes/#platform-support). Follow the steps detailed in the MongoDB official documentation to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/).

If you can't upgrade, then downgrade your Appsmith instance to v1.8.15 and continue using it until you are ready to upgrade to MongoDB v5. See the [Downgrade from a checkpoint version](/getting-started/setup/instance-management#downgrade-from-a-checkpoint-version) section.
:::

## Custom MongoDB

To point to a custom MongoDB, update the `env` variable called `APPSMITH_MONGODB_URI` to point to your custom MongoDB server. For example, if you are using [MongoDB Cloud](https://www.mongodb.com/cloud), you can change this to something like the following:

```bash
APPSMITH_MONGODB_URI=mongodb+srv://<username>:<password>@mongo.host.name/databasename
```

The exact URI to be set here can be obtained from MongoDB Cloud's web interface.

:::note Important
* Use a MongoDB database with Appsmith, `replicaSet` needs to be configured on the database. This can be done by connecting to the database as `admin`, and running [`rs.initiate()`](https://docs.mongodb.com/manual/reference/method/rs.initiate/). If you are using MongoDB Cloud, this is always done for you.

* Ensure that the credentials used to connect to MongoDB should have the `readWrite` and `clusterMonitor` roles assigned.
:::

## Custom Redis

To use a custom Redis with Appsmith, please change the `env` variable `APPSMITH_REDIS_URL`. For example,

```bash
APPSMITH_REDIS_URL=redis://hostname:6379
```

## Applying changes

Please remember to [**restart the Appsmith instance**](./) to apply the changes.
