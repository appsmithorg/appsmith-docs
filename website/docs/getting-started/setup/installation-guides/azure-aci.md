---
description: Deploy Appsmith on Azure Container Instance Service
sidebar_position: 4
---

# Azure Container Instance
Azure Container Instances (ACI) is a fast and simple way to run containers in the cloud.
In this document, we will guide you through the process of launching an ACI instance and running an Appsmith container on it. The data will be persisted to an Azure Storage Account File Share 
note: Azure only supports CIFS file shares and NFS file shares are not yet supported.

### Prequisite
Before you can launch an ACI instance, you need to have an Azure subscription and have the Azure CLI installed on your machine. If you do not have an Azure subscription, you can sign up for a free trial at **[https://azure.com/free](https://azure.com/free)**.

If you already have an Amazon Web Services account, you may skip this step.

Please follow the steps [detailed here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) in order to create an account on AWS.


### Set Basic variable details
Open a bash shell and set the following variables
`
resourceGroupName="myResourceGroup"
aciName="myAppsmithACI"
storageAccountName="mystorageaccount$RANDOM"
aciLocation="southindia"  
fileShareName="appsmith-test"
`
### Create a resource group (optional)

`az group create --name $resourceGroupName --location $aciLocation`

###Create a storage account (optional)
`az storage account create --resource-group $resourceGroupName --name $storageAccountName --location $aciLocation --sku Standard_LRS`
### Get the storage account key
`storageAccountKey=$(az storage account keys list --resource-group $resourceGroupName --account-name $storageAccountName --query "[0].value"  --output tsv)`

### Create a file share
`az storage share create --name $fileShareName --account-name $storageAccountName --account-key $storageAccountKey`

### Create an Appsmith ACI with the storage account and file share mounted
`az container create\
 --resource-group $resourceGroupName \
 --name $aciName \
 --image appsmith/appsmith-ce \
 --ports 80 443 \
 --azure-file-volume-account-name $storageAccountName \
 --azure-file-volume-account-key $storageAccountKey \
 --azure-file-volume-share-name $fileShareName \
 --azure-file-volume-mount-path "/appsmith-stacks/"`
