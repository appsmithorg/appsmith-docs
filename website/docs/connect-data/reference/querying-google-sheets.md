---
sidebar_position: 7
description: Connect Appsmith to Google Sheets and create queries.
---

# Google Sheets

This page provides information for connecting Appsmith to Google Sheets and for reading and writing data in your applications.

## Connection parameters

<figure>
  <img src="/img/gsheets_datasource_config.png" style={{width: "100%", height: "auto"}} alt="Configuring a new Google Sheets datasource."/>
  <figcaption align="center"><i>Configuring a new Google Sheets datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Permissions | Scope:</b></dt>
  <dd>Defines the privileges your app has when querying spreadsheets. Use this to allow the minimum necessary privileges for your app's functions.</dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Read / Write / Delete | Selected Google Sheets:</b> Your app has read, write, and delete access only for the sheets that you specify while authorizing the datasource.</li>
     <li><b>Read / Write / Delete | All Google Sheets:</b> Your app has read, write, and delete access for all sheets on your Google account.</li>
     <li><b>Read / Write | All Google Sheets:</b> Your app has read and write (but not delete) access for all sheets on your Google account.</li>
     <li><b>Read | All Google Sheets:</b> Your app has read-only access to all sheets on your Google account.</li>
    </ul>
  </dd>  
</dl>

Clicking **Save and Authorize** takes you to a Google login where you can authorize your account and select your sheets.

## Query Google Sheets

The following section is a reference guide that provides a complete description of all the parameters to connect to Google Sheets.

<figure>
  <img src="/img/google-sheets-query-page.png" style={{width: "100%", height: "auto"}} alt="Configuring a query from the query screen."/>
  <figcaption align="center"><i>Configuring a query from the query screen.</i></figcaption>
</figure>

### Fetch Details

This command fetches metadata for a given **Spreadsheet** entity. The following section lists all the fields available for the **Fetch Details** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Spreadsheet:</b> Returns metadata for a spreadsheet document.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd>

</dl>

### Insert One

This command inserts a given entity type: **Sheet Row(s)** or **Spreadsheet**. The following section lists all the fields available for the **Insert One** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Sheet Row(s):</b> Inserts a single record as a row in the spreadsheet.</li>
     <li><b>Spreadsheet:</b> Creates a new spreadsheet document. Optionally, you can use the <b>Row Objects</b> field to provide rows that should be created along with the document.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd><br />

  <dt><b>Sheet Name</b></dt>
  <dd> The name of the page you'd like to query from your spreadsheet.
  </dd><br />

  <dt><b>Table Heading Row Index</b></dt>
  <dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
  </dd><br />

  <dt><b>Row Object</b></dt>
  <dd>Available when the <b>Entity</b> is <b>Sheet Row(s)</b>. This expects a JSON-formatted object whose key/value pairs represent the columns and values from your table record.</dd><br/>

  <dt><b>Row Objects</b></dt>
  <dd>Available when the <b>Entity</b> is <b>Spreadsheet</b>. This expects an array of JSON-formatted objects whose key/value pairs represent columns and values to add to your new spreadsheet when it is created.</dd>

</dl>

### Update One

This command updates a **Sheet Row(s)** entity. The following section lists all the fields available for the **Update One** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Sheet Row(s):</b> Updates a single existing row in the spreadsheet.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd><br />

  <dt><b>Sheet Name</b></dt>
  <dd> The name of the page you'd like to query from your spreadsheet.
  </dd><br />

  <dt><b>Table Heading Row Index</b></dt>
  <dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
  </dd><br />

  <dt><b>Update Row Object</b></dt>
  <dd>A JSON-formatted object whose key/value pairs represent the columns and values from your table record. You must include a <code>rowIndex</code> key to specify which record to update. Note that the <code>rowIndex</code> property of your row objects in Appsmith refers to its index in the array of table records, not the record's row number in the Google spreadsheet.</dd>

</dl>

### Delete One

This command deletes a given entity: **Sheet Row(s)**, **Spreadsheet**, or **Sheet**. The following section lists all the fields available for the **Delete One** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Sheet Row(s):</b> Deletes a single row of a spreadsheet.</li>
     <li><b>Spreadsheet:</b> Deletes a new spreadsheet document.</li>
     <li><b>Sheet:</b> Deletes a page from a spreadsheet document.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd><br />

  <dt><b>Sheet Name</b></dt>
  <dd> The name of the page you'd like to query from your spreadsheet.
  </dd><br />

  <dt><b>Row Index</b></dt>
  <dd>The index of the record to delete from the spreadsheet. Note that the <code>rowIndex</code> property of your row objects in Appsmith refers to its index in the array of table records, not the record's row number in the Google spreadsheet.</dd>

