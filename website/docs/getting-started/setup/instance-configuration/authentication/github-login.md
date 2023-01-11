---
description: >-
  Configure GitHub OAuth to enable Login via GitHub for the Appsmith
  installation
sidebar_position: 2
---

# GitHub OAuth

GitHub allows the integration of third-party applications using your GitHub Identity. Follow the below guide to configure GitHub OAuth.

![](</img/github_login.png>)

To enable GitHub Sign in, login to your [GitHub Account](https://github.com)

**1. Navigate to the** [**Organizations section**](https://github.com/settings/organizations) **of your profile and the settings of the organization under which you want to create an OAuth App**

![Click to expand](</img/Github_Orgs.png>)

**2. Navigate to the OAuth Apps section of the organization settings page**

![Click to expand](</img/Github_OAuth_Apps.png>)

**3. Create a new OAuth App**

![Click to expand](</img/Github_Reg_App.png>)

**4. Configure the OAuth Credentials for a web application**

**Homepage URL:** The domain on which you are hosting Appsmith with https **`(ex: https://app.appsmith.com)`**

**Authorization Callback URL:** Append **/login/oauth2/code/github** to the Homepage URL **`(ex: https://app.appsmith.com/login/oauth2/code/github)`**

![Click to expand](</img/Github_App_Config.png>)

**5. Update the** [**instance configuration**](../) **with the below fields**

```bash
# Example Docker Configuration 
# ********* Github OAUth **********
APPSMITH_OAUTH2_GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET                                                                                                                          18,61         28%
# ******************************
```

:::caution
The Client ID and Client Secret entered are not verified by any means. Please test it out manually before disabling the Form login authentication method. If Form login is disabled before testing the GitHub authentication config setup, it may lead to the user getting stuck on the login screen if the GitHub config is invalid. To fix this, you’ll have to update the ENV variables manually by adding a valid Client ID and Client Secret or enabling the form login. You won’t be able to do this via the Admin settings page since you won’t be logged in anymore.
:::

**6.** [**Restart the Appsmith instance**](../)

:::tip
GitHub Login should now be enabled for your Appsmith installation. If you are running Appsmith behind an ELB / Proxy, please configure Nginx [following this guide](/help-and-support/troubleshooting-guide/deployment-errors#oauth-sign-up-not-working)
:::
