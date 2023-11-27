---
description: Create a detailed view using a modal or a new page.
---

# Create Data Drill down View

This page shows you how to build a data drilldown view from a master dataset on a Table or a List widget.

## Prerequisites
- A datasource containing the data to display.
- A query to fetch data from the datasource.

## Create drill down view using list

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/d0YRgvug3zTUyniWTHKj?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a data drill down view using a List widget, follow these steps:
1. Drag and drop a List widget on to the canvas.
2. Set the **Items** of the widget under **Data** in the property pane, using the following code where `fetch_passengers` is the fetch query:
   ```jsx
   {{fetch_passengers.data}}
   ```
3. Drag and drop a Container widget on to the canvas and disable the widget's **Visible** property in the property pane.
4. Add the required widgets to the Container like Text, List, or Image to display specific passenger details.
5. Bind data to the widgets in the container based on the selected list item. For example, to bind the name of the passenger to the Text widget in the container, use the following code where `passengers_list` is the name of the List widget:
   ```jsx
   {{passengers_list.triggeredItem.name}}
	}
   ```
6. Set the onItemClick event of the List widget to show the container using the following code where `passenger_details` is the name of the Container widget:
   ```jsx
   {{passenger_details.setVisibility(true)}}
   ```
## Create drill down view using table

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/GLKZDBsFGuVbvA0zbuEJ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a data drill down view using a Table widget, follow these steps:
1. Drag and drop a Table widget on to the canvas.
2. Set the **Table data** property of the widget in the property pane to bind data using the following code:
   ```jsx
   {{fetch_passengers.data}}
   ```
3. Drag and drop a Modal widget on to the canvas and disable the **Visible** in the property pane.
4. Drag a Form or a JSON Form widget within the Modal, and add the required widgets like Text, List, or Image to display specific passenger details.
5. In the Table widget's property pane, add a new column to include a Button widget to view details.
6. Set the **onClick** event of the button to show the modal using the following code where `passenger_details_modal` is the name of the modal:
   ```jsx
   {{showModal("passenger_details_modal")}}
   ```
7. In the modal, bind data to the widgets corresponding to the selected row from the Table widget. For example, to bind the passenger name to a Text widget named `Passenger name`, use the following code:
   ```jsx
   {{passengersTable.triggeredRow.passenger_name}}
   ```
   Bind other widgets similarly to display the complete details of the selected passenger.

## Create side by side drill down view

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/SAN1VNJSGgm66LBj5hVX?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a drill down view side by side with the master list, follow these steps:
1. Drag and drop a Container widget on to the canvas. The left section displays the Table widget, while the right section displays the detail view.
2. Add the required widgets to the Container like Text, List, or Image to display specific passenger details.
3. Disable the **Visible** property of the Container in the property pane.
4. In the Table widget's property pane, add a new column to include a Button widget to view details.
5. Set the **onClick** event of the button to show the container using the following code where `passenger_details_container` is the name of the container:
   ```jsx
   {{passenger_details_container.setVisibility(true)}}
   ```
6. In the container, bind widgets to the data corresponding to the triggered row from the Table widget. For example, to bind the passenger name to a Text widget, use the following code:
   ```jsx
   {{passengersTable.triggeredRow.passenger_name}}
   ```
   Bind other widgets similarly to display the complete details of the selected passenger.
   To format dates in a specific format, use [Moment](https://momentjs.com/docs/). For example, to format the date of birth of a passenger use the followinf code:
   ```jsx
   {{moment(passengersTable.triggeredRow.dob).format('MMMM Do YYYY, h:mm:ss a')}}
   ```

## See also
- [Sample apps for Modal](/learning-and-resources/sample-apps?current-sample-app-type=widgets#modal)
- [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)
- [Update Form data in Modal](/build-apps/how-to-guides/submit-form-data)