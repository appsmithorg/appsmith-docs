# Chain Functions and Promises

The Appsmith GUI is limited to a single `onSuccess` or `onError` callback, while the underlying framework has no limitation. To write complex workflows, you can enable JavaScript by clicking the `JS` toggle next to the event listener. You can perform operations such as chaining multiple queries and executing them in a specific order or conditionally executing a query based on the result of another query. 

**Every query object has a [run()](/reference/appsmith-framework/query-object#run) method used to execute the query.**

:::tip
Once you have configured actions using the GUI, you can click the `JS` icon next to the event to view the JavaScript equivalent of your configuration and then modify the code per your requirement.
:::

### Conditional execution
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