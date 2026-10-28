---
title: Avatar (ALPHA)
sidebar_label: Avatar
hide_title: true
description: The Avatar widget shows a person's picture, with a fallback to initials or an icon and an optional presence dot.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Avatar (ALPHA)</h1>

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

The Avatar widget shows a picture of a person or an entity. If there is no picture, or the picture cannot load, it shows initials from the label. If it cannot make initials, it shows a user icon. It can also show a presence dot, such as online or busy.

Widget type: `WDS_AVATAR_WIDGET`

<ZoomImage src="/img/responsive-widgets/avatar.png" alt="Avatar widget in a Responsive app" caption="Avatar widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Image `string`

<dd>

Sets the URL of the picture. You can bind data to it, for example `{{AnvilTable1.selectedRow.photoUrl}}`.

For safety, the widget only loads these values:

- `https://` URLs
- URLs on the same origin as the app, including relative paths
- Base64 raster image data, for example `data:image/png;base64,...`. Supported types are PNG, JPEG, GIF, WebP, AVIF, and BMP.

The widget does not load any other value, such as `http://` URLs from another site, SVG data, `blob:` URLs, or `javascript:` URLs. In that case, it shows the initials or the icon instead. It sends no referrer when it loads the picture.

</dd>

#### Label `string`

<dd>

Sets the name of the person or entity. Default: `Ada Lovelace`. This property is required.

The widget uses the label in two ways:

- Screen readers announce it as the avatar's name.
- The widget makes the initials from it. It takes the first letter of the first two words, in capitals. For example, `Ada Lovelace` shows as `AL`.

</dd>

### General

#### Presence `string`

<dd>

Shows a status dot on the avatar. Options: **None** (default), **Online**, **Busy**, **Away**. Screen readers hear the status after the label, for example "Ada Lovelace (online)."

Values for code: `none`, `online`, `busy`, `away`.

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

These properties appear in the **Style** tab of the property pane.

### General

#### Size `string`

<dd>

Sets the size of the avatar. Options: **Small**, **Medium** (default), **Large**, **Extra large**.

Values for code: `S`, `M`, `L`, `XL`.

</dd>

#### Shape `string`

<dd>

Sets the shape of the avatar. Options: **Circle** (default), **Square**.

Values for code: `circle`, `square`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Avatar1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Avatar1.isVisible}}
```

</dd>

#### image `string`

<dd>

The picture URL set on the widget.

*Example:*

```js
{{Avatar1.image}}
```

</dd>

#### label `string`

<dd>

The name of the person or entity.

*Example:*

```js
{{Avatar1.label}}
```

</dd>

#### presence `string`

<dd>

The presence status: `none`, `online`, `busy`, or `away`.

*Example:*

```js
{{Avatar1.presence}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Avatar1.setVisibility(false)
```

</dd>

#### setImage (param: string): Promise

<dd>

Sets the picture URL. The same safety rules as the **Image** property apply.

*Example:*

```js
Avatar1.setImage("https://example.com/photo.png")
```

</dd>

#### setLabel (param: string): Promise

<dd>

Sets the label. This also changes the initials.

*Example:*

```js
Avatar1.setLabel("Grace Hopper")
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the avatar. When you set this event, the avatar acts as a button.

</dd>
