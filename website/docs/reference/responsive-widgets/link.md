---
title: Link (ALPHA)
sidebar_label: Link
hide_title: true
description: The Link widget shows a themed hyperlink to an app page or an external URL.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Link (ALPHA)</h1>

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

The Link widget shows a text link. Use it to send users to another page in your app or to an external site. It can also run an action when users click it. The link uses the theme's accent color.

Widget type: `WDS_LINK_WIDGET`

<ZoomImage src="/img/responsive-widgets/link.png" alt="Link widget in a Responsive app" caption="Link widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Text `string`

<dd>

Sets the visible text of the link. If empty, the link shows the URL instead. Default: `Link`.

</dd>

#### URL `string`

<dd>

Sets where the link goes. Default: `https://www.appsmith.com`.

The widget only renders safe URLs as links. When the app runs, it allows:

- Relative paths, for example `/page-slug`.
- Absolute URLs that start with `http:`, `https:`, or `mailto:`.

It rejects every other scheme, for example `javascript:`, `data:`, and `vbscript:`. It also rejects protocol-relative values, such as `//example.com` or `\\example.com`. Hidden control characters are removed before the check.

If the URL is empty or rejected:

- With an **onClick** action, the widget shows a link without a destination. Clicking it, or pressing Enter, runs the action.
- Without an **onClick** action, the widget shows plain text.

The property pane also checks the URL and shows an error for unsafe values.

</dd>

### General

#### Open in `string`

<dd>

Sets where the link opens. Options:

- **Same tab** (default). Value: `self`.
- **New tab**. Value: `blank`. A new tab always opens with `rel="noopener noreferrer"`, so the new page cannot control your app.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane. The link color comes from the theme. You cannot change it.

### General

#### Text size `string`

<dd>

Sets the size of the link text. Options: **Footnote**, **Caption**, **Body** (default), **Subtitle**.

Values for code: `footnote`, `caption`, `body`, `subtitle`.

</dd>

#### Emphasis `string`

<dd>

Makes the link text bold, italic, or both.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Link1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Link1.isVisible}}
```

</dd>

#### text `string`

<dd>

Holds the link text.

*Example:*

```js
{{Link1.text}}
```

</dd>

#### url `string`

<dd>

Holds the link URL.

*Example:*

```js
{{Link1.url}}
```

</dd>

#### target `string`

<dd>

Holds where the link opens: `self` or `blank`.

*Example:*

```js
{{Link1.target}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Link1.setVisibility(false)
```

</dd>

#### setText (param: string): Promise

<dd>

Sets the link text.

*Example:*

```js
Link1.setText("Read the docs")
```

</dd>

#### setURL (param: string): Promise

<dd>

Sets the link URL. The same safety checks apply.

*Example:*

```js
Link1.setURL("https://docs.appsmith.com")
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the link. This is optional. If the URL is valid, the action runs and the link also opens. If the URL is empty or rejected, only the action runs.

</dd>