</dl>

### Fetch Many

This command fetches a given entity type: **Sheet Row(s)** or **Spreadsheet**. The following section lists all the fields available for the **Fetch Many** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Sheet Row(s):</b> Fetches a subset of horizontal records from a page of a spreadsheet document.</li>
     <li><b>Spreadsheet:</b> Fetches a list of existing spreadsheet documents.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd><br />

  <dt><b>Sheet Name</b></dt>
  <dd> The name of the page you'd like to query from your spreadsheet.
  </dd><br />

  <dt><b>Table Heading Row Index</b></dt>
  <dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
  </dd><br />

  <dt><b>Filter Format</b></dt>
  <dd>Sets the method of selecting records from your spreadsheet.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Where Clause:</b> Fetches records based on logic and conditions. This also allows you to sort and paginate your results.</li>
     <li><b>Cell Range:</b> Fetches a block of spreadsheet cells defined by spreadsheet-style notation, such as `A2:B7`.</li>
    </ul>
  </dd><br />

  <p>The following settings are available when <b>Filter Format</b> is set to <b>Where Clause</b>:</p><br />

  <dt><b>Filter By</b></dt>
  <dd>This is used to build expressions that return records when a column value meets some criteria. You can evaluate records using `in`, `not in`, `contains`, and logic operators.</dd>
  <dd><i>Buttons:</i>
    <ul>
     <li><b>Add Condition:</b> Adds another simple single-line expression.</li>
     <li><b>Cell Range:</b> Adds a nested expression with multiple levels of And/Or statements.</li>
    </ul>
  </dd><br />

  <dt><b>Sort By</b></dt>
  <dd>Sorts the resulting records according to the specified column.</dd>
  <dd><i>Buttons:</i>
    <ul>
     <li><b>Add Parameter:</b> Adds another column for sorting on multiple levels.</li>
    </ul>
  </dd><br />

  <dt><b>Pagination Limit</b></dt>
  <dd>Limits the number of records you can receive in a single response. Use with <b>Pagination Offset</b> to implement pagination for large datasets.</dd><br/>

  <dt><b>Pagination Offset</b></dt>
  <dd>Allows skipping a given number of records before returning results. Use with <b>Pagination Limit</b> to implement pagination for large datasets.</dd><br/>

  <p>The following setting is available when <b>Filter Format</b> is set to <b>Cell Range</b>:</p><br />

  <dt><b>Cell Range</b></dt>
  <dd>This mode uses Google Sheets' row number and column letter syntax (such as `A1-B14`) to select cells. Even when the column header row isn't part of your selection, your fetched data still includes the column labels for your selected cells. This mode doesn't allow conditions, sorting, or pagination.</dd>

</dl>

### Insert Many

This command inserts multiple **Sheet Row(s)** entities. The following section lists all the fields available for the **Insert Many** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Sheet Row(s):</b> Inserts several records as a rows in the spreadsheet.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd><br />

  <dt><b>Sheet Name</b></dt>
  <dd> The name of the page you'd like to query from your spreadsheet.
  </dd><br />

  <dt><b>Table Heading Row Index</b></dt>
  <dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
  </dd><br />

  <dt><b>Row Objects</b></dt>
  <dd>Expects an array of JSON-formatted objects whose key/value pairs represent columns and values to add to the spreadsheet.</dd>

</dl>

### Update Many

This command updates multiple **Sheet Row(s)** entities. The following section lists all the fields available for the **Update Many** command.

<dl>
  <dt><b>Entity</b></dt>
  <dd>Sets which entity type to query.
  </dd><br/>
  <dd><i>Options:</i>
    <ul>
     <li><b>Sheet Row(s):</b> Updates multiple existing rows in the spreadsheet.</li>
    </ul>
  </dd><br />

  <dt><b>Spreadsheet</b></dt>
  <dd> The name of the spreadsheet document you'd like to query.
  </dd><br />

  <dt><b>Sheet Name</b></dt>
  <dd> The name of the page you'd like to query from your spreadsheet.
  </dd><br />

  <dt><b>Table Heading Row Index</b></dt>
  <dd>The index of the row in your spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is index 1.
  </dd><br />

  <dt><b>Update Row Object(s)</b></dt>
  <dd>An array of JSON-formatted objects whose key/value pairs represent the columns and values from your table record. You must include a <code>rowIndex</code> key in each row object to specify which record to update in the spreadsheet. Note that the <code>rowIndex</code> property of your row objects in Appsmith refers to its index in the array of table records, not the record's row number in the Google spreadsheet.</dd>
</dl>

## Troubleshooting

If you are experiencing difficulties, you can refer to the [troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/) page for assistance.

If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).