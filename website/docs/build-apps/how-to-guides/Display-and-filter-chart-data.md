
# Display and Filter Chart Data

This page shows you how to use the Datepicker widget to filter and view Chart data based on specific date ranges.



## Prerequisites
* A [Chart](/reference/widgets/chart) widget to display data.
* Two [Datepicker](/reference/widgets/datepicker) widgets for selecting a date range.

## Configure query

Follow these steps to filter data within the designated time frame:

Create a query to fetch data from the datasource by using the reference properties of the Datepicker widget.

<dd>

*Example*: 

For SQL:

```
```

For API:

```url
https://yourproduct.api.com/2/searches?index=index&startDate={{date_from.formattedDate}}&endDate={{date_to.formattedDate}}
```

To configure queries for specific datasources, please refer to the [datasource reference](/connect-data/reference).

</dd>




## Configure Chart widget

Follow these steps to configure the Chart widget to display fetched data, and implement filtering:

1. Select a **Chart type** that suits your use case. 

2. Connect the filter query to the **Series data** property of the Chart widget, like:

<dd>


```js
{{fetchUserData.data.map( p => ({x: p.gender, y: p.count}))}}
```

</dd>

3. For both Datepickers, configure the **onDateSelected** event to execute the filter query.

Whenever a user selects dates from `Datepicker1` or `Datepicker2`, the Chart data automatically updates to reflect the data from the selected date range.



  <figure>
  <img src="/img/bar-voter.png" style= {{width:"600px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
  </figure>  
