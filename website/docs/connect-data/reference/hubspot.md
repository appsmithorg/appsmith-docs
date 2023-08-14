---
sidebar_position: 10
description: Connect Appsmith to Hubspot and create queries.
toc_max_heading_level: 4
---

# HubSpot

This page provides information for connecting Appsmith to HubSpot and for reading and writing data in your applications.
 

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a HubSpot database.

<figure>
   <img src="/img/hubspot-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring a HubSpot datasource."/>
   <figcaption align = "center"><i>Configuring a HubSpot datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Authentication Type</b></dt>
  <dd><i>Options:</i>
    <ul>
    <li><b>Bearer Token:</b> An access token that authenticates your queries to HubSpot. For more information on finding your access token, follow HubSpot's <a href="https://developers.hubspot.com/docs/api/private-apps">Private App integration guide</a>.</li>
    </ul>
  </dd>

</dl>

## Query HubSpot

The following section is a reference guide that provides a description of the read and write operation commands with their parameters to create HubSpot queries.

<figure>
  <img src="/img/hubspot-query-config.png" style= {{width:"100%", height:"auto"}} alt="Creating HubSpot queries."/>
  <figcaption align = "center"><i>Creating HubSpot queries.</i></figcaption>
</figure>

### HubDB

The following sections describe the parameters for connecting to HubDB type queries.

#### Get published tables

The **HubDB - get published tables** command fetches information for the HubDB tables associated with your HubSpot account. The following is a list of all the fields available for **HubDB - get published tables**:

<dl>
  <dt><b>Sort</b></dt>
  <dd>The name of a field by which to sort the fetched tables, such as <code>name</code> or creation time (<code>createdAt</code>). Requires a single field.
  </dd><br />

  <dt><b>Next Page Token</b></dt>
  <dd>A token sent in the response to your query that is used in subsequent queries to fetch the next page of data:</dd>
  <dd><pre>{`{{ GetRowsQuery.data.paging?.next.after || "" }}`}</pre></dd><br />

  <dt><b>Limit</b></dt>
  <dd>The maxiumum number of items that can be returned in a single query response.
  </dd><br />

  <dt><b>Created at</b></dt>
  <dd>Returns only records that were created at this given date/time. Format: <code>YYYY-MM-DDThh:mm:ss.sZ</code>.
  </dd><br />

  <dt><b>Created after</b></dt>
  <dd>Returns only records that were created after the given date/time. Format: <code>YYYY-MM-DDThh:mm:ss.sZ</code>.
  </dd><br />

  <dt><b>Created before</b></dt>
  <dd>Returns only records that were created before this given date/time. Format: <code>YYYY-MM-DDThh:mm:ss.sZ</code>.
  </dd><br />

  <dt><b>Updated at</b></dt>
  <dd>Returns only records that were updated at this given date/time. Format: <code>YYYY-MM-DDThh:mm:ss.sZ</code>.
  </dd><br />

  <dt><b>Updated after</b></dt>
  <dd>Returns only records that were updated after the given date/time. Format: <code>YYYY-MM-DDThh:mm:ss.sZ</code>.
  </dd><br />

  <dt><b>Updated before</b></dt>
  <dd>Returns only records that were updated before this given date/time. Format: <code>YYYY-MM-DDThh:mm:ss.sZ</code>.
  </dd><br />

  <dt><b>Archive</b></dt>
  <dd>A boolean value; when <code>true</code>, the query only returns table data for tables that are archived.
  </dd><br />

</dl>

#### Create table

The **HubDB - create table** command creates a new HubDB table. The following is a list of all the fields available for **HubDB - create table**:

