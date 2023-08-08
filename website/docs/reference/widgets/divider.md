---
Description: The Divider widget is used to visually separate or compartmentalise different parts of your application.
---
# Divider

This page provides information on using the Divider widget, which serves the purpose of visually separating or compartmentalizing various sections within your application.

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. Default value is set to `true`.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. Default value is set to `true`.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### General

#### Direction `string` 

<dd>

Determines the orientation of the widget's line, allowing you to choose between horizontal and vertical alignments. When JavaScript is enabled, accepted values are `horizontal` or `vertical`.

</dd>

### Stroke

#### Color `string`

<dd>

Specify the color of the divider. It accepts [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color) and can also be programmatically modified using JavaScript functions.


</dd>

#### Style `string`

<dd>

Sets the type of line used for the divider.

*Options:*
* Solid: A continuous and unbroken line.
* Dashed: A line composed of short, evenly spaced dashes.
* Dotted: A line made up of small, distinct dots.

With JS is enabled, accepts strings with value `solid`, `dashed`, or `dotted`.


</dd>

#### Thickness `number` 


<dd>

Sets the thickness of the divider line in pixels. 

</dd>

### Cap

#### Cap `string`

<dd>

Sets the style of cap to apply to the divider line.

*Options:*
* No Cap
* Arrow
* Dot

</dd>

#### Cap position `string`

<dd>

Determines the placement of caps on the sides of the divider line. 

*Options:*

* Left
* Both
* Right

</dd>

## Reference properties

These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `Divider1.isVisible`.

#### capType `string`

<dd>

Indicates the widget's Cap style property, shows whether the divider line is capped with a Dot, an Arrow, or No cap. 


*Example:*

```js
{{Divider1.capType}}
```


</dd>


#### capSide `number`

<dd>

Reflects the widget's Cap Position style property, indicating the sides of the divider line where caps are located. Numeric values include:

* `-1` for the left or top side only
* `0` for both sides
* `1` for the right or bottom side only

*Example:*

```js
{{Divider1.capSide}}
```


</dd>

#### dividerColor `string`

<dd>

Reflects the color value of the divider line, presented in the form of a hexadecimal color code.


*Example:*

```js
{{Divider1.dividerColor}}
```


</dd>


#### orientation `string`

<dd>

Reflects the **Orientation** of the widget, values are strings either `horizontal` or `vertical`.


*Example:*

```js
{{Divider1.orientation}}
```


</dd>

#### strokeStyle `string`

<dd>

Reflects the widget's **Dash Style** property as a string with value either `solid`, `dashed`, or `dotted`.


*Example:*

```js
{{Divider1.strokeStyle}}
```


</dd>


#### thickness `number`

<dd>

Reflects the thickness of the divider line as a number of pixels.


*Example:*

```js
{{Divider1.thickness}}
```


</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*

```js
{{Divider1.isVisible}}
```


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Divider1.setVisibility(true)
```

</dd>