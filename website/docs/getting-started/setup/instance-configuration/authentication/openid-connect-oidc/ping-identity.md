---
description: >-
  Setup OIDC using Ping Identity
---

# Ping Identity

To configure Appsmith to use [Ping Identity](https://www.pingidentity.com/en.html) as an OIDC provider, follow the steps below:

## Prerequisites

1. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.

2. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on **OIDC**.

3. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in Ping Identity.

<figure>
  <img src="/img/oidc-configurations-in-appsmith.png" style= {{width:"600px", height:"auto"}} alt="OIDC configurations"/>
  <figcaption align = "center"><i>OIDC configurations in Appsmith</i></figcaption>
</figure>

## Create application in Ping Identity

1. Log into your [PingOne](https://www.pingidentity.com/en/account/sign-on.html) account. On the homepage, click **Add Environment** from the top right corner.
2. On the Create Environment screen, select **Build your own solution**. 

  a. Click **PingOne SSO** from **Cloud Services** under the **Select solution(s) for your Environment** section. 
  
  b. Click **Next**.

  c. Enter the environment name and description. Click **Next**.

3. Open the newly created Environment, and from the sidebar, go to **Connections** > **Applications**.
4. On the Applications homepage, click the **+** icon to create a new application. On the **Add Application** panel:

  a. Enter the application name and description.

  b. Select the **Application Type** as **OIDC Web App**. Click **Configure**.

5. Open your application, and go to the **Configurations** tab:

  a. Copy the following URLs from the **URLs** dropdown to add them later in the OIDC configurations in Appsmith:

   - **Authorization URL**
   - **Token Endpoint**
   - **UserInfo Endpoint**
   - **JWKS Endpoint**

  b. Scroll down to the **General** dropdown, and copy the **Client ID** and **Client Secret** to add them later in the OIDC configurations in Appsmith.

6. To configure the required scopes, go to the **Resources** tab, click the **Edit** icon and select **openid**, **email**, **profile** from the list of scopes.

7. On your application panel, switch the toggle button at the top right corner to enable user access to the application. 

## Register Ping Identity in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the **Client ID** and **Client Secret** copied from the Ping Identity application into the respective fields.

2. Add the URLs copied from the Ping Identity application into OIDC configurations in Appsmith as per the table below:

      | **OIDC configuration field**      |  **Ping ID URL** |
      | ----------------------- | --------------------- |
      | **Authorization URL** | Authorization URL     |
      | **Token URL**         | Token Endpoint             |
      | **User Info URL**      |  UserInfo Endpoint         |
      | **JWK Set URL**           | JWKS Endpoint             |

3. In the **Scope** box, specify the scopes to be used by the application during authentication to authorize access to a user's details. By default, there are three scopes - `openid`, `email`, and `profile`. Appsmith needs `openid` and `email` as mandatory scopes. For more information on scopes, see [Editing scopes on PingOne](https://docs.pingidentity.com/r/en-us/pingone/pingone_t_edit_scopes_for_an_application).

4. In the **Username Attribute** box, specify the name of the claim which represents the email of the user. The default value is `email`.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<figure>
  <img src="/img/Appsmith-Login-Screen-Shows-OIDC.png" style= {{width:"400px", height:"auto"}} alt="OIDC-login"/>
  <figcaption align = "center"><i>Login with OIDC SSO </i></figcaption>
</figure>