# Button

This page provides information on the button widget, enabling you to trigger actions or perform specific tasks with a simple click. 

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Basic

#### Label `string`

<dd>

Sets the text that appears on the button.

</dd>

#### onClick

<dd>

Allows you to configure one or multiple [actions](/reference/appsmith-framework/widget-actions) to be executed when the button is clicked. You can chain multiple actions together, and all the nested actions would run simultaneously.

</dd>

### General

#### Tooltip `string`

<dd>

Sets a tooltip that appears when the user hovers over the widget. It enables you to add hints or provide additional information for the button.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the button visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's `disabled` state conditionally.

For example, if you want to allow only a specific user to click the button, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Animate Loading `boolean`


<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

### Validation

#### Google reCAPTCHA key

<dd>

Add a Google reCAPTCHA [site key](https://cloud.google.com/recaptcha-enterprise/docs/create-key) here to enable Google reCAPTCHA check to the button. The token is accessible from the API pane with the `recaptchaToken` key (see the [Google reCAPTCHA](https://www.google.com/recaptcha/about/) docs). Read more about using [Google reCAPTCHA Keys in Appsmith](/reference/widgets/button/google-recaptcha/).

</dd>

#### Google reCAPTCHA version

<dd>

Sets the Google reCAPTCHA version to use for the button, either v2 or v3.

</dd>

### Form settings

Buttons can have some special behaviors when they're located within the boundaries of a [Form widget](/reference/widgets/form). Its form-specific behavior is controlled by two of the button's properties:

#### Disabled invalid forms 

<dd>

When this button property is turned on, the button remains inactive if the associated form contains any required fields that are incomplete or if any of the form fields contain input that is considered invalid.

For example, if you have a form with an [Input widget](/reference/widgets/input/) whose **Required** property is turned on. If that input field hasn't been completed by the user, then the button won't be usable.

</dd>

#### Reset form on success

<dd>

When this button property is turned on, the button can be used to reset all fields present in the form's area to their default state. This is useful for clearing inputs after the form is submitted; when both **Disabled invalid forms** and **Reset form on success** are turned on, submitting the form automatically resets the input fields so they can be used again.

</dd>

## Style properties

Style properties allow you to change the look and feel of the button.

### General

#### Button variant `string`

<dd>

Specifies the style type of the button to indicate its significance.

*Options:*

* **Primary**: Fills the button with color.
* **Secondary**: Adds a colored border to the button while keeping the button itself white.
* **Tertiary**: This option does not apply any specific styling changes to the button.

This property can be dynamically set using JavaScript by providing a string value of `PRIMARY`, `SECONDARY`, or `TERTIARY`.

</dd>

### Icon

#### Select icon `string`

<dd>

Specifies the icon to be displayed on the button. Additionally, you can use **JS** to dynamically set the icon. You can refer to the documentation of [blueprintjs](https://blueprintjs.com/docs/#icons) to explore a wide range of available icons.

</dd>

#### Position `string`

<dd>

This property allows you to configure the **Icon**'s placement.

*Options:*
* **Left**: Aligns the icon to the left side of the Label.
* **Right**: Aligns the icon to the right side of the Label.


</dd>

#### Placement `string`

<dd>

Determines the spacing between the **Icon** and the **Label**.

*Options:*
* **Start**: The icon and label appear on the leftmost side of the button.
* **Between**: The icon and label appear at opposite ends of the button's space.
* **Center**: The icon and label appear in the center of the button space.

This property can be dynamically set using JavaScript by providing a string value of `START`, `CENTER`, or `BETWEEN`.

</dd>

### Color

#### Button color `string`

<dd>

Represents the color of the button, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the font color can be programmatically modified using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify a valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>



### Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a  button widget, you can use `Button1.isVisible`.

#### text `string`

<dd>

Returns the value of the button's label property.

*Example:*
```js
{{Button1.text}}
```
</dd>

#### isVisible `boolean`

<dd>

Indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Button1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's **Disabled** setting. It is represented by a boolean value, where true indicates that the widget is inactive, and false indicates that it is enabled for user interaction.

*Example:*
```js
{{Button1.isDisabled}}
```

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.



#### setVisibility(`:boolean`)

<dd>

Sets the visibility of the widget.

*Example*:

```js
Button1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled(`:boolean`)

<dd>

Sets the `disabled` state of the widget.

*Example*:

```js
Button1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setColor(`:boolean`)

<dd>

Sets the background color of the button widget.

*Example*:

```js
Button1.setColor('#FF0000').then(() => {
  // code to be executed after color is set
})
```

</dd>

#### setLabel(`:boolean`)

<dd>

Sets the label of the button widget.

*Example*:

```js
Button1.setLabel('Click me!').then(() => {
  // code to be executed after label is set
})
```
</dd>