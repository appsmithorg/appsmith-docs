---
title: ComboBox
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>ComboBox (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


</div>

<!-- vale on -->

This page provides information on using the ComboBox Widget(available in AI Assistant Apps), which allows users to search and choose a single option from a dropdown list.


 <ZoomImage
    src="/img/combobox.png" 
    alt=""
    caption=""
  /> 



## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

These properties allow you to configure the options and data displayed to users. 

#### Data type `string`

<dd>

Specifies the behavior of the dropdown in the layout. You can choose between two modes:

- **Select**: A basic dropdown without search, ideal for situations where the number of options is small and easily visible to the user. See [Select widget](/AI-assistants/reference/select).
- **Combobox**: A dropdown with search functionality, designed for scenarios where the dataset is large, allowing users to quickly filter and select the desired option. 

</dd>

#### Options `array<object>`

<dd>

Defines the list of items available for selection in the dropdown. Each option is represented as an object containing `label` and `value` properties. When **JS** is enabled, you can dynamically generate options by binding query data or using JS expressions.

*Example:*


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


If you are generating options for ComboBox widget using JS code as shown above, make sure to define both the [**Label**](#label-string) and [**Value**](#value-string) properties.

</dd>



### Label

The Label property is a group of customizable settings that define the main text displayed on the widget. 

#### Text `string`

<dd>

Sets the label text for the widget, which is displayed alongside the dropdown or combo box. This label helps users understand the purpose of the widget. For example, you could set the label to "Choose a Color" to indicate that the user should select a color from the list.

</dd>


### Validations

#### Required `boolean`

<dd>

Enabling this property for a ComboBox widget makes it a mandatory field, meaning that the user must select a value from the dropdown. When the ComboBox widget is placed within a Form widget and the **Required** property is enabled, the Form's submit button remains inactive until a value is selected in the ComboBox widget.

</dd>

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 
 

#### Tooltip `string`

<dd>

The tooltip appears as a small pop-up, helping to clarify the widget's purpose or offering instructions. 

</dd>

#### Placeholder `string`

<dd>

Displays a short hint or instruction inside the widget when no option is selected. The placeholder text disappears once the user selects a value. 

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the ComboBox widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the ComboBox widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>



### Events

Events are properties that allow you to define actions or responses based on user interactions or widget state changes.

#### onSelectionChange 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user selects an option in the dropdown list. It enables you to capture the user's input and perform specific actions in response.

</dd>


## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a ComboBox widget, you can use `ComboBox1.isVisible`.

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's Disabled setting. It is represented by a boolean value, where `true` indicates that the widget is disabled, and `false` indicates that it is enabled for user interaction.

*Example:*

```js
{{ComboBox1.isDisabled}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{ComboBox1.isVisible}}
```

</dd>


#### options `array`

<dd>

Returns an array of objects that contain the label and value of the options in the dropdown list.

*Example:*

```js
{{ComboBox1.options}}
```

</dd>

#### selectedOptionValue `string`

<dd>

Returns the value of the option displayed in the ComboBox widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{ComboBox1.selectedOptionValue}}
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
ComboBox1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the `disabled` state of the widget.

*Example*:

```js
ComboBox1.setDisabled(false)
```

</dd>

#### setData (param: array< object >): Promise

<dd>

Allows you to dynamically set or update the options displayed in the widget. You can provide a new array of objects to update the available choices. This is useful for scenarios where the options need to be updated based on user input or external data.


*Example*:

```js
ComboBox1.setData([{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cherry', value: 'cherry' }])
```

</dd>


