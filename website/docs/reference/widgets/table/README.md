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

#### Table data `array<object>`

<dd>

Allows you to connect the Table widget to your datasource. To connect your datasource to the Table widget, click on **Connect data** and select your datasource or query. 

If you don't have a query, you can choose your datasource, select the desired table or collection, and specify the searchable property. Appsmith would automatically generate a query for you, enabling features such as server-side pagination, search capability, and the ability to edit and add new rows in the table.

Additionally, you can use JavaScript by clicking on **JS** to write bindings for the table data. The data should be specified as an array of objects, where each object in the array represents a row, and the properties of the object represent the columns in the table. In the given example format, the table has three columns: `step`, `task`, and `status`. 

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


#### Columns `array`

<dd>


The **Columns** property is automatically populated based on the **Table Data**. To access the column settings, you can click on the gear icon ⚙️ in the properties pane. This would enable you to edit existing column properties, add new custom columns, rearrange the columns, and hide columns.

Learn more about [Column](/reference/widgets/table/column-settings).


</dd>

#### Editable `boolean`

<dd>

The **Editable** property, available within the **Columns** property, is a checkbox property that allows users to modify specific fields or cells in the table. By enabling inline editing and marking columns as editable, users can update the data directly from the UI by double-clicking on the desired cell.

Learn more about [Inline editing](/reference/widgets/table/inline-editing).

</dd>

#### Update mode `string`

<dd>

Determines how edited cells are saved in the table.

*Options:*
* **Single row**: Cells can be saved using the **Save/Discard** column buttons.
* **Multi row**: Cells can be saved by using an **onSubmit** event of the column or through an external button widget.
 
</dd>

#### Primary key column `string`

<dd>

Allows you to assign a unique column that helps maintain `selectedRows` and `triggeredRows` based on its value. This property also affects the performance of caching the dataset for quicker loading and access.

</dd>

### Pagination

#### Show pagination `boolean`

<dd>

Determines whether the pagination feature is displayed in the table header, allowing users to navigate through different pages of the table.
</dd>

#### Server side pagination `boolean`

<dd>

Allows you to implement pagination by limiting the number of results fetched per query request. 

Appsmith can handle query responses of up to 5 MB. To display large datasets and optimise performance, use server-side pagination. It can be implemented using Offset-based-pagination or Cursor-based pagination.

See how to guide on [Server-side Pagination](/build-apps/how-to-guides/Server-side-pagination-in-table).

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

Sets the [actions](/reference/appsmith-framework/widget-actions) that would be triggered whenever the user navigates to a different page of the table, either by clicking on the pagination buttons.

</dd>

#### onPageSizeChange

<dd>

Sets the [actions](/reference/appsmith-framework/widget-actions) to be executed when the height of the table is changed. This event is typically triggered by developers working on the app and not by end users. It can be useful, for example, to dynamically set a limit in your query based on the new table height.

</dd>

### Search & filters

#### Allow searching `boolean`

<dd>

When enabled, the search bar is displayed, allowing users to search for specific data within the table.
</dd>

#### Client side search `boolean`

<dd>

Determines the search behavior of the search bar in the table header. When enabled, the search bar would only search within the data that is currently loaded in the table. If disabled, the search bar would search across the entire data set.

</dd>

#### Default search text `string`

<dd>

Allows you to set the default search query for the search bar in the table header.

</dd>

#### onSearchTextChanged

<dd>

Allows you to specify the action to be executed when the user enters a search text in the table's search bar. Learn more about [Server-side searching](/build-apps/how-to-guides/search-and-filter-table-data#using-search-text).


</dd>

#### Allow filtering `boolean`

<dd>

Controls the visibility of the **Filters** button, which is located in the table header. The button allows users to apply filters to the table data when enabled.


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

### Adding a row

#### Allow adding a row `boolean`

<dd>

Adds a button to the table that allows users to add new rows of data. Users can input data in editable columns, and you can use the onSave event to update the table's data source and save the changes made by the user.

Learn more about [Inline editing](/reference/widgets/table/inline-editing).
</dd>

#### onSave

<dd>

Triggered when the user clicks the save button for a new or existing row in the table. 

</dd>

#### onDiscard

<dd>

Triggered when the user clicks the discard button for a new or existing row in the table. 
</dd>

#### Default values `string`

<dd>

Allows you to specify the values that would be automatically populated in a new row when a user starts creating it. It expects an object with the same keys as the columns in the existing table data.
</dd>

### General

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


#### Allow download `boolean`

<dd>

Controls the visibility of the **Download** button in the table header. When enabled, users can download the table data as a `.csv` file or `Excel` file by clicking on the button.
</dd>

#### Allow column freeze `boolean`

<dd>
When enabled, a dropdown is displayed in the header cells of the columns, allowing users to freeze or unfreeze columns as needed.
</dd>

#### CSV separator `string`

<dd>

Allows you to specify the separator character to use for formatting the downloaded `.csv` file. This property is applicable only when the **Allow Download** property is enabled. By default, the separator character is set to `,` *(comma)*.

</dd>






## Style properties
Style properties allow you to change the look and feel of the widget.

### General
#### Default Row Height `string`

<dd>
Sets the height of the row in the table.

*Options*:
* Short
* Default
* Tall

</dd>

### Text formatting

#### Text Size `string`
<dd>
Sets the size of the text. Additionally, the text size can be programmatically modified using JavaScript functions.
</dd>


#### Emphasis `string`
<dd>
Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions.

</dd>


#### Text Align `string`
<dd>
Sets the horizontal alignment of the text within the cells.

*Options*:
* Left
* Center
* Right

</dd>

#### Vertical alignment `string`

<dd>

Sets the vertical alignment of the cell contents within the cells.

*Options*:
* Top
* Center
* Bottom

</dd>

### Color

#### Cell Background Color `string`

<dd>

Sets the background color of the table cells. Additionally, the cell color can be programmatically modified using JavaScript functions.

For example, lets say you have a column named `status` that reflects `approved` and `pending` values. You can set the color for these values using the following expression in the **Cell Background** property:

```js
{{currentRow.status === "approved" ? "#22c55e" : "#facc15"}}
```

If you want to keep the same background color for an entire row, you can use the same custom style expression in each column **Cell Background** property.


</dd>

#### Text Color `string`

<dd>

Sets the color for the text in the table. Additionally, the text color can be programmatically modified using JavaScript functions.
</dd>

#### Background Color `string`

<dd>

Sets the background color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). It can also be manipulated programmatically using the JavaScript functions.

</dd>

#### Border color `string`


<dd>

Sets a color for the border, specified as a CSS color value. It can also be manipulated programmatically using the JavaScript functions.


</dd>

### Border and shadow

#### Cell Borders `string`
<dd>
Sets the border configuration for the cells of the table.

*Options*:
* Default
* No borders
* Horizontal borders only

</dd>

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>





#### Border color `string`

<dd>

Sets the color of the widget's borders, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the border color  can be programmatically modified using JavaScript functions.
</dd>

#### Border Width `number`
<dd>
Sets the thickness of the borders of the widget.

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




## See also
- [Display and Lookup Data in Table](/build-apps/how-to-guides/display-search-and-filter-table-data)
- [Create Data Drilldown View](/build-apps/how-to-guides/create-drill-down-view)
- [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table)
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data)
