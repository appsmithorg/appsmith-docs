# Security Assertion Markup Language (SAML)

Security Assertion Markup Language (SAML) is an XML-based open standard for exchanging identity data between parties: an Identity provider(IdP) and a service provider.

The identity provider(IdP) is responsible for authentication and shares the user’s identity and authorization level with a service provider on successful authentication.

Upon successful authentication by the identity provider, the service provider authorizes the user to access resources.

{% hint style="info" %}
Security Assertion Markup Language (SAML) is available only in the [enterprise edition](https://www.appsmith.com/pricing) for **self-hosted** instances, and only the **Superuser** of your **Appsmith Instance** can set up **SAML**.
{% endhint %}

## **Capture Redirect & Entity URL**

Follow the below steps to configure your SAML Provider’s settings. These steps are irrespective of the SAML provider that you choose.

* On Appsmith, navigate to **Profile** –->**Admin Settings.**

![Admin Settings](../../../../.gitbook/assets/Appsmith-Admin-Settings.png)

* Navigate to **Authentication** and open the available options for authentication on Appsmith.

![Navigate to Admin Settings >> Click Authentication](<../../../../.gitbook/assets/Appsmith-Admin Settings-Authentication.png>)

* You’ll see several options available, select **SAML** and click **Enable**.

![How to enable SAML?](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-SAML.png)

### Redirect URL

* Copy the **Redirect URL**, and keep it safe as you’ll need this to add to your IdP’s settings.

![Copy Redirect URL](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-SAML-Redirect-URL.png)

{% hint style="info" %}
Save the **Redirect URL** as you’ll need it to configure these in the&#x20;

**SAML provider’s settings**.
{% endhint %}

### Entity URL

* Copy the **Entity URL**, and keep it safe as you’ll need this to add to your IdP’s settings.

![Copy Entity URL](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-SAML-Entity-URL.png)

{% hint style="info" %}
Save the **Entity URL** as you’ll need it to configure these in the SAML provider’s settings.
{% endhint %}

## SAML Providers

Appsmith integrates with popular SAML providers that you can choose from. Click the below available providers and follow the instructions to configure them for SAML integration:

{% content-ref url="auth0.md" %}
[auth0.md](auth0.md)
{% endcontent-ref %}
