---
title: DateRangePicker (ALPHA)
sidebar_label: DateRangePicker
hide_title: true
description: The DateRangePicker widget lets users pick a start date and an end date from a calendar.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>DateRangePicker (ALPHA)</h1>

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

The DateRangePicker widget lets users pick a start date and an end date from one calendar. Use it for date windows, for example a hotel stay, a leave request, or a report period. It picks dates only, without a time. To pick a single date, use the [DatePicker](/reference/responsive-widgets/datepicker) widget.

<ZoomImage src="/img/responsive-widgets/date-range-picker.png" alt="DateRangePicker widget in a Responsive app" caption="DateRangePicker widget" />

Widget type: `WDS_DATE_RANGE_PICKER_WIDGET`

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Date format `string`

<dd>

Sets the format of `formattedStartDate` and `formattedEndDate`. Pick a format from the list, or switch to JS to enter a [moment.js](https://momentjs.com/docs/#/displaying/format/) format string. Default: `YYYY-MM-DD`.

The list offers these formats: ISO 8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`), `LLL`, `LL`, `YYYY-MM-DD HH:mm`, `YYYY-MM-DDTHH:mm:ss`, `YYYY-MM-DD hh:mm:ss A`, `DD/MM/YYYY HH:mm`, `D MMMM, YYYY`, `H:mm A D MMMM, YYYY`, `YYYY-MM-DD`, `MM-DD-YYYY`, `DD-MM-YYYY`, `MM/DD/YYYY`, `DD/MM/YYYY`, `DD/MM/YY`, and `MM/DD/YY`.

</dd>

#### Default Start Date `string`

<dd>

Sets the start date shown when the widget loads. Pick a date, or switch to JS to bind an ISO date string. If you change this value, the widget's range updates to match. The widget shows a range only when both the start and end dates are set. Default: empty.

</dd>

#### Default End Date `string`

<dd>

Sets the end date shown when the widget loads. Pick a date, or switch to JS to bind an ISO date string. If you change this value, the widget's range updates to match. Default: empty.

</dd>

#### Placeholder Date `string`

<dd>

Sets the date the empty start and end fields start from before the user picks a range. Default: empty.

</dd>

#### First day of week `string`

<dd>

Sets the first day of the week in the calendar. Options: **Sunday** to **Saturday**. When you bind it, use one of `sun`, `mon`, `tue`, `wed`, `thu`, `fri`, or `sat`. Default: **Sunday**.

</dd>

### Label

#### Text `string`

<dd>

Sets the label shown above the date inputs. Default: `Label`.

</dd>

### Validations

#### Required `boolean`

<dd>

Makes picking a range mandatory. When on and no range is set, the widget is invalid and shows the message "Please select a valid date range" after the user interacts with it. Default: off.

The widget is also invalid when only one end of the range is set, or when the end date is before the start date.

</dd>

#### Minimum Date `string`

<dd>

Sets the earliest date users can pick. The check includes the day itself. A start date before this day makes the widget invalid.

</dd>

#### Maximum Date `string`

<dd>

Sets the latest date users can pick. The check includes the day itself. An end date after this day makes the widget invalid.

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

Stops users from changing the range. Default: off.

</dd>

#### Read only `boolean`

<dd>

Stops users from editing the dates, but they can still select the text to copy it. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Shows a loading animation while the widget's data loads. Default: on.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### Custom styling

These settings are in the **Custom styling** section, at the end of the **Style** tab. An empty setting uses the theme value. For theme colors, dark mode, and the rules for custom CSS, see [Custom styling](/reference/responsive-widgets/custom-styling).

#### Accent color `string`

<dd>

Builds the hover, pressed, focus, and text colors of this widget from one color, in light and dark mode. Lists and menus that the widget opens use them too. Empty means the accent of the nearest container that sets one, or the theme accent.

</dd>

#### Background `string`

<dd>

Sets the background of the input field box. Takes a theme color or a custom color.

</dd>

#### Text color `string`

<dd>

Sets the text color of the input field box. Takes a theme color or a custom color. When it is empty and **Background** is set, the widget picks a readable text color.

</dd>

#### Border color `string`

<dd>

Sets the border color of the input field box. Takes a theme color or a custom color. A color with no **Border width** draws a thin border.

</dd>

#### Border width `string`

<dd>

Sets the border width of the input field box. Options: **From theme** (default), **None**, **Thin**, **Medium**, **Thick**. You cannot bind this property.

</dd>

#### Corners `string`

<dd>

Sets the corner radius of the input field box. Options: **From theme** (default), **Sharp**, **Rounded**, **Pill**. You cannot bind this property.

</dd>

#### Custom CSS `string`

<dd>

Adds plain CSS to this widget. Rules apply only inside the widget, and `&` is the box around the widget, its label included, not the part inside it. To style an inner part, use its element selector, for example `button` or `input`. You cannot bind this property.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{DateRangePicker1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{DateRangePicker1.isVisible}}
```

</dd>

#### selectedStartDate `string`

<dd>

Holds the start date as an ISO 8601 string. It is an empty string when no start date is set.

*Example:*

```js
{{DateRangePicker1.selectedStartDate}}
```

</dd>

#### selectedEndDate `string`

<dd>

Holds the end date as an ISO 8601 string. It is an empty string when no end date is set.

*Example:*

```js
{{DateRangePicker1.selectedEndDate}}
```

</dd>

#### formattedStartDate `string`

<dd>

Holds the start date in the format set in **Date format**. It is an empty string when no start date is set.

*Example:*

```js
{{DateRangePicker1.formattedStartDate}}
```

</dd>

#### formattedEndDate `string`

<dd>

Holds the end date in the format set in **Date format**. It is an empty string when no end date is set.

*Example:*

```js
{{DateRangePicker1.formattedEndDate}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{DateRangePicker1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
DateRangePicker1.setVisibility(true)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the disabled state on or off.

*Example:*

```js
DateRangePicker1.setDisabled(false)
```

</dd>

## Events

#### onDateRangeSelected

<dd>

Runs when the user has picked both the start and the end date.

</dd>

#### onFocus

<dd>

Runs when the date inputs get focus.

</dd>

#### onBlur

<dd>

Runs when the date inputs lose focus.

</dd>
