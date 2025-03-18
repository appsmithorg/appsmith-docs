---
description: >-
  Setup OIDC using AWS Cognito
title: Amazon Cognito
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Amazon Cognito</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

To configure Appsmith to use [Amazon Cognito](https://aws.amazon.com/cognito/) as an OIDC provider, follow these steps:

## Prerequisites

1. A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
2. Before setting up Single Sign-On (SSO), ensure that you have already configured a [custom domain](/getting-started/setup/instance-configuration/custom-domain) for your instance.

## Create user pool

Log in to your [AWS account](https://console.aws.amazon.com/console/home). Go to **Services** > **Security, Identity & Compliance** > **Cognito** and follow the steps below:


1. Log in to your [AWS account](https://console.aws.amazon.com/console/home). Go to **Services** > **Security**, **Identity & Compliance** > **Cognito**.

2. From the left-side pane, open **User pools** and click the **Create user pool** button.

<dd>

<ZoomImage src="/img/aws-user-pools.png" alt="AWS Cognito create userpool" caption="AWS Cognito create userpool" />

</dd>

3. On the Set up resources for your application page, configure the following settings:

<dd>

- **Application type:** Select Traditional web application.
- **Application name:** Enter a name for your application, such as Appsmith.
- **Sign-in identifiers:** Select Email, Phone, and Username.
- **Required attributes for sign-up:** Choose Profile and Email. You can select additional attributes if required based on your application's needs.
- **Return URL:** In the Add a return URL field, enter the **Redirect URL** copied from the [OIDC configuration in Appsmith](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc#capture-redirect-url-for-oidc-configuration).

<ZoomImage src="/img/aws-url.png" alt="" caption="" />


</dd>

4. Click **Create user directory** to complete the setup. Once done, open the **Overview** page of the recently created **User Pool**.

5. From the Overview page, navigate to the **App clients** section using the left-side pane. 

<ZoomImage src="/img/aws-app-client.png" alt="" caption="" />



6. On the App clients page, open your application to view its details. The page displays the **Client ID**, **Client Secret**, login page configuration, and other settings. Copy the Client ID and Client Secret for future use.

7. Navigate to the **Domain** page from the left-side navigation panel. Copy the Cognito domain for future use. If you want to set up a custom domain, configure it based on your requirements.

<ZoomImage src="/img/aws-ui-oidc.png" alt="" caption="" />




8. Click the **Actions** button and open the **Cognito branding settings**. Select the **Hosted UI (Classic)** version and save the changes.


9. Navigate to the **App clients** section and open the **Login** pages settings. Click Edit, then update the Scopes to include:

<dd>

- email
- openid
- profile

</dd>

10. Navigate to the Multi-Factor Authentication (MFA) and security settings. Configure MFA, password policies, and other security settings based on your requirements.





## Setup Cognito SSO on Appsmith

On your Appsmith instance, go to **Admin Settings > Authentication > OIDC**, click **Enable** and follow the steps below:

<ZoomImage src="/img/Appsmith_OIDC_creds.png" alt="Configure Appsmith OIDC credentials image" caption="Configure Appsmith OIDC credentials image" />


1. Refer to the table below when entering data in the input boxes to configure the instance:

<dd>

| Configuration field| Description |
| ------------------------------------| -----------------|
| Client ID | Add the Client ID copied from the App Client in your user pool |
| Client Secret |Add the Client Secret copied from the App Client in your user pool|
| Authorization URL                    | Format - `https://<user-pool_domain>/oauth2/authorize`<br/> **user-pool_domain** - The Cognito domain you created in the above step. |
| Token URL                            | Format - `https://<user-pool_domain>/oauth2/token`<br/>**user-pool_domain** - The Cognito domain you created in the above step. |
| User Info URL                        | Format - `https://<user-pool_domain>/oauth2/userInfo`<br/> **user-pool_domain** - The Cognito domain you created in the above step |
| JWK Set URL                          | Format - `https://cognito-idp.<region>.amazonaws.com/<user-pool-id>/.well-known/jwks.json`<br/>**region** - The region's code where your AWS Cognito is set up.<br/>**user-pool-id** -  The unique ID of the user pool you've created.  | 

</dd>


<ZoomImage src="/img/AWS_Urls.png" alt="AWS URLs image" caption="AWS URLs image" />



2. Save the changes and restart your application by clicking `SAVE & RESTART` button. 

:::info
If you're running Appsmith on a **Kubernetes** cluster with an HA configuration, after completing the setup, run the following command to ensure the new authentication settings are properly applied:

```js
kubectl rollout restart deployment/appsmith -n
```
:::


After the Appsmith instance restarts, try logging in again to your account. You'll see a login screen with the **SIGN IN WITH OIDC SSO** button.

