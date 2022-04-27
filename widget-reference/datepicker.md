---
description: >-
  Datepicker is used to capture the date and time input by a user. It can be
  used to filter data based on the input date range as well as to capture
  personal information such as date of birth.
---

# Datepicker

{% embed url="https://www.youtube.com/watch?v=MFflGf3K324&feature=youtu.be" %}

## Properties

| Internal Property | Description                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedDate**  | This is the ISO date string selected in the date widget. This value changes if the default value is updated or the user inputs a value.         |
| **formattedDate** | This is the date value displayed to the user in the date widget. This value changes if the default value is updated or the user inputs a value. |

| Property         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**        | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](datepicker.md#label).                                                                                                                                                                                                                                                                                                                                                                                  |
| **Default Date** | <p>Sets a default date that will be captured as user input unless it is changed by the user. The default date must be an <strong>ISO</strong> string using the following formats:</p><ul><li>YYYY-MM-DD</li><li>YYYY-MM-DD HH:mm</li><li>ISO 8601 as mentioned in the <a href="https://momentjs.com/docs/#/parsing/string/">moment documentation</a></li><li>Others following the ISO 8601 standard.</li></ul><p>This can also be populated using a moment object <strong>{{ moment() }}</strong> as well.</p><p>&#x3C;b>&#x3C;/b></p> |
| **Date Format**  | The format of the date selected by the date picker                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Required**     | When turned on, it makes a user input required and disables any form submission until input is made.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Visible**      | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Disabled**     | Disables input to the widget. The widget will remain visible to the user but user input will not be allowed.                                                                                                                                                                                                                                                                                                                                                                                                                           |

| Action.            | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onDateSelected** | Sets the action to be run when the user selects a date. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Datepicker. For example, if you want the user to select a date of joining, you can enter the text as "Date of Joining."&#x20;

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Datepicker widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Datepicker.
* Left - It aligns the text to the left of the Datepicker. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Datepicker. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Datepicker.
    * Right - It aligns the text closer to the Datepicker.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Datepicker.
* Auto - It automatically adjusts the position of the text based on the Datepicker's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/y6LwyDgojoE" %}
How to set the label properties?
{% endembed %}

### Month Picker

To select just a month rather than a particular date, you can convert the [**Select widget**](dropdown-1.md) into a month picker. Drag a select widget to the canvas and enter the following snippet:

```
{{moment.months().map((v) => { return {label: v, value: v.toLowerCase()}})}}
```

### Year Picker

To select just a year rather than a particular date or month, you can convert the [**Select widget**](dropdown-1.md) into a year picker. Drag a select widget to the canvas and enter the following snippet:

```
{{ function()
    { 
        let start_year = 1920; //change start year for year picker 
        let end_year = 2120; //change end year for year picker 
        let years = []; 
        for (let i = start_year;i<= end_year;i++)
            { 
            let current_year_object = { "label":i.toString(), "value":i.toString()}
            years.push(current_year_object) 
            } 
         return years; 
     }
 () }}
```
