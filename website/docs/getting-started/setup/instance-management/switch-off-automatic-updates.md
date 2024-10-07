---
sidebar_position: 3
description: This page provides instructions to switch off scheduled automatic updates for your Appsmith instance.
toc_max_heading_level: 2
---
# Switch Off Automatic Updates

This page provides instructions to switch off the scheduled automatic updates for your Appsmith instance.

## Docker

Follow the below steps for your Appsmith installation on Docker to switch off automatic updates:

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
## Kubernetes
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

 * If you are on the **Commercial Edition** on Kubernetes, update the configuration as shown below:

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
