# Switch Group

Switch group widget captures user inputs from a set of binary choices. This widget captures multiple choices.

{% embed url="https://youtu.be/p--j-QyBlAY" %}

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

A Switch Group widget can show a set of binary choices for users. The selected values can be passed to an API using \*\*\*\* `{{ SwitchGroup1.selectedValues }}` .

### **Form Submission**

Switch group widgets can capture a fixed set of choices for the user like, showing and hiding or enabling and disabling.

{% hint style="success" %}
Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this.
{% endhint %}

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
| **Label**           | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](switch-group.md#label).                                    |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                        |
| **Disabled**        | Disables input/selection to the widget. The widget will remain visible to the user, but user input/selection will not be allowed.                                                          |
| **Animate Loading** | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |
| **Alignment**       | Controls the switch alignment on the page. Switches can be left or right-aligned.                                                                                                          |

#### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Switch Group. For example, if you want the user to select a payment option, you can enter the text as "Payment Options."&#x20;

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Switch Group widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Switch Group.
* Left - It aligns the text to the left of the Switch Group. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Switch Group. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Switch Group.
    * Right - It aligns the text closer to the Switch Group.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Switch Group.
* Auto - It automatically adjusts the position of the text based on the Switch Group's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/mXkHx0W-xdM" %}
How to set the label properties?
{% endembed %}

#### **Binding Properties**

| Property            | Description                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Selected Values** | An array of values of the options that are selected in a switch group. This value changes if the default values of the switch group change or the user changes a switch. |

### **Events**

|                       | Description                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onSelectionChange** | Sets the action to be run when the user turns any of the switches on or off. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
