---
title: Section (ALPHA)
sidebar_label: Section
hide_title: true
description: A Section is a full-width row on the page that holds one or more Zones side by side.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Section (ALPHA)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>
</div>

<!-- vale on -->

:::caution Alpha feature: invite only
Responsive Widgets are in alpha and available by invitation only on Business and Enterprise plans. Behavior and properties may change. To request access, [open a support ticket](https://support.appsmith.com) and name the feature **Responsive Widgets (ALPHA)**.
:::

A Section is a layout container that spans the full width of the page. It holds only [Zones](/reference/responsive-widgets/zone), and you place your other widgets inside those Zones. Use Sections to split a page into horizontal bands, such as a header area, a filter bar, and a results area.

Widget type: `SECTION_WIDGET`

<ZoomImage src="/img/responsive-widgets/section.png" alt="Section widget in a Responsive app" caption="Section widget" />

## How a Section arranges its content

- A Section always takes the full width of the page.
- A Section can hold only Zone widgets. You cannot drop other widgets directly into a Section.
- Zones sit side by side in one row, with a small gap between them.
- A Section holds up to 4 Zones. A new Section starts with 1 Zone.
- The Section width is split into 12 columns. You decide how many columns each Zone gets.

The Section does not appear as a card in the widget pane. Appsmith adds it for you, for example when you drop a widget onto an empty part of the page.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Section Split

#### Zone widths (splitter)

<dd>

A visual control with no label. It shows the 12 columns of the Section. Drag it to share those 12 columns between the Zones.

</dd>

#### Zones

<dd>

Sets how many Zones the Section has. Use the stepper to add or remove Zones. A Section holds up to 4 Zones.

</dd>

### General

#### Scroll contents `boolean`

<dd>

Caps the Section height at **Max height (px)** and lets users scroll the content inside. Off by default.

</dd>

#### Max height (px) `number`

<dd>

The highest the Section can grow, in pixels, when **Scroll contents** is on. The value must be 100 or more. The placeholder shows `400`.

This property shows only when **Scroll contents** is on.

</dd>

#### Visible `boolean`

<dd>

Controls whether the Section shows in the app. On by default.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the Section loads. On by default.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Background `string`

<dd>

Sets a custom CSS background for the Section. Enter a color or a gradient.

*Examples:*

```
#6366f1
linear-gradient(135deg, #6366f1, #8b5cf6)
```

</dd>

#### Visual Separation `boolean`

<dd>

Gives the Section an elevated background and borders from the theme. Use it to set this Section apart from the other Sections on the page. Off by default.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Section1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the Section is visible.

*Example:*

```js
{{Section1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the Section.

*Example:*

```js
Section1.setVisibility(false)
```

</dd>
