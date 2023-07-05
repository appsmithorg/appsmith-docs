---
description: Learn how to use the Progress widget to visually track the progress of tasks or processes in your application.
---
# Progress

This page provides information on using the Progress, which allows users to visualize the progress of certain user-performed or system-triggered actions.


<VideoEmbed host="youtube" videoId="Yg1Pfy7uc1s" title="How to use Progress Widget" caption="How to use Progress Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Basic

#### Infinite loading `boolean`

<dd>

Enables the widget to enter an infinite loading state, which is beneficial when the progress values cannot be determined. This feature can be activated for queries or API calls that require time to retrieve data.

</dd>

#### Type `string`

<dd>

Allows you to select the desired format for the progress bar, providing options for either a linear or circular representation of progress.


</dd>

#### Progress `number`

<dd>

Specify the percentage of progress to be displayed to the user, which can be dynamically updated using values retrieved from queries or JavaScript functions.

</dd>


### General

#### Number of steps `number`

<dd>

Specify the number of steps to break down the progress bar, dividing it into multiple parts with fixed percentages of progress. This configuration allows for better communication and supports only positive integers.


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

Allows you to enable or disable the display of the current evaluated percentage as a number along with the progress in the widget.


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