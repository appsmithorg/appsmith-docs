---
title: Switch Group (ALPHA)
sidebar_label: Switch Group
hide_title: true
description: The Switch Group widget lets users turn several options on or off from one list.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Switch Group (ALPHA)</h1>

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

The Switch Group widget shows a list of switches under one label. Users can turn any number of them on. Use it for a set of related settings, for example which email alerts to receive.

<ZoomImage src="/img/responsive-widgets/switch-group.png" alt="Switch Group widget in a Responsive app" caption="Switch Group widget" />

Widget type: `WDS_SWITCH_GROUP_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Options `array<object>`

<dd>

Sets the switches. Each option has a `label` and a `value`. Labels and values must be unique. You can add options in the property pane or switch to JS to bind an array.

Default value:

```js
[
  { "label": "Blue", "value": "BLUE" },
  { "label": "Green", "value": "GREEN" },
  { "label": "Red", "value": "RED" }
]
```

</dd>

#### Default selected values `array<string>`

<dd>

Sets the options that are on when the widget loads. Enter an array of strings. Default: `["BLUE", "RED"]`.

*Example:*

```js
["GREEN"]
```

</dd>

#### Orientation `string`

<dd>

Sets how the switches are laid out. Options:

- **Horizontal**: in a row.
- **Vertical**: in a column.

Default: **Vertical**.

</dd>

#### Options Label Position `string`

<dd>

Sets where each option's label appears. You cannot bind this property. Options:

- **Start**: the label appears before the switch.
- **End**: the label appears after the switch.

Default: **End**.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the group. Default: `Label`.

</dd>

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes turning on at least one option mandatory. When on and no option is on, the widget is invalid and shows the message "Please select an option" after the user interacts with it. Default: off.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the switches. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{SwitchGroup1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{SwitchGroup1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{SwitchGroup1.isDisabled}}
```

</dd>

#### isRequired `boolean`

<dd>

Shows whether **Required** is on.

*Example:*

```js
{{SwitchGroup1.isRequired}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. It is `false` only when **Required** is on and no option is on.

*Example:*

```js
{{SwitchGroup1.isValid}}
```

</dd>

#### options `array<object>`

<dd>

Holds the options set in **Options**.

*Example:*

```js
{{SwitchGroup1.options}}
```

</dd>

#### selectedValues `array<string>`

<dd>

Holds the values of the options that are on.

*Example:*

```js
{{SwitchGroup1.selectedValues}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
SwitchGroup1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
SwitchGroup1.setDisabled(false)
```

</dd>

#### setSelectedOptions (param: array): Promise

<dd>

Sets which options are on, by their values.

*Example:*

```js
SwitchGroup1.setSelectedOptions(["GREEN", "RED"])
```

</dd>

## Events

#### onSelectionChange

<dd>

Runs when the user turns an option on or off.

</dd>