<dl>
  <dt><b>Name</b></dt>
  <dd>The name of the new table.
  </dd><br />

  <dt><b>Label</b></dt>
  <dd>The label of the new table.</dd><br />

  <dt><b>Use for pages</b></dt>
  <dd>A boolean that, when <code>true</code>, allows the new table to be used for creating dynamic website pages.</dd><br />

  <dt><b>Columns</b></dt>
  <dd>A JSON array of column names to add to the new table: <code>["hello", "world", "apple"]</code></dd><br />

  <dt><b>Allow Public API access</b></dt> 
  <dd>A boolean that, when <code>true</code>, allows the table to be read via public API without authorization.</dd><br />

  <dt><b>Allow child tables</b></dt> 
  <dd>A boolean that, when <code>true</code>, allows the creation of related child tables.</dd><br />

  <dt><b>Allow child table pages</b></dt> 
  <dd>A boolean that, when <code>true</code>, allows the creation of multi-level dynamic pages referencing the child table.</dd><br />

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of another table that is related to the new table as a Foreign Key.</dd><br />

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of a column from another table that is used as a Foreign Key.</dd><br />

  <dt><b>Dynamic meta tags</b></dt>
  <dd>Key/value pairs to use for setting which table columns map to which metadata types. For example, to set the **Meta description column** to be the column with an <code>id</code> of <code>3</code>, use: <code>&#123; "DESCRIPTION": 3 &#125;</code></dd>

</dl>

#### Get details of a published table

The **HubDB - get details of a published table** command fetches data about a HubDB table. The following is a list of all the fields available for **HubDB - get details of a published table**:

<dl>
  <dt><b>Archived</b></dt>
  <dd>A boolean value; when <code>true</code>, the query includes data for tables that are archived.
  </dd><br />

  <dt><b>Include foreign IDs</b></dt>
  <dd>A boolean value; when <code>true</code>, the details for related child/foreign tables are included in the results.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

</dl>

#### Archive table

The **HubDB - archive table** archives a HubDB table. The following is a list of all the fields available for **HubDB - archive table**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

</dl>

#### Update existing table

The **HubDB - update existing table** command fetches rows from a HubDB table. The following is a list of all the fields available for **HubDB - update existing table**:

<dl>
  <dt><b>Archived</b></dt>
  <dd>A boolean value; when <code>true</code>, the query returns data only for tables that are archived.
  </dd><br />

  <dt><b>Include foreign IDs</b></dt>
  <dd>A boolean value; when <code>true</code>, the details for related child/foreign tables are included in the results.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Name</b></dt>
  <dd>The name of the new table.
  </dd><br />

  <dt><b>Label</b></dt>
  <dd>The label of the new table.</dd><br />

  <dt><b>Use for pages</b></dt>
  <dd>A boolean that, when <code>true</code>, allows the new table to be used for creating dynamic website pages.</dd><br />

  <dt><b>Columns</b></dt>
  <dd>A JSON array of column names to add to the new table: <code>["hello", "world", "apple"]</code></dd><br />

  <dt><b>Allow Public API access</b></dt> 
  <dd>A boolean that, when <code>true</code>, allows the table to be read via public API without authorization.</dd><br />

  <dt><b>Allow child tables</b></dt> 
  <dd>A boolean that, when <code>true</code>, allows the creation of related child tables.</dd><br />

  <dt><b>Allow child table pages</b></dt> 
  <dd>A boolean that, when <code>true</code>, allows the creation of multi-level dynamic pages referencing the child table.</dd><br />

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of another table that is related to the new table as a Foreign Key.</dd><br />

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of a column from another table that is used as a Foreign Key.</dd><br />

  <dt><b>Dynamic meta tags</b></dt>
  <dd>Key/value pairs to use for setting which table columns map to which metadata types. For example, to set the <b>Meta description column</b> to be the column with an <code>id</code> of <code>3</code>, use: <code>&#123; "DESCRIPTION": 3 &#125;</code></dd>

</dl>


#### Clone table

The **HubDB - clone table** command clones an existing HubDB table. The following is a list of all the fields available for **HubDB - clone table**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>New name</b></dt>
  <dd>The name of your new HubDB table.
  </dd><br />

  <dt><b>New label</b></dt>
  <dd>The label of your new HubDB table.
  </dd><br />

  <dt><b>Copy rows</b></dt>
  <dd>A boolean that, when <code>true</code>, copies the rows from the cloned table into the new table.
  </dd><br />

</dl>

#### Export published version table

The **HubDB - export published version table** command returns the file data for a HubDB table in a given format. The following is a list of all the fields available for **HubDB - export published version table**:

