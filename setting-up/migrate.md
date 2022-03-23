# Migrating to new deployment

This guide will help you migrate your Appsmith instance running on the old stack (multiple containers), to the new stack (single container).

Let's say your current Appsmith instance is located in the folder `~/appsmith-old`, and you'd like the new setup be at `~/appsmith-new`. (This are just example folder names, please use what you prefer.)

Then we can see a rough folder structure like this for `~/appsmith-old`:

```
~/appsmith-old
├── data
│   ├── certbot
│   │   ├── conf
│   │   └── www
│   ├── mongo
│   │   ├── db
│   │   └── init.js
│   └── nginx
│       └── app.conf.template
├── docker-compose.yml
├── docker.env
└── encryption.env
```

And like this for `~/appsmith-new` (after the steps in this document are done):

```
~/appsmith-new
├── docker-compose.yml
└── stacks
    ├── configuration
    │   ├── docker.env
    │   └── mongo-init.js
    ├── data
    │   ├── backup
    │   ├── certificate
    │   ├── mongodb
    │   └── restore
    └── letsencrypt
        ├── accounts
        ├── archive
        ├── conf
        ├── csr
        ├── keys
        ├── live
        ├── options-ssl-nginx.conf
        ├── renewal
        ├── renewal-hooks
        ├── ssl-dhparams.pem
        └── www
```

Now let's go over the steps to be performed.

## 1. Shutdown old appsmith instance

This whole migration should take under 25-30mins, usually less than that.

But before we can start the migration, please stop the old instance with the following command:

```
docker-compose --file ~/appsmith-old/docker-compose.yml down
```

## 2. Export database

- To export data from the running `MongoDB` database, we use the `mongodump` command, which will create a `gzip` archive with all the data.

- This file will be copied to the new setup and imported.

Create backup folder to store dump file:

```
docker-compose exec mongo mkdir -pv /data/db/backup
```

Dumping MongoDB data and compressed into a gzip file:

```
docker-compose exec mongo sh -c 'mongodump --uri="$APPSMITH_MONGODB_URI" --archive=/data/db/backup/appsmith-data.archive --gzip'
```

*Note: The container name may be different in case you have made changes on the `docker-compose.yml` file. Please check and use the correct `MongoDB` container name*

## 3. Migrate Configuration

The new setup uses a single `docker.env` file for all environment variable configuration.

Let's create the folder structure needed:

```
mkdir -pv ~/appsmith-new/stacks/configuration
```

Migrate configuration from old location:

```
cat ~/appsmith-old/docker.env ~/appsmith-old/encryption.env >> ~/appsmith-new/stacks/configuration/docker.env
```

Unless you are using an external MongoDB database, in `APPSMITH_MONGODB_URI`, please change the `@mongo` part to `@localhost`, and remove the query params (the `?` and everything after it). For example, if the current value is `mongodb://root:rootpass@mongo/appsmith?retryWrites=true&authSource=admin`, change it to be just `mongodb://root:rootpass@localhost/appsmith`.

Unless you are using an external Redis instance, in `APPSMITH_REDIS_URL`, please change `redis://redis:6379` to `redis://localhost:6379`. That is, change the host from `redis` to `localhost.`

At the end of this `docker.env` file, let's add the following new environment variables:

```
APPSMITH_MONGODB_USER=<Your MongoDB User>
APPSMITH_MONGODB_PASSWORD=<Your MongoDB Password>
APPSMITH_API_BASE_URL=http://localhost:8080
```

Here, in place of `<Your MongoDB User>` and `<Your MongoDB Password>`, please use the same username and password that were given to `APPSMITH_MONGODB_URI` above. In the above example values, these would be `root` for user and `rootpass` for password.

## 4. Export https config & certificate (Optional)

If you are not using a custom domain with your Appsmith instance, please skip this step.

If you don't have `APPSMITH_CUSTOM_DOMAIN` already configured in your `docker.env`, please add a line like below

```
echo APPSMITH_CUSTOM_DOMAIN=appsmith.mycustomdomain.com >> ~/appsmith-new/stacks/configuration/docker.env
```

You can also move your certificate to the new container by running following commands:

```
mkdir -pv ~/appsmith-new/stacks/letsencrypt
sudo cp -rf ~/appsmith-old/data/certbot/conf/* ~/appsmith-new/stacks/letsencrypt
```

## 5. Setup new Appsmith with Fat container

Follow the official guide to start with a new Appsmith deployment at <https://docs.appsmith.com/setup/docker#docker-compose-configuration>, also shown here in brief for reference:

```
cd ~/appsmith-new
curl -L https://bit.ly/32jBNin -o docker-compose.yml
docker-compose up -d
```

_Please note that you must create a new `docker-compose.yml` in `~/appsmith-new` folder, like with the `curl` command above. Don't copy it from `~/appsmith-old`._

## 6. Import database

After your new deployment comes up (usually takes ~30 seconds), we will import the data that was exported from the old instance:

Create the folder to copy the archive file:

```
mkdir -pv ~/appsmith-new/stacks/data/restore
```

Copy the archive file:

```
cp ~/appsmith-old/data/mongo/db/backup/appsmith-data.archive ~/appsmith-new/stacks/data/restore/
```

Import data from this archive:

```
docker-compose exec appsmith appsmithctl import_db
```

Once this is successful, we are ready to bring up our new instance!

## 7. Verify migration

Navigate to your Appsmith instance, the same way you used to with your old instance, whether using IP address, or custom domain, and verify that your Appsmith instance is working well, and all your data is intact.
