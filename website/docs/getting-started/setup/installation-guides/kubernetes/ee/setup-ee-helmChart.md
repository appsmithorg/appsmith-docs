# Pre Requisites

## Install metrics-server for kubernetes

This helps in scaling the pods for appsmith

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

## Guidelines to deploy a new helm chart

You can turn off/on charts based on the convenience .

**Sample values.yaml**

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ head -n 30 values.yaml
## Redis parameters
redis:
  enabled: true
  auth:
    enabled: false
  replica:
    replicaCount: 1

## Mongo parameters
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

## postgresql parameters
postgresql:
  enabled: true
  auth:
    username: root
    password: password
    postgresPassword: password
    database: keycloak

## cloudservice parameters
```

**Note:**

- **If you need HA for keycloak Postgres has to be enabled**

**eg:**

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ head -n 25 values.yaml
## Redis parameters
redis:
  enabled: true
  auth:
    enabled: false
  replica:
    replicaCount: 1

## Mongo parameters
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

## postgresql parameters
postgresql:
  enabled: false
  auth:
    username: root
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ helm install appsmith . -n goutham --create-namespace -f values-vanilla.yaml
Error: INSTALLATION FAILED: execution error at (appsmith/templates/import.yaml:12:4): We Recommend enabling postgresql to have HA for keycloak
```

- **If appsmith auto scaling is enabled then mongo has to be enabled**

**eg:**

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ head -n 15 values.yaml
## Redis parameters
redis:
  enabled: true
  auth:
    enabled: false
  replica:
    replicaCount: 1

## Mongo parameters
mongodb:
  enabled: false
  service:
    nameOverride: appsmith-mongodb
  auth:
    rootUser: root
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ helm install appsmith . -n goutham --create-namespace -f values-vanilla.yaml
Error: INSTALLATION FAILED: execution error at (appsmith/templates/import.yaml:8:4): We Recommend enabling mongo if autoscaling is enabled
```

If either of the two scenarios fail then the helm installation fails with error as follows.

### Create a shared file system

**EFS**

You can use efs-csi driver and use that mount EFS on the kubernetes pods

Reference-link: [https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html)

**Access** **EFS with new PVC:**

```bash
persistence:
  ## @param persistence.enabled - Enable data persistence using PVC
  ##
  enabled: true
  ## @param persistence.storageClass PVC Storage Class
  ##
  storageClass: "-"
    ## @param persistence.annotations Additional custom annotations for the PVC
  ##
  annotations: {}
  ## @param persistence.localStorage - Use local storage for PVC
  ##
  localStorage: false
  ## @param persistence.storagePath - local storage path
  ##
  storagePath: /tmp/hostpath_pv
  ## @param persistence.localCluster
  ##
  localCluster: false
  ## @param persistence.accessModes PV Access Mode
  ##
  accessModes:
    - ReadWriteMany
  ## @param persistence.size PVC Storage Request
  ##
  size: 10Gi
  ## Fine tuning for volumeClaimTemplates
  ##
  ReclaimPolicy: Retain
  existingClaim:
    enabled: false
    name: 
    claimName: 
  efs:
    enabled: true
    driver: efs.csi.aws.com
    volumeHandle: <file_system_id>
  volumeClaimTemplates:
    ## @param persistence.volumeClaimTemplates.selector A label query over volumes to consider for binding (e.g. when using local volumes)
    ## A label query over volumes to consider for binding (e.g. when using local volumes)
    ## See https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#labelselector-v1-meta for more details
    ##
    selector: {}
    ## @param persistence.volumeClaimTemplates.requests Custom PVC requests attributes
    ## Sometime cloud providers use additional requests attributes to provision custom storage instance
    ## See https://cloud.ibm.com/docs/containers?topic=containers-file_storage#file_dynamic_statefulset
    ##
    requests: {}
    ## @param persistence.volumeClaimTemplates.dataSource Add dataSource to the VolumeClaimTemplate
    ##
    dataSource: {}
# tags:
#   install-ingress-nginx: true
```

**EFS using an existing PVC:**

In case, you already have a persistent volume and use it to mount EFS on Kubernetes pods.

```bash

