---
description: >-
  Configure Google OAuth to enable login via Google for the Appsmith
  installation
sidebar_position: 1
---

# Google OAuth

Appsmith provides a way to integrate with Google OAuth 2.0, enabling end users to sign in to the Appsmith account using their Google authentication credentials.

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.

2. A [Google Workspace](https://workspace.google.com/intl/en_in/) account.

3. Before setting up Google Auth, ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.

4. In Appsmith, go to **Admin Settings** > **Authentication** and click **Enable** on  **Google**.



## Configure Google API console

1. Go to the [Google API console](https://console.cloud.google.com/apis) to get the authorization credentials that identify Appsmith to Google’s OAuth 2.0 server.

<dd>

<ZoomImage src="/img/Google_OAuth_Consent_1.png" alt="" caption="" />

</dd>

2. Create a new project, and navigate to the **OAuth consent screen** under APIs & Services. Configure and register your app based on your target users, and click **Create**.

<dd>

<ZoomImage src="/img/auth-google-oauth.png" alt="" caption="" />

</dd>

3. In the **OAuth consent screen**, add app information and a contact email, and specify the Authorized domains where Appsmith is hosted. Click **Save and Continue**.

4. In the **Scopes** section, add basic scopes like `email`, `profile` and `openid`, or others based on your requirements. Click **Save and Continue**.


<dd>

<ZoomImage src="/img/google-scopes-auth.png" alt="" caption="" />

</dd>


5. Add **Test** users if required, then click **Save**.

6. Navigate to the **Credentials** screen, click **Create Credentials**, and select **OAuth client ID**.

<dd>

<ZoomImage src="/img/Google_OAuth_Creds.png" alt="" caption="" />

</dd>


7. Select **Web application** under Application type. Update the fields as follows:

<dd>

- **Authorized JavaScript origins:** Add the JavaScript origins URL copied from the Google configuration in Appsmith.

- **Authorized redirect URIs**: Add the Redirect URL copied from the Google configuration in Appsmith (e.g., `https://app.appsmith.com/login/oauth2/code/google`).

</dd>

8. Click **Create**. Once the OAuth client is created, copy the **Client ID** and **Client Secret** to use in Appsmith’s Google configuration.

<dd>

<ZoomImage src="/img/clientid-googleauth.png" alt="" caption="" />

</dd>


## Register Google in Appsmith

To complete the Google configuration, you have to register the provider on Appsmith. Go to **Admin Settings > Authentication > Google**, and follow the steps below:

<ZoomImage src="/img/google-auth-appsmith.png" alt="" caption="" />


1. Add the **Client ID** and **Client Secret** copied from the Google API console into the respective fields.

2. In the **Allowed Domain** field, enter the domains where Appsmith accepts sign-ins via Google. This restricts access to specified domains, ensuring only users with emails from these domains can log in through Google.

3. Once you have added the details, click the **Save & Restart** button to save the configuration and restart the instance.


:::info
If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
:::
 
After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the Google Login button.



<ZoomImage src="/img/google-auth-main.png" alt="" caption="" />




## Further reading

- [Instance Configuration](/getting-started/setup/instance-configuration)
- [Instance Management](/getting-started/setup/instance-management)
