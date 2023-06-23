---
sidebar_position: 10
description: Connect Appsmith to Hubspot and create queries.
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
    <li><b>Bearer Token:</b> An access token that authenticates your queries to HubSpot. To create a HubSpot "Private App" integration and find its token, follow <a href="https://developers.hubspot.com/docs/api/private-apps">this guide</a>.</li>
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
  <dd>The name of a field by which to sort the fetched tables, such as `name` or creation time (`createdAt`). Requires a single field.
  </dd><br />

  <dt><b>Next Page Token</b></dt>
  <dd>A token sent in the response to your query that is used in subsequent queries to fetch the next page of data:</dd>
  <dd><pre>{`{{ GetRowsQuery.data.paging?.next.after || "" }}`}</pre></dd>

  <dt><b>Limit</b></dt>
  <dd>The maxiumum number of items that can be returned in a single query response.
  </dd><br />

  <dt><b>Created at</b></dt>
  <dd>Returns only records that were created at this given date/time. Format: `YYYY-MM-DDThh:mm:ss.sZ`.
  </dd><br />

  <dt><b>Created after</b></dt>
  <dd>Returns only records that were created after the given date/time. Format: `YYYY-MM-DDThh:mm:ss.sZ`.
  </dd><br />

  <dt><b>Created before</b></dt>
  <dd>Returns only records that were created before this given date/time. Format: `YYYY-MM-DDThh:mm:ss.sZ`.
  </dd><br />

  <dt><b>Updated at</b></dt>
  <dd>Returns only records that were updated at this given date/time. Format: `YYYY-MM-DDThh:mm:ss.sZ`.
  </dd><br />

  <dt><b>Updated after</b></dt>
  <dd>Returns only records that were updated after the given date/time. Format: `YYYY-MM-DDThh:mm:ss.sZ`.
  </dd><br />

  <dt><b>Updated before</b></dt>
  <dd>Returns only records that were updated before this given date/time. Format: `YYYY-MM-DDThh:mm:ss.sZ`.
  </dd><br />

  <dt><b>Archive</b></dt>
  <dd>A boolean value; when `true`, the query only returns table data for tables that are archived.
  </dd><br />

</dl>

#### Create table

The **HubDB - create table** command creates a new HubDB table. The following is a list of all the fields available for **HubDB - create table**:

<dl>
  <dt><b>Name</b></dt>
  <dd>The name of the new table.
  </dd><br />

  <dt><b>Label</b></dt>
  <dd>The label of the new table.</dd>

  <dt><b>Use for pages</b></dt>
  <dd>A boolean that, when `true`, allows the new table to be used for creating dynamic website pages.</dd>

  <dt><b>Columns</b></dt>
  <dd>A JSON array of column names to add to the new table: <code>["hello", "world", "apple"]</code></dd>

  <dt><b>Allow Public API access</b></dt> 
  <dd>A boolean that, when `true`, allows the table to be read via public API without authorization.</dd>

  <dt><b>Allow child tables</b></dt> 
  <dd>A boolean that, when `true`, allows the creation of related child tables.</dd>

  <dt><b>Allow child table pages</b></dt> 
  <dd>A boolean that, when `true`, allows the creation of multi-level dynamic pages referencing the child table.</dd>

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of another table that is related to the new table as a Foreign Key.</dd>

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of a column from another table that is used as a Foreign Key.</dd>

  <dt><b>Dynamic meta tags</b></dt>
  <dd>Key/value pairs to use for setting which table columns map to which metadata types. For example, to set the **Meta description column** to be the column with an `id` of `3`, use: <code>{"DESCRIPTION": 3}</code></dd>

</dl>

#### Get details of a published table

The **HubDB - get details of a published table** command fetches data about a HubDB table. The following is a list of all the fields available for **HubDB - get details of a published table**:

<dl>
  <dt><b>Archived</b></dt>
  <dd>A boolean value; when `true`, the query includes data for tables that are archived.
  </dd><br />

  <dt><b>Include foreign IDs</b></dt>
  <dd>A boolean value; when `true`, the details for related child/foreign tables are included in the results.
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
  <dd>A boolean value; when `true`, the query returns data only for tables that are archived.
  </dd><br />

  <dt><b>Include foreign IDs</b></dt>
  <dd>A boolean value; when `true`, the details for related child/foreign tables are included in the results.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Name</b></dt>
  <dd>The name of the new table.
  </dd><br />

  <dt><b>Label</b></dt>
  <dd>The label of the new table.</dd>

  <dt><b>Use for pages</b></dt>
  <dd>A boolean that, when `true`, allows the new table to be used for creating dynamic website pages.</dd>

  <dt><b>Columns</b></dt>
  <dd>A JSON array of column names to add to the new table: <code>["hello", "world", "apple"]</code></dd>

  <dt><b>Allow Public API access</b></dt> 
  <dd>A boolean that, when `true`, allows the table to be read via public API without authorization.</dd>

  <dt><b>Allow child tables</b></dt> 
  <dd>A boolean that, when `true`, allows the creation of related child tables.</dd>

  <dt><b>Allow child table pages</b></dt> 
  <dd>A boolean that, when `true`, allows the creation of multi-level dynamic pages referencing the child table.</dd>

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of another table that is related to the new table as a Foreign Key.</dd>

  <dt><b>Foreign table ID</b></dt> 
  <dd>The ID of a column from another table that is used as a Foreign Key.</dd>

  <dt><b>Dynamic meta tags</b></dt>
  <dd>Key/value pairs to use for setting which table columns map to which metadata types. For example, to set the **Meta description column** to be the column with an `id` of `3`, use: <code>{"DESCRIPTION": 3}</code></dd>

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
  <dd>A boolean that, when `true`, copies the rows from the cloned table into the new table.
  </dd><br />

