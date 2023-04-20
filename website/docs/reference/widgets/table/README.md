---
toc_min_heading_level: 2
toc_max_heading_level: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Table

This page explains how to use a Table widget to display data in tabular format, trigger actions based on user interaction, and work with paginated data sets of any size.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="Using the Table Widget" caption="Using the Table Widget"/>

## Display data 

To display data in a Table widget, you can use the **Table Data** property.

 The data should be specified as an array of objects, where each object in the array represents a row, and the properties of the object represent the columns in the table. In the given example, the table has three columns: `step`, `task`, and `status`. 

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



### Display data dynamically

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
The Table widget displays all the data from the query. 

---
**Example 2:** if the data retrieved from the query is not in the desired format, you can use JavaScript to transform it before passing it to the Table widget.

1.  Fetch data from the [sample API](/core-concepts/connecting-to-data-sources/authentication#sample-api) `users` using the following URL:

```
https://mock-api.appsmith.com/users?page=1
```


2. Use JavaScript to transform the data by adding it to the **Table Data** property.

```javascript
{{fetchApi.data.users.map((user) => {
  return {
    name: user.name,
    email: user.email
    };
  });
}}
```

This code is using the `map()` function to extract specific data, such as the `name`,and `email`, from the `fetchApi` query. 


## Server-side pagination

Appsmith can handle query responses of up to 5 MB. To display large datasets and optimise performance, use server-side pagination. Pagination can be implemented using Offset-based pagination or Cursor-based pagination:

<Tabs queryString="current-edition">
<TabItem label="Offset-based pagination" value="Offset_edition">


 Offset-based pagination works by using the page number and size to calculate the offset of records to fetch from a database or API. 

1. Enable the **Server-side pagination** property in the table. 
2. Create a query and use `pageSize` and `pageOffset`  reference properties to implement pagination.

   ```sql
    SELECT * FROM users LIMIT {{ <widget_name>.pageSize }} OFFSET {{ <widget_name>.pageOffset }}; 
   ```
 In an API query, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the example URL:

   ```
   https://mock-api.appsmith.com/users?page={{<widget_name>.pageNo}}
   ```
3. Set the table widget's **onPageChange** event to run the query.

4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header. For example, `{{fetch_users_count.data.length}}` 


  </TabItem>
  

  <TabItem value="Cursor" label="Cursor-based pagination">

Instead of using page numbers and sizes, cursor-based pagination uses a cursor, which is a unique identifier that points to a specific item in the dataset.

1. Enable the **Server-side pagination** property in the table. 
2. Create a query and use `previousPageVisited` and `nextPageVisited` reference properties to implement pagination.


   ```sql
   SELECT * FROM users {{<widget_name>.nextPageVisited ?  "WHERE id > "+ " "+ <widget_name>.tableData[<widget_name>.tableData.length-1]["id"] : <widget_name>.previousPageVisited ? "WHERE id <"+ " "+ <widget_name>.tableData[0]["id"] : "" }} ORDER BY id LIMIT {{<widget_name>.pageSize}} ;
   ```
This SQL query selects all columns from the `users` table and applies cursor-based pagination to limit the number of results returned. The `WHERE` clause is dynamically generated based on whether the user has already visited the `next` or `previous` page, and orders the results by `ID`.

3. Set the table widget's **onPageChange** event to run the query.

4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header. For example, `{{fetch_users_count.data[0].count}}`


  </TabItem>
 
</Tabs>


## Server-side searching

Server-side searching is a technique of searching for specific records from the server using search terms, without relying on the client-side. When **Allow Searching** property is on, the table header includes a search bar to find matching records. 

You can use the `searchText` reference property to filter out records being displayed on the table. Whenever the text in the search bar is modified, the `onSearchTextChange` event of the table is triggered, allowing you to configure the table to query its datasource for the appropriate results.

To use the server-side search with the Table widget, follow these steps:

1. Create a SQL query using the `searchText` reference property:

   ```sql
   SELECT * FROM users WHERE name LIKE {{"%" + <widget_name>.searchText + "%"}} ORDER BY id LIMIT 10;
   ```

   You can also pass the `searchText` property as a URL parameter in an API request:
   ```
   https://mock-api.appsmith.com/users?name={{<widget_name>.searchText}}
   ```

2. Run the query when the `onSearchTextChange` event is triggered in the table's properties pane.

Watch this video to learn how to set up [server-side search](https://www.youtube.com/watch?v=3ayioaw5uj8) for the Table widget.

## Server-side filtering

Server-side filtering involves using a value to narrow down the results of a query in a similar way to server-side searching. However, instead of searching for a specific term, the selected value is used to filter out unwanted data from the requested dataset. 

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

When changes are made to the datasource that supplies your table with data, the table won't automatically reflect these changes.  Therefore, it is necessary to use events and/or write code that re-executes the query responsible for populating data into the table whenever new data is submitted to the datasource.

**Example:**

When you submit new data to your datasource, re-run your original query as a success callback if the submission succeeds. Imagine you have a table whose data comes from your GET query `getData`, and a button that submits a form with new user input via a query called `sendNewData`:

1. When the form is submitted via the button's `onClick`, it executes
    ```javascript
    {{ sendNewData.run() }}
    ```
2. On success, it executes `getData.run()` as a callback to get the latest version of the dataset that includes the new changes:
    ```javascript
    {{ sendNewData.run(() => getData.run(), () => {}) }}
    ```

Now when `sendNewData` succeeds, your table automatically refreshes itself.

### Update table data in real time

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
| **Enable multi-row selection**  |  Boolean | Allows multiple rows of a table to be selected at the same time. The rows are accessible by the `{{ <widget_name>.selectedRows }}` property.         |
| **Column Sorting** |  Boolean  | Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode. |
| **Visible**    |  Boolean | Controls the widget's visibility on the page. When turned off, the widget won't be visible when the app is published.        |
| **Animate Loading**  |  Boolean | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |
| **Allow Download** |  Boolean  | Toggles visibility of the "Download" button in the table header. When turned on, users are able to download the table data as a `.csv` file or Microsoft Excel file. |
| **Allow Column Freeze**  |  Boolean | Enables freezing and unfreezing the columns via a dropdown in the columns' header cells. |
| **CSV Separator**  |  String | Sets the separator character to use for formatting the downloaded `.csv` file. Only applies when **Allow Download** is turned on. Default: `,` |


### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `<widget_name>.isVisible` to get the visibility status.

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
| **searchText**    |  String      | Contains the search text entered by the user in the Table. | 
| **isAddRowInProgress**    |  Boolean      | It indicates whether a new row is currently being added to the table. | 
| **newRow**    |  Object      | Contains data related to newly added row. | 
| **nextPageVisited**    |  Boolean      | Indicates whether the next page of data has been visited by the user. | 
| **previousPageVisited**    |  Boolean      | Indicates whether the previous page of data has been visited by the user. | 
| **tableHeaders**    |  Array      | Indicates whether the table headers are visible.| 
| **totalRecordsCount**    |  Number      |  Indicates the number of pages in server-side pagination. | 
| **updatedRow**    |  Object      | Contains data related to recently updated added row. | 
| **updatedRows**    |  Array      | Contains data related to updated added rows.| 
| **triggeredRowIndex**    |  Number      | An index property that indicates the row index of the table that has been triggered. | 
| **updatedRowIndices**    |  Array      | Refers to an array of indices corresponding to the rows that have been updated 




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
