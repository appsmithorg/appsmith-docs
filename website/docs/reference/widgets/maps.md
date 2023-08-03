---
Description: This page explains how to use the Map widget(powered by Google Maps API) to display location data and enable users to add markers, search, and select locations on the map.
---
# Map

This page provides information on using the Map widget (powered by Google Maps API) to display location data and enable users to add markers, search, and select locations on the map.


:::info IMPORTANT
If you want to use the Map widget on your self-hosted instance, it's essential to have Google Maps configured on your instance. See [Google Maps](/getting-started/setup/instance-configuration/google-maps).
:::

<figure>
  <img src="/img/map-img.png" style= {{width:"700px", height:"auto"}} alt="Download image"/>
  <figcaption align = "center"><i>Display Map</i></figcaption>
</figure>


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Initial location	`object`

<dd>

Sets the default location that the map focuses on when it is displayed for the first time to the user. 

*Example*: if you want to show New York City as the initial location on the Map widget, you can either select it from Google's autocomplete suggestions or define its location using JavaScript, like:

```js
{
  "lat": 40.7127753,
  "long": -74.0059728,
  "title": "New York, NY, USA"
}
```

</dd>

#### Default markers `array<object>`


<dd>

Allows you to display precise locations or display multiple locations at once. To add markers to the Map widget, define an array of markers with latitude, longitude, title and color keys, and set it in the **Default markers** property. 


*Example:*

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

You can display dynamic data from queries or JS functions by binding the response to the **Default markers** property.

*Example*:  suppose you want to display multiple markers on a Map using the locations from the users' database:

```js
{{fetchUserData.data.map(loc  => {
	return {
		lat: parseFloat(loc.latitude),
		long: parseFloat(loc.longitude),
		title: loc.name
	}
})}}
```

This code converts `fetchUserData` into a new array with latitude, longitude, and location name properties.


</dd>


### General


#### Zoom Level `number`

<dd>

Sets the zoom level of the map. Default value is set to `50%`.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. Default value is set to `true`.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. Default value is set to `true`.

</dd>

#### Enable pick location	`boolean`

<dd>

Enabling this option allows users to interactively select a location on the map, and the map marker is moved to the user's current location. The `selectedMarker` field is updated with the information of the marker representing the user's current location.

If you want to display the live location, you can use the **Default Marker** property to set a marker at your current latitude and longitude coordinates. To do this, you can use the following code:

```js
[{
"lat":{{appsmith.geolocation.currentPosition.coords.latitude || ""}}, 
"long":{{appsmith.geolocation.currentPosition.coords.longitude || ""}}
}]
```

To fetch the current location, use `appsmith.geolocation.watchPosition()` action triggered by a Button widget's **onClick** event. 


</dd>

#### Map & Marker Centring `boolean`

<dd>

When enabled, this setting controls whether the clicked marker is automatically centered on the map.

</dd>

#### Enable clustering `boolean`

<dd>

When enabled, groups nearby markers into a single cluster on the map.

</dd>

#### Enable search location `boolean`

<dd>

When this property is enabled, a search bar is added to the map, allowing users to easily navigate and search for specific locations. This can be achieved using Google Autocomplete, which suggests potential locations as the user types in the search bar.

To access the searched location, use the ``center`` reference property. This returns the latitude and longitude coordinates of the location. To display the searched location on the map, add the following code to the **Default markers** property:

```js
[
  {{Map1.center}}
]
```

</dd>

### Create marker

#### Create new marker `boolean`

<dd>

Allows users to mark locations by adding new markers on the map.

</dd>

#### onMarkerCreated	

<dd>

This event is available only when the **Create new marker** property is turned on. It specifies the action (Framework functions, queries, or JS functions) to be executed when the user creates a new marker on the map.

</dd>

### Events

#### onMarkerClick	

<dd>

Sets the action (Framework functions, queries, or JS functions) to be executed when the user clicks a marker on the map. 

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

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

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Map1.isVisible`.

#### isVisible `boolean`

<dd>

Reflects whether the widget is visible or not.

*Example:*
```js
{{Map1.isVisible}}
```

</dd>

#### center `object`

<dd>

Contains title, latitude, and longitude coordinates of the location.

*Example:*
```js
{{Map1.center}}
```

</dd>

#### selectedMarker `object`

<dd>

Contains the marker object that the user has selected.

*Example:*
```js
{{Map1.selectedMarker}}
```

</dd>

#### markers `array<object>`

<dd>

This contains the list of markers on the map

*Example:*
```js
// Access the entire array of markers
{{Map1.markers}}

// Access the title of the first marker in the array
{{Map1.markers[0].title}}

// here [0] represents the index of the first marker
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