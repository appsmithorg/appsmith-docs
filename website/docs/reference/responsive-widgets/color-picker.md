---
title: ColorPicker (ALPHA)
sidebar_label: ColorPicker
hide_title: true
description: The ColorPicker widget lets users pick a color and stores it as a hex string.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>ColorPicker (ALPHA)</h1>

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

The ColorPicker widget lets users pick a color. Users can drag in the color area or type a hex value. The widget stores the color as a hex string, for example `#2E3D49`. Use it to let users choose a brand color, a theme color, or a color tag for a record.

<ZoomImage src="/img/responsive-widgets/color-picker.png" alt="ColorPicker widget in a Responsive app" caption="ColorPicker widget" />

Widget type: `WDS_COLOR_PICKER_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Default Color `string`

<dd>

Sets the color shown when the widget loads. Enter a hex color in one of these forms: `#rgb`, `#rgba`, `#rrggbb`, or `#rrggbbaa`. Other formats show an error. If you change this value, the widget's color updates to match. Default: empty (no color).

*Example:*

```js
#2E3D49
```

</dd>

#### Allow alpha `boolean`

<dd>

Adds a transparency (alpha) slider. When on, the widget stores colors as `#rrggbbaa`. When off, the widget reads colors as `#rrggbb` and drops any alpha digits. Turning it back on restores the stored alpha digits. Default: off.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the color picker. Default: `Label`.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes picking a color mandatory. When on and no color is set, the widget is invalid and shows the message "Please select a valid color" after the user interacts with it. Default: off.

</dd>

### General

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the color. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{ColorPicker1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{ColorPicker1.isVisible}}
```

</dd>

#### selectedColor `string`

<dd>

Holds the selected color as a hex string, `#rrggbb` or `#rrggbbaa`. It is an empty string when no color is set or when the stored value is not a valid hex color.

*Example:*

```js
{{ColorPicker1.selectedColor}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{ColorPicker1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
ColorPicker1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
ColorPicker1.setDisabled(false)
```

</dd>

## Events

#### onColorChange

<dd>

Runs when the user finishes dragging to a new color, or commits a hex value in the input. It does not run on every step of a drag.

</dd>
