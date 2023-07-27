---
description: >-
  Select widget reference
---

# TreeSelect

This page explains how to use the Treeselect widget to allow users to select a single option from a hierarchical list.


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Options `array`

<dd>

Use to set labels and values for options in the list of the Treeselect widget. Options must be specified as an array of objects with a label and value property. The tree structure can be added to any option by adding the children field that should be an object. For example:

```js
[
  {
    "label": "Blue",
    "value": "BLUE",
    "children": [
      {
        "label": "Dark Blue",
        "value": "DARK BLUE"
      },
      {
        "label": "Light Blue",
        "value": "LIGHT BLUE"
      }
    ]
  },
  {
    "label": "Green",
    "value": "GREEN"
  },
  {
    "label": "Red",
    "value": "RED"
  }
]
```
You can dynamically generate options by fetching data from queries or JS functions by binding the response to the **Options** property. For example, if you have a query named `fetchData`, you can bind its response using:

```js
{{fetchData.data}}
```

If the retrieved data is not in the desired format, you can use JavaScript to transform the data by adding it to the **Options** property in the TreeSelect widget. For example, you have a database that includes a column for product categories (type), as well as other product details such as its name and description. To transform this data, use:

*Example*:

```js
{{ getdata.data.reduce((acc, cur) => {
  const group = acc.find(item => item.value === cur.type);
  group ? group.children.push({ label: cur.name, value: cur.name }) : acc.push({ label: cur.type, value: cur.type, children: [{ label: cur.name, value: cur.name }] });
  return acc;
}, []) }}
```
This code takes an array of products and creates a nested data structure that groups the products by their type, making it easier to display them in a hierarchical view.

<figure>
  <img src="/img/tree-js-3.png" style= {{width:"700px", height:"auto"}} alt="Display options dynamically"/>
  <figcaption align = "center"><i>Transform data using JavaScript</i></figcaption>
</figure>

</dd>


#### Default selected value `string`

<dd>

Sets the initial option that is automatically chosen when the widget is loaded. It serves as the default selection unless the user manually selects a different option from the list. For example, if you want the default selected option to be `Dark Blue`, you can set the **Default Selected Value** property to: `DARK BLUE`.

</dd>

### Label

#### Text `string`

<dd>

Sets the label of the widget.

</dd>

#### Position `string`

<dd>

Sets the placement of the **Label** in the widget.

*Options*:
- **Left**: The label is placed on the left of the widget.
- **Top**: The label gets placed at the top of the widget.
- **Auto**: The label position is determined based on the height of the widget itself. 

</dd>

#### Alignment `string`

<dd>

Sets the label alignment of the widget when the position selected is **Left**.

</dd>

#### Width (in columns) `number`

<dd>

Sets the width of the label in the widget when the **Left** position is selected.

</dd>

### Validations

#### Required `boolean`

<dd>

Enabling this property for a TreeSelect widget makes it a mandatory field, meaning that the user must select a value from the dropdown. When the select widget is placed within a Form widget and the **Required** property is enabled, the Form's submit button remains inactive until a value is selected in the select widget.

</dd>

### General

#### Tooltip `string`

<dd>

Enables you to add hints or provide additional information to guide the user regarding the selection.

</dd>

#### Placeholder `string`

<dd>

Allows you to set the placeholder text displayed within the widget. This can be used to provide a hint or example value to the user, guiding them on the expected format or content of the input.

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

#### Allow clearing value `boolean`

<dd>

Enabling this option allows users to clear the selected value, whether it was the default selection or one they made themselves.

</dd>

#### Expand all by default `boolean`

<dd>

When enabled, this feature displays the dropdown in an expanded state by default, revealing all the available child options.

</dd>


#### Height `string`

<dd>

This property determines how the widget's height adjusts to changes in its content.

*Options:*

* **Fixed**: Maintains a constant height for the widget, allowing you to adjust it by dragging or using the resize handle.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

### Events

#### onOptionChange 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user selects an option in the dropdown list. It enables you to capture the user's input and perform specific actions in response. You can also write custom JavaScript logic for this event by clicking on the **JS** button next to the property.

</dd>

#### onDropdownOpen

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user opens the dropdown list. For example, you could use the **onDropdownOpen** event to retrieve data from a database, populate the options in the dropdown list, or display additional information to the user. You can also write custom JavaScript logic for this event by clicking on the **JS** button next to the property.

</dd>


#### onDropdownClose 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user closes the dropdown list. For example, you could use the **onDropdownClose** event to store the selected option in a database, hide additional information, or reset the widget to its original state. You can also write custom JavaScript logic for this event by clicking on the **JS** button next to the property.

</dd>


## Style properties

Style properties allow you to change the look and feel of the widget.

### Label styles

#### Font color `string`

<dd>

Represents the text color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). You can also click the **JS** button to programmatically modify the font color using JavaScript functions.

</dd>

#### Font size `string`

<dd>

Determines the font size of the label. It accepts [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. You can also click the **JS** button to programmatically modify the font size using JavaScript functions.

</dd>

#### Emphasis `string`

<dd>

Enables you to select a font style for the widget, such as bold or italic. You can click the **JS** button to programmatically modify the font style using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. To control the border radius programmatically, click the **JS** button to enable JavaScript and specify a valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`

<dd>

This property adds a drop shadow effect to the frame of the widget. To control the Box Shadow programmatically, click the **JS** button to enable JavaScript and specify a valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>


## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a select widget, you can use `treeSelect1.isVisible`.

#### options `array`
<dd>

The `options` property contains the values available for selection in a TreeSelect widget.


*Example:*

```js
{{TreeSelect1.options}}
```


</dd>

#### selectedOptionLabel `string`
<dd>

Returns the label of the option displayed in the TreeSelect widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{TreeSelect1.selectedOptionLabels}}
```


</dd>

#### selectedOptionValue `string`
<dd>

Returns the value of the option displayed in the TreeSelect widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{TreeSelect1.selectedOptionValues}}
```


</dd>

#### isDisabled `boolean`

<dd>

The `isDisabled` property reflects the state of the widget's Disabled setting. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

*Example:*

```js
{{TreeSelect1.isDisabled}}
```


</dd>

#### isVisible `boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*

```js
{{TreeSelect1.isVisible}}
```


</dd>

#### isValid `boolean`
<dd>

The `isValid` property indicates the validation status of a widget, providing information on whether the widget's current value is considered valid or not.


*Example:*

```js
{{TreeSelect1.isValid}}
```


</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the .then() block to ensure execution and sequencing of subsequent lines of code in Appsmith.

```js
return Input1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```


#### setDisabled (args:boolean)

<dd>

Sets the disabled state of the widget.

*Example*:

```js
TreeSelect1.setDisabled(false)
```

</dd>

#### setRequired (args:boolean)

<dd>

Sets whether the widget is required or not.

*Example*:

```js
TreeSelect1.setRequired(true)
```

</dd>


