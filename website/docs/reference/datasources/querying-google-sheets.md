---
sidebar_position: 7
toc_max_heading_level: 4
---

# Google Sheets

This page describes how to connect your application to your Google Sheets account and query your spreadsheets.

## Connect to Google Sheets

To add a Google Sheets datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Google Sheets** button. Your datasource is created and you are taken to a screen to configure its settings.

### Scope

![](/img/google_sheets_scope.png)

The **Scope** setting defines what type of privileges your app has while querying your spreadsheets. Use this option to allow the minimum necessary privileges for your app's function to reduce the risk to your data.

- **Read/Write | Selected Google Sheets**: Your app only has read and write access to the spreadsheets that it creates. Spreadsheets on the Google account created by other means aren't visible or mutable by your queries.

- **Read/Write | All Google Sheets**: Your app has read and write access to all spreadsheets on your Google account, regardless of how or when they were created.

- **Read Files | All Google Sheets**: Your app has read-only access to all spreadsheets on your Google account, regardless of how or when they were created.

#### Save and authorize

Click on the **Save and Authorize** button once you have selected your **Scope**. You'll be directed to a Google Login screen, where you can log into the account whose spreadsheets you’d like to access.

On a successful login, a screen appears for granting Appsmith permissions for managing your Google Sheets. Click "Allow" to allow Appsmith to manage your spreadsheets.

## Common queries

<figure>
  <img src="/img/google-sheets-query-page.png" style={{width: "100%", height: "auto"}} alt="Configuring a query from the query screen."/>
  <figcaption align="center"><i>Configuring a query from the query screen.</i></figcaption>
</figure>


### Fetch rows

Use this operation to request data from your existing Google Sheets.


Fetching sheet rows is the way to get your dataset records into your app. In addition to the fields identifying which spreadsheet to query, you may provide extra filtering parameters to search for specific records.

Use the **Columns** field to specify which particular columns of the records to return. You can use the dropdown menu to search and select columns, or you can enable JS and provide an array of column names to request.

**Filter Format** provides two options for filtering your spreadsheet records:

The **Cell range** filter format selects a specific block of cells from the spreadsheet using Google Sheets' row number and column letter syntax (for example, `A1-B14`). Even when the column header row isn't part of your selection, your fetched data still includes the column labels for your selected cells.

Use the **Where Clause** filter format to filter based on your data. These fields enable you to return records conditionally, sort on multiple levels, and set up pagination.

In the **Filter by** fields, you can build expressions that return records only when a given column value meets some logical criteria. You can evaluate values using logical operators, "in," "not in," and "contains." The **Add Condition** button adds another simple single-line expression; **Add Group Condition** enables you to write a nested expression with multiple levels of And/Or statements.

In the **Sort By** field, you can choose a column to use for sorting your results. The **Add Parameter** button adds multiple levels of sorting.

To limit the amount of records you receive at once, use **Pagination Limit**. **Pagination Offset** allows skipping a given number of records before returning results; these two fields together enable you to implement pagination for large datasets.

---

**Example**: fetch all records from a table `users` on `Sheet1` of `UsersSpreadsheet`, 10 records at a time, and put them into a Table widget `UsersTable`.

<figure>
  <img src="/img/google-sheets-fetch-many.png" style={{width: "100%", height: "auto"}} alt="Configuring a Fetch Many query."/>
  <figcaption align="center"><i>Configuring a Fetch Many query.</i></figcaption>
</figure>

Create a query called `FetchUsers` based on your Google Sheets datasource. This query should use the **Fetch Many** operation for the **Sheet Rows** entity, and be configured with the spreadsheet and sheet name in their appropriate fields. Set the **Filter Format** to **Where Clause** to access the pagination settings.

This query doesn't require filtering or sorting the data, so **Filter By** and **Sort By** can be left blank.

Set the **Pagination Limit** to 10 to limit the number of records you receive at once.

To continue setting up pagination for your data, you should use your Table widget's `pageOffset` property in the **Pagination Offset** field. To learn more about pagination, read [server-side pagination](#reference/widgets/table#server-side-pagination).

