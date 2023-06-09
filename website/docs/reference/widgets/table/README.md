---
toc_min_heading_level: 2
toc_max_heading_level: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Table

This page provides information on using the Table widget to display data in tabular format, trigger actions based on user interaction, and work with paginated data sets of any size.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="Using the Table Widget" caption="Using the Table Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Table data `Array<Object>`

<dd>

The **Table data** property allows you to connect the Table widget to your database. By clicking on "**Connect data**," you can connect to your query or select a datasource. Appsmith then generates queries and binds them to the Table widget. This enables Server-side pagination, search capability, and support for editing and adding new rows.

:::note
Currently, this feature is compatible with PostgreSQL and MongoDB datasources.
:::

<figure>
  <img src="/img/table-new.gif" style= {{width:"750px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Connect data</i></figcaption>
</figure>


Additionally, you can use JavaScript by clicking on **JS** to write bindings for the table data. The data should be specified as an array of objects, where each object in the array represents a row, and the properties of the object represent the columns in the table. In the given example format, the table has three columns: `step`, `task`, and `status`. 

*Example format:*
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

You can **dynamically generate** a table by fetching data from queries or JavaScript functions and binding the response to the **Table Data** property. For example, if you have a query named `fetchData`, you can bind its response using:

*Example:*
```js
{{fetchData.data}}
```
If the retrieved data is not in the desired format, you can use JavaScript to **transform** it before passing it to the Table widget, like:

*Example:*
```js
{{fetchData.data.users.map((user) => {
  return {
    name: user.name,
    email: user.email
    };
  });
}}
```


</dd>


#### Columns `Array`

<dd>


The **Columns** property is automatically populated based on the **Table Data**. To access the column settings, you can click on the gear icon ⚙️ in the properties pane. This would enable you to edit existing column properties, add new custom columns, rearrange the columns, and hide columns.

Learn more about [Column](/reference/widgets/table/column-settings).


</dd>

#### Editable `Boolean`

<dd>

The **Editable** property, available within the **Columns** property, is a checkbox property that allows users to modify specific fields or cells in the table. By enabling inline editing and marking columns as editable, users can update the data directly from the UI by double-clicking on the desired cell.

Learn more about [Inline editing](/reference/widgets/table/inline-editing).

</dd>

#### Update mode `String`

<dd>

Determines how edited cells are saved in the table.

*Options:*
* **Single row**: Cells can be saved using the **Save/Discard** column buttons.
* **Multi row**: Cells can be saved by using an **onSubmit** event of the column or through an external button widget.
 
</dd>

#### Primary key column `String`

<dd>

Allows you to assign a unique column that helps maintain `selectedRows` and `triggeredRows` based on its value. This property also affects the performance of caching the dataset for quicker loading and access.

</dd>

### Pagination

#### Show pagination `Boolean`

<dd>

Determines whether the pagination feature is displayed in the table header, allowing users to navigate through different pages of the table.
</dd>

#### Server side pagination `Boolean`

<dd>

Allows you to implement pagination by limiting the number of results fetched per API/query request. 

Appsmith can handle query responses of up to 5 MB. To display large datasets and optimise performance, use server-side pagination. It can be implemented using Offset-based pagination or Cursor-based pagination:

*Example:*

<Tabs queryString="current-edition">
<TabItem label="Offset-based pagination" value="Offset_edition">


 Offset-based pagination works by using the page number and size to calculate the offset of records to fetch from a database or API. 

1. Fetch data from the [sample database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using `pageSize` and `pageOffset`  reference properties to implement pagination.

   ```sql
    SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }}; 
   ```
 In an API query, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the example URL:

   ```
   https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
   ```

2. Enable the **Server-side pagination** property in the table. 

3. Set the table widget's **onPageChange** event to run the query.

4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header. Create a new Query, and add:

```sql
SELECT COUNT(*) FROM users;
```

You can use `{{fetch_users_count.data[0].count}}` COUNT query to display the count. Additionally, you can use the total record count to enable or disable the next/previous controls. 

<figure>
  <img src="/img/off-set.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Offset-based pagination</i></figcaption>
</figure>

  </TabItem>
  

  <TabItem value="Cursor" label="Cursor-based pagination">

Instead of using page numbers and sizes, cursor-based pagination uses a cursor, which is a unique identifier that points to a specific item in the dataset.

1. Fetch data from the [sample database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using `previousPageVisited` and `nextPageVisited` reference properties to implement pagination.

   ```sql
   SELECT * FROM users {{Table1.nextPageVisited ?  "WHERE id > "+ " "+ Table1.tableData[Table1.tableData.length-1]["id"] : Table1.previousPageVisited ? "WHERE id <"+ " "+ Table1.tableData[0]["id"] : "" }} ORDER BY id LIMIT {{Table1.pageSize}} ;
   ```
This SQL query selects all columns from the `users` table and applies cursor-based pagination to limit the number of results returned. The `WHERE` clause is dynamically generated based on whether the user has already visited the `next` or `previous` page, and orders the results by `ID`.

2. Enable the **Server-side pagination** property in the table. 

3. Set the table widget's **onPageChange** event to run the query.

4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header. 

For example, you can use `{{fetch_users_count.data[0].count}}` COUNT query to display the count. Additionally, you can use the total record count to enable or disable the next/previous controls. 

<figure>
  <img src="/img/cursor.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Cursor-based pagination</i></figcaption>
</figure>



  </TabItem>
 
</Tabs>

</dd>

#### Total Records `number`

<dd>

It is a number value that is displayed in the table header to inform the user about the total number of records in the table. This property is only visible when Server Side Pagination is enabled.

For instance, you can create a Count query to retrieve the total number of records from your datasource. You can then call this query in the **Total Records** property using the, like:

*Example:*
```js
{{Total_record_query.data[0].count}}
```

</dd>

#### onPageChange

<dd>

Specifies [supported actions](/reference/appsmith-framework/widget-actions) that would be triggered whenever the user navigates to a different page of the table, either by clicking on the pagination buttons.

</dd>

#### onPageSizeChange

<dd>

Specify an action to be executed when the height of the table is changed. This event is typically triggered by developers working on the app and not by end users. It can be useful, for example, to dynamically set a limit in your query based on the new table height.

</dd>

### Search & filters

#### Allow searching `boolean`

<dd>

When enabled, the search bar is displayed, allowing users to search for specific data within the table.
</dd>

#### Client side search `boolean`

<dd>

Determines the search behavior of the search bar in the table header. When enabled, the search bar will only search within the data that is currently loaded in the table. If disabled, the search bar would search across the entire data set.

</dd>

#### Default search text `string`

<dd>

Allows you to set the default search query for the search bar in the table header.

</dd>

#### onSearchTextChanged

<dd>
Allows you to specify the action to be executed when the user enters a search text in the table's search bar. 


*Example:*

Server-side searching is a technique of searching for specific records from the server using search terms, without relying on the client-side. To enable the search bar in the table header for server-side searching, you can turn on the **Allow Searching** property. 

The `searchText` reference property can be used to filter records displayed in a table based on the user's search terms. When the user types into the search bar, the `onSearchTextChange` event of the table is triggered, which can be configured to query the table's datasource for the matching results. 

To use the server-side search with the Table widget, follow these steps:

1. Create a SQL query using the `searchText` reference property:

   ```sql
   SELECT * FROM users WHERE name LIKE {{"%" + Table1.searchText + "%"}} ORDER BY id LIMIT 10;
   ```

   You can also pass the `searchText` property as a URL parameter in an API request:
   ```
   https://mock-api.appsmith.com/users?name={{Table1.searchText}}
   ```

2. Set the table widget's **onSearchTextChange** event to run the query. 

Watch this video to learn how to set up [server-side search](https://www.youtube.com/watch?v=3ayioaw5uj8) for the Table widget.

</dd>

#### Allow filtering `boolean`

<dd>

Controls the visibility of the "Filters" button and its associated features in the table header. When enabled, the button and its functionality are displayed, allowing users to apply filters to the table data.

</dd>

## Server-side filtering

Server-side filtering involves using a value to narrow down the results of a query in a similar way to server-side searching. However, instead of searching for a specific term, the selected value is used to filter out unwanted data from the requested dataset. 

To enable server-side filtering, you can use widgets such as the [Select widget](/reference/widgets/select/) to provide users with a list of supported filters to choose from.

1. Drag a Select widget to the canvas and add options that you might use to filter your data.

2. Create a query, and add the Select widget's `selectedOptionValue`:

    As a SQL query:
    ```sql
    SELECT * FROM users WHERE gender = {{genderDropdown.selectedOptionValue}};
    ```

    As an API request with URL parameters:
    ```
    https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}
    ```

3. Set the Select widget's **onOptionChange** event to run the query. 


## Edit table data

To edit and update table data directly from the UI, you can use Inline editing. To enable inline editing for a table, you can make individual columns editable by checking the **Editable** checkbox in the Columns section of the Table widget properties panel. Once inline editing is enabled, you can double-click on a cell to edit its contents.

Learn more about [Inline editing](/reference/widgets/table/inline-editing).


## Refresh table data

When changes are made to the datasource that supplies your table with data, the table won't automatically reflect these changes. Therefore, it is necessary to use events and/or write code that re-executes the query responsible for populating data into the table whenever new data is submitted to the datasource.

**Example:**
For instance, suppose you have a table that receives its data from a query called `getData`, and you have a button that submits a form with new user input through a query called `sendNewData`.

1. When the form is submitted via the button's `onClick`, it executes
    ```javascript
    {{ sendNewData.run() }}
    ```
2. On success, it executes `getData.run()` as a callback to get the latest version of the dataset that includes the new changes:
    ```javascript
    {{ sendNewData.run(() => getData.run(), () => {}) }}
    ```

Now when `sendNewData` succeeds, your table automatically refreshes itself.




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
| **selectedRowIndices** |  Array | Contains an array of the index of the rows selected by the user. Not applicable when multi-row selection is turned off.    | `{{<table_name>.selectedRowIndices}}` |
| **filteredTableData** |  Boolean  | Contains the data of the rows left after applying any selected filters, sort rule, or search terms. | `{{<table_name>.filteredTableData}}` |
| **pageNo**       |  Number       | Contains the current page number that the user is on. APIs can use it for pagination. | `{{<table_name>.pageNo}}`  |
| **pageOffset**    |  Number     | Contains a calculated value to represent how many records to skip when using Server side pagination. Use this value in your query to fetch the correct set of results. | `{{<table_name>.pageOffset}}` |
| **pageSize**     |  Number       | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table. | `{{<table_name>.pageSize}}`   |
| **searchText**    |  String      | Contains the search text entered by the user in the Table. | 
| **isAddRowInProgress**    |  Boolean      | It indicates whether a new row is currently being added to the table. | 
| **newRow**    |  Object      | Contains data related to newly added row. | 
| **nextPageVisited**    |  Boolean      | Indicates whether the next page of data has been visited by the user. | 
| **previousPageVisited**    |  Boolean      | Indicates whether the previous page of data has been visited by the user. | 
| **tableHeaders**    |  Array      | Indicates whether the table headers are visible.| 
| **totalRecordsCount**    |  Number      |  Indicates the number of pages in server-side pagination. | 
| **updatedRow**    |  Object      | Contains data related to recently updated added row. | 
| **updatedRows**    |  Array      | Contains data related to updated rows.| 
| **triggeredRowIndex**    |  Number      | An index property that indicates the row index of the table that has been triggered. | 
| **updatedRowIndices**    |  Array      | Refers to an array of indices corresponding to the rows that have been updated 




### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default Row Height**  |  String   | Sets the height of the row in the table - short, default, or tall.  |
| **Text Size**           |  String   | Sets the size of the text.                               |
| **Emphasis**            |  String   | Sets a font style for text, such as bold or italic.|
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

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions.](/reference/appsmith-framework/widget-actions)

| Action                 | Description               |
| ---------------------- | ------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row.   |
| **onPageChange**       | Sets the action to run when the table's page changes.  |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. This event can only be triggered by developers working on the app, not by end users. For example, it can be used to set a Limit in your query dynamically. |
| **onSearchTextChange** | Sets the action to run when the user enters a search text.     |
| **onSort**             | Sets the action to run when the user sorts the data.          |
