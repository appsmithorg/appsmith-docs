---
description: A natural consequence of dynamic UI are the content changes. Appsmith provides an option to have widgets adjust height in response to changing content
---

# Widget Auto Height

Auto height is a capability in widgets to change height in response to content changes. This is a configurable property. The configuration to this property can be found in the property pane under the section `General`, with the property name `Height`.

[Auto height In Action](https://www.loom.com/share/261a0c6d9e914694885db2ee621d5462)

<details>
<summary>List of widgets with auto height</summary>

The auto height feature exists for a subset of Appsmith widgets.

Some widgets have auto height turned off by default. These need finishing touches for optimized resizing and will soon have it on by default.

| Widget           | Enabled by default |
| ---------------- | ------------------ |
| Container        | Yes                |
| Form             | Yes                |
| Tabs             | Yes                |
| Text             | Yes                |
| CheckboxGroup    | Yes                |
| Checkbox         | Yes                |
| RadioGroup       | Yes                |
| Radio            | Yes                |
| Rating           | Yes                |
| Switch           | Yes                |
| SwitchGroup      | Yes                |
| Stats Box        | Yes                |
| Modal            | Yes                |
| JSON form        | No                 |
| Input            | No                 |
| DatePicker       | No                 |
| CurrencyInput    | No                 |
| PhoneInput       | No                 |
| Rich Text Editor | No                 |
| MultiSelect      | No                 |
| MultiTreeSelect  | No                 |
| TreeSelect       | No                 |

</details>

## Widget auto height with limits

Appsmith provides an option to set the limits to which a widget can grow or shrink in height. This can be configured to be enabled by selecting `Auto height with limits` from the `Height` property in the `General` section of the property pane. Once enabled, select the widget, to find two handles which also work as the values for the minimum and maximum height a widget can occupy on the canvas. These handles can be dragged to configure the minimum and maximum height limits for the widget.

[Auto Height with limits](https://www.loom.com/share/261a0c6d9e914694885db2ee621d5462)

:::note

- Container and Form widgets have a minimum height of 10 rows by default, which can be changed by choosing auto height with limits.
- The minimum height possible for any widget is 4 rows.

:::

## Reflow

When a widget changes height, the layout adjusts to maintain the distance between the widget undergoing a height change and the sibling widgets below this widget occupying one or more of the same columns.

[Layout changes based on auto height](https://www.loom.com/share/a00448f098674ded99d51c48d5893d86)

## Invisible widgets

Widgets which have auto height enabled, and are invisible in view and preview mode, let go of their occupied space, allowing widgets below to move up and occupy the now free space.

[Layout changes due to invisible widgets](https://www.loom.com/share/dd7ab3992acb45fe9124b214fcbf89b0)
