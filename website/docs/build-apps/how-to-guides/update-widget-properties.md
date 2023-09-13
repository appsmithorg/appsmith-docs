# Update Widgets properties

This page shows how you can dynamically update widget properties using setters methods, and Appsmith framework functions. 


## Using setters methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.

<dd>

*Example:* if you want to display a Form widget only when a user selects a specific option from a Select widget, such as `Yes` and `No`.

* Write a function in the JS object that sets the values for the widgets. For instance, use the `setVisibility` method to change the visibility of a Form widget to `true`:

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


* Set the Select widget's [**onOptionChange**](/reference/widgets/select#onoptionchange) event to execute the JS function.

Similarly, you can use setter methods to programmatically update data, color, visibility, and other properties.





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

