---
title: Signature (ALPHA)
sidebar_label: Signature
hide_title: true
description: The Signature widget lets users draw a signature and saves it as a PNG data URI.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Signature (ALPHA)</h1>

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

The Signature widget gives users a pad to draw a signature. It saves the drawing as a PNG data URI. Use it for approvals, consent forms, and delivery confirmations.

Widget type: `WDS_SIGNATURE_WIDGET`

<ZoomImage src="/img/responsive-widgets/signature.png" alt="Signature widget in a Responsive app" caption="Signature widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Label

#### Text `string`

<dd>

Sets the label of the widget. Default: `Label`.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes a signature required. When it is on and the pad is empty, `isValid` is `false`. Default: off.

</dd>

### General

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

#### Pen color `string`

<dd>

Sets the color of the pen as a hex string, such as `#2E3D49`. Takes `#rrggbb` or `#rrggbbaa`. Leave it empty to use the theme's text color.

</dd>

#### Background color `string`

<dd>

Sets the background of the pad as a hex string, such as `#FFFFFF`. Takes `#rrggbb` or `#rrggbbaa`. The saved PNG includes this background. Leave it empty for a transparent background.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from drawing on the pad. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

#### onSignatureChange

<dd>

Sets the action that runs when the signature changes. See [Events](#events).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Signature1.isVisible}}`. You cannot set them directly.

#### value `string`

<dd>

Holds the signature as a PNG data URI. It is empty when the pad is empty.

*Example:*

```js
{{Signature1.value}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. If **Required** is on, it is `true` only when the pad has a signature. If **Required** is off, it is always `true`.

*Example:*

```js
{{Signature1.isValid}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Signature1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{Signature1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

You cannot set a signature from code. Only a user can draw one. To clear the pad, use `resetWidget("Signature1")`.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Signature1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the widget on or off.

*Example:*

```js
Signature1.setDisabled(true)
```

</dd>

## Events

#### onSignatureChange

<dd>

Runs when a user finishes a stroke or clears the signature. Read the new value in `{{Signature1.value}}`.

</dd>
