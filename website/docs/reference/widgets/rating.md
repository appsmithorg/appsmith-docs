---
Description: The Rating widget is used to perform a quick rating operation on something. Use the Rate component to rate any sort of information from the connected data source. It's customizable and features rich.
---
# Rating

This page provides information on using the Rating widget to perform a quick rating operations.

<ZoomImage src="/img/rating-img.png" alt="Display images on table row selection" caption="Display Rating" />

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Max Rating	`number`

<dd>

Specify the total number of stars you want to use for rating the information. The default value is set to `5`.

</dd>

#### Default Rating	`number`

<dd>

Sets the default value of the widget when users see it for the first time. The default value is set to `3`.

</dd>

#### Tooltips `array<string>`

<dd>

Sets the tooltip content for the stars by providing an array of strings that describe the values of each star.

*Expected data structure:*

```js
[
  "Terrible",
  "Bad",
  "Neutral",
  "Good",
  "Great"
]
```

</dd>

### General

#### Allow half stars `boolean`

<dd>

Enable this option to accept half star ratings, providing users with more precise rating capabilities.


</dd>


#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. Default value is set to `true`.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's `disabled` state conditionally. Default value is set to `false`.

For example, if you want to allow only a specific user to click the button, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Read Only	 `boolean`

<dd>

When enabled, user input is disabled, but the stars retain their regular styling, and the tooltips remain visible when the user hovers with the mouse cursor. However, when the **Disabled** setting is turned on, the **Read Only** mode is disregarded.

</dd>

#### Animate Loading `boolean`


<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.  Default value is set to `true`.

</dd>

#### Height `string`


<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: Maintains a constant height for the widget, allowing you to adjust it by dragging or using the resize handle.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>

### Events

#### onChange		

<dd>

Sets the action (Framework functions, queries, or JS functions) to be executed when the rate is changed.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### General

#### Star size `string`

<dd>

Allows you to control the size of the star icons.

*Options:*

* Small
* Medium
* Large


</dd>

### Color

#### Active color	`string`

<dd>

Sets the color of the stars that are displayed for the default rate. Additionally, the active color can be programmatically modified using JavaScript functions.


</dd>

#### Inactive color `string`	

<dd>

Sets the color of inactive stars displayed in the rating widget. Additionally, the inactive color can be programmatically modified using JavaScript functions.


</dd>

## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Rating1.isVisible`.

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*
```js
{{Rating1.isVisible}}
```

</dd>

#### maxCount `number`

<dd>

Indicates the total number of stars, as specified in the **Max Rating** property.

*Example:*
```js
{{Rating1.maxCount}}
```

</dd>

#### value `number`

<dd>

Indicates the value selected by the user in the Rating widget.

*Example:*
```js
{{Rating1.value}}
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
Rating1.setVisibility(true)
```


</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Rating1.setDisabled(false)
```


</dd>

#### setValue (param: number): Promise

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
Rating1.setValue(3)
```

</dd>