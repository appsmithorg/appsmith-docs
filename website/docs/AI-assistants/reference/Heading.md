---
title: Heading
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Heading</h1>

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

This page provides information on using the Heading Widget to set and style text for creating titles, subtitles, and headers, helping you organize content and improve readability.


 <ZoomImage
    src="/img/Heading-widget.png" 
    alt=""
    caption=""
  /> 

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Text `string`

<dd>

Sets the text to be displayed. The text remains unchanged until manually updated or edited.

You can dynamically change text by fetching data from queries or JS functions and binding the response to the **Text** property. For instance, when a row in a Table widget is clicked, the Text dynamically displays the specific name associated with that row.

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

#### Font size `string`

<dd>

The **Font Size** property controls the size of the text, with predefined options including `Heading`, `Title`, `Subtitle`, and `Body`. `Heading` is the largest, followed by `Title`, `Subtitle`, and `Body` as the smallest. You can enable JS to dynamically set the **Font Size**, allowing it to change based on specific conditions or user interactions. 

By default, the size is set to **Heading**.



</dd>


### Text formatting


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
