---
description: This page shows you how to display select options dynamically.
---

# Display Dropdown Options on Select
This page shows you how to generate dropdown options dynamically in the Select and MultiSelect widgets.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/9ah0AGhFrfeLJeUOttuI?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


## Prerequisites
- A connected datasource with a query to fetch data.
- Ensure all the relevant tables from which data is to be fetched are properly related or joined to support data consistency and integrity.


## Bind data
You can display data in a Select widget in the following ways:
- One-click binding
- Mustache binding

### One-click binding
One-click binding is Appsmith's way of simplifying the process of binding data. It doesn't require manual entry of mustache syntax and can be done by selecting options from a widget's property pane. When you want to bind a specific data property directly to a widget property without manipulation or additional logic, one-click binding is a quick and error-free method.
To bind and display data on the Select widget using one-click binding, follow these steps:
1. Drop a Select widget.
2. In the **Source Data** property of the widget, select the connected datasource. You can also select an existing query if you already have one to retrieve data.
3. In **Select table from [your connected datasource]**, select a table. The specific data source options may vary depending on your configured datasource.
4. Select a **Label** and a **Value**.
5. Click **Connect data** in the widget's property pane. The Select widget displays the selected data.

### Mustache binding
Mustache binding is useful when the data returned from your datasource or API is not an array, and you must map it to the desired format. 
To bind and display data on the Select widget using mustache binding, follow these steps:
1. Drag and drop a Select widget.
2. Create a new query to fetch data from the datasource.
   This topic uses the example of a PostgreSQL datasource to fetch data.

   Example:
   ```sql
   SELECT DISTINCT role FROM "access_details" LIMIT 10;
   ```
3. Click **JS** in the widget's property pane.
4. Paste the following code to display the data in the widget where `query` is the name of the query to fetch data:
   
   ```jsx
   {{query.data}}
   ```
## Display options dynamically
To display dropdown options dynamically based on the selection in another Select widget, follow these steps:
1. Drop a Select widget.
2. Add a query to populate the widget based on the selected option of the Select widget (or the parent widget) in the [Bind data](#bind-data) step.

   Example:
   ```sql
   SELECT permissions FROM access_details WHERE role = {{ Select1.selectedOptionValue }};
   ```
3. To dynamically populate the widget, set the **onOptionChange** property of the parent widget to run the query every time the selection changes.
To create cascading dropdowns, repeat these steps for each level of dependent Select widgets.

You can also use API responses as the source data for dynamic options, allowing for live updates from external systems. To do this, configure the **onOptionChange** or **onOptionSelected** action for the Select widget to trigger other widgets' updates by making a second API call to fetch related data. 
