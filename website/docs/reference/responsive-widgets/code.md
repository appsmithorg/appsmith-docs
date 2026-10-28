---
title: Code (ALPHA)
sidebar_label: Code
hide_title: true
description: The Code widget shows a read-only code snippet with syntax highlighting, optional line numbers, and a copy button.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Code (ALPHA)</h1>

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

The Code widget shows a code snippet with syntax highlighting. Users can read and copy the code, but they cannot edit it. Use it to show a query, a JSON response, a config file, or a sample script. The colors follow the app theme, in both light and dark mode.

Widget type: `WDS_CODE_WIDGET`

<ZoomImage src="/img/responsive-widgets/code.png" alt="Code widget in a Responsive app" caption="Code widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Code `string`

<dd>

Sets the code to show. The widget always shows the code as text, never as HTML. Line breaks and special characters are kept. You can bind data to it, for example `{{JSON.stringify(Api1.data, null, 2)}}`.

</dd>

#### Language `string`

<dd>

Sets the language used for syntax highlighting. Default: **JavaScript**.

Options: **JavaScript**, **TypeScript**, **Python**, **Java**, **JSON**, **SQL**, **HTML**, **CSS**, **Bash**, **YAML**, **Markdown**, **XML**, **Go**, **Rust**, **Plain text**.

Values for code: `javascript`, `typescript`, `python`, `java`, `json`, `sql`, `html`, `css`, `bash`, `yaml`, `markdown`, `xml`, `go`, `rust`, `plaintext`.

If you bind a value that is not in this list, the widget shows the code as plain text.

</dd>

### General

#### Show line numbers `boolean`

<dd>

Shows line numbers next to the code. Default: off.

</dd>

#### Show copy button `boolean`

<dd>

Shows a header with the language name and a **Copy** button. The button copies the raw code to the clipboard. Default: on.

</dd>

#### Wrap long lines `boolean`

<dd>

Wraps long lines onto the next line. When off, users scroll sideways to see long lines. Default: off.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Code1.isVisible}}`. You cannot set them directly.

#### code `string`

<dd>

The code the widget shows.

*Example:*

```js
{{Code1.code}}
```

</dd>

#### language `string`

<dd>

The language set for syntax highlighting.

*Example:*

```js
{{Code1.language}}
```

</dd>

#### value `string`

<dd>

The same value as `code`.

*Example:*

```js
{{Code1.value}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Code1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Code1.setVisibility(false)
```

</dd>

#### setCode (param: string): Promise

<dd>

Sets the code the widget shows.

*Example:*

```js
Code1.setCode("SELECT * FROM users LIMIT 10;")
```

</dd>
