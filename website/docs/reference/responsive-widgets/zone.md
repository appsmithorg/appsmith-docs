---
title: Zone (ALPHA)
sidebar_label: Zone
hide_title: true
description: A Zone is a layout container inside a Section that stacks widgets in rows and can act as a form.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Zone (ALPHA)</h1>

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

A Zone is a layout container that lives inside a [Section](/reference/responsive-widgets/section). It holds your widgets and stacks them in rows. Use Zones to group related widgets, such as the fields of a form or a set of stats. Turn on **Use as a form** to collect the values of the input widgets inside the Zone.

Widget type: `ZONE_WIDGET`

<ZoomImage src="/img/responsive-widgets/zone.png" alt="Zone widget in a Responsive app" caption="Zone widget" />

## How a Zone arranges its content

- A Zone sits inside a Section, next to the other Zones in that Section.
- Each Zone takes a share of the Section's 12 columns. Set the share with the **Section Split** controls.
- Inside a Zone, widgets stack from top to bottom in rows.
- A row holds either one large widget, such as a Table, or several small widgets side by side, such as inputs and buttons. A row cannot mix the two.
- On small screens (narrower than 480px), each Zone takes the full width of the Section, so the Zones stack. This applies in preview and in the deployed app.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Section Split

These controls act on the Section that holds this Zone. They are the same controls you see when you select the Section.

#### Zone widths (splitter)

<dd>

A visual control with no label. It shows the 12 columns of the parent Section. Drag it to share those 12 columns between the Zones.

</dd>

#### Zones

<dd>

Sets how many Zones the parent Section has. A Section holds up to 4 Zones.

</dd>

### General

#### Use as a form `boolean`

<dd>

Treats the Zone as a form. When this is on:

- The Zone collects the values of its direct child widgets into the `data` reference property.
- The Zone sets `hasChanges` to `true` when a user has changed any of those widgets.
- Buttons inside the Zone can use their form options, such as **Disable when form invalid** and **Reset form on success**.

Off by default. When you turn it off, `data` is cleared and `hasChanges` goes back to `false`.

</dd>

#### Scroll contents `boolean`

<dd>

Caps the Zone height at **Max height (px)** and lets users scroll the content inside. Off by default.

</dd>

#### Max height (px) `number`

<dd>

The highest the Zone can grow, in pixels, when **Scroll contents** is on. The value must be 100 or more. The placeholder shows `400`.

This property shows only when **Scroll contents** is on.

</dd>

#### Visible `boolean`

<dd>

Controls whether the Zone shows in the app. On by default.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the Zone loads. On by default.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Visual separation `boolean`

<dd>

Gives the Zone an elevated background and borders from the theme. Use it to set this Zone apart from the other Zones in the Section.

On by default. It is off by default for a Zone inside a [Modal](/reference/responsive-widgets/modal) or a [Sheet](/reference/responsive-widgets/sheet).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Zone1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the Zone is visible.

*Example:*

```js
{{Zone1.isVisible}}
```

</dd>

#### data `object`

<dd>

Holds the values of the Zone's direct child widgets when **Use as a form** is on. Each key is a widget name. Each value is that widget's current value.

- Only widgets that have a value are included, such as inputs. Buttons and text widgets are left out.
- Empty values (`null` or `undefined`) are left out.
- Only direct children count. Widgets nested in another container inside the Zone are not included.

When **Use as a form** is off, `data` is `undefined`.

*Example:*

```js
{{Zone1.data}}
// { "NameInput": "Ada", "EmailInput": "ada@example.com" }
```

</dd>

#### hasChanges `boolean`

<dd>

Is `true` when a user has changed at least one direct child widget. Works only when **Use as a form** is on. Otherwise it is `false`.

*Example:*

```js
{{Zone1.hasChanges}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the Zone.

*Example:*

```js
Zone1.setVisibility(false)
```

</dd>
