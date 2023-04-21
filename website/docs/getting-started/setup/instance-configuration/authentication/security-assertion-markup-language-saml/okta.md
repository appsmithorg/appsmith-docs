---
sidebar_position: 5.3
---
# Okta

Okta, an Identity-as-a-Service (IDaaS) provider, supports authentication using Secure Assertion Markup Language (SAML). You can use SAML as an authentication type on Appsmith and configure the setup to use Okta as an identity provider.

:::info
Security Assertion Markup Language (SAML) is available only in the [**business edition**](https://www.appsmith.com/pricing) for **self-hosted** instances, and only the **Superuser** of your **Appsmith Instance** can set up **SAML**.
:::

## Create app integration

Log in to your [Okta Developer Account](https://developer.okta.com/) and navigate to **Applications** >> **Applications** >> Click **Create App Integration**.

<VideoEmbed host="youtube" videoId="4Tj2OEV-r10" title="How to create an app integration?" caption="How to create an app integration?"/>

* Choose **SAML** as the Sign-in method and click **Next**.

![Select SAML as Sign-in Method](/img/Okta-SAML-Sign-In-Methods.png)

* Use this screen to configure a meaningful name and logo for your application, and click **Next**.

![Create a new application](/img/Okta-SAML-Create-Application.png)

* On the next screen, provide details as per the below mapping table, and then click **Next**.

![SAML Configurations](/img/Okta-SAML-Configure-SAML.png)

* On the next screen, select details as per the below mapping table, and click Finish.

| **Field Appsmith SAML Configuration** | **Field Okta SAML Configuration** |
| ------------------------------------- | --------------------------------- |
| **Redirect URL**                      | Single sign-on URL                |
| **Entity URL**                        | Audience URI (SP Entity ID)       |
| **Name ID Format**                    | Select Email Address              |
| **Application Username**              | Email                             |

You’ll see that the app integration is created on Okta. Navigate to Appsmith to configure the SAML fields and complete the configuration.

## Configure Okta SAML fields in Appsmith

To complete the SAML setup, you’ll have to register Okta as a provider on the Appsmith platform. Follow the instructions listed below to complete this step:

### Register identity provider

There are several ways to register the identity provider on Appsmith and complete the SAML Configuration. Follow the one that best suits you:

#### Metadata URL

SAML metadata is an XML document that provides information required for interaction with a SAML-enabled identity or service provider. The Metadata URL is the URL metadata for SAML configuration hosted on a remote server.

:::info
**Metadata URL** is the quickest and most **recommended** way to set up **SAML**.
:::

* Navigate to **Applications** >> **Applications** >> **Application Name (SAMLAppsmithIntegration) >>** Click the tab **Sign On >>** Scroll down to **SAML configuration instructions >>** Click **Identity Provider Metadata** link to open the metadata in a browser tab >> Copy the **URL** from the address bar.

![Metadata URL](/img/Okta-SAML-Configure-Metadata-URL.png)

* Navigate to Appsmith, add the Metadata URL, and click `SAVE & RESTART` button to save the configuration.

![Metadata URL setup at Appsmith](/img/Appsmith-Admin-Settings-Authentication-SAML-Metadata-URL.png)

#### XML

If you don’t have a Metadata URL but have a raw SAML metadata XML document, you can choose XML to configure SAML.

* Navigate to Appsmith, click XML, add the raw XML in the `Metadata XML` field, and click the `SAVE & RESTART` button to save the configuration.

![Metadata XML setup at Appsmith](/img/Appsmith-Admin-Settings-Authentication-SAML-XML.png)

#### IdP data

You can also configure SAML by providing the identity provider(IdP) data. If you have Identity provider data like X509 Public Certificate, Email, and more, you can choose this option to configure SAML.

* Navigate to **Applications** >> **Applications** >> **Application Name (SAMLAppsmithIntegration)** >> Click the tab **Sign On** >> Scroll down to **SAML 2.0** >> Click **View Setup Instructions**

![View IdP Data](/img/Okta-SAML-Register-Provider-IdpData.png)

* The Setup Instructions screen opens up in a new browser tab. Add the content of the tags as per the below mapping table on the Appsmith platform:

| **Appsmith Field Name**     | **Metadata XML Tag**                                                                            |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| **Entity ID**               | Identity Provider Issuer                                                                        |
| **Single Sign On URL**      | Identity Provider Single Sign-On URL                                                            |
| **X509 Public Certificate** | X.509 Certificate                                                                               |
| **Email**                   | \<md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:**emailAddress**\</md:NameIDFormat> |

![Add IdP Data on Appsmith](/img/Appsmith-Admin-Settings-Authentication-SAML-IdP-Data.png)

Once you have supplied the details, click the `SAVE & RESTART` button to save the configuration.

### Complete the SAML configuration

Once the server restarts with new configurations, you see a screen showing the message ‘Authentication Successful!’.

![SAML Configuration success message - Authentication Successful](/img/Appsmith-SAML-Authentication-Successful.png)

You’ll see a login screen with a button `SIGN IN WITH SAML SSO`.

![SIGN IN WITH SAML SSO - Available on the Login Screen](/img/Appsmith-Login-Screen-Shows-SAML.png)
