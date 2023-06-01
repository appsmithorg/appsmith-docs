# Checkbox Group

This page provides instructions on using the Checkbox Group widget to allow users to select multiple items from a predefined set of choices. 

<VideoEmbed host="youtube" videoId="-7cvZ2yCgtE" title="Using the Checkbox Group Widget" caption="Using the Checkbox Group Widget"/>




## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data


#### Options `String`


<dd>


This property allows you to set the labels and values for the items. You can add these labels and values directly from the user interface or use JavaScript by providing options in JSON format, like:


```js
[
 {
   "label": "Option1",
   "value": "OPTION1"
 },
 {
   "label": "Option2",
   "value": "OPTION2"
 }..
]
```
Ensure that the values assigned to each option are unique. Additionally, you can dynamically display data by using JavaScript. For instance, you can use the `.map()` function to transform the data to the desired format, like:


```js
{{getdata.data.map( p => ({label: p.country, value: p.country}))}}
```


</dd>


#### Default Selected Values `String`
<dd>
Allows you to set default options in a widget. These options are initially selected when the widget is loaded, representing the user's default input unless modified. Multiple default items can be added by providing them as an array of values. For example:


```js
[
 "OPTION1", "OPTION2"
]
```


</dd>


### Label


#### Text `String`


<dd>
Sets the label of the Checkbox.
</dd>




#### Position `String`


<dd>


This property allows you to configure the label's placement in three ways:


* **Auto**: Automatically positions the label based on the widget type and layout.
* **Left**: Aligns the label to the left side of the widget.
  * **Alignment**: You can also control the text's placement relative to the Checkbox Group. You have the choice to align it either to the **Left** boundary or closer to the Checkbox Group using the **Right** alignment option.
  * **Width**: This allows you to control the proximity of the text to the Checkbox Group, determining how close or far it can be positioned.
* **Top**: Positions the label above the widget.


</dd>


### Validations


#### Required `Boolean`


<dd>
This validation feature allows you to designate the Checkbox Group as a mandatory field. For instance, when the Checkbox is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Checkbox Group is checked.




</dd>


### General


#### Tooltip `String`
<dd>


This feature enables you to add hints or provide additional information to guide the user regarding the required input.
</dd>


#### Visible `Boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

</dd>

#### Disabled `Boolean`

<dd>

This property prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally.

</dd>

#### Inline `Boolean`

<dd>
When this property is turned on, the checkbox items are displayed horizontally. However, when the property is turned off, the checkbox items are displayed in a vertical line.
</dd>

#### Select All Options `Boolean`

<dd>

When the property is turned on, a **Select All** item is displayed, allowing the user to select all available options with a single click.

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


#### onSelectionChange

<dd>

This event defines the action that would be  executed when the user selects or deselects multiple or single items in the checkbox group. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the checkbox state change.

</dd>



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

Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions.

</dd>

#### Alignment 

<dd>

Allows you to specify the alignment between options. This property provides various options such as **None**, **Start**, **End**, **Center**, **Between**, and **Around**, which determine the spacing and arrangement of the options within the designated area. 

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
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `CheckboxGroup1.isVisible`.



#### options `Array`

<dd>

The `options` property is an array that contains the values of all the available options.

</dd>

#### selectedValues `Array`

<dd>

The `selectedValues` property holds an array of values that represents the options selected by the user.

</dd>

#### isValid `Boolean`

<dd>

The valid property indicates the validation status of a widget, providing information on whether the widget's current value is considered valid or not.

</dd>

#### isDisabled `Boolean`

<dd>

The `isDisabled` property indicates the disabled status of a widget. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

</dd>

#### isVisible `Boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

</dd>