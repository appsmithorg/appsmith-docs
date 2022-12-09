# Migration Guide from CE to EE

**Key aspects of the new ee-helm-chart:**

- Support for horizontal pod autoscaling
  - This means appsmith will now be a kubernetes deployment and not a stateful-set
- Based on the load the pods can scale-up and scale-down

## Taking backup

### exec into the pod

```bash
kubectl exec -it <pod> bash
```

### Appsmith backup

```bash
root@appsmith-0:/opt/appsmith# appsmithctl backup
```

Eg:

```bash
root@appsmith-0:/opt/appsmith# ls /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
/appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz

root@appsmith-0:/opt/appsmith# du -hs /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
72K /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz

root@appsmith-0:/opt/appsmith# md5sum /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
122dedfe6de3724596455246a04dff32  /appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
```

## Copy the backup

```bash
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ kubectl cp <namespace>/appsmith-0:<backup_path> ./<local_file>.tar.gz

```

Eg:

```bash

(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ kubectl cp goutham/appsmith-0:/appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz ./appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ du -hs appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
 72K appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
(base) ➜  backups git:(helm/ee/keycloak/charts) ✗ md5 appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
MD5 (appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz) = 122dedfe6de3724596455246a04dff32

```

### Uninstall helm chart

```bash
helm uninstall appsmith 
```

## Deploy the new helm chart

Deploy the new version of helm chart using this [page](./setup-ee-helmChart.md)

## Copy appsmith backup from local to the new deployment

Copy the appsmith backup specifically to `/appsmith-stacks/data/backup/`

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ kubectl cp <local_path> <namespace>/<pod>:/appsmith-stacks/data/backup/

```

Eg:

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ kubectl cp backups/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz goutham/appsmith-875b6cddc-smzwz:/appsmith-stacks/data/backup/
Defaulted container "appsmith" out of: appsmith, redis-init-container (init), mongo-init-container (init), psql-init-container (init)
```

## Restore Appsmith

```bash
root@appsmith-875b6cddc-smzwz:/appsmith-stacks# appsmithctl restore
AWS S3 bucket credentials not found. Could not access backup archives in the bucket.

1 local Appsmith backup file(s) found
0 Appsmith backup file(s) found in S3 bucket.
----------------------------------------------------------------
Index | Appsmith Backup Archive File
----------------------------------------------------------------
******** Local archive files (In chronological order) **********
----------------------------------------------------------------
0 | appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
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

**Restart the deployment so that all the pods will have the changes reflected.**

```bash
kubectl rollout restart deployment/appsmith
```
