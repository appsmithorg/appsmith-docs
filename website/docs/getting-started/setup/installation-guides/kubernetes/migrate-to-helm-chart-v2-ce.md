---
description: Migrate to the Appsmith Community Edition using Helm chart v2.
---

# Migrate to Community Edition Helm Chart v2
To migrate to the Community Edition running on Helm chart v2 (helm.appsmith.com), follow the instructions in the guide below. Helm chart v2 includes the Horizontal Pod Auto Scaling (HPA) feature, which allows the Appsmith pods to scale automatically based on the current workload.

## Backup data
Take a backup using the [`appsmithctl backup`](/getting-started/setup/instance-management/appsmithctl#backup) command, follow the steps below:

1. Run the following command in the old pods to create a data backup:

   ```bash
   kubectl exec -it appsmith-0 -n <NAMESPACE> appsmithctl backup
   ```

2. Copy the backup to the local disk. The actual backup file's name should be available in the output of the previous step.

   ```bash
   kubectl cp <NAMESPACE>/<POD_NAME>:/appsmith-stacks/connect-data/backup/<APPSMITH_BACKUP_GENERATED_NAME>.tar.gz <APPSMITH_BACKUP_GENERATED_NAME>.tar.gz
   ```

## Uninstall old Helm chart

Run the below command to uninstall the existing helm chart:

```bash
helm uninstall appsmith -n <namespace>
```

## Install v2 Helm chart
It's recommended to install the new Appsmith helm chart in the same namespace. However, you may choose to create a new namespace also. 

1. Run the below command to install Appsmith in a new namespace:

   ```bash
   helm install appsmith/appsmith --generate-name --version 2.0.0 -n <NAMESPACE_NAME> --create-namespace
   ```

   The command generates the output as shown below:

   ```text
   NAME: appsmith-1669367715
   LAST DEPLOYED: Fri Nov 25 14:45:17 2022
   NAMESPACE: <NAMESPACE_NAME>
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   ```

2. In the earlier version of Appsmith, MongoDB, and Redis instances were all running within the same container. However, with the v2 Helm chart, you now have the option to run these in separate containers. If you wish to do so, you can modify the values for Redis and MongoDB parameters in the `values.yaml` file as shown below:

   1. Run the below command to see the parameter configuration in `values.yaml` file.

      ```bash
      helm show values appsmith/appsmith --version 2.0.0 > values.yaml
      ```

   2. Locate the below parameters for MongoDB and Redis in `values.yaml` file and modify them as shown below:

      ```yaml
      ## Redis parameters
      redis:
        # highlight-next-line
        enabled: true
        auth:
          enabled: false
        replica:
          # highlight-next-line
          replicaCount: 1
    
      mongodb:
        # highlight-next-line
        enabled: true
        service:
          nameOverride: appsmith-mongodb
        auth:
          rootUser: root
          rootPassword : <ROOT_PASSWORD>
        # highlight-next-line  
        replicaCount: 2
        architecture: "replicaset"
        # highlight-next-line  
        replicaSetName: <REPLICA_SET_NAME>
      ```

3. Run the below command to install Appsmith:

 :::caution Attention
   Ensure that the `APPSMITH_CUSTOM_DOMAIN` environment variable is not set in the `docker.env` file when deploying Appsmith on Kubernetes. To configure the TLS on Kubernetes, see the [Configuring TLS](/getting-started/setup/installation-guides/kubernetes#configure-tls) section.
 :::

   ```bash
   helm install appsmith/appsmith --generate-name --version 2.0.0 
   ```

Once Appsmith pods are up and running, proceed with copying and restoring the backup.

## Copy backup

Run the below command to move the Appsmith backup from a local drive or s3 into the pod `/appsmith-stacks/connect-data/backup/`.

```bash
kubectl cp <PATH_TO_BACKUP_TAR> <NAMESPACE>/appsmith-<POD_NAME>:/appsmith-stacks/connect-data/backup/ 
```

## Restore backup
Now, that you have copied the backup into the pod, proceed to restore the backup by running the below command:

```bash
kubectl exec -it appsmith-0 -n <namespace> appsmithctl restore
```

Congratulations, you have successfully migrated to the Appsmith Community Edition Helm chart v2 installation.

## Publish Appsmith
You may choose to publish Appsmith service over internet. For more information, see [How to publish Appsmith](/getting-started/setup/installation-guides/kubernetes#publish-appsmith)?

## Troubleshooting
If any issues are encountered, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or raise it on the [Discord Server](https://discord.com/invite/rBTTVJp).
