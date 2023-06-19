---
sidebar_position: 10
description: Connect Appsmith to Hubspot and create queries.
---

# HubSpot

This page provides information for connecting Appsmith to HubSpot and for reading and writing data in your applications.

## Connect HubSpot

<VideoEmbed host="youtube" videoId="h2Jp8PenbTM" title="Create HubSpot Datasource" caption="Create HubSpot Datasource"/>

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a HubSpot database.

<figure>
   <img src="/img/hubspot-connection.png" style= {{width:"100%", height:"auto"}} alt="Configuring a HubSpot datasource."/>
   <figcaption align = "center"><i>Configuring a HubSpot datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Authentication Type</b></dt><br />
  <dd>Appsmith supports using **Bearer Token** authorization for HubSpot.</dd>
  <dd>
  
To find your Bearer Token in HubSpot:
1. From your HubSpot dashboard, click the **settings** icon.
1. In the Preferences pane, click **Integrations** > **Private Apps**.
1. Select or create the app that you want to connect to Appsmith.
1. Navigate to your app's **Scopes**.
1. For **CMS**, **CRM**, and **Settings**, enable the scopes that Appsmith will need for the operations you want.
1. Navigate to the **Auth** page of your app's settings.
1. There you'll find the app's [**Access Token**](https://developers.hubspot.com/docs/api/oauth/tokens). Use the access token as your **Bearer Token** in Appsmith.

  </dd>
</dl>

## Query HubSpot

The following section is a reference guide that provides a description of the read and write operation commands with their parameters to create HubSpot queries.

<figure>
  <img src="/img/.png" style= {{width:"100%", height:"auto"}} alt="Creating HubSpot queries."/>
  <figcaption align = "center"><i>Creating HubSpot queries.</i></figcaption>
</figure>

## Query

You can create queries to fetch, update, and delete data from a datasource using the Appsmith query editor. HubSpot integration supports the following query methods:



|                Query Name                |              Description              |
|:----------------------------------------:|:-------------------------------------:|
| HubDB - Get Published Tables             | Fetches all the published table from the database. |
| HubDB - Create Table                     | Creates a new table in the HubDB database. |
| HubDB - Get Details of a Published Table | Retrieve details of an existing table.  |
| HubDB - Archive Table                    | Archive or delete an existing table.                                 |
| HubDB - Update Existing Table            | Update a few fields in a table.                                   |
| HubDB - Clone Table                      |     Clone an existing HubDB table.                                  |
| HubDB - Export Published Version Table   |  Export table data.                                |
| HubDB - Unpublish Table                  | Unpublish table or unpublish multiple pages                                |
| HubDB - Get Table Rows                   |  Get the rows for a specific HubDB table.                                |
| HubDB - Add New Table Row                |   Add a new row to a HubDB table.                                |
| HubDB - Get Table Row                    | Get the rows for a specific HubDB table.                                       |
| HubDB - Update Existing Row              | Update a specific row in a HubDB table.                                    |
| HubDB - Replace Existing Row             | Replace a specific row in a HubDB table.                                   |
| HubDB - Permanently Delete Row           |   Delete a specific row in a HubDB table.                                    |
| HubDB - Clone Row                        |  Duplicate/clone  a specific row.                                   |
| HubDB - Get Set Rows                     |   Get set of rows from the table.                                    |
| HubDB - Permanently Delete Rows          |   Delete a set of rows from a HubDB table.                                    |
| Domains - Get Current Domains            |  Returns all existing domains that have been created.                                     |
| Domains - Get Single Domain              |  Returns a single domain with the id specified.                                     |
| URL Redirects - Get Current Redirects    |  Returns all existing URL redirects.                                     |
| URL Redirects - Create Redirect          |   Creates and configures a new URL redirect.                                    |
| URL Redirects - Get Details Redirect     |   Returns the details for a single existing URL redirect by ID.                                    |
| URL Redirects - Update Redirect          |  Updates the settings for an existing URL redirect.                                      |
| URL Redirects - Delete Redirect          |  Delete one existing redirect.                                      |
| CRM - List Objects                       |    Fetches all the object from the database. |
| CRM - Create Object                      |   Creates a new object in the database.                                    |
| CRM - Read Object                        | Retrieve a particular object. |
| CRM - Update Object                      |  Update a few fields in a object.                                       |
| CRM - Archive Object                     |  Archive or delete an existing object.                                     |
| CRM - Search Object                      | Search any object.                                      |
| CRM - GDPR Delete                        |  Deletes the record and any associations.                                     |
| Files - Import File                      | Imports CRM records into your HubSpot account.    |
| Files - Delete File                      |  Deletes the file at the specified path in the specified environment.                                     |
| Files - Get File                         |   Gets the file at the specified path in the specified environment.                                    |
| Files - Create Folder                    | Create a folder in the specified environment.                                     |
| Files - Search File                      |  Search for any file in the specified environment.                                                     |
| Files - Search Folder                    |   Search for any folder in the specified environment.                                    |
| Files - Update Folder Properties         |  Perform a partial update of a property.                                    |
| Files - Check Folder Update Status       |   Check the status of a batch file access update task.                                    |
| Files - Get Folder                       |  Get the details for a specific folder.                                     |
| Files - Delete Folder                    |   Delete a specific folder.                                    |
| Settings - Retrieve List of Users        |  Get a list of authorized users.                                   |
| Settings - Add User                      |  Add users to your HubSpot account.                                     |
| Settings - Retrieve User                 |  Retrieve an existing user.                                  |
| Settings - Modify User                   |  Update user details.                                  |
| Settings - Remove User                   |  Remove set of user.                                    |
| Settings - Retrieve Roles Account        |  View users in your HubSpot account.                                     |
| Settings - See Details Account's Teams   |  Obtain information about the team's account.                                    |

