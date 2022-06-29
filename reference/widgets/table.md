# Table

The table widget displays data in rows and columns. You can display data from an API in a table, trigger an action when a user selects a row, and even work with sizable paginated data sets.

{% embed url="https://youtu.be/-rzePEV2QQ8" %}

{% hint style="info" %}
If you already know the basics and want to learn how to display data and handle pagination inside a table, [Read this guide](../../core-concepts/data-access-and-binding/displaying-data-read/display-data-tables.md#pagination).
{% endhint %}

## Properties

Properties allow you to edit the table, connect it with other widgets and customize the user actions. Let's look into different types of properties.

### Widget Properties

These properties allow you to edit the table itself. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| **Table Data**                 | It lets you edit the data in the table, either by writing an array of objects to display as table rows or binding data from an API/Database using the mustache syntax.                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Columns**                    | Auto populated from the Table data. This lets you edit the label, show/hide each column (the eye icon), and also customize the column settings.                                                         |
| **Server Side Pagination**     | Enables you to implement pagination by limiting the number of results fetched per API / Query request. Use this property when your table data is bound to an API / Query.                               |
| **Visible**                    | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                             |
| **Sortable**                   | It enables or disables sorting. If turned off, the user will not be able to sort the data when the app is published.                                                                                    |
| **Default Search Text**        | Sets the default search text of the table.                                                                                                                                                              |
| **Default Selected Row**       | Sets the default selected row of the table. It takes the index no. of the row as an input.                                                                                                              |
| **Default Row Height**         | Sets the height of the row in the table - Default, short or tall.                                                                                                                                       |
| **Enable multi-row selection** | Allows multiple rows of a table to be selected. The rows are populated in the selectedRows field.                                                                                                       |
| **Table Record Count**         | The user has to input the total number of records returned as part of a query or API call, which will be displayed in a table. It is only visible when you choose to enable **server-side pagination**. |

Let's understand the widget properties in detail.

#### Table Data

The Table Data in the property pane allows a user to edit data in the table. You can write an array of objects to display it as table rows.

![Property pane showing the Table data](../../.gitbook/assets/table\_data.png)

You can also bind your data from a database / API using the mustache syntax ( \{{\}} ).

Let's bind the data from a mock database into a table widget.

1. Create an App and click on `Datasources` under the explorer panel.
2. Go to `+Create new` and select the `users` database from the Sample Databases. The user database will now appear under the <mark style="color:green;">Active</mark> window.
3. From the "Active" window, click on <mark style="color:orange;">New Query+</mark> for the Users database and create a "select" [query](../../core-concepts/data-access-and-binding/querying-a-database/) to fetch the data.
4. Go back to the canvas and drag the table widget onto it.
5. Open the property pane, clear the Table data window and enter the following snippet:

```
{{<query_name>.data}}
```

Where `<query_name>` is the query's name created in Step 2.

{% embed url="https://youtu.be/czxtgHJ1sUE" %}

That's it! The table widget will get populated with the data coming from the query.

**Column**

This property shows all the columns in the table, and it gets auto-populated from the Table Data. You can edit the column's name, hide/show a column, and customize more from the column settings.

![](../../.gitbook/assets/columns\_tablewidget.png)

**Column Settings**

You can customize each table column through a set of properties by clicking on the gear icon.

![Column Settings](../../.gitbook/assets/Column\_control.gif)

\
Clicking on the gear icon opens the column settings that give you major customization options - Column control and Styles.

**Column Control**

Column Control has the following properties:

**Column type:** This property allows you to select the type of data in the column.

![](../../.gitbook/assets/column\_type.gif)

\
**Computed Value:** The computed value field is helpful to create custom table columns. For example, you can show a value calculated from the response of two different queries. This field also allows you to manipulate the value using JS expressions; For example, if you want to show the date time stamp in the human-readable format, you can use a Moment.JS function.

![](../../.gitbook/assets/computed\_value.jpg)

\
You can also access each row's column values with `currentRow` property. `currentRow` property can only be accessed inside column properties. It can be helpful if you wish to merge multiple values/properties under a single column.

For example, in the video below, we renamed the 'email' column to 'Contact' and then used the computed value property inside the column settings to merge email and phone in one column. We later hide the phone column.

{% embed url="https://youtu.be/tjc8HlzQ4xU" %}

#### Styles

Depending upon the column type, there are various style properties available to change the look and feel of each column. For example, for a text column, you can:

1. Change the alignment, size, or font style of the text.
2. Change the color of the text or cell background.

**Server-Side Pagination**

The data fetched from the Query/ API is sometimes too large to be displayed on one table page. Server-Side Pagination lets you implement pagination by limiting the number of results fetched per API / Query request. For more information on how to paginate your data, click [here](https://docs.appsmith.com/core-concepts/displaying-data-read/display-data-tables#pagination).

### Binding Properties

These properties allow you to bind your table widget with any other widget in queries or JS objects.

| Binding Property       | Description                                                                                                                  | Snippet                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **selectedRow**        | It contains the data of the row selected by the user. It will be an empty object if no row is selected                       | `{{<table_name>.selectedRow}}`         |
| **selectedRows**       | It contains an array of rows selected by the user when multi-select is enabled. It will be \[null] if no row is selected.    | `{{<table_name>.selectedRows}}`        |
| **triggeredRow**       | When a user interacts with an actionable item (like button) in a row, triggerdRow fetches the data of that column.           | `{{<table_name>.triggeredRow}}`        |
| **isVisible**          | This property indicates whether the widget is visible or not.                                                                | `{{<table_name>.isVisible}}`           |
| **sortOrder**          | This property helps you sort values.                                                                                         | `{{<table_name>.sortOrder}}`           |
| **tableData**          | This property gets all the table data in JSON format.                                                                        | `{{<table_name>.tableData}}`           |
| **selectedRowIndex**   | It gives the index of the row selected by the user. Not applicable when multiple rows are selected.                          | `{{<table_name>.selectedRowIndex}}`    |
| **selectedRowIndices** | It gives you an array of the index of the rows selected by the user. Not applicable when multi-row selection is disabled.    | `{{<table_name>.selectedRowIndices`\}} |
| **filteredTableData**  | It contains the data of the rows that is the resultant of the filters applied, sorting or the data searched                  | `{{<table_name>.filteredTableData}}`   |
| **pageNo**             | Contains the current page number that the user is on. APIs can use it for pagination                                         | `{{<table_name>.pageNo}}`              |
| **pageSize**           | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table | `{{<table_name>.pageSize}}`            |
| **searchText**         | Contains the search text entered by the user in the Table                                                                    | `{{<table_name>.searchText}}`          |

