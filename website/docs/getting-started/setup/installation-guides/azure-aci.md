---
description: Deploy Appsmith on Azure Container Instance Service
sidebar_position: 4
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Azure Container Instance

Azure Container Instances (ACI) is a simple and efficient way to run containers in the cloud. This document guides you through launching an ACI instance and running an Appsmith container. The data persists in Azure Storage Account File Share.

:::note
Azure only supports CIFS file shares and doesn't support NFS file shares.
:::

## Prerequisites​

Before launching an ACI instance, you need to have an Azure subscription and have the Azure CLI installed on your machine.

- [Azure Subscription](https://azure.com/free) - If you don't have an Azure subscription, you can sign up for a free trial.
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure).

## Configure variables

Update the following values starting with 'my' where necessary, and enter them in your shell/terminal.

```bash
resourceGroupName="myResourceGroup"
aciName="myAppsmithACI"
storageAccountName="mystorageaccount$RANDOM"
aciLocation="southindia"
fileShareName="myFileShareName"
dnsNameLabel="myDNSLabel"
```

### Create a resource group (optional)

You can skip this step if you want to use an existing resource group.

```bash
az group create --name $resourceGroupName --location $aciLocation
```

### Create a storage account (optional)

You can skip this step if you want to use an existing storage account.

```bash
az storage account create --resource-group $resourceGroupName --name $storageAccountName --location $aciLocation --sku Standard_LRS
```

### Get the storage account key

```bash
storageAccountKey=$(az storage account keys list --resource-group $resourceGroupName --account-name $storageAccountName --query "[0].value"  --output tsv)
```

### Create a file share

```bash
az storage share create --name $fileShareName --account-name $storageAccountName --account-key $storageAccountKey
```

## Install Appsmith

- Create an Azure container instance for Appsmith with: <a id="container-instance-config"></a>

  ```bash
  az container create \
  --resource-group $resourceGroupName \
  	--name $aciName \
  	--image appsmith/appsmith-ee \
  	--ip-address public \
  	--dns-name-label $dnsNameLabel \
  	--ports 80 443 \
  	--cpu 2 \
  	--memory 4 \
  	--azure-file-volume-account-name $storageAccountName \
  	--azure-file-volume-account-key $storageAccountKey \
  	--azure-file-volume-share-name $fileShareName \
  	--azure-file-volume-mount-path "/appsmith-stacks/" \
  ```

## Install Appsmith Community

To install the Appsmith open source edition (Appsmith Community), replace `appsmith-ee` with `appsmith-ce` while creating an [Azure container instance](#container-instance-config) file on this page.

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors).

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

### See also

- [Configuring Self-Hosted Instances](/getting-started/setup/instance-configuration)
- [Managing the Appsmith instance](/getting-started/setup/instance-management)
