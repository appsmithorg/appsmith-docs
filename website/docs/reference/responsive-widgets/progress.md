---
title: Progress (ALPHA)
sidebar_label: Progress
hide_title: true
description: The Progress widget shows how far an operation has gone, as a linear bar or a circular ring.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Progress (ALPHA)</h1>

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

The Progress widget shows the progress of an operation as a bar or a ring. Use a value from 0 to 100 for known progress, such as an upload percentage. Use **Infinite loading** when you do not know how long the operation takes.

Widget type: `WDS_PROGRESS_WIDGET`

<ZoomImage src="/img/responsive-widgets/progress.png" alt="Progress widget in a Responsive app" caption="Progress widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Type `string`

<dd>

Sets the shape of the indicator. Options: **Linear** (default), **Circular**.

You set this property in the property pane only. You cannot bind it to data.

</dd>

#### Infinite loading `boolean`

<dd>

Shows progress with no known end. While on, the widget ignores **Progress**. Default: off.

</dd>

#### Progress `number`

<dd>

Sets the progress value, from 0 to 100. Default: `50`. You can bind data to it, for example `{{Api1.data.percentComplete}}`.

The widget cleans up the value before it shows it:

- A value below 0 shows as 0.
- A value above 100 shows as 100.
- A value that is not a number shows as 0.

This property is hidden while **Infinite loading** is on.

</dd>

#### Label `string`

<dd>

Sets a visible label for the indicator, for example `Loading`. Screen readers announce it as the indicator's name. If you leave it empty, screen readers announce the widget name instead.

</dd>

### General

#### Show value `boolean`

<dd>

Shows the progress value as text, for example `42%`. Default: off.

This property is hidden while **Infinite loading** is on.

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

#### Color `string`

<dd>

Sets the semantic color of the indicator. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Progress1.value}}`. You cannot set them directly.

#### value `number`

<dd>

The progress value.

*Example:*

```js
{{Progress1.value}}
```

</dd>

#### label `string`

<dd>

The visible label.

*Example:*

```js
{{Progress1.label}}
```

</dd>

#### isIndeterminate `boolean`

<dd>

Shows whether **Infinite loading** is on.

*Example:*

```js
{{Progress1.isIndeterminate}}
```

</dd>

#### showValue `boolean`

<dd>

Shows whether the value text is visible.

*Example:*

```js
{{Progress1.showValue}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Progress1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Progress1.setVisibility(false)
```

</dd>

#### setProgress (param: number): Promise

<dd>

Sets the progress value, from 0 to 100.

*Example:*

```js
Progress1.setProgress(75)
```

</dd>
