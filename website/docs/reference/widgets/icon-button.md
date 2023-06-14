# Icon Button

This page provides information on using the Icon button widget, which allows you to add icons to your buttons.

## Content properties
These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Basic

#### Icon `string`

<dd>

Specifies the icon to be displayed on the button. Additionally, you can use **JS** to dynamically set the icon. You can refer to the documentation of [blueprintjs](https://blueprintjs.com/docs/#icons) to explore a wide range of available icons. 

</dd>


#### onClick

<dd>

Specifies the [action](/reference/appsmith-framework/widget-actions) to be performed when the user clicks on the widget. 
</dd>

### General

#### Tooltip `string`
<dd>


Enables you to add hints or provide additional information to guide the user regarding the required input.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's disable state conditionally.

For example, if you want to allow only a specific user to click on the Icon Button, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Icon Button widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tooltip**         | Sets a tooltip that appears when the user hovers over the widget with the mouse. Use this to provide hints or extra information to the user.                                                           |
| **Disabled**        | Makes the widget inactive or unusable. The widget remains visible to the user but user interaction is not allowed.                                                                        |
| **Visible**         | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |

### Binding properties

These properties allow you to bind your Icon Button widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_. |

### Events



You can define functions are called when these events are triggered in the widget.

| Event       | Description                                                                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets an action to take place when the user clicks on this widget. Can be set from the GUI list of common actions ([supported actions](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property     | Description                                                                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Icon**           | Sets an icon to be included on the button.                                                                                                                                                                                     |
| **Button Color**   | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                                                             |
| **Button Variant** | Sets the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the _string_ "PRIMARY," "SECONDARY," or "TERTIARY." |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                               |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.                                                  |

:::info
Currently Appsmith uses the icons from [Blueprint](https://blueprintjs.com) library. You can see the list of icons [here](https://blueprintjs.com/docs/#icons).
:::
