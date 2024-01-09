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

<dd>Sets which entity type to query.</dd><br/>
<dd>
  <i>Options:</i>
    <ul>
        <li><b>Spreadsheet:</b> Returns metadata for a spreadsheet document.</li>
    </ul>
</dd>

#### Spreadsheet

<dd> The name of the spreadsheet document you'd like to query.</dd>

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.
