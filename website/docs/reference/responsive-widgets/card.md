---
title: Card (ALPHA)
sidebar_label: Card
hide_title: true
description: The Card widget holds other widgets on a card surface, with an optional media header, title row, and footer actions.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Card (ALPHA)</h1>

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

The Card widget is a container. You drop other widgets into its body. It can also show an image at the top, a header row with an avatar, title, and subtitle, and a footer with up to two action buttons. Use it to group content about one item, such as a customer, product, or task.

A new Card starts with every extra part turned off. It is just a surface with an empty body. Turn on the parts you need in the property pane.

Widget type: `WDS_CARD_WIDGET`

<ZoomImage src="/img/responsive-widgets/card.png" alt="Card widget in a Responsive app" caption="Card widget" />

## Card layout

From top to bottom, a card shows:

1. **Media header**: an image band. Shows when **Show media header** is on.
2. **Header row**: avatar, title, and subtitle. Shows when **Show header** is on.
3. **Body**: the widgets you drop into the card.
4. **Footer**: the secondary and primary action buttons. Shows when **Show footer** is on and at least one action has a label.

If you delete the card's body from the entity explorer, the editor shows "This card's body was deleted. Undo to restore it." Use undo to bring it back.

## Image URLs

The media image and the avatar image use the same URL checks as the Image widget. They allow:

- URLs on the same origin as your app, including relative paths.
- Absolute `https:` URLs on any domain.
- Base64 raster data URLs in this exact form: `data:image/<type>;base64,<data>`, where `<type>` is `png`, `jpeg`, `jpg`, `gif`, `webp`, `avif`, or `bmp`. The URL can be up to 4 MB long.

They reject `http:` URLs on another domain, SVG and other data URLs, `javascript:`, `blob:`, other schemes, and protocol-relative values such as `//example.com/a.png`. Images load with `referrerPolicy="no-referrer"`.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Media

#### Show media header `boolean`

<dd>

Shows an image band above the card content. Default: off.

</dd>

#### Image `string`

<dd>

Sets the URL of the media image. Shows when **Show media header** is on. See [Image URLs](#image-urls). If the URL is empty, rejected, or fails to load, the band shows the **Alt text**, or "No image" if alt text is empty.

</dd>

#### Alt text `string`

<dd>

Sets the text that screen readers read for the media image. The empty band also shows this text. Shows when **Show media header** is on.

</dd>

### Header

#### Show header `boolean`

<dd>

Shows the avatar, title, and subtitle row above the body. Default: off.

</dd>

#### Title `string`

<dd>

Sets the card title. Long titles are cut to one line. Shows when **Show header** is on. Default: `Card title`.

</dd>

#### Subtitle `string`

<dd>

Sets a line of supporting text under the title. Long text is cut to one line. Shows when **Show header** is on.

</dd>

#### Show avatar `boolean`

<dd>

Shows an avatar at the start of the header row. Shows when **Show header** is on. Default: off.

The avatar shows the image first. If there is no image, or the image is rejected or fails to load, it shows initials. If there is no label for initials, it shows an icon.

</dd>

#### Avatar image `string`

<dd>

Sets the URL of the avatar image. See [Image URLs](#image-urls). Shows when **Show header** and **Show avatar** are on.

</dd>

#### Avatar label `string`

<dd>

Sets the avatar's accessible name and the source of its initials. If empty, the avatar uses the title. Shows when **Show header** and **Show avatar** are on.

</dd>

### Footer

#### Show footer `boolean`

<dd>

Shows the footer action row below the body. Default: off.

</dd>

#### Primary action label `string`

<dd>

Sets the label of the primary button. This is a filled button that comes after the secondary button. Leave it empty to hide the button. Shows when **Show footer** is on. Default: `Confirm`.

</dd>

#### Secondary action label `string`

<dd>

Sets the label of the secondary button. This is an outlined button that comes before the primary button. Leave it empty to hide the button. Shows when **Show footer** is on.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Loading `boolean`

<dd>

Shows a skeleton over the card while on. The card content stays in place under the skeleton, so the widgets inside keep their state. While loading, clicking the card does nothing. Default: off.

The card also shows the skeleton on its own while a query it depends on is running.

*Example:*

```js
{{Query1.isLoading}}
```

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

See [Events](#events).

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Variant `string`

<dd>

Sets the look of the card surface. Options:

- **Elevated** (default): a raised surface with a shadow.
- **Filled**: a tinted surface with no border or shadow.
- **Outlined**: a surface with a thin border.

Values for code: `elevated`, `filled`, `outlined`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Card1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Card1.isVisible}}
```

</dd>

#### title `string`

<dd>

Holds the card title.

*Example:*

```js
{{Card1.title}}
```

</dd>

#### subtitle `string`

<dd>

Holds the card subtitle.

*Example:*

```js
{{Card1.subtitle}}
```

</dd>

#### variant `string`

<dd>

Holds the card variant: `elevated`, `filled`, or `outlined`.

*Example:*

```js
{{Card1.variant}}
```

</dd>

#### showSkeleton `boolean`

<dd>

Shows whether the **Loading** setting is on.

*Example:*

```js
{{Card1.showSkeleton}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Card1.setVisibility(false)
```

</dd>

#### setLoading (param: boolean): Promise

<dd>

Shows or hides the loading skeleton. This method sets **Loading**.

*Example:*

```js
Card1.setLoading(true)
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the card surface. Clicks on buttons, links, inputs, and other interactive widgets inside the card do not run it. Keyboard and screen reader users can trigger it with a hidden button at the start of the card. That button is named after the card title, or the widget name if the title is empty.

</dd>

#### onPrimaryClick

<dd>

Runs when users click the primary footer button. Shows when **Show footer** is on.

</dd>

#### onSecondaryClick

<dd>

Runs when users click the secondary footer button. Shows when **Show footer** is on.

</dd>
