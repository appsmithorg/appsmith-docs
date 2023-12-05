---
sidebar_position: 1

description: In this guide, you'll learn how to implement a custom Auth flow using an API with JWTs.
---

# Build Custom Authentication

You can build custom authentication and integrate your Appsmith applications with any authentication provider. Using third-party services, you can create sign-up and sign-in flows that meet your application's needs. This guide walks you through the process of establishing a secure connection between Appsmith and your authentication API. This ensures that user credentials and access to your applications remain protected.

## Prerequisites
- A configured authentication service that you will integrate with Appsmith.
- An Appsmith app with a home page.

## Set up signup flow
To configure a signup flow for custom authentication, follow these steps:
1. Drop a Form widget to your app and design a signup screen by adding the Input widgets for email and password to the Form.
2. Import the signup curl command from the configured API. Let's rename this to `sign_up`. Save it as a datasource to reuse the credentials.
3. In the `sign_up` API's body, bind the values entered in the form using the following code where `username` and `password` are the input widgets:
   
   ```jsx
      {
      "email": {{username.text}},
      "password": {{password.text}}
      }
   ```
4. In the Form's property pane, set the **onClick** event of the **Submit** button to invoke the `sign_up` API.
5. Set the **On success** callback of the **Submit** button to save the user details using the [storeValue](/reference/appsmith-framework/widget-actions/store-value) method and navigate to the App's home page.
   
   Example:
   ```jsx
      export default {
      continue: async () => {
        if(!appsmith.URL.fullPath.includes('#access_token')) return;
          appsmith.URL.fullPath.split('#')[1].split('&').forEach(i => {
          const [key, value] = i.split("=");
          storeValue(key,value);
        });
        navigateTo('Home')
      }
   ```
## Set up sign-in flow
To set up the sign-in flow, follow these steps:
1. Drop a Form widget to your app and design a login screen by adding the Input widgets for email and password to the Form.
2. Create a new API from the datasource created in step 5 of [Set up signup flow](#set-up-signup-flow). This datasource contains all the user details along with the access token. Let's rename this to `sign_in` and set the request type to **POST**. 
3. Copy the **USER LOGIN** end point from the configured authentication service and paste it in the sign_in API endpoint.
   
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
5. Create a JS object to save the user details using the [storeValue](/reference/appsmith-framework/widget-actions/store-value) method and navigate to the app's home page.

   Example:
   ```jsx
      signin: () =>{
      return sign_in.run()
        .then(data => {
        delete data.user;
        Object.keys(data).forEach(i => {
          storeValue(i, data[i]);
        })
      })
        .then(() => navigateTo('Home'));
    },
   ```
6. In the Form's property pane, set the **onClick** event of the **Submit** button to invoke the `sign_in` API.
7. To test, enter a valid email address and password and then click **Submit**.

## Refresh access tokens
Authentication with refresh tokens ensures a seamless user experience by allowing a user to obtain new access tokens without reauthenticating. You can do this by using a long-lived refresh token to obtain updated access tokens, even after the original access token expires. To do this, follow these steps:
1. Create a new API endpoint to call the token refresh endpoint provided by your authentication service. For OAuth services, you must send the refresh token to receive a new access token.
2. Create a JS object to check the token expiration and attempt to refresh it. To ensure token refresh happens seamlessly, you can invoke the function at page load before making an API call that requires authentication.

## Log out users
Providing your users with the ability to log out of your app when they're finished can help increase the security of your data.

In the previous steps, you used the access token stored in the Appsmith store in a query that shows whether the user is authenticated. To remove their ability to be authenticated and see secure data, you should clear their access token from the Appsmith store so that they need to log in again if they want to get a new one.

To clear that value from the store, set it to `undefined`. Then, redirect them to the **LoginPage** away from your secure data.

Example:

```javascript
// In a Button widget or other custom workflow
{{ 
  (() => {
    storeValue('#access_token', undefined);
    navigateTo("LoginPage");
  })()
}}
```

After clicking your button to sign out, they're brought to the **LoginPage**, where they must log in again to see your App's home page.

## See also
* [Custom Google authentication with Xano](https://www.youtube.com/watch?v=n3XSAA7q--I)
* [Custom Google authentication with Supabase](https://www.youtube.com/watch?v=mfhHUDNCkoQ)