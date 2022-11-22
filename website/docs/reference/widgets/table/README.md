# Table

The table widget displays data in rows and columns. You can display data from an API in a table, trigger an action when a user selects a row, and even work with sizable paginated data sets.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="How to use Table Widget?" caption="How to use Table Widget?"/>


:::info
If you already know the basics and want to learn how to display data and handle pagination inside a table, [Read this guide](../../../core-concepts/data-access-and-binding/displaying-data-read/display-data-tables.md#pagination).
:::

## Properties

Properties allow you to edit the table, connect it with other widgets and customize the user actions. Let's look into different types of properties.

### Widget Properties

These properties allow you to edit the table itself. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| Widget Property       | Description                                                                                                                  
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Table Data**                 | It lets you edit the data in the table, either by writing an array of objects to display as table rows or binding data from an API/Database using the mustache syntax.|
| **Columns**                    | Auto populated from the Table data. This lets you edit the label, show/hide each column (the eye icon), and also customize the column settings.                                                         |
| **Server Side Pagination**     | Enables you to implement pagination by limiting the number of results fetched per API / Query request. Use this property when your table data is bound to an API / Query.                               |
| **Visible**                    | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                             |
| **Sortable**                   | It enables or disables sorting. If turned off, the user will not be able to sort the data when the app is published.                                                                                    |
| **Default Search Text**        | Sets the default search text of the table.                                                                                                                                                              |
| **Default Selected Row**       | Sets the default selected row of the table. It takes the index no. of the row as an input.                                                                                                              |
| **Default Row Height**         | Sets the height of the row in the table - Default, short or tall.                                                                                                                                       |
| **Enable multi-row selection** | Allows multiple rows of a table to be selected. The rows are populated in the selectedRows field.                                                                                                       |
| **Total Record Count**         | It stores the total number of rows returned by a query or API, which helps in calculating the total number of pages on the table when using server-side pagination. |

Let's understand the widget properties in detail.

#### Table Data

The Table Data in the property pane allows a user to edit data in the table. You can write an array of objects to display it as table rows.

![Property pane showing the Table data](/img/table\_data.png)

You can also bind your data from a database / API using the mustache syntax ( {{}} ).

Let's bind the data from a mock database into a table widget.

1. Create an App and click on `Datasources` under the explorer panel.
2. Go to `+Create new` and select the `users` database from the Sample Databases. The user database will now appear under the Active window.
3. From the "Active" window, click on New Query+ for the Users database and create a "select" [query](../../../core-concepts/data-access-and-binding/querying-a-database/) to fetch the data.
4. Go back to the canvas and drag the table widget onto it.
5. Open the property pane, clear the Table data window and enter the following snippet:

```
{{<query_name>.data}}
```

Where `<query_name>` is the query's name created in Step 2.

<VideoEmbed host="youtube" videoId="czxtgHJ1sUE" title="" caption=""/>

That's it! The table widget will get populated with the data coming from the query.

#### Columns

This property shows all the columns in the table, and it gets auto-populated from the Table Data. You can edit the column's name, hide/show a column, and customize more from the [column settings](column-settings.md).

![](/img/columns\_tablewidget.png)

#### Server-Side Pagination

The data fetched from the Query/ API is sometimes too large to be displayed on one table page. Server-Side Pagination lets you implement pagination by limiting the number of results fetched per API / Query request. For more information on how to paginate your data, click [here](./../../../core-concepts/data-access-and-binding/displaying-data-read/display-data-tables.md#pagination).

#### Inline Editing

Inline editing allows you to edit a cell contents in the table columns. It can be enabled for the whole column or at the cell level based on a condition. Read more about Inline editing [here](./#inline-editing).

#### Total Record Count

Total record count stores the total number of rows in the table. It's useful in pagination as it helps in determining the number of pages, thus enabling/disabling the next/previous page control in the table. It's only visible when you enable **server-side pagination**.
To get the Total record count of your data, follow the steps below:
 
 1. Create a new query `get_count` for the data source connected to the table.
 2. In the query window, enter a count query for the data.
    ```
    #Postgres
    SELECT COUNT(*) FROM <table_name>;
    ```
 3. Click on Run and the output will be displayed the response tab below.

Once the `get_count` query is successfully created, enter the following code to bind the query's output in the total records count:
```
#Postgres
{{get_count.data[0].count}}
```
<VideoEmbed host="youtube" videoId="p7mH00xp7Nc" title="Using Total Records Count in th Table Widget" caption="Using Total Records Count in th Table Widget"/>



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

![](/img/table\_sample\_data.png)

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

<VideoEmbed host="youtube" videoId="0Pl7p1sA1fY" title="selectedRow" caption="selectedRow"/>

The Text widget will then display the data of the row selected on the table.
If no row is selected, selectedRow shows the column names with no data.

![](/img/slectedRow\_default.png)

**Displaying column value using selectedRow**

If you want to fetch the data from a column in the row selected on the table, add the column's name after the selected row. You can refer to the code snippet below:

```
{{<table_name>.selectedRow.<column_name>}}
```

It will result in the data at `<columnname>` of the row selected. Using this snippet in `Table_1`, suppose you want to bind the task of the selected row to the text widget. You will need to open the property pane of the text widget and add the following to its label:

```
{{Table_1.selectedRow.task}}
```

<VideoEmbed host="youtube" videoId="hHZ5IbtE-wo" title="Displaying column value using selectedRow" caption="Displaying column value using selectedRow"/>

#### selectedRows

selectedRows allows you to fetch the data from the table when the user selects multiple rows. To use this property, enable the "multi-row selection" option from the property pane of the table widget.

To bind a widget to the multiple rows of the table, enter the snippet given below:

```
{{<table_name>.selectedRows}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using selectedRows.

<VideoEmbed host="youtube" videoId="K8F4oggpOk0" title="selectedRows" caption="selectedRows"/>

A null array '\[]' is returned If no row is selected in the table.

#### triggeredRow

If your table has actionable items (like buttons) and a user interacts with it, triggeredRow fetches row's data where that action has been performed.

To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.triggeredRow}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using triggeredRow.

<VideoEmbed host="youtube" videoId="HUcQ8lf7cH4" title="triggeredRow" caption="triggeredRow"/>

#### selectedRowIndex

selectedRowIndex gives you the index number of the selected row in the table. It is only applicable when one row is selected. If you have multiple rows selected, it returns "-1".

To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.selectedRowIndex}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using seledRowIndex.

<VideoEmbed host="youtube" videoId="KXYkdFzOKsQ" title="selectedRowIndex" caption="selectedRowIndex"/>

#### selectedRowIndices

selectedRowIndices gives you an array of the index numbers of the multiple rows selected in the table. It is only applicable when multiple rows are selected. You have to enable the "multi-row selection" from the property pane to use this property.

To bind widget using this property, enter the code snippet given below:

```
{{<table_name>.selectedRowIndices}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using seledRowIndices.

<VideoEmbed host="youtube" videoId="yLOYqrW2xaw" title="selectedRowIndices" caption="selectedRowIndices"/>

#### filteredTableData

filteredTableData contains the data of the rows that is the resultant of the filters applied, sorting, or the data searched.

To use this property in a widget, enter the code snippet given below:

```
{{<table_name>.filteredTableData}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using filteredTableData.

<VideoEmbed host="youtube" videoId="0tvZXEtSMp4" title="filteredTableData" caption="filteredTableData"/>

#### pageNo

pageNo gets the page no. of the table that the user is currently viewing. This property can be used by APIs for pagination.\
\
To use this property in a widget, enter the code snippet given below:

```
{{<table_name>.pageNo}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using pageNo.

<VideoEmbed host="youtube" videoId="DqKok2cCJk0" title="pageNo" caption="pageNo"/>

#### pageSize

pageSize shows the size of the current page of the table, i.e., the total number of rows displayed on a page. pageSize can change on resizing the table.
To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.pageSize}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using pageSize.

<VideoEmbed host="youtube" videoId="XkFJQh4vcCw" title="pageSize" caption="pageSize"/>

#### searchText

searchText fetches the text entered in the search bar by the user.

To bind widget using this property, enter the code snippet given below:

```
{{<table_name>.searchText}}
```

Where `<table_name>` is the name of your table.

Let's bind a text widget to `Table_1` using searchText.

<VideoEmbed host="youtube" videoId="vn6zx7zMeUs" title="searchText" caption="searchText"/>

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Action                 | Description                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row. See a list of [supported actions](../../appsmith-framework/widget-actions/).                                                                                                                                                                                  |
| **onPageChange**       | Sets the action to run when the table's page changes. See a list of [supported actions](../../appsmith-framework/widget-actions/).                                                                                                                                                                                |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. The property is not available on the app but can **only be used by developers when building apps**. For example, It can be used to set a Limit in your query dynamically. See a list of [supported actions](../../appsmith-framework/widget-actions/). |
| **onSearchTextChange** | Sets the action to run when the user enters a search text. See a list of [supported actions](../../appsmith-framework/widget-actions/).                                                                                                                                                                           |
| **onSort**             | Sets the action to run when the user sorts the data. See a list of [supported actions](../../appsmith-framework/widget-actions/).                                                                                                                                                                                 |

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

| Style                     | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **Cell Background Color** | Allows you to set background color for the cells.        |
| **Text Color**            | Allows you to set text color.                            |
| **Text Size**             | Allows you to set the size of the text.                  |
| **Font Style**            | Allows you to choose a font style, i.e., bold or italic. |
| **Text Align**            | Sets the label alignment of the text.                    |
| **Vertical Alignment**    | Sets the alignment of the widget.                        |
| **Cell Borders** | Allows you to choose the border style for the table's cells. Default (all borders), horizontal borders only, or no borders. |
| **Border Radius**         | Allows you to define curved corners.                     |
| **Box Shadow**            | Allows you to choose from the available shadow styles.   |

## Guides

### Automatically Refresh Data on Tables

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

![Auto-update table data](</img/Refresh_data_in_tables__table_widget.gif>)

### Setup Server-Side Search

A search input is available on the table to filter out records being displayed on the table. Using the `onSearchTextChange` event, it is possible to perform a search on the server-side (API server or database) and have the results displayed on the table. A video guide on how to do this is shown below:

<VideoEmbed host="youtube" videoId="3ayioaw5uj8" title="How To Setup Server-Side Search For The Table Widget" caption="How To Setup Server-Side Search For The Table Widget"/>
