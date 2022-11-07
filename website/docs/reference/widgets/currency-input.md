# Currency Input

The currency input widget gives you an input field to capture a user's currency input.

<YoutubeEmbed videoId="I-FusTdnJeE" title="How to use Currency Input Widget" caption="How to use Currency Input Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Currency Input widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                  | Description                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Allow currency change** | Enables/disables a currency dropdown next to the input which the user can use to change the selected currency.                                                                                         |
| **Currency**              | Sets the currency type for the widget. When using JS, accepts _string_ [ISO 4217 ](https://www.iso.org/iso-4217-currency-codes.html)currency codes.                                                    |
| **Decimals**              | Sets the number of digits allowed after the decimal separator (0, 1, or 2).                                                                                                                            |
| **Default text**          | Sets the default text in the input widget before the user has made any changes. This field can be bound to a table's selectedRow to update a record                                                    |
| **Regex**                 | It is used to add custom validations you want to perform on user input.                                                                                                                                |
| **Valid**                 | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid and the widget will show its **Error Message**.   |
| **Error message**         | Sets the text of the error message to display if the user's input is considered invalid.                                                                                                               |
| **Placeholder**           | Sets the placeholder text within the input box. Use to show a hint or example value to the user.                                                                                                       |
| **Tooltip**               | Sets a tooltip that appears when the user hovers over the widget with the mouse. Use this to provide hints or extra information to the user.                                                           |
| **Required**              | Sets whether the checkbox is a mandatory field. When the checkbox is within a Form widget, that Form's submit button will be automatically disabled until the Checkbox is checked.                     |
| **Visible**               | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Disabled**              | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.                                                                        |
| **Reset on Submit**       | Clears the value entered by the user after form submission.                                                                                                                                            |
| **Auto Focus**            | When enabled, the user's cursor will be focused on the input box automatically on page load.                                                                                                           |
| **Animate loading**       | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |

Let's understand the widget properties in detail.

#### Allow Currency Exchange

It enables/disables the currency dropdown next to the input box. If you enable this property, the user can change the currency from the dropdown.

<YoutubeEmbed videoId="Rvzi2nUqimc" title="Allow Currency Exchange" caption="Allow Currency Exchange"/>

#### Placeholder

You can set a proxy text/value inside the input box using the placeholder property. It can be any message or hint for the expected input.

<YoutubeEmbed videoId="OimnFGTYCz8" title="Placeholder" caption="Placeholder"/>

#### Default text

This property lets you set a default value for the widget before the user has made any changes. The value must be a **number** datatype.

<YoutubeEmbed videoId="1vZ6sj1Azf4" title="Default text" caption="Default text"/>

#### Regex

Using Regex or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, let’s add a regular expression for entering a price in multiples of 5.

```
.*[05]$
```

If you enter a value other than a multiple of 5, the widget will show an error message “_invalid input._”

<YoutubeEmbed videoId="XLygxNmpdUQ" title="Regular Expression (Regex)" caption="Regular Expression (Regex)"/>

#### Error Message

If a user enters an incorrect value, the input widget shows a message “_invalid input_.” You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

<YoutubeEmbed videoId="wMhLTemn32Y" title="Error Message" caption="Error Message"/>

#### Required

Entering a value in the input box is mandatory when the required property is enabled. You can also write a `JS` code to link this property to a user action. Click on `JS` next to the Required to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Required property, and the input box will show an error message “_This field is required_” if you have not entered any input.

<YoutubeEmbed videoId="K3VkoyWXcCo" title="Error Message" caption="Error Message"/>

#### Visible

`Visible` controls the widget’s visibility on the app’s page. The widget will not be visible on the published app if you turn off this property. You can also write a `JS` code to link Visible’s functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the input box will be visible in the app.

<YoutubeEmbed videoId="OP123TD8s5w" title="Error Message" caption="Error Message"/>

#### Disabled

It prevents the user from entering values in the widget. The widget will be visible (if Visible is enabled), but user input will not be allowed. You can also write a `JS` code to link Disabled’s functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disabled property and prevent a user input in the input box.

<YoutubeEmbed videoId="oVmw_LSHfJw" title="Disabled" caption="Disabled"/>

#### Reset on Submit

When `Reset on Submit` is enabled, the widget resets or clears the entered input after the user submits it.\
Let’s use the event `onSubmit` to show a message when input is submitted. You’ll see once the user submits and the message pops up, the currency input widget will reset itself to its original state.

<YoutubeEmbed videoId="9c0o4UF9hGk" title="Disabled" caption="Disabled"/>

#### Auto Focus

When you enable `Auto focus`, the cursor focuses on the input box whenever the widget is loaded.

<YoutubeEmbed videoId="htoB7zcyT5g" title="Disabled" caption="Disabled"/>

### Binding Properties

These properties allow you to bind your currency input widget with any other widget in queries or JS objects.\
These properties help you share values between widgets and allow you to access the widget property within Queries or JS functions easily.

| Property         | Description                                                                                                 |                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **countryCode**  | Contains the country code of the selected currency _(string)._                                              | `{{currency_widget_name.Countrycode}}`  |
| **currencyCode** | Contains the __ [ISO 4217 ](https://www.iso.org/iso-4217-currency-codes.html)code of the selected currency. | `{{currency_widget_name.Currencycode}}` |
| **isDisabled**   | Reflects the state of the widget's **Disabled** setting _(bool)_.                                           | `{{currency_widget_name.isDisabled}}`   |
| **isValid**      | Reflects whether the widget's input is considered **Valid** _(bool)_.                                       | `{{currency_widget_name.isValid}}`      |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_.                                            | `{{currency_widget_name.isVisible}}`    |
| **text**         | Contains the value of the widget's input, represented as a _string._                                        | `{{currency_widget_name.text}}`         |
| **value**        | Contains the value of the widget's input, represented as a _number._                                        | `{{currency_widget_name.value}}`        |

#### Text

It fetches the formatted value that the user enters in the input box. It changes when the default value changes or the user enters a new value in the input box. The value is of **String** data type.

To bind the data in the currency input widget to another widget, open the property pane of it, and add the code snippet given below:

```
{{<currency_input_widget_name>.text}}
```

Where `<currency_input_widget_name>` is the name of your input box.

For example, let's take the widget `currencyinput1` and bind its text to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{currencyinput1.text}}
```

The text widget will then display the data present in the currency input widget.

<YoutubeEmbed videoId="uNopiIWdih0" title="Text" caption="Text"/>

This property has many applications like it helps in parsing the values entered in the widget to a query.

#### Value

It fetches the value that the user enters in the input box. The value is of the **Number** data type.

To bind this widget with another widget using this property, Open the property pane of the desired widget and enter the snippet given below:

```
{{<currency_widget_name>.value}}
```

Where `<currency_input_widget_name>` is the name of your input box.

For example, let's take a widget `currencyinput1` and bind its value to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{currencyinput1.value}}
```

The text widget will then display the value present in the currency input widget.

<YoutubeEmbed videoId="TaKMTGZ5UwQ" title="Value" caption="Value"/>

#### currencyCode

It fetches the currency code of the chosen currency. For example, if the user has selected an American dollar. It fetches the value `USD`.
Let's take a widget `currencyinput1` use this property to display the selected currency’s code in a text widget. Enter the code snippet given below:

```
{{currencyinput1.currencyCode}}
```

<YoutubeEmbed videoId="EVksywb2UR4" title="Currency Code" caption="Currency Code"/>

#### countryCode

It fetches the country code of the chosen currency. For example, if the user has selected an American dollar. It fetches the value `US.`

Let's take a widget `currencyinput1` use this property to display the selected currency’s country code in a text widget. Enter the code snippet given below:

```
{{currencyinput1.currencyCode}}
```

<YoutubeEmbed videoId="A6xeE12Igcw" title="Country Code" caption="Country Code"/>

### Events

| Event             | Description                                                                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTextChanged** | Sets an an action to take place when the input's value is changed. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |
| **onSubmit**      | Sets an an action to take place when the input is submitted with the ENTER key. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                                                          |   |
| ------------- | ---------------------------------------------------------------------------------------------------- | - |
| **Text**      | Sets the label text of the widget.                                                                   |   |
| **Position**  | Sets where the label appears relative to the widget's input area. Choose between Left, Top, or Auto. |   |
| **Alignment** | Sets whether the label is left- or right-aligned.                                                    |   |
| **Width**     | Sets the width of the label. The number represents how many characters/columns wide the label is.    |   |

#### Text

It allows you to set the display name of the Currency Input. For example, if you want the user to enter an Item price on the currency input box, you can enter the text as “Item Price.”

:::tip
You can leave the text empty if you don't want any display name for your Currency Input widget.
:::

#### Position

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Currency Input box.
* Left - It aligns the text to the left of the Currency Input box. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Currency Input box. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Currency Input box.
    * Right - It aligns the text closer to the Currency Input box.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Currency Input box.
* Auto - It automatically adjusts the position of the text based on the Currency Input box's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

You can leave the label empty if you don’t want any labels.

<YoutubeEmbed videoId="zlEEwBXErd0" title="How to set Lable Properties" caption="How to set Lable Properties"/>

| Label Styles         | Description                                                                                                                          |   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | - |
| **Text Color**       | Sets the text color for the label. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.       |   |
| **Text Size**        | Sets the size of the label font. Accepts valid CSS [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. |   |
| **Label Font Style** | Toggles font styles (**bold** or _italic)._                                                                                          |   |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
