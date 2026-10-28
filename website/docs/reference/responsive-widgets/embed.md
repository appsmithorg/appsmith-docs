---
title: Embed (ALPHA)
sidebar_label: Embed
hide_title: true
description: The Embed widget shows an external web page, inline HTML, or a document inside a sandboxed frame.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Embed (ALPHA)</h1>

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

The Embed widget shows other content inside your app, in a frame. It has three modes: a web page from a URL, your own HTML, or a document such as a PDF or a Word file. It replaces the Iframe and Document Viewer widgets of fixed-layout apps.

Widget type: `WDS_EMBED_WIDGET`

<ZoomImage src="/img/responsive-widgets/embed.png" alt="Embed widget in a Responsive app" caption="Embed widget" />

## Security rules

The widget applies these rules in every app. You cannot turn them off.

### URL checks

The widget checks the URL in **URL** mode and in **Document** mode. It allows:

- URLs on the same origin as your app, including relative paths.
- Absolute `https:` URLs.

It rejects:

- `http:` URLs on another domain.
- All `data:` URLs.
- `javascript:`, `blob:`, `file:`, and other schemes.
- Protocol-relative values, such as `//example.com`.

When the URL is empty or rejected, the widget does not load a frame. It shows a message instead:

- **URL** mode: "Provide a same-origin or https URL to embed."
- **Document** mode: "No document URL provided," or "Only same-origin or absolute https document URLs render."
- **Inline HTML** mode with no HTML: "Add HTML to render."

The frame always loads with `referrerPolicy="no-referrer"`, so the embedded site does not see your app's URL.

### Sandbox

The frame always has a `sandbox` attribute:

| Mode | Sandbox allows |
|------|----------------|
| URL | `allow-scripts allow-forms allow-popups` |
| Document | `allow-scripts allow-forms allow-popups` |
| Inline HTML | `allow-forms allow-popups` (no scripts) |

The sandbox never allows `allow-same-origin`, `allow-top-navigation`, `allow-top-navigation-by-user-activation`, or `allow-popups-to-escape-sandbox`. This means:

- Embedded scripts run in a separate, unique origin. They cannot read your app's cookies, storage, or page.
- The embedded page cannot redirect the user's browser tab.
- Popups the embedded page opens stay sandboxed.

Unlike the fixed-layout Iframe widget, this widget has no setting to turn off the sandbox.

### Browser permissions

By default, the frame cannot use the camera, microphone, location, screen capture, or payments. You can grant each one in the **Permissions** section. A granted permission applies only to the embedded URL's origin.

### Messages from the embedded page

The **onMessageReceived** event runs only when both of these are true:

- The message comes from the same origin as the embedded URL.
- The message comes from this widget's own frame, not another window.

Before the widget stores the message, it copies it as JSON. This drops functions and other values that JSON cannot hold. It also removes `__proto__`, `constructor`, and `prototype` keys. Messages that cannot be copied become `undefined`.

## Content properties

These properties appear in the **Content** tab of the property pane. This widget has no **Style** properties.

### Data

#### Mode `string`

<dd>

Sets what to embed. You cannot bind this property. Options:

- **URL** (default): a web page.
- **Inline HTML**: HTML you write or bind.
- **Document**: a document file.

</dd>

#### URL `string`

<dd>

Sets the page to embed. Shows when **Mode** is **URL**. See [URL checks](#url-checks). Default: `https://www.example.com`.

</dd>

#### HTML `string`

<dd>

Sets the HTML to show. Shows when **Mode** is **Inline HTML**. Scripts do not run in this mode.

*Example:*

```html
<p>Inline HTML</p>
```

</dd>

#### Document link `string`

<dd>

Sets the URL of a document, such as `pdf`, `txt`, `docx`, `xlsx`, or `pptx`. Shows when **Mode** is **Document**. See [URL checks](#url-checks).

- Files that end in `.doc`, `.docx`, `.ppt`, `.pptx`, `.xls`, or `.xlsx` open in the Microsoft Office Online viewer at `https://view.officeapps.live.com`. The widget sends the document URL to that viewer. The document must be reachable from the internet for the viewer to show it. Do not use signed or secret links for confidential documents.
- Other files, such as PDF and text files, load directly in the frame.

</dd>

#### Title `string`

<dd>

Sets the frame's accessible name for screen readers. If empty, the frame uses "Embedded content."

</dd>

### Permissions

This section is hidden when **Mode** is **Inline HTML**. All permissions are off by default.

#### Allow camera `boolean`

<dd>

Lets the embedded page use the camera.

</dd>

#### Allow microphone `boolean`

<dd>

Lets the embedded page use the microphone.

</dd>

#### Allow location `boolean`

<dd>

Lets the embedded page read the user's location.

</dd>

#### Allow screen capture `boolean`

<dd>

Lets the embedded page capture the screen.

</dd>

#### Allow payment `boolean`

<dd>

Lets the embedded page use the Payment Request API.

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

### Events

See [Events](#events).

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Embed1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Embed1.isVisible}}
```

</dd>

#### source `string`

<dd>

Holds the URL set in **URL** mode.

*Example:*

```js
{{Embed1.source}}
```

</dd>

#### srcDoc `string`

<dd>

Holds the HTML set in **Inline HTML** mode.

*Example:*

```js
{{Embed1.srcDoc}}
```

</dd>

#### docUrl `string`

<dd>

Holds the document link set in **Document** mode.

*Example:*

```js
{{Embed1.docUrl}}
```

</dd>

#### title `string`

<dd>

Holds the frame title.

*Example:*

```js
{{Embed1.title}}
```

</dd>

#### message `any`

<dd>

Holds the last message the embedded page sent, after the checks in [Messages from the embedded page](#messages-from-the-embedded-page). It is empty until the first message arrives.

*Example:*

```js
{{Embed1.message}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Embed1.setVisibility(false)
```

</dd>

#### setURL (param: string): Promise

<dd>

Sets the URL for **URL** mode. The same URL checks apply.

*Example:*

```js
Embed1.setURL("https://docs.appsmith.com")
```

</dd>

#### setSrcDoc (param: string): Promise

<dd>

Sets the HTML for **Inline HTML** mode.

*Example:*

```js
Embed1.setSrcDoc("<h1>Hello</h1>")
```

</dd>

#### setDocumentURL (param: string): Promise

<dd>

Sets the document link for **Document** mode. The same URL checks apply.

*Example:*

```js
Embed1.setDocumentURL("https://example.com/report.pdf")
```

</dd>

## Events

#### onURLChanged

<dd>

Runs when the **URL** property changes, for example through a binding or `setURL()`. It does not run on first load. It does not run when users click links inside the embedded page. Shows when **Mode** is **URL**.

</dd>

#### onMessageReceived

<dd>

Runs when the embedded page sends a message with `postMessage`, and the message passes the checks in [Messages from the embedded page](#messages-from-the-embedded-page). Read the message in `{{Embed1.message}}`. Hidden when **Mode** is **Inline HTML**, because inline HTML cannot send messages that pass the checks.

</dd>
