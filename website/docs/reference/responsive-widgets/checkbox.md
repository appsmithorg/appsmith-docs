---
title: Checkbox (ALPHA)
sidebar_label: Checkbox
hide_title: true
description: The Checkbox widget lets users make a yes or no choice.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Checkbox (ALPHA)</h1>

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

The Checkbox widget shows one checkbox with a label. Users check or clear it to make a yes or no choice. Use it for consent, for example "I agree to the terms," or for a single on or off option in a form.

<ZoomImage src="/img/responsive-widgets/checkbox.png" alt="Checkbox widget in a Responsive app" caption="Checkbox widget" />

Widget type: `WDS_CHECKBOX_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Label

#### Text `string`

<dd>

Sets the label shown next to the checkbox. Default: `Label`.

</dd>

#### Tooltip `string`

<dd>

Shows help text next to the label.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes checking the box mandatory. When on and the box is not checked, the checkbox shows as invalid. Default: off.

</dd>

### General

#### Default state `boolean`

<dd>

Sets whether the box is checked when the widget loads. If you change this value, the widget's checked state updates to match. Default: on (checked).

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from checking or clearing the box. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Checkbox1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Checkbox1.isVisible}}
```

</dd>

#### isChecked `boolean`

<dd>

Shows whether the box is checked.

*Example:*

```js
{{Checkbox1.isChecked}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{Checkbox1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Checkbox1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
Checkbox1.setDisabled(false)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns the **Required** setting on or off.

*Example:*

```js
Checkbox1.setRequired(true)
```

</dd>

#### setValue (param: boolean): Promise

<dd>

Checks or clears the box.

*Example:*

```js
Checkbox1.setValue(false)
```

</dd>

## Events

#### onCheckChange

<dd>

Runs when the user checks or clears the box.

</dd>
