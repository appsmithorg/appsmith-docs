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

![AWS Cognito create userpool image](/img/AWS_cognito_create-userpool.png)

1. In the **User Pools** pane, click the **Create user pool** button.
2. In the **Configure sign-in experience** pane,  select the **Email** checkbox under the **Cognito user pool sign-in options** section. Click **Next**.
3. In the **Configure security requirements** pane, select **No MFA** under the **Multi-factor authentication** section. Click **Next**. 
4. In the **Configure sign-up experience** pane, keep the default configuration and click **Next**.
5. In the **Configure message delivery** pane, you can choose one of the email providers - **Send email with Amazon SES** or **Send email with Cognito**. If you don't have an Amazon SES account, select **Send email with Cognito**. Click **Next**.
6.  In the **Integrate your app** pane, follow the steps below:
    1. In the **User pool name** box, enter a name for your user pool.
    2. Under the **Initial app client** section, in the **App client name** box, enter a name for your app client.
    3. In the **Client secret** options, select **Generate a client secret**.
    4. Click **Next**.
7. In the **Review and create** pane, review the configurations and click **Create user pool**.

## Configure domain and app client

In the **User pools** pane, select the user pool you created in the preceding steps. Click the **App Integration** tab and follow the steps below:

![Domain and app client configuration image](/img/configure-domain-and-app-client.png)

1. In the **Domain** section, click the **Actions** list and select **Create a Cognito domain**. You can also select **Create a custom domain** to add a domain that you own.
2. On the **Create Cognito domain** screen, enter a domain prefix in the **Cognito domain** box. Click **Create Cognito domain**.
   ![Create a domain image](/img/AWS-cognito_create_domain.png)

3. Back on the **App Integration** tab, scroll down to the **App client list** section and click the name of the app client you created in step 6 of [Create user pool](#create-user-pool).

4. Copy the **Client ID** and **Client Secret** and save them for later use.

5. Scroll down to the **Hosted UI** section and click **Edit**. On the **Edit Hosted UI** pane, follow the steps below:
    ![Edit hosted UI image](/img/edit-hosted-ui.png)
    1. Click the **Add Callback URL** button. In the **URL** box and enter the **Redirect URL** copied from the [OIDC configuration in Appsmith](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc#capture-redirect-url-for-oidc-configuration).
    2. In the **Identity providers** list, select **Cognito user pool** .
    3. In the **OAuth 2.0 grant types** list, select **Authorization code grant**.
    4. In the **OpenID Connect scopes** list, select **OpenID**, **Email**, and **Profile** options.
    5. Click **Save changes**.

## Setup Cognito SSO on Appsmith

On your Appsmith instance, go to **Admin Settings > Authentication > OIDC**, click **Enable** and follow the steps below:

![Configure Appsmith OIDC credentials image](/img/Appsmith_OIDC_creds.png)

1. Refer to the table below when entering data in the input boxes to configure the instance:

    | Configuration field| Description |
    | ------------------------------------| -----------------|
    | Client ID | Add the Client ID copied from the App Client in your user pool |
    | Client Secret |Add the Client Secret copied from the App Client in your user pool|
    | Authorization URL                    | Format - `https://<user-pool_domain>/oauth2/authorize`<br/> **user-pool_domain** - The Cognito domain you created in the above step. |
    | Token URL                            | Format - `https://<user-pool_domain>/oauth2/token`<br/>**user-pool_domain** - The Cognito domain you created in the above step. |
    | User Info URL                        | Format - `https://<user-pool_domain>/oauth2/userInfo`<br/> **user-pool_domain** - The Cognito domain you created in the above step |
    | JWK Set URL                          | Format - `https://cognito-idp.<region>.amazonaws.com/<user-pool-id>/.well-known/jwks.json`<br/>**region** - The region's code where your AWS Cognito is set up.<br/>**user-pool-id** -  The unique ID of the user pool you've created.  | 

   
   ![AWS URLs image](/img/AWS_Urls.png)

2. Save the changes and restart your application by clicking `SAVE & RESTART` button. If you try to login to Appsmith again, you'll see the **SIGN IN WITH OIDC SSO** button on the login screen.

