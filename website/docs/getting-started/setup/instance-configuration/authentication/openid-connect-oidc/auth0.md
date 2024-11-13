---
description: >-
  Setup OIDC using Auth0
title: Auth0
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Auth0</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

To configure Appsmith to use [Auth0](https://auth0.com/) as an OIDC provider, follow the steps below:

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.

2. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.

3. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on  **OIDC**.

4. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in Auth0. 

<ZoomImage src="/img/oidc-configurations-in-appsmith.png" alt="OIDC configurations" caption="OIDC configurations in Appsmith" />

## Create application in Auth0

1. Log in to your [Auth0](https://auth0.com/) account and go to **Applications > Create Application**. 

2. In the **Create application** modal, select **Regular Web Application** and click **Create**.

3. In the Integration screen, click Skip, then open the Application **Settings** tab.


<dd>

 <ZoomImage src="/img/auth-oidc-app.png" alt="" caption="" />

</dd>

4. In the basic information section, copy the **Client ID** and **Client Secret** to add them later in the OIDC configurations in Appsmith.

5. Scroll down to the **Application URIs** and paste the **Redirect URL** copied from the OIDC configuration in Appsmith in the **Allowed Callback URLs** field.

6. In the **Settings** tab, navigate to **Advanced Settings** > **Endpoints**. Copy the following URLs from the OAuth section to use later in your OIDC configuration in Appsmith:

<dd>

- **OAuth Authorization URL**

- **OAuth Token URL**

- **OAuth User Info URL**

- **JSON Web Key Set**

 <ZoomImage src="/img/auto-oidc-endpoints.png" alt="" caption="" />


</dd>

6. Click **Save Changes**.

##  Register Auth0 in Appsmith

To complete the OIDC configuration, you must register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the **Client ID** and **Client Secret** copied from the Auth0 application into the respective fields.

2. Add the URLs copied from the Auth0 application into OIDC configurations in Appsmith as per the table below:

<dd>

  | **OIDC configuration field**      |  **Auth0 URL** |
  | ----------------------- | --------------------- |
  | **Authorization URL** | OAuth Authorization URL     |
  | **Token URL**         | OAuth Token URL             |
  | **User Info URL**      |  OAuth User Info URL         |
  | **JWK Set URL**           | JSON Web Key Set             |

</dd>

3. In the **Scope** box, specify the scopes to be used by the application during authentication to authorize access to a user's details. By default, there are three scopes - `openid`, `email`, and `profile`. 

<dd>

 Appsmith needs `openid` and `email` as mandatory scopes. It’s also highly recommended to use the `offline_access` scope to avoid errors related to expired access tokens and excessive re-login requests. For more information, see [Auth0 documentation](https://auth0.com/docs/secure/tokens/refresh-tokens).

</dd>

4. In the **Username Attribute** box, specify the name of the claim which represents the email of the user. The default value is `email`.

5. Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

:::info
If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
:::

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<dd>

<ZoomImage src="/img/Appsmith-Login-Screen-Shows-OIDC.png" alt="OIDC-login" caption="Login with OIDC SSO " />

</dd>