In the **Table Data** property of your Table widget, bind the result of your query:

```javascript
// in the Table Data property of UsersTable
{{ FetchUsers.data }}
```

### Insert a row

Use **Insert** operations to create a new spreadsheet, or to add a new record to an existing spreadsheet.

If your Google Sheets datasource's **Scope** is set to **Read/Write | Selected Google Sheets**, you have to use an insert query to create any spreadsheets that you'd like your app to access.

**Insert One** with the **Sheet Rows** entity adds a single record to your selected spreadsheet.

---

**Example**: create a new record in a table `users` on `Sheet1` of `UsersSpreadsheet`, with columns for `name`, `gender`, and `email`.

Create your query called `InsertNewUser` based on your Google Sheets datasource. This query should use the **Insert One** operation for the **Sheet Rows** entity. Enter the appropriate values for **Spreadsheet**, **Sheet Name**, and **Table Heading Row Index**.

To gather data for the new record, you build a [Form](/reference/widgets/form) on the canvas called `NewUserForm` containing:

- An [input widget](/reference/widgets/input) called "NameInput" for the name,
- A [Select widget](/reference/widgets/select) called "GenderSelect" for the gender,
- An input widget called "EmailInput" for the email.

Once these form fields are filled out, you can add their values to your query like below:

```javascript
// in the Row Object field of your query
{{
  {
    "name": NewUserForm.data.NameInput,
    "gender": NewUserForm.data.GenderSelect,
    "email": NewUserForm.data.EmailInput
  }
}}

```

When your query is executed, the new record is inserted as the new highest index in your dataset (at the bottom of the spreadsheet).

### Update a row

:::caution important
When you update a row, your row object must include a `rowIndex` key with a number to specify which record in the spreadsheet to update.
:::

### Delete a row

TODO

## Operations

**Operation** sets the type of action you want to perform with your query. A "Spreadsheet" is a document, a "Sheet" is a page of a spreadsheet, and "Sheet Rows" are horizontal records in a sheet.

| **Operation**                        | **Description**                           | **Available entities:**       |
| ------------------------------------ | ----------------------------------------- | ----------------------------- |
| [**Fetch Details**](#fetch-details)  | Fetches metadata about a spreadsheet. | [Spreadsheet](#fetch-details-spreadsheet)  |
| [**Insert One**](#insert)            | Inserts a single new row into a spreadsheet, or creates a new spreadsheet.|  [Sheet Rows](#insert-sheet-row)<br/>[Spreadsheet](#insert-spreadsheet)  |
| [**Update One**](#update)            | Updates a record in a spreadsheet.        | [Sheet Rows](#update-sheet-row) |
| [**Delete One**](#delete)            | Deletes a single record, sheet, or spreadsheet. | [Sheet Rows](#delete-sheet-row)<br/>[Spreadsheet](#delete-spreadsheet)<br/>[Sheet](#delete-sheet) |
| [**Fetch Many**](#fetch-many)        | Fetches records from a spreadsheet, or fetches all existing spreadsheets in your account. | [Sheet Rows](#fetch-many-sheet-rows)<br/>[Spreadsheet](#fetch-many-spreadsheet)        |
| [**Insert Many**](#insert-many)      | Inserts several new rows into a spreadsheet. | [Sheet Rows](#insert-many-sheet-rows) |
| [**Update Many**](#update-many)      | Updates multiple existing records in a spreadsheet.  | [Sheet Rows](#update-many-sheet-rows)  |

All the operation types have some of these common fields that identify where in your spreadsheets your query should access:

| **Configuration Field**     | **Description**                                                               |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Entity**                  | Select which entity type you want to query. (Sheet Rows, Spreadsheet, Sheet). |
| **Spreadsheet**             | Select which spreadsheet you want to query from.                              |
| **Sheet Name**              | Select which sheet you want to query from the spreadsheet.                    |
| **Table Heading Row Index** | Provide the index of the row in the spreadsheet that contains the headings or labels for your table columns. The first row of the spreadsheet is row 1.                                                     |

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) page for assistance.

If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)