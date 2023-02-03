---
description: >-
  Learn how to build effective workflows with Appsmith using multiple queries and execute them in the serial, parallel or conditional manner and programming widgets for smooth user interaction.

toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Creating Workflows

Appsmith helps you create dynamic and responsive web applications. You can design user interfaces, write code to add, update, delete, and retrieve data, and define actions on event triggers. You use Javascript functions, APIs, or Queries to build different workflows.

## Updating widgets programmatically

When working with [widgets](/reference/widgets) in Appsmith, you may need to update values in the widget properties dynamically.

Appsmith follows the **reactive programming paradigm**. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data with each other. When a value is updated, any widgets that depend on that changed value also update automatically.

**Examples**

Suppose you have two Input widgets named `Input1` and `Input 2`. 

This example shows how to update `Input2` with the value entered in `Input1`. Paste the following code in the `Default Value` property of Input2.

```javascript
{{Input1.text}}
```

Enter a value in `Input1` and see how the value updates in `Input2`.

---
Suppose you have two input widgets and one button widget named `Input1`, `Input2`, and `Button1`, respectively. This example shows how to update `Input2` with the value in `Input1` on the button click. Here, the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function is used.

Paste the following code in the `onClick` event of `Button1`. 

```javascript
{{storeValue('inputData',Input1.text)}}
```

Paste the following code in the `Default Value` property of Input2.
```javascript
{{appsmith.store.inputData}}
```

Enter a value in `Input1`. On button click, the value updates in `Input2`.


## Displaying data from asynchronous JS functions

Widgets have fields/properties where you can bind data or trigger actions.

**Sync fields** are properties that expect input or data. 

![Input widget - Sync Fields](</img/Writing_Code__Creating_Workflows__Sync_Fields__Input_Widget.png>)

For example, for an Input widget, properties such as `Default Value`, `Max Characters`, `Regex`, and `Error Message` expect input and are sync fields.

**Async fields** are properties that can trigger an action or perform an operation.

![Input Widget -Async Fields](</img/Writing_Code__Creating_Workflows__Async_Fields__Input_Widget.png>)

For example, the properties like `OnTextChanged` and `OnSubmit` of an input widget are async fields. You can use these properties to execute an [action](/reference/appsmith-framework/widget-actions), [Query](/core-concepts/data-access-and-binding/querying-a-database#running-a-query) or a function within a [JS object](/core-concepts/writing-code/javascript-editor-beta).

To display the response from an asynchronous JS function in a synchronous field, you need to retrieve it using the  `.data` property.

**Example**

Consider the following function `filteredList` defined in a JS Object `getFilteredUsers`

```javascript
export default {
  filteredList: async () => {
  const listUser = await getAllUsers.run();
    return listUser.map((user) => {
      return {
        "firstname" : user.name,
        "email" : user.email
      }
    })    
  }
}
```

The response of the preceding asynchronous function is bound to the `Table Data` property of the Table widget, as shown below:

```javascript
{{getFilteredUsersList.filteredList.data}}
```

 <VideoEmbed host="youtube" videoId="yn_8gs5w04g" title="Using data from Async function in Synchronous Field" caption="Using data from async function in sync Field"/> 


## Trigger actions when events occur
[Actions](/reference/appsmith-framework/widget-actions) in Appsmith are built-in functions that provide a way to perform specific operations in response to user interactions or other events in your application. 

You can trigger actions by binding them to Events(Async fields). For example, if you want to show a success message on button click, you can bind the [showAlert()](/reference/appsmith-framework/widget-actions/show-alert) method on the `onClick` event.

<VideoEmbed host="youtube" videoId="tjJIDkoCyQE" title="Global Functions" caption="Executing actions when event occurs"/> 

## Handle query success or error

The property pane provides a way to configure an action to be performed when a query returns with a success or an error post execution. The HTTP status code or the query response status can help determine the success or error message returned by the query.

For example, you can display success messages when the query has executed successfully or error messages when there are issues with the execution using the `showAlert()` action.

<VideoEmbed host="youtube" videoId="4aEMFU1r1yg" title="Handling query success or error" caption="Handling query success or error"/>

You can also write JavaScript code by enabling the `JS` toggle next to the event listener and add the code you wish to trigger on success or generated, as shown below:

```javascript
{{<API_QUERY_NAME>.run(() => showAlert(<SUCCESS_MESSAGE>, ‘success’), () => showAlert(<ERROR_MESSAGE>, ‘error’))}}
```


## Complex workflows

The Appsmith GUI is limited to a single `onSuccess` or `onError` callback, while the underlying framework has no limitation. To write complex workflows, you can enable JavaScript by clicking the `JS` toggle next to the event listener. You can perform operations such as chaining multiple queries and executing them in a specific order or conditionally executing a query based on the result of another query. 

:::tip
Once you have configured actions using the GUI, you can click the `JS` icon next to the event to view the JavaScript equivalent of your configuration and then modify the code per your requirement.
:::

<VideoEmbed host="youtube" videoId="rlk5c0HWW5o" title="Write code using JS toggle" caption="Write code using JS toggle"/>

:::info 
Each `Query` object has a [run()](https://docs.appsmith.com/reference/appsmith-framework/query-object#run) method used to execute the query. 
:::

### Conditional execution
You can chain queries to execute conditionally based on the value of a widget or the response from another query or a JS function. 

**Examples**

This example shows how the queries execute conditionally based on the option chosen in the Select widget and displays the results from the corresponding query in the tables.

```javascript
{{
  Query_Selector.selectedOptionValue === 'Movies' ? fetch_movies.run() : fetch_users.run();
}}

```
![](</img/conditional_query.gif>)


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

### Parallel execution

The run() method is asynchronous, and you can execute multiple queries in parallel. To execute multiple queries, you have to separate the run() method in the buttons onClick handler with a semicolon(;). 

**Example**

```javascript
{{ Query1.run(); Query2.run(); Query3.run(); }}
```

 <VideoEmbed host="youtube" videoId="flCSSNTwWc4" title="Running Multiple Queries" caption="Running Multiple Queries"/>  


### Serial execution
Serial execution means that the queries are executed one after the other in a specific order. This can be useful when the results of one query depend on the results of another.

**Examples**

This example shows how to execute `query1`, then `query2` and finally `query3`.

```javascript
{{
  query1.run()
    .then(() => query2.run())
    .then(() => query3.run());
}}
```

This example shows how to chain queries and actions to execute one after the other, and other actions, such as showing messages and closing modals, are executed using callbacks.

```javascript
{{ 
    updateUsers.run()
      .then(() => fetchUsers.run()
                  .then(() => { 
                      showAlert('User Updated'); 
                      closeModal('Modal1'); 
                    })
        .catch(() => showAlert("Fetch Users Failed"))
      ).catch(() => showAlert("Update User Failed", "error")) 
}}
```

## Further reading
* [Appsmith Framework](/reference/appsmith-framework/)
* [Import External Libraries](/core-concepts/writing-code/ext-libraries) 

