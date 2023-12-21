---
description: >-
  clearWatchGeolocation() reference
toc_max_heading_level: 2
---

# clearWatchGeolocation()

`clearWatchGeolocation()` unregister location/error monitoring handlers previously installed using Geolocation.watchPosition().


## Signature

```javascript
clearWatch(id)
```

### Parameters

#### id

The ID number returned by the Geolocation.watchPosition() method when installing the handler you wish to remove.

### Example
```jsx
navigator.geolocation.clearWatch(id)
```

## See also
* [getGeolocation()](/reference/appsmith-framework/widget-actions/get-geolocation)
* [watchGeolocation()](/reference/appsmith-framework/widget-actions/watch-geolocation)