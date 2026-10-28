---
title: Chip Group (ALPHA)
sidebar_label: Chip Group
hide_title: true
description: The Chip Group widget shows interactive chips that users can select, remove, or tap to run an action.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Chip Group (ALPHA)</h1>

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

The Chip Group widget shows a set of chips that users act on. Use it for filter bars, lists of tokens that users can remove, or quick actions. For tags that are only for display, use the [TagGroup](/reference/responsive-widgets/tag-group) widget.

The **Variant** property sets how the chips behave:

| Variant | What users can do | Event |
|---------|-------------------|-------|
| **Filter** | Select one or more chips. | `onSelectionChange` |
| **Input** | Remove chips. Optionally add chips with a **+** button. | `onRemove`, `onAdd` |
| **Assist** | Tap a chip to run an action. Chips never stay selected. | `onChipClick` |
| **Suggestion** | Tap a chip to run an action. Chips never stay selected. | `onChipClick` |

Widget type: `WDS_CHIP_GROUP_WIDGET`

<ZoomImage src="/img/responsive-widgets/chip-group.png" alt="Chip Group widget in a Responsive app" caption="Chip Group widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Variant `string`

<dd>

Sets how the chips behave. Options: **Assist**, **Filter** (default), **Input**, **Suggestion**. See the table at the top of this page.

You set this property in the property pane only. You cannot bind it to data. Other properties and events show or hide based on the variant.

</dd>

#### Selection mode `string`

<dd>

Sets how many chips users can select at once. Options: **None**, **Single**, **Multi** (default).

You set this property in the property pane only. You cannot bind it to data.

This property shows only when **Variant** is **Filter**.

</dd>

### Data

#### Options `array`

<dd>

Sets the chips to show, as an array of objects with a `label`, a `value`, and an optional `icon`. The `icon` is the name of an icon from the icon set. The widget ignores icon names it does not know.

*Example:*

```js
[
  { "label": "Design", "value": "DESIGN", "icon": "palette" },
  { "label": "Engineering", "value": "ENG", "icon": "code" },
  { "label": "Marketing", "value": "MKT" }
]
```

The array must follow these rules, or the property pane shows an error:

- Each item needs a `label` and a `value`.
- Each `value` must be a string or a number, and must be unique.
- All `value` fields must have the same type.

The label always shows as text, never as HTML. When the array has no chips, the widget shows "No chips to display".

</dd>

#### Default selected values `array`

<dd>

Sets the values of the chips that are selected when the widget loads. Default: `["DESIGN"]`.

*Example:*

```js
["DESIGN", "ENG"]
```

When this value changes, the selection resets to the new value.

This property shows only when **Variant** is **Filter** and **Selection mode** is not **None**.

</dd>

### General

#### Removable `boolean`

<dd>

Lets users remove chips. Default: on.

This property shows only when **Variant** is **Input**.

</dd>

#### Show add button `boolean`

<dd>

Shows a **+** button after the chips. Use the `onAdd` event to decide what it does. Default: off.

This property shows only when **Variant** is **Input**.

</dd>

#### Overflow `string`

<dd>

Sets what happens when the chips do not fit on one line. Options:

- **Wrap** (default): chips flow onto new lines.
- **Scroll**: chips stay on one line, and users scroll sideways.

You set this property in the property pane only. You cannot bind it to data.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from using the chips and the **+** button. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{ChipGroup1.selectedValues}}`. You cannot set them directly.

#### selectedValues `array`

<dd>

The values of the selected chips (**Filter** variant).

*Example:*

```js
{{ChipGroup1.selectedValues}}
```

</dd>

#### selectedValue `string | number`

<dd>

The value of the selected chip when **Selection mode** is **Single**. In other modes it is `undefined`.

*Example:*

```js
{{ChipGroup1.selectedValue}}
```

</dd>

#### value `string | number | array`

<dd>

The selection in a form-friendly shape. When **Selection mode** is **Single**, it holds one value. Otherwise, it holds the same array as `selectedValues`.

*Example:*

```js
{{ChipGroup1.value}}
```

</dd>

#### options `array`

<dd>

The full options array set on the widget, including chips that users removed.

*Example:*

```js
{{ChipGroup1.options}}
```

</dd>

#### chips `array`

<dd>

The chips on screen now: `options` without the chips that users removed (**Input** variant).

*Example:*

```js
{{ChipGroup1.chips}}
```

</dd>

#### removedValues `array`

<dd>

The values of the chips that users removed (**Input** variant).

*Example:*

```js
{{ChipGroup1.removedValues}}
```

</dd>

#### isDirty `boolean`

<dd>

Shows whether users have selected or removed a chip since the widget loaded, or since **Default selected values** last changed.

*Example:*

```js
{{ChipGroup1.isDirty}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{ChipGroup1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
ChipGroup1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the chips on or off.

*Example:*

```js
ChipGroup1.setDisabled(true)
```

</dd>

#### setSelectedValues (param: array): Promise

<dd>

Sets which chips are selected (**Filter** variant). Pass an array of chip values.

*Example:*

```js
ChipGroup1.setSelectedValues(["ENG"])
```

</dd>

## Events

#### onSelectionChange

<dd>

Runs when users change the selected chips. Read the new selection from `selectedValues`.

This event shows only when **Variant** is **Filter** and **Selection mode** is not **None**.

</dd>

#### onChipClick

<dd>

Runs when users tap a chip. The value of the tapped chip is available as `{{chipValue}}` inside the action.

This event shows only when **Variant** is **Assist** or **Suggestion**.

</dd>

#### onRemove

<dd>

Runs when users remove a chip. The removed value is available as `{{removedValue}}` inside the action, and all values removed by that action as `{{removedValues}}`. A removed chip is also taken out of the selection.

This event shows only when **Variant** is **Input** and **Removable** is on.

</dd>

#### onAdd

<dd>

Runs when users click the **+** button.

This event shows only when **Variant** is **Input** and **Show add button** is on.

</dd>
