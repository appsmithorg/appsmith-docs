---
description: Guide on how to get container logs for different Appsmith deployments
sidebar_position: 6
---

# Get Container Logs

## Docker

This guide applies to docker-compose and docker installations.

The docker container contains a script located at `/opt/appsmith/diagnostics.sh` on the container. This command can be run from the docker host using the following command:

`docker exec -it <your-appsmith-container-id> /opt/appsmith/diagnostics.sh`

You will see similar to the following output:

```
~/work/code/appsmith-monitoring$ docker exec -it appsmith /opt/appsmith/diagnostics.sh
1830:
Dumping heap to /tmp/tmp.iD1Lc6kRNX/a3829270825f/2024-08-17_21.40.32-UTC/java/heap-dump.log ...
Heap dump file created [229851460 bytes in 0.814 secs]
Diagnostics gathered in /opt/appsmith/a3829270825f-2024-08-17_21.40.32-UTC.tar.gz
```

Note the file name of the `.tar.gz` file and run the following command -- the below uses the filename outputted above as an example -- to copy it from the container to the host:

`docker cp <your-appsmith-container-id>:/opt/appsmith/a3829270825f-2024-08-17_21.40.32-UTC.tar.gz ./a3829270825f-2024-08-17_21.40.32-UTC.tar.gz`

The file can then be extracted for analysis or emailed to appsmith support for our engineers to analyze.

## Docker in remote servers
- To run the above command on a remote server you simply need to execute the `docker exec` and `docker cp` over ssh to create the report and copy it from the container to the host:

```bash
ssh -i <your-ssh-key>.pem <user>@<host-ip>  docker exec -it <your-appsmith-container-id> /opt/appsmith/diagnostics.sh
ssh -i <your-ssh-key>.pem <user>@<host-ip>  docker cp <your-appsmith-container-id>:/opt/appsmith/<rendered-file-name>-UTC.tar.gz <target-local-dir>/<rendered-file-name>-UTC.tar.gz 
```

- Once the file is copied from the container to the host, simply scp the file to the local machine:
```bash
scp -C -i <your-ssh-key>.pem <user>@<host-ip>:<host-source-dir>/<rendered-file-name>-UTC.tar.gz <target-local-dir>
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
4. In the file share browser, open the `logs` directory.
5. Open the directory for the service for which the logs are required.

    ![Open logs directory](/img/select-the-log-directory.png)
6. Select the log file and hit download.

    ![Download the log file](/img/download-log-file.png)

You may also choose to access the logs of the container instance using the [az container logs](https://learn.microsoft.com/en-us/cli/azure/container#az_container_logs) command.

```bash
az container logs --resource-group myResourceGroup --name mycontainer
```
