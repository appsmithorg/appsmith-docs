---

description: Deploy Appsmith on Azure Container Instance Service
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Azure Container Instance
Azure Container Instances (ACI) is a simple and efficient way to run containers in the cloud. This document guides you through launching an ACI instance and running an Appsmith container. The data persists in Azure Storage Account File Share.

:::note 
Azure only supports CIFS file shares and doesn't support NFS file shares.
:::

### Prerequisites​

Before launching an ACI instance, you need to have an Azure subscription and have the Azure CLI installed on your machine. 

* [Azure Subscription](https://azure.com/free) - If you don't have an Azure subscription, you can sign up for a free trial
* [Azure CLI](https://learn.microsoft.com/en-us/cli/azure) 

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

### Create Appsmith ACI

<Tabs groupId="editions" queryString="current-edition">
   <TabItem label="Community Edition" value="community">

```bash
 az container create \
  --resource-group $resourceGroupName \
	--name $aciName \
	--image appsmith/appsmith-ce \
	--ip-address public \
	--dns-name-label $dnsNameLabel \
	--ports 80 443\
	--cpu 2 \
	--memory 4 \
	--azure-file-volume-account-name $storageAccountName \
	--azure-file-volume-account-key $storageAccountKey \
	--azure-file-volume-share-name $fileShareName \
	--azure-file-volume-mount-path "/appsmith-stacks/"
 ```

   </TabItem>
   <TabItem label="Business Edition" value="business">


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

   </TabItem>
</Tabs>

You now have your Appsmith application running in the cloud with Azure Container Instances. If you encounter any errors along the way, follow the [troubleshooting guide](/help-and-support/troubleshooting-guide/deployment-errors) for assistance. 

### Container logs
To troubleshoot a container or the application it runs or view its output, start by accessing the logs of the container instance using the [az container logs](https://learn.microsoft.com/en-us/cli/azure/container#az_container_logs) command.

```bash
az container logs --resource-group myResourceGroup --name mycontainer
```

### Update Appsmith

:::caution
Create a backup of the Appsmith instance before performing an update. See [How to create a backup](/getting-started/setup/instance-management/appsmithctl#backup-instance).
:::

1. Navigate to the ACI on the Azure Portal
2. Click the ACI running Appsmith
3. Click the Restart button
4. Wait until the ACI restarts with the latest Appsmith release.

If you have updated your Appsmith instance and face any issues, you can roll back the changes and [restore the Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-instance) from a backup archive.

### Troubleshooting

If there are any errors during this process, follow the guide on [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If there are still issues, please contact [support@appsmith.com](mailto:support@appsmith.com) or join the Appsmith [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly.

### Further reading

* [Configuring Self-Hosted Instances](/getting-started/setup/instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management/)
* [Tutorials](/learning-and-resources/tutorials/)
