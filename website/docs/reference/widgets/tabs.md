---
description: This page explains how the Tabs widget can be used to group related content and enable users to switch between different sets of information within a single container.
---
# Tabs

This page provides information on using the Tabs widget to organize related content and allow users to switch between different sets of information within a single container.


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Tabs `string`

<dd>

Allows you to manage tabs within the widget, where each tab is identified by a unique name. Additionally, you can rearrange the items and configure their visibility by clicking on the ⚙️ gear icon.

</dd>

#### Default Tab `string`	


<dd>

Allows you can set a default tab for the widget by specifying its name. The selected tab is displayed automatically when the widget is loaded. Make sure the Tab name is exactly as specified.


</dd>

### General

####

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. The default value for the property is `true`.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. The default value for the property is `true`.

</dd>


#### Show tabs `boolean`


<dd>

This option enables you to toggle the visibility of tabs in the tab widget. The default value for the property is `true`.

</dd>

#### Height `string`


<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: Maintains a constant height for the widget, allowing you to adjust it by dragging or using the resize handle.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>

### Events

When the event is triggered, these event handlers can run queries, JS code, or other [actions](/reference/appsmith-framework/widget-actions).


#### onTabSelected

<dd>

Specifies the action to be performed when the user selects a tab.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.


### Colors, Borders and Shadows

#### Accent color `string`

<dd>

Represents the color of the tab, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the color can be programmatically modified using JavaScript functions.

</dd>

#### Background Color `string`

<dd>

Sets the background color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). It can also be manipulated programmatically using the JavaScript functions.

</dd>

#### Border color `string`


<dd>

Sets a color for the border, specified as a CSS color value. It can also be manipulated programmatically using the JavaScript functions.


</dd>

#### Border Width `number`

<dd>

Specifies the width of the widget's border, accepting only numerical values in pixels (px). The default value is `1`.

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

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Tabs2.isVisible`.

#### selectedTab `string`

<dd>

Contains the name of the tab currently selected.

*Example:*

```js
{{Tabs1.selectedTab}}
```

</dd>

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*
```js
{{Tabs1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the .then() block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Tabs1.setVisibility(true)
```

</dd>

## Create multi-step form

Custom navigation schemes can be created by modifying the properties of a Tab widget. For instance, you can use the **Default tabs** and **storeValue** to create a multi-step form.

---
**Example**: suppose you want to create a multi-step form using Tabs Widget.

1. Drop a Tab Widget and rename the tabs to `Basic Info`, and `Personal Info`.

2. On the `Basic Info` tab add a Button widget to allow users to move to the next tab, and set its **onClick** event to:

```js
{{storeValue('defaulttab', 'Personal Info');}}
```

3. Similarly, on the `Personal Info` tab, add a new button widget that allows users to go back to the previous tab, and set its **onClick** event to:

```js
{{storeValue('defaulttab', 'Basic Info');}}
```

You can use the [storeValue](/reference/appsmith-framework/widget-actions/store-value) action for both previous and next buttons, and set the key for the stored value to be the same as the name of the Tabs. 

4. In the **Default Tab** property of the Tabs widget, add the following code:

```js
{{appsmith.store.defaulttab}}
```

<figure>
  <img src="/img/tabs-nav.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Multi-step form using Tabs</i></figcaption>
</figure>



