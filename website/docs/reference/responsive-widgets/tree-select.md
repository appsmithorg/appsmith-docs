---
title: Tree Select (ALPHA)
sidebar_label: Tree Select
hide_title: true
description: The Tree Select widget lets users pick one or more options from a nested dropdown list.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Tree Select (ALPHA)</h1>

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

The Tree Select widget shows a dropdown with nested options, such as categories and sub-categories. In **Single** mode, users pick one option. In **Multi** mode, users check several options. Use it when your options form a hierarchy, for example departments and teams.

<ZoomImage src="/img/responsive-widgets/tree-select.png" alt="Tree Select widget in a Responsive app" caption="Tree Select widget" />

Widget type: `WDS_TREE_SELECT_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Selection type `string`

<dd>

Sets how many options users can pick. You cannot bind this property. Options:

- **Single**: users pick one option.
- **Multi**: the dropdown shows checkboxes so users can pick several options.

Default: **Single**.

</dd>

#### Options `array<object>`

<dd>

Sets the nested options. Each option is an object with a `label`, a `value`, and an optional `children` array of more options. You can bind data from a query or API with `{{ }}`.

To keep the app fast, the widget shows at most 5000 options in total and at most 10 levels of nesting. It drops options past these limits.

Default value:

```js
[
  {
    "label": "Blue",
    "value": "BLUE",
    "children": [
      { "label": "Dark Blue", "value": "DARK_BLUE" },
      { "label": "Light Blue", "value": "LIGHT_BLUE" }
    ]
  },
  { "label": "Green", "value": "GREEN" },
  { "label": "Red", "value": "RED" }
]
```

</dd>

#### Default selected value `string`

<dd>

Sets the option that is selected when the widget loads. Enter the option's value. Default: `BLUE`. Shows only when **Selection type** is **Single**.

</dd>

#### Default selected values `array`

<dd>

Sets the options that are checked when the widget loads. Enter an array of option values. Default: `["GREEN"]`. Shows only when **Selection type** is **Multi**.

*Example:*

```js
["GREEN", "LIGHT_BLUE"]
```

</dd>

### Label

#### Text `string`

<dd>

Sets the label text shown above the dropdown. Default: `Label`.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes a selection mandatory. When on and nothing is selected, the widget is invalid and shows the message "Please select an option" after the user interacts with it. Default: off.

</dd>

### General

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

#### Display selected `string`

<dd>

Sets which checked options the widget reports and shows. You cannot bind this property. Options:

- **Show only parent items**
- **Show only child items**
- **Show all items**

Default: **Show all items**. Shows only when **Selection type** is **Multi**.

</dd>

#### Placeholder `string`

<dd>

Sets the text shown when nothing is selected. Default: `Select an option`.

</dd>

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

#### Allow clearing value `boolean`

<dd>

Shows an icon that clears the current selection. Default: off.

</dd>

#### Expand all by default `boolean`

<dd>

Expands all nested options when the dropdown opens. Default: off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{TreeSelect1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{TreeSelect1.isVisible}}
```

</dd>

#### selectedOptionValue `string`

<dd>

Holds the value of the selected option in **Single** mode. It is empty if the value is not in **Options**. It is `undefined` in **Multi** mode.

*Example:*

```js
{{TreeSelect1.selectedOptionValue}}
```

</dd>

#### selectedOptionLabel `string`

<dd>

Holds the label of the selected option in **Single** mode. It is `undefined` in **Multi** mode.

*Example:*

```js
{{TreeSelect1.selectedOptionLabel}}
```

</dd>

#### selectedOptionValues `array<string>`

<dd>

Holds the values of the checked options in **Multi** mode. Values that are not in **Options** are left out. It is `undefined` in **Single** mode.

*Example:*

```js
{{TreeSelect1.selectedOptionValues}}
```

</dd>

#### selectedOptionLabels `array<string>`

<dd>

Holds the labels of the checked options in **Multi** mode. It is `undefined` in **Single** mode.

*Example:*

```js
{{TreeSelect1.selectedOptionLabels}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{TreeSelect1.isDisabled}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. It is `false` only when **Required** is on and nothing is selected.

*Example:*

```js
{{TreeSelect1.isValid}}
```

</dd>

#### isDirty `boolean`

<dd>

Shows whether the user has changed the selection. It resets to `false` when the default value for the current mode changes.

*Example:*

```js
{{TreeSelect1.isDirty}}
```

</dd>

#### options `array<object>`

<dd>

Holds the nested options set in **Options**.

*Example:*

```js
{{TreeSelect1.options}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
TreeSelect1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
TreeSelect1.setDisabled(false)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns the **Required** setting on or off.

*Example:*

```js
TreeSelect1.setRequired(true)
```

</dd>

#### setSelectedOption (param: string): Promise

<dd>

Sets the selected option by its value. Use it in **Single** mode.

*Example:*

```js
TreeSelect1.setSelectedOption("DARK_BLUE")
```

</dd>

#### setSelectedOptions (param: array): Promise

<dd>

Sets the checked options by their values. Use it in **Multi** mode.

*Example:*

```js
TreeSelect1.setSelectedOptions(["GREEN", "RED"])
```

</dd>

## Events

#### onSelectionChange

<dd>

Runs when the user changes the selection.

</dd>

#### onDropdownOpen

<dd>

Runs when the dropdown opens.

</dd>

#### onDropdownClose

<dd>

Runs when the dropdown closes.

</dd>
