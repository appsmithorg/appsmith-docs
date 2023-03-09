---
description: >-
  Configure Google OAuth to enable login via Google for the Appsmith
  installation
sidebar_position: 1
---

# Google OAuth

Appsmith allows you to integrate with Google to authenticate users to your apps.

## Configure Google Cloud

To enable Google Sign in, log in to your [google cloud console](https://console.cloud.google.com/) and follow the steps below:

1. Navigate to the [**OAuth consent screen**](https://console.cloud.google.com/apis/credentials/consent) under **APIs & Services**.

  ![Click to expand](</img/Google_OAuth_Consent_1.png>)

2. Configure the consent screen with the domain you want to host Appsmith.

  ![Click to expand](</img/Google_OAuth_Consent.png>)

3. Navigate to the [**credentials**](https://console.cloud.google.com/apis/credentials) and create new OAuth Credentials.

  ![Click to expand](</img/Google_OAuth_Creds.png>)

4. Select the application type as a Web application. Update the following fields:

    1. **Javascript Origins:** the domain on which you are hosting Appsmith with HTTPS **`(ex: https://app.appsmith.com)`**
    2. **Redirect URIs:** append **/login/oauth2/code/google** to your Javascript origins **`(ex: https://app.appsmith.com/login/oauth2/code/google)`**

5. Click Create. You can get the Client ID and Client secret under "OAuth 2.0 Client IDs" in the Credentials tab.

  ![Click to expand](</img/Google_Oauth_Creds_2.png>)

## Configure your instance  

Update the [**instance configuration**](../) with the following fields:

<<<<<<< HEAD
1. **Configure via UI (recommended)**: On your self-hosted instance, navigate to the [Admin Settings page](/getting-started/setup/instance-configuration/admin-settings#using-the-admin-settings-ui). Under the **Authentication** tab, you can find fields for providing your Client ID and Client Secret generated in the previous steps.
=======
  On your self-hosted instance, navigate to the [Admin Settings page](/getting-started/setup/instance-configuration/). Under the **Authentication** tab, you can find fields for providing your Client ID and Client Secret generated in the previous steps.
>>>>>>> main

![](/img/as_google_auth_config.png)

Once you've entered your Client ID and Client Secret, click the **Save & Restart** button at the bottom of the page. This prompts your Appsmith instance with the new configuration in effect.

2. **Configure via docker.env file**: On the machine hosting the Appsmith instance, find your `docker.env` file located in `<project-root>/stacks/configuration/`. Update the values for the following keys:

  ```bash
  # Example configuration in docker.env file
  # ******** Google OAuth ********
  APPSMITH_OAUTH2_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
  APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
  APPSMITH_SIGNUP_ALLOWED_DOMAINS=exampledomain.com
  # ******************************
   ```

    * Configure the `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID` and `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET` fields with the client ID and client secret generated in the step above
    * Configure `APPSMITH_SIGNUP_ALLOWED_DOMAINS` with a second-level domain name **`(ex: abc.com)`**, to only allow users with an email address from that domain name to log in **`(ex: john@abc.com)`**
    * **Note**: you can provide several domain names using a comma-separated list
    * [Restart the Appsmith instance](../)

---

:::caution
The Client ID and Client Secret entered aren't verified by any means. Please test it out manually before disabling the Form login authentication method. If Form login is disabled before testing the Google authentication configuration setup, it may lead to the user getting stuck on the login screen if the Google configuration is invalid. You’ll have to update the environment variables manually to fix this, as you can't edit it via the Admin settings page since you won’t be logged in anymore.
:::

After these steps, Google Login should be enabled for your Appsmith installation. If you are running appsmith behind an ELB / Proxy, please configure Nginx [following this guide](/help-and-support/troubleshooting-guide/deployment-errors#oauth-sign-up-not-working).