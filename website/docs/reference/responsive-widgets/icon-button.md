---
title: Icon Button (ALPHA)
sidebar_label: Icon Button
hide_title: true
description: The Icon Button widget shows a button with only an icon and runs an action when users click it.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Icon Button (ALPHA)</h1>

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

The Icon Button widget is a button that shows only an icon. Use it where space is tight, for example to add, edit, or delete an item. Add a tooltip so users know what the button does.

Widget type: `WDS_ICON_BUTTON_WIDGET`

<ZoomImage src="/img/responsive-widgets/icon-button.png" alt="Icon Button widget in a Responsive app" caption="Icon Button widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Icon `string`

<dd>

Sets the icon on the button. Default: `plus`. The value must be the name of an icon from the icon list. You cannot choose "no icon."

</dd>

### General

#### Tooltip `string`

<dd>

Shows helper text when users hover over the button.

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

#### Button variant `string`

<dd>

Sets the look of the button. Options: **Filled** (default), **Outlined**, **Subtle**, **Ghost**.

Values for code: `filled`, `outlined`, `subtle`, `ghost`.

</dd>

#### Button color `string`

<dd>

Sets the semantic color of the button. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{IconButton1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{IconButton1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
IconButton1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the button on or off.

*Example:*

```js
IconButton1.setDisabled(true)
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the button. The button shows a loading state until the action finishes. A disabled button does not run the action.

</dd>
