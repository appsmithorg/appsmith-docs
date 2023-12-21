---
description: >-
  getCurrentPosition() reference
toc_max_heading_level: 2
---

# getCurrentPosition()

`getCurrentPosition()` gets the current position of a device.



## Signature

```javascript
geolocation.getCurrentPosition(success, error, options);
```

### Parameters

#### success

A callback function that takes a GeolocationPosition object as its sole input parameter.

#### error

An optional callback function that takes a GeolocationPositionError object as its sole input parameter.

#### options
An optional object including the following parameters:
- maximumAge: A positive long value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. 
- timeout: A positive long value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. 
- enableHighAccuracy: A boolean value that indicates the application would like to receive the best possible results.

### Example
```jsx
navigator.geolocation.getCurrentPosition(success, error, options);
```

## See also
* [watchGeolocation()](/reference/appsmith-framework/widget-actions/watch-geolocation)
* [stopWatchGeolocation()](/reference/appsmith-framework/widget-actions/stop-watching-geolocation)