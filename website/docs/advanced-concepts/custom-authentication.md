---
sidebar_position: 1

description: In this guide, you'll learn how to implement a custom Auth flow using an API with JWTs.
---

# Custom Authentication

Custom authentication in Appsmith allows you to create your own sign-up and sign-in flows using third-party services. This page shows you how to set up your authentication API to secure your applications.

<VideoEmbed host="youtube" videoId="5oPcF9dXZyU" title="How to Implement Custom Login/Authentication in Appsmith" caption="How to Implement Custom Login/Authentication in Appsmith"/>

## Prerequisites
- A Supabase account with a project setup.
- An Appsmith app with a home page.

## Set up signup flow

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/woTHhXJIEVhgHBCIDrHG?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

This topic uses Supabase as an example to set up the custom auth flow. To configure settings in your Supabse account, follow these steps:
1. Drop a Form widget to your app and design a signup screen by adding the Input widgets for email and password to the Form.
2. In your Supabase project dashboard, go to **Authentication**, and then click **URL Configuration**.
3. Copy your Appsmith app URL and paste it in **Site URL** and **Redirect URLs**. Save your settings. This allows Supabase to redirect users back to your Appsmith app after authentication.
4. In Supabase, select **API Docs**, and then select **User Management**. Select **Bash** and copy the **USER SIGNUP** curl command.
5. In Appsmith, import the signup curl command. Let's rename this to `sign_up`. Save it as a datasource to reuse the credentials.
6. In the `sign_up` API's body, bind the values entered in the form using the following code where `username` and `password` are the input widgets:
   
   ```jsx
      {
      "email": {{username.text}},
      "password": {{password.text}}
      }
   ```
7. In the Form's property pane, set the **onClick** event of the **Submit** button to invoke the `sign_up` API.
8. Set the **On success** callback of the **Submit** button to save the user details using the storeValue method and navigate to the App's home page.
   
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
2. Create a new API from the datasource created in step 5 of [Set up signup flow](#set-up-signup-flow). This datasource contains all the user details alongwith the access toke. Let's rename this to `sign_in` and set the request type to **POST**. 
3. In Supabase, select **API Docs**, and then select **User Management**. Select **Bash** and copy the **USER LOGIN** end point. Paste it in the sign_in API endpoint.
   
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
5. Create a JS object to save the user details using the storeValue method and navigate to the app's home page.

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

## Custom OAuth guides

It's possible to use third-party OAuth services to authenticate users for your app via SSO with like Google, GitHub, Twitter, and more. To do this, you'll need to connect with a service that integrates with your desired OAuth provider. You may like these video guides:

* [Custom Google authentication with Xano](https://www.youtube.com/watch?v=n3XSAA7q--I)
* [Custom Google authentication with Supabase](https://www.youtube.com/watch?v=mfhHUDNCkoQ)