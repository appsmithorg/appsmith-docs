---
description: Deploy Appsmith on Azure Kubernetes Service (AKS)
sidebar_position: 5
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Azure Kubernetes Service

Azure Kubernetes Service (AKS) is a managed Kubernetes service that simplifies deploying, managing, and scaling containerized applications. This document guides you through deploying Appsmith on AKS using Helm charts. The data persists in Azure Storage Account File Share.

:::note
Azure only supports CIFS file shares and doesn't support NFS file shares.
:::

## Prerequisites​

Before deploying Appsmith on AKS, you need to have an Azure subscription and the necessary tools installed on your machine.

- [Azure Subscription](https://azure.com/free) - If you don't have an Azure subscription, you can sign up for a free trial.
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure).
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) - Kubernetes command-line tool.
- [Helm](https://helm.sh/docs/intro/install/) - Kubernetes package manager.
- Whitelist `cs.appsmith.com` in your firewall settings to allow outbound HTTPS traffic. If using Azure Firewall, add these domains under Application Rules.

## Configure variables

Update the following values starting with 'my' where necessary, and enter them in your shell/terminal.

```bash
resourceGroupName="myResourceGroup"
aksName="myAppsmithAKS"
storageAccountName="mystorageaccount$RANDOM"
aksLocation="southindia"
fileShareName="myFileShareName"
```

### Create a resource group (optional)

You can skip this step if you want to use an existing resource group.

```bash
az group create --name $resourceGroupName --location $aksLocation
```

### Create a storage account (optional)

You can skip this step if you want to use an existing storage account.

```bash
az storage account create --resource-group $resourceGroupName --name $storageAccountName --location $aksLocation --sku Standard_LRS
```

### Create a file share

```bash
az storage share-rm create --storage-account $storageAccountName --name $fileShareName --quota 100
```

### Create AKS cluster

```bash
az aks create \
  --resource-group $resourceGroupName \
  --name $aksName \
  --node-count 1 \
  --node-vm-size Standard_B4ms \
  --generate-ssh-keys \
  --location $aksLocation
```

### Get credentials for your cluster

```bash
az aks get-credentials --resource-group $resourceGroupName --name $aksName
```

## Install Appsmith

### Create Persistent Volume Claim (PVC)

Create a file named `pvc-azurefile-csi.yaml`:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-azurefile
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
  storageClassName: azurefile-csi
```

Apply the PVC to your cluster:

```bash
kubectl apply -f pvc-azurefile-csi.yaml
```

### Get PVC and PV Information

Retrieve the Persistent Volume information:

```bash
kubectl get pvc pvc-azurefile
kubectl describe pvc pvc-azurefile | grep VolumeName
```

Note the VolumeName from the output - you'll need this for the next step.

### Get Appsmith Helm Values

Download the default Helm values for Appsmith:

```bash
helm show values appsmith-ee/appsmith > values.yaml
```

Update the `values.yaml` file with the obtained PVC and PV values:

```yaml
existingClaim:
  enabled: true
  name: <VolumeName-from-above-command>
  claimName: pvc-azurefile
```

Replace `<VolumeName-from-above-command>` with the actual VolumeName you obtained in the previous step.

### Install Appsmith with Helm

Install Appsmith using Helm with the configured values:

```bash
helm upgrade -i appsmith appsmith-ee/appsmith \
  -n appsmith-ee \
  --create-namespace \
  -f values.yaml
```

## Install Appsmith Community

To install the Appsmith open source edition (Appsmith Community), replace `appsmith-ee` with `appsmith-ce` in the Helm installation command:

```bash
helm upgrade -i appsmith appsmith-ce/appsmith \
  -n appsmith-ce \
  --create-namespace \
  -f values.yaml
```

## Post-installation configuration

Once you have completed the installation process, consider performing the tasks below to configure and manage your Appsmith instance, enhancing its security and performance, specifically if it's intended for production use.
<br/>
<div className="containerGridSampleApp">
  <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/getting-started/setup/instance-configuration/authentication">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Configure Single Sign-on (SSO)</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Configure SSO to allow users to sign in using your identity provider. Learn more about configuring SSO.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/getting-started/setup/instance-configuration/email">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Configure Email Service</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Set up an email service to enable Appsmith to send notifications and alerts. Learn more about configuring email services.
    </div>
  </a>
</div>

<div className="containerGridSampleApp">
  <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/getting-started/setup/instance-configuration/custom-domain">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Set Up Custom Domain and SSL</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Set up a custom domain for your Appsmith instance and secure it with SSL. Learn more about setting up custom domains and SSL.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/getting-started/setup/instance-management/appsmithctl">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Backup and Restore</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Ensure the safety of your Appsmith instance data by regularly backing up and restoring it when needed. Learn more about Backup and Restore.
    </div>
  </a>
</div>

## Best Practices & Things Not to Do When Deploying Appsmith on Azure AKS

When deploying **Appsmith** on **Azure Kubernetes Service (AKS)**, it's crucial to avoid certain architectural decisions that can lead to performance issues, data inconsistency, or outright application failure. The following anti-patterns are particularly relevant when using Azure Files or network-mounted file systems.

### Avoid Using Azure Files (or Any Network-Mounted File System) for Appsmith Storage

While Azure Files offers a convenient way to persist data, it is **not suitable** for hosting Appsmith's core components such as MongoDB, Redis, or internal file storage.

#### Common Mistakes

1. **Running internal MongoDB, Redis, or file storage on Azure Files**
    - Appsmith is not designed to work efficiently with network-mounted volumes as primary persistent stores.
    - Issues observed:
        - Sluggish performance.
        - Data corruption.
        - Intermittent failures and inconsistencies.
        - App crashes on startup or under load.

2. **Using Azure Files to store runtime data for internal services**
    - These services (MongoDB, Redis) are latency-sensitive and require fast local or SSD-backed storage to function properly.

#### Recommended Approach

To ensure a **stateless, reliable, and production-grade deployment**, follow these best practices:

- **Run Appsmith container on AKS using Azure Files only for minimal required mounts** (e.g., config files, if needed).
- **Use external managed services** for critical components:
    - [**MongoDB**](/getting-started/setup/instance-configuration/custom-mongodb-redis): Use a cloud-managed MongoDB (e.g., MongoDB Atlas) hosted in Azure or nearby region.
    - [**Redis**](/getting-started/setup/instance-configuration/external-redis): Use **Azure Cache for Redis** or provision your own Redis cluster.
    - [**PostgreSQL**](/getting-started/setup/instance-configuration/external-postgresql-rds): Use **Azure Database for PostgreSQL** to support advanced features like **Workflows** and **SAML SSO**.

This approach ensures your Appsmith instance is:

- **Stateless**
- **Easy to scale and recover**
- **Less prone to I/O bottlenecks and crashes**

## Troubleshooting

If you are facing issues during deployment, refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

### See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.