
# Refresh access token

To keep your access uninterrupted and secure across all apps, follow these steps to refresh OAuth tokens and extend your authentication:

1. Create a query module to call the token refresh endpoint provided by your authentication service. For OAuth services, ensure that you add the refresh token in the request payload to receive a new access token.

<dd>

*Example:* 

```api
https://api.example.io/api/user/token-auth/
```

</dd>

2. Create a new JS module to refresh the token:

<dd>

  *Example:*

```jsx
export default {
    refreshAccessToken: () => {
        // Retrieving the refresh token from the appsmith store
        const refreshToken = appsmith.store.refreshtoken;

        // Checking if a refresh token exists
        if (refreshToken) {
            // Executing the refresh API with the retrieved refresh token
            return refreshAPI.run({ refreshtoken: refreshToken })
                .then(newTokens => {
                    // Updating the access token in the appsmith store
                    storeValue('accesstoken', newTokens.accesstoken);

                    // Checking if a new refresh token is provided and updating it
                    if (newTokens.refreshtoken) {
                        storeValue('refreshtoken', newTokens.refresh_token);
                    }
                })
                .catch(error => {
                    console.log('Error refreshing token:', error);
                });
        }
    }
};
```

</dd>

3. Create a new query module to handle the generation of tokens when an authentication token expires.

<dd>

*Example:*

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

4. Publish the package.


Now you can use the JS module within your app to fetch details using query or refresh tokens on page load, ensuring continuous authentication access.









