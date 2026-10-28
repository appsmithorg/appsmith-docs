---
title: TagGroup (ALPHA)
sidebar_label: TagGroup
hide_title: true
description: The TagGroup widget shows a read-only list of tags, such as statuses or labels, from an options array.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>TagGroup (ALPHA)</h1>

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

The TagGroup widget shows a row of tags. The tags are for display only. Users cannot select, remove, or click them, and the widget has no events. Use it to show statuses, categories, or skills. If users need to act on the tags, use the [Chip Group](/reference/responsive-widgets/chip-group) widget.

Widget type: `WDS_TAG_GROUP_WIDGET`

<ZoomImage src="/img/responsive-widgets/tag-group.png" alt="TagGroup widget in a Responsive app" caption="TagGroup widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Appearance

#### Alignment `string`

<dd>

Sets the horizontal alignment of the tags. Options: left (default), center.

Values for code: `start`, `center`.

</dd>

#### Chip background `string`

<dd>

Sets a custom background for the tags. Use a CSS color, for example `#def7ec` or `rgba(255,255,255,0.25)`.

When you set **Chip background** or **Chip text color**, the widget draws the tags as plain pills with your colors instead of the theme style.

</dd>

#### Chip text color `string`

<dd>

Sets a custom text color for the tags. When you set it, the widget draws the tags as plain pills with your colors instead of the theme style.

</dd>

### Data

#### Options `array`

<dd>

Sets the tags to show, as an array of objects with a `label` and a `value`. The widget shows the `label`.

*Example:*

```js
[
  { "label": "Active", "value": "active" },
  { "label": "Pending", "value": "pending" },
  { "label": "Archived", "value": "archived" }
]
```

The array must follow these rules, or the property pane shows an error:

- Each item needs a `label`.
- Each `value` must be unique.
- All `value` fields must have the same type, either all strings or all numbers.

You can bind data to it, for example `{{GetTags.data.map(t => ({ label: t.name, value: t.id }))}}`.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{TagGroup1.isVisible}}`. You cannot set them directly.

#### options `array`

<dd>

The array of tags the widget shows.

*Example:*

```js
{{TagGroup1.options}}
```

</dd>

#### value `array`

<dd>

The same value as `options`.

*Example:*

```js
{{TagGroup1.value}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{TagGroup1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
TagGroup1.setVisibility(false)
```

</dd>

#### setOptions (param: array): Promise

<dd>

Sets the tags the widget shows.

*Example:*

```js
TagGroup1.setOptions([{ label: "Urgent", value: "urgent" }])
```

</dd>
