---
title: Custom styling (ALPHA)
sidebar_label: Custom styling
hide_title: true
description: Change the colors, borders, and corners of a Responsive Widget, and add scoped custom CSS, from the Custom styling section of the property pane.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Custom styling (ALPHA)</h1>

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

Every Responsive Widget except [Custom](/reference/responsive-widgets/custom) has a **Custom styling** section. Use it to change the colors, border, and corners of one widget without changing the app theme. Most widgets also have a **Custom CSS** setting in this section. Classic widgets in fixed-layout apps do not have this section.

The section is the last one in the **Style** tab of the property pane. It starts collapsed when the widget has other style sections. When it is the only style section, it starts open.

Each widget has only the settings that fit it. The settings change one part of the widget, called the styled part. For example, on an Input they change the input field box, and on a Chart they change the outer card, not the chart. See [Settings by widget](#settings-by-widget).

<!-- TODO(screenshot): Custom styling section of an Input widget in the Style tab, on the local docs instance. -->

## How values work

- **Empty means From theme.** Every setting starts empty. An empty setting shows the theme value, and changes when the theme changes.
- **Theme color or custom color.** A color setting offers theme color swatches and a color picker. A theme color follows the theme, in light and dark mode. A custom color is fixed. It does not change in dark mode. **Accent color** is the exception: the widget rebuilds its colors from a custom accent for light and for dark mode.
- **Some settings take a custom color only.** These settings do not offer theme colors: **Background** on Section and Stats, **Border color** on Stats, and **Text color** on Paragraph and Heading.
- **Invalid values are ignored.** A value that is not a valid color shows the theme value instead. The property pane shows an error for it.

You can bind the color settings with JavaScript, so an app can pick a color at run time. **Border width**, **Corners**, and **Custom CSS** cannot be bound.

In code, write a theme color as `token:` plus its value for code, for example `token:positive` for **Accent color** or `token:elevation-1` for **Background**. Each setting accepts only its own values. The value must match exactly, in lowercase:

| Setting | Swatch | Value for code |
|---|---|---|
| Accent color | Positive, Negative, Warning, Neutral | `token:positive`, `token:negative`, `token:warning`, `token:neutral` |
| Background | Accent, Accent, subtle, Neutral, subtle | `token:accent`, `token:accent-subtle`, `token:neutral-subtle` |
| Background | Surface 1, Surface 2, Surface 3 | `token:elevation-1`, `token:elevation-2`, `token:elevation-3` |
| Text color | Default, Accent, Neutral, Positive, Negative, Warning | `token:default`, `token:accent`, `token:neutral`, `token:positive`, `token:negative`, `token:warning` |
| Border color, Line color | Accent, Neutral, Surface | `token:accent`, `token:neutral`, `token:elevation-1` |

A custom color can be a hex value (`#553de9`), `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsv()`, `hsva()`, a color name, or `transparent`. URLs, CSS variables, and keywords such as `inherit` or `currentColor` are not valid.

## Settings

#### Accent color `string`

<dd>

Builds the hover, pressed, focus, and text colors of the widget from one color, in light and dark mode. Lists and menus that the widget opens use them too.

When **Accent color** is empty, the widget uses the **Accent color** of the nearest container around it that has one, such as a Section, Zone, Card, or Modal. Without such a container, it uses the theme accent. A container's **Accent color** also changes the **Accent** and **Accent, subtle** background swatches of the widgets inside it.

Theme colors: **Positive**, **Negative**, **Warning**, **Neutral**.

On a widget with its own color setting, such as **Button color** on a Button, **Accent color** shows only while that setting is **Accent**.

</dd>

#### Background `string`

<dd>

Sets the background of the styled part.

Theme colors: **Accent**, **Accent, subtle**, **Neutral, subtle**, **Surface 1**, **Surface 2**, **Surface 3**. On a widget that also has **Text color**, each theme background comes with a theme text color that is readable on it.

On Section, Stats, Zone, Card, Modal, and Sheet, **Background** also takes a gradient. Choose **Gradient** in the color control to build one:

- Set the angle, or pick one of the preset angles: 0°, 90°, 180°, or 270°.
- Click **Add stop** to add a stop, up to 6. A gradient needs at least 2 stops. Each stop has a color and a position, in percent.
- A gradient typed by hand, such as `linear-gradient(135deg, #6366f1, #8b5cf6)`, goes through the **JS** button. `linear-gradient()`, `radial-gradient()`, `conic-gradient()`, and their `repeating-` forms are accepted, up to 1024 characters.
- **Solid** turns the gradient into a solid color.

A gradient does not change in dark mode, and it sets no text color. Check that the text is readable in light and dark mode.

On a Modal or Sheet, **Background** changes the dialog surface. The dimmed overlay behind the dialog does not change.

</dd>

#### Text color `string`

<dd>

Sets the text color of the styled part.

Theme colors: **Default**, **Accent**, **Neutral**, **Positive**, **Negative**, **Warning**.

When **Text color** is empty and **Background** is set, the widget picks a text color that is readable on the background.

When the text color and the background have a contrast below 4.5:1, the property pane shows a low contrast warning, for example `Low contrast: 2.1:1. Text needs at least 4.5:1 against the background.` Theme colors are measured too, with the colors of the current mode. The check skips bindings, gradients, and colors that are partly transparent.

When one of the two colors is a theme color and the other is a custom color, the property pane also shows `One color follows the theme and one is fixed. Check light and dark mode.`

</dd>

#### Border color `string`

<dd>

Sets the border color of the styled part. A color with no **Border width** draws a thin border.

Theme colors: **Accent**, **Neutral**, **Surface**.

On a Divider, this setting is called **Line color** and sets the color of the line. The Divider's own **Thickness** setting sets the line width.

</dd>

#### Border width `string`

<dd>

Sets the border width of the styled part. Options: **From theme** (default), **None**, **Thin**, **Medium**, **Thick**.

</dd>

#### Corners `string`

<dd>

Sets the corner radius of the styled part. Options: **From theme** (default), **Sharp**, **Rounded**, **Pill**. These are the same options as **Corners** in the app theme.

</dd>

#### Custom CSS `string`

<dd>

Adds CSS that applies to this widget only. See [Custom CSS](#custom-css).

</dd>

## Settings by widget

This table lists the settings each widget has, and the part of the widget they change.

- **Yes, or gradient**: the setting also takes a gradient.
- **Custom color only**: the setting does not offer theme colors.
- **—**: the widget does not have the setting.

| Widget | Accent color | Background | Text color | Border | Corners | Custom CSS | Styled part |
|---|---|---|---|---|---|---|---|
| [Avatar](/reference/responsive-widgets/avatar) | Yes | — | — | — | — | Yes | Control |
| [Badge](/reference/responsive-widgets/badge) | Yes | — | — | — | — | Yes | Control |
| [Button](/reference/responsive-widgets/button) | Yes | — | — | — | — | Yes | Control |
| [Card](/reference/responsive-widgets/card) | Yes | Yes, or gradient | Yes | Yes | Yes | Yes | Surface |
| [Carousel](/reference/responsive-widgets/carousel) | Yes | Yes | Yes | Yes | Yes | Yes | Surface |
| [Chart](/reference/responsive-widgets/chart) | — | Yes | — | Yes | Yes | Yes | Outer card |
| [Chat](/reference/responsive-widgets/chat) | Yes | — | — | — | — | Yes | Whole widget |
| [Checkbox](/reference/responsive-widgets/checkbox) | Yes | — | — | — | — | Yes | Control |
| [Checkbox Group](/reference/responsive-widgets/checkbox-group) | Yes | — | — | — | — | Yes | Control |
| [Chip Group](/reference/responsive-widgets/chip-group) | Yes | — | — | — | — | Yes | Control |
| [Code](/reference/responsive-widgets/code) | — | — | — | — | — | Yes | Whole widget |
| [Code Scanner](/reference/responsive-widgets/code-scanner) | — | Yes | — | Yes | Yes | Yes | Outer card |
| [ColorPicker](/reference/responsive-widgets/color-picker) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [ComboBox](/reference/responsive-widgets/combobox) | Yes | Yes | Yes | Yes | Yes | — | Input field box |
| [Currency Input](/reference/responsive-widgets/currency-input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Custom](/reference/responsive-widgets/custom) | — | — | — | — | — | — | None |
| [DatePicker](/reference/responsive-widgets/datepicker) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [DateRangePicker](/reference/responsive-widgets/date-range-picker) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Divider](/reference/responsive-widgets/divider) | — | — | — | Line color | — | Yes | Line |
| [Email Input](/reference/responsive-widgets/email-input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Embed](/reference/responsive-widgets/embed) | — | — | — | — | — | Yes | Whole widget |
| [FAB](/reference/responsive-widgets/fab) | Yes | — | — | — | — | — | Control |
| [File Upload](/reference/responsive-widgets/file-upload) | Yes | — | — | — | — | Yes | Whole widget |
| [Heading](/reference/responsive-widgets/heading) | — | — | Custom color only | — | — | Yes | Text |
| [Icon Button](/reference/responsive-widgets/icon-button) | Yes | — | — | — | — | Yes | Control |
| [Image](/reference/responsive-widgets/image) | — | — | — | Yes | Yes | Yes | Image frame |
| [Inline Buttons](/reference/responsive-widgets/inline-buttons) | Yes | — | — | — | — | — | Control |
| [Input](/reference/responsive-widgets/input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [KeyValue](/reference/responsive-widgets/key-value) | Yes | — | — | — | — | Yes | Whole widget |
| [Link](/reference/responsive-widgets/link) | Yes | — | — | — | — | Yes | Control |
| [List](/reference/responsive-widgets/list) | Yes | Yes | Yes | Yes | Yes | Yes | Surface |
| [Map Chart](/reference/responsive-widgets/map-chart) | — | Yes | — | Yes | Yes | Yes | Outer card |
| [Markdown](/reference/responsive-widgets/markdown) | — | — | Yes | — | — | Yes | Text |
| [Media](/reference/responsive-widgets/media) | — | Yes | — | Yes | Yes | Yes | Outer card |
| [Menu Button](/reference/responsive-widgets/menu-button) | Yes | — | — | — | — | Yes | Control |
| [Modal](/reference/responsive-widgets/modal) | Yes | Yes, or gradient | Yes | Yes | Yes | Yes | Dialog surface |
| [Multiline Input](/reference/responsive-widgets/multiline-input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [MultiSelect](/reference/responsive-widgets/multiselect) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Number Input](/reference/responsive-widgets/number-input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Paragraph](/reference/responsive-widgets/paragraph) | — | — | Custom color only | — | — | Yes | Text |
| [Password Input](/reference/responsive-widgets/password-input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Phone Input](/reference/responsive-widgets/phone-input) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Progress](/reference/responsive-widgets/progress) | Yes | — | — | — | — | Yes | Control |
| [Radio Group](/reference/responsive-widgets/radio-group) | Yes | — | — | — | — | Yes | Control |
| [Rating](/reference/responsive-widgets/rating) | Yes | — | — | — | — | Yes | Control |
| [Rich Text Editor](/reference/responsive-widgets/rich-text-editor) | Yes | — | — | — | — | Yes | Whole widget |
| [Search](/reference/responsive-widgets/search) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Section](/reference/responsive-widgets/section) | Yes | Custom color or gradient | Yes | Yes | Yes | Yes | Surface |
| [Select](/reference/responsive-widgets/select) | Yes | Yes | Yes | Yes | Yes | — | Input field box |
| [Sheet](/reference/responsive-widgets/sheet) | Yes | Yes, or gradient | Yes | Yes | Yes | Yes | Dialog surface |
| [Signature](/reference/responsive-widgets/signature) | — | — | — | — | — | Yes | Whole widget |
| [Slider](/reference/responsive-widgets/slider) | Yes | — | — | — | — | Yes | Control |
| [Stats](/reference/responsive-widgets/stats) | Yes | Custom color or gradient | Yes | Custom color only | Yes | Yes | Surface |
| [Switch](/reference/responsive-widgets/switch) | Yes | — | — | — | — | Yes | Control |
| [Switch Group](/reference/responsive-widgets/switch-group) | Yes | — | — | — | — | Yes | Control |
| [Table](/reference/responsive-widgets/table) | Yes | — | — | — | — | Yes | Whole widget |
| [Tabs](/reference/responsive-widgets/tabs) | Yes | Yes | Yes | Yes | Yes | Yes | Surface |
| [TagGroup](/reference/responsive-widgets/tag-group) | Yes | — | — | — | — | Yes | Control |
| [Text List](/reference/responsive-widgets/text-list) | Yes | Yes | Yes | Yes | Yes | Yes | Surface |
| [Toolbar Buttons](/reference/responsive-widgets/toolbar-buttons) | Yes | — | — | — | — | — | Control |
| [Tree](/reference/responsive-widgets/tree) | Yes | — | — | — | — | Yes | Whole widget |
| [Tree Select](/reference/responsive-widgets/tree-select) | Yes | Yes | Yes | Yes | Yes | Yes | Input field box |
| [Zone](/reference/responsive-widgets/zone) | Yes | Yes, or gradient | Yes | Yes | Yes | Yes | Surface |

