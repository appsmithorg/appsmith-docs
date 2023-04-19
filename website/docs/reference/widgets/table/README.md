---
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Table

This page explains how to use a Table widget to display data in rows and columns, trigger actions based on user row selection, and work with paginated data sets of any size.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="Using the Table Widget" caption="Using the Table Widget"/>

## Display data 

To display data in a Table widget, you can use the **Table Data** property.

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
**Example 2:** if the data retrieved from the query is not in the desired format, you can use JavaScript to transform it before passing it to the Table widget.

1. Use the `users` table in the sample database and fetch the data using the `fetchData` SQL query.

2. Use JavaScript to transform the data by adding it to the **Options** property.

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


## Server-side pagination

When displaying large datasets from queries, it is recommended to use server-side pagination. Appsmith supports responses up to 5 MB.

To paginate the responses and request smaller chunks of data at a time:

1. Enable the **Server-side pagination** property in the table
2. Run the query via the **onPageChange** event
3. Configure pagination in the query using the pagination method.

:::tip
Turning on **Server side pagination** also enables the **Total records** property. This property is useful for helping to control the page buttons in the table header.
:::

### Offset-based pagination

Offset-based pagination is a technique used to fetch a large dataset in smaller sets. It works by using the page number and size to calculate the offset of records to fetch from a database or API. 

To retrieve the correct subset of data using offset-based pagination, the `pageOffset` property, as well as the `pageNo` and `pageSize` values, can be referenced in an API or query using `curly braces`. For instance, to add offset-based pagination in a user's database, you can use this query:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```
Similarly, in an API query, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the example URL:

```
https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
```
### Cursor-based pagination

Cursor-based pagination is a technique used to fetch a large dataset in smaller sets while also improving performance and scalability. Instead of using page numbers and sizes, cursor-based pagination uses a cursor, which is a unique identifier that points to a specific item in the dataset.

You can use cursor-based pagination by setting up queries that use cursors to fetch data. The widget's `previousPageVisited` and `nextPageVisited` reference properties keep track of which pages have been visited, and you can utilize them along with your queries. For instance, to add cursor-based pagination in a user's database, you can use this query:

```sql
SELECT * FROM users {{Table2.nextPageVisited ?  "WHERE id > "+ " "+ Table2.tableData[Table2.tableData.length-1]["id"] : Table2.previousPageVisited ? "WHERE id <"+ " "+ Table2.tableData[0]["id"] : "" }} ORDER BY id LIMIT {{Table2.pageSize}} ;
```
This SQL query selects all columns from the `users` table and applies cursor-based pagination to limit the number of results returned. The `WHERE` clause is dynamically generated based on whether the user has already visited the `next` or `previous` page, and orders the results by `ID`. The `LIMIT` clause limits the number of rows returned using `Table2.pageSize`.


## Server-side searching

Server-side search allows you to request specific records from the server by passing search terms, instead of requesting a full set of data and searching through it on the client side. 

You can use the search input on the table header and `searchText` reference property to filter out records being displayed on the table. The table's `onSearchTextChange` event is triggered whenever the text in the search bar is changed, allowing you to configure the table to query its datasource for the appropriate results.

To use the server-side search with the Table widget, follow these steps:

1. Create a query, and add the `searchText` reference property to the query:

   As a SQL statement:
   ```sql
   SELECT * FROM users WHERE name LIKE {{"%" + Table1.searchText + "%"}} ORDER BY id LIMIT 10;
   ```

   You can also pass the `searchText` property as a URL parameter in an API request:
   ```
   https://mock-api.appsmith.com/users?name={{Table1.searchText}}
   ```

2. Configure the query to run when the `onSearchTextChange` event is triggered in the table's properties pane.

