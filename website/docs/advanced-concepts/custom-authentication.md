---
sidebar_position: 1

description: >-
  In this guide, you'll learn how to implement a custom Auth flow using an API with JWTs.
---

# Custom Authentication

In this guide, you’ll learn how to build a custom login flow to secure your application using your own authentication API.

<VideoEmbed host="youtube" videoId="5oPcF9dXZyU" title="How to Implement Custom Login/Authentication in Appsmith" caption="How to Implement Custom Login/Authentication in Appsmith"/>

## Steps to implement

### Setup

For this example, assume that you have a page called "**MainPage**" in your application that you would like to secure with a login flow.

1. Start by creating a new page called "**LoginPage**" in your application.
2. Create a [Form widget](/reference/widgets/form) and add [Input widgets](/reference/widgets/input) for both a username (named "**UsernameInput**" in this guide) and a password ("**PasswordInput**").

You'll need a query to handle communication with your authentication API:

:::info
If you need an endpoint to test your app, you can use Appsmith's sample authentication API with the following credentials:

```
url:          https://strapi-production-6391.up.railway.app/api/auth/local
request type: POST
identifier:   appsmith_user
password:     appsmith_password

```
:::

1. Create a [datasource](/reference/datasources/authenticated-api).
2. Create an [API query](/reference/datasources/rest-api) (named "**login_api**" here) with the your authentication endpoint URI.
3. Place the Input widgets' text into your query body. Accessing the Input widgets should look something like:

  ```javascript
  // JSON in the query body field
  {{
    {
      identifier: UsernameInput.text,
      password: PasswordInput.text
    }
  }}
  ```

On a successful response, your authentication API should return a valid access token. In the example below, the `jwt` key is a token that indicates that the user has been authenticated. A successful response may resemble:

```javascript
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIyNzE1MTU0LCJleHAiOjE2MjUzMDcxNTR9.rqkR0bVR5g0k8awGTYDEQ0vr15H7401zxkTxpWp9Mc4",
  "user": {
    "id": 2,
    "username": "Vihar",
    "email": "vihar@appsmith.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "created_at": "2021-06-03T03:10:37.945Z",
    "updated_at": "2021-06-03T03:10:37.952Z"
  }
}
```

### Authentication flow

Back on the application canvas, set up the login form's button to run the **login_api** query via the button's **onClick** property. Here is how the flow works:

1. Execute the query
2. If the response contains a valid `jwt`, store it in the [Appsmith store](/reference/appsmith-framework/widget-actions/store-value) and then take the user to the **MainPage**
3. Else if there is no valid `jwt`, [show an alert message](/reference/appsmith-framework/widget-actions/show-alert) to tell the user that there was an error.

In code, the button's **onClick** should look like:

```javascript
{{
    login_api.run(() => {
        const jwt = login_api?.data?.jwt;

        if (jwt) {
            storeValue('jwt', jwt);
            navigateTo('MainPage', {});
        } else {
            showAlert('Login failed!', 'error');
        }
    })
}}

```

The `jwt` value that you saved in the Appsmith store is used to prove to your application that the user is recognized, and may be served the main content. Later, it can be used in your main application's queries to identify and grant permissions to the user, e.g. `Authorization: Bearer {{appsmith.store.jwt}}`.

### Control access to application

For now, it's time to configure your **MainPage** to allow access to logged-in users and redirect unauthorized ones.

1. On **MainPage**, place the content of your application into a [Tabs widget](/reference/widgets/tabs). It should have at least two tabs: one for your secure content (called "**authorized**"), and one to be used as a redirect for unauthorized users ("**unauthorized**").
2. In the Tabs widget's **Default Tabs** property, write code to run a query that requires the user to be authenticated. The query should use the `jwt` access token from earlier, referenced with `{{ appsmith.store.jwt }}`. If it's successful, the user can see the "authorized" tab; on error, the user should see the "unauthorized" tab.
  ```javascript
  {{
    SecureQuery.data.status == "200 OK"? "authorized": "unauthorized"
  }}
  ```
3. In the **unauthorized** tab, add a message to tell the user that they must log in, and add a "Login" button that uses `navigateTo()` to send the user to the **LoginPage**.
4. Toggle off the **Show Tabs** property of the Tabs widget to hide the tabs at the top of the pages and prevent users from navigating between them on their own.

After these steps, any user who isn't logged in with a valid `jwt` token can only see the **unauthorized** tab, which redirects them back to the **LoginPage**. Users with valid tokens are taken straight to your **authorized** tab.

Your app is ready for handling user logins.

### Log out users

Providing your users with the ability to log out of your app when they're finished can help increase the security of your data.

In the previous steps, you used the `jwt` token stored in the Appsmith store in a query that shows whether the user is authenticated. To remove their ability to be authenticated and see secure data, you should clear their `jwt` access token from the Appsmith store so that they need to log in again if they want to get a new one.

To clear that value from the store, set it to `undefined`. Then, redirect them to the **LoginPage** away from your secure data.

```javascript
// In a Button widget or other custom workflow
{{ 
  (() => {
    storeValue("jwt", undefined);
    navigateTo("LoginPage");
  })()
}}
```

After clicking your button to sign out, they're brought to the **LoginPage**, where they must log in again to see your **MainPage** content.

## Custom OAuth guides

It's possible to use third-party OAuth services to authenticate users for your app via SSO with like Google, GitHub, Twitter, and more. To do this, you'll need to connect with a service that integrates with your desired OAuth provider. You may like these video guides:

* [Custom Google authentication with Xano](https://www.youtube.com/watch?v=n3XSAA7q--I)
* [Custom Google authentication with Supabase](https://www.youtube.com/watch?v=mfhHUDNCkoQ)

## Further reading

1. [Authentication for self-hosted Appsmith instances](/getting-started/setup/instance-configuration/authentication)