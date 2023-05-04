---
sidebar_position: 4.4
---
# Active Directory

Azure Active Directory (Azure AD) is a cloud-based identity and access management service. This service helps your employees access external resources, such as **Microsoft 365**, the **Azure portal,** and thousands of other **SaaS** applications.

:::info
OpenID Connect is available only in the [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances,** and only the **Superuser** of your **Appsmith Instance** can set up OIDC.
:::

To configure OpenID Connect(OIDC) within Appsmith using Active Directory as an OIDC provider, follow these steps:

### Create an Application

<VideoEmbed host="youtube" videoId="GDOVdeIe3VU" title="Creating an application in Active Directory" caption="Creating an application in Active Directory"/>

1. Log in to your [Azure](https://portal.azure.com/#allservices) account and click on **More services**.
2. Click Azure Active Directory and hit “**+Add**.” From the "+Add" dropdown, select “**App Registration**.”
3. Under App Registration:
   1. **Name**: Give your App a meaningful name.
   2. **Supported account types**: Select “Accounts in this organizational directory only (Default Directory only - Single tenant)."
   3. **Redirect URL**: select the application type as Web for Platform and add the redirect URL (Copied from the [OIDC window in Appsmith’s Admin Settings](./#capture-redirect-url-for-sso-configuration)).
4. Click Register to create the application.

### Configure Active directory with Appsmith

On the application homepage, go to the overview tab and perform the following actions under the essentials dropdown:

* Copy the **Application (client) ID** and paste it under the **Client ID** in the OIDC configurations in Appsmith.
* For Client secret, click on “Client credentials: Add a certificate or secret.”
  * In the “Certificates and Secrets window,” go to the **Client secret** tab and click on “New client secret.”
  * Add the key's description and expiration time in the “**Add a client secret**” pop-up. Click **Save**.
  * Copy the value of the new Client secret and add it under **Client secret** in the OIDC configurations in Appsmith.

<VideoEmbed host="youtube" videoId="AcpfV0sQ26w" title="Creating a new Client secret in Active Directory" caption="Creating a new Client secret in Active Directory"/>

* Click the **Endpoints** tab under App overview and copy the **OpenID Connect metadata document** URL.

  <VideoEmbed host="youtube" videoId="v6N09_Q5LoY" /> 


* Open the metadata URL in a browser window and copy the following configurations from the above link and add them to OIDC Configurations on Appsmith:

| **Azure Active Directory Configuration** | **OIDC configuration field in Appsmith** |
| ---------------------------------------- | ---------------------------------------- |
| authorization\_endpoint                  | Authorization URL                        |
| token\_endpoint                          | Token URL                                |
| userinfo\_endpoint                       | User Info URL                            |
| jwks\_uri                                | JWK Set URL                              |

![Appsmith - OIDC Setup](/img/Appsmith-Admin-Settings-Authentication-OIDC-Setup.png)

> `RS256` is the default Token Signing Algorithm used by Appsmith and most identity providers. If you have a custom setup, you can choose from one of the supported algorithms under the Advanced section of the Appsmith OIDC setup page. Please note, verifying tokens signed with the `HS256` algorithm isn't supported.

### Configure scopes

The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details ( after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. You'll see the Scope field below the **JSON Web Key Set**:

![Configure scopes at Appsmith](/img/as_oidc_offline.png)

#### What does Appsmith need as part of Scopes?

Appsmith needs **openid** as a mandatory scope. It's also highly recommended to use the **offline_access** scope to avoid errors related to expired access tokens and excessive re-login requests.

:::info
Enabling the `offline_access` scope enables your app to receive refresh tokens that extend the duration that your users have access to their resources. To read more, see the [Active Directory documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#offline_access).
:::

You can add more scopes if you wish, provided that they're available via Active Directory.

### Configure scopes in Active Directory

<VideoEmbed host="youtube" videoId="D1qA11NKbNY" title="Configuring scopes in Active Directory" caption="Configuring scopes in Active Directory" />

To configure scopes/permissions on Active Directory, follow the steps below:

1. Go to API permissions on the left panel.
2. Click Add a permission button.
3. Under Request API permissions, Select Microsoft Graph and click on Delegated permissions.
4. Select the following permissions:
   1. Under **OpenID** permissions-
      1. email
      2. openid
      3. Profile
   2. Under **User** permissions-
      1. `User.Read`
5. Once complete, these scopes are added to the Active Directory application.
6. Click **Grant admin consent for Default Directory** on the top of the table, next to Add a permission button.

### Configure username attributes for Active Directory

The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that you consider for logging.

![Appsmith Username Attribute](/img/as_activedir_usernameattr.png)

#### What does Appsmith need as a username attribute?

For Active Directory, Appsmith considers **"sub"** address as a username. Please ensure that you have added "**sub**" as an attribute in the Username Attribute field.

### Complete OIDC setup

* Save the changes and restart your application by clicking **SAVE & RESTART** button.

![Click the "SAVE & RESTART" button to complete the setup](/img/Appsmith-OIDC-Setup-Complete.png)

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on the Login Screen](/img/Appsmith-SSO-OIDC-Available.png)
