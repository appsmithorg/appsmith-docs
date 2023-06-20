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
   <img src="/img/hubspot-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring a HubSpot datasource."/>
   <figcaption align = "center"><i>Configuring a HubSpot datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Authentication Type</b></dt>
  <dd>Appsmith supports using **Bearer Token** authorization for HubSpot.</dd><br/>
  <dd>To find your Bearer Token:
    <ol>
        <li> From your HubSpot dashboard, click the <b>settings</b> icon.</li>
        <li> In the Preferences pane, click <b>Integrations</b> &gt; <b>Private Apps</b>.</li>
        <li> Select or create the app that you want to connect to Appsmith.</li>
        <li> Navigate to your app's <b>Scopes</b>.</li>
        <li> For <b>CMS</b>, <b>CRM</b>, and <b>Settings</b>, enable the scopes that Appsmith needs for the operations you want.</li>
        <li> Navigate to the <b>Auth</b> page of your app's settings.</li>
        <li> There you'll find the app's <a href="https://developers.hubspot.com/docs/api/oauth/tokens"><b>Access Token</b></a>. Use the access token as your <b>Bearer Token</b> in Appsmith.</li>
    </ol>

  </dd>
</dl>

## Query HubSpot

The following section is a reference guide that provides a description of the read and write operation commands with their parameters to create HubSpot queries.

<figure>
  <img src="/img/hubspot-query-config.png" style= {{width:"100%", height:"auto"}} alt="Creating HubSpot queries."/>
  <figcaption align = "center"><i>Creating HubSpot queries.</i></figcaption>
</figure>

## Query

You can create queries to fetch, update, and delete data from a datasource using the Appsmith query editor. HubSpot integration supports the following query methods:


### Fetch data

The **Get Table Rows** command fetches rows from a table. The following is a list of all the fields available for **Get Table Rows**:

<dl>
  <dt><b>Sort</b></dt>
  <dd>The name of a field by which to sort the fetched records.
  </dd><br />

  <dt><b>Next Page Token</b></dt>
  <dd>Next Page Token</dd>

</dl>


### Create data 

(Add new table row)


### Update data

(Update existing row)


### Delete data

(Permanently delete row)


## Commands

The following commands are available for your HubSpot queries:

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
| CRM - List Objects                       |    Fetches all the object from the database. |
| CRM - Create Object                      |   Creates a new object in the database.                                    |
| CRM - Read Object                        | Retrieve a particular object. |
| CRM - Update Object                      |  Update a few fields in a object.                                       |
| CRM - Archive Object                     |  Archive or delete an existing object.                                     |
| CRM - Search Object                      | Search any object.                                      |
| CRM - GDPR Delete                        |  Deletes the record and any associations.                                     |
