---
sidebar_position: 2
description: The Migrate Applications feature provides the flexibility to transfer Appsmith applications and data from one instance to another. It allows the migration of all or specific applications based on requirements.
---

# Migrate applications

Appsmith allows the migration of all Appsmith data from one instance to another or just the necessary applications. Use the [backup/restore](/getting-started/setup/instance-management/appsmithctl) feature to migrate all Appsmith data. To move specific applications only, continue reading.

## Import/Export applications

Import or export the required application to any workspace, either in the same or a different Appsmith instance.

:::info
Applications are forward compatible from Appsmith version 1.6.9 to 1.7.0.

Applications built in an older version of an Appsmith instance will function when imported into a newer version of an Appsmith instance.
:::



 <VideoEmbed host="youtube" videoId="2JuJ0v56ztw" title="Import/Export Apps on Appsmith" caption="Import/Export Apps on Appsmith"/>



### Export application

Sync the application to a [Git repository](/advanced-concepts/version-control-with-git) or export the application as a JSON file to the system.

To export the application as a JSON file, follow these steps:

1. Navigate to the workspace homepage and go to the app to export.
2. Select “**Export**” from the menu button at the bottom of the Application card.




 <VideoEmbed host="youtube" videoId="lBMP9MQHdCQ" title="How to export an app" caption="How to export an app"/>


### Import application

Choose one of the following ways to import an Appsmith application:

1. [Import from a Git Repository](backup-restore.md#import-from-a-git-repository) ;
2. From an application JSON file.

#### Import from an application JSON file

If an application has been exported as a JSON file, import the same application to any workspace or Appsmith instance.

To import an exported (JSON file) application, follow these steps:

1. Navigate to the workspace homepage and go to the workspace menu button.
2. Select the “**Import**” option from the menu button (next to +NEW).
3. In the import pop-up window, click on import from file and select the JSON file from the system’s memory.
4. After importing the file, a datasource configuration Modal appears (if the imported app had a datasource connection) to configure the datasources used by the imported application.

:::info
As a security measure, Appsmith does not export any config values used for the connecting datasource during the import operation. Configure it in the datasource configuration modal, or skip this and choose to configure it later.
:::



 <VideoEmbed host="youtube" videoId="bhzGIdXq2Z4" title="How to import an app" caption="How to import an app"/>

:::tip
When importing the application into the destination instance/ workspace, it's a new one. This means the source and destination applications are detached, and changes are not synced.
:::

### Import from a Git repository

If an application is connected to Git version control in Appsmith, import the Appsmith application from the Git repository into any workspace. For more information, check out [Import from Repository](/advanced-concepts/version-control-with-git/import-from-repository).
