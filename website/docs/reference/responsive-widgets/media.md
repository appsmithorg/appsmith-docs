---
title: Media (ALPHA)
sidebar_label: Media
hide_title: true
description: The Media widget plays video or audio from a file URL or a supported provider link, such as YouTube or Vimeo.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Media (ALPHA)</h1>

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

The Media widget plays video or audio. It replaces the separate Video and Audio widgets of fixed-layout apps. It plays direct file URLs, such as `.mp4` or `.mp3`, and links from supported providers.

Widget type: `WDS_MEDIA_WIDGET`

<ZoomImage src="/img/responsive-widgets/media.png" alt="Media widget in a Responsive app" caption="Media widget" />

## Which media URLs work

The widget checks the URL before it loads anything. It allows:

- URLs on the same origin as your app, including relative paths.
- Absolute `https:` URLs.

It rejects:

- `http:` URLs on another domain.
- All `data:` URLs, including `data:image` and `data:video`.
- `blob:`, `javascript:`, `file:`, and other schemes.
- Protocol-relative values, such as `//example.com/video.mp4`.

When the URL is empty or rejected, the widget does not load a player. It shows "No video to play" or "No audio to play" instead.

The player uses the `react-player` library. For a direct file URL, it uses the browser's own video or audio player. For a provider link, it loads that provider's embedded player in an iframe. Supported providers are YouTube, Vimeo, Facebook, Twitch, SoundCloud, Streamable, Wistia, Mixcloud, DailyMotion, and Kaltura. The widget does not give these iframes any extra permissions.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Media type `string`

<dd>

Sets whether the widget plays video or audio. Options: **Video** (default) or **Audio**. You cannot bind this property.

</dd>

#### URL `string`

<dd>

Sets the link to the media file or provider page. See [Which media URLs work](#which-media-urls-work). New widgets start with a sample video from the Appsmith assets server.

*Example:*

```text
https://www.youtube.com/watch?v=<video-id>
```

</dd>

### General

#### Autoplay `boolean`

<dd>

Starts playing the media when it loads. Autoplay is always muted, because browsers block autoplay with sound. Default: off.

</dd>

#### Show controls `boolean`

<dd>

Shows the player controls, such as play, pause, and volume. Default: on.

</dd>

#### Loop `boolean`

<dd>

Starts the media again from the beginning when it ends. Default: off.

</dd>

#### Play inline `boolean`

<dd>

Plays the video inside the page on iOS, instead of in full screen. Shows only when **Media type** is **Video**. Default: on.

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

Adds the theme's elevated background and border around the player. This sets it apart from the rest of the page. Default: off.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Media1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Media1.isVisible}}
```

</dd>

#### url `string`

<dd>

Holds the media URL, as you set it.

*Example:*

```js
{{Media1.url}}
```

</dd>

#### autoPlay `boolean`

<dd>

Shows whether autoplay is on.

*Example:*

```js
{{Media1.autoPlay}}
```

</dd>

#### playState `string`

<dd>

Holds the playback state. Values: `NOT_STARTED`, `PLAYING`, `PAUSED`, `ENDED`.

*Example:*

```js
{{Media1.playState === "ENDED" ? "Thanks for watching" : ""}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Media1.setVisibility(false)
```

</dd>

#### setURL (param: string): Promise

<dd>

Sets the media URL. The same URL checks apply.

*Example:*

```js
Media1.setURL("https://example.com/intro.mp4")
```

</dd>

#### setPlaying (param: boolean): Promise

<dd>

Plays or pauses the media. This method sets **Autoplay**. Playback started this way is muted. Users can turn the sound on in the player controls.

*Example:*

```js
Media1.setPlaying(true)
```

</dd>

## Events

#### onPlay

<dd>

Runs when the media starts or resumes playing.

</dd>

#### onPause

<dd>

Runs when the media pauses. It does not run when the media reaches the end.

</dd>

#### onEnd

<dd>

Runs when the media reaches the end.

</dd>
