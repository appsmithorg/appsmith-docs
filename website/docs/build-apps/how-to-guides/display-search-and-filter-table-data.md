---
description: This page shows you how to display and lookup data in a Table widget. 
---

# Display and Lookup Data in Table Widget

This page shows you how to display and lookup data in a Table widget.
## Prerequisites
- A datasource containing the data to display and filter. See [Connect datasource](/getting-started/tutorials/the-basics/connect-query-display-data#connect-datasource) for a tutorial. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).

## Display data
You can display data in a Table widget in the following ways:
- [One-click binding](#one-click-binding)
- [Mustache binding](#mustache-binding)

### One-click binding
One-click binding is Appsmith's way of simplifying the process of binding data. It doesn't require manual entry of mustache syntax and can be done by selecting options from a widget's property pane. When you want to bind a specific data property directly to a widget property without manipulation or additional logic, one-click binding is a quick and error-free method.
To bind and display data on the Table widget using one-click binding, follow these steps:
1. Drag and drop a [Table](/reference/widgets/table) widget.
2. In the **Table data** property of the widget, select the connected datasource. You can also select an existing query if you already have one to retrieve data.
3. In **Select table from [your connected datasource]**, select a table. The specific data source options may vary depending on your configured datasource.
4. Select a column with unique values in **Select a searchable column**.
   Appsmith auto-generates a query based on the search text for a searchable column after you select it. If you do not select a searchable column, the system searches all columns and filters the data.

   Here is an example of an auto-generated query:

   ```sql
   SELECT * FROM trip_details
   WHERE
   "driver_name" ilike '%{{trip_details_table.searchText}}%'
   ORDER BY
   "{{trip_details_table.sortOrder.column || 'id'}}" {{trip_details_table.sortOrder.order !== "desc" ? "" : "DESC"}}
   LIMIT
   {{trip_details_table.pageSize}}
   OFFSET
   {{trip_details_table.pageOffset}}
   ```
   Where `trip_details_table.pageSize` is the pagination limit for the table and `trip_details_table.pageOffset` is the pagination offset. For more information, see [Reference properties](/reference/widgets/table#reference-properties).
5. Click **Connect data** in the Table widget's property pane. The Table widget displays the selected table data.

Appsmith automatically generates server-side pagination queries when you use the [one-click binding](#one-click-binding) feature to connect data. 
Here is an example of an auto-generated query with `pageSize` and `pageOffset`:

```sql
SELECT * FROM trip_details
ORDER BY
  "{{trip_details_table.sortOrder.column || 'id'}}" {{trip_details_table.sortOrder.order !== "desc" ? "" : "DESC"}}
LIMIT
  {{trip_details_table.pageSize}}
OFFSET
  {{trip_details_table.pageOffset}}
```
### Mustache binding
Mustache binding is useful when the data returned from your datasource or API is not an array, and you must map it to the desired format. 
To bind and display data on the Table widget using mustache binding, follow these steps:
1. Drag and drop a [Table](/reference/widgets/table) widget.
2. Create a new query to fetch data from the datasource and rename it to `fetch_trip_details`.
   This topic uses the example of a PostgreSQL datasource to fetch data.

   ```sql
   SELECT * FROM trip_details
   ```
3. Click **JS** in the **Table data** property of the Table widget's property pane.
4. Paste the following code to display the data from the `fetch_trip_details` query:
   
   ```jsx
   {{fetch_trip_details.data}}
   ```
For more information, see [Write Code in Appsmith](/write-code/overview).

To set up the server-side pagination manually, follow the instructions in [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

## Customize and hide columns
1. Drag and drop the columns to rearrange the order.
2. To customize each column, in the Table widget's property pane, click the gear icon ⚙️ beside a column.
3. You can select the **Column type**, set the **Computed value**, **Visible** property and other properties.
   For more information on customizing columns, see [Column](/reference/widgets/table/column-settings).
4. In the Table widget's property pane, scroll to the **Columns** section where all the table columns are listed.
5. Find the column you wish to hide, and click the eye icon ⚙️ beside a column.
   Alternatively, you can click the eye icon beside the column to hide it or filter out the column from the table data.

## Format table cells
Highlighting table cells enables you to visually distinguish specific cells from others.
For example, travel management applications highlight completed trips in green when displaying a table of trips to differentiate them quickly.
To highlight cells of the table, follow these steps:
1. Select **Editable** in the Table widget's property pane. This lets you update the data directly from the UI by double clicking on the desired cell.

   For example, use the following code to set the background color of a cell:
   ```jsx
   {{currentRow.trip_status === "active" ? "green" : "orange"}}
   ```
2. To customize each cell of the Table widget, see [Style properties](/reference/widgets/table#color).

## Search and filter table data
- [Using search text](/build-apps/how-to-guides/search-and-filter-table-data#using-search-text)
- [Using date range](/build-apps/how-to-guides/search-and-filter-table-data#using-date-range)
- [Using drop down list](/build-apps/how-to-guides/search-and-filter-table-data#using-drop-down)
- [Sort data](/build-apps/how-to-guides/search-and-filter-table-data#sort-data)

## See also
- [Sample apps](/learning-and-resources/sample-apps)
- [Set up Table Inline Editing](/reference/widgets/table/inline-editing)
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data)
- [Refresh Table Data After Updates](/build-apps/how-to-guides/Refresh-table-data)
