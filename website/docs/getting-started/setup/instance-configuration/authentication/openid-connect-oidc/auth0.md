---
description: >-
  Setup OIDC using Auth0
---

# Auth0

To configure Appsmith to use [Auth0](https://auth0.com/) as an OIDC provider, follow the steps below:

## Prerequisites

1. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on  **OIDC**.

2. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in Auth0. 

<figure>
  <img src="/img/oidc-configurations-in-appsmith.png" style= {{width:"600px", height:"auto"}} alt="OIDC configurations"/>
  <figcaption align = "center"><i>OIDC configurations in Appsmith</i></figcaption>
</figure>

## Create application in Auth0

1. Log in to your [Auth0](https://auth0.com/) account and go to **Applications > Create Application**. 

2. In the **Create application** modal, select **Regular Web Application** and click **Create**.

3. Once your application is created, you're taken to the Quick Start screen. Go to the **Settings** tab.

4. In the basic information section, copy the **Client ID** and **Client Secret** to add them later in the OIDC configurations in Appsmith.

5. Scroll down to the **Application URIs** and paste the **Redirect URL** copied from the OIDC configuration in Appsmith in the **Allowed Callback URLs** field.

6. On the **Settings** tab, go to **Advanced Settings > Endpoints**. Copy the following URls from the OAuth section to add them later in the OIDC configurations in Appsmith:
  - **OAuth Authorization URL**
  - **OAuth Token URL**
  - **OAuth User Info URL**
  - **JSON Web Key Set**

6. Click **Save Changes**.

##  Register Auth0 in Appsmith

To complete the OIDC configuration, you must register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the **Client ID** and **Client Secret** copied from the Auth0 application into the respective fields.

2. Add the URLs copied from the Auth0 application into OIDC configurations in Appsmith as per the table below:

      | **OIDC configuration field**      |  **Auth0 URL** |
      | ----------------------- | --------------------- |
      | **Authorization URL** | OAuth Authorization URL     |
      | **Token URL**         | OAuth Token URL             |
      | **User Info URL**      |  OAuth User Info URL         |
      | **JWK Set URL**           | JSON Web Key Set             |

3. In the **Scopes** box, specify the scopes to be used by the application during authentication to authorize access to a user's details. By default, there are three scopes - `openid`, `email`, and `profile`. Appsmith needs `openid` and `email` as mandatory scopes. For more information on scopes, see [OpenID Connect Scopes](https://auth0.com/docs/get-started/apis/scopes/openid-connect-scopes).

4. In the **Username Attributes** box, specify the name of the claim which represents the email of the user. The default value is `email`.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<figure>
  <img src="/img/Appsmith-Login-Screen-Shows-OIDC.png" style= {{width:"400px", height:"auto"}} alt="OIDC-login"/>
  <figcaption align = "center"><i>Login with OIDC SSO </i></figcaption>
</figure>