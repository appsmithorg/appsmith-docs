# Configure Appsmith on Kubernetes Cluster
The page provides steps to configure your Appsmith installation on a Kubernetes cluster to suit your needs.

## Prerequisites
Before you start, make sure you have the following:
 - Appsmith installation on your Kubernetes Cluster. See, [Install Appsmith on Kubernetes Cluster](https://docs.appsmith.com/getting-started/setup/installation-guides/kubernetes).
 - Access to your Kubernetes cluster using `kubectl` 

## Parameters
You can modify your Appsmith installation on Kubernetes using two types of parameters:

* [Helm parameters](#helm-parameters)
* [Appsmith parameters](#appsmith-parameters)

### Helm parameters
Helm parameters allow you to configure your Kubernetes installation. Refer to the table below for a list of available parameters:

| Name                      | Type | Description                                               | Value |
| -------------------------- | --------------------------------------------------------- | ----- |----|
| `global.namespaceOverride` | Global | Overrides the namespace for resource deployed by the chart | `""`  |
| `global.storageClass`      | Global | Sets `StorageClass` for Persistent Volume              | `""`  |
| `fullnameOverride`  | Common| String to fully override `appsmith.name` template | `""`         |
| `containerName`     | Common| Specifies container's name running in the pods      | `"appsmith"` |
| `commonLabels`      | Common| Labels to add to all deployed objects             | `{}`         |
| `commonAnnotations` | Common| Annotations to add to all deployed objects        | `{}`         |
| `image.registry`   |  image | Set it to Appsmith image registry    | `index.docker.io`          | |
| `image.repository` |  image | Set it to Appsmith image repository  | `appsmith/appsmith-editor` | |
| `image.tag`        |  image | Set it to Appsmith image tag         | `latest`                   | |
| `image.pullPolicy` |  image | Set it to Appsmith image pull policy | `IfNotPresent`             | |
| `strategyType`       | Deployment | Appsmith deployment strategy type                  | `RollingUpdate` |
| `schedulerName`      | Deployment | Alternate scheduler                                | `""`            |
| `podAnnotations`     | Deployment | Annotations for Appsmith pods                      | `{}`            |
| `podSecurityContext` | Deployment | Appsmith pods security context                     | `{}`            |
| `securityContext`    | Deployment | Set security context                               | `{}`            |
| `resources.limits`   | Deployment | The resources limits for the Appsmith container    | `{}`            |
| `resources.requests` | Deployment | The requested resources for the Appsmith container | `{}`            |
| `nodeSelector`       | Deployment | Node labels for pod assignment                     | `{}`            |
| `tolerations`        | Deployment | Tolerations for pod assignment                     | `[]`            |
| `affinity`           | Deployment | Affinity fod pod assignment                        | `{}`            |
| `namespace.create` | Namespace | Enable creation of `Namespace` | `true` |
| `serviceAccount.create`      | Service Account | Enable creation of `ServiceAccount` for Appsmith pods                                                       | `true` |
| `serviceAccount.name`        | Service Account | Name of the created `ServiceAccount` . If not set, a name is generated using the `appsmith.fullname` template | `""`   |
| `serviceAccount.annotations` | Service Account | Additional service account annotations                                                                      | `{}`   |
| `service.type`                     | Traffic Exposure| Appsmith service type                                                       | `ClusterIP` |
| `service.port`                     | Traffic Exposure| Appsmith service port                                                       | `80`        |
| `service.portName`                 | Traffic Exposure| Appsmith service port name                                                  | `appsmith`  |
| `service.nodePort`                 | Traffic Exposure| Appsmith service node port to expose                             | `8000`      |
| `service.clusterIP`                | Traffic Exposure| Appsmith service Cluster                                                    | `""`        |
| `service.loadBalancerIP`           | Traffic Exposure| Appsmith service Load Balancer IP                                           | `""`        |
| `service.loadBalancerSourceRanges` | Traffic Exposure| Appsmith service Load Balancer sources                                      | `[]`        |
| `service.annotations`              | Traffic Exposure| Additional custom annotations for Appsmith service                          | `{}`        |
| `ingress.enabled`                  | Traffic Exposure| Enable ingress record generation for Appsmith                               | `false`     |
| `ingress.hosts`                    | Traffic Exposure| An array of hosts to be covered with the ingress record                     | `[]`        |
| `ingress.tls`                      | Traffic Exposure| Enable TLS configuration for the hosts defined at `ingress.hosts` parameter | `false`     |
| `ingress.secrets`                  | Traffic Exposure| Custom TLS certificates as secrets                                          | `[]`        |
| `ingress.certManager`              | Traffic Exposure| Enable ingress to use TLS certificates provided by Cert Manager             | `false`     |
| `ingress.certManagerTls`           | Traffic Exposure| Specify TLS secret resources created by Cert Manager                        | `[]`        |
| `ingress.className`                | Traffic Exposure| Configure Ingress class that being used in ingress resource                 | `""`        |
| `persistence.enabled`               | Persistence | Enable persistence using Persistent Volume Claims                    | `true`             |
| `persistence.storageClass`          | Persistence | Persistent Volume storage class                                      | `""`               |
| `persistence.annotations`           | Persistence |  Additional custom annotations for the PVC                            | `{}`               |
| `persistence.localStorage`          | Persistence |  Enable persistent volume using local storage                         | `false`            |
| `persistence.storagePath`           | Persistence |  Local storage Path                                                   | `/tmp/hostpath_pv` |
| `persistence.localCluster`          | Persistence |  Local running cluster to provide storage space                       | `[minikube]`       |
| `persistence.accessModes`           | Persistence |  Persistent Volume access modes                                       | `[ReadWriteOnce]`  |
| `persistence.size`                  | Persistence | Persistent Volume size                                               | `10Gi`             |
| `storageClass.enabled`              | Persistence |  Enable Storage Class configuration                                   | `false`            |
| `storageClass.defaultClass`         |Persistence |  Create default Storage Class                                         | `false`            |
| `storageClass.bindingMode`          | Persistence | Binding mode for Persistent Volume Claims using Storage Class        | `Immediate`        |
| `storageClass.allowVolumeExpansion` | Persistence | Allow expansion of Persistent Volume Claims using Storage Class      | `true`             |
| `storageClass.reclaimPolicy`        | Persistence | Configure the retention of the dynamically created Persistent Volume | `Delete`           |
| `storageClass.provisioner`          | Persistence | Storage Class provisioner                                            | `""`               |
| `storageClass.annotations`          | Persistence | Additional storage class annotations                                 | `{}`               |
| `storageClass.mountOptions`         | Persistence | Mount options used by Persistent Volumes                             | `{}`               |
| `storageClass.parameters`           | Persistence | Storage Class parameters                                             | `{}`               |
| `autoupdate.enabled`   | Auto update Image | Enable auto update Helm chart's image         | `true`        |
| `autoupdate.scheduler` | Auto update Image | Schedule time to run cron job to update image | `"0 * * * *"` |

### Appsmith parameters
Appsmith parameters allow you to configure your Appsmith installation. Refer to the table below for a list of available parameters:

| Name                                                     | Value |
| -------------------------------------------------------- | ----- |
| [`applicationConfig.APPSMITH_OAUTH2_GOOGLE_CLIENT_ID`](/getting-started/setup/instance-configuration/authentication/google-login)    | `""`  |
| [`applicationConfig.APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET`](/getting-started/setup/instance-configuration/authentication/google-login) | `""`  |
| [`applicationConfig.APPSMITH_OAUTH2_GITHUB_CLIENT_ID`](/getting-started/setup/instance-configuration/authentication/github-login)     | `""`  |
| [`applicationConfig.APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET`](/getting-started/setup/instance-configuration/authentication/github-login) | `""`  |
| `applicationConfig.APPSMITH_CLIENT_LOG_LEVEL`            | `""`  |
| [`applicationConfig.APPSMITH_GOOGLE_MAPS_API_KEY`](/getting-started/setup/instance-configuration/google-maps)         | `""`  |
| [`applicationConfig.APPSMITH_MAIL_ENABLED`](/getting-started/setup/instance-configuration/email/)                | `""`  |
| [`applicationConfig.APPSMITH_MAIL_HOST`](/getting-started/setup/instance-configuration/email/)                   | `""`  |
| [`applicationConfig.APPSMITH_MAIL_PORT`](/getting-started/setup/instance-configuration/email/)                   | `""`  |
| [`applicationConfig.APPSMITH_MAIL_USERNAME`](/getting-started/setup/instance-configuration/email/)               | `""`  |
| [`applicationConfig.APPSMITH_MAIL_PASSWORD`](/getting-started/setup/instance-configuration/email/)               | `""`  |
| [`applicationConfig.APPSMITH_MAIL_FROM`](/getting-started/setup/instance-configuration/email/)                   | `""`  |
| [`applicationConfig.APPSMITH_REPLY_TO`](/getting-started/setup/instance-configuration/email/)                    | `""`  |
| [`applicationConfig.APPSMITH_MAIL_SMTP_AUTH`](/getting-started/setup/instance-configuration/email/)              | `""`  |
| `applicationConfig.APPSMITH_MAIL_SMTP_TLS_ENABLED`       | `""`  |
| [`applicationConfig.APPSMITH_DISABLE_TELEMETRY`](https://docs.appsmith.com/product/telemetry#disable-telemetry)           | `""`  |
| `applicationConfig.APPSMITH_RECAPTCHA_SITE_KEY`          | `""`  |
| `applicationConfig.APPSMITH_RECAPTCHA_SECRET_KEY`        | `""`  |
| `applicationConfig.APPSMITH_RECAPTCHA_ENABLED`           | `""`  |
| [`applicationConfig.APPSMITH_MONGODB_URI`](/getting-started/setup/instance-configuration/custom-mongodb-redis#custom-mongodb)                | `""`  |
| [`applicationConfig.APPSMITH_REDIS_URL`](/getting-started/setup/instance-configuration/custom-mongodb-redis#custom-redis)                   | `""`  |
| `applicationConfig.APPSMITH_ENCRYPTION_PASSWORD`         | `""`  |
| `applicationConfig.APPSMITH_ENCRYPTION_SALT`             | `""`  |
| [`applicationConfig.APPSMITH_CUSTOM_DOMAIN`](/getting-started/setup/instance-configuration/custom-domain/#dockerk8s)               | `""`  |

### Configure instance

You can use the `helm install` command to configure your Appsmith installation using one of the below ways:

When using command, specify each parameter using the `--set key=value[,key=value]` argument.

* Using Helm parameters: For example, deploy Appsmith and configure it to use the storage class `appsmith-pv` with:

```bash
helm install \
--set persistence.storageClass=appsmith-pv \
  appsmith appsmith/appsmith 
```

* Using Appsmith parameters: For example, to change the encryption salt configuration with:

```bash 
helm install \
--set applicationConfig.APPSMITH_ENCRYPTION_SALT=123 \
  appsmith appsmith/appsmith 
```

* Using `values.yam`l file: Change the parameter values in the `values.yaml` file and run the below command:

```bash
helm install appsmith appsmith/appsmith -f values.yaml 
```

## Troubleshooting
If you face issues, reach out to the [support team](mailto:support@appsmith.com).

## Further reading
* [Configure Appsmith instance](/getting-started/setup/instance-configuration#configure-docker-installations)
* [Manage Appsmith instance](/getting-started/setup/instance-management/)