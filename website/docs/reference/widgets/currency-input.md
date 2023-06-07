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

Allows you to specify the currency type for the widget. You can choose from a list of countries and their respective currencies. When JS is enabled, you can use `ISO 4217` currency codes, which are three-letter codes assigned to each currency for international identification. 

</dd>


#### Allow Currency Change `boolean`

<dd>

This property determines whether to enable or disable a currency dropdown next to the input field. When set to true, it allows the user to change the selected currency by providing a dropdown menu with currency options. Conversely, when set to false, the currency dropdown is disabled, preventing the user from changing the selected currency.


</dd>

#### Decimals Allowed `Number`

<dd>

Specifies the maximum number of digits allowed after the decimal separator. It can be set to either 0, 1, or 2, indicating the desired level of precision for the numeric value.

</dd>

### Label


#### Text `string`


<dd>
Sets the label of the Currency Input.
</dd>




#### Position `string`


<dd>


This property allows you to configure the label's placement in three ways:


* **Auto**: Automatically positions the label based on the widget type and layout.
* **Left**: Aligns the label to the left side of the widget.
  * **Alignment**: You can also control the text's placement relative to the Currency Input. You have the choice to align it either to the **Left** boundary or closer to the Currency Input
using the **Right** alignment option.
  * **Width**: This allows you to control the proximity of the text to the Currency Input, determining how close or far it can be positioned.
* **Top**: Positions the label above the widget.


</dd>


### Validations


#### Required `boolean`


<dd>

This validation feature allows you to designate the Currency Input as a mandatory field. For instance, when the Currency Input is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Currency Input field contains a value.

</dd>

#### Regex `regExp`

<dd>


The **Regex** property, short for Regular Expression, allows you to implement custom validations for user input. By using regular expressions, you can define specific constraints on the expected input from the user.

For instance, if you want to validate that the user enters a price in multiples of 5. You can set the **Regex** as:
```js
.*[05]$
```

If the user enters a value that does not adhere to the specified pattern, such as a value that is not a multiple of 5, the widget displays an error message indicating `invalid input`.

</dd>

#### Valid `boolean`

<dd>

This property allows you to set an expression to determine the validity of the user's input. When the specified expression evaluates to false, indicating that the input is invalid, the widget displays an error message. This feature enables you to define custom validation rules and provide informative error messages to guide the user when their input does not meet the required criteria.

</dd>

#### Error Message `string`


<dd>

This property allows you to customize the feedback provided to the user when they enter an incorrect value. By default, the input widget displays a generic "invalid input" message. 

</dd>


### General


#### Tooltip `string`
<dd>


This feature enables you to add hints or provide additional information to guide the user regarding the required input.
</dd>

#### Placeholder `string`

<dd>

Allows you to set the placeholder text displayed within the input box. This can be used to provide a hint or example value to the user, guiding them on the expected format or content of the input.

</dd>

#### Show Step Arrows `boolean`

<dd>

This property determines whether the step arrows, used to increment or decrement values in the widget, are visible or hidden. 

</dd>


#### Visible `boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

</dd>

#### Disabled `boolean`

<dd>

This property prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally.

</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Auto Focus `boolean`

<dd>

The **Auto Focus** property, when enabled, automatically places the user's cursor in the input box upon page load, directing their attention to the input field for immediate interaction.

</dd>

#### Height `string`


<dd>
This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: The height of the widget remains as set using drag and resize.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>



### Events


#### onTextChanged

<dd>

The **onTextChanged** event specifies the action that would be executed when the value of the input is changed. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered.

</dd>



#### onFocus

<dd>

The **onFocus** event specifies the action that would be executed when the input area in the currency widget is focused. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered.

</dd>

#### onBlur

<dd>

The **onFocus** event specifies the action that would be executed when the input area in the currency widget loses focus. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered.

</dd>

#### onSubmit

<dd>

The **onFocus** event specifies the action that would be executed when the input is submitted with the `ENTER` key. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered.

</dd>

#### Reset on submit

<dd>

Clears the input value after submit

The **Reset on submit** event clears the input value after submit. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered.

</dd>

## Style properties
Style properties allow you to change the look and feel of the widget.

#### Font color `string`

<dd>

Represents the text color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color).  It can also be manipulated programmatically using the JavaScript functions.

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