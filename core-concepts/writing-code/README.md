---
description: >-
  Every widget, API & query is exposed as an object which can be used to write
  logic
---

# Writing Code

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

## Reactive

Appsmith is [Reactive](https://en.wikipedia.org/wiki/Reactive\_programming), not imperative, which means that code in Appsmith is declarative and describes the eventual state of a property.

To update the property of a widget, a programmer using an imperative style would normally write a statement like this:

```javascript
// This imperative Style **incompatible** with appsmith
if (Dropdown1.selectedOptionValue === "John") {
    nameInput.text = "John Doe"; // this does not work in Appsmith
}
```

Instead, we must write code in our widget's properties pane to define the property's value. To successfully set the nameInput widget's text value, we'll use the following snippet:

```javascript
// In the "Text" property field of the nameInput widget
{{ Dropdown1.selectedOptionValue === "John" ? "John Doe" : "" }}
```

This way, the properties of the nameInput widget are updated reactively any time the values of Dropdown1 change. When a user changes the Dropdown1 value, the nameInput widget's text will automatically update according to our expression.

In general, any given widget on the canvas is automatically updated whenever its underlying values change or an API / Query returns with new data.

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

{% hint style="warning" %}
**Writing comments inside :**

Note that you can write comments inside using JavaScript's multi-line comment syntax `/* */`, but single-line comments `//` are not supported inside.
{% endhint %}
