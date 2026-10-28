---
title: Stats (ALPHA)
sidebar_label: Stats
hide_title: true
description: The Stats widget shows a key number in a card, with a label, a change indicator, a caption, an icon, and an optional sparkline.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Stats (ALPHA)</h1>

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

The Stats widget shows one key number in a card, such as active users or monthly revenue. It can also show a change value, a caption, an icon, and a small trend line (sparkline). Use several Stats widgets side by side to build a KPI row on a dashboard.

Widget type: `WDS_STATS_WIDGET`

<ZoomImage src="/img/responsive-widgets/stats.png" alt="Stats widget in a Responsive app" caption="Stats widget" />

## Loading state

While its data loads for the first time, the widget shows a loading placeholder in the card. When data reloads and the widget already has a value, it keeps showing the old value until the new one arrives. A value of `0` counts as data.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Fields

#### Label `string`

<dd>

Sets the label for the number, for example `Active users`. Default: `Active Users`. The label shows on one line.

</dd>

#### Value `string`

<dd>

Sets the main number or text. Default: `42`. You can bind data to it, for example `{{GetStats.data.activeUsers}}`. If the value is empty, the widget hides it, and it hides **Value change** too.

</dd>

#### Value color `string`

<dd>

Sets the semantic color of the value and the icon. Options: **Default**, **Accent**, **Neutral**, **Positive**, **Negative**, **Warning**. A new widget starts with **Neutral**.

Values for code: `default`, `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

### Optional Fields

#### Select icon `string`

<dd>

Sets the icon in the card. Default: `shopping-bag`. If the value is empty or `(none)`, the card shows no icon.

</dd>

#### Position `string`

<dd>

Sets which side of the card the icon is on. Options: start (default), end.

Values for code: `start`, `end`.

You set this property in the property pane only. You cannot bind it to data.

</dd>

#### Value change `string`

<dd>

Sets a short text next to the value, such as the change since last period. Default: `+50%`.

</dd>

#### Color `string`

<dd>

Sets the semantic color of **Value change**. Options: **Accent**, **Neutral**, **Positive**, **Negative**, **Warning**. A new widget starts with **Positive**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

#### Caption `string`

<dd>

Sets a short text under the value, for example `Since 21 Jan 2022`. Default: `This week`.

</dd>

#### Sparkline data `array`

<dd>

Sets an array of numbers to draw as a small trend line under the value. Default: `[10, 14, 9, 16, 12, 20, 18]`. Leave it empty to hide the sparkline.

*Example:*

```js
{{ GetStats.data.dailyUsers.map(d => d.count) }}
```

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

#### Alignment `string`

<dd>

Sets the horizontal alignment of the text in the card. Options: left (default), center.

Values for code: `start`, `center`.

</dd>

#### Value position `string`

<dd>

Shows the value below or above the label. Options: **Below label** (default), **Above label**.

Values for code: `bottom`, `top`.

</dd>

#### Value size `string`

<dd>

Sets the text size of the value. Options: **Subtitle** (default), **Title**, **Heading**.

Values for code: `subtitle`, `title`, `heading`.

</dd>

#### Border color `string`

<dd>

Adds a 2 px solid border to the card in the color you choose.

</dd>

#### Background `string`

<dd>

Sets a custom CSS background for the card. Use a color, for example `#def7ec`, or a gradient, for example `linear-gradient(...)`.

</dd>

#### Visual Separation `boolean`

<dd>

Gives the card an elevated background, borders, or both, so it stands out from the rest of the page. Default: off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{StatsWidget1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{StatsWidget1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
StatsWidget1.setVisibility(false)
```

</dd>
