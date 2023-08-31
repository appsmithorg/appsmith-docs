---
description: This page shows you how to set up server-side pagination on a Table widget, which allows you to manage and display large datasets within your application.
---
# Refresh Table Data After Updates

When you connect a table to a datasource to display data and then update that datasource, the table does not automatically reflect the changes. You need to manually refresh the table using events or JS code to see the updated data.

 <figure>
  <img src="/img/refresh-after-update.gif" style= {{width:"810px", height:"auto"}} alt="Filter Table Data Using Datepicker"/>
  <figcaption align = "center"><i>Filter Table Data Using Datepicker</i></figcaption>
</figure>

## Prerequisites

A [Table](/reference/widgets/table) widget connected to a query to display data.


## Update query

Follow these steps to refresh Table data after updates:

Drop a Button widget, and set its onClick event to run the update query, and the onSuccess callback to trigger the fetch query that refreshes the table data with the updated information.


<dd>

*Example:*  suppose you have a table that receives its data from a query called `getData`, and you have a JSON form with a **onSubmit** button that updates user input via the query `updateData`.

Set the **onSubmit** event to perform data updates and set the **onSuccess** callback to execute the `getData` query. When JS is enabled, you can configure as follows:


```js
 {{updateData.run().then(() => {
   getData.run();
 });}}
```


The above code executes the `updateData` query and, once completed, triggers the execution of the `getData` query. This process updates and fetches data to show real-time changes.

</dd>