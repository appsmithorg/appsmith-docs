# Business Edition with Kubernetes

## Pre-requisites

* [Install `kubectl`](https://kubernetes.io/vi/docs/tasks/tools/install-kubectl/)
  * Minikube: [Setup Kubectl](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)
  * AWS EKS: [Create a kubeconfig for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
* [Install `helm`](https://helm.sh/docs/intro/install/)

## Prepare

1. Install `metrics-server`, which provides vital metrics to the Horizontal Pod Autoscaler (HPA) to scale the pods.

    ```bash
    kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
    ```

2. Add `appsmith-ee` Helm chart.

    ```bash
    helm repo add appsmith-ee https://helm-ee.appsmith.com
    helm repo update
    ```

3. Get the initial `values-ee.yaml`.

    ```bash
    helm show values appsmith-ee/appsmith --version 2.0.0 > values-ee.yaml
    ```

## High Availability

If you need High Availability (HA), ensure your configuration matches with the below pointers.

1. Postgres has to be enabled or an external Postgres' URL has to be provided.

    ```yaml
    postgresql:
      # highlight-next-line
      enabled: true
      auth:
        username: root
    ```

2. Ensure `autoscaling` is enabled:

    ```yaml
    autoscaling:
      # highlight-next-line
      enabled: true
      minReplicas: 2
      maxReplicas: 2
    ```

3. Ensure `mongodb` is enabled, or that you are using an [external MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis#custom-mongodb).

    ```yaml
    mongodb:
      # highlight-next-line
      enabled: true
      service:
        nameOverride: appsmith-mongodb
    ```

4. Create a shared file system. This is required for some Appsmith features that make use of the filesystem, like `git`-connected applications. This is elaborated in the [following section](#efs).

## EFS

You can use the [EFS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html) to mount EFS on the kubernetes pods.

### EFS using new PVC

Here's an example of how to configure EFS with a new `PersistenceVolumeClaim` (PVC):

```yaml
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
    # highlight-next-line
    enabled: false
    name: 
    claimName: 
  efs:
    # highlight-next-line
    enabled: true
    driver: efs.csi.aws.com
    # highlight-next-line
    volumeHandle: <file_system_id>
```

### EFS using an existing PVC

In case, you already have a persistent volume and use it to mount EFS on Kubernetes pods.

```yaml
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
    # highlight-next-line
    enabled: true
    name: efsappsmith
    claimName: efsappsmith
  efs:
    # highlight-next-line
    enabled: true
    driver: efs.csi.aws.com
    # highlight-next-line
    volumeHandle: <file-system-id>
```

### Local Deployment (minikube)

If using a local deploymeng with minikube, you can configure persistence like this:

```yaml
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
  # highlight-next-line
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
  existingClaim:
    # highlight-next-line
    enabled: false
    name:
    claimName:
  ReclaimPolicy: Retain
  efs:
    # highlight-next-line
    enabled: false
    driver: 
    volumeHandle:
```

## Deploy

After configuring the `values-ee.yaml` file, you can deploy Appsmith using the following command:

```bash
helm install appsmith-ee/appsmith -f values-ee.yaml --generate-name
```

Here's a sample output you can expect from the above install command:

```
NAME: appsmith
LAST DEPLOYED: Mon Oct 24 13:24:07 2022
NAMESPACE: <namespace>
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=appsmith,app.kubernetes.io/instance=appsmith-2-1670479627" -o jsonpath="{.items[0].metadata.name}")
  export CONTAINER_PORT=$(kubectl get pod --namespace default $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl --namespace default port-forward $POD_NAME 8080:$CONTAINER_PORT

To expose your Appsmith service to be accessible from the Internet, please refer to our docs here https://docs.appsmith.com/setup/kubernetes#expose-appsmith.
```

Check/verify list of pods, with the command `kubectl get pods`. It should produce an output like this:

```
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
