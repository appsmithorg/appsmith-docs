---
description: >-
  Setup OIDC using Microsoft Entra ID
title: Microsoft Entra ID
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Microsoft Entra ID</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

To configure Appsmith to use [Microsoft Entra ID (Azure AD)](https://www.microsoft.com/en-in/security/business/identity-access/microsoft-entra-id) as an OIDC provider, follow the steps below:

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.
3. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on  **OIDC**.
4. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in Entra ID. 

<ZoomImage src="/img/oidc-configurations-in-appsmith.png" alt="OIDC configurations" caption="OIDC configurations in Appsmith" />

## Create application on Entra ID

1. Log in to your [Azure](https://portal.azure.com/#allservices) account and under **Azure Services**, click **Microsoft Entra ID**.
 
<dd>
<ZoomImage src="/img/Entra-home.png" alt="Azure Home" caption="Azure Home" />

</dd>

2. Go to **Manage Tenants** from the navigation bar, select your directory and click **Switch**.

<dd>
<ZoomImage src="/img/Entra-manage.png" alt="Manage Tenants" caption="Manage Tenants" />

</dd>

3. On your directory's homepage, click **+ Add > App Registration** from the navigation bar.

4. On the **Register an application** page:

<dd>

   a. Add a name for your app.

   b. Select **Accounts in this organizational directory only (user-education only - Single tenant)** from the options in **Supported account types**.

   c. In **Redirect URI**, select the platform as **Web**, and add the **Redirect URL** copied from Appsmith's OIDC configurations in the adjacent input field.

   d. Click **Register**.

</dd>

5. On the application homepage, copy the **Application (client) ID** to add it later in the OIDC configurations in Appsmith.

6. To get the Client secret:

<dd>

<ZoomImage src="/img/oidc-entra.png" alt="Client secret" caption="Client secret" />

   a. On the application homepage, click **Add a certificate or secret** from the **Client credentials** label.

   b. On the **Certificates & secrets** page, go to the **client secrets** tab and click **New client secret**.

   c. On **Add a client secret** panel, add the description and define the expiration of the key. Click **Add**.

   d. Copy the **Value** of the **Client secret** to add it later in the OIDC configurations in Appsmith.

</dd>

7. Go back to the application homepage, and click the **Endpoints** tab from the navigation bar. 

8. In the **Endpoints** panel, copy and open the **OpenID Connect metadata document** URL in a new browser tab, and copy the following URLs from that page:

<dd>

   - **authorization_endpoint**

   - **token_endpoint**

   - **userinfo_endpoint**

   - **jwks_uri**

</dd>

### Configure scopes on Entra ID

1. To configure scopes on Entra ID, go to **API permissions** from the sidebar and click **Add Permission**.

2. On the **Request API permissions** panel, select **Microsoft Graph > Delegated permissions**.

3. In the **Select permissions** section, select the following permissions from the **Openid permissions** dropdown:

<dd>

   - email
   - openid
   - offline_access
   - profile

</dd>

4. Scroll down to the **Users** dropdown and select **Users.Read**. Click **Add permissions**.

5. Go back to the **API permissions** page and click **Grant admin consent for this directory**.


## Register Entra ID in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the  **Application (client) ID** copied from the Entra ID application in the  **Client ID** field. 

2. Add the **Value** of the Client secret copied from the Entra ID application in the  **Client Secret** field.

3. Add the URLs copied from the **OpenID Connect metadata document** page into OIDC configurations in Appsmith as per the table below:

<dd>

   | **OIDC configuration field** | **Microsoft Entra ID URL** |
   | ---------------------------------------- | ---------------------------------------- |
   | **Authorization URL**                 | authorization_endpoint                        |
   | **Token URL**                          | token_endpoint                                |
   | **User Info URL**                      | userinfo_endpoint                            |
   | **JWK Set URL**                        | jwks_uri                              |

</dd>

4. In the **Scopes** section, add the attributes that allow you to authorize access to user details after a user is successfully authenticated. By default, there are three scopes - `openid`, `email`, `profile`. 

<dd>

  Appsmith needs `openid` and `email` as mandatory scopes. It’s also highly recommended you use the `offline_access` scope to avoid errors related to expired access tokens and excessive re-login requests. 
  
  Enabling the `offline_access` scope allows your app to receive refresh tokens that extend the duration that your users have access to their resources. For more information, see [Entra ID documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#offline_access).

</dd>

5. In the **Username Attribute** box, specify the name of the claim as `sub` that uniquely identifies the user.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<ZoomImage src="/img/Appsmith-Login-Screen-Shows-SAML.jpg" alt="SAML-login" caption="Login with SAML SSO " />
