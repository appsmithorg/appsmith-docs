---
description: This page shows you how to display, search, and filter data in a Table widget. 
---

# Display and Filter Data in Table Widget

This page shows you how to display and filter data based on a search text, date range, or specific criteria.

## Prerequisites
- A [Table widget](/reference/widgets/table).
- A datasource containing the data to display and filter.

## Display data
To bind and display data on the Table widget, follow these steps:
1. In the **Table data** property of the widget, select the connected datasource.
2. In **Select table from [your connected datasource]**, select a table. The specific data source options may vary depending on your configured datasource.
3. Select a column with unique values in **Select a searchable column**.
   Appsmith auto-generates a query based on the search text for a searchable column after you select it. If you do not select a searchable column, the system searches all columns and filters the data.
4. Click **Connect data** in the Table widget's property pane. The Table widget displays the selected table data.
   
   To display data conditionally from different queries, see this [sample app](https://app.appsmith.com/applications/61e11a42eb0501052b9fab3e/pages/61e11a42eb0501052b9fab41?_gl=1*mxtef4*_ga*MTcyMjQxMTI3MS4xNjk1NzEzMDg0*_ga_D1VS24CQXE*MTY5OTMyNzAyNi4xNDguMS4xNjk5MzI3NjA3LjAuMC4w).
5. To rename a column, in the Table widget's property pane, click the gear icon ⚙️ beside a column.
   For more information to customize columns, see [Column](/reference/widgets/table/column-settings).

   :::info
   Appsmith automatically generates server-side pagination queries when you use the one-click binding feature to connect data. If you prefer to set up the server-side pagination manually, follow the instructions in [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).
   :::
   
## Hide columns
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

## Format cells
To format cells of the table, follow these steps:
1. Select **Editable** in the Table widget's property pane. This lets you update the data directly from the UI by double-clicking on the desired cell.

   For example, use the following code to set the background color of a cell:
   ```jsx
   {{currentRow.trip_status === "active" ? "#22c55e" : "#facc15"}}
   ```
2. To customize each cell of the Table widget, see [Style properties](/reference/widgets/table#color).

For more information, see this [sample app](https://app.appsmith.com/applications/61e11a42eb0501052b9fab3e/pages/6228808306971d5d538946e8?_gl=1*189op77*_ga*MTcyMjQxMTI3MS4xNjk1NzEzMDg0*_ga_D1VS24CQXE*MTY5OTI1MzI2My4xNDQuMS4xNjk5MjU1OTMyLjAuMC4w).

## Filter data using search text
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
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		search_data.run();
		Table1.setData(search_data.data);
	}
   ```
5. Set the [onClick](/reference/widgets/button#onclick) event of the Button widget to execute the function using the following code:
   ```jsx
   {{JSObject1.bindSearchData()}}
   ```

For more information, see this [sample app](https://app.appsmith.com/applications/6548a90af1da8d53d9d538f0/pages/6548a90af1da8d53d9d53902/edit/queries/6548a90af1da8d53d9d53928).

## Filter data for date range
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
		Table1.setData(filter_by_date.data);
	}
   ```

   The table data automatically updates to reflect the data from the selected date range when you select dates from `trip_start_date` or `trip_end_date`.

## Filter data for specific value
To filter data based on specific criteria using a Select widget, follow these steps:
1. Drag and drop a [Select](/reference/widgets/select) widget.
2. Create a query to fetch data using the **selectedOptionValue** reference property of the widget using the following code:
   
   ```jsx
   SELECT * FROM trip_details WHERE vehicle_no = {{vehicles.selectedOptionValue}};
   ```
3. Set the **onOptionChange** event of the Select widget to execute the query.
