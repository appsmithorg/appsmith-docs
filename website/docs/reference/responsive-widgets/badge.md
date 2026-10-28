---
title: Badge (ALPHA)
sidebar_label: Badge
hide_title: true
description: The Badge widget shows a short status label, a count with an overflow limit, or a dot indicator.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Badge (ALPHA)</h1>

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

The Badge widget shows a small status marker. It has three modes: a short text such as `New`, a number such as an unread count, or a plain dot. Add an `onClick` action to make the badge clickable.

Widget type: `WDS_BADGE_WIDGET`

<ZoomImage src="/img/responsive-widgets/badge.png" alt="Badge widget in a Responsive app" caption="Badge widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Mode `string`

<dd>

Sets what the badge shows. Options:

- **Text** (default): a short text.
- **Count**: a number, capped by **Max**.
- **Dot**: a small dot with no text.

You set this property in the property pane only. You cannot bind it to data. The other properties in this section change based on the mode.

</dd>

#### Text `string`

<dd>

Sets the badge text. Default: `New`.

This property shows only when **Mode** is **Text**.

</dd>

#### Count `number`

<dd>

Sets the number the badge shows. Default: `0`. You can bind data to it, for example `{{GetMessages.data.length}}`.

The widget cleans up the value before it shows it:

- A value that is not a number shows as `0`.
- A negative value shows as `0`.
- A decimal value is rounded down.

This property shows only when **Mode** is **Count**.

</dd>

#### Max `number`

<dd>

Sets the highest count the badge shows in full. A larger count shows as the max value plus a `+` sign. For example, with **Max** set to `99`, a count of `120` shows as `99+`. Default: `99`. The value must be a whole number of 1 or more.

This property shows only when **Mode** is **Count**.

</dd>

#### Accessible label `string`

<dd>

Sets the name that screen readers announce for the badge, for example `Unread notifications`. In **Count** mode, screen readers hear the label and the count, for example "Unread notifications: 5".

This property is required in **Count** and **Dot** modes, because the badge has no readable text of its own. The property pane shows an error if it is empty.

This property shows only when **Mode** is **Count** or **Dot**.

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

#### Variant `string`

<dd>

Sets the semantic color of the badge. Options: **Accent**, **Neutral** (default), **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Badge1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Badge1.isVisible}}
```

</dd>

#### mode `string`

<dd>

The badge mode: `text`, `count`, or `dot`.

*Example:*

```js
{{Badge1.mode}}
```

</dd>

#### text `string`

<dd>

The badge text in **Text** mode.

*Example:*

```js
{{Badge1.text}}
```

</dd>

#### count `number`

<dd>

The count value in **Count** mode.

*Example:*

```js
{{Badge1.count}}
```

</dd>

#### max `number`

<dd>

The highest count the badge shows in full.

*Example:*

```js
{{Badge1.max}}
```

</dd>

#### variant `string`

<dd>

The semantic color of the badge.

*Example:*

```js
{{Badge1.variant}}
```

</dd>

#### accessibleLabel `string`

<dd>

The name that screen readers announce for the badge.

*Example:*

```js
{{Badge1.accessibleLabel}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Badge1.setVisibility(false)
```

</dd>

#### setText (param: string): Promise

<dd>

Sets the badge text. The text shows only in **Text** mode.

*Example:*

```js
Badge1.setText("Beta")
```

</dd>

#### setCount (param: number): Promise

<dd>

Sets the count. The count shows only in **Count** mode.

*Example:*

```js
Badge1.setCount(12)
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the badge. When you set this event, the badge acts as a button. Users can also press **Enter** or **Space** to run it.

</dd>
