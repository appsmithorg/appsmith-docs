---
title: Checkbox Group (ALPHA)
sidebar_label: Checkbox Group
hide_title: true
description: The Checkbox Group widget lets users check one or more options from a list.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Checkbox Group (ALPHA)</h1>

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

The Checkbox Group widget shows a list of checkboxes under one label. Users can check any number of them. Use it for a short list of options where users may pick more than one, for example notification channels.

<ZoomImage src="/img/responsive-widgets/checkbox-group.png" alt="Checkbox Group widget in a Responsive app" caption="Checkbox Group widget" />

Widget type: `WDS_CHECKBOX_GROUP_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Options `array<object>`

<dd>

Sets the checkboxes. Each option has a `label` and a `value`. Values must be unique. You can add options in the property pane or switch to JS to bind an array.

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

Sets the options that are checked when the widget loads. Enter an array of values, or a comma-separated string. Default: `["BLUE", "RED"]`.

*Example:*

```js
["GREEN"]
```

</dd>

#### Orientation `string`

<dd>

Sets how the checkboxes are laid out. Options:

- **Horizontal**: in a row.
- **Vertical**: in a column.

Default: **Vertical**.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the group. Default: `Color`.

</dd>

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes checking at least one option mandatory. When on and no option is checked, the widget is invalid and shows the message "Please select an option" after the user interacts with it. Default: off.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the checked options. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

#### Select all options `boolean`

<dd>

Shows a "Select all" checkbox before the options. When no option is checked, clicking it checks all options. When some or all options are checked, clicking it clears them all. Default: off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{CheckboxGroup1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{CheckboxGroup1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{CheckboxGroup1.isDisabled}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. It is `false` only when **Required** is on and no option is checked.

*Example:*

```js
{{CheckboxGroup1.isValid}}
```

</dd>

#### options `array<object>`

<dd>

Holds the options set in **Options**.

*Example:*

```js
{{CheckboxGroup1.options}}
```

</dd>

#### selectedValues `array<string>`

<dd>

Holds the values of the checked options.

*Example:*

```js
{{CheckboxGroup1.selectedValues}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
CheckboxGroup1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
CheckboxGroup1.setDisabled(false)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns the **Required** setting on or off.

*Example:*

```js
CheckboxGroup1.setRequired(true)
```

</dd>

#### setSelectedOptions (param: array): Promise

<dd>

Sets the checked options by their values.

*Example:*

```js
CheckboxGroup1.setSelectedOptions(["GREEN", "RED"])
```

</dd>

## Events

#### onCheckChange

<dd>

Runs when the user checks or clears an option, including through **Select all**.

</dd>
