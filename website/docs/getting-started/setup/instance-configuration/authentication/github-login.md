---
description: >-
  Configure GitHub OAuth to enable Login via GitHub for the Appsmith
  installation
sidebar_position: 2
---

# GitHub OAuth

Appsmith allows you to integrate with GitHub OAuth, enabling end users to sign in to the Appsmith account using their GitHub authentication credentials.

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. A [GitHub](https://github.com/login) account.

## Register OAuth app on GitHub

To enable GitHub Sign in, log in to your [GitHub Account](https://github.com) and follow the steps below:

1. In your profile drop-down, navigate to **Settings > Developer Settings > OAuth Apps** and click **Register a new application** to create and register a new OAuth App.

![Click to expand](/img/Github_Reg_App.png)

2. Configure the following OAuth Credentials for a web application:

   1. **Homepage URL:** the domain on which you host Appsmith with HTTPS (Eg: `https://app.appsmith.com`).

   2. **Authorization Callback URL:** append `/login/oauth2/code/github` to the Homepage URL (Eg: `https://app.appsmith.com/login/oauth2/code/github`).

   ![Click to expand](/img/Github_App_Config.png)

## Configure Appsmith instance

:::caution
Test the Client ID and Client Secret before disabling Form login on Appsmith. This ensures that users can access Appsmith with their GitHub credentials. To fix an invalid GitHub configuration, update the environment variables.
:::

There are two ways to configure the self-hosted Appsmith instance -

- Admin Settings
- Environment Variables

### Admin settings

Click **Admin Settings > Authentication > Enable**(GitHub). Add the `Client ID` and `Client Secret`. Click the **Save & Restart** button at the bottom of the page.

![Github authentication configuration image](/img/as_github_auth_config.png)

:::info
If you have set values using [environment variables](#environment-variables) for your instance, those values take precedence over values specified in the Admin Settings UI.
:::

### Environment variables

Update the values for the following keys in the instance configuration file, for example, in the `docker.env` file for Docker installation (`<PROJECT_ROOT>/stacks/configuration/`) and in the `values.yaml` file for Kubernetes:

- Configure the `APPSMITH_OAUTH2_GITHUB_CLIENT_ID` and `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET` fields with the client ID and client secret generated in the preceding step.

- Configure `APPSMITH_SIGNUP_ALLOWED_DOMAINS` with a second-level domain name (ex: `abc.com`), to only allow users with an email address from that domain name to log in (ex: `john@abc.com`). You can provide several domain names using a comma-separated list.
  ```bash
  # Example configuration in docker.env file
  # ********* GitHub OAuth **********
  APPSMITH_OAUTH2_GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
  APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
  APPSMITH_SIGNUP_ALLOWED_DOMAINS=exampledomain.com
  # ******************************
  ```
- Once you have added the details, click the **SAVE & RESTART** button to save the configuration and restart the instance. 

<dd>

- If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
</dd>


After these steps, your Appsmith installation should now enable GitHub Login.

## Further reading

- [Instance Configuration](/getting-started/setup/instance-configuration)
- [Instance Management](/getting-started/setup/instance-management)
