---
description: >-
  Setup OIDC using Active Directory
title: Active Directory
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Active Directory</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

To configure Appsmith to use [Azure Active Directory (Azure AD)](https://portal.azure.com/#allservices) as an OIDC provider, follow the steps below:

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.
3. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on  **OIDC**.
4. Copy the **Redirect URL** from the **OIDC** configuration page to add it when creating the application in Active Directory. 

<figure>
  <img src="/img/oidc-configurations-in-appsmith.png" style= {{width:"600px", height:"auto"}} alt="OIDC configurations"/>
  <figcaption align = "center"><i>OIDC configurations in Appsmith</i></figcaption>
</figure>

## Create application on Active Directory

1. Log in to your [Azure](https://portal.azure.com/#allservices) account and under **Azure Services**, click **Azure Active Directory**.
2. Go to **Manage Tenants** from the navigation bar, select your directory and click **Switch**.
3. On your directory's homepage, click **+ Add > App Registration** from the navigation bar.
4. On the **Register an application** page:

   a. Add a name for your app.

   b. Select **Accounts in this organizational directory only (user-education only - Single tenant)** from the options in **Supported account types**.

   c. In **Redirect URI**, select the platform as **Web**, and add the **Redirect URL** copied from Appsmith's OIDC configurations in the adjacent input field.

   d. Click **Register**.

5. On the application homepage, copy the **Application (client) ID** to add it later in the OIDC configurations in Appsmith.
6. To get the Client secret:

   a. On the application homepage, click **Add a certificate or secret** from the **Client credentials** label.

   b. On the **Certificates & secrets** page, go to the **client secrets** tab and click **New client secret**.

   c. On **Add a client secret** panel, add the description and define the expiration of the key. Click **Add**.

   d. Copy the **Value** of the **Client secret** to add it later in the OIDC configurations in Appsmith.

7. Go back to the application homepage, and click the **Endpoints** tab from the navigation bar. 
8. In the **Endpoints** panel, copy and open the **OpenID Connect metadata document** URL in a new browser tab, and copy the following URLs from that page:

   - **authorization_endpoint**

   - **token_endpoint**

   - **userinfo_endpoint**

   - **jwks_uri**

### Configure scopes on Active Directory

1. To configure scopes on Active Directory, go to **API permissions** from the sidebar and click **Add Permission**.
2. On the **Request API permissions** panel, select **Microsoft Graph > Delegated permissions**.
3. In the **Select permissions** section, select the following permissions from the **Openid permissions** dropdown:

   - email

   - openid

   - Profile

4. Scroll down to the **Users** dropdown and select **Users.Read**. Click **Add permissions**.
5. Go back to the **API permissions** page and click **Grant admin consent for this directory**.


## Register Active Directory in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Go to **Admin Settings > Authentication > OIDC**, and follow the steps below:

1. Add the  **Application (client) ID** copied from the Active Directory application in the  **Client ID** field. 

2. Add the **Value** of the Client secret copied from the Active Directory application in the  **Client Secret** field.

3. Add the URLs copied from the **OpenID Connect metadata document** page into OIDC configurations in Appsmith as per the table below:

   | **OIDC configuration field** | **Azure Active Directory URL** |
   | ---------------------------------------- | ---------------------------------------- |
   | **Authorization URL**                 | authorization_endpoint                        |
   | **Token URL**                          | token_endpoint                                |
   | **User Info URL**                      | userinfo_endpoint                            |
   | **JWK Set URL**                        | jwks_uri                              |


4. In the **Scopes** section, add the attributes that allow you to authorize access to user details after a user is successfully authenticated. By default, there are three scopes - `openid`, `email`, `profile`. Appsmith needs `openid` and `email` as mandatory scopes. To add more scopes, [configure them on Active Directory](#configure-scopes-on-active-directory) and then add them to the OIDC configurations in Appsmith. 

5. In the **Username Attribute** box, specify the name of the claim which represents the email of the user. The default value is `email`.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<figure>
  <img src="/img/Appsmith-Login-Screen-Shows-OIDC.png" style= {{width:"400px", height:"auto"}} alt="OIDC-login"/>
  <figcaption align = "center"><i>Login with OIDC SSO </i></figcaption>
</figure>

----

# Active Directory

Azure Active Directory (Azure AD) is a cloud-based identity and access management service. This service helps your employees access external resources\*\*,\*\* such as **Microsoft 365,** the **Azure portal,** and thousands of other **SaaS** applications.

To configure OpenID Connect(OIDC) within Appsmith using Active Directory as an OIDC provider, follow these steps:

### Create an Application


1. Log in to your [Azure](https://portal.azure.com/#allservices) account and click on **More services**.
2. Click on Azure Active Directory and hit “**+Add**.” From the "+Add" dropdown, select “**App Registration**.”
3. Under App Registration:
   1. **Name**: Give your App a meaningful name.
   2. **Supported account types**: Select “Accounts in this organizational directory only (Default Directory only - Single tenant)."
   3. **Redirect URL**: select the application type as Web for Platform and add the redirect URL (Copied from the [OIDC window in Appsmith’s Admin Settings](./#capture-redirect-url-for-sso-configuration)).
4. Click on Register to create the application.

### Configure Active directory with Appsmith

On the application homepage, go to the overview tab and perform the following actions under the essentials dropdown:

* Copy the **Application (client) ID** and paste it under the **Client ID** in the OIDC configurations in Appsmith.
* For Client secret, click on “Client credentials: Add a certificate or secret.”
  * In the “Certificates and Secrets window,” go to the **Client secret** tab and click on “New client secret.”
  * Add the key's description and expiration time in the “**Add a client secret**” pop-up. Click on Save.
  * Copy the value of the new Client secret and add it under **Client secret** in the OIDC configurations in Appsmith.


* Click the **Endpoints** tab under App overview and copy the **OpenID Connect metadata document** URL.

* Open the metadata URL in a browser window and copy the following configurations from the above link and add them to OIDC Configurations on Appsmith:

| **Azure Active Directory Configuration** | **OIDC configuration field in Appsmith** |
| ---------------------------------------- | ---------------------------------------- |
| authorization\_endpoint                  | Authorization URL                        |
| token\_endpoint                          | Token URL                                |
| userinfo\_endpoint                       | User Info URL                            |
| jwks\_uri                                | JWK Set URL                              |

Appsmith - OIDC Setup

### Configure Scopes

The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details ( after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. You'll see the Scope field below the **JSON Web Key Set**:

#### What does Appsmith need as part of Scopes?

Appsmith needs **openid** as a mandatory scope. It's also highly recommended to use the **offline\_access** scope to avoid errors related to expired access tokens and excessive re-login requests.


Enabling the `offline_access` scope enables your app to receive refresh tokens that extend the duration that your users have access to their resources. To read more, see the [Active Directory documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#offline\_access).


You can add more scopes if you wish, provided that they're available via Active Directory.

### Configure Scopes in Active Directory



To configure scopes/permissions on Active Directory, follow the steps below:

1. Go to API permissions on the left panel.
2. Click on Add a permission button.
3. Under Request API permissions, Select Microsoft Graph and click on Delegated permissions.
4. Select the following permissions:
   1. Under **OpenID** permissions-
      1. email
      2. openid
      3. Profile
   2. Under **User** permissions-
      1. User.Read
5. Once complete, these scopes will get added to the Active Directory application.
6. Click on **Grant admin consent for Default Directory** on the top of the table, next to Add a permission button.

### Configure Username Attributes for Active Directory

The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that you consider for logging.


#### What does Appsmith need as a Username Attribute?

For Active Directory, Appsmith considers **"sub"** address as username. Please ensure that you have added "**sub**" as an attribute in the Username Attribute field.

### Complete OIDC Setup

* Save the changes and restart your application by clicking `SAVE & RESTART` button.

![Click on the "SAVE & RESTART" button to complete the setup

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on Login Screen