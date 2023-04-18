# Phone Input

The phone input widget gives you an input field to capture a phone number as an input.

<VideoEmbed host="youtube" videoId="DuyMuOZm83g" title="How to use Phone Input Widget" caption="How to use Phone Input Widget"/>

## Properties

Properties allow you to edit the phone widget, connect it with other widgets and customize the user actions. Let's look into different types of properties.

### Widget properties

These properties allow you to edit the phone widget. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| Widget Property               | Description                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Allow country code change** | It enables/disables the dial code dropdown next to the input. If you enable this property, the User can change the dial code from the dropdown.       |
| **Default country code**      | It sets the default dial code of the widget                                                                                                            |
| **Default text**              | Sets the default text in the input widget before the user has made any changes. This field can be bound to a table's `selectedRow` to update a record. |
| **Enable formatting**         | When turned on, the phone number typed into the input gets formatted based on the selected country code.                                               |
| **Regex**                     | It is used to add custom validations you want to perform on user input.                                                                                |
| **Valid**                     | It lets you define the validity of the input using a JS expression.                                                                                    |
| **Error message**             | Sets the text of the error message to display if Regex validation fails.                                                                               |
| **Placeholder**               | It sets a placeholder text inside the input. It displays an expected input or hints to the user.                                                       |
| **Tooltip**                   | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                       |
| **Required**                  | When turned on, user input is required and disables any form submission until the user enters something in the input box.                              |
| **Visible**                   | It controls the widget's visibility on the page. When turned off, the widget isn't visible when the app is published                             |
| **Disabled**                  | It disables input to the widget. The widget remains visible to the user, but user input is not allowed.                                       |
| **Reset on Submit**           | It clears the value entered by the user after submitting.                                                                                              |
| **Autofocus**                 | It focuses your cursor on the input box when it is loaded.                                                                                             |
| **Animate Loading**           | Allows you to control a widget’s animation on the page load.                                                                                           |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


Let's understand the widget properties in detail.

#### Allow country code change

It enables/disables the dial code dropdown next to the input box. If you enable this property, the user can change the dial code from the dropdown.

<VideoEmbed host="youtube" videoId="5oFMsVmETQ4" title="Allow Country Code Change" caption="Allow Country Code Change"/>

#### Tooltip

It sets a tooltip for the widget. You can add hints or extra information about the required input from the user. The tooltip appears as "?" on the left of the input field.

<VideoEmbed host="youtube" videoId="Gdglth-2eDs" title="Tooltip" caption="Tooltip"/>

#### Placeholder

You can set a proxy text/value inside the input box using the placeholder property. It can be any message or hint for the expected input.

<VideoEmbed host="youtube" videoId="H6rU6C_QA_k" title="Placeholder" caption="Placeholder"/>

#### Default text

This property lets you set a default value for the widget before the user has made any changes.

<VideoEmbed host="youtube" videoId="aL2ngU6xcts" title="Default text" caption="Default text"/>

#### Regex

Using Regex or Regular expression property, you can set specific constraints on the input you expect from the user.

#### Error message

If a user enters an incorrect value, the input widget shows a message “invalid input.” You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

<VideoEmbed host="youtube" videoId="CrDNJMQy0fM" title="Error Message" caption="Error Message"/>

#### Required

Entering a value in the input box is mandatory when the required property is enabled. You can also write a `JS` code to link this property to a user action. Click on `JS` next to the Required to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Required property, and the input box shows an error message “This field is required” if you have not entered any input.

<VideoEmbed host="youtube" videoId="1RlJfJDsq7I" title="Required" caption="Required"/>

#### Visible

`Visible` controls the widget’s visibility on the app’s page. The widget isn't visible on the published app if you turn off this property. You can also write a `JS` code to link the Visible property to a user action. Click on `JS` next to the Visible to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Visible property, and the input box is visible in the app.

<VideoEmbed host="youtube" videoId="xIbnrJcCTQo" title="Visible" caption="Visible"/>

#### Disabled

It disables the user from entering values in the widget. The widget is visible (if Visible is enabled), but user input is not allowed. You can also write a JS code to link the Disabled property to a user action. Click on `JS` next to the Visible to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Disabled property and prevent a user input in the input box.

<VideoEmbed host="youtube" videoId="YBGEeuqvP28" title="Disabled" caption="Disabled"/>

#### Reset on submit

When `Reset on submit` is enabled, the widget resets or clears the entered input after the user submits it.\
Let’s use the event `onSubmit` to show a message when input is submitted. You’ll see once the user submits and the message pops up, the input widget resets itself to its original state.

<VideoEmbed host="youtube" videoId="Bz02obeYFcU" title="Reset on submit" caption="Reset on submit"/>

#### Autofocus

When you enable `Autofocus`, the cursor focuses on the input box whenever the widget is loaded.

