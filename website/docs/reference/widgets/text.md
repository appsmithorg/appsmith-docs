---
description: Learn how to use the Text widget to display static or dynamic textual information
---
# Text

This page provides information on using the Text widget to display static or dynamic textual information.


<VideoEmbed host="youtube" videoId="-anmDHXDScQ" title="Use the Text widget to display data" caption="Use the Text widget to display data"/>

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Text `string`


<dd>

Sets the text to be displayed. The text remains unchanged until manually updated or edited. 

You can dynamically change text by fetching data from queries or JS functions and binding the response to the **Text** property. For instance, when a row in a Table widget is clicked, the Text widget dynamically displays the specific name associated with that row.

*Example:*

```js
{{Table1.selectedRow.name}}
```

You have the option to use HTML code within the **Text** property to customize the appearance of the displayed text. Note that the Text field supports only inline CSS. If you need to use external CSS, it is recommended to use the [Iframe widget](/reference/widgets/iframe).

*Example:*

```js
<p style="color:blue;">Hello World</p>
```

This code displays the text Hello World in blue color.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Disable link `boolean`


<dd>

Enabling this option treats any link in the widget as standard text instead of clickable links.

</dd>


#### Height `string`


<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: The widget's height remains as set using drag and resize.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>

## Style properties
Style properties allow you to change the look and feel of the widget.

### General

#### Font family `string`

<dd>

Enables you to choose a font for the text, which can also be programmatically manipulated using JavaScript functions.

</dd>

#### Font size `string`

<dd>

Determines the font size of the text. It accepts [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values and can also be programmatically modified using JavaScript functions.

</dd>

### Color

#### Text Color `string`

<dd>

Sets the color for the text, and when JS is enabled, you can dynamically modify the text color using JavaScript functions.

</dd>

### Text formatting


#### Alignment `string`

<dd>

Sets the horizontal alignment of the text within the cells.

*Options*:
* Left
* Center
* Right

</dd>

#### Emphasis `String`

<dd>

Allows you to choose a font style for the widget, including options like bold or italic. When JS is enabled, you can dynamically modify the font style using JavaScript functions.

</dd>


### Border and shadow

#### Border Width	 `number`

<dd>

Specifies the width of the widget's border, accepting only numerical values in pixels (px).

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Text1.isVisible`.

#### text `string`

<dd>

The `text` property retrieves the current text value of the widget.


*Example:*
```js
{{Text1.text}}
```

</dd>



#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*
```js
{{Text1.isVisible}}
```

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith, like:


#### setVisibility(param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Text1.setVisibility(true)
```


</dd>


#### setDisabled(param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Text1.setDisabled(false)
```

</dd>

#### setRequired(param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Text1.setRequired(true)
```


</dd>

#### setText(param: string): Promise

<dd>

Sets the text value of the widget.

*Example*:

```js
Text1.setText('Hello, world!')
```

</dd>







#### setTextColor(param: string): Promise

<dd>

Sets the selected option of the Select widget.

*Example*:

```js
Text1.setColor('#FF0000')
```



</dd>