---
description: >-
  ‌Dropdown is used to capture user input/s from a specified list of permitted
  inputs. A Dropdown can capture a single choice as well as multiple choices
---

# Dropdown

## Filtering Data

A Dropdown can be used to filter a dataset based on users input. The selected option value can be passed to an API using**`{{ dropdownName.selectedOptionValue }}`** for Single Select Dropdowns and **`{{ dropdownName.selectedOptionValueArr }}`** for Multi-Select Dropdowns.

## **Form Submission**

Dropdown widgets can be used to capture from a fixed set of options inside a form such as gender, role, status. 

{% hint style="success" %}
Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this
{% endhint %}

```text
{{ Table1.selectedRow.gender }}
/**
* Binding this to the default option will update the selected option 
* of the dropdown with the gender of the selected row in Table1
*/
```

Read more about submitting Input data to an API below

[Sending widget data in post body](../core-concepts/apis/taking-inputs-from-widgets.md#passing-inputs-to-the-post-body)

## Properties

| Internal Property | Description |
| :--- | :--- |
| **selectedOptionValue** | This is the value of the option that is displayed in a Single Select dropdown. This value changes if the default value of the dropdown changes or the user selects an option |
| **selectedOptionValueArr** | This is an array of values of the options that are displayed in a Multi-Select dropdown. This value changes if the default values of the dropdown change or the user changes an option selection |

| Property | Description |
| :--- | :--- |
| **Label** | Sets the label of the dropdown. |
| **Selection Type** | Lets you control whether you want the dropdown to be a Single Select or a Multi-Select dropdown. Single Select allows users to choose only one value from the list of options whereas Multi-Select allows for selection of more than one value by the user. |
| **Options** | Lets you set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. |
| **Default Option** | Sets a default option that will be captured as user input unless it is changed by the user. Multiple values can be provided as CSV or an array of value string for a Multi-Select dropdown. |
| **Required** | When turned on, it makes a user input required and disables any form submission until an input is made.  |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published  |

| Action | Description |
| :--- | :--- |
| **onOptionChange** | Sets the action to be run when a user changes an option. Default supported actions are: Call API, Navigate to Page, Navigate to URL or Show Alert. |

