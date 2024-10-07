---
description: Follow the steps in the guide to migrate the multi-container Kubernetes Appsmith installation to Single Container Helm chart installation.
title: Kubernetes (k8s)

---
# Migrate From Multi-Container Setup (k8s)

 Migrating from a multi-container Kubernetes installation to a single-container Helm deployment can provide several benefits, including easier management and increased efficiency. You can make the transition and migrate your Appsmith deployment from the old stack (multiple pods/containers) Kubernetes to Helm chart(single container). The guide below covers the steps to help you successfully migrate to the Helm chart and works well with the default Kubernetes installation.

The migration works on the default Kubernetes installation with the resources as shown in the image below. Use the `kubectl get all` command to review the default Kubernetes installation resources.

```
➜ kubectl get all
NAME                                           READY   STATUS      RESTARTS   AGE
pod/appsmith-editor-995c974df-njtdh            1/1     Running     0          3d12h
pod/appsmith-internal-server-dfd68b55b-8p5w8   1/1     Running     1          3d12h
pod/imago-27473940-kwslt                       0/1     Completed   0          12m
pod/mongo-statefulset-0                        1/1     Running     0          3d12h
pod/redis-statefulset-0                        1/1     Running     0          3d12h

NAME                               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)           AGE
service/appsmith-backend-service   NodePort    10.100.247.245   <none>        8080:32694/TCP    3d12h
service/appsmith-editor            ClusterIP   10.100.236.17    <none>        80/TCP            3d12h
service/kubernetes                 ClusterIP   10.100.0.1       <none>        443/TCP           3d12h
service/mongo-service              NodePort    10.100.2.162     <none>        27017:31766/TCP   3d12h
service/redis-service              NodePort    10.100.7.184     <none>        6379:30834/TCP    3d12h

NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/appsmith-editor            1/1     1            1           3d12h
deployment.apps/appsmith-internal-server   1/1     1            1           3d12h

NAME                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/appsmith-editor-995c974df             1         1         1       3d12h
replicaset.apps/appsmith-internal-server-dfd68b55b    1         1         1       3d12h

NAME                                 READY   AGE
statefulset.apps/mongo-statefulset   1/1     3d12h
statefulset.apps/redis-statefulset   1/1     3d12h

NAME                  SCHEDULE    SUSPEND   ACTIVE   LAST SCHEDULE   AGE
cronjob.batch/imago   0 * * * *   False     0        12m             3d12h

NAME                       COMPLETIONS   DURATION   AGE
job.batch/imago-27473940   1/1           16s        12m
```

## Prerequisites

Before you start the migration process, ensure that the below prerequisites are met.

