---
description: >-
  Learn how to write custom code with Appsmith. The guide covers a variety of programming languages, including JavaScript and SQL, and provides examples and best practices to help you get started.
---

# Writing Code
Appsmith puts a strong emphasis on writing clean, efficient code to ensure user-friendly, intuitive application building. The JavaScript code editor and debugging tools are designed to help users write code that's easy to read and understand, allowing for smoother collaboration and the creation of reliable, high-performing applications. These tools also aid in troubleshooting any issues that may arise, allowing users to build the best possible applications for their users. 

Appsmith also provides the ability to incorporate external libraries and APIs into your projects, helping you expand the capabilities of your applications.

## JavaScript editor
The Appsmith JavaScript editor is a powerful tool that allows users to write, test, and debug their JavaScript code directly within the platform. It includes features such as syntax highlighting, code completion, and error highlighting, making it easy for users to write and debug their code.

<VideoEmbed host="youtube" videoId="tpbY5Jti9d4" title="How to build with JavaScript Editor" caption="How to build with JavaScript Editor" />

The code editor also includes a built-in response, errors, and logs tabs that helps users to see the results of their code. For more information, see [Working with JavaScript editor](core-concepts/writing-code/javascript-editor-beta#working-with-javascript-editor).

The Appsmith JavaScript Editor also includes a number of [built-in JavaScript libraries](/core-concepts/writing-code/ext-libraries#javascript-library-reference) that users can incorporate into their code. This makes it easy for users to add advanced capabilities to their applications without having to write the code from scratch. It also enables you to import external libraries, and use them in your code. For more information, see [built-in and custom libraries](/core-concepts/writing-code/ext-libraries).

### Working with JS Objects
JS Objects are a powerful and versatile data structure that can be used to organize and store data in a structured manner. You can create, manipulate, and work with JS Objects to build powerful and dynamic applications. Appsmith provides a user-friendly interface that allows developers to interact with JS Objects in an intuitive and efficient way. Whether you're a beginner or an experienced developer, working with JS Objects in Appsmith can help you create robust, feature-rich applications with minimal effort. For more information, see [JS Objects in Appsmith](core-concepts/writing-code/javascript-editor-beta#js-object).

### Debugging
Appsmith provides a wide range of debugging tools to help you work with JS Objects efficiently. You can use tools like `console.log()` and `debugger` statements to identify and fix errors in your code. 

The `console.log()` allows you to log information and see the state of your code at any point, while `debugger` statements serve as breakpoints, pausing the execution of your code. This makes it easy to understand the flow of the code and identify any issues.

By using these debugging tools effectively, you can minimize the time it takes to identify and fix errors, and help your team build robust and high-performing applications more efficiently. For more information, see [how to debug JS objects](/core-concepts/writing-code/javascript-editor-beta#debugging).

## Working with widgets
When working with widgets in Appsmith, it's important to understand how the app updates itself in response to changes in data. To reflect these changes, Appsmith follows the reactive programming paradigm. This means that, instead of updating widget properties and states through direct variable assignment, widgets are connected and share data, so when one value is updated, any objects that depends on it also updates automatically.

For example, you have an [Input](/reference/widgets/input) widget where the user can enter text, and a [Button](/reference/widgets/button) widget with a label. You want to update the button's label based on the user's input. By using the reactive programming, the user types into the Input widget, and the label of the Button updates in real time to reflect the current user input. You can also check out the below video to understand how this works in a more visual way.

<VideoEmbed host="youtube" videoId="YXo4PVrw1RQ" title="How to set properties in widgets?" caption="How to set properties in widgets?" />

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
<VideoEmbed host="youtube" videoId="yKb6SRonfmQ" title="Controlling Widgets with code" caption="Controlling Widgets with code" />

With this configuration, the Input widgets' behavior is dynamically linked to the `editMode` state stored in the Appsmith store. As soon as this state is altered, the Input widgets are updated accordingly.

## Creating workflows
Creating workflows is an integral part of building your app. You can manipulate data by performing actions like adding, updating, deleting, and retrieving data, as well as adding and triggering actions. 

You can accomplish it by using a combination of JavaScript functions, APIs, and Queries. For more information, see [creating workflows](/core-concepts/writing-code/workflows), that provides more details on the different elements and concepts that can be used to build your workflows.

### Appsmith Framework
The Appsmith framework provides a range of utility functions and objects that allow developers to access important information, such as the current application URL or the authenticated user, and more. The framework also includes in-built functions for storing values in the local storage, as well as triggering actions in response to user inputs, such as displaying an alert message when a button is clicked. 

Additionally, Appsmith provides in-built global objects: [Query object](/reference/appsmith-framework/query-object) that enables developers to run database queries and share data between different pages by passing parameters, [Context](/reference/appsmith-framework/context-object) that provides information about the current state of the application, and more. This makes it easy to create dynamic, data-driven applications that respond to user interactions in real-time. For more information, see [Appsmith framework](/reference/appsmith-framework).

## Working with external libraries
External libraries to extend the capabilities of your application by building complex business logic. The Appsmith platform also includes built-in JavaScript utility libraries that can be used to work with data within `{{ }}` bindings or within JSObjects. For more information, see [Using external libraries](/core-concepts/writing-code/ext-libraries).

## Best practices
In Appsmith, you can use JavaScript inside curly braces (`{{ }}`) to reference and manipulate all entities, such as Widgets, APIs, Queries, and their associated data and properties, within your application. This allows for a high degree of flexibility and customization, as you can execute any JavaScript function or operation on these entities.

:::tip
While you can use JavaScript's multi-line comment syntax, `/* /`, to write comments within the mustache brackets, single-line comments, `//`, aren't supported. This means that you can use `/ */` to write comments that span multiple lines, but `//` doesn't work. 
:::

Appsmith currently supports two forms of JavaScript for dynamically evaluated property values:

### Single line JavaScript
Single line code or functions, such as ternary conditions, can be used as shown in this example:

```javascript
{{ QueryName.data.filter((row) => row.id > 5 ) }}
```

Sometimes, to achieve a desired outcome, you may have to perform multiple operations one after the other. This could involve chaining methods together, ternary expressions and others. For example, `{{ QueryName.data.filter((row) => row.id > 5 ) }}` or `{{ Dropdown.selectedOptionValue === "1" ? "Option 1" : "Option 2" }}`.  However, in situations where your expression becomes convoluted and hard to fit in a single line, it's a good idea to consider breaking it down and encapsulating it within a [helper function in a JS Object](/core-concepts/writing-code/javascript-editor-beta#js-object).

### Multi-line JavaScript
Appsmith enables the use of multi-line JavaScript through the use of Immediately Invoked Function Expression (IIFE). This allows for more complex code organization and readability. Moreover, you can also write JavaScript code for events listeners which can contain multiple lines of code. An example of this is provided below:
* Call a query and then manipulate its result:
```javascript
{{ 
  (function() {
      const array = QueryName.data;
      const filterArray = array.filter((row) => row.id > 5);
      return filterArray;
   })()
}}
```
* Verify the selected option and then perform operation on it:

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

You **can't** write multi-line JavaScript directly within the curly brackets (`{{ }}`). The examples shown below are considered invalid:

* Call a query to fetch the results and manipulate it's data:
```javascript
{{ 
   const array = QueryName.data;
   const filterArray = array.filter((row) => row.id > 5);
   return filterArray;
}}
```
* Verify the selected option and then perform operation on it:
```javascript
{{ 
  if (Dropdown.selectedOptionValue === "1") {
      return "Option 1";
  } else {
      return "Option 2";
  }
}}
```

It's important to keep in mind that, when using JavaScript inside curly braces (`{{ }}`) the code is written in a way that's accurate, efficient, readable, and well-organized to make it easier to understand and maintain. 

### Accessing column names or attribute names with spaces
When working with column or attribute names that include spaces, it's necessary to use the following syntax: `<QUERY_OR_API_OR_OBJECT_NAME>["COLUMN_OR_ATTRIBUTE_NAME"]`. As an example, if you have an API called `getFullName` that returns data for an attribute named `Full Name`, you can access it as follows:

```javascript
getFullName.data["Full Name"]
```
It's also important to note that this applies to all the JS Objects, Widgets, Queries, and APIs.

## Further reading
* [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)
* [Embed Apps](/advanced-concepts/embed-appsmith-into-existing-application)
* [Version Control with Git](/advanced-concepts/version-control-with-git)
