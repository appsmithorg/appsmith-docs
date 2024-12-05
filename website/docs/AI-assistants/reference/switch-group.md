---
title: Switch Group
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Switch Group (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>



</div>

<!-- vale on -->

This page provides information on using the Switch Group widget(available in AI Assistant Apps). The Switch Group allows users to select multiple boolean options from a predefined list. It is useful in scenarios where several related toggle choices need to be presented together, such as feature toggles or preference settings.


 <ZoomImage
    src="/img/switch-group-widget.png" 
    alt=""
    caption=""
  /> 


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data


#### Options `array<object>`


<dd>


This property allows you to set the labels and values for the options. Ensure that the values assigned to each option are unique. 

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
Additionally, you can dynamically display data from a query using JavaScript. For instance, you can use the `.map()` function to transform the data to the desired format, like:


```js
{{getCountry.data.map( p => ({label: p.country, value: p.country}))}}
```


</dd>


#### Default Selected Values `string`

<dd>

Allows you to set default options in a widget. These options are initially selected when the widget is loaded, representing the user's default input unless modified. Multiple default options can be added by providing them as an array of values. 

*Example*:

```js
[
 "OPTION1", "OPTION2"
]
```


</dd>


### Label

The Label property is a group of customizable settings that define the main text displayed on the widget. 


#### Text `string`

 <dd>

 Sets the label for the Switch widget. This text is displayed alongside the switch, providing context to the user about its functionality. 
 
 </dd>

#### Orientation

<dd>
Allows you to arrange the switches in a vertical or horizontal layout. 

- **Vertical**: Displays the switches in a column. 
- **Horizontal**: Displays the switches in a row.

</dd>


#### Options Label Position `string`

<dd> 

Allows you to choose the placement of the label relative to the Switch. You can choose:

- <b>Start</b> - Aligns the text to the left of the Switch.
- <b>End</b> - Aligns the text to the right of the Switch.

</dd>









### Label

The Label property is a group of customizable settings that define the main text displayed on the widget. 


#### Text `String`


<dd>

Defines the label for the entire Switch Group widget. This label serves as the heading or title, providing context for the group of Switches. 

</dd>

#### Tooltip `String`
<dd>

 Allows you to add a tooltip that appears when the user hovers over the Switch Group widget. This can be used to provide additional information or instructions about the entire set of Switches, helping users understand the purpose or expected input for the group. 

</dd>


### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Visible `boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```


</dd>


#### Disabled `boolean`

<dd>

This property prevents users from selecting the Checkbox widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally. 


For example, if you want to allow only a specific user to interact with the Audio Recorder widget, you can use the following JavaScript expression in the disabled property:

```JS
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```


</dd>

#### Animate Loading `boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>




### Events

Events are properties that allow you to define actions or responses based on user interactions or widget state changes.


#### onSelectionChange

<dd>

This event defines the action that would be executed when the user selects or deselects multiple or single options in the switch group. It allows you to specify a list of [actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the switch state change.

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



## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.



#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
SwitchGroup1.setVisibility(true)
```


</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
SwitchGroup1.setDisabled(false)
```

</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
SwitchGroup1.setRequired(true)
```


</dd>


#### setSelectedOptions (param: array): Promise

<dd>

The `setSelectedOptions` method allows you to programmatically set the selected options of the Switch Group widget by passing an array of value strings. These values must match the value fields in the widget's configured options.

This method is particularly useful when you need to update the selected options dynamically based on user input, API responses, or other runtime conditions.

*Example:*

```js
SwitchGroup1.setSelectedOptions(['BLUE', 'RED']);
```

</dd>

## See also

- [Insert Data](/build-apps/how-to-guides/insert-data) – Learn how to insert data into a datasource using widgets.
- [Update Data](/build-apps/how-to-guides/submit-form-data) – Discover how to update data using widgets.
- [Create a Multi-step Wizard](/build-apps/how-to-guides/Multi-step-Form-or-Wizard-Using-Tabs) – See how to create a multi-step form.