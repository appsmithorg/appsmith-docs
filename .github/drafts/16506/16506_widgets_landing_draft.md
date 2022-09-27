<!--- This page extends https://docs.appsmith.com/reference/widgets , adding a list of properties that many widgets have in common. -->

## Common Properties

The following properties are common across many of Appsmith's widgets. You can find them by selecting your widget and checking its properties pane, and use them to customize the details and behavior of your app.

| **Property** | **Description** |
|--------------|-----------------|
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. |
| **Disabled** | Makes the widget un-clickable or unusable. The widget remains visible to the user but user interaction won't be allowed. |
| **Error Message** | Sets the text of the error message to display if user input is considered invalid. | 
| **Tooltip** | Sets a tooltip for the widget. You can add hints or extra information about the required input from the user. |
| **Placeholder** | Sets the placeholder text within the input box. Use to show a hint or example value to the user. |
| **Regex** | Used to add custom regular expression validation to perform on user input. When the input doesn't match the regular expression, the input is considered invalid. |
| **Required** | Sets whether the input field is a mandatory field. When the input widget is within a Form widget, that Form's submit button is automatically turned off until a user adds input to the field. |
| **Valid** | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**. |
| **Visible** | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode. |

### Disabled
It disables the user from entering values in the input widget. The widget is visible (if Visible is enabled), but user input won't be allowed. You can also write a JS code to link Disabled's functionality to a user action. Click on `JS` next to the `Disabled` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Disabled property and prevent a user input in the input box.

![](https://youtu.be/JEARavnq0vQ)

### Error Message
If a user enters an incorrect value, the input widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

![](https://youtu.be/oeUHJhM4zyU)

### Tooltip
Tooltips are often used to show the user extra information about an element on the page, or to give them extra hints on how to use something. They're usually hidden until a certain condition is met, such as the user's mouse cursor hovering over the element.

The Tooltip property in Appsmith is used to set the text that appears within a floating box near the widget when the user mouses over it. In some cases (such as the Input widget), the tooltip is applied to a small question mark icon set within the widget, and appears when the user's cursor is placed over the icon.

![](https://youtu.be/UZ3MBVfNSzk)

### Placeholder
You can set a proxy text/value inside the input box using the `placeholder` property. It can be any message or hint for the expected input.

![](https://youtu.be/576Bfo8htf0)

### Regex
Using `Regex` or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, add a regular expression for entering a name. The name can contain only alphabets and space between the first and last name.

```
/^[a-z -]+$/i
```

If you enter a value other than an alphabet or space (number of special characters), the widget shows an error message "invalid input."

![](https://youtu.be/n6VUQN-wv9U)

### Required
Entering a value in the input box is mandatory when the required property is enabled. You can also write a JS code to link this property to a user action. Click on `JS` next to the `Required` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Required property, and the input box shows an error message "This field is required" if you haven't entered any input.

![](https://youtu.be/2hqT02HCah8)

### Valid
The `Valid` property can be used to set a condition or expression that the user's input must meet in order for the widget to accept it. If  the given condition isn't met, the widget shows a tooltip that contains the text that has been set within its **Error Message** property (or "Invalid input" if the property isn't set). Forms can also be configured such that they're not able to be submitted if one of their child widgets have user input that's considered invalid.

To see how the Valid property works, drag an Input widget onto the canvas and set the `Valid` property to the following:
```
{{Input1.text.length >= 3}}
```

Now when the field has fewer than three characters entered, a tooltip appears with the widget's **Error Message**, or the text "Invalid input."

![](https://youtu.be/rk3yzSoe6aw)

### Visible
`Visible` controls the widget's visibility on the app's page. The widget won't be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Visible property, and the input box will be visible in the app.

![](https://youtu.be/Jb5bNVhFoRE)