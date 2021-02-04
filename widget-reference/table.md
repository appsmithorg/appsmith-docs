---
description: >-
  The table is used to display rows of data. You can display data from an API in
  a table, trigger an action when a user selects a row, and even work with large
  paginated data sets
---

# Table



![Click to expand](../.gitbook/assets/table.gif)

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
| **Table Data** | This property lets you edit the data in the table. You can either write an array of objects to display as table rows or you can bind data from an API using the mustache syntax |
| **Server Side Pagination** | Enables you to implement pagination by limiting the number of results fetched per API / Query request. Use this property when your table data is being bound to an API / Query. |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Default Search Text** | Sets the default search text of the table |
| **Enable multi-row selection** | Allows multiple rows of a table to be selected. The rows are populated in the selectedRows field |

| Action | Description |
| :--- | :--- |
| **Column Action** | Adds a new column to the table with a button against each row. The button can be configured to trigger an action on the corresponding data row. |
| **onRowSelected** | Sets the action to be run when the user selects a row. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
| **onPageChange** | Sets the action to be run when the table's page changes. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
| **onSearchTextChange** | Sets the action to be run when the user enters a search text. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

