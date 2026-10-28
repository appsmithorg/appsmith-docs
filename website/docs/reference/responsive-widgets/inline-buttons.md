---
title: Inline Buttons (ALPHA)
sidebar_label: Inline Buttons
hide_title: true
description: The Inline Buttons widget shows a row of buttons, or a tab strip, where each button runs its own action.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Inline Buttons (ALPHA)</h1>

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

The Inline Buttons widget shows a group of buttons in one row. Each button runs its own action. Use it for form footers and action bars, for example **Cancel** and **Save Changes**. You can also show the buttons as a tab strip.

Widget type: `WDS_INLINE_BUTTONS_WIDGET`

<ZoomImage src="/img/responsive-widgets/inline-buttons.png" alt="Inline Buttons widget in a Responsive app" caption="Inline Buttons widget" />

## Content properties

These properties appear in the **Content** tab of the property pane. This widget has no **Style** tab. Each button has its own style settings.

### Appearance

#### Appearance `string`

<dd>

Sets how the widget looks. Options:

- **Buttons** (default): a row of buttons.
- **Tabs**: a full-width tab strip. The active tab has an underline. Tabs show the label and sublabel of each button. They do not show icons.

</dd>

#### Selected tab `string`

<dd>

Sets the active tab. Shows when **Appearance** is **Tabs**. Enter the id of a button, for example `button1`.

Clicking a tab does not change this value. To move the active tab, store the id in the tab's **onClick** action and bind this property to it.

*Example:*

```js
{{appsmith.store.tab}}
```

</dd>

### Data

#### Buttons

<dd>

Lists the buttons in the group. You can add, rename, reorder, and remove buttons. New widgets start with **Delete**, a separator, **Cancel**, and **Save Changes**.

Click a button to open its settings. The settings are listed below.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Button settings

These settings appear when you click a button in the **Buttons** list.

### Content: Label

#### Sublabel `string`

<dd>

Sets a second line under the label. Only shows when **Appearance** is **Tabs**.

</dd>

#### Text `string`

<dd>

Sets the label of the button.

</dd>

### Content: General

#### Visible `boolean`

<dd>

Shows or hides the button.

</dd>

#### Disabled `boolean`

<dd>

Stops users from clicking the button.

</dd>

### Content: Events

#### onClick

<dd>

Runs when users click the button. The button shows a loading state until the action finishes.

</dd>

### Style: General

#### Button variant `string`

<dd>

Sets the look of the button. Options: **Filled**, **Outlined**, **Subtle**, **Ghost**.

Values for code: `filled`, `outlined`, `subtle`, `ghost`.

</dd>

#### Button color `string`

<dd>

Sets the semantic color of the button. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

### Style: Icon

#### Icon `string`

<dd>

Sets an icon to show on the button.

</dd>

#### Position `string`

<dd>

Sets where the icon appears. Options: start (default) or end. You cannot bind this property.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{InlineButtons1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{InlineButtons1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
InlineButtons1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Sets the widget's `isDisabled` value. In this release the buttons do not read this value, so the call has no visible effect. To disable a button, use its **Disabled** setting.

*Example:*

```js
InlineButtons1.setDisabled(true)
```

</dd>

## Events

#### onClick (button)

<dd>

Each button has its own **onClick** event. It runs when users click that button or tab. Set it in the button settings.

</dd>
