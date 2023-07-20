# Form

This page provides information on how to use the Form widget to collect, validate, and submit user input. It acts as a container for grouping related inputs and comes with a default Text widget for the title, as well as Submit and Reset buttons for form interaction. 

The Reset button allows for one-click clearing of form fields to default values. Similarly, the Success button allows you to set actions to be performed when the submit button is clicked. 

<VideoEmbed host="youtube" videoId="UgpQ0ZOnzdg" title="How to use Form Widget" caption="How to use Form Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Height `string`


<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: Maintains a constant height for the widget, allowing you to adjust it by dragging or using the resize handle.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>


## Style properties
Style properties allow you to change the look and feel of the widget.

### Color

#### Background Color `String`

<dd>

Sets the background color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color).  It can also be manipulated programmatically using the JavaScript functions.


</dd>

#### Border Color `String`

<dd>

Sets a color for the form's border, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color).  It can also be manipulated programmatically using the JavaScript functions.


</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `Form1.isVisible`.



#### data `object`

<dd>

The `data` property contains the data of the widgets embedded in the form. 

*Example:*
```js
//Access all data
{{Form1.data}}

//Access data from a Specific Widget
{{Form1.data.<widget_name>}}
```

For instance, if you have a Select widget `OrderStatus` inside Form, its value can be accessed as shown:

```js
// Form1.data
{
"Text": "Form1",
"OrderStatus": "SHIPPED"
}
```
```js
//Access the widget values
{{Form1.data.OrderStatus}}
```


</dd>

#### hasChanges `boolean`

<dd>

The `hasChanges` property indicates whether the user has made any modifications to the form fields.

*Example:*
```js
{{Form1.hasChanges}}
```
</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Form1.isVisible}}
```
</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Form1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Form1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>

