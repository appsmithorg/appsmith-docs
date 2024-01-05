# Polling for data updates

Polling is a communication technique used to retrieve real-time data by periodically fetching the data. This page shows you how to establish a data polling mechanism for your applications.


<ZoomImage
  src="/img/polling-1.gif" 
  alt="Real-Time Data using Polling"
  caption="Real-Time Data using Polling"
/>

1. Configure the fetch query and connect it with a Table widget to display the data.

<dd>

*Example:* To display real-time delivery status updates from a query, add the following code into the **Table data** property.

```js
{{delivery_data.data}}
```
</dd>

2. Drop a Switch widget to enable the toggling of updates at regular intervals.

3. Create a new *JSObject* and configure the function using the [setInterval()](/reference/appsmith-framework/widget-actions/intervals-time-events) function  to implement polling:

<dd>

*Example:* When the switch is turned on, the query is executed every 5 seconds. If the switch is turned off, use the [clearInterval()](/reference/appsmith-framework/widget-actions/clear-interval) function to stop the polling process:

```js
export default {
    startAutoRefresh() {
        if (Switch1.isSwitchedOn) {
            setInterval(() => delivery_data.run(), 5000, "autorefresh");
        } else {
             clearInterval("autorefresh");
        }
    }
}
```

</dd>

3. Set the **onChange** event of the Switch widget to execute the JS function.












