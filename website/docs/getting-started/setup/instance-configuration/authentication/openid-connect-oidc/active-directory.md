---
description: >-
  Setup OIDC using Active Directory
---
# Active Directory

To configure Appsmith to use [Azure Active Directory (Azure AD)](https://portal.azure.com/#allservices) as a OIDC provider, follow the steps below:

## Prerequisites

1. In Appsmith, go to **Admin Settings > Authentication** and click **Enable** on  **OIDC**.

2. Copy the **Redirect URL** from the **OIDC** configuration page to add it later in the Active Directory settings. 

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

   c. In **Redirect URI**, select the platform as **Web** and add the Redirect URL in the adjacent input field.

   d. Click **Register**.

5. On the application homepage, copy the **Application (client) ID** to add it later in the OIDC configurations in Appsmith.
6. To get the Client secret:

   a. On the application homepage, click **Add a certificate or secret** from the **Client credentials** label.

   b. On the **Certificates & secrets** page, go to the **client secrets** tab and click **New client secret**.

   c. On **Add a client secret** panel, add the description and define the expiration of the key. Click **Add**.

   d. Copy the **Value** of the **Client secret** to add it later in the OIDC configurations in Appsmith.

7. Go back to the application homepage, and click the **Endpoints** tab from the navigation bar. 
8. In the **Endpoints** panel, copy and open the **OpenID Connect metadata document** URL in a new browser tab, and copy the following URLs from that page:

   a. **authorization_endpoint**

   b. **token_endpoint**

   c. **userinfo_endpoint**

   d. **jwks_uri**

### Configure scopes on Active Directory

1. To configure scopes on Active Directory, go to **API permissions** from the sidebar and click **Add Permission**.
2. On the **Request API permissions** panel, select **Microsoft Graph > Delegated permissions**.
3. In the **Select permissions** section, select the following permissions from the **Openid permissions** dropdown:

   a. email

   b. openid

   c. Profile

4. Scroll down to the **Users** dropdown and select **Users.Read**. Click **Add permissions**.
5. Go back to the **API permissions** page and click **Grant admin consent for this directory**.


## Register Active Directory in Appsmith

To complete the OIDC configuration, you have to register the identity provider on Appsmith. Open the OIDC configurations in Appsmith (**Admin Settings > Authentication > OIDC**), and follow the steps below:

1. Add the  **Application (client) ID** copied from the Active Directory application in the  **Client ID** field. 

2. Add the **Value** of the Client secret copied from the Active Directory application in the  **Client Secret** field.

3. Add the URLs copied from the **OpenID Connect metadata document** page into OIDC configurations in Appsmith as per the table below:

| **Azure Active Directory URLs** | **OIDC configuration field** |
| ---------------------------------------- | ---------------------------------------- |
| authorization_endpoint                  | Authorization URL                        |
| token_endpoint                          | Token URL                                |
| userinfo_endpoint                       | User Info URL                            |
| jwks_uri                                | JWK Set URL                              |

4. In the **Scopes** section, add the attributes that allow you to authorize access to user details after a user is successfully authenticated. By default, there are three scopes - **openid**, **email**, **profile**. Appsmith needs **openid** and **email** as mandatory scopes. You can add more scopes, provided that they're available via Active Directory.

5. In the **Attributes** section, add the attributes you want to use as usernames for authentication. By default, the attribute **email** is added, indicating that the user's email address is used as the username for authentication.

Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

<figure>
  <img src="/img/Appsmith-Login-Screen-Shows-OIDC.png" style= {{width:"400px", height:"auto"}} alt="OIDC-login"/>
  <figcaption align = "center"><i>Login with OIDC SSO </i></figcaption>
</figure>
