---
description: >-
  Learn how to build effective workflows with Appsmith using multiple queries and execute them in the serial, parallel or conditional manner and programming widgets for smooth user interaction.

toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Trigger UI Workflow

This guide shows you how to initiate and manage UI workflows, allowing you to execute multiple queries and functions for enhanced application functionality.

The Appsmith GUI is limited to a single `onSuccess` or `onError` callback, while the underlying framework has no limitation. To write complex workflows, you can enable JavaScript by clicking the `JS` toggle next to the event listener. You can perform operations such as chaining multiple queries and executing them in a specific order or conditionally executing a query based on the result of another query. 

**Every query object has a [run()](/reference/appsmith-framework/query-object#run) method used to execute the query.**

:::tip
Once you have configured actions using the GUI, you can click the `JS` icon next to the event to view the JavaScript equivalent of your configuration and then modify the code per your requirement.
:::

## Execute actions in a specific order

This section shows how to use action selector for executing multiple actions in a specific order. 

<dd>

*Example:*  if you want to display a confirmation popup when the submit button of a Form is clicked. Within this popup, you want to include certain widgets like text or checkboxes. Once the user confirms the popup, your objective is to execute an update query, followed by a fetch query.

1. Set the Submit Button's **onClick** event to open a Modal. Inside the modal, add relevant widgets such as text or checkbox.

2. Set the Modal's Submit Button's **onClick** event to execute the update query.

3. Set the **onSuccess** callback to trigger the fetch query, which retrieves the updated data and displays it in the Table.


 

</dd>

## Execute actions together

## Execute actions conditionally


You can chain queries to execute conditionally based on the value of a widget or the response from another query or a JS function. 

**Example**

This example shows how the queries execute conditionally based on the option chosen in the Select widget.

```javascript
{{
  Query_Selector.selectedOptionValue === 'Movies' ? fetch_movies.run() : fetch_users.run();
}}

```

This example shows multiple conditional statements that execute queries based on the option chosen in the select widget and also display relevant messages based on the response from the `fetchPendingUsers` query.

```javascript
{{ 
  statusDropdown.selectedOptionValue === "Pending" ?
      fetchPendingUsers.run(() => {
          fetchPendingUsers.data.length === 0 
         ? showAlert("No Users Pending Approval", "info") 
          : showAlert("Fetched Users", "success");
      }) 
      : fetchApprovedUsers.run();
}}
```
