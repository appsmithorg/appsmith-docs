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

Sets the text to be displayed. The text would remain unchanged until manually updated or edited. 

To display dynamic text that changes based on user interactions or external data, you can connect widget's reference properties. For instance, clicking on a row in a Table widget displays specific task details in a Text widget.

*Example:*

```js
{{Table1.selectedRow.task}}
```

Additionally, you have the option to utilize HTML code within the Text field to customize the appearance of the displayed text. Note that the Text field supports only inline CSS. If you need to use external CSS, it is recommended to utilize the Iframe widget.

*Example:*

```js
<p style="color:blue;">Hello World</p>
```

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

Sets the color for the text in the table. Additionally, the text color can be programmatically modified using JavaScript functions.

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

Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions.

</dd>


### Border and shadow

#### Border Width	 `number`

<dd>

Sets the width of the widget's border. Accepts number values only, in px.

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

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility(`:boolean`)

<dd>

Sets the visibility of the widget.

*Example*:

```js
Text1.setVisibility(true)
```


</dd>


#### setDisabled(`:boolean`)

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Text1.setDisabled(false)
```

</dd>

#### setRequired(`:boolean`)

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Text1.setRequired(true)
```


</dd>

#### setText(`:string`)

<dd>

Sets the text value of the widget.

*Example*:

```js
Text1.setText('Hello, world!')
```

</dd>







#### setTextColor(`:string`)

<dd>

Sets the selected option of the Select widget.

*Example*:

```js
Text1.setColor('#FF0000')
```

To perform sequential actions, use the `.then()` block for execution.

```js
Text1.setColor('#FF0000').then(() => {
  // code to be executed after color is set
})
```

</dd>