
# Display Map Markers


## Add markers 

Follow these steps to configure and display data in the Map widget:

1. Drop a Map widget and configure the **Default markers** property to display the data:


<dd>


To display markers based on the selected row in the Table, add:


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

</dd>

2. Use the **Initial location** property if you want to display the location when the Map is initially displayed.



## Get live location

If you want to display the live location on a map, you can use the **Default Marker** property to set a marker at your current latitude and longitude coordinates. To do this, you can use the following code:

<dd>

```js
[{
"lat":{{appsmith.geolocation.currentPosition.coords.latitude || ""}}, 
"long":{{appsmith.geolocation.currentPosition.coords.longitude || ""}}
}]
```

To fetch the current location, use `{{appsmith.geolocation.watchPosition()""` action triggered by a Button widget's **onClick** event.

</dd>

## Implement navigation

This section shows how users can generate routes between two or multiple locations using Google Maps. There is no built-in navigation support, you can achieve navigation by leveraging Google Maps URLs to create a path. 

1. Create a JSObject 