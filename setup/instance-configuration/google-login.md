---
description: >-
  Configure Google OAuth to enable login via Google for the Appsmith
  installation
---

# Google OAuth

![Click to expand](../../.gitbook/assets/google-login.png)

To enable Google Sign in, login to your [google cloud console](https://console.cloud.google.com/)

**1. Navigate to the** [**OAuth consent section**](https://console.cloud.google.com/apis/credentials/consent) **under APIs & Services**

![Click to expand](../../.gitbook/assets/google-oauth-consent-1.png)

**2. Configure the consent screen with the domain on which you want to host Appsmith**

![Click to expand](../../.gitbook/assets/google-oauth-consent.png)

**3. Navigate to the** [**credentials section**](https://console.cloud.google.com/apis/credentials) **and create new OAuth Credentials**

![Click to expand](../../.gitbook/assets/google-oauth-creds.png)

**4. Configure the OAuth Credentials for a web application**

**Javascript Origins:** The domain on which you are hosting Appsmith with https **`(ex: https://app.appsmith.com)`**

**Redirect URIs:** Append **/login/oauth2/code/google** to your Javascript origins **`(ex: https://app.appsmith.com/login/oauth2/code/google)`**

![Click to expand](../../.gitbook/assets/google-oauth-creds-2.png)

**5. Update the**[ **instance configuration**](./) **with the following fields** 

```bash
# Example docker configuration
# ******** Google OAuth ********
APPSMITH_OAUTH2_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
APPSMITH_OAUTH2_ALLOWED_DOMAINS=exampledomain.com
# ******************************
```

* Configure the `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID` and `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET` fields with the client ID and client secret generated in the step above
* Configre `APPSMITH_OAUTH2_ALLOWED_DOMAINS` with a second-level domain name **`(ex: abc.com)`**, to only allow users with an email address from that domain name to log in **`(ex: john@abc.com)`**
  * **Note**: you can provide several domain names using a comma-separated list

**6.** [**Restart the Appsmith instance**](./)

{% hint style="success" %}
Google Login should now be enabled for your Appsmith installation. If you are running appsmith behind an ELB / Proxy, please configure Nginx [following this guide](../../troubleshooting-guide/deployment-errors.md#oauth-sign-up-not-working)
{% endhint %}

