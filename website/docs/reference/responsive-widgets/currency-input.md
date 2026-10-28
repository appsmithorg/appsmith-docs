---
title: Currency Input (ALPHA)
sidebar_label: Currency Input
hide_title: true
description: The Currency Input widget lets users enter an amount of money in a chosen currency.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Currency Input (ALPHA)</h1>

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

The Currency Input widget is a field for an amount of money, such as a price or an expense. It shows the currency symbol, such as `$`, inside the field.

- Users can type digits only. They can also type the decimal and thousands separators when **Decimals allowed** is more than 0.
- The number of decimal places is limited to **Decimals allowed**.
- When the field loses focus, the amount is formatted with thousands separators and the set number of decimal places, for example `1,234.50`. When the field gets focus again, the thousands separators are removed for editing.

Widget type: `WDS_CURRENCY_INPUT_WIDGET`

<ZoomImage src="/img/responsive-widgets/currency-input.png" alt="Currency Input widget in a Responsive app" caption="Currency Input widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Type

#### Data type `string`

<dd>

Sets the type of data the field takes. For this widget it is **Currency**. Options:

- **Single-line text**
- **Multi-line text**
- **Number**
- **Password**
- **Email**
- **Phone number**
- **Currency**
- **Date**

When you pick a different type, the widget changes into the matching widget. For example, **Number** changes it into a [Number Input](/reference/responsive-widgets/number-input).

</dd>

### Data

#### Default value `number`

<dd>

Sets the starting amount. When this value changes, the field updates to the new value.

- The value must be a number. Leave it empty for no starting amount.
- Use `.` as the decimal separator, even if your locale uses another separator.
- The number of decimal places cannot be more than **Decimals allowed**.

*Example:*

```js
{{AnvilTable1.selectedRow.price}}
```

</dd>

#### Currency `string`

<dd>

Sets the currency. Pick a currency from the searchable list, or bind a currency code. Default: `USD`.

*Example:*

```js
EUR
```

</dd>

#### Allow currency change `boolean`

<dd>

Lets users pick a different currency from a list in the field. Off by default.

</dd>

#### Decimals allowed `number`

<dd>

Sets how many decimal places users can enter. Options: `0`, `1`, or `2`. Default: `0`.

</dd>

### Label

#### Text `string`

<dd>

The label shown above the field. Default: `Current Price`.

</dd>

### Validation

#### Required `boolean`

<dd>

Makes the field mandatory. If a user clears the field, it shows "This field is required". Off by default.

</dd>

#### Regex `string`

<dd>

Checks the value as typed (the `rawText` value) against a regular expression. If it does not match, the field is invalid and shows **Error message**.

*Example:*

```
^\d{1,6}$
```

</dd>

#### Valid `boolean`

<dd>

Sets whether the value is valid, using a JavaScript expression. If the expression returns `false`, the field is invalid and shows **Error message**. Default: `true`.

*Example:*

```js
{{Number(CurrencyInput1.rawText) <= 5000}}
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

Text shown inside the field when it is empty, for example `10`.

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

Reference properties let you read the widget's state in bindings and code, for example `{{CurrencyInput1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The amount as shown in the field. When the field does not have focus, this includes thousands separators, for example `1,234.50`.

*Example:*

```js
{{CurrencyInput1.text}}
```

</dd>

#### rawText `number`

<dd>

The amount without formatting. Use this value in queries and calculations.

*Example:*

```js
{{CurrencyInput1.rawText}}
```

</dd>

#### currencyCode `string`

<dd>

The selected currency code, for example `USD`.

*Example:*

```js
{{CurrencyInput1.currencyCode}}
```

</dd>

#### countryCode `string`

<dd>

The two-letter country code for the selected currency, for example `US`. It updates when the currency changes.

*Example:*

```js
{{CurrencyInput1.countryCode}}
```

</dd>

#### isValid `boolean`

<dd>

Is `true` when the value passes all checks: **Required**, **Regex**, and **Valid**. Without a **Regex**, the value must be a number. An empty field that is not required is valid.

*Example:*

```js
{{CurrencyInput1.isValid}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{CurrencyInput1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{CurrencyInput1.isDisabled}}
```

</dd>

#### isReadOnly `boolean`

<dd>

Shows whether the widget is read-only.

*Example:*

```js
{{CurrencyInput1.isReadOnly}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
CurrencyInput1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns **Disabled** on or off.

*Example:*

```js
CurrencyInput1.setDisabled(false)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns **Required** on or off.

*Example:*

```js
CurrencyInput1.setRequired(true)
```

</dd>

#### setReadOnly (param: boolean): Promise

<dd>

Turns **Readonly** on or off.

*Example:*

```js
CurrencyInput1.setReadOnly(true)
```

</dd>

#### setValue (param: string): Promise

<dd>

Sets the amount in the field.

*Example:*

```js
CurrencyInput1.setValue("250")
```

</dd>

## Events

The **Events** section shows only when **Readonly** is off.

#### onTextChanged

<dd>

Runs each time the user changes the amount.

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
