---
description: >-
  ‌Select / Dropdown widget is used to capture user input/s from a specified
  list of permitted inputs.
---

# Dropdown

{% embed url="https://youtu.be/jnCU9MS2uoY" caption="" %}

## Displaying Data

A Dropdown's **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of \(label, value\). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map) function.

```javascript
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => { 
      return { label: row.name, value: row.id } 
   }) 
}}
```

## Filtering Data

A Dropdown can be used to filter a dataset based on the user's input. The selected value can be passed to an API using\*\*`{{ dropdownName.selectedOptionValue }}` .

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

Read more about submitting Input data to an API below.

[Sending widget data in post body](dropdown-1.md)

## Properties

| Internal Property | Description |
| :--- | :--- |
| **selectedOptionValue** | This is the value of the option that is displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option |
| **filterText** | The filter text for Server side filtering |

| Property | Description |
| :--- | :--- |
| **Placeholder** | Sets the Placeholder of the dropdown widget. |
| **Options** | Lets you set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. |
| **Default Option** | Sets a default option that will be captured as user input unless it is changed by the user. |
| **Required** | When turned on, it makes a user input mandatory and disables any form submission until an input is made. |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Disabled** | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed. |
| **Server Side Filtering** | Enables server side filtering of the  via an API / Query request. Use this property when your Select option data is being bound to an API / Query. |

| Action | Description |
| :--- | :--- |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
| **onFilterUpdate** | Trigger an action on change of `filterText`. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

