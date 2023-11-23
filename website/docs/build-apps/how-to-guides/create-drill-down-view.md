---
description: Create a detailed view using a modal or a new page.
---

# Create Data Drill Down

This page shows you how to build a data drill down view when selecting a row from a Table widget. This topic illustrates the steps using an example of an airline support application to view passenger details.

## Prerequisites
- A datasource containing the data to display. See [Connect datasource](/getting-started/tutorials/the-basics/connect-query-display-data#connect-datasource) for a tutorial. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).
- A query to fetch data from the datasource.


## Set up Table widget

1. Drag and drop a [Table](/reference/widgets/table) widget and rename it to `passengersTable`.
2. Create a query to fetch passenger data from the configured datasource and rename it to `fetch_passengers`. This topic uses the example of a PostgreSQL datasource to fetch data.
   ```sql
   SELECT * FROM passenger_details
   ```
3. Bind the data to the Table widget using the following code:
   ```jsx
    {{ fetch_passengers.data }}
   ```  
## Create drill down view
You can use one of the following for the data drill down view:
- [Modal](/reference/widgets/modal) for an overlay view.
- New page for a more detailed view.

### Modal
To create a drill down view using a Modal widget, follow these steps:
1. Drag and drop a Modal widget and rename it `passenger_details_modal`.
2. Design the modal to include widgets like [Text](/reference/widgets/text), [List](/reference/widgets/list), or [Image](/reference/widgets/image) to display specific passenger details.

### New page
To create a drill down view using a new page, follow these steps:
1. Create a new page named `passenger_details_page`.
2. Add necessary widgets to this page to display passenger details.

## Configure row selection event to open modal

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/MIAKJVU4zzVN2UL8UKMA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Set the `onRowSelected` event of the Table widget in the property pane to open the Modal using the following code:
   ```jsx
   {{showModal("passenger_details_modal")}}
   ```
2. In `passenger_details_modal`, bind widgets to the data corresponding to the selected row from the Table widget. For example, to bind the passenger name to a Text widget named `Passenger name`, use the following code:
   ```jsx
   {{passengersTable.selectedRow.passenger_name}}
   ```
   Bind other widgets similarly to display the complete details of the selected passenger.
3. Select a table row to test if the modal correctly displays detailed information.

## Configure row selection event to open page

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/TBgcMroQy5b8eDC1PGSJ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Set the `onRowSelected` event of the Table widget in the property pane to open the new page using the following code:
   ```jsx
   {{navigateTo("passenger_details_page",passengersTable.selectedRow)}}
   ```
   `passengersTable.selectedRow` is the object corresponding to the data of the selected row.
2. To access the data in the target page and populate passenger details, use the following code:
   ```jsx
   {{appsmith.URL.queryParams.params}}
   ```
   For example, to bind the passenger name to a Text widget, use the following code in the Text property:
   ```jsx
   {{appsmith.URL.queryParams.passenger_name}}
   ```
## See also
- [Sample apps for Modal](/learning-and-resources/sample-apps?current-sample-app-type=widgets#modal)
- [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)