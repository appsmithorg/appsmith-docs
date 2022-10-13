# Datepicker

Datepicker is used to capture the date and time input by a user. It can be used to filter data based on the input date range as well as to capture personal information such as date of birth.

<figure>
  <object data="https://www.youtube.com/embed/MFflGf3K324?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>How to use Datepicker Widget</i></figcaption>
</figure>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Datepicker widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property               | Description  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default Date**       | Sets a default date that will be captured as user input unless it is changed by the user. The default date must be an **ISO** string using the following formats:<br/> - YYYY-MM-DD<br/> - YYYY-MM-DD HH:mm<br/> - ISO 8601 as mentioned in the [moment documentation](https://momentjs.com/docs/#/parsing/string/)<br/> - Others following the ISO 8601 standard.<br/>This can also be populated using a moment object `{{ moment() }}` as well. |
| **Date Format**        | The format of the date selected by the date picker.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Time Precision**     | Decides whether a time is included within the Datepicker, and whether that time is to minute or second precision. With JS enabled, values may be "None", "minute", or "second".                                                                                                                                                                                                                                                                                                                                |
| **Required**           | Sets whether the checkbox is a mandatory field. When the checkbox is within a Form widget, that Form's submit button will be automatically disabled until the Checkbox is checked.                                                                                                                                                                                                                                                                                                                             |
| **Visible**            | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                                                                                                                                                                                                                                                                                                                                            |
| **Disabled**           | Disables input to the widget. The widget will remain visible to the user but user input will not be allowed.                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Animate Loading**    | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                                                                                                                                                                                                                                                                                                         |
| **Close On Selection** | Sets whether the Datepicker menu will automatically close when the user clicks on a date.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Show Shortcuts**     | Toggles an additional part of the Datepicker menu that allows the user to quickly select from options such as "Today", "1 week ago", etc.                                                                                                                                                                                                                                                                                                                                                                      |
| **Min Date**           | Sets a minimum/earliest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Max Date**           | Sets a maximum/latest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **First Day Of Week**  | Sets which day of the week appears first within the calendar of the Datepicker's menu. Accepts number values between 0 and 6.<br/>0 represents Sunday, 1 represents Monday, and so on.                                                                                                                                                                                                                                                                                                               |

### Binding Properties

These properties allow you to bind your Datepicker widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property  | Description                                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **formattedDate** | Contains the date value currently selected within the Datepicker widget. This value changes if the default value is updated or if the user inputs a new value. |
| **selectedDate**  | This is the ISO date string selected in the Datepicker widget. This value changes if the default value is updated or if the user inputs a new value.           |
| **isDisabled**    | Reflects the state of the widget's **Disabled** setting _(bool)_.                                                                                              |
| **isVisible**     | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                               |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Event              | Description                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onDateSelected** | Sets an an action to take place when a date is selected. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                                                          |   |
| ------------- | ---------------------------------------------------------------------------------------------------- | - |
| **Text**      | Sets the label text of the widget.                                                                   |   |
| **Position**  | Sets where the label appears relative to the widget's input area. Choose between Left, Top, or Auto. |   |
| **Alignment** | Sets whether the label is left- or right-aligned.                                                    |   |
| **Width**     | Sets the width of the label. The number represents how many characters/columns wide the label is.    |   |

| Label Styles         | Description                                                                                                                          |   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | - |
| **Text Color**       | Sets the text color for the label. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.       |   |
| **Text Size**        | Sets the size of the label font. Accepts valid CSS [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. |   |
| **Label Font Style** | Toggles font styles (**bold** or _italic)._                                                                                          |   |

#### **Text**

It allows you to set the display name for the Datepicker. For example, if you want the user to select a date of joining, you can enter the text as "Date of Joining."

:::tip
You can leave the text empty if you don't want any display name for your Datepicker widget.
:::

#### Position

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Datepicker.
* Left - It aligns the text to the left of the Datepicker. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Datepicker. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Datepicker.
    * Right - It aligns the text closer to the Datepicker.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Datepicker.
* Auto - It automatically adjusts the position of the text based on the Datepicker's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

<figure>
  <object data="https://www.youtube.com/embed/y6LwyDgojoE?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>How to set the label properties?</i></figcaption>
</figure>

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

### Month Picker

To select just a month rather than a particular date, you can convert the [**Select widget**](./select.md) into a month picker. Drag a select widget to the canvas and enter the following snippet:

```
{{moment.months().map((v) => { return {label: v, value: v.toLowerCase()}})}}
```

### Year Picker

To select just a year rather than a particular date or month, you can convert the [**Select widget**](./select.md) into a year picker. Drag a select widget to the canvas and enter the following snippet:

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
