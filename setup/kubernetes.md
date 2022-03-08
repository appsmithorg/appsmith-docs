---
description: >-
  We provide an installation script that will help you configure Appsmith &
  deploy your app on a Kubernetes cluster
---

# Kubernetes

## Installing Appsmith using Helm Charts

This chart bootstraps an [Appsmith](https://github.com/appsmithorg/appsmith) deployment on a [Kubernetes](https://github.com/appsmithorg/appsmith/blob/release/deploy/helm/kubernetes.io) cluster using [Helm](https://helm.sh) package manager.

### Prerequisites

* Install the [Helm package manager](https://helm.sh/docs/intro/install/).
* Ensure `kubectl` is installed and configured to connect to your cluster.
  * Install [kubectl](https://kubernetes.io/vi/docs/tasks/tools/install-kubectl/).
  * Minikube: [Setup Kubectl](https://minikube.sigs.k8s.io/docs/handbook/kubectl/).
  * Google Cloud Kubernetes: [Configuring cluster access for kubectl](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
  * AWS EKS: [Create a kubeconfig for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
  * Microk8s: [Working with kubectl](https://microk8s.io/docs/working-with-kubectl)
* Please ensure you have a default storage class running on your cluster. Please follow one of the below guidelines to enable your default storage class -
  * Minikube: [Enable addon default-storageclass](https://kubernetes.io/docs/tutorials/hello-minikube/#enable-addons)
  * Google Cloud Kubernetes: [Setting up default storage class on GKE](https://cloud.google.com/anthos/clusters/docs/on-prem/1.3/how-to/default-storage-class)
  * AWS EKS: [Create default storage class](https://docs.aws.amazon.com/eks/latest/userguide/storage-classes.html)
  * Microk8s: [Enable storage](https://microk8s.io/docs/command-reference#heading--microk8s-enable)
* Kubernetes NGINX Ingress Controller should be enabled on your cluster by default. Please make sure that you install the correct version for your cluster
  * Minikube: [Set up Ingress on Minikube with the NGINX Ingress Controller](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)
  * Google Cloud Kubernetes: [Ingress with NGINX controller on Google Kubernetes Engine](https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke)
  * AWS EKS: [Install NGINX Controller for AWS EKS](https://kubernetes.github.io/ingress-nginx/deploy/#network-load-balancer-nlb)
  * Microk8s: [Add on: Ingress](https://microk8s.io/docs/addon-ingress)

### Installing the Chart

1. Add Appsmith into your repository using Helm.

```
helm repo add appsmith https://helm.appsmith.com

helm repo update
```

2\. Install the chart with the <mark style="color:orange;">`appsmith`</mark> release.

```
helm install appsmith/appsmith --generate-name
```

The command deploys the Appsmith application on the Kubernetes cluster in the default configuration. The [Parameters](https://github.com/appsmithorg/appsmith/tree/release/deploy/helm#paramters) section lists the configurable parameters during installation.

### Uninstalling the Chart

To uninstall the <mark style="color:orange;">`appsmith`</mark> release:

```
helm list
NAME                       NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
appsmith-1631069261        default         1               2021-09-09 11:24:40.152766 +0700 +07    deployed        appsmith-1.3.0  1.16.0

helm uninstall appsmith-1631069261
```

The command uninstalls the release and removes all Kubernetes resources associated with the chart.

### Parameters

#### Global parameters

| Name                       | Description                                               | Value |
| -------------------------- | --------------------------------------------------------- | ----- |
| `global.namespaceOverride` | Override the namespace for resource deployed by the chart | `""`  |
| `global.storageClass`      | Global StorageClass for Persistent Volume(s)              | `""`  |

#### Common parameters

| Name                | Description                                       | Value        |
| ------------------- | ------------------------------------------------- | ------------ |
| `fullnameOverride`  | String to fully override `appsmith.name` template | `""`         |
| `containerName`     | Specify container's name running in the pods      | `"appsmith"` |
| `commonLabels`      | Labels to add to all deployed objects             | `{}`         |
| `commonAnnotations` | Annotations to add to all deployed objects        | `{}`         |

#### Appsmith Image parameters

| Name               | Description                | Value                      |
| ------------------ | -------------------------- | -------------------------- |
| `image.registry`   | Appsmith image registry    | `index.docker.io`          |
| `image.repository` | Appsmith image repository  | `appsmith/appsmith-editor` |
| `image.tag`        | Appsmith image tag         | `latest`                   |
| `image.pullPolicy` | Appsmith image pull policy | `IfNotPresent`             |

#### Appsmith deployment parameters

| Name                 | Description                                        | Value           |
| -------------------- | -------------------------------------------------- | --------------- |
| `strategyType`       | Appsmith deployment strategy type                  | `RollingUpdate` |
| `schedulerName`      | Alternate scheduler                                | `""`            |
| `podAnnotations`     | Annotations for Appsmith pods                      | `{}`            |
| `podSecurityContext` | Appsmith pods security context                     | `{}`            |
| `securityContext`    | Set security context                               | `{}`            |
| `resources.limits`   | The resources limits for the Appsmith container    | `{}`            |
| `resources.requests` | The requested resources for the Appsmith container | `{}`            |
| `nodeSelector`       | Node labels for pod assignment                     | `{}`            |
| `tolerations`        | Tolerations for pod assignment                     | `[]`            |
| `affinity`           | Affinity fod pod assignment                        | `{}`            |

#### Appsmith namespace parameters

| Name               | Description                    | Value  |
| ------------------ | ------------------------------ | ------ |
| `namespace.create` | Enable creation of `Namespace` | `true` |

#### Appsmith service account parameters

| Name                         | Description                                                                                                 | Value  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- | ------ |
| `serviceAccount.create`      | Enable creation of `ServiceAccount` for Appsmith pods                                                       | `true` |
| `serviceAccount.name`        | Name of the created `ServiceAccount` . If not set, a name is generated using the appsmith.fullname template | `""`   |
| `serviceAccount.annotations` | Additional service account annotations                                                                      | `{}`   |

#### Traffic Exposure Parameters

| Name                               | Description                                                                 | Value       |
| ---------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `service.type`                     | Appsmith service type                                                       | `ClusterIP` |
| `service.port`                     | Appsmith service port                                                       | `80`        |
| `service.portName`                 | Appsmith service port name                                                  | `appsmith`  |
| `service.nodePort`                 | Appsmith service node port to expose to expose                              | `8000`      |
| `service.clusterIP`                | Appsmith service Cluster                                                    | `""`        |
| `service.loadBalancerIP`           | Appsmith service Load Balancer IP                                           | `""`        |
| `service.loadBalancerSourceRanges` | Appsmith service Load Balancer sources                                      | `[]`        |
| `service.annotations`              | Additional custom annotations for Appsmith service                          | `{}`        |
| `ingress.enabled`                  | Enable ingress record generation for Appsmith                               | `false`     |
| `ingress.hosts`                    | An array of hosts to be covered with the ingress record                     | `[]`        |
| `ingress.tls`                      | Enable TLS configuration for the hosts defined at `ingress.hosts` parameter | `false`     |
| `ingress.secrets`                  | Custom TLS certificates as secrets                                          | `[]`        |
| `ingress.certManager`              | Enable ingress to use TLS certificates provided by Cert Manager             | `false`     |
| `ingress.certManagerTls`           | Specify TLS secret resources created by Cert Manager                        | `[]`        |
| `ingress.className`                | Configure Ingress class that being used in ingress resource                 | `""`        |

#### Persistence parameters

| Name                                | Description                                                          | Value              |
| ----------------------------------- | -------------------------------------------------------------------- | ------------------ |
| `persistence.enabled`               | Enable persistence using Persistent Volume Claims                    | `true`             |
| `persistence.storageClass`          | Persistent Volume storage class                                      | `""`               |
| `persistence.annotations`           | Additional custom annotations for the PVC                            | `{}`               |
| `persistence.localStorage`          | Enable persistent volume using local storage                         | `false`            |
| `persistence.storagePath`           | Local storage path                                                   | `/tmp/hostpath_pv` |
| `persistence.localCluster`          | Local running cluster to provide storage space                       | `[minikube]`       |
| `persistence.accessModes`           | Persistent Volume access modes                                       | `[ReadWriteOnce]`  |
| `persistence.size`                  | Persistent Volume size                                               | `10Gi`             |
| `storageClass.enabled`              | Enable Storage Class configuration                                   | `false`            |
| `storageClass.defaultClass`         | Create default Storage Class                                         | `false`            |
| `storageClass.bindingMode`          | Binding mode for Persistent Volume Claims using Storage Class        | `Immediate`        |
| `storageClass.allowVolumeExpansion` | Allow expansion of Persistent Volume Claims using Storage Class      | `true`             |
| `storageClass.reclaimPolicy`        | Configure the retention of the dynamically created Persistent Volume | `Delete`           |
| `storageClass.provisioner`          | Storage Class provisioner                                            | `""`               |
| `storageClass.annotations`          | Additional storage class annotations                                 | `{}`               |
| `storageClass.mountOptions`         | Mount options used by Persistent Volumes                             | `{}`               |
| `storageClass.parameters`           | Storage Class parameters                                             | `{}`               |

#### Auto-update chart's image

| Name                   | Description                                   | Value         |
| ---------------------- | --------------------------------------------- | ------------- |
| `autoupdate.enabled`   | Enable auto update Helm chart's image         | `true`        |
| `autoupdate.scheduler` | Schedule time to run cron job to update image | `"0 * * * *"` |

Specify each parameter using `--set key=value[,key=value]` argument to helm install. For example:

```
helm install \
--set persistence.storageClass=appsmith-pv \
  stable-appsmith/appsmith --generate-name
```

The above command deploys the Appsmith application and configures the application to use the storage class name`appsmith-pv`.

Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart. For example:

```
helm install -f values.yaml stable-appsmith/appsmith --generate-name
```

_**Tip**: You can use the default_ [_values.yaml_](https://github.com/appsmithorg/appsmith/blob/release/deploy/helm/values.yaml) _as a starting point for configuring this way._

#### Appsmith configuration

To change Appsmith configurations, you can update the `values.yaml` file (the available configurations are listed below).

| Name                                                     | Value |
| -------------------------------------------------------- | ----- |
| `applicationConfig.APPSMITH_OAUTH2_GOOGLE_CLIENT_ID`     | `""`  |
| `applicationConfig.APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET` | `""`  |
| `applicationConfig.APPSMITH_OAUTH2_GITHUB_CLIENT_ID`     | `""`  |
| `applicationConfig.APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET` | `""`  |
| `applicationConfig.APPSMITH_CLIENT_LOG_LEVEL`            | `""`  |
| `applicationConfig.APPSMITH_GOOGLE_MAPS_API_KEY`         | `""`  |
| `applicationConfig.APPSMITH_MAIL_ENABLED`                | `""`  |
| `applicationConfig.APPSMITH_MAIL_HOST`                   | `""`  |
| `applicationConfig.APPSMITH_MAIL_PORT`                   | `""`  |
| `applicationConfig.APPSMITH_MAIL_USERNAME`               | `""`  |
| `applicationConfig.APPSMITH_MAIL_PASSWORD`               | `""`  |
| `applicationConfig.APPSMITH_MAIL_FROM`                   | `""`  |
| `applicationConfig.APPSMITH_REPLY_TO`                    | `""`  |
| `applicationConfig.APPSMITH_MAIL_SMTP_AUTH`              | `""`  |
| `applicationConfig.APPSMITH_MAIL_SMTP_TLS_ENABLED`       | `""`  |
| `applicationConfig.APPSMITH_DISABLE_TELEMETRY`           | `""`  |
| `applicationConfig.APPSMITH_RECAPTCHA_SITE_KEY`          | `""`  |
| `applicationConfig.APPSMITH_RECAPTCHA_SECRET_KEY`        | `""`  |
| `applicationConfig.APPSMITH_RECAPTCHA_ENABLED`           | `""`  |
| `applicationConfig.APPSMITH_MONGODB_URI`                 | `""`  |
| `applicationConfig.APPSMITH_REDIS_URL`                   | `""`  |
| `applicationConfig.APPSMITH_ENCRYPTION_PASSWORD`         | `""`  |
| `applicationConfig.APPSMITH_ENCRYPTION_SALT`             | `""`  |
| `applicationConfig.APPSMITH_CUSTOM_DOMAIN`               | `""`  |

For example, to change the encryption salt configuration, you can run the following command:

```
helm install \
--set applicationConfig.APPSMITH_ENCRYPTION_SALT=123 \
  stable-appsmith/appsmith --generate-name
```

## Expose Appsmith

* If you wish to publish your Appsmith to the world through the Internet, you will need to setup the Ingress controller firstly. Please refer to the section **Kubernetes NGINX Ingress Controller** in the [Prerequisites](kubernetes.md#prerequisites).
*   In case of you have not install the Helm chart yet, you can run the below command to install it with exposing Appsmith:

    ```
    helm install appsmith/appsmith --generate-name \
      --set ingress.enabled=true \
      --set ingress.annotations."kubernetes\.io/ingress\.class"=nginx \
      --set service.type=ClusterIP
    ```
*   If you have installed Appsmith Helm chart, please run the `helm upgrade` command to upgrade the existing installation

    ```
    helm upgrade --set ingress.enabled=true appsmith appsmith/appsmith

    # Or this command if you are using values.yaml file
    helm upgrade --values values.yaml appsmith appsmith/appsmith
    ```

## Installing Appsmith without Helm Charts

We provide an installation script to help you configure Appsmith & deploy your app on a Kubernetes cluster.

### Prerequisites

* Kubernetes version v1.18.0+
* Ensure `kubectl` is installed. [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
* Configure kubectl to connect to your k8s clusters
  * [Configuring Minikube](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)
  * [Configuring Google Cloud](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
  * [Configuring AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
  * [Configuring Microk8s](https://microk8s.io/docs/working-with-kubectl)
* Setup NGINX Ingress Controller on your cluster. **It is important for your cluster to be accessible and get a public IP**
  * [Minikube Setup](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)
  * [Google Cloud Setup](https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke)
  * [AWS EKS Setup](https://kubernetes.github.io/ingress-nginx/deploy/#aws)
  * [Azure AKS Setup](https://kubernetes.github.io/ingress-nginx/deploy/#azure)
  * [Microk8s Setup](https://microk8s.io/docs/addon-ingress)

{% hint style="success" %}
Script tested on Minikube with Kubernetes v1.18.0
{% endhint %}

## Deployment Steps

* Fetch the **install.k8s.sh** script on the system you want to deploy appsmith.

```bash
# Downloads install.sh
curl -O https://raw.githubusercontent.com/appsmithorg/appsmith/master/deploy/k8s/install.k8s.sh
```

* Make the script executable

```bash
chmod +x install.k8s.sh
```

Run the script.

```bash
./install.k8s.sh
```

Check if all the pods are running correctly.

```bash
kubectl get pods

#Output should look like this
NAME                                        READY   STATUS      RESTARTS    AGE
appsmith-editor-cbf5956c4-2zxlz             1/1     Running     0           4m26s
appsmith-internal-server-d5d555dbc-qddmb.   1/1     Running     2           4m22s
imago-1602817200-g28b2                      1/1     Running     0           4m39s
mongo-statefulset-0                         1/1     Running     0           4m13s
redis-statefulset-0                         1/1     Running     0           4m00s
```

{% hint style="success" %}
You can access the running application on the **Ingress Endpoint** if you choose not to provide a custom domain for your application.

```
kubectl get ingress
NAME               CLASS    HOSTS   ADDRESS          PORTS   AGE
appsmith-ingress   <none>   *       XXX.XXX.XX.XXX   80      2m
```

You may need to wait 2-3 minutes before accessing the application to allow the server to come up
{% endhint %}

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../troubleshooting-guide/deployment-errors.md). If you are still facing any issues, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly!

## Further Reading

* [Configuring Self Hosted Instances](instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](instance-management.md)
* [Tutorials](../tutorials/)
