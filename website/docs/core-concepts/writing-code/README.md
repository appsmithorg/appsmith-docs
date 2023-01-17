---
description: >-
  Learn how to write custom code with Appsmith. The guide covers a variety of programming languages, including JavaScript and SQL, and provides examples and best practices to help you get started.

toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Writing Code
Appsmith puts a strong emphasis on writing clean, efficient code to ensure user-friendly, intuitive application building. The JavaScript code editor and debugging tools are designed to help users write code that's easy to read and understand, allowing for smoother collaboration and the creation of reliable, high-performing applications. These tools also aid in troubleshooting any issues that may arise, allowing users to build the best possible applications for their users. 

Appsmith also provides the ability to incorporate external libraries and APIs into your projects, helping you expand the capabilities of your applications.

## JavaScript editor
The Appsmith JavaScript editor is a powerful tool that allows users to write, test, and debug their JavaScript code directly within the platform. It includes features such as syntax highlighting, code completion, and error highlighting, making it easy for users to write and debug their code.

<VideoEmbed host="youtube" videoId="tpbY5Jti9d4" title="How to build with JavaScript Editor" caption="How to build with JavaScript Editor" />

The code editor also includes a built-in response, errors, and logs tabs that helps users to see the results of their code. For more information, see [Working with JavaScript editor](core-concepts/writing-code/javascript-editor-beta#working-with-javascript-editor).

The Appsmith JavaScript Editor also includes a number of [built-in JavaScript libraries](/core-concepts/writing-code/ext-libraries#javascript-library-reference) that users can incorporate into their code. This makes it easy for users to add advanced capabilities to their applications without having to write the code from scratch. It also enables you to import external libraries, and use them in your code. For more information, see [built-in and custom libraries](/core-concepts/writing-code/ext-libraries).

### Coding in JavaScript
In Appsmith, you can use JavaScript inside curly braces (`{{ }}`) to reference and manipulate all entities, such as Widgets, APIs, Queries, and their associated data and properties, within your application. This allows for a high degree of flexibility and customization, as you can execute any JavaScript function or operation on these entities.

:::tip
While you can use JavaScript's multi-line comment syntax, `/* /`, to write comments within the mustache brackets, single-line comments, `//`, aren't supported. This means that you can use `/ */` to write comments that span multiple lines, but `//` doesn't work. 
:::

Appsmith currently supports the following forms of JavaScript for dynamically evaluated property values:

#### Single line JavaScript
Single line code or functions, such as ternary conditions, can be used as shown in this example:

```javascript
{{ QueryName.data.filter((row) => row.id > 5 ) }}
```

Sometimes, to achieve a desired outcome, you may have to perform multiple operations one after the other. This could involve chaining methods together, ternary expressions and others. For example, `{{ QueryName.data.filter((row) => row.id > 5 ) }}` or `{{ Dropdown.selectedOptionValue === "1" ? "Option 1" : "Option 2" }}`.  However, in situations where your expression becomes convoluted and hard to fit in a single line, it's a good idea to consider breaking it down and encapsulating it within a [helper function in a JS Object](/core-concepts/writing-code/javascript-editor-beta#js-object).

#### Multi-line JavaScript
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

<!-- First row for JS OBjects and Creating workflows -->
<div class="containerGridSampleApp">
    <div class="containerColumnSampleApp columnGrid column-one">
        <div class="containerCol">
        <strong >JS Objects </strong>
        </div> <hr/>
        <div class="containerDescription">

* A powerful and versatile data structure.
* Create, manipulate, and work with JS Objects to build powerful and dynamic applications.
* A wide range of debugging tools like `console.log()` and `debugger` statements to identify and fix errors in your code. For more information, see 
<a href="/core-concepts/writing-code/javascript-editor-beta">
        <strong >JS Objects </strong></a>

</div>
        <div class="containerTutorialLink"></div>
    </div>
    <div class="containerColumnSampleApp columnGrid column-two">
        <div class="containerCol">
           <strong>Creating Workflows</strong>
        </div><hr/>
        <div class="containerDescription">

* An integral part of building your app.
* Manipulate data by performing actions like adding, updating, deleting, and retrieving data.
* Add and trigger actions by using a combination of JavaScript functions, APIs, and Queries. For more information, see 
<a href="/core-concepts/writing-code/workflows">
        <strong >Creating workflows </strong></a>

</div>
    </div>
</div>

<!-- Second row for External Library and JavaScript Promises -->

<div class="containerGridSampleApp">
    <div class="containerColumnSampleApp columnGrid column-one">
        <div class="containerCol">
        <strong >JavaScript Promises </strong>
        </div> <hr/>
        <div class="containerDescription">

* Simplify integration within your asynchronous processes.
* Appsmith's global functions utilize JavaScript promises for seamless implementation.
* Eliminate the need for explicit promise chain configuration by utilizing `async` and `await`. For more information, see 
<a href="/core-concepts/writing-code/javascript-editor-beta">
        <strong >JavaScript Promises </strong></a>

</div>
        <div class="containerTutorialLink"></div>
    </div>
    <div class="containerColumnSampleApp columnGrid column-two">
        <div class="containerCol">
           <strong>External Libraries</strong>
        </div><hr/>
        <div class="containerDescription">

* Extend the capabilities of your application by building complex business logic.
* Built-in JavaScript utility libraries like `lodash`, `moment`, `XML parser` and more.
* Use the libraries to work with data within `{{ }}` bindings or within JSObjects. For more information, see 
<a href="/core-concepts/writing-code/ext-libraries">
        <strong >External Libraries </strong></a>
        
</div>
    </div>
</div>

<div>
<div class="containerColumnSampleApp columnGrid column-one">
<div class="containerCol">
  <strong >Appsmith Framework Functions</strong>
</div> <hr/>
 <div class="containerDescription">

* Create dynamic, data-driven applications that respond to user interactions in real-time.
* Provides a range of utility functions for **[storing values](/reference/appsmith-framework/widget-actions/store-value)** in the local storage, as well as **[triggering actions](/reference/appsmith-framework/widget-actions)** in response to user inputs.
* Provides in-built global objects: **[Query object](/reference/appsmith-framework/query-object)** that enables developers to run database queries and share data between different pages by passing parameters, **[Context](/reference/appsmith-framework/context-object)** that provides information about the current state of the application, and more.  


 </div>
</div>
</div>
