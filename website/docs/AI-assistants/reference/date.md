---
title: Datepicker
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Datepicker (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>



</div>

<!-- vale on -->




This page provides information on using the Datepicker widget (available in AI Assistant Apps), which allows users to select a date from a calendar interface, making it easy to input and validate date-related information.

 <ZoomImage
    src="/img/date-widget.png" 
    alt=""
    caption=""
  /> 




## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Type

#### Data type `string` 

<dd>

The **Data Type** property defines the type of input for the widget. For the Email Input widget, the **Data Type** is set to Email by default. If you change the data type, the widget’s properties and behavior change accordingly.

Options:

- **Single-line text**: Accepts a single line of text, such as names or titles. Additional text beyond one line is not displayed. See [Input widget]( /AI-assistants/reference/input ).
- **Multi-line text**: Allows multiple lines of text, ideal for longer entries like comments or descriptions. See [Multi-line text widget]( /AI-assistants/reference/multilineInput ).
- **Number**: Accepts only numeric values. See [Number widget]( /AI-assistants/reference/number-input ).
- **Password**: Masks input for sensitive information such as passwords or pins. See [Password widget]( /AI-assistants/reference/password-input ).
- **Email**: Validates and accepts text in email format. See [Email widget]( /AI-assistants/reference/emailinput ).
- **Phone number**: Accepts phone numbers, often formatted with country code and dashes. See [Phone number widget]( /AI-assistants/reference/phone-input ).
- **Currency**: Accepts numeric input displayed in currency format. See [Currency widget]( /AI-assistants/reference/currency-input ).
- **Date**: Accepts date input, with a datepicker for selection.




</dd>

### Data

#### Date format `ISO 8601 date string`

<dd>

Displays a list of date formats for the Datepicker widget. With **JS** enabled, this property accepts [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html) formats.

You can also use the built-in [**Moment.js**](https://momentjs.com/docs/) library in Appsmith to parse the date in the format required. 

*Example:* If you want to convert the selected date and time to the IST timezone (Asia/Kolkata), click the **JS** button and add the following code:

```js
{{
  moment(datePickerName.selectedDate).tz("Asia/Kolkata").format()
}}
```

</dd>

#### Default date `ISO 8601 date string`

<dd>

Sets a default date that would be captured as user input unless it is changed by the user. With **JS** enabled, this property accepts [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html) values.

</dd>



#### Time precision `string`

<dd>

Decides whether a time is included within the Datepicker, and whether that time is to the minute or second precision. With **JS** enabled, it accepts the follwoing values - `None`, `minute`, or `second`.

</dd>

### Label

The Label property is a group of customizable settings that define the main text displayed on the widget. 

#### Text `string`

<dd>

Sets the label text displayed in the Datepicker widget.

</dd>

### Validation

#### Required

<dd>

Enables you to designate the Datepicker widget as a mandatory field. 

</dd>

#### Min date `ISO 8601 date string`

<dd>

Sets a minimum date permitted to be selected in the widget. With **JS** enabled, this property accepts [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html) values.

</dd>

#### Max date `ISO 8601 date string`

<dd>

Sets a maximum date permitted to be selected with the widget. With **JS** enabled, this property accepts [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html) values.

</dd>

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Tooltip

<dd>

Sets a tooltip that appears when the user hovers over the widget. It enables you to add hints or provide additional information for the widget. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Datepicker widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the Datepicker widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

### Events

Events are properties that allow you to define actions or responses based on user interactions or widget state changes. When an event is triggered, these event handlers can execute queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions).

#### onDateSelected

<dd>

Triggered when the user selects a date in the Datepicker widget.  

</dd>



## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Datepicker widget, you can use `Datepicker1.isVisible`.

#### formattedDate `string`

<dd>

Contains the formatted date value currently selected within the Datepicker widget. This value changes if the default value is updated or the user inputs a new value. The format depends on the **Date Format** property set for the widget.

*Example:*

```js
{{Datepicker1.formattedDate}}
```

</dd>

#### selectedDate `string`

<dd>

Contains the ISO date string value selected in the Datepicker widget. This value changes if the default value is updated or the user inputs a new value.

*Example:*

```js
{{Datepicker1.selectedDate}}
```

</dd>

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's Disabled setting. It is represented by a boolean value, where `true` indicates that the widget is disabled, and `false` indicates that it is enabled for user interaction.

*Example:*

```js
{{Datepicker1.isDisabled}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Datepicker1.isVisible}}
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
DatePicker1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
DatePicker1.setDisabled(false)
```

</dd>
