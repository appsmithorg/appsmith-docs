# Pass Parameters


This page guides you on how to pass parameters between modules and your Appsmith application.


## From App to Modules

To pass parameters from your Appsmith application to modules, follow these instructions:

### App to Query Module

You can use the **Inputs** property to pass real-time data from your Appsmith application to Query modules.


To read the data and update the query, create **Inputs** from the right-sidebar in the query module. These inputs allow you to pass dynamic data and update the query based on the inputs.

<dd>

*Example*: If you want to add limit and offset as inputs, create two inputs:

* `limit`, with a default value of `5`
* `offset`, with a default value of `4`

If dynamic values are not passed, the default value will be used. Update the query by using `inputs` property for dynamic updates:

```sql
SELECT * FROM public."product" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```

<ZoomImage
  src="/img/query-inputs.png" 
  alt="Inputs image"
  caption="Package"
/>

</dd>

To pass data from the app, add the query module in the App, and in the query editor, update the **Input** property based on dynamic data. 

<dd>

*Example*: If you want to pass data from a Table widget, use the following configuration to dynamically set the values:


* Limit: `{{Table1.pageSize}}`
* Offset: `{{Table1.pageOffset}}`

<ZoomImage
  src="/img/app-to-query.png" 
  alt="Inputs image"
  caption="App"
/>

</dd>

### App to JS Module

You can use the inputs property to pass data or directly pass data inside a function in the JS module. 

To read the parameter, create a function with parameters that can be accessed when the function is called.

<dd>

*Example:* 

```js
export default {
  myFunction: (param1, param2) => {
    console.log("Parameter 1: ", param1);
    console.log("Parameter 2: ", param2);
    // Perform operations using param1 and param2
  }
}
```

</dd>

To pass data from the app to JS modules, you can use either:

1. Inputs property in the JS editor
2. Directly pass data when the JS module function is called

Example of directly passing data when calling the function:

```js
myFunction({{Table1.selectedRow.id}}, {{Input1.text}});
```