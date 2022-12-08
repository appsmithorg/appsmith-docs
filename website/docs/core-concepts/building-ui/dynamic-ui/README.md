---
description: >-
  Widgets are the UI building blocks of Appsmith. Widgets empower you to
  visualise, capture and organise data with simple configuration and zero
  HTML/CSS.
---

# Building dynamic UI

This document presumes you understand the basics of [Displaying Data](/core-concepts/data-access-and-binding/displaying-data-read) & [Capturing Data](/core-concepts/data-access-and-binding/capturing-data-write) and expands on the concept of building dynamic UI that reacts to user inputs and system data

<VideoEmbed host="youtube" videoId="vlx8TEuep5I" title="Dynamically Update Widget Properties" caption="Dynamically Update Widget Properties"/>

## Dynamic Properties

Every property of a widget can be described dynamically using JavaScript inside handlebars `{{}}` . The properties which don't have an input to write JavaScript can be made dynamic by clicking the JS button next to them. This transforms the property into an input field that can be used to write code.

![](</img/convert_js.gif>)

## Updating widget data

Let us take an example of a [table displaying](/reference/widgets/table#table-data) a list of products. When a user selects a product in the table, we may want to update the product information in a form so that the user can update the product.

![Click to expand](</img/table_form.gif>)

In order to achieve this, we can populate the default values of each of the Form's widgets with the corresponding value selected in the table. We can reference the [Tables](/reference/widgets/table#binding-properties) [`selectedRows`](/reference/widgets/table#selectedrows) property using its name inside the **`{{ }}`**

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
You can set the height of widget using the Height property. It configures how a widget’s height reacts to content changes in the app. To build a dynamic UI, you can use the Auto Height, that gives the widget a capability to change height in response to content changes. Auto height saves you from the task of defining the height of the widget manually. For more information, see the [Auto height](/reference/widgets/#auto-height) property of widgets . 
