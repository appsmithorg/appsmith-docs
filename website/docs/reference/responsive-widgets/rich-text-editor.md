---
title: Rich Text Editor (ALPHA)
sidebar_label: Rich Text Editor
hide_title: true
description: The Rich Text Editor widget lets users write formatted text and gives you the content as HTML.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Rich Text Editor (ALPHA)</h1>

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

The Rich Text Editor widget lets users write formatted text with headings, lists, quotes, and inline styles such as bold and italic. The widget gives you the content as an HTML string. Use it for notes, descriptions, and messages.

Widget type: `WDS_RICH_TEXT_EDITOR_WIDGET`

<ZoomImage src="/img/responsive-widgets/rich-text-editor.png" alt="Rich Text Editor widget in a Responsive app" caption="Rich Text Editor widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Default value `string`

<dd>

Sets the starting content of the editor as an HTML string. When this value changes, the editor content resets to it. Default: empty.

*Example:*

```html
<p>Hello <b>world</b></p>
```

</dd>

### Label

#### Text `string`

<dd>

Sets the label of the widget. Default: `Label`.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes content required. When it is on and the editor is empty, `isValid` is `false`. Default: off.

</dd>

### General

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from editing the content. Default: off. Hidden when **Read only** is on.

</dd>

#### Read only `boolean`

<dd>

Lets users select and copy the content, but not edit it. **Read only** takes priority over **Disabled**. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

This section is hidden when **Read only** is on.

#### onTextChange

<dd>

Sets the action that runs when the content changes. See [Events](#events).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{RichTextEditor1.isVisible}}`. You cannot set them directly.

#### text `string`

<dd>

Holds the content of the editor as an HTML string.

*Example:*

```js
{{RichTextEditor1.text}}
```

</dd>

#### value `string`

<dd>

Holds the same HTML string as `text`.

*Example:*

```js
{{RichTextEditor1.value}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. If **Required** is on, it is `false` when the editor has no text. Empty markup, such as `<p></p>` or `<p><br></p>`, counts as empty. If **Required** is off, it is always `true`.

*Example:*

```js
{{RichTextEditor1.isValid}}
```

</dd>

#### isDirty `boolean`

<dd>

Shows whether the user has changed the content since the widget loaded.

*Example:*

```js
{{RichTextEditor1.isDirty}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{RichTextEditor1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{RichTextEditor1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

There is no method to set the content from code. To change the content, set **Default value**.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
RichTextEditor1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns editing on or off.

*Example:*

```js
RichTextEditor1.setDisabled(true)
```

</dd>

## Events

#### onTextChange

<dd>

Runs when the content changes. It runs after the user pauses typing, not on every keystroke. Read the content in `{{RichTextEditor1.text}}`. It does not run while **Read only** is on.

</dd>
