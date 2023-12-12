
# Display Map Markers

This guide shows how to display markers on a Map widget dynamically and implement navigation, allowing users to generate routes between the marked locations.

:::caution
To use the Map widget on your self-hosted instance, you must configure Google Maps. See [Google Maps](/getting-started/setup/instance-configuration/google-maps).
:::



##  Add markers from Table selected row

1. Connect the fetch query that contains the data for latitude and longitude to the Table widget.

2. To display markers based on the selected row in the Table, use the `selectedRow` reference property in the **Default marker** property, like:

<dd>

```js
[{
 "lat": {{parseFloat(tblUserData.selectedRow.latitude)}},   // latitude of the location
 "long": {{parseFloat(tblUserData.selectedRow.longitude)}},  // longitude of the location
 "title": "{{tblUserData.selectedRow.name}}",                // title or name of the location
 "color": "blue"                                             // color of the marker representing the location
}]
```

In the above code, `parseFloat` is used to convert string latitude and longitude values into floating-point numbers for precise geographic coordinate representation.



</dd>

## Add markers from query data

1. Connect the query to the **Default markers** property of the Map widget. 

<dd>


If the query data is not in the [expected format](/reference/widgets/maps#default-markers-arrayobject), you can use the `map()` function to transform it before passing it to the widget, like:

```js
{{fetchUserData.data.map(loc  => {
    return {
        lat: parseFloat(loc.latitude),
        long: parseFloat(loc.longitude),
        title: loc.name,
        color: loc.color || "yellow"   // Display color from query, if not present, set it manually.
    }
})}}
```

The code generates multiple markers on a map, extracting latitude, longitude, and title from each element in the array. Additionally, if no color information is present in the query data, all markers are set to `yellow`.


</dd>

2. To display a specific marker when the map is initially loaded, set the **Initial Location** property of the Map widget to the coordinates of the desired marker. 




## Display current location

To display a live location on the map, use Appsmith's [geolocation](/reference/appsmith-framework/context-object#geolocation-object) function.

1. To fetch the current location, add a Button widget and set its **onClick** event to execute the **Watch geolocation** action.


2. To display a marker at your current latitude and longitude, add the following code in the **Default Marker** property:

<dd>

```js
[{
"lat":{{appsmith.geolocation.currentPosition.coords.latitude || ""}}, 
"long":{{appsmith.geolocation.currentPosition.coords.longitude || ""}}
}]
```

</dd>


## Display marker from address (Forward geocoding)

If you have only addresses and want to show markers at the locations, you can use geocoding to convert addresses into geographical coordinates for mapping.

1. Generate an API key by signing up for a geocoding service, such as [Google Maps API](https://developers.google.com/maps/documentation/geocoding/requests-geocoding) or [Positionstack](https://positionstack.com/). 

2. Create a REST API to forward geocode addresses by passing them to the URL, like:

<dd>

```api
http://api.positionstack.com/v1/forward?access_key=d6234&query={{tbluserData.selectedRow.address}}
```

This API uses geocoding to fetch location details using the provided address from `Tabel_address.selectedRow.address`. The `access_key` serves as an authentication key for accessing the geocoding service.

</dd>

3. In the **Default Marker** property of Map Widget, add the following code to transform the geocoded data into a format suitable for the map:

<dd>


```api
{{fetchloc.data.map((item) => {return {lat: item.latitude, long: item.longitude}})}}
```

</dd>

4. Set Button's **onClick** or Table's **onRowSelected** to execute the forward geocoding API:

<dd>

```js
{{fetchloc.run()}}

// Sample address: 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA
```

</dd>


If you only have coordinates and want to obtain the corresponding address, use [reverse geocoding](https://community.appsmith.com/content/guide/lookup-address-coordinates-using-map-widget-reverse-geocoding).




## Generate routes using markers

This section shows how to implement navigation by generating routes between two or multiple locations on Google Maps.

1. Create a function for creating routes between multiple locations, like:

<dd>

*Example:* If you want to create a path between the live location and the selected location in the Table widget:


```js
export default {
navigateToMap: async () => {
		const currentPosition = await appsmith.geolocation.getCurrentPosition();
		const url = 'www.google.com/maps/dir/' + currentPosition.coords.latitude + ',' + currentPosition.coords.longitude + '/' + Table1.selectedRow.clientlat + ',' + Table1.selectedRow.clientlong;
		await navigateTo(url, {}, 'NEW_WINDOW');
	}
}

// For selected marker: {{Map1.selectedMarker.lat}}
// For existing map markers: {{Map1.markers[0].lat}}
```

 The above function uses Appsmith's `geolocation` to get the current position, creates a Google Maps URL for navigation to a selected location in `Table1`, and opens the route in a new window when executed. Similarly, you can create a route using multiple existing or new markers.



</dd>

2. Drop a Button widget and configure its **onClick** event to trigger the JS function.





