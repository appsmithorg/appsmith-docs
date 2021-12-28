# Switch Group

Switch group widget is used to capture user inputs from a set of binary choices. This widget captures multiple choices.

### Displaying Data

Switch group’s **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of \\(label, value\\). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => {
      return { label: row.name, value: row.id }
   })
}}
```

### Filtering Data

A Switch Group widget can show a set of binary choices for users. The selected values can be passed to an API using **** `{{ SwitchGroup1.selectedValues }}` .

### **Form Submission**

Switch group widgets can capture a fixed set of choices for the user like, showing and hiding or enabling and disabling

{% hint style="success" %} Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this {% endhint %}

```
{{Table1.selectedRow.subscription_choices}}
/**
* Binding this to the default option will update the selected choices
* of the Switch group widget with the subscription_choices of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in the post body](../core-concepts/capturing-data-write/capture-form-data.md)

### Properties

#### Widget Properties

| Property            | Description                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Placeholder**     | Sets the Placeholder of the multi-select widget.                                                                                                                                           |
| **Options**         | It lets you set labels and values for different items/options in the list of the Switch group widget. Options must be specified as an array of objects with a label and value property.    |
| **Default Option**  | Sets a default option that will be captured as user input unless it is changed by the user. Multiple values can be provided as CSV or an array of value string.                            |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                        |
| **Disabled**        | Disables input/selection to the widget. The widget will remain visible to the user, but user input/selection will not be allowed.                                                          |
| **Animate Loading** | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |
| **Alignment**       | Controls the switch alignment on the page. Switches can be left or right-aligned.                                                                                                          |

**Binding Properties**

| Property            | Description                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Selected Values** | An array of values of the options that are selected in a switch group. This value changes if the default values of the switch group change or the user changes a switch. |

**Events**

|                       |                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onSelectionChange** | Sets the action to be run when the user turns any of the switches on or off. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
