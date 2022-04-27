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

A Multi-tree-select widget can filter a dataset based on the user's input. The selected value can be passed to an API using `{{ MultiTreeSelect1.selectedOptionValues }}` .

### **Form Submission**

Multi-tree-select widget can capture from a fixed set of options inside a form such as gender, role, status.

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

| Property                  | Description                                                                                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Placeholder**           | Sets the Placeholder of the multi-select widget.                                                                                                                                                                           |
| **Options**               | It lets you set labels and values for different items/options in the list of the multi-select widget. Options must be specified as an array of objects with a label and value property and the optional children property. |
| **Default Option**        | Sets a default option that will be captured as user input unless the user changes it. Multiple values can be provided as CSV or an array of value strings for a Multi-Select dropdown.                                     |
| **Label**                 | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](multi-tree-select.md#label).                                                               |
| **Required**              | When turned on, it makes a user input required and disables any form submission until input is made.                                                                                                                       |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                                                       |
| **Disabled**              | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.                                                                                           |
| **Animate Loading**       | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered.                                 |
| **Clear all Selections**  | When turned on, it allows users to clear the selection which was default or the selection made by them.                                                                                                                    |
| **Expand all by default** | It shows a dropdown in an expanded state when turned on, revealing all the children options.                                                                                                                               |

#### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Multi-tree-select widget. For example, if you want the user to add multiple categories, you can enter the text as "Categories."&#x20;

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Multi-tree-select widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Multi-tree-select widget.
* Left - It aligns the text to the left of the Multi-tree-select. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Multi-tree-select widget. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Multi-tree-select widget.
    * Right - It aligns the text closer to the Multi-tree-select widget.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Multi-tree-select widget.
* Auto - It automatically adjusts the position of the text based on the Multi-tree-select widget's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/g6IIejdNmfU" %}
How to set the label properties?
{% endembed %}

#### Binding Properties

| Property                 | Description                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedOptionValues** | An array of values of the options are displayed in a MultiTree-Select dropdown. This value changes if the default values of the dropdown change or the user changes an option selection. |
| **selectedOptionLabels** | An array of Labels of the options are displayed in a MultiTree-Select dropdown. This label changes if the default values of the dropdown change or the user changes an option selection. |

#### Events

| Event              | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
