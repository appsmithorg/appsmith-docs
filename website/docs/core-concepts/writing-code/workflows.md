---
description: >-
  Learn to create dynamic and responsive workflows in Appsmith using widgets, queries, actions, and JS Objects. Build advanced functionality such as data validation and user-specific data retrieval. Build your own application now.
---

# Creating Workflows
Appsmith lets you create dynamic and responsive web applications. It empowers developers to design user interfaces that adapt to user interactions on the fly and execute advanced operations like data retrieval, manipulation, and event triggering. Appsmith facilitates adding, configuring, and using widgets, queries, actions, JS Objects, and APIs. Additionally, it allows for more advanced functionalities such as parallel and conditional queries as well as data transfer between pages.

## Widgets
Widgets are the building blocks of any Appsmith application. They're used to display information on the page and respond to user interactions. There are different types of [widgets](cross-reference to Widgets landing page] available in Appsmith.

### Fields
Widgets provide fields that you can use to bind and display data or trigger an action. Based on this, the properties are categorized as either sync or async.

#### Sync fields
Whenever you drag a widget on the canvas, you can select it and see the properties associated with it in the properties pane. The fields that expect input or data in the properties pane are called Sync Fields.

#### Async fields
The properties that can trigger an action or perform an operation are called Async Fields.

#### Use the Async function in sync field
Existing content

Add a reference in the same doc for the Queries/API/JS objects section.

## Queries & API
Queries and APIs are used to retrieve data from external sources. The data retrieved by Queries and API can be bound to the widgets.


### Handling success and error
When using queries and APIs, it's important to handle both success and error cases. This can be done using the `onSuccess` and `onError` properties of the query or API. You can configure the [action](Cross-reference to below section] to take once a Query returns with a success or an error. The Success / Error returned by the API/Query can be determined by the HTTP status code or the query response status.
For example, you can display a success or an error message by using the `showAlert` action.

## JS Objects
JS Objects are used to create custom logic in Appsmith. They can be used to manipulate data, handle events, and perform advanced operations. You can create JS Objects by using the JavaScript Editor. It allows you to write complex code and use it throughout your application.


## Actions
Actions are used to trigger events in response to user interactions. They can be used to navigate between pages, send data to external sources, and perform other operations.

## Navigation
Navigation is an essential feature of any web application. Appsmith provides a lot of flexibility to define the navigation in your application, allowing you to create dynamic and responsive navigation menus and routes.

## User management and authentication
Appsmith provides built-in support for user management and authentication. You can implement login, registration, and password reset capabilities in your application (Cross-reference to various docs). You can also use APIs and custom logic to integrate with external authentication providers like Google, GitHub, and more. (`We can also cross-reference here for the BE features like SSO- OIDC and SAML`) - Thoughts???

## Complex workflows
Appsmith allows for the creation of complex workflows using parallel and conditional queries as well as data transfer between pages. This allows for the creation of advanced functionalities such as form validation, data validation, and user-specific data retrieval.


--------Existing Content -----------
# Creating Workflows

When you build an app on Appsmith, you manipulate data; add, update, delete and retrieve data, add actions and trigger them. You use Javascript functions, APIs, or Queries to build different workflows.

