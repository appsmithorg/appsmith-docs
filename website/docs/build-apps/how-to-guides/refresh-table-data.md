---
description: When you connect a table to a datasource to display data and then update that datasource, the table does not automatically reflect the changes. You need to manually refresh the table using events or JS code to see the updated data.
---
# Refresh Table Data After Updates

This page shows you how to refresh table data after updates which allows you to see changes in real time.

When data is updated in a datasource, the Table widget does not automatically reflect the changes. You need to manually refresh the Table using events or JS code to see the updated data.

<ZoomImage
  src="/img/refresh-after-update.gif" 
  alt="Refresh Table Data After Updates"
  caption="Refresh Table Data After Updates"
/>

*Example:* if you have a Table that receives its data from a query called `getData`, and you have a Button that submits a Form with new user input through a query called `updateData`.


1. To update data, set the Button's **onClick** event to execute the `updateData` query. 
 

2. To refresh Table data, set the **onSuccess** callback to execute the `getData` query. 

This executes the `updateData` query and, once completed, triggers the execution of the `getData` query. This process updates and fetches data to show real-time changes. A similar process can be applied to other widgets, such as List.
