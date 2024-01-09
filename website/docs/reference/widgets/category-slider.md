---
description: >-
  The Category Slider widget allows users to choose from a fixed set of
  incremental values.
---
# Category Slider

This page describes the properties of the Category Slider, which allows users to make selections from a predetermined set of ascending options. 

<ZoomImage src="/img/as_category.png" alt="Category Slider" caption=" Category Slider" />

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Options `array<object>`

<dd>

Allows you to set the labels and unique values for the items. You can add these labels and values directly from the user interface or use JavaScript by providing options in JSON format, like:

```js
[
  {
    "label": "XS",
    "value": "xs"
  },
  {
    "label": "SM",
    "value": "sm"
  },
  {
    "label": "MD",
    "value": "md"
  },
  {
    "label": "LG",
    "value": "lg"
  },
  {
    "label": "XL",
    "value": "xl"
  }
]
```

Additionally, you can display dynamic data from queries or JS functions by binding the response to the **Options** property. For example, if you have a query named `fetchData`, you can bind its response using:

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


#### Default value `string`

<dd>

Enables you to set a default option. This option is initially selected when the widget is loaded, representing the user's default input unless modified. 

To set this property, assign it a value that corresponds to the value attribute of the desired option from the **Options** property.

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
* **Left**: Aligns the label to the left side of the widget.
* **Top**: Positions the label above the widget.


</dd>

#### Alignment `string`

<dd>

This property is only available when you select **Left** from the Position property. It allows you to align the text to the left boundary or adjust it closer to the widget using the Right alignment option.


</dd>

#### Width (in columns)`number`

<dd>

This property is only available when you select **Left** from the Position property. It allows you to control the proximity of the text to the widget, determining how close or far it can be positioned.


</dd>

### General


#### Tooltip `string`
<dd>


Enables you to add hints or provide additional information to guide the user regarding the required input.

</dd>

#### Show marks `boolean`

<dd>

When enabled, this property displays the labels below the slider element within the widget.

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

For example, if you want to allow only a specific user to select the option, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`


<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

### Events

When the event is triggered, these event handlers can execute queries, JS functions, or other [supported actions](/reference/appsmith-framework/widget-actions).

#### onChange

<dd>

Specifies one or multiple actions to be triggered when the user changes the value of the Number Slider.

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

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `CategorySlider1.isVisible`.

#### value `string`

<dd>

Allows you to access the value that has been selected with the slider. 

*Example:*
```js
{{CategorySlider1.value}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{CategorySlider1.isVisible}}
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
CategorySlider1.setDisabled(false)
```

</dd>


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
CategorySlider1.setVisibility(true)
```



</dd>


#### setValue (param: string): Promise

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
CategorySlider1.setValue('xl')
```


</dd>