# Map

This page guides you on how to use the Map widget(powered by Google Maps API) to display location data and enable users to add markers, search, and select locations on the map.

:::info IMPORTANT
If you want to use the Map widget on your self-hosted instance, it's essential to have Google Maps configured on your instance. For more information, see [Configuring Google Maps](/getting-started/setup/instance-configuration/google-maps).
:::

<VideoEmbed host="youtube" videoId="xCTiPNlBKLU" title="Using the Map Widget" caption="Using the Map Widget"/>


## Display location

To display a specific area on the Map widget, you can set the **Initial location** property by selecting a location from Google's autocomplete suggestions. For instance, if you want to show New York City as the initial location on the Map widget, you can either select it from Google's autocomplete suggestions or define its location using JavaScript, like:

```js
{
  "lat": 40.7127753,
  "long": -74.0059728,
  "title": "New York, NY, USA"
}
```

### Add markers
You can use markers on the Map widget to showcase precise locations or display multiple locations at once. To add markers to the Map widget, define an array of markers with latitude, longitude, title and optional color keys, and set it in the **Default markers** property. For example:

```js
[
  {
    "lat": 25.122, // latitude of the location
    "long": 50.132, // longitude of the location
    "title": "Location1", // title or name of the location
    "color": "green" // color of the marker representing the location
  }
]
```

This would display markers at the specified coordinates with the specified titles and colors. 

Additionally, you can display dynamic data from queries or JS functions by binding the response to the **Default markers** property.

---
**Example**: suppose you want to display the location of a user when you select a row in a table.

1.  Fetch data from the [sample database ](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchUserData`. 

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```
3. In the **Default markers** property, add:

```js
[
  {
 "lat": {{parseFloat(tblUserData.selectedRow.latitude)}},
"long": {{parseFloat(tblUserData.selectedRow.longitude)}},
"title": "{{tblUserData.selectedRow.name}}",
"color": "blue"
  }
]
```
This creates a map marker using the latitude and longitude values from the database. In addition, the marker is given a title and is displayed in blue color.



#### Display multiple markers 

You can use the JSON format to add multiple markers with varying properties, and also allow users to add their markers with the **Create new marker** property. 

This is useful when you want to visualize and compare the geographic distribution of data, such as customer locations or store locations.

---
**Example**: suppose you want to display all the locations available in the users' database.


To do this, you can use the`fetchUserData` query to retrieve the data and then **transform the data** into an array of objects containing latitude, longitude, and title properties using a `map()` function, and then set it in the **Default markers** property to display all the locations together on the map.

```js
{{fetchUserData.data.map(loc  => {
	return {
		lat: parseFloat(loc.latitude),
		long: parseFloat(loc.longitude),
		title: loc.name
	}
})}}
```



### Live location

If you want to display the live location on a map, you can use the **Default Marker** property to set a marker at your current latitude and longitude coordinates. To do this, you can use the following code:

```js
[{
"lat":{{appsmith.geolocation.currentPosition.coords.latitude || ""}}, 
"long":{{appsmith.geolocation.currentPosition.coords.longitude || ""}}
}]
```

To fetch the current location, use `appsmith.geolocation.watchPosition()` action triggered by a Button widget's **onClick** event. 


## Search and tag location

Enabling the **Search Location** property on a map allows users to search and select a specific location on the map. This can be achieved using Google Autocomplete, which suggests potential locations as the user types in the search bar.

To access the searched location, use the ``center`` reference property. This returns the latitude and longitude coordinates of the location. To display the searched location on the map, add the following code to the **Default markers** property:

```js
[
  {{Map1.center}}
]
```






## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties allow you to edit the Map widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Initial location**     |  Object  | This property sets the default location that the map should focus on.                                                                                                                      |
| **Default markers**      | Array   | This property sets an array of default markers. |
| **Map & Marker Centring** | Boolean  | Controls whether the clicked marker is centred on the map.                                                                                                                                 |
| **Enable search location** | Boolean | This property enables a search bar on the map which users can use to navigate                                                                                                              |
| **Enable pick location** | Boolean   | This property allows users to select a location on the map and moves the map marker to this location. The `selectedMarker` field is populated with this marker.                            |
| **Create new marker**    | Boolean   | This property enables scrolling within the contents of each tab                                                                                                                            |
| **Visible**             | Boolean    | Controls widget's visibility on the page.                                                                       |
| **Animate Loading**     | Boolean    | Allows you to control a widget’s animation on the page load.                                                                                                                               |
| **Zoom Level**          | Number    | Sets the default zoom level of the map      
| **Enable clustering**    | Boolean          |         Enabling clustering groups nearby markers into a cluster                                                                                                   |

### Reference properties

These properties allow you to bind your select widget with any other widget in queries or JS objects. For instance, you can use `Map1.isVisible` to get the visibility status.

| Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedMarker**  | Object  | This contains the marker object selected by the user          |
| **markers**        | Array   | This contains the list of markers on the map                  |
| **isVisible**       | Boolean  | This property indicates whether the widget is visible.  |
| **center**       | Object  | This property contains latitude and longitude coordinates of the location. |


### Style properties

Style properties allow you to change the look and feel of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | String | Allows you to define curved corners.                   |
| **Box Shadow**    | String  | Allows you to choose from the available shadow styles. |



## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)


| Events              | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onMarkerClick**   | Sets the action to be run when the user clicks a marker on the map.      |
| **onMarkerCreated** | Sets the action to be run when the user creates a new marker on the map. |
