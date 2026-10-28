---
title: List (ALPHA)
sidebar_label: List
hide_title: true
description: The List widget repeats a row of widgets that you design once for each item in an array.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>List (ALPHA)</h1>

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

The List widget repeats a row template once for each item in **Items**. You design the template by dropping widgets into the template zone inside the list on the canvas. Use it for cards, feeds, and other repeated layouts. For a plain list of text rows, use the [Text List](/reference/responsive-widgets/text-list) widget.

Widget type: `WDS_LIST_VIEW_WIDGET`

<ZoomImage src="/img/responsive-widgets/list.png" alt="List widget in a Responsive app" caption="List widget" />

## Build the row template

Drop widgets into the template zone on the canvas. Inside the row, use these values in bindings:

- `currentItem`: the data of the current item.
- `currentIndex`: the position of the current item.

*Example:* set the text of a Paragraph in the row to:

```js
{{currentItem.name}}
```

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Items `array`

<dd>

Sets the array of objects to show. The list repeats the row template once for each object. New widgets start with three sample items.

*Example:*

```js
{{getProducts.data}}
```

</dd>

### Pagination

#### Rows per page `number`

<dd>

Sets the number of rows on each page. `0` shows every row with no pagination. Default: `0`.

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

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Visual separation `boolean`

<dd>

Gives the list an elevated background so it stands out as a separate surface. Default: on. You cannot bind this property.

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

Holds the value of **Items**.

*Example:*

```js
{{List1.listData}}
```

</dd>

#### pageNo `number`

<dd>

Holds the current page number. Starts at `1`.

*Example:*

```js
{{List1.pageNo}}
```

</dd>

#### pageSize `number`

<dd>

Holds the value of **Rows per page**.

*Example:*

```js
{{List1.pageSize}}
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
