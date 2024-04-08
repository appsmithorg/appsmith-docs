---
sidebar_position: 2
description: The Migrate Applications feature gives you the flexibility to move your Appsmith applications and data from one instance to another. You may choose to migrate all or specific applications as needed.
---

# Migrate Applications

On Appsmith, you can migrate all Appsmith data from one instance to another or just migrate necessary applications. To migrate all Appsmith data, use the [backup/restore](/getting-started/setup/instance-management/appsmithctl) feature. To move specific applications only, read along.

## Import/Export applications

You can import or export the desired application to any workspace, either in the same or a different Appsmith instance.

:::info
Applications are forward compatible from Appsmith version 1.6.9.

Applications built in an older version of an Appsmith instance will work when imported into a newer version of an Appsmith instance.
:::



 <VideoEmbed host="youtube" videoId="2JuJ0v56ztw" title="Import/Export Apps on Appsmith" caption="Import/Export Apps on Appsmith"/>



### Export application

You can sync your application to a [Git repository](/advanced-concepts/version-control-with-git) or export your application as a JSON file to your system.

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

If you have an application connected to Git version control in Appsmith, you can import the Appsmith application from your Git repository into any workspace. For more information, check out [Import from Repository](/advanced-concepts/version-control-with-git/import-from-repository).
