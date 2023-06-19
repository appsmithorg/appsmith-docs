# Checkbox

This page provides instructions on using the Checkbox widget to allow users to check or uncheck an item.

<figure>
  <img src="/img/checkbox-img-.png" style= {{width:"700px", height:"auto"}} alt="Display Checkbox"/>
  <figcaption align = "center"><i>Display Checkbox</i></figcaption>
</figure>

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences. 

### Label

#### Text `String`

 <dd>Sets the label of the Checkbox. 
 
 </dd>

#### Position `String`
<dd>
 Allows you to choose the placement of the label. You can choose:<br />

 * <b>Left</b> - Aligns the text to the left of the Checkbox.
 * <b>Right</b> - Aligns the text to the right of the Checkbox.

</dd>

#### Alignment `String`

<dd>
Alignment refers to how a label is positioned relative to a widget. By adjusting this property, you can control the visual alignment of the label within the widget's layout
</dd>

### Validations


#### Required `Boolean`

<dd>

This validation feature allows you to designate the Checkbox as a mandatory field. For instance, when the Checkbox is placed within a Form widget, enabling the **Required** property ensures that the Form's submit button remains disabled until the checkbox is checked. 

</dd>

### General

#### Default State `Boolean`

<dd>
Determines the default state of the checkbox, whether it is checked or unchecked.

</dd>

#### Visible `Boolean`
<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

</dd>


#### Disabled `Boolean`

<dd>

This property prevents users from selecting the Checkbox widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally. 
</dd>

#### Animate Loading `Boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Height `String`

<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:

* **Fixed**: The height of the widget remains as set using drag and resize.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

### Events

#### onCheckChange

This event defines the action that would be executed when the user checks or unchecks a checkbox. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the checkbox state change.


## Style properties
Style properties allow you to change the look and feel of the widget.

#### Font color `String`

<dd>

Represents the text color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color).  It can also be manipulated programmatically using the JavaScript functions.

</dd>

#### Font size `String`

<dd>

Determines the font size of the label. It accepts [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values and can also be programmatically modified using JavaScript functions.

</dd>

#### Emphasis `String`
<dd>
Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions
</dd>

#### Accent color `String`

<dd>

Defines the accent color of the widget, which is used as the fill color for the checkbox when it is checked. It accepts [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color) and can also be programmatically modified using JavaScript functions.

</dd>

#### Border radius `String`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `Checkbox1.isVisible`.

#### isChecked `Boolean`
<dd>

The `isChecked` property indicates whether the checkbox is currently checked or not. It is represented by a boolean value, where true signifies that the checkbox is checked, and false signifies that it is unchecked. 

</dd>

#### isDisabled `Boolean`

<dd>

The `isDisabled` property reflects the state of the widget's **Disabled** setting. It is represented by a boolean value, where true indicates that the widget is disabled, and false indicates that it is enabled for user interaction.
</dd>

#### isVisible `Boolean`
<dd>

The `isVisible` property reflects the state of the widget's **Visible** setting. It is represented by a boolean value, where true indicates that the widget is visible, and false indicates that it is hidden or not displayed on the page.
</dd>


## Methods

The methods provided by the widget allow users to dynamically update and manipulate its properties, facilitating the creation of dynamic and interactive applications without the need for manual property modifications. 

These setter methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Checkbox1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Checkbox1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setValue `boolean`

<dd>

Allows you to dynamically set the value of the Checkbox widget.

*Example*:

```js
Checkbox1.setValue(true).then(() => {
  // code to be executed after value is set
})
```

</dd>


#### setRequired `boolean`

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Checkbox1.setRequired(true).then(() => {
  // code to be executed after required state is set
})
```

</dd>

