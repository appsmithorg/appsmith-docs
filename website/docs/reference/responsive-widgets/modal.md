---
title: Modal (ALPHA)
sidebar_label: Modal
hide_title: true
description: A Modal is a dialog that opens over the page and holds its own widgets, with an optional header and footer.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Modal (ALPHA)</h1>

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

A Modal is a dialog that opens on top of the page. It has a header with a title, a body that holds your widgets, and a footer with Submit and Cancel buttons. Use it for focused tasks, such as editing a record or confirming an action.

Widget type: `WDS_MODAL_WIDGET`

<ZoomImage src="/img/responsive-widgets/modal.png" alt="Modal widget in a Responsive app" caption="Modal widget" />

## Open and close the Modal

The Modal is hidden when the app loads. It does not take up space on the page.

- To open it, call `showModal()` with the Modal's name, for example from a button's **onClick** event: `{{showModal(Modal1.name)}}`.
- To close it from code, call `closeModal(Modal1.name)`.
- Users can close it with the Cancel button. They can also close it by clicking outside it or pressing Escape, when those options are on.

In the editor, the Modal opens when you select it, so you can add widgets to it.

Widgets you drop into the Modal body stack from top to bottom.

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Animate loading `boolean`

<dd>

Shows a loading animation while the Modal loads. On by default.

</dd>

#### Size `string`

<dd>

Sets the size of the Modal. Options:

- **Small**
- **Medium** (default)
- **Large**

</dd>

### Header

#### Header `boolean`

<dd>

Shows or hides the header. On by default.

</dd>

#### Title `string`

<dd>

The title shown in the header. Default: `Modal Title`.

This property shows only when **Header** is on.

</dd>

### Footer

#### Footer `boolean`

<dd>

Shows or hides the footer with the Submit and Cancel buttons. On by default.

</dd>

#### Submit `boolean`

<dd>

Shows or hides the Submit button. On by default.

This property shows only when **Footer** is on.

</dd>

#### Submit Button Text `string`

<dd>

The label of the Submit button. Default: `Save Changes`. If you leave it empty, the button shows `Submit`.

This property shows only when **Footer** and **Submit** are on.

</dd>

#### Cancel Button Text `string`

<dd>

The label of the Cancel button. Default: `Cancel`. If you leave it empty, the button shows `Cancel`.

This property shows only when **Footer** is on.

</dd>

### Behavior

#### Quick dismiss `boolean`

<dd>

Closes the Modal when the user clicks the backdrop outside it. On by default.

</dd>

#### Close on escape `boolean`

<dd>

Closes the Modal when the user presses the Escape key. On by default.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### Custom styling

These settings are in the **Custom styling** section, at the end of the **Style** tab. An empty setting uses the theme value. For theme colors, dark mode, and the rules for custom CSS, see [Custom styling](/reference/responsive-widgets/custom-styling).

#### Accent color `string`

<dd>

Builds the hover, pressed, focus, and text colors of this widget from one color, in light and dark mode. Lists and menus that the widget opens use them too. Empty means the theme accent.

</dd>

#### Background `string`

<dd>

Sets the background of the dialog surface. The dimmed overlay behind the dialog does not change. Takes a theme color, a custom color, or a gradient.

</dd>

#### Text color `string`

<dd>

Sets the text color of the dialog surface. Takes a theme color or a custom color. When it is empty and **Background** is set, the widget picks a readable text color.

</dd>

#### Border color `string`

<dd>

Sets the border color of the dialog surface. Takes a theme color or a custom color. A color with no **Border width** draws a thin border.

</dd>

#### Border width `string`

<dd>

Sets the border width of the dialog surface. Options: **From theme** (default), **None**, **Thin**, **Medium**, **Thick**. You cannot bind this property.

</dd>

#### Corners `string`

<dd>

Sets the corner radius of the dialog surface. Options: **From theme** (default), **Sharp**, **Rounded**, **Pill**. You cannot bind this property.

</dd>

#### Custom CSS `string`

<dd>

Adds plain CSS to this widget. Rules apply only inside the widget, and `&` is the dialog surface. You cannot bind this property.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Modal1.isVisible}}`. You cannot set them directly.

#### name `string`

<dd>

The name of the Modal. Pass it to `showModal()` and `closeModal()`.

*Example:*

```js
{{Modal1.name}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the Modal is open. It is `false` when the app loads.

*Example:*

```js
{{Modal1.isVisible}}
```

</dd>

## Events

#### onClose

<dd>

Runs when the Modal closes. This includes closing with the Cancel button, the backdrop, or the Escape key.

</dd>

#### onSubmit

<dd>

Runs when the user clicks the Submit button.

This event shows only when **Footer** and **Submit** are on.

</dd>

#### Close on submit `boolean`

<dd>

This setting appears in the **Events** section. When it is on, the Modal closes as soon as the user clicks Submit. On by default.

If **onSubmit** runs a query, consider turning this off. Then close the Modal with `closeModal()` in the query's success or failure callback.

This setting shows only when **Footer** and **Submit** are on.

</dd>
