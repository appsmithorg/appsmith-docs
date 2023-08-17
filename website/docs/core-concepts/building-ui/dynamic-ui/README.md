---
description: >-
  Widgets are the UI building blocks of Appsmith. Widgets empower you to
  visualise, capture and organise data with simple configuration and zero
  HTML/CSS.
---

# Update Widget Properties

This document presumes you understand the basics of [Displaying Data](/core-concepts/building-ui/dynamic-ui#transform-data) & [Capturing Data](/core-concepts/building-ui/dynamic-ui#transform-data) and expands on the concept of building dynamic UI that reacts to user inputs and system data

<VideoEmbed host="youtube" videoId="vlx8TEuep5I" title="Dynamically Update Widget properties" caption="Dynamically Update Widget properties"/>

## Dynamic properties

Every property of a widget can be described dynamically using JavaScript inside handlebars `{{}}`. The properties which don't have an input to write JavaScript can be made dynamic by clicking the JS button next to them. This transforms the property into an input field that can be used to write code.


## Updating widget data

You want to display a list of products in a [Table](/reference/widgets/table#table-data). When a user selects a product in the table, you may want to update the product information in a form so that the user can update the product.

![Click to expand](</img/table_form.gif>)

In order to achieve this, you can populate the default values of each of the Form's widgets with the corresponding value selected in the table. You can reference the [Tables](/reference/widgets/table#binding-properties) [`selectedRows`](/reference/widgets/table#selectedrows) property using its name inside the **`{{ }}`**

Get Product Name Input (Default Text property)

```javascript
{{ Table1.selectedRow.productName }}
```

Get MRP Input (Default Text property)

```javascript
{{ Table1.selectedRow.mrp }}
```

Get Category Dropdown (Default Option property)

```javascript
{{ Table1.selectedRow.category }}
```

Here Table1 is the name of the widget

![Click to expand](</img/form_-_table.gif>)

## Setting widget height
You can set the height of widget using the Height property. It configures how a widget’s height reacts to content changes in the app. To build a dynamic UI, you can use the Auto Height, that gives the widget a capability to change height in response to content changes. Auto height saves you from the task of defining the height of the widget manually. For more information, see the [Auto height](/reference/widgets/#auto-height) property of widgets. 

## Dynamic forms

Some cases require form fields to dynamically change based on the user input. This can be achieved using a [Tab](/reference/widgets/tabs) widget inside the form and conditionally updating the selected tab value based on the inputs of the [form](/reference/widgets/form)

![](</img/dynamic_forms.gif>)

:::tip
Hide the tabs in the tab widget to make it look like the views are changing in place.
:::

## Transform data

Each widget property has a specific data type that it validates its value against. If the data type mismatches, it throws an error. You can use JavaScript to transform the data when binding it to a property. For example, consider a query that returns an array of objects, as shown below:    

**Example Query Data**

```javascript
[
  {
    "id": 1,
    "name": "test",
    "status": "APPROVED",
    "gender": "",
    "avatar": "https://robohash.org/sednecessitatibuset.png?size=100x100&set=set1",
    "email": "barty.crouch@gmail.com",
    "address": "St Petersberg #911 4th main",
    "createdAt": "2020-03-16T18:00:05.000Z",
    "updatedAt": "2020-08-12T17:29:31.980Z"
  },
  {
    "id": 2,
    "name": "Jenelle Kibbys",
    "status": "APPROVED",
    "gender": "Female",
    "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",
    "email": "jkibby1@hp.com",
    "address": "85 Tennessee Plaza",
    "createdAt": "2019-10-04T03:22:23.000Z",
    "updatedAt": "2019-09-11T20:18:38.000Z"
  },
  {
    "id": 3,
    "name": "Demetre",
    "status": "APPROVED",
    "gender": "Male",
    "avatar": "https://robohash.org/iustooptiocum.jpg?size=100x100&set=set1",
    "email": "aaaa@bbb.com",
    "address": "262 Saint Paul Park",
    "createdAt": "2020-05-01T17:30:50.000Z",
    "updatedAt": "2019-10-08T14:55:53.000Z"
  }
]
```

Suppose you want to display this data in a [Select](/reference/widgets/select.md) widget. A Select widget only accepts data as an Array in the `{ "label": "string", "value": "string" }` format in its **Options** property, so you must transform the data from the query to pass it in the required structure.

The following example iterates over the query data and returns it in an `Array<label, value>` format:

```javascript
{{
  QueryName.data.map((row) => {
      return { label: row.name, value: row.id };
  });
}}
```

## Update widgets programmatically

When working with [widgets](/reference/widgets) in Appsmith, you may need to update values in the widget properties dynamically. Appsmith follows the **reactive programming paradigm**. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data with each other. When a value is updated, any widgets that depend on that changed value also update automatically.

**Example 1:** suppose you have two Input widgets named `Input1` and `Input 2`. To update `Input2` with the value entered in `Input1`, add the following code in the `Default Value` property of Input2.

```javascript
{{Input1.text}}
```

Enter a value in `Input1` and see how the value updates in `Input2`.

**Example 2:** suppose you have two input widgets and one button widget named `Input1`, `Input2`, and `Button1`, respectively. This example shows how to update `Input2` with the value in `Input1` on the button click. Here, the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function is used.

Paste the following code in the `onClick` event of `Button1`. 

```javascript
{{storeValue('inputData',Input1.text)}}
```
Paste the following code in the `Default Value` property of Input2.
```javascript
{{appsmith.store.inputData}}
```
Enter a value in `Input1`. On button click, the value updates in `Input2`.
