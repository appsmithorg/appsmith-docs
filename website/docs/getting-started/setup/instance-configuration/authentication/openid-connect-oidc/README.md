---
sidebar_position: 4
---
# OpenID Connect SSO

OpenID Connect (OIDC) is an authentication protocol built on OAuth 2.0 paradigm. You can use OIDC to securely sign in users to your application.

:::info
OpenID Connect is available **only in the** [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances**, and only the **Superuser** of your **Appsmith Instance** can set up **OIDC**.
:::

## Capture Redirect URL for OIDC configuration

:::info
You need to add the redirect URL to your preferred OIDC Provider’s settings.
:::

For OIDC configuration in Appsmith, follow the steps below (the below steps are irrespective of the SSO provider you choose):

* On your Appsmith Application, go to **Profile > Admin Settings.**

![Navigate to Profile and click on Admin settings](/img/Appsmith-Admin-Settings.png)

* Navigate to **Authentication** and open the types of authentication available on Appsmith.

![Click Authentication](</img/Appsmith-Admin_Settings-Authentication_(1).png>)

* Select OIDC, click on **Enable**

![Click enable to set up OIDC.](/img/Appsmith-Admin-Settings-Authentication-OIDC.png)

* Copy the **Redirect URL**

![Copy the Redirect URL](/img/Appsmith-Admin-Settings-Authentication-OIDC-RedirectURL.png)

:::info
Save the **`Redirect URL`** as you’ll need it to configure in OIDC Provider’s settings.
:::

:::info
You can choose to integrate with any one of the following [OIDC providers](./#oidc-providers) by clicking on any of them below.
:::

## OIDC providers

Appsmith provides some popular OIDC integrations that you can choose from. Click the available providers to follow the exhaustive guide for integrating with them:


* [Auth0](auth0.md)
* [Ping Identity](ping-identity.md)
* [Okta](okta.md)
* [Active Directory](active-directory.md)

