---
description: Learn how to use the Rich Text Editor widget for capturing and formatting rich text input.
---
# Rich Text Editor

This page provides instructions on using the Rich Text Editor, which allows users to capture rich text input from users. 

<VideoEmbed host="youtube" videoId="_KrxFScQJys" title="How to use Rich Text Editor Widget" caption="How to use Rich Text Editor Widget"/>

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data


#### Input Type `Button Group`

Allows you to specify the type of input for the default text property in the widget. It provides options to select Markdown or HTML type. If the entered data does not match the specified input type, an error would be displayed. For instance, if you select the input type as HTML, you would not be able to display Markdown text as it requires a different input format.


#### Default Value `String`

Allows you to set the initial text content of the Rich Text Editor widget. It provides a way to define the default value before the user makes any changes.

Once you have selected an input type, such as markdown or HTML, you can populate the default text section with corresponding content. Here's an example showcasing the use of markdown and HTML input types:


```html
// Markdown: 

### Markdown 
##### only works in Markdown RTE

---
//HTML: 

<h3> HTML
<ul>
<li>HTML works in both RTEs</li>
</ul>

<ul>
  <li>Item 1
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
```


### Label

#### Text `String`


<dd>
Sets the label of the Rich Text Editor.
</dd>




#### Position `String`


<dd>


This property allows you to configure the label's placement in three ways:


* **Auto**: Automatically positions the label based on the widget type and layout.
* **Left**: Aligns the label to the left side of the widget.
  * **Alignment**: You can also control the text's placement relative to the widget. You have the choice to align it either to the **Left** boundary or closer to the widget using the **Right** alignment option.
  * **Width**: This allows you to control the proximity of the text to the widget, determining how close or far it can be positioned.
* **Top**: Positions the label above the widget.


</dd>

### Validations


#### Required `Boolean`


<dd>
This validation feature allows you to designate the Rich Text Editor as a mandatory field. For instance, when the Rich Text Editor is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Rich Text Editor is checked.



</dd>

### General


#### Tooltip `String`
<dd>


This feature enables you to add hints or provide additional information to guide the user regarding the required input.
</dd>


#### Visible `Boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the **Visible** property to conditionally control the widget's visibility. 

</dd>

#### Disabled `Boolean`

<dd>

This property prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally.

</dd>


#### Animate Loading `Boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Hide toolbar `Boolean`

<dd>

Controls the visibility of the toolbar within the widget.

</dd>

#### Height `String`


<dd>
This property determines how the widget's height adjusts to changes in its content. There are three available options:


* **Fixed**: The height of the widget remains as set using drag and resize.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.


</dd>


### Events


#### onTextChanged

<dd>

This event allows you to define aN action that would be triggered whenever there is a change in the text input by the user. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the text change.



</dd>

## Style properties
Style properties allow you to change the look and feel of the widget.

#### Font color `String`

<dd>

Represents the text color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color).  It can also be manipulated programmatically using the JavaScript functions.

</dd>

#### Font size `String`

<dd>

Determines the font size of the label. It accepts [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values and can also be programmatically modified using JavaScript functions.

</dd>

#### Emphasis `String`

<dd>

Enables you to select a font style for the widget, such as bold or italic. Additionally, the font style can be programmatically modified using JavaScript functions.

</dd>


#### Border radius `String`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `String`

<dd>

This property adds a drop shadow effect to the frame of the widget. When JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `RichTextEditor1.isVisible`.



#### text `String`

<dd>

The `text` property retrieves the value entered by the user. It allows you to access the input or text content provided within the widget.


</dd>


#### isDisabled `Boolean`

<dd>

The `isDisabled` property indicates the disabled status of a widget. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

</dd>

#### isVisible `Boolean`
<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

</dd>