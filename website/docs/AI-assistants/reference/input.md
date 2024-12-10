---
title: Input
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Input (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>



</div>

<!-- vale on -->


This page provides information on using the Input widget *(available in AI Assistant Apps)*, which allows you to capture and validate various types of user input, including text, numbers, emails, and passwords.

 <ZoomImage
    src="/img/checkbox-group-widget.png" 
    alt=""
    caption=""
  /> 




## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Type

#### Data type `string` 

<dd>

The **Data Type** property defines the type of input for the widget. Selecting a specific data type automatically adjusts the widget’s properties to match the input requirements.

Options:

- **Single-line text**: Accepts a single line of text, such as names or titles. Additional text beyond one line is not displayed.s
- **Multi-line text**: Allows multiple lines of text, ideal for longer entries like comments or descriptions.
- **Number**: Accepts only numeric values.
- **Password**:  Masks input for sensitive information such as passwords or pins.
- **Email**: Validates and accepts text in email format.
- **Phone number**: Accepts phone numbers, often formatted with country code and dashes.
- **Currency**: Accepts numeric input displayed in currency format.
- **Date**: Accepts date input, with a datepicker for selection.


</dd>

### Data

#### Value `string`

<dd>

Defines the initial value displayed in the widget when it loads. This value serves as the default input until the user modifies it.


</dd>

### Label

The Label property is a group of customizable settings that define the main text displayed on the widget. 

#### Text `string`

<dd>

Specifies the text displayed as the label on the widget. This can be used to indicate the purpose or function of the widget.

</dd>




### Validation

The Validation properties ensure that the input provided by users meets specific criteria. These settings allow you to define rules and conditions to validate the data entered into the widget

#### Required `boolean`

<dd>

This validation feature allows you to designate the Input as a mandatory field. For instance, when the Input is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Input has some value.

</dd>

#### Max characters	`number`


<dd>

Defines the maximum number of characters a user can enter. This property is available only when the **Data Type** is set to Single-line text or Multi-line text.


</dd>

#### Spellcheck `boolean`

<dd>

When enabled, the widget automatically checks for spelling errors and highlights them, with a red underline. This property is applicable to Single-line text and Multi-line text data types.

</dd>


#### Regex `string`

<dd>

The Regex property, short for Regular Expression, enables you to apply custom validations on user input by defining specific constraints using regular expressions. If the user enters a value that does not adhere to the specified pattern, the widget displays an error message indicating `"invalid input"`.

For instance, if you want to validate that the user enters a value in multiples of 5. You can set **Regex** as:

```js
.*[05]$
```

*Examples:*

**Email validation**

To validate whether an entered email is correct, use the following regular expression code inside the [**Regex**](/reference/widgets/input#regex-string) property of an Input widget:



```js
//regex
^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
```

**Phone number validation**

To get phone number in a specific format or length, you can use the following codes:

*Example:* if you want to validate international phone numbers starting with a plus sign (+) and a total length between 6 and 14 digits, use the following code inside the **Regex** property:


```js
//regex
^\+(?:[0-9]●?){6,14}[0-9]$
```


**Number validation**

If you need to add number validation for fields like currency or prices, you can use the following regular expression code inside the **Regex** property of any Input widget:


```js
//Regex

//Range Validation - 0 to 100:  
^(0*100(\.0*)?)$|^([1-9]?[0-9](\.\d*)?)$

//Positive Number Validation:  
^[1-9][0-9]*$

//Decimal Number Validation:  
^-?\d+(\.\d{2})?$

//Minimum and Maximum Value Validation(1000 and 10,000):
Regex: ^(10000|[1-9][0-9]{3,4})$ 
```

**URL validation**

This validation is used to ensure that URLs provided by users for files or images adhere to the required format.

```js
//Regex
(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?
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

*Example:*  If you want to add password validation, ensuring it is greater than 10 characters and contains at least one digit, you can use the following code in the **Error message** property.

```js
//Valid property
{{Input1.text.length > 10 && /\d/.test(Input1.text) ? true : false}}


//Error message property
{{Input1.text.length > 10 || !/\d/.test(Input1.text) ? "Error: Length should be at least 10 characters and contain at least one digit" : ""}}
```

This code checks the length of Input is exactly 10 characters and if it contains at least one digit. If not, it returns the error message


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

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 



#### Tooltip `string`
<dd>


Allows you to add a short message or hint that provides additional information to guide the user. A ? icon appears near the label text, and when the user hovers over it, the tooltip message is displayed. 

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

#### Readonly `boolean`

<dd>

When enabled, the widget displays the value from the **Value** property and prevents user input. This also disables Validation and Event properties, ensuring the value cannot be modified. It functions similarly to the Key-Value widget. **Readonly** is not available when the **Data Type** is set to Date.

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. The default value for the property is `true`.

</dd>


#### Auto Focus `boolean`

<dd>

When enabled, automatically places the user's cursor in the input box upon page load, directing their attention to the input field for immediate interaction.

</dd>


### Events

Events are properties that allow you to define actions or responses based on user interactions or widget state changes.

When the event is triggered, these event handlers can execute queries, JS functions, or other [supported actions](/reference/appsmith-framework/widget-actions).




#### onTextChanged

<dd>

Specifies the actions to be executed when the input value is modified. This event is triggered every time the user changes the text in the input field.

</dd>



#### onFocus

<dd>

Specifies the actions to be executed when the input area is focused.

</dd>

#### onBlur

<dd>

Specifies the actions to be executed when the input field loses focus. This event is typically used for form validation, submitting data, or updating widget.

</dd>

#### onSubmit

<dd>

Specifies the actions to be executed when the input is submitted using the `ENTER` key. This event is often used in forms or search fields where the user expects the input to trigger an action upon submission.


</dd>

#### Reset on submit

<dd>

Clears the input value after submission. This ensures that the field is reset to its default state, which is useful for clearing out forms after data is submitted or when starting a new entry.


</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Icon

#### Icon `string`

<dd>

Allows you to set an icon for the Stats widget. You can choose from a predefined list of available icons. By enabling JS, you can dynamically change the icon based on data or user interactions.

*Example:* To display different icons based on whether the input is valid or not, you can use the following JavaScript expression:

```js
{{ Input1.isValid ? "check" : "alert-circle" }}
```

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Input1.isVisible`.

#### parsedText `string`

<dd>

The `parsedText` property retrieves the input value of the widget. 

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

#### isReadOnly `boolean`

<dd>

The `isReadOnly` property indicates the read-only state of a widget, with `true` indicating that the widget is in read-only mode and cannot be edited by the user, while `false` allows the user to interact and modify the widget's value.

*Example:*
```js
{{Input1.isReadOnly}}
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

Sets the visibility of the widget. This method is useful when you want to dynamically show or hide a widget based on certain conditions, such as form steps or user inputs.


*Example*:

```js
Input1.setVisibility(true)
```


</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget. This method can be used to prevent user interactions with the widget.


*Example*:

```js
Input1.setDisabled(false)
```
*Example:* If you want to disable an input field for anonymous users, you can use:

```js
if (appsmith.user.isAnonymous) {
  Input1.setDisabled(true) // Disable input for anonymous users
} else {
  Input1.setDisabled(false) // Enable input for logged-in users
}
```

</dd>

#### setValue (param: string): Promise

<dd>

Allows you to dynamically set the value of the widget. This is useful when you need to populate a field with data, such as pre-filling a form based on user selection or data from a query.

*Example*:

```js
Input1.setValue("John Doe")
```

</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not. This method can be used to dynamically adjust form validation rules based on specific conditions.


*Example*:

```js
Input1.setRequired(true)
```


</dd>

#### setReadOnly (param: boolean): Promise

<dd>

Sets the read-only state of the widget. This method is useful when you want to prevent the user from editing the widget while still displaying its value. It can be used for scenarios like showing data that should not be modified by the user, or for temporarily disabling editing.

*Example:*

```js
Input1.setReadOnly(true)
```
 *Example:* If you only want the widget to be editable for specific users (e.g., logged-in users), use:

```js
if (appsmith.user.isAnonymous) {
  Input1.setReadOnly(true) // Prevent modification for anonymous users
} else {
  Input1.setReadOnly(false) // Allow modification for logged-in users
}
```

</dd>