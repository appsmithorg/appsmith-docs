# Refresh OAuth Tokens

This guide provides step-by-step instructions on how to refresh OAuth tokens, ensuring uninterrupted and secure access to applications by extending their validity


## Get access tokens

To enable secure access and build a reliable connection between Appsmith and the platform, follow these steps to set up the authorization endpoint. 


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/IPm51uBfKTqG4QOPczHu?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create a new REST API(`api_authToken`) from the **Queries** tab.

2. Configure the HTTP request method and URL according to your specific server provider's requirements. The authorization endpoint validates users based on their email and password, allowing entry only to authorized individuals.

<dd>

*Example:* 

```js
https://api.example.io/api/user/token-auth/
```



</dd>


3. Create a new JS Object from the JS tab and create a function to generate an access token.


<dd>

```js
export default {
  // Generate a new access token by calling the authorization API
  async generateAccessToken() {
    await api_authToken.run();
    const generatedToken = api_authToken.data;
    if (generatedToken) {
      this.storeToken(
        generatedToken.access_token,
        generatedToken.refresh_token,
      );
    }
  },
}
```

</dd>
 
4. Create a new function to store the access token, refresh token, and expiry in the Appsmith store.

<dd>

```js
 storeToken(accessToken, refreshToken) {
    storeValue("authAccessToken", accessToken);
    if (refreshToken) {
      storeValue("authRefreshToken", refreshToken);
    }
    storeValue("authAccessTokenExp", this.getTokenExpiry(accessToken));
  },
   getTokenExpiry(token) {
    try {
      return JSON.parse(atob(token.split(".")[1])).exp * 1000;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  },
  ```

</dd>

5. Create a function to verify if the access token has expired.
  
<dd>

```js
verifyAccessTokenExpired() {
    return (
      new Date().getTime() >
      new Date(appsmith.store.authAccessTokenExp).getTime()
    );
  },
```

</dd>


6. Add a function to refresh the access token when expires by calling the API.

<dd>

```js
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
```

</dd>

7. Add a function to get the access token, refresh it if needed, and return it from the Appsmith store
 
 <dd>

```js
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
    //   return the access token from Appsmith store
      return appsmith.store.authAccessToken;
    },
  };
```

 </dd>


  


8. Create a new API (`api_refreshAuthToken`) to handle the generation of tokens when an authentication token expires.

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

The configuration may vary based on your provider.

</dd>






## Manage Access Tokens

Once you've created a JS Object, follow these steps to configure and execute APIs that require JWT authorization. 

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/iCbYJxZDVg1YfOgJs8cp?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>




1. Create a new API inside the app to fetch data using the generated token. Configure the query based on your specific endpoint or tool requirements


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



</dd>

2. Set the `getAccessToken` function to run on page load.


43. To display the data, drag a Table widget, enable JS, and bind the data, like:


<dd>

*Example:*

```js
{{getusers_API.data.results}}
```

</dd>


