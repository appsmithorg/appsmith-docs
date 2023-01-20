---
description: >-
  Multiple Queries can be triggered in serial/parallel/conditional when a user
  interacts with a widget

toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Creating Workflows

Appsmith lets you create dynamic and responsive web applications. It empowers developers to design user interfaces that adapt to user interactions on the fly and execute advanced operations like data retrieval, manipulation, and event triggering. Appsmith facilitates adding, configuring, and using widgets, queries, actions, JS Objects, and APIs. Additionally, it allows for more advanced functionalities such as parallel, serial, and conditional execution of queries.

## Programming widgets
Widgets are the building blocks of any Appsmith application. They're used to display information on the page and respond to user interactions. There are different types of [widgets](/reference/widgets) available in Appsmith.

When working with widgets in Appsmith, it's important to understand how the app updates itself in response to changes in data. To reflect these changes, Appsmith follows the reactive programming paradigm. This means that, instead of updating widget properties and states through direct variable assignment, widgets are connected and share data, so when one value is updated, any objects that depends on it also updates automatically.

For example, you have an [Input](/reference/widgets/input) widget where the user can enter text, and a [Button](/reference/widgets/button) widget with a label. You want to update the button's label based on the user's input. By using the reactive programming, the user types into the Input widget, and the label of the Button updates in real time to reflect the current user input. You can also check out the below video to understand how this works in a more visual way.

<VideoEmbed host="youtube" videoId="34G1sCaRnvI" title="How to set properties in widgets?" caption="How to set properties in widgets?" />

Consider another scenario, where you're building a dashboard for managing product inventory information, and you want to include an `Edit` mode for updating the values. In this scenario, you don't want to allow users to make changes when `Edit` mode is off. You only want to enable the changes after the user clicks the `Edit` button and save the changes after user clicks the 'Save' button. There are many Input widgets for handling the product data and two buttons for switching `Edit` mode on and off.

Using imperative programming style, you may think of disabling the input widgets when edit mode is off like this:

```javascript
Input1.disable()
// or,
Input1.enabled = false
```
But, this doesn't work in Appsmith as it uses a reactive programming paradigm. You need to create and store an indicator that represents whether `Edit` mode is enabled, and configure the widgets to behave according to that value. Appsmith provides the `storeValue()` function to make this possible. For more information, see [storeValue()](/reference/appsmith-framework/widget-actions/store-value).

```javascript
// in the Disabled field of the Input widgets' properties
{{!appsmith.store.editMode}}
// in the onClick event field of the Edit button's properties
{{storeValue('editMode', true)}}
// in the onClick event field of the Save button's properties
{{storeValue('editMode', false)}}
```
<VideoEmbed host="youtube" videoId="Nmf8ib2NzAQ" title="Controlling Widgets with code" caption="Controlling Widgets with code" />

With this configuration, the Input widgets' behavior is dynamically linked to the `editMode` state stored in the Appsmith store. As soon as this state is altered, the Input widgets are updated accordingly.

### Fields

Widgets provide fields that you can use to bind and display data or trigger an action. Based on this, the properties are categorized as either sync or async.

#### Sync fields

Sync fields are properties that expect input or data in the properties pane. These fields are updated immediately when the data changes.

![Input widget - Sync Fields](</img/Writing_Code__Creating_Workflows__Sync_Fields__Input_Widget.png>)

For example, when you add an Input widget to the canvas, properties such as `Max Characters`, `Regex`, `Error Message`, and others expect input and are considered as Sync Fields.

#### Async fields

Async fields are properties that can trigger an action or perform an operation. They're updated as soon as the data is received.

![Input Widget - Async Fields](</img/Writing_Code__Creating_Workflows__Async_Fields__Input_Widget.png>)

