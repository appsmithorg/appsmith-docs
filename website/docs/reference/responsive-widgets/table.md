---
title: Table (ALPHA)
sidebar_label: Table
hide_title: true
description: The Table widget shows rows of data, and lets users search, sort, filter, select, and act on rows.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Table (ALPHA)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>
</div>

<!-- vale on -->

:::caution Alpha feature: invite only
Responsive Widgets are in alpha and available by invitation only on Business and Enterprise plans. Behavior and properties may change. To request access, [open a support ticket](https://support.appsmith.com) and name the feature **Responsive Widgets (ALPHA)**.
:::

The Table widget shows an array of objects as rows and columns. Users can search, sort, filter, page through, and select rows. You can add row actions, bulk actions for selected rows, grouping, tree rows, and a form row for adding new data.

Widget type: `WDS_ANVIL_TABLE_WIDGET`

New tables get the name `AnvilTable1`, `AnvilTable2`, and so on. The examples on this page use `AnvilTable1`.

<ZoomImage src="/img/responsive-widgets/table.png" alt="Table widget in a Responsive app" caption="Table widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Table data `array`

<dd>

Sets the rows of the table. Takes an array of objects. Each object is a row, and each key is a column. You can connect a query or API to the table from this control, or write a binding.

*Example:*

```js
{{getOrders.data}}
```

</dd>

#### Columns

<dd>

Lists the table columns. The table creates a column for each key in **Table data**. Click a column to open its settings. For details, see [Column properties](#column-properties). Column names must be unique.

</dd>

#### Update mode `string`

<dd>

Sets how users save edited cells. Options: **Single Row** (default) or **Multi Row**. This property shows only when at least one column is editable.

</dd>

#### Primary key column `string`

<dd>

Sets a column with a unique value for each row. The table uses it to keep `selectedRows` and `triggeredRow` tied to the right rows when the data changes.

</dd>

### Pagination

#### Page size `number`

<dd>

Sets the number of rows on each page. The minimum is 1. New tables start at `8`.

</dd>

#### Show pagination `boolean`

<dd>

Shows or hides the pagination controls. Default: on.

</dd>

### Search & filters

#### Allow searching `boolean`

<dd>

Shows or hides the search box. Default: on.

</dd>

#### Default search text `string`

<dd>

Sets search text that the table applies when it loads. This property shows only when **Allow searching** is on.

</dd>

### Row selection

#### Default selected row `number`

<dd>

Sets the index of the row that is selected when the table loads. Use `-1` for no selection. New tables start at `0`. This property shows only when **Enable multi-row selection** is off.

</dd>

#### Default selected rows `array`

<dd>

Sets the indexes of the rows that are selected when the table loads, for example `[0, 2]`. This property shows only when **Enable multi-row selection** is on.

</dd>

#### Enable multi-row selection `boolean`

<dd>

Lets users select more than one row. You cannot bind this property.

</dd>

#### onRowSelected

<dd>

Sets the action that runs when a user selects a row. See [Events](#events).

</dd>

### Sorting

#### Column sorting `boolean`

<dd>

Lets users sort the table by clicking a column header. Default: on.

</dd>

#### onSort

<dd>

Sets the action that runs when a user sorts a column. This property shows only when **Column sorting** is on.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Table features

#### Row selection checkboxes `boolean`

<dd>

Shows a checkbox on each row. Users select rows with the checkboxes, and the selection toolbar shows your bulk actions. Default: on.

</dd>

#### Columns menu `boolean`

<dd>

Shows the **Columns** menu in the table toolbar. Users can change the row spacing there. Default: on.

</dd>

#### Saved views `boolean`

<dd>

Shows the saved views menu. Default: on.

</dd>

#### Fullscreen button `boolean`

<dd>

Shows a button that opens the table in full screen. Default: off.

</dd>

#### Height mode `string`

<dd>

Sets how the table height works. Options:

- **Fixed (scroll inside)** (default): the table keeps its height and scrolls inside.
- **Auto (grow with content)**: the table grows with its rows.

</dd>

#### Search placeholder `string`

<dd>

Sets the placeholder text in the search box.

</dd>

#### Virtualized rows `string`

<dd>

Sets whether the table renders only the rows on screen. This helps with large pages. Options:

- **Auto (past 100 rows)** (default): turns on when a page has more than 100 rows.
- **Always**
- **Off**

</dd>

#### Server side pagination `boolean`

<dd>

Lets your query fetch one page of data at a time. Use `AnvilTable1.pageNo` and `AnvilTable1.pageSize` in the query. Default: off.

</dd>

#### Total records `number`

<dd>

Sets the total number of rows across all pages. The table uses it to show the row count and page numbers. This property shows only when **Server side pagination** is on.

*Example:*

```js
{{Query1.data.total}}
```

</dd>

#### onPageChange

<dd>

Sets the action that runs when the page changes. Re-run your query here. This property shows only when **Server side pagination** is on.

</dd>

#### onPageSizeChange

<dd>

Sets the action that runs when a user changes the rows per page. This property shows only when **Server side pagination** is on.

</dd>

### Grouping

#### Group by column `string`

<dd>

Sets a column name (ID or alias) to group rows under headers that users can collapse. Works with client-side data only.

</dd>

#### Group aggregate `string`

<dd>

Sets the value that the group row shows for number columns. Options: **None** (default), **Sum**, **Average**, **Count**. This property shows only when **Group by column** is set.

</dd>

### Tree data

#### Children key `string`

<dd>

Sets the key in each row that holds its child rows, for example `children`. Leave it empty to turn off tree mode.

- If **Group by column** is set, the table ignores this property.
- Child rows are for display only. Users cannot select, edit, or run row actions on them.
- Search, filters, sorting, and exports leave out child rows.
- Works with client-side data only. The table does not save which rows are expanded.

</dd>

### Adding a row

#### Allow adding a row `boolean`

<dd>

Lets users add a new row to the table.

</dd>

#### Default values `object`

<dd>

Sets the starting values for a new row. This property shows only when **Allow adding a row** is on.

*Example:*

```js
{{ { "status": "NEW" } }}
```

</dd>

#### onAddNewRowSave

<dd>

Sets the action that runs when a user saves the new row. This property shows only when **Allow adding a row** is on.

</dd>

#### onAddNewRowDiscard

<dd>

Sets the action that runs when a user discards the new row. This property shows only when **Allow adding a row** is on.

</dd>

### Row actions

#### Row actions

<dd>

Adds actions to a menu at the end of each row. Each action has these settings:

- **Label**: the text of the action.
- **Visible**: shows or hides the action.
- **onClick**: the action to run. `{{currentRow}}` holds the row data.

</dd>

### Bulk actions

#### Bulk actions

<dd>

Adds actions to the selection toolbar. The toolbar shows when users select rows. Each action has these settings:

- **Label**: the text of the action.
- **Visible**: shows or hides the action.
- **onClick**: the action to run. `{{selectedRows}}` holds the selected rows.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### Rows

#### Alternate row striping `boolean`

<dd>

Gives every other row a different background. Default: off.

</dd>

#### Alternate row color `string`

<dd>

Sets the background of striped rows. This property shows only when **Alternate row striping** is on.

</dd>

#### Cell borders `string`

<dd>

Sets which cell borders show. Options: **Horizontal only** (default), **All borders**, **No borders**.

Values for code: `horizontal`, `all`, `none`.

</dd>

#### Row spacing `string`

<dd>

Sets the default space in each row. Users can change it in the **Columns** menu. Options: **Compact**, **Comfortable** (default), **Spacious**.

For finer control, set `--anvil-table-cell-padding-x` and `--anvil-table-cell-padding-y` in **Custom CSS**.

</dd>

### Header

#### Background `string`

<dd>

Sets the background color of the header row.

</dd>

#### Text color `string`

<dd>

Sets the text color of the header row.

</dd>

#### Uppercase labels `boolean`

<dd>

Shows the column headers in uppercase.

</dd>

### Typography

#### Font family `string`

<dd>

Sets the font of the table. Takes any CSS font stack, for example `Inter, sans-serif`.

</dd>

#### Font size `string`

<dd>

Sets the text size of the table. Takes any CSS size, for example `14px`.

</dd>

#### Text color `string`

<dd>

Sets the color of the cell text.

</dd>

### Conditional formatting

#### Rules `array`

<dd>

Styles cells or rows when a value matches a condition. Each rule is an object.

- A cell rule lists `columns` and styles those cells.
- A row rule sets `scope: "row"` and one `column`. It styles the whole row from that column's value.
- `condition` is one of `isEqual`, `notEqual`, `contains`, `gt`, `gte`, `lt`, `lte`, `empty`, or `notEmpty`.
- `style` can set `backgroundColor`, `textColor`, and `fontWeight`.

*Example:*

```js
{{[
  { columns: ["status"], condition: "isEqual", value: "FAILED", style: { backgroundColor: "#fde8e8", textColor: "#b91c1c", fontWeight: "bold" } },
  { scope: "row", column: "status", condition: "isEqual", value: "FAILED", style: { backgroundColor: "#fff7ed" } }
]}}
```

</dd>

### Custom CSS

#### Custom CSS `string`

<dd>

Adds CSS to style this table. Appsmith prefixes your selectors so they target this table. Target these class names, or set `--anvil-table-*` variables:

- `.anvil-table__header-cell`
- `.anvil-table__row`
- `.anvil-table__row--alt`
- `.anvil-table__cell`
- `.anvil-table__toolbar`
- `.anvil-table__footer`

*Example:*

```css
.anvil-table__row--alt { background: #f8fafc; }
```

:::caution
Treat Custom CSS as code. Write it yourself and keep it static. Do not bind it to user input, query results, or other data that app users can change.
:::

</dd>

## Column properties

Click a column in the **Columns** list to open its settings. The settings you see depend on the column type.

### Content: Data

#### Column type `string`

<dd>

Sets how the column shows its data. Options: **Button**, **Number**, **Plain text**, **URL**, **Date**.

Values for code: `button`, `number`, `text`, `url`, `date`.

</dd>

#### Property Name `string`

<dd>

Sets the key for this column in `selectedRow`. This property shows only for columns you add yourself, with the type **Plain text**, **Number**, **URL**, or **Date**. Changing the column name overwrites this value.

</dd>

#### Display text `string`

<dd>

Sets the text that a URL column shows in place of the link. Shows only for **URL** columns. You cannot bind this property.

</dd>

#### Date format `string`

<dd>

Sets the date format of the incoming data. Default: `YYYY-MM-DD HH:mm`. Shows only for **Date** columns.

Options include UNIX timestamp in seconds (`Epoch`) or milliseconds (`Milliseconds`), ISO 8601 (`YYYY-MM-DDTHH:mm:ss.SSSZ`), `YYYY-MM-DD`, `DD/MM/YYYY`, `MM/DD/YYYY`, `LLL`, and `LL`.

</dd>

#### Display format `string`

<dd>

Sets the date format that users see. Default: `YYYY-MM-DD`. Shows only for **Date** columns. It has the same options as **Date format**.

</dd>

### Content: Basic (Button columns)

#### Text `string`

<dd>

Sets the label of the button. Default: `Action`.

</dd>

#### onClick

<dd>

Sets the action that runs when a user clicks the button. `{{currentRow}}` holds the row data.

</dd>

### Content: General (all columns)

#### Visible `boolean`

<dd>

Controls whether the cells in the column are visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from clicking the button. Default: off. Shows only for **Button** columns.

</dd>

### Content: Validation (editable columns)

This section shows only when the column is editable and its type is **Plain text**, **Number**, or **Date**.

#### Min `number`

<dd>

Sets the smallest allowed value. Shows only for **Number** columns.

</dd>

#### Max `number`

<dd>

Sets the largest allowed value. Shows only for **Number** columns.

</dd>

#### Min Date `string`

<dd>

Sets the earliest allowed date. Shows only for **Date** columns.

</dd>

#### Max Date `string`

<dd>

Sets the latest allowed date. Shows only for **Date** columns.

</dd>

#### Regex `string`

<dd>

Checks the cell value against a regular expression and shows an error if it fails. Hidden for **Date** columns.

</dd>

#### Valid `boolean`

<dd>

Sets an expression that decides if the edited value is valid. Default: true. Hidden for **Date** columns.

</dd>

#### Error message `string`

<dd>

Sets the message to show when the **Regex** or **Valid** check fails. Hidden for **Date** columns.

</dd>

#### Required `boolean`

<dd>

Makes the cell value required.

</dd>

### Content: Events (editable columns)

This section shows only when the column is editable.

#### onSubmit

<dd>

Runs when the user presses Enter or clicks outside the cell. Shows for **Plain text** and **Number** columns.

</dd>

#### onDateSelected

<dd>

Runs when the user picks a date in the calendar. Shows for **Date** columns.

</dd>

### Content: Date Settings (editable Date columns)

This section shows only for **Date** columns that are editable.

#### First Day Of Week `number`

<dd>

Sets the first day of the week in the calendar. Use `0` for Sunday through `6` for Saturday. Default: `0`.

</dd>

#### Show Shortcuts `boolean`

<dd>

Shows a menu of date shortcuts.

</dd>

### Content: Save Button and Discard Button (edit actions column)

These sections show only for the edit actions column. Each button has these settings:

- **Text** (`saveActionLabel`, `discardActionLabel`)
- **onSave** or **onDiscard**: the action to run.
- **Visible** (default: on) and **Disabled** (default: off).
- Style: **Button color**, **Button variant** (Primary, Secondary, Tertiary), **Border radius**, **Icon**, and icon **Position** (default: left).

### Style: General (Button columns)

#### Button variant `string`

<dd>

Sets the look of the button. Options: **Filled** (default), **Outlined**, **Subtle**, **Ghost**.

Values for code: `filled`, `outlined`, `subtle`, `ghost`.

</dd>

### Style: Text formatting

#### Emphasis `string`

<dd>

Makes the text bold, italic, or both. Values: `BOLD`, `ITALIC`. Shows for **Plain text**, **Number**, **URL**, and **Date** columns.

</dd>

### Style: Color (Button columns)

#### Button color `string`

<dd>

Sets the semantic color of the button. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**. Hidden for **Plain text**, **Number**, **URL**, and **Date** columns.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{AnvilTable1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{AnvilTable1.isVisible}}
```

</dd>

#### tableData `array`

<dd>

Holds the data in the table.

*Example:*

```js
{{AnvilTable1.tableData}}
```

</dd>

#### selectedRow `object`

<dd>

Holds the data of the selected row. With multi-row selection on, it holds the last selected row.

*Example:*

```js
{{AnvilTable1.selectedRow.id}}
```

</dd>

#### selectedRows `array`

<dd>

Holds the data of all selected rows.

*Example:*

```js
{{AnvilTable1.selectedRows}}
```

</dd>

#### selectedRowIndex `number`

<dd>

Holds the index of the selected row.

*Example:*

```js
{{AnvilTable1.selectedRowIndex}}
```

</dd>

#### selectedRowIndices `array`

<dd>

Holds the indexes of the selected rows when multi-row selection is on.

*Example:*

```js
{{AnvilTable1.selectedRowIndices}}
```

</dd>

#### triggeredRow `object`

<dd>

Holds the data of the row where the user last clicked a button or row action.

*Example:*

```js
{{AnvilTable1.triggeredRow}}
```

</dd>

#### triggeredRowIndex `number`

<dd>

Holds the index of the row where the user last clicked a button or row action.

*Example:*

```js
{{AnvilTable1.triggeredRowIndex}}
```

</dd>

#### updatedRow `object`

<dd>

Holds the data of the row the user last edited.

*Example:*

```js
{{AnvilTable1.updatedRow}}
```

</dd>

#### updatedRows `array`

<dd>

Holds the rows the user edited.

*Example:*

```js
{{AnvilTable1.updatedRows}}
```

</dd>

#### updatedRowIndices `array`

<dd>

Holds the indexes of the rows the user edited.

*Example:*

```js
{{AnvilTable1.updatedRowIndices}}
```

</dd>

#### newRow `object`

<dd>

Holds the data of the new row.

*Example:*

```js
{{AnvilTable1.newRow}}
```

</dd>

#### isAddRowInProgress `boolean`

<dd>

Shows whether a new row is in progress.

*Example:*

```js
{{AnvilTable1.isAddRowInProgress}}
```

</dd>

#### pageNo `number`

<dd>

Holds the current page number. Starts at `1`.

*Example:*

```js
{{AnvilTable1.pageNo}}
```

</dd>

#### pageSize `number`

<dd>

Holds the number of rows on each page.

*Example:*

```js
{{AnvilTable1.pageSize}}
```

</dd>

#### pageOffset `number`

<dd>

Holds the row offset of the current page. Use it in server-side pagination queries.

*Example:*

```js
{{AnvilTable1.pageOffset}}
```

</dd>

#### previousPageVisited `boolean`

<dd>

Shows whether the user went to the previous page.

*Example:*

```js
{{AnvilTable1.previousPageVisited}}
```

</dd>

#### nextPageVisited `boolean`

<dd>

Shows whether the user went to the next page.

*Example:*

```js
{{AnvilTable1.nextPageVisited}}
```

</dd>

#### totalRecordsCount `number`

<dd>

Holds the value of **Total records**.

*Example:*

```js
{{AnvilTable1.totalRecordsCount}}
```

</dd>

#### searchText `string`

<dd>

Holds the text in the search box.

*Example:*

```js
{{AnvilTable1.searchText}}
```

</dd>

#### sortOrder `object`

<dd>

Holds the sort state as `{ column, order }`. `order` is `asc` or `desc`.

*Example:*

```js
{{AnvilTable1.sortOrder.column}}
```

</dd>

#### tableHeaders `array`

<dd>

Holds the column headers of the table.

*Example:*

```js
{{AnvilTable1.tableHeaders}}
```

</dd>

#### filters `array`

<dd>

Holds the filters that are applied for server-side filtering. This property may not be available on your instance yet.

*Example:*

```js
{{AnvilTable1.filters}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget. Pass `true` or `false`.

*Example:*

```js
AnvilTable1.setVisibility(false)
```

</dd>

#### setData (param: array): Promise

<dd>

Sets the table data.

*Example:*

```js
AnvilTable1.setData([{ name: "John" }])
```

</dd>

#### setSelectedRowIndex (param: number): Promise

<dd>

Selects a row by index. Not available when multi-row selection is on.

*Example:*

```js
AnvilTable1.setSelectedRowIndex(2)
```

</dd>

#### setSelectedRowIndices (param: array): Promise

<dd>

Selects rows by index. Available only when multi-row selection is on.

*Example:*

```js
AnvilTable1.setSelectedRowIndices([0, 2])
```

</dd>

## Events

#### onRowSelected

<dd>

Runs when a user selects a row, by clicking it or with a checkbox.

</dd>

#### onSort

<dd>

Runs when a user sorts a column. Available when **Column sorting** is on.

</dd>

#### onPageChange

<dd>

Runs when the page changes. Available when **Server side pagination** is on.

</dd>

#### onPageSizeChange

<dd>

Runs when a user changes the rows per page. The table goes back to page 1. Available when **Server side pagination** is on.

</dd>

#### onAddNewRowSave

<dd>

Runs when a user saves a new row. `{{newRow}}` holds the new row. Available when **Allow adding a row** is on.

</dd>

#### onAddNewRowDiscard

<dd>

Runs when a user discards a new row. Available when **Allow adding a row** is on.

</dd>

#### Row action onClick

<dd>

Runs when a user clicks a row action. `{{currentRow}}` holds the row data.

</dd>

#### Bulk action onClick

<dd>

Runs when a user clicks a bulk action in the selection toolbar. `{{selectedRows}}` holds the selected rows.

</dd>
