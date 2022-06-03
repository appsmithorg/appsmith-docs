# Custom MongoDB & Redis

Appsmith runs it's own instances of MongoDB database for storing all application data, and Redis for storing session information. It's easy to switch to externally running instances of these services, by just changing the relevant environment variables.

## Custom MongoDB

To point to a custom MongoDB, update the env variable called `APPSMITH_MONGODB_URI` to point to your custom MongoDB server. For example, if you are using [MongoDB Cloud](https://www.mongodb.com/cloud), you can change this to something like the following:

```bash
APPSMITH_MONGODB_URI=mongodb+srv://<username>:<password>@mongo.host.name/databasename
```

The exact URI to be set here can be obtained from MongoDB Cloud's web interface.

Note that to use a MongoDB database with Appsmith, replicaSet needs to be configured on the database. This can be done by connecting to the database as admin, and running [`rs.initiate()`](https://docs.mongodb.com/manual/reference/method/rs.initiate/). If you are using MongoDB Cloud, this is always done for you.

## Custom Redis

To use a custom Redis with Appsmith, please change the env variable `APPSMITH_REDIS_URL`. For example,

```bash
APPSMITH_REDIS_URL=redis://hostname:6379
```

## Applying Changes

Please remember to [**restart the Appsmith instance**](./) to apply the changes.
