---
sidebar_position: 7
description: Connect Appsmith to Google Sheets and create queries.
---

# Google Sheets

This page provides information for connecting Appsmith to Google Sheets and for reading and writing data in your applications.

## Connection parameters

<ZoomImage src="/img/gsheets_datasource_config.png" alt="Configuring a new Google Sheets datasource." caption="Configuring a new Google Sheets datasource." />

#### Permissions | Scope:

<dd>Defines the privileges your app has when querying spreadsheets. Use this to allow the minimum necessary privileges for your app's functions.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Read / Write / Delete | Selected Google Sheets:</b> Your app has read, write, and delete access only for the sheets that you specify while authorizing the datasource.</li>
    <li><b>Read / Write / Delete | All Google Sheets:</b> Your app has read, write, and delete access for all sheets on your Google account.</li>
    <li><b>Read / Write | All Google Sheets:</b> Your app has read and write (but not delete) access for all sheets on your Google account.</li>
    <li><b>Read | All Google Sheets:</b> Your app has read-only access to all sheets on your Google account.</li>
  </ul>
</dd>

Clicking **Save and Authorize** takes you to a Google login where you can authorize your account and select your sheets.

## Query Google Sheets

The following section is a reference guide that provides a complete description of all the parameters to connect to Google Sheets.

<ZoomImage src="/img/gsheets-query-config.png" alt="Configuring a query from the query screen." caption="Configuring a query from the query screen." />

### Fetch Details

This command fetches metadata for a given **Spreadsheet** entity. The following section lists all the fields available for the **Fetch Details** command.

#### Entity

<dd>Sets which entity type to query</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Spreadsheet:</b> Returns metadata for a spreadsheet document.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>


### Insert One

This command inserts a given entity type: **Sheet Row(s)** or **Spreadsheet**. The following section lists all the fields available for the **Insert One** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Inserts a single record as a row in the spreadsheet.</li>
    <li><b>Spreadsheet:</b> Creates a new spreadsheet document. Optionally, you can use the <b>Row Objects</b> field to provide rows that should be created along with the document.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.</dd>

#### Row Object

<dd>Available when the <b>Entity</b> is <b>Sheet Row(s)</b>. This expects a JSON-formatted object whose key/value pairs represent the columns and values from your table record.</dd>
<dd>
<i>Example:</i>
<pre>{`{
  "name": {{ UserForm.name }},
  "email": {{ UserForm.email }},
  "status": "pending"
}`}</pre>
</dd>

  #### Row Objects

  <dd>Available when the <b>Entity</b> is <b>Spreadsheet</b>. This expects an array of JSON-formatted objects whose key/value pairs represent columns and values to add to your new spreadsheet when it is created.</dd>
  <dd>
  <i>Example:</i>
  <pre>{`[{
    "name": "Kim",
    "email": "hkim@example.com",
    "status": "accepted"
},
{
  "name": "Amal",
  "email": "samal@example.com",
  "status": "accepted"
}]`}</pre>
</dd>


### Update One

This command updates a **Sheet Row(s)** entity. The following section lists all the fields available for the **Update One** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Updates a single existing row in the spreadsheet.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Update Row Object

<dd>A JSON-formatted object whose key/value pairs represent the columns and values from your table record. You must include a <code>rowIndex</code> key to specify which record to update. If you fetched the record from another Google Sheets query, this index value should be available on its <code>rowIndex</code> property.</dd>

<dd>

*Example:*

```js
//For JSON Form: {{JSONForm1.formData.id}} 
//For Table inline editing: {{ Table1.updatedRow.id }}

{{
    {
        rowIndex: Table1.selectedRow.rowIndex, // includes rowIndex key
        "id": Form1.data.TextID, 
        "name": Form1.data.InputName, 
        "country": Form1.data.SelectCountry 
       
    }
}}
```

