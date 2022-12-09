# Migration Guide from CE to EE

- Support for horizontal pod autoscaling
  - This means appsmith will now be a kubernetes deployment and not a stateful-set
- Based on the load the pods can scale-up and scale-down

## Taking backup

### exec into the pod

```bash
kubectl exec -it <pod> bash
```

## Appsmith backup

```bash
root@appsmith-0:/opt/appsmith# appsmithctl backup
```

Eg:

```bash
root@appsmith-0:/opt/appsmith# ls /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
/appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz

root@appsmith-0:/opt/appsmith# du -hs /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
72K	/appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz

root@appsmith-0:/opt/appsmith# md5sum /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
122dedfe6de3724596455246a04dff32  /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
```

### keycloak backup

- Stop the keycloak using supervisor

  ```bash
  supervisorctl stop appsmith
  ```

- Get all of existing processes
  
  ```bash
    pgrep -f keycloak 
  ```

- kill the existing processes

  ``` bash
  kill -9 <pids>
  ```

- Start keycloak with extra parameters `-Dkeycloak.migration.action=export` and `-Dkeycloak.migration.file=<backup_path>`

``` bash
/bin/sh /opt/keycloak/bin/standalone.sh -c standalone.xml -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=export -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/tmp/keycloak_backup.json
```

Sample Output:

```bash
07:25:11,805 INFO  [org.hibernate.validator.internal.util.Version] (ServerService Thread Pool -- 57) HV000001: Hibernate Validator 6.0.22.Final
07:25:12,930 INFO  [org.hibernate.hql.internal.QueryTranslatorFactoryInitiator] (ServerService Thread Pool -- 57) HHH000397: Using ASTQueryTranslatorFactory
07:25:13,691 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0033: Full model export requested
07:25:13,691 INFO  [org.keycloak.exportimport.singlefile.SingleFileExportProvider] (ServerService Thread Pool -- 57) Exporting model into file /appsmith-stacks/data/keycloak_bkp/keycloak_backup.json
07:25:14,488 INFO  [org.keycloak.services] (ServerService Thread Pool -- 57) KC-SERVICES0035: Export finished successfully
```

press ctrl+c to stop the keycloak-process after seeing the above lines.

## Copy the backups

### Appsmith backup copy

```bash

(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ kubectl cp goutham/appsmith-0:/appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz ./appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ du -hs appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
 72K	appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ md5 appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
MD5 (appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz) = 122dedfe6de3724596455246a04dff32

```

### Keycloak backup copy

**Note:** The appsmith pod is in the namespace **goutham**

```bash
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ kubectl cp goutham/appsmith-0:/appsmith-stacks/data/keycloak_bkp/keycloak_backup.json ./keycloak_bkp.json
tar: Removing leading `/' from member names
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ ls
keycloak_bkp.json keycloak_details
```

### Uninstall helm chart

```bash
helm uninstall appsmith -n <namespace>
```

## Deploy new helm chart

Deploy the new version of helm chart using this [page](./setup-ee-helmChart.md)

## Copy appsmith backup from local to the new deployment.

Copy the appsmith backup specifically to `/appsmith-stacks/data/backup/`

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ kubectl cp backups/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz goutham/appsmith-875b6cddc-smzwz:/appsmith-stacks/data/backup/
Defaulted container "appsmith" out of: appsmith, redis-init-container (init), mongo-init-container (init), psql-init-container (init)
```

### Copy keycloak from local to the new deployment

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ kubectl cp backups/keycloak_bkp.json  goutham/appsmith-875b6cddc-smzwz:/appsmith-stacks/data/
Defaulted container "appsmith" out of: appsmith, redis-init-container (init), mongo-init-container (init), psql-init-container (init)
```

```bash
root@appsmith-875b6cddc-smzwz:/appsmith-stacks# ls data/keycloak_bkp.json
data/keycloak_bkp.json
root@appsmith-875b6cddc-smzwz:/appsmith-stacks# ls data/
backup/            certificate/       keycloak/          keycloak_bkp.json  restore/
root@appsmith-875b6cddc-smzwz:/appsmith-stacks# ls data/backup/
appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
```

## Restore Appsmith

```bash
root@appsmith-875b6cddc-smzwz:/appsmith-stacks# appsmithctl restore
AWS S3 bucket credentials not found. Could not access backup archives in the bucket.

1 local Appsmith backup file(s) found
0 Appsmith backup file(s) found in S3 bucket.
----------------------------------------------------------------
Index	|	Appsmith Backup Archive File
----------------------------------------------------------------
******** Local archive files (In chronological order) **********
----------------------------------------------------------------
0	|	appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
----------------------------------------------------------------
Please enter the backup file index: 0
Extracting the Appsmith backup archive at /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
Extracting the backup archive completed
Current Appsmith Version: v1.8.6-SNAPSHOT
Restore Appsmith Version: v1.8.6-SNAPSHOT
The restore instance is compatible with the current appsmith version
****************************************************************
Restoring Appsmith instance from the backup at /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
Stopping backend rts
backend: stopped
rts: stopped
Stopped backend rts
Restoring database  ....
.
.
.
.
.
.
```

after successfully importing then, the pod will restart automatically.

## Restore keycloak

- Start keycloak with extra parameters `-Dkeycloak.migration.action=import`, `-Dkeycloak.migration.provider=singleFile`, `-Dkeycloak.migration.file=<backup_path>` and `-Dkeycloak.migration.strategy=OVERWRITE_EXISTING`.

```bash
/bin/sh /opt/keycloak/bin/standalone.sh -b 0.0.0.0 -Djboss.socket.binding.port-offset=1 -Dkeycloak.migration.action=import -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/appsmith-stacks/data/keycloak_bkp.json -Dkeycloak.migration.strategy=OVERWRITE_EXISTING
```

Note: Logs to follow

```bash
08:20:54,708 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0030: Full model import requested. Strategy: OVERWRITE_EXISTING
08:20:54,708 INFO  [org.keycloak.exportimport.singlefile.SingleFileImportProvider] (ServerService Thread Pool -- 54) Full importing from file /appsmith-stacks/data/keycloak_bkp.json
08:20:54,715 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' already exists. Removing it before import
08:20:59,160 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'master' imported
08:21:01,704 INFO  [org.keycloak.exportimport.util.ImportUtils] (ServerService Thread Pool -- 54) Realm 'appsmith' imported
08:21:01,794 INFO  [org.keycloak.services] (ServerService Thread Pool -- 54) KC-SERVICES0032: Import finished successfully
```

press ctrl+c and stop keycloak for the time being

**Restart the deployment so that all the pods will have the changes reflected.**

```bash
kubectl rollout restart deployment/appsmith -n goutham
```
