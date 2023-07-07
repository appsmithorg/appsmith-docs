---
sidebar_position: 1
description: >-
  This is a context object that provides information around the current state of
  the application
---

# Appsmith Object

The Appsmith object is a global object that provides access to information and functionalities within an application.
## Properties

The Appsmith object contains the following properties:

```javascript
{
   store: object,
   URL: object,
   user: object,
   geolocation: object,
   mode: enum
}
```

### store

This object contains the key-value pairs of the local storage of the app. You can add or update the values to the store using the [storeValue function](widget-actions/store-value.md). Conversely, you can access the values from the store using their corresponding keys as shown below:

```javascript
{{ appsmith.store.<key> }}
```

### URL

This object contains all the values associated with the current URL that the user is on. To access these values from the URL, you can use the following code snippet:

```javascript
{{ appsmith.URL }}
```
URL object has the following attributes:

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

#### host `string`

  <dd>

  The host property of the URL is a string that consists of the hostname and, the port of the URL (if available). To access the host value, you can use the following code snippet:

  ```js
  {{appsmith.URL.host}}
  ```
  Example: 

  ```js
  "app.appsmith.com:111"
  ```
  </dd>

#### hostName `string`

<dd>

The hostname property of the URL is a string that represents the **domain of the URL**. In simpler terms, hostname is the [host](/reference/appsmith-framework/context-object#host) name (without the port number). To access the hostname, you can use the following code snippet:

```js
{{appsmith.URL.host}}
```

Example:
```js
//{{appsmith.URL.hostname}}
hostName:"app.appsmith.com"
```
</dd>

#### fullPath `string`

<dd>

A full-path URL specifies the exact location of a resource, such as a page, app, file, or any other specific entity. A full-path URL includes the following components:

* Protocol
* Subdomain
* Domain Name
* Top Level Domain (TLD)
* Path
* Parameters

You can access the fullPath using the following snippet:

```js
{{appsmith.URL.fullPath}}
```

Example:
```js
//{{appsmith.URL.fullPath}}
fullPath:"https://app.appsmith.com/app/demo-app/page1-6324031aa"
```

In the preceding example, ```6324031aa``` represents the **id** of the page named `page1`. The current page slug in the URL is created by combining ```$pageName-$pageId```. Each page has a unique page id that is assigned to it.

</dd>


#### pathname `string`

<dd>

The pathname is a string that represents the path component of the URL. It consists of a collection of path segments, with each segment prefixed by the `/` character. If the URL does not have any path segments, the value of the pathname property will be an empty string. You can access the pathname using the following snippet:

```js
{{appsmith.URL.pathname}}
```

Example:
```js
pathname:"/app/demo-app/page1-6324031aa"
```
</dd>

#### port `string`

<dd>

The port property of the URL is a string that contains the port number of the URL. You can access the port using the following snippet:

```js
{{appsmith.URL.port}}
```

Example:
```js
//{{appsmith.URL.port}}
port:"3000"
```
</dd>

#### protocol `string`

<dd>

The protocol property of the URL is a string that represents the protocol scheme of the URL, including the `:`. The protocol identification and the resource name are separated by a colon and two forward slashes (`://`). To access the protocol value, use the following snippet:

```js
{{appsmith.URL.protocol}}
```

Example:
```js
//{{appsmith.URL.protocol}}
protocol:"https:"
```

</dd>

#### hash `string`

<dd>

The value of the `appsmith.URL.hash` property is a string that represents the fragment identifier of the URL, including the `#` character. The fragment identifier is the portion of the URL that appears after the hashtag symbol (#), which is the hash property of the URL interface.

```js
{{appsmith.URL.hash}}
```

Example:
```js
//{{appsmith.URL.hash}}
hash:"#n912xhego"
```
</dd>

#### queryParams `object`

<dd>

Query parameters are predefined parameters that define specific content or actions based on the data being delivered. In a URL, query parameters are appended at the end of the URL with a `?` as a separator. You can access the value of `queryParams` using the following snippet:

```js
{{appsmith.URL.queryParams}}
```

Example:
```js
//{{appsmith.URL.queryParams}}
queryParams:"?name=value&variable=value"
```

The `queryParams` object can be used to read data sent from other pages to this page using the [navigateTo function](widget-actions/navigate-to).

</dd>

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

#### roles `object`

<dd>

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

</dd>

#### groups `object`

<dd>

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

*Example:* consider a scenario where you are hiding a Button widget by adding the following code to the **Visible** property of the button -

```javascript
{{appsmith.user.groups.includes("managers")}}
```
In the above example, the visibility of the button is determined by a group. Only users who have been added to the "managers" group can see this button.

</dd>

### Geolocation

This object contains functions that allow you to retrieve the current user's location and the coordinates received from the user's device using the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

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

#### getCurrentPosition `function`

<dd>

Signature:

```javascript
(
 onSuccessCallback?,
 onErrorCallback?,
 options?: { maximumAge?: number, timeout?: number, enableHighAccuracy?: boolean } 
) -> void
```

Similar to the original browser API, the `getCurrentPosition` function retrieves the current user's location. However, unlike the original browser API, you don't need to pass a success callback function. On success, the location information is automatically stored at `appsmith.geolocation.currentPosition.coords`. If you provide an `onSuccessCallback` function, it is called with the received location information as a parameter.

</dd>

#### watchPosition `function`

<dd>

Signature:

```javascript
(
  onSuccessCallback?,
  onErrorCallback?,
  options?: { maximumAge?: number, timeout?: number, enableHighAccuracy?: boolean } 
) -> void
```

Similar to the original browser API, the `getCurrentPosition` retrieves periodic updates about the current geographic location of the device, with the difference being that you don't need to pass a success callback explicitly. On success, the location is automatically stored at `appsmith.geolocation.currentPosition.coords` and `appsmith.geolocation.currentPosition.timestamp` is also updated to indicate the time of the last position update. If you provide callbacks, they are automatically executed when the location has changed. Unlike the browser API, no `watchId` is returned, as the platform only allows for a single `watchPosition` at a time.

</dd>

#### clearWatch `function`

<dd>

Signature: `() -> Promise`

It is similar to the original browser API, with the difference being that you don't have to explicitly pass the `watchId`. Instead, if a watch is currently active, you must clear it before starting a new one.

</dd>

### Mode

This field is an enum that contains whether the app is currently running in view mode or edit mode. It takes the values VIEW|EDIT
