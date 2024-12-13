---
title: Currency Input
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Currency Input (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>



</div>

<!-- vale on -->

This page provides details on the Currency Input widget *(available in AI Assistant Apps)*, which allows users to input, format, and validate currency values.



 <ZoomImage
    src="/img/currency-input.png" 
    alt=""
    caption=""
  /> 




## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Type

#### Data type `string` 

<dd>

The **Data Type** property defines the type of input for the widget. For the Currency Input widget, the **Data Type** is set to Currency by default. If you change the data type, the widget’s properties and behavior change accordingly.


Options:

- **Single-line text**: Accepts a single line of text, such as names or titles. Additional text beyond one line is not displayed.
- **Multi-line text**: Allows multiple lines of text, ideal for longer entries like comments or descriptions.
- **Number**: Accepts only numeric values.
- **Password**:  Masks input for sensitive information such as passwords or pins.
- **Email**: Validates and accepts text in email format.
- **Phone number**: Accepts phone numbers, often formatted with country code and dashes.
- **Currency**: Accepts numeric input displayed in currency format.
- **Date**: Accepts date input, with a datepicker for selection.


</dd>

### Data


#### Default Value `number`


<dd>

Sets an initial numeric value for the widget, displayed when the widget loads, prior to any user input. When the **Read Only** property is enabled, this value is shown but cannot be edited by the user. You can dynamically update this value using JS.

*Example:* To display the price from the selected row in a table:

```js
{{Orders_Table.selectedRow.price}}
```

</dd>

#### Currency `string`

<dd>

Allows you to specify the currency type for the widget. You can choose from a list of countries and their respective currencies. Additionally, by clicking on **JS**, you can use ISO 4217 currency codes. These codes consist of three letters and are assigned to each currency for international identification.

*Example:* If you want to dynamically set the currency based on a selected value in a Select widget, use the following JS expression:


```JS
{{Select.selectedOptionValue === "Europe" ? "EUR" : "USD"}}
```

</dd>


#### Decimals Allowed `number`

<dd>

Specifies the maximum number of decimal digits allowed. It can be set to either `0`, `1`, or `2`, indicating the desired level of precision for the numeric value.

</dd>

### Label

The Label property is a group of customizable settings that define the main text displayed on the widget. 


#### Text `string`


<dd>

Defines the label displayed on the widget. This label is used to describe the widget's purpose and is visible to users. 

</dd>




### Validations

The Validation properties ensure that the input provided by users meets specific criteria. These settings allow you to define rules and conditions to validate the data entered into the widget


#### Required `boolean`


<dd>

When enabled, this property makes the Currency Input a mandatory field. When the Currency Input is placed within a Form widget, enabling the **Required** property ensures that the Form's submit button remains disabled until the Currency Input has some value.

</dd>

#### Regex `regExp`

<dd>


The **Regex** property, short for Regular Expression, enables you to apply custom validations on user input by defining specific constraints using regular expressions. If the user enters a value that does not adhere to the specified pattern, the widget displays an error message indicating `"invalid input"`.

For instance, if you want to validate that the user enters a price in multiples of 5. You can set **Regex** as:
```js
.*[05]$
```



</dd>

#### Valid `boolean`

<dd>

Allows you to set an expression to determine the validity of the user's input. When the specified expression evaluates to false, indicating that the input is invalid, the widget displays an error message. This feature enables you to define custom validation rules and provide informative error messages to guide the user when their input does not meet the required criteria.

*Example:* If you want to ensure that the currency input only accepts values greater than $10, you can use the following expression:


```js
{{CurrencyInput1.parsedText}}
```

</dd>

#### Error Message `string`


<dd>

Allows customization of the error message displayed when the user enters an incorrect value. By default, the input widget shows a generic "invalid input" message.


</dd>


### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 



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
test
</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Auto Focus `boolean`

<dd>

When enabled, automatically places the user's cursor in the input box upon page load, directing their attention to the input field for immediate interaction.

</dd>

#### Readonly `boolean`

<dd>

When enabled, the widget displays the value from the **Value** property and prevents user input. This also disables Validation and Event properties, ensuring the value cannot be modified. It functions similarly to the Key-Value widget. **Readonly** is not available when the **Data Type** is set to Date.

</dd>




### Events

Events are properties that allow you to define actions or responses based on user interactions or widget state changes.
When the event is triggered, these event handlers can run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions).


#### onTextChanged

<dd>

Specifies the actions to be executed when the input value is modified. This event is triggered every time the user changes the text in the input field.

</dd>



#### onFocus

<dd>

Specifies the actions to be executed when the input area in the currency widget is focused.

</dd>

#### onBlur

<dd>

Specifies the actions to be executed when the input area in the currency widget loses focus.

</dd>

#### onSubmit

<dd>

Specifies the actions to be executed when the input is submitted with the `ENTER` key.

</dd>

#### Reset on submit

<dd>

Clears the input value after submission. 

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `CurrencyInput1.isVisible`.


#### countryCode `string`

<dd>

The `countryCode` property stores the country code associated with the selected currency.

*Example:*
```js
{{CurrencyInput1.countryCode}}
```

</dd>

#### currencyCode `string`

<dd>

The `currencyCode` property holds the [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) code of the selected currency.

*Example:*
```js
{{CurrencyInput1.currencyCode}}
```

</dd>


#### parsedText `string`

<dd>

The `parsedText` property stores the input value of the widget. 

*Example:*
```js
{{CurrencyInput1.text}}
```

</dd>

#### rawText `number`

<dd>

The `rawText` property stores the input value of the widget as a number.


*Example:*
```js
{{CurrencyInput1.rawText}}
```

</dd>

#### isValid `boolean`

<dd>

The `isValid` property indicates the validation status of a widget, providing information on whether the widget's current value is considered valid or not.

*Example:*
```js
{{CurrencyInput1.isValid}}
```

</dd>

#### isDisabled `boolean`

<dd>

The `isDisabled` property reflects the state of the widget's **Disabled** setting. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

*Example:*
```js
{{CurrencyInput1.isDisabled}}
```

</dd>


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{CurrencyInput1.isVisible}}
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
CurrencyInput1.setVisibility(true)
```

*Example 2:* If you want to hide the widget based on a user’s role, you can do so dynamically:

```js
CurrencyInput1.setVisibility(appsmith.user.role === "Admin" ? true : false)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
CurrencyInput1.setDisabled(false)
```

*Example 2:* You can disable the widget conditionally, based on user input or other factors:

```js
CurrencyInput1.setDisabled(appsmith.user.isAnonymous)
```

</dd>

#### setValue (param: number): Promise

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
CurrencyInput1.setValue(123)
```
To perform sequential actions, use the `.then()` block for execution.


</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
CurrencyInput1.setRequired(true)
```

</dd>


#### setReadOnly (param: boolean): Promise

<dd>

Sets the read-only state of the widget. This method is useful when you want to prevent the user from editing the widget while still displaying its value. It can be used for scenarios like showing data that should not be modified by the user, or for temporarily disabling editing.

*Example:*

```js
CurrencyInput1.setReadOnly(true)
```
 *Example:* If you only want the widget to be editable for specific users (e.g., logged-in users), use:

```js
if (appsmith.user.isAnonymous) {
  CurrencyInput1.setReadOnly(true) // Prevent modification for anonymous users
} else {
  CurrencyInput1.setReadOnly(false) // Allow modification for logged-in users
}
```

</dd>