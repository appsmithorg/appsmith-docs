# Currency Input

This page provides information on using the Currency Input widget to allow users to enter and format currency values.

<VideoEmbed host="youtube" videoId="I-FusTdnJeE" title="Using the Currency Input Widget" caption="Using the Currency Input Widget"/>



## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data


#### Default Value `number`


<dd>

Allows you to assign an initial numeric value to the widget before user interaction.

</dd>

#### Currency `string`

<dd>

Allows you to specify the currency type for the widget. You can choose from a list of countries and their respective currencies. Additionally, by clicking on **JS**, you can use ISO 4217 currency codes. These codes consist of three letters and are assigned to each currency for international identification.



</dd>


#### Allow Currency Change `boolean`

<dd>


Enables users to select a different currency by displaying a dropdown next to the input field.


</dd>

#### Decimals Allowed `number`

<dd>

Specifies the maximum number of decimal digits allowed. It can be set to either `0`, `1`, or `2`, indicating the desired level of precision for the numeric value.

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

</dd>

#### Error Message `string`


<dd>

Allows customization of the error message displayed when the user enters an incorrect value. By default, the input widget shows a generic "invalid input" message.


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

#### Show Step Arrows `boolean`

<dd>

This property determines whether the step arrows, used to increment or decrement values in the widget, should be visible or hidden. 

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

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Auto Focus `boolean`

<dd>

When enabled, automatically places the user's cursor in the input box upon page load, directing their attention to the input field for immediate interaction.

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

Specifies the actions to be executed when the user modifies the input in the currency widget.

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

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>



#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

## Reference properties

These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `CurrencyInput1.isVisible`.


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


#### text `string`

<dd>

The `text` property stores the input value of the widget. 

*Example:*
```js
{{CurrencyInput1.text}}
```

</dd>

#### value `number`

<dd>

The `value` property stores the input value of the widget as a number.


*Example:*
```js
{{CurrencyInput1.value}}
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
