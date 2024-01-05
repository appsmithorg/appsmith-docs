---
description: >-
  Setup OIDC using Okta
title: Okta
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Okta</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

To configure Appsmith to use [Okta](https://www.okta.com/) as an OIDC provider, follow the steps below:

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.
3. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on **OIDC**.
4. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in Okta.

<ZoomImage src="/img/oidc-configurations-in-appsmith.png" alt="OIDC configurations" caption="OIDC configurations in Appsmith" />

## Create application on Okta

1. Log in to your [Okta](https://www.okta.com/) account and click **Admin** from the top right corner.
2. On the **Get started with Okta** page, click **Add App** for **Use single sign on**.
3. On the **Browse App Integration Catalog** page, click **Create New App**. 
4. A pop-up titled **Create a new app integration** appears. Choose **OIDC - OpenID Connect** as the Sign-in method and select Application type as **Web Application**.
5. On the **New Web App Integration** page, go to the general settings:

  a. Add a name for your app in the **App integration name** field.

  b. Select **Authorization Code** and **Refresh Token** from the options in the **Grant type** section.

  c. Add the **Redirect URL** copied from the OIDC configurations in Appsmith in the **Sign-in redirect URIs** field.

  d. Scroll down to the **Assignments** section and pick an option from **Controlled access** configure the Accessibility of this application as required.

  e. Click **Save**.

6. On your new application, go to the **General** tab, and copy the **Client ID** and **Client Secret** to add them later in the OIDC configurations in Appsmith.
7. Open your account dropdown from the navigation bar, and copy your **Okta domain** that is mentioned below your Email. 
8. Add `/.well-known/openid-configuration` at the end of your **Okta domain**, and open the `<your-okta-domain>/.well-known/openid-configuration` URL in your browser and copy the following URLs from that page:

  - **authorization_endpoint**

  - **token_endpoint**

  - **userinfo_endpoint**

  - **jwks_uri**

##  Register Okta in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the **Client ID** and **Client Secret** copied from the Okta application into the respective fields.

2. Add the URLs copied from the `<your-okta-domain>/.well-known/openid-configuration` page into OIDC configurations in Appsmith as per the table below:

  | **OIDC configuration field**       | **Okta URL**  |
  | ----------------------- | --------------------- |
  | **Authorization URL** | authorization_endpoint     |
  | **Token URL**         | token_endpoint             |
  | **User Info URL**      | userinfo_endpoint         |
  | **JWK Set URL**             |  jwks_uri          |

3. In the **Scope** box, specify the scopes to be used by the application during authentication to authorize access to a user's details. By default, there are three scopes - `openid`, `email`, and `profile`. 
 
  Appsmith needs `openid` and `email` as mandatory scopes. It’s also highly recommended to use the `offline_access` scope to avoid errors related to expired access tokens and excessive re-login requests. For more information, see [Okta API scopes](https://developer.okta.com/docs/reference/api/oidc/#scopes).



4. In the **Username Attribute** box, specify the name of the claim which represents the email of the user. The default value is `email`.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<ZoomImage src="/img/Appsmith-Login-Screen-Shows-OIDC.png" alt="OIDC-login" caption="Login with OIDC SSO " />
