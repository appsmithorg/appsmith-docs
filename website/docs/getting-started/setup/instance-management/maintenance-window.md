---
sidebar_position: 3
description: This page provides instructions to schedule automatic updates for your Appsmith instance.
---

# Schedule Automatic Updates 

This page provides steps to schedule automatic updates using cron expression for your self-hosted instance.

## Prerequisites

Before you schedule an automatic update for Appsmith, make sure you have:

* A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.

## Docker

Follow the below steps to schedule automatic updates for Appsmith Docker installation:

1. Go to the root directory of the Appsmith installation and run:

   ```bash
   docker-compose down
   ```

2. Open the `docker-compose.yml` file and uncomment the below code block. Note that you must add a 6-value cron expression, not the traditional 5-value. See the [CRON Expression Format](https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON_Expression_Format) section to learn more.
   ```yaml
    labels:
      com.centurylinklabs.watchtower.enable: "true"
    auto_update:
      image: containrrr/watchtower
      volumes:
        - /var/run/docker.sock:/var/run/docker.sock
      # Update check interval in seconds.
      command: --schedule "0 0 * ? * *" --label-enable --cleanup
      restart: unless-stopped
      depends_on:
        - appsmith
      environment:
        - WATCHTOWER_LIFECYCLE_HOOKS=true
  ```
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
3. Restart the watchtower container with:
  ```bash
  sudo docker-compose pull && sudo docker-compose up --force-recreate auto_update
  ```
4. Verify the logs that the scheduled update is in effect with:
  ```bash
  docker-compose logs -f auto_update
  ```
 Based on the specified cron expression, Watchtower updates Appsmith whenever a new version becomes available. If you'd like to change the schedule, adjust the cron expression accordingly.

If you wish to update Appsmith immediately, you can opt for a manual update and follow the steps in the [Update Appsmith](/getting-started/setup/instance-management/update-appsmith/#docker) guide.

## Kubernetes
Follow the below steps to schedule automatic updates for Appsmith Kubernetes installation:

1. Go to the root directory of the Appsmith installation and open `values.yaml` file.
2. Update the `values.yaml` and set `enabled` to `true` for `autoupdate` attribute, and set the desired cron expression. Note that you must add a 5-value cron expression, not the 6-value. See the [CRON Expression Format](https://pkg.go.dev/github.com/gdgvda/cron#hdr-CRON_Expression_Format) section to learn more.
   ```yaml
   autoupdate:
    ## @param autoupdate.enabled - Enable config autoupdate
    ##
    enabled: true
    ## @param autoupdate.scheduler - Schedule cron job to check & update Helm image
    ##
    scheduler: "0 * * * *"
   ```
  Below are some configurations for common use cases:

    * Check for updates every Sunday at 12:00 noon:

      ```bash
      scheduler: 0 12 * * SUN
      ```

    * Check for updates every hour:

      ```bash
      scheduler: 0 * * * *
      ```
    * Check for updates once at 12:00 noon every day:

      ```bash
      scheduler: 0 12 * * *
      ```

    * Check for updates once at midnight every day:

      ```bash
      scheduler: 0 0 * * * 
      ```

3. Save the changes and update the Appsmith installation.
    * When running an **Appsmith Community Edition**, update with:
      ```bash
      helm upgrade -i appsmith appsmith/appsmith -f values.yaml
      ```
    * When running an **Appsmith Business Edition**, update with:
      ```bash
      helm upgrade -i appsmith appsmith-ee/appsmith -f values.yaml
      ```

Based on the specified cron expression, Watchtower updates Appsmith whenever a new version becomes available. If you'd like to change the schedule, adjust the cron expression accordingly.

If you wish to update Appsmith immediately, you can opt for a manual update and follow the steps in the [Update Appsmith](/getting-started/setup/instance-management/update-appsmith/#kubernetes) guide.

## Switch off automatic updates

Follow the below steps for your Appsmith installation to switch off automatic updates:

### Docker

1. Go to the root directory of the Appsmith installation and run:

   ```bash
   docker-compose down
   ```

2. Open the `docker-compose.yml` file and comment out the below code block:
   
   ```yaml
   #auto_update:
   #  image: containrrr/watchtower
   #  volumes:
   #    - /var/run/docker.sock:/var/run/docker.sock
   #  # Update check interval in seconds.
   #  command: --schedule "0 0 * ? * *" --label-enable --cleanup
   #  restart: unless-stopped
   #  depends_on:
   #    - appsmith
   #  environment:
   #    - WATCHTOWER_LIFECYCLE_HOOKS=true
   ```

3. Save the changes and restart the Appsmith instance with:
  ```bash
  docker-compose up -d --force-recreate
  ```

4. Verify that the automatic update is turned off with:
  ```bash
  docker-compose ps
  ```
### Kubernetes
Follow the steps below to turn off auto updates:

 * When running the **Appsmith Community Edition** on Kubernetes, update the configuration as shown below:

    1. Go to the Appsmith installation directory, and edit `values.yaml`, and set `enabled` to `false` for `autoupdate` attribute:
      ```yaml
      #highlight-next-line
      autoupdate:
        ## @param autoupdate.enabled - Enable config autoupdate
        ##
        #highlight-next-line
        enabled: false
      ```
    2. Save the changes and update the configuration with:
      ```bash
        helm upgrade --values values.yaml appsmith appsmith/appsmith
      ```

 * When running the **Appsmith Business Edition** on Kubernetes, update the configuration as shown below:
    1. Go to the Appsmith installation directory, and edit `values.yaml`, and set `enabled` to `false` for `autoupdate` attribute:
      ```yaml
      #highlight-next-line
      autoupdate:
        ## @param autoupdate.enabled - Enable config autoupdate
        ##
        #highlight-next-line
        enabled: false
      ```
    2. Save the changes and update the configuration with:
      ```bash
      helm upgrade --values values.yaml appsmith appsmith-ee/appsmith
      ```
