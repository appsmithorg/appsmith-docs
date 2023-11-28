---
description: This page shows you how to search and filter data in a Table widget. 
---
# Search and Filter Table Data
This page shows you how to search and filter data in a Table widget based on a search text, date range, or dropdown list option.

## Using search text
To filter data using the built-in search feature, follow these steps:
1. In the property pane of the Table widget, enable **Allow searching**.
2. Modify the `fetch_trip_details` query to fetch data corresponding to the search text using the following code:

   ```jsx
   SELECT * FROM trip_details a WHERE route_id LIKE {{ "%" + trip_details_table.searchText + "%"}};
   ```
   If you are using a REST API, refer to the following example to send the request:
   ```
   https://mock-api.logistics.com/trip_details?route_id={{search_text.text}}
   ```
3. In the Table widget's property pane, scroll to the **onSearchTextChanged** event and paste the following code:
   
   ```jsx
   {{fetch_trip_details.run()}}
   ```

For more information, see this [sample app](https://app.appsmith.com/applications/6548a90af1da8d53d9d538f0/pages/6548a90af1da8d53d9d53902/edit/queries/6548a90af1da8d53d9d53928).

## Using date range
To filter data based on a date range, follow these steps:
1. Drag and drop two [Date picker](/reference/widgets/datepicker) widgets.
2. Modify the `fetch_trip_details` query to fetch data using the **selectedDate** reference property of the widgets using the following code where `trip_start_date` and `trip_end_date` are the Date picker widgets:

   ```jsx
   SELECT * FROM trip_details WHERE selected_period BETWEEN SYMMETRIC {{moment(trip_start_date.selectedDate)}} AND {{moment(trip_end_date.selectedDate)}} ORDER BY id;
   ``` 
   Use either the `formattedDate` or `selectedDate` property based on your preferred date formatting.
   To configure queries for specific datasources, see [Datasources](/connect-data/reference).
   
   :::info
   When using an API that returns the date in a different format, use [Moment](https://momentjs.com/docs/) to format it. 
   For examples, see [moment](/core-concepts/writing-code/ext-libraries#moment).
   :::
3. Set the [onDateSelected](/reference/widgets/datepicker#ondateselected) event of the Date picker widgets to execute the query using the following code:
   ```jsx
   fetch_trip_details.run();
   ```

   The table data automatically updates to reflect the data from the selected date range when you select dates from `trip_start_date` or `trip_end_date`.

## Using dropdown list
To filter data based on specific criteria using a Select widget, follow these steps:
1. Drag and drop a [Select](/reference/widgets/select) widget.
2. Create a query to populate the Select widget with the values you wish to filter by. For example, to populate all the vehicle numbers in the widget, use the following code:
   
   ```sql
   SELECT DISTINCT vehicle_no FROM trip_details;
   ```
3. Modify the fetch query to fetch data using the **selectedOptionValue** reference property of the widget using the following code where `vehicles` is the name of the Select widget:
   
   ```jsx
   SELECT * FROM trip_details WHERE vehicle_no = {{vehicles.selectedOptionValue}};
   ```
4. In the Select widget's property pane, set the **onOptionChange** event to execute the query using the following code:
   
   ```jsx
   fetch_trip_details.run();
   ```
5. Set the **Default selected value** of the Select widget to set a default value and load the data corresponding to the default value. For more information, see [Default selected value](/reference/widgets/select#default-selected-value-string).

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