persistence:
  ## @param persistence.enabled - Enable data persistence using PVC
  ##
  enabled: true
  ## @param persistence.storageClass PVC Storage Class
  ##
  storageClass: "-"
    ## @param persistence.annotations Additional custom annotations for the PVC
  ##
  annotations: {}
  ## @param persistence.localStorage - Use local storage for PVC
  ##
  localStorage: false
  ## @param persistence.storagePath - local storage path
  ##
  storagePath: /tmp/hostpath_pv
  ## @param persistence.localCluster
  ##
  localCluster: false
  ## @param persistence.accessModes PV Access Mode
  ##
  accessModes:
    - ReadWriteMany
  ## @param persistence.size PVC Storage Request
  ##
  size: 10Gi
  ## Fine tuning for volumeClaimTemplates
  ##
  ReclaimPolicy: Retain
  existingClaim:
    enabled: true
    name: efsappsmith
    claimName: efsappsmith
  efs:
    enabled: true
    driver: efs.csi.aws.com
    volumeHandle: <file-system-id>
  volumeClaimTemplates:
    ## @param persistence.volumeClaimTemplates.selector A label query over volumes to consider for binding (e.g. when using local volumes)
    ## A label query over volumes to consider for binding (e.g. when using local volumes)
    ## See https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#labelselector-v1-meta for more details
    ##
    selector: {}
    ## @param persistence.volumeClaimTemplates.requests Custom PVC requests attributes
    ## Sometime cloud providers use additional requests attributes to provision custom storage instance
    ## See https://cloud.ibm.com/docs/containers?topic=containers-file_storage#file_dynamic_statefulset
    ##
    requests: {}
    ## @param persistence.volumeClaimTemplates.dataSource Add dataSource to the VolumeClaimTemplate
    ##
    dataSource: {}
# tags:
#   install-ingress-nginx: true
```

**Local Deployment (minikube)**

```bash
persistence:
  ## @param persistence.enabled - Enable data persistence using PVC
  ##
  enabled: true
  ## @param persistence.storageClass PVC Storage Class
  ##
  storageClass: "manual"
    ## @param persistence.annotations Additional custom annotations for the PVC
  ##
  annotations: {}
  ## @param persistence.localStorage - Use local storage for PVC
  ##
  localStorage: true
  ## @param persistence.storagePath - local storage path
  ##
  storagePath: /tmp/hostpath_pv
  ## @param persistence.localCluster
  ##
  localCluster:
    - minikube
  ## @param persistence.accessModes PV Access Mode
  ##
  accessModes:
    - ReadWriteMany
  ## @param persistence.size PVC Storage Request
  ##
  size: 10Gi
  ## Fine tuning for volumeClaimTemplates
  ##
  existingClaim: false
  name: 
  claimName: 
  ReclaimPolicy: Retain
  efs:
    enabled: false
    driver: 
    volumeHandle: 
  volumeClaimTemplates:
    ## @param persistence.volumeClaimTemplates.selector A label query over volumes to consider for binding (e.g. when using local volumes)
    ## A label query over volumes to consider for binding (e.g. when using local volumes)
    ## See https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#labelselector-v1-meta for more details
    ##
    selector: {}
    ## @param persistence.volumeClaimTemplates.requests Custom PVC requests attributes
    ## Sometime cloud providers use additional requests attributes to provision custom storage instance
    ## See https://cloud.ibm.com/docs/containers?topic=containers-file_storage#file_dynamic_statefulset
    ##
    requests: {}
    ## @param persistence.volumeClaimTemplates.dataSource Add dataSource to the VolumeClaimTemplate
    ##
    dataSource: {}
# tags:
#   install-ingress-nginx: true
```

Deploy the new helm chart

```bash
cd deploy/helm/
```

### Deploy new chart

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts)✗ helm install <chart_name> . -n <namespace> --create-namespace -f values.yaml
eg:
(base) ➜  helm git:(helm/ee/keycloak/charts)✗ helm install appsmith . -n goutham --create-namespace -f values.yaml
```

### Sample output

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ helm install appsmith . -n goutham --create-namespace -f values-vanilla.yaml
NAME: appsmith
LAST DEPLOYED: Mon Oct 24 13:24:07 2022
NAMESPACE: goutham
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
  http://release.app.appsmith.com/

Please update your DNS records with your domain by the address. You can use following command to get Appsmith address:

kubectl get ingress --namespace goutham
```

### Check the output

```bash
(base) ➜  helm git:(helm/ee/keycloak/charts) ✗ kubectl get pods -n goutham
NAME                            READY   STATUS    RESTARTS   AGE
appsmith-875b6cddc-4mmj6        1/1     Running   0          90s
appsmith-875b6cddc-7b2hw        1/1     Running   0          3m30s
appsmith-875b6cddc-smzwz        1/1     Running   0          3m15s
appsmith-mongodb-0              1/1     Running   0          3m30s
appsmith-mongodb-1              1/1     Running   0          3m10s
appsmith-mongodb-arbiter-0      1/1     Running   0          3m30s
appsmith-postgresql-0           1/1     Running   0          3m30s
appsmith-redis-master-0         1/1     Running   0          3m30s
appsmith-redis-replicas-0       1/1     Running   0          3m30s
```
