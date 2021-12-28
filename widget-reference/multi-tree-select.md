# Multi-tree-select

The multi-tree-select widget captures the user input from a specified list of permitted options, and these options can have child options within them. It captures multiple choices.

{% embed url="https://youtu.be/XaaFY0grXjE" %}

### Displaying Data

Multi-tree-select's options can be populated from a data source like an API / Query by transforming the incoming data to an array of \\(label, value\\). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => {
      return { label: row.name, value: row.id, children: {label: row.child.label, value: row.child.value}
   })
}}
```

### Filtering Data

A Multi-select widget can filter a dataset based on the user's input. The selected value can be passed to an API using `{{ MultiTreeSelect1.selectedOptionValues }}` .

### **Form Submission**

Multi-tree-select widget capture from a fixed set of options inside a form such as gender, role, status.

{% hint style="success" %}
Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this.
{% endhint %}

```
{{ Table1.selectedRow.categories }}
/**
* Binding this to the default option will update the selected options
* of the MultiTreeSelect widget with the gender of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in the post body](../core-concepts/capturing-data-write/capture-form-data.md)

### Properties

#### Widget Properties



| Property                  | Description                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Placeholder**           | Sets the Placeholder of the multi select widget.                                                                                                                                                                        |
| **Options**               | Lets you set labels and values for different items/options in the list of the multi select widget. Options must be specified as an array of objects with a label and value property and the optional children property. |
| **Default Option**        | Sets a default option that will be captured as user input unless it is changed by the user. Multiple values can be provided as CSV or an array of value string for a Multi-Select dropdown.                             |
| **Required**              | When turned on, it makes a user input required and disables any form submission until an input is made.                                                                                                                 |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                                                    |
| **Disabled**              | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.                                                                                        |
| **Animate Loading**       | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS to be shown until all the widgets are rendered.                  |
| **Clear all Selections**  | When turned on, it allows users to clear the selection which was default or the selection made by them.                                                                                                                 |
| **Expand all by default** | It shows a dropdown in an expanded state when turned on, revealing all the children options.                                                                                                                            |

#### Binding Properties



| Property                 | Description                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedOptionValues** | An array of values of the options that are displayed in a MultiTree-Select dropdown. This value changes if the default values of the dropdown change or the user changes an option selection. |
| **selectedOptionLabels** | An array of Labels of the options that are displayed in a MultiTree-Select dropdown. This label changes if the default values of the dropdown change or the user changes an option selection. |



| Action             | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
