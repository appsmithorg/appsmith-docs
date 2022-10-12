---
sidebar_position: 5.4
---
# Active Directory



Azure Active Directory (Azure AD) is a cloud-based identity and access management service. This service helps your employees access external resources, such as **Microsoft 365,** the **Azure portal,** and thousands of other **SaaS** applications.

:::info
SAML is available only in the [**enterprise edition**](https://www.appsmith.com/pricing) for **self-hosted instances,** and only the **Superuser** of your **Appsmith Instance** can set up SAML.
:::

To configure SAML within Appsmith using Active Directory as a SAML provider, follow these steps:

### Create Application

<object data="https://www.youtube.com/embed/H94cQBp5sFE?autoplay=0" width='860px' height='515px'></object> 

1. Log in to your [Azure](https://portal.azure.com/#allservices) account and click on **More services**.
2. Click on **Azure Active Directory** and hit “**+Add**”, and select “**Enterprise Application**.”
3. Under Browse AD Azure Gallery window, click on create your application, and:
   1. Give your application a meaningful name.
   2. Select “**Integrate any other application you don't find in the gallery (Non-gallery)**” from the “**What are you looking to do with your application?**” options.
4. Hit the Create button.

### Configure Appsmith URLs in Active Directory

As mentioned in [Capture Redirect & Entity URL](./#capture-redirect-and-entity-url), you need to add these URLs to your SAML application. Go to your SAML application homepage and follow the steps below:

<figure>
  <object data="https://www.youtube.com/embed/9EFlC0PaxD0?autoplay=0" width='860px' height='515px'></object> 
   <figcaption align="center"><i>Adding Redirect and Entity URLs</i></figcaption>
</figure>



1. Click on Single Sign-on from the sidebar and select **SAML**.
2. Go to section 1, “**Basic SAML Configuration**,” and click on edit on the Single Sign-on window.
3. Add the **Entity URL** (copied from the SAML configurations in Appsmith) under **Identifier (Entity ID)**.
4. Add the **Redirect URL** (copied from the SAML configurations in Appsmith) under **Replay URL(Assertion Consumer Service URL).**

## Configure Active Directory SAML Fields in Appsmith

To complete the SAML configuration, you’ll have to register the identity provider on Appsmith.

### Register Identity Provider

Appsmith provides the below options using which you can register the identity provider on Appsmith and complete the SAML Configuration. Follow the one that best suits you:

#### **Metadata URL**

SAML metadata is an XML document that provides information required for interaction with a SAML-enabled identity or service provider. The Metadata URL is the URL metadata for SAML configuration hosted on a remote server.

:::info
Metadata URL is the **quickest** and **most recommended way** to set up **SAML**.
:::

<figure>
  <object data="https://www.youtube.com/embed/5YEXAhdPwOI?autoplay=0" width='860px' height='515px'></object> 
   <figcaption align="center"><i>Fetching the metadata URL</i></figcaption>
</figure>

* To get the metadata URL, click on Single Sign-on from the sidebar and go to section 3, “**SAML Signing Certificate**.”
* Copy the “**App Federation Metadata Url**” and add it to the “**metadata URL**” field in Appsmith.
* Click on SAVE AND RESTART to save the configuration.

![SAVE & RESTART to configure SAML](/img/Appsmith-Admin-Settings-Authentication-SAML-Metadata-URL.png)

#### XML

If you don’t have a Metadata URL but have a raw SAML metadata XML document, you can choose XML to configure SAML.

<figure>
  <object data="https://www.youtube.com/embed/nUt1__WQBOE?autoplay=0" width='860px' height='515px'></object> 
   <figcaption align="center"><i>Metadata XML</i></figcaption>
</figure>

* To get the metadata XML, click on Single Sign-on from the sidebar and go to section 3 “**SAML Signing Certificate**”.
* Download the “**Federation metadata XML**”.
* Add the content of the metadata XML file to the “**metadata XML**” field in Appsmith.

![SAVE & RESTART to configure SAML](/img/Appsmith-Admin-Settings-Authentication-SAML-XML.png)

#### IdP Settings

You can also configure SAML by providing the identity provider(IdP) data.

If you have Identity provider’s data like X509 Public Certificate, Email, and more, you can choose this option to configure SAML.

* To get IdP data, click on Single Sign-on from the sidebar, go to section 3 “**SAML Signing Certificate**” and download the **Federation metadata XML** file.
* Navigate to Appsmith, click **IdP Data** and add the content of the tags (from metadata XML) as per the below mapping table:

| **Appsmith Field Name**                                                   | **Metadata XML Tag**                                                                                                                                                                  |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Entity ID**                                                             | `<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" ID="_07355b4e-806d-4cd5-9f0a-949d831ba67e" entityID="https://sts.windows.net/3e889401-476e-489a-9d84-07f623ee08a4/">` |
| **Single Sign-On URL**                                                    | `<SingleSignOnService/>`                                                                                                                                                              |
| **X509 Public Certificate**                                               | `<X509Certificate/>`                                                                                                                                                                  |
| **Email** (It is a static input,please add this value to the Email field) | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`                                                                                                                              |

![How to set up the IdP Data?](/img/Appsmith-Admin-Settings-Authentication-SAML-IdP-Data.png)

Once you have supplied the details, click the `SAVE & RESTART` button to save the configuration.

## Complete the SAML Configuration

Once the server restarts with new configurations, you will see a screen showing the message ‘**Authentication Successful!’**.

![SAML Configuration Success Message](/img/Appsmith-SAML-Authentication-Successful.png)

You’ll see a login screen with the button `SIGN IN WITH SAML SSO`.

![SIGN IN WITH SAML SSO - Available on Login Screen](/img/Appsmith-Login-Screen-Shows-SAML.png)
