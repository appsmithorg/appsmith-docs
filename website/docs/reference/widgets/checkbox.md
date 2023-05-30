# Checkbox

This page provides instructions on how to use the Checkbox widget to allow users to make a binary choice by selecting or deselecting the checkbox.

<figure>
  <img src="/img/checkbox-img.png" style= {{width:"700px", height:"auto"}} alt="Display Checkbox"/>
  <figcaption align = "center"><i>Display Checkbox</i></figcaption>
</figure>

## Content properties

Content properties are customizable options present in the property pane of the widget, allowing users to modify the widget's content and appearance according to their preferences. These properties are present in the property pane of the widget.

#### Text `String`

 <dd>This property allows you to set the label text. For instance, when seeking user consent for terms and conditions, you can set the label text as <code>Terms & Conditions</code>.</dd>

#### Position `String`
<dd>
 This property in the Checkbox widget allows you to choose the placement of the label. You can choose:<br />

 * <b>Left</b> - Aligns the text to the left of the Checkbox.
 * <b>Right</b> - Aligns the text to the right of the Checkbox.

</dd>

#### Alignment `String`

<dd>
This property determines the positioning of the checkbox itself, either to the left or right side of the widget. By adjusting this property, you can control the visual alignment of the checkbox within the widget's layout
</dd>


#### Required `Boolean`

<dd>
This is a validation feature that allows you to designate the checkbox as a mandatory field. For instance, When the checkbox is placed within a Form widget, enabling the "Required" property ensures that the Form's submit button remains disabled until the checkbox is checked. 

</dd>

#### Default State `Boolean`

<dd>
This property determines whether the checkbox starts in a checked or unchecked state by default.
</dd>

#### Visible `Boolean`
<dd>

This property controls the visibility of the widget on the app's page. If you disable this property, the widget would not be visible on the published app. Additionally, you can use JavaScript by clicking on <code>JS</code> next to the "Visible" property to write code that links the visibility of the widget to a specific user action.
</dd>

#### Disabled `Boolean`

<dd>

This property prevents users from selecting the checkbox widget. Even though the widget remains visible, user input is not permitted. If desired, you can write JavaScript code by clicking on <code>JS</code> next to the "Disabled" property to write code that links to a specific user action.

</dd>

#### Animate Loading `Boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. You can also control it through JavaScript by activating the <code>JS</code> label next to the property.

</dd>

#### Height `String`

<dd>

This property determines how the widget's height adjusts to changes in its content. It can be configured in three ways:

* **Fixed**: The height of the widget remains as set using drag and resize.
* **Auto Height**: The height of the widget reacts to content changes.
* **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.

</dd>

#### onCheckChange

This event property defines the action that would be executed when the user checks or unchecks a checkbox. It allows you to specify a list of [supported actions](http://localhost:3000/reference/appsmith-framework/widget-actions) that can be triggered in response to the checkbox state change.


## Style properties
Style properties allow you to change the look and feel of the widget.

#### Font color `String`

<dd>

Represents the text color of the widget, specified as a `CSS` color value. This property can also be controlled through JavaScript by using the appropriate functions.

</dd>

#### Font size `String`

<dd>

Sets the font size of the widget's label text. It accepts `CSS` font-size values.
</dd>

#### Emphasis `String`
<dd>
This property enables you to select a font style for the widget, such as bold or italic. 
</dd>

#### Accent color `String`

<dd>

Defines the accent color of the widget, which is used as the fill color for the checkbox when it is checked. It accepts `CSS` color values.
</dd>

#### Border radius `String`

<dd>

Rounds the corners of the widget's outer edge. If JavaScript is enabled, you can provide valid CSS `border-radius` values to control the radius.

</dd>

## Reference properties
These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the visibility status, you can use `Checkbox.isVisible`.

#### isChecked `Boolean`
<dd>

The `isChecked` property indicates whether the checkbox is currently checked or not. It is represented by a boolean value, where true signifies that the checkbox is checked, and false signifies that it is unchecked. For instance, you can use `{{Checkbox1.value}}` to bind the value to other widgets or JavaScript functions.

</dd>

#### isDisabled `Boolean`

<dd>

The `isDisabled` property reflects the state of the widget's "Disabled" setting. It is represented by a boolean value, where true indicates that the widget is disabled, and false indicates that it is enabled for user interaction.
</dd>

#### isVisible `Boolean`
<dd>

The `isVisible` property reflects the state of the widget's "Visible" setting. It is represented by a boolean value, where true indicates that the widget is visible, and false indicates that it is hidden or not displayed on the page.
</dd>

