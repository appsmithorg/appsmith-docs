---
description: Deploy Appsmith on Azure Container Instance Service
sidebar_position: 4
toc_max_heading_level: 2
---

# Azure Container Instance

Azure Container Instances (ACI) is a simple and efficient way to run containers in the cloud. This document guides you through launching an ACI instance and running an Appsmith container. An Azure file share persists the files stored under `/appsmith-stacks`.

:::note
Azure only supports CIFS file shares and doesn't support NFS file shares.
:::

## Best practices

For production deployments, use Azure Files only for Appsmith's filesystem artifacts. Don't use it to host databases or cache services because network-mounted volumes can cause poor performance, data inconsistency, or startup failures.

Before deploying Appsmith, follow the relevant guides to configure the external services you need:

- [Configure external MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis).
- [Configure external Redis](/getting-started/setup/instance-configuration/external-redis).
- Before enabling SAML SSO, [configure PostgreSQL for SAML SSO on Azure](/getting-started/setup/installation-guides/azure/setup-to-integrate-sso). For Workflows, complete the [workflow prerequisites](/workflows/tutorials/create-workflow#before-you-begin).

## Prerequisites​

Before launching an ACI instance, you need to have an Azure subscription and have the Azure CLI installed on your machine.

- [Azure Subscription](https://azure.com/free) - If you don't have an Azure subscription, you can sign up for a free trial.
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure).
- Complete the external MongoDB and Redis setup described in [Best practices](#best-practices), and keep their connection URLs available.
- Whitelist `cs.appsmith.com` in your firewall settings to allow outbound HTTPS traffic. If using Azure Firewall, add these domains under Application Rules.

## Configure variables

Update the following values for your deployment, and enter them in your shell or terminal.

```bash
resourceGroupName="myResourceGroup"
aciName="myAppsmithACI"
storageAccountName="mystorageaccount$RANDOM"
aciLocation="southindia"
fileShareName="myFileShareName"
dnsNameLabel="myDNSLabel"
```

:::caution
Use strong values for the encryption password and salt. Store them securely and reuse the same values whenever you redeploy or restore the instance. Changing them prevents Appsmith from decrypting stored credentials.
:::

Enter the MongoDB URL, Redis URL, encryption password, and encryption salt through silent prompts so the values aren't saved in your shell history:

```bash
read -rsp "MongoDB connection URL: " mongodbUrl && printf '\n'
read -rsp "Redis connection URL: " redisUrl && printf '\n'
read -rsp "Appsmith encryption password: " encryptionPassword && printf '\n'
read -rsp "Appsmith encryption salt: " encryptionSalt && printf '\n'
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

- Choose a release tag from [Appsmith on GitHub](https://github.com/appsmithorg/appsmith/releases) and set it in place of `<version>` in the `--image` value below. Pinning the tag keeps upgrades under your control.

- Create an Azure container instance for Appsmith with: 

  ```bash
  az container create \
    --resource-group $resourceGroupName \
    --name $aciName \
    --image appsmith/appsmith-ee:<version> \
    --ip-address public \
    --dns-name-label $dnsNameLabel \
    --ports 80 443 \
    --cpu 2 \
    --memory 4 \
    --secure-environment-variables \
      "APPSMITH_DB_URL=$mongodbUrl" \
      "APPSMITH_REDIS_URL=$redisUrl" \
      "APPSMITH_ENCRYPTION_PASSWORD=$encryptionPassword" \
      "APPSMITH_ENCRYPTION_SALT=$encryptionSalt" \
    --azure-file-volume-account-name $storageAccountName \
    --azure-file-volume-account-key $storageAccountKey \
    --azure-file-volume-share-name $fileShareName \
    --azure-file-volume-mount-path "/appsmith-stacks/"
  ```

## Install Appsmith Community

To install the Appsmith open source edition (Appsmith Community), replace `appsmith-ee` with `appsmith-ce` in the `--image` value while creating an Azure container instance on this page, and keep the same `:<version>` suffix.


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

## Troubleshooting

If you are facing issues during deployment, refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.
