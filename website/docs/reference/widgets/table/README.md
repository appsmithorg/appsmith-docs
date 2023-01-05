# Table

The table widget displays data in rows and columns. You can display data from an API in a table, trigger an action when a user selects a row, and even work with sizable paginated data sets. Once a table is connected to a datasource, you can also use [inline-editing](/reference/widgets/table/inline-editing) features to make changes and additions to the table data directly in the widget.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="How to use Table Widget?" caption="How to use Table Widget?"/>

:::info
If you already know the basics and want to learn how to display data and handle pagination inside a table, [read this guide](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#pagination).
:::

## Properties

Properties allow you to edit the table, connect it with other widgets and customize the user actions. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| Property       | Type | Definition | Code Snippet |
| ---------------|------|------------|--------------|
| **Table Data**                 | Widget | It lets you edit the data in the table, either by writing an array of objects to display as table rows or binding data from an API/Database using the mustache syntax. |
| **Columns**                    | Widget | Auto populated from the Table data. This lets you edit the label, show/hide each column (the eye icon), and also customize the column settings
| **Cell wrapping**              | Formatting | Controls how overflowing contents of the column are handled. When turned on, the contents get wrapped to the next line.                                                         |
| **Show Pagination** | Formatting | Toggles visibility for the page information and control buttons in the table header. |
| **Server Side Pagination**     | Widget | Enables you to implement pagination by limiting the number of results fetched per API / Query request. Use this property when your table data is bound to an API / Query.                               |
| **Total Records** | Widget | This number value is displayed in the table header to inform the user of how many records exist in the table. This property is only visible when you enable **Server Side Pagination**. |
| **Allow Searching** | Widget | Toggles visibility of the search bar in the table header. |
| **Client Side Search** | Widget | Sets search behavior for the search bar in the table header. When turned on, the bar searches only the data currently loaded in the table. Otherwise, it searches the entire data set. |
| **Default Search Text**        | Formatting | Sets the default search query for the search bar in the table header.     |
| **Allow Filtering** | Widget | Toggles visibility for the "Filters" button and its features in the table header. |
| **Default Selected Row**       | Formatting | Sets which rows are selected in the table by default. When **Enable multi-row selection** is turned on, this setting expects an array of numbers corresponding to the indices of the selected rows. Otherwise, it expects a single number.    |
| **Enable multi-row selection** | Widget | Allows multiple rows of a table to be selected at the same time. The rows are accessible by the `{{ Table1.selectedRows }}` property.         |
| **Column Sorting** | Widget | Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode. |
| **Allow adding a row**         | Widget | Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use code or a query in the **onSave** event to update the source of the table's data and reflect the user's changes. See [inline editing](/reference/widgets/table/inline-editing#allow-adding-a-row) for more details. |
| **Default Values** | Widget | The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data. See [inline editing](/reference/widgets/table/inline-editing#default-values) for more details. |
| **Visible**    | Formatting | It controls the widget's visibility on the page. When turned off, the widget won't be visible when the app is published.                                                                             |
| **Animate Loading** | Formatting | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |
| **Allow Download** | Widget | Toggles visibility of the "Download" button in the table header. When turned on, users are able to download the table data as a .csv file or Microsoft Excel file. |
| **CSV Separator** | Widget | Sets the separator character to use for formatting the downloaded .csv file. Only applies when **Allow Download** is turned on. |
| **selectedRow**        | Binding | It contains the data of the row selected by the user. It's an empty object if no row is selected.                       | `{{<table_name>.selectedRow}}`         |
| **selectedRows**       | Binding | It contains an array of rows selected by the user when multi-select is enabled. It's \[null] if no row is selected.    | `{{<table_name>.selectedRows}}`        |
| **triggeredRow**       | Binding | When a user interacts with an actionable item (like button) in a row, `triggeredRow` fetches the data of that column.           | `{{<table_name>.triggeredRow}}`        |
| **isVisible**          | Binding | This property indicates whether the widget is visible or not.                                                                | `{{<table_name>.isVisible}}`           |
| **sortOrder**          | Binding | This property helps you sort values.                                                                                         | `{{<table_name>.sortOrder}}`           |
| **tableData**          | Binding | This property gets all the table data in JSON format.                                                                        | `{{<table_name>.tableData}}`           |
| **selectedRowIndex**   | Binding | It gives the index of the row selected by the user. Not applicable when multiple rows are selected.                          | `{{<table_name>.selectedRowIndex}}`    |
| **selectedRowIndices** | Binding | It gives you an array of the index of the rows selected by the user. Not applicable when multi-row selection is turned off.    | `{{<table_name>.selectedRowIndices`\}} |
| **filteredTableData**  | Binding | Contains the data of the rows left after applying any selected filters, sort rule, or search terms.                  | `{{<table_name>.filteredTableData}}`   |
| **pageNo**             | Binding | Contains the current page number that the user is on. APIs can use it for pagination                                         | `{{<table_name>.pageNo}}`              |
| **pageSize**           | Binding | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table | `{{<table_name>.pageSize}}`            |
| **searchText**         | Binding | Contains the search text entered by the user in the Table                                                                    | `{{<table_name>.searchText}}`          |


#### Table data

The Table Data in the property pane allows a user to edit data in the table. You can write an array of objects to display it as table rows.

![Property pane showing the Table data](/img/table\_data.png)

You can also bind your data from a database / API using the mustache syntax ( `{{ }}` ).

Follow these steps to bind the data from a mock database into a table widget:

1. Create an App and click on `Datasources` under the explorer panel.
2. Go to `+Create new` and select the `users` database from the Sample Databases. The user database should now appear under the Active window.
3. From the "Active" window, click New Query+ for the Users database and create a "select" [query](/core-concepts/data-access-and-binding/querying-a-database/) to fetch the data.
4. Go back to the canvas and drag the table widget onto it.
5. Open the property pane, clear the Table data window and enter the following snippet:

```
{{<query_name>.data}}
```

Where `<query_name>` is the query's name created in Step 2.

<VideoEmbed host="youtube" videoId="czxtgHJ1sUE" title="" caption=""/>

Now, the table widget should be populated with the data coming from the query.

#### Columns

This property shows all the columns in the table, and it gets auto populated from the Table Data. You can edit the column's name, hide/show a column, and customize more from the [column settings](column-settings.md).

![](/img/columns\_tablewidget.png)

#### Cell wrapping

<VideoEmbed host="youtube" videoId="bNMV_WhTUU4" title="Table | Inline Editing | Cell Wrapping" caption="Wrapping text within cells"/>

Controls how overflowing contents of the column are handled. When turned on, the contents get wrapped to the next line.

#### Server side pagination

The data fetched from the Query/ API is sometimes too large to be displayed on one table page. Server-Side Pagination lets you implement pagination by limiting the number of results fetched per API / Query request. For more information on how to paginate your data, click [here](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables.md#pagination).

#### Total records

The total records field stores the total number of rows in the table. It's useful in pagination as it helps in determining the number of pages, and then when to turn on/off the page control buttons in the table header. It's only visible when you enable **server-side pagination**.

<VideoEmbed host="youtube" videoId="p7mH00xp7Nc" title="Using Total Records in the Table Widget" caption="Using Total Records in the Table Widget"/>

To get the total record count of your data, follow the steps below:
 
 1. Create a new query `get_count` for the data source connected to the table.
 2. In the query window, enter a count query for the data.
    ```
    #Postgres
    SELECT COUNT(*) FROM <table_name>;
    ```
 3. Click on Run and you can see the output in the response tab below.

Once the `get_count` query is successfully created, enter the following code to bind the query's output in the total records field:
```
#Postgres
{{get_count.data[0].count}}
```

#### Client side search

Client side search controls whether the user is able to search the entire data set for their query, or only what's currently shown in the table widget.

#### Column sorting

Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode (where the app is deployed).

<VideoEmbed host="youtube" videoId="TODO" title="TODO" caption="TODO"/>

## Visible

This controls the widget's visibility on the app's page. When turned off, the widget isn't visible in the published app. You can also use JS code to determine the widget's visibility programmatically. Click on `JS` next to the `Visible` field in the properties pane to write JavaScript code.

For example, drag a checkbox widget `Checkbox1` onto the canvas and bind it to the table's `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, `Visible` is set to `true`, and the table becomes visible in the app.

<VideoEmbed host="youtube" videoId="Jb5bNVhFoRE" title="Visible" caption="Visible"/>

#### CSV separator 

Sets the separator character to use for formatting the downloaded .csv file. Only applies when **Allow Download** is turned on.

<VideoEmbed host="youtube" videoId="TODO" title="TODO" caption="TODO"/>

---

## (REMOVE) Inline editing

Inline editing allows users to edit cell contents in the table columns. You can enable it for the whole column, or you can use code to enable it for only particular cells. You can also allow users to add new rows of data to the Table. Read more about inline editing [here](./#inline-editing).

#### selectedRow

A table you have created might contain a large amount of data. But when you want to get the data of a single row of the table, the selectedRow property comes into play.
selectedRow is an internal property that fetches the data of the table row that the user selected. You can bind different widgets to each table row using this property.

As you already know by now, you can write JS code anywhere in Appsmith inside \{{\}}., To bind the selected row of the table to another widget, open the property pane of it, and add the code snippet given below:

```
{{<table_name>.selectedRow}}
```

Where `<table_name>` is the name of your table.

Drag a text widget onto the canvas and bind it to a selected table row of `Table_1`.\
Open the property pane of the text widget and add the following snippet to its label:

```
{{Table_1.selectedRow}}
```

<VideoEmbed host="youtube" videoId="0Pl7p1sA1fY" title="selectedRow" caption="selectedRow"/>

The Text widget then displays the data of the row selected on the table.
If no row is selected, selectedRow shows the column names with no data.

![](/img/slectedRow\_default.png)

##### Displaying column value using selectedRow

If you want to fetch the data from a column in the row selected on the table, add the column's name after the selected row. You can refer to the code snippet below:

```
{{<table_name>.selectedRow.<column_name>}}
```

This gives you the data for `<columnname>` of the selected row. Using this snippet in `Table_1`, suppose you want to bind the task of the selected row to the text widget. To do this open the property pane of the text widget and add the following to its label:

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

The following video shows how to bind a text widget to `Table_1` using selectedRows.

<VideoEmbed host="youtube" videoId="K8F4oggpOk0" title="selectedRows" caption="selectedRows"/>

An empty array `[]` is returned if no row is selected in the table.

#### triggeredRow

If your table has actionable items (like buttons) and a user interacts with it, triggeredRow fetches row's data where that action has been performed.

To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.triggeredRow}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using triggeredRow.

<VideoEmbed host="youtube" videoId="HUcQ8lf7cH4" title="triggeredRow" caption="triggeredRow"/>

#### selectedRowIndex

selectedRowIndex gives you the index number of the selected row in the table. It's only applicable when one row is selected. If you have multiple rows selected, it returns `-1`.

To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.selectedRowIndex}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using seledRowIndex.

<VideoEmbed host="youtube" videoId="KXYkdFzOKsQ" title="selectedRowIndex" caption="selectedRowIndex"/>

#### selectedRowIndices

selectedRowIndices gives you an array of the index numbers of the multiple rows selected in the table. It's only applicable when multiple rows are selected. You have to enable the "multi-row selection" from the property pane to use this property.

To bind widget using this property, enter the code snippet given below:

```
{{<table_name>.selectedRowIndices}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using seledRowIndices.

<VideoEmbed host="youtube" videoId="yLOYqrW2xaw" title="selectedRowIndices" caption="selectedRowIndices"/>

#### filteredTableData

`filteredTableData` contains the data of the rows left after applying any selected filters, sort rule, or search terms.

To use this property in a widget, enter the code snippet given below:

```
{{<table_name>.filteredTableData}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using filteredTableData.

<VideoEmbed host="youtube" videoId="0tvZXEtSMp4" title="filteredTableData" caption="filteredTableData"/>

#### pageNo

pageNo gets the page no. of the table that the user is currently viewing. This property can be used by APIs for pagination.\
\
To use this property in a widget, enter the code snippet given below:

```
{{<table_name>.pageNo}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using pageNo.

<VideoEmbed host="youtube" videoId="DqKok2cCJk0" title="pageNo" caption="pageNo"/>

#### pageSize

`pageSize` shows the total number of rows displayed on a page of the table. `pageSize` can change on resizing the table.
To bind a widget using this property, enter the code snippet given below:

```
{{<table_name>.pageSize}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using pageSize.

<VideoEmbed host="youtube" videoId="XkFJQh4vcCw" title="pageSize" caption="pageSize"/>

#### searchText

searchText fetches the text entered in the search bar by the user.

To bind widget using this property, enter the code snippet given below:

```
{{<table_name>.searchText}}
```

Where `<table_name>` is the name of your table.

The following video shows how to bind a text widget to `Table_1` using searchText.

<VideoEmbed host="youtube" videoId="vn6zx7zMeUs" title="searchText" caption="searchText"/>

### Header options

These are the options that you can add to the table header. Currently, the following features are available to add or remove from the table header -

* Search
* Filters
* Download
* Pagination

## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Action                 | Description               |
| ---------------------- | ------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row.   |
| **onPageChange**       | Sets the action to run when the table's page changes.  |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. This event can only be triggered by developers working on the app, not by end users. For example, it can be used to set a Limit in your query dynamically. |
| **onSearchTextChange** | Sets the action to run when the user enters a search text.     |
| **onSort**             | Sets the action to run when the user sorts the data.          |

## Styles

Style properties allow you to change the look and feel of the table. It has several options, such as:

* Changing the style and size of the font
* Text alignment
* Choosing the color of text or cell backgrounds

| Style                     | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **Default Row Height**    | Sets the height of the row in the table - short, default, or tall.  |
| **Cell Background Color** | Allows you to set background color for the cells.        |
| **Text Color**            | Allows you to set text color.                            |
| **Text Size**             | Allows you to set the size of the text.                  |
| **Font Style**            | Allows you to choose a font style, such as **bold** or _italic_. |
| **Text Align**            | Sets the label alignment of the text.                    |
| **Vertical Alignment**    | Sets the alignment of the widget.                        |
| **Cell Borders**          | Allows you to choose the border style for the table's cells. Default (all borders), horizontal borders only, or no borders. |
| **Border Radius**         | Allows you to define curved corners.                     |
| **Box Shadow**            | Allows you to choose from the available shadow styles.   |

## Guides

### Refresh table data in real time

If you want to update data in the table periodically without requiring users to trigger the refreshes, you can use the `setInterval` function.

In this example, you'll use the [Switch widget](/reference/widgets/switch/) `Switch1` to control this function and a table widget that uses the `getData` query.

* Drag and drop a switch widget onto the canvas.
* Go to its **onChange** event and toggle the `JS` option.
* In the **onChange** field, paste the following code with any necessary changes:

```javascript
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

Here, the `setInterval` function calls the `getData` query every 2 seconds once the switch widget is turned on, or it stops the cycle if it's switched off.

![Automatically update table data](</img/Refresh_data_in_tables__table_widget.gif>)

### Setup server-side search

A search input is available on the table to filter out records being displayed on the table. Using the `onSearchTextChange` event, it's possible to perform a search on the server-side (API server or database) and have the results displayed on the table. A video guide on how to do this is shown below:

<VideoEmbed host="youtube" videoId="3ayioaw5uj8" title="How To Setup Server-Side Search For The Table Widget" caption="How To Setup Server-Side Search For The Table Widget"/>
