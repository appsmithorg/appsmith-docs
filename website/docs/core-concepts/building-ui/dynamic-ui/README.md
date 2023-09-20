---
description: This page demonstrates how you can dynamically update widget properties using queries, JavaScript functions, and setter methods.
---

# Bind Data to Widgets

This page shows how you can dynamically bind widget properties using queries, and JavaScript functions. 


## Using query

This method allows you to update widget data based on the query response.

### One-click binding

Appsmith simplifies the process of data binding with the one-click binding feature. The one-click binding feature allows you to connect your existing datasources to widgets and have Appsmith automatically generate fetch, insert, pagination, and filtering queries for you. The following widgets currently support this feature:

* Table
* Select
* Multiselect

<iframe src="https://demo.arcade.software/UoxpSP7leUynT4CaU0R6?embed" width="900" height="750"></iframe>

1. In the Data property of the widget, select your preferred datasource from the **Choose Your Datasource** section.
2. Select the data/collection you want to display. 
3. Customize your selection by choosing a searchable column or configure labels and values based on your widget.

Similarly, you can establish connections with existing queries.



### q

<dd>

*Example:* if you have data that you want to display in a Table widget; you can do so by binding the response to the widget's properties using mustache syntax `{{QUERY_NAME.data}}`. 
* For instance, you have a query called `fetchData` that retrieves data from a datasource, like:

```sql
SELECT * FROM public."users" LIMIT 10;
```

* To display the data, bind the query response. For the Table widget, add the following code to the **Table data** property:

```js
{{fetchData.data}}
```




</dd>

## Using JS Objects

This method allows you to dynamically connect your data using [JavaScript Objects](/core-concepts/writing-code/javascript-editor-beta). You can achieve this by binding the results returned in variables or functions to different widget properties. 


### JSObject variables 

<dd>

*Example:* if you want to display data using a JavaScript object, such as the current date and time, within a Text widget.

* To display the current date and time, add the following code in the JS object:


```js
export default {
  currentDateTime: new Date().toLocaleString(),
}
```

Additionally, you can also bind data from queries directly into JavaScript objects for dynamic data integration.


* Add the following code to the **Text** property of the Text widget to bind the properties of the JS objects:

```js
// Accessing the current date and time stored in the variable.
{{JSObject1.currentDateTime}}
```

</dd>

### JSObject functions


#### Synchronous functions

* For synchronous functions, use `{{JS_OBJECT_NAME.FUNCTION_NAME()}}`. 

*Example*: you want to display Echarts using JSObjects, to that you can add the following code in the JS object:

```

```

#### Asynchronous functions

`{{JS_OBJECT_NAME.FUNCTION_NAME.data}}`.


See [How to display data from functions](/write-code/how-to-guides/display-data-from-functions).

### JS expressions



## Using widgets

When working with widgets in Appsmith, you may need to update values in the widget properties dynamically. Appsmith follows the reactive programming paradigm. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data. When a value is updated, any widgets that depend on that changed value also update automatically.

<dd>


*Example:* if you have a Table widget connected to a query. Whenever a user selects a row in the Table, you want to display specific data in a Text widget based on user selections. 


Add the following code to the Text widget's **Text** property:

```js
//To display the email field when the user selects a row in the Table widget, use:
{{Table1.selectedRow.email}}

//To display the email field when the user selects an item in the List widget, use:
{{List1.selectedItem.email}}
```

Similarly, you can connect values from other widgets using the mustache syntax `{{}}` and reference properties.

</dd>


## Using storeValue()

This method uses the Appsmith framework function [storeValue()](/reference/appsmith-framework/widget-actions/store-value) to bind data to widgets. `storeValue()` stores data as key-value pairs in the browser's local storage for universal accessibility within the application.

<dd>

*Example:* if you want to save the text of an Input widget, you can do so by using `storeValue()`. 

1. In the [**onTextChanged**](/reference/widgets/input#ontextchanged) event of the Input widget, enable JS and add the following code: 


```js
{{storeValue('inputData', Input1.text);}}
```

2. Drag the Text widget and add the following code to the **Text** property to display the saved text:

```js
{{appsmith.store.inputData}}
```

</dd>

Similarly, you can use different functions to perform actions like page navigation, displaying alerts, managing modals, and storing data in local storage.

You can also use `{{appsmith.user.email}}` to display the email address of the current user.


