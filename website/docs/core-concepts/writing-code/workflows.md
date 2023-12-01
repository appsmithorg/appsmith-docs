---
description: >-
  Learn how to build effective workflows with Appsmith using multiple queries and execute them in the serial, parallel or conditional manner and programming widgets for smooth user interaction.

toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Trigger UI Workflow

This guide shows you how to initiate and manage UI workflows, which allows you to trigger multiple queries or JavaScript functions in response to user actions. They can be executed serially, in parallel, or conditionally to create complex, dynamic behaviors. 

## Execute actions in a specific order

There is an event listener associated with every widget that can be configured to perform various actions. To execute actions in a specific order, you can chain them using the action selector. You can create multiple **Events** and **OnSuccess** callbacks to trigger different actions in a series. 

1. In the event property, click the **+** icon and select the action you want to execute. For instance, set the Submit Button's **onClick** event to execute a update query.

2. Set the **onSuccess** callback to perform additional actions upon successful completion of the specified action. For instance, you can use the **onSuccess** callback to execute a fetch query or to close the Modal.

3. To set up multiple **onSuccess** callbacks, click the **+** icon within the callback configuration, and select the desired actions.



<dd>

Additionally, you can enable *JS* next to events and add your code, like:

*Example:* 

```js
{{update_query.run().then(() => {
  fetch_query.run();
  closeModal('Modal1');
});}}
```
</dd>

Learn more about [Global Functions](/reference/appsmith-framework/widget-actions).


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/aP6NLTwiJTsGCmhDhnQM?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>




<p></p>




## Execute actions in parallel 

To execute actions in parallel, you can add multiple action selectors for a specific event. 

1. In the event property, click the **+** icon and select the action you want to execute. For instance, set the Submit Button's **onClick** event to execute a status change query.

2. Create a new **onClick** event by clicking the **+** icon and set it to execute another action. For instance, set it to run a query that logs the status change.

<dd>

Additionally, you can enable *JS* next to events and add your code, like:

*Example:* 

```js
{{update_status.run();
log_status.run();
showAlert('Update Success', 'success');}}
```

</dd>



You can create multiple **Events** and **OnSuccess** callbacks to trigger different actions in parallel. 


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/TwqJvpTW4EMHkHIM1GnZ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

<p></p>







## Execute actions conditionally


This section covers conditional query execution, allowing queries to be executed based on user input or based on the results of previous queries. You can enable *JS* next to the event and add your code. 


#### Based on user input

*Example:* If you want to conditionally queries execute based on the option selected in the Select widget.

```javascript
{{
  Select_Category.selectedOptionValue === 'Categories' ? fetchCategories.run() : fetchProducts.run();
}}
```

In the above code, if the selected option is Categories, it triggers the `fetchCategories` query; otherwise, it runs the `fetchProducts` query.

#### Based on query response

If you want to execute a action based on the response from another query, you can enable *JS* and add your JS Code.  Alternatively, you can create a JSObject and define a JavaScript function for the desired logic.


1. Create a JSObject and define a function to execute custom JavaScript logic.

<dd>

 *Example:* When the user selects Pending from the status dropdown, the system triggers a `fetchPendingUsers`'query. Subsequently, it displays a relevant alert based on whether there are pending users or not. 

```javascript
function fetchData() {
  if (statusDropdown.selectedOptionValue === "Pending") {
    fetchPendingUsers.run(() => {
      if (fetchPendingUsers.data.length === 0) {
        showAlert("No Users Pending Approval", "info");
      } else {
        showAlert("Fetched Users", "success");
      }
    });
  } else {
    fetchApprovedUsers.run();
  }
}
```

</dd>

2. In the event property, enable JS and call the JS function, like:

<dd>

```js
{{JSObject1.fetchData();}}
```

</dd>

#### Disable action

To disable an action based on specific criteria, you can use *JS* in the **Disabled** property of the widget.

<dd>

*Example*: If specific criteria are not met, you want to disable the Refund button on the customer dashboard. Enable *JS* for **Disabled** property, and add:


```js
{{
  lst_orderHistory.triggeredItem.payment_method === 'Cash On Delivery' ||
  lst_orderHistory.triggeredItem.delivery_status === "Canceled" ||
  lst_orderHistory.triggeredItem.refund >= lst_orderHistory.triggeredItem.amount
}}
```

This code determines whether to disable the Refund button on the customer dashboard based on conditions related to payment method, delivery status, and refund amount.

</dd>



See [how to pass parameters at runtime](/connect-data/concepts/dynamic-queries#passing-parameters-at-runtime-using-run).