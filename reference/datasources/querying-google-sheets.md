# Google Sheets

[Google Sheets](https://www.google.com/sheets/about/) is a web-based application provided by [Google](https://www.google.com/) that enables users to create, update and share spreadsheets online in real-time.

Spreadsheets are a common way of organizing, editing, and analyzing data and serve as a data source for many teams.

{% hint style="info" %}
To integrate Google Sheets with Appsmith, you should understand the [basics of connecting to databases on Appsmith](../../core-concepts/connecting-to-data-sources/).
{% endhint %}

Appsmith integration with Google Sheets provides an easy way to manipulate, analyze and manage Spreadsheets. With this integration, you can perform different operations using a custom UI built on Appsmith, with minimal configurations.

## **Create Google Sheets Datasource**

To add a **Google Sheets datasource**, navigate to **Explorer** >> Click plus sign **(+)** next to **Datasources** >> Select **Google Sheets** under APIs.

{% embed url="https://youtu.be/kUK5bGeNjPA" %}
How to create Google Sheets Datasource?
{% endembed %}

## Connection Settings

Configure the Google Sheets Datasource as illustrated below:

#### **Scope**

As part of Scope, you define what type of access privilege you want to provide when creating the Google Sheets data source.

![Create a Google Sheets Datasource](<../../.gitbook/assets/Datasources  Google Sheets  Create Datasource.png>)

### **Read Only** <a href="#read-only" id="read-only"></a>

You can use the `Read Only` scope if you want to provide limited access that is restricted to only listing spreadsheets or reading data from Google Spreadsheets.

{% hint style="info" %}
To use the `Read Only` scope, you'll have to provide **read access** to your **Google Sheets** and **Drive**.
{% endhint %}

### **Read and Write**

If you want to perform different operations like create, update, read and delete spreadsheets, then you can use the Read and Write scope to create your data source.

{% hint style="info" %}
You'll have to provide **read and write access** to your **Google Sheets** and **Drive** for using **Read and Write** scope.
{% endhint %}

### **Save and Authorize**

Click on the `Save and Authorize` button once you have selected the scope. You'll be navigated to the **Google Login screen**. On successful login, you will be shown the permissions screen where you will authorize Google Sheets and Drive for a **read only** or a **read and write** access based on the **scope** you **selected** for datasource. On Successful authorization, you'll be redirected to the datasources page. You can choose to add a **New API** by clicking the **New API +** button.

{% hint style="warning" %}
Creating and authorizing a Google Sheets data source will [store your credentials](broken-reference) within the Appsmith servers. When you share your application with more developers or administrators, your Google sheets account will be accessible to them.
{% endhint %}

## **Create Queries**

You can add queries to Google Sheets datasource by selecting the **New API +** button available on the datasource page or by navigating to **Explorer** >> Click plus sign **(+)** next to **Queries/JS** >> Select the **datasource** name (GoogleSheetsDatasource).

### **Query**

You use the [Query](broken-reference) tab to define - the type of operation you want to perform and the entity on which the operation will be performed.

{% hint style="info" %}
Some **operations** are **not** available for some **entities**. If an **operation** is **not** available for an **entity,** the **entity** is grayed out, and the tooltip **`Action not supported`** will be displayed when you hover over it.
{% endhint %}

## **Operation**

Operation lets you define the type of action you want to perform on Google Sheets (Spreadsheets or individual Sheets available in a spreadsheet). Following is the list of available operations:

| **Operation**                                                             | **Description**                                                                           | **Available on below Entity** |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------- |
| ****[**Fetch Details**](querying-google-sheets.md#fetch-details)****      | Use it to fetch details like the name of the spreadsheet, created date and time, and more | Spreadsheet                   |
| ****[**Insert One**](querying-google-sheets.md#insert-one)****            | Use it to insert a single row in a sheet or add a new spreadsheet                         | Spreadsheet/Sheet Rows        |
| ****[**Update One**](querying-google-sheets.md#update-one)****            | Use it to update rows in a given sheet in a spreadsheet                                   | Sheet Rows                    |
| ****[**Delete One**](querying-google-sheets.md#delete-one)****            | Use it to delete a spreadsheet or a sheet or row in a sheet                               | Spreadsheet/Sheet/ Sheet Rows |
| ****[**Fetch Many**](querying-google-sheets.md#fetch-many-sheet-rows)**** | Use it to fetch data from a sheet or all the spreadsheets available in your account.      | Spreadsheet/Sheet Rows        |
| ****[**Insert Many**](querying-google-sheets.md#insert-many)****          | Use it to insert multiple rows in a given sheet                                           | Sheet Rows                    |
| ****[**Update Many**](querying-google-sheets.md#update-many)****          | Use it to update multiple rows in a given sheet                                           | Sheet Rows                    |

## **Fetch Details**

The operation allows you to fetch the details of a given spreadsheet.

{% embed url="https://youtu.be/elAabPXK_xk" %}
How to Fetch Details of a Spreadsheet?
{% endembed %}

You can set the parameter values as below:

* Operation - Fetch details
* [Entity](querying-google-sheets.md#entity) - Spreadsheet
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Either select the name of the spreadsheet from the available options, or you can enable the JS label and add the URL of the desired spreadsheet

{% hint style="info" %}
The **Fetch Details** operation is only available to fetch the details of a spreadsheet.
{% endhint %}

## **Insert One**

With Insert One, you can choose to insert a new row in an existing spreadsheet or add a new spreadsheet.

### **Insert a new Spreadsheet**

When you select to add a new spreadsheet, the new spreadsheet is created and available in your google account. When adding a new spreadsheet, you can also choose to add data to it.

{% embed url="https://youtu.be/eSZyxR3vAj4" %}
How to Insert a Spreadsheet?
{% endembed %}

For creating a spreadsheet and adding data to it, you can set the parameter values as below:

* Operation - Insert One
* [Entity](querying-google-sheets.md#entity) - Spreadsheet
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Add the name you want to give to the spreadsheet. For example, `AppsmithEmployeeDirectory`
* Row Objects - For adding data to the spreadsheet, you’ll have to add the data in the form of a JSON Array. For example, you want to add the existing employee records to the sheet.

{% hint style="info" %}
The **first insert** to a **blank** sheet will also define the **Sheet Schema** - the column headers. If you wish to **add more columns**, you’ll have to **add the column names** **manually** to the sheet. If the column names are **not** present in the sheet, the subsequent inserts will **ignore** the data for the **additional** columns even if supplied in the JSON.
{% endhint %}

```
[
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

{% hint style="info" %}
You’ll have to supply `rowIndex` when creating a new spreadsheet and adding data.
{% endhint %}

### **Insert new row to Sheet**

You have a form that you use to capture the employee details. Whenever a new employee joins, you want to use that form and add the details to the existing spreadsheet `AppsmithEmployeeDirectory`.

{% embed url="https://youtu.be/QMB8O2bBTqE" %}
How to add new data to an existing sheet?
{% endembed %}

You’ll have to add a query to insert the data by setting parameters as below:

* Operation - Insert One
* [Entity](querying-google-sheets.md#entity) - Sheet Row(s)
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the name of the Sheet `Sheet1`
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value that is 1
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

{% hint style="info" %}
You can use the above JSON to test the Query execution.
{% endhint %}

To capture the user input, you can create a [form](../widgets/form.md) as shown in the screenshot below and bind the query execution on the `onClick` event of a **Submit** button.

![Bind query execution to Submit](<../../.gitbook/assets/Datasources  Google Sheets  Insert One  Capture Data from Form Widget.png>)

You can modify the **Row Objects JSON data** to capture the values from the [form](../widgets/form.md), as shown in the code snippet below:

{% hint style="info" %}
You’ll have to add quotes to the string values if the [Smart JSON Substitution](../../core-concepts/connecting-to-data-sources/authentication/#smart-json-substitution) is turned off in the `settings` tab.
{% endhint %}

```
{
	"id": {{Employee.data.EmployeeCode}},
	"FullName" : {{Employee.data.NameOfEmployee}},
	"Experience" : {{Employee.data.ExperienceInYears}},
	"Designation" : {{Employee.data.EmployeeDesignation}},
	"JoiningDateTime" : {{Employee.data.EmployeeDOJ}}
}
```

{% hint style="info" %}
You can read the child widget data embedded in the form widget using `{{<FORM_NAME.data.CHILD_WIDGET_NAME>}}` in a mustache `{{}}` sign.
{% endhint %}

When the user inputs an employee’s data, and clicks the `Submit` button, the query executes, and data is added to the existing sheet `Sheet1` of the `AppsmithEmployeeDirectory.`

## **Update One**

With Update One, you can choose to update a single record in an existing spreadsheet.

{% embed url="https://youtu.be/-zgd0LmzZ6c" %}
How to update a row in an existing sheet?
{% endembed %}

You can capture the data you want to update and send it to the update one query. For example, you want to update the designation and experience of an employee. You can pass the below parameters to the **Update One** Query.

* Operation - Update One
* [Entity](querying-google-sheets.md#entity) - Sheet Row(s)
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the name of the Sheet `Sheet1`
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value that is 1
* Row Objects - For updating data to the spreadsheet, you’ll have to add the data in JSON format as shown in the below code snippet:

{% hint style="info" %}
You should supply the value of **rowIndex** when **updating** the data. You get the value of **rowIndex** when you **fetch the data** from a **sheet** by using[ **Fetch Many**](querying-google-sheets.md#fetch-many).
{% endhint %}

```
{
	"rowIndex" : 4,
	"Experience" : {{Employee.data.ExperienceInYears}},
	"Designation" : {{Employee.data.EmployeeDesignation}}
}
```

You can also choose to update all the data columns if needed.

{% hint style="info" %}
The **row to be updated** is a calculated entity using the formula (`Row Index` + `Table Heading Row Index` + `Modifier for the 0 indexed Google Sheet`). The modifier for the 0 indexed Google Sheet is a constant set to 1.
{% endhint %}

The calculated to be updated row index will be `(4 + 1 + 1) = 6`.

## **Delete One**

You can perform the Delete One operation to delete a spreadsheet, a sheet within a spreadsheet, or a row from the sheet.

### **Delete a Spreadsheet**

To delete a spreadsheet, you can choose the below parameters:

{% embed url="https://youtu.be/rfD4IgcXtOg" %}
How to delete a spreadsheet?
{% endembed %}

* Operation - Delete One
* [Entity](querying-google-sheets.md#entity) - Spreadsheet
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `TestDeletion`. You can also supply the URL for the spreadsheet by enabling the JS label.

### **Delete a Sheet**

You can choose to delete a sheet from the given spreadsheet. You can choose the below parameters:

{% embed url="https://youtu.be/kW45AZoMkm4" %}
How to delete a sheet from a spreadsheet?
{% endembed %}

* Operation - Delete One
* [Entity](querying-google-sheets.md#entity) - Sheet
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `TestSheetDeletion`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name ](querying-google-sheets.md#sheet-name)- Select the sheet name you want to delete from the spreadsheet `Sheet1`.

{% hint style="info" %}
The `Delete One` operation for a Sheet only works when there is more than one sheet in the spreadsheet.
{% endhint %}

### **Delete a Sheet Row**

You can choose to delete a row from the existing sheet from the given spreadsheet. You can choose the below parameters:

{% embed url="https://youtu.be/vE5PrkFd0y0" %}
How to delete a row from a sheet?
{% endembed %}

* Operation - Delete One
* [Entity](querying-google-sheets.md#entity) - Sheet Row(s)
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the sheet name you want to delete from the spreadsheet `Sheet1`.
* Row Index - If you want to delete the row 5 data in the Google Sheet, you should supply the Row Index as 3.

{% hint style="info" %}
The row to be deleted is a calculated entity using the formula (`Row Index` + `Table Heading Row Index` + `Modifier for the 0 indexed Google Sheet`). The modifier for the 0 indexed Google Sheet is a constant set to 1.
{% endhint %}

The calculated to be deleted row index will be `(3 + 1 + 1) = 5.`

## **Fetch Many**

You can choose to fetch multiple records from a sheet or fetch spreadsheets available in your Google account by using Fetch Many.

### **Fetch Many Spreadsheet**

To fetch spreadsheets available in your account, you can choose the below parameters:

{% embed url="https://youtu.be/uVmVKySPN_A" %}
How to fetch all the spreadsheets in your google account?
{% endembed %}

* Operation - Fetch Many
* [Entity](querying-google-sheets.md#entity) - Spreadsheet

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

{% hint style="info" %}
Bind the data returned by the JS object to the select widget by using `{{<JS_OBJECT_NAME.FUNCTION_NAME()>}}` embedded in a mustache `{{}}` sign.
{% endhint %}

### **Fetch Many Sheet Rows**

To fetch spreadsheets data, you can choose the below parameters:

{% embed url="https://youtu.be/KaagWQaR5wg" %}
How to Fetch data from the sheet?
{% endembed %}

* Operation - Fetch Many
* [Entity](querying-google-sheets.md#entity) - Sheet Row(s)
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the sheet name you want to delete from the spreadsheet `Sheet1`.
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value that is 1

{% hint style="info" %}
You can choose to add filters using range or `where` Clause.
{% endhint %}

You can display the data by binding it to a [widget](../widgets/). For example, you can display the spreadsheet data in a [table](../widgets/table/) widget.

{% hint style="info" %}
Bind the data returned by the query to a [table](../widgets/table/) widget - [TableData](../widgets/table/#table-data) property by using `{{<QUERY_NAME>.data>}}` embedded in a mustache `{{}}` sign.
{% endhint %}

## **Insert Many**

You can choose to insert multiple records in an existing sheet by using Insert Many.

{% embed url="https://youtu.be/Mxlw_2U5PeA" %}
How to add multiple rows to a sheet?
{% endembed %}

* Operation - Insert Many
* [Entity](querying-google-sheets.md#entity) - Sheet Row(s)
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the `JS label`.
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the sheet name you want to insert to the spreadsheet `Sheet1`.
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value that is 1
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

{% hint style="info" %}
You can choose not to provide **rowIndex**, and inserts will still happen.
{% endhint %}

You can also bind an API or a Query response returning a JSON Array to Row Objects by using `{{<QUERY/API_NAME>.data}}` embedded in a mustache `{{}}` sign.

## **Update Many**

You can choose to update multiple records in an existing sheet by using Update Many.

{% embed url="https://youtu.be/i9B3yuKDtEc" %}
How to update multiple rows in a sheet?
{% endembed %}

* Operation - Update Many
* [Entity](querying-google-sheets.md#entity) - Sheet Row(s)
* [Spreadsheet](querying-google-sheets.md#spreadsheet) - Select the name of the spreadsheet `AppsmithEmployeeDirectory`. You can also supply the URL for the spreadsheet by enabling the JS label.
* [Sheet Name](querying-google-sheets.md#sheet-name) - Select the sheet name you want to update from the spreadsheet `Sheet1`.
* [Table Heading Row Index](querying-google-sheets.md#table-heading-row-index) - Keep the default value that is 1
* Row Objects - For updating data in the spreadsheet, you’ll have to add the data in JSON Array Format as shown in the below code snippet:

{% hint style="info" %}
You will have to provide `rowIndex`, without which the updates will fail.
{% endhint %}

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

{% hint style="info" %}
The row to be updated is a calculated entity using the formula (`Row Index` + `Table Heading Row Index` + `Modifier for the 0 indexed Google Sheet`). The modifier for the 0 indexed Google Sheet is a constant set to 1.
{% endhint %}

The calculated to be updated row index will be `(1 + 1 + 1) = 3`, and `(2+1+1) = 4` respectively.

## **Common Settings**

There are a few settings listed below that are common to many operations that you will perform on the Google Sheets:

### **Entity**

You can select the type of entity that you want to perform the operation on:

* **Spreadsheet** - When you want to perform the operation on Spreadsheet. For example, you want to create a new spreadsheet for every user’s data input.
* **Sheet** - When you want to perform the operation on a sheet already present in a spreadsheet. For example, you want to update some data in the existing sheet. Using Sheet as an entity, you can add a new sheet to an existing spreadsheet.
* **Sheet Rows** - When you want to focus on inserting, updating, or deleting rows in an existing sheet, you can use Sheet Rows for the same.

{% hint style="info" %}
**All** operations may **not** be available for every **entity**. For all the **unsupported** **operations** for that entity, you will see an `Action not supported` tooltip when you try to select an Entity.
{% endhint %}

Depending upon the type of operation and the entity selected, you'll have to provide the below details:

![You'll have to select the spreadsheet and the sheet name for sheet rows](<../../.gitbook/assets/Datasources  Google Sheets  Common Settings  Entity  Spreadsheet.png>)

#### **Spreadsheet**

Provide the name of the spreadsheet you want to perform an operation on. You can also add the spreadsheet URL by enabling the JS label.

#### **Sheet Name**

Select the sheet's name from the dropdown on which you want to perform an operation. You can also choose to add the name by enabling the JS label.

#### **Table Heading Row Index**

Enter the row index of the header row in a Google Sheet. Usually, it starts with 1, so the default value supplied to this field is 1. You can change it to the heading row index if needed.

#### **Columns**

You could provide the columns that you want to select for the query. The default setting is All Columns will be fetched. If you want to select only a few columns, you can do that by enabling the JS label and supplying the column names in a [JSON array format](http://json-schema.org/draft-07/schema) as below:

```
["columnname1", "columnname2"]
```

In the above code snippet, `columnname1` and `columnname2` are the column names in the Google sheet.

![Either select All columns or specific columns](<../../.gitbook/assets/Datasources  Google Sheets  Common Settings  Entity  Spreadsheet  Columns.png>)

{% hint style="info" %}
The column names are **case sensitive**, and you should include **trailing or leading spaces** when **adding** the **column names** in JS if they are present in the Google Sheet.
{% endhint %}

### **Filter Format**

The filter format allows you to filter your Google sheet data based on range or data filters.

#### **Cell Range**

You can filter by range for cases when you want to fetch data from designated cells in your sheet. For example, you want to check the experience level and designations of the employees to create a data table that shows how many employees are eligible for a promotion. You can choose filter by cell range and select the designated columns excluding all the other details. Filter by cell range gives you the desired data set that works best for your use case.

{% embed url="https://youtu.be/FC_7OKeRQQs" %}
How to set Cell Range filtering?
{% endembed %}

#### **Where Clause**

By defining the column and the filter criteria, you can filter by the data available in columns. For example, you want to fetch all employees designated as **project leaders**. You can define the designation column as part of the Where clause and supply the filter value as **Project Leader**.

You can define a where clause by defining the following values:

{% embed url="https://youtu.be/hE0YHCdD4FY" %}
How to configure a Where Clause?
{% endembed %}

* **Filter By** - You define one or more criteria as part of the `filter by`.
  * **Key** - Specify the column names on which you would want to add filters
  * Select the comparison operator to evaluate the condition
  * **Value** - Specify the filter value which will be used to filter the data
  * **Add Condition** - You can use it to add more conditions and select the “And/or” operator for evaluation
  * **Add Group Condition** - You can add a group condition that uses an “And” clause to evaluate the conditions specified in the group.
* **Sort By** - You can choose to sort the data based on the column name and provide the type of sorting: Ascending or Descending. You can choose to enable JS label and add your own code in [JSON Format](http://json-schema.org/draft-07/schema) :`[ { "column": "columnName", "order": "Ascending" } ]` For example, you want to sort the data on the employee’s full name in ascending order. You can add the code for the sort by condition:`[ { "column": "FullName", "order": "Ascending" } ]`
* **Add Parameter** - you can add more parameters to sort if you want to sort on more than one column.
* **Pagination Limit** - You can set the number of pages to be displayed per page. By default, the value is set to 20. But you can change it as per your needs.
* **Pagination Offset** - If you wish to skip some data, you can add the number of rows in the field. The number of rows specified will be skipped and will not be a part of the dataset returned as a result of query execution.

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

{% hint style="info" %}
As per your filter criteria, you can **replace** the **key** and **value** with the **column names.** You can also **add**, **replace** or **remove** **conditions** based on **filtering** needs.
{% endhint %}

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

If you now want to fetch all employees with designation as **Junior Engineer** and have experience of **3 years**, then the code for conditions will be as follows:

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

### **Using Queries in applications**

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](../../core-concepts/data-access-and-binding/capturing-data-write/)
