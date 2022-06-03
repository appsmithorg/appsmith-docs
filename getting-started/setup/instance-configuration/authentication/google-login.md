---
description: >-
  Configure Google OAuth to enable login via Google for the Appsmith
  installation
---

# Google OAuth

![Click to expand](<../../../../.gitbook/assets/Google Login.png>)

To enable Google Sign in, login to your [google cloud console](https://console.cloud.google.com/)

**1. Navigate to the** [**OAuth consent section**](https://console.cloud.google.com/apis/credentials/consent) **under APIs & Services**

![Click to expand](<../../../../.gitbook/assets/Google OAuth Consent 1.png>)

**2. Configure the consent screen with the domain on which you want to host Appsmith**

![Click to expand](<../../../../.gitbook/assets/Google OAuth Consent.png>)

**3. Navigate to the** [**credentials section**](https://console.cloud.google.com/apis/credentials) **and create new OAuth Credentials**

![Click to expand](<../../../../.gitbook/assets/Google OAuth Creds.png>)

**4. Configure the OAuth Credentials for a web application**

**Javascript Origins:** The domain on which you are hosting Appsmith with https **`(ex: https://app.appsmith.com)`**

**Redirect URIs:** Append **/login/oauth2/code/google** to your Javascript origins **`(ex: https://app.appsmith.com/login/oauth2/code/google)`**

![Click to expand](<../../../../.gitbook/assets/Google Oauth Creds 2.png>)

**5. Update the**[ **instance configuration**](../) **with the following fields**

```bash
# Example docker configuration
# ******** Google OAuth ********
APPSMITH_OAUTH2_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
APPSMITH_SIGNUP_ALLOWED_DOMAINS=exampledomain.com
# ******************************
```

* Configure the `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID` and `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET` fields with the client ID and client secret generated in the step above
* Configre `APPSMITH_SIGNUP_ALLOWED_DOMAINS` with a second-level domain name **`(ex: abc.com)`**, to only allow users with an email address from that domain name to log in **`(ex: john@abc.com)`**
  * **Note**: you can provide several domain names using a comma-separated list

{% hint style="warning" %}
The Client ID and Client Secret entered are not verified by any means. Please test it out manually before disabling the Form login authentication method. If Form login is disabled before testing the Google authentication config setup, it may lead to the user getting stuck on the login screen if the Google config is incorrect. You’ll have to update the env variables manually to fix this, as you cannot update it via the Admin settings page since you won’t be logged in anymore
{% endhint %}

**6.** [**Restart the Appsmith instance**](../)

{% hint style="success" %}
Google Login should now be enabled for your Appsmith installation. If you are running appsmith behind an ELB / Proxy, please configure Nginx [following this guide](../../../../help-and-support/troubleshooting-guide/deployment-errors.md#oauth-sign-up-not-working)
{% endhint %}
