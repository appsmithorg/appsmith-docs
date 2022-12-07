---
description: Follow the steps in the guide to migrate the multi-container Kubernetes Appsmith installation to Single Container Helm chart installation.

---
# Migrate from Multi Container to Single Container

 Migrating from a multi-container Kubernetes installation to a single-container Helm deployment can provide several benefits, including easier management and increased efficiency. You can make the transition and migrate your Appsmith deployment from the old stack (multiple pods/containers) Kubernetes to Helm chart(single container). The guide below covers the steps to help you successfully migrate to the Helm chart and works well with the default Kubernetes installation. 

Use the `kubectl get all` command to review the default Kubernetes installation resources. You can see the output similar to the one shown below:

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

Before you start the migration process, ensure that the below prerequisites are met.

## Prerequisites

1. Install `kubectl` - `kubectl` is the command-line interface for Kubernetes. It allows you to run commands against Kubernetes clusters to manage applications and other resources. To install kubectl, follow the instructions for your platform from the official [Kubernetes documentation](https://kubernetes.io/vi/docs/tasks/tools/install-kubectl/).
 2. Once `kubectl` is installed, configure it to connect to your cluster. Follow one of the available guides below for your platform: 
     * Minikube: [Setup Kubectl](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)
     * Google Cloud Kubernetes: [Configuring cluster access for kubectl](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
     * AWS EKS: [Create a kubeconfig for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
     * Microk8s: Set up Kubernetes by following [working with kubectl](https://microk8s.io/docs/working-with-kubectl).
3. Install `yq` package: [yq package](https://github.com/mikefarah/yq#install) is needed to format data from the `ConfigMap` resources into a `.yaml` file referenced in migration configurations.

## Migrate multi container to single container

### Export old Kubernetes database
Export data from the existing `MongoDB` pod and download the archive file to your local. Follow the steps below to backup database:

  1. Create `backup` directory in `MongoDB` pod.

  ```bash
      kubectl exec mongo-statefulset-0 -- mkdir -pv /data/db/backup
  ```
  2. Execute `mongodump` command to export data from running MongoDB pod.

   ```bash
      kubectl exec mongo-statefulset-0 o-statefulset-0 -- sh -c 'mongodump --uri="mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@localhost/$MONGO_INITDB_DATABASE" --authenticationDatabase admin --archive=/data/db/backup/appsmith-data.archive --gzip'
   ```
  3. Copy archive file from MongoDB pod to your local.

      ```bash
      kubectl cp mongo-statefulset-0:data/db/backup/appsmith-data.archive appsmith-data.archive
      ```
  4. Verify - Output of this step should be a local `archive` file which store all data of the existing `MongoDB` service in Kubernetes. You can verify by listing out local directory if the `archive` file has been stored in local.

      ```
      ls | grep appsmith-data.archive

      appsmith-data.archive
      ```

### Export old Kubernetes configuration
Export all existing configurations from the `ConfigMap` in the running Kubernetes system and migrate them into the `values.yaml` template of the Helm chart.

  1. Retrieve all configurations data from `ConfigMap` and write into a file with `yaml` format (`configuration.yaml`).

   ```bash
      kubectl get cm application-config -o "jsonpath={.data}" | yq e -P -I 2 >> configuration.yaml \
      && kubectl get cm mongo-config -o "jsonpath={.data}" | yq e -P -I 2 >> configuration.yaml \
      && kubectl get cm encryption-config -o "jsonpath={.data}" | yq e -P -I 2 >> configuration.yaml
      ```
  2. Download the `values.yaml` template of the Helm chart.

      ```bash
      curl -o values.yaml https://bit.ly/3ETEgPT 
      ```

  3.  Manually copy data from `configuration.yaml` to the section `applicationConfig` of the `values.yaml`.

    ![Manually copy data from values.yaml file](/img/helm-values-mapping.png)

  4. Verify
  After manually migrating configuration, the `applicationConfig` section in the `values.yaml` should be same as below:

      ```
      applicationConfig:
        APPSMITH_OAUTH2_GOOGLE_CLIENT_ID: ""
        APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET: ""
        APPSMITH_OAUTH2_GITHUB_CLIENT_ID: ""
        APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET: ""
        APPSMITH_FORM_LOGIN_DISABLED: "false"
        APPSMITH_SIGNUP_DISABLED: "true"
        APPSMITH_CLIENT_LOG_LEVEL: ""
        APPSMITH_GOOGLE_MAPS_API_KEY: "false"
        APPSMITH_MAIL_ENABLED: ""
        APPSMITH_MAIL_HOST: ""
        APPSMITH_MAIL_PORT: ""
        APPSMITH_MAIL_USERNAME: ""
        APPSMITH_MAIL_PASSWORD: ""
        APPSMITH_MAIL_FROM: ""
        APPSMITH_REPLY_TO: ""
        APPSMITH_MAIL_SMTP_AUTH: ""
        APPSMITH_MAIL_SMTP_TLS_ENABLED: ""
        APPSMITH_DISABLE_TELEMETRY: "false"
        APPSMITH_RECAPTCHA_SITE_KEY: ""
        APPSMITH_RECAPTCHA_SECRET_KEY: ""
        APPSMITH_RECAPTCHA_ENABLED: "false"
        APPSMITH_MONGODB_URI: "mongodb://root:root@mongo-service/appsmith"
        APPSMITH_REDIS_URL: "redis://redis-service:6379"
        APPSMITH_ENCRYPTION_PASSWORD: "rmEOM1TxTRxit"
        APPSMITH_ENCRYPTION_SALT: "Jhj1IyFcpKYUK"
        APPSMITH_CUSTOM_DOMAIN: ""
      ```

### Configure values.yaml
Change configurations in `values.yaml` after migrating from step 2, this will ensure that Helm chart can run properly with internal `Redis` & `MongoDB` service. Change `MongoDB URI` with internal host: In the old Kubernetes stack, `MongoDB` has been deployed as a separated resource in the cluster. In the new Helm chart, we use the internal `MongoDB` service and configure it as `ReplicaSet`. Therefore, we will need to perform following action for Helm context:

  1.  Change the host in the `APPSMITH_MONGODB_URI` from `mongo-service` to `localhost`.
  2. Remove query parameter in the URI if they exist.
  3. Add additional configuration for initial credential of `MongoDB`: You will need to add 2 new variables that are `APPSMITH_MONGODB_USER` & `APPSMITH_MONGODB_PASSWORD` with values of user & password of the `MongoDB` .
  4. Replace `Redis URL` with local URL: Same as `MongoDB`, in the new Helm chart, we also use the internal `Redis` service. Therefore, changing the host from `redis-service` to `localhost` (or `127.0.0.1`) is necessary action here.
  5. Verify- Take the example as in the `Verify` step in section 2, after changing configuration, we will have the section `applicationConfig` with values as below:

      ```
      applicationConfig:
        APPSMITH_OAUTH2_GOOGLE_CLIENT_ID: ""
        APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET: ""
        APPSMITH_OAUTH2_GITHUB_CLIENT_ID: ""
        APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET: ""
        APPSMITH_FORM_LOGIN_DISABLED: "false"
        APPSMITH_SIGNUP_DISABLED: "true"
        APPSMITH_CLIENT_LOG_LEVEL: ""
        APPSMITH_GOOGLE_MAPS_API_KEY: "false"
        APPSMITH_MAIL_ENABLED: ""
        APPSMITH_MAIL_HOST: ""
        APPSMITH_MAIL_PORT: ""
        APPSMITH_MAIL_USERNAME: ""
        APPSMITH_MAIL_PASSWORD: ""
        APPSMITH_MAIL_FROM: ""
        APPSMITH_REPLY_TO: ""
        APPSMITH_MAIL_SMTP_AUTH: ""
        APPSMITH_MAIL_SMTP_TLS_ENABLED: ""
        APPSMITH_DISABLE_TELEMETRY: "false"
        APPSMITH_RECAPTCHA_SITE_KEY: ""
        APPSMITH_RECAPTCHA_SECRET_KEY: ""
        APPSMITH_RECAPTCHA_ENABLED: "false"
        APPSMITH_MONGODB_URI: "mongodb://root:root@localhost/appsmith"
        APPSMITH_REDIS_URL: "redis://127.0.0.1:6379"
        APPSMITH_ENCRYPTION_PASSWORD: "rmEOM1TxTRxit"
        APPSMITH_ENCRYPTION_SALT: "Jhj1IyFcpKYUK"
        APPSMITH_CUSTOM_DOMAIN: ""
        APPSMITH_MONGODB_USER: "root"
        APPSMITH_MONGODB_PASSWORD: "root"
      ```

### Install Helm chart
Guide to install new Helm chart with old configuration
  1. Add Helm repository:

      ```
      helm repo add appsmith https://helm.appsmith.com
      ```

  2. Update repository:

      ```
      helm repo update
      ```

  3. Remove `Imago` resources: `Imago` is a auto-update tool for Kubernetes, this tool is set up in both context of old Kubernetes stack & Helm chart. Therefore, it may occur a conflict in deploying Helm chart with existing `Imago` service account & cronjob. Removing it from old Kubernetes context is necessary:

      ```
      kubectl delete sa,cronjob imago
      ```

  4. Install Appsmith Helm chart

      ```
      helm install appsmith appsmith/appsmith --values values.yaml
      ```
  5. Verify - After installation, you can check running pods with below command and should see new pod which created by the Helm chart:

      ```
      kubectl get pods
      NAME                                        READY   STATUS    RESTARTS   AGE
      appsmith-0                                  1/1     Running   0          2m48s
      appsmith-editor-566f7b547f-lb9n8            1/1     Running   0          55m
      appsmith-internal-server-5c78944b64-fs7jm   1/1     Running   0          44m
      mongo-statefulset-0                         1/1     Running   0          55m
      redis-statefulset-0                         1/1     Running   0          55m
      ```

### Import database
Importing data from archive file into new Helm chart

  1. Create `restore` directory in new pod

      ```
      kubectl exec appsmith-0 -- mkdir -p /appsmith-stacks/data/restore
      ```
  2. Copy archive file from local to new pod:

      ```
      kubectl cp appsmith-data.archive appsmith-0:/appsmith-stacks/data/restore
      ```

 3. Run `import_db` command:

      ```
      kubectl exec -it appsmith-0 -- appsmithctl import_db
      ```

 :::note 
 This will ask you `Importing this DB will erase this data. Are you sure you want to proceed`, where you can respond with `y`. It is safe in this situation since the new database in the new setup only contains initial data and should be safe to be overwritten.
:::

4. Verify - Expected output in this step is Helm chart still works properly after importing and the data from old Kubernetes stack also comes up in the Helm chart
Based on the context of Kubernetes, there are two sections will not be covered in this guideline:

## Migrate SSL Certificate
You may want to migrate existing SSL certificate to the new Helm chart. With the old Kubernetes stack & new Helm chart, Kubernetes cluster uses [`cert-manager`](https://cert-manager.io/) to provision the SSL certificate. `cert-manager` is an `Automate certificate manager` that provisions and manages the certificates itself => Backward incompatible if migrating certificate from one `cert-manager` to another one.

We recommend that after migrating to the Helm chart, you can follow the document [Setup Https](https://github.com/appsmithorg/appsmith/blob/release/deploy/helm/Setup-https.md) to setup a new `cert-manager` and provision a new certificate for Helm installation.

## Test Appsmith
After the chart has been deployed to the Kubernetes cluster, it is important to test the Appsmith application to ensure it is functioning as expected in the new Helm-based deployment. This may involve running a series of integration tests, or simply verifying that the application is accessible and responding to requests as expected.

## Rollback
If any issues are encountered during the migration process or while testing the Appsmith Helm installation, it may be necessary to roll back to the previous multi-container Kubernetes installation. You can start using the old Kubernetes stacks as it is not removed and is available. You can remove the old stacks from the official Kubernetes documentation.