# Migration Guide from EE to EE

If you are using Appsmith Business Edition, with the Helm chart from `helm.appsmith.com`, this document will help you move to the new Helm chart from `helm-ee.appsmith.com`.

## Take backup

1. Open a shell into one of your current Appsmith pods:

   ```bash
   kubectl exec -it <pod> bash
   ```

2. Run the backup command:

   ```bash
   appsmithctl backup
   ```

3. Once this is finished, you should have a backup archive generated at a location like this. This is the Appsmith backup archive.

   ```
   /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
   ```

4. Exit out of the shell with:
   
   ```bash
   exit
   ```

5. Download the backup archive:

   ```bash
   kubectl cp <namespace>/appsmith-0:<appsmith_backup_archive_path> ./appsmith-ee-backup.tar.gz
   ```

6. Grab the salt and password from the pod, and copy them to `values.yaml`.

   ```bash
   kubectl exec <pod_name> -- grep /appsmith-stacks/configuration/docker.env APPSMITH_ENCRYPTION_
   ```

   Set these values in the `applicationConfig`:

   ```yaml
     APPSMITH_ENCRYPTION_PASSWORD: "password_here"
     APPSMITH_ENCRYPTION_SALT: "salt_here"
   ```

Similarly, take a backup of Keycloak:

1. Open a shell into one of your current Appsmith pods:

   ```bash
   kubectl exec -it <pod> bash
   ```

2. Stop Keycloak:

   ```bash
   supervisorctl stop keycloak
   ```

3. Kill the remaining process

   ``` bash
   kill -9 `pgrep -f keycloak`
   ```

4. Start keycloak backup process

   ``` bash
   /bin/sh /opt/keycloak/bin/standalone.sh -c standalone.xml -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=export -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/tmp/keycloak_backup.json
   ```

5. Now monitor the output, and look for lines like the following:

   ```bash
   07:25:11,805 INFO  [org.hibernate.validator.internal.util.Version] (ServerService Thread Pool -- 57) HV000001: Hibernate Validator 6.0.22.Final
   07:25:12,930 INFO  [org.hibernate.hql.internal.QueryTranslatorFactoryInitiator] (ServerService Thread Pool -- 57) HHH000397: Using ASTQueryTranslatorFactory
   07:25:13,691 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0033: Full model export requested
   07:25:13,691 INFO  [org.keycloak.exportimport.singlefile.SingleFileExportProvider] (ServerService Thread Pool -- 57) Exporting model into file /appsmith-stacks/data/keycloak_bkp/keycloak_backup.json
   07:25:14,488 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0035: Export finished successfully
   ```

   Press <kbd>ctrl+c</kbd> to stop the process after seeing the above lines.

6. Exit out of the shell with:

   ```bash
   exit
   ```

7. Download the backup file, available at `/tmp/keycloak_backup.json`:

   ```bash
   kubectl cp goutham/appsmith-0:/tmp/keycloak_backup.json ./keycloak_bkp.json
   ```

## Uninstall existing Helm chart

Let's uninstall the current Appsmith Helm chart.

```bash
helm uninstall appsmith -n <namespace>
```

## Deploy new helm chart

Before we can deploy using the Helm chart from `helm-ee.appsmith.com`, we need to make the following few additions to the configuration in `values.yaml`.

1. Enabling PostgreSQL: Add the following snippet to the bottom of your `values.yaml` file.

   ```yaml

   postgresql:
     enabled: true
     auth:
       username: root
       password: password
       postgresPassword: password
       database: keycloak
   ```

2. Ensure you have the `appsmith-ee` image repository set:

   ```yaml
   image:
     registry: index.docker.io
     # highlight-next-line
     repository: appsmith/appsmith-ee
     pullPolicy: Always
     tag: "latest"
   ```

3. [Choose, or create a shared file system](./business-edition#create-a-shared-file-system)

4. Add the license and a few other variables to `applicationConfig`, like so:

   ```yaml
     APPSMITH_LICENSE_KEY: ""
     APPSMITH_KEYCLOAK_DB_DRIVER: ""
     APPSMITH_KEYCLOAK_DB_USERNAME: ""
     APPSMITH_KEYCLOAK_DB_PASSWORD: ""
     APPSMITH_KEYCLOAK_DB_URL: ""
     APPSMITH_KEYCLOAK_DB_NAME: "keycloak"
   ```

5. Now add and deploy the new Helm chart:

   ```bash
   helm repo add appsmith-ee https://helm-ee.appsmith.com
   helm repo update
   helm install appsmith appsmith-ee/appsmith-ee -n <namespace> -f values.yaml
   ```

:::info
For reference, more information about this Helm chart can be found on [the fresh installation documentation](./business-edition).
:::

## Restore backup

1. Copy the Appsmith backup into the new Appsmith pod:

   ```bash
   kubectl cp appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz <namespace>/<pod_name>:/appsmith-stacks/data/backup/
   ```

2. Copy the Keycloak backup as well, into the new Appsmith pod:

   ```bash
   kubectl cp keycloak_bkp.json <namespace>/<pod_name>:/appsmith-stacks/data/
   ```

3. Restore Appsmith data:

   ```bash
   kubectl exec -it <namespace>/<pod_name> -- appsmithctl restore
   ```

   After this is complete, the pod will restart automatically.

4. Restore Keycloak data:

   ```bash
   kubectl exec -it <namespace>/<pod_name> -- /bin/sh /opt/keycloak/bin/standalone.sh -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=import -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/appsmith-stacks/data/keycloak_bkp.json -Dkeycloak.migration.strategy=OVERWRITE_EXISTING
   ```

   Monitor the output, and look for lines like the following:

   ```
   08:20:54,708 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0030: Full model import requested. Strategy: OVERWRITE_EXISTING
   08:20:54,708 INFO  [org.keycloak.exportimport.singlefile.SingleFileImportProvider] (ServerService Thread Pool -- 54) Full importing from file /appsmith-stacks/data/keycloak_bkp.json
   08:20:54,715 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' already exists. Removing it before import
   08:20:59,160 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' imported
   08:21:01,704 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'appsmith' imported
   08:21:01,794 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0032: Import finished successfully
   ```

   Once you see lines like this, press <kbd>ctrl+c</kbd> to stop.

5. Restart for the changes to be applied:

   ```bash
   kubectl rollout restart deployment/appsmith -n goutham
   ```

You should have your Appsmith instance running with the new Helm chart.
