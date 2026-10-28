---
title: DatePicker (ALPHA)
sidebar_label: DatePicker
hide_title: true
description: The DatePicker widget lets users pick a date, and optionally a time, from a calendar.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>DatePicker (ALPHA)</h1>

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

The DatePicker widget lets users pick a date from a calendar or type it in. You can also let users pick a time, down to the second. Use it for dates such as a due date, a booking date, or a date of birth. To pick a start and end date, use the [DateRangePicker](/reference/responsive-widgets/date-range-picker) widget.

<ZoomImage src="/img/responsive-widgets/datepicker.png" alt="DatePicker widget in a Responsive app" caption="DatePicker widget" />

Widget type: `WDS_DATEPICKER_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Type

#### Data type `string`

<dd>

Sets the kind of input. Choosing another type changes the widget into the matching input widget. You cannot bind this property. Options: **Single-line text**, **Multi-line text**, **Number**, **Password**, **Email**, **Phone number**, **Currency**, **Date**. Default: **Date**.

</dd>

### Data

#### Date format `string`

<dd>

Sets the format of `formattedDate`. Pick a format from the list, or switch to JS to enter a [moment.js](https://momentjs.com/docs/#/displaying/format/) format string. Default: `YYYY-MM-DD HH:mm`.

The list offers these formats: ISO 8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`), `LLL`, `LL`, `YYYY-MM-DD HH:mm`, `YYYY-MM-DDTHH:mm:ss`, `YYYY-MM-DD hh:mm:ss A`, `DD/MM/YYYY HH:mm`, `D MMMM, YYYY`, `H:mm A D MMMM, YYYY`, `YYYY-MM-DD`, `MM-DD-YYYY`, `DD-MM-YYYY`, `MM/DD/YYYY`, `DD/MM/YYYY`, `DD/MM/YY`, and `MM/DD/YY`.

</dd>

#### Default Date `string`

<dd>

Sets the date shown when the widget loads. Pick a date, or switch to JS to bind an ISO date string. If you change this value, the widget's date updates to match. Default: empty.

*Example:*

```js
{{moment().format("YYYY-MM-DD")}}
```

</dd>

#### Time Precision `string`

<dd>

Sets how precise the time is, or hides the time picker. Options:

- **Day**: date only, no time picker.
- **Hour**
- **Minute**
- **Second**

Default: **Day**.

</dd>

#### First day of week `string`

<dd>

Sets the first day of the week in the calendar. Options: **Sunday** to **Saturday**. When you bind it, use one of `sun`, `mon`, `tue`, `wed`, `thu`, `fri`, or `sat`. Default: **Sunday**.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the date input. Default: `Label`.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes picking a date mandatory. When on and no date is set, the widget is invalid and shows the message "Please select a valid date" after the user interacts with it. Default: off.

</dd>

#### Minimum Date `string`

<dd>

Sets the earliest date users can pick. A selected date outside the allowed range makes the widget invalid.

</dd>

#### Maximum Date `string`

<dd>

Sets the latest date users can pick. A selected date outside the allowed range makes the widget invalid.

</dd>

### General

#### Tooltip `string`

<dd>

Shows help text or details next to the label.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible when the app runs. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from changing the date. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{DatePicker1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{DatePicker1.isVisible}}
```

</dd>

#### selectedDate `string`

<dd>

Holds the selected date as an ISO 8601 string. It is an empty string when no date is set.

*Example:*

```js
{{DatePicker1.selectedDate}}
```

</dd>

#### formattedDate `string`

<dd>

Holds the selected date in the format set in **Date format**. It is an empty string when no date is set.

*Example:*

```js
{{DatePicker1.formattedDate}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{DatePicker1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
DatePicker1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
DatePicker1.setDisabled(false)
```

</dd>

## Events

#### onDateSelected

<dd>

Runs when the user selects or changes the date.

</dd>

#### onFocus

<dd>

Runs when the date input gets focus.

</dd>

#### onBlur

<dd>

Runs when the date input loses focus.

</dd>
