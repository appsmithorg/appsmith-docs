---
description: >-
  Configure GitHub OAuth to enable Login via GitHub for the Appsmith
  installation
sidebar_position: 2
---

# GitHub OAuth

Appsmith allows you to integrate with Google OAuth 2.0, enabling end users to sign in to the Appsmith account using their Github authentication credentials.

## Configure the Github account

To enable GitHub Sign in, login to your [GitHub Account](https://github.com) and follow the steps below:

1. Navigate to the [**Your organizations**](https://github.com/settings/organizations) under your profile and pick the organization under which you want to create an OAuth App. Open the orgainzation settings.

![Click to expand](</img/Github_Orgs.png>)

2. Navigate to the *Developer Settigs> OAuth Apps* in the organization settings and click on **Register an Application** button to create a new OAuth app.

![Click to expand](</img/Github_Reg_App.png>)

3. Configure the following OAuth Credentials for a web application:

    1. **Homepage URL:** the domain on which you are hosting Appsmith with HTTPS **`(ex: https://app.appsmith.com)`**.

    2. **Authorization Callback URL:** append **/login/oauth2/code/github** to the Homepage URL **`(ex: https://app.appsmith.com/login/oauth2/code/github)`**.

    ![Click to expand](</img/Github_App_Config.png>)

## Configure Appsmith instance  

:::caution
Test the Client ID and Client Secret before disabling Form login on Appsmith. This ensures that users can access Appsmith with their Github credentials. To fix an invalid Github configuration, update the environment variables.
:::
There are two ways to configure the self-hosted Appsmith instance - 
- Admin Settings
- Environment Variables

**Admin Settings:** you can add the Client ID, Client Secret and allowed domains from [Admin Settings](/getting-started/setup/instance-configuration/). Go to *Admin Settings> Authentication> Github*, fill the required fields and click the **Save & Restart** button at the bottom of the page.

![](/img/as_github_auth_config.png)

**Environment Variables:** Navigate to the `docker.env` file located in `<PROJECT_ROOT>/stacks/configuration/`. Update the values for the following keys:

* Configure the `APPSMITH_OAUTH2_GITHUB_CLIENT_ID` and `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET` fields with the client ID and client secret generated in the step above.
* Configure `APPSMITH_SIGNUP_ALLOWED_DOMAINS` with a second-level domain name **`(ex: abc.com)`**, to only allow users with an email address from that domain name to log in **`(ex: john@abc.com)`**. You can provide several domain names using a comma-separated list.
* Restart the Appsmith instance.
    
  ```bash
  # Example configuration in docker.env file
  # ********* Github OAUth **********
  APPSMITH_OAUTH2_GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
  APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
  APPSMITH_SIGNUP_ALLOWED_DOMAINS=exampledomain.com
  # ******************************
   ```
 
After these steps, GitHub Login should now be enabled for your Appsmith installation. If you are running appsmith behind an ELB / Proxy, please configure Nginx [following this guide](/help-and-support/troubleshooting-guide/deployment-errors#oauth-sign-up-not-working).