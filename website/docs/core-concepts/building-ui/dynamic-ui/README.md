---
description: This page demonstrates how you can dynamically update widget properties using queries, JavaScript functions, and setter methods.
---

# Bind Data to Widgets

This page shows how you can dynamically bind widget properties using queries, and JavaScript functions. 


## Using query

This method allows you to update widget data based on the query response.

### One-click binding

Appsmith simplifies the process of data binding with one-click binding feature. With one-click binding, you can connect your widget to existing datasources and have Appsmith automatically generate queries for you. This feature is currently supported by the following widgets: 

* Table
* Select
* Multi select

#### Generate queries automatically

With this method, you can connect widgets to your datasource, and Appsmith automatically generates fetch, insert, pagination, and filtering queries based on your widget and datasource selections.



<iframe src="https://demo.arcade.software/UoxpSP7leUynT4CaU0R6?embed" width="900" height="750"></iframe>


1. Click **Connect Data** and, in the "Choose your data source," section select your preferred datasource.
2. 

#### Connect existing queries

<iframe src="https://demo.arcade.software/JhOT0E5Jf7UaIBTshWRH?embed" width="900" height="700"></iframe>



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

* For synchronous functions, use `{{JS_OBJECT_NAME.FUNCTION_NAME()}}`. 
* For asynchronous ones, access the data using `{{JS_OBJECT_NAME.FUNCTION_NAME.data}}`.
* For variables, access their values using `{{JS_OBJECT_NAME.VARIABLE_NAME}}`.

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

By following similar steps, you can create a JavaScript object, define variables and functions within it, and bind their values to widgets. 

</dd>

See [How to display data from functions](/write-code/how-to-guides/display-data-from-functions).


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



