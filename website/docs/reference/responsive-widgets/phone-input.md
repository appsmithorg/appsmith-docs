---
title: Phone Input (ALPHA)
sidebar_label: Phone Input
hide_title: true
description: The Phone Input widget lets users enter a phone number with a country dial code.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Phone Input (ALPHA)</h1>

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

The Phone Input widget is a field for a phone number. It shows a country dial code, such as `+1`, and can format the number as the user types.

- Users can type digits only. Other keys are blocked, apart from keys such as Backspace, Tab, Enter, Delete, and the arrow keys.
- With formatting on, the number is formatted for the selected country, for example `(555) 123-4567` for the United States.

Widget type: `WDS_PHONE_INPUT_WIDGET`

<ZoomImage src="/img/responsive-widgets/phone-input.png" alt="Phone Input widget in a Responsive app" caption="Phone Input widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Type

#### Data type `string`

<dd>

Sets the type of data the field takes. For this widget it is **Phone number**. Options:

- **Single-line text**
- **Multi-line text**
- **Number**
- **Password**
- **Email**
- **Phone number**
- **Currency**
- **Date**

When you pick a different type, the widget changes into the matching widget. For example, **Single-line text** changes it into an [Input](/reference/responsive-widgets/input).

</dd>

### Data

#### Default value `string`

<dd>

Sets the starting phone number. When this value changes, the field updates to the new value. Numbers are turned into text.

*Example:*

```js
{{AnvilTable1.selectedRow.phone}}
```

</dd>

#### Default country code `string`

<dd>

Sets the starting dial code. Pick a country from the searchable list, or bind a dial code. Default: `+1` (United States).

*Example:*

```js
+44
```

</dd>

#### Change country code `boolean`

<dd>

Lets users pick a different dial code from a list in the field. Off by default.

</dd>

#### Enable formatting `boolean`

<dd>

Formats the phone number for the selected country as the user types. When it is off, the field shows the number without formatting. On by default.

</dd>

### Label

#### Text `string`

<dd>

The label shown above the field. Default: `Phone number`.

</dd>

### Validation

#### Required `boolean`

<dd>

Makes the field mandatory. If a user clears the field, it shows "This field is required". Off by default.

</dd>

#### Regex `string`

<dd>

Checks the unformatted number (the `rawText` value) against a regular expression. If it does not match, the field is invalid and shows **Error message**.

*Example:*

```
^\d{10}$
```

</dd>

#### Valid `boolean`

<dd>

Sets whether the value is valid, using a JavaScript expression. If the expression returns `false`, the field is invalid and shows **Error message**. Default: `true`.

*Example:*

```js
{{PhoneInput1.rawText.length >= 7}}
```

</dd>

#### Error message `string`

<dd>

The message shown when the **Regex** or **Valid** check fails.

</dd>

### General

#### Tooltip `string`

<dd>

Adds a help icon next to the label. Users see this text when they open the help icon.

This property shows only when **Readonly** is off.

</dd>

#### Placeholder `string`

<dd>

Text shown inside the field when it is empty, for example `(123) 456-7890`.

This property shows only when **Readonly** is off.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget shows in the app. On by default.

</dd>

#### Disabled `boolean`

<dd>

Stops users from typing in the field. Off by default.

This property shows only when **Readonly** is off.

</dd>

#### Readonly `boolean`

<dd>

Lets users select the value but not change it. Readonly takes priority over **Disabled**. Off by default.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget loads. On by default.

</dd>

#### Auto focus `boolean`

<dd>

Puts the cursor in the field when the page loads. Off by default.

This property shows only when **Readonly** is off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{PhoneInput1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The phone number as shown in the field. When **Enable formatting** is on, this is the formatted number.

*Example:*

```js
{{PhoneInput1.text}}
```

</dd>

#### rawText `string`

<dd>

The phone number without formatting.

*Example:*

```js
{{PhoneInput1.rawText}}
```

</dd>

#### dialCode `string`

<dd>

The selected dial code, for example `+1`.

*Example:*

```js
{{PhoneInput1.dialCode}}
```

</dd>

#### countryCode `string`

<dd>

The two-letter country code for the selected dial code, for example `US`. It updates when the dial code changes.

*Example:*

```js
{{PhoneInput1.countryCode}}
```

</dd>

#### isValid `boolean`

<dd>

Is `true` when the value passes all checks: **Required**, **Regex**, and **Valid**. Without a **Regex**, the unformatted value must be a number. An empty field that is not required is valid.

*Example:*

```js
{{PhoneInput1.isValid}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{PhoneInput1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{PhoneInput1.isDisabled}}
```

</dd>

#### isReadOnly `boolean`

<dd>

Shows whether the widget is read-only.

*Example:*

```js
{{PhoneInput1.isReadOnly}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
PhoneInput1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns **Disabled** on or off.

*Example:*

```js
PhoneInput1.setDisabled(false)
```

</dd>

#### setReadOnly (param: boolean): Promise

<dd>

Turns **Readonly** on or off.

*Example:*

```js
PhoneInput1.setReadOnly(true)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns **Required** on or off.

*Example:*

```js
PhoneInput1.setRequired(true)
```

</dd>

#### setValue (param: string): Promise

<dd>

Sets the phone number in the field.

*Example:*

```js
PhoneInput1.setValue("5551234567")
```

</dd>

## Events

The **Events** section shows only when **Readonly** is off.

#### onTextChanged

<dd>

Runs each time the user changes the number.

</dd>

#### onFocus

<dd>

Runs when the field gets focus.

</dd>

#### onBlur

<dd>

Runs when the field loses focus.

</dd>

#### onSubmit

<dd>

Runs when the user presses Enter. It runs only when the value is valid.

</dd>

#### Reset on submit `boolean`

<dd>

This setting appears in the **Events** section. When it is on, the field clears after **onSubmit** runs without errors. On by default.

</dd>
