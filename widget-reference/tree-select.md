# Tree-select

A tree-select widget captures user inputs from a specified list of permitted options in which each option can then have child options associated with it.

{% embed url="https://youtu.be/vSqpSssJdws" %}

### Displaying Data

Tree-select options can be populated from a data source like an API / Query by transforming the incoming data to an array of \\(label, value\\). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => {
      return { label: row.name, value: row.id, children: {label: row.child.label, value: row.child.value}
   })
}}
```

### Filtering Data

A Tree-select widget can filter a dataset based on the user's input. The selected value can be passed to an API using`{{ TreeSelect1.selectedOptionValue }}` .

### **Form Submission**

Tree-select widgets can capture from a fixed set of options inside a form such as gender, role, status.

{% hint style="success" %}
Some forms need to be pre-filled data from a table or API. We can bind the data to the default property to enable this&#x20;
{% endhint %}

```
{{ Table1.selectedRow.gender }}
/**
* Binding this to the default option will update the selected option
* of the TreeSelect widget with the gender of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in the post body](../core-concepts/capturing-data-write/capture-form-data.md)

### Properties

#### Widget Properties

| Property                  | Description                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Placeholder**           | Sets the Placeholder of the multi-select widget.                                                                                                                                                                                                                                            |
| **Options**               | It lets you set labels and values for different items/options in the list of the tree select widget. Options must be specified as an array of objects with a label and value property. The tree structure can be added to any option by adding the children field that should be an object. |
| **Default Option**        | Sets a default option that will be captured as user input unless the user changes it.                                                                                                                                                                                                       |
| **Required**              | When turned on, it makes a user input required and disables any form submission until the user makes an input.                                                                                                                                                                              |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                                                                                                                         |
| **Disabled**              | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.                                                                                                                                                            |
| **Animate Loading**       | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered.                                                                                                  |
| **Clear all Selections**  | When turned on, it allows users to clear the selection, which was the default or the selection made by them.                                                                                                                                                                                |
| **Expand all by default** | It shows a dropdown in an expanded state when turned on, revealing all the children options.                                                                                                                                                                                                |

#### Binding Properties

| Property                | Description                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedOptionValue** | This is the value of the option displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option.                 |
| **selectedOptionLabel** | This is the Label of the option displayed in a Tree-Select dropdown. This label changes if the default value of the dropdown changes or the user changes an option selection. |

#### Events

| Event              | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
