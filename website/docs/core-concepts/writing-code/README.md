---
description: >-
  Learn how to write custom code with Appsmith. The guide covers a variety of programming languages, including JavaScript and SQL, and provides examples and best practices to help you get started.

toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Writing Code
Appsmith puts a strong emphasis on writing clean, efficient code to ensure user-friendly, intuitive application building. The JavaScript code editor and debugging tools are designed to help users write code that's easy to read and understand, allowing for smoother collaboration and creating reliable, high-performing applications. 

Appsmith also provides the ability to incorporate external libraries into your projects, helping you expand the capabilities of your applications.

## Coding in JavaScript
In Appsmith, you can use JavaScript inside mustache syntax `{{ }}` to reference entities such as widgets, queries, JS Objects, and their associated data, properties, and functions, as a JavaScript variable and perform operations on them. This allows for a high degree of flexibility and customization, as you can manipulate and transform the data and build powerful applications.

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

Sometimes, to achieve a desired outcome, you may have to perform multiple operations one after the other. This could involve chaining methods together, ternary expressions and others. For example: `{{updateData.run(() => {getData.run(), closeModal('ModalName')}, () => {})}}`

However, when your expression becomes convoluted and hard to fit in a single line, it's a good idea to consider [Multi-line JavaScript](#multi-line-javascript) or writing a [helper function in a JS Object](/core-concepts/writing-code/javascript-editor-beta#js-object).

#### Multi-line JavaScript
Appsmith supports multi-line JavaScript using [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE). This allows you to manage complex code organization and improve code readability. 

Multi-line JavaScript code isn't supported within the mustache syntax `{{ }}`. The examples shown below are considered invalid:

```javascript title="Invalid"
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

```javascript title="Valid"
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

It's important to keep in mind that, when using JavaScript inside mustache syntax `{{ }}` the code is written in a way that's accurate, efficient, readable, and well-organized to make it easier to understand and maintain. 

#### JS Objects
JS Objects are used to create custom logic in Appsmith. They can be used to manipulate data, handle events, and perform advanced operations. You can create JS Objects by using the JavaScript Editor. It allows you to write complex code and use it throughout your application. For more information, see [JS Objects](/core-concepts/writing-code/javascript-editor-beta).

## JavaScript editor
The Appsmith JavaScript editor is a powerful tool that empowers you to write, test, and debug your JavaScript code directly within the platform. It enables you to create a reusable set of JavaScript functions, and comes equipped with several useful features such as syntax highlighting, code completion, and error highlighting, making it easy for you to write and debug your code, and helps in writing complex code with ease.

<VideoEmbed host="youtube" videoId="tpbY5Jti9d4" title="How to build with JavaScript Editor" caption="How to build with JavaScript Editor" />

The code editor also includes a built-in response, errors, and logs tabs that helps users to see the results of their code. For more information, see [Working with JavaScript editor](core-concepts/writing-code/javascript-editor-beta#working-with-javascript-editor).

The Appsmith JavaScript Editor offers a variety of [built-in JavaScript libraries](/core-concepts/writing-code/ext-libraries#javascript-library-reference) that you can integrate into your code, enabling you to effortlessly add advanced functionalities to your applications without having to start from scratch. Furthermore, you can import external libraries and utilize them in your code. For more information, see [built-in and custom libraries](/core-concepts/writing-code/ext-libraries).


<!-- First row for JS OBjects and Creating workflows -->
<div class="containerGridSampleApp">
    <div class="containerColumnSampleApp columnGrid column-one">
        <div class="containerCol">
        <a href="/core-concepts/writing-code/workflows">
        <strong >Creating Workflows </strong></a>
        </div> <hr/>
        <div class="containerDescription">
        Manipulate data by performing actions like adding, updating, deleting, and retrieving data.
        </div>
        <div class="containerTutorialLink"></div>
    </div>
    <div class="containerColumnSampleApp columnGrid column-two">
        <div class="containerCol">
           <a href="/core-concepts/writing-code/javascript-editor-beta">
        <strong >JavaScript Promises </strong></a>
        </div><hr/>
        <div class="containerDescription">
        Simplify integration within your asynchronous processes.
    </div>
    </div>
</div>

<!-- Second row for External Library and JavaScript Promises -->

<div class="containerGridSampleApp">
    <div class="containerColumnSampleApp columnGrid column-one">
        <div class="containerCol">
        <a href="/core-concepts/writing-code/ext-libraries">
        <strong >External Libraries </strong></a>
        </div> <hr/>
        <div class="containerDescription">
        Extend the capabilities of your application by building complex business logic.
      </div>
        <div class="containerTutorialLink"></div>
    </div>
    <div class="containerColumnSampleApp columnGrid column-two">
        <div class="containerCol">
           <a href="/reference/appsmith-framework">
        <strong >Appsmith Framework Functions</strong></a>   
        </div><hr/>
        <div class="containerDescription">

Provides a range of utility functions for **[storing values](/reference/appsmith-framework/widget-actions/store-value)** in the local storage, as well as **[triggering actions](/reference/appsmith-framework/widget-actions)** in response to user inputs.     
</div>
    </div>
</div>

<div>
</div>
