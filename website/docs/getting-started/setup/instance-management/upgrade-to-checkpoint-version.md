---
description: This page provides steps to upgrade Appsmith to the checkpoint version on your self-hosted Appsmith instance.
toc_max_heading_level: 2
---

# Upgrade to Checkpoint Version v1.9.2

Checkpoint versions are milestone releases that ensure your Appsmith instance applies necessary database schema updates, optimizations, and compatibility fixes. If your current Appsmith version is older than `v1.9.2`, upgrading to this checkpoint version is mandatory before moving to later releases. This page provides step-by-step instructions to upgrade your self-hosted Appsmith instance to checkpoint version `v1.9.2`.

## Prerequisites

Before upgrading, ensure the following:

1. At least 2 GB of free storage for backup and update tasks.  
2. Upgrade your embedded or external MongoDB server to v5.0 or later. For more information, see the list of [compliant platforms](https://www.mongodb.com/docs/manual/administration/production-notes/#platform-support) and follow the steps available on MongoDB official documentation to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/).  
3. Create a backup of your Appsmith instance. For more information, see the [Backup instance](/getting-started/setup/instance-management/appsmithctl/#backup-instance) guide.

## Docker

Follow these steps to upgrade your Appsmith instance to checkpoint version `v1.9.2`. These instructions are applicable to platforms using Docker, including Docker standalone, AWS AMI, or DigitalOcean.

1. Access your Appsmith installation directory and modify the `docker-compose.yml` file:  
   - For **Community Edition**, set the image to:  
      ```yaml  
        services:  
          appsmith:  
          # highlight-next-line
            image: index.docker.io/appsmith/appsmith-ce:v1.9.2  
            container_name: appsmith  
        ```  
   - For **Commercial Edition**, set the image to:  
      ```yaml  
          services:  
            appsmith:  
            # highlight-next-line
              image: index.docker.io/appsmith/appsmith-ee:v1.9.2  
              container_name: appsmith  
        ```

2. Save the changes and restart the instance with the following command:  
    ```bash  
      docker-compose up -d  
    ```

3. Allow the instance to start and apply the necessary schema changes automatically. After the schema updates are complete, revert the image in the `docker-compose.yml` file to point to the latest version:  
   - For **Community Edition**, set the image to:  
      ```yaml  
          services:  
            appsmith:  
            # highlight-next-line
              image: index.docker.io/appsmith/appsmith-ce  
              container_name: appsmith  
        ```  
   - For **Commercial Edition**, set the image to:  
      ```yaml  
        services:  
          appsmith:  
          # highlight-next-line
            image: index.docker.io/appsmith/appsmith-ee  
            container_name: appsmith  
        ```

4. Save the changes and restart the instance again to finalise the update:  
      ```bash  
        docker-compose up -d  
      ```

## Troubleshooting

If you face issues during the upgrade, roll back to a previous version using the [Restore instance guide](/getting-started/setup/instance-management/appsmithctl#restore-instance).  

For further queries, contact the Appsmith support team using the chat widget in the bottom-right corner of this page.