---
description: >-
  Learn how to write custom code with Appsmith. The guide covers a variety of programming languages, including JavaScript and SQL, and provides examples and best practices to help you get started.

toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Writing Code
Appsmith puts a strong emphasis on writing clean, efficient code to ensure user-friendly, intuitive application building. The JavaScript code editor and debugging tools are designed to help users write code that's easy to read and understand, allowing for smoother collaboration and creating reliable, high-performing applications. 

Appsmith also provides the ability to incorporate external libraries and APIs into your projects, helping you expand the capabilities of your applications.

## Coding in JavaScript
In Appsmith, you can use JavaScript inside mustache syntax `{{ }}` to reference entities such as widgets, queries, and their associated data and properties, as a JavaScript variable and perform operations on them. This allows for a high degree of flexibility and customization, as you can manipulate and transform the data and build powerful applications.

Appsmith currently supports the following forms of JavaScript for dynamically evaluated property values:

#### Single line JavaScript
Appsmith supports writing single-line JavaScript  within mustache syntax `{{ }}`. Any code written between the brackets is interpreted as a JavaScript expression and its output is assigned as the value of the corresponding property.

You can use single-line code or functions, such as ternary conditions, as shown in the example below:

```javascript
/*Trigger a Query*/
{{ QueryName.data.filter((row) => row.id > 5 ) }}

/*A terneary condition*/
{{SelectWidgetName.selectedOptionValue === "1" ? "Option 1" : "Option 2" }} 
```

Sometimes, to achieve a desired outcome, you may have to perform multiple operations one after the other. This could involve chaining methods together, ternary expressions and others. For example: `{{ QueryName.data.filter((row) => row.id > 5 ) }}` or `{{ Dropdown.selectedOptionValue === "1" ? "Option 1" : "Option 2" }}`.  

However, when your expression becomes convoluted and hard to fit in a single line, it's a good idea to consider [Multi-line JavaScript](#multi-line-javascript) or writing a [helper function in a JS Object](/core-concepts/writing-code/javascript-editor-beta#js-object).

#### Multi-line JavaScript
Appsmith supports multi-line JavaScript using [Immediately Invoked Function Expression (IIFE)]((https://developer.mozilla.org/en-US/docs/Glossary/IIFE). This allows you to manage complex code organization and improve code readability. 


You **can't** write multi-line JavaScript directly within the mustache sign (`{{ }}`). The examples shown below are considered invalid:

```javascript
/*Call a query to fetch the results and manipulate it's data*/
{{ 
   const array = QueryName.data;
   const filterArray = array.filter((row) => row.id > 5);
   return filterArray;
}}

/* Verify the selected option and then perform operation on it*/
{{ 
  if (Dropdown.selectedOptionValue === "1") {
      return "Option 1";
  } else {
      return "Option 2";
  }
}}
```

For example, you want to write JavaScript code for events listeners which can contain multiple lines of code. An example of this is provided below:

```javascript
/* Call a query and then manipulate its result */
{{ 
  (function() {
      const array = QueryName.data;
      const filterArray = array.filter((row) => row.id > 5);
      return filterArray;
   })()
}}

/* Verify the selected option and then perform operation on it*/

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

It's important to keep in mind that, when using JavaScript inside mustache syntax (`{{ }}`) the code is written in a way that's accurate, efficient, readable, and well-organized to make it easier to understand and maintain. 

### JavaScript editor
The Appsmith JavaScript editor is a powerful tool that empowers you to write, test, and debug your JavaScript code directly within the platform. It enables you to create a reusable set of JavaScript functions, and comes equipped with several useful features such as syntax highlighting, code completion, and error highlighting, making it easy for you to write and debug your code, and helps in writing complex code with ease.

<VideoEmbed host="youtube" videoId="tpbY5Jti9d4" title="How to build with JavaScript Editor" caption="How to build with JavaScript Editor" />

The code editor also includes a built-in response, errors, and logs tabs that helps users to see the results of their code. For more information, see [Working with JavaScript editor](core-concepts/writing-code/javascript-editor-beta#working-with-javascript-editor).

The Appsmith JavaScript Editor offers a variety of [built-in JavaScript libraries](/core-concepts/writing-code/ext-libraries#javascript-library-reference) that you can integrate into your code, enabling you to effortlessly add advanced functionalities to your applications without having to start from scratch. Furthermore, you can import external libraries and utilize them in your code. For more information, see [built-in and custom libraries](/core-concepts/writing-code/ext-libraries).


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
