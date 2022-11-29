---
description: A natural consequence of dynamic UI are the content changes. Appsmith provides an option to have widgets adjust height in response to changing content
---

# Widget auto height

Auto height is a capability of widgets to change height in response to content changes. The configuration to this property can be found in the widget's property pane under the section `General`, with the property name `Height`.

[Auto height In Action](https://www.loom.com/share/261a0c6d9e914694885db2ee621d5462)

This property is enabled by default for the following widgets:

- Container
- Form
- Tabs
- Text
- CheckboxGroup
- Checkbox
- RadioGroup
- Radio
- Rating
- Switch
- SwitchGroup
- Stats Box
- Modal

This property is turned off by default and can be enabled for the following widgets:

- JSON form
- Input
- DatePicker
- CurrencyInput
- PhoneInput
- Rich Text Editor
- MultiSelect
- MultiTreeSelect
- TreeSelect


## Widget auto height with limits

Appsmith provides an option to set the limits to which a widget can grow or shrink in height. This can be configured to be enabled by selecting `Auto height with limits` from the `Height` property in the `General` section of the property pane. Once enabled, select the widget, to find two handles which also work as the values for the minimum and maximum height a widget can occupy on the canvas. These handles can be dragged to configure the minimum and maximum height limits for the widget.

[Auto Height with limits](https://www.loom.com/share/261a0c6d9e914694885db2ee621d5462)

## Reflow

When a widget changes height, the layout adjusts to maintain the distance between the widget undergoing a height change and the sibling widgets below this widget occupying one or more of the same columns.

[Layout changes based on auto height](https://www.loom.com/share/a00448f098674ded99d51c48d5893d86)

## Invisible widgets

Widgets which have auto height enabled, and are invisible in view and preview mode, let go of their occupied space, allowing widgets below to move up and occupy the now free space.

[Layout changes due to invisible widgets](https://www.loom.com/share/dd7ab3992acb45fe9124b214fcbf89b0)


## Caveats

- Modal widgets don't have the option to set auto height limits.
- Container and Form widgets have a minimum height of 10 rows, which can be changed by choosing auto height with limits.
- The minimum height any widget can have is 4 rows.
