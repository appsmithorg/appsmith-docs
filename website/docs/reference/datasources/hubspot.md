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

### HubDB - get table rows

The **Get Table Rows** command fetches rows from a HubDB table. The following is a list of all the fields available for **HubDB - get table rows**:

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


### HubDB - add new table row

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


### HubDB - update existing row

The **HubDB - update existing row** command updates an exiting row in a HubDB table. The following is a list of all the fields available for **HubDB - update existing row**:

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


### HubDB - permanently delete row

The **HubDB - permanently delete row** command deletes an exiting row from a HubDB table. The following is a list of all the fields available for **HubDB - permanently delete row**:

<dl>
  <dt><b>Table ID or name</b></dt>
  <dd>The name of your HubDB table, or its numerical <code>ID</code> value.
  </dd><br />

  <dt><b>Row ID</b></dt>
  <dd>The <code>ID</code> of the table row that you'd like to delete.</dd><rb/>

</dl>


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
