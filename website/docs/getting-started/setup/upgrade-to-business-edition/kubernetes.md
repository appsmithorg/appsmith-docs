# Kubernetes

The EE Helm charts, supports Horizontal Pod Autoscaling (HPA). This means that Appsmith pods can be scaled up or down automatically depending on the current load.

Internally, this also means that the Appsmith pods will now be managed by a Kubernetes _deployment_ resource instead of a _stateful-set_ resource.

## Take backup

Open a shell into one of your current Appsmith pods:

```bash
kubectl exec -it <pod> bash
```

Run the backup command:

```bash
appsmithctl backup
```

Once this is finished, you should have a backup archive generated at a location like this:

```
/appsmith-stacks/data/backup/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz
```

Download the backup archive:

```bash
kubectl cp <namespace>/appsmith-0:<backup_path_from_above> ./appsmith-ce-backup.tar.gz
```

## Uninstall CE helm chart

Now that you have a backup, you can uninstall the CE helm chart:

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
