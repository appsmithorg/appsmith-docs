# Map Chart

Map Chart widget is useful for data visualizations on a map. The visualizations can be used in dashboards to denote areas of interest.

## Displaying Data

Map chart’s options can be populated from a data source like an API / Query by transforming the incoming data to an array of \\(id, value\\). For each “Map type”, each unique ID represents a fixed region in the map, which can be determined from the [fusion map chart documentation](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => {
      return { id: row.name, value: row.id }
   })
}}
```

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Map chart widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property        | Description                                                                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Map type**    | It lets you select the maps of the world or continents to visualize data.                                                                                                                                                                                                                           |
| **Title**       | Sets the title to be displayed on top of the map chart.                                                                                                                                                                                                                                             |
| **Visible**     | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                                                                                                                                 |
| **Data**        | Information in a specified format (array \<id, value>) to be displayed on the selected map type. To know about what each `id` represents for a map, please refer to this [documentation](https://www.fusioncharts.com/dev/map-guide/list-of-maps).                                                  |
| **Show Labels** | When turned on, it shows the labels for each data-point on the map chart.                                                                                                                                                                                                                           |
| **Color range** | Controls the color of a set of regions based on the range of values assigned. Accepts arrays of objects with the following keys: code (Color code to be applied), minValue (Minimum value for which this color should be applied), maxValue (Maximum value for which this color should be applied). |

### Binding Properties

These properties allow you to bind your Map chart widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Internal Property     | Description                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedDataPoint** | An object of the currently selected data point in the map. This object changes when the user selects a different data point in the map. |

### Events

| Event                | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| **onDataPointClick** | Sets the action to be run when the user selects a distinct region in the map. |
