---
description: Learn how to use the Switch Group widget which allows users to toggle multiple options.
---

# Switch Group

This page provides instructions on using the Switch Group widget, which allows users to toggle multiple options simultaneously.

<VideoEmbed host="youtube" videoId="p--j-QyBlAY" title="How to use Switch Group Widget" caption="How to use Switch Group Widget"/>


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data


#### Options `array<object>`


<dd>


This property allows you to set the labels and values for the items. Ensure that the values assigned to each option are unique. 

You can add these labels and values options in JSON format, like:


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
Additionally, you can dynamically display data by using JavaScript. For instance, you can use the `.map()` function to transform the data to the desired format, like:


```js
{{getdata.data.map( p => ({label: p.country, value: p.country}))}}
```


</dd>


#### Default Selected Values `string`

<dd>

Allows you to set default options in a widget. These options are initially selected when the widget is loaded, representing the user's default input unless modified. Multiple default items can be added by providing them as an array of values. 

*Example*:

```js
[
 "OPTION1", "OPTION2"
]
```


</dd>


### Label


#### Text `string`


<dd>
Sets the label on the widget.
</dd>




#### Position `string`


<dd>


This property allows you to configure the label's placement.

*Options:*
* **Auto**: Automatically positions the label based on the widget type and layout.
* **Left**: Aligns the label to the left side of the widget.
* **Top**: Positions the label above the widget.


</dd>

#### Alignment `string`

<dd>

This property is only available when you select **Left** from the Position property. It allows you to align the text to the left boundary or adjust it closer to the widget using the Right alignment option.


</dd>

#### Width `number`

<dd>

This property is only available when you select **Left** from the Position property. It allows you to control the proximity of the text to the widget, determining how close or far it can be positioned.


</dd>


### Validations


#### Required `boolean`


<dd>
This validation feature allows you to designate the Switch Group as a mandatory field. For instance, when the widget is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Switch Group is turned on/off.




</dd>


### General


#### Tooltip `string`
<dd>


This feature enables you to add hints or provide additional information to guide the user regarding the required input.
</dd>


#### Visible `boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

</dd>

#### Disabled `boolean`

<dd>

This property prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally.

</dd>

#### Inline `boolean`

<dd>

When the inline property is enabled, the items are displayed horizontally within the widget. When this property is turned off, the items are displayed in a vertical format.

</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>


#### Height `string`


<dd>
This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: The height of the widget remains as set using drag and resize.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>


### Events


#### onSelectionChange

<dd>

This event defines the action that would be executed when the user selects or deselects multiple or single items in the switch group. It allows you to specify a list of [actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the switch state change.

</dd>



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

Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions.

</dd>

### General

#### Alignment 

<dd>

It allows you to specify how the label should be positioned relative to the switch.

</dd>

### Color

#### Accent color `string`

<dd>

Defines the accent color of the widget, which is used as the fill color for the switch when it is turned on. It accepts [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color) and can also be programmatically modified using JavaScript functions.

</dd>


## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `SwitchGroup1.isVisible`.


#### selectedValues `array`

<dd>

The `selectedValues` property holds an array of values that represents the options selected by the user.

*Example:*

```js
{{SwitchGroup1.selectedValues}}
```



</dd>



