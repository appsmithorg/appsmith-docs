---
description: Learn how to use the Progress widget to visually track the progress of tasks or processes in your application.
---
# Progress

This page provides information on using the Progress widget, which is used to visualize the progression of specific operations and user or system-triggered actions.



<VideoEmbed host="youtube" videoId="Yg1Pfy7uc1s" title="How to use Progress Widget" caption="How to use Progress Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Basic

#### Infinite loading `boolean`

<dd>

Enables the widget to enter an infinite loading state, which is beneficial when the progress values cannot be determined. For instance, this property can be enabled for queries that take a longer time to execute.

</dd>

#### Type `string`

<dd>

Allows you to select the desired format for the progress bar.

*Options:*
* Circular
* Linear


</dd>

#### Progress `number`

<dd>

Specify the value of the progress indicator (in percentage). You can also use values retrieved from queries or JavaScript functions within the mustache operator `{{}}`.

</dd>


### General

#### Number of steps `number`

<dd>

Specify the number of steps to break down the progress bar into multiple parts with fixed progress percentages. This property only supports positive integers.


</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Show result `boolean`

<dd>

Control the display of the evaluated percentage as a number along with the progress in the widget.


</dd>

#### Counterclockwise  `boolean`

<dd>

Specifies whether the circular progress bar should animate in a counterclockwise direction. This option is only available when the Circular progress **Type** is selected.


</dd>

## Style properties
Style properties allow you to change the look and feel of the widget.

#### Fill color `string`

<dd>

Specify the color of the progress bar. It accepts [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color) and can also be programmatically modified using JavaScript functions.


</dd>

## Reference properties

These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `Progress1.isVisible`.

#### progress `number`

<dd>

Indicates the current progress of the progress bar as a percentage.

*Example:*

```js
{{Progress1.progress}}
```


</dd>

#### isVisible `boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*

```js
{{Progress1.isVisible}}
```


</dd>

## Methods

The methods provided by the widget allow users to dynamically update and manipulate its properties, facilitating the creation of dynamic and interactive applications without the need for manual property modifications. 

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.



#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Progress1.setVisibility(true)
```

</dd>


#### setProgress (param: number): Promise

<dd>

Sets the progress value of the Progress widget.

*Example*:

```js
Progress1.setProgress(50)
```

</dd>