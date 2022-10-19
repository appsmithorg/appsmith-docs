---
description: >-
  Widgets are the UI building blocks of Appsmith. Widgets empower you to
  visualise, capture and organise data with simple configuration and zero
  HTML/CSS.
---

# Building Dynamic UI

This document presumes you understand the basics of [Displaying Data](../../data-access-and-binding/displaying-data-read/) & [Capturing Data](../../data-access-and-binding/capturing-data-write/) and expands on the concept of building dynamic UI that reacts to user inputs and system data

<figure>
 <object data="https://www.youtube.com/embed/vlx8TEuep5I?autoplay=0" width='750px' height='400px'></object>
 <figcaption align="center"><i>Dynamically Update Widget Properties</i></figcaption>
</figure>

## Dynamic Properties

Every property of a widget can be described dynamically using javascript inside handlebars `{{}}` . The properties which do not have an input to write javascript can be made dynamic by clicking the JS button next to them. This transforms the property into an input field that can be used to write code.

![](</img/convert_js.gif>)

## Updating Widget Data

Let us take an example of a [table displaying ](../../../reference/widgets/table/#table-data)a list of products. When a user selects a product in the table, we may want to update the product information in a form so that the user can update the product.

![Click to expand](</img/table_form.gif>)

In order to achieve this, we can populate the default values of each of the Form's widgets with the corresponding value selected in the table. We can reference the [Tables](../../../reference/widgets/table/#binding-properties) [`selectedRow`](../../../reference/widgets/table/#selectedrows) property using its name inside the **`{{ }}`**

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
