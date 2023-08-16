---
Description: Map Chart widget is useful for data visualizations on a map. The visualizations can be used in dashboards to denote areas of interest.
---
# Map Chart

This page provides information on using the Map Chart widget for data visualizations on maps. The visualizations can be used in dashboards to denote areas of interest.

<figure>
  <img src="/img/mapschart.png" style= {{width:"700px", height:"auto"}} alt="Display Map Chart"/>
  <figcaption align = "center"><i>Display Map Chart</i></figcaption>
</figure>

:::info
Appsmith is integrated with [**FusionCharts**](https://www.fusioncharts.com) and has acquired a re-distribution license. This license lets you use FusionCharts on the Appsmith cloud and self-hosted platforms. The use of the license is permitted as long as what you are building on Appsmith isn't used to compete with FusionCharts.<br/>
:::

## Content properties


These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Map Type	`string`

<dd>

Allows you to choose between world maps or individual continent maps for visualizing your data.

*Options:*
* World
* World with Antarctica
* Europe
* North America
* South America
* Asia
* Oceania
* Africa
* USA

:::info
If you want to display a different Map type not listed above, like specific locations, countries, or cities, please contact the support team using the chat widget at the bottom right of this page.
:::


</dd>


#### Chart Data `array<object>`

<dd>

Allows you to display data in the chart.

*Expected data structure:*

```js
[
  {
    "id": "AK",
    "value": "1.96"
  },
  {
    "id": "AL",
    "value": "2.22"
  },..
]
```


In this format, the `id` refers to the pre-defined label ID available on [Fusioncharts](https://www.fusioncharts.com/dev/maps/spec-sheets/world) under the section List of Entities, and the `value` represents the corresponding value associated with that label. If a label ID has no corresponding value, the map displays grey color, to signify the absence of data.

Each **Map Type** has different configurations. To learn more about these charts and their specific configurations, you can refer to the official [FusionCharts documentation](https://www.fusioncharts.com/dev/map-guide/list-of-maps). 

Additionally, you can display dynamic data from queries or JS functions by binding the response to the **Chart data** property. For example, if you have a query named `fetchData`, you can bind its response using:

*Example:*
```js
{{fetchData.data}}
```

If the query data is not in the expected format, you can use the `map()` function to transform it before passing it to the widget, like:

*Example:*
```js
{{fetchUserData.data.map( p => ({id: p.label, value: val.count}))}}
```


</dd>

#### Title `string`

<dd>

Sets the text that appears at the top of the chart as a title.


</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Show Labels `boolean`	

<dd>

When enabled, displays labels for each data point featured on the Map chart.

</dd>



### Events


#### onDataPointClick

<dd>

Sets the action (Framework functions, queries, or JS functions) to be executed when a user clicks on a data point in the chart.

</dd>


## Style properties

Style properties allow you to change the look and feel of the widget.

### General

#### Color range `array<object>`

<dd>

Allows you to manage the color of a collection of regions based on the assigned value ranges. It accepts arrays of objects containing the following keys: 

* `code`: Represents the color code to be applied.
* `minValue`: Indicates the minimum value where this color should be used.
* `maxValue`: Indicates the maximum value where this color should be used.
* `displayValue`: Display string values, overriding the numeric range.
* `alpha`: Indicates the transparency level, with a maximum value of 100.

*Expected data structure:*
```js
[
  {
    "minValue": 0.5,
    "maxValue": 1,
    "code": "#FFD74D"
  },
  {
    "minValue": 1,
    "maxValue": 2,
	"displayValue": "Hello",
	"alpha": 32,
    "code": "#FB8C00"
  },..
]
```

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `MapChart1.isVisible`.

#### selectedDataPoint `object`

<dd>

Contains an object which represents the data point that the user has most recently clicked.

*Example*:

```js
//To access all the details of the selected data point:
{{MapChart1.selectedDataPoint}}

//To access the label of the selected data point:
{{MapChart1.selectedDataPoint.id}}

//To access the value of the selected data point:
{{MapChart1.selectedDataPoint.value}}
```

</dd>

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*
```js
{{MapChart1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
MapChart1.setVisibility(true)
```

</dd>