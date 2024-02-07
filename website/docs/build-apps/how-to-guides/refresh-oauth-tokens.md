# Refresh OAuth Tokens

This guide shows how to refresh OAuth tokens, ensuring continuous and secure access to your applications.


## Set-Up 

The authorization endpoint validates users based on their email and password, allowing entry only to authorized individuals.

To enable secure access and build a reliable connection between Appsmith and the platform, follow these steps to set up the authorization endpoint. 


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/3sTHVS5YLf5WTA05iplD?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create a new REST API(`api_authToken`) from the **Queries** tab.

2. Configure the HTTP request method and URL according to your specific server provider's requirements. 

<dd>

*Example:* 

```js
https://api.example.io/api/user/token-auth/
```


</dd>


3. Create a new JS Object from the JS tab and add a function to refresh the token, like:


<dd>

*Example:* 

Create a function named `verifyAccessToken` checks if the access token is still valid. If it's about to expire, another function, `refreshAccessToken`, automatically fetches a new token in the background. This ensures that users won't face interruptions while using the app, and their access remains secure and up-to-date.



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

4. Create a new API to handle the generation of tokens when an authentication token expires.

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

The configuration may vary based on your provider; in some cases, you might need to incorporate the refresh token directly into the URL

</dd>



5. Run and Publish the JS Module.




## Use JSObject

Once you've created a JSObject, follow these steps to configure and execute APIs that require JWT authorization. 


1. Create a new API inside the app to fetch data using the generated token.


<dd>

*Example:* 

```js
https://api.baserow.io/api/database/rows/table/245748/?user_field_names=true
```

For the authorization header, add:

```js
Key: Authorization 
Value: JWT {{js_manage_tokens.getAccessToken.data}}
```

Configure the query based on your specific endpoint or tool requirements.


</dd>

2. Create a new JavaScript object to execute the authentication code before fetching data, preventing potential errors in case of simultaneous execution on page load. 

<dd>

```js
export default {
	onPageLoad: () => {
		js_manage_tokens.getAccessToken()
			.then(() => getusers_API.run());
}}
```

Set this JSobject to run on page load.



</dd>

3. To display the data, drag a Table widget, enable JS, and bind the data, like:


<dd>

*Example:*

```js
{{getusers_API.data.results}}
```

</dd>


