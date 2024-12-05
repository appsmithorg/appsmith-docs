---
title: Paragraph
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Paragraph (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

<Tags
tags={[
{ name: "AI", link: "https://www.appsmith.com/pricing", additionalClass: "ai" }
]}
/>

</div>

<!-- vale on -->

This page provides information on using the Paragraph Widget(available in AI Assistant Apps) to display and style longer text content such as paragraphs, descriptions, or detailed notes, helping to enhance readability and structure within your application.

 <ZoomImage
    src="/img/paragraph-widget.png" 
    alt=""
    caption=""
  /> 

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Text `string`

<dd>

Sets the text to be displayed. The text remains unchanged until manually updated or edited.

You can dynamically change text by fetching data from queries or JS functions and binding the response to the **Text** property.  For instance, when a row in a Table widget is clicked, the Paragraph widget dynamically displays the specific description associated with that row.

*Example:*

```js
{{userTable.selectedRow.name}}
```


</dd>

#### Line clamp `number`

<dd>

The **Line Clamp** property specifies the maximum number of lines to display for a text element. Any content exceeding the defined limit is truncated and represented with an ellipsis. When no value is specified, the text automatically adjusts to multiple lines based on its length. 

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Font size `string`

<dd>

he **Font Size** property controls the size of the text, with predefined options including `Heading`, `Title`, `Subtitle`, and `Body`. For the Paragraph Widget, the default font size is set to **Body** to optimize readability for longer text.

You can enable *JS* to dynamically set the Font Size, allowing it to change based on specific conditions or user interactions.


</dd>


### Text formatting

The Text Formatting properties allow you to customize the appearance of the text in the Widget. 


#### Alignment `string`

<dd>

Sets the horizontal alignment of the text within the cells.

*Options*:
* Left
* Center
* Right

</dd>

#### Emphasis `String`

<dd>

Allows you to choose a font style for the widget, including options like bold or italic. When JS is enabled, you can dynamically modify the font style using JavaScript functions.

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Paragraph1.isVisible`.

#### text `string`

<dd>

The `text` property retrieves the current text value of the widget.

*Example:*
```js
{{Paragraph1.text}}
```

</dd>

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*

```js
{{Paragraph1.isVisible}}
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
Paragraph1.setVisibility(true)  // Makes the Heading widget visible
```

</dd>

#### setDisabled `(param: boolean): Promise`

<dd>

Sets the disabled state of the widget. When set to true, the widget becomes unresponsive, and users cannot interact with it.

*Example:*

```js
Paragraph1.setDisabled(false)  // Enables the Heading widget
```

</dd>

#### setRequired `(param: boolean): Promise`

<dd>

Sets whether the widget is required or not. This method is typically used for form elements where user input is mandatory.

*Example:*

```js
Paragraph1.setRequired(true)  // Marks the Heading widget as required
```

</dd>

#### setText `(param: string): Promise`

<dd>

Sets the text value of the widget. You can dynamically change the text content of the widget at runtime.

*Example:*

```js
Paragraph1.setText('Welcome to the Dashboard!')  // Updates the Heading widget text
```
</dd>