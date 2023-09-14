---
sidebar_position: 1
description: >-
  This is a context object that provides information around the current state of
  the application
---

# appsmith

The `appsmith` object is a global object that provides access to information and functionalities within an application through objects and utility functions.

## Properties

The Appsmith object contains the following properties:

### store `object`

<dd>

This object lets you access any app-level data or temporary state that is stored on the user's browser. You can add or update data using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) method. You can access saved data by referencing their keys:

```javascript
{{ appsmith.store.KEY_NAME }}
```

</dd>

### URL `object`

<dd>

This object contains all the attributes of the current URL that the user is on. To access these values from the URL, you can use the following code snippet:

```javascript
{{ appsmith.URL }}
```
URL object has the following attributes:

#### host `string`

<dd>

The host property of the URL is a string that consists of the hostname and the URL's port (if available). To access the host value, you can use the following code snippet:

```js
{{appsmith.URL.host}}
```
  
</dd>

#### hostname `string`

<dd>

The hostname property of the URL is a string that represents the URL's domain. In simpler terms, hostname is the [host](/reference/appsmith-framework/context-object#host) name (without the port number). To access the hostname, you can use the following code snippet:

```js
{{appsmith.URL.host}}
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

</dd>

#### pathname `string`

<dd>

The pathname is a string that represents the path component of the URL. It consists of a collection of path segments, with each segment prefixed by the `/` character. If the URL does not have any path segments, the value of the pathname property is an empty string. You can access the pathname using the following snippet:

```js
{{appsmith.URL.pathname}}
```

</dd>


#### port `string`

<dd>

The URL's port property is a string containing the URL's port number. You can access the port using the following snippet:

```js
{{appsmith.URL.port}}
```

</dd>

#### protocol `string`

<dd>

The protocol property of the URL is a string that represents the protocol scheme of the URL, including the `:`. The protocol identification and the resource name are separated by a colon and two forward slashes (`://`). To access the protocol value, use the following snippet:

```js
{{appsmith.URL.protocol}}
```

</dd>

#### hash `string`

<dd>

The value of the `appsmith.URL.hash` property is a string that represents the fragment identifier of the URL, including the `#` character. The fragment identifier is the portion of the URL that appears after the hashtag symbol (#), which is the hash property of the URL interface.

```js
{{appsmith.URL.hash}}
```

</dd>

#### queryParams `object`

<dd>

The query parameters are a component of a URL that allows for passing data to a web server or application. In a URL, query parameters are appended at the end of the URL with a `?` as a separator. You can access the value of `queryParams` using the following snippet:

```js
{{appsmith.URL.queryParams}}
```

The `queryParams` object can be used to [share data across pages](/advanced-concepts/sharing-data-across-pages#sharing-data-via-query-params).

</dd>
</dd>

### user `object`

<dd>

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

:::info
This property is only available in Appsmith's [**Business Edition**](https://www.appsmith.com/pricing).
:::

<dd>

This object contains an array of strings of the roles assigned to the currently authenticated user. You can access the value of roles using the snippet given below:

```js
appsmith.user.roles
```
It returns an array of all the roles in your instance. For example:

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

*Example:* consider a scenario where you are hiding a Button widget by adding the following code to the **Visible** property of the button -

```javascript
{{appsmith.user.roles.includes("backend engineers")}}
```
In the above example, the visibility of the button is determined by a role. Only users who have been assigned the "backend engineer" role can see this button.

</dd>

#### groups `object`


:::info
This property is only available in Appsmith's [**Business Edition**](https://www.appsmith.com/pricing).
:::

<dd>

This object contains an array of strings of the groups assigned to the currently authenticated user. You can access the value of groups using the snippet given below:

```js
appsmith.user.groups
```
It returns an array of all the groups in your instance. For example:

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

#### idToken `object`

<dd>

An ID token serves as a verified confirmation of a user's identity and includes essential information such as their name, picture, email address etc. According to the OpenID Connect (OIDC) specifications, when a user successfully logs in, Appsmith receives an ID token.

Appsmith provides the `idToken` parameter on the client side, allowing you to incorporate it into various operations like JavaScript functions, APIs, or queries as needed. You can read the value of an ID token in your APIs/Queries by using the mustache syntax `{{}}` as shown below:

```js
{{appsmith.user.idToken}}
```
If you have defined custom scopes in your identity provider, the information associated with those scopes can be accessed within the Identity token.

</dd>
</dd>

### theme `object`

<dd>

This object contains the details of the theme properties applied to the application. You can use this object to set certain properties in widgets to be aligned with the app theme or to write custom logic.

```js
{{appsmith.theme}}
```

The theme object has the following attributes:

#### colors `object`

<dd>

This object contains the color properties of the application. It has the following properties:

#### primaryColor `string`

It refers to the app's primary color set in the theme section of the app settings. To access this value, you can use the following code snippet:

```js
{{appsmith.theme.colors.primaryColor}}
```

#### backgroundColor `string`



The `backgroundColor` property refers to the background color set in the theme section of the app settings. To access the value of the background color, you can use the following code snippet:


```js
{{appsmith.theme.colors.backgroundColor}}
```

</dd>

#### borderRadius `object`

<dd>

This object contains the border properties that enable you to control the curvature or roundness of the corners of the widgets in the application.

#### appBorderRadius `string`


It refers to the border radius set in the theme section of the app settings. To access its value, you can use the following code snippet:

```js
{{appsmith.theme.borderRadius.appBorderRadius}}
```
</dd>

#### boxShadow `object`

<dd>

This object allows you to add a shadow effect to the widgets in your application.

#### appBoxShadow `string`



It refers to the box shadow set in the theme section of the app settings. You can access the value of `appBoxShadow` using the following snippet: 

```js
{{appsmith.theme.boxShadow.appBoxShadow}}
```

</dd>

#### fontFamily `object`

<dd>

This object contains the font properties of your application.

#### appFont `string`


It refers to the font family set for the app in the theme section for app settings. You can access the value of `appFont` using the following snippet: 

```js
{{appsmith.theme.fontFamily.appFont}}
```

</dd>
</dd>

### geolocation `object`

<dd>

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

#### geolocation.getCurrentPosition()

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

#### geolocation.watchPosition()

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

#### geolocation.clearWatch()

<dd>

Signature: `() -> Promise`

It is similar to the original browser API, with the difference being that you don't have to explicitly pass the `watchId`. Instead, if a watch is currently active, you must clear it before starting a new one.

</dd>
</dd>

### mode `enum`

<dd>

This field is an enum that contains whether the app runs in view or edit mode. It takes the values `VIEW` or `EDIT`.

</dd>
