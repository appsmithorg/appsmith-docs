---
sidebar_position: 7
---

# Google Sheets

This page describes how to connect your application to your Google Sheets account and query your spreadsheets.

## Connect Google Sheets

To add a Google Sheets datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Google Sheets** button. Your datasource is created and you are taken to a screen to configure its settings.

### Configuration parameters

<figure>
  <img src="/img/gsheets_datasource_config.png" style={{width: "100%", height: "auto"}} alt="Configuring a new Google Sheets datasource."/>
  <figcaption align="center"><i>Configuring a new Google Sheets datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Permissions | Scope</b></dt>
  <dd>Defines the privileges your app has when querying spreadsheets. Use this to allow the minimum necessary privileges for your app's functions.</dd>
  <dd><i>Options:</i>
    <ul>
     <li><b>Read / Write / Delete | Selected Google Sheets:</b> Your app has read, write, and delete access only for the sheets that you specify while authorizing the datasource.</li>
     <li><b>Read / Write / Delete | All Google Sheets:</b> Your app has read, write, and delete access for all sheets on your Google account.</li>
     <li><b>Read / Write | All Google Sheets:</b> Your app has read and write (but not delete) access for all sheets on your Google account.</li>
     <li><b>Read | All Google Sheets:</b> Your app has read-only access to all sheets on your Google account.</li>
    </ul>
  </dd>  
</dl>

Click **Save and Authorize** to confirm your choice and be taken to Google for authorization and selecting your spreadsheets. 

## Query Google Sheets

<figure>
  <img src="/img/google-sheets-query-page.png" style={{width: "100%", height: "auto"}} alt="Configuring a query from the query screen."/>
  <figcaption align="center"><i>Configuring a query from the query screen.</i></figcaption>
</figure>

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to Google Sheets by selecting the **+ New Query**  button on the Google Sheets datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Google Sheets datasource. You'll be brought to a new query screen where you can configure your request.

## Fetch rows

Use the **Fetch Many** operation with the **Sheet rows** entity to pull your spreadsheet records into your app. You can configure this query with the fields below to fetch records that meet specific conditions.

### Filter format

Under **Filter Format**, you can choose one of two styles of selecting a subset of your data:

- **Where Clause**: fetch records based on conditions. Also enables sorting and pagination.
- **Cell Range**: fetch a block of spreadsheet cells, defined by spreadsheet-style notation (like "A2:B7").

#### Where clause

These fields enable you to return records conditionally, sort on multiple levels, and set up pagination.

##### Filter and sort

In the **Filter by** fields, you can build expressions that return records when a column value meets some criteria. You can evaluate them using `in`, `not in`, `contains`, and logic operators.

The **Add Condition** button adds another simple single-line expression. **Add Group Condition** adds a nested expression with multiple levels of And/Or statements.

In the **Sort By** field, you can choose a column to use for sorting your results. The **Add Parameter** button adds multiple levels of sorting.

##### Pagination

To limit the amount of records you receive at once, use **Pagination Limit**.

**Pagination Offset** allows skipping a given number of records before returning results; these two fields together enable you to implement pagination for large datasets.

