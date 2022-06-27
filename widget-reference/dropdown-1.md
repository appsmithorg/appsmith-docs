---
description: >-
  ‌Select / Dropdown widget is used to capture user input/s from a specified
  list of permitted inputs.
---

# Select

{% embed url="https://youtu.be/zNw1yMwg-aY" %}

## Displaying Data

A Dropdown's **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

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

```
{{ Table1.selectedRow.gender }}
/**
* Binding this to the default option will update the selected option 
* of the dropdown with the gender of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in post body](dropdown-1.md)

## Properties

| Internal Property       | Description                                                                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedOptionValue** | This is the value of the option that is displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option |
| **filterText**          | The filter text for Server side filtering                                                                                                                            |

| Property                  | Description                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Placeholder**           | Sets the Placeholder of the dropdown widget.                                                                                                                                     |
| **Options**               | Lets you set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. |
| **Default Option**        | Sets a default option that will be captured as user input unless it is changed by the user.                                                                                      |
| **Label**                 | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](dropdown-1.md#label).                            |
| **Required**              | When turned on, it makes a user input mandatory and disables any form submission until an input is made.                                                                         |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                              |
| **Disabled**              | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.                                                 |
| **Server Side Filtering** | Enables server side filtering of the via an API / Query request. Use this property when your Select option data is being bound to an API / Query.                                |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Select widget. For example, if you want the user to select a Gender Type, you can enter the text as "Gender."&#x20;

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Select widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Select widget.
* Left - It aligns the text to the left of the Select widget. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Select widget. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Select widget.
    * Right - It aligns the text closer to the Select widget.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Select widget.
* Auto - It automatically adjusts the position of the text based on the Select widget's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/wyQGr-ggvhM" %}
How to set the label properties?
{% endembed %}

## Actions

| Action             | Description                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
| **onFilterUpdate** | Trigger an action on change of `filterText`. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md)                         |

## Server-side Filterting
The Select widget has the option to configure server-side filtering, where search queries are sent to the backend, and responses are used to populate options on the Select widget. The video below explains how to configure this.

{% embed url="https://youtu.be/QDmTwRaLzHg" caption="How To Setup Server-side Filtering For The Select Widget" %}
