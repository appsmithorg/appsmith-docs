---
title: KeyValue (ALPHA)
sidebar_label: KeyValue
hide_title: true
description: The KeyValue widget shows a label and a read-only value, such as a field on a details page.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>KeyValue (ALPHA)</h1>

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

The KeyValue widget shows a label with a value under it. Users can select the value but cannot change it. Use it to show record details, such as a customer's email or an order total.

The KeyValue widget is a read-only Input widget. It starts with **Readonly** turned on. If you turn **Readonly** off in the property pane, the widget turns into an editable input widget of the matching data type.

Widget type: `WDS_KEY_VALUE_WIDGET`

<ZoomImage src="/img/responsive-widgets/key-value.png" alt="KeyValue widget in a Responsive app" caption="KeyValue widget" />

## Loading and empty states

- While its data loads for the first time, the widget shows a loading placeholder.
- When the value is empty and nothing is loading, the widget shows "No data to display."
- When data reloads and the widget already has a value, it keeps showing the old value until the new one arrives.

## Content properties

These properties appear in the **Content** tab of the property pane. The list below shows the properties you see while **Readonly** is on.

### Type

#### Data type `string`

<dd>

Sets the type of data the value holds. Options: **Single-line text** (default), **Multi-line text**, **Number**, **Password**, **Email**, **Phone number**, **Currency**, **Date**.

When you change the data type in the property pane, the widget turns into the input widget for that type. For example, **Email** turns it into the email input widget.

</dd>

### Data

#### Value `string | number`

<dd>

Sets the value the widget shows. Bind it to your data, for example `{{AnvilTable1.selectedRow.email}}`. The value updates when the bound data changes.

When **Data type** is **Number**, the value must be a number.

</dd>

### Label

#### Text `string`

<dd>

Sets the label above the value. Default: `Label`.

</dd>

### General

#### Allow autofill `boolean`

<dd>

Lets the browser fill in the value. This property shows only when **Data type** is **Email** or **Password**.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Readonly `boolean`

<dd>

Lets users select the value but not change it. Default: on.

If you turn it off in the property pane, the widget turns into an editable input widget of the matching data type. That widget has more properties, such as validation and events.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### Icon

#### Icon `string`

<dd>

Shows an icon in the field. The value must be an icon name from the icon list.

This property is hidden when **Data type** is **Multi-line text**.

</dd>

#### Position `string`

<dd>

Sets which side of the field the icon is on. Options: left (default), right.

Values for code: `left`, `right`.

This property shows only when you set an **Icon**, and is hidden when **Data type** is **Multi-line text**.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{KeyValue1.text}}`. You cannot set them directly.

#### text `string`

<dd>

The parsed value. When **Data type** is **Number**, this is a number, or `null` if the value is empty or not a number.

*Example:*

```js
{{KeyValue1.text}}
```

</dd>

#### rawText `string`

<dd>

The value as a string, before parsing.

*Example:*

```js
{{KeyValue1.rawText}}
```

</dd>

#### value `string | number`

<dd>

The same value as `text`.

*Example:*

```js
{{KeyValue1.value}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the value passes the widget's checks for its data type. For example, with **Email**, it is `false` if the value is not a valid email address.

*Example:*

```js
{{KeyValue1.isValid}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{KeyValue1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{KeyValue1.isDisabled}}
```

</dd>

#### isReadOnly `boolean`

<dd>

Shows whether the widget is read-only.

*Example:*

```js
{{KeyValue1.isReadOnly}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
KeyValue1.setVisibility(false)
```

</dd>

#### setValue (param: string): Promise

<dd>

Sets the value the widget shows.

*Example:*

```js
KeyValue1.setValue("jane@example.com")
```

</dd>

#### setReadOnly (param: boolean): Promise

<dd>

Sets whether the value is read-only.

*Example:*

```js
KeyValue1.setReadOnly(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Sets whether the widget is disabled.

*Example:*

```js
KeyValue1.setDisabled(true)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Sets whether a value is required.

*Example:*

```js
KeyValue1.setRequired(true)
```

</dd>
