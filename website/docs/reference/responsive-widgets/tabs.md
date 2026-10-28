---
title: Tabs (ALPHA)
sidebar_label: Tabs
hide_title: true
description: The Tabs widget groups widgets into panels and lets users switch between them with a tab strip.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Tabs (ALPHA)</h1>

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

The Tabs widget groups widgets into panels. Each tab has its own panel, and users switch panels with the tab strip. Use it to split a long page into sections, for example **Details**, **Orders**, and **Settings**.

Widget type: `WDS_TABS_WIDGET`

<ZoomImage src="/img/responsive-widgets/tabs.png" alt="Tabs widget in a Responsive app" caption="Tabs widget" />

When you add the widget, it starts with two tabs: **Tab 1** and **Tab 2**. Drop widgets into the panel of the selected tab. Only the panel of the active tab is shown. Panels of other tabs are not rendered until users select them.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Tabs `array`

<dd>

Lists the tabs. In this list you can:

- Add a tab with **Add tab**.
- Rename a tab.
- Reorder tabs.
- Delete a tab.

Deleting a tab also deletes its panel and every widget in it. Appsmith does not ask you to confirm. To get the tab back, use **Undo** in the message that appears after the delete.

Open a tab's settings to set the per-tab properties below.

**Per-tab properties**

- **Visible** `boolean`: Shows or hides this tab. Hidden tabs are left out of the tab strip. You can bind it with JavaScript.
- **Icon** `string`: Shows an icon before the tab label. The value must be the name of an icon from the icon list.
- **Badge** `string`: Shows a badge with text or a count after the tab label, for example `3`. Leave it empty to hide the badge. You can bind it with JavaScript, for example `{{Query1.data.length}}`.
- **Badge color** `string`: Sets the semantic color of the badge. Options: **Accent**, **Neutral** (default), **Positive**, **Negative**, **Warning**.

</dd>

#### Default tab `string`

<dd>

Sets the tab that is selected when the page loads. Enter the tab label, for example `Tab 1`. Default: `Tab 1`.

The value must match the label of a tab. Otherwise, the property shows the error "Tab name ... does not exist." An empty value is allowed. If the value does not match a visible tab, the widget selects the first visible tab.

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

#### Show tabs `boolean`

<dd>

Shows or hides the tab strip. Default: on.

When it is off, the strip is not shown but the active panel still is. Use this to switch panels from code, for example with `setSelectedTab()` or a bound **Default tab**, instead of letting users click tabs.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Visual separation `boolean`

<dd>

Gives the tabs container an elevated background so it stands out as a separate surface. Default: off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Tabs1.isVisible}}`. You cannot set them directly.

#### selectedTab `string`

<dd>

Holds the label of the selected tab. It starts with the value of **Default tab** and changes when users select a tab.

*Example:*

```js
{{Tabs1.selectedTab}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Tabs1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Tabs1.setVisibility(false)
```

</dd>

#### setSelectedTab (param: string): Promise

<dd>

Selects a tab by its label. The method sets **Default tab**, and `selectedTab` follows it.

*Example:*

```js
Tabs1.setSelectedTab("Tab 2")
```

</dd>

## Events

#### onTabSelected

<dd>

Runs when users select a tab in the tab strip. Read the new tab label from `{{Tabs1.selectedTab}}`.

</dd>
