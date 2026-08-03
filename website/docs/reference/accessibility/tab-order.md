---
description: >-
  Learn how to use the Tab order property to control the order in which widgets
  receive keyboard focus in your Appsmith application.
---
# Tab Order

This page provides information on using the **Tab order** property to control the order in which widgets receive focus when users press the **Tab** key in your application.

The Tab order property is available in the **Accessibility** section of the property pane for widgets that can receive keyboard focus. Display-only widgets, such as Text, Image, and Chart, don't show this property. Tab order is supported in fixed layout applications.

Tab order takes effect only in the deployed application. It doesn't change keyboard navigation in the editor or in preview mode. To check the Tab order while building your app, use the [Tab order overlay](#preview-tab-order-in-the-editor).

## Properties

#### Tab order `number`

<dd>

Sets the widget's position in the keyboard Tab sequence. Accepts a positive whole number, where `1` is the first position. Leave the field blank to use **Auto**, the default order that moves focus top to bottom, then left to right. A value of `0` or any invalid value is also treated as Auto. This property doesn't support JS binding.

When at least one widget has a Tab order set, pressing **Tab** in the deployed application moves focus as follows:

* Widgets with a Tab order come first, in ascending order.
* Widgets set to Auto follow, in the default top-to-bottom, left-to-right order.
* Widgets that share the same number keep the default order between them.
* Pressing **Shift+Tab** moves focus through the same sequence in reverse.

Tab order applies among widgets in the same container. Widgets inside a Container, Form, or Modal are ordered relative to each other within that widget. Composite widgets, such as Button Group and Checkbox Group, keep their built-in internal Tab behavior.

</dd>

## Preview Tab order in the editor

Since Tab order takes effect only in the deployed application, the editor provides an overlay to verify your configuration without deploying. Press **Alt+T** (**Option+T** on Mac) in the editor to toggle the Tab order overlay. Each widget with a Tab order set displays a badge showing its number; widgets on Auto don't display a badge. Press the shortcut again to hide the overlay.

## See also

* [Widgets](/reference/widgets) - A list of all available widgets and their properties.
