---
description: >-
  Learn how to build effective workflows with Appsmith using multiple queries and execute them in the serial, parallel or conditional manner and programming widgets for smooth user interaction.

toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Trigger UI Workflow

This guide shows you how to initiate and manage UI workflows, allowing you to execute multiple queries and functions for enhanced application functionality.

## Execute actions in a specific order

To execute actions in a specific order, you can chain them using action selector. You can create multiple **Events** and **OnSuccess** callbacks to trigger different actions in a series. Additionally, for more complex workflows, you can enable *JS* next to events.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/6P4Z76FkgQ5LNXW3Oa5n?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


<dd>

*Example:*  if you want to display a confirmation popup when the submit button of a Form is clicked. Once the user confirms the popup, you want to execute an update query, followed by a fetch query.

1. Set the Submit Button's **onClick** event to open a Modal. Inside the modal, add relevant widgets such as text or checkbox.

2. Set the Modal's Submit Button's **onClick** event to execute the update query.

3. Set the **onSuccess** callback to trigger the fetch query, which retrieves the updated data and displays it in the Table.

4. Create a new **onSuccess** callback by clicking the **+** icon and set it to close the Modal.

With this configuration, the action is executed only when a query or action is successful.


</dd>

## Execute actions together

To execute actions together, you can add multiple action selectors for a specific event. Additionally, for more complex workflows, you can enable *JS* next to events.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/weQmsVxt589vcXiLGTdc?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

<dd>

*Example:* You're working on a support app. Whenever you make changes to a user's ticket, it updates the database, and also sends them an email to let them know about the update.


1. Set the Button's **onClick** event to execute the update query, which updates the ticket database.

2. Create a new **onClick** event by clicking the **+** icon and set it to run the email query. 


With this configuration, all actions are executed at the same time, regardless of whether individual queries are successful or unsuccessful.


</dd>


## Execute actions conditionally


This section covers conditional query execution, allowing queries to be executed based on user input or based on the results of previous queries. You can enable *JS* next to the event and add your code. 

It is recommended to use JSObject when writing custom expressions to ensure proper handling of custom JavaScript logic.

#### Example 1: Based on user input

 You are working with an e-commerce app where users can filter products based on their preferences. You can conditionally execute queries to fetch products that match the selected category, price range, or brand. This example shows how the queries execute conditionally based on the option selected in the Select widget.

```javascript
{{
  Query_Selector.selectedOptionValue === 'Categories' ? fetchCategories.run() : fetchProducts.run();
}}
```

In the above code, if the selected option is Categories, it triggers the `fetchCategories` query; otherwise, it runs the `fetchProducts` query.

#### Example 2: Based on query response

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

## Passing parameters to actions




