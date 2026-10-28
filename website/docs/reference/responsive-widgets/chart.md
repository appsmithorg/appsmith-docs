---
title: Chart (ALPHA)
sidebar_label: Chart
hide_title: true
description: The Chart widget shows data as a column, bar, line, area, pie, or custom ECharts chart.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Chart (ALPHA)</h1>

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

The Chart widget shows one or more data series as a column, bar, line, area, or pie chart. For other chart types, use a custom ECharts configuration. Users can click a data point to run an action.

Widget type: `WDS_CHART_WIDGET`

<ZoomImage src="/img/responsive-widgets/chart.png" alt="Chart widget in a Responsive app" caption="Chart widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### General

#### Chart type `string`

<dd>

Sets the type of chart. Options:

- **Column (vertical bars)** (default): `COLUMN_CHART`
- **Bar (horizontal bars)**: `BAR_CHART`
- **Line**: `LINE_CHART`
- **Area**: `AREA_CHART`
- **Pie**: `PIE_CHART`
- **Custom ECharts**: `CUSTOM_ECHART`

</dd>

#### Title `string`

<dd>

Sets the chart title. New widgets start with `Sales`. Hidden when **Chart type** is **Custom ECharts**.

</dd>

#### Height (px) `number`

<dd>

Sets the height of the chart in pixels. A chart has no natural height, so set it to fit your layout. The minimum is 80. Default: `320`.

</dd>

#### Show labels `boolean`

<dd>

Shows the value on each data point. Default: off. Hidden when **Chart type** is **Custom ECharts**.

</dd>

### Data

#### Chart data `array`

<dd>

Sets the data series. Each series is an object with a `seriesName` and a `data` array of `{ x, y }` points. Hidden when **Chart type** is **Custom ECharts**.

*Example:*

```js
{{[
  {
    seriesName: "Sales",
    data: [
      { x: "Jan", y: 30 },
      { x: "Feb", y: 50 }
    ]
  }
]}}
```

</dd>

#### Custom ECharts configuration `object`

<dd>

Sets the ECharts option object. Shows only when **Chart type** is **Custom ECharts**. New widgets start with a sample stacked bar chart.

- Functions are not supported. The widget removes them for security. Use string template formatters, such as `{b}: {c}`.
- Tooltips always render in rich text mode.

*Example:*

```js
{{{
  xAxis: { type: "category", data: ["Mon", "Tue", "Wed"] },
  yAxis: { type: "value" },
  series: [{ type: "line", data: [120, 200, 150] }]
}}}
```

</dd>

### Axis

The **Adaptive axis**, **x-axis label**, and **y-axis label** properties are hidden for **Pie** and **Custom ECharts** charts.

#### Adaptive axis `boolean`

<dd>

Starts the value axis at the smallest data value instead of zero. Default: off.

</dd>

#### x-axis label `string`

<dd>

Sets the label of the x-axis.

</dd>

#### y-axis label `string`

<dd>

Sets the label of the y-axis.

</dd>

#### x-axis label orientation `string`

<dd>

Sets the direction of the x-axis labels. Options: **Auto** (default), **Slant**, **Rotate**. Shows only for **Line**, **Area**, and **Column** charts. You cannot bind this property.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

#### onDataPointClick

<dd>

Sets the action that runs when a user clicks a data point. See [Events](#events).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Chart1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Chart1.isVisible}}
```

</dd>

#### chartType `string`

<dd>

Holds the chart type, for example `COLUMN_CHART`.

*Example:*

```js
{{Chart1.chartType}}
```

</dd>

#### chartData `array`

<dd>

Holds the data series of the chart.

*Example:*

```js
{{Chart1.chartData}}
```

</dd>

#### xAxisName `string`

<dd>

Holds the x-axis label.

*Example:*

```js
{{Chart1.xAxisName}}
```

</dd>

#### yAxisName `string`

<dd>

Holds the y-axis label.

*Example:*

```js
{{Chart1.yAxisName}}
```

</dd>

#### selectedDataPoint `object`

<dd>

Holds the last data point the user clicked, as `{ x, y, seriesTitle, rawEventData? }`.

*Example:*

```js
{{Chart1.selectedDataPoint.y}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Chart1.setVisibility(false)
```

</dd>

#### setData (param: array): Promise

<dd>

Sets the chart data series.

*Example:*

```js
Chart1.setData([{ seriesName: "Sales", data: [{ x: "Jan", y: 30 }] }])
```

</dd>

## Events

#### onDataPointClick

<dd>

Runs when a user clicks a data point. Read the clicked point in `{{Chart1.selectedDataPoint}}`.

</dd>
