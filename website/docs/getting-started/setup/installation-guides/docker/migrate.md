---
description: >-
  This guide will help you migrate your Appsmith instance running on the old
  stack (multiple containers), to the new stack (single container).
---

# Migrate from Multi-Container Setup

Let's say your current Appsmith instance is located in the folder `~/appsmith-old`, and you'd like the new setup to be at `~/appsmith-new`. (These are just example folder names, please use what you prefer.)

Then you can see a rough folder structure like this for `~/appsmith-old`:

```
~/appsmith-old
├── data
│   ├── certbot
│   │   ├── conf
│   │   └── www
│   ├── mongo
│   │   ├── db
│   │   └── init.js
│   └── nginx
│       └── app.conf.template
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
    │   ├── docker.env
    │   └── mongo-init.js
    ├── data
    │   ├── backup
    │   ├── certificate
    │   ├── mongodb
    │   └── restore
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

## Shutdown old Appsmith instance

🚨 Please ensure you are aware of the following facts before proceeding:

* This whole migration should take under 25-30 mins, usually less than that.
* All users who are currently logged in are logged out. They can just log back in, once the new instance is up and running just fine.
* Depending on your configuration, any `docker-compose` and `docker` commands below might need to be run with a `sudo` at the start.
* Please check the output of commands to see if there are any errors, after running a command, and before proceeding to the next steps.

Let's first define a couple of variables that'll be useful during migration. Please use the appropriate paths in place of `~/appsmith-old` and `~/appsmith-new`.

```
old_path=~/appsmith-old
new_path=~/appsmith-new
```

Before you can start the migration, please stop the old server with the following command:

```
cd "$old_path"
docker-compose stop appsmith-internal-server
```

## Export database

To export data from the running `MongoDB` database, use the `mongodump` command, which creates a `gzip` archive with all the data. This file then can be copied to the new setup and imported.

Create a backup folder to store the dump file:

```
cd "$old_path"
docker-compose exec mongo mkdir -pv /data/db/backup
```

Dumping MongoDB data and compressing to a `gzip` file:

```
docker-compose exec mongo sh -c 'mongodump --uri="$APPSMITH_MONGODB_URI" --archive=/data/db/backup/appsmith-data.archive --gzip'
```

## Migrate configuration

The new setup uses a single `docker.env` file for all environment variable configurations.

Let's create the folder structure needed:

```
mkdir -pv "$new_path"/stacks/configuration
```

Migrate configuration from the old location:

```
cat "$old_path"/docker.env "$old_path"/encryption.env >> "$new_path"/stacks/configuration/docker.env
```

Now, in the file `"$new_path"/stacks/configuration/docker.env`:

* Unless you are using an external MongoDB database, in `APPSMITH_MONGODB_URI`, please change the `@mongo` part to `@localhost`, and remove the query parameters (the `?` and everything after it). For example, if the current value is `mongodb://root:rootpass@mongo/appsmith?retryWrites=true&authSource=admin`, change it to just `mongodb://root:rootpass@localhost/appsmith`.
* Unless you are using an external Redis instance, in `APPSMITH_REDIS_URL`, please change `redis://redis:6379` to `redis://localhost:6379`. That is, change the host from `redis` to `localhost.`

At the end of this `docker.env` file, add the following new environment variables:

```
APPSMITH_MONGODB_USER=<MONGODB_USER>
APPSMITH_MONGODB_PASSWORD=<MONGODB_PASSWORD>
APPSMITH_API_BASE_URL=http://localhost:8080
```

Here, in place of `<MONGODB_USER>` and `<MONGODB_PASSWORD>`, use the same username and password that were given to `APPSMITH_MONGODB_URI`. In the example values, these would be `root` for the user and `rootpass` for the password.

## 4. Export HTTPS config & certificate (optional)

If you are not using a custom domain with your Appsmith instance, please skip this step.

If you don't have `APPSMITH_CUSTOM_DOMAIN` already configured in your `docker.env`, please add a line like below

```
echo APPSMITH_CUSTOM_DOMAIN=appsmith.mycustomdomain.com >> "$new_path"/stacks/configuration/docker.env
```

You can also move your certificate to the new container by running the following commands:

```
mkdir -pv "$new_path"/stacks/letsencrypt
sudo cp -rfv "$old_path"/data/certbot/conf/* "$new_path"/stacks/letsencrypt
```

## Setup new Appsmith with Fat container

Let's bring down the old instance in full now:

```
docker-compose --file "$old_path"/docker-compose.yml down
```

Follow the official guide to start with a new Appsmith deployment at [Docker Compose Configuration](./#docker-compose-configuration), also shown here in brief for reference:

```
cd "$new_path"
curl -L https://bit.ly/docker-compose-CE -o docker-compose.yml
docker-compose up -d
```

_Please note that you must create a new `docker-compose.yml` in the `"$new_path"` folder, like with the `curl` command. Don't copy it from `"$old_path"`._

## Import database

After your new deployment comes up (usually takes \~30 seconds), import the data that was exported from the old instance:

Create the folder to copy the archive file:

```
mkdir -pv "$new_path"/stacks/data/restore
```

Copy the archive file:

```
cp "$old_path"/data/mongo/db/backup/appsmith-data.archive "$new_path"/stacks/data/restore/
```

Import data from this archive:

```
docker-compose exec appsmith appsmithctl import_db
```

When asked, `Importing this DB will erase this data. Are you sure you want to proceed?` respond with `y`. It is safe in this situation since the new database in the new setup only contains initial data and should be safe to be overwritten.

Once this is successful, you are ready to bring up your new instance.

## Verify migration

Navigate to your Appsmith instance, the same way you used to with your old instance, whether using the IP address, or custom domain, and verify that your Appsmith instance is working well, and all your data is intact.

After this, designate a user as the superuser, to give them access to the Admin Settings page. See, the [Configuring a superuser](/getting-started/setup/instance-configuration) section.
