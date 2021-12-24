# Maintenance Window Documentation

**Adding a configurable maintenance window for Appsmith’s auto-updates**

Checking for updates can be configured to run during a pre-specific maintenance window by specifying a cron expression to the `--schedule` argument in the `auto_update` container’s command.

## Changes required 

### Step 1

In the `docker-compose.yml` file, scroll to the configurations of the container with image `containrrr/watchtower`. It'll be named either _auto_update_ or _watchtower_. This is what your configuration will look like

```
  auto_update:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    # Checks for update every 5 mins because of --interval
    command: --interval 300 --label-enable --cleanup
    networks:
      - appsmith
    restart: always
```

### Step 2

In the `command` configuration, please remove the `--interval` argument and the value `300` next to it, and in it’s place, add a `--schedule` and a cron expression defining an update interval of your choice. Your new configuration will look like below.

```
  auto_update:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    # Check for updates every hour because of the cron schedule
    command: --schedule "0 0 * ? * *" --label-enable --cleanup
    networks:
      - appsmith
    restart: always
```


> ℹ️ Note that a 6-value cron expression is expected here, not the traditional 5-value one. For details on how the expression works, please refer to (https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON_Expression_Format)


After making the changes restart the auto update container via the command below:

```bash
# Use the container name as defined in your docker-compose.yml file
 docker-compose up --force-recreate auto_update
```

> ℹ️ Depending on your setup, you may need a `sudo` in front of the `docker-compose` commands.

Check the logs and see that the maintenance window is now in effect.

```bash
docker-compose logs -f auto_update
```

## Example configurations for some common use cases

Check for updates every Sunday at 12:00:

```yaml
command: --schedule "0 0 12 ? * SUN" --label-enable --cleanup
```

Check for updates every hour:

```yaml
command: --schedule "0 0 * ? * *" --label-enable --cleanup
```

Check for updates once at 12:00 everyday:

```yaml
command: --schedule "0 0 12 * * ?" --label-enable --cleanup
```

## References:

[Cron Generator tool](https://www.freeformatter.com/cron-expression-generator-quartz.html)

[Config Scheduler](https://containrrr.dev/watchtower/arguments/#scheduling)
