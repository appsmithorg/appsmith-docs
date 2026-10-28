---
title: Chat (ALPHA)
sidebar_label: Chat
hide_title: true
description: The Chat widget shows a conversation from your data and runs your query or JS Object when users send a message.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Chat (ALPHA)</h1>

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

The Chat widget shows a conversation and a message box. You control the conversation: bind the messages to your own data, and run your own AI query or JS Object when users send a message. Show the chat inline on the page, or as a floating chat bubble in a corner of the page.

Widget type: `WDS_CHAT_WIDGET`

<ZoomImage src="/img/responsive-widgets/chat.png" alt="Chat widget in a Responsive app" caption="Chat widget" />

## How to connect the widget

The Chat widget has no AI backend of its own. You connect it in three steps:

1. Store the conversation as an array, for example in a JS Object variable or in the Appsmith store.
2. Bind **Messages** to that array.
3. In **onMessageSend**, run your query or JS Object. Use `{{message}}` to read the text the user sent. Add the user message and the reply to the array.

*Example JS Object:*

```js
export default {
  messages: [],

  async send(text) {
    this.messages = [
      ...this.messages,
      { id: String(Date.now()), role: "user", content: text },
    ];
    const reply = await AskAI.run({ prompt: text });
    this.messages = [
      ...this.messages,
      { id: String(Date.now() + 1), role: "assistant", content: reply.text },
    ];
  },
};
```

Bind **Messages** to `{{JSObject1.messages}}` and set **onMessageSend** to `{{JSObject1.send(message)}}`. Here `AskAI` stands for your own AI query, and `reply.text` stands for the field in its response that holds the answer.

To show the typing indicator while the query runs, bind **Typing indicator** to `{{AskAI.isLoading}}`.

## Message format and limits

Each item in **Messages** is an object with these fields:

| Field | Type | Required | What it does |
|---|---|---|---|
| `id` | string or number | No | Identifies the message. If it is missing, the widget uses the message position. |
| `role` | string | No | `user`, `assistant`, or `system`. Any other value is treated as `assistant`. User messages align to the right. System messages are centered. |
| `content` | string | No | The message text, in Markdown. Other types are converted to text. |
| `timestamp` | number, string, or date | No | Shown above the message as `HH:mm, dd MMM`. A value that is not a valid date is not shown. |
| `avatar` | string | No | Image URL for an avatar next to the message. If the URL is rejected, the avatar shows initials instead. |

The widget handles bad data safely:

- If **Messages** is not an array, the widget shows "No messages yet".
- Items that are not objects are skipped.

Message content and limits:

- Users press Enter to send a message. Shift+Enter adds a new line.
- The widget trims spaces from the start and end of a message. It does not send an empty message.
- The widget sets no length limit on a message. Your query or AI provider may still limit it. The message box grows up to six lines and then scrolls.
- Message content renders as Markdown. The widget sanitizes raw HTML before it shows a message. It removes scripts, iframes, styles, event handlers, and `javascript:` or `data:` links. It keeps a safe list of common HTML elements, similar to GitHub. Images in a message still load from their external URLs.
- Suggested replies always render as plain text.

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Messages `array`

<dd>

Sets the conversation to show. See [Message format and limits](#message-format-and-limits). New widgets start with three sample messages.

*Example:*

```js
[{ "id": "1", "role": "assistant", "content": "Hi! How can I help?" }]
```

</dd>

#### Typing indicator `boolean`

<dd>

Shows a typing indicator under the last message. Turn it on while your query runs. Default: off.

</dd>

#### Suggested replies `array`

<dd>

Sets quick-reply chips above the message box. When users click a chip, the widget sends its text as a message, the same as typing it. Default: `["Tell me more", "Thanks!"]`. Only strings and numbers are used. Empty items are skipped.

</dd>

### General

#### Placeholder `string`

<dd>

Sets the placeholder text in the message box when it is empty. Default: `Type a message`.

</dd>

#### Display mode `string`

<dd>

Sets where the chat appears. Default: **Inline**. You cannot bind this property.

- **Inline**: Shows the chat in the page layout.
- **Floating**: Shows a chat bubble in a corner of the page. Users click the bubble to open the chat panel over the page. The page stays usable while the panel is open. On narrow screens the panel takes the full width. While the panel is closed, the bubble shows a count of new messages.

In the editor, a floating chat shows a small placeholder on the canvas so you can still select it.

Values for code: `inline`, `floating`.

</dd>

#### Position `string`

<dd>

Sets the page corner for the floating chat. Options: **Bottom right** (default), **Bottom left**, **Top right**, **Top left**. This property shows only when **Display mode** is **Floating**.

Values for code: `bottom-right`, `bottom-left`, `top-right`, `top-left`.

</dd>

#### Default open `boolean`

<dd>

Sets whether the floating chat panel starts open. Default: off. This property shows only when **Display mode** is **Floating**.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Turns off the message box and the suggested replies. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Chat1.isVisible}}`. You cannot set them directly.

#### messages `array`

<dd>

Holds the value of the **Messages** property.

*Example:*

```js
{{Chat1.messages}}
```

</dd>

#### lastSentMessage `string`

<dd>

Holds the text of the last message the user sent.

*Example:*

```js
{{Chat1.lastSentMessage}}
```

</dd>

#### isOpen `boolean`

<dd>

Shows whether the floating chat panel is open. It starts with the value of **Default open**.

*Example:*

```js
{{Chat1.isOpen}}
```

</dd>

#### isTyping `boolean`

<dd>

Shows whether the typing indicator is on.

*Example:*

```js
{{Chat1.isTyping}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Chat1.isVisible}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Chat1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the message box and suggested replies on or off.

*Example:*

```js
Chat1.setDisabled(true)
```

</dd>

#### setIsOpen (param: boolean): Promise

<dd>

Opens or closes the floating chat panel. The method sets **Default open**, and `isOpen` follows it.

*Example:*

```js
Chat1.setIsOpen(true)
```

</dd>

## Events

#### onMessageSend

<dd>

Runs when users send a message, from the message box or by clicking a suggested reply. Use `{{message}}` in the action to read the text that was sent.

</dd>

#### onOpen

<dd>

Runs when the floating chat opens, for example when users click the chat bubble. This event shows only when **Display mode** is **Floating**.

</dd>

#### onClose

<dd>

Runs when the floating chat closes, for example when users click the close button or press Escape. This event shows only when **Display mode** is **Floating**.

</dd>
