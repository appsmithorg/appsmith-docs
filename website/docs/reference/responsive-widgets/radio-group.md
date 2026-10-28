---
title: Radio Group (ALPHA)
sidebar_label: Radio Group
hide_title: true
description: The Radio Group widget lets users pick exactly one option from a short list.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Radio Group (ALPHA)</h1>

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

The Radio Group widget shows a list of radio buttons under one label. Users pick exactly one option. Use it for a short list where all choices should stay visible, for example a shirt size.

<ZoomImage src="/img/responsive-widgets/radio-group.png" alt="Radio Group widget in a Responsive app" caption="Radio Group widget" />

Widget type: `WDS_RADIO_GROUP_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Options `array<object>`

<dd>

Sets the radio buttons. Each option has a `label` (string) and a `value` (string or number). Values must be unique. You can add options in the property pane or switch to JS to bind an array.

Default value:

```js
[
  { "label": "Small", "value": "S" },
  { "label": "Medium", "value": "M" },
  { "label": "Large", "value": "L" }
]
```

</dd>

#### Default selected value `string`

<dd>

Sets the option that is selected when the widget loads. Enter the option's value. To use a number value, write it in `{{ }}`, for example `{{1}}`. Default: `L`.

</dd>

#### Orientation `string`

<dd>

Sets how the radio buttons are laid out. Options:

- **Horizontal**: in a row.
- **Vertical**: in a column.

Default: **Vertical**.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the group. Default: `Size`.

</dd>

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes a selection mandatory. When on and no option is selected, the widget shows the message "Please select an option". Default: off.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the selection. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{RadioGroup1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{RadioGroup1.isVisible}}
```

</dd>

#### options `array<object>`

<dd>

Holds the options set in **Options**.

*Example:*

```js
{{RadioGroup1.options}}
```

</dd>

#### selectedOptionValue `string`

<dd>

Holds the value of the selected option. If the options use number values, it holds a number.

*Example:*

```js
{{RadioGroup1.selectedOptionValue}}
```

</dd>

#### isRequired `boolean`

<dd>

Shows whether **Required** is on.

*Example:*

```js
{{RadioGroup1.isRequired}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
RadioGroup1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
RadioGroup1.setDisabled(false)
```

</dd>

#### setData (param: array): Promise

<dd>

Sets the options.

*Example:*

```js
RadioGroup1.setData([{ label: "Yes", value: "Y" }, { label: "No", value: "N" }])
```

</dd>

## Events

#### onSelectionChange

<dd>

Runs when the user selects a different option.

</dd>
