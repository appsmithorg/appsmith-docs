
# Display Map Markers

This guide shows how to dynamically display markers on a Map widget and implement navigation, allowing users to draw paths between marked locations. 

:::info IMPORTANT
If you want to use the Map widget on your self-hosted instance, you must have Google Maps configured on your instance. See [Google Maps](/getting-started/setup/instance-configuration/google-maps).
:::


## Implement markers

You can display markers using multiple methods, such as:

### With query 

To display data from a query in the Map widget, follow these steps:

1. Connect the query to the **Default markers** property of the Map widget, and make sure the data is in the [expected format](/reference/widgets/maps#default-markers-arrayobject).

<dd>


To display a single marker, you can extract the latitude and longitude data from a specific element in the query array and format it, like:

```js
[{
    "lat": {{parseFloat(fetchUserData.data[0].latitude)}}, 
    "long": {{parseFloat(fetchUserData.data[0].longitude)}},
    "title": {{fetchUserData.data[0].name}}    
    "color": {{fetchUserData.data[0].color || "blue"}}    // Display color from query, if not present, set it manually.   
}]
```

To display multiple markers, you can use the `map()` function to transform it before passing it to the widget, like:

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





###  With selected row from Table

To display data from a query in the Map widget, follow these steps:


1. Add a Table widget that contains columns for latitude and longitude information.

2. To display markers based on the selected row in the Table, connect the Table data to the **Default markers** property, like:

<dd>

```js
[{
 "lat": {{parseFloat(tblUserData.selectedRow.latitude)}},   // latitude of the location
"long": {{parseFloat(tblUserData.selectedRow.longitude)}},  // longitude of the location
"title": "{{tblUserData.selectedRow.name}}",                // title or name of the location
"color": "blue"                                             // color of the marker representing the location
}]
```
</dd>

### For live location

To display a live marker on the map, use Appsmith's [geolocation](/reference/appsmith-framework/context-object#geolocation-object) function.

1. To display a marker at your current latitude and longitude, add the following code in the **Default Marker** property:

<dd>

```js
[{
"lat":{{appsmith.geolocation.currentPosition.coords.latitude || ""}}, 
"long":{{appsmith.geolocation.currentPosition.coords.longitude || ""}}
}]
```

</dd>

2. To fetch the current location, add a Button widget and set its **onClick** event to execute the **Watch geolocation** action.


### With address (Forward geocoding)

If you have only addresses and want to show markers at the locations, you can use geocoding to convert addresses into geographical coordinates for mapping.

1. Generate an API key by signing up for [geocoding service](https://developers.google.com/maps/documentation/geocoding/requests-geocoding). 

2. Create a REST API to forward geocode addresses by passing them to the URL, like:

<dd>

```api
http://api.positionstack.com/v1/forward?access_key=d6234&query={{this.params.address}}
```

The `access_key` provides authentication, and {`{this.params.address}}` allows dynamic querying based on the provided address parameter.

</dd>

3. In the **Default Marker** property of Map Widget, add the following code to transform the geocoded data into a format suitable for the map:

<dd>


```api
{{Api1.data.data.map((item) => {return {lat: item.latitude, long: item.longitude}})}}
```

</dd>

4. On Button's **onClick** or Table's **onRowSelected**, use the following code to trigger the forward geocoding API with a address:

<dd>

```js
{{Api1.run({"address": Table1.selectedRow.address})}}  

// Sample address: 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA
```

</dd>



### With coordinates (Reverse geocoding)

If you only have coordinates and want to obtain the corresponding address, use the reverse geocoding.

1. Generate an API key by signing up for [geocoding service](https://developers.google.com/maps/documentation/geocoding/requests-geocoding). 

2. Create a REST API to enable reverse geocoding, like:

<dd>


```api
http://api.positionstack.com/v1/reverse?access_key=d23456&query={{this.params.lat}},{{this.params.long}}
```

This API performs reverse geocoding to retrieve location information based on provided latitude and longitude parameters. The `access_key` serves as an authentication key for accessing the geocoding service.


</dd>

3. Enable **Create new marker** property. 

4. Enable *JS* and configure the **OnCreateMarker** and **onMarkerClick** property to execute the reverse geocoding:

<dd>


```js
{{Api1.run({"lat": Map1.selectedMarker.lat, "long": Map1.selectedMarker.long})}}
```

</dd>

5. Drop a Text widget to display the reverse geocoded address information, like:

<dd>


```js
Continent: {{Api1.data.data[0]?.continent}}
Country: {{Api1.data.data[0].country  || ""}}
Region: {{Api1.data.data[0].region || ""}}
Locality: {{Api1.data.data[0].locality || ""}}
```

</dd>


With this setup, whenever you create a new marker or click on an existing marker, the Text widget dynamically displays address information.




## Implement navigation 

This section shows how users can generate routes between two or multiple locations using Google Maps. The navigation can be accomplished using Google Maps URLs, as there is no built-in navigation feature.

1. Create a function for creating paths between multiple locations, like:

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

 Above function uses Appsmith's `geolocation` to get the current position, creates a Google Maps URL for navigation to a selected location in `Table1`, and opens the route in a new window when executed. Similarly, you can create a route using multiple existing or new markers.



</dd>

2. Drop a Button widget and configure its **OnClick** event to trigger the JS function.