Two widget types have no page of their own. `WDS_TABLE_WIDGET` has the same settings as [Table](/reference/responsive-widgets/table), but its custom CSS works as on other widgets, without the `.anvil-table__*` class names. `WDS_AI_CHAT_WIDGET` has the same settings as [Chat](/reference/responsive-widgets/chat).

## Custom CSS

**Custom CSS** adds your own CSS to one widget. It is the last setting in the **Custom styling** section. Toolbar Buttons, Inline Buttons, FAB, Select, ComboBox, and Custom do not have it. Each of their pages says why.

- **Plain CSS only.** You cannot bind it. CSS that contains `{{` is ignored as a whole.
- **Rules apply only inside the widget.** Appsmith places every selector inside the widget, so a rule cannot style another widget or the page.
- **`&` is the box around the widget.** It holds the whole widget, its label included, not only the styled part. To style an inner part, use its element selector, for example `button` or `input`. Three widgets differ: on the Table, `&` is the table. On a Card, `&` is the card surface. On a Modal or Sheet, `&` is the dialog surface.
- **The widget keeps its box.** Nothing the CSS draws can reach more than 8 px outside the widget. A `z-index` above 10 is lowered to 10, and it applies only inside the widget.
- **Size limit.** CSS longer than 20 KB (20,480 characters) is ignored as a whole.

