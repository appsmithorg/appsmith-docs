
<details id="highAvailability" open>
  <summary> <b>To configure High Availability (HA), be sure to configure the following</b> </summary>

:::note Important

  Both PostgreSQL and MongoDB must be enabled or configured to point to an external instance when `autoscaling` is enabled.
:::

  1. Install `metrics-server`, which provides vital metrics to the Horizontal Pod Autoscaler (HPA) to scale the pods.

    ```bash
    kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
    ```

  2. Enable `autoscaling` in the `values.yaml`. The below shows the `autoscaling` configuration for the Appsmith Deployment:

   ```yaml
        autoscaling:
          # highlight-next-line
          enabled: true
          minReplicas: 2
          maxReplicas: 2
   ```

  3. PostgreSQL has to be enabled Or configure an external PostgreSQL in the `applicationConfig` section in `values.yaml`.

      1. Configure the parameters to enable PostgreSQL as shown below:

      ```yaml
            # enable PostgreSQL
            postgresql:
            # highlight-next-line
                enabled: true
                auth:
                  username: root
      ```

      2. Configure the parameters to point to an external PostgreSQL as shown below:
    
      ```yaml
        # configure an external PostgreSQL
        applicationConfig::
          APPSMITH_KEYCLOAK_DB_DRIVER: "postgresql"
          APPSMITH_KEYCLOAK_DB_USERNAME: "<POSTGRES_USER>"
          APPSMITH_KEYCLOAK_DB_PASSWORD: "<POSTGRES_PASSWORD>"
          APPSMITH_KEYCLOAK_DB_URL: "<POSTGRES_DB_URL>"
      ```

  4.  Enable MongoDB in the `values.yaml` or configure an external MongoDB in the `applicationConfig` in `values.yaml`.

      1. Configure the parameters to enable MongoDB as shown below:

        ```yaml
          # enable MongoDB
          mongodb:
            # highlight-next-line
            enabled: true
            service:
              nameOverride: appsmith-mongodb
        ```
      
      2. Configure the parameters to point to an external MongoDB as shown below:

        ```yaml
        # configure an external MongoDB
          applicationConfig::
            APPSMITH_MONGODB_URI: "<MONGODB_URI>"
        ```

6. Create a shared file system. This is required for some Appsmith features that make use of the filesystem, like `git`-connected applications. Read more about this in the [Create a shared file system](#create-a-shared-file-system) section.

#### Create a shared file system

A shared file system on Kubernetes is a distributed file system that can be accessed and modified by multiple users from different pods within the Kubernetes cluster. it's used to store and share files across multiple pods, allowing users to access and collaborate on shared data.

<Tabs groupId="configurations">
  <TabItem label="AWS EKS" value="AWSEKS">

The [Amazon EFS Container Storage Interface (CSI)](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html) driver is a plugin for the Kubernetes container orchestration system that enables you to mount [Amazon Elastic File System (EFS)](https://aws.amazon.com/efs/) on Kubernetes pods. Using the EFS CSI driver, you can create a shared file system on Kubernetes by mounting an EFS file system on the pods in your cluster. Follow the steps available at the official [EFS CSI driver documentation](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html) to mount EFS on the Kubernetes pods.

</TabItem>
</Tabs>

##### Configure persistence

Persistence refers to the ability to store data in a way that it's retained even after the associated pod or deployment is deleted. This is important for maintaining the continuity of your applications and ensuring that important data isn't lost. 

To configure persistence, you can use persistent volumes, persistent volume claims, or storage classes, depending on your platform. 

<Tabs groupId="configurations">
  <TabItem label="AWS EKS" value="AWSEKS">

You have the option to either configure EFS using a new [Persistent Volume Claim (PVC)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) or using an existing PVC.

###### Using new PVC
This is useful when you don't have any existing PVC available or if you want to dedicate a specific PVC solely for EFS. Once the PVC is created, ensure that the following configuration is updated in `values.yaml` file under `persistence` attribute as shown below:

```yaml
  existingClaim:
    enabled: false
    name: 
    claimName: 
  efs:
    # highlight-next-line
    enabled: true
    driver: efs.csi.aws.com
    # highlight-next-line
    volumeHandle: <FILE_SYSTEM_ID>
```

###### Using existing PVC

This is useful if you already have a PVC that you want to reuse for EFS or if you have multiple deployments or pods that need access to the same EFS volume. Ensure that the following configuration is updated in `values.yaml` file under `persistence` attribute as shown below:

```yaml
existingClaim:
    # highlight-next-line
    enabled: true
    name: efsappsmith
    claimName: efsappsmith
  efs:
    enabled: true
    driver: efs.csi.aws.com
    volumeHandle: <FILE_SYSTEM_ID>
```

</TabItem>

<TabItem label="Minikube" value="Minikube">
  To configure persistence in Minikube, ensure that you have set the properties in `values.yaml` file under `persistence` attribute as shown below.

```yaml
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

</TabItem>
</Tabs>

</details>