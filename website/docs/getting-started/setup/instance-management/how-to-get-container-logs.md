---
description: Guide on how to get container logs for different Appsmith deployments
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Container Logs

This page provides instructions on how to access logs for Appsmith containers deployed on different platforms.

## Prerequisites

- Self-hosted Appsmith instance. If not installed yet, see the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.

## Get logs

Follow the instructions for your deployment platform to access and get logs.

<Tabs queryString="current-platform">

  <TabItem label="Docker" value="docker">

Follow these steps to access logs for Appsmith containers running on Docker:

1. 	Go to the `stacks/logs/` directory on the Docker host where the Appsmith logs are located. If you’re unsure of the `stacks` directory location, run the following command to find it:

    ```bash
    docker inspect -f '{{ (index .Mounts 0).Source }}' <your-appsmith-container-id>
    ```

2. The `logs` directory contains sub-directories for each service: `appsmithctl`, `backend`, `cron`, `editor`, `mongodb`, `redis`, `rts`. You can either copy the logs for each service manually or create a zip file containing the logs. To create a zip file:

    ```bash
    appsmithContainerID=<your appsmith container id>
    targetZipFile=<path to target zip file>
    service=<choose one of: appsmithctl backend cron editor mongodb redis rts | leave blank for all services>
    stacksPath=$(docker inspect -f '{{ (index .Mounts 0).Source }}' $appsmithContainerID)
    zip -r $targetZipFile "$stacksPath/logs/$service"
    ```

  </TabItem>

  <TabItem label="Kubernetes" value="kubernetes">

Follow these steps to access logs for Appsmith containers running on Kubernetes:

1. Run the following command to get the name and namespace of the Appsmith POD:

    ```bash
    kubectl get pods -A
    ```

2. Run the following command to copy the logs:

    ```bash
    kubectl cp <namespace>/<appsmith-pod-name>:/appsmith-stacks/logs/<service> <target-local-dir>
    ```

  </TabItem>

  <TabItem label="AWS ECS" value="ecs">

Follow these steps to access logs for Appsmith containers running on AWS ECS:

1. Log into your Amazon Web Console, switch to old AWS console, and go to your ECS cluster in the AWS console.

    <ZoomImage src="/img/navigate-ecs-cluster.png" alt="Navigate to the ECS cluster" caption="Navigate to the ECS cluster" />

2. Select the service running Appsmith, and switch to the **Tasks** tab. Click the task running the Appsmith container. **Important**: You may need to switch the **task filter** to see the **Stopped Tasks** to find the task where the issue occurred if ECS rolled out a new task after the crash.

    <ZoomImage src="/img/select-service.png" alt="Select service and switch to the tasks tab" caption="Select service and switch to the tasks tab" />

3. In the Tasks page, find **appsmith** in the **Container** section, expand it, find the **Log Configuration**, and click **view logs in CloudWatch**.

    <ZoomImage src="/img/log-configuration.png" alt="Log configuration" caption="Log configuration" />

4. In the CloudWatch Logs page, click the **Actions** button and hit `download search results in CSV` to download the logs.

    <ZoomImage src="/img/cloudwatch-logs.png" alt="CloudWatch logs" caption="CloudWatch logs" />

  </TabItem>

  <TabItem label="AWS AMI" value="aws-ami">

Follow these steps to access logs for Appsmith containers running on AWS AMI:

1. SSH into the remote server and note the absolute path of the `stacks` directory.
2. If you don’t remember the path, use the `docker inspect` command as shown in the Docker section to locate it.
3. Exit from the remote server.
4. In your local shell, run the following command to copy the logs:

    ```bash
    scp -r -C -i <your-ssh-key>.pem appsmith@<host-ip>:/home/appsmith/appsmith/stacks/logs/<service> <target-local-dir>
    ```

  </TabItem>

  <TabItem label="DigitalOcean" value="digitalocean">

Follow these steps to access logs for Appsmith containers running on DigitalOcean:

1. SSH into the remote server and note the absolute path of the `stacks` directory.
2. If you don’t remember the path, use the `docker inspect` command as shown in the Docker section to locate it.
3. Exit from the remote server.
4. In your local shell, run the following command to copy the logs:

    ```bash
    scp -r -C root@<host-ip>:/root/appsmith/stacks/logs/<service> <target-local-dir>
    ```

  </TabItem>

  <TabItem label="Azure Container Instance" value="aci">

Follow these steps to access logs for Appsmith containers running on Azure Container Instances:

1. Navigate to your Storage Accounts in the Azure portal.

        <ZoomImage src="/img/storage-account-azure-portal.png" alt="Storage account Azure portal" caption="Storage account in Azure portal" />

2. Click the File Share mounted to the Appsmith ACI instance.

        <ZoomImage src="/img/file-share-mounted.png" alt="Click the File Share" caption="Click the File Share" />

3. Click Browse on the sidebar menu.

        <ZoomImage src="/img/browse-on-sidebar.png" alt="Click to Browse" caption="Click to Browse" />

4. In the file share browser, open the `logs/` directory.
5. Open the directory for the service for which the logs are required.

        <ZoomImage src="/img/select-the-log-directory.png" alt="Select the log directory" caption="Select the log directory" />

6. Select the log file and click download.

        <ZoomImage src="/img/download-log-file.png" alt="Download the log file" caption="Download the log file" />

        You may also choose to access the logs of the container instance using the [az container logs](https://learn.microsoft.com/en-us/cli/azure/container#az_container_logs) command.

        ```bash
        az container logs --resource-group myResourceGroup --name mycontainer
        ```

  </TabItem>

</Tabs>