To learn more about using paginating your data in tables, read [offset-based pagination](/reference/widgets/table#offset-based-pagination).

#### Cell range

If you need to select contiguous block of cells based on their location in the spreadsheet instead of their values, use the **Cell Range** filter format. This mode doesn't allow conditions, sorting, or pagination.

This mode uses Google Sheets' row number and column letter syntax (for example, `A1-B14`) to select cells. Even when the column header row isn't part of your selection, your fetched data still includes the column labels for your selected cells.

---

**Example**: fetch all records from a table `users` on `Sheet1` of `UsersSpreadsheet`, 10 records at a time, and put them into a Table widget `UsersTable`.

<figure>
  <img src="/img/google-sheets-fetch-many.png" style={{width: "100%", height: "auto"}} alt="Configuring a Fetch Many query."/>
  <figcaption align="center"><i>Configuring a Fetch Many query.</i></figcaption>
</figure>

**Setup**: create a query called `FetchUsers` based on your Google Sheets datasource. This query should use the **Fetch Many** operation for the **Sheet Rows** entity, and be configured with the spreadsheet and sheet name in their appropriate fields. Set the **Filter Format** to **Where Clause** to access the pagination settings.

This query doesn't require filtering or sorting the data, so **Filter By** and **Sort By** can be left blank.

Set the **Pagination Limit** to 10 to limit the number of records you receive at once.

To continue setting up pagination for your data, you can use your Table widget's `pageOffset` property in the **Pagination Offset** field. To learn more about pagination, read [server-side pagination](#reference/widgets/table#server-side-pagination).

In the **Table Data** property of your Table widget, bind the result of your query:

```javascript
// in the Table Data property of UsersTable
{{ FetchUsers.data }}
```

Your table should fill with data when the query is run.

## Insert a row

Use **Insert** operations to create a new spreadsheet, or to add a new record to an existing spreadsheet.

<!-- HIDDEN BY FEATURE FLAG
If your Google Sheets datasource's **Scope** is set to **Read/Write | Selected Google Sheets**, you have to use an insert query to create any spreadsheets that you'd like your app to access.
-->

To insert a record, supply an object in the query's **Row Object** field with keys matching the spreadsheet's column headings.

---

**Example**: create a new record in a table `users` on `Sheet1` of `UsersSpreadsheet`, with columns for `name`, `date_of_birth`, and `employee_id`.

**Setup**: create your query called `InsertNewUser` based on your Google Sheets datasource. This query should use the **Insert One** operation for the **Sheet Rows** entity. Enter the appropriate values for **Spreadsheet**, **Sheet Name**, and **Table Heading Row Index**.

To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewUserForm`. You should already have fields for `name`, `date_of_birth`, and `employee_id`.

In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

```javascript
// Submit button's onClick event
{{ InsertNewUser.run() }}
```

Once these form fields are filled out, you can add their values to your query in the **Row Object** field like below:

```javascript
// in the Row Object field of your query
{{
  {
    "name": NewUserForm.formData.name,
    "date_of_birth": NewUserForm.formData.date_of_birth,
    "employee_id": NewUserForm.formData.employee_id
  }
}}

```

When the Submit button is clicked, your query is executed and the new record is inserted as the new highest index in your dataset (at the bottom of the spreadsheet).

## Update a row

Use **Update** operations to modify existing records in your spreadsheet.

To update a record, supply an object with updated values in the query's **Row Object** field. Include a `rowIndex` key that matches your original record.

:::caution important
When you update a row, your row object must include a `rowIndex` key with a number to specify which record in the spreadsheet to update. `rowIndex` refers to the index of the record in the array of table records, *not* the record's row number in the spreadsheet.
:::

---

**Example**: modify a record in a table `users` on `Sheet1` of `UsersSpreadsheet`, with columns for `name`, `date_of_birth`, and `employee_id`.

**Setup**: create your query called `UpdateUser` based on your Google Sheets datasource. This query should use the **Update One** operation for the **Sheet Rows** entity. Enter the appropriate values for **Spreadsheet**, **Sheet Name**, and **Table Heading Row Index**. Finally, You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your spreadsheet data from a **Fetch** query.

Create a [JSON Form widget](/reference/widgets/json-form) to use for submitting your updated data. It should come with fields for `name`, `date_of_birth`, and `employee_id`.

When a row is selected in the table, it would be helpful if the JSON Form's fields pre-filled with the row's existing data. To implement this, match the keys in the JSON Form's **Source Data** property with the values from the table row's cells:

```javascript
// JSON Form's Source Data property
{{
  {
    "name": UsersTable.selectedRow.name,
    "date_of_birth": UsersTable.selectedRow.date_of_birth,
    "employee_id": UsersTable.selectedRow.employee_id
  }
}}
```

In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

```javascript
// Submit button's onClick event
{{ UpdateUser.run() }}
```

To add your modified row data to your query, reference them in its **Row Object** field. You must include the `rowIndex` key in your submission to indicate which record to update. If your data came from a Google Sheets **Fetch** operation, this key was returned in the original response:

```javascript
// in the Row Object field of your query
{{
  {
    "rowIndex": UsersTable.selectedRow.rowIndex, // include the rowIndex key
    "name": NewUserForm.formData.name,
    "date_of_birth": NewUserForm.formData.date_of_birth,
    "employee_id": NewUserForm.formData.employee_id
  }
}}
```

When the Submit button is clicked, your query is executed and the record is updated in your spreadsheet.

## Delete a row

Use **Delete** operations to remove a record from your spreadsheet.

To delete a record, supply the `rowIndex` value of the record to delete. `rowIndex` refers to the index of the record in the array of table records, *not* the record's row number in the spreadsheet.

---

**Example**: delete a record from a spreadsheet `users`.

**Setup**: create your query called `DeleteUser` based on your Google Sheets datasource. This query should use the **Update One** operation for the **Sheet Rows** entity. Enter the appropriate values for **Spreadsheet**, **Sheet Name**, and **Table Heading Row Index**. Finally, You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your spreadsheet data from a **Fetch** query.

Create a [Button widget](/reference/widgets/button) on the canvas and update its **Label** to "Delete." Set its **onClick** event to execute your `DeleteUser` query:

```javascript
// in the Delete button's onClick event
{{ DeleteUser.run() }}
```

To delete a record, you need only provide the `rowIndex` of the record to delete. In your `DeleteUser` query's **Row Index** field, bind the value of the selected row of the `UsersTable`:

```javascript
// DeleteUser query's Row Index field
{{ UsersTable.selectedRow.rowIndex }}
```

Now when the button is clicked, the query is run and the corresponding row is deleted from your spreadsheet.

## Operations

**Operation** sets the type of action you want to perform with your query. A "Spreadsheet" is the document, a "Sheet" is a page of a spreadsheet, and "Sheet Rows" are horizontal records in a sheet.

| **Operation**                        | **Description**                           | **Available entities:**       |
| ------------------------------------ | ----------------------------------------- | ----------------------------- |
| **Fetch Details**  | Fetches metadata about a spreadsheet. | Spreadsheet  |
| **Insert One**            | Inserts a single new row into a spreadsheet, or creates a new spreadsheet.|  Sheet Rows<br/>Spreadsheet  |
| **Update One**            | Updates a record in a spreadsheet.        | Sheet Rows |
| **Delete One**            | Deletes a single record, sheet, or spreadsheet. | Sheet Rows<br/>Spreadsheet<br/>Sheet |
| **Fetch Many**        | Fetches records from a spreadsheet, or fetches all existing spreadsheets in your account. | Sheet Rows<br/>Spreadsheet        |
| **Insert Many**      | Inserts several new rows into a spreadsheet. | Sheet Rows |
| **Update Many**      | Updates multiple existing records in a spreadsheet.  | Sheet Rows  |

All the operation types have some of these common fields that identify where in your spreadsheets your query should access:

| **Configuration Field**     | **Description**                                                               |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Entity**                  | Select which entity type you want to query: <br/>**Sheet Rows**: Horizontal records in the spreadsheet.<br/>**Spreadsheet**: Document containing cell matrix.<br/>**Sheet**: A page of a spreadsheet. |
| **Spreadsheet**             | Select which spreadsheet you want to query from.                              |
| **Sheet Name**              | Select which sheet you want to query from the spreadsheet.                    |
| **Table Heading Row Index** | Provide the index of the row in the spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is row 1.                                                     |

## Troubleshooting

If you are experiencing difficulties, you can refer to the [troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/) page for assistance.

If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
