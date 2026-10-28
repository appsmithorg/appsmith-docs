---
title: Rating (ALPHA)
sidebar_label: Rating
hide_title: true
description: The Rating widget lets users give or view a rating with stars or hearts.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Rating (ALPHA)</h1>

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

The Rating widget shows a row of stars or hearts. Users click them to give a rating. Use it to collect feedback, for example a product review, or turn on **Read only** to show an existing rating.

<ZoomImage src="/img/responsive-widgets/rating.png" alt="Rating widget in a Responsive app" caption="Rating widget" />

Widget type: `WDS_RATE_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Max rating `number`

<dd>

Sets the highest rating, which is also the number of icons. It must be a whole number. Default: `5`.

</dd>

#### Default rating `number`

<dd>

Sets the rating shown when the widget loads. It must be no more than **Max rating**. It can be a decimal, such as `2.5`, only when **Allow half** is on. Default: `3`.

</dd>

#### Tooltips `array<string>`

<dd>

Sets the tooltip text for each rating step, in order. Default: `["Terrible", "Bad", "Neutral", "Good", "Great"]`.

</dd>

### General

#### Allow half `boolean`

<dd>

Lets users give half ratings, for example 3.5. Default: off.

</dd>

#### Show count label `boolean`

<dd>

Shows the current rating as text, for example "3 of 5." Default: off.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the rating. Default: off.

</dd>

#### Read only `boolean`

<dd>

Shows the rating but stops users from changing it. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Size `string`

<dd>

Sets the size of the icons. You cannot bind this property. Options: **Small**, **Medium**, **Large**. Default: **Medium**.

</dd>

#### Icon `string`

<dd>

Sets the icon used for each rating step. You cannot bind this property. Options: **Star**, **Heart**. Default: **Star**.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Rating1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Rating1.isVisible}}
```

</dd>

#### maxCount `number`

<dd>

Holds the value of **Max rating**.

*Example:*

```js
{{Rating1.maxCount}}
```

</dd>

#### value `number`

<dd>

Holds the current rating.

*Example:*

```js
{{Rating1.value}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Rating1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
Rating1.setDisabled(false)
```

</dd>

#### setValue (param: number): Promise

<dd>

Sets the rating.

*Example:*

```js
Rating1.setValue(4)
```

</dd>

## Events

#### onChange

<dd>

Runs when the user changes the rating.

</dd>
