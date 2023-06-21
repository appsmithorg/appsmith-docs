# Divider

The Divider widget is used to visually separate or compartmentalise different parts of your application.


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Divider widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Orientation**     | Sets whether the line of the widget is oriented horizontally or vertically. With JS enabled, accepted values are "horizontal" or "vertical."                                                           |
| **Visible**         | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |

### Binding properties

These properties allow you to bind your Divider widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Property         | Description                                                                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **capSide**      | Reflects the widget's **Cap Position** style property, shows which sides of the divider line have a cap. Values are _numbers_, either -1 (left or top only), 0 (both sides), or 1 (right or bottom only). |
| **capType**      | Reflects the widget's **Cap** style property, shows whether the divider line is capped with a dot, an arrow, or no cap. Values are _strings_ "dot," "arrow," or "nc."                                     |
| **dividerColor** | Contains the color of the divider line, represented as a hexadecimal color code.                                                                                                                          |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                                                                          |
| **orientation**  | Reflects the **Orientation** property of the widget, values are _strings_ either "horizontal" or "vertical."                                                                                             |
| **strokeStyle**  | Reflects the widget's **Dash Style** property as a _string_ with value either "solid," "dashed," or "dotted."                                                                                            |
| **thickness**    | Reflects the thickness of the divider line as a _number_ of pixels.                                                                                                                                       |

### Style

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dash Style**    | Sets the type of line used for the divider, either Solid, Dashed, or Dotted. With JS enabled, accepts _strings_ with value "solid," "dashed," or "dotted." |
| **Thickness**     | Sets the thickness of the divider line in pixels. Accepts _number_ values.                                                                                 |
| **Divider Color** | Sets the color of the divider line. Accepts valid CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                            |
| **Cap**           | Sets the type of cap to use on the divider line; none, arrows, or dots. With JS enabled, accepts _strings_ with value "nc," "arrow," or "dot."             |
| **Cap Position**  | Sets which sides of the divider line have caps. With JS enabled, accepts _number_ values -1 (left/top), 0 (both), or 1 (right/bottom).                     |


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Divider1.setVisibility(true)
```

To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Divider1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>