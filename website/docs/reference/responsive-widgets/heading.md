---
title: Heading (ALPHA)
sidebar_label: Heading
hide_title: true
description: The Heading widget shows a title or section heading in a Responsive app.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Heading (ALPHA)</h1>

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

The Heading widget shows a title or a section heading. It has the same properties as the [Paragraph](/reference/responsive-widgets/paragraph) widget, but it starts with a larger font size.

Widget type: `WDS_HEADING_WIDGET`

<ZoomImage src="/img/responsive-widgets/heading.png" alt="Heading widget in a Responsive app" caption="Heading widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Text `string`

<dd>

Sets the text the widget shows. Default: `Header`. You can bind data to it, for example `{{AnvilTable1.selectedRow.name}}`.

</dd>

#### Line clamp (max lines) `number`

<dd>

Sets the largest number of lines the widget shows. Text past that line is cut off. When you set a line clamp, users can hover over the text to see all of it. The value must be 1 or more. Leave it empty to show all lines.

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

#### Font size `string`

<dd>

Sets the size of the text. Options: **Body**, **Subtitle**, **Title**, **Heading** (default).

Values for code: `body`, `subtitle`, `title`, `heading`.

When you pick **Body** in the property pane, the widget turns into a [Paragraph](/reference/responsive-widgets/paragraph) widget.

</dd>

### Text formatting

#### Text color `string`

<dd>

Sets a custom color for the text. This overrides the theme color.

</dd>

#### Alignment `string`

<dd>

Sets the horizontal alignment of the text. Options: left (default), center, right.

Values for code: `left`, `center`, `right`.

</dd>

#### Emphasis `string`

<dd>

Makes the text bold, italic, or both.

Values for code: `bold`, `italic`. To use both, include both words, for example `bold,italic`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Heading1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The text the widget shows.

*Example:*

```js
{{Heading1.text}}
```

</dd>

#### value `string`

<dd>

The same value as `text`.

*Example:*

```js
{{Heading1.value}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Heading1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Heading1.setVisibility(false)
```

</dd>

#### setText (param: string): Promise

<dd>

Sets the text the widget shows.

*Example:*

```js
Heading1.setText("Monthly report")
```

</dd>

#### setTextColor (param: string): Promise

<dd>

Sets the text color.

*Example:*

```js
Heading1.setTextColor("#1570ef")
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Sets the `isDisabled` value. The Heading widget has no **Disabled** property and does not change how it looks or works.

*Example:*

```js
Heading1.setDisabled(true)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Sets the `isRequired` value. The Heading widget has no **Required** property and does not change how it looks or works.

*Example:*

```js
Heading1.setRequired(true)
```

</dd>
