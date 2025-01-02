---
description: >-
  Configure Google OAuth to enable login via Google for the Appsmith
  installation
sidebar_position: 1
---

# Google OAuth

This page shows how to configure Appsmith to use [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) as an authentication provider. By integrating with Google OAuth 2.0, Appsmith enables end users to sign in to their Appsmith accounts using their Google credentials.


## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. A [Google Workspace](https://workspace.google.com/intl/en_in/) account.
3. Before setting up Google Auth, ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.
4. In Appsmith, go to **Admin Settings** > **Authentication** and click **Enable** on  **Google**.



## Configure Google API console

1. Open the [Google API console](https://console.cloud.google.com/apis) to obtain the authorization credentials needed for Appsmith to connect with Google’s OAuth 2.0 server.

<dd>

<ZoomImage src="/img/Google_OAuth_Consent_1.png" alt="" caption="" />

</dd>

2. Create a new project, and navigate to the **OAuth consent screen** under APIs & Services. Configure and register your app based on your target users, and click **Create**.



3. In the **OAuth consent screen**, enter the app information, contact email, and specify the **Authorized domains** where Appsmith is hosted. Click **Save and Continue**.

<dd>

<ZoomImage src="/img/auth-google-oauth.png" alt="" caption="" />

</dd>

4. In the **Scopes** section, add scopes such as `email`, `profile`, and `openid`, or others as needed. Click **Save and Continue**.


<dd>

<ZoomImage src="/img/google-scopes-auth.png" alt="" caption="" />

</dd>


5. Add **Test** users if needed, then click **Save**.

6. Navigate to the **Credentials** section, click **Create Credentials**, and select **OAuth client ID**.

<dd>

<ZoomImage src="/img/Google_OAuth_Creds.png" alt="" caption="" />

</dd>


7. Under **Application type**, select **Web application**. Copy the following URLs from Appsmith and paste them into the corresponding fields:

<dd>

- **Authorized JavaScript origins:** This is the URL where Appsmith is hosted. Copy the JavaScript origins URL from the Google configuration in Appsmith and paste it here.

- **Authorized redirect URIs**: Copy the Redirect URL from the Google configuration in Appsmith (e.g., `https://app.appsmith.com/login/oauth2/code/google`) and paste it here.

</dd>

8. Click **Create**. After the OAuth client is created, copy the **Client ID** and **Client Secret** to use in Appsmith’s Google configuration.


<dd>

<ZoomImage src="/img/clientid-googleauth.png" alt="" caption="" />

</dd>


## Register Google OAuth in Appsmith

To complete the Google OAuth configuration, you have to register the provider on Appsmith. Go to **Admin Settings > Authentication > Google**, and follow the steps below:

<ZoomImage src="/img/google-auth-appsmith.png" alt="" caption="" />


1. Add the **Client ID** and **Client Secret** copied from the Google API console into the respective fields.

2. In the **Allowed Domain** field, add the domains where Appsmith accepts sign-ins via Google. This restricts access to specified domains, ensuring only users with emails from these domains can log in through Google.

3. Once you have added the details, click the **Save & Restart** button to save the configuration and restart the instance.


:::info
If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
:::
 
After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the Google Login button.



<ZoomImage src="/img/google-auth-main.png" alt="" caption="" />




## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.
