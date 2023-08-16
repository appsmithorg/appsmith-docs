---
description: Learn how to use the Input widget to gather and validate user input such as text, numbers, emails, and passwords.
---
# Input

This page provides information on using the Input widget to gather and validate user input such as text, numbers, emails, and passwords.

<VideoEmbed host="youtube" videoId="zNGwWO6OXlw" title="How to use Input Widget" caption="How to use Input Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Data type `string` 

<dd>

Allows you to set the type of data you want to capture in the user input, enabling the associated validation for the chosen data type. 

*Options:*

* **Single-line text:** Accepts input with a single line of text, typically used for short responses like names or titles.
* **Multi-line text:** Allows input with multiple lines, suitable for longer text entries, such as comments or descriptions.
* **Number:** Permits input of numeric values, restricting non-numeric characters.
* **Password:** Masks the user's input to hide sensitive information like passwords or PINs.
* **Email:** Validates and accepts email addresses, ensuring they match the required format.

</dd>

#### Default value `string`

<dd>

Allows you to specify an initial value for the widget when it's first displayed.

</dd>

### Label

#### Text `string`

<dd>

Allows you to define the label on the widget.

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

This property is only available when you select **Left** from the Position property. It allows you to control the proximity of the text to the widget, determining how close or far it can be positioned. Default value of **Width** is `5`.


</dd>

### Validation

#### Required `boolean`

<dd>

This validation feature allows you to designate the Input as a mandatory field. For instance, when the Input is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Input has some value.

</dd>

#### Max characters	`number`


<dd>

Sets a maximum length allowed for user input. Only appears when **Data Type** is set to a Text type.

</dd>

#### Regex `string`

<dd>

The Regex property, short for Regular Expression, enables you to apply custom validations on user input by defining specific constraints using regular expressions. If the user enters a value that does not adhere to the specified pattern, the widget displays an error message indicating `"invalid input"`.

For instance, if you want to validate that the user enters a value in multiples of 5. You can set **Regex** as:

```js
.*[05]$
```

</dd>

#### Valid `boolean`

<dd>

Allows you to define custom validation rules and error messages to guide users when their input doesn't meet required criteria. 

For instance, you can use this property to validate a Create Password field, making sure it doesn't contain certain strings like `password` or `123`.

_Example:_

```js
{{
  !["password", "123", "admin"].some(subStr => {
    return Input1.text.toLowerCase().includes(subStr)
  })
}}
```


</dd>

#### Error Message `string`

<dd>

Allows customization of the error message displayed when the user enters an incorrect value. By default, the input widget shows a generic `"invalid input"` message.

</dd>

#### Min `number`

<dd>

Sets a minimum value allowed for user input. Only appears when **Data Type** is set to Number.

</dd>

#### Max `number`

<dd>

Sets a maximum value allowed for user input. Only appears when **Data Type** is set to Number.

</dd>

### General


#### Tooltip `string`
<dd>


Enables you to add hints or provide additional information to guide the user regarding the required input.

</dd>

#### Placeholder `string`

<dd>

Allows you to set the placeholder text displayed within the input box. This can be used to provide a hint or example value to the user, guiding them on the expected format or content of the input.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. The default value for the property is `true`.


For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's disable state conditionally. The default value for the property is `false`.

For example, if you want to allow only a specific user to fill the input, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```


</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. The default value for the property is `true`.

</dd>


#### Auto Focus `boolean`

<dd>

When enabled, automatically places the user's cursor in the input box upon page load, directing their attention to the input field for immediate interaction.

</dd>

#### Allow autofill `boolean`

<dd>

When enabled, allows users to autofill input values using their web browser's saved data.

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

When the event is triggered, these event handlers can execute queries, JS functions, or other [supported actions](/reference/appsmith-framework/widget-actions).




#### onTextChanged

<dd>

Specifies the actions to be executed when the input is modified.

</dd>



#### onFocus

<dd>

Specifies the actions to be executed when the input area is focused.

</dd>

#### onBlur

<dd>

Specifies the actions to be executed when the input area loses focus.



</dd>

#### onSubmit

<dd>

Specifies the actions to be executed when the input is submitted with the `ENTER` key.

</dd>

#### Reset on submit

<dd>

Clears the input value after submission. 

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Icon

#### Icon `string`

<dd>

Specifies the icon to be displayed on the widget. Additionally, you can use **JS** to dynamically set the icon. You can refer to the documentation of [blueprintjs](https://blueprintjs.com/docs/#icons) to explore a wide range of available icons.

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

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Input1.isVisible`.

#### text `string`

<dd>

The `text` property retrieves the input value of the widget. 

*Example:*
```js
{{Input1.text}}
```

</dd>


#### isValid `boolean`

<dd>

The `isValid` property indicates the validation status of a widget, providing information on whether the widget's current value is considered valid or not.

*Example:*
```js
{{Input1.isValid}}
```

</dd>

#### isDisabled `boolean`

<dd>

The `isDisabled` property reflects the state of the widget's **Disabled** setting. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

*Example:*
```js
{{Input1.isDisabled}}
```

</dd>


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Input1.isVisible}}
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
Input1.setVisibility(true)
```


</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Input1.setDisabled(false)
```


</dd>

#### setValue (param: string): Promise

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
Input1.setValue("Hello123")
```

</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Input1.setRequired(true)
```


</dd>

