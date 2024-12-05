---
title: Modal
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Modal (AI Assistant)</h1>

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

This page provides information on using the Modal widget to create a dialog in your app for displaying various types of content, such as alerts, confirmation pop-ups, forms, and more.


 <ZoomImage
    src="/img/modal-widget.png" 
    alt="Modal"
    caption="Modal"
  /> 


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Size `string`

<dd>

The **Size** property determines the overall dimensions of the Modal. You can choose from the following options:

- Small
- Medium
- Large

</dd>

### Header

#### Header `boolean`

<dd>

When enabled, it displays the **Title** property, allowing you to add a title to the modal. When disabled, the header, including the title, is hidden. 


</dd>

#### Title `string`

<dd>

Sets the title for the Modal. This property is only available when the **Header** property is enabled. 

</dd>

### Footer

#### Footer `boolean`

<dd>

When enabled, it displays the **Title** property, allowing you to add a title to the modal. When disabled, the header, including the title, is hidden. 


</dd>