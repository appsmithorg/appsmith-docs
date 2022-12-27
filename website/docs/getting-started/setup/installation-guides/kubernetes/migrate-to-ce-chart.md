---
description: Follow the guide to migrate to the Appsmith Community Edition running on Helm chart v2.
---

# Migrate to Helm Chart v2 (CE)
Follow the below guide to migrate to the Community Edition running on Helm chart v2 (`helm.appsmith.com`). This version includes Horizontal Pod Auto Scaling (HPA) capability, which enables Appsmith pods to scale automatically based on the current workload.

## Backup data
Run the following [`appsmithctl`](/getting-started/setup/instance-management/appsmithctl) [backup](/getting-started/setup/instance-management/appsmithctl#backup) command in the old pods to create a data backup:

```bash
kubectl exec -it appsmith-0 -n original bash
appsmithctl backup
```

## Uninstall old Helm chart

Run the below command to uninstall the existing helm chart:

```bash
helm uninstall helm -n original
```

## Install v2 Helm chart
It's recommended to install the new appsmith helm chart in the same namespace. However, you may choose to create a new namespace also. 

1. Run the below command to create a new namespace:

  ```bash
  helm install appsmith/appsmith --generate-name --version 2.0.0 -n <NAMESPACE_NAME> --create-namespace
  ```
  
  The command generates the output as shown below:

  <Highlighter highlighterClassName="commandOutput " htmlContent="NAME: appsmith-1669367715 <br/> LAST DEPLOYED: Fri Nov 25 14:45:17 2022 <br/> NAMESPACE: NAMESPACE_NAME <br/> STATUS: deployed <br/> REVISION: 1 <br/> TEST SUITE: None"></Highlighter>

2. In the earlier version of Appsmith, MongoDB and Redis instances were all running within the same container. However, with the v2 Helm chart, you now have the option to run these in separate containers. If you wish to do so, you can modify the values for Redis and MongoDB parameters in the `values.yaml` file as shown below:

  a. Run the below command to see the parameter configuration in `values.yaml` file.

    ```bash
    helm show values appsmith/appsmith --version 2.0.0 > values.yaml
    ```

  b. Locate the below parameters for MongoDB and Redis in `values.yaml` file and modify them as shown below:

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

  ```bash
   helm install appsmith/appsmith --generate-name --version 2.0.0 
  ```
Once appsmith pods are up and running, proceed with copying and restoring the backup.

### Copy backup

If the appsmith backup is available on a local drive or s3. Run the below command to move it into the pod `/appsmith-stacks/data/backup/`.

```bash
kubectl cp <PATH_TO_BACKUP_TAR> <NAMESPACE>/appsmith-875b6cddc-smzwz:/appsmith-stacks/data/backup/
```

### Restore backup
Now, that you have copied the backup into the pod, proceed to restore the backup by running the below command:

```bash
kubectl exec -it appsmith-0 -n original bash 
appsmithctl restore
```

Congratulations, you have successfully migrated to the Appsmith Community Edition Helm chart v2 installation.

## Publish Appsmith
You may choose to publish Appsmith service over internet. For more information, see [Publish Appsmith](/getting-started/setup/installation-guides/kubernetes#publish-appsmith)

## Troubleshooting
If any issues are encountered, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or raise it on the [Discord Server](https://discord.com/invite/rBTTVJp).