*Example:*

```css
& { letter-spacing: 0.02em; }
&:hover { opacity: 0.9; }
@media (max-width: 600px) {
  & { font-size: 14px; }
}
```

### What Appsmith removes

Appsmith removes these parts and keeps the rest of the CSS:

- At-rules other than `@media` and `@supports`, such as `@import`, `@font-face`, `@keyframes`, and `@layer`.
- Declarations that load a resource or read page data, such as `url()`, `image-set()`, `image()`, `cross-fade()`, `element()`, `paint()`, `attr()`, `expression()`, and `javascript:`.
- `position` values other than `static`, `relative`, and `absolute`. So `position: fixed` and `position: sticky` are removed.
- Selectors that reach a sibling of the widget with `+` or `~`, such as `& + div` or `&:hover ~ .x`.
- Selectors that use `&` anywhere but at the start.
- Selectors that reach the browser's top layer, such as `::backdrop`, `:modal`, `:popover-open`, and `:fullscreen`.
- Selectors and declarations that contain a backslash (`\`).
- A `:has()` inside another `:has()`.
- Declarations outside a rule, and rules nested more than 8 levels deep.

Appsmith ignores the whole CSS when:

- A quoted string contains a line break, or a string does not close.
- The CSS cannot be parsed.
- The browser does not read the result as rules inside the widget, or cannot check it. Older browsers without constructed style sheets show no custom CSS.

### Keep focus rings

Do not remove focus rings, such as `outline` or `box-shadow` on a focused element. Keyboard users need them to see which element has focus.

### Recover a widget that custom CSS hides

If custom CSS hides a widget in the editor, turn custom CSS off while you fix it:

1. Open the command palette with **Ctrl + Shift + P** (Windows and Linux) or **Cmd + Shift + P** (Mac).
2. Run **Show without custom CSS**.

The editor then shows every widget without its custom CSS. Only you see this, in the editor. The app is not changed. To turn custom CSS back on, run **Show custom CSS**, or click the button in the notice. Leaving the editor also turns it back on.

### Turn off custom CSS for the organization

An administrator can turn off **Allow custom CSS in responsive apps** in the **Responsive app theme** page of [Admin Settings](/getting-started/setup/instance-configuration/admin-settings). It is on by default.

While it is off:

- No responsive app shows custom CSS, published apps included.
- The CSS stays saved in each app.
- In the property pane, **Custom CSS** is read-only and shows the message `Custom CSS is turned off by your admin. Your CSS is kept.`

If the organization settings cannot be loaded, apps show no custom CSS.

### MCP agents

Agents that build apps through the [MCP Server](/getting-started/setup/instance-configuration/mcp-server) cannot set **Custom CSS**.

:::caution
Treat Custom CSS as code. Write it yourself and keep it static. Do not build it from user input, query results, or other data that app users can change.
:::
