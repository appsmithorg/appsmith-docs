---
title: Carousel (ALPHA)
sidebar_label: Carousel
hide_title: true
description: The Carousel widget shows a set of images as a slideshow or as a static gallery grid.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Carousel (ALPHA)</h1>

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

The Carousel widget shows a list of images with optional captions. In **Carousel** appearance, it shows one slide at a time with arrows, dots, and optional auto-advance. In **Gallery** appearance, it shows all images at once in a grid. Use it for product photos, banners, or image results from a query.

Widget type: `WDS_CAROUSEL_WIDGET`

<ZoomImage src="/img/responsive-widgets/carousel.png" alt="Carousel widget in a Responsive app" caption="Carousel widget" />

## Which image URLs work

The widget checks each slide's `image` URL before it loads it. It allows:

- URLs on the same origin as your app, including relative paths.
- Absolute `https:` URLs on any domain.
- Base64 raster data URLs in this exact form: `data:image/<type>;base64,<data>`, where `<type>` is `png`, `jpeg`, `jpg`, `gif`, `webp`, `avif`, or `bmp`. The URL can be up to 4 MB long.

It rejects `http:` URLs on another domain, SVG data URLs, `javascript:`, `blob:`, other schemes, and protocol-relative values such as `//example.com/a.png`. A slide with a rejected or empty image shows an empty placeholder. Screen readers still read its alt text.

Images load with `referrerPolicy="no-referrer"`, so the image host does not see your app's URL.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Slides `array`

<dd>

Sets the slides. Each slide is an object with these keys:

- `image` `string`: the image URL. See [Which image URLs work](#which-image-urls-work).
- `altText` `string`, optional: text that screen readers read for the image.
- `caption` `string`, optional: text shown under the image.

The widget uses the first 50 slides and ignores the rest. It skips entries that are not objects. New widgets start with two sample slides.

While a bound query loads and there are no slides yet, the widget shows a loading skeleton. If the array is empty, the widget shows "No slides to display."

*Example:*

```js
{{GetPhotos.data.map(p => ({ image: p.url, altText: p.title, caption: p.title }))}}
```

</dd>

#### Default slide `number`

<dd>

Sets the slide shown first, counting from 0. Default: `0`. Values out of range are moved to the nearest valid slide. Hidden when **Appearance** is **Gallery**.

</dd>

### General

#### Show arrows `boolean`

<dd>

Shows the previous and next arrows. Default: on. Arrows only show when there is more than one slide. Hidden when **Appearance** is **Gallery**.

</dd>

#### Show dots `boolean`

<dd>

Shows a dot for each slide. Users can click a dot to go to that slide. Default: on. Dots only show when there is more than one slide. Hidden when **Appearance** is **Gallery**.

</dd>

#### Loop `boolean`

<dd>

Goes from the last slide back to the first, and from the first to the last. Default: on. Hidden when **Appearance** is **Gallery**.

</dd>

#### Height (px) `number`

<dd>

Sets the height of the slide area in pixels. The minimum is 40. Default: `320`. Hidden when **Appearance** is **Gallery**.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Auto-advance

#### Auto-advance `boolean`

<dd>

Moves to the next slide on a timer. Default: off. You cannot bind this property. Hidden when **Appearance** is **Gallery**.

Auto-advance pauses while the pointer is over the widget or the widget has focus. It is off when the user's operating system has "reduce motion" turned on. It also does nothing when there is only one slide.

</dd>

#### Interval (ms) `number`

<dd>

Sets the time between slides, in milliseconds. The value must be from 2000 to 30000. Default: `5000`. Shows when **Auto-advance** is on and **Appearance** is **Carousel**.

</dd>

### Events

See [Events](#events).

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Appearance `string`

<dd>

Sets how the widget shows slides. You cannot bind this property. Options:

- **Carousel** (default): one slide at a time, with navigation.
- **Gallery**: all slides as a static image grid. Navigation, auto-advance, and the **onSlideChange** event do not apply.

</dd>

#### Visual separation `boolean`

<dd>

Adds the theme's elevated background and border around the widget. This sets it apart from the rest of the page. Default: off.

</dd>

### Custom styling

These settings are in the **Custom styling** section, at the end of the **Style** tab. An empty setting uses the theme value. For theme colors, dark mode, and the rules for custom CSS, see [Custom styling](/reference/responsive-widgets/custom-styling).

#### Accent color `string`

<dd>

Builds the hover, pressed, focus, and text colors of this widget from one color, in light and dark mode. Lists and menus that the widget opens use them too. Empty means the accent of the nearest container that sets one, or the theme accent.

</dd>

#### Background `string`

<dd>

Sets the background of the widget surface. Takes a theme color or a custom color.

</dd>

#### Text color `string`

<dd>

Sets the text color of the widget surface. Takes a theme color or a custom color. When it is empty and **Background** is set, the widget picks a readable text color.

</dd>

#### Border color `string`

<dd>

Sets the border color of the widget surface. Takes a theme color or a custom color. A color with no **Border width** draws a thin border.

</dd>

#### Border width `string`

<dd>

Sets the border width of the widget surface. Options: **From theme** (default), **None**, **Thin**, **Medium**, **Thick**. You cannot bind this property.

</dd>

#### Corners `string`

<dd>

Sets the corner radius of the widget surface. Options: **From theme** (default), **Sharp**, **Rounded**, **Pill**. You cannot bind this property.

</dd>

#### Custom CSS `string`

<dd>

Adds plain CSS to this widget. Rules apply only inside the widget, and `&` is the box around the widget, not only the styled part. To style an inner part, use its element selector. You cannot bind this property.

</dd>

## Keyboard and screen readers

In **Carousel** appearance:

- When the widget has focus, the Left and Right arrow keys move between slides.
- Screen readers announce the active slide, for example "Slide 2 of 5."
- When the user's system has "reduce motion" on, slides change without a scroll animation.

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Carousel1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Carousel1.isVisible}}
```

</dd>

#### slides `array`

<dd>

Holds the slides array.

*Example:*

```js
{{Carousel1.slides.length}}
```

</dd>

#### activeSlide `number`

<dd>

Holds the index of the slide on screen, counting from 0.

*Example:*

```js
{{Carousel1.slides[Carousel1.activeSlide].caption}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Carousel1.setVisibility(false)
```

</dd>

#### setActiveSlide (param: number): Promise

<dd>

Goes to a slide by its index, counting from 0. This method sets **Default slide**.

*Example:*

```js
Carousel1.setActiveSlide(2)
```

</dd>

## Events

#### onSlideChange

<dd>

Runs when the active slide changes. This happens when users click an arrow or a dot, press an arrow key, or when auto-advance moves the slide. Read the new index in `activeSlide`. Hidden when **Appearance** is **Gallery**.

</dd>
