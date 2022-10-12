---
sidebar_position: 5.2
---
# Ping Identity

Ping Identity (PingID) is the identity as a security platform provider. It is a cloud-based authentication service provider and supports Security Assertion Markup Language (SAML). You can use Appsmith to integrate with Ping Identity using SAML configuration for authentication.

:::info
Security Assertion Markup Language (SAML) is available only in the [enterprise edition](https://www.appsmith.com/pricing) for **self-hosted** instances, and only the **Superuser** of your **Appsmith Instance** can set up **SAML**.
:::

## Create Environment

Log into your [PingOne](https://www.pingidentity.com/en/account/sign-on.html) account. (Please create an account if you don’t have one). On the dashboard, you can see the Home menu, click on home and see the environment listing.

* Click on the **Add Environment** button.

![Add an Environment](</img/PingID-Add-Environment_(1).png>)

* Click on the **Build your own Solution,** select `PingOne SSO`, and click **Next**.

### Create Application

* Click on the **Connections** available on the left sidebar and click **Applications**. Create a new application by clicking on `(+)`.
* Fill in the details:
  * Name - Provide a meaningful name
  * Description - Provide a description
  * Select Application Type as SAML Application.

![Add a new application and choose SAML Application as the application type](/img/PingIdentity-SAML-Add-Application.png)

* Click Save, and you’ll see a configuration overlay and Configure button. Click on Configure button to complete the SAML configuration.

![Configure SAML](/img/PingIdentity-SAML-Add-New-Application.png)

* You can choose one of the available options to configure SAML.

<figure>
  <object data="https://www.youtube.com/embed/iMAOqRo2KuI?autoplay=0" width='860px' height='515px'></object> 
   <figcaption align="center"><i>How to Configure SAML For Ping Identity as IdP?</i></figcaption>
</figure>

### Configure SAML

Ping Identity provides several ways to set up SAML integration. For configuring integration with Appsmith, select **Manually Enter** for **Provide Metadata**. Add the details as per the below mapping:

* Add **Redirect URL** (available on Appsmith) to **ACS URLs** field.
* Add **Entity URL** (available on Appsmith) to the **Entity ID** field.
* Click **Save** to create an application with SAML Configuration.

![Manually Enter - Redirect and Entity URL](/img/PingIdentity-SAML-Configure-SAML-Redirect-Entity-URL.png)

* You’ll see the application is created with SAML configuration as below

![SAML configuration](/img/PingIdentity-SAML-Configure-Success.png)

## Configure Ping Identity Fields in Appsmith

To complete the SAML setup, you’ll have to register PingID as a provider on the Appsmith platform. Follow the instructions listed below to complete this step:

### Register Identity Provider

There are many ways to register the identity provider on Appsmith and complete the SAML Configuration.

Navigate to **Admin Settings** >> **Authentication** >> Click **Enable.** Choose the one that best suits you:

#### Metadata URL

SAML metadata is an XML document that provides information required for interaction with a SAML-enabled identity or service provider. The Metadata URL is the URL metadata for SAML configuration hosted on a remote server.

:::info
**Metadata URL** is the quickest and most **recommended** way to set up **SAML**.
:::

* Navigate to **Environment** >> Select **Environment\_Name** >> Click **Connections** >> Select **Application\_Name** >> Click **Configuration** Tab >> copy IDP Metadata URL.

![IdP Metadata URL](/img/PingIdentity-SAML-Metadata-URL.png)

* Add the copied **IDP Metadata URL** to the **Metadata URL** field on Appsmith and click `SAVE & RESTART` button to save the configuration.

![Add Metadata URL](/img/Appsmith-Admin-Settings-Authentication-SAML-Metadata-URL.png)

#### XML

If you don’t have a **Metadata URL** but have a **raw SAML Metadata XML** document, you can choose **XML** to configure SAML.

* Click **XML**, add the raw XML in the `Metadata XML` field, and click the `SAVE & RESTART` button to save the configuration.

![Add a raw Metadata XML](/img/Appsmith-Admin-Settings-Authentication-SAML-XML.png)

#### IdP Data

You can also configure SAML by providing the identity provider(IdP) data. If you have Identity provider’s data like X509 Public Certificate, Email, and more, you can choose this option to configure SAML.

* Navigate to **Environment** >> Select **Environment\_Name** >> Click **Connections** >> Select **Application\_Name** >> Click **Configuration** Tab >> Click **Download Metadata**.
* Add the content of the tags as per the below mapping table on the Appsmith platform:

| **Appsmith Field Name**     | **Metadata XML Tag**                                                                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Entity ID**               | \<EntityDescriptor/> **entityID** attribute                                                                                                                |
| **Single Sign-On URL**      | \<SingleSignOnService/> **Location** attribute                                                                                                             |
| **X509 Public Certificate** | \<X509Certificate/>                                                                                                                                        |
| **Email**                   | \<saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" Name="**user.email**" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"/> |

![IdP Data](/img/Appsmith-Admin-Settings-Authentication-SAML-IdP-Data.png)

## Complete the SAML Configuration

Once the server restarts with new configurations, you will see a screen showing the message ‘Authentication Successful!’.

![SAML Configuration Successfully completed](/img/Appsmith-SAML-Authentication-Successful.png)

You’ll see a login screen with the button `SIGN IN WITH SAML SSO`.

![SIGN IN WITH SAML SSO - Available on Login Screen](/img/Appsmith-Login-Screen-Shows-SAML.png)
