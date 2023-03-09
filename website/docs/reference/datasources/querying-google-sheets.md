---
sidebar_position: 7
toc_max_heading_level: 4
---

# Google Sheets

This page describes how to connect your application to your Google Sheets account and query your spreadsheets.

## Connect to Google Sheets

To add a Google Sheets datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Google Sheets** button. Your datasource is created and you are taken to a screen to configure its settings.

## Configuration

Configure the Google Sheets Datasource as illustrated below:

### Scope

![](/img/google_sheets_scope.png)

The **Scope** setting defines what type of privileges your app has while querying your spreadsheets. Use this option to allow the minimum necessary privileges for your app's function to reduce the risk to your data.

- **Read/Write | Selected Google Sheets**: Your app only has read and write access to the spreadsheets that it creates. Spreadsheets on the Google account created by other means aren't visible or mutable by your queries.

- **Read/Write | All Google Sheets**: Your app has read and write access to all spreadsheets on your Google account, regardless of how or when they were created.

- **Read Files | All Google Sheets**: Your app has read-only access to all spreadsheets on your Google account, regardless of how or when they were created.

#### Save and authorize

Click on the **Save and Authorize** button once you have selected your **Scope**. You'll be directed to a Google Login screen, where you can log into the account whose spreadsheets you’d like to access.

On a successful login, a screen appears for granting Appsmith permissions for managing your Google Sheets. Click "Allow" to allow Appsmith to manage your spreadsheets.

## Create queries

<figure>
  <img src="/img/google-sheets-query-page.png" style={{width: "100%", height: "auto"}} alt="Configuring a query from the query screen."/>
  <figcaption align="center"><i>Configuring a query from the query screen.</i></figcaption>
</figure>

You can create [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to your spreadsheets by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Google Sheets datasource. You'll be brought to a new screen to set up your query.

### Operations

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

### Fetch details

Use this operation to request metadata about one existing spreadsheet.

##### Spreadsheet {#fetch-details-spreadsheet}

Provide the name of the target spreadsheet to fetch information about it such as its name, creation date, modified date, owner, and more.

### Fetch many

Use this operation to request data from your existing Google Sheets. You can fetch the following entities:

- **Sheet rows**: Existing rows from a spreadsheet
- **Spreadsheets**: A list of all existing spreadsheets

##### Sheet rows {#fetch-many-sheet-rows}

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

##### Spreadsheet {#fetch-many-spreadsheet}

Using the **Fetch Many** operation with the **Spreadsheet** entity returns an array of all the spreadsheets available on your Google account. Each spreadsheet is represented by an object with that spreadsheet's URL, name, and id.

### Insert

Use **Insert** operations to create a new spreadsheet, or to add a new record to an existing spreadsheet.

If your Google Sheets datasource's **Scope** is set to **Read/Write | Selected Google Sheets**, you have to use an insert query to create any spreadsheets that you'd like your app to access.

##### Spreadsheet {#insert-spreadsheet}

**Insert One** with the **Spreadsheet** entity creates a single new spreadsheet document. When creating the spreadsheet, you can choose to immediately add data (such as a row with column headings) in the same request by filling the **Row Objects** field. This field should contain an array of row objects.

:::caution important
When you create a spreadsheet with rows, your initial rows must include a `rowIndex` key with a number to specify how to order them.
:::

**Example**: create a new spreadsheet called `UsersSpreadsheet` with a row for the column headings `name`, `gender`, and `email`.

Create your query called `InsertSpreadsheet` based on your Google Sheets datasource. This query should use the **Insert One** operation for the **Spreadsheet** entity. In the **Spreadsheet Name** field, enter "UsersSpreadsheet."

In the **Row Objects** field, add an array with an object containing your column headings with blank strings as their values:

```javascript
// in the Row Objects field
[{
  "rowIndex": 0,
  "name": "",
  "gender": "",
  "email": ""
}]
```

When you check your Google Sheets account, you should find a new spreadsheet `UsersSpreadsheet` populated with the three column headings in the top row.

##### Sheet rows {#insert-sheet-rows}

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

#### Insert many

Use this operation when you are inserting multiple new records into a spreadsheet with a single query. You can't use this to create multiple new spreadsheets at once.

##### Sheet rows {#insert-many-sheet-rows}



---

**Example**: create multiple new records in a table `users` on `Sheet1` of `UsersSpreadsheet`, with columns for `name`, `gender`, and `email`.

Consider a situation where you have a bulk amount of user data from another API request called `GetBulkUsers`, and you'd like to pipe this data into your Google spreadsheets.

Create a query called `InsertNewUsers` based on your Google Sheets datasource. This query should use the **Insert Many** operation for the **Sheet Rows** entity. Enter the appropriate values for **Spreadsheet**, **Sheet Name**, and **Table Heading Row Index**.

In the **Row Objects** field, write a `map()` function that returns an array of user objects with the relevant keys for your spreadsheet:

```javascript
// in the Row Object field of your query
{{
  GetBulkUsers.map(user => {
    return {
      "name": user.name,
      "gender": user.gender,
      "email": user.email
    }
  })
}}
```

When your query is executed, each new record is inserted at the highest index in your dataset (at the bottom of the spreadsheet).

### Update

Use this operation when you want to submit an existing record with an updated value.

##### Sheet row {#update-sheet-row}

:::caution important
When you update a row, your row object must include a `rowIndex` key with a number to specify which record in the spreadsheet to update.
:::

**Example**:

#### Update many

Use this operation when you want submit multiple records with updated values.

##### Sheet rows {#update-many-sheet-rows}

**Example**:

### Delete

Use this record to delete a single existing spreadsheet, sheet, or record. You can only delete a single entity per query call.

##### Sheet row {#delete-sheet-row}

**Example**:

##### Spreadsheet {#delete-spreadsheet}

**Example**:

##### Sheet {#delete-sheet}

**Example**:

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) page for assistance.

If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)