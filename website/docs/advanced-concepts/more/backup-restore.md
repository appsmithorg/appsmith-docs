---
sidebar_position: 2
description: The Migrate Applications feature gives you the flexibility to move your Appsmith applications and data from one instance to another. You may choose to migrate all or specific applications as needed.
---

# Migrate Applications

On Appsmith, you can migrate all Appsmith data from one instance to another or just migrate necessary applications.

### **Steps to Migrate entire Appsmith Data onto instances:**

#### **Backup the old VM**

1. Dump the MongoDB data from the old VM via the command: `mongodump --uri "mongodb://<rootUsername>:<rootPassword>@localhost:27017/appsmith" --out=/tmp/appsmith-mongo-dump`
2. Copy the dump file to the new VM
3. Open the file `encryption.env` and note the values in this file. The values here are important for Appsmith to be able to read sensitive information in the new installation.

## **Restore the backup on the new VM:**

:::caution
The restore would end up deleting all the existing data in the mongo database of the newly installed appsmith instance
:::

1. Install Appsmith via the install.sh script.
2. Restore the dump on the newly created MongoDB container via the command: `mongorestore --drop /tmp/appsmith-mongo-dump -d appsmith --uri=mongodb://<rootUsername>:<rootPassword>@localhost/appsmith`
3. Open the file `encryption.env` and change the variables `APPSMITH_ENCRYPTION_PASSWORD` & `APPSMITH_ENCRYPTION_SALT` to the same ones as the old VM. This is important because sensitive data in Mongo is encrypted using these credentials. Without this, you risk corrupting any passwords you've saved.
4. Restart the Appsmith system using the command: `sudo docker-compose down && sudo docker-compose up -d`

## Import/Export applications

You can import or export the desired application to any workspace, either in the same or a different Appsmith instance.

:::info
Applications are forward compatible from Appsmith version 1.6.9.

Applications built in an older version of an Appsmith instance will work when imported into a newer version of an Appsmith instance.
:::



 <VideoEmbed host="youtube" videoId="2JuJ0v56ztw" title="Import/Export Apps on Appsmith" caption="Import/Export Apps on Appsmith"/>



### Export application

You can [sync](../version-control-with-git/connecting-to-git-repository.md) your application to a [Git repository](../version-control-with-git/) or export your application as a JSON file to your system.

Follow the steps below to export your application as a JSON file:

1. Go to your workspace homepage and navigate to the app you want to export.
2. Click on the menu button at the bottom of the Application card and select “**Export**.”




 <VideoEmbed host="youtube" videoId="lBMP9MQHdCQ" title="How to export an app" caption="How to export an app"/>


### Import application

You can choose one of the below ways to import an Appsmith application.-

1. [Import from a Git Repository](backup-restore.md#import-from-a-git-repository) ;
2. From an application JSON file.

#### Import from an application JSON file

If you have exported an application as a JSON file, you can import the same application to any workspace or Appsmith instance.

Follow the steps below to import an exported (JSON file) application -

1. Go to your workspace homepage and navigate to the menu button of the workspace.
2. Click the menu button (next to +NEW) and select the “**Import**” option.
3. In the import pop-up window, click on import from file and pick the JSON file from your system’s memory.
4. Once the file is imported, you can see a datasource configuration Modal (if the imported app had a datasource connection) where you can configure the datasources used by the imported application.

:::info
As a security measure, we do not export any config values used for the connecting datasource during the import operation. So either you have to configure it in the datasource configuration modal, or you can skip this and choose to configure it later
:::



 <VideoEmbed host="youtube" videoId="bhzGIdXq2Z4" title="How to import an app" caption="How to import an app"/>

:::tip
When you import the application into the destination instance/ workspace, it's a new one, meaning source and destination applications are detached, and changes are not synced.
:::

### Import from a Git repository

If you have an application connected to Git version control in Appsmith, you can import the Appsmith application from your Git repository into any workspace. For more information, check out [Import from Repository](../version-control-with-git/import-from-repository.md).