<dl>
  <dt><b>Include foreign IDs</b></dt>
  <dd>A boolean value; when <code>true</code>, the details for related child/foreign tables are included in the results.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

</dl>

#### Unpublish table

The **HubDB - unpublish table** command unpublishes a given HubDB table. The following is a list of all the fields available for **HubDB - unpublish table**:

<dl>
  <dt><b>Include foreign IDs</b></dt>
  <dd>The file format of the exported table data. Allows <code>CSV</code>, <code>XLSX</code>, or <code>XLS</code>.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

</dl>


#### Get table rows

The **HubDB - get table rows** command fetches rows from a HubDB table. The following is a list of all the fields available for **HubDB - get table rows**:

<dl>
  <dt><b>Sort</b></dt>
  <dd>The name of a field by which to sort the fetched records. Requires a single column name, such as <code>name</code>.
  </dd><br />

  <dt><b>Next Page Token</b></dt>
  <dd>A token sent in the response to your query that is used in subsequent queries to fetch the next page of data:</dd>
  <dd><pre>{`{{ GetRowsQuery.data.paging?.next.after || "" }}`}</pre></dd>

  <dt><b>Limit</b></dt>
  <dd>The maxiumum number of rows that can be returned in a single query response.
  </dd><br />

  <dt><b>Properties</b></dt>
  <dd>A comma-separated list of columns that should be fetched for each returned record.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

</dl>


#### Add new table row

The **HubDB - add new table row** command creates a new row in a HubDB table. The following is a list of all the fields available for **HubDB - add new table row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Path</b></dt>
  <dd>If you're using HubSpot's dynamic pages, this field is the URL slug for the new page created for this table row.
  </dd><br />

  <dt><b>Name</b></dt>
  <dd>If you're using HubSpot's dynamic pages, this field is the page title for the new page created for this table row.</dd><rb/>

  <dt><b>Child table ID</b></dt>
  <dd>The ID for another HubDB table. This is used as a Foreign Key to create a relationship between records. To connect a specific record from the child table, pass its <code>ID</code> as a string value in the JSON object of your query's <b>Values</b> field.
  </dd><br />

  <dt><b>Values</b></dt>
  <dd>A JSON object with key/value pairs representing the new record. If you are creating a relationship using the <b>Child table ID</b> field, you can pass the <code>ID</code> of a corresponding record from the child table as a string value. For example, if you refer to a child table called <code>buyer</code>:
  <pre>{`{
    "name": "MyProduct",
    "buyer": "121529803132"
}`}</pre>
  </dd><br />

</dl>


#### Update existing row

The **HubDB - update existing row** command updates an existing row in a HubDB table. The following is a list of all the fields available for **HubDB - update existing row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Row ID</b></dt>
  <dd>The <code>ID</code> of the table row that you'd like to update.</dd><rb/>

  <dt><b>Path</b></dt>
  <dd>If you're using HubSpot's dynamic pages, this field is the URL slug for the new page created for this table row.
  </dd><br />

  <dt><b>Name</b></dt>
  <dd>If you're using HubSpot's dynamic pages, this field is the page title for the new page created for this table row.</dd><rb/>

  <dt><b>Child table ID</b></dt>
  <dd>The ID for another HubDB table. This is used as a Foreign Key to create a relationship between records. To connect a specific record from the child table, pass its <code>ID</code> as a string value in the JSON object of your query's <b>Values</b> field.
  </dd><br />

  <dt><b>Values</b></dt>
  <dd>A JSON object with key/value pairs representing the new record. If you are creating a relationship using the <b>Child table ID</b> field, you can pass the <code>ID</code> of a corresponding record from the child table as a string value. For example, if you refer to a child table called <code>buyer</code>:
  <pre>{`{
    "name": "MyProduct",
    "buyer": "121529803132"
}`}</pre>
  </dd><br />

</dl>

#### Replace existing row

