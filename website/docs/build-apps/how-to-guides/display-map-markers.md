
# Display Map Markers


## Display markers

You can display markers using multiple methods, such as:

### From query data

To display markers from query data, use the `map()` function to transform it before passing it to the widget, like:


```js
{{fetchUserData.data.map(loc  => {
    return {
        lat: parseFloat(loc.latitude),
        long: parseFloat(loc.longitude),
        title: loc.name
    }
})}}
```

###  From Table selected row

To display markers based on the selected row in the Table, add the following code in the **Default markers** property:


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


### Using live location

To display real-time marker on the map, use Appsmith's `geolocation` function.

1. Add the following code in the **Default Marker** property to set a marker at your current latitude and longitude coordinates:

<dd>

```js
[{
"lat":{{appsmith.geolocation.currentPosition.coords.latitude || ""}}, 
"long":{{appsmith.geolocation.currentPosition.coords.longitude || ""}}
}]
```

</dd>

2. To fetch the current location, use `{{appsmith.geolocation.watchPosition()}}` action triggered by widget's **Event**.



### Using address (Forward geocoding)

If you have only addresses and want to show markers at the locations, you can use geocoding to convert addresses into geographical coordinates for mapping.

1. Generate an API key by signing up for [geocoding service](https://developers.google.com/maps/documentation/geocoding/requests-geocoding). 

2. Create a REST API and add the following URL:

<dd>


```api
http://api.positionstack.com/v1/forward?access_key=d6234&query={{this.params.address}}
```

</dd>

3. In the **Default Marker** property of Map Widget, add the following code to transform the geocoded data into a format suitable for the map:

<dd>


```api
{{Api1.data.data.map((item) => {return {lat: item.latitude, long: item.longitude}})}}
```

</dd>

4. On Button's **onClick** or Table **onRowSelected**, use the following code to trigger the forward geocoding API with a sample address:

<dd>

```js
//static
{{Api1.run({"address": "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"})}}

//dynamic
{{Api1.run({"address": Table1.selectedRow.address})}}
```

</dd>



### Using coordinates (Reverse geocoding)

If you only have coordinates and want to obtain the corresponding address, use the reverse geocoding.

1. Generate an API key by signing up for [geocoding service](https://developers.google.com/maps/documentation/geocoding/requests-geocoding). 

2. Create a REST API and add the following URL:

<dd>


```api
http://api.positionstack.com/v1/reverse?access_key=d23456&query={{this.params.lat}},{{this.params.long}}
```

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

This section shows how users can generate routes between two or multiple locations using Google Maps. There is no built-in navigation support, you can achieve navigation by leveraging Google Maps URLs to create a path. 

1. Create a JSObject 





### Directions from live location


### Directions from new marker

1. 

```js
{{navigateTo('www.google.com/maps/dir/' + Map1.selectedMarker.lat + ',' + Map1.selectedMarker.long + '/' + Table1.selectedRow.latitude + ',' + Table1.selectedRow.longitude, {},'NEW_WINDOW')}}
```
