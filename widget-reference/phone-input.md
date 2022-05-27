# Phone Input

The phone input widget gives you an input field to capture a phone number as an input.

## Properties

Properties allow you to edit the input box, connect it with other widgets and customize the user actions. Let's look into different types of properties.

### Widget Properties

These properties allow you to edit the input box. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| Widget Property               | Description                                                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Allow country code change** | It enables/disables the dial code dropdown next to the input. If you enable this property, the User will change the dial code from the dropdown.    |
| **Default country code**      | It sets the default dial code of the widget                                                                                                         |
| **Label**                     | It is a group of properties that allows you to provide a name to the field and define the placement of the widget.                                  |
| **Placeholder**               | It sets a placeholder text inside the input. It displays an expected input or hints to the user.                                                    |
| **Tooltip**                   | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                    |
| **Default text**              | Sets the default text in the input widget before the user has made any changes. This field can be bound to a table's selectedRow to update a record |
| **Valid**                     | It lets you define the validity of the input using a JS expression.                                                                                 |
| **Regex**                     | It is used to add custom validations you want to perform on user input.                                                                             |
| **Error message**             | Sets the text of the error message to display if Regex validation fails.                                                                            |
| **Required**                  | When turned on, user input is required and disables any form submission until the user enters something in the input box.                           |
| **Visible**                   | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published                          |
| **Disabled**                  | It disables input to the widget. The widget will remain visible to the user, but user input will not be allowed.                                    |
| **Reset on Submi**t           | It clears the value entered by the user after submitting.                                                                                           |
| **Autofocus**                 | It focuses your cursor on the input box when it is loaded.                                                                                          |
| **Enable formatting**         | When turned on, the phone number typed into the input gets formatted based on the selected country code.                                            |

Let's understand the widget properties in detail.

#### Allow Country Code Change

It enables/disables the dial code dropdown next to the input box. If you enable this property, the user can change the dial code from the dropdown.

{% embed url="https://youtu.be/5oFMsVmETQ4" %}

#### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the label of the \*\*\*\* Phone Input box. For example, if you want the user to enter a work mobile number for the Phone Input box, you can enter the text as “Work.”

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Phone Input widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the phone input box.
* Left - It aligns the text to the left of the Phone Input box. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Phone Input box. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Phone Input box.
    * Right - It aligns the text closer to the Phone Input box.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Phone Input box.
* Auto - It automatically adjusts the position of the text based on the Phone Input box's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/l92dQO-d6rw" %}
How to set the label properties?
{% endembed %}

#### Placeholder

You can set a proxy text/value inside the input box using the placeholder property. It can be any message or hint for the expected input.

{% embed url="https://youtu.be/H6rU6C_QA_k" %}

#### Tooltip

It sets a tooltip for the widget. You can add hints or extra information about the required input from the user. The tooltip appears as "?" on the left of the input field.

{% embed url="https://youtu.be/Gdglth-2eDs" %}

#### Default text

This property lets you set a default value for the widget before the user has made any changes.

{% embed url="https://youtu.be/aL2ngU6xcts" %}

#### Regex

Using Regex or Regular expression property, you can set specific constraints on the input you expect from the user.

#### Error Message

If a user enters an incorrect value, the input widget shows a message “invalid input.” You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

{% embed url="https://youtu.be/CrDNJMQy0fM" %}

#### Required

Entering a value in the input box is mandatory when the required property is enabled. You can also write a `JS` code to link this property to a user action. Click on `JS` next to the Required to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Required property, and the input box will show an error message “This field is required” if you have not entered any input.

{% embed url="https://youtu.be/1RlJfJDsq7I" %}

#### Visible

`Visible` controls the widget’s visibility on the app’s page. The widget will not be visible on the published app if you turn off this property. You can also write a `JS` code to link Visible’s functionality to a user action. Click on `JS` next to the Visible to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the input box will be visible in the app.

{% embed url="https://youtu.be/xIbnrJcCTQo" %}

#### Disabled

It disables the user from entering values in the widget. The widget will be visible (if Visible is enabled), but user input will not be allowed. You can also write a JS code to link Disabled’s functionality to a user action. Click on `JS` next to the Visible to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disabled property and prevent a user input in the input box.

{% embed url="https://youtu.be/YBGEeuqvP28" %}

#### Reset on Submit

When `Reset on Submit` is enabled, the widget resets or clears the entered input after the user submits it.\
Let’s use the event `onSubmit` to show a message when input is submitted. You’ll see once the user submits and the message pops up, the input widget will reset itself to its original state.

{% embed url="https://youtu.be/Bz02obeYFcU" %}

#### Autofocus

When you enable `Autofocus`, the cursor focuses on the input box whenever the widget is loaded.

{% embed url="https://youtu.be/S-u1kMlF43M" %}

### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions

|                 |                                                                                                               |                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **Text**        | It fetches the phone number that the user enters in the input box.                                            | `{{<widget_name>.text}}`        |
| **Value**       | It fetches the unformatted phone number, even if formatting is enabled. The value is of **String** data type. | `{{<widget_name.value}}`        |
| **dialCode**    | It fetches the dialing code of the chosen country.                                                            | `{{<widget_name>.dialCode}}`    |
| **countryCode** | It fetches the country code of the chosen currency.                                                           | `{{<widget_name>.countryCode}}` |

#### Text

It fetches the formatted/unformatted (based on the enable formatting switch) phone number that the user enters in the input box. It changes when the default value changes or the user enters a new value in the input box. The value is of **String** data type.

To bind the text in the input widget to another widget, open the property pane of it, and add the code snippet given below:

```
{{<widget_name>.text}}
```

Where \<widget\_name> is the name of your input box.

For example, let's take an Input widget `Phoneinput1` and bind its text to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.text}}
```

The Text widget will then display the text present in the input widget.

{% embed url="https://youtu.be/3_XfCxqHECs" %}

#### Value

It fetches the unformatted phone number, regardless of the enabled formatting flag. The value is of **String** data type.

To bind the value of the input widget to another widget, open the property pane of it, and add the code snippet given below:

```
{{<widget_name>.value}}
```

Where \<widget\_name> is the name of your input box.

For example, let's take an Input widget `Phoneinput1` and bind its value to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.value}}
```

{% embed url="https://youtu.be/Q--zopJje0o" %}

#### dialCode

It fetches the dialing code of the chosen country. For example, if the user has selected India. It fetches the value `+91`.

To bind the dial code, add the code snippet given below:

```
{{<widget_name>.dialCode}}
```

Where \<widget\_name> is the name of your input box.

For example, let's take an Input widget `Phoneinput1` and bind its dial code to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.dialCode}}
```

{% embed url="https://youtu.be/pFoQgQaBER0" %}

#### countryCode

It fetches the country code of the chosen currency. For example, if the user has selected India. It fetches the value `IN`.

To bind the country code, add the code snippet given below:

```
{{<widget_name>.countryCode}}
```

Where \<widget\_name> is the name of your input box.

For example, let's take an Input widget `Phoneinput1` and bind the selected country's code to a text widget. Drag a text widget onto the canvas and add the following snippet:

```
{{Phoneinput1.countryCode}}
```

{% embed url="https://youtu.be/3E11ma5vGuM" %}

## Events

| Event             | Description                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **onTextChanged** | Sets the action to run when the user enters or changes its inputs. See a list of supported actions. |

## Label Styles

Style properties allow you to modify the label of the phone input widget visually. It has several options such as -

* Text color;
* Text size;
* Font Style (Bold, _Italic_).
