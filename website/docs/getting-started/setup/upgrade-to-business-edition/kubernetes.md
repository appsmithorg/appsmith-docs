---
description: Follow the guide to upgrade the Appsmith Community Edition installation on Kubernetes to Business Edition.
---

# Kubernetes

The Business Edition (BE) Helm chart installation includes support for Horizontal Pod Auto Scaling (HPA), which allows Appsmith pods to scale automatically based on the current load. Additionally, this means that Appsmith pods are managed using a Kubernetes _deployment_ resource instead of a _stateful-set_ resource. Follow this guide to upgrade from the Community Edition (CE) to the Business Edition (BE) installed on Kubernetes.

## Backup data

1. Open a shell into one of your current Appsmith pods:

   ```bash
   kubectl exec -it <pod> bash
   ```

2. Run the backup command:

   ```bash
   appsmithctl backup
   ```

3. Once the backup process is complete, the backup archive is available at a location like this:

   ```
   /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
   ```

4. To download the backup archive, run the following command:

   ```bash
   kubectl cp <namespace>/appsmith-0:<backup_path_from_above> ./appsmith-ce-backup.tar.gz
   ```

5. To retrieve the salt and password from the pod, run the following command and copy the values to `values.yaml`.

   ```bash
   kubectl exec <pod_name> -- grep /appsmith-stacks/configuration/docker.env APPSMITH_ENCRYPTION_
   ```

   Set the values in the `applicationConfig` section:

   ```yaml
     APPSMITH_ENCRYPTION_PASSWORD: "<PASSWORD>"
     APPSMITH_ENCRYPTION_SALT: "<SALT>"
   ```

## Uninstall CE Helm chart

To uninstall the CE helm chart, run the following command:

```bash
helm uninstall appsmith
```

## Configure parameters

To ensure that the Business Edition Helm chart runs, you need to make some changes to the `values.yaml` file. Follow the steps below to configure parameters:

1. Add the following snippet to the bottom of your `values.yaml` file. This snippet enables PostgreSQL.

   ```yaml
   postgresql:
     enabled: true
     auth:
       username: root
       password: "<PASSWORD>"
       postgresPassword: "<POSTGRESQL_PASSWORD>"
       database: keycloak
   ```

2. If present, remove the highlighted lines, regardless of their value.

   ```yaml
   image:
     # highlight-next-line
     registry: anything
     # highlight-next-line
     repository: anything
     pullPolicy: Always
     tag: "latest"
   ```

3. Choose, or create a shared file system. For more information, see [Create a shared file system.](/getting-started/setup/installation-guides/kubernetes#create-a-shared-file-system)

4. Add the license key and a few other variables related to keycloak to `applicationConfig` section:

   ```yaml
     APPSMITH_LICENSE_KEY: ""
     APPSMITH_KEYCLOAK_DB_DRIVER: ""
     APPSMITH_KEYCLOAK_DB_USERNAME: ""
     APPSMITH_KEYCLOAK_DB_PASSWORD: ""
     APPSMITH_KEYCLOAK_DB_URL: ""
     APPSMITH_KEYCLOAK_DB_NAME: "keycloak"
   ```

## Install BE Helm chart 

To add and deploy the new Helm chart, run the following command:

   ```bash
   helm repo add appsmith-ee https://helm-ee.appsmith.com
   helm repo update
   helm install appsmith appsmith-ee/appsmith-ee -n <namespace> -f values.yaml
   ```

For more information, see [installing Business Edition with Kubernetes](/getting-started/setup/installation-guides/kubernetes#install-appsmith).


## Restore backup

To restore the backup, follow the below steps:

1. To copy the Appsmith backup into the new Appsmith pod, run the following command:

   ```bash
   kubectl cp appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz <namespace>/<pod_name>:/appsmith-stacks/data/backup/
   ```

2. To copy the keycloak backup into the new Appsmith pod, run the following command:

   ```bash
   kubectl cp keycloak_bkp.json <namespace>/<pod_name>:/appsmith-stacks/data/
   ```

3. To restore Appsmith data, run the following command:

   ```bash
   kubectl exec -it <namespace>/<pod_name> -- appsmithctl restore
   ```

   Once the data is restored, the pod restarts automatically.

4. To restore the keycloak data, run the following command:

   ```bash
   kubectl exec -it <namespace>/<pod_name> -- /bin/sh /opt/keycloak/bin/standalone.sh -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=import -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/appsmith-stacks/data/keycloak_bkp.json -Dkeycloak.migration.strategy=OVERWRITE_EXISTING
   ```

   Monitor the output and look for similar lines:

   ```
   08:20:54,708 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0030: Full model import requested. Strategy: OVERWRITE_EXISTING
   08:20:54,708 INFO  [org.keycloak.exportimport.singlefile.SingleFileImportProvider] (ServerService Thread Pool -- 54) Full importing from file /appsmith-stacks/data/keycloak_bkp.json
   08:20:54,715 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' already exists. Removing it before import
   08:20:59,160 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' imported
   08:21:01,704 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'appsmith' imported
   08:21:01,794 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0032: Import finished successfully
   ```

   When you see lines similar to this, press <kbd>ctrl+c</kbd> to stop.

5. To apply the changes, restart using the following command:

   ```bash
   kubectl rollout restart deployment/appsmith -n <namespack>
   ```

   Congratulations, you have successfully upgraded to the Appsmith Business Edition Helm chart v2 installation.

## Troubleshooting
If you’re having issues with the deployment, please see the [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors.md) troubleshooting guide. If you continue to have problems reach out on [Discord Server](https://discord.com/invite/rBTTVJp) or [send an email to support](mailto:support@appsmith.com) or ask questions on the [community forum](https://community.appsmith.com/).

