---
title: Icon Button
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Icon Button (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


</div>

<!-- vale on -->

This page provides information on using the Icon Button widget *(available in AI Assistant Apps)*, which allows you to perform actions or trigger tasks with a single click.




## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Basic

#### Icon `string`

<dd>

Specifies the icon to display on the button. You can choose from a predefined list of available icons. By enabling JS, you can dynamically change the icon based on data or user interactions.

*Example:* If you want to change the button's icon based on whether a checkbox is checked or not, use the following JS expression:

```js
{{ Checkbox1.isChecked ? "check" : "alert-circle" }}
```

</dd>

#### onClick

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the button is clicked. You can chain multiple actions together, and all the nested actions would run simultaneously.

</dd>



### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Tooltip `string`
<dd>


Specifies a short hint or description that appears when users hover over the widget. 

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

For example, if you want to allow only a specific user to click on the Icon Button, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>


## Style properties

Style properties allow you to change the look and feel of the button.

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Button variant `string`

<dd>

Specifies the style type of the button to indicate its significance. You can choose from the following options:


*Options:*

* **Filled:** A solid button with a background color, typically used for primary actions or important buttons.
* **Outlined:** A button with only a border and no background, used for secondary actions or less important buttons.
* **Subtle:** A button with minimal styling, often used for less prominent actions, providing a cleaner and more subtle look.
* **Ghost:** A button with no visible border or background, ideal for actions that are even more subtle or when you want to maintain a clean, unobtrusive interface.

This property can also be dynamically set using JS, allowing you to change the button's appearance based on conditions or user interactions.




</dd>

#### Button color `string`

<dd>

Specifies the color of the button to emphasize its importance or action. You can select from the following predefined color options:

- **Accent:** Uses the accent color from the app theme. You can change the accent color from the app theme settings.
- **Neutral**: Uses a neutral color, which is black for light theme and white for dark theme.
- **Positive**: Uses a green shade to indicate positive values. The color cannot be customized.
- **Negative**: Uses a red shade to indicate negative values. The color cannot be customized.
- **Warning**: Uses an orange shade to indicate caution or warnings. The color cannot be customized.

You can enable JS to dynamically update the color. The value should be one of the predefined options such as `accent`, `neutral`, `positive`, `negative`, or `warning`.  You cannot set a custom color directly for this widget. To change the color, you can adjust it through the app theme settings.

*Example:* If you want to change the button color based on whether a checkbox is checked or not, use the following JS expression:

```js
{{ Checkbox1.isChecked ? "positive" : "negative" }}
```

</dd>

## Reference properties
Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `IconButton1.isVisible`.


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{IconButton1.isVisible}}
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
IconButton1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
IconButton1.setDisabled(false)
```

</dd>

