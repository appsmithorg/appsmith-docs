---
sidebar_position: 3
---
# Create a Maintenance Window

The page gives you steps to create a maintenance window for your Appsmith instance.

## Schedule a maintenance window for auto-updates
You can choose a time slot for auto updates to happen. You've to set the time slot using a `cron` expression in the `--schedule` argument.

Follow these steps to update the `auto_update` container:
1. Go to the `docker-compose.yml` file
2. Open and update the `auto_update` attribute as shown below:

:::caution Attention
You must add a 6-value cron expression, not the traditional 5-value one. Refer to learn more about [How the cron expression works](https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON\_Expression\_Format).
:::

```yaml
  auto_update:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    # Checks for update every 5 mins because of --interval
    #highlight-next-line
    command: --schedule "0 0 * ? * *" --label-enable --cleanup
    networks:
      - appsmith
    restart: always
```
3. Restart the `auto_update` container with:
```bash
sudo docker-compose pull && sudo docker-compose up --force-recreate auto_update
```
4. Verify the logs that the maintenance window is in effect with:
```bash
docker-compose logs -f auto_update
```

## Examples
Below are some example configurations for common use cases:

* Check for updates every Sunday at 12:00 noon:

```bash
command: --schedule "0 0 12 ? * SUN" --label-enable --cleanup

* Check for updates every hour:

```bash
command: --schedule "0 0 * ? * *" --label-enable --cleanup
```
* Check for updates once at 12:00 midnight every day:

```bash
command: --schedule "0 0 12 * * ?" --label-enable --cleanup 
```