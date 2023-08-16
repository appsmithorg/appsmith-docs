---
description: >-
  Code Scanner widget reference
---

# Code Scanner

This page describes the properties of the Code Scanner widget, which is used for scanning barcodes and QR codes. 

<VideoEmbed host="youtube" videoId="Suhefwa5pz0" title="How To Build A Self-Checkout Payment System With The Code Scanner Widget" caption="Building a Self-Checkout Payment System with Code Scanner Widget"/>

The following formats for QR and barcodes are supported:

| 1D product | 1D industrial | 2D          |
| ---------- | ------------- | ----------- |
| UPC-A      | Code 39       | QR Code     |
| UPC-E      | Code 128      | Data Matrix |
| EAN-8      | ITF           | Aztec       |
| EAN-13     | RSS-14        | PDF 417     |

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Basic

#### Scanner layout

<dd>

Determines the visual appearance and behavior of the code scanner widget.

*Options:*

- **Always On**:  The code scanner widget is always active and ready for scanning.
- **Click to Scan**: The code scanner widget acts as a button that is activated only when clicked by the user.

</dd>

#### Text `string`

<dd>

Specifies the label text displayed alongside the scanning widget. This property is only available when the Scanner layout is selected as **Click to Scan**.

</dd>

### General 

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Code Scanner widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the Code Scanner widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Tooltip `string`

<dd>

Sets a tooltip that appears when the user hovers over the widget. It enables you to add hints or provide additional information for the button. The icon properties are only available for the **Click to Scan** Scanner layout option.

</dd>

### Events

When an event is triggered, these event handlers can execute queries, JS code, or other supported [actions](/write-code/reference/widget-actions).

#### onCodeDetected

<dd>

Triggered when a valid code is detected.

</dd>

## Style properties

Style properties allow you to change the look and feel of the button.

### Icon

The icon properties are only accessible for the **Click to Scan** Scanner layout option.

#### Select icon `string`

<dd>

Specifies the icon to be displayed on the widget. Additionally, you can use **JS** to dynamically set the icon. You can refer to the documentation of [blueprintjs](https://blueprintjs.com/docs/#icons) to explore a wide range of available icons.

</dd>

#### Position `string`

<dd>

This property allows you to configure the **Icon**'s placement.

*Options:*
* **Left**: Aligns the icon to the left side of the Text.
* **Right**: Aligns the icon to the right side of the Text.


</dd>

#### Placement `string`

<dd>

Determines the spacing between the **Icon** and the **Text**.

*Options:*
* **Start**: The icon and text appear on the leftmost side of the button.
* **Between**: The icon and text appear at opposite ends of the button's space.
* **Center**: The icon and text appear in the center of the button space.

This property can be dynamically set using JavaScript by providing a string value of `START`, `CENTER`, or `BETWEEN`.

</dd>

### Color

#### Button color `string`

<dd>

Represents the color of the button, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the font color can be programmatically modified using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify a valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>

## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Select widget, you can use `CodeScanner1.isVisible`.

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's Disabled setting. It is represented by a boolean value, where `true` indicates that the widget is disabled, and `false` indicates that it is enabled for user interaction.

*Example:*

```js
{{Select1.isDisabled}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Select1.isVisible}}
```

</dd>

#### value `string`

<dd>

Retrieves the scanned code value from the widget.

*Example:*

```js
{{CodeScanner1.value}}
```

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/write-code/how-to-guides/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
CodeScanner1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
CodeScanner1.setDisabled(false)
```

</dd>