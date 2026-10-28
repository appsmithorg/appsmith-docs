---
title: FAB (ALPHA)
sidebar_label: FAB
hide_title: true
description: The FAB widget shows a floating action button pinned to a corner of the page, with an optional notification badge.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>FAB (ALPHA)</h1>

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

The FAB (floating action button) widget shows a button that floats over the page in one corner. It stays in place while users scroll. Use it for the main action on a page, for example **Create**. It can show a badge with a count, such as unread messages.

In the editor, the FAB also shows a small placeholder in its layout slot. Click the placeholder to select and configure the widget. The placeholder does not show in the deployed app.

Widget type: `WDS_FAB_WIDGET`

<ZoomImage src="/img/responsive-widgets/fab.png" alt="FAB widget in a Responsive app" caption="FAB widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Icon `string`

<dd>

Sets the icon on the button. Default: `plus`. The value must be the name of an icon from the icon list. You cannot choose "no icon."

</dd>

#### Label `string`

<dd>

Sets the button's accessible name. This field is required. An empty label, or a label with only spaces, shows a validation error. Default: `Create`.

- In the **Standard** variant, screen readers read the label. It is not shown on screen.
- In the **Extended** variant, the label shows as text next to the icon.

</dd>

#### Variant `string`

<dd>

Sets the button shape. You cannot bind this property. Options:

- **Standard** (default): icon only.
- **Extended**: icon and label text.

</dd>

### Badge

#### Badge count `number`

<dd>

Shows a notification badge over the button when the value is greater than 0. The value must be 0 or more. Default: `0`.

*Example:*

```js
{{GetUnread.data.length}}
```

</dd>

#### Badge max `number`

<dd>

Sets the highest count the badge shows. Larger counts show with a `+`. For example, with a max of 99, a count of 120 shows as `99+`. The value must be a whole number of 1 or more. Default: `99`.

</dd>

### General

#### Position `string`

<dd>

Sets the page corner the button sticks to. You cannot bind this property. Options: **Bottom right** (default), **Bottom left**, **Top right**, **Top left**.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from clicking the button. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Color `string`

<dd>

Sets the semantic color of the button. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{FAB1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{FAB1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the button is disabled.

*Example:*

```js
{{FAB1.isDisabled}}
```

</dd>

#### icon `string`

<dd>

Holds the icon name.

*Example:*

```js
{{FAB1.icon}}
```

</dd>

#### label `string`

<dd>

Holds the label.

*Example:*

```js
{{FAB1.label}}
```

</dd>

#### variant `string`

<dd>

Holds the variant: `standard` or `extended`.

*Example:*

```js
{{FAB1.variant}}
```

</dd>

#### position `string`

<dd>

Holds the corner: `bottom-right`, `bottom-left`, `top-right`, or `top-left`.

*Example:*

```js
{{FAB1.position}}
```

</dd>

#### badgeCount `number`

<dd>

Holds the badge count.

*Example:*

```js
{{FAB1.badgeCount}}
```

</dd>

#### badgeMax `number`

<dd>

Holds the badge max.

*Example:*

```js
{{FAB1.badgeMax}}
```

</dd>

#### color `string`

<dd>

Holds the button color.

*Example:*

```js
{{FAB1.color}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
FAB1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the button on or off.

*Example:*

```js
FAB1.setDisabled(true)
```

</dd>

#### setBadgeCount (param: number): Promise

<dd>

Sets the badge count. Use `0` to hide the badge.

*Example:*

```js
FAB1.setBadgeCount(5)
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the button.

</dd>
