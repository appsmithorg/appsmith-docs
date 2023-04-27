# Icon Button

Icon button widget is just an icon, along with all other button properties.

![](/img/icon-button.gif)

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
