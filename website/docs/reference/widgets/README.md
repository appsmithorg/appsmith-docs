# Widgets

[Widgets](./) help the user in building the app layout. Users can [store data](../../core-concepts/data-access-and-binding/displaying-data-read/) from a [Database](../datasources/) or an[ API ](../../core-concepts/connecting-to-data-sources/authentication/connect-to-apis.md)call, [trigger events](./../appsmith-framework/widget-actions/README.md), etc.

Widgets can be dragged from the widget pane, positioned on the canvas, and resized to fit the data they need to display. They also come with properties that can be visually edited to set their data, change their styles, and trigger actions from them.

![](</img/spaces\_sRqv8vEmanRWzCklPZou\_uploads\_kpwSwyVV6AnRPtthUHmq\_drop_widget.gif>)

## Add to Canvas

In the left navigation pane, navigate to PAGES —> Select the "Widget" Tab —> Choose your desired widget, and drag it onto the canvas. You can move it anywhere on the canvas by simply dragging it around.

### Naming a Widget

A widget must have a unique name that acts as an identifier on the page. It is used to access the properties of the widget everywhere in the application. In that sense, a name is like a variable in a programming language.

:::info
Note that [JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) are not valid as widget names.
:::

You can access the various properties of the widget using the widget's name.

```javascript
{{ Table1.selectedRow.id }}
```

### Grouping Widgets

Appsmith supports the grouping of widgets. When you group widgets, they are put in a container and can be moved together. To do this -

* Select multiple widgets with Ctrl + Left Click
* Now click on the dotted square icon or press Ctrl + G

![](/img/groupingwidget.gif)

### Common Properties

The following properties are common across many of Appsmith's widgets. You can find them by selecting your widget and checking its properties pane, and you can use them to customize the details and behavior of your app.

| Property            | Description                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off.                                                                                 |
| **Disabled**        | Makes the widget un-clickable or unusable. The widget remains visible to the user but user interaction won't be allowed.                                                                         |
| **Error Message**   | Sets the text of the error message to display if user input is considered invalid.                                                                                                               |
| **Tooltip**         | Sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                                    |
| **Placeholder**     | Sets the placeholder text within the input box. Use to show a hint or example value to the user.                                                                                                 |
| **Regex**           | Used to add custom regular expression validation to perform on user input. When the input doesn't match the regular expression, the input is considered invalid.                                 |
| **Required**        | Sets whether the input field is a mandatory field. When the input widget is within a Form widget, that Form's submit button is automatically turned off until a user adds input to the field.    |
| **Valid**           | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**. |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode.                                      |
| **Height**         | Auto height is a capability in widgets to change height in response to content changes. This is a configurable property. The configuration to this property can be found in the property pane under the section `General`, with the property name `Height`.                                      |

#### Disabled

It disables the user from entering values in the input widget. The widget is visible (if Visible is enabled), but user input won't be allowed. You can also write a JS code to link Disabled's functionality to a user action. Click on `JS` next to the `Disabled` to write JavaScript code.

For example, drag a checkbox widget `Checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Disabled property and prevents interaction with the input box.

<VideoEmbed host="youtube" videoId="JEARavnq0vQ" title="Disable" caption="Disable"/>

#### Error Message

If a user enters an incorrect value, the input widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

<VideoEmbed host="youtube" videoId="oeUHJhM4zyU" title="Error Message" caption="Error Message"/>

#### Tooltip

Tooltips are often used to show the user extra information about an element on the page, or to give them extra hints on how to use something. They're usually hidden until a certain condition is met, such as the user's mouse cursor hovering over the element.

The Tooltip property in Appsmith is used to set the text that appears within a floating box near the widget when the user mouses over it. In some cases (such as the Input widget), the tooltip is applied to a small question mark icon set within the widget, and appears when the user's cursor is placed over the icon.

<VideoEmbed host="youtube" videoId="UZ3MBVfNSzk" title="Tooltip" caption="Tooltip"/>

#### Placeholder

You can set a proxy text/value inside the input box using the `placeholder` property. It can be any message or hint for the expected input.

<VideoEmbed host="youtube" videoId="576Bfo8htf0" title="Placeholder" caption="Placeholder"/>

#### Regex

Using `Regex` or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, add a regular expression for entering a name. The name can contain only alphabetic characters and spaces between the first and last name.

```
/^[a-z -]+$/i
```

If you enter a value other than an alphabetic or space (number of special characters), the widget shows an error message "invalid input."

<VideoEmbed host="youtube" videoId="n6VUQN-wv9U" title="Regular Expression(Regex)" caption="Regular Expression(Regex)"/>

#### Required

Entering a value in the input box is mandatory when the required property is enabled. You can also write a JS code to link this property to a user action. Click on `JS` next to the `Required` to write JavaScript code.

For example, drag a checkbox widget `Checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Required property, and the input box shows an error message "This field is required" if you haven't entered any input.