:::info
To create workflows, you should be familiar with [triggering actions](../../reference/appsmith-framework/#functions) from [widgets](/reference/widgets) and expand on triggering more complex actions.
:::

## **Fields**

The widgets have fields you can use to bind data or trigger operations. Appsmith has segregated the fields into Sync and Async fields.

### **Sync Fields**

Whenever you drag a widget on the canvas, you can select it and see the properties associated with it in the properties pane. The fields that expect input or data in the properties pane are called Sync Fields.

![Input widget - Sync Fields](</img/Writing_Code__Creating_Workflows__Sync_Fields__Input_Widget.png>)

For example, if you have added an Input widget to the canvas, the properties like MaxChars, Regex, Error Message, and so on expect some input and are Sync Fields.

### **Async Fields**

The properties that can trigger an action or perform an operation are called Async Fields.

![Input Widget - Async Fields](</img/Writing_Code__Creating_Workflows__Async_Fields__Input_Widget.png>)

For example, the properties like `OnTextChanged` and `OnSubmit` of an input widget are considered async fields. You can use these properties to define an action or perform an [operation](../../reference/appsmith-framework/#functions).

### **Use an Async Function Response in a Sync Field**

 <VideoEmbed host="youtube" videoId="yn_8gs5w04g" title="Using data from Async function in Synchronous Field" caption="Using data from Async function in Synchronous Field"/>  


Let's look at some examples to understand how you can use async functions in sync fields.

#### **Use case**

You are fetching all the users and displaying information like First Name, Last Name, Email, and more on a page. You have a table widget to display the data.

**Using an API**

You have an API that fetches Users. You want to trigger the API execution, so you bind the API call to the widget, and the response generated will be shown in the table.

To add a Table widget; Navigate to `Explorer` >> Click on `Widgets` >> Search `table` >> Drag a table widget onto the canvas.

 <VideoEmbed host="youtube" videoId="iYZV9DPnugY" title="Using an API" caption="Using an API"/>  


To read data by using an API: Create an API - `getAllUsers` on Appsmith by adding the `API` from `Explorer` >> Click `(+)` Query/JS >> Select `New Blank API` >> Rename to `getAllUsers` (or select an existing API) Add API call to the table data property of a table widget as shown in the code snippet below:

```
 {{getAllUsers.data}}
```

:::info
The [table data property of a table](../../reference/widgets/table/#table-data) requires a **JSON Array** so verify that your API returns a **JSON Array**.
:::

A `{{API.run()}}` method, if supplied to the [Table data](../../reference/widgets/table/#table-data), will throw an error, as table data is a Sync field and cannot perform the execution. However, you can read the response generated by the API by accessing the data property `{{API.data}}` of an API. When you bound an API data property to a widget, Appsmith executes the API **on page load**. You can modify the API settings if you wish not to execute the API **on page load**.

**Using a JSObject**

You have a JSObject function that fetches all Users' information, filters data for `firstname` & `email,` and then returns the result so you can bind it to the table widget and display information.

 <VideoEmbed host="youtube" videoId="8mVQS6uaR6M" title="Using a JSobject" caption="Using a JSobject"/>  


To read the data by calling a JSObject function: Create a JSObject - `getFilteredUsersList` on Appsmith by adding a `JSObject` from `Explorer` >> Click `(+)` Query/JS >> Select `New JS Object` >> Rename to `getFilteredUsersList` (or select an existing JSObject) You can add your API or Query Call to the function call and filter the data for the required details as below:

```
export default {
	userFilteredList: async () => {
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

A function call to the JSObject `getFilteredUsersList.userFilteredList()` will throw an error as table data is a sync field and cannot perform function execution. However, you can use the JSObject function response by adding `{{<JSOBJECTNAME.FUNCTIONAME.data>}}1 ({{getFilteredUsersList.userList.data}})`by reading the function's response. Appsmith handles the JSObject function execution **on page load**. You can modify the async function settings from the settings tab if you wish not to execute the function **on page load**.

**Using a Query**

You have a query that fetches Users’ information, returns the response, and binds it to the table widget to display data.

 <VideoEmbed host="youtube" videoId="hqkI0h7DQ-s" title="Using a Query" caption="Using a Query"/>  


To read data by calling a query:

* Click on the **+** icon next to the **queries/js** and create a new query.
* Select `DatabaseName` for which you want to add Query.
* Rename the query to `fetchUsersList.`

Assuming that the table name is Users. Add the following code to the query editor.

:::info
Replace **users** with the **table name** in your database.
:::

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

An execution call to the query `fetchUsersList.run()` will throw an error as table data expects data and cannot perform query execution. However, you can read the query response and use it in the Table data to display records by using `{{<QUERY_NAME.data>}}(fetchUsersList.data)`. Appsmith handles the query execution **on page load**. You can modify the query settings from the settings tab if you wish not to execute the query **on page load**.

## **Events**

You can trigger the actions by binding them with Async fields. For example, you want to show a success message on the submission of a button by using `showAlert()`. You'll have to bind the \[`showAlert()`]\(Add a link to Actions - Show Alert method) function on the `onClick()` event.

:::info
You can only use the **global actions** provided out-of-the-box by Appsmith in the **async** **fields**, which are events or actions.
:::

 <VideoEmbed host="youtube" videoId="tjJIDkoCyQE" title="Global Functions" caption="Global Functions"/>  

### Handling Success / Error

The property pane allows us to configure the action to take once a Query returns with a success or an error. The Success / Error returned by the API/Query can be determined by the HTTP status code or the query response status.

We can decide to display a success or an error message by using the [**showAlert action**](/reference/appsmith-framework/widget-actions/show-alert.md).

![](</img/error_handling.gif>)

## Complex Workflows

The GUI is limited to a single [onSuccess](/reference/appsmith-framework/query-object.md#onsuccess) / [onError](/reference/appsmith-framework/query-object.md#onerror) callback, while the underlying framework has no limitation. To write complex workflows that cannot be accommodated in the GUI, click on the **JS** icon next to the event name & enable JavaScript. Now you can write conditional workflows and chain multiple Queries.

![](</img/conditional_query.gif>)

:::tip
Once you have configured [actions](/reference/appsmith-framework/widget-actions) using the GUI, you can click on the JS icon next to the event to show the JavaScript equivalent of your configuration. It can help you learn to use JavaScript to configure workflows!
:::

### Executing Queries in Parallel / Serial

Each query object has a [run](/reference/appsmith-framework/query-object.md#run) method used to execute the query. To execute multiple queries, you have to separate the run statement in the buttons `onClick` handler with a semicolon(`;`). The [run](/reference/appsmith-framework/query-object.md#run) method is asynchronous, and you can execute multiple queries in parallel as below:

```javascript
{{ API1.run(); Query2.run(); API2.run(); }}
```

or chained to be called `onSuccess`/`onError` using the callback arguments in the `run` signature.

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

The following example shows how you can run two queries on a single click event:

 <VideoEmbed host="youtube" videoId="flCSSNTwWc4" title="Running Multiple Queries" caption="Running Multiple Queries"/>  


You'll see that **Query 1** includes information about location, pin code, email address, and phone number, and **Query 2** includes information about name, gender, and ID.

To run both the queries:

* Drag and drop two table widgets into the canvas.
* In the [Table Data](../../reference/widgets/table/#table-data) section, call your query.

```javascript
{{Query1.data}} //For Table 1

{{Query2.data}} // For Table 2
```

* Add a [button widget](../../reference/widgets/button/) to call both queries simultaneously.
* In the button's **onClick** event, toggle the **JS** option and paste the below code:

```javascript
{{Query1.run(); Query2.run()}}
```

You can execute multiple queries simultaneously with this command.

### Conditional Execution

[Queries](../data-access-and-binding/querying-a-database/) can also be chained to execute conditionally based on the value of a widget or the response of a Query.
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

:::tip
Use the [Appsmith Framework](../../reference/appsmith-framework/) and [External Libraries](ext-libraries.md) to build logic into your applications quickly.
:::
