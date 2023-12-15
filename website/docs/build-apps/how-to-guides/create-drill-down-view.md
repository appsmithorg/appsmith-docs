---
description: Create a detailed view using a Table or a List.
---

# Create Data Drilldown View

This page shows you how to build a data drilldown view from a master dataset on a Table or a List widget.

## Prerequisites
- A datasource containing the data to display. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).

## Drilldown view from Table

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/zPYb6siR4h8b1xgRMLDm?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a data drilldown view using a Table widget, follow these steps:
1. Set the **Table data** property of the Table widget in the property pane to bind data.

   Example:

   ```jsx
   {{fetch_passengers.data}}
   ```
2. Drop a Modal widget, and add the required widgets to display specific details.
3. Add a new column to the Table widget and set its **Column Type** to **Button**.
   Set the **onClick** event of the button to trigger the Modal display.
4. In the Modal, bind data to the widgets corresponding to the triggered row from the Table widget. For example, to bind data to a Text widget, use the following code where `tbl_passengersTable` is the name of the Table widget, and `passenger_name` is the column:
   ```jsx
   {{tbl_passengersTable.triggeredRow.passenger_name}}
   ```
   You can format the data and display in the drilldown. For example, to format dates, use the following code:
   ```jsx
   {{moment(tbl_passengersTable.triggeredRow.dob).format('MMMM Do YYYY, h:mm:ss a')}}
   ```
   For more information, see [Moment.js](/write-code/reference/Built-in-JS-Libraries#moment).

## Side by side drilldown view
To create a drilldown view side by side with the Table, follow these steps:
1. Drag and drop a Container widget on to the canvas. The left section displays the Table widget, while the right section displays the detail view.
2. Add the required widgets to the Container like Text, List, or Image to display specific details.
3. Bind data to the widgets based on the selected row from the Table widget. For example, use the following code to bind the data to a Text widget where `txt_passenger_name` is the name of the Text widget:
   ```jsx
   {{tbl_passengersTable.selectedRow.txt_passenger_name}}
   ```
   Bind other widgets similarly to display the complete details of the selected passenger.
4. Disable the Visible property of the Container in the property pane.
5. Set the **onRowSelected** event of the Table widget to show the container using the following code where passenger_details_container is the name of the container:
   
   ```jsx
   {{passenger_details_container.setVisibility(true)}}
   ```

## Drilldown view from List
To create a data drilldown view using a List widget, follow these steps:
1. Set the **Items** property of the List widget under **Data**, using the following code where `fetch_passengers` is the fetch query:
   ```jsx
   {{fetch_passengers.data}}
   ```
2. Drop a Button widget on the List and set it's **onClick** event to trigger the Modal display.
3. In the Modal, bind data to the widgets corresponding to the triggered item from the List widget. 
   For example, to bind data to a Text widget in the Modal, use the following code where `lst_passengers` is the name of the List widget:
   ```jsx
   {{lst_passengers.triggeredItem.name}}
   ```
## See also
- [Update Form data in Modal](/build-apps/how-to-guides/submit-form-data)
- [Display and Lookup Data in Table Widget](/build-apps/how-to-guides/display-search-and-filter-table-data)
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data)