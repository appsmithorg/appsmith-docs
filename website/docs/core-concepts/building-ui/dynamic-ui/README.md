---
description: >-
  Widgets are the UI building blocks of Appsmith. Widgets empower you to
  visualise, capture and organise data with simple configuration and zero
  HTML/CSS.
---

# Update Widget Properties

This page shows you how to dynamically update widget property using queries, JavaScript functions, and setter methods


<VideoEmbed host="youtube" videoId="vlx8TEuep5I" title="Dynamically Update Widget properties" caption="Dynamically Update Widget properties"/>



## Prerequisites

A basic understanding of how Appsmith's [query](/connect-data/how-to-guides/query-data) and [JS functions](/core-concepts/writing-code) work. 


## Update widgets dynamically


### Bind data from a query

<dd>

*Example:* You can display dynamic data by binding the response from a query to the widget data property. 

```js
{{fetchData.data}}
```

If the retrieved data is not in the desired format, you can use JavaScript to transform it before passing it to the widget, like:

```js
{{fetchData.data.users.map((user) => {
  return {
    name: user.name,
    email: user.email
    };
  });
}}
```

</dd>

### Bind data from JS

1. Create a New JS Object from queries/JS section, and add following code:

<dd>

*Example:*

```js
export default {
  data: [
    {
      id: 1,
      name: "John Doe",
      country: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      country: "Canada"
    },
    {
      id: 3,
      name: "Michael Johnson",
      country: "UK"
    }
    // Add additional objects here following the same structure
  ]
}
```
</dd>

2. In the Table widget's Table Data property ..

<dd>

```js
{{JSObject1.data}}
```

</dd>

### Bind data from another widget



## Update widgets programmatically

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.
