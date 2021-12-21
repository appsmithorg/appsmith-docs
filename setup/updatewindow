# Update Window Documentation

**Adding a configurable maintenance window for Appsmith’s auto-updates**

Update checking can be configured to run on a specific interval, by specifying a cron expression to the `--schedule` argument in the `auto_update` container’s command.

Changes required: Please remove the `--interval` argument and the value `300` next to it, and in it’s place, add a `--schedule` and a cron expression defining an update interval of your choice.

<aside>
ℹ️ Note that a 6-value cron expression is expected here, not the traditional 5-value one. For details on how the expression works, please refer to (https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON_Expression_Format)

</aside>

Example `docker-compose.yml` file, with a schedule set to check for updates every hour.

```yaml
version: "3"

services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ce
    container_name: appsmith
    ports:
      - "80:80"
      - "43:443"
      - "9001:9001"
    volumes:
      - ./stacks:/appsmith-stacks
    labels:
      com.centurylinklabs.watchtower.enable: "true"
    restart: unless-stopped

  auto_update:
    image: containrrr/watchtower:latest-dev
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    # Update check interval in minutes.    
    command: --schedule "0 * * * * *" --label-enable --cleanup
    restart: unless-stopped
```

After making the changes do a docker-compose restart to reflect the changes

```bash
docker-compose up -d
```

<aside>
ℹ️ **Note** that depending on your setup, you may need a `sudo` in front of the `docker-compose` commands.

</aside>

Check the logs and see the update check schedule

```bash
docker-compose logs -f auto_update
```

## Example Schedule Configurations

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
