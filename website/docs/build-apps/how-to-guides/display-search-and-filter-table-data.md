---
description: This page shows you how to display, search, and filter data in a Table widget. 
---

# Display and Lookup Data in Table Widget

This page shows you how to display and lookup data based on a search text, date range, or specific criteria.

## Prerequisites
- A datasource containing the data to display and filter. See [Connect datasource](/getting-started/tutorials/the-basics/connect-query-display-data#connect-datasource) for a tutorial. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).

## Display data
You can display data in a Table widget in the following ways:
- [Mustache binding](#mustache-binding)
- [One-click binding](#one-click-binding)

### Mustache binding
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
For more information, see [Write Code in Appsmith](/core-concepts/writing-code).
For an example to display data, see this [sample app](https://app.appsmith.com/applications/61e010e7eb0501052b9fa0f0/pages/61fba49b2cd3d95ca414b364?_gl=1*86f7ph*_ga*MTcyMjQxMTI3MS4xNjk1NzEzMDg0*_ga_D1VS24CQXE*MTY5OTk0MjAzMi4xNTUuMS4xNjk5OTQzNjY2LjAuMC4w).

### One-click binding
To bind and display data on the Table widget using one-click binding, follow these steps:
1. Drag and drop a [Table](/reference/widgets/table) widget.
2. In the **Table data** property of the widget, select the connected datasource.
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
   
### Customize columns
1. Drag and drop the columns to rearrange the order.
2. To customize each column, in the Table widget's property pane, click the gear icon ⚙️ beside a column.
3. You can select the **Column type**, set the **Computed value**, **Visible** property and other properties.
   For more information to customize columns, see [Column](/reference/widgets/table/column-settings).

### Hide table columns
To set the visibility of specific columns, follow these steps:
1. In the Table widget's property pane, click the gear icon ⚙️ beside a column.
2. Disable the **Visible** property of a column to hide the column.
3. You can also set the column visibility dynamically using the [storeValue](https://docs.appsmith.com/reference/appsmith-framework/widget-actions/store-value) global function.

   For example, set the **Visible** property of a column using the following code:

   ```jsx
   {{(appsmith.store.showColumn == undefined) ? false : appsmith.store.showColumn}}
   ```

   Set the value of the `showColumn` property on click of a [Button](/reference/widgets/button) widget using the following code:

   ```jsx
   {{storeValue('showColumn',true)}}
   ```
For more information, see this [sample app](https://app.appsmith.com/app/table-widget-show-hide-columns/show-column-onclick-62f2c34474d6e95d0a53c918?_gl=1*bn3bvw*_ga*MTcyMjQxMTI3MS4xNjk1NzEzMDg0*_ga_D1VS24CQXE*MTY5OTI1MzI2My4xNDQuMS4xNjk5MjUzMzM3LjAuMC4w).

### Format table cells
To format cells of the table, follow these steps:
1. Select **Editable** in the Table widget's property pane. This lets you update the data directly from the UI by double-clicking on the desired cell.

   For example, use the following code to set the background color of a cell:
   ```jsx
   {{currentRow.trip_status === "active" ? "#22c55e" : "#facc15"}}
   ```
2. To customize each cell of the Table widget, see [Style properties](/reference/widgets/table#color).

For more information, see this [sample app](https://app.appsmith.com/applications/61e11a42eb0501052b9fab3e/pages/6228808306971d5d538946e8?_gl=1*189op77*_ga*MTcyMjQxMTI3MS4xNjk1NzEzMDg0*_ga_D1VS24CQXE*MTY5OTI1MzI2My4xNDQuMS4xNjk5MjU1OTMyLjAuMC4w).

## Server side pagination
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
To set up the server-side pagination manually, follow the instructions in [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

## Filter table data 

### Using search text
To filter data based on a search text, follow these steps:
1. Drag and drop an [Input](/reference/widgets/input) widget and rename it to `search_text`.
2. Create a query to fetch data corresponding to the search text using the following code:

   ```jsx
   SELECT * FROM trip_details a WHERE a::text LIKE '%'  || {{search_text.text}} || '%';
   ```
   If you are using a REST API, refer the following example to send the request:
   ```
   https://mock-api.logistics.com/trip_details?driver_name={{search_text.text}}
   ```
3. Drag and drop a [Button](/reference/widgets/button) widget.
4. Use the following code to bind the search results to the Table widget:
   
   ```jsx
   async bindSearchData () {
		search_data.run();
		trip_details_table.setData(search_data.data);
	}
   ```
5. Set the [onClick](/reference/widgets/button#onclick) event of the Button widget to execute the function using the following code:
   ```jsx
   {{JSObject1.bindSearchData()}}
   ```

For more information, see this [sample app](https://app.appsmith.com/applications/6548a90af1da8d53d9d538f0/pages/6548a90af1da8d53d9d53902/edit/queries/6548a90af1da8d53d9d53928).

### Using date range
To filter data based on a date range, follow these steps:
1. Drag and drop two [Date picker](/reference/widgets/datepicker) widgets.
2. Create a query to fetch data using the **selectedDate** reference property of the widgets using the following code where `trip_start_date` and `trip_end_date` are the Date picker widgets:

   ```jsx
   SELECT * FROM trip_details a WHERE selected_period BETWEEN SYMMETRIC {{trip_start_date.formattedDate}} AND {{trip_end_date.formattedDate}} ORDER BY id;
   ``` 
   Use either the `formattedDate` or `selectedDate` property based on your preferred date formatting.
   To configure queries for specific datasources, see [Datasources](/connect-data/reference).
   
   :::info
   When using an API that returns the date in a different format, use [Moment](https://momentjs.com/docs/) to format it. 
   For examples, see [moment](/core-concepts/writing-code/ext-libraries#moment).
   :::
3. Set the [onDateSelected](/reference/widgets/datepicker#ondateselected) event of the Date picker widgets to execute the query using the following code:
   ```jsx
   async filterByDate () {
		filter_by_date.run();
		trip_details_table.setData(filter_by_date.data);
	}
   ```

   The table data automatically updates to reflect the data from the selected date range when you select dates from `trip_start_date` or `trip_end_date`.

### Using list option
To filter data based on specific criteria using a Select widget, follow these steps:
1. Drag and drop a [Select](/reference/widgets/select) widget.
2. Create a query to populate the Select widget with the values you wish to filter by. For example, to populate all the vehicle numbers in the widget, use the following code:
   
   ```sql
   SELECT DISTINCT vehicle_no FROM trip_details;
   ```
3. Create a query named `fetch_vehicle_details` to fetch data using the **selectedOptionValue** reference property of the widget using the following code where `vehicles` is the name of the Select widget:
   
   ```jsx
   SELECT * FROM trip_details WHERE ILIKE {{ "%" + vehicles.selectedOptionValue + "%"}};
   ```
4. Add a JS object to execute the `fetch_vehicle_details` query and bind the data to the Table widget using the following code:
   
   ```jsx
   async filter_data () {
		fetch_vehicle_details.run();
		trip_details_table.setData(fetch_vehicle_details.data);

	}
   ```
5. Set the **onOptionChange** event of the Select widget to execute the JS object using the following code:
6. 
   ```jsx
   {{JSObject1.filter_data();}}
   ```
7. Set the **Default selected value** of the Select widget to set a default value and load the data corresponding to the default value. For more information, see [Default selected value](/reference/widgets/select#default-selected-value-string).

## Sort data
To sort data in the Table widget, follow these steps:
1. Create a query and rename it to `sort_data`.
2. Use the following code to fetch data from the table based on the sorted column, sort order, and page size where `trip_details` is the database table and `trip_details_table` is the Table widget:

   ```jsx
   SELECT * FROM 
    trip_details 
   ORDER BY 
    "{{trip_details_table.sortOrder.column || 'id'}}" {{trip_details_table.sortOrder.order !== "desc" ? "" : "DESC"}}
   LIMIT
    {{trip_details_table.pageSize}}
   OFFSET 
    {{trip_details_table.pageOffset}}
   ```
3. In the property pane of the Table widget, enable **Column sorting**.
4. Set the **onSort** event to run the `sort_data` query using the following code:

   ```jsx
   {{sort_data.run()}}
   ```

## See also
- [Sample apps](https://docs.appsmith.com/learning-and-resources/sample-apps)
- [Set up Table Inline Editing](/reference/widgets/table/inline-editing)
- [Refresh Table Data After Updates](/build-apps/how-to-guides/Refresh-table-data)