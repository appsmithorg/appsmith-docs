---
description: >-
  Setup OIDC using Okta
---

# Okta

To configure Appsmith to use [Okta](https://www.okta.com/) as an OIDC provider, follow the steps below:

## Prerequisites

1. In Appsmith, go to **Admin Settings** > **Authentication** and click **Enable** on **OIDC**.

2. Copy the **Redirect URL** from the **OIDC** configuration page to add it later in the Auth0 settings. 

<figure>
  <img src="/img/oidc-configurations-in-appsmith.png" style= {{width:"600px", height:"auto"}} alt="Metadata URL"/>
  <figcaption align = "center"><i>OIDC configurations in Appsmith</i></figcaption>
</figure>

## Create application in Okta

1. Log in to your [Okta](https://www.okta.com/) account and click **Admin** from the top right corner.
2. On the **Get started with Okta** page, click **Add App** for **Use single sign on**.
3. On the **Browse App Integration Catalog** page, click **Create New App**. 
4. A pop-up titled **Create a new app integration** appears. Choose **OIDC - OpenID Connect** as the Sign-in method and select Application type as **Web Application**.
5. On the **New Web App Integration** page, go to the general settings:

  a. Add a name for your app in the **App integration name** field.

  b. Select **Authorization Code** and **Refresh Token** from the options in the **Grant type** section.

  c. Add the Redirect URL in the **Sign-in redirect URIs** field.

  d. Scroll down to the **Assignments** section and pick an option from **Controlled access** configure the Accessibility of this application as required.

  e. Click **Save**.

6. On your new application, go to the **General** tab, and copy the **Client ID** and **Client Secret** to add them later in the OIDC configurations in Appsmith.
7. Open your account dropdown from the navigation bar, and copy your **Okta domain** that is mentioned below your Email. 
8. Add **/.well-known/openid-configuration** at the end of your **Okta domain**, open this modified URL in your browser and copy the following URLs from that page:

  a. **authorization_endpoint**

  b. **token_endpoint**

  c. **userinfo_endpoint**

  d. **jwks_uri**

##  Register Okta in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Open the OIDC configurations in Appsmith (**Admin Settings > Authentication > OIDC**), and follow the steps below:

1. Add the **Client ID** and **Client Secret** copied from the Auth0 application into the respective fields.

2. Add the URLs copied from the `<your-okta-domain>/.well-known/openid-configuration` page into OIDC configurations in Appsmith as per the table below:

| **Auth0 URLs**       |  **OIDC Fields** |
| ----------------------- | --------------------- |
| authorization_endpoint | Authorization URL     |
| token_endpoint         | Token URL             |
| userinfo_endpoint      | User Info URL         |
| jwks_uri              | JWK Set URL           |

3. In the **Scopes** section, add the attributes that allow you to authorize access to user details after a user is successfully authenticated. By default, there are three scopes - **openid**, **email**, **profile**. Appsmith needs **openid** and **email** as mandatory scopes.

:::info
Auth0 provides standard claims: openId, profile, and email as part of the authorization action. If you want to access additional user attributes, [configure them on Auth0](https://auth0.com/docs/get-started/apis/scopes/openid-connect-scopes), and add them to the Scopes field in Appsmith's OIDC configurations.
:::

4. In the **Attributes** section, you have the option to specify which attributes you want to use as usernames for authentication. By default, the attribute **email** is added, indicating that the user's email address is used as the username for authentication.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH SAML OIDC** button.

<figure>
  <img src="/img/Appsmith-Login-Screen-Shows-OIDC.png" style= {{width:"400px", height:"auto"}} alt="Metadata URL"/>
  <figcaption align = "center"><i>Login with OIDC SSO </i></figcaption>
</figure>
