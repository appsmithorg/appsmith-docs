---
description: >-
  Learn how to write custom code with Appsmith. The guide covers a variety of programming languages, including JavaScript and SQL, and provides examples and best practices to help you get started.

toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Writing Code
Appsmith enables writing JavaScript code almost everywhere on the GUI inside widget properties, events listeners, queries, and other settings. With the help of the JavaScript editor and the debugging tools, you can write complex reusable code and build scalable applications.

Appsmith also provides the ability to [import external libraries](/write-code/how-to-guides/ext-libraries#custom-javascript-libraries), helping you expand the capabilities of your applications.

## Code in JavaScript
You can write JS code inside the **mustache syntax `{{ }}`**. You can reference entities (widgets, queries, JS objects) and their associated data and properties as JavaScript variables and perform operations on them using built-in functions.  

Appsmith currently supports two forms of JavaScript code for dynamically evaluated properties:

#### Single-line code
Appsmith supports writing single-line code within `{{ }}` and interprets anything written between the brackets as a JavaScript expression. The output of the JS expression is bound to the corresponding property. You can write single-line code for cases such as performing transformations on arrays or using ternary operators for conditional expressions.

**Example**

```javascript
/*Filter the data array received from a query*/
{{ QueryName.data.filter((row) => row.id > 5 ) }}

/*Ternary condition*/
{{SelectWidgetName.selectedOptionValue === "1" ? "Option 1" : "Option 2" }} 
```

Sometimes, you may have to chain multiple operations, such as running queries, calling functions/methods, using conditional expressions, etc., in a single line to achieve a desired outcome. 

**Example**:This example shows how to run multiple actions on the successful execution of the `updateData` query.

```javascript
{{updateData.run(() => {getData.run(), closeModal('ModalName')}, () => {})}}
```

If your expression becomes too complex or challenging to fit in a single line, use multi-line code explained in the following section. To keep the code readable, you can also write a helper function in a [JS Object](/write-code/concepts/javascript-editor-beta#js-object).

#### Multi-line code

As the name suggests, you can break code into multiple lines to make it readable and also use **[Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)** to write functions or code blocks with return statements. 

**Example**:This example shows how to code the button's `onClick` event listener to execute a set of actions.

```javascript 
{{
  storeValue("userID", 42);  
  console.log(appsmith.store.userID); 
  showAlert("userID saved");
}}
```

The example below shows how to restructure an invalid code block using **IIFE**.

**Invalid code**

```javascript
/*Call a query to fetch the results and filter the data*/
{{ 
   const array = QueryName.data;
   const filterArray = array.filter((row) => row.id > 5);
   return filterArray;
}}

/* Check the selected option and return the value*/
{{ 
  if (Dropdown.selectedOptionValue === "1") {
      return "Option 1";
  } else {
      return "Option 2";
  }
}}
```

 **Valid code**

```javascript
/* Call a query and then manipulate its result */
{{ 
  (function() {
      const array = QueryName.data;
      const filterArray = array.filter((row) => row.id > 5);
      return filterArray;
   })()
}}

/* Verify the selected option and return the value*/

{{ 
  (function() {
      if (Dropdown.selectedOptionValue === "1") {
        return "Option 1";
      } else {
        return "Option 2";
      }
   })()
}}
```

#### JS Objects
JS Objects stores a collection of variables and functions, and you can use it to write reusable code in Appsmith. With it, you can manipulate data, handle events, perform advanced operations, write complex logic and invoke them anywhere within the application where it's defined. You can create JS Objects in the JavaScript Editor. For more information, see [JS Objects](/write-code/concepts/javascript-editor-beta).

## Further reading

* [Creating Workflows](/core-concepts/writing-code/workflows)
* [Using JavaScript Promises](/write-code/how-to-guides/javascript-promises)
* [Importing External Libraries](/write-code/how-to-guides/ext-libraries)
* [Working with Appsmith Framework Functions](/write-code/reference)
