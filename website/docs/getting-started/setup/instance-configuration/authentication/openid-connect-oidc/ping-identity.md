---
sidebar_position: 4.2
---
# Ping Identity

[Ping Identity](https://www.pingidentity.com/en/platform/capabilities/single-sign-on.html) (PingID) is a cloud-based authentication provider. To configure OpenID Connect(OIDC) within Appsmith using PingID as an OIDC provider, follow these steps:

:::info
OpenID Connect is available **only in the** [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances**, and only the **Superuser** of your **Appsmith Instance** can set up **OIDC**.
:::

### Create environment

* Log into your [Ping One](https://www.pingidentity.com/en/resources/downloads/pingone.html) account (Please create a new account if you don’t have one) and:
  * On the top left, click the Ping Identity logo.
  * Select **Home**. You’ll see the list of environments available. Click `Add Environment` available on the top right.

![Create Environment](/img/PingID-Add-Environment.png)

* Click **Build your own solution** in the **Create Environment** window and choose `PingOne SSO` from the given options.

<VideoEmbed host="youtube" videoId="B-Vsbqkkwqg" title="Build your own Solution" caption="Build your own Solution"/>

* Fill in the details about the environment and click on Next.

<VideoEmbed host="youtube" videoId="h8QqEhbpEPs" title="Environment Configuration" caption="Environment Configuration"/>

* Go to **Connections** from the sidebar and click on **Applications**. Create a new Application by clicking on the `+` button.
* On the New application window, select `Web App` and choose OIDC as the connection type. Enter the application name and description (optional) on the next page.
* On the Configure window, add the Redirect URL of your Appsmith application (Copied from the [OIDC window in Appsmith’s Admin Settings](./#capture-redirect-url-for-sso-configuration)) and click on Save and Continue.

![Redirect URL available at Appsmith >> Profile >> Admin Settings >> Authentication >> OIDC](/img/Appsmith-Admin-Settings-Authentication-OIDC-RedirectURL.png)

* Use the **Grant Access Resources** to filter the scopes by **openid** resource type. Move the desired scopes to **Scope Grants** to give access to the resources. Click **Save and Continue**.
* In the Attribute Mapping, add the OIDC attributes. Please note that only the values added in the `Scope Grant` will be valid here. Hit **Save and Close**, and your application is ready.

<VideoEmbed host="youtube" videoId="fRreXB6P0No" title="Configure Environment and Scope" caption="Configure Environment and Scope"/>

* In your app's settings pane, navigate to the **Configuration** tab. Click the pencil icon to begin editing the app's settings, and tick the **Refresh Token** box to enable Ping Identity to issue refresh tokens to Appsmith. Your app is now configured for use with Appsmith.

<VideoEmbed host="youtube" videoId="y7f2kXY9zcw" title="Enable Refresh Tokens in Ping Identity Dashboard" caption="Enable Refresh Tokens in Ping Identity Dashboard"/>

* Under the general section, you can see the basic information about your application. You can add multiple **Redirect URLs** by simply editing the general configurations. (Allows you to use this PingID application for multiple Appsmith applications).

![PingID - Redirect URL](/img/PingID-General-Configuration.png)

* Enable user access to the application from the toggle switch in the top right corner.

![Enable - User Access](/img/PingID-Application-Enable-User-Access.png)

### Configure PingID fields in Appsmith

To continue with the OIDC setup on Appsmith, navigate to the fields on the Ping Identity configurations, and perform the actions mentioned below:

* Go to the **configuration** tab. Here, you’ll get all the configurations that are required to be added to your Appsmith application (Admin Settings →Authentication →OIDC)
  * **Configurations on PingID**

![PingID - Configurations](/img/PingID-Configurations.png)

* **Configurations at Appsmith**

![Appsmith - OIDC Setup](/img/Appsmith-Admin-Settings-Authentication-OIDC-Setup.png)

> `RS256` is the default Token Signing Algorithm used by Appsmith and most identity providers. If you have a custom setup, you can choose from one of the supported algorithms under the Advanced section of the Appsmith OIDC setup page. Please note, verifying tokens signed with the `HS256` algorithm isn't supported.

### Configure scopes for Ping Identity

The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details ( after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. Just below the **JSON Web Key Set,** you’ll see the **Scope** field:

![Appsmith - configure scopes](/img/as_oidc_offline.png)

#### What does Appsmith need as part of Scopes?

Appsmith needs **openId** as a mandatory scope. Ensure that the same is available at Ping Identity. You can add more scopes if you need.

#### Ping Identity scope

Ping Identity supports [static and dynamic scopes](https://docs.pingidentity.com/bundle/pingfederate-92/page/adminGuide/pf\_c\_scopesAndScopeManagement.html). A static scope is defined using a text value that could be an attribute name. Dynamic scope is defined using a variable name that holds the attribute value at runtime. Ping Identity provides [an exhaustive guide to configure scopes](https://docs.pingidentity.com/bundle/pingfederate-91/page/pf\_t\_defineScopes.html) available on their portal.

### Configure username attributes for Ping Identity

The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that your SSO provider considers for logging.

![Appsmith - Add Username Attribute](/img/Appsmith-UsernameAttribute-Field.png)

#### What does Appsmith need as a username attribute?

Appsmith considers **email address** as **username**. Please ensure that you have added it as an attribute in the Username Attribute field. Please provide **email** as the attribute name for configuring the username attribute for PingIdentity.

### Complete OIDC setup

* Save the changes and restart your application by clicking **SAVE & RESTART** button.

![Click "SAVE & RESTART" to complete the setup](/img/Appsmith-OIDC-Setup-Complete.png)

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on the Login Screen](/img/Appsmith-SSO-OIDC-Available.png)