Let's understand the binding properties in detail. Consider a table `Table_1` with the table data given below:

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

![](../../.gitbook/assets/table\_sample\_data.png)

**selectedRow**

A table you have created might contain a large amount of data. But when you want to get the data of a single row of the table, the selectedRow property comes into play.\
selectedRow is an internal property that fetches the row's data selected by the user in the table. You can easily bind different widgets to each table row using this property.

As you already know by now, you can write JS code anywhere in Appsmith inside \{{\}}., To bind the selected row of the table to another widget, open the property pane of it, and add the code snippet given below:

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

![](../../.gitbook/assets/slectedRow\_default.png)

**Displaying column value using selectedRow**

If you want to fetch the data from a column in the row selected on the table, add the column's name after the selected row. You can refer to the code snippet below:

\{{\<table\_name>.selectedRow.\<column\_name>\}}

It will result in the data at `<columnname>` \_\_ of the row selected.\
\_\_\
\_\_Using this snippet in `Table_1`, suppose you want to bind the task of the selected row to the text widget. You will need to open the property pane of the text widget and add the following to its label:

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

Let's bind a text widget to `Table_1` using selectedRows.

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

pageNo gets the page no. of the table that the user is currently viewing. This property can be used by APIs for pagination.\
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
To bind widget using this property, enter the code snippet given below:

```
{{<table_name>.searchText}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using searchText.

{% embed url="https://youtu.be/vn6zx7zMeUs" %}

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Action                 | Description                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onRowSelected**      | Sets the action to run when the user selects a row. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md).                                                                                                                                                                                 |
| **onPageChange**       | Sets the action to run when the table's page changes. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md)                                                                                                                                                                                |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. The property is not available on the app but can **only be used by developers when building apps**. For example, It can be used to set a Limit in your query dynamically. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md) |
| **onSearchTextChange** | Sets the action to run when the user enters a search text. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md).                                                                                                                                                                          |
| **onSort**             | Sets the action to run when the user sorts the data. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md).                                                                                                                                                                                |

### Header Options

These are the options that you can add to the table header. Currently, the following features are available to add or remove from the table header -

* Search
* Filters
* Download
* Pagination

### Styles

Style properties allow you to change the look and feel of the table. It has several options such as -

* Changing the style and size of the font;
* Text alignment;
* Playing around with the color of the text or cell background.

| Style                     | Description                                              |   |
| ------------------------- | -------------------------------------------------------- | - |
| **Cell Background Color** | Allows you to set background color for the cells.        |   |
| **Text Color**            | Allows you to set text color.                            |   |
| **Text Size**             | Allows you to set the size of the text.                  |   |
| **Font Style**            | Allows you to choose a font style, i.e., bold or italic. |   |
| **Text Align**            | Sets the label alignment of the text.                    |   |
| **Vertical Alignment**    | Sets the alignment of the widget.                        |   |
| **Border Radius**         | Allows you to define curved corners.                     |   |
| **Box Shadow**            | Allows you to choose from the available shadow styles.   |   |

## Guides

### Automatically Refresh Data on Tables&#x20;

If you want to update data on Table without re-running the API / or using a refresh button, you can use the `setInterval` function.

In this example, we’ll be using the switch widget (`Switch1`) to control this function and a table widget that uses the `getData` query.

* Drag and Drop `Switch Wiget` into the canvas.
* Next, go to `onChange` event and toggle the `JS` option.
*   Now on `Switch` widget’s `onChange` property, paste the following code after making the necessary changes:

    ```
    {{
    (() => {
        if (Switch1.isSwitchedOn) {
            setInterval(() => getData.run(), 2000, "autoupdate");
        } else {
            clearInterval("autoupdate");
        }
    })()
    }}
    ```

Here, the `setInterval` function calls the `getData` query every 2 seconds when the switch widget is turned on, else, it removes the `autoupdate` (`id`) interval.

![Auto-update table data](<../../.gitbook/assets/Refresh data in tables  table widget.gif>)

### &#x20;Setup Server-Side Search

A search input is available on the table to filter out records being displayed on the table. Using the `onSearchTextChange` event, it is possible to perform a search on the server-side (API server or database) and have the results displayed on the table. A video guide on how to do this is shown below:

{% embed url="https://youtu.be/3ayioaw5uj8" %}