1. Install `kubectl` - `kubectl` is the command-line interface for Kubernetes. It allows you to run commands against Kubernetes clusters to manage applications and other resources. To install `kubectl`, follow the instructions for your platform from the official [Kubernetes documentation](https://kubernetes.io/docs/tasks/tools/#kubectl).
2. Once `kubectl` is installed, configure it to connect to your cluster. Follow one of the available guides below for your platform:
     * Minikube: [Setup Kubectl](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)
     * Google Cloud Kubernetes: [Configuring cluster access for kubectl](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
     * AWS EKS: [Create a kubeconfig for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
     * Microk8s: Set up Kubernetes by following [working with kubectl](https://microk8s.io/docs/working-with-kubectl).
3. Install `yq` package: [yq package](https://github.com/mikefarah/yq#install) is needed to format data from the `ConfigMap` resources into a `.yaml` file referenced in migration configurations.

## Migrate to a single container

Migrating from a multi-container Kubernetes installation to a new cluster involves exporting your data and configuration, setting up the new cluster, and migrating your applications and services to the new environment. Here are the steps to do this:

### Export database

Export data from the existing `MongoDB` pod and download the archive file to your local. Follow the steps below to backup a database:

  1. Create the `backup` directory in the `MongoDB` pod.

  ```bash
      kubectl exec mongo-statefulset-0 -- mkdir -pv /data/db/backup
  ```

  2. Execute `mongodump` command to export data from the running MongoDB pod.

   ```bash
      kubectl exec mongo-statefulset-0 o-statefulset-0 -- sh -c 'mongodump --uri="mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@localhost/$MONGO_INITDB_DATABASE" --authenticationDatabase admin --archive=/data/db/backup/appsmith-data.archive --gzip'
   ```

  3. Copy the archive file from the MongoDB pod to your local.

      ```bash
      kubectl cp mongo-statefulset-0:data/db/backup/appsmith-data.archive appsmith-data.archive
      ```

  4. Verify that a local `archive` file is created that stores the data of the existing `MongoDB` service in Kubernetes.

      ```bash
      ls | grep appsmith-data.archive

      appsmith-data.archive
      ```

### Configure parameters

In the old Kubernetes stack, MongoDB and Redis were deployed as separate resources in the cluster. However, in the new Helm chart, you can configure MongoDB and Redis as internal services or deploy MongoDB and Redis as separate services in the cluster. To ensure that the Helm chart runs with external Redis and MongoDB services, you need to make some changes to the `values.yaml` file. Follow the steps below to configure external Redis and MongoDB services.

  1. Add Helm repository

      ```bash
      helm repo add appsmith https://helm.appsmith.com
      ```

  2. Update repository

      ```bash
      helm repo update

  3. Pull the latest values from the Appsmith helm chart

      ```bash new
        helm show values appsmith/appsmith > values.yml
      ```

  4. Modify `values.yaml` and enable MongoDB and Redis.

      ```bash new
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
            rootPassword: password
          replicaCount: 2
          architecture: "replicaset"
          replicaSetName: rs0
      ```

### Install Helm chart

Follow the below steps to install the Helm chart with the old configuration:

  1. Install Appsmith

      ```bash
      helm install appsmith appsmith/appsmith --values values.yaml
      ```

  2. After installation, verify that the pods are running. Use the below command to verify the new pod created by the Helm chart:

    :::caution Attention
      Ensure that the `APPSMITH_CUSTOM_DOMAIN` environment variable is not set in the `docker.env` file when deploying Appsmith on Kubernetes. To configure the TLS on Kubernetes, see the [Configuring TLS](/getting-started/setup/installation-guides/kubernetes#configure-tls) section.
    :::

      ```bash
          kubectl get pods -n appsmith
          NAME                         READY   STATUS     RESTARTS   AGE
          appsmith-0                   1/1     Running    0           90s
          appsmith-mongodb-0           1/1     Running    0          90s
          appsmith-mongodb-1           1/1     Pending    0          90s
          appsmith-mongodb-arbiter-0   1/1     Running    0          90s
          appsmith-redis-master-0      1/1     Running    0          90s
          appsmith-redis-replicas-0    1/1     Running    0          90s
      ```

### Import database

Follow the below steps to import data from the archive file into the new Helm chart:

  1. Create a `restore` directory in the new pod

      ```bash
      kubectl exec appsmith-0 -- mkdir -p /appsmith-stacks/data/restore
      ```

  2. Copy the archive file from local to the new pod:

      ```bash
      kubectl cp appsmith-data.archive appsmith-0:/appsmith-stacks/data/restore
      ```

  3. Run `import_db` command:

    ```bash
      kubectl exec -it appsmith-0 -- appsmithctl import_db
    ```

 You see a message - `Importing this DB will erase this data. Are you sure you want to proceed`, where you can respond with `y`. It's safe in this situation since the new database in the new setup only contains initial data and should be safe to be overwritten.

4. Verify that the Helm chart still works after importing and the data from the old Kubernetes stack also shows up in the Helm chart

### Migrate SSL certificate

You may want to migrate an existing SSL certificate to the new Helm chart. The Kubernetes cluster uses the [`cert-manager`](https://cert-manager.io/) to provision the SSL certificate, which is an automated certificate manager. However, this change may not be backward compatible if you're migrating from one `cert-manager` to another.

It's recommended that after migrating to the Helm chart, you follow the document [Setup HTTPS](https://github.com/appsmithorg/appsmith/blob/release/deploy/helm/Setup-https.md) to set up a new `cert-manager` and provision a new certificate for Helm installation.

### Test migration

After the chart has been deployed to the Kubernetes cluster, it's important to test that the migration is successful and the Appsmith application is functioning as expected in the new Helm-based deployment. This may involve running a series of integration tests, or simply verifying that the application is accessible and responding to requests as expected.

## Troubleshooting

If any issues are encountered during the migration process or while testing the Appsmith Helm installation, it may be necessary to roll back to the previous multi-container Kubernetes installation. You can start using the old Kubernetes stacks as it's not been removed and is available. If you are still facing any issues, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or raise it on the [Discord Server](https://discord.com/invite/rBTTVJp).
