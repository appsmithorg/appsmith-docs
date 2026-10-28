---
title: Sheet (ALPHA)
sidebar_label: Sheet
hide_title: true
description: A Sheet is a panel that slides in from the side or bottom of the screen and holds its own widgets.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Sheet (ALPHA)</h1>

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

A Sheet is a panel that slides in over the page from the start edge, the end edge, or the bottom. It is lighter than a [Modal](/reference/responsive-widgets/modal). Use it for side content, such as filters, record details, or a settings drawer.

Widget type: `WDS_SHEET_WIDGET`

{/* TODO: add /img/responsive-widgets/sheet.png. On internal.appsmith.com (2026-10-28) selecting the Sheet in the editor did not open it, so no screenshot was captured. */}

## Open and close the Sheet

The Sheet is hidden when the app loads. It does not take up space on the page.

- To open it, call `Sheet1.setVisibility(true)`, for example from a button's **onClick** event.
- To close it from code, call `Sheet1.setVisibility(false)`.
- Users can close it with the close button in the header. They can also close it by clicking outside it or pressing Escape, when those options are on.

In the editor, select the Sheet or a widget inside it to open it, so you can add widgets to it.

## Sheet body

When you add a Sheet, Appsmith creates one [Zone](/reference/responsive-widgets/zone) inside it. This Zone is the Sheet body. Drop your widgets into it. The body Zone has **Visual separation** off, so it blends into the Sheet.

If you delete the body Zone, the editor shows the message "This sheet's body was deleted. Undo to restore it." Use undo to bring it back.

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Animate loading `boolean`

<dd>

Shows a loading animation while the Sheet loads. On by default.

</dd>

#### Position `string`

<dd>

Sets the edge the Sheet slides in from. Options:

- **Start**
- **End** (default)
- **Bottom**

</dd>

#### Size `string`

<dd>

Sets the size of the Sheet. For **Start** and **End**, this is the width. For **Bottom**, this is the height. Options:

- **Small**
- **Medium** (default)
- **Large**

</dd>

### Header

#### Header `boolean`

<dd>

Shows or hides the header. On by default.

</dd>

#### Title `string`

<dd>

The title shown in the header. Default: `Sheet title`. You can bind this property, for example `{{AnvilTable1.selectedRow.name}}`.

This property shows only when **Header** is on.

</dd>

#### Close button `boolean`

<dd>

Shows or hides the close button in the header. On by default.

This property shows only when **Header** is on.

</dd>

### Behavior

#### Dismiss on outside click `boolean`

<dd>

Closes the Sheet when the user clicks the backdrop outside it. On by default.

</dd>

#### Dismiss on escape `boolean`

<dd>

Closes the Sheet when the user presses the Escape key. On by default.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Sheet1.isOpen}}`. You cannot set them directly.

#### isOpen `boolean`

<dd>

Is `true` when the Sheet is open.

*Example:*

```js
{{Sheet1.isOpen}}
```

</dd>

#### isVisible `boolean`

<dd>

Holds the same open state as `isOpen`. `setVisibility()` changes this value.

*Example:*

```js
{{Sheet1.isVisible}}
```

</dd>

#### title `string`

<dd>

The title shown in the header.

*Example:*

```js
{{Sheet1.title}}
```

</dd>

#### position `string`

<dd>

The edge the Sheet slides in from: `start`, `end`, or `bottom`.

*Example:*

```js
{{Sheet1.position}}
```

</dd>

#### size `string`

<dd>

The size of the Sheet: `small`, `medium`, or `large`.

*Example:*

```js
{{Sheet1.size}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Opens the Sheet when you pass `true`. Closes it when you pass `false`.

*Example:*

```js
Sheet1.setVisibility(true)
```

</dd>

## Events

#### onOpen

<dd>

Runs when the Sheet opens in the deployed app. It does not run in the editor, for example when you select the Sheet to edit it.

</dd>

#### onClose

<dd>

Runs when the Sheet closes. This includes the close button, the backdrop, and the Escape key.

</dd>
