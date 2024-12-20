---
title: Table
hide_title: true
toc_min_heading_level: 2
toc_max_heading_level: 3
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Table (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


</div>

<!-- vale on -->

This page provides information on the Table widget (available in AI Assistant Apps), which allows you to display data in a structured tabular format and trigger actions based on user selections or interactions.



<ZoomImage
  src="/img/ai-table.png" 
  alt=""
  caption=""
/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

These properties allow you to configure and manage the data displayed in the Table widget. 

#### Table data `array<object>`

<dd>

Allows you to bind the Table widget to a datasource or provide static data in a tabular format. You can dynamically set the Table data by using **JavaScript bindings** with the `{{}}` syntax.

The data should be specified as an array of objects, where each object in the array represents a row, and the properties of the object represent the columns in the table. In the given example format, the table has three columns: `step`, `task`, and `status`. 

*Expected data structure:*
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

You can **dynamically generate** a Table by fetching data from queries or JavaScript functions and binding the response to the **Table Data** property. For example, if you have a query named `fetchData`, you can bind its response using:

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


#### Columns `array`

<dd>


The **Columns** property is automatically populated based on the **Table Data**. To access the column settings, you can click on the gear icon ⚙️ in the properties pane. This would enable you to edit existing column properties, add new custom columns, rearrange the columns, and hide columns.

Each column can be configured with a column type to display and interact with data in specific ways.

* **Button**: Adds a button in the column to trigger actions such as running queries or executing JS code. You can style the button, set its label, and configure click actions.

* **Number:** Displays data as numbers with additional formatting. 

* **Plain Text:** Displays simple text content without any additional formatting.

* **URL:** Allows you to display clickable links with a custom display text. Users can click the link to navigate to external URLs.

* **Date:**  Displays and formats date and time. Use **Date Format** to set the input format and **Display Format** to control how it appears.

:::info
The Column Editable property is not available for the Table widget in AI Assistant apps.
:::

</dd>

#### Primary key column `string`

<dd>

Allows you to assign a unique column that helps maintain `selectedRows` and `triggeredRows` based on its value. This property also affects the performance of caching the dataset for quicker loading and access.

</dd>

### Pagination

These properties allow you to configure how the Table widget handles large sets of data by dividing it into pages. 

#### Page size `string`

<dd>

Controls the number of rows displayed per page in the Table widget. For example, if set to 4, only 4 rows will be visible per page. This property helps in managing large datasets by breaking them into smaller, more manageable pages.

Pagination is managed within the widget itself, loading all data at once and then organizing it into pages on the client side. This means data is not fetched from the server dynamically as the user navigates between pages.


</dd>



#### Show pagination `boolean`

<dd>

Determines whether the pagination feature is displayed in the table header, allowing users to navigate through different pages of the table.
</dd>



### Search & filters

#### Allow searching `boolean`

<dd>

When enabled, the search bar is displayed, allowing users to search for specific data within the Table. The search is performed on the data already loaded in the widget, and it does not fetch new data from the server as the user types.

</dd>

#### Default search text `string`

<dd>

Allows you to set the default search query for the search bar in the Table header.

</dd>


### Row selection

#### Default selected row `number/array`

<dd>

Sets which rows are selected in the table by default. When **Enable multi-row selection** is turned on, this setting expects an array of numbers corresponding to the indices of the selected rows. Otherwise, it expects a single number.

</dd>

#### Enable multi-row selection `boolean`

<dd>

Enables the selection of multiple rows in a table simultaneously. When enabled, the selected rows can be accessed through the `{{Table1.selectedRows}}` reference property.

</dd>

#### onRowSelected

<dd>

Sets the [action](/reference/appsmith-framework/widget-actions) to be executed when the user selects one or more rows in the table.


</dd>


### Sorting

#### Column sorting `boolean`

<dd>

Controls whether the columns in the table can be sorted by the user. When enabled, users can click on the column headers to sort the table rows based on the values in that column. This feature is only available in *View mode*.

</dd>

#### onSort

<dd>

Allows you to specify the [action](/reference/appsmith-framework/widget-actions) to be executed when the user sorts the data in the table.

</dd>


### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>







## Style properties
Style properties allow you to change the look and feel of the widget.


### Border and shadow

#### Cell Borders `string`
<dd>
Sets the border configuration for the cells of the table.

*Options*:
* Default
* No borders
* Horizontal borders only

</dd>







## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Table1.isVisible`.


#### selectedRow `object`

<dd>
Contains the data of the row selected by the user. It's an empty object if no row is selected. 

*Example*:
```js
//To access the entire selected row:
{{Table1.selectedRow}}

//To access a specific cell value, such as the email field:
{{Table1.selectedRow.email}}
```
</dd>

#### selectedRows `array<object>`

<dd>

Contains an array of rows selected by the user when multi-select is enabled. It's `[null]` if no row is selected.

*Example:*

```js
//To access the array of selected rows:
{{Table1.selectedRows}}

//To access a specific cell value in the selected rows, such as the email field of the first selected row:
{{Table1.selectedRows[0].email}}
```

</dd>

#### triggeredRow `object`

<dd>

When a user interacts with an actionable item *(like a button)* in a row, `triggeredRow` fetches the data of that column.

*Example:*

```js
//To access the entire triggered row:
{{Table1.triggeredRow}}

//To access a specific cell value, such as the email field:
{{Table1.triggeredRow.email}}
```


For example, when using Datepicker if the date is in `ISO` format and you want to display it in `DD/MM/YYYY` format, then you can achieve this by binding the Table data to the **Default date** and changing the display format through the **Date format** property.


</dd>

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*
```js
{{Table1.isVisible}}
```

</dd>

#### sortOrder `object`


<dd>

Reflects the current column sort criteria. For example, if table rows are being sorted by the value of column `id` in ascending order, this property contains `{"column": "id", "order": "asc"}`.


*Example:*
```js
{{Table1.sortOrder}}
```

</dd>

#### tableData `array<object>`

<dd>

Contains all the table data in JSON format.

*Example:*
```js
{{Table1.tableData}}
```

</dd>

#### selectedRowIndex `number`

<dd>

Contains the index of the row selected by the user. Not applicable when multiple rows are selected.

*Example:*
```js
{{Table1.selectedRowIndex}}
```

</dd>

#### selectedRowIndices `array`

<dd>

Contains an array of the index of the rows selected by the user. Not applicable when multi-row selection is turned off.

*Example:*
```js
{{Table1.selectedRowIndices}}
```

</dd>

#### filteredTableData `array<object>`

<dd>

Contains the data of the rows left after applying any selected filters, sort rule, or search terms.

*Example:*
```js
{{Table1.filteredTableData}}
```

</dd>

#### pageNo `number`

<dd>

Contains the current page number that the user is on. APIs can use it for pagination.

*Example:*
```js
{{Table1.pageNo}}
```

</dd>

#### pageOffset `number`

<dd>

Contains a calculated value to represent how many records to skip when using Server-side pagination. Use this value in your query to fetch the correct set of results.

*Example:*
```js
{{Table1.pageOffset}}
```

</dd>

#### pageSize `number`

<dd>

Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table.

*Example:*
```js
{{Table1.pageSize}}
```

</dd>

#### searchText `string`

<dd>

Contains the search text entered by the user in the Table.

*Example:*
```js
{{Table1.searchText}}
```

</dd>

#### isAddRowInProgress `boolean`

<dd>

Indicates whether a new row is currently being added to the table.

*Example:*
```js
{{Table1.isAddRowInProgress}}
```

</dd>

#### newRow `object`

<dd>

Contains data related to the newly added row.


*Example:*
```js
{{Table1.newRow}}
```
</dd>

#### nextPageVisited `boolean`

<dd>

Indicates whether the next page of data has been visited by the user.

*Example:*
```js
{{Table1.nextPageVisited}}
```

</dd>

#### previousPageVisited `boolean`

<dd>

Indicates whether the previous page of data has been visited by the user.


*Example:*
```js
{{Table1.previousPageVisited}}
```

</dd>

#### tableHeaders `array<object>`

<dd>

Indicates whether the table headers are visible.



*Example:*
```js
{{Table1.tableHeaders}}
```
</dd>

#### totalRecordsCount `number`

<dd>

Indicates the number of pages in server-side pagination.

*Example:*


```js
{{Table1.totalRecordsCount}}
```
</dd>

#### updatedRow `object`

<dd>

Contains data related to the recently updated added row.

*Example:*
```js
{{Table1.updatedRow}}
```
</dd>

#### updatedRows `array<object>`

<dd>

Contains data related to updated rows.

*Example:*
```js
{{Table1.updatedRows}}
```
</dd>

#### triggeredRowIndex `number`

<dd>

An index property that indicates the row index of the table that has been triggered.

*Example:*
```js
{{Table1.triggeredRowIndex}}
```
</dd>

#### updatedRowIndices `array`

<dd>

Refers to an array of indices corresponding to the rows that have been updated.

*Example:*


```js
{{Table1.updatedRowIndices}}
```
</dd>

## Methods

Widget property setters enables you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.



#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Table1.setVisibility(true)
```


</dd>

#### setData (param: array< object >): Promise

<dd>

Sets the data to be displayed in the Table widget.

*Example*:

```js
Table1.setData([{ name: 'John', age: 36 }, { name: 'Jane', age: 28 }])
```

</dd>



#### setSelectedRowIndex (param: number): Promise

<dd>


This method allows you to programmatically select a single row in the Table.

*Example*:

```js
Table1.setSelectedRowIndex(2)
```

</dd>

#### setSelectedRowIndices (param: [?]): Promise

<dd>

This method allows you to programmatically select multiple rows in the Table. It is available when the [**Enable multi-row selection**](/reference/widgets/table#enable-multi-row-selection-boolean) property is enabled.

*Example*:

```js
{{Table1.setSelectedRowIndices([1,2,5,8])}}
```

</dd>



