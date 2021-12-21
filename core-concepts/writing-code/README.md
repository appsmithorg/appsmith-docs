---
description: >-
  Every widget, API & query is exposed as an object which can be used to write
  logic
---

# Writing Code

JavaScript can be used inside `{{ }}` anywhere in Appsmith. Every entity in Appsmith can be referenced as a JavaScript variable and all JavaScript functions and operations can be performed on them. This means that all Widgets, APIs, Queries, and their associated data and properties can be referenced anywhere in an application inside handlebars `{{ }}`.

Appsmith currently supports two forms of JavaScript code for dynamically evaluated property values:

1. Single line code or functions, such as ternary conditions

```javascript
{{ QueryName.data.filter((row) => row.id > 5 ) }}
```

1. Immediately Invoked Function Expressions [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

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

## Reactive

Appsmith is [Reactive](https://en.wikipedia.org/wiki/Reactive\_programming) so code in Appsmith is declarative in nature and describes the eventual states of a property.

In order to update the property of a widget, unlike in imperative programming where a programmer would write a statement as

```javascript
// Imperative Style incompatible with appsmith
if (Dropdown1.selectedOption === "John")
    nameInput.setText("John Doe");
```

In Appsmith, programmers declare the states of the text property in the property pane as below and the properties of the widget are updated reactively whenever the values of Dropdown1 change

```javascript
{{ Dropdown1.selectedOption === "John" ? "John Doe" : "" }}
```

## Single Line JavaScript

This means that widgets are automatically updated whenever their underlying data changes or an API / Query returns with data.

Appsmith primarily supports writing single line javascript between `{{ }}` because the value of the JavaScript expression is substituted in the field. This requires us to chain multiple operations in a single line to achieve a result.

### Valid JavaScript

Following are valid examples of JavaScript for property values.

```javascript
{{ QueryName.data.filter((row) => row.id > 5 ) }}
```

```javascript
{{ Dropdown.selectedOptionValue === "1" ? "Option 1" : "Option 2" }}
```

**Invalid JavaScript**

Following are invalid examples of JavaScript for property values. Here we should be using Immediately Invoked Function Expressions [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

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

Appsmith does support multi-line JS if it is [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE). The above invalid examples become valid if used as below.

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

{% hint style="warning" %}
**Writing comments inside :**

Note that you can write comments inside using JavaScript's multi-line comment syntax `/* */`, but single line comments `//` are not supported inside .
{% endhint %}
