---
description: >-
  Every widget, API & query is exposed as an object which can be used to write
  logic
---

# Writing Code

JavaScript can be used inside `{{ }}` anywhere in Appsmith. Every entity in Appsmith can be referenced as a JavaScript variable and all JavaScript functions and operations can be performed on them. This means that all Widgets, APIs, Queries, and their associated data and properties can be referenced anywhere in an application inside handlebars `{{ }}`.

## Reactive

Appsmith is [Reactive](https://en.wikipedia.org/wiki/Reactive_programming) so code in Appsmith is declarative in nature and describes the eventual states of a property. 

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

## Single Line JS

Appsmith primarily supports writing single line javascript between `{{ }}` because the value of the javascript expression is substituted in the field. This requires us to chain multiple operations in a single line to achieve a result.

#### Valid JS

```text
{{ QueryName.data.map((row) => row).filter((row) => row.id > 5 ) }}
```

```text
{{ Dropdown.selectedOptionValue === "1" ? "Option 1" : "Option 2" }}
```

**Invalid JS**

```text
{{ const array = QueryName.data.map((row) => row);
   const filterArray = array.filter((row) => row.id > 5);
   return filterArray;
}}
```

```text
{{ if (Dropdown.selectedOptionValue === "1") {
        return "Option 1";
    } else {
      return "Option 2";
    }
  }}
```

## Multi-Line JS

Appsmith does support multi-line JS if wrapped inside a function. The above invalid examples are valid if used as below

```javascript
{{ function() {
      const array = QueryName.data.map((row) => row);
      const filterArray = array.filter((row) => row.id > 5);
      return filterArray;
   }()
}}
```

```javascript
{{ function() {
      if (Dropdown.selectedOptionValue === "1") {
        return "Option 1";
      } else {
        return "Option 2";
      }
   }()
}}
```

