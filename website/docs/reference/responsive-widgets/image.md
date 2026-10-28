---
title: Image (ALPHA)
sidebar_label: Image
hide_title: true
description: The Image widget shows an image from a URL, with alt text, a fallback image, and an empty state.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Image (ALPHA)</h1>

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

The Image widget shows an image from a URL. Use it for logos, banners, product photos, or images from a query. You can set a fallback image for when the main image does not load.

Widget type: `WDS_IMAGE_WIDGET`

<ZoomImage src="/img/responsive-widgets/image.png" alt="Image widget in a Responsive app" caption="Image widget" />

## Which image URLs work

The widget checks every image URL before it loads it. This applies to **Image** and **Fallback image**. It allows:

- URLs on the same origin as your app, including relative paths such as `/assets/logo.png`.
- Absolute `https:` URLs on any domain.
- Base64 raster data URLs in this exact form: `data:image/<type>;base64,<data>`, where `<type>` is `png`, `jpeg`, `jpg`, `gif`, `webp`, `avif`, or `bmp`. The URL can be up to 4 MB long.

It rejects:

- `http:` URLs on another domain.
- `javascript:`, `blob:`, `file:`, and other schemes.
- SVG data URLs (`data:image/svg+xml`) and any other data URL form.
- Protocol-relative values, such as `//example.com/a.png`.

The widget loads images with `referrerPolicy="no-referrer"`, so the image host does not see your app's URL.

The widget tries the images in this order:

1. **Image**, if it passes the check and loads.
2. **Fallback image**, if **Image** is empty, rejected, or fails to load.
3. An empty state that shows the **Alt text**, or "No image" if alt text is empty.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Image `string`

<dd>

Sets the URL of the image. See [Which image URLs work](#which-image-urls-work). Default: `https://assets.appsmith.com/widgets/default.png`.

While a bound query loads and no image is set yet, the widget shows a loading skeleton. When a query runs again, the widget keeps the current image until the new one arrives.

*Example:*

```js
{{Products.selectedRow.photo_url}}
```

</dd>

#### Alt text `string`

<dd>

Sets the text that screen readers read for the image. The empty state also shows this text. This field is required. Default: `Image`.

</dd>

#### Fallback image `string`

<dd>

Sets an image to show when the main image is empty, rejected, or fails to load. The same URL checks apply.

</dd>

### General

#### Object fit `string`

<dd>

Sets how the image fills its box. Options:

- **Cover** (default): fills the box and crops the image if needed.
- **Contain**: shows the whole image inside the box.
- **Fill**: stretches the image to fill the box.
- **Scale down**: like **Contain**, but never makes the image larger than its real size.

Values for code: `cover`, `contain`, `fill`, `scale-down`.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

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

#### Visual separation `boolean`

<dd>

Adds the theme's elevated background and border around the image. This sets it apart from the rest of the page. Default: off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Image1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Image1.isVisible}}
```

</dd>

#### image `string`

<dd>

Holds the image URL, as you set it.

*Example:*

```js
{{Image1.image}}
```

</dd>

#### altText `string`

<dd>

Holds the alt text.

*Example:*

```js
{{Image1.altText}}
```

</dd>

#### fallbackImage `string`

<dd>

Holds the fallback image URL.

*Example:*

```js
{{Image1.fallbackImage}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Image1.setVisibility(false)
```

</dd>

#### setImage (param: string): Promise

<dd>

Sets the image URL. The same URL checks apply.

*Example:*

```js
Image1.setImage("https://example.com/photo.png")
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the image. When you set this event, the image becomes a button. Users can also reach it with the keyboard and press it.

</dd>
