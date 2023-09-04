---
description: This page shows you how to dynamically update widget property using queries, JavaScript functions, and setter methods
---

# Update Widget Properties

This page shows you how to dynamically update widget property using queries, JavaScript functions, and setter methods


<VideoEmbed host="youtube" videoId="vlx8TEuep5I" title="Dynamically Update Widget properties" caption="Dynamically Update Widget properties"/>



## Prerequisites

A basic understanding of how Appsmith's [query](/connect-data/how-to-guides/query-data) and [JS functions](/core-concepts/writing-code) work. 


## Bind data from a query

This method allows you to dynamically update widget data when the datasource is updated, providing real-time, synchronized information. Follow these steps to bind data from a database or API directly into your widget: 

<dd>

*PostgreSQL & Table Example:* Suppose you have a users data that you want to display in a Table widget. You can achieve this by binding the response from a query to the widget's data property. 

1. Create a query to fetch data from the datasource, like:

```sql
SELECT * FROM public."users" LIMIT 10;
```

2. Display the data by binding the query response. For the Table widget, add the following code to the **Table data** property:

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

Similarly, you can connect widgets with queries for different datasources.

</dd>

## Bind data from JS Objects

This method allows you to dynamically connect your data using [JavaScript Objects](/core-concepts/writing-code/javascript-editor-beta).

<dd>

*Custom Chart Example:* suppose you have a JavaScript object containing [custom chart](reference/widgets/chart#custom-fusion-chart-arrayobject) data that you would like to present this data in a Chart widget.

1. Create a New JS Object from the *queries/JS* section, and add the required code. For a custom chart, add:



```js
export default {
	chartdata: {
  "type": "column2d",
  "dataSource": {
    "chart": {
      "caption": "Monthly Revenue for the year 2023",
      "xAxisName": "Month",
      "yAxisName": "Revenue",
      "theme": "fusion"
    },
    "data": [
      {
        "label": "Jan",
        "value": 42000
      },
      {
        "label": "Feb",
        "value": 810000
      },
      {
        "label": "Mar",
        "value": 72000
      }
        // Add more as needed
    ]
  }
}
}
```

Additionally, you can also bind data from queries directly into JavaScript objects for dynamic data integration.


2. In the Chart widget, select `Custom Chart` as the **Chart type**, and in the **Custom Fusion Chart** property, add the following code to bind the properties of the JS Objects:

```js
{{JSObject1.chartdata}}
```

By following similar steps, you can create a JavaScript object, define variables and functions within it, and bind their values to widgets. 

</dd>

## Bind data between widgets

When working with widgets in Appsmith, you may need to update values in the widget properties dynamically. Appsmith follows the reactive programming paradigm. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data. When a value is updated, any widgets that depend on that changed value also update automatically.

<dd>


*Table Example:* suppose you have a Table widget connected to a query. Whenever a user selects a row in the Table, you want to display specific data in a Text widget based on user selections. 


Add the following code to the Text widget's **Text** property:

```js
//To display the email field when the user selects a row in the Table widget, use:
{{Table1.selectedRow.email}}

//To display the email field when the user selects an item in the List widget, use:
{{List1.selectedItem.email}}
```

Similarly, you can connect values from other widgets using the Mustache syntax `{}` and reference properties.

</dd>

## Bind data using framework functions

This method allows you to bind data using Appsmith [framework functions](/reference/appsmith-framework/widget-actions).

<dd>

*Example:* suppose you want to save the text of an Input widget, you can do so by using `storeValue()`. 

1. In the [**onTextChanged**](/reference/widgets/input#ontextchanged) event of the Input widget, enable JS and add the following code: 


```js
{{storeValue('inputData', Input1.text);}}
```

2. Drag the Text widget and add the following code to the **Text** property to display the saved text:

```js
{{appsmith.store.inputData}}
```

</dd>

Similarly, you can use different functions to perform actions like page navigation, displaying alerts, managing modals, and storing data in local storage.

You can also use `{{appsmith.user.email}}` to display the email address of the current user.



## Update widgets programmatically

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.

<dd>

*Example:* suppose you want to create an online booking prompt using a Select widget. If the user selects `Yes`, it displays a Form for booking details, and if they choose `No`, you can provide a message or alternative action.

 <figure>
  <img src="/img/setter-1.gif" style= {{width:"700px", height:"auto"}} alt="online booking prompt "/>
  <figcaption align = "center"><i>Booking prompt using setter methods</i></figcaption>
</figure>

1. To display the options, add the following code into the [**Source data**](/reference/widgets/select#source-data-arrayobject) property of the Select widget.

<dd>

```js
[
  {
    "name": "Yes",
    "code": "yes"
  },
  {
    "name": "No",
    "code": "no"
  }
]
```
</dd>

2. Create a new JS object and write the function to set the values of different widgets, like setting the visibility of a Form widget to true:

<dd>

```js
export default {
	myFun1 () {
    if (Select1.selectedOptionValue === 'yes') {
      Form1.setVisibility(true);
    } else {
      // Add alternative actions when 'No' is selected
    }
},...
```

</dd>

3. Set the Select widget's [**onOptionChange**](/reference/widgets/select#onoptionchange) event to execute the JS function.

Similarly, you can use various setter methods to programmatically update data, color, visibility, and other properties.




</dd>