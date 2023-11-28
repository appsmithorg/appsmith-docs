---
description: Create a detailed view using a Table or a List.
---

# Create Data Drilldown View

This page shows you how to build a data drilldown view from a master dataset on a Table or a List widget.

## Prerequisites
- A datasource containing the data to display. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).

## Using Table

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/AqosoSi5wWcGUFbm2agY?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a data drilldown view using a Table widget, follow these steps:
1. Set the **Table data** property of the Table widget in the property pane to bind data using the following code:
   ```jsx
   {{fetch_passengers.data}}
   ```
2. Drop a Modal widget with a Form or a JSON Form widget, and add the required widgets to display specific details.
3. Add a new column to the Table widget and set its **Column Type** to **Button**.
   Set the **onClick** event of the button to trigger the Modal display.
4. In the Modal, bind data to the widgets corresponding to the triggered row from the Table widget. For example, to bind data to a Text widget, use the following code where `passengersTable` is the name of the Table widget, and `passenger_name` is the column:
   ```jsx
   {{passengersTable.triggeredRow.passenger_name}}
   ```
   You can format the data and display in the drilldown. For example, to format dates, use the following code:
   ```jsx
   {{moment(passengersTable.triggeredRow.dob).format('MMMM Do YYYY, h:mm:ss a')}}
   ```
   For more information, see [Moment.js](/write-code/reference/Built-in-JS-Libraries#moment).

## Using List

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/5UOKQWRLE3Uj1kwxoFhy?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a data drilldown view using a List widget, follow these steps:
1. Set the **Items** property of the List widget under **Data**, using the following code where `fetch_passengers` is the fetch query:
   ```jsx
   {{fetch_passengers.data}}
   ```
2. Drop a Container widget to the right of the List and add the required widgets to the Container to display details.
3. Bind data to the widgets in the Container based on the selected list item. For example, to bind data to a Text widget in the Container, use the following code where `passengers_list` is the name of the List widget:
   ```jsx
   {{passengers_list.selectedItem.name}}
   ```
## See also
- [Update Form data in Modal](/build-apps/how-to-guides/submit-form-data)
- [Display and Lookup Data in Table Widget](/build-apps/how-to-guides/display-search-and-filter-table-data)
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data)