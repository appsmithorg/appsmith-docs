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
3. In its properties pane, enter the following code snippet into its [**Table data** property:
    ```javascript
    // replace <query_name> with the name of your query
    {{<query_name>.data}}
    ```

If you are doing work on your data in a [JS object](/core-concepts/writing-code/javascript-editor-beta) before it goes into the table and you need to supply the data from there, you should instead reference whichever of the JS object's properties returns your final results. For example, if you have a JS object called `utils` with a function `formatData`, you might put the following snippet into the table's **Table data** field:

```javascript
{{ utils.formatData() }}
```

You can look at how this is set up in [this sample app](https://app.appsmith.com/applications/61e010e7eb0501052b9fa0f0/pages/61fba49b2cd3d95ca414b364).

Now, the table widget should be populated with the data coming from the query. By default, this query also now runs automatically when the page loads. You can change this behavior from the query's settings page.

### Transform table data

Some API / Query responses might have deeply nested, unnecessary, or unhelpfully formatted fields. These can be transformed to fit your needs by parsing and processing the data with JavaScript. The JS [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function is highly recommended for processing raw data from your queries to fit your table correctly.

#### Example

Imagine that you were querying the GitHub API for issues related to a certain repository. If you were to bind this API's response directly to a table without additional formatting, it would be unreadable like the image below:

<img src="/img/github_table.gif" style={{height: "15em", width: "100%", objectFit: "cover", objectPosition: "0 0em"}} ></img>

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

<img src="/img/github_table_formatted.png" style={{height: "15em", width: "100%", objectFit: "cover", objectPosition: "0 0em"}} ></img>

## Pagination

Once the table widget has a set of records to display, it automatically shows as many rows as possible within its height. The remainder are placed on subsequent pages, which are navigable via the page buttons in the table header. (**Show Pagination** must be turned on in the table's properties).

The records are all held in memory regardless of whether they're currently visible on the table's page, so large query responses and datasets can lead to performance degradation. For a strategy to handle paginating large datasets, see [server side pagination](#server-side-pagination).

### Server side pagination

Tables are often required to display large data sets from [queries](/core-concepts/data-access-and-binding/querying-a-database) and [APIs](/core-concepts/connecting-to-data-sources/authentication), but browsers can't always load all the data present in the database, or might do so very slowly. Appsmith supports responses of up to **5 MB** at a time; larger responses result in [this error (5009)](/help-and-support/troubleshooting-guide/query-errors#execution-failed-with-status-5009).

To paginate the responses and request smaller chunks of data at a time:

1. Enable the server-side pagination property in the table
2. Call the API / query via the **onPageChange** event
3. Configure pagination in the API / query using the [Offset](#offset-based-pagination) / [Key-based](#key-based-pagination) / [Table Meta](#meta-properties-based-pagination) pagination methods.

:::tip
Turning on **Server side pagination** also enables the **Total records** property. This property is useful for helping to control the page buttons in the table header.
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

This method uses a value in the API response as the key to the following API call. This can be configured in the API settings by providing the Next & Previous URLs that the API should execute **onPageChange**.

<img src="/img/pagination_(2)_(2).gif" width="70%" ></img>

#### Meta properties based pagination

Table widget exposes two meta properties, `previousPageVisited` and `nextPageVisited`. These values of these properties are set when a user moves to a new page. Depending on the direction of the new visited page with respect to the current page, the values of these properties are set.

If the page number of the new visited page is greater than the current page number, `nextPageVisited` will be set to `true` and `previousPageVisited` will be set to `false`. Else, if the new page number is less than current page number, `nextPageVisited` will be set to `false` and `previousPageVisited` will be set to `true`.

Both flags are initialized to `false` when the table loads for the first time.

A sample code that demonstrates the use of these flags is below:

```
const loadTableData =  () => {
    if (Table1.nextPageVisited == true){
        nextQuery.run()
    }
    else if (Table1.previousPageVisited == true){
        previousQuery.run()
    }
    else {
        baseQuery.run()
    }
}
```

## Refresh table data

When changes are made to the datasource that supplies your table with data, the table won't automatically reflect these changes. Any time you submit new data to your datasource, be sure to use events and/or write code that re-runs the query that puts data into your table.

**Example 1:**

This can be as simple as creating a [button widget](/reference/widgets/button) whose `onClick` event is bound to `<query_name>.run()`. Here, `<query_name>` is the name of the query that gets data for your table (and is probably referenced in the table's **Table data** field). When the button is clicked, the query is run, and the table is given fresh data.

**Example 2:**

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

## Search

When **Allow Searching** is turned on, the table header has a search bar that can be used to find records that have a value that matches the given search term. Search results include perfect matches as well as matches where the search term is contained somewhere within one of the row's values.

You can also set **Default Search Text** in the table's properties to narrow results automatically when the page loads.

Searching large datasets may degrade performance, so it's recommended to set up [server side search](#server-side-search) for your table. This strategy helps to only query the data that you need, instead of pulling records that aren't relevant to your search.

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

## Filter

When **Allow Filtering** is turned on, the table header has a "Filters" button, which can be used to find records where specific fields meet a given condition. For example, in an employee management dashboard, you might want to filter the table to show only records where the person's `Team Leader` is equal to `Alex Smith`. 

Filtering large datasets may degrade performance, so it's recommended to set up [server side filter](#server-side-filter) for your table. This strategy helps to only query the data that you need, instead of pulling records that aren't relevant to you.

### Server side filter

Server side filtering uses the same principles as described in [server side searching](#server-side-searching): some term or value is sent to the database or API to filter out unnecessary data from the requested dataset. In this case, you choose a value that records must match in order to be returned in the query's response.

Server-side filtering requires using another widget, such as a [Select widget](/reference/widgets/select/), which you can use to provide users with a list of supported filters to choose from.

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

## Freeze columns

When your table has many columns, you may want to freeze and lock important columns in place so that they're always visible, independent of scrolling.

To freeze a column, click the arrow on the right side of the column's header cell and choose to freeze it on either the left or right side of the table. Alternatively, you can freeze or unfreeze a column via its individual settings accessed within the table's properties pane.

The **Allow Column Freeze** property must be turned on in the table's properties pane to allow changes to freezing or unfreezing. This property doesn't change any frozen columns; it just prevents further changes by enabling or disabling the "Freeze column" button controls in the widget.

![Use the column header arrow to freeze or unfreeze columns](/img/as-freeze-column.png)

Columns that are frozen while your app is in Edit mode are also frozen in the deployed app. However, while **Allow Column Freeze** is turned on, users can change which columns are frozen in their view. Their changes persist in their local storage across page refreshes until a developer deploys a change in the table's column order, hidden columns, or frozen columns.

The frozen columns are available in the table's properties pane: left-frozen columns are pinned to the top of the list, and right-frozen ones are pinned to the bottom. These columns can't be re-ordered while they're frozen.

Turning on the following properties causes an additional column to be frozen to the table:

- **Editable**: a Save/Discard button column is frozen to the right of the table.
- **Multi-row selection**: a checkbox column is frozen to the left of the table.

When a column gets unfrozen, its position is moved. If it had been left-frozen, it's put at the beginning of the unfrozen group of columns. If it had been right-frozen, it's put at the end of the unfrozen columns.

## Properties

Properties allow you to edit the table, connect it with other widgets, and customize how the user interacts with it.

### General properties

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
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |
| **Allow Download** | Toggles visibility of the "Download" button in the table header. When turned on, users are able to download the table data as a .csv file or Microsoft Excel file. |
| **Allow Column Freeze** | Enables freezing and unfreezing the columns via a drop down in the columns' header cells. |
| **CSV Separator** | Sets the separator character to use for formatting the downloaded .csv file. Only applies when **Allow Download** is turned on. Default: `,` |


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
