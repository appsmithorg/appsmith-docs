# OpenID Connect(OIDC)

OpenID Connect (OIDC) is an authentication protocol built on OAuth2.0 paradigm. You can use OIDC to securely sign-in users to your application.

{% hint style="info" %}
OpenID Connect is available **only in the** [**enterprise edition**](https://www.appsmith.com/pricing) for **self-hosted instances**, and only the **Superuser** of your **Appsmith Instance** can set up **OIDC**.
{% endhint %}

## Capture Redirect URL for OIDC Configuration

{% hint style="info" %}
You will have to add the redirect URL to your preferred OIDC Provider’s settings.
{% endhint %}

For OIDC configuration in Appsmith, follow the steps below (the below steps are irrespective of the SSO provider you choose):

* On your Appsmith Application, go to **Profile > Admin Settings.**

![Navigate to Profile and click on Admin settings ](<../../../../.gitbook/assets/Appsmith-Admin-Settings (1).png>)

* Navigate to **Authentication** and open the types of authentication available on Appsmith.

![Click on Authentication](<../../../../.gitbook/assets/Appsmith-Admin Settings-Authentication (1).png>)

* Select OIDC, click on **Enable**

![Click enable to set up OIDC.](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-OIDC.png)

* Copy the **Redirect URL**

![Copy the Redirect URL](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-OIDC-RedirectURL.png)

{% hint style="info" %}
Save the **`Redirect URL`** as you’ll need it to configure in OIDC Provider’s settings.
{% endhint %}

## OIDC Providers

Appsmith provides some popular OIDC integrations that you can choose from. Click on the available providers to follow the exhaustive guide for integrating with them:

{% content-ref url="auth0.md" %}
[auth0.md](auth0.md)
{% endcontent-ref %}

{% content-ref url="ping-identity.md" %}
[ping-identity.md](ping-identity.md)
{% endcontent-ref %}

{% content-ref url="okta.md" %}
[okta.md](okta.md)
{% endcontent-ref %}

