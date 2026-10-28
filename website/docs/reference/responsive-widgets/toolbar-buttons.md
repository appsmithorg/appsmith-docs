---
title: Toolbar Buttons (ALPHA)
sidebar_label: Toolbar Buttons
hide_title: true
description: The Toolbar Buttons widget shows a toolbar of buttons and menu buttons that share one style.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Toolbar Buttons (ALPHA)</h1>

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

The Toolbar Buttons widget shows a set of buttons as a toolbar. All buttons share one variant and color. A button can run an action, or it can open a menu of items. Use it for actions on a table, list, or record, such as **Add**, **Edit**, **Copy**, and **Delete**.

Widget type: `WDS_TOOLBAR_BUTTONS_WIDGET`

<ZoomImage src="/img/responsive-widgets/toolbar-buttons.png" alt="Toolbar Buttons widget in a Responsive app" caption="Toolbar Buttons widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Buttons

<dd>

Lists the buttons in the toolbar. You can add, rename, reorder, and remove buttons. You can also add separators. New widgets start with **Add**, **Edit**, **Copy**, a separator, and **Delete**.

Click a button to open its settings. The settings are listed below.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Disables every button in the toolbar. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane. They apply to all buttons in the toolbar.

### General

#### Button variant `string`

<dd>

Sets the look of the buttons. Options: **Filled**, **Outlined**, **Subtle**, **Ghost** (default for new widgets).

Values for code: `filled`, `outlined`, `subtle`, `ghost`.

</dd>

#### Button color `string`

<dd>

Sets the semantic color of the buttons. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

#### Alignment `string`

<dd>

Sets where the buttons sit in the widget. Options: start (default) or end.

</dd>

#### Orientation `string`

<dd>

Lays the buttons out in a row or a column. Options: **Horizontal** (default) or **Vertical**. A vertical toolbar shows all buttons and does not collapse them into a menu.

</dd>

## Button settings

These settings appear when you click a button in the **Buttons** list.

### Content: Label

#### Text `string`

<dd>

Sets the label of the button.

</dd>

### Content: General

#### Button type `string`

<dd>

Sets what the button does. Options:

- **Simple** (default): runs the button's **onClick** action.
- **Menu**: opens a menu. Each menu item runs its own action.

Values for code: `SIMPLE`, `MENU`.

</dd>

#### Visible `boolean`

<dd>

Shows or hides the button.

</dd>

#### Disabled `boolean`

<dd>

Stops users from clicking the button.

</dd>

### Content: Menu items

#### Menu items

<dd>

Lists the items in the button's menu. Shows when **Button type** is **Menu**. Each item has these settings:

- **Text** `string`: the label of the item.
- **Visible** `boolean`: shows or hides the item.
- **Disabled** `boolean`: stops users from clicking the item.
- **onClick**: the action that runs when users click the item.

</dd>

### Content: Events

#### onClick

<dd>

Runs when users click the button. Shows when **Button type** is **Simple**. The button shows a loading state until the action finishes.

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

Reference properties let you read the widget's state in bindings and code, for example `{{ToolbarButtons1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{ToolbarButtons1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
ToolbarButtons1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Disables or enables every button in the toolbar.

*Example:*

```js
ToolbarButtons1.setDisabled(true)
```

</dd>

## Events

#### onClick (button)

<dd>

Each **Simple** button has its own **onClick** event. It runs when users click that button.

</dd>

#### onClick (menu item)

<dd>

Each item in a **Menu** button has its own **onClick** event. It runs when users click that item.

</dd>
