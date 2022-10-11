---

---
# Instance Management

## Updating to the latest release

You can perform a manual update of your Appsmith instance by running the following commands in the Appsmith installation directory.

```bash
// To restart appsmith without docker compose
docker pull appsmith/appsmith-ce && docker restart appsmith

// To restart appsmith with docker compose
docker-compose pull && docker-compose up -d --force-recreate appsmith
```

## Switching off auto-updates

In your `docker-compose.yml` file, the `auto_update` container is responsible for periodically checking for updates to Appsmith and applying those updates. If you wish to disable this auto-updating, please run the following command:

```
docker-compose rm -s -v -f auto_update
```

This will bring down the `auto_update` container, and update checks are no-longer performed. Note that however, if you run `docker-compose up -d` later, for any reason, then this `auto_update` will be brought up again. You can use that to turn auto-updates on again in the future.

To check if auto updates are turned on in your instance, please run `docker-compose ps` and see if there a server called `auto_update` listed in the output, and if it's status is `Up`. If not, then auto updates are turned off for your instance.
