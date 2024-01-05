---
description: Learn how to use the Stats Box widget to display statistical information.
---
# Stats Box

This page provides information on using the Stats Box widget, a container that presents statistics with customizable layout options. The Stats Box widget comes pre-built with a default layout, including three Text widgets and one Icon widget.


<ZoomImage src="/img/stat-img.png" alt="Stats Box" caption="Stats Box" />


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences. 

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects Yes from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Animate Loading `boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Height `string`


<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: Maintains a constant height for the widget, allowing you to adjust it by dragging or using the resize handle.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Color

#### Background color `string`

<dd>

Specifies the background color of the Stats Box container.


</dd>

#### Border color `string`

<dd>

Specifies the color of the widget's border. You can define the color using an HTML color name, HEX, RGB, or RGBA value.


</dd>

### Border and shadow

#### Border width `number`

<dd>
Sets the value for border width.

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
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `Statsbox1.isVisible`.

As the Stats Box widget works as a container, you can access the values of other widgets using their respective reference properties. For example, to access the text value of a Text widget, you can use `Text1.text`.

#### isVisible `boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*

```js
{{Statsbox1.isVisible}}
```


</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.

#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Statbox1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Statbox1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>