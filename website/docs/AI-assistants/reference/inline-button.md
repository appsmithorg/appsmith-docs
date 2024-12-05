---
title: Inline Buttons
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Inline Buttons (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


</div>

<!-- vale on -->

This page provides information on the Inline Buttons widget *(available in AI Assistant Apps)*, which allows you to place multiple buttons in a single row with a customizable separator, providing a streamlined interface for user interactions.


 <ZoomImage
    src="/img/inline-button.png" 
    alt=""
    caption=""
  /> 

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences. 

### Data

Defines the options and datasources for the widget, determining the content displayed to users.

#### Buttons

<dd>

This property allows you to define the buttons within the Inline Buttons widget. You can add multiple buttons, remove them, or rearrange them to customize the widget's layout based on your needs.

Each button is configured individually, and you can edit its label, action, and style by clicking the gear icon next to the button.For more details, see [Button Settings](#buttons-settings).

By default, a **Separator** is included between button groups to visually separate them. This separator can be removed or repositioned, but only one separator is allowed in the widget at a time.

</dd>



#### Visible `boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```


</dd>



#### Animate Loading `boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>


### Buttons Settings

This property allows you to configure individual buttons within the group. By clicking the gear icon next to a button, you can update its label and events for that button.

 <ZoomImage
    src="/img/button-setting-ai.gif" 
    alt=""
    caption=""
  /> 




####  Text `label`

<dd>

Specifies the label displayed on the button. 

</dd>


#### Visible `boolean`

<dd>

Controls the visibility of the button. When set to `true`, the button is displayed; when `false`, it is hidden.

*Example:* If you want to display Button only when Checkbox is checked, use:

```js
{{Checkbox1.isChecked ? true : false}}
```


</dd>


#### Disabled `boolean`

<dd>

This property disables the specific button, preventing users from interacting with it. The button remains visible but cannot be clicked. You can use JavaScript by clicking the JS icon next to the Disabled property to conditionally control the button's disabled state.

*Example:*

```JS
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```


</dd>

#### onClick

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the button is clicked. You can chain multiple actions together, and all the nested actions would run simultaneously.


</dd>

## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `InlineButtons1.isVisible`.

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*

```js
{{InlineButtons1.isVisible}}
```

</dd> 

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor. 

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.

#### setVisibility `(param: boolean): Promise`

<dd>

Sets the visibility of the widget. This method allows you to show or hide a widget based on certain conditions or user interactions.

*Example*:

```js
InlineButtons1.setVisibility(true)  // Makes the Heading widget visible
```

</dd>

#### setDisabled `(param: boolean): Promise`

<dd>

Sets the disabled state of the widget. When set to true, the widget becomes unresponsive, and users cannot interact with it.

*Example:*

```js
InlineButtons1.setDisabled(false)  // Enables the Heading widget
```

</dd>
