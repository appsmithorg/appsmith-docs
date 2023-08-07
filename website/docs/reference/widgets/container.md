---
description: >-
  Container widget reference
---

# Container

This page describes how to use Container widgets to group multiple widgets. You can either drop the widgets inside a Container widget or select the widgets and use `cmd+g` to create a Container widget.

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Container widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Height `string`

<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:

- **Fixed:** The height of the widget remains as set using drag and resize.
- **Auto Height:** The widget's height adjusts dynamically in response to changes in its content.
- **Auto Height with limits:** Same as Auto height, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Color

#### Background color `string`

<dd>

Sets the background color of the widget. If JavaScript is enabled, you can specify a valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) value to adjust the background color.

</dd>

#### Border color `string`

<dd>

Sets the border color of the widget. If JavaScript is enabled, you can specify a valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) value to adjust the border color.

</dd>

### Border and shadow

#### Border width `string`

<dd>

Sets the width of the widget's border.

</dd>

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 
<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Container widget, you can use `Container1.isVisible`.

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Container1.isVisible}}
```

</dd>

#### backgroundColor `string`

<dd>

Represents the widget's **Background Color** setting as a [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) value.

*Example:*

```js
{{Container1.backgroundColor}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Container1.setVisibility(true)
```

</dd>