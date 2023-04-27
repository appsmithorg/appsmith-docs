---
description: Guide on how to get container logs for different Appsmith deployments
sidebar_position: 18
---

# Get Container Logs For Appsmith Instances

## Docker

This guide applies to docker-compose and docker installations.

Appsmith logs can be found in the stacks directory on the docker host

`stacks/logs/`

The logs directory contains the sub-directories below for each **service**:

`appsmithctl backend cron editor mongodb redis rts`

If you don’t remember where your `stacks` directory is located, run

`docker inspect -f '{{ (index .Mounts 0).Source }}’ <your-appsmith-container-id>`

Alternatively, you can run the commands below on your shell to create a zip file containing the logs.

```bash
appsmithContainerID=<your appsmith container id>
targetZipFile=<path to target zip file>
service=<choose one of: appsmithctl backend cron editor mongodb redis rts | leave blank for all services>
stacksPath=$(docker inspect -f '{{ (index .Mounts 0).Source }}' $appsmithContainerID)
zip -r $targetZipFile "$stacksPath/logs/$service" 
```

## Docker in remote servers

- SSH into the remote server and note the absolute path of the `stacks` directory.
- If you don’t remember the path, use the `docker inspect` command as shown in the above section to locate it.
- Exit from the remote server
- In your local shell, run the command

```bash
scp -r -C -i <your-ssh-key>.pem <user>@<host-ip>:<abs-path-to-stacks-dir>/logs/<service> <target-local-dir>
```

### AWS AMI

```bash
scp -r -C -i <your-ssh-key>.pem appsmith@<host-ip>:/home/appsmith/appsmith/stacks/logs/<service> <target-local-dir>
```

### DigitalOcean droplet

```bash
scp -r -C root@<host-ip>:/root/appsmith/stacks/logs/<service> <target-local-dir>
```

## Kubernetes

1. Run the command and note the name and namespace of the Appsmith POD.
    
    `kubectl get pods -A`
    
2. Run the command

```bash
kubectl cp <namespace>/<appsmith-pod-name>:/appsmith-stacks/logs/<service> <target-local-dir>
```

## ECS

:::info Important
Please switch to the old AWS console to follow the instructions here
:::

1. Navigate to your ECS cluster in the AWS console

![Navigate to the ECS cluster](/img/navigate-ecs-cluster.png)

2. Select the service running Appsmith, and switch to the **Tasks** tab. Click the task running the Appsmith container.
**Important** You may need to switch the **task filter** to see the **Stopped Tasks** to find the task where the issue occurred if ECS rolled out a new task after the crash.

![Select service and switch to the tasks tab](/img/select-service.png)

3. In the Tasks page, Find **appsmith** in the **Container** Section and expand it, to find the **Log Configuration,** and click **view logs in CloudWatch**

![Log configuration](/img/log-configuration.png)

4. In the CloudWatch Logs page, click the **Actions** button and hit `download search results in CSV`, to download the logs.

![CloudWatch logs](/img/cloudwatch-logs.png)

## Azure Container Instance (ACI)

1. Navigate to your Storage Accounts in the Azure portal

![Storage account Azure portal](/img/storage-account-azure-portal.png)

2. Click the File Share mounted to the Appsmith ACI instance.

![Click the File Share](/img/file-share-mounted.png)

3. Click Browse on the sidebar menu

![Click to Browse](/img/browse-on-sidebar.png)

4. In the file share browser, open the `logs` directory
5. Open the directory for the service for which the logs are required.

![Open logs directory](/img/select-the-log-directory.png)

5. Select the log file and hit download.

![Download the log file](/img/download-log-file.png)