---
description: >-
  Setup OIDC using FusionAuth
title: FusionAuth
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>FusionAuth</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

This page shows you how to configure Appsmith to use [FusionAuth](https://fusionauth.io/) as an OIDC provider.

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.

2. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.

3. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on **OIDC**.

4. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in FusionAuth.

<dd>

<ZoomImage src="/img/oidc-appsmith.png" alt="OIDC configurations" caption="OIDC configurations in Appsmith" />

</dd>

## Create application in FusionAuth

Follow these steps to set up your application in FusionAuth:


 <ZoomImage src="/img/fusion-auth-app.png" alt="" caption="" />

1. Log in to your [FusionAuth](https://login.fusionauth.io/admin) dashboard.

2. Navigate to Applications from the left-hand panel.

3. Click the green plus (**+**) icon in the top-right corner to create a new application.

4. Enter a name for your application.

5. Go to the **OAuth** tab and add the **Authorized redirect URLs**. Copy the Redirect URL from the OIDC configuration in Appsmith (e.g.,`http://localhost/login/oauth2/code/oidc`).

6. Save your application by clicking the Save icon at the top-right corner.

7. Open your application, go to the **OAuth** tab, and copy the **Client ID** and **Client Secret** to add them later in the OIDC configurations in Appsmith.




## Configure the Issuer in FusionAuth

Follow these steps to set the Issuer URL in FusionAuth, which is crucial for secure OIDC integration and ensures the authorization server is correctly identified.
 
 <ZoomImage src="/img/fusionauth-issuer.png" alt="" caption="" />



1. From the left panel, navigate to the **Tenants** section.

2. Select the default tenant or create a new one if needed.

3. In the **Edit Tenant** screen, add the prefix `https://` to the existing URL in the Issuer field. 

<dd>

For example, if your existing URL is `example.fusionauth.io`, it should be updated to `https://example.fusionauth.io`. 

</dd>

4. Save the changes.



##  Register Okta in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the **Client ID** and **Client Secret** copied from the FusionAuth application into the respective fields.

2. Add the URLs copied from the `<your-okta-domain>/.well-known/openid-configuration` page into OIDC configurations in Appsmith as per the table below:

<dd>


  | **OIDC configuration field**       | **Okta URL**  |
  | ----------------------- | --------------------- |
  | **Authorization URL** | authorization_endpoint     |
  | **Token URL**         | token_endpoint             |
  | **User Info URL**      | userinfo_endpoint         |
  | **JWK Set URL**             |  jwks_uri          |

</dd>


3. In the **Scope** box, specify the scopes to be used by the application during authentication to authorize access to a user's details. By default, there are three scopes - `openid`, `email`, and `profile`. 
 
 <dd>

  Appsmith needs `openid` and `email` as mandatory scopes. It’s also highly recommended to use the `offline_access` scope to avoid errors related to expired access tokens and excessive re-login requests. For more information, see [FusionAuth OAuth Scopes](https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/scopes).

</dd>

4. In the **Username Attribute** box, specify the name of the claim which represents the email of the user. The default value is `email`.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

:::info
If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
:::


After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<dd>

<ZoomImage src="/img/oidc-homepage.png" alt="OIDC-login" caption="Login with OIDC SSO " />

</dd>