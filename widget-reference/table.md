---
description: >-
  The table is used to display rows of data. You can display data from an API in
  a table, trigger an action when a user selects a row, and even work with large
  paginated data sets
---

# Table

The table widget displays data in rows and columns. You can display data from an API in a table, trigger an action when a user selects a row, and even work with sizable paginated data sets.

{% embed url="https://www.youtube.com/watch?v=sgd-DMJsAHs&feature=youtu.be" %}

## Properties

Properties allow you to edit the table, connect it with other widgets and customize the user actions. Let's look into different types of properties.

### Widget Properties

These properties allow you to edit the table itself. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| **Widget Property**        | **Description**                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Table Data                 | It lets you edit the data in the table, either by writing an array of objects to display as table rows or binding data from an API/Database using the mustache syntax.    |
| Columns                    | Auto populated from the Table data. This lets you edit the label, show/hide each column (the eye icon), and also customize the column settings.                           |
| Server Side Pagination     | Enables you to implement pagination by limiting the number of results fetched per API / Query request. Use this property when your table data is bound to an API / Query. |
| Visible                    | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                               |
| Sortable                   | It enables or disables sorting. If turned off, the user will not be able to sort the data when the app is published.                                                      |
| Default Search Text        | Sets the default search text of the table.                                                                                                                                |
| Default Selected Row       | Sets the default selected row of the table. It takes the index no. of the row as an input.                                                                                |
| Default Row Height         | Sets the height of the row in the table - Default, short or tall.                                                                                                         |
| Enable multi-row selection | Allows multiple rows of a table to be selected. The rows are populated in the selectedRows field.                                                                         |

Let's understand the widget properties in detail**.**

#### Table Data

The Table Data in the property pane allows a user to edit data in the table. You can write an array of objects to display it as table rows.

![Property pane showing the Table data](../.gitbook/assets/table\_data.png)

You can also bind your data from a database / API using the mustache syntax ( {{}} ).

Let's bind the data from a mock database into a table widget.&#x20;

1. Create an App and click on "data sources" under the explorer panel.
2. Go to "+Create new" and select the "users" database from the Sample Databases.  The user database will now appear under the “Active" window.
3. From the "Active" window, click on “New Query+" for the Users database and create a "select" [query](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/querying-a-database#setting-up-a-query) to fetch the data.
4. Go back to the canvas and drag the table widget onto it.
5. Open the property pane, clear the Table data window and enter the following snippet:

```
{{<query_name>.data}}
```

Where \<query\_name> is the query's name created in Step 2.

{% embed url="https://youtu.be/czxtgHJ1sUE" %}

That's it! The table widget will get populated with the data coming from the query.

**Column**

This property shows all the columns in the table, and it gets auto-populated from the Table Data. You can edit the column's name, hide/show a column, and customize more from the column settings.

![](../.gitbook/assets/columns\_tablewidget.png)

**Column Settings**

You can customize each table column through a set of properties by clicking on the gear icon.

![Column Settings](../.gitbook/assets/Column\_control.gif)

\
Clicking on the gear icon opens the column settings that give you major customization options - Column control and Styles.

**Column Control**

Column Control has the following properties:

**Column type:** This property allows you to select the type of data in the column.

![](../.gitbook/assets/column\_type.gif)

\
**Computed Value:** The computed value field is helpful to create custom table columns. For example, you can show a value calculated from the response of two different queries. This field also allows you to manipulate the value using JS expressions; For example, if you want to show the date time stamp in the human-readable format, you can use a Moment.JS function.

![](../.gitbook/assets/computed\_value.jpg)

\
You can also access each row's column values with `currentRow` property. `currentRow` property can only be accessed inside column properties. It can be helpful if you wish to merge multiple values/properties under a single column. \


For example, in the video below, we renamed the 'email' column to 'Contact' and then used the computed value property inside the column settings to merge email and phone in one column. We later hide the phone column.

{% embed url="https://youtu.be/tjc8HlzQ4xU" %}

#### Styles

Depending upon the column type, there are various style properties available to change the look and feel of each column. For example, for a text column, you can:&#x20;

1. Change the alignment, size, or font style of the text.
2. Change the color of the text or cell background.

**Server-Side Pagination**

The data fetched from the Query/ API is sometimes too large to be displayed on one table page. Server-Side Pagination lets you implement pagination by limiting the number of results fetched per API / Query request. For more information on how to paginate your data, click [here](https://docs.appsmith.com/core-concepts/displaying-data-read/display-data-tables#pagination).

### Binding Properties

These properties allow you to bind your table widget with any other widget in queries or JS objects.

| Binding Property   | Description                                                                                                                  | Snippet                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| selectedRow        | It contains the data of the row selected by the user. It will be an empty object if no row is selected                       | `{{<table_name>.selectedRow}}`        |
| selectedRows       | It contains an array of rows selected by the user when multi-select is enabled. It will be \[null] if no row is selected.    | `{{<table_name>.selectedRows}}`       |
| triggeredRow       | When a user interacts with an actionable item (like button) in a row, triggerdRow fetches the data of that column.           | `{{<table_name>.triggeredRow}}`       |
| selectedRowIndex   | It gives the index of the row selected by the user. Not applicable when multiple rows are selected.                          | `{{<table_name>.selectedRowIndex}}`   |
| selectedRowIndices | It gives you an array of the index of the rows selected by the user. Not applicable when multi-row selection is disabled.    | `{{<table_name>.selectedRowIndices`}} |
| filteredTableData  | It contains the data of the rows that is the resultant of the filters applied, sorting or the data searched                  | `{{<table_name>.filteredTableData}}`  |
| pageNo             | Contains the current page number that the user is on. APIs can use it for pagination                                         | `{{<table_name>.pageNo}}`             |
| pageSize           | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table | `{{<table_name>.pageSize}}`           |
| searchText         | Contains the search text entered by the user in the Table                                                                    | `{{<table_name>.searchText}}`         |

