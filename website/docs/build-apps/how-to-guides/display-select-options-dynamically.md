---
description: This page shows you how to display select options dynamically.
---

# Display and Filter Dropdown Options
This page shows you how to display and filter dropdown options dynamically in the Select widget.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/ry8kxZMjIlny0zsremhE?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites
- A connected datasource with a query to fetch data.
- Ensure you have configured the table relations.

## Display options
To bind and display data on the Select widget, follow these steps:
1. Drop a Select widget.
2. Create a new query to fetch data from the datasource.
   This topic uses the example of a PostgreSQL datasource to fetch data.

   Example:
   ```sql
   SELECT DISTINCT country FROM users LIMIT 10;
   ```
3. Click **JS** in the widget's property pane.
4. Paste the following code to bind the data in the widget where `query` is the name of the query to fetch data:
   
   ```jsx
   {{query.data}}
   ```
5. Set the **Label key** and the **Value key** to display data accordingly.
## Display options dynamically 
If you have two Select widgets, `Select1` and `Select2` and want to populate `Select2` based on the selected value from `Select1`, follow these steps:
1. Add a query to populate the widget based on the selected option of the `Select1` widget.

   Example:
   ```sql
   SELECT DISTINCT name FROM users WHERE country = {{ country.selectedOptionValue }};
   ```
2. To dynamically populate the `Select2` widget, set the **onOptionChange** property of the `Select1` widget to run the query every time the selection changes.
To create cascading dropdowns, repeat these steps for each level of dependent Select widgets.

You can also use API responses as the source data for dynamic options, allowing for live updates from external systems. To do this, configure the **onOptionChange** or **onOptionSelected** action for the Select widget to trigger other widgets' updates by making a second API call to fetch related data.

## Set up server-side filter on select
<figure>
  <img src="/img/select-filter.gif" style= {{width:"700px", height:"auto"}} alt="Server-side Filtering on Select"/>
  <figcaption align = "center"><i>Server-side Filtering on Select</i></figcaption>
</figure>

If you use the one-click binding feature to connect data, Appsmith automatically generates server-side filtering query for you. To manually configure the server-side setup, follow these steps:
1. Enable the [Server-side filtering](/reference/widgets/select#server-side-filtering-boolean) property of the Select widget. 
2. Update the query in the [Display options](#display-options) step to filter the Select options based on the [filterText] property.
   
   Example:
   ```sql
   SELECT DISTINCT country FROM users 
   WHERE country LIKE '%{{Select1.filterText}}%'
   ORDER BY id LIMIT 10;
   ```
   :::note
   Ensure that you turn off prepared statements in the query editor for this configuration. For more details, see [Prepared statements](/connect-data/concepts/how-to-use-prepared-statements).
   :::
3. Set the Select widget's [onFilterUpdate](/reference/widgets/select#onfilterupdate) event to run the above query.
