---
sidebar_position: 1
description: >-
  This is a context object that provides information around the current state of
  the application
---

# Context Object

The Appsmith context object provides information around the current state of the application


<VideoEmbed host="youtube" videoId="5Z65l_PssEQ" title="How to Use the Appsmith Context Object" caption="How to Use the Appsmith Context Object"/>


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

This object contains the key-value pairs of the local storage of the app. Values to the store can be updated using the [storeValue function](widget-actions/store-value.md). Values from the store can be accessed using their key.

```javascript
{{ appsmith.store.key }}
```

### URL

This object contains all the values associated with the current URL that the user is on. The queryParams object of this field can be used to read data sent from other pages to this page using the [navigateTo function](widget-actions/navigate-to).  Values from the URL can be accessed using:
```javascript
{{ appsmith.URL }}
```

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

#### host
The host property of the URL interface is a string that includes the hostname, and then, a ```:```, followed by the port of the URL(if the [port](/reference/appsmith-framework/context-object#port) is available).


Example:
```js
//{{appsmith.URL.host}}
host:"app.appsmith.com:111"
```

#### hostName
The hostname property of the URL is a string that holds the **domain of the URL**. In simple words, hostname is the [host](/reference/appsmith-framework/context-object#host) name (without the port number).


Example:
```js
//{{appsmith.URL.hostname}}
hostName:"app.appsmith.com"
```


#### fullPath
A full-path URL designates an EXACT location (such as a page, app, file, etc.). In addition to the Domain and Top Level Domain(TLD), a full-path URL needs to include the protocol, subdomain (such as "app," "support," etc.), path/destination, and possibly a file extension as well as query parameters. A full-path can include:

* Protocol
* Subdomain
* Domain Name
* Top Level Domain (TLD)
* Path
* Parameters

Example:
```js
//{{appsmith.URL.fullPath}}
fullPath:"https://app.appsmith.com/app/demo-app/page1-6324031aa"
```

:::info
In the preceding example, ```6324031aa``` represents the **id** of the page named ```page1```. The current page slug in the URL is created by combining ```$pageName-$pageId```. Each page has a unique page id that is assigned to it.
:::


#### pathName
It is a string made up of a collection of path segments, each of which has the ```/``` character prefixed to it. The empty string will be the value of the pathname property if the URL has no path segments.

Example:
```js
//{{appsmith.URL.pathname}}
pathName:"/app/demo-app/page1-6324031aa"
```

#### port
The port property of the URL is a string that contains the port number of the URL.

Example:
```js
//{{appsmith.URL.port}}
port:"3000"
```
#### protocol
The protocol property of the URL is a string that represents the protocol scheme of the URL, including the ```:```.

> The resource name and the protocol identification are separated from one another by a colon and two forward slashes.


Example:
```js
//{{appsmith.URL.protocol}}
protocol:"https:"
```

#### hash
The ```appsmith.URL.hash``` value is the string after the hashtag (**including ```#```**). The URL fragment identification is followed by a hash symbol (#), which is the hash property of the URL interface.

Example:
```js
//{{appsmith.URL.hash}}
hash:"#n912xhego"
```

#### queryParams
Query parameters are a predefined set of parameters that define particular content or actions based on the data being delivered. A URL has all the query parameters appended at the end with a ```?``` as a separator.



Example:
```js
//{{appsmith.URL.queryParams}}
queryParams:"?name=value&variable=value"
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

#### roles

:::info
This property is only available in Appsmith's [**Business Edition**](https://www.appsmith.com/pricing).
:::

This object contains an array of strings of the roles assigned to the currently authenticated user.

```javascript

[
  "Instance Administrator Role",
  "Default Role For All Users",
  "Administrator",
  "Custom Role-1",
  "Custom Role-2"
]

```
You can use `appsmith.user.roles` object to [programmatically control the access](/advanced-concepts/granular-access-control) to your application entities.

*Example:* Consider a scenario where you are hiding a Button widget by adding the following code to the **Visible** property of the button -

```javascript
{{appsmith.user.roles.includes("backend engineers")}}
```
In the above example, the visibility of the button is determined by a role. Only users who have been assigned the "backend engineer" role can see this button.

#### groups

:::info
This property is only available in Appsmith's [**Business Edition**](https://www.appsmith.com/pricing).
:::

This object contains an array of strings of the groups assigned to the currently authenticated user.

```javascript
[
  "Administrators",
  "Managers",
  "End Users" 
]

```
You can use `appsmith.user.groups` object to [programmatically control the access](/advanced-concepts/granular-access-control) to your application entities.

*Example:* Consider a scenario where you are hiding a Button widget by adding the following code to the **Visible** property of the button -

```javascript
{{appsmith.user.groups.includes("managers")}}
```
In the above example, the visibility of the button is determined by a group. Only users who have been added to the "managers" group can see this button.

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

Almost similar to the original browser API, apart from the fact that you don't need to pass the success callback. On success, the location would automatically be stored at `appsmith.geolocation.currentPosition.coords` with the `appsmith.geolocation.currentPosition.timestamp` updated whenever the position was last updated. The callbacks, if provided, gets executed automatically when the location has changed. No watchId is returned as well as the platform only allow for a single `watchPosition`

**clearWatch**

Signature: `() -> Promise`

Almost similar to the original browser API, apart from the fact that you don't have to pass the watchId. If a watch is active, you must clear it before starting a new one.

### Mode

This field is an enum that contains whether the app is currently running in view mode or edit mode. It takes the values VIEW|EDIT
