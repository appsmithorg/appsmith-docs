---
description: >-
  The Range Slider widget allows users to choose a range of values from
  numerical data.
---

# Range Slider

This page describes the properties of the Range Slider, which allows users to select a range of values within a specified minimum and maximum range. 


<ZoomImage src="/img/as_range.png" alt="Range Slider" caption="Range Slider" />

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Min Value `number`

<dd>

Indicates the lowest possible value that the slider can start from. The value can include negative numbers and decimals, but it should always be smaller than the **Maximum** Value. 

</dd>

#### Max Value `number`

<dd>

Indicates the highest possible value for the slider. The value can encompass negative numbers and decimals, but it must always surpass the **Minimum** Value.

</dd>

#### Step Size `number`

<dd>

Denotes the amount by which the user can modify the slider's value. This value must be at least 0.1 and less than or equal to **Min. Range**.

</dd>

#### Min. Range `number`

<dd>

The smallest permissible interval between the selected values. This value must be greater than or equal to **Step Size**.

</dd>


#### Default Start Value `number`

<dd>

Defines a starting value for the range, which serves as the initial point unless modified by the user. This numeric value should fall within the range of the **Min Value** and **Max Value**, and it should be lower than the **Default End Value**.

</dd>

#### Default End Value `number`

<dd>

Defines a ending value for the range, which serves as the end point unless modified by the user. This numeric value should fall within the range of the **Min Value** and **Max Value**, and it should be higher than the **Default Start Value.**

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

#### Width (in columns) `number`

<dd>

This property is only available when you select **Left** from the Position property. It allows you to control the proximity of the text to the widget, determining how close or far it can be positioned.


</dd>

### General


#### Tooltip `string`
<dd>


Enables you to add hints or provide additional information to guide the user regarding the required input.

</dd>

#### Show Marks `boolean`


<dd>

When enabled, this property displays the labels below the slider element within the widget.

</dd>


#### Marks `array<object>`

<dd>

Sets the label and corresponding values for the marks located below the slider.

*Expected data structure:*

```js
[
  {
    "value": 25,
    "label": "25%"
  },
  {
    "value": 50,
    "label": "50%"
  },
  {
    "value": 75,
    "label": "75%"
  }
]
```

Additionally, you can display dynamic data from queries or JS functions by binding the response to the **Marks** property. For example, if you have a query named `fetchData`, you can bind its response using:

*Example:*
```js
{{fetchData.data}}
```

If the query data is not in the expected format, you can use the `map()` function to transform it before passing it to the widget, like:

*Example:*
```js
{{fetchData.data.map( p => ({label: p.size, value: p.size}))}}
```

</dd>


#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
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

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>


#### Show value always `boolean`


<dd>

Maintains the constant visibility of a tooltip containing the current value.

</dd>

### Events

When the event is triggered, these event handlers can execute queries, JS functions, or other [supported actions](/reference/appsmith-framework/widget-actions).

#### onStartValueChange

<dd>

Specifies one or multiple actions to be triggered when the user changes the start value of the Range Slider.

</dd>

#### onEndValueChange

<dd>

Specifies one or multiple actions to be triggered when the user changes the end value of the Range Slider.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### General

#### Size `string`

<dd>

Defines the size of the slider.

Options:
* Small
* Medium
* Large

</dd>

### Label styles

#### Font color `string`

<dd>

Represents the text color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the font color can be programmatically modified using JavaScript functions.

</dd>

#### Font size `string`

<dd>

Determines the font size of the label. It accepts [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values and can also be programmatically modified using JavaScript functions.

</dd>

#### Emphasis `string`

<dd>

Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions.

</dd>

### Color

#### Fill color `string`

<dd>

Represents the color of the slider, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the font color can be programmatically modified using JavaScript functions.

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `RangeSlider1.isVisible`.

#### start `number`

<dd>

Enables you to retrieve the start value that has been selected with the slider. 

*Example:*
```js
{{RangeSlider1.start}}
```

</dd>

#### start `number`

<dd>

Enables you to retrieve the end value that has been selected with the slider. 

*Example:*
```js
{{RangeSlider1.end}}
```

</dd>


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{RangeSlider1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
RangeSlider1.setDisabled(false)
```

</dd>


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
RangeSlider1.setVisibility(true)
```

</dd>