</dl>

#### Export published version table

The **HubDB - export published version table** command returns the file data for a HubDB table in a given format. The following is a list of all the fields available for **HubDB - export published version table**:

<dl>
  <dt><b>Include foreign IDs</b></dt>
  <dd>A boolean value; when `true`, the details for related child/foreign tables are included in the results.
  </dd><br />

  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

</dl>

#### Unpublish table

The **HubDB - unpublish table** command unpublishes a given HubDB table. The following is a list of all the fields available for **HubDB - unpublish table**:

<dl>
  <dt><b>Include foreign IDs</b></dt>
  <dd>The file format of the exported table data. Allows `CSV`, `XLSX`, or `XLS`.
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


### Add new table row

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


### Update existing row

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

### Replace existing row

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


### Permanently delete row

The **HubDB - permanently delete row** command deletes an existing row from a HubDB table. The following is a list of all the fields available for **HubDB - permanently delete row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Row ID</b></dt>
  <dd>The <code>ID</code> of the table row that you'd like to delete.</dd><rb/>

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
  <dd>A JavaScript array with the IDs of the rows to get.
  </dd><br />

</dl>

#### Permanently delete rows

The **HubDB - permanently delete rows** command deletes a batch of specific rows from a HubDB table. The following is a list of all the fields available for **HubDB - permanently delete rows**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Inputs</b></dt>
  <dd>A JavaScript array with the IDs of the rows to get.
  </dd><br />

</dl>

### CRM

The following sections describe the parameters for connecting to CRM type queries.

#### List objects

The **CRM - list objects** command returns a list of entries for a given type of CRM objects. The following is a list of all the fields available for **CRM - list objects**:

<dl>
  <dt><b>Objects</b></dt>
  <dd>The name of a type of CRM object to fetch, such as `contacts`.
  </dd><br />

</dl>

#### Create object

The **CRM - create objects** command creates a new object of the given type. The following is a list of all the fields available for **CRM - create objects**:

<dl>
  <dt><b>Objects</b></dt>
  <dd>The name of a type of CRM object to fetch, such as `contacts`.
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
  <dd>A boolean value; when `true`, the query only returns entries that are archived.
  </dd><br />

  <dt><b>Object type</b></dt>
  <dd>The name of a type of CRM object to fetch, such as `contacts`.
  </dd><br />

  <dt><b>Object ID</b></dt>
  <dd>The ID of the CRM object to fetch.
  </dd><br />

</dl>

#### Update object

The **CRM - create objects** command updates a given CRM object. The following is a list of all the fields available for **CRM - create objects**:

<dl>
  <dt><b>Object type</b></dt>
  <dd>The name of a type of CRM object to fetch, such as `contacts`.
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
  <dd>The name of a type of CRM object to fetch, such as `contacts`.
  </dd><br />

  <dt><b>Object ID</b></dt>
  <dd>The ID of the CRM object to fetch.
  </dd><br />

</dl>

#### Search object

## Commands

The following commands are available for your HubSpot queries:

|                Query Name                |              Description              |
|:----------------------------------------:|:-------------------------------------:|
| HubDB - Get Published Tables             | Fetches all published tables from the database. |
| HubDB - Create Table                     | Creates a new table in the HubDB database. |
| HubDB - Get Details of a Published Table | Retrieves details of an existing table.  |
| HubDB - Archive Table                    | Archives or deletes an existing table.             |
| HubDB - Update Existing Table            | Updates several fields in a table.                                   |
| HubDB - Clone Table                      |     Clones an existing HubDB table.                                  |
| HubDB - Export Published Version Table   |  Exports table data.                                |
| HubDB - Unpublish Table                  | Unpublishes table or pages                                |
| HubDB - Get Table Rows                   |  Fetches rows from a specific HubDB table.                                |
| HubDB - Add New Table Row                |   Adds a new row to a HubDB table.                                |
| HubDB - Get Table Row                    | Fetches rows from a specific HubDB table.                                       |
| HubDB - Update Existing Row              | Updates a specific row in a HubDB table.                                    |
| HubDB - Replace Existing Row             | Replaces a specific row in a HubDB table.                                   |
| HubDB - Permanently Delete Row           |   Deletes a specific row from a HubDB table.                                    |
| HubDB - Clone Row                        |  Duplicates/clones a table row.                                   |
| HubDB - Get Set Rows                     |   Fetches a set of rows from a table.                                    |
| HubDB - Permanently Delete Rows          |   Deletes a set of rows from a table.                                    |
| CRM - List Objects                       |    Fetches all CRM objects. |
| CRM - Create Object                      |   Creates a new CRM object.                                    |
| CRM - Read Object                        | Retrieves a particular CRM object. |
| CRM - Update Object                      |  Updates a few fields in a CRM object.                                       |
| CRM - Archive Object                     |  Archives or delete an existing CRM object.                                     |
| CRM - Search Object                      | Search any CRM object.                                      |
| CRM - GDPR Delete                        |  Deletes a record and its associations.                                     |
