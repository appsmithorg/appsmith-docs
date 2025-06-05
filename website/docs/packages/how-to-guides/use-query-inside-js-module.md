---
title: Integrate Custom Authentication
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Integrate Custom Authentication</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page shows how to create a custom authentication module using packages, which allows you to reuse the same module across different applications to authenticate users efficiently.



## Prerequisites

- A UI Package that has already been created. For more information, see [UI Modules tutorials](//packages/tutorial/ui-module).
- An authenticated datasource with user sign-in endpoints.



## Configure package

To secure your Appsmith application, you will need to set up a sign-in flow that requires users to authenticate before accessing the app. Follow these steps to create the sign-in flow:



<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/EbrwbFYIQoyrqb738kX8?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>

1. In the UI Module, create the login interface using the following widgets:

<dd>

- **Input Widget** (`emailInput`) – Used to capture the user's email or username.

- **Input Widget** (`passwordInput`) – Used to capture the user's password. Set the input type to password to mask the input.

- **Button Widget** (`loginButton`) – Triggers the login process when clicked. 

- **Text Widget** – Displays the application name. 

- **Image Widget** – Displays the brand logo. 

</dd>


2. Create a new query to authenticate users and retrieve an authentication token:

<dd>

*Example*: 

```js
//POST METHOD
https://example.api.co/auth/v1/token?grant_type=password
```

Body:

```js
{
  "email": {{emailInput.text}},
  "password": {{passwordInput.text}}
}
```

The values for email and password are dynamically taken from the input widgets (`emailInput` and `passwordInput`) inside the module.


</dd>

3. Create a new JS Object inside the UI Module to manage the login logic. This function will call the login API query with the provided email and password, store the authentication token in local storage using storeValue, and navigate to the Home page upon successful authentication.

<dd>

*Example:*

```js
export default {
  async loginUser() {
    if (!emailInput.text || !passwordInput.text) {
      showAlert("Enter both email and password", "error");
      return;
    }

    try {
      const response = await login.run({
        email: emailInput.text,
        password: passwordInput.text
      });

      if (response.token) {
        await storeValue("access_token", response.token);
        // Navigate to the 'Home' page upon successful authentication
        navigateTo("Home");
      } else {
        showAlert("Login failed", "error");
      }
    } catch (e) {
      showAlert("Invalid credentials", "error");
    }
  }
};
```

For any future user actions, use the stored access token to access the relevant API endpoint.  If the token has expired, refresh the access token for the user to proceed further. You can use the [Appsmith Object](/write-code/reference) and [Functions](/reference/appsmith-framework/widget-actions) within the JS module code, which can be executed in the App.


</dd>

4. Set the **onClick** event of the Login button to run the loginUser function defined in the JS Object. 

5. To dynamically change the login UI based on the app using the module, use inputs to pass data from the parent application into the module. This allows each app to control elements like the displayed app name and logo without modifying the module itself.

<dd>

*Example:* Create two inputs, `appName` and `logoUrl`, to reuse the same login module across different applications such as an HR portal or a CRM dashboard.


`appName`: Set the Text widget’s text property to: `{{ this.params.appName }}`

`logoUrl`: Set the Image widget’s source property to: `{{ this.params.logoUrl }}`

</dd>


6. To pass login state or token ID from the module back to the parent app, use outputs. This allows you to expose specific values such as authentication tokens or login status that the parent application can access and respond to.

<dd>

*Example*: Create an output named `token` and pass the token ID received from the login API:

```js
//token
{{ authUtils.loginUser.data.token }}
```

The token can then be accessed in the parent app using `LoginModule1.outputs.token`.


</dd>


7. Publish the package.


8. To integrate custom authentication into your app, open the application and navigate to the UI tab. Drag the login module onto the desired page and configure the appName and logoUrl inputs.

<dd>

Based on your application’s requirements, you can use the token output to store the login state, authorize API requests, or redirect users after successful authentication. To log out a user, call the revoke API to invalidate the access token, use the [clear store()](/reference/appsmith-framework/widget-actions/clear-store) action to remove stored user data, and redirect the user to the `LoginPage`.


</dd>


With this setup, the login module can now securely authenticate users, dynamically adapt to different applications, and expose login state back to the parent app. Once a user logs in successfully, they are automatically navigated to the home page or any other page you specify through input configuration.


If your application uses short-lived access tokens, consider implementing a refresh token strategy to maintain session continuity. For details on when and how to use refresh tokens, see the Refresh Token Handling Guide.










## Refresh access token

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









