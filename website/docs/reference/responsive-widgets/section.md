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

#### Visual Separation `boolean`

<dd>

Gives the Section an elevated background and borders from the theme. Use it to set this Section apart from the other Sections on the page. Off by default.

</dd>

### Custom styling

These settings are in the **Custom styling** section, at the end of the **Style** tab. An empty setting uses the theme value. For theme colors, dark mode, and the rules for custom CSS, see [Custom styling](/reference/responsive-widgets/custom-styling).

#### Accent color `string`

<dd>

Builds the hover, pressed, focus, and text colors of this widget from one color, in light and dark mode. Lists and menus that the widget opens use them too. Empty means the theme accent.

</dd>

#### Background `string`

<dd>

Sets the background of the Section. Takes a custom color or a gradient, not a theme color.

*Examples:*

```text
#6366f1
linear-gradient(135deg, #6366f1, #8b5cf6)
```

</dd>

#### Text color `string`

<dd>

Sets the text color of the widget surface. Takes a theme color or a custom color. When it is empty and **Background** is set, the widget picks a readable text color.

</dd>

#### Border color `string`

<dd>

Sets the border color of the widget surface. Takes a theme color or a custom color. A color with no **Border width** draws a thin border.

</dd>

#### Border width `string`

<dd>

Sets the border width of the widget surface. Options: **From theme** (default), **None**, **Thin**, **Medium**, **Thick**. You cannot bind this property.

</dd>

#### Corners `string`

<dd>

Sets the corner radius of the widget surface. Options: **From theme** (default), **Sharp**, **Rounded**, **Pill**. You cannot bind this property.

</dd>

#### Custom CSS `string`

<dd>

Adds plain CSS to this widget. Rules apply only inside the widget, and `&` is the widget surface. You cannot bind this property.

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