The **HubDB - replace existing row** command replaces an existing row in a HubDB table. The following is a list of all the fields available for **HubDB - replace existing row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Row ID</b></dt>
  <dd>The <code>ID</code> of the table row that you'd like to replace.</dd><rb/>

  <dt><b>Path</b></dt>
  <dd>If you're using HubSpot's dynamic pages, this field is the URL slug for the new page created for this table row.
  </dd><br />

  <dt><b>Name</b></dt>
  <dd>If you're using HubSpot's dynamic pages, this field is the page title for the new page created for this table row.</dd><rb/>

  <dt><b>Child table ID</b></dt>
  <dd>The ID for another HubDB table. This is used as a Foreign Key to create a relationship between records. To connect a specific record from the child table, pass its <code>ID</code> as a string value in the JSON object of your query's <b>Values</b> field.
  </dd><br />

  <dt><b>Values</b></dt>
  <dd>A JSON object with key/value pairs representing the new record. If you are creating a relationship using the <b>Child table ID</b> field, you can pass the <code>ID</code> of a corresponding record from the child table as a string value. For example, if you refer to a child table called <code>buyer</code>:
  <pre>{`{
    "name": "MyProduct",
    "buyer": "121529803132"
}`}</pre>
  </dd><br />

</dl>


#### Permanently delete row

The **HubDB - permanently delete row** command deletes an existing row from a HubDB table. The following is a list of all the fields available for **HubDB - permanently delete row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Row ID</b></dt>
  <dd>The <code>ID</code> of the table row that you'd like to delete.</dd><br/>

</dl>

#### Clone row

The **HubDB - clone row** command clones an existing row in a HubDB table. The following is a list of all the fields available for **HubDB - clone row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Row ID</b></dt>
  <dd>The ID of the table row to clone.
  </dd><br />

</dl>

#### Get set rows

The **HubDB - get set rows** command gets a batch of specific rows from a HubDB table. The following is a list of all the fields available for **HubDB - get set rows**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Inputs</b></dt>
  <dd>A JSON array with the IDs of the rows to get.
  </dd><br />

</dl>

#### Permanently delete rows

The **HubDB - permanently delete rows** command deletes a batch of specific rows from a HubDB table. The following is a list of all the fields available for **HubDB - permanently delete rows**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Inputs</b></dt>
  <dd>A JSON array with the IDs of the rows to get.
  </dd><br />

</dl>

### CRM

The following sections describe the parameters for connecting to CRM type queries.

#### List objects

The **CRM - list objects** command returns a list of entries for a given type of CRM objects. The following is a list of all the fields available for **CRM - list objects**:

<dl>
  <dt><b>Objects</b></dt>
  <dd>The name of a type of CRM object to fetch, such as <code>contacts</code>.
  </dd><br />

</dl>

#### Create object

The **CRM - create objects** command creates a new object of the given type. The following is a list of all the fields available for **CRM - create objects**:

<dl>
  <dt><b>Objects</b></dt>
  <dd>The name of a type of CRM object to fetch, such as <code>contacts</code>.
  </dd><br />

  <dt><b>Properties</b></dt>
  <dd>A JSON object with key/value pairs that define the properties for the created CRM object.
  </dd><br />

</dl>

#### Read object

The **CRM - read object** command returns the details for a specific CRM object. The following is a list of all the fields available for **CRM - read object**:

<dl>
  <dt><b>Properties</b></dt>
  <dd>A comma-separated list of columns that should be fetched for the object.
  </dd><br />

  <dt><b>Properties with history</b></dt>
  <dd>A comma-separated list of columns that should be fetched along with their history of previous values.
  </dd><br />

  <dt><b>Associations</b></dt>
  <dd>A comma-separated list of related CRM object types whose IDs should be returned.
  </dd><br />

  <dt><b>Archive</b></dt>
  <dd>A boolean value; when <code>true</code>, the query only returns entries that are archived.
  </dd><br />

  <dt><b>Object type</b></dt>
  <dd>The name of a type of CRM object to fetch, such as <code>contacts</code>.
  </dd><br />

  <dt><b>Object ID</b></dt>
  <dd>The ID of the CRM object to fetch.
  </dd><br />

</dl>

#### Update object

The **CRM - create objects** command updates a given CRM object. The following is a list of all the fields available for **CRM - create objects**:

