---
title: Responsive Widgets (ALPHA)
sidebar_label: Overview
hide_title: true
description: Responsive Widgets build apps that adapt to the screen width. Reference for every widget, grouped by purpose.
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Responsive Widgets (ALPHA)</h1>

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

Responsive Widgets are the widgets you use in a Responsive app. A Responsive app does not use a fixed grid. It arranges widgets in sections, zones, and rows, and adapts the layout to the screen width.

Responsive Widgets are separate from the [classic widgets](/reference/widgets) used in fixed-layout apps. Some have the same name, such as Table or Button, but their properties differ. Use the pages in this section for Responsive apps only.

## How a Responsive page is laid out

- A **[Section](/reference/responsive-widgets/section)** is a full-width band of the page. Sections stack from top to bottom.
- A **[Zone](/reference/responsive-widgets/zone)** is a column inside a section. A section holds up to four zones side by side. Zone widths are set in twelfths of the section width.
- Inside a zone, widgets stack in rows from top to bottom. A large widget, such as a Table or Chart, takes a row of its own.
- On small screens, zones stack on top of each other.
- Keyboard order follows reading order: sections top to bottom, zones left to right, then rows and widgets.

## Widgets

### Layout and containers

[Section](/reference/responsive-widgets/section), [Zone](/reference/responsive-widgets/zone), [Modal](/reference/responsive-widgets/modal), [Sheet](/reference/responsive-widgets/sheet), [Card](/reference/responsive-widgets/card), [Tabs](/reference/responsive-widgets/tabs)

### Text input

[Input](/reference/responsive-widgets/input), [Email Input](/reference/responsive-widgets/email-input), [Password Input](/reference/responsive-widgets/password-input), [Number Input](/reference/responsive-widgets/number-input), [Multiline Input](/reference/responsive-widgets/multiline-input), [Phone Input](/reference/responsive-widgets/phone-input), [Currency Input](/reference/responsive-widgets/currency-input), [Search](/reference/responsive-widgets/search)

### Selection

[Select](/reference/responsive-widgets/select), [ComboBox](/reference/responsive-widgets/combobox), [MultiSelect](/reference/responsive-widgets/multiselect), [Tree Select](/reference/responsive-widgets/tree-select), [Checkbox](/reference/responsive-widgets/checkbox), [Checkbox Group](/reference/responsive-widgets/checkbox-group), [Radio Group](/reference/responsive-widgets/radio-group), [Switch](/reference/responsive-widgets/switch), [Switch Group](/reference/responsive-widgets/switch-group)

### Pickers and ranges

[Slider](/reference/responsive-widgets/slider), [Rating](/reference/responsive-widgets/rating), [ColorPicker](/reference/responsive-widgets/color-picker), [DatePicker](/reference/responsive-widgets/datepicker), [DateRangePicker](/reference/responsive-widgets/date-range-picker)

### Buttons and links

[Button](/reference/responsive-widgets/button), [Icon Button](/reference/responsive-widgets/icon-button), [Menu Button](/reference/responsive-widgets/menu-button), [Inline Buttons](/reference/responsive-widgets/inline-buttons), [Toolbar Buttons](/reference/responsive-widgets/toolbar-buttons), [FAB](/reference/responsive-widgets/fab), [Link](/reference/responsive-widgets/link)

### Text and display

[Heading](/reference/responsive-widgets/heading), [Paragraph](/reference/responsive-widgets/paragraph), [Markdown](/reference/responsive-widgets/markdown), [Code](/reference/responsive-widgets/code), [Divider](/reference/responsive-widgets/divider), [Badge](/reference/responsive-widgets/badge), [Avatar](/reference/responsive-widgets/avatar), [TagGroup](/reference/responsive-widgets/tag-group), [Chip Group](/reference/responsive-widgets/chip-group), [KeyValue](/reference/responsive-widgets/key-value), [Stats](/reference/responsive-widgets/stats), [Progress](/reference/responsive-widgets/progress)

### Media

[Image](/reference/responsive-widgets/image), [Media](/reference/responsive-widgets/media), [Embed](/reference/responsive-widgets/embed), [Carousel](/reference/responsive-widgets/carousel)

### Data

[Table](/reference/responsive-widgets/table), [List](/reference/responsive-widgets/list), [Text List](/reference/responsive-widgets/text-list), [Tree](/reference/responsive-widgets/tree), [Chart](/reference/responsive-widgets/chart), [Map Chart](/reference/responsive-widgets/map-chart)

### Capture, chat, and custom

[File Upload](/reference/responsive-widgets/file-upload), [Signature](/reference/responsive-widgets/signature), [Code Scanner](/reference/responsive-widgets/code-scanner), [Rich Text Editor](/reference/responsive-widgets/rich-text-editor), [Chat](/reference/responsive-widgets/chat), [Custom](/reference/responsive-widgets/custom)
