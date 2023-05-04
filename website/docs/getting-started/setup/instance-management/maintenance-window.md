---
sidebar_position: 3
description: Instructions to schedule automatic updates for your Appsmith instance.
---
# Schedule Automatic Updates

The page gives you steps to schedule automatic updates for your Appsmith instance.

## Schedule automatic updates for Docker installation
You can define a time slot for automatic updates using a `cron` expression in the `--schedule` argument.

Follow these steps to update the `auto_update` container:
1. Go to the location where `docker-compose.yml` file is located
2. Open the ``docker-compose.yml` file
3. Update the `command` attribute under `auto_update` as shown below:

```yaml
  auto_update:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    # Check for updates every hour because of the cron schedule
    #highlight-next-line
    command: --schedule "0 0 * ? * *" --label-enable --cleanup
    networks:
      - appsmith
    restart: always
```
:::caution Attention
You must add a 6-value cron expression, not the traditional 5-value one. Refer to learn more about [How the cron expression works](https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON\_Expression\_Format).
:::

3. Restart the watchtower container with:
```bash
sudo docker-compose pull && sudo docker-compose up --force-recreate auto_update
```
4. Verify the logs that the scheduled update is in effect with:
```bash
docker-compose logs -f auto_update
```

## Examples
Below are some configurations for common use cases:

* Check for updates every Sunday at 12:00 noon:

```bash
command: --schedule "0 0 12 ? * SUN" --label-enable --cleanup
```

* Check for updates every hour:

```bash
command: --schedule "0 0 * ? * *" --label-enable --cleanup
```
* Check for updates once at 12:00 noon every day:

```bash
command: --schedule "0 0 12 * * ?" --label-enable --cleanup 
```

* Check for updates once at midnight every day:

```bash
command: --schedule "0 0 0 * * ?" --label-enable --cleanup 
```
