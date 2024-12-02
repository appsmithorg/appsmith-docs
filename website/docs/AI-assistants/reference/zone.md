---
title: Zone
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Zone</h1>

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

This page provides information on using the **Zone Widget**, a tool that helps you organize and structure your application layout by creating distinct sections. 


This page provides information on using the **Zone Widget**, which lets you create different UI zones to group multiple widgets. 

This widget is only available in **AI Assistant Apps** and cannot be used in **Classic Apps**.

 <ZoomImage
    src="/img/zone-ai.gif" 
    alt="Zone"
    caption="Zone"
  /> 


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

#### Section Split `string`

<dd>

The **Section Split** property defines how the Zone Widget is divided into columns, enabling a responsive layout. By default, it is set to a single split of 12 columns. This means the entire Zone occupies one row with a uniform width.

You can customize this by splitting the Zone into a maximum of four sections, each with its own column configuration. Each section can have a minimum of 2 columns and a maximum of 12 columns. 

</dd>



