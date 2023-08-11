---
sidebar_position: 3
description: This page provides instructions to schedule automatic updates for your Appsmith instance.
toc_max_heading_level: 2
---

# Schedule Automatic Updates 

This page provides steps to schedule automatic updates using cron expression for your self-hosted instance.

## Docker

Follow the below steps to schedule automatic updates for Appsmith Docker installation:

1. Go to the root directory of the Appsmith installation and run:

   ```bash
   docker-compose down
   ```
2. Open the `docker-compose.yml` file and uncomment the below code block. Note that you must add a 6-value cron expression, not the traditional 5-value to the `command` attribute. See the [CRON Expression Format](https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON_Expression_Format) section to learn more. Based on the specified cron expression, watchtower updates Appsmith at the stipulated time whenever a new version becomes available.

   ```yaml
    labels:
      com.centurylinklabs.watchtower.enable: "true"
    auto_update:
      image: containrrr/watchtower
      volumes:
        - /var/run/docker.sock:/var/run/docker.sock
      # Update check interval in seconds.
      #highlight-next-line
      command: --schedule "0 0 * ? * *" --label-enable --cleanup
      restart: unless-stopped
      depends_on:
        - appsmith
      environment:
        - WATCHTOWER_LIFECYCLE_HOOKS=true
   ```

  The above 6-value cron expression `0 0 * ? * *` means that the task runs every day of every month, regardless of the day of the week or year, at midnight (0:00). You can change the schedule, adjust the cron expression accordingly. If you wish to update Appsmith immediately, you can opt for a manual update and follow the steps in the [Update Appsmith](/getting-started/setup/instance-management/update-appsmith/#update-on-docker) guide.
  
  Below are some examples of 6-value cron expressions:

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

## Kubernetes
Follow the below steps to schedule automatic updates for Appsmith Kubernetes installation:

1. Go to the root directory of the Appsmith installation and open `values.yaml` file.
2. Update the `values.yaml` and set `enabled` to `true` for `autoupdate` attribute, and set the desired cron expression in the `scheduler` attribute. Note that you must add a 5-value cron expression, not the 6-value. See the [CRON Expression Format](https://pkg.go.dev/github.com/gdgvda/cron#hdr-CRON_Expression_Format) section to learn more. Based on the specified cron expression, watchtower updates Appsmith at stipulated time whenever a new version is available.

   ```yaml
   #highlight-next-line
   autoupdate:
    ## @param autoupdate.enabled - Enable config autoupdate
    ##
    #highlight-next-line
    enabled: true
    ## @param autoupdate.scheduler - Schedule cron job to check & update Helm image
    ##
    #highlight-next-line
    scheduler: "0/10 * * * *"
   ```

  The above 5-value cron expression `0/10 * * * *` means that the task runs every day of the week and every month, regardless of the year, at the 0th minute of every hour. You can change the schedule, adjust the cron expression accordingly. If you wish to update Appsmith immediately, you can opt for a manual update and follow the steps in the [Update Appsmith](/getting-started/setup/instance-management/update-appsmith/#update-on-kubernetes) guide.
  
  Below are some examples of 5-value cron expressions:
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
    * If you are on the **Community Edition**, update with:

      ```bash
      helm upgrade -i appsmith appsmith/appsmith -f values.yaml
      ```

    * If you are on the **Business Edition**, update with:

      ```bash
      helm upgrade -i appsmith appsmith-ee/appsmith -f values.yaml
      ```

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

 * If you are on the **Community Edition** on Kubernetes, update the configuration as shown below:

    a. Go to the Appsmith installation directory, and edit `values.yaml`, and set `enabled` to `false` for `autoupdate` attribute:

      ```yaml
      #highlight-next-line
      autoupdate:
        ## @param autoupdate.enabled - Enable config autoupdate
        ##
        #highlight-next-line
        enabled: false
        ## @param autoupdate.scheduler - Schedule cron job to check & update Helm image
        ##
        scheduler: "0 * * * *"
      ```

    b. Save the changes and update the configuration with:

      ```bash
        helm upgrade --values values.yaml appsmith appsmith/appsmith
      ```

 * If you are on the **Business Edition** on Kubernetes, update the configuration as shown below:

    a. Go to the Appsmith installation directory, and edit `values.yaml`, and set `enabled` to `false` for `autoupdate` attribute:

      ```yaml
      #highlight-next-line
      autoupdate:
        ## @param autoupdate.enabled - Enable config autoupdate
        ##
        #highlight-next-line
        enabled: false
      ```

    b. Save the changes and update the configuration with:

      ```bash
      helm upgrade --values values.yaml appsmith appsmith-ee/appsmith
      ```

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
