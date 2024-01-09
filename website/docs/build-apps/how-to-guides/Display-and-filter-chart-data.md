---
description: This page shows you how to use the Datepicker widget to filter and view Chart data based on specific date ranges.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Plot Chart With Filters

Appsmith offers various types of charts that can help you visualize your data. Charts make it easier to understand data trends and distributions at a glance. This guide shows you how to display and filter built-in charts data.

## Prerequisites
A query that contains the data you want to filter.

## Display data in Chart

To display data from a query using the Chart widget, follow these steps:

1. Select a **Chart type** that suits your use case. 

2. Connect the query to the **Series data** property of the Chart widget, like:

<dd>

If the query data is not in the [expected format](/reference/widgets/chart#series-data-arrayobject), you can use the `map()` function to transform it before passing it to the widget, like:

```js
{{fetchData.data.map( p => ({x: p.gender, y: p.count}))}}
```

Use aggregate queries for better insights, like SQL for databases. In Google Sheets, do aggregations on the client side as it may not support server-side aggregation. 


</dd>


3. Use the **Add Series** property to populate the chart with different sets of data.

<ZoomImage
  src="/img/bar-voter.png" 
  alt="Bar voter"
  caption="Display data"
/> 

Learn more about the [Chart widget](/reference/widgets/chart).

## Filter Chart data 

To filter information based on specific criteria, use widgets like the Datepicker or Select widget for data filtering.

1. Drop a widget *(e.g., Select or Datepicker)*, and configure its properties to display relevant information. 
  

2. Configure the same fetch query using the reference property of the widgets, such as the `selectedOptionValue` for a Select widget:

<dd>

   *Select Example*: 
   
  ```sql
   SELECT pl.stock, l.label
   FROM product_location pl
   WHERE pl.product_variant_id = {{Select_product.selectedOptionValue ? Select_product.selectedOptionValue : 147}};
  ```
  The SQL query fetches product information from the `product_location` table, filtered by a specified product ID. The ID is determined dynamically based on the selected option in Select widget, defaulting to `147` if not provided.

   *DatePicker Example*: 

   ```sql
   SELECT keyword, search_count, search_date
   FROM search_product
   WHERE search_date > {{DatePicker1.formattedDate}} AND search_date < {{DatePicker2.formattedDate}}
   ORDER BY search_count DESC;
   ```

   The above query retrieves search counts for specific keywords on a website, filtered by a date range defined by two Datepicker widgets. If a specific date format is required, you can use the `selectedDate` reference property. 
  
  To configure and filter queries for specific datasources, please refer to the [datasource](/connect-data/reference).

</dd>

 3. Connect the query to the **Series data** property of the Chart widget, using `map()` function:

   ```js
   {{getProductWarehouse.data.map( p => ({x: p.label, y: p.stock}))}}
   ```
   
  You can also use a JSObject to create a custom function for displaying data in the Chart.
  
  4. Set the widget's **onOptionChange** or **onDateSelected** event to execute the filter query.


