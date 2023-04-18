---
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Table

This page explains how to use a Table widget to display data in rows and columns, trigger actions based on user row selection, and work with paginated data sets of any size.sizable paginated data sets.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="Using the Table Widget" caption="Using the Table Widget"/>

## Display static data 

To display static data in a Table widget, you can use the **Table Data** property.

 The data should be specified as an array of objects, where each object in the array represents a row, and the properties of the object represent the columns in the table. In the given example, the table has four columns: `step`, `task`, and `status`. 

```js
[
  {
    "step": "#1",
    "task": "Drop a table",
    "status": "approved"
  },
  {
    "step": "#2",
    "task": "Create a query fetch_users with the Mock DB",
    "status": "pending"
  },
  {
    "step": "#3",
    "task": "Bind the query using => fetch_users.data",
    "status": "pending"
  }
]
```



## Display data dynamically

You can dynamically generate options by fetching data from queries or JS functions by binding the response to the **Table Data** property.

---
**Example 1:** suppose you have data stored in a database and you want to display it in the Table widget.

1.  Fetch data from the [sample database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve the data.

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

2. In the Table's **Table Data** property, display the data using:

```js
{{fetchData.data}}
```
With this configuration, the Table widget displays all the data from the query. It is recommended to retrieve the data in a structured format directly from the query, as it simplifies the configuration when displaying the data in the Table widget.

---
**Example 2:** if the data retrieved from the query is not in the desired format, you can use **JavaScript to transform** it before passing it to the Table widget.

1. Use the `users` table in the sample database and fetch the data using the `fetchData` SQL query.

2. Use JavaScript to **transform the data** by adding it to the **Options** property.

```javascript
{{fetchData.data.map((user) => {
  return {
    name: user.name,
    email: user.email,
    country: user.country
    };
  });
}}
```

This code is using the `map()` function to extract specific data, such as the `name`, `email`, and `country`, from the `fetchData` query. 


## Server side pagination

When displaying large datasets from APIs or queries, it's important to use server-side pagination to avoid performance issues. Appsmith supports responses up to 5 MB, so pagination is necessary to request smaller chunks of data

To paginate the responses and request smaller chunks of data at a time:

1. Enable the server-side pagination property in the table
2. Call the API / query via the **onPageChange** event
3. Configure pagination in the API / query using the pagination method.

:::tip
Turning on **Server side pagination** also enables the **Total records** property. This property is useful for helping to control the page buttons in the table header.
:::

### Offset based pagination

Offset-based pagination is a technique used to fetch a large dataset in smaller sets. It works by using the page number and size to calculate the offset of records to fetch from a database or API. The offset is calculated by multiplying the page number minus one by the page size, as shown in the formula:

```
Table1.pageOffset = (Table1.pageNo - 1) * Table1.pageSize
```

To retrieve the correct subset of data using offset-based pagination, the `pageOffset` property, as well as the `pageNo` and `pageSize` values, can be referenced in an API or query using `curly braces`. For instance, to add offset-based pagination in a user's database, you can use this query:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```
Similarly, in an API, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the example URL:

```
https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
```
### Cursor based pagination

Cursor-based pagination is a technique used to fetch a large dataset in smaller sets while also improving performance and scalability. Instead of using page numbers and sizes, cursor-based pagination uses a cursor, which is a unique identifier that points to a specific item in the dataset.



## Edit table data


To edit and update table data directly from the UI, you can use Inline editing. To enable inline editing for a table, you can make individual columns editable by checking the **Editable** checkbox in the Columns section of the Table widget properties panel. Once inline editing is enabled, you can double-click on a cell to edit its contents. 

To update the data in a table, you can set the **onSubmit** event for each individual column. This event can be used to perform an action, such as updating a database, when the edited data cell is saved.

If you select Multi Row from the **Update mode** property, you can edit multiple rows at the same time. The data would be automatically updated as you make changes.


Learn more about [Inline editing](/reference/widgets/table/inline-editing).

## Columns
The **Columns** section in the Table widget properties panel provides a range of options for managing table columns. You can edit the properties of existing columns, including their name, data type, and computed value. Additionally, you can add new custom columns, rearrange columns, and hide columns as needed.

### Format columns 
Formatting table columns is important for clear data presentation. By using the gear icon located in the properties pane of a table, you can access a range of properties to customize each column to your specific needs. You can adjust the **Column Type** property to buttons, checkboxes, icons, images, and more. Additionally, you can use **Computed value** property that allows you to dynamically compute and display data in a table column based on custom logic or expressions.  

---
**Example**: Prefix example...


### Freeze columns

The Freeze Columns feature allows you to freeze the columns of the table while keeping the rest of the table scrollable. This can be useful when you have a large table with many columns and want to keep some of the important columns always visible.

 You can freeze columns by turning on the **Allow Column Freeze** property and selecting to freeze a column on either the left or right side of the table. You can also freeze or unfreeze columns via individual column properties.

 ![Use the column header arrow to freeze or unfreeze columns](/img/as-freeze-column.png)


Learn more about [Column settings](/reference/widgets/table/column-settings).


## Rows

### Add a new row

To add a new row, you first need to turn on the **Allow adding a row** property. This property enables the user to add new rows to the table by clicking on the **+ New Row** button on the table.

To ensure that the data entered in the new row is saved to a database, you can use the **onSave** property. This property allows you to define a custom function that would be triggered whenever a new row is added

### Trigger actions on row selection

To trigger actions on row selection in a table, you can use the **onRowSelected** event. When a user clicks on a row, you can perform a query or execute a JavaScript function using this event. For example, you can display a Modal with the data from the selected row.

To select multiple rows at the same time, you can enable the **Enable Multi-row Selection** property in the Table. To access the data from the selected rows, you can use the `selectedRows` reference property. This property provides an array of objects, where each object represents a selected row, and the object properties represent the data from that row.


## Search, filter, and sort


### Server side search

Use server side search to make requests that return just the records you need; rather than requesting a full set of data from the server and then searching through it on the client, you can pass search terms to the server to help it return the records you're looking for. This can significantly improve response times when working with large data sets.

A search input is available on the table header to filter out records being displayed on the table. You can access the text in the search bar with `Table1.searchText`; anytime that text is changed, the table's `onSearchTextChange` event is triggered. Using the search text and the related event, you can configure your table to query its datasource for the appropriate results:

<VideoEmbed host="youtube" videoId="3ayioaw5uj8" title="How To Setup Server-Side Search For The Table Widget" caption="How To Setup Server-Side Search For The Table Widget"/>

1. Call the API / query with the **onSearchTextChange** event in the table's properties pane.
2. Pass the value of `Table1.searchText` within the API request / query.

As a SQL string:
```sql
SELECT * FROM users WHERE name LIKE {{"%" + Table1.searchText + "%"}} ORDER BY id LIMIT 10;
```

As an API request with URL parameters:
```
https://mock-api.appsmith.com/users?name={{Table1.searchText}}
```


### Server side filter

Server side filtering uses the same principles as described in [server side searching](#server-side-searching):some term or value is sent to the database or API to filter out unnecessary data from the requested dataset. In this case, you choose a value that records must match to return in the query's response.

Server-side filtering requires using another widget, such as a [Select widget](/reference/widgets/select/), which you can use to provide users with a list of supported filters to choose from.

1. Drag a select widget to the canvas and add options that you might use to filter your data
2. Set the table widget's **onOptionChange** event to call your API / query 
3. Pass the Select widget's `selectedOptionValue` within the API request/query string

As a SQL query:
```sql
SELECT * FROM users WHERE gender = {{genderDropdown.selectedOptionValue}};
```

As an API request with URL parameters:
```
https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}
```

## Update table data

To keep your table updated with the latest data from your datasource, you need to ensure that you refresh the table whenever new data is submitted. By default, the table won't automatically reflect any changes made to the data source, so you would need to use events or code to re-run the query that populates your table with data.

**Example 1:**

This can be as simple as creating a [button widget](/reference/widgets/button) whose `onClick` event is bound to `<query_name>.run()`. Here, `<query_name>` is the name of the query that gets data for your table (and is probably referenced in the table's **Table data** field). When the button is clicked, the query is run, and the table is given fresh data.

**Example 2:** 

To update your table data in real-time, you can use the `setInterval` function. To do this, you can use the [Switch widget](/reference/widgets/switch/) `Switch1` to control this function and a table widget that uses the `getData` query.

* Drag and drop a Switch widget onto the canvas.
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





## Properties

Properties allow you to edit the table, connect it with other widgets, and customize how the user interacts with it.

### Widget properties

 General properties control the data and behavior of the widget. These properties are present in the properties pane of the widget.

| Property       | Definition |
| ---------------|------------|
| **Table Data**               | Use this field to provide the data to be displayed in the table, either by writing an array of objects to display as table rows or by binding data from an API/Database using the mustache syntax, like `{{<query_name>.data}}`. |
| **Columns**                    | Automatically populated from the Table Data. This lets you edit the column label, show/hide each column (with the eye icon), and also manage the individual column settings.   |
| **Primary key column** | Assigns a unique column which helps maintain `selectedRows` and `triggeredRows` based on value. Affects the performance of caching the dataset for quick loading and access. |
| **Show Pagination** | Toggles visibility for the page information and control buttons in the table header. |
| **Server Side Pagination**    | Enables you to implement pagination by limiting the number of results fetched per API / query request. Use this property when your table data is bound to an API / query.                               |
| **Total Records** | This number value is displayed in the table header to inform the user of how many records exist in the table. This property is only visible when you enable **Server Side Pagination**. |
| **Allow Searching** | Toggles visibility of the search bar in the table header. |
| **Client Side Search** | Sets search behavior for the search bar in the table header. When turned on, the bar searches only the data currently loaded in the table. Otherwise, it searches the entire data set. |
| **Default Search Text**        | Sets the default search query for the search bar in the table header.     |
| **Allow Filtering** | Toggles visibility for the "Filters" button and its features in the table header. |
| **Default Selected Row**       | Sets which rows are selected in the table by default. When **Enable multi-row selection** is turned on, this setting expects an array of numbers corresponding to the indices of the selected rows. Otherwise, it expects a single number.    |
| **Enable multi-row selection** | Allows multiple rows of a table to be selected at the same time. The rows are accessible by the `{{ Table1.selectedRows }}` property.         |
| **Column Sorting** | Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode. |
| **Visible**   | Controls the widget's visibility on the page. When turned off, the widget won't be visible when the app is published.        |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |
| **Allow Download** | Toggles visibility of the "Download" button in the table header. When turned on, users are able to download the table data as a `.csv` file or Microsoft Excel file. |
| **Allow Column Freeze** | Enables freezing and unfreezing the columns via a dropdown in the columns' header cells. |
| **CSV Separator** | Sets the separator character to use for formatting the downloaded `.csv` file. Only applies when **Allow Download** is turned on. Default: `,` |


### Reference properties

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<table_name>` in the examples below with the name of your table widget.

| Property       | Definition | Code Snippet |
| ---------------|------------|--------------|
| **selectedRow**        | Contains the data of the row selected by the user. It's an empty object if no row is selected. | `{{<table_name>.selectedRow}}`   |
| **selectedRows**       | Contains an array of rows selected by the user when multi-select is enabled. It's \[null] if no row is selected.    | `{{<table_name>.selectedRows}}`        |
| **triggeredRow**       | When a user interacts with an actionable item (like button) in a row, `triggeredRow` fetches the data of that column.   | `{{<table_name>.triggeredRow}}`        |
| **isVisible**          | Reflects whether the widget is visible or not.  | `{{<table_name>.isVisible}}`   |
| **sortOrder**          | Reflects the current column sort criteria. For example, if table rows are being sorted by the value of column `id` in ascending order, this property contains `{"column": "id", "order": "asc"}`.   | `{{<table_name>.sortOrder}}`   |
| **tableData**          | Contains all the table data in JSON format.      | `{{<table_name>.tableData}}`  |
| **selectedRowIndex**   | Contains the index of the row selected by the user. Not applicable when multiple rows are selected.    | `{{<table_name>.selectedRowIndex}}`   |
| **selectedRowIndices** | Contains an array of the index of the rows selected by the user. Not applicable when multi-row selection is turned off.    | `{{<table_name>.selectedRowIndices`\}} |
| **filteredTableData**  | Contains the data of the rows left after applying any selected filters, sort rule, or search terms. | `{{<table_name>.filteredTableData}}` |
| **pageNo**             | Contains the current page number that the user is on. APIs can use it for pagination. | `{{<table_name>.pageNo}}`  |
| **pageOffset**)        | Contains a calculated value to represent how many records to skip when using **Server side pagination**. Use this value in your query to fetch the correct set of results. | `{{<table_name>.pageOffset}}` |
| **pageSize**           | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table. | `{{<table_name>.pageSize}}`   |
| **searchText**         | Contains the search text entered by the user in the Table. | `{{<table_name>.searchText}}`  |

### Style properties

Style properties allow you to change the look and feel of the table. These properties are present in the properties pane of the widget.

| Style                     | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **Default Row Height**    | Sets the height of the row in the table - short, default, or tall.  |
| **Text Size**             | Sets the size of the text.                               |
| **Emphasis**              | Sets a font style for text, such as **bold** or _italic_.|
| **Text Align**            | Sets how text is aligned horizontally within the cells.  |
| **Vertical Alignment**    | Sets where the cell contents are vertically positioned within the cells. |
| **Cell Background Color** | Sets the background color of the table cells.            |
| **Text Color**            | Sets the color for the text in the table.                |
| **Cell Borders**          | Sets the border configuration for the table's cells. Default (all borders), horizontal borders only, or no borders. |
| **Border Radius**         | Sets rounded-ness for the widget's corners.              |
| **Box Shadow**            | Sets a shadow around the widget's edges.                 |
| **Border Color**          | Sets the color of the widget's borders.                  |
| **Border Width**          | Sets the thickness of the widget's borders.              |


### Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Action                 | Description               |
| ---------------------- | ------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row.   |
| **onPageChange**       | Sets the action to run when the table's page changes.  |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. This event can only be triggered by developers working on the app, not by end users. For example, it can be used to set a Limit in your query dynamically. |
| **onSearchTextChange** | Sets the action to run when the user enters a search text.     |
| **onSort**             | Sets the action to run when the user sorts the data.          |
