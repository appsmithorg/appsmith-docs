---
title: Markdown (ALPHA)
sidebar_label: Markdown
hide_title: true
description: The Markdown widget turns a Markdown string into formatted text with headings, lists, links, tables, and code.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Markdown (ALPHA)</h1>

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

The Markdown widget shows formatted text from a Markdown string. Use it for help content, release notes, or text that comes from a query or an AI response. For plain text, use the [Paragraph](/reference/responsive-widgets/paragraph) widget.

Widget type: `WDS_MARKDOWN_WIDGET`

<ZoomImage src="/img/responsive-widgets/markdown.png" alt="Markdown widget in a Responsive app" caption="Markdown widget" />

## Supported Markdown

The widget supports standard Markdown and GitHub Flavored Markdown (GFM). For example:

- Headings, bold, italic, and inline code
- Bulleted and numbered lists
- Links
- Tables
- Fenced code blocks

How some elements render:

- **Links** open in a new browser tab.
- **Fenced code blocks** that name a language after the opening backticks, for example `sql` or `js`, show syntax highlighting, the language name, and a **Copy** button. Code blocks without a language show as plain code.

### HTML is not rendered

The widget never turns HTML inside the Markdown into live page elements. Any HTML tags in the text, such as `<script>`, `<img>`, or `<iframe>`, show as plain text or are left out. They do not run.

Markdown syntax itself still works. If you bind the widget to data you do not control, such as user input or an API response, Markdown images in that data load from their external URLs, and Markdown links can point to any web address.

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Text `string`

<dd>

Sets the Markdown content. Line breaks are kept, because Markdown needs them. You can bind data to it, for example `{{Api1.data.notes}}`.

*Example:*

```md
## Release notes

- **Fixed** the login error
- Added [docs](https://docs.appsmith.com)
```

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Markdown1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The Markdown string the widget shows.

*Example:*

```js
{{Markdown1.text}}
```

</dd>

#### value `string`

<dd>

The same value as `text`.

*Example:*

```js
{{Markdown1.value}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Markdown1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Markdown1.setVisibility(false)
```

</dd>

#### setText (param: string): Promise

<dd>

Sets the Markdown string the widget shows.

*Example:*

```js
Markdown1.setText("## Done\n\nYour report is **ready**.")
```

</dd>
