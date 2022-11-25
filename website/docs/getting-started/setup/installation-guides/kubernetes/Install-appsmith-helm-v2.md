# Install Appsmith-Ce-Helm-2.0.0

## Databases

- Mongo
- redis

## How to migrate existing appsmith-helm(1.5.3) to appsmith-helm(2.0.0)

## Taking backup

Use `appsmithctl` backup and restore for this

Exec into the old pods and perform the following operation.

```bash
eg:
kubectl exec -it appsmith-0 -n original bash
root@appsmith-0:/opt/appsmith# appsmithctl backup
```

**Uninstall old appsmith helm chart**

```bash
helm uninstall helm -n original
```

Install new appsmith helm chart preferably in the same namespace

By default, you can install mongo and redis as seperate statefulsets. In case you want to modify

### Modify the appsmith helm chart

```markdown
helm show values appsmith/appsmith --version 2.0.0 > values.yaml
```

### How to turn off/on mongo and redis along with appsmith

Modify the values below based on the convenience of the type of infra.

```
(base) ➜  helm git:(release) head -n 20 values.yaml
## Redis parameters
redis:
  enabled: true
  auth:
    enabled: false
  replica:
    replicaCount: 1

mongodb:
  enabled: true
  service:
    nameOverride: appsmith-mongodb
  auth:
    rootUser: root
    rootPassword : password
  replicaCount: 2
  architecture: "replicaset"
  replicaSetName: rs0
```

### Install appsmith helm chart with the modified values.yaml

```bash
(base) ➜  helm git:(release) ✗ helm install appsmith/appsmith --generate-name --version 2.0.0 -n ebsgoutham --create-namespace -f values_new.yaml
NAME: appsmith-1669367715
LAST DEPLOYED: Fri Nov 25 14:45:17 2022
NAMESPACE: ebsgoutham
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace ebsgoutham -l "app.kubernetes.io/name=appsmith,app.kubernetes.io/instance=appsmith-1669367715" -o jsonpath="{.items[0].metadata.name}")
  export CONTAINER_PORT=$(kubectl get pod --namespace ebsgoutham $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl --namespace ebsgoutham port-forward $POD_NAME 8080:$CONTAINER_PORT

To expose your Appsmith service to be accessible from the Internet, please refer to our docs here https://docs.appsmith.com/setup/kubernetes#expose-appsmith.
```

Once appsmith pods are up, exec into the appsmith pod and perform the following operation

### Copy the appsmith backup

If appsmith backup is moved to a local drive or s3. Please exec into the pod move the tar back to `/appsmith-stacks/data/backup/`

```markdown

kubectl cp backups/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz <namespace>/appsmith-875b6cddc-smzwz:/appsmith-stacks/data/backup/

eg:
kubectl cp backups/appsmith-backup-2022-10-24T07-09-56.930Z.tar.gz appsmith/appsmith-875b6cddc-smzwz:/appsmith-stacks/data/backup/

```

### Restore the backup

```bash
eg:
kubectl exec -it appsmith-0 -n original bash
root@appsmith-0:/opt/appsmith# appsmithctl restore
```

Things have to be back to normal.
