---
description: >-
  The table is used to display rows of data. You can display data from an API in
  a table, trigger an action when a user selects a row, and even work with large
  paginated data sets
---

# Table

{% embed url="https://www.youtube.com/watch?v=sgd-DMJsAHs&feature=youtu.be" caption="" %}

## Selected Row

Tables are useful to view large lists of data. To drill down into the data of a single row, the selected row property of a table can be used. Simply create UI that represents a row of a table and bind each widget to the selected row of the table. This code snippet illustrates binding an image column of the selected row to an Image widget.

```text
{{ Table1.selectedRow.imageUrl }}
```

## Properties

| Internal Property | Description |
| :--- | :--- |
| **selectedRow** | Contains the data of the row selected by the user. Will be undefined if no row is selected |
| **pageNo** | Contains the current page number that the user is on. Can be used by APIs for pagination |
| **selectedRows** | Contains an array of rows selected by the user when multi-select is enabled |
| **pageSize** | Contains the number of rows that can fit inside a page of the table. Changes along with the height & row height of the table |
| **searchText** | Contains the search text entered by the user in the Table |

| Widget Property | Description |
| :--- | :--- |
| **Table Data** | This property lets you edit the data in the table. You can either write an array of objects to display as table rows or you can bind data from an API using the mustache syntax `{{callMyApi.data}}` |
| **Columns** | Auto populated from the Table data. This lets you edit the label, show/hide each column \(the eye icon\) and also customize the [column settings](https://docs.appsmith.com/widget-reference/table#column-settings) |
| **Server Side Pagination** | Enables you to implement pagination by limiting the number of results fetched per API / Query request. Use this property when your table data is being bound to an API / Query. |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Default Search Text** | Sets the default search text of the table |
| **Enable multi-row selection** | Allows multiple rows of a table to be selected. The rows are populated in the selectedRows field |

| Action | Description |
| :--- | :--- |
| **onRowSelected** | Sets the action to be run when the user selects a row. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
| **onPageChange** | Sets the action to be run when the table's page changes. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
| **onSearchTextChange** | Sets the action to be run when the user enters a search text. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

### Column settings

Each column can now be customized through a set of properties by clicking on the gear icon.

![](../.gitbook/assets/table-click-cog.gif)

After clicking on the gear icon you see the Column type property which allows you to perform different actions on each column.

![](../.gitbook/assets/table-gif2.gif)

A great property introduced here is the `Computed value` and the `currentRow` internal property. This allows you the manipulate the value using JS expressions; ex you want to show the datetime stamp in the carbon format \(human-readable\), You can now do that by just using the js/lodash function. You can now also access each row's column values with `currentRow` property. This can be helpful if you wish to merge multiple value/properties under a single column.

![](../.gitbook/assets/current-row-show-hide-3.gif)

In the ex. above we rename `email` column to `contact` and then use the computed value property inside the column setting to merge `userName` and `email` in one column. We later hide the `userName` column.

Depending on the column type you have some control over styling as well now.

![Changing column styling; font, alignment, color.](../.gitbook/assets/edit-column-styles-4.gif)

Additionally compared to the functionality before the actions can now be set on every column with customization over style and click events

![Set column actions](../.gitbook/assets/column-action-uttons-5.gif)

| Properties | Description |
| :--- | :--- |
| **Column Type** | Select a column type from the dropdown and get relevant actions to perform |
| **Computed Value** | internal property `currentRow` is introduced to access each row data. You can utilize this property to manipulate the column data using JS expressions |
| **Styles** | Based on the Column Type, there are various style properties available to change the look and feel of each column |
| **Original/Display Date format** | In case of type `date` we can set the original/display date format to our choice |
| **Button Properties** | In case of column type `button` we can use these properties to change the label/color or create a onClick action |
| **Label** | In case of column type `switch` sets the label of the switch |
| **Default Selected** | In case of column type `switch` sets a default option that will be captured as user input unless it is changed by the user |

## How to display data and handle pagination inside a table?

[Read this guide](../core-concepts/displaying-data-read/display-data-tables.md#pagination)

