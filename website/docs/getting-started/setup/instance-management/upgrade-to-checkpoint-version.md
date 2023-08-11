---
description: This page provides steps to upgrade Appsmith to the checkpoint version on your self-hosted Appsmith instance.
toc_max_heading_level: 2
---

# Upgrade to Checkpoint Version

A checkpoint version is a milestone release that ensures a proper application of any necessary database schema changes, optimizations, or other updates to prevent compatibility issues or data inconsistencies. When performing a manual update, you first need to upgrade to a checkpoint version if your Appsmith installation version is prior to `v1.9.2`. For a complete list of releases, see [Appsmith releases](https://github.com/appsmithorg/appsmith/releases).

The available Appsmith checkpoint versions are as follows:

  * `v1.9.2`
  
This page provides steps to upgrade Appsmith to the checkpoint version on your self-hosted Appsmith instance.

## Prerequisites

* At least 2 GB of free storage space for backup and update tasks.

## Before you begin

* Create a backup of the Appsmith instance, See [Backup instance](/getting-started/setup/instance-management/appsmithctl/#backup-instance) guide. (_Recommended_)
* Upgrade your embedded or external MongoDB server to MongoDB v5 or later. See the list of [compliant platforms](https://www.mongodb.com/docs/manual/administration/production-notes/#platform-support) and follow the steps to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/).

## Docker
Before you update to a checkpoint version, ensure you have met all the [prerequisites](#prerequisites). Follow these steps to update to the checkpoint version `v1.9.2`. You can use these instructions to update Appsmith on any platform that supports Docker (Docker, AWS AMI, or DigitalOcean).

1. Access your Appsmith instance and change the image attribute in the `docker-compose.yml` file to point to the checkpoint version `v1.9.2`:
    * If you are on the **Community Edition**, update the image name as shown below:
        ```yaml
        services:
          appsmith:
            #highlight-next-line
            image: index.docker.io/appsmith/appsmith-ce:v1.9.2
            container_name: appsmith
        ```
    * If you are on the **Business Edition**, update the image name as shown below:
        ```yaml
        services:
          appsmith:
            #highlight-next-line
            image: index.docker.io/appsmith/appsmith-ee:v1.9.2
            container_name: appsmith
        ```
2. Save the changes, and restart the Appsmith instance with:
  ```bash
  docker-compose up -d
  ```
3. The server starts with the older version and applies all the necessary schema changes to your Appsmith instance. Once completed, switch back to the original image version in the `docker-compose.yml` file and resume normal operations.
    * If you are on the **Community Edition**, update the image name as shown below:
        ```yaml
        services:
        appsmith:
          #highlight-next-line
          image: index.docker.io/appsmith/appsmith-ce
          container_name: appsmith
        ```
    * If you are on the **Business Edition**, update the image name as shown below:
        ```yaml
        services:
          appsmith:
            #highlight-next-line
            image: index.docker.io/appsmith/appsmith-ee
            container_name: appsmith
        ```
4. Save the changes and restart the Appsmith instance with: 
  ```bash
  docker-compose up -d
  ```

## Troubleshooting

If you see errors, roll back to a previous version to fix the issue. For more information, see the [Restore instance](/getting-started/setup/instance-management/appsmithctl#restore-instance) section. 

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.