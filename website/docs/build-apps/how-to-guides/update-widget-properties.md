---
description: This page shows how you can dynamically update widget properties using setters methods, and Appsmith framework functions. 
---

# Update Widgets Properties

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


