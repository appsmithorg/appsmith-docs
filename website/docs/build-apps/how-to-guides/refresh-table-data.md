---
description: When you connect a table to a datasource to display data and then update that datasource, the table does not automatically reflect the changes. You need to manually refresh the table using events or JS code to see the updated data.
---
# Refresh Table Data After Updates

This page shows you how to refresh table data after updates which allows you to see changes in real time.

When you connect a table to a datasource to display data and then update that datasource, the table does not automatically reflect the changes. You need to manually refresh the table using events or JS code to see the updated data.


 <figure>
  <img src="/img/refresh-after-update.gif" style= {{width:"810px", height:"auto"}} alt="Refresh Table Data After Updates"/>
  <figcaption align = "center"><i>Refresh Table Data After Updates</i></figcaption>
</figure>


*Example:* suppose you have a Table that receives its data from a query called `getData`, and you have a Button that submits a Form with new user input through a query called `updateData`.


1. To update data, set the Button's **onClick** to execute the `updateData` query. When JS is enabled, you can configure as follows:
 
```js
{{updateData.run()}}
```

2. To refresh table data, set the **onSuccess** callback to execute the `getData` query. When JS is enabled, you can configure as follows:


```js
 {{updateData.run().then(() => {
   getData.run();
 });}}
```


The above code executes the `updateData` query and, once completed, triggers the execution of the `getData` query. This process updates and fetches data to show real-time changes.
