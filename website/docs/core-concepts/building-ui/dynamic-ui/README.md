---
description: This page demonstrates how you can dynamically update widget properties using queries, JavaScript functions, and setter methods.
---

# Bind Data to Widget Properties

This page shows how you can dynamically update widget properties using queries, JavaScript functions, and setter methods. There are several ways to bind data to widgets:

* [Using query](#using-query)
* [Using JS Objects](#using-js-objects)
* [Using widgets](#using-widgets)
* [Using storeValue](#using-storevalue)
* [Using setters methods](#using-setters-methods)



## Using query

This method allows you to update widget data based on changes in the datasource. Follow these steps to bind data from a database or API query directly into your widget: 

<dd>

*Example:* suppose you have data that you want to display in a Table widget; you can do so by binding the response to the widget's properties using Mustache syntax, like `{{<query_name>.data}}`.

1. You have a query called `fetchData` that retrieves data from a datasource, like:

```sql
SELECT * FROM public."users" LIMIT 10;
```

2. Display the data by binding the query response. For the Table widget, add the following code to the **Table data** property:

```js
{{fetchData.data}}
```

Similarly, you can connect queries to different widgets using the Mustache syntax, like `{{}}`.



</dd>

## Using JS Objects

This method allows you to dynamically connect your data using [JavaScript Objects](/core-concepts/writing-code/javascript-editor-beta).

<dd>

*Example:* suppose you want to display data using a JavaScript object, such as the current date and time, within a Text widget.



1. Create a New JS Object from the *queries/JS* section, and add the required code. To display the current date and time, add:


```js
export default {
  currentDateTime: new Date().toLocaleString(),
};
```

Additionally, you can also bind data from queries directly into JavaScript objects for dynamic data integration.


2. Add the following code to the **Text** property of the Text widget to bind the properties of the JS objects:

```js
{{JSObject1.currentDateTime}}
```

By following similar steps, you can create a JavaScript object, define variables and functions within it, and bind their values to widgets. 

</dd>

## Using widgets

When working with widgets in Appsmith, you may need to update values in the widget properties dynamically. Appsmith follows the reactive programming paradigm. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data. When a value is updated, any widgets that depend on that changed value also update automatically.

<dd>


*Example:* suppose you have a Table widget connected to a query. Whenever a user selects a row in the Table, you want to display specific data in a Text widget based on user selections. 


Add the following code to the Text widget's **Text** property:

```js
//To display the email field when the user selects a row in the Table widget, use:
{{Table1.selectedRow.email}}

//To display the email field when the user selects an item in the List widget, use:
{{List1.selectedItem.email}}
```

Similarly, you can connect values from other widgets using the Mustache syntax `{{}}` and reference properties.

</dd>

## Using storeValue()

This method uses the Appsmith framework function [storeValue()](/reference/appsmith-framework/widget-actions/store-value) to bind data to widgets. `storeValue()` stores data as key-value pairs in the browser's local storage for universal accessibility within the application.

<dd>

*Example:* suppose you want to save the text of an Input widget, you can do so by using `storeValue()`. 

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



## Using setters methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.

<dd>

*Example:* suppose you want to display a Form widget only when a user selects a specific option from a Select widget.

1. Set up the Select widget to display options such as `Yes` and `No`.


2. Create a new JS object and write the function to set the values of different widgets. For instance, using the `setVisibility` method to change the visibility of a Form widget to `true`:

<dd>

```js
export default {
	myFun1 () {
	
    if (Select1.selectedOptionValue === 'yes') {
      Form1.setVisibility(true);
    } else {
      Form1.setVisibility(false);
    }
 }
}
```

</dd>

3. Set the Select widget's [**onOptionChange**](/reference/widgets/select#onoptionchange) event to execute the JS function.

Similarly, you can use setter methods to programmatically update data, color, visibility, and other properties.





</dd>