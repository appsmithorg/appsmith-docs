# Phone Input

This page provides information on using the Phone Input, which allows you to capture phone numbers as input from users.


<VideoEmbed host="youtube" videoId="DuyMuOZm83g" title="Using the Phone Input Widget" caption="Using the Phone Input Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data


#### Default Value `string`


<dd>

Allows you to assign an initial value to the widget before user interaction.

</dd>

#### Default country code `string`

<dd>

Allows you to select a country code from a list of countries. Additionally, by clicking on **JS**, you can use custom country dial codes like `+91`.

</dd>


#### Change country code `boolean`

<dd>

Enabling this property allows the user to change the country code from the dropdown menu.


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

#### Width `number`

<dd>

This property is only available when you select **Left** from the Position property. It allows you to control the proximity of the text to the widget, determining how close or far it can be positioned.


</dd>


### Validations


#### Required `boolean`


<dd>

When enabled, this property makes the Phone Input a mandatory field. When the Phone Input is placed within a Form widget, enabling the **Required** property ensures that the Form's submit button remains disabled until the Phone Input has some value.

</dd>

#### Regex `regExp`

<dd>


The **Regex** property, short for Regular Expression, enables you to apply custom validations on user input by defining specific constraints using regular expressions. If the user enters a value that does not adhere to the specified pattern, the widget displays an error message indicating `"invalid input"`.

For instance, if you want to validate that a phone number consists of exactly 10 digits, you can set the **Regex** as:

```js
^\d{10}$
```

</dd>

#### Valid `boolean`

<dd>

Allows you to set an expression to determine the validity of the user's input. When the specified expression evaluates to false, indicating that the input is invalid, the widget displays an error message. This feature enables you to define custom validation rules and provide informative error messages to guide the user when their input does not meet the required criteria.

</dd>

#### Error Message `string`


<dd>

Allows you to customize the feedback provided to the user when they enter an incorrect value. By default, the input widget displays a generic `"invalid input"` message. 

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

#### Auto Focus `boolean`

<dd>

When enabled, automatically places the user's cursor in the input box upon page load, directing their attention to the input field for immediate interaction.

</dd>

#### Enable formatting `boolean`

<dd>

When turned on, the phone number typed into the input gets formatted based on the selected country code.

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
When the event is triggered, these event handlers can run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions).



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



#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>

## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `PhoneInput1.isVisible`.


#### countryCode `string`

<dd>

The `countryCode` property stores the country code associated with the selected country.

*Example:*
```js
{{PhoneInput1.countryCode}}
```

</dd>

#### dialCode `string`

<dd>

The `dialCode` property retrieves the dialing code of the selected country.

*Example:*
```js
{{PhoneInput1.dialCode}}
```

</dd>


#### text `string`

<dd>

The `text` property retrieves the formatted input value of the widget. 

*Example:*
```js
{{PhoneInput1.text}}
```

</dd>

#### value `string`

<dd>

The `value` property retrieves the unformatted phone number, regardless of whether formatting is enabled or not. 

*Example:*
```js
{{PhoneInput1.value}}
```

</dd>

#### isValid `boolean`

<dd>

The `isValid` property indicates the validation status of a widget, providing information on whether the widget's current value is considered valid or not.

*Example:*
```js
{{PhoneInput1.isValid}}
```

</dd>

#### isDisabled `boolean`

<dd>

The `isDisabled` property reflects the state of the widget's **Disabled** setting. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

*Example:*
```js
{{PhoneInput1.isDisabled}}
```

</dd>


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{PhoneInput1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
PhoneInput1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
PhoneInput1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>