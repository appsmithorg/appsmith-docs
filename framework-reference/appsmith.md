---
description: >-
  This is a context object that provides information around the current state of
  the application
---

# Appsmith Context Object

The Appsmith context object provides information around the current state of the application

{% embed url="https://youtu.be/5Z65l_PssEQ" %}

## Properties

The Appsmith context object contains the following properties:

```javascript
{
   store: object,
   URL: object,
   user: object,
   geolocation: object,
   mode: enum
}
```

### Store

This object contains the key-value pairs of the local storage of the application. Values to the store can be updated using the [storeValue function](store-value.md). Values from the store can be accessed using their key.

```javascript
{{ appsmith.store.key }}
```

### URL

This object contains all the values associated with the current URL that the user is on. The queryParams object of this field can be used to read data sent from other pages to this page using the [navigateTo function](navigateto.md).

```javascript
{
  host: string,
  hostName: string,
  fullPath: string,
  pathName: string,
  port: string,
  protocol: string,
  hash: string,
  queryParams: object
}
```

### User

This object contains the data of the currently authenticated user.

```javascript
{
  email: string
  username: string
  name: string
  isEnabled: boolean
  accountNonExpired: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  isAnonymous: boolean
}
```

### Geolocation

This object contains functions to request the current user location and the coordinates received from this request https://developer.mozilla.org/en-US/docs/Web/API/Geolocation\_API .

```javascript
{
 canBeRequested: boolean,
 getCurrentPosition: Function,
 watchPosition: Function,
 clearWatch: Function,
 currentPosition: {
   coords: {
      accuracy: number,
      altitude: number | null,
      altitudeAccuracy: number | null,
      heading: number | null,
      latitude: number,
      longitude: number,
      speed: number | mull,
   },
   timestamp: number,
 }
}
```

**getCurrentPosition**

Signature:

```javascript
(
 onSuccessCallback?,
 onErrorCallback?,
 options?: { maximumAge?: number, timeout?: number, enableHighAccuracy?: boolean } 
) -> void
```

Almost similar to the original browser API, apart from the fact that you don't need to pass the success callback. On success, the location would automatically be stored at `appsmith.geolocation.currentPosition.coords`. If onSuccessCallback is passed, it would be called with the location information received.

**watchPosition**

Signature:

```javascript
(
  onSuccessCallback?,
  onErrorCallback?,
  options?: { maximumAge?: number, timeout?: number, enableHighAccuracy?: boolean } 
) -> void
```

Almost similar to the original browser API, apart from the fact that you don't need to pass the success callback. On success, the location would automatically be stored at `appsmith.geolocation.currentPosition.coords` with the `appsmith.geolocation.currentPosition.timestamp` updated whenever the position was last updated. The callbacks, if provided, will get executed automatically when the location has changed. No watchId is returned as well as the platform will only allow for a single `watchPosition`

**clearWatch**

Signature: `() -> Promise`

Almost similar to the original browser API, apart from the fact that you don't have to pass the watchId. If a watch is active, you must clear it before starting a new one.

### Mode

This field is an enum that contains whether the application is currently running in view mode or edit mode. It takes the values VIEW/EDIT
