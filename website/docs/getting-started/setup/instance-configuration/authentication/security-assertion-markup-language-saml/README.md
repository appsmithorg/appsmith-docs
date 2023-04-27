---
sidebar_position: 3
---

# SAML SSO

Security Assertion Markup Language (SAML) is an XML-based open standard for exchanging identity data between parties: an Identity provider(IdP) and a service provider.

The identity provider(IdP) is responsible for authentication and shares the user’s identity and authorization level with a service provider on successful authentication.

Upon successful authentication by the identity provider, the service provider authorizes the user to access resources.

:::info
Security Assertion Markup Language (SAML) is available only in the [**business edition**](https://www.appsmith.com/pricing) for **self-hosted** instances, and only the **Superuser** of your **Appsmith Instance** can set up **SAML**.
:::

## **Capture redirect & entity URL**

Follow the below steps to configure your SAML Provider’s settings. These steps are irrespective of the SAML provider that you choose.

* On Appsmith, navigate to **Profile** --> **Admin Settings.**

![Admin Settings](</img/Appsmith-Admin-Settings_(1).png>)

* Navigate to **Authentication** and open the available options for authentication on Appsmith.

![Click Authentication](</img/Appsmith-Admin_Settings-Authentication_(1).png>)

* You’ll see several options available, select **SAML** and click **Enable**.

![How to enable SAML?](/img/Appsmith-Admin-Settings-Authentication-SAML.png)

### Redirect URL

* Copy the **Redirect URL**, and keep it safe as you’ll need this to add to your IdP’s settings.

![Copy Redirect URL](/img/Appsmith-Admin-Settings-Authentication-SAML-Redirect-URL.png)

:::info
Save the **Redirect URL** as you’ll need it to configure these in the

**SAML provider’s settings**.
:::

### Entity URL

* Copy the **Entity URL**, and keep it safe as you’ll need this to add to your IdP’s settings.

![Copy Entity URL](/img/Appsmith-Admin-Settings-Authentication-SAML-Entity-URL.png)

:::info
Save the **Entity URL** as you’ll need it to configure these in the SAML provider’s settings.
:::

## SAML providers

Appsmith integrates with popular SAML providers that you can choose from. Click the below available providers and follow the instructions to configure them for SAML integration:

* [Auth0](auth0.md)
* [Ping Identity](ping-identity.md)
* [Okta](okta.md)
* [Active Directory](active-directory.md)

### **Generic SAML configuration**

You can also use configurations available on Appsmith to configure your SAML providers, which are not listed here. You can follow the steps listed below to configure the details:

#### Configurations at the identity provider

You’ll need a **Redirect URL** and an **Entity URL** to configure **SAML** integration for an identity provider. Follow the below steps to capture the redirect and the entity URL available on Appsmith.

* On Appsmith, navigate to **Profile** >> **Admin Settings.**

![Navigate to Admin Settings](</img/Appsmith-Admin-Settings_(1).png>)

* Navigate to Authentication, and open the available options for authentication on Appsmith.

![Click Authentication](</img/Appsmith-Admin_Settings-Authentication_(1).png>)

* You’ll see several options available, select **SAML** and click **Enable**.

![Enable SAML to proceed with the configuration](/img/Appsmith-Admin-Settings-Authentication-SAML.png)

#### Redirect URL

* Copy the **Redirect URL**, and keep it safe as you’ll need this to add to your IdP’s settings.

![Copy Redirect URL](/img/Appsmith-Admin-Settings-Authentication-SAML-Redirect-URL.png)

:::info
Add the **Redirect URL** to the SAML Configuration to fields like the Callback URL.
:::

**Entity URL**

* Copy the **Entity URL**, and keep it safe as you’ll need this to add to your IdP’s settings.

![Copy Entity URL](/img/Appsmith-Admin-Settings-Authentication-SAML-Entity-URL.png)

:::info
Add the **Entity URL** to the Entity URL available for the SAML settings.
:::

#### Configurations at Appsmith

You can register your identity provider with Appsmith in one of the following available ways and complete SAML integration.

**Metadata URL**

The metadata XML document is usually hosted and available remotely to integrate with. You can use the URL to configure SAML on Appsmith. Copy the URL where the metadata XML is available and paste it into the Metadata URL field as shown in the screenshot below.

![Add the IdP Metadata URL](/img/Appsmith-Admin-Settings-Authentication-SAML-Metadata-URL.png)

**XML**

In case the Metadata URL is unavailable, but you have a raw SAML metadata XML locally available, you can click on the XML tab and add the raw Metadata XML into the Metadata XML field as shown in the below screenshot.

![Add IdP raw Metadata XML](/img/Appsmith-Admin-Settings-Authentication-SAML-XML.png)

**IdP Data**

You can also configure SAML by manually adding the IdP details. If you choose to do so, you’ll need the below details:

* **Entity URL** - The entity URL available for the Identity Provider
* **Single Sign-on URL** - The SSO URL for the identity provider
* **X509 Public Certificate** - A certificate that defines the public-key formats.
* **Email** - The name format used for an email address.

![Add IdP Data manually](/img/Appsmith-Admin-Settings-Authentication-SAML-IdP-Data.png)

#### Complete the configuration

Once you have added the required details click on Save & Restart. On server restart, you see an **Authentication Successful!** message as shown in the screenshot below.

![SAML Configuration Success Message - Authentication Successful](/img/Appsmith-SAML-Authentication-Successful.png)

You can now see a SIGN IN WITH SAML SSO available on the Login screen and can use it to log into Appsmith using SAML.

![SIGN IN WITH SAML SSO - Available on Login Screen](/img/Appsmith-Login-Screen-Shows-SAML.png)
