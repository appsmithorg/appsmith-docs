# Checkbox

A Checkbox is a simple UI widget you can use when you want users to make a binary choice.

![Click to expand](/img/checkbox.gif)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Checkbox widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property             | Description                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Label**            | Sets the text shown within the widget.  |
| **Position**         | Sets whether the label of the checkbox is aligned to the left or right side of the widget.  |
| **Alignment**        | Sets whether the checkbox is aligned to the left or right side of the widget.  |
| **Default Selected** | Sets whether the checkbox begins checked or unchecked by default.  |
| **Required**         | Sets whether the checkbox is a mandatory field. When the checkbox is within a Form widget, that Form's submit button is automatically disabled until the Checkbox is checked. |
| **Visible**          | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.  |
| **Disabled**         | Makes the widget inactive or unusable. The widget remains visible to the user but user interaction isn't allowed.   |
| **Animate Loading**  | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |



### Binding properties

These properties allow you to bind your Checkbox widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| **isChecked**    | Represents whether the checkbox is currently checked _(bool)_.    |
| **isDisabled**   | Reflects the state of the widget's **Disabled** setting _(bool)_. |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_.  |

### Events

You can define functions that are called when these events are triggered in the widget.

| Events            | Description                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **onCheckChange** | Sets the action to be run when the user checks/unchecks a checkbox. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Text Color**    | Represents the widget's **Text color** setting as a CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)value _(string)_.                                          |
| **Text Size**     | Sets the font size of the widget's **Label** text. Accepts CSS `font-size` values.                                                                                                   |
| **Accent Color**  | Sets the widget's accent color, which appears as the fill color for the checkbox when checked. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values. |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.     |
