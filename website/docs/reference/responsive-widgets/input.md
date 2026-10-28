---
title: Input (ALPHA)
sidebar_label: Input
hide_title: true
description: The Input widget lets users enter a single line of text.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Input (ALPHA)</h1>

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

The Input widget is a text field for one line of text, such as a name or a title. You can mark it as required, check it with a regular expression, and run actions when the text changes or the user presses Enter.

For other kinds of data, use [Email Input](/reference/responsive-widgets/email-input), [Password Input](/reference/responsive-widgets/password-input), [Number Input](/reference/responsive-widgets/number-input), [Multiline Input](/reference/responsive-widgets/multiline-input), [Phone Input](/reference/responsive-widgets/phone-input), or [Currency Input](/reference/responsive-widgets/currency-input). You can also switch between them with **Data type**.

Widget type: `WDS_INPUT_WIDGET`

<ZoomImage src="/img/responsive-widgets/input.png" alt="Input widget in a Responsive app" caption="Input widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Type

#### Data type `string`

<dd>

Sets the type of data the field takes. For this widget it is **Single-line text**. Options:

- **Single-line text**
- **Multi-line text**
- **Number**
- **Password**
- **Email**
- **Phone number**
- **Currency**
- **Date**

When you pick a different type, the widget changes into the matching widget. For example, **Email** changes it into an [Email Input](/reference/responsive-widgets/email-input).

</dd>

### Data

#### Value `string`

<dd>

Sets the starting text of the field. When this value changes, the field updates to the new value. Numbers are turned into text.

*Example:*

```js
{{AnvilTable1.selectedRow.name}}
```

</dd>

### Label

#### Text `string`

<dd>

The label shown above the field. Default: `Label`.

</dd>

### Validation

This section shows only when **Readonly** is off.

#### Required `boolean`

<dd>

Makes the field mandatory. If a user clears the field, it shows "This field is required." Off by default.

</dd>

#### Max characters `number`

<dd>

Sets the most characters a user can enter. Must be a whole number of 1 or more. If the text is too long, the field shows "Input text length must be less than *N* characters."

</dd>

#### Spellcheck `boolean`

<dd>

Lets the browser check the text for spelling errors. You cannot bind this property with JavaScript.

</dd>

#### Regex `string`

<dd>

Checks the value against a regular expression. If the value does not match, the field is invalid and shows **Error message**.

*Example:*

```
^[A-Za-z ]+$
```

</dd>

#### Valid `boolean`

<dd>

Sets whether the value is valid, using a JavaScript expression. If the expression returns `false`, the field is invalid and shows **Error message**. Default: `true`.

*Example:*

```js
{{Input1.text !== "admin"}}
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

Text shown inside the field when it is empty.

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

When you turn this switch on in the property pane, the widget changes into a KeyValue widget that shows the value as read-only text. When you turn it off, the widget changes back to the type set in **Data type**.

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

## Style properties

These properties appear in the **Style** tab of the property pane.

### Icon

#### Icon `string`

<dd>

Adds an icon inside the field. Pick an icon from the list, or bind an icon name.

</dd>

#### Position `string`

<dd>

Sets which side of the field the icon is on: left (default) or right.

This property shows only when you have picked an **Icon**.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Input1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The current value of the field.

*Example:*

```js
{{Input1.text}}
```

</dd>

#### rawText `string`

<dd>

The value exactly as the user typed it.

*Example:*

```js
{{Input1.rawText}}
```

</dd>

#### isValid `boolean`

<dd>

Is `true` when the value passes all checks: **Required**, **Regex**, **Valid**. An empty field that is not required is valid.

*Example:*

```js
{{Input1.isValid}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Input1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{Input1.isDisabled}}
```

</dd>

#### isReadOnly `boolean`

<dd>

Shows whether the widget is read-only.

*Example:*

```js
{{Input1.isReadOnly}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Input1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns **Disabled** on or off.

*Example:*

```js
Input1.setDisabled(false)
```

</dd>

#### setReadOnly (param: boolean): Promise

<dd>

Turns **Readonly** on or off.

*Example:*

```js
Input1.setReadOnly(true)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns **Required** on or off.

*Example:*

```js
Input1.setRequired(true)
```

</dd>

#### setValue (param: string): Promise

<dd>

Sets the value of the field.

*Example:*

```js
Input1.setValue("Ada Lovelace")
```

</dd>

## Events

The **Events** section shows only when **Readonly** is off.

#### onTextChanged

<dd>

Runs each time the user changes the text.

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
