---
description: >-
  When a widget property changes, all widgets that are connected to the property
  are automatically updated by Appsmith.
---

# Talking to other Widgets

## Updating another widget's properties

Let us take an example of a table displaying a list of products. When a user selects a product in the table, we may want to update the product information in a form so that the user can update the product.

![Click to expand](../../.gitbook/assets/table-form.gif)

In order to achieve this, we can connect the data in the table to the properties of each of the widgets in the form. We can references the Tables selectedRow property inside the Input and Dropdown widgets to connect them to the Table data. We can reference the table using its name inside the **`{{ }}`**

```text
{{ Table1.selectedRow.productName }} // Default Text property
{{ Table1.selectedRow.mrp }} // Default Text property
{{ Table1.selectedRow.category }} // Default Option property

// Table1 is the name of the widget
```

![Click to expand](../../.gitbook/assets/form-table.gif)

