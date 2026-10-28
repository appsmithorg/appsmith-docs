---
title: Slider (ALPHA)
sidebar_label: Slider
hide_title: true
description: The Slider widget lets users pick a number, a range, or a category by dragging a thumb along a track.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Slider (ALPHA)</h1>

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

The Slider widget lets users drag a thumb along a track to set a value. It has three modes. **Number** picks one number, **Range** picks a start and an end number, and **Category** picks one item from a list, for example a size.

<ZoomImage src="/img/responsive-widgets/slider.png" alt="Slider widget in a Responsive app" caption="Slider widget" />

Widget type: `WDS_SLIDER_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Mode `string`

<dd>

Sets what the slider captures. You cannot bind this property. Options:

- **Number**: one number.
- **Range**: a start and an end number, with two thumbs.
- **Category**: one item from a list of options.

Default: **Number**.

</dd>

#### Options `array<object>`

<dd>

Sets the items the slider picks from. Each option has a `label` and a `value`. Values must be unique. Shows only when **Mode** is **Category**.

Default value:

```js
[
  { "label": "xs", "value": "xs" },
  { "label": "sm", "value": "sm" },
  { "label": "md", "value": "md" },
  { "label": "lg", "value": "lg" },
  { "label": "xl", "value": "xl" }
]
```

</dd>

#### Min. value `number`

<dd>

Sets the lowest value. It must be less than **Max. value**. Default: `0`. Hidden when **Mode** is **Category**.

</dd>

#### Max. value `number`

<dd>

Sets the highest value. It must be greater than **Min. value**. Default: `100`. Hidden when **Mode** is **Category**.

</dd>

#### Step size `number`

<dd>

Sets how much the value changes each time the thumb moves. It must be greater than 0 and no larger than the gap between **Min. value** and **Max. value**. Default: `1`. Hidden when **Mode** is **Category**.

</dd>

#### Default value `number | string`

<dd>

Sets the starting value. In **Number** mode, enter a number between **Min. value** and **Max. value**. In **Category** mode, enter one of the option values. Default: `50`. Hidden when **Mode** is **Range**.

</dd>

#### Default start value `number`

<dd>

Sets the starting value of the first thumb. It must be at least **Min. value** and no more than **Default end value**. Default: `20`. Shows only when **Mode** is **Range**.

</dd>

#### Default end value `number`

<dd>

Sets the starting value of the second thumb. It must be no more than **Max. value** and at least **Default start value**. Default: `80`. Shows only when **Mode** is **Range**.

</dd>

#### Min. range `number`

<dd>

Sets the smallest gap the widget keeps between the two thumbs. It must be 0 or more. Default: `5`. Shows only when **Mode** is **Range**.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the slider. Default: `Value`.

</dd>

### General

#### Show marks `boolean`

<dd>

Shows the marks and their labels along the track. Default: on.

</dd>

#### Marks `array<object>`

<dd>

Sets the reference points on the track. Each mark has a `value` (number) and a `label`. Values must be unique. Shows only when **Show marks** is on and **Mode** is not **Category**.

Default value:

```js
[
  { "value": 25, "label": "25%" },
  { "value": 50, "label": "50%" },
  { "value": 75, "label": "75%" }
]
```

</dd>

#### Show value `string`

<dd>

Sets when the value bubble above the thumb shows. You cannot bind this property. Options: **Always**, **Hover**, **Never**. Default: **Hover**.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from moving the slider. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Slider1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Slider1.isVisible}}
```

</dd>

#### value `number | string`

<dd>

Holds the current value. In **Number** mode it is a number. In **Category** mode it is the selected option's value.

*Example:*

```js
{{Slider1.value}}
```

</dd>

#### start `number`

<dd>

Holds the value of the first thumb in **Range** mode.

*Example:*

```js
{{Slider1.start}}
```

</dd>

#### end `number`

<dd>

Holds the value of the second thumb in **Range** mode.

*Example:*

```js
{{Slider1.end}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Slider1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
Slider1.setDisabled(false)
```

</dd>

#### setValue (param: number): Promise

<dd>

Sets the value in **Number** mode.

*Example:*

```js
Slider1.setValue(75)
```

</dd>

#### setSelectedOption (param: string): Promise

<dd>

Sets the selected option by its value in **Category** mode.

*Example:*

```js
Slider1.setSelectedOption("lg")
```

</dd>

#### setStartValue (param: number): Promise

<dd>

Sets the first thumb's value in **Range** mode.

*Example:*

```js
Slider1.setStartValue(10)
```

</dd>

#### setEndValue (param: number): Promise

<dd>

Sets the second thumb's value in **Range** mode.

*Example:*

```js
Slider1.setEndValue(90)
```

</dd>

## Events

#### onChange

<dd>

Runs when the user releases the thumb after changing the value. It runs once per drag, even in **Range** mode when both values change.

</dd>
