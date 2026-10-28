---
title: Map Chart (ALPHA)
sidebar_label: Map Chart
hide_title: true
description: The Map Chart widget colors the regions of a world, continent, or USA map based on their values.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Map Chart (ALPHA)</h1>

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

The Map Chart widget shows a map of the world, a continent, or the USA. It colors each region based on its value. Use it to compare data by country or state, such as population or sales. Users can click a region to run an action.

Widget type: `WDS_MAP_CHART_WIDGET`

<ZoomImage src="/img/responsive-widgets/map-chart.png" alt="Map Chart widget in a Responsive app" caption="Map Chart widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Map type `string`

<dd>

Sets which map the widget shows. When you change it in the property pane, **Region data** changes to a sample data set for that map. Options:

- **World** (default): `WORLD`
- **World with Antarctica**: `WORLD_WITH_ANTARCTICA`
- **Europe**: `EUROPE`
- **North America**: `NORTH_AMERICA`
- **South America**: `SOURTH_AMERICA`
- **Asia**: `ASIA`
- **Oceania**: `OCEANIA`
- **Africa**: `AFRICA`
- **USA**: `USA`

</dd>

#### Region data `array`

<dd>

Sets the value of each region. Each item is an object with an `id` that matches a region on the map and a `value`. Both keys are required, and each `id` must be unique.

*Example:*

```js
{{[
  { id: "NA", value: 515 },
  { id: "EU", value: 743 }
]}}
```

</dd>

### General

#### Title `string`

<dd>

Sets the map title. New widgets start with `Global Population`.

</dd>

#### Height (px) `number`

<dd>

Sets the height of the map in pixels. A map has no natural height, so set it to fit your layout. The minimum is 120. Default: `400`.

</dd>

#### Show labels `boolean`

<dd>

Shows the region labels on the map. Default: on.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Color range

#### Color range `array`

<dd>

Sets value ranges and the color that regions in each range take. Each item is an object with these keys:

- `minValue` (required): the low end of the range.
- `maxValue` (required): the high end of the range.
- `code`: a 6-digit hex color, for example `#FF04D7`.
- `displayValue` (optional): a text label for the range.
- `alpha` (optional): the opacity, from 0 to 100.

*Example:*

```js
{{[
  { minValue: 0.5, maxValue: 1.0, code: "#FFD74D" },
  { minValue: 1.0, maxValue: 2.0, code: "#FB8C00" },
  { minValue: 2.0, maxValue: 3.0, code: "#E65100" }
]}}
```

</dd>

### Events

#### onDataPointClick

<dd>

Sets the action that runs when a user clicks a region. See [Events](#events).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{MapChart1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{MapChart1.isVisible}}
```

</dd>

#### mapType `string`

<dd>

Holds the map type, for example `WORLD`.

*Example:*

```js
{{MapChart1.mapType}}
```

</dd>

#### showLabels `boolean`

<dd>

Shows whether region labels are on.

*Example:*

```js
{{MapChart1.showLabels}}
```

</dd>

#### selectedDataPoint `object`

<dd>

Holds the last region the user clicked, as `{ id, label, shortLabel, originalId, value }`.

*Example:*

```js
{{MapChart1.selectedDataPoint.label}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
MapChart1.setVisibility(false)
```

</dd>

#### setData (param: array): Promise

<dd>

Sets the region data.

*Example:*

```js
MapChart1.setData([{ id: "NA", value: 515 }])
```

</dd>

## Events

#### onDataPointClick

<dd>

Runs when a user clicks a region. Read the clicked region in `{{MapChart1.selectedDataPoint}}`.

</dd>
