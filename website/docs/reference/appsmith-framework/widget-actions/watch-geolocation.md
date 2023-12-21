---
description: >-
  watchGeolocation() reference
toc_max_heading_level: 2
---

# watchGeolocation()

`watchGeolocation()` registers a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.


## Signature

```javascript
geolocation.getCurrentPosition(success, error, options);
```

### Parameters

#### success

A callback function that takes a GeolocationPosition object as its sole input parameter.

#### error

An optional callback function that takes a GeolocationPositionError object as an input parameter.

#### options
An optional object that provides configuration options for the location watch. 

### Example
```jsx
navigator.geolocation.watchPosition(success, error, options)
```

## See also
* [getGeolocation()](/reference/appsmith-framework/widget-actions/get-geolocation)
* [stopWatchGeolocation()](/reference/appsmith-framework/widget-actions/stop-watching-geolocation)