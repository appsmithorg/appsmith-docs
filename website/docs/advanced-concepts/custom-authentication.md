---
sidebar_position: 1

description: In this guide, you'll learn how to implement a custom Auth flow using an API with JWTs.
---

# Integrate Custom Authentication

This guide walks you through the process of building custom authentication and integrating your Appsmith applications with any authentication provider.

## Prerequisites
- An API endpoint for user signup.
- An API endpoint for user sign-in.
- A configured authentication service or a database with user credentials to integrate with Appsmith.

## Set up sign-in flow
To secure your Appsmith application, you will need to set up a sign-in flow that requires users to authenticate before accessing the app. Follow these steps to create the sign-in flow:
1. Drop a Form widget to your app and design a login screen by adding the Input widgets for username and password.
2. Create a new API from the datasource that contains user details including the access token and rename this to `sign_in`. Set the request type to **POST**. 
3. Copy the sign-in endpoint from your authentication service and paste it in the sign_in API endpoint.
   
   Example:
    ```jsx
    https://bgvmmsvbzfxvjercchhl.supabase.co/auth/v1/token?grant_type=password
    ```
4. In the `sign_in` API's body, bind the values entered in the login Form using the following code where `username` and `password` are the input widgets:
   
   ```jsx
      {
      "email": {{username.text}},
      "password": {{password.text}}
      }
   ```
5. Set the login screen as both the default screen and the home screen. This prevents users from accessing other parts of the app without authentication.

## Store user data
1. Create a JS object to handle sign-in, save the user details using the [storeValue](/reference/appsmith-framework/widget-actions/store-value) and navigate to the home page.

   Example:
   ```jsx
      signin: () =>{
      return sign_in.run()
        .then(data => {
         storeValue(key, user.data[key]);
        })
      })
        .then(() => navigateTo('Home'));
    },
   ```
2. In the Form's property pane, set the **onClick** event of the **Submit** button to invoke the `sign_in` API.
3. On the login screen, add a check to see if the user already has a valid access token. If a valid access token is detected, redirect the user to the home screen using navigateTo.


## Refresh access tokens
Authentication with refresh tokens ensures a seamless user experience by allowing a user to obtain new access tokens without reauthenticating. You can do this by using a long-lived refresh token to obtain updated access tokens, even after the original access token expires. To do this, follow these steps:
1. Create a new API endpoint to call the token refresh endpoint provided by your authentication service. For OAuth services, you must send the refresh token to receive a new access token.
2. Create a JS object to check the token expiration and attempt to refresh it. To ensure token refresh happens seamlessly, you can set the function to run on page load before making an API call that requires authentication.

   Example:

   ```jsx
   export default { 
      refreshAccessToken: () => { 
         const refreshToken = appsmith.store.getValue('refreshtoken'); 
         if (refreshToken) 
         { 
            return refreshAPI.run({ refreshtoken: refreshToken }) .then(newTokens => { storeValue('accesstoken', newTokens.accesstoken);
            if(newTokens.refreshtoken) { 
               storeValue('refreshtoken', newTokens.refresh_token); 
               } 
               }) .catch(error => { console.log('Error refreshing token:', error);
            }); 
         } 
      } 
   };
   ```

## Log out users
Providing your users with the ability to log out of your app when they're finished can help increase the security of your data.

In the previous steps, you used the access token stored in the Appsmith store in a query that shows whether the user is authenticated. To remove their ability to be authenticated and see secure data, you should clear their access token from the Appsmith store so that they need to log in again if they want to get a new one.

To clear that user data from the store, set it to `undefined` by using an action selector on click of sign out and navigate user to the login page.

After clicking your button to sign out, they're brought to the **LoginPage**, where they must log in again to see your App's home page.

## See also
* [Custom Google authentication with Xano](https://www.youtube.com/watch?v=n3XSAA7q--I)
* [Custom Google authentication with Supabase](https://www.youtube.com/watch?v=mfhHUDNCkoQ)
