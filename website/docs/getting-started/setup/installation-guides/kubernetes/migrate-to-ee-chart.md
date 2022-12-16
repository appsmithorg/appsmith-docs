# Migrate

Follow this guide to move from Appsmith Business Edition Helm chart installation(`helm.appsmith.com`) to Business Edition Helm chart(`helm-ee.appsmith.com`). The new `helm-ee.appsmith.com` installation supports Horizontal Pod Auto Scaling (HPA) which allows Appsmith pods to be automatically scaled based on current load.

## Export backup

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

4. To exit the shell, run the following command:
   
   ```bash
   exit
   ```

5. To download the backup archive, run the following command:

   ```bash
   kubectl cp <namespace>/appsmith-0:<appsmith_backup_archive_path> ./appsmith-ee-backup.tar.gz
   ```

6. To retrieve the salt and password from the pod, run the following command and copy the values to `values.yaml`.

   ```bash
   kubectl exec <pod_name> -- grep /appsmith-stacks/configuration/docker.env APPSMITH_ENCRYPTION_
   ```

   Set these values in the `applicationConfig` section:

   ```yaml
     APPSMITH_ENCRYPTION_PASSWORD: <PASSWORD>
     APPSMITH_ENCRYPTION_SALT: <SALT>
   ```

## Export keycloak backup

1. Open a shell into one of your current Appsmith pods:

   ```bash
   kubectl exec -it <pod> bash
   ```

2. To stop keycloak, run the following command:

   ```bash
   supervisorctl stop keycloak
   ```

3. To exit the remaining process, run the following command:

   ``` bash
   kill -9 `pgrep -f keycloak`
   ```

4. To start keycloak backup, run the following command

   ``` bash
   /bin/sh /opt/keycloak/bin/standalone.sh -c standalone.xml -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=export -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/tmp/keycloak_backup.json
   ```

5. Monitor the output and look for similar lines:

   ```bash
   07:25:11,805 INFO  [org.hibernate.validator.internal.util.Version] (ServerService Thread Pool -- 57) HV000001: Hibernate Validator 6.0.22.Final
   07:25:12,930 INFO  [org.hibernate.hql.internal.QueryTranslatorFactoryInitiator] (ServerService Thread Pool -- 57) HHH000397: Using ASTQueryTranslatorFactory
   07:25:13,691 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0033: Full model export requested
   07:25:13,691 INFO  [org.keycloak.exportimport.singlefile.SingleFileExportProvider] (ServerService Thread Pool -- 57) Exporting model into file /appsmith-stacks/data/keycloak_bkp/keycloak_backup.json
   07:25:14,488 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0035: Export finished successfully
   ```

   When you see lines similar to this, press <kbd>ctrl+c</kbd> to stop the process.

6. To exit out of the shell, run following command:

   ```bash
   exit
   ```

7. To download the backup file available at `/tmp/keycloak_backup.json`, run the following command:

   ```bash
   kubectl cp <namespace>/appsmith-0:/tmp/keycloak_backup.json ./keycloak_bkp.json
   ```

## Uninstall Helm chart

To uninstall the existing helm chart, run the following command:

```bash
helm uninstall appsmith -n <namespace>
```

## Configure parameters

To ensure that the Business Edition Helm chart runs, you need to make some changes to the `values.yaml` file. Follow the steps below to configure parameters:

1. Add the following snippet to the bottom of your `values.yaml` file. This snippet enables PostgreSQL.

   ```yaml
   postgresql:
     enabled: true
     auth:
       username: root
       password: <PASSWORD>
       postgresPassword: <POSTGRESQL_PASSWORD>
       database: keycloak
   ```

2. Choose, or create a shared file system. For more information, see [Create a shared file system.](/getting-started/setup/installation-guides/kubernetes/business-edition#create-a-shared-file-system)

3. Add the license key and a few other variables related to keycloak to `applicationConfig` section:

   ```yaml
     APPSMITH_LICENSE_KEY: ""
     APPSMITH_KEYCLOAK_DB_DRIVER: ""
     APPSMITH_KEYCLOAK_DB_USERNAME: ""
     APPSMITH_KEYCLOAK_DB_PASSWORD: ""
     APPSMITH_KEYCLOAK_DB_URL: ""
     APPSMITH_KEYCLOAK_DB_NAME: "keycloak"
   ```

## Install Helm chart 

To add and deploy the new Helm chart, run the following command:

   ```bash
   helm repo add appsmith-ee https://helm-ee.appsmith.com
   helm repo update
   helm install appsmith appsmith-ee/appsmith-ee -n <namespace> -f values.yaml
   ```

For more information, see [installing Business Edition with Kubernetes](/getting-started/setup/installation-guides/kubernetes/business-edition).

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
   kubectl rollout restart deployment/appsmith -n <namespace>
   ```

## Troubleshooting
If any issues are encountered, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or raise it on the [Discord Server](https://discord.com/invite/rBTTVJp).