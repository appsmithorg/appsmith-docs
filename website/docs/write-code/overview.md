# Overview

One of the key features of Appsmith is the ability to write custom code to enhance the functionality of your applications. This concept document introduces how to write code in Appsmith, the usage of mustache bindings, and the creation and use of functions within JSObjects.

## Inline code with mustache bindings

Appsmith uses a templating syntax (known as mustache bindings) to write dynamic code inside widget properties and queries. Mustache bindings are expressed by wrapping the code inside `{{ }}`. This syntax allows you to insert JavaScript code directly into properties of widgets or as part of query configurations. Writing code inline does not allow for multi-line functions which are better suited to be written inside JSObjects.

### Inline code in widget properties

```
// This code snippet can be used in a widget property to dynamically set its value
{{ "Current date and time: " + new Date().toLocaleString() }}
```

When used in widget properties, mustache bindings dynamically compute values based on the current state of the application, user inputs, or other variable data.

### Inline code in queries

```javascript
// This example shows a SQL query with mustache bindings to insert dynamic values
SELECT * FROM users WHERE id = {{ Input1.text }}
```

Within queries, you can reference widgets JSObjects, & any application state. The bindings will be evaluated at runtime when the query is triggered, ensuring that the latest values are used in the query execution.

## Creating functions in JS Objects

A JSObject is a collection of JavaScript functions and variables that can be used to transform data or perform custom logic in your application. It helps in centralizing code, reusability, and keeping the logic separate from the UI.

### Simple functions

Simple functions in a JSObject can transform data, format values, or perform any JavaScript logic that doesn't involve asynchronous operations.

```javascript
export default {
  formatUserName: (user) => {
    return user.firstName + " " + user.lastName;
  },
};
```

### Asynchronous functions and triggering queries

Async functions within JSObjects allow you to perform asynchronous operations such as API calls, database queries, or any other operations that return a Promise.

```javascript
export default {
  fetchData: async () => {
    const data = await Api1.run();
    return data;
  },
};
```

Since async functions return promises, the value of their returned data can be accessed in a widget by using the .data property of the function.

```
{{JSObject1.fetchData.data}}
```

Async functions can only be triggered from other async functions or widget event handlers.

## JavaScript context in Appsmith

For security purposes, any JavaScript code executed within Appsmith does not have access to the global `window` object that you typically have in a web browser environment. This restriction helps prevent security vulnerabilities and ensures that the code within the application is self-contained.

However, Appsmith provides a special `appsmith` object that contains a context with useful properties and methods that can be utilized within your code:

```javascript
export default {
  contextExample: () => {
    // Access to Appsmith context object properties
    console.log(appsmith.user);
    console.log(appsmith.store);
    // ... other operations
  },
};
```

The `appsmith` object includes information about the current user, application state, and exposed methods useful for application development. By providing these out-of-the-box functionalities within a controlled context, Appsmith ensures both the flexibility and security of code execution within your applications.

Remember that while Appsmith provides significant power and flexibility for writing custom code, it is important to understand the execution context and keep security best practices in mind while developing your applications.

---

<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      </div> 
      <b><a href="/write-code/how-to-guides">How-to Guides</a></b>
      <div className="containerDescription">
         Directions and step-by-step guides covering key operations and common tasks.
      </div>
   </div>

   <div className="containerColumnSampleApp columnGrid column-two">
   <div className="containerCol">
      </div>
      <b>
        <a href="/write-code/reference"> Reference</a>
      </b>
      <div className="containerDescription"> 
        Technical descriptions and information about framework and libraries.
      </div>
   </div>
   
</div>
<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      </div> 
      <b>
        <a href="/write-code/concepts/overview">Concepts</a>
      </b>
      <div className="containerDescription">
         Explanation of the Appsmith framework
      </div>
   </div>

   <div className=" columnGrid column-two"/>
   
</div>
