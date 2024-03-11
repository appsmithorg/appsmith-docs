---
description: >-
  Select widget reference
---

# Select

This page provides information on the Select widget (*formerly known as dropdown*), that enable users to select a single option from a given list.


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Source Data `array<object>`

<dd>

Specify data as an array of objects to display options in the widget. For example:


```js
[
  {
    name: "Blue",
    code: "BLUE",
  },
  {
    name: "Green",
    code: "GREEN",
  },
  {
    name: "Red",
    code: "RED",
  },
];
```

You can dynamically generate options by fetching data from queries or JS functions and binding the response to the **Source Data** property. For example, if you have a query named `fetchData`, you can bind its response using:

```js
{{fetchData.data}}
```

If the retrieved data is not in the desired format, you can use JavaScript to transform the data by adding it to the **Source Data** property, like:

```js
{{fetchData.data.map( p => ({label: p.country, value: p.country}))}}
```


If you are generating options for Select widget using JS code as shown above, make sure to define both the [**Label**](#label-string) and [**Value**](#value-string) properties.

</dd>

#### Label `string`

<dd>

Defines the key from the **Source Data** property that specifies the labels for each option in the Select widget. To define **Label** using code, click the **JS** button next to the property. 

*Example:* If you prefer the label to be displayed in lowercase, you can achieve this using the following code snippet:

```js
{{ item.name.toLowerCase() }}
```
`item.name` represents the Source Data's property containing the label, and the `toLowerCase()` function is applied to convert the label to lowercase.

</dd>

#### Value `string`

<dd>

Defines the key from the **Source Data** property that specifies the values for each option in the Select widget. Value defined for each option must be unique. To define **Value** using code, click the **JS** button next to the property.

</dd>

#### Default selected value `string`

<dd>

Sets the initial option that is automatically chosen when the widget is loaded. It serves as the default selection unless the user manually selects a different option from the list. For example, if you want the default option to be ```Blue```, set the **Default Selected Value** property to `BLUE`.


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

Sets the label alignment of the widget when the position selected is **left**.

</dd>

#### Width (in columns) `number`

<dd>

Sets the width of the label in the widget when the **left** position is selected.

</dd>

### Search and filters

#### Allow searching `boolean`

<dd>

Enables searching for specific options within the dropdown list. When this option is enabled, a search input field is displayed in the widget. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Server side filtering `boolean`

<dd>

Enables server-side filtering via a query request. Use this property when the Select widget's option data is being bound to a query.

</dd>

#### onFilterUpdate

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when you update the filter text. 

</dd>

### Validations

#### Required `boolean`

<dd>

Enabling this property for a Select widget makes it a mandatory field, meaning that the user must select a value from the dropdown. When the Select widget is placed within a Form widget and the **Required** property is enabled, the Form's submit button remains inactive until a value is selected in the Select widget.

</dd>

### General 

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the select widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the Select widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Height `string`

<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:

- **Fixed:** The height of the widget remains as set using drag and resize.
- **Auto Height:** The widget's height adjusts dynamically in response to changes in its content.
- **Auto Height with limits:** Same as Auto height, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

### Events

#### onOptionChange 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user selects an option in the dropdown list. It enables you to capture the user's input and perform specific actions in response.

</dd>

#### onDropdownOpen

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user opens the dropdown list. For example, you could use the **onDropdownOpen** event to retrieve data from a database, populate the options in the dropdown list, or display additional information to the user.

</dd>


#### onDropdownClose 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user closes the dropdown list. For example, you could use the **onDropdownClose** event to store the selected option in a database, hide additional information, or reset the widget to its original state.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Label styles

#### Font color `string`

<dd>

Allows you to set text color for the label. Additionally, you can programmatically modify the text color using JavaScript functions.

</dd>

#### Font size `string`

<dd>

Allows you to control the size of the label text. Additionally, you can programmatically modify the text size using JavaScript functions.

</dd>

#### Emphasis `string`

<dd>

Allows you to choose a font style; bold or italic. you can programmatically modify the font style using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Select widget, you can use `Select1.isVisible`.

#### filterText `string`

<dd>

Returns the text entered in the search filter for Server side filtering.

*Example:*

```js
{{Select1.filterText}}
```

</dd>

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's Disabled setting. It is represented by a boolean value, where `true` indicates that the widget is disabled, and `false` indicates that it is enabled for user interaction.

*Example:*

```js
{{Select1.isDisabled}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Select1.isVisible}}
```

</dd>

####  isDirty `boolean`

<dd>

This property is a boolean value that indicates whether the user has interacted with the widget. If the user selects an option from the dropdown list, the `isDirty` property returns `true`. However, if the user does not make any selection and the initial value remains unchanged, the `isDirty` property returns `false`.

*Example:*

```js
{{Select1.isDirty}}
```

</dd>

#### options `array`

<dd>

Returns an array of objects that contain the label and value of the options in the dropdown list.

*Example:*

```js
{{Select1.options}}
```

</dd>

#### selectedOptionValue `string`

<dd>

Returns the value of the option displayed in the Select widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{Select1.selectedOptionValue}}
```

</dd>

#### selectedOptionLabel `string`

<dd>

Returns the label of the option displayed in the Select widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{Select1.selectedOptionLabel}}
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
Select1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the `disabled` state of the widget.

*Example*:

```js
Select1.setDisabled(false)
```

</dd>

#### setOptions (param: array< object >): Promise

<dd>

Sets the options to be displayed in the widget.

*Example*:

```js
Select1.setOptions([{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }])
```

</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Select1.setRequired(true)
```

</dd>

#### setSelectedOption (param: object): Promise

<dd>

Sets the selected option of the Select widget.

*Example*:

```js
Select1.setSelectedOption({ label: 'Option 2', value: 'option2' })
```

</dd>

## See also
- [Display and Filter Select Options](/build-apps/how-to-guides/display-select-options-dynamically)