<VideoEmbed host="youtube" videoId="S-u1kMlF43M" title="Autofocus" caption="Autofocus"/>

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

|                 |                                                                                                               |                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **`countryCode`** | It fetches the country code of the chosen currency.                                                           | `{{<widget_name>.countryCode}}` |
| **`dialCode`**    | It fetches the dialing code of the chosen country.                                                            | `{{<widget_name>.dialCode}}`    |
| **`isDisabled`**  | This property indicates whether the widget is disabled or not.                                                | `{{<widget_name>.isDisabled}}`  |
| **`isVisible`**   | This property indicates whether the widget is visible or not.                                                 | `{{<widget_name>.`isVisible`}}` |
| **`isValid`**     | This property indicates whether the input value is valid or not.                                              | `{{<widget_name>.isValid}}`     |
| **Text**        | It fetches the phone number that the user enters in the input box.                                            | `{{<widget_name>.text}}`        |
| **Value**       | It fetches the unformatted phone number, even if formatting is enabled. The value is of **String** data type. | `{{<widget_name.value}}`        |

#### Text

It fetches the formatted/unformatted (based on the enable formatting switch) phone number that the user enters in the input box. It changes when the default value changes or the user enters a new value in the input box. The value is of **String** data type.

To bind the text in the input widget to another widget, open the property pane of it, and add the code snippet given below:

```
{{<widget_name>.text}}
```

Where <widget_name> is the name of your input box.

For example, take an Input widget `Phoneinput1` and bind its text to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.text}}
```

The Text widget displays the text present in the input widget.

<VideoEmbed host="youtube" videoId="3_XfCxqHECs" title="Text" caption="Text"/>

#### Value

It fetches the unformatted phone number, regardless of the enabled formatting flag. The value is of **String** data type.

To bind the value of the input widget to another widget, open the property pane of it, and add the code snippet given below:

```
{{<widget_name>.value}}
```

Where <widget_name> is the name of your input box.

For example, take an Input widget `Phoneinput1` and bind its value to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.value}}
```

<VideoEmbed host="youtube" videoId="Q--zopJje0o" title="Value" caption="Value"/>

#### dialCode

It fetches the dialing code of the chosen country. For example, if the user has selected India. It fetches the value `+91`.

To bind the dial code, add the code snippet given below:

```
{{<widget_name>.dialCode}}
```

Where <widget_name> is the name of your input box.

For example, take an Input widget `Phoneinput1` and bind its dial code to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.dialCode}}
```

<VideoEmbed host="youtube" videoId="pFoQgQaBER0" title="dialCode" caption="dialCode"/>

#### countryCode

It fetches the country code of the chosen currency. For example, if the user has selected India. It fetches the value `IN`.

To bind the country code, add the code snippet given below:

```
{{<widget_name>.countryCode}}
```

Where <widget_name> is the name of your input box.

For example, take an Input widget `Phoneinput1` and bind the selected country's code to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.countryCode}}
```
<VideoEmbed host="youtube" videoId="3E11ma5vGuM" title="countryCode" caption="countryCode"/>

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Event             | Description                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTextChanged** | Sets the action to run when the user enters or changes its inputs. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onFocus** | Sets the action to run when the input area in the phone widget is focused. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onBlur** | Sets the action to run when the input area in the phone widget loses focus. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onSubmit**      | Triggers an action on submit (when the enter key is pressed). See a list of [supported actions](../appsmith-framework/widget-actions/).      |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **Text**      | Sets the label text of the widget.                           |
| **Position**  | Sets the label position of the widget.                       |
| **Alignment** | Sets the label alignment of the widget.                      |
| **Width**     | Sets the label width of the widget as the number of columns. |

| Label Styles         | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Text Color**       | Allows you to set the text color for the label.          |
| **Text Size**        | Allows you to set the size of the label.                 |
| **Label Font Style** | Allows you to choose a font style (bold or italic). |

#### **Text**

It allows you to set the label of the Phone Input box. For example, if you want the user to enter a work mobile number for the Phone Input box, you can enter the text as “Work.”

:::tip
You can leave the text empty if you don't want any display name for your Phone Input widget.
:::

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the phone input box.
* Left - It aligns the text to the left of the Phone Input box. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Phone Input box. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Phone Input box.
    * Right - It aligns the text closer to the Phone Input box.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Phone Input box.
* Auto - It automatically adjusts the position of the text based on the Phone Input box's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

<VideoEmbed host="youtube" videoId="l92dQO-d6rw" title="How to set the label properties?" caption="How to set the label properties?"/>

### Styles

Style properties allow you to change the look and feel of the widget.

| Style             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| **Border Radius** | Rounds the corner of the icon button's outer border edge.       |
| **Box Shadow**    | Enables you to cast a drop shadow from the frame of the widget. |
