---
title: Switch (ALPHA)
sidebar_label: Switch
hide_title: true
description: The Switch widget lets users turn a setting on or off.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Switch (ALPHA)</h1>

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

The Switch widget shows one toggle with a label. Users turn it on or off. Use it for settings that take effect right away, for example "Show archived items".

<ZoomImage src="/img/responsive-widgets/switch.png" alt="Switch widget in a Responsive app" caption="Switch widget" />

Widget type: `WDS_SWITCH_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Label

#### Text `string`

<dd>

Sets the label shown next to the switch. Default: `Label`.

</dd>

#### Position `string`

<dd>

Sets where the label appears. You cannot bind this property. Options:

- **Start**: the label appears before the switch.
- **End**: the label appears after the switch.

Default: **Start**.

</dd>

### General

#### Default state `boolean`

<dd>

Sets whether the switch is on when the widget loads. If you change this value, the widget's state updates to match. Default: on.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from turning the switch on or off. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Switch1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Switch1.isVisible}}
```

</dd>

#### isSwitchedOn `boolean`

<dd>

Shows whether the switch is on.

*Example:*

```js
{{Switch1.isSwitchedOn}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{Switch1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Switch1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
Switch1.setDisabled(false)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Sets the widget's `isRequired` property. The Switch widget has no **Required** setting in the property pane.

*Example:*

```js
Switch1.setRequired(true)
```

</dd>

#### setValue (param: boolean): Promise

<dd>

Turns the switch on or off.

*Example:*

```js
Switch1.setValue(false)
```

</dd>

## Events

#### onChange

<dd>

Runs when the user turns the switch on or off.

</dd>
