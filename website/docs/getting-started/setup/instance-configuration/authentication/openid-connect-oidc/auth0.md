---
sidebar_position: 4.1
---
# Auth0

[Auth0](https://auth0.com/) is an authentication and authorization as a service provider. To configure OpenID Connect(OIDC) within Appsmith using Auth0 as an OIDC provider, follow these steps:

:::info
OpenID Connect is available **only in the** [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances**, and only the **Superuser** of your **Appsmith Instance** can set up **OIDC**.
:::

### Create application

* Log in to your [Auth0](https://auth0.com/) account and go to **Applications**. (Please create an account if you don’t have one on [Auth0](https://auth0.com/)).

![Navigate to Applications >> Applications >> click Create Application](/img/Auth0-NewApplication-SAML-Authentication-singlewebpage.png)

* Click **+Create Application** and pick **Regular Web Applications** from the given options. The default name of the application is **`My App`**. You can change it as per your requirements.

![](/img/Auth0-NewApplication-OIDC-RegularWebApp.png)

* Open the newly created Auth0 App, go to the settings tab and -
  * Add the Redirect URL (Copied from the [OIDC window in Appsmith’s Admin Settings](./#capture-redirect-url-for-sso-configuration)) in the following fields -

![Redirect URL available at Appsmith >> Profile >> Admin Settings >> Authentication >> OIDC](/img/Appsmith-Admin-Settings-Authentication-OIDC-RedirectURL.png)

* Application Login URL
* Allowed Callback URLs

![Add Appsmith Redirect URL to fields- Application Login URI & Allowed Callback URLs](/img/Auth0-Appsmith-RedirectURL.png)

### Configure Auth0 fields in Appsmith

To continue with the OIDC setup on Appsmith, navigate to Auth0 configurations and perform the following actions:

* Copy the **Client ID**, and **Client Secret** and paste them into the OIDC configurations in Appsmith.

![Add Client ID and Client Secret to the OIDC config on Appsmith](</img/Auth0-ClientId-Client_Secret.png>)

* Go to **Advance Settings** and open the endpoints tab. Copy the required **OAuth URLs** and add them to your OIDC configurations. Add all the URLs copied from Auth0 to Appsmith.
  * Configurations at Auth0

![Auth0 OIDC Configurations](/img/Auth0-OIDC-Config-Setup.png)

* Configuration at Appsmith

![Appsmith OIDC Configurations](/img/Appsmith-Admin-Settings-Authentication-OIDC-Setup.png)

> `RS256` is the default Token Signing Algorithm used by Appsmith and most identity providers. If you have a custom setup, you can choose from one of the supported algorithms under the Advanced section of the Appsmith OIDC setup page. Please note, verifying tokens signed with the `HS256` algorithm isn't supported.

### Configuring scopes for Auth0

The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details (after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. Just below the **JSON Web Key Set,** you’ll see the **Scope** field:

![Configure one or more scopes at Appsmith](/img/as_oidc_offline.png)

#### What does Appsmith need as part of Scopes?

Appsmith needs **openid** and **email** as mandatory scopes. It's recommended to use the **offline_access** scope to avoid errors related to expired access tokens and excessive re-login requests.

:::info
Enabling the `offline_access` scope enables your app to receive refresh tokens that extend the duration that your users have access to their resources. To read more, see the [Auth0 documentation](https://auth0.com/docs/secure/tokens/refresh-tokens).
:::

You can add more scopes if you wish, provided that they're available via Auth0.

#### Auth0 scope

Auth0 provides standard claims: openId, profile, and email as part of the authorization action. If you want to access [additional user attributes, you’ll have to configure them on Auth0](https://auth0.com/docs/get-started/apis/scopes/openid-connect-scopes) and add them to Appsmith as part of the Scope field.

### Configuring username attributes for Auth0

The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that you consider for logging.

![Configure Username Attribute at Appsmith](/img/Appsmith-UsernameAttribute-Field.png)

#### What does Appsmith need as a username attribute?

Appsmith considers **email address** as **username**. Please ensure that you have added it as an attribute in the Username Attribute field. Please provide the **email** as the attribute name for configuring the username attribute for Auth0.

### Complete OIDC setup

* Save the changes and restart your application by clicking **SAVE & RESTART** button.

![Complete the setup by clicking the "SAVE & RESTART" button](/img/Appsmith-OIDC-Setup-Complete.png)

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on the Login Screen](/img/Appsmith-SSO-OIDC-Available.png)
