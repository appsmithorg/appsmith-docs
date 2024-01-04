# Fetch Real-Time Data using Polling

Polling is a communication technique used to retrieve real-time data by periodically checking for updates. This page shows you how to establish a real-time data polling mechanism for your applications.


  <figure>
  <img src="/img/polling-1.gif" style= {{width:"750px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i>Real-Time Data using Polling</i></figcaption>
  </figure>  



1. Configure the fetch query and connect it with a Table widget to display the data.

<dd>

*Example:* To display real-time delivery status updates from a query, add the following code into the **Table data** property.

```js
{{delivery_data.data}}
```
</dd>

2. Drop a Switch widget to enable the toggling of updates at regular intervals.


3. Enable JS for the **onChange** event of the Switch and use the [setInterval()](/reference/appsmith-framework/widget-actions/intervals-time-events) function  to implement polling:

<dd>

*Example:* When the switch is turned on, the query is executed every 5 seconds. If the switch is turned off, use the [clearInterval()](/reference/appsmith-framework/widget-actions/clear-interval) function to stop the polling process:


```js
{{
(() => {
    if (Switch1.isSwitchedOn) {
        setInterval(() => delivery_data.run(), 5000, "autorefresh");
    } else {
        clearInterval("autorefresh");
    }
})()
}}
```

Alternatively, you can add the following code in the JSObject and execute it on page load.


</dd>









