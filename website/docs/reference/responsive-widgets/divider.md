---
title: Divider (ALPHA)
sidebar_label: Divider
hide_title: true
description: The Divider widget draws a horizontal or vertical line to separate content, with an optional label.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Divider (ALPHA)</h1>

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

The Divider widget draws a line that separates groups of content. A horizontal divider can show a short label in the middle of the line. The divider has no data and no events. Its color and thickness come from the app theme.

Widget type: `WDS_DIVIDER_WIDGET`

<ZoomImage src="/img/responsive-widgets/divider.png" alt="Divider widget in a Responsive app" caption="Divider widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Orientation `string`

<dd>

Sets the direction of the line. Options: **Horizontal** (default), **Vertical**.

Values for code: `horizontal`, `vertical`.

</dd>

#### Label `string`

<dd>

Shows text in the middle of the line, for example `Section`. The label shows on one line only. Leave it empty for a plain line.

This property shows only when **Orientation** is **Horizontal**. A vertical divider never shows a label.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Line style `string`

<dd>

Sets the style of the line. Options: **Solid** (default), **Dashed**, **Dotted**.

Values for code: `solid`, `dashed`, `dotted`.

</dd>

#### Thickness `string`

<dd>

Sets the thickness of the line, based on the theme border widths. Options: **S** (default), **M**, **L**.

Values for code: `small`, `medium`, `large`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Divider1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Divider1.isVisible}}
```

</dd>

#### orientation `string`

<dd>

The direction of the line: `horizontal` or `vertical`.

*Example:*

```js
{{Divider1.orientation}}
```

</dd>

#### lineStyle `string`

<dd>

The style of the line: `solid`, `dashed`, or `dotted`.

*Example:*

```js
{{Divider1.lineStyle}}
```

</dd>

#### thickness `string`

<dd>

The thickness of the line: `small`, `medium`, or `large`.

*Example:*

```js
{{Divider1.thickness}}
```

</dd>

#### label `string`

<dd>

The label text on the line.

*Example:*

```js
{{Divider1.label}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Divider1.setVisibility(false)
```

</dd>