<dl>
  <dt><b>Object type</b></dt>
  <dd>The name of a type of CRM object to fetch, such as <code>contacts</code>.
  </dd><br />

  <dt><b>Object ID</b></dt>
  <dd>The ID of the CRM object to fetch.
  </dd><br />

  <dt><b>Properties</b></dt>
  <dd>A JSON object with key/value pairs that define the properties for the created CRM object.
  </dd><br />

</dl>

#### Archive object

The **CRM - Archive object** command archives a given CRM object. The following is a list of all the fields available for **CRM - Archive object**:

<dl>
  <dt><b>Object type</b></dt>
  <dd>The name of a type of CRM object to fetch, such as <code>contacts</code>.
  </dd><br />

  <dt><b>Object ID</b></dt>
  <dd>The ID of the CRM object to fetch.
  </dd><br />

</dl>

#### Search object

<dl>
  <dt><b>Object type</b></dt>
  <dd>The name of a type of CRM object to fetch, such as <code>contacts</code>.
  </dd><br />

  <dt><b>Property name</b></dt>
  <dd>The name of a property by which to filter results
  </dd><br />

  <dt><b>Value</b></dt>
  <dd>The value that returned records should have for the property specified in <b>Property name</b>.
  </dd><br />

  <dt><b>Operator</b></dt>
  <dd>The logical operator that should be used to compare the object's actual property value to the value specified in <b>Value</b>.
  </dd><br />

  <dt><b>Sorts</b></dt>
  <dd>A sorting rule in the request body to list results in ascending or descending order. Only one sorting rule can be applied to any search. For example:<pre>{`{[
      {
        "propertyName": "createdate",
        "direction": "DESCENDING"
      }
]}`}</pre>
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>A word to search for in the default text property of all CRM objects.
  </dd><br />

  <dt><b>Properties</b></dt>
  <dd>A comma-separated list of columns that should be fetched for each returned record.
  </dd><br />

  <dt><b>Limit</b></dt>
  <dd>The maxiumum number of rows that can be returned in a single query response.
  </dd><br />  

  <dt><b>After</b></dt>
  <dd>A token sent in the response to your query that is used in subsequent queries to fetch the next page of data:</dd>
  <dd><pre>{`{{ SearchObjectQuery.data.paging?.next.after || "" }}`}</pre></dd>


</dl>

## Additional commands

In addition to HubDB and CRM command types, Appsmith also provides the following commands:

|                Query Name                |              Description              |
|:----------------------------------------:|:-------------------------------------:|
| Domains - get current domains            |  Returns all existing domains that have been created.                                     |
| Domains - get single domain              |  Returns a single domain with the id specified.                                     |
| URL Redirects - get current redirects    |  Returns all existing URL redirects.                                     |
| URL Redirects - create redirect          |   Creates and configures a new URL redirect.                                    |
| URL Redirects - get details redirects     |   Returns the details for a single existing URL redirect by ID.                                    |
| URL Redirects - update redirects          |  Updates the settings for an existing URL redirect.                                      |
| URL Redirects - delete redirects          |  Deletes one existing redirect.                                      |
| Files - import file                      | Imports CRM records into your HubSpot account.    |
| Files - delete file                      |  Deletes the file at the specified path in the specified environment.                                     |
| Files - get file                         |   Fetches the file at the specified path in the specified environment.                                    |
| Files - create folder                    | Creates a folder in the specified environment.                                     |
| Files - search file                      |  Searches for any file in the specified environment.                                                     |
| Files - search folder                    |   Searches for any folder in the specified environment.                                    |
| Files - update folder properties         |  Performs a partial update of a property.                                    |
| Files - check folder update Status       |   Checks the status of a batch file access update task.                                    |
| Files - get folder                       |  Fetches the details for a specific folder.                                     |
| Files - delete folder                    |   Deletes a specific folder.                                    |
| Settings - retrieve list of users        |  Fetches a list of authorized users.                                   |
| Settings - add user                      |  Adds users to your HubSpot account.                                     |
| Settings - retrieve user                 |  Retrieves an existing user.                                  |
| Settings - modify user                   |  Updates user details.                                  |
| Settings - remove user                   |  Removes a set of users.                                    |
| Settings - retrieve roles account        |  Fetches users in your HubSpot account.                                     |
| Settings - see details account's teams   |  Fetches information about the team's account.                                    |

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.