# Configure Appsmith
The Appsmith installation works with the default configuration, but you also have the option to customize it to fit your specific needs. To configure the installation parameters, it's recommended to use the `values.yaml` file. This file allows you to specify the settings and options you want to use for your Appsmith installation, allowing you to tailor the installation to your needs. The following is a comprehensive list of available parameters.

##### Parameters
Customize Appsmith by using either Helm parameters or Appsmith-specific parameters. The table below provides details on the various Helm and Appsmith parameters that are available for configuration.

###### Global

| Name                       | Description                                               | Value |
| -------------------------- | --------------------------------------------------------- | ----- |
| `global.namespaceOverride` | Override the namespace for resource deployed by the chart | `""`  |
| `global.storageClass`      | Global StorageClass for Persistent Volume              | `""`  |

###### Common

| Name                | Description                                       | Value        |
| ------------------- | ------------------------------------------------- | ------------ |
| `fullnameOverride`  | String to fully override `appsmith.name` template | `""`         |
| `containerName`     | Specify container's name running in the pods      | `"appsmith"` |
| `commonLabels`      | Labels to add to all deployed objects             | `{}`         |
| `commonAnnotations` | Annotations to add to all deployed objects        | `{}`         |

###### Appsmith image

| Name               | Description                | Value                      |
| ------------------ | -------------------------- | -------------------------- |
| `image.registry`   | Appsmith image registry    | `index.docker.io`          |
| `image.repository` | Appsmith image repository  | `appsmith/appsmith-editor` |
| `image.tag`        | Appsmith image tag         | `latest`                   |
| `image.pullPolicy` | Appsmith image pull policy | `IfNotPresent`             |

###### Appsmith deployment

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

###### Appsmith namespace

| Name               | Description                    | Value  |
| ------------------ | ------------------------------ | ------ |
| `namespace.create` | Enable creation of `Namespace` | `true` |

###### Appsmith service account

| Name                         | Description                                                                                                 | Value  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- | ------ |
| `serviceAccount.create`      | Enable creation of `ServiceAccount` for Appsmith pods                                                       | `true` |
| `serviceAccount.name`        | Name of the created `ServiceAccount` . If not set, a name is generated using the appsmith.fullname template | `""`   |
| `serviceAccount.annotations` | Additional service account annotations                                                                      | `{}`   |

###### Traffic exposure

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

###### Persistence

| Name                                | Description                                                          | Value              |
| ----------------------------------- | -------------------------------------------------------------------- | ------------------ |
| `persistence.enabled`               | Enable persistence using Persistent Volume Claims                    | `true`             |
| `persistence.storageClass`          | Persistent Volume storage class                                      | `""`               |
| `persistence.annotations`           | Additional custom annotations for the PVC                            | `{}`               |
| `persistence.localStorage`          | Enable persistent volume using local storage                         | `false`            |
| `persistence.storagePath`           | Local storage Path                                                   | `/tmp/hostpath_pv` |
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

###### Auto update image

| Name                   | Description                                   | Value         |
| ---------------------- | --------------------------------------------- | ------------- |
| `autoupdate.enabled`   | Enable auto update Helm chart's image         | `true`        |
| `autoupdate.scheduler` | Schedule time to run cron job to update image | `"0 * * * *"` |

##### Set parameters

When using command, specify each parameter using `--set key=value[,key=value]` argument to helm install. For example, the below command deploys Appsmith and configures it to use the storage class name `appsmith-pv`. 

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

Alternatively, use a `values.yaml` file. You can specify the parameter values needed for installing the chart. To change configurations specific to Appsmith update the `values.yaml` file. Listed below are available configurations for Appsmith.

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

Once you have made changes to the values file, run the below command.

```bash
helm install appsmith appsmith/appsmith -f values.yaml 
```