---
sidebar_position: 7
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


#### Read/Write | Selected Google Sheets


#### Read/Write | All Google Sheets


#### Read Files | All Google Sheets


#### Save and authorize

Click on the **Save and Authorize** button once you have selected your **Scope**. You'll directed to a Google Login screen, where you can log into the account whose spreadsheets you’d like to access.

On a successful login, a screen appears which asks you to grant Appsmith permissions for managing your Google Sheets. Click "Allow" to allow Appsmith to manage your spreadsheets.

## Operations

Operation lets you define the type of action you want to perform on Google Sheets (Spreadsheets or individual Sheets available in a spreadsheet). Following is the list of available operations:

| **Operation**          | **Description**                           | **Available for:**             |
| ---------------------- | ----------------------------------------- | ----------------------------- |
| [**Fetch Details**](./querying-google-sheets.md#fetch-details)      | Use it to fetch details like the name of the spreadsheet, created date and time, and more | Spreadsheet                   |
| [**Insert One**](./querying-google-sheets.md#insert-one)            | Use it to insert a single row in a sheet or add a new spreadsheet                         | Sheet Rows<br/>Spreadsheet        |
| [**Update One**](./querying-google-sheets.md#update-one)            | Use it to update rows in a given sheet in a spreadsheet                                   | Sheet Rows                    |
| [**Delete One**](./querying-google-sheets.md#delete-one)            | Use it to delete a spreadsheet or a sheet or row in a sheet                               | Sheet Rows<br/>Spreadsheet<br/>Sheet |
| [**Fetch Many**](./querying-google-sheets.md#fetch-many-sheet-rows) | Use it to fetch data from a sheet or all the spreadsheets available in your account.      | Sheet Rows<br/>Spreadsheet        |
| [**Insert Many**](./querying-google-sheets.md#insert-many)          | Use it to insert multiple rows in a given sheet                                           | Sheet Rows                    |
| [**Update Many**](./querying-google-sheets.md#update-many)        | Use it to update multiple rows in a given sheet                                           | Sheet Rows                    |

## Create queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to your spreadsheets by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Google Sheets datasource. You'll be brought to a new screen to set up your query.

### Fetch

Use this operation to request data from Google Sheets. You can request a list of existing spreadsheets, existing records from a spreadsheet, or metadata about a specific spreadsheet.

Sheet rows

Spreadsheets

#### Fetch details

Use this operation to request metadata about a specific existing spreadsheet.

Spreadsheet

### Insert

Use **Insert** operations to create a new spreadsheet, or to add a new record to an existing spreadsheet.

Sheet rows

Spreadsheet

#### Insert many

Use this operation when you are inserting multiple new records into a spreadsheet with a single query. You can't use this to create multiple new spreadsheets at once.

Sheet rows

### Update

Use this operation when you want to submit an existing record with an updated value.

Sheet row

#### Update many

Use this operation when you want submit multiple records with updated values.

Sheet rows

### Delete

Use this record to delete a single existing spreadsheet, sheet, or record. You can only delete a single entity per query call.

Sheet row

Spreadsheet

Sheet

---

## ***OLD CONTENT***

## Fetch details

The operation allows you to fetch the details of a given spreadsheet.

<VideoEmbed host="youtube" videoId="elAabPXK_xk" title="Fetch Details of a Spreadsheet" caption="Fetch Details of a Spreadsheet"/>

You can set the parameter values as below:

* [Operation](./querying-google-sheets.md#operation) - Fetch details
* [Entity](./querying-google-sheets.md#entity) - Spreadsheet
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Either select the name of the spreadsheet from the available options, or you can enable the JS label and add the URL of the desired spreadsheet

:::info
The **Fetch Details** operation is only available to fetch the details of a spreadsheet.
:::

## Insert one

With Insert One, you can choose to insert a new row in an existing spreadsheet or add a new spreadsheet.

### Insert a new spreadsheet

When you select to add a new spreadsheet, the new spreadsheet is created and available in your google account. When adding a new spreadsheet, you can also choose to add data to it.

<VideoEmbed host="youtube" videoId="eSZyxR3vAj4" title="Insert a Spreadsheet" caption="Insert a Spreadsheet"/>

For creating a spreadsheet and adding data to it, you can set the parameter values as below:

* [Operation](./querying-google-sheets.md#operation) - Insert One
* [Entity](./querying-google-sheets.md#entity) - Spreadsheet
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Add the name you want to give to the spreadsheet. For example, `AppsmithEmployeeDirectory`
* Row Objects - For adding data to the spreadsheet, you’ll have to add the data in the form of a JSON Array. For example, you want to add the existing employee records to the sheet.

:::info
The first insert to a blank sheet also defines the **Sheet Schema** - the column headers. If you wish to add more columns, you’ll have to add the column names manually to the sheet. If the column names aren't present in the sheet, the subsequent inserts ignore the data for the additional columns even if supplied in the JSON.
:::

```json
[
  {
    "rowIndex" : 1,
    "id": "EMP001",
    "FullName": "Alex D",
    "Experience": "15.5 years",
    "Designation": "Head of Technology",
    "JoiningDateTime": "2022-05-12T09:07:57.000Z"
  },
  {
    "rowIndex" : 2,
    "id": "EMP002",
    "FullName": "Darren L",
    "Experience": "10.5 years",
    "Designation": "Senior Manager - Sales"
    "JoiningDateTime": "2012-05-12T09:07:57.000Z"
  }
]
```

:::info
You’ll have to supply `rowIndex` when creating a new spreadsheet and adding data.
:::

### Insert new row to sheet

You have a form that you use to capture the employee details. Whenever a new employee joins, you want to use that form and add the details to the existing spreadsheet `AppsmithEmployeeDirectory`.

<VideoEmbed host="youtube" videoId="QMB8O2bBTqE" title="Add New Data to an Existing Sheet" caption="Add New Data to an Existing Sheet"/>

You’ll have to add a query to insert the data by setting parameters as below:

* [Operation](./querying-google-sheets.md#operation) - Insert One
* [Entity](./querying-google-sheets.md#entity) - Sheet Rows
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`
* [Sheet Name](./querying-google-sheets.md#sheet-name) - Select the name of the Sheet `Sheet1`
* [Table Heading Row Index](./querying-google-sheets.md#table-heading-row-index) - Keep the default value (1)
* Row Objects - For adding data to the spreadsheet, you’ll have to add the data in JSON format as shown in the below code snippet:

```
{
	"id": "EMP005",
	"FullName" : "Karren L",
	"Experience" : "6 years",
	"Designation" : "Senior Sales Manager",
	"JoiningDateTime" : "2022-06-28T09:51:48.127Z"
}
```

:::info
You can use the JSON in the preceding example to test the Query execution.
:::

To capture the user input, you can create a [form](./../widgets/form.md) as shown in the screenshot below and bind the query execution on the `onClick` event of a **Submit** button.

![Bind query execution to Submit](</img/Datasources__Google_Sheets__Insert_One__Capture_Data_from_Form_Widget.png>)

You can modify the **Row Objects JSON data** to capture the values from the [form](./../widgets/form.md), as shown in the code snippet below:

:::info
You’ll have to add quotes to the string values if the [Smart JSON Substitution](./../../core-concepts/connecting-to-data-sources/authentication/#smart-json-substitution) is turned off in the `settings` tab.
:::

```
{
	"id": {{Employee.data.EmployeeCode}},
	"FullName" : {{Employee.data.NameOfEmployee}},
	"Experience" : {{Employee.data.ExperienceInYears}},
	"Designation" : {{Employee.data.EmployeeDesignation}},
	"JoiningDateTime" : {{Employee.data.EmployeeDOJ}}
}
```

:::info
You can read the child widget data embedded in the form widget using `{{<FORM_NAME.data.CHILD_WIDGET_NAME>}}` in a mustache `{{}}` sign.
:::

When the user inputs an employee’s data, and clicks the `Submit` button, the query executes, and data is added to the existing sheet `Sheet1` of the `AppsmithEmployeeDirectory.`

## Update one

With Update One, you can choose to update a single record in an existing spreadsheet.

<VideoEmbed host="youtube" videoId="-zgd0LmzZ6c" title="Update Row in an Existing Sheet" caption="Update Row in an Existing Sheet"/>

You can capture the data you want to update and send it to the update one query. For example, you want to update the designation and experience of an employee. You can pass the below parameters to the **Update One** Query.

* [Operation](./querying-google-sheets.md#operation) - Update One
* [Entity](./querying-google-sheets.md#entity) - Sheet Rows
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`
* [Sheet Name](./querying-google-sheets.md#sheet-name) - Select the name of the Sheet `Sheet1`
* [Table Heading Row Index](./querying-google-sheets.md#table-heading-row-index) - Keep the default value (1)
* Row Objects - For updating data to the spreadsheet, you’ll have to add the data in JSON format as shown in the below code snippet:

:::info
You should supply the value of **rowIndex** when updating the data. You get the value of **rowIndex** when you fetch the data from a sheet by using [**Fetch Many**](./querying-google-sheets.md#fetch-many).
:::

```
{
	"rowIndex" : 4,
	"Experience" : {{Employee.data.ExperienceInYears}},
	"Designation" : {{Employee.data.EmployeeDesignation}}
}
```

You can also choose to update all the data columns if needed.

:::info
The row to be updated is a calculated entity using the formula (`Row Index` + `Table Heading Row Index` + `Modifier for the 0 indexed Google Sheet`). The modifier for the 0 indexed Google Sheet is a constant set to 1.
:::

The calculated index for the row to be updated is `(4 + 1 + 1) = 6`.

## Delete one

You can perform the Delete One operation to delete a spreadsheet, a sheet within a spreadsheet, or a row from the sheet.

### Delete a spreadsheet

To delete a spreadsheet, you can choose the below parameters:

<VideoEmbed host="youtube" videoId="rfD4IgcXtOg" title="Delete a Spreadsheet" caption="Delete a Spreadsheet"/>

* [Operation](./querying-google-sheets.md#operation) - Delete One
* [Entity](./querying-google-sheets.md#entity) - Spreadsheet
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `TestDeletion`. You can also supply the URL for the spreadsheet by enabling the JS label.

### Delete a sheet

You can choose to delete a sheet from the given spreadsheet. You can choose the below parameters:

<VideoEmbed host="youtube" videoId="kW45AZoMkm4" title="Delete a Sheet" caption="Delete a Sheet"/>

* [Operation](./querying-google-sheets.md#operation) - Delete One
* [Entity](./querying-google-sheets.md#entity) - Sheet
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `TestSheetDeletion`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name ](./querying-google-sheets.md#sheet-name)- Select the sheet name you want to delete from the spreadsheet `Sheet1`.

:::info
The `Delete One` operation for a Sheet only works when there is more than one sheet in the spreadsheet.
:::

### Delete a sheet row

You can choose to delete a row from the existing sheet from the given spreadsheet. You can choose the below parameters:

<VideoEmbed host="youtube" videoId="vE5PrkFd0y0" title="Delete a Row" caption="Delete a Row"/>

* Operation - Delete One
* [Entity](./querying-google-sheets.md#entity) - Sheet Row
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name](./querying-google-sheets.md#sheet-name) - Select the sheet name you want to delete from the spreadsheet `Sheet1`.
* Row Index - If you want to delete the row 5 data in the Google Sheet, you should supply the Row Index as 3.

:::info
The row to be deleted is a calculated entity using the formula (`Row Index` + `Table Heading Row Index` + `Modifier for the 0 indexed Google Sheet`). The modifier for the 0 indexed Google Sheet is a constant set to 1.
:::

The calculated index for the row to be deleted is `(3 + 1 + 1) = 5.`

## Fetch many

You can choose to fetch multiple records from a sheet or fetch spreadsheets available in your Google Account by using Fetch Many.

### Fetch many spreadsheet

To fetch spreadsheets available in your account, you can choose the below parameters:

<VideoEmbed host="youtube" videoId="uVmVKySPN_A" title="Fetch all Spreadsheets" caption="Fetch all Spreadsheets"/>

* [Operation](./querying-google-sheets.md#operation) - Fetch Many
* [Entity](./querying-google-sheets.md#entity) - Spreadsheet

You can display the data by binding it to a widget. For example, you want to display the spreadsheets in a select widget. For this, you’ll have to add a JS Object function in which you’ll traverse through the response generated by the query and create an array of objects with label and value as a key and a value pair, as shown below:

```
export default {
	getSpreadsheetNames: () => {
		return fetchAllSpreadsheets.data.map((spreadsheet) => {
			return {
				"label": spreadsheet.name,
				"value" : spreadsheet.id
			}
		})
	}
}
```

:::info
Bind the data returned by the JS object to the select widget by using `{{<JS_OBJECT_NAME.FUNCTION_NAME()>}}` embedded in a mustache `{{}}` sign.
:::

### Fetch many sheet rows

To fetch spreadsheets data, you can choose the below parameters:

<VideoEmbed host="youtube" videoId="KaagWQaR5wg" title="Fetch Data from Sheet" caption="Fetch Data from Sheet"/>

* [Operation](./querying-google-sheets.md#operation) - Fetch Many
* [Entity](./querying-google-sheets.md#entity) - Sheet Rows
* [Spreadsheet](./querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name](./querying-google-sheets.md#sheet-name) - Select the sheet name you want to delete from the spreadsheet `Sheet1`.
* [Table Heading Row Index](./querying-google-sheets.md#table-heading-row-index) - Keep the default value (1)

:::info
You can choose to add filters using range or `where` Clause.
:::

You can display the data by binding it to a [widget](./../widgets/README.md). For example, you can display the spreadsheet data in a [table](/reference/widgets/table) widget.

:::info
Bind the data returned by the query to a [table](/reference/widgets/table) widget - [TableData](/reference/widgets/table#table-data) property by using `{{<QUERY_NAME>.data>}}` embedded in a mustache `{{}}` sign.
:::

## Insert many

You can choose to insert multiple records in an existing sheet by using Insert Many.

<VideoEmbed host="youtube" videoId="Mxlw_2U5PeA" title="Add Multiple Rows to Sheet" caption="Add Multiple Rows to Sheet"/>


* [Operation](./querying-google-sheets.md#operation) - Insert Many
* [Entity](querying-google-sheets.md#entity) - Sheet Rows
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the `JS label`.
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the sheet name you want to insert to the spreadsheet `Sheet1`.
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value (1)
* Row Objects - For inserting data to the spreadsheet, you’ll have to add the data in JSON Array Format as shown in the below code snippet:

```
[
   {
    "rowIndex" : 1,
    "id": "EMP010",
    "FullName": "Derrick D",
    "Experience": "1.5 years",
    "Designation": "Trainee Engineer",
    "JoiningDateTime": "2022-05-12T09:07:57.000Z"
  },
  {
    "rowIndex" : 2,
    "id": "EMP011",
    "FullName": "Tom L",
    "Experience": "8 years",
    "Designation": "Manager - Sales",
    "JoiningDateTime": "2012-05-12T09:07:57.000Z"
  }
]

```

:::info
You can choose not to provide **rowIndex**, and inserts still happen.
:::

You can also bind an API or a Query response returning a JSON Array to Row Objects by using `{{<QUERY/API_NAME>.data}}` embedded in a mustache `{{}}` sign.

## Update many

You can choose to update multiple records in an existing sheet by using Update Many.

<VideoEmbed host="youtube" videoId="i9B3yuKDtEc" title="Update Multiple Rows in Sheet" caption="Update Multiple Rows in Sheet"/>

* [Operation](./querying-google-sheets.md#operation) - Update Many
* [Entity](querying-google-sheets.md#entity) - Sheet Rows
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the sheet name you want to update from the spreadsheet `Sheet1`.
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value (1)
* Row Objects - For updating data in the spreadsheet, you’ll have to add the data in JSON Array Format as shown in the below code snippet:

:::info
You must provide `rowIndex`, without which the updates fail.
:::

```
[
   {
    "rowIndex" : 1,
    "Experience": "3 years",
    "Designation": "Junior Engineer"
  },
  {
    "rowIndex" : 2,
    "Experience": "10 years",
    "Designation": "Senior Manager - Sales"
  }
]
```

:::info
The row to be updated is a calculated entity using the formula (`Row Index` + `Table Heading Row Index` + `Modifier for the 0 indexed Google Sheet`). The modifier for the 0 indexed Google Sheet is a constant set to 1.
:::

The calculated indices for the rows to be updated are `(1 + 1 + 1) = 3`, and `(2+1+1) = 4` respectively.

## Column settings

There are a few settings listed below that are common to many operations that you can perform on the Google Sheets:

### Entity

You can select the type of entity that you want to perform the operation on:

* **Spreadsheet** - When you want to perform the operation on Spreadsheet. For example, you want to create a new spreadsheet for every user’s data input.
* **Sheet** - When you want to perform the operation on a sheet already present in a spreadsheet. For example, you want to update some data in the existing sheet. Using Sheet as an entity, you can add a new sheet to an existing spreadsheet.
* **Sheet Rows** - When you want to focus on inserting, updating, or deleting rows in an existing sheet, you can use Sheet Rows for the same.

:::info
All operations may not be available for every entity. For all the unsupported operations for that entity, an `Action not supported` tooltip appears when you try to select an Entity.
:::

Depending upon the type of operation and the entity selected, you'll have to provide the below details:

![You'll have to select the spreadsheet and the sheet name for sheet rows](</img/Datasources__Google_Sheets__Common_Settings__Entity__Spreadsheet.png>)

#### **Spreadsheet**

Provide the name of the spreadsheet you want to perform an operation on. You can also add the spreadsheet URL by enabling the JS label.

#### Sheet name

Select the sheet's name from the dropdown on which you want to perform an operation. You can also choose to add the name by enabling the JS label.

#### Table heading row index

Enter the row index of the header row in a Google Sheet. Usually, it starts with 1, so the default value supplied to this field is 1. You can change it to the heading row index if needed.

#### Columns

You could provide the columns that you want to select for the query. The default setting is for All Columns to be fetched. If you want to select only a few columns, you can do that by enabling the JS label and supplying the column names in a [JSON array format](http://json-schema.org/draft-07/schema) as below:

```
["columnname1", "columnname2"]
```

In the preceding code snippet, `columnname1` and `columnname2` are the column names in the Google sheet.

![Either select All columns or specific columns](</img/Datasources__Google_Sheets__Common_Settings__Entity__Spreadsheet__Columns.png>)

:::info
The column names are **case sensitive**, and you should include trailing or leading spaces when adding the column names in JS if they're present in the Google Sheet.
:::

### Filter format

The filter format allows you to filter your Google sheet data based on range or data filters.

#### Cell range

You can filter by range for cases when you want to fetch data from designated cells in your sheet. For example, you want to check the experience level and designations of the employees to create a data table that shows how many employees are eligible for a promotion. You can choose filter by cell range and select the designated columns excluding all the other details. Filter by cell range gives you the desired data set that works best for your use case.

<VideoEmbed host="youtube" videoId="FC_7OKeRQQs" title="Set Cell Range Filtering" caption="Set Cell Range Filtering"/>

#### Where clause

By defining the column and the filter criteria, you can filter by the data available in columns. For example, you want to fetch all employees designated as **project leaders**. You can define the designation column as part of the Where clause and supply the filter value as **Project Leader**.

You can define a where clause by defining the following values:

<VideoEmbed host="youtube" videoId="hE0YHCdD4FY" title="Confide Where Clause" caption="Confide Where Clause"/>

* **Filter By** - You define one or more criteria as part of the `filter by`.
  * **Key** - Specify the column names on which you would want to add filters
  * Select the comparison operator to evaluate the condition
  * **Value** - Specify the filter value which is used to filter the data
  * **Add Condition** - You can use it to add more conditions and select the “And/or” operator for evaluation
  * **Add Group Condition** - You can add a group condition that uses an “And” clause to evaluate the conditions specified in the group.
* **Sort By** - You can choose to sort the data based on the column name and provide the type of sorting: Ascending or Descending. You can choose to enable JS label and add your own code in [JSON Format](http://json-schema.org/draft-07/schema) :`[ { "column": "columnName", "order": "Ascending" } ]` For example, you want to sort the data on the employee’s full name in ascending order. You can add the code for the sort by condition:`[ { "column": "FullName", "order": "Ascending" } ]`
* **Add Parameter** - you can add more parameters to sort if you want to sort on more than one column.
* **Pagination Limit** - You can set the number of pages to be displayed per page. By default, the value is set to 20. But you can change it as per your needs.
* **Pagination Offset** - If you wish to skip some data, you can add the number of rows in the field. The number of rows specified are skipped and won't be a part of the dataset returned because of query execution.

You can also choose to write the Where Clause by enabling the JS label and adding the below code snippet in a [JSON Format](http://json-schema.org/draft-07/schema)

```
{
  "condition": "AND",
  "children": [
    {
      "condition": "LT",
      "key": "k1",
      "value": "v1"
    },
    {
      "key": "k2",
      "condition": "LT",
      "value": "v2"
    },
    {
      "condition": "AND",
      "children": [
        {
          "condition": "LT",
          "key": "k3",
          "value": "v3"
        }
      ]
    }
  ]
}
```

:::info
Depending on your filter criteria, you can replace the key and value with the column names. You can also add**, **replace or remove conditions based on filtering needs.
:::

For example, you want to fetch all the employees with designation as **Junior Engineer.** You can write a where clause as below and enable the `JS label` for the `Filter By` and add it to the text field.

```
{
	"condition": "AND",
	"children": [
		{
			"condition": "EQ",
			"key": "Designation",
			"value": "Junior Engineer"
		}
	]
}
```

If you now want to fetch all employees with designation as **Junior Engineer** and have experience of **3 years**, then the code for conditions looks like:

```
{
	"condition": "AND",
	"children": [
		{
			"condition": "EQ",
			"key": "Designation",
			"value": "Junior Engineer"
		},
		{
			"key": "Experience",
			"condition": "EQ",
			"value": "3 years"
		}
	]
}
```

### Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](./../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](./../../core-concepts/data-access-and-binding/capturing-data-write/)
