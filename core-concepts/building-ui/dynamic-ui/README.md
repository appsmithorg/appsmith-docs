---
description: >-
  Widgets are the UI building blocks of Appsmith. Widgets empower you to
  visualise, capture and organise data with simple configuration and zero
  HTML/CSS.
---

# Building Dynamic UI

This document presumes you understand the basics of [Displaying Data](../../data-access-and-binding/displaying-data-read/) & [Capturing Data](../../data-access-and-binding/capturing-data-write/) and expands on the concept of building dynamic UI that reacts to user inputs and system data

{% embed url="https://youtu.be/vlx8TEuep5I" %}

## Dynamic Properties

Every property of a widget can be described dynamically using javascript inside handlebars `{{}}` . The properties which do not have an input to write javascript can be made dynamic by clicking the JS button next to them. This transforms the property into an input field that can be used to write code.

![](<../../../.gitbook/assets/convert js.gif>)

## Updating Widget Data

Let us take an example of a [table displaying ](../../../reference/widgets/table.md#table-data)a list of products. When a user selects a product in the table, we may want to update the product information in a form so that the user can update the product.

![Click to expand](<../../../.gitbook/assets/table form.gif>)

In order to achieve this, we can populate the default values of each of the Form's widgets with the corresponding value selected in the table. We can reference the [Tables](../../../reference/widgets/table.md#binding-properties) [`selectedRow`](../../../reference/widgets/table.md#selectedrows) property using its name inside the **`{{ }}`**

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

![Click to expand](<../../../.gitbook/assets/form - table.gif>)
