---
title: Paragraph (ALPHA)
sidebar_label: Paragraph
hide_title: true
description: The Paragraph widget shows body text, such as a description or a block of prose, in a Responsive app.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Paragraph (ALPHA)</h1>

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

The Paragraph widget shows plain text. Use it for descriptions, help text, and other body copy. For a title, use the [Heading](/reference/responsive-widgets/heading) widget. For formatted text with lists and links, use the [Markdown](/reference/responsive-widgets/markdown) widget.

Widget type: `WDS_PARAGRAPH_WIDGET`

<ZoomImage src="/img/responsive-widgets/paragraph.png" alt="Paragraph widget in a Responsive app" caption="Paragraph widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Text `string`

<dd>

Sets the text the widget shows. You can bind data to it, for example `{{AnvilTable1.selectedRow.description}}`.

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

Sets the size of the text. Options: **Body** (default), **Subtitle**, **Title**, **Heading**.

Values for code: `body`, `subtitle`, `title`, `heading`.

When you pick **Subtitle**, **Title**, or **Heading** in the property pane, the widget turns into a [Heading](/reference/responsive-widgets/heading) widget. When you pick **Body**, it stays a Paragraph widget.

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

Reference properties let you read the widget's state in bindings and code, for example `{{Paragraph1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The text the widget shows.

*Example:*

```js
{{Paragraph1.text}}
```

</dd>

#### value `string`

<dd>

The same value as `text`.

*Example:*

```js
{{Paragraph1.value}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Paragraph1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Paragraph1.setVisibility(false)
```

</dd>

#### setText (param: string): Promise

<dd>

Sets the text the widget shows.

*Example:*

```js
Paragraph1.setText("Your order has shipped.")
```

</dd>

#### setTextColor (param: string): Promise

<dd>

Sets the text color.

*Example:*

```js
Paragraph1.setTextColor("#d92d20")
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Sets the `isDisabled` value. The Paragraph widget has no **Disabled** property and does not change how it looks or works.

*Example:*

```js
Paragraph1.setDisabled(true)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Sets the `isRequired` value. The Paragraph widget has no **Required** property and does not change how it looks or works.

*Example:*

```js
Paragraph1.setRequired(true)
```

</dd>
