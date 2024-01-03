# Switch

This page provides instructions on using the Switch widget, which allows users to toggle between two states.

<ZoomImage src="/img/switch-img.png" alt="Display Switch" caption="Display Switch" />


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences. 

### Label

#### Text `string`

 <dd>
 Sets the label on the widget. 
 
 </dd>

#### Position `string`
<dd>
 Allows you to choose the placement of the label. You can choose:<br />

 * <b>Left</b> - Aligns the text to the left of the Switch.
 * <b>Right</b> - Aligns the text to the right of the Switch.

</dd>

#### Alignment `string`

<dd>

Alignment refers to how a label is positioned relative to a widget. By adjusting this property, you can bring the label closer to the switch within the widget's layout.

</dd>


### General

#### Default State `boolean`

<dd>

Determines whether the Switch is initially set to on or off.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects Yes from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's disable state conditionally.

For example, if you want to allow only a specific user to fill the input, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
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

### Events

#### onChange

Allows you to define a set of [actions](/reference/appsmith-framework/widget-actions) that would be executed in response to the switch state change.


## Style properties
Style properties allow you to change the look and feel of the widget.

#### Font color `string`

<dd>

Represents the text color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color).  It can also be manipulated programmatically using the JavaScript functions.

</dd>

#### Font size `string`

<dd>

Determines the font size of the label. It accepts [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values and can also be programmatically modified using JavaScript functions.

</dd>

#### Emphasis `string`
<dd>
Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions
</dd>

#### Accent color `string`

<dd>

The accent color property specifies the color used to highlight the switch when it is turned on. It accepts [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color) and can also be programmatically modified using JavaScript functions.

</dd>



## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `Switch1.isVisible`.

#### isSwitchedOn `boolean`

<dd>

The `isSwitchedOn` property retrieves a boolean value that indicates whether the switch is turned on. It returns `true` if the switch is `on` and `false` if it is `off`.

*Example:*

```js
{{Switch1.isSwitchedOn}}
```


</dd>


#### isDisabled `boolean`

<dd>

The `isDisabled` property reflects the state of the widget's Disabled setting. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

*Example:*

```js
{{Switch1.isDisabled}}
```


</dd>

#### isVisible `boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*

```js
{{Switch1.isVisible}}
```


</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Switch1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Switch1.setDisabled(false)
```



</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Switch1.setRequired(true)
```

</dd>

#### setValue (param: boolean): Promise

<dd>

Sets the value to be displayed in the widget.

*Example*:

```js
Switch1.setValue(true)
```


</dd>


#### setColor (param: string): Promise

<dd>

Sets the background color of the widget.

*Example*:

```js
Switch1.setColor('#FF0000')
```


</dd>
