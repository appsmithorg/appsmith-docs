# Auth0

[Auth0](https://auth0.com/) is an authentication and authorization as a service provider. To configure OpenID Connect(OIDC) within Appsmith using Auth0 as an OIDC provider, follow these steps:

{% hint style="info" %}
OpenID Connect is available **only in the** [**enterprise edition**](https://www.appsmith.com/pricing) for **self-hosted instances**, and only the **Superuser** of your **Appsmith Instance** can set up **OIDC**.
{% endhint %}

### Create Application

* Log in to your [Auth0](https://auth0.com/) account and go to **Applications**. (Please create an account if you don’t have one on [Auth0](https://auth0.com/)).

![Navigate to Applications >> Applications >> click Create Application](<../../../../.gitbook/assets/Auth0-NewApplication-OIDC-Authentication (1).png>)

* Click on **+Create Application** and pick **Regular Web Applications** from the given options. The default name of the application is **My App**. You can change it as per your requirements.

![](../../../../.gitbook/assets/Auth0-NewApplication-OIDC-RegularWebApp.png)

* Open the newly created Auth0 App, go to the settings tab and -
  * Add the Redirect URL (Copied from [OIDC window in Appsmith’s Admin Settings](./#capture-redirect-url-for-sso-configuration)) in the following fields -

![Redirect URL available at Appsmith >> Profile >> Admin Settings >> Authentication >> OIDC](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-OIDC-RedirectURL.png)

* Application Login URL
* Allowed Callback URLs

![Add Appsmith Redirect URL to fields- Application Login URI & Allowed Callback URLs](../../../../.gitbook/assets/Auth0-Appsmith-RedirectURL.png)

### Configure Auth0 fields in Appsmith

To continue with the OIDC setup on Appsmith, navigate to Auth0 configurations and perform the following actions:

* Copy the **Client ID**, and **Client Secret** paste them into the OIDC configurations in Appsmith.

![Add Client ID and Client Secret to the OIDC config on Appsmith](<../../../../.gitbook/assets/Auth0-ClientId-Client Secret.png>)

* Go to **Advance Settings** and open the endpoints tab. Copy the required **OAuth URLs** and add them to your OIDC configurations. Add all the URLs copied from Auth0 to Appsmith.
  * Configurations at Auth0

![Auth0 OIDC Configurations](../../../../.gitbook/assets/Auth0-OIDC-Config-Setup.png)

* Configuration at Appsmith

![Appsmith OIDC Configurations](../../../../.gitbook/assets/Appsmith-Admin-Settings-Authentication-OIDC-Setup.png)

### Configuring Scopes for Auth0

The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details (after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. Just below the **JSON Web Key Set,** you’ll see the **Scope** field:

![Configure one or more scopes at Appsmith](../../../../.gitbook/assets/Appsmith-Scope-Field.png)

#### What does Appsmith need as part of Scopes?

Appsmith needs an **openId** as a mandatory scope. You can add more scopes if the need be. You can ensure that the same is available at Auth0.

#### Auth0 Scope

Auth0 provides standard claims: openId, profile, and email as part of the authorization action. If you want to access [additional user attributes, you’ll have to configure them on the Auth0](https://auth0.com/docs/get-started/apis/scopes/openid-connect-scopes) and add them to Appsmith as part of the Scope field.

### Configuring Username Attributes for Auth0

The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that you consider for logging.

![Configure Username Attribute at Appsmith](../../../../.gitbook/assets/Appsmith-UsernameAttribute-Field.png)

#### What does Appsmith need as a Username Attribute?

Appsmith considers **email address** as **username**. Please ensure that you have added it as an attribute in the Username Attribute field. Please provide **email** as the attribute name for configuring the username attribute for Auth0.

### Complete OIDC Setup

* Save the changes and restart your application by clicking `SAVE & RESTART` button.

![Complete the setup by clicking the "SAVE & RESTART" button](../../../../.gitbook/assets/Appsmith-OIDC-Setup-Complete.png)

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on Login Screen](../../../../.gitbook/assets/Appsmith-SSO-OIDC-Available.png)
