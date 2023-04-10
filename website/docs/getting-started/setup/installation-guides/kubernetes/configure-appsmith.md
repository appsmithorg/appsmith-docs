# Configure Appsmith on Kubernetes Cluster
The page guides you through customizing your Appsmith installation on a Kubernetes cluster to meet your specific needs.

## Prerequisites


## Configure parameters
Customize Appsmith by using either Helm parameters or parameters specific to Appsmith. The table below provides details on the various Helm and Appsmith parameters that are available for configuration.

| Name                      | Type | Description                                               | Value |
| -------------------------- | --------------------------------------------------------- | ----- |----|
| `global.namespaceOverride` | Global | Overrides the namespace for resource deployed by the chart | `""`  |
| `global.storageClass`      | Global | Sets `StorageClass` for Persistent Volume              | `""`  |
| `fullnameOverride`  | Common| String to fully override `appsmith.name` template | `""`         |
| `containerName`     | Common| Specifies container's name running in the pods      | `"appsmith"` |
| `commonLabels`      | Common| Labels to add to all deployed objects             | `{}`         |
| `commonAnnotations` | Common| Annotations to add to all deployed objects        | `{}`         |
| `image.registry`   | Appsmith image | Sets image registry    | `index.docker.io`          | |
| `image.repository` | Appsmith image | Sets image repository  | `appsmith/appsmith-editor` | |
| `image.tag`        | Appsmith image | Sets image tag         | `latest`                   | |
| `image.pullPolicy` | Appsmith image | Sets image pull policy | `IfNotPresent`             | |
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


When using a command, specify each parameter using the `--set key=value[,key=value]` argument to helm install. For example, the below command deploys Appsmith and configures it to use the storage class `appsmith-pv`. 

```bash
helm install \
--set persistence.storageClass=appsmith-pv \
  appsmith appsmith/appsmith 
```

Similarly, run the below command if you wish to change the encryption salt configuration.

```bash 
helm install \
--set applicationConfig.APPSMITH_ENCRYPTION_SALT=123 \
  appsmith appsmith/appsmith 
```

Alternatively, use the `values.yaml` file. You can specify the parameter values needed for installing the chart. To change configurations specific to Appsmith update the `values.yaml` file. Listed below are available configurations for Appsmith. For more information, see the [Configuring Appsmith instance](/getting-started/setup/instance-configuration) section.

Once you have made changes to the `values.yaml` file, run the below command.

```bash
helm install appsmith appsmith/appsmith -f values.yaml 
```
