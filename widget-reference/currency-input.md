# Currency Input



The currency input widget gives you an input field to capture a user's currency input.

## Properties

Properties allow you to edit the input box, connect it with other widgets and customize the user actions. Let's look into different types of properties.

### Widget Properties

These properties allow you to edit the input box. All these properties are present in the property pane of the widget. Given below is a table of widget properties.

| Widget Property           | Description                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Allow currency change** | It enables/disables the currency dropdown next to the input. If you enable this property, the User will change the currency from the dropdown.                                             |
| **Currency**              | It sets the currency type of the widget                                                                                                                                                    |
| **Decimals**              | It sets the number of digits allowed after the decimal separator.                                                                                                                          |
| **Label**                 | It sets the label for input. It can be left empty if you don't want any label.                                                                                                             |
| **Placeholder**           | It sets a placeholder text inside the input. It displays an expected input or hints to the user.                                                                                           |
| **Tooltip**               | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                           |
| **Default text**          | Sets the default text in the input widget before the user has made any changes. This field can be bound to a table's selectedRow to update a record                                        |
| **Regex**                 | It is used to add custom validations you want to perform on user input.                                                                                                                    |
| **Error message**         | Sets the text of the error message to display if Regex validation fails.                                                                                                                   |
| **Required**              | When turned on, user input is required and disables any form submission until the user enters something in the input box.                                                                  |
| **Visible**               | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                 |
| **Disabled**              | It disables input to the widget. The widget will remain visible to the user, but user input will not be allowed.                                                                           |
| **Reset on Submit**       | It clears the value entered by the user after submission.                                                                                                                                  |
| **Auto focus**            | It focuses your cursor on the input box when it is loaded.                                                                                                                                 |
| **Animate loading**       | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |

Let's understand the widget properties in detail.

#### Allow Currency Exchange

It enables/disables the currency dropdown next to the input box. If you enable this property, the user can change the currency from the dropdown.

{% embed url="https://youtu.be/Rvzi2nUqimc" %}

**Label**

It allows you to set the label of the input box. For example, if you want the user to enter an Item price on the input box, you can enter the label “Item Price.” The label appears on the left side of the input box.

{% embed url="https://youtu.be/e-GxPpfiXJs" %}

You can leave the label empty if you don’t want any labels.

**Placeholder**

You can set a proxy text/value inside the input box using the placeholder property. It can be any message or hint for the expected input.

{% embed url="https://youtu.be/OimnFGTYCz8" %}

**Default text**

This property lets you set a default value for the widget before the user has made any changes. The value must be a **number** datatype.

{% embed url="https://youtu.be/1vZ6sj1Azf4" %}

**Regex**

Using Regex or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, let’s add a regular expression for entering a price in multiples of 5.

```
.*[05]$
```

If you enter a value other than a multiple of 5, the widget will show an error message “_invalid input._”

{% embed url="https://youtu.be/XLygxNmpdUQ" %}

**Error Message**

If a user enters an incorrect value, the input widget shows a message “_invalid input_.” You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

{% embed url="https://youtu.be/wMhLTemn32Y" %}

**Required**

Entering a value in the input box is mandatory when the required property is enabled. You can also write a `JS` code to link this property to a user action. Click on `JS` next to the Required to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Required property, and the input box will show an error message “_This field is required_” if you have not entered any input.

{% embed url="https://youtu.be/K3VkoyWXcCo" %}

**Visible**

`Visible` controls the widget’s visibility on the app’s page. The widget will not be visible on the published app if you turn off this property. You can also write a `JS` code to link Visible’s functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the input box will be visible in the app.

{% embed url="https://youtu.be/OP123TD8s5w" %}

**Disabled**

It prevents the user from entering values in the widget. The widget will be visible (if Visible is enabled), but user input will not be allowed. You can also write a `JS` code to link Disabled’s functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disabled property and prevent a user input in the input box.

{% embed url="https://youtu.be/oVmw_LSHfJw" %}

**Reset on Submit**

When `Reset on Submit` is enabled, the widget resets or clears the entered input after the user submits it.\
Let’s use the event `onSubmit` to show a message when input is submitted. You’ll see once the user submits and the message pops up, the currency input widget will reset itself to its original state.

{% embed url="https://youtu.be/9c0o4UF9hGk" %}

**Auto Focus**

When you enable `Auto focus`, the cursor focuses on the input box whenever the widget is loaded.

{% embed url="https://youtu.be/htoB7zcyT5g" %}

### Binding Properties

These properties allow you to bind your currency input widget with any other widget in queries or JS objects.\
These properties help you share values between widgets and allow you to access the widget property within Queries or JS functions easily.

| Property         | Description                                                                  | Snippet                                 |
| ---------------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| **Text**         | It fetches the data entered in the widget as a **string**                    | `{{currency_widget_name.text}}`         |
| **Value**        | It fetches the data entered in the widget as a **number**                    | `{{currency_widget_name.value}}`        |
| **countryCode**  | It fetches the country code of the selected currency                         | `{{currency_widget_name.Countrycode}}`  |
| **currencyCode** | It gets the alphabetic code (based on ISO standard) of the selected currency | `{{currency_widget_name.Currencycode}}` |

**Text**

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

{% embed url="https://youtu.be/uNopiIWdih0" %}

This property has many applications like it helps in parsing the values entered in the widget to a query.

**Value**

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

{% embed url="https://youtu.be/TaKMTGZ5UwQ" %}

**currencyCode**

It fetches the currency code of the chosen currency. For example, if the user has selected an American dollar. It fetches the value `USD`.\
Let's take a widget `currencyinput1` use this property to display the selected currency’s code in a text widget. Enter the code snippet given below:

```
{{currencyinput1.currencyCode}}
```

{% embed url="https://youtu.be/EVksywb2UR4" %}

**countryCode**

It fetches the country code of the chosen currency. For example, if the user has selected an American dollar. It fetches the value `US.`

Let's take a widget `currencyinput1` use this property to display the selected currency’s country code in a text widget. Enter the code snippet given below:

```
{{currencyinput1.currencyCode}}
```

{% embed url="https://youtu.be/A6xeE12Igcw" %}

### Events

| Event         | Description                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------- |
| onTextChanged | Sets the action to run when the user enters or changes its inputs. See a list of supported actions. |

### Label Styles

Style properties allow you to modify the widget's label visually. It has several options:

* Text color;
* Text size;
* Font Style (Bold, _Italic_)