Watch this video to learn how to set up [server-side search](https://www.youtube.com/watch?v=3ayioaw5uj8) for the Table widget.

## Server-side filtering


Server-side filtering is similar to server-side searching, where a term or value is sent to the database or API to filter out unwanted data from the requested dataset. Instead of searching for a term, server-side filtering involves selecting a value that records must match to return in the query response. 

To enable server-side filtering, you can use widgets such as the [Select widget](/reference/widgets/select/) to provide users with a list of supported filters to choose from.

1. Drag a select widget to the canvas and add options that you might use to filter your data.

2. Create a query, and add the Select widget's `selectedOptionValue`:

    As a SQL query:
    ```sql
    SELECT * FROM users WHERE gender = {{genderDropdown.selectedOptionValue}};
    ```

    As an API request with URL parameters:
    ```
    https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}
    ```

3. Set the table widget's **onOptionChange** event to run the query. 



## Refresh table data

To keep your table updated with the latest data from your datasource, you need to ensure that you refresh the table whenever new data is submitted. By default, the table won't automatically reflect any changes made to the datasource, so you would need to use events or code to re-run the query that populates your table with data.

---
**Example:**

To update your table data in real-time, you can use the `setInterval` function. To do this, you can use the [Switch widget](/reference/widgets/switch/) `Switch1` to control this function and a table widget that uses the `getData` query.

* Drag a Switch widget onto the canvas.
* In the **onChange** property, paste the following code with any necessary changes:

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

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Table Data**        | Array/Object	       | Use this field to provide the data to be displayed in the table, either by writing an array of objects to display as table rows or by binding data from an API/Database using the mustache syntax, like `{{<query_name>.data}}`. |
| **Columns**        |  Array           | Automatically populated from the Table Data. This lets you edit the column label, show/hide each column (with the eye icon), and also manage the individual column settings.   |
| **Editable**        |  Boolean           | A property that determines whether a field or cell can be modified by the user. Learn more about [Inline editing](/reference/widgets/table/inline-editing).  |
| **Add a New Column**        |  Button           | A button that allows users to insert a new column into an existing table.    |
| **Primary key column**  |  String	 | Assigns a unique column which helps maintain `selectedRows` and `triggeredRows` based on value. Affects the performance of caching the dataset for quick loading and access. |
| **Show Pagination**  |  Boolean | Toggles visibility for the page information and control buttons in the table header. |
| **Server Side Pagination**  |  Boolean    | Enables you to implement pagination by limiting the number of results fetched per API / query request. Use this property when your table data is bound to an API / query.                               |
| **Total Records**  |  Number | This number value is displayed in the table header to inform the user of how many records exist in the table. This property is only visible when you enable **Server Side Pagination**. |
| **Allow Searching**  |  Boolean | Toggles visibility of the search bar in the table header. |
| **Client Side Search**  |  Boolean | Sets search behavior for the search bar in the table header. When turned on, the bar searches only the data currently loaded in the table. Otherwise, it searches the entire data set. |
| **Default Search Text**     |  String	     | Sets the default search query for the search bar in the table header.     |
| **Allow Filtering**  |  Boolean | Toggles visibility for the "Filters" button and its features in the table header. |
| **Default Selected Row**    |  Number/Array	     | Sets which rows are selected in the table by default. When **Enable multi-row selection** is turned on, this setting expects an array of numbers corresponding to the indices of the selected rows. Otherwise, it expects a single number.    |
| **Enable multi-row selection**  |  Boolean | Allows multiple rows of a table to be selected at the same time. The rows are accessible by the `{{ Table1.selectedRows }}` property.         |
| **Column Sorting** |  Boolean  | Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode. |
| **Visible**    |  Boolean | Controls the widget's visibility on the page. When turned off, the widget won't be visible when the app is published.        |
| **Animate Loading**  |  Boolean | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |
| **Allow Download** |  Boolean  | Toggles visibility of the "Download" button in the table header. When turned on, users are able to download the table data as a `.csv` file or Microsoft Excel file. |
| **Allow Column Freeze**  |  Boolean | Enables freezing and unfreezing the columns via a dropdown in the columns' header cells. |
| **CSV Separator**  |  String | Sets the separator character to use for formatting the downloaded `.csv` file. Only applies when **Allow Download** is turned on. Default: `,` |


### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `Table1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedRow**   |  Object      | Contains the data of the row selected by the user. It's an empty object if no row is selected. | `{{<table_name>.selectedRow}}`   |
| **selectedRows**  |  Array     | Contains an array of rows selected by the user when multi-select is enabled. It's \[null] if no row is selected.    | `{{<table_name>.selectedRows}}`        |
| **triggeredRow**  |  Object      | When a user interacts with an actionable item (like button) in a row, `triggeredRow` fetches the data of that column.   | `{{<table_name>.triggeredRow}}`        |
| **isVisible**    |  Boolean       | Reflects whether the widget is visible or not.  | `{{<table_name>.isVisible}}`   |
| **sortOrder**    |  Object       | Reflects the current column sort criteria. For example, if table rows are being sorted by the value of column `id` in ascending order, this property contains `{"column": "id", "order": "asc"}`.   | `{{<table_name>.sortOrder}}`   |
| **tableData**     |  Array      | Contains all the table data in JSON format.      | `{{<table_name>.tableData}}`  |
| **selectedRowIndex** |  Boolean   | Contains the index of the row selected by the user. Not applicable when multiple rows are selected.    | `{{<table_name>.selectedRowIndex}}`   |
| **selectedRowIndices** |  Array | Contains an array of the index of the rows selected by the user. Not applicable when multi-row selection is turned off.    | `{{<table_name>.selectedRowIndices`\}} |
| **filteredTableData** |  Boolean  | Contains the data of the rows left after applying any selected filters, sort rule, or search terms. | `{{<table_name>.filteredTableData}}` |
| **pageNo**       |  Number       | Contains the current page number that the user is on. APIs can use it for pagination. | `{{<table_name>.pageNo}}`  |
| **pageOffset**    |  Number     | Contains a calculated value to represent how many records to skip when using **Server side pagination**. Use this value in your query to fetch the correct set of results. | `{{<table_name>.pageOffset}}` |
| **pageSize**     |  Number       | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table. | `{{<table_name>.pageSize}}`   |
| **searchText**    |  String      | Contains the search text entered by the user in the Table. | `{{<table_name>.searchText}}`  |
| **isAddRowInProgress**    |  Boolean      | It indicates whether a new row is currently being added to the table. | `{{<table_name>.searchText}}`  |
| **newRow**    |  Object      | Contains data related to newly added row. | `{{<table_name>.searchText}}`  |
| **nextPageVisited**    |  Boolean      | Indicates whether the next page of data has been visited by the user. | `{{<table_name>.searchText}}`  |
| **previousPageVisited**    |  Boolean      | Indicates whether the previous page of data has been visited by the user. | `{{<table_name>.searchText}}`  |
| **tableHeaders**    |  Array      | Indicates whether the table headers are visible.| `{{<table_name>.searchText}}`  |
| **totalRecordsCount**    |  Number      |  Indicates the total number of records in the table. | `{{<table_name>.searchText}}`  |
| **updatedRow**    |  Object      | Contains data related to recently updated added row. | `{{<table_name>.searchText}}`  |
| **updatedRows**    |  Array      | Contains data related to updated added rows.| `{{<table_name>.searchText}}`  |
| **triggeredRowIndex**    |  Number      | An index property that indicates the row index of the table that has been triggered. | `{{<table_name>.searchText}}`  |




### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default Row Height**  |  String   | Sets the height of the row in the table - short, default, or tall.  |
| **Text Size**           |  String   | Sets the size of the text.                               |
| **Emphasis**            |  String   | Sets a font style for text, such as **bold** or _italic_.|
| **Text Align**          |  String   | Sets how text is aligned horizontally within the cells.  |
| **Vertical Alignment**   |  String  | Sets where the cell contents are vertically positioned within the cells. |
| **Cell Background Color** |  String | Sets the background color of the table cells.            |
| **Text Color**           |  String  | Sets the color for the text in the table.                |
| **Cell Borders**         |  String  | Sets the border configuration for the table's cells. Default (all borders), horizontal borders only, or no borders. |
| **Border Radius**        |  String  | Sets rounded-ness for the widget's corners.              |
| **Box Shadow**           |  String  | Sets a shadow around the widget's edges.                 |
| **Border Color**         |  String  | Sets the color of the widget's borders.                  |
| **Border Width**        |  Number   | Sets the thickness of the widget's borders.              |


### Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)

| Action                 | Description               |
| ---------------------- | ------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row.   |
| **onPageChange**       | Sets the action to run when the table's page changes.  |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. This event can only be triggered by developers working on the app, not by end users. For example, it can be used to set a Limit in your query dynamically. |
| **onSearchTextChange** | Sets the action to run when the user enters a search text.     |
| **onSort**             | Sets the action to run when the user sorts the data.          |
