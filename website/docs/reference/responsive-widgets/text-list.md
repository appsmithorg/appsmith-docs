---
title: Text List (ALPHA)
sidebar_label: Text List
hide_title: true
description: The Text List widget shows an array of data as a vertical list of rows with primary and secondary text.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Text List (ALPHA)</h1>

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

The Text List widget shows an array of objects as a vertical list. Each row shows a primary text and an optional secondary text. Use it for simple lists, such as names with job titles. To build rows from other widgets, use the [List](/reference/responsive-widgets/list) widget.

Widget type: `WDS_LIST_WIDGET`

<ZoomImage src="/img/responsive-widgets/text-list.png" alt="Text List widget in a Responsive app" caption="Text List widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### List data `array`

<dd>

Sets the array of objects to show as rows. New widgets start with three sample rows.

*Example:*

```js
{{getUsers.data}}
```

</dd>

#### Primary text key `string`

<dd>

Sets the object key to use for the primary text of each row. Default: `name`.

</dd>

#### Secondary text key `string`

<dd>

Sets the object key to use for the secondary text of each row. Optional. Default: `detail`.

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

Reference properties let you read the widget's state in bindings and code, for example `{{List1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{List1.isVisible}}
```

</dd>

#### listData `array`

<dd>

Holds the data in the list.

*Example:*

```js
{{List1.listData}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
List1.setVisibility(false)
```

</dd>

#### setData (param: array): Promise

<dd>

Sets the list data.

*Example:*

```js
List1.setData([{ name: "Ada Lovelace", detail: "Engineer" }])
```

</dd>