See [Update single row](/connect-data/how-to-guides/insert-and-update-data-in-google-sheets#update-single-row) guide.


</dd>


### Delete One

This command deletes a given entity: **Sheet Row(s)**, **Spreadsheet**, or **Sheet**. The following section lists all the fields available for the **Delete One** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Deletes a single row of a spreadsheet.</li>
    <li><b>Spreadsheet:</b> Deletes a new spreadsheet document.</li>
    <li><b>Sheet:</b> Deletes a page from a spreadsheet document.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Row Index

<dd>The index of the record to delete from the spreadsheet. If you fetched the record from another Google Sheets query, this index value should be available on its <code>rowIndex</code> property.</dd>


### Fetch Many

This command fetches a given entity type: **Sheet Row(s)** or **Spreadsheet**. The following section lists all the fields available for the **Fetch Many** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Fetches a subset of horizontal records from a page of a spreadsheet document.</li>
    <li><b>Spreadsheet:</b> Fetches a list of existing spreadsheet documents.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
  The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Filter Format

<dd>
  Sets the method of selecting records from your spreadsheet.
</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Where Clause:</b> Fetches records based on logic and conditions. This also allows you to sort and paginate your results.</li>
    <li><b>Cell Range:</b> Fetches a block of spreadsheet cells defined by spreadsheet-style notation, such as `A2:B7`.</li>
  </ul>
</dd>

<p>The following settings are available when <b>Filter Format</b> is set to <b>Where Clause</b>:</p>

#### Filter By

<dd>This is used to build expressions that return records when a column value meets some criteria. You can evaluate records using `in`, `not in`, `contains`, and logic operators.</dd>
<dd>
  <i>Buttons:</i>
  <ul>
    <li><b>Add Condition:</b> Adds another simple single-line expression.</li>
    <li><b>Cell Range:</b> Adds a nested expression with multiple levels of And/Or statements.</li>
  </ul>
</dd>

#### Sort By

<dd>Sorts the resulting records according to the specified column.</dd>
<dd>
  <i>Buttons:</i>
  <ul>
    <li><b>Add Parameter:</b> Adds another column for sorting on multiple levels.</li>
  </ul>
</dd>

#### Pagination Limit

<dd>Limits the number of records you can receive in a single response. Use with <b>Pagination Offset</b> to implement pagination for large datasets.</dd>

#### Pagination Offset

<dd>Allows skipping a given number of records before returning results. Use with <b>Pagination Limit</b> to implement pagination for large datasets.</dd>

<p>The following setting is available when <b>Filter Format</b> is set to <b>Cell Range</b>:</p>

#### Cell Range

<dd>This mode uses Google Sheets' row number and column letter syntax (such as `A1-B14`) to select cells. Even when the column header row isn't part of your selection, your fetched data still includes the column labels for your selected cells. This mode doesn't allow conditions, sorting, or pagination.</dd>

### Insert Many

This command inserts multiple **Sheet Row(s)** entities. The following section lists all the fields available for the **Insert Many** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Inserts several records as a rows in the spreadsheet.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
  The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Row Objects

<dd>Expects an array of JSON-formatted objects whose key/value pairs represent columns and values to add to the spreadsheet.</dd>
<dd>
<i>Example:</i>
<pre>{`[{
    "name": "Kim",
    "email": "hkim@example.com",
    "status": "accepted"
},
{
  "name": "Amal",
  "email": "samal@example.com",
  "status": "accepted"
}]`}</pre>
</dd>

### Update Many

This command updates multiple **Sheet Row(s)** entities. The following section lists all the fields available for the **Update Many** command.

#### Entity

<dd>Sets which entity type to query.</dd><br/>
<dd>
<i>Options:</i>
  <ul>
    <li><b>Sheet Row(s):</b> Updates multiple existing rows in the spreadsheet.</li>
  </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

#### Sheet Name

<dd> The name of the page you'd like to query from your spreadsheet.</dd>

#### Table Heading Row Index

<dd>
  The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
</dd>

#### Update Row Object(s)

<dd>An array of JSON-formatted objects whose key/value pairs represent the columns and values from your table record. You must include a <code>rowIndex</code> key in each row object to specify which record to update in the spreadsheet. Note that the <code>rowIndex</code> property of your row objects in Appsmith refers to its index in the array of table records, not the record's row number in the Google spreadsheet.</dd>

<dd>

*Example:*

```js
{{
        Table1.updatedRows.map(row => {    // includes rowIndex key in each object
            return row.allFields
        })
 }}
 ```

 See [Update multiple rows](/connect-data/how-to-guides/insert-and-update-data-in-google-sheets#update-multiple-rows) guide.

</dd>


## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See also
- [Fetch and Filter Data from Google Sheets](/connect-data/how-to-guides/filter-data-google-sheet)
- [Insert and Update Data in Google Sheets](/connect-data/how-to-guides/insert-and-update-data-in-google-sheets)