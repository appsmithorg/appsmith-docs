# Kubernetes

The EE Helm charts, supports Horizontal Pod Autoscaling (HPA). This means that Appsmith pods can be scaled up or down automatically depending on the current load.

Internally, this also means that the Appsmith pods will now be managed by a Kubernetes _deployment_ resource instead of a _stateful-set_ resource.

## Take backup

1. Open a shell into one of your current Appsmith pods:

   ```bash
   kubectl exec -it <pod> bash
   ```

2. Run the backup command:

   ```bash
   appsmithctl backup
   ```

3. Once this is finished, you should have a backup archive generated at a location like this:

   ```
   /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
   ```

4. Download the backup archive:

   ```bash
   kubectl cp <namespace>/appsmith-0:<backup_path_from_above> ./appsmith-ce-backup.tar.gz
   ```

5. Grab the salt and password from the pod, and copy them to `values.yaml`.

   ```bash
   kubectl exec <pod_name> -- grep /appsmith-stacks/configuration/docker.env APPSMITH_ENCRYPTION_
   ```

   Set these values in the `applicationConfig`:

   ```yaml
     APPSMITH_ENCRYPTION_PASSWORD: "password_here"
     APPSMITH_ENCRYPTION_SALT: "salt_here"
   ```

## Uninstall existing Helm chart

Let's uninstall the CE helm chart:

```bash
helm uninstall appsmith
```

## Deploy the new helm chart

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

2. Remove the highlighted lines, irrespective of the value, if present:

   ```yaml
   image:
     # highlight-next-line
     registry: anything
     # highlight-next-line
     repository: anything
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
