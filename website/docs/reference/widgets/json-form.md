# JSON Form

This page provides information on how to use the JSON form widget, which efficiently generates forms from JSON data, eliminating the need for manual form creation.


<VideoEmbed host="youtube" videoId="Zk6df9mOtQA" title="Configure JSON Form Widget" caption="Configure JSON Form Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Source Data `json`	

<dd>

Allows you to add form data for the widget. To populate the JSON Form with data, you need to provide the data in a structured JSON format like this:

*Expected data structure:*
```json
{
  "name": "John",
  "date_of_birth": "20/02/1990",
  "age": 29, 
  "employee_id": 1001
}
```

You can display dynamic data by binding the response from a query or a JavaScript function to the **Source Data** property. For instance, to display a master-detail form when a user selects a row in a Table widget, you can add the below code in the **Source Data** property:

*Example*:
```js
{{tbluserData.selectedRow}}
```

You can click on an individual row in the Table and update data in the form fields.


Based on the JSON data provided, the JSON Form automatically identifies the appropriate field type for each value. For example, if the data contains the field `age`, the form sets the field type to a `Number Input`. Additionally, you have the flexibility to add or customize field types using the **Field Configuration property**.


</dd>

#### Auto Generate Form `boolean`

<dd>

When enabled, the form layout updates automatically when the field types inside the **Source Data** are changed. With this, the **Field Configuration** property also gets automatically updated to reflect any changes in the **Source Data** property.

However, it's important to note that enabling this feature overrides any custom configurations that you are providing through data transformations using JavaScript.

</dd>

#### Generate Form `string`

<dd>

When the **Auto Generate Form** property is disabled, this button becomes visible. You can use this button to manually regenerate the form layout. With this, the **Field Configuration** property also gets updated to reflect any changes in the **Source Data** property.


</dd>

#### Field Configuration `list`

<dd>

Contains all the generated form fields. You can rearrange the items and configure them by clicking on the ⚙️ gear icon. Alternatively, the eye icon allows you to hide specific fields.

Clicking the gear icon ⚙︎ enables you to customize each form field extensively. You can select any one of the following options from the **Field Type** property to update the widget type for that field on the JSON Form:

* Array
* Checkbox
* Currency Input
* Datepicker
* Email Input
* Multiselect
* Multi-line Text Input
* Number Input
* Object
* Password Input
* Phone Number Input
* Radio Group
* Select
* Switch
* Text Input

Each field type offers unique sets of customizable events and configurations. For instance, the `Number Input` field can have a `min` and `max` value, whereas the Select field includes the options property.

Most of the field properties are similar to those found in widget properties. To explore more about these properties, you can refer to the widget reference guide for more information.


</dd>

#### Add New Field `string`


<dd>

Adds a new field in the form. Fields added this way are known as custom fields and you have the flexibility to delete these fields at a later time. It's important to note that custom fields do not update the **Source data** property.

</dd>

### General

#### Title `string`

<dd>

Sets the text that appears at the top of the form as a title.

</dd>

#### Hidden Fields in Data `boolean`


<dd>

When you enable this option, the output data is updated to include data from hidden fields. These hidden field values are taken from the source data.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in *View Mode*. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Disable Invalid Forms `boolean`

<dd>

When turned on, the JSON Form widget checks the validation properties, and the Submit button is automatically disabled if there are failing checks. 

</dd>


#### Show Reset `boolean`

<dd>

When the property is enabled, a reset button is added to the form. Clicking this button resets all fields in the form to their default values. This is useful if a user wants to start over with a new entry or if they entered the wrong information and need to clear the form.

</dd>

#### Submit Button Label `string`

<dd>

Sets the text for the Submit button.

</dd>

#### Reset Button Label	 `string`

<dd>

Sets the text for the Reset button.

</dd>

#### Height `string`


<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: Maintains a constant height for the widget, allowing you to adjust it by dragging or using the resize handle.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>

### Events

#### onSubmit

<dd>

Sets an [action](reference/appsmith-framework/widget-actions) to be executed when the user clicks the Submit button on the form.

</dd>


## Style properties
Style properties allow you to change the look and feel of the widget.

### Color

#### Background Color `string`

<dd>

Sets the background color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). It can also be manipulated programmatically using the JavaScript functions.

</dd>

#### Border Color String `string`

<dd>

Sets a color for the form's border, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). It can also be manipulated programmatically using the JavaScript functions.

</dd>

### Border and shadow

#### Border Width	 `number`

<dd>

Sets the width of the widget's border. Accepts number values only, in px.

</dd>


#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>

### Button styles


#### Button color `string`

<dd>

Represents the color of the button, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the font color can be programmatically modified using JavaScript functions.

</dd>

#### Button variant `string`

<dd>

Specifies the style type of the button to indicate its significance.

*Options:*

* **Primary**: Fills the button with color.
* **Secondary**: Adds a colored border to the button while keeping the button itself white.
* **Tertiary**: This option does not apply any specific styling changes to the button.

This property can be dynamically set using JavaScript by providing a string value of `PRIMARY`, `SECONDARY`, or `TERTIARY`.
</dd>

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>

#### Icon `string`

<dd>

Specifies the icon to be displayed on the button. Additionally, you can use **JS** to dynamically set the icon. You can refer to the documentation of [blueprintjs](https://blueprintjs.com/docs/#icons) to explore a wide range of available icons.

</dd>

#### Position `string`

<dd>

This property allows you to configure the **Icon**'s placement.

*Options:*
* **Left**: Aligns the Icon to the left side of the Label.
* **Right**: Aligns the Icon to the right side of the Label.


</dd>

#### Placement `string`

<dd>

Determines the spacing between the **Icon** and the **Label**.

*Options:*
* Start
* Center
* Between

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `JSONForm1.isVisible`.

#### formData `object`

<dd>

Contains a JSON object with the field names and their current values in the form.

*Example:*
```js
{{JSONForm1.object}}
```

</dd>

#### fieldState `object`

<dd>

A JSON object describing the state of each field in the form. State data includes: `isDisabled`, `isRequired`, `isVisible`, and `isValid`.

Example:

```js
// To access the whole object:
{{JSONForm1.fieldState}}

// To get state for a particular field (e.g., "name"):
{{JSONForm1.fieldState.name}}
```
</dd>


#### isValid `boolean`


<dd>

Reflects whether the widget's inputs are considered Valid.

Example:

```js
{{JSONForm1.isValid}}
```

</dd>

#### sourceData `object`

<dd>

Contains a JSON object of the original source data which was bound to the form.

Example:

```js
{{JSONForm1.sourceData}}
```

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility(`:boolean`)

<dd>

Sets the visibility of the widget.

*Example*:

```js
JSONForm1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
JSONForm1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>


#### setSourceData(`:object`)

<dd>

 Sets the data to be displayed in the widget.

*Example*:

```js
JSONForm1.setSourceData(<data>)
```

To perform sequential actions, use the `.then()` block for execution.

```js
JSONForm1.setSourceData(<data>).then(() => {
  // Code to be executed after data is set
});
```

</dd>

## Troubleshooting

Here are some common errors that you may see when using the JSON Form widget:

* [Source data exceeds 50 fields](/help-and-support/troubleshooting-guide/widget-errors#source-data-exceeds-50-fields)

If you encounter other issues while working with the widget, see [widget errors](/help-and-support/troubleshooting-guide/widget-errors). If the guide doesn't cover your issue, contact the [support team](mailto:support@appsmith.com).
