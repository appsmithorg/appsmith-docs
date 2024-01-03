# Fetch Real-Time Data using Polling

Polling is a communication technique used in computing to retrieve real-time data by periodically checking for updates. 

This page shows you how to establish a real-time data polling mechanism for your applications.


  <figure>
  <img src="/img/polling-1.gif" style= {{width:"750px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i>Real-Time Data using Polling</i></figcaption>
  </figure>  



## Prerequisites

API or Datasource that supports real-time data retrieval and is compatible with polling mechanisms.

## Configuration

To configure and set up Polling connections, follow the steps:

1. Configure the query and connect it with a Table widget to display the data.

<dd>

*Example:* To display real-time delivery status updates from a query, add the following code into the **Table data** property.

```js
{{delivery_data.data}}
```
</dd>

2. Drop a Switch widget to enable toggling of auto-updates.

3. Enable JS for the **onChange** event of the Switch and use the [setInterval()](/reference/appsmith-framework/widget-actions/intervals-time-events) function to configure it like:

<dd>

```js
{{
(() => {
    if (Switch1.isSwitchedOn) {
        setInterval(() => delivery_data.run(), 2000, "autoupdate");
    } else {
        clearInterval("autoupdate");
    }
})()
}}
```

If the Switch is on, the query is executed every 2 seconds; otherwise, clear the update interval.

</dd>