For example, the properties like `OnTextChanged` and `OnSubmit` of an input widget are considered async fields. You can use these properties to define an [action](/reference/appsmith-framework/widget-actions) or perform and operation like [API or Query](/core-concepts/data-access-and-binding/querying-a-database#running-a-query) execution.

#### Async function data in a sync field
When working with data in Appsmith, it's important to understand how to use async functions in sync fields. Asynchronous functions can be a powerful tool, but they can also be a source of errors if not used correctly. For more information, see [How to use data from async functions in sync fields](/learning-and-resources/how-to-guides/how-to-use-data-from-async-functions-in-sync-fields).

#### Trigger actions on events
[Actions](/reference/appsmith-framework/widget-actions) in Appsmith are predefined functions that allow you to perform specific tasks in response to user interactions or other events in your app. 

They can be triggered by binding them to events, such as a button click. For example, you want to execute a API on button click and show a success message on the successful execution of the API. You can bind to invoke [showAlert()](/reference/appsmith-framework/widget-actions/show-alert) function on the `onClick()` event for `onSuccess` attribute, as shown below:

```javascript
showAlert("Data saved successfully.");
```

<VideoEmbed host="youtube" videoId="tjJIDkoCyQE" title="Global Functions" caption="Global Functions"/> 

You can only use the **global actions** provided out-of-the-box by Appsmith in the **async** **fields**.  

##### Handle success or error

When configuring API and query executions, it's important to provide feedback to the user about the outcome of the action. This can be done by displaying success messages when an action is completed successfully or error messages when there are issues with the execution.

<VideoEmbed host="youtube" videoId="4aEMFU1r1yg" title="Setup Success or Error messages" caption="Setup Success or Error messages"/>

You can configure the action to be performed once a query returns with a success or an error. The success or error returned by the API or query can be determined by the HTTP status code or the query response status. These status code are bound to `onSuccess` and `onError` attributes of events and available in property pane to be setup for showing informative messages to end users.

You can also choose to write custom JavaScript code by enabling the `JS` label next to event, and add the code you wish to trigger on success or when an error is generated, as shown below:

```javascript
{{<API_QUERY_NAME>.run(() => showAlert(<SUCCESS_MESSAGE>, ‘success’), () => showAlert(<ERROR_MESSAGE>, ‘error’))}}
```

## Complex workflows

When creating apps in Appsmith, you may encounter situations where the standard GUI options aren't sufficient to handle your use case. This is where you write complex workflows. Writing complex workflows enable you to handle more advanced logic and interactions, such as chaining multiple queries together and executing them in a specific order, or conditionally executing a query based on the outcome of another query.

The GUI is limited to a single `onSuccess` or `onError` callbacks, while the underlying framework has no limitation. To write complex workflows that can't be accommodated in the GUI, you can enable JavaScript by clicking the JS label next to the event name. 

<VideoEmbed host="youtube" videoId="rlk5c0HWW5o" title="Write Custom Code using JS label" caption="Write Custom Code using JS label"/>

You can also configure actions using the GUI and then click the JS icon next to the event/property to view the JavaScript equivalent of the configuration. This can serve as a starting point and help you configure workflows according to your specific needs. This gives you more flexibility and options to configure complex workflows that can't be handled by the GUI alone.

### Conditional execution
Write custom JavaScript code enables you to handle conditional execution of operations. For example, you wish to execute different queries based on user selection, and bind the data to a table widget. You can do so, by enabling the JS label next to the table data property and add below code:

```javascript
{{
  Choose_operations.selectedOptionValue === 'Fetch Users from DB' ? FetchUsersFromDB.data : FetchUsersFromAPI.data.users
}}
```

<VideoEmbed host="youtube" videoId="N_M-i9dnweo" title="Trigger multiple operations based on user input" caption="Trigger multiple operations based on user input"/>

In this scenario, `Choose_operations` is a select widget that allows the user to select various options. Based on the selected option, the corresponding query is triggered and the generated data is displayed in a table widget.

You can also chain the queries to execute conditionally based on the value of a widget or the response of a Query.

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
Parallel execution of queries in Appsmith allows you to retrieve data from multiple sources simultaneously. This can be useful when you have multiple queries that need to be executed and the result of one query doesn't depend on the other.

Each query object in Appsmith has a run method that can be used to execute the query. For example, to execute multiple queries in parallel on a button's click, select the JS label next to `onClick` event and separate the run statements using a semicolon `(;)`. This executes the queries simultaneously, allowing you to retrieve data from multiple sources in parallel:

```javascript
{{ API1.run(); Query2.run(); API2.run(); }}
```

 <VideoEmbed host="youtube" videoId="flCSSNTwWc4" title="Running Multiple Queries" caption="Running Multiple Queries"/>  

In this example, `Query 1` includes information about location, pin code, email address, and phone number, and `Query 2` includes information about name, gender, and ID, and are executed simultaneously on a button click.

### Serial execution
In contrast to parallel execution, serial execution of queries in Appsmith means that the queries are executed one after the other, in a specific order. This can be useful when the results of one query depends on the results of another query.

To execute multiple queries in a specific order, you can chain the run method of one query using the `then` function of the previous query as shown below. This executes `query1`, then `query2` and finally `query3`.

```javascript
{{
  query1.run()
    .then(() => query2.run())
    .then(() => query3.run());
}}
```

You can also chain the query execution using the callback arguments in the `run` signature for `onSuccess` and `onError`. This ensures that the next query is executed only after the previous one is completed. Here's an example of how you can execute multiple queries in serial:

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

By using JavaScript, you can write more advanced logic, such as chaining multiple queries together and executing them in a specific order, or conditionally executing a query based on the outcome of another query. This opens up a wide range of possibilities for creating complex and powerful workflows in Appsmith. For more information on how to efficiently use JavaScript in Appsmith, see [Working with JavaScript Editor](/core-concepts/writing-code/javascript-editor-beta#working-with-javascript-editor).

## Further reading
* [Appsmith Framework](/reference/appsmith-framework/)
* [External Libraries](/core-concepts/writing-code/ext-libraries) 
* [Datasources](/reference/datasources)
* [Widgets](/reference/widgets)
