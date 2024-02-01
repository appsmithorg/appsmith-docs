---
title: Reuse JS modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Reuse JS modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A JavaScript module is a reusable code unit that encapsulates specific functionalities, facilitating organized code structure and maintenance. It enables developers to group related variables, functions, or classes, promoting code reusability and separation of concerns.


## Create JS module


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/3sTHVS5YLf5WTA05iplD?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Click the **Create New** button from the top-right corner of your workspace and create a new package.

2. Click **New Module** > **JS Module**.


:::info
The JS module allows you to create queries and JS objects. The Main JS object represents the code for the JS module.
:::



3. Create a datasource within this JS module to pass query data.

<dd>

*Example:* To create a refresh token module, start by establishing a new API endpoint to call the token refresh endpoint provided by your authentication service. For OAuth services, ensure that you add the refresh token in the request payload to receive a new access token.


```js
https://api.example.io/api/user/token-auth/
```


</dd>

:::caution
Passing Query Module data to JS modules is not supported.
:::

4. Configure the Main JS Object / JS Module Code based on your requirements.


<dd>


*Example:* In the JS module, add a function to refresh the token, like:

* Create a function named `verifyAccessToken` checks if the access token is still valid. If it's about to expire, another function, `refreshAccessToken`, automatically fetches a new token in the background. This ensures that users won't face interruptions while using the app, and their access remains secure and up-to-date.

<dd>

```js
export default {
  // Generate a new access token by calling the authorization API
  async generateAccessToken() {
    await api_authToken.run();
    const generatedToken = api_authToken.data;
    if (generatedToken)
      this.storeToken(
        generatedToken.access_token,
        generatedToken.refresh_token,
      );
  },

  // Store the access token, refresh token, and expiry in the Appsmith store
  storeToken(accessToken, refreshToken) {
    storeValue("authAccessToken", accessToken);
    if (refreshToken) {
      storeValue("authRefreshToken", refreshToken);
    }
    storeValue("authAccessTokenExp", this.getTokenExpiry(accessToken));
  },

  // Extract the expiry timestamp from the access token payload
  getTokenExpiry(token) {
    try {
      return JSON.parse(atob(token.split(".")[1])).exp * 1000;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  },

  // Verify if the access token has expired
  verifyAccessTokenExpired() {
    console.log(
      "time left",
      (new Date(appsmith.store.authAccessTokenExp).getTime() -
        new Date().getTime()) /
        (1000 * 60),
      "mins",
    );
    return (
      new Date().getTime() >
      new Date(appsmith.store.authAccessTokenExp).getTime()
    );
  },

  // Refresh the access token when expired by calling the API
  async refreshAccessToken() {
    // call to
    await api_refreshAuthToken.run();
    const refreshToken = api_refreshAuthToken.data;
    if (refreshToken) {
      // update the Appsmith store with the new access and refresh tokens
      console.log("Token: " + refreshToken.access_token);
      this.storeToken(refreshToken.access_token);
    } else {
      console.error("Failed to refresh access token");
    }
  },

  // Get the access token, refresh it if needed, and return from the Appsmith store
  async getAccessToken() {
    // verify if the access token is present in the Appsmith store
    if (appsmith.store.authAccessToken) {
      // verify if the token has expired
      if (this.verifyAccessTokenExpired()) {
        //refresh the access token
        await this.refreshAccessToken();
      }
    } else {
      //generate initial access token with authorization
      await this.generateAccessToken();
    }
    // return the access token from Appsmith store
    return appsmith.store.authAccessToken;
  },
};
```

Configuration may vary depending on the authentication provider or tool you are using.

</dd>

* Create a new API to handle the generation of tokens when an authentication token expires.

<dd>

```js
https://api.example.io/api/user/token-refresh/
``` 

In the API configuration, provide the refresh token from the store in the request body:

```js
{
    "refresh_token":{{appsmith.store.authRefreshToken}}
}
```
</dd>

</dd>

5. Run and Publish the JS Module.




## Use JS Create a new package by clicking on the top-right corner of your workspace.

Module


Once you've created a JS module, follow these steps to access its data in any application:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/dKtIOMZf54RgP5jxnkji?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. In the entity explorer, select the JS module and configure the function settings as needed.

<dd>

*Example:* In function settings, enable the required function to run on page load. This ensures automatic token expiration verification and triggers a refresh when needed

<ZoomImage
  src="/img/funjs2.png" 
  alt=""
  caption=""
/>





</dd>


3. If you have a function that retrieves data, to display the fetched information, connect it to any widget and bind it using mustache syntax `{{}}`.


<dd>

*Example:*

```js
{{JSModule_manage_tokens.getAccessToken.data}}
```

</dd>


4. If you want to trigger a function based on a event, you can bind the JS module function to the event of that widget, like:

<dd>

*Example:*


```js
{{JSModule_manage_tokens.getAccessToken();}}
```

</dd>
