---
description: Follow the guide to migrate to the Appsmith Commercial Edition running on v3 Helm chart.
---
# Migrate to Commercial Edition Helm Chart v3

Follow the below guide to migrate to the Commercial Edition running on Helm chart (`helm-ee.appsmith.com`). This version includes Horizontal Pod Auto Scaling (HPA) capability, which enables Appsmith pods to scale automatically based on the current workload.

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

4. Run the below command to exit the shell:
   
   ```bash
   exit
   ```

5. Run the below command to download the backup archive:

   ```bash
   kubectl cp <namespace>/appsmith-0:<appsmith_backup_archive_path> ./appsmith-ee-backup.tar.gz
   ```

6. Run the below command to retrieve the salt and password from the pod, and copy the values to `values.yaml`.

   ```bash
   kubectl exec <pod_name> -- grep /appsmith-stacks/configuration/docker.env APPSMITH_ENCRYPTION_
   ```

   Set these values in the `applicationConfig` section:

   ```yaml
     APPSMITH_ENCRYPTION_PASSWORD: "<PASSWORD>"
     APPSMITH_ENCRYPTION_SALT: "<SALT>"
   ```

## Backup Keycloak

1. Open a shell into one of your current Appsmith pods:

   ```bash
   kubectl exec -it <pod> bash
   ```

2. Run the below command to stop Keycloak:

   ```bash
   supervisorctl stop keycloak
   ```

3. Run the below command to exit the remaining process:

   ``` bash
   kill -9 `pgrep -f keycloak`
   ```

4. Run the below command to start Keycloak backup:

   ``` bash
   /bin/sh /opt/keycloak/bin/standalone.sh -c standalone.xml -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=export -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/tmp/keycloak_backup.json
   ```

5. Monitor the output as shown below:

   ```bash
   07:25:11,805 INFO  [org.hibernate.validator.internal.util.Version] (ServerService Thread Pool -- 57) HV000001: Hibernate Validator 6.0.22.Final
   07:25:12,930 INFO  [org.hibernate.hql.internal.QueryTranslatorFactoryInitiator] (ServerService Thread Pool -- 57) HHH000397: Using ASTQueryTranslatorFactory
   07:25:13,691 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0033: Full model export requested
   07:25:13,691 INFO  [org.keycloak.exportimport.singlefile.SingleFileExportProvider] (ServerService Thread Pool -- 57) Exporting model into file /appsmith-stacks/data/keycloak_bkp/keycloak_backup.json
   07:25:14,488 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0035: Export finished successfully
   ```

   When you see lines similar to this, press <kbd>Ctrl+c</kbd> to stop the process.

6. Run the below command to exit out of the shell:

   ```bash
   exit
   ```

7. Run the below command to download the backup file available at `/tmp/keycloak_backup.json`:

   ```bash
   kubectl cp <namespace>/appsmith-0:/tmp/keycloak_backup.json ./keycloak_bkp.json
   ```

## Uninstall old Helm chart

Run the below command to uninstall the existing helm chart:

```bash
helm uninstall appsmith -n <namespace>
```

## Configure parameters

To ensure that the Commercial Edition Helm chart runs, you need to make some changes to the `values.yaml` file. Follow the steps below to configure the parameters:

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

2. To configure high availability, choose or create a shared file system. Follow the instructions available at [Create a shared file system.](/getting-started/setup/installation-guides/kubernetes#create-a-shared-file-system)

3. Add the license key and a few other variables related to Keycloak to `applicationConfig` section:

   :::caution Attention
   Ensure that the `APPSMITH_CUSTOM_DOMAIN` environment variable is not set in the `docker.env` file when deploying Appsmith on Kubernetes. To configure the TLS on Kubernetes, see the [Configuring TLS](/getting-started/setup/installation-guides/kubernetes#configure-tls) section.
   :::

   ```yaml
     APPSMITH_KEYCLOAK_DB_DRIVER: ""
     APPSMITH_KEYCLOAK_DB_USERNAME: ""
     APPSMITH_KEYCLOAK_DB_PASSWORD: ""
     APPSMITH_KEYCLOAK_DB_URL: ""
     APPSMITH_KEYCLOAK_DB_NAME: "keycloak"
   ```

## Install v3 Helm chart

Run the below command to add and deploy the new Helm chart:

   ```bash
   helm repo add appsmith-ee https://helm-ee.appsmith.com
   helm repo update
   helm install appsmith appsmith-ee/appsmith-ee -n <namespace> -f values.yaml
   ```

For more information, see [installing Kubernetes](/getting-started/setup/installation-guides/kubernetes#install-appsmith).

## Restore backup

To restore the backup, follow the below steps:

1. Run the below command to copy the Appsmith backup into the new Appsmith pod:

   ```bash
   kubectl cp appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz <namespace>/<pod_name>:/appsmith-stacks/data/backup/
   ```

2. Run the below command to copy the keycloak backup into the new Appsmith pod:

   ```bash
   kubectl cp keycloak_bkp.json <namespace>/<pod_name>:/appsmith-stacks/data/
   ```

3. Run the below command to restore Appsmith data:

   ```bash
   kubectl exec -it <namespace>/<pod_name> -- appsmithctl restore
   ```

 Once the data is restored, the pod restarts automatically.

4. Run the below command to restore the keycloak data:

   ```bash
   kubectl exec -it <namespace>/<pod_name> -- /bin/sh /opt/keycloak/bin/standalone.sh -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=import -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/appsmith-stacks/data/keycloak_bkp.json -Dkeycloak.migration.strategy=OVERWRITE_EXISTING
   ```

    Monitor the output as shown below:

   ```
   08:20:54,708 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0030: Full model import requested. Strategy: OVERWRITE_EXISTING
   08:20:54,708 INFO  [org.keycloak.exportimport.singlefile.SingleFileImportProvider] (ServerService Thread Pool -- 54) Full importing from file /appsmith-stacks/data/keycloak_bkp.json
   08:20:54,715 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' already exists. Removing it before import
   08:20:59,160 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' imported
   08:21:01,704 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'appsmith' imported
   08:21:01,794 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0032: Import finished successfully
   ```

   When you see lines similar to this, press <kbd>Ctrl+c</kbd> to stop.

5. To apply the changes, restart using the following command:

   ```bash
   kubectl rollout restart deployment/appsmith -n <namespace>
   ```

Congratulations, you have successfully migrated to the Appsmith Commercial Edition Helm chart v2 installation.

## Troubleshooting
If you face issues, contact the support team using the chat widget at the bottom right of this page.