Consider a table `Table_1` with the table data given below:

```
[
  {
    "step": "#1",
    "task": "Drop a table",
    "status": "✅",
    "action": ""
  },
  {
    "step": "#2",
    "task": "Create a query fetch_users with the Mock DB",
    "status": "--",
    "action": ""
  },
  {
    "step": "#3",
    "task": "Bind the query using => fetch_users.data",
    "status": "--",
    "action": ""
  }
]
```

And this is how the data looks in the table widget:

![](../.gitbook/assets/table\_sample\_data.png)

**selectedRow**

A table you have created might contain a large amount of data. But when you want to get the data of a single row of the table, the selectedRow property comes into play.\
selectedRow is an internal property that fetches the row's data selected by the user in the table. You can easily bind different widgets to each table row using this property.

As you already know by now, you can write JS code anywhere in Appsmith inside {{}}., To bind the selected row of the table to another widget, open the property pane of it, and add the code snippet given below:

```
{{<table_name>.selectedRow}}
```

Where `<table_name>` is the name of your table.

Drag a text widget onto the canvas, and let's bind it to a selected table row of `Table_1`.\
Open the property pane of the text widget and add the following snippet to its label:

```
{{Table_1.selectedRow}}
```

{% embed url="https://youtu.be/0Pl7p1sA1fY" %}

The Text widget will then display the data of the row selected on the table.\
\
If no row is selected, selectedRow shows the column names with no data.

![](../.gitbook/assets/slectedRow\_default.png)



**Displaying column value using selectedRow**

If you want to fetch the data from a column in the row selected on the table, add the column's name after the selected row. You can refer to the code snippet below:

{{\<table\_name>.selectedRow.\<column\_name>}}

It will result in the data at `<columnname>` __ of the row selected.\
__\
__Using this snippet in `Table_1`, suppose you want to bind the task of the selected row to the text widget. You will need to open the property pane of the text widget and add the following to its label:

```
{{Table_1.selectedRow.task}}
```

{% embed url="https://youtu.be/hHZ5IbtE-wo" %}

#### selectedRows

selectedRows allows you to fetch the data from the table when the user selects multiple rows. To use this property, enable the "multi-row selection" option from the property pane of the table widget.\
\
To bind a widget to the multiple rows of the table, enter the snippet given below:

```
{{<table_name>.selectedRows}}
```

Where `<table_name>` is the name of your table.

&#x20;Let's bind a text widget to `Table_1` using selectedRows.

{% embed url="https://youtu.be/K8F4oggpOk0" %}

A null array '\[]' is returned If no row is selected in the table.

**triggeredRow**

If your table has actionable items (like buttons) and a user interacts with it, triggeredRow fetches row's data where that action has been performed.

To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.triggeredRow}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using triggeredRow.

{% embed url="https://youtu.be/HUcQ8lf7cH4" %}

**selectedRowIndex**

selectedRowIndex gives you the index number of the selected row in the table. It is only applicable when one row is selected. If you have multiple rows selected, it returns "-1".

To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.selectedRowIndex}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using seledRowIndex.

{% embed url="https://youtu.be/KXYkdFzOKsQ" %}

**selectedRowIndices**

selectedRowIndices gives you an array of the index numbers of the multiple rows selected in the table. It is only applicable when multiple rows are selected. You have to enable the "multi-row selection" from the property pane to use this property.

To bind widget using this property, enter the code snippet given below:

```
{{<table_name>.selectedRowIndices}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using seledRowIndices.

{% embed url="https://youtu.be/yLOYqrW2xaw" %}

**filteredTableData**

filteredTableData contains the data of the rows that is the resultant of the filters applied, sorting, or the data searched.

To use this property in a widget, enter the code snippet given below:

```
{{<table_name>.filteredTableData}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using filteredTableData.

{% embed url="https://youtu.be/0tvZXEtSMp4" %}

**pageNo**

pageNo gets the page no. of the table that the user is currently viewing. This property can be used by APIs for pagination. \
\
To use this property in a widget, enter the code snippet given below:

```
{{<table_name>.pageNo}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using pageNo.

{% embed url="https://youtu.be/DqKok2cCJk0" %}

**pageSize**

pageSize shows the size of the current page of the table, i.e., the total number of rows displayed on a page. pageSize can change on resizing the table.\
\
To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.pageSize}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using pageSize.

{% embed url="https://youtu.be/XkFJQh4vcCw" %}

**searchText**

searchText fetches the text entered in the search bar by the user.\
\
To bind widget using this property, enter the code snippet given below:&#x20;

```
{{<table_name>.searchText}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using searchText.

{% embed url="https://youtu.be/vn6zx7zMeUs" %}

### Events

| Action                 | Description                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md).                    |
| **onRowUpdate**        | Sets the action to run when the user edits a row (inline row editing). See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
| **onPageChange**       | Sets the action to run when the table's page changes. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md)                   |
| **onSearchTextChange** | Sets the action to run when the user enters a search text. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md).             |
| **onSort**             | Sets the action to run when the user sorts the data. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md).                   |

### Header Options

These are the options that you can add to the table header. Currently, the following features are available to add or remove from the table header -

* Search
* Filters
* Download
* Pagination

### Styles

Style properties allow you to change the look and feel of the table. It has several options such as -

* Changing the style and size of the font;
* &#x20;Text alignment;
* &#x20;Playing around with the color of the text or cell background.

## How to display data and handle pagination inside a table?

[Read this guide](../core-concepts/displaying-data-read/display-data-tables.md#pagination)
