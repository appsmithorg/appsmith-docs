---
title: Search (ALPHA)
sidebar_label: Search
hide_title: true
description: The Search widget captures a search term, runs an action when the user stops typing, and can show a list of suggestions.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Search (ALPHA)</h1>

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

The Search widget is a search field. It waits until the user stops typing, then runs the **onSearch** event once with the final text. This avoids running a query on every key press. You can also give it a list of suggestions that shows under the field.

Widget type: `WDS_SEARCH_WIDGET`

<ZoomImage src="/img/responsive-widgets/search.png" alt="Search widget in a Responsive app" caption="Search widget" />

## How suggestions work

- Suggestions show in a list under the field while the field has focus.
- The list shows only suggestions that contain the typed text. The match ignores case. When the field is empty, all suggestions show.
- Only text values are shown. Duplicates are removed. The list shows at most 100 suggestions.
- When the user picks a suggestion, the field text changes to that suggestion and **onSuggestionSelect** runs right away. Any pending **onSearch** is canceled.
- Pressing Escape closes the list.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Default text `string`

<dd>

Sets the starting search text. Empty by default.

</dd>

#### Suggestions `array`

<dd>

An array of text values to show as suggestions. Empty by default.

*Examples:*

```js
["Alice", "Bob"]
```

```js
{{Users.data.map((user) => user.name)}}
```

</dd>

### Label

#### Text `string`

<dd>

The label shown above the field. Empty by default, so no label shows.

</dd>

### General

#### Placeholder `string`

<dd>

Text shown inside the field when it is empty. Default: `Search`.

</dd>

#### Debounce (ms) `number`

<dd>

How long the field waits after the last key press before **onSearch** runs, in milliseconds. Must be from 0 to 2000. Default: `250`.

If a bound value is not a number, the widget uses 250. Values outside the range are set to the nearest limit.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget shows in the app. On by default.

</dd>

#### Disabled `boolean`

<dd>

Stops users from typing in the field. Off by default.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget loads. On by default.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Size `string`

<dd>

Sets the size of the search field. Options:

- **Small**
- **Medium** (default)
- **Large**

</dd>

### Custom styling

These settings are in the **Custom styling** section, at the end of the **Style** tab. An empty setting uses the theme value. For theme colors, dark mode, and the rules for custom CSS, see [Custom styling](/reference/responsive-widgets/custom-styling).

#### Accent color `string`

<dd>

Builds the hover, pressed, focus, and text colors of this widget from one color, in light and dark mode. Lists and menus that the widget opens use them too. Empty means the accent of the nearest container that sets one, or the theme accent.

</dd>

#### Background `string`

<dd>

Sets the background of the input field box. Takes a theme color or a custom color.

</dd>

#### Text color `string`

<dd>

Sets the text color of the input field box. Takes a theme color or a custom color. When it is empty and **Background** is set, the widget picks a readable text color.

</dd>

#### Border color `string`

<dd>

Sets the border color of the input field box. Takes a theme color or a custom color. A color with no **Border width** draws a thin border.

</dd>

#### Border width `string`

<dd>

Sets the border width of the input field box. Options: **From theme** (default), **None**, **Thin**, **Medium**, **Thick**. You cannot bind this property.

</dd>

#### Corners `string`

<dd>

Sets the corner radius of the input field box. Options: **From theme** (default), **Sharp**, **Rounded**, **Pill**. You cannot bind this property.

</dd>

#### Custom CSS `string`

<dd>

Adds plain CSS to this widget. Rules apply only inside the widget, and `&` is the box around the widget, not only the styled part. To style an inner part, use its element selector, for example `button` or `input`. You cannot bind this property.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Search1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

The current search text. It updates when **onSearch** runs or when the user picks a suggestion. Use it as the search term in a query.

*Example:*

```js
{{Search1.text}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Search1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Search1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns **Disabled** on or off.

*Example:*

```js
Search1.setDisabled(false)
```

</dd>

#### setValue (param: string): Promise

<dd>

Sets the search text.

*Example:*

```js
Search1.setValue("invoice")
```

</dd>

## Events

#### onSearch

<dd>

Runs when the user stops typing for the **Debounce (ms)** time. It runs once per pause, with the final text in `Search1.text`.

</dd>

#### onSuggestionSelect

<dd>

Runs when the user picks a suggestion from the list.

</dd>
