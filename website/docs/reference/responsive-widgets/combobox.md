---
title: ComboBox (ALPHA)
sidebar_label: ComboBox
hide_title: true
description: The ComboBox widget lets users type to filter a dropdown list and pick one option.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>ComboBox (ALPHA)</h1>

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

The ComboBox widget is a dropdown with a text input. Users type to filter the list, then pick one option. Use it for long lists, for example a list of countries or customers. You can filter the list in the browser, or turn on server side filtering to run a query as the user types.

<ZoomImage src="/img/responsive-widgets/combobox.png" alt="ComboBox widget in a Responsive app" caption="ComboBox widget" />

Widget type: `WDS_COMBOBOX_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Data type `string`

<dd>

Sets the kind of dropdown. Options:

- **Select**: users pick from the list only. Choosing this option changes the widget into a [Select](/reference/responsive-widgets/select) widget.
- **ComboBox**: users can also type to filter the list.

</dd>

#### Source Data `array<object>`

<dd>

Takes an array of objects. Each object becomes one option. You can bind data from a query or API with `{{ }}`.

Default value:

```js
[
  { "name": "Blue", "code": "BLUE" },
  { "name": "Green", "code": "GREEN" },
  { "name": "Red", "code": "RED" }
]
```

*Example:*

```js
{{getCountries.data}}
```

</dd>

#### Label key `string`

<dd>

Sets the field in **Source Data** that each option shows as its label. Pick a key from the list, or switch to JS to write an expression. The value must be a string or an array of strings, and it cannot be empty. Default: `name`.

</dd>

#### Value key `string`

<dd>

Sets the field in **Source Data** that each option uses as its value. Pick a key from the list, or switch to JS to write an expression. The key must exist in **Source Data**, and the values must be unique. Default: `code`.

</dd>

#### Default selected value `string`

<dd>

Sets the option that is selected when the widget loads. Enter a value, or an object with `label` and `value` keys. The value must be present in **Source Data** for the option to show as selected. Default: empty.

*Example:*

```js
GREEN
```

</dd>

### Label

#### Text `string`

<dd>

Sets the label text shown above the dropdown. Default: `Label`.

</dd>

### Search & filters

#### Server side filtering `boolean`

<dd>

Turns on server side filtering. When on, the widget does not filter the options itself. Instead, it updates `filterText` as the user types and runs **onFilterUpdate**. Your query then returns the matching options. Default: off.

</dd>

#### onFilterUpdate

<dd>

Runs when the filter text changes. The widget waits until the user stops typing for 800 ms before it updates `filterText`. Shows only when **Server side filtering** is on.

*Example:* bind **Source Data** to `{{searchCustomers.data}}`, set this event to run `searchCustomers`, and use `{{ComboBox1.filterText}}` in the query's filter.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes a selection mandatory. When on and no option is selected, the widget is invalid and shows the message "Please select an option" after the user interacts with it. Default: off.

</dd>

### General

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

#### Placeholder `string`

<dd>

Sets the text shown when no option is selected. Default: `Select an item`.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the selection. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{ComboBox1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{ComboBox1.isVisible}}
```

</dd>

#### selectedOptionValue `string`

<dd>

Holds the value of the selected option. It is empty when no option is selected.

*Example:*

```js
{{ComboBox1.selectedOptionValue}}
```

</dd>

#### selectedOptionLabel `string`

<dd>

Holds the label of the selected option.

*Example:*

```js
{{ComboBox1.selectedOptionLabel}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{ComboBox1.isDisabled}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. It is `false` only when **Required** is on and no option is selected.

*Example:*

```js
{{ComboBox1.isValid}}
```

</dd>

#### isDirty `boolean`

<dd>

Shows whether the user has changed the selection. It resets to `false` when **Default selected value** changes.

*Example:*

```js
{{ComboBox1.isDirty}}
```

</dd>

#### options `array<object>`

<dd>

Holds the list of options as `{ label, value }` objects, built from **Source Data**, **Label key**, and **Value key**.

*Example:*

```js
{{ComboBox1.options}}
```

</dd>

#### filterText `string`

<dd>

Holds the text the user typed into the input. Use it for server side filtering. Default: empty.

*Example:*

```js
{{ComboBox1.filterText}}
```

</dd>

#### serverSideFiltering `boolean`

<dd>

Shows whether **Server side filtering** is on.

*Example:*

```js
{{ComboBox1.serverSideFiltering}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
ComboBox1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
ComboBox1.setDisabled(false)
```

</dd>

#### setRequired (param: boolean): Promise

<dd>

Turns the **Required** setting on or off.

*Example:*

```js
ComboBox1.setRequired(true)
```

</dd>

#### setOptions (param: array): Promise

<dd>

Sets the list of options.

*Example:*

```js
ComboBox1.setOptions([{ label: "Blue", value: "BLUE" }, { label: "Red", value: "RED" }])
```

</dd>

#### setSelectedOption (param: string): Promise

<dd>

Sets the selected option by its value.

*Example:*

```js
ComboBox1.setSelectedOption("RED")
```

</dd>

## Events

#### onSelectionChange

<dd>

Runs when the user selects a different option.

</dd>

#### onFilterUpdate

<dd>

Runs when the filter text changes and **Server side filtering** is on. You set it in the **Search & filters** section.

</dd>

#### onDropdownOpen

<dd>

Runs when the dropdown opens.

</dd>

#### onDropdownClose

<dd>

Runs when the dropdown closes.

</dd>
