---
sidebar_position: 1

description: >-
  In this guide, you'll learn how to implement a custom Auth flow using an API with JWTs.
---

# Custom Authentication

In this guide, you'll learn how to build a custom login flow that uses an API to verify user credentials and log them in to your secure application via JSON Web Token (JWT).

<VideoEmbed host="youtube" videoId="5oPcF9dXZyU" title="How to Implement Custom Login/Authentication in Appsmith" caption="How to Implement Custom Login/Authentication in Appsmith"/>

## Build login form

For this example, assume that you have a page called "**MainPage**" in your application that you would like to secure with a login flow.

Start by creating a new login page called "**LoginPage**" in your application. You'll need a form that contains [Input widgets](/reference/widgets/input) for both a username (named "**UsernameInput**" in this guide) and a password ("**PasswordInput**"). You'll need at least one [Button](/reference/widgets/button) within the form to handle submitting the user data.

When you have created the form, it's time to connect it to your login API with a query (named "**login_api**" here). Create a [datasource](/core-concepts/connecting-to-data-sources/authentication#creating-an-authenticated-api-datasource) and [set up an API query](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis) with the your authentication endpoint URI, and place the user data from the Input widgets into the appropriate fields of the query body. Accessing your Input widgets should look something like:

```javascript
// identifier
{{UsernameInput.text}}
// password
{{PasswordInput.text}}
```

As an example, a successful response may resemble:

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

## Set up authentication flow

Back on the application canvas, set up the login form's button to run the **login_api** query via the button's **onClick** property. This flow should:

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

## Control access to application

For now, it's time to configure your **MainPage** to allow access to logged-in users and redirect unauthorized ones.

1. On **MainPage**, place the content of your application into a [Tabs widget](/reference/widgets/tabs). It should have at least two tabs: one for your secure content (called "**authorized**"), and one to be used as a redirect for unauthorized users ("**unauthorized**").
2. In the Tabs widget's **Default Tabs" property, write the code:
    ```javascript
    {{appsmith.store.jwt? "authorized": "unauthorized"}}
    ```
3. In the **unauthorized** tab, add a message to tell the user that they must log in, and add a "Login" button that uses `navigateTo()` to send the user to the **LoginPage**.
4. Toggle off the **Show Tabs** property of the Tabs widget to hide the tabs at the top of the pages and prevent users from navigating between them on their own.

After these steps, any user who isn't logged in with a valid `jwt` token can only see the **unauthorized** tab, which redirects them back to the **LoginPage**. Users with valid tokens are taken straight to your **authorized** tab.

## Further reading

1. [Authentication for self-hosted instances](/getting-started/setup/instance-configuration/authentication)
2. [Embed Appsmith](/advanced-concepts/embed-appsmith-into-existing-application)
3. [Security](/product/security)

### Authentication via SSO

It's possible to use third-party OAuth services to authenticate users for your app via SSO with like Google, GitHub, Twitter, and more. To do this, you'll need to connect with a service that integrates with your desired OAuth provider. You may like these video guides:

* [Custom Google authentication with Xano](https://www.youtube.com/watch?v=n3XSAA7q--I)
* [Custom Google authentication with Supabase](https://www.youtube.com/watch?v=mfhHUDNCkoQ)