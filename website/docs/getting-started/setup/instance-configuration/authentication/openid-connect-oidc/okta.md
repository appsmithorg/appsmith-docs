---
sidebar_position: 4.3
---
# Okta

Okta is an Identity-as-a-Service (IDaaS) provider. To configure OpenID Connect (OIDC) within Appsmith using Okta, follow these steps:

:::info
OpenID Connect is available **only in the** [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances**, and only the **Superuser** of your **Appsmith Instance** can set up **OIDC**.
:::

### **Create Application**

* Log in to your [Okta Developer Account](https://developer.okta.com) and go to **Applications**. (Please create an account if you don’t have one).

![Create a new app on Okta for SSO Configuration](/img/Okta-Create-Application.png)

* Click **Create App integration**. In Create App integration window, choose **OIDC** as the Sign-in method and **Web application** as the Application type. Click **Next**.

![New App Configurations](/img/Okta-Create-App-Integration-Config.png)

* In the **General settings** of the newly created App Integration:
  * Give your App integration a meaningful name (Optional.)

![New App - General Settings](/img/as_okta_edited.png)

* Add the redirect URL (Copied from the [OIDC window in Appsmith’s Admin Settings](./#capture-redirect-url-for-sso-configuration)) in the **Sign-in redirect URL** field.

![Redirect URL available at Appsmith >> Profile >> Admin Settings >> Authentication >> OIDC](/img/Appsmith-Admin-Settings-Authentication-OIDC-RedirectURL.png)

You can add multiple redirect URLs.

![Okta - Sign-in redirect URIs](/img/Okta-Sign-in-redirect-URis.png)

* Under Assignment, configure the Accessibility of this App as required.

![Configure Assignments](/img/Okta-Assignments.png)

* Click **Save**. This action creates the app integration and opens the settings page to configure additional options.

### Configure Okta fields in Appsmith

To continue with the OIDC setup on Appsmith, navigate to the fields on the Okta configurations, and perform the actions as mentioned below:

*   On the Okta Application homepage, go to the **General** tab:

    * Copy the **Client ID** and **Client Secret** and paste them into the **OIDC** configurations in Appsmith.



![Client ID, Client Secret, and Okta Domain](</img/Screenshot_2022-07-18_at_11.45.21_AM.png>)

* **Configuration at Okta**
  * Copy your Okta domain URL, attach <mark >`/.well-known/openid-configuration`</mark> to it, and open this modified URL in your browser.

```
<your_okta_domain>/.well-known/openid-configuration
```

<VideoEmbed host="youtube" videoId="dgDhBUXKA6s" title="Get Okta Configurations" caption="Get Okta Configurations"/>

* **Configuration at Appsmith** - Add all the configurations from the above URL in OIDC Configurations on Appsmith. Refer to the below table that shows field mapping:

| **Fields (Okta)**       | **Fields (Appsmith)** |
| ----------------------- | --------------------- |
| authorization\_endpoint | Authorization URL     |
| token\_endpoint         | Token URL             |
| Userinfo\_endpoint      | User Info URL         |
| Jwks\_uri               | JWK Set URL           |

![Appsmith - OIDC Setup](/img/Appsmith-Admin-Settings-Authentication-OIDC-Setup.png)

> `RS256` is the default Token Signing Algorithm used by Appsmith and most identity providers. If you have a custom setup, you can choose from one of the supported algorithms under the Advanced section of the Appsmith OIDC setup page. Please note, verifying tokens signed with the `HS256` algorithm isn't supported.

### Configure scopes for Okta

The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details ( after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. Just below the **JSON Web Key Set,** you’ll see the **Scope** field:

![Configure Scopes at Appsmith](/img/as_oidc_offline.png)

#### What does Appsmith need as part of Scopes?

Appsmith needs **openid** as a mandatory scope. It's also highly recommended to use the **offline_access** scope to avoid errors related to expired access tokens and excessive re-login requests.

:::info
Enabling the `offline_access` scope enables your app to receive refresh tokens that extend the duration that your users have access to their resources. To read more, see the [Okta documentation](https://developer.okta.com/docs/reference/api/oidc/#scopes).
:::

You can add more scopes if you wish, provided that they're available via Okta.

#### Okta scope

Okta provides a number of [configurable scopes](https://developer.okta.com/docs/guides/implement-oauth-for-okta/main/) that can be granted based on your business requirements. Navigate to **Okta API Scopes**, where you’ll be able to grant all or selected scopes.

![Okta Scope Set up](/img/Okta-Scopes.png)

### Configure username attributes for Okta

The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that you consider for logging.

![Appsmith Username Attribute](/img/Appsmith-UsernameAttribute-Field.png)

#### What does Appsmith need as a username attribute?

Appsmith considers **email address** as **username**. Please ensure that you have added it as an attribute in the Username Attribute field. Please provide **email** as the attribute name for configuring the username attribute for Okta.

### Complete OIDC setup

* Save the changes and restart your application by clicking **SAVE & RESTART** button.

![Click the "SAVE & RESTART" button to complete the setup](/img/Appsmith-OIDC-Setup-Complete.png)

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on the Login Screen](/img/Appsmith-SSO-OIDC-Available.png)
