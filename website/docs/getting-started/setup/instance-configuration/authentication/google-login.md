---
description: >-
  Configure Google OAuth to enable login via Google for the Appsmith
  installation
sidebar_position: 1
---

# Google OAuth

Appsmith provides a way to integrate with Google OAuth 2.0, enabling end users to sign in to the Appsmith account using their Google authentication credentials.

## Configure Google API Console

To enable Google Sign-in, go to the [Google API console](https://console.cloud.google.com/apis) to get the authorization credentials that identify Appsmith to Google's OAuth 2.0 server. Create a new project and follow the steps below:

1. Navigate to the **OAuth consent screen** under **APIs & Services**. Choose how you want to configure and register your app, including your target users and click **Create**.

  ![Click to expand](</img/Google_OAuth_Consent_1.png>)

2. Configure the OAuth consent screen with information about the app and the **Authorized domains** where you are hosting Appsmith.

  ![Click to expand](</img/Google_OAuth_Consent.png>)

3. Navigate to the **Credentials** screen and click **Create Credentials**, select **OAuth client ID** from the options to create OAuth credentials.

  ![Click to expand](</img/Google_OAuth_Creds.png>)

4. Select **Web application** under the **Application type** dropdown list. Update the following fields:

    1. **Authorized JavaScript origins** - The HTTP origins that host your web application.  (Eg: `https://app.appsmith.com`)
    2. **Authorized redirect URIs**  - Append the path that users should be redirected to after they have authenticated with Google (Eg: `https://app.appsmith.com/login/oauth2/code/google`)

5. Click **Create**. You can get the Client ID and Client secret under **OAuth 2.0 Client IDs** in the **Credentials** screen.

  ![Click to expand](</img/Google_Oauth_Creds_2.png>)

## Configure Appsmith instance  

:::caution
* The Client ID and Client Secret entered aren't verified by any means. Please test it out manually before disabling the Form login authentication method. If Form login is disabled before testing the Google authentication configuration setup, it may lead to the user getting stuck on the login screen if the Google configuration is invalid. You’ll have to update the environment variables manually to fix this, as you can't edit it via the Admin settings page since you won’t be logged in anymore.

* If you are running appsmith behind an ELB / Proxy, [configure Nginx](/help-and-support/troubleshooting-guide/deployment-errors#oauth-sign-up-not-working).
:::

There are two ways to configure the self-hosted Appsmith instance - Admin Settings and Environment Variables:

**On Admin Settings screen (recommended):**  On your self-hosted instance, navigate to the [Admin Settings page](/getting-started/setup/instance-configuration/). Under the **Authentication** tab,  provide the Client ID and Client Secret generated in the previous steps.

  Once you've entered your Client ID and Client Secret, click the **Save & Restart** button at the bottom of the page. This prompts your Appsmith instance with the new configuration in effect.

![](/img/as_google_auth_config.png)

**Using environment variables:** Update the values for the following keys in your configuration file.

    * Configure the `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID` and `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET` fields with the client ID and client secret generated in the step above
    * Configure `APPSMITH_SIGNUP_ALLOWED_DOMAINS` with a second-level domain name (eg: `abc.com`), to only allow users with an email address from that domain name to log in (eg: `john@abc.com`). You can provide several domain names using a comma-separated list.
    * Restart the Appsmith instance.
    
  ```bash
  # Example configuration in docker.env file
  # ******** Google OAuth ********
  APPSMITH_OAUTH2_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
  APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
  APPSMITH_SIGNUP_ALLOWED_DOMAINS=exampledomain.com
  # ******************************
   ```

After these steps, Google Login should be enabled for your Appsmith installation.
