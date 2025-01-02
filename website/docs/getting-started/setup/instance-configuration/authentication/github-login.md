---
description: >-
  Configure GitHub OAuth to enable Login via GitHub for the Appsmith
  installation
sidebar_position: 2
---

# GitHub OAuth


This page shows how to configure Appsmith to use [GitHub OAuth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps) as an authentication provider. By integrating with GitHub OAuth, Appsmith enables end users to sign in to their Appsmith accounts using their GitHub credentials.

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. A [GitHub](https://github.com/login) account.
3. Before setting up GitHub OAuth, ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.
4. In Appsmith, go to **Admin Settings** > **Authentication** and click **Enable** on  **GitHub**.



## Create OAuth App on GitHub


1. Open your [GitHub Account](https://github.com).

2. Navigate to your profile icon in the top-right corner and open **Settings**.

3. In **Settings**, go to **Developer Settings** > **OAuth Apps** and click **New OAuth apps** to configure a new Appsmith OAuth app.



<ZoomImage src="/img/github-oauth-create.png" alt="" caption="" />


4. Add the following details for the OAuth app configuration:

<dd>

- **Application Name:** Enter a name for your application (e.g., `Appsmith GitHub OAuth`).

- **Homepage URL:** Copy and paste the Homepage URL from the GitHub configuration in Appsmith (e.g., `https://app.appsmith.com`).

- **Authorization Callback URL:** Copy and paste the Callback URL from the GitHub configuration in Appsmith (e.g., `https://app.appsmith.com/login/oauth2/code/github`) and paste it here.

<ZoomImage src="/img/oauth-settings-github.png" alt="" caption="" />



</dd>

5. Click **Register application** to create the OAuth app. Once the app is created, copy the **Client ID** and **Client Secret** to use in Appsmith’s GitHub configuration.




## Register GitHub OAuth in Appsmith

To complete the Github OAuth configuration, you have to register the provider on Appsmith. Go to **Admin Settings > Authentication > Github**, and follow the steps below:


<ZoomImage src="/img/github-appsmith-settings.png" alt="" caption="" />



1. Add the **Client ID** and **Client Secret** copied from the Github OAuth Settings into the respective fields.

2. Once you have added the details, click the **Save & Restart** button to save the configuration and restart the instance.


:::info
If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
:::

After the Appsmith instance restarts, log in to your account to see the GitHub Login button on the login screen.

<ZoomImage src="/img/github-auth.png" alt="" caption="" />




## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.
