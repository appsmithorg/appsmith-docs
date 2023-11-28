---
description: This page shows you how to use the Datepicker widget to filter and view Chart data based on specific date ranges.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Plot Chart with Filters

This page shows you how to display and filter data in Chart widget, using the Select and Datepicker widgets.


## Prerequisites
* A [Chart](/reference/widgets/chart) widget to display data.
* A query that contains the data you want to filter.
* [Select](/reference/widgets/select) or [Datepicker](/reference/widgets/datepicker) widget to filter the data.

## Display data in Chart

To display data from a query using the Chart widget, follow these steps:

1. Select a **Chart type** that suits your use case. 

2. Connect the query to the [**Series data**](/reference/widgets/chart#series-data-arrayobject) property of the Chart widget, like:

<dd>

```js
{{fetchData.data}}
```

If the query data is not in the expected format, you can use the `map()` function to transform it before passing it to the widget, like:

```js
{{fetchData.data.map( p => ({x: p.gender, y: p.count}))}}
```

Use the **Add Series** property to populate the chart with different sets of data.

  <figure>
  <img src="/img/bar-voter.png" style= {{width:"600px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
  </figure>  


</dd>




## Filter Chart data 

To filter information based on specific criteria, use widgets like the Datepicker or Select widget for data filtering.


<Tabs>
<TabItem value="select" label="Using Select" default>

 1. Drag a Select widget, and set the [**Source data**](/reference/widgets/select#source-data-arrayobject) property as required.

 2. Configure the query to fetch data using `selectedOptionValue` reference property.
   
   *Example*: You want to display products and their available stock in a Chart widget based on the selected category in a Select widget.
   
  ```sql
   SELECT pl.stock, v.low_stock, l.label
   FROM product_location pl
   WHERE pl.product_variant_id = {{Select_product.selectedOptionValue ? Select_product.selectedOptionValue : 147}};
  ```
  The SQL query selects stock, low stock threshold, and warehouse label from the `product_location` table, filtered by a specified product variant ID. The ID is determined dynamically based on the selected option in Select widget, defaulting to `147` if not provided.
  
  To configure and filter queries for specific datasources, please refer to the [datasource reference](/connect-data/reference).


 3. Connect the query to the **Series data** property of the Chart widget, using `map()` function:

   ```js
   {{getProductWarehouse.data.map( p => ({x: p.label, y: p.stock}))}}
   ```
   
  You can also use a [JSObject](/core-concepts/writing-code/javascript-editor-beta) to create a custom function for displaying data in the Chart.
  
  4. Set the Select widget's **onOptionChange** event to execute the filter query.


  <figure>
  <img src="/img/chart-select0.gif" style= {{width:"700px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
  </figure>  

   Whenever a user selects a category from the Select widget, the chart dynamically displays the associated products and their available stock. 

</TabItem>
 
<TabItem value="date" label="Using Datepicker">

This section shows you how to use the Datepicker widget to filter and view Chart data based on specific date ranges.

 1. Drag two Datepicker widgets to choose a range of dates.

 2. Configure the query to fetch data using the [reference properties](/reference/widgets/datepicker#reference-properties) of the Datepicker widget.

   *Example*: You want to filter the top searches for your website within a specific date range:

   ```sql
   SELECT keyword, search_count, search_date
   FROM search_product
   WHERE search_date > {{DatePicker1.formattedDate}} AND search_date < {{DatePicker2.formattedDate}}
   ORDER BY search_count DESC;
   ```
   If a specific date format is required, you can use `selectedDate` reference property. To configure and filter queries for specific datasources, please refer to the [datasource reference](/connect-data/reference).

<dd>
   For API:

   ```url
   https://yourproduct.api.com/2/searches?index=index&startDate={{DatePicker1.formattedDate}}&endDate={{DatePicker2.formattedDate}}
   ```
</dd>

   You can also use a [JSObject](/core-concepts/writing-code/javascript-editor-beta) to create a custom function for displaying data in the Chart.
  
 3. For both Datepickers, configure the **onDateSelected** event to execute the filter query.

  <figure>
  <img src="/img/date-chart.gif" style= {{width:"700px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
  </figure>  

Whenever a user selects dates from `Datepicker1` or `Datepicker2`, the Chart data automatically updates to reflect the data from the selected date range.


</TabItem>
</Tabs>






