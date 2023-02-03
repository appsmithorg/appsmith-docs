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

  * **Configure via UI (recommended)**:

  On your self-hosted instance, navigate to the [Admin Settings page](/getting-started/setup/instance-configuration/admin-settings#using-the-admin-settings-ui). Under the **Authentication** tab, you can find fields for providing your Client ID and Client Secret generated in the previous steps.

  ![](/img/as_github_auth_config.png)

  Once you've entered your provided the Client ID and Client Secret, click the **Save & Restart** button at the bottom of the page. This prompts your Appsmith instance with the new configuration in effect.

  * **Configure via docker.env file**:

  On the machine hosting the Appsmith instance, find your `docker.env` file located in `<project-root>/stacks/configuration/`. Update the values for the following keys:

    ```bash
    # Example configuration in docker.env file
    # ********* Github OAUth **********
    APPSMITH_OAUTH2_GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
    APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
    # ******************************
    ```
    
    * Configure the `APPSMITH_OAUTH2_GITHUB_CLIENT_ID` and `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET` fields with the client ID and client secret generated in the step above
    * Configure `APPSMITH_SIGNUP_ALLOWED_DOMAINS` with a second-level domain name **`(ex: abc.com)`**, to only allow users with an email address from that domain name to log in **`(ex: john@abc.com)`**
      * **Note**: you can provide several domain names using a comma-separated list
    * [Restart the Appsmith instance](../)

---

:::caution
The Client ID and Client Secret entered aren't verified by any means. Please test it out manually before disabling the Form login authentication method. If Form login is disabled before testing the GitHub authentication configuration setup, it may lead to the user getting stuck on the login screen if the GitHub configuration is invalid. You’ll have to update the environment variables manually to fix this, as you can't update it via the Admin settings page since you won’t be logged in anymore
:::

After these steps, GitHub Login should now be enabled for your Appsmith installation. If you are running appsmith behind an ELB / Proxy, please configure Nginx [following this guide](/help-and-support/troubleshooting-guide/deployment-errors#oauth-sign-up-not-working).