<VideoEmbed host="youtube" videoId="2hqT02HCah8" title="Required" caption="Required"/>

#### Valid

The `Valid` property can be used to set a condition or expression that the user's input must meet in order for the widget to accept it. If the given condition isn't met, the widget shows a tooltip that contains the text that has been set within its **Error Message** property (or "Invalid input" if the property isn't set). Forms can also be configured such that they're not able to be submitted if one of their child widgets has user input that's considered invalid.

To see how the Valid property works, drag an Input widget onto the canvas and set the `Valid` property to the following:

```
{{Input1.text.length >= 3}}
```

Now when the field has fewer than three characters entered, a tooltip appears with the widget's **Error Message**, or the text "Invalid input."

<VideoEmbed host="youtube" videoId="rk3yzSoe6aw" title="Valid" caption="Valid"/>

#### Visible

`Visible` controls the widget's visibility on the app's page. The widget won't be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Visible property, and the input box will be visible in the app.

<VideoEmbed host="youtube" videoId="Jb5bNVhFoRE" title="Visible" caption="Visible"/>

#### Auto Height

Auto height is a capability in widgets to change height in response to content changes. This is a configurable property. The configuration to this property can be found in the property pane under the section `General`, with the property name `Height`.

[Auto height In Action](https://www.loom.com/share/261a0c6d9e914694885db2ee621d5462)

<details>
<summary>List of widgets with auto height</summary>

The auto height feature exists for a subset of Appsmith widgets.

Some widgets have auto height turned off by default. These need finishing touches for optimized resizing and will soon have it on by default.

| Widget           | Enabled by default |
| ---------------- | ------------------ |
| Container        | Yes                |
| Form             | Yes                |
| Tabs             | Yes                |
| Text             | Yes                |
| CheckboxGroup    | Yes                |
| Checkbox         | Yes                |
| RadioGroup       | Yes                |
| Radio            | Yes                |
| Rating           | Yes                |
| Switch           | Yes                |
| SwitchGroup      | Yes                |
| Stats Box        | Yes                |
| Modal            | Yes                |
| JSON form        | No                 |
| Input            | No                 |
| DatePicker       | No                 |
| CurrencyInput    | No                 |
| PhoneInput       | No                 |
| Rich Text Editor | No                 |
| MultiSelect      | No                 |
| MultiTreeSelect  | No                 |
| TreeSelect       | No                 |

</details>

##### Auto Height with Limits

Appsmith provides an option to set the limits to which a widget can grow or shrink in height. This can be configured to be enabled by selecting `Auto height with limits` from the `Height` property in the `General` section of the property pane. Once enabled, select the widget, to find two handles which also work as the values for the minimum and maximum height a widget can occupy on the canvas. These handles can be dragged to configure the minimum and maximum height limits for the widget.

[Auto Height with limits](https://www.loom.com/share/261a0c6d9e914694885db2ee621d5462)

:::note

- Container and Form widgets have a minimum height of 10 rows by default, which can be changed by choosing auto height with limits.
- The minimum height possible for any widget is 4 rows.

:::

##### Reflow

When a widget changes height, the layout adjusts to maintain the distance between the widget undergoing a height change and the sibling widgets below this widget occupying one or more of the same columns.

[Layout changes based on auto height](https://www.loom.com/share/a00448f098674ded99d51c48d5893d86)

##### Invisible widgets

Widgets which have auto height enabled, and are invisible in view and preview mode, let go of their occupied space, allowing widgets below to move up and occupy the now free space.

[Layout changes due to invisible widgets](https://www.loom.com/share/dd7ab3992acb45fe9124b214fcbf89b0)
