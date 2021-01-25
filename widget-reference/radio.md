---
description: >-
  Radio widget lets the user choose only one option from a predefined set of
  options. It is quite similar to a SingleSelect Dropdown in its functionality.
---

# Radio

![](../.gitbook/assets/radio.gif)

## Displaying Data

A Radio Button's **options** can be populated from a data source like an API / Query by connecting the data to the options field. Begin by converting the options to a JS field by clicking the JS icon. The options field requires an array of \(label, value\) so you may need to transform your data. The transformation can be performed using javascript so if the data is an array, we can transform it using the [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map) function.

```javascript
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => { 
      return { label: row.name, value: row.id } 
   }) 
}}
```

| Property | Description |
| :--- | :--- |
| **Label** | Sets the label of the RadioGroup. |
| **Options** | Lets you set labels and values for different options in the options list of the Radio widget. |
| **Default Selected Value** | Sets a default value that will be captured as user input unless it is changed by the user. |
| **Required** | When turned on, it makes a user input required and disables any form submission until an input is made. |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published  |

| Action | Description |
| :--- | :--- |
| **onSelectionChange** | Sets the action to be run when a user changes a selected option. Default supported actions are: Call API, Navigate to Page, Navigate to URL, or Show Alert. |

