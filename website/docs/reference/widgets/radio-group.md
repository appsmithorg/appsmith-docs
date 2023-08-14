# Radio Group

This page provides information on using the Radio Group widget, which allows users to select one option from a predefined set of choices.


<VideoEmbed host="youtube" videoId="ZQ3CKFx3cbM" title="How to use Radio Group Widget" caption="How to use Radio Group Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Options `array<object>`

<dd>

This property allows you to set the labels and values for the items. You can add these labels and values directly from the user interface. Ensure that the values assigned to each option are unique. Additionally, you can turn on **JS** and provide options in JSON format, like:

*Example*:
```js
[
  {
    "label": "Yes",
    "value": "yes"
  },
  {
    "label": "No",
    "value": "no"
  }
]
```

You can also dynamically display data by using JavaScript. For instance, you can use the `.map()` function to transform the data to the desired format, like:

*Example*:

```js
{{getdata.data.map( p => ({label: p.country, value: p.country}))}}
```
</dd>

#### Default selected value `string`

<dd>

This option allows you to set a default value in a widget, which is initially selected unless the user changes it.

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

When enabled, this property makes the Radio Group a mandatory field. When the Radio Group is placed within a Form widget, enabling the **Required** property ensures that the Form's submit button remains disabled until the Radio Group has some value.

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
When this property is turned on, the radio items are displayed horizontally. However, when the property is turned off, the radio items are displayed in a vertical line.
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

This event defines the action that would be executed when the user selects or deselects item in the Radio Group. It allows you to specify a list of [actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the widget state change.

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

Allows you to specify the alignment of the label. 

</dd>

#### Accent color `String`

<dd>

Defines the accent color of the widget, which is used as the fill color for the radio when it is selected. It accepts [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color) and can also be programmatically modified using JavaScript functions.

</dd>

## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `RadioGroup1.isVisible`.



#### options `Array`

<dd>

The `options` property is an array that contains the values of all the available options.

*Example:*
```js
{{RadioGroup1.options}}
```
</dd>

#### selectedOptionValue `string`

<dd>

The `selectedValues` property holds an array of values that represents the options selected by the user.

*Example:*
```js
{{RadioGroup1.selectedOptionValue}}
```

</dd>

#### isRequired `boolean`

<dd>

This property indicates whether the widget is required or not.	

*Example:*
```js
{{RadioGroup1.isRequired}}
```

</dd>

#### isVisible `Boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{RadioGroup1.isVisible}}
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
RadioGroup1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
RadioGroup1.setDisabled(false)
```

</dd>

#### setData (param: array<object\>): Promise

<dd>

Allows you to dynamically set the data of the widget.

*Example*:

```js
RadioGroup1.setData([{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }])
```

</dd>