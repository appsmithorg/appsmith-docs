---
description: >-
  Learn how to write custom code with Appsmith. The guide covers a variety of programming languages, including JavaScript and SQL, and provides examples and best practices to help you get started.
---

# Writing Code
Appsmith puts a strong emphasis on writing clean, efficient code to ensure user-friendly, intuitive application building. The JavaScript code editor and debugging tools are designed to help users write code that's easy to read and understand, allowing for smoother collaboration and the creation of reliable, high-performing applications. These tools also aid in troubleshooting any issues that may arise, allowing users to build the best possible applications for their users. 

This documentation guide helps you in writing code by providing an overview of the Appsmith code editor, its features, and best practices for writing clean and efficient code. It also covers how to incorporate external libraries and APIs into Appsmith projects, and provide tips for debugging and troubleshooting code. 

## JavaScript editor
The Appsmith JavaScript editor is a powerful tool that allows users to write, test, and debug their JavaScript code directly within the platform. It includes features such as syntax highlighting, code completion, and error highlighting, making it easy for users to write and debug their code.

<VideoEmbed host="youtube" videoId="tpbY5Jti9d4" title="How to build with JS Editor" caption="How to build with JS Editor" />

The code editor also includes a built-in console, allowing users to see the results of their code in real-time as they write it. This allows users to test their code and make any necessary changes without having to leave the Appsmith platform.

It includes a number of pre-built JavaScript libraries and functions that users can incorporate into their code. This makes it easy for users to add advanced capabilities to their applications without having to write the code from scratch. It also helps you to import external libraries, and use them in your code. For more information, see [pre-built and custom libraries](/core-concepts/writing-code/ext-libraries).

### Working with JS Objects
* overview of JS Objects
* Cross-reference to JS Objects page. 

### Debugging
* Overview of Appsmith's debugging tools, such as the console and breakpoints, and how to use them effectively
* Tips for working with errors and debugging code in a team environment, such as communicating and collaborating with team members and utilizing version control to track changes and debug issues
Cross-rerences to the debugging section in JS Objects.

### Working with widgets
* Existing content related to Javascript
* Cross-references to widgets

## Creating workflows
* Overview of workflows, and cross-reference to existing docs.

## Working with external libraries
* Explanation of how to incorporate external libraries and APIs into Appsmith projects, including how to import them and access their functions. Cross-reference to the External Libraries page.

## Best practices

## Troubleshooting

## Further reading


------------------Existing content---------------

You can use JavaScript  inside `{{ }}` anywhere in Appsmith. You can reference every entity in Appsmith as a JavaScript variable and perform all JavaScript functions and operations on them. It means you can reference all Widgets, APIs, Queries, and their associated data and properties  anywhere in an application in mustache syntax`{{ }}`.

Appsmith currently supports two forms of JavaScript code for dynamically evaluated property values:

1. Single line code or functions, such as ternary conditions

```javascript
{{ QueryName.data.filter((row) => row.id > 5 ) }}
```

2\. Immediately-Invoked Function Expressions ([IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE))

```javascript
{{ 
  (function() {
      const array = QueryName.data;
      const filterArray = array.filter((row) => row.id > 5);
      return filterArray;
   })()
}}
```

You can also write JavaScript code for event listeners. For JavaScript code inside an event listener, you can write multi-line JavaScript as below.

```javascript
{{
  storeValue("userID", 42);  
  console.log(appsmith.store.userID); 
  showAlert("userID saved");
}}
```

## Configuring Widgets with Code

When data changes within your app, your widgets need to update themselves to reflect these changes. To make this happen, Appsmith follows the reactive programming paradigm.

Instead of managing widget properties and states with direct variable assignment in code (like `x = 5`), widgets in your applications are connected to each other and share data; when one value is updated in your app, any objects that depend on that changed value also update accordingly. Below is a quick example of using the reactive code style to update a [Button](../../reference/widgets/button/)'s label in real time by taking user input from an [Input](../../reference/widgets/input.md) widget. Take a look at the video below:

<VideoEmbed host="youtube" videoId="YXo4PVrw1RQ" title="Reactive" caption="Reactive" />

The button’s label could be set as a simple static value (like “Submit”) in its properties pane, but if you’d like that property to change at any point, it must be defined differently.

When writing JavaScript to configure a widget’s property, your code should tell that widget where to look to find its data rather than explicitly setting a specific value. Consider the following example scenario:

Imagine that you're creating a dashboard for viewing and editing product inventory information, and you'd like to implement an 'Edit' mode for changing values. Values shouldn't be allowed to change when 'Edit' mode is off; they can only be updated after the user clicks the 'Edit' button, and then can be saved with a 'Save' button when they're finished. In total, there are a handful of Input widgets for handling the product data and two buttons for switching 'Edit' mode on and off.

In an imperative style, you might expect the Input widgets to be toggled with this kind of control:

```javascript
Input1.disable()
// or,
Input1.enabled = false
```

But this won't work in Appsmith! Instead, you might create and store a special value that represents whether 'Edit' mode is enabled, and configure the widgets to behave according to that value. Appsmith provides the [`storeValue()`](../../reference/appsmith-framework/widget-actions/store-value.md) function to make this possible, which you can read about [here](../../reference/appsmith-framework/widget-actions/store-value.md).

```javascript
// in the Disabled field of the Input widgets' properties
{{!appsmith.store.editMode}}
// in the onClick event field of the Edit button's properties
{{storeValue('editMode', true)}}
// in the onClick event field of the Save button's properties
{{storeValue('editMode', false)}}
```

<VideoEmbed host="youtube" videoId="yKb6SRonfmQ" title="Controlling Widgets with code" caption="Controlling Widgets with code" />

With this configuration, the Input widgets behave according to the current state of `editMode` in the Appsmith store. Anytime this value is toggled, the Input widgets are automatically updated.

## Single Line JavaScript

Appsmith primarily supports writing single-line javascript between mustache brackets `{{ }}`. Anything written between the brackets is evaluated as a javascript expression and its result is used as the given property's value.

Sometimes, to achieve the intended result, it may require us to chain multiple operations (methods, ternary expressions, etc.) in a single line. If your expression becomes too complex to fit easily into a single line, consider writing a helper function in a [JS Object](../../learning-and-resources/how-to-guides/how-to-use-js-object-within-appsmith.md) to help keep your code readable!

### Valid JavaScript

Following are valid examples of JavaScript for property values.

```javascript
{{ QueryName.data.filter((row) => row.id > 5 ) }}
```

```javascript
{{ Dropdown.selectedOptionValue === "1" ? "Option 1" : "Option 2" }}
```

**Invalid JavaScript**

You cannot simply write multi-line javascript between the mustache brackets; the following two snippets are examples of invalid code. See the next section, "Multi-Line Javascript," to see how we can structure properties that accept multiple lines of code.

```javascript
{{ 
   const array = QueryName.data;
   const filterArray = array.filter((row) => row.id > 5);
   return filterArray;
}}
```

```javascript
{{ 
  if (Dropdown.selectedOptionValue === "1") {
      return "Option 1";
  } else {
      return "Option 2";
  }
}}
```

## Multi-Line JavaScript

Appsmith supports multi-line JS if it is an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately-Invoked Function Expression). The above invalid examples become valid if restructured and used as below.

```javascript
{{ 
  (function() {
      const array = QueryName.data;
      const filterArray = array.filter((row) => row.id > 5);
      return filterArray;
   })()
}}
```

```javascript
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

:::tip
**Writing comments inside :**

Note that you can write comments inside using JavaScript's multi-line comment syntax `/* */`, but single-line comments `//` are not supported inside.
:::
