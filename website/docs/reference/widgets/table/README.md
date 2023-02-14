---
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Table

The table widget displays data in rows and columns. You can display data from an API in a table, trigger an action when a user selects a row, and even work with sizable paginated data sets.

<VideoEmbed host="youtube" videoId="-rzePEV2QQ8" title="How to use Table Widget" caption="How to use Table Widget"/>

## Display data in tables

To get data from a query to appear in a table widget, follow these steps:

1. If you don't already have a query that returns data from a datasource, [create one first](/core-concepts/data-access-and-binding/querying-a-database).
2. Click on your table widget to open its properties pane.
3. In its properties pane, enter the following code snippet into its [**Table data**](#table-data) property:
    ```javascript
    // replace <query_name> with the name of your query
    {{<query_name>.data}}
    ```

TODO: JS OBJECT, and check sample apps.

Now, the table widget should be populated with the data coming from the query. By default, this query also now runs automatically when the page loads. You can change this behavior from the query's settings page.

### Transform table data

Some API / Query responses might have deeply nested, unnecessary, or unhelpfully formatted fields. These can be transformed to fit your needs by parsing and processing the data with JavaScript. The JS [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function is highly recommended for processing raw data from your queries to fit your table correctly.

#### Example

```
https://api.github.com/repos/appsmithorg/appsmith/issues
```

Binding this API's response directly to a table would be unreadable like the image below:

<img src="/img/github_table.gif" width="50%" ></img>

<!-- ![](</img/github_table.gif>) TODO: Make this an Image tag to reduce size -->

To format this data, you can write a [map function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to parse the API response, format the data, and return an array of row objects that contain only the desired fields:

```javascript
{{ 
    fetch_issues.data.map((issue) => {
        return {
            user: issue.user.login,
            assignees: issue.assignees.map((assignee) => assignee.login).join(","),
            title: issue.title,
            number: "#" + issue.number,
        };
    });

}}
```
<img src="/img/github_table_formatted.png" width="50%" ></img>

<!-- ![](</img/github_table_formatted.png>) TODO: Make this an Image tag to reduce size -->

## Columns

TODO

### Add new columns

Alternatively, you may wish to add a column to the table that's not already present in your dataset. By clicking the "+ ADD A NEW COLUMN" button, you can manually insert your own custom column into the table. These can be used for a wide variety of purposes, including adding button- or checkbox-type columns alongside your data. You can adjust the settings for this column just like any other.

### Column settings

Columns can be configured individually in a variety of ways to best fit your needs. For more information about their settings, see [column settings](/reference/widgets/table/column-settings).

## Table header options

You can customize which features are available for use in the table header. These features can be turned on or off via their related setting in the table's properties pane:

1. Search (toggle with **Allow Searching**)

    Toggles visibility of the table widget's search bar.

2. Filters (toggle with **Allow Filtering**)

    Toggles visibility of the table widget's filtering options.

3. Download (toggle with **Allow Download**)

    This button prompts the user to choose a file format (.CSV or Excel spreadsheet) and initiates the file download in the user's browser.

    - **CSV separator**

        Sets the separator character to use for formatting the downloaded .csv file. The default separator character is a comma `,`. This setting only applies when **Allow Download** is turned on.

4. Add a row (toggle with **Allow adding a row**)

    This button inserts a new row into the table for the user to fill in. Read about [inline editing](/reference/widgets/table/inline-editing#allow-adding-a-row) for more details.

5. Pagination (toggle with **Show Pagination**)

    Toggles visibility of the page cycle buttons, and toggles showing total number of records and pages in the header.

## Pagination

TODO

### Server side pagination

Tables are often required to display large data sets from [queries](/core-concepts/data-access-and-binding/querying-a-database) and [APIs](/core-concepts/connecting-to-data-sources/authentication), but browsers can't always load all the data present in the database. Appsmith supports responses of **5 MB** at a time; larger responses result in [this error (5009)](/help-and-support/troubleshooting-guide/query-errors#execution-failed-with-status-5009).

To paginate the responses and request smaller chunks of data at a time:

1. Enable the server-side pagination property in the table
2. Call the API / query via the **onPageChange** event
3. Configure pagination in the API / query using the [Offset](#offset-based-pagination) or [Key-based](#key-based-pagination) pagination method.

:::tip
Turning on **Server side pagination** also enables the [**Total records**](#total-records) property. This property is useful for helping to control the page buttons in the table header.
:::

#### Offset based pagination

This method uses the Table's page number to determine the offset of the records to fetch from the database. This method relies on the **pageNo** and **pageSize** values of the table to calculate the required **pageOffset** to fetch the correct records.

```
Table1.pageOffset = (Table1.pageNo - 1) * Table1.pageSize
```

The **pageOffset** property (as well as **pageNo** and **pageSize**) can be used in the API / query by referencing it inside curly braces `{{ }}`.

```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }}
```

```
https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
```

#### Key based pagination

This method uses a value in the response of the API as the key to the next API call. This can be configured in the API settings by providing the Next & Previous URLs that the API should execute **onPageChange**.

<img src="/img/pagination_(2)_(2).gif" width="70%" ></img>

## Sort

TODO

## Search

TODO

### Server side search

Server side searching is useful for reducing unnecessary results from queries: rather than requesting lots of data from the server and then filtering it on the client, you can pass search terms to the server so it only fetches relevant results in the first place. This can significantly improve response times when working with large data sets.

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

## Filter


### Server side filter

Server side filtering uses the same principles as described in [server side searching](#server-side-searching): some term or value is sent to the database or API to be used to filter out unnecessary data from the requested dataset. In this case, you choose a value that records must match in order to be returned in the query's response.

Server-side filtering requires the use of another widget, such as a [Select widget](/reference/widgets/select/), which you can use to provide users a list of supported filters to choose from.

1. Drag a select widget to the canvas and add options that you might use to filter your data
2. Set the table widget's **onOptionChange** event to call your API / query 
3. Pass the Select widget's `selectedOptionValue` within the API request / query string

As a SQL query:
```sql
SELECT * FROM users WHERE gender = {{genderDropdown.selectedOptionValue}};
```

As an API request with URL parameters:
```
https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}
```

## Refresh table data

When changes are made to the datasource that supplies your table with data, the table won't automatically reflect these changes. Any time you submit new data to your datasource, be sure to use events and/or write code that re-runs the query that puts data into your table.

**Example 1:**

This can be as simple as creating a [button widget](/reference/widgets/button) whose `onClick` event is bound to `<query_name>.run()`. Here, `<query_name>` is the name of the query that gets data for your table (and is probably referenced in the table's **Table data** field). When the button is clicked, the query is run, and the table is given fresh data.

**Example 2:**

Another common flow for keeping your table data fresh happens when you submit new data to your datasource, and then re-run your original query as a success callback if the submission succeeds. Imagine you have a table whose data comes from your GET query `getData`, and a button that submits a form with new user input via a query called `sendNewData`:

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

## Edit cells and add rows

The Table widget comes with features that enable you to make and submit changes to your dataset from directly within the table. For more information about setting up this feature, see [inline editing](/reference/widgets/table/inline-editing).

## Properties

Properties allow you to edit the table, connect it with other widgets, and customize how the user interacts with it.

### General

 General properties control the data and behavior of the widget. These properties are present in the properties pane of the widget.

| Property       | Definition |
| ---------------|------------|
| [**Table Data**](#table-data)                 | Use this field to provide the data to be displayed in the table, either by writing an array of objects to display as table rows or by binding data from an API/Database using the mustache syntax. |
| [**Columns**](#columns)                    | Automatically populated from the Table Data. This lets you edit the column label, show/hide each column (with the eye icon), and also manage the individual column settings.   |
| **Primary key column** | Assigns a unique column which helps maintain `selectedRows` and `triggeredRows` based on value. Affects the performance of caching the dataset for quick loading and access. |
| **Show Pagination** | Toggles visibility for the page information and control buttons in the table header. |
| [**Server Side Pagination**](#pagination)     | Enables you to implement pagination by limiting the number of results fetched per API / query request. Use this property when your table data is bound to an API / query.                               |
| [**Total Records**](#total-records) | This number value is displayed in the table header to inform the user of how many records exist in the table. This property is only visible when you enable **Server Side Pagination**. |
| **Allow Searching** | Toggles visibility of the search bar in the table header. |
| **Client Side Search** | Sets search behavior for the search bar in the table header. When turned on, the bar searches only the data currently loaded in the table. Otherwise, it searches the entire data set. |
| **Default Search Text**        | Sets the default search query for the search bar in the table header.     |
| **Allow Filtering** | Toggles visibility for the "Filters" button and its features in the table header. |
| **Default Selected Row**       | Sets which rows are selected in the table by default. When **Enable multi-row selection** is turned on, this setting expects an array of numbers corresponding to the indices of the selected rows. Otherwise, it expects a single number.    |
| **Enable multi-row selection** | Allows multiple rows of a table to be selected at the same time. The rows are accessible by the `{{ Table1.selectedRows }}` property.         |
| [**Column Sorting**](#column-sorting) | Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode. |
| **Visible**   | Controls the widget's visibility on the page. When turned off, the widget won't be visible when the app is published.        |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |
| **Allow Download** | Toggles visibility of the "Download" button in the table header. When turned on, users are able to download the table data as a .csv file or Microsoft Excel file. |
| **CSV Separator** | Sets the separator character to use for formatting the downloaded .csv file. Only applies when **Allow Download** is turned on. Default: `,` |


### Reference

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<table_name>` in the examples below with the name of your table widget.

| Property       | Definition | Code Snippet |
| ---------------|------------|--------------|
| [**selectedRow**](#selectedrow)        | Contains the data of the row selected by the user. It's an empty object if no row is selected. | `{{<table_name>.selectedRow}}`   |
| [**selectedRows**](#selectedrows)       | Contains an array of rows selected by the user when multi-select is enabled. It's \[null] if no row is selected.    | `{{<table_name>.selectedRows}}`        |
| [**triggeredRow**](#triggeredrow)       | When a user interacts with an actionable item (like button) in a row, `triggeredRow` fetches the data of that column.   | `{{<table_name>.triggeredRow}}`        |
| **isVisible**          | Reflects whether the widget is visible or not.  | `{{<table_name>.isVisible}}`   |
| **sortOrder**          | Reflects the current column sort criteria. For example, if table rows are being sorted by the value of column `id` in ascending order, this property contains `{"column": "id", "order": "asc"}`.   | `{{<table_name>.sortOrder}}`   |
| **tableData**          | Contains all the table data in JSON format.      | `{{<table_name>.tableData}}`  |
| [**selectedRowIndex**](#selectedrowindex)   | Contains the index of the row selected by the user. Not applicable when multiple rows are selected.    | `{{<table_name>.selectedRowIndex}}`   |
| [**selectedRowIndices**](#selectedrowindices) | Contains an array of the index of the rows selected by the user. Not applicable when multi-row selection is turned off.    | `{{<table_name>.selectedRowIndices`\}} |
| [**filteredTableData**](#filteredtabledata)  | Contains the data of the rows left after applying any selected filters, sort rule, or search terms. | `{{<table_name>.filteredTableData}}` |
| [**pageNo**](#pageno)             | Contains the current page number that the user is on. APIs can use it for pagination | `{{<table_name>.pageNo}}`  |
| [**pageOffset**](#pageoffset) | Contains a calculated value to represent how many records to skip when using **Server side pagination**. Use this value in your query to fetch the correct set of results. | `{{<table_name>.pageOffset}}` |
| [**pageSize**](#pagesize)           | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table | `{{<table_name>.pageSize}}`   |
| [**searchText**](#searchtext)         | Contains the search text entered by the user in the Table | `{{<table_name>.searchText}}`  |

### Style

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


## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Action                 | Description               |
| ---------------------- | ------------------------- |
| **onRowSelected**      | Sets the action to run when the user selects a row.   |
| **onPageChange**       | Sets the action to run when the table's page changes.  |
| **onPageSizeChange**   | Sets the action to run when the table's height is changed. This event can only be triggered by developers working on the app, not by end users. For example, it can be used to set a Limit in your query dynamically. |
| **onSearchTextChange** | Sets the action to run when the user enters a search text.     |
| **onSort**             | Sets the action to run when the user sorts the data.          |

---

#### Table data

This field is where you can supply data to the table. The table expects this field to be an array of objects, with each object representing a row of the table.

![Property pane showing the Table data](/img/table\_data.png)

Data can be written manually in this field as an array, or retrieved from a query response by using mustache syntax ( `{{ }}` ) to reference the query. To see how to get query data into the table, check [display data in tables](#display-data-in-tables).

#### Columns

This property shows all the columns in the table, and it gets automatically populated from the Table Data. You can edit the column's name, hide/show a column, and customize more from the [column settings](column-settings.md).

![](/img/columns\_tablewidget.png)

#### Total records

The total records field stores the total number of rows in the table. It's useful in pagination as it helps in determining the number of pages, and then when to turn on/off the page control buttons in the table header. It's only visible when you enable **Server Side Pagination**.

<VideoEmbed host="youtube" videoId="p7mH00xp7Nc" title="Using Total Records in the Table Widget" caption="Using Total Records in the Table Widget"/>

To get the total record count of your data, follow the steps below:
 
 1. Create a new query `get_count` for the data source connected to the table.
 2. In the query window, enter a count query for the data.
    ```SQL
    -- Postgres
    SELECT COUNT(*) FROM <table_name>;
    ```
 3. Click on Run and you can see the output in the response tab below.

Once the `get_count` query is successfully created, enter the following code to bind the query's output in the total records field:
```javascript
// Total records
{{get_count.data[0].count}}
```
#### Column sorting

Toggles whether table columns are sort-able. When turned on, users may click column headers to sort the table rows by that column's value. This setting only applies while the app is in View mode (where the app is deployed).

<!--
<VideoEmbed host="youtube" videoId="hmi7BaF3jFI" title="Table | Column Sorting" caption="Use this setting to enable sorting rows by column value."/>
-->

#### selectedRow

The `selectedRow` property contains the data of the row that's selected within the Table. This may be useful for pulling data from the table to display specific records within other widgets. If no row is selected, `selectedRow` shows the column names with no data.

You can access the row data with `<table_name>.selectedRow`, and use dot or bracket notation with the column names to access the record's values:

```javascript
// access a row called "id" with dot notation
{{Table1.selectedRow.id}}
```

```javascript
// access a row called "favorite color" with bracket notation
{{Table1.selectedRow["favorite color"]}}
```

<!--
<VideoEmbed host="youtube" videoId="hHZ5IbtE-wo" title="Displaying column value using selectedRow" caption="Displaying column value using selectedRow"/>
-->

#### selectedRows

`selectedRows` allows you to fetch the data from the table when the user selects multiple rows. To use this property, enable the **multi-row selection** option from the property pane of the table widget.

To bind table data to a widget, use the following snippet to access the selected table rows from within the widget's properties:

```javascript
// an array of row objects
{{<table_name>.selectedRows}}
```

<!--
The following video shows how to bind a text widget to `Table_1` using `selectedRows`.

<VideoEmbed host="youtube" videoId="K8F4oggpOk0" title="selectedRows" caption="selectedRows"/>
-->

An empty array `[]` is returned if no row is selected in the table.

#### triggeredRow

If your table has actionable items (like buttons) and a user interacts with it, triggeredRow fetches data from rows where that action has been performed. For example, if a button is pressed within the second row of a table, `<table_name>.triggeredRow` in that instance would contain all the data of the second row.

To bind a widget using this property, enter the code snippet given below:

```javascript
{{<table_name>.triggeredRow}}
```

<!--
The following video shows how to bind a text widget to `Table_1` using triggeredRow.

<VideoEmbed host="youtube" videoId="HUcQ8lf7cH4" title="triggeredRow" caption="triggeredRow"/>
-->

#### selectedRowIndex

`selectedRowIndex` gives you the index number of the selected row in the table. It's only applicable when one row is selected. If you have multiple or zero rows selected, it returns `-1`.

To bind a widget using this property, enter the code snippet given below:

```javascript
{{<table_name>.selectedRowIndex}}
```

<!--
The following video shows how to bind a text widget to `Table_1` using seledRowIndex.

<VideoEmbed host="youtube" videoId="KXYkdFzOKsQ" title="selectedRowIndex" caption="selectedRowIndex"/>
-->

#### selectedRowIndices

selectedRowIndices gives you an array of the index numbers of the multiple rows selected in the table. It's only applicable when multiple rows are selected. You have to enable the "multi-row selection" from the property pane to use this property.

To bind a widget using this property, enter the code snippet given below:

```javascript
{{<table_name>.selectedRowIndices}}
```

<!--
The following video shows how to bind a text widget to `Table_1` using seledRowIndices.

<VideoEmbed host="youtube" videoId="yLOYqrW2xaw" title="selectedRowIndices" caption="selectedRowIndices"/>
-->

#### filteredTableData

`filteredTableData` contains the data of the rows left after applying any selected filters, sorting rule, or search terms.

To use this property in a widget, enter the code snippet given below:

```javascript
{{<table_name>.filteredTableData}}
```

<!--
The following video shows how to bind a text widget to `Table_1` using **filteredTableData**.

<VideoEmbed host="youtube" videoId="0tvZXEtSMp4" title="filteredTableData" caption="filteredTableData"/>
-->

#### pageNo

`pageNo` gets the page number of the table that the user is currently viewing. This property can be used by APIs for pagination. To use this property in a widget, enter the code snippet given below:

```javascript
{{<table_name>.pageNo}}
```

#### pageOffset

This value is calculated by multiplying the table's page number with the amount of records displayed per page. For example, if there are five records on each page, and the table is showing page three, then `Table1.pageOffset` should be equal to 10. Use this value in your query to fetch the correct set of results by asking it to skip the first 10 records.

```javascript
{{<table_name>.pageOffset}}
```

<!--
The following video shows how to use `pageOffset` in your API / database query:

<VideoEmbed host="youtube" videoId="rPw2KRgq3xc" title="pageOffset" caption="pageOffset"/>
-->

#### pageSize

`pageSize` shows the total number of rows displayed on a page of the table. `pageSize` can change upon resizing the table.
To bind a widget using this property, enter the code snippet given below:

```javascript
{{<table_name>.pageSize}}
```

#### searchText

`searchText` mirrors the text entered in the table's search bar by the user.

To bind a widget using this property, enter the code snippet given below:

```javascript
{{<table_name>.searchText}}
```
<!--
The following video shows how to bind a text widget to `Table_1` using searchText.

<VideoEmbed host="youtube" videoId="vn6zx7zMeUs" title="searchText" caption="searchText"/>
-->