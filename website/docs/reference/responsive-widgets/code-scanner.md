---
title: Code Scanner (ALPHA)
sidebar_label: Code Scanner
hide_title: true
description: The Code Scanner widget reads QR codes and barcodes with the device camera.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Code Scanner (ALPHA)</h1>

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

The Code Scanner widget reads QR codes and barcodes with the device camera. It stores the decoded text so you can use it in queries and other widgets. The camera turns on only in the deployed app.

:::note
Treat the scanned text as untrusted input. Do not navigate to it or show it as HTML without checking it first.
:::

Widget type: `WDS_CODE_SCANNER_WIDGET`

<ZoomImage src="/img/responsive-widgets/code-scanner.png" alt="Code Scanner widget in a Responsive app" caption="Code Scanner widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Scanner layout `string`

<dd>

Sets how the scanner works. You cannot bind this property. Options:

- **Always on** (default): the scanner stays visible and keeps scanning.
- **Click to scan**: shows a button that opens the scanner in a dialog.

Values: `ALWAYS_ON`, `CLICK_TO_SCAN`.

</dd>

#### Text `string`

<dd>

Sets the label of the scan button. Default: `Scan a QR/Barcode`. Shows only when **Scanner layout** is **Click to scan**.

</dd>

### General

#### Default mobile camera `string`

<dd>

Sets which camera to use first on mobile devices. If that camera is not available, the browser uses any camera it can find. Options:

- **Front (Selfie)**: `user`
- **Back (Rear)** (default): `environment`

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Turns off the widget. The camera does not run while it is disabled. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

#### onCodeDetected

<dd>

Sets the action that runs when the scanner finds a code. See [Events](#events).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{CodeScanner1.isVisible}}`. You cannot set them directly.

#### value `string`

<dd>

Holds the decoded text of the last code. It is empty until the scanner finds a code.

*Example:*

```js
{{CodeScanner1.value}}
```

</dd>

#### scannedText `string`

<dd>

Holds the same text as `value`. It is an empty string until the scanner finds a code.

*Example:*

```js
{{CodeScanner1.scannedText}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{CodeScanner1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{CodeScanner1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
CodeScanner1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the widget on or off.

*Example:*

```js
CodeScanner1.setDisabled(true)
```

</dd>

## Events

#### onCodeDetected

<dd>

Runs when the scanner finds a code. Read the text in `{{CodeScanner1.value}}`.

</dd>
