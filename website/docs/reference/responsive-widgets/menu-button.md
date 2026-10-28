---
title: Menu Button (ALPHA)
sidebar_label: Menu Button
hide_title: true
description: The Menu Button widget opens a menu of actions when users click it.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Menu Button (ALPHA)</h1>

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

The Menu Button widget shows a button that opens a menu. Each menu item runs its own action. Use it to group related actions in one place. You can add menu items by hand or build them from data, for example a query result.

Widget type: `WDS_MENU_BUTTON_WIDGET`

<ZoomImage src="/img/responsive-widgets/menu-button.png" alt="Menu Button widget in a Responsive app" caption="Menu Button widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Label `string`

<dd>

Sets the text on the button. Default: `Open The Menu…`.

</dd>

#### Menu items source `string`

<dd>

Sets where the menu items come from. You cannot bind this property.

- **Static** (default): you add each item by hand in **Menu items**.
- **Dynamic**: the widget builds items from **Source data**.

</dd>

#### Menu items

<dd>

Lists the menu items. Shows when **Menu items source** is **Static**. New widgets start with three items: **Bake**, **Fry**, and **Boil**. You can add, rename, reorder, and remove items.

Click an item to open its settings:

- **Label** `string`: the text of the item.
- **Visible** `boolean`: shows or hides the item.
- **Disabled** `boolean`: stops users from clicking the item.
- **onClick**: the action that runs when users click the item.

</dd>

#### Source data `array`

<dd>

Takes an array of items to show in the menu. Shows when **Menu items source** is **Dynamic**. The array can hold up to 10 items. If it has more, the widget shows an error and no items.

*Example:*

```js
{{Query1.data}}
```

</dd>

#### Configure menu items

<dd>

Sets how each dynamic menu item looks and acts. Shows when **Menu items source** is **Dynamic** and **Source data** has a value. Use `{{currentItem}}` to read the current row of **Source data**.

- **Label** `string`: the text of each item, for example `{{currentItem.name}}`.
- **Visible** `boolean`: shows or hides each item.
- **Disabled** `boolean`: stops users from clicking each item.
- **onClick**: the action that runs when users click an item. In this action, `currentItem` holds the row and `currentIndex` holds its position.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from opening the menu. Default: off.

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

### Icon

#### Icon `string`

<dd>

Sets an icon to show on the button.

</dd>

#### Position `string`

<dd>

Sets where the icon appears. Options: start (default) or end. You cannot bind this property.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{MenuButton1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{MenuButton1.isVisible}}
```

</dd>

#### label `string`

<dd>

Holds the button label.

*Example:*

```js
{{MenuButton1.label}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
MenuButton1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the button on or off.

*Example:*

```js
MenuButton1.setDisabled(true)
```

</dd>

## Events

#### onClick (menu item)

<dd>

Each menu item has its own **onClick** event. It runs when users click that item. Set it in the item settings (static items) or in **Configure menu items** (dynamic items).

:::note
With dynamic items, `currentIndex` counts only visible items. If you hide some items, `currentItem` may not match the item users clicked. Avoid hiding dynamic items when the action reads `currentItem`.
:::

</dd>
