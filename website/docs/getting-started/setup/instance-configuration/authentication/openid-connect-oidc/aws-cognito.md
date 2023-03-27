# Amazon Cognito

[Amazon Cognito](https://aws.amazon.com/cognito/) lets you add user sign-up and authentication to your mobile and web apps. To configure OpenID Connect(OIDC) within Appsmith using Amazon Cognito as an OIDC provider, follow these steps:

:::info
OpenID Connect is available only in the [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances,** and only the **Superuser** of your **Appsmith Instance** can set up OIDC.
:::

## Create a user pool on Cognito

Log in to your [AWS account](https://console.aws.amazon.com/console/home). Go to **Services** > **Security, Identity & Compliance** > **Cognito** and follow the steps below:

1. In the **User Pools** pane, click the **Create user pool** button.

    ![](/img/AWS_cognito_create-userpool.png)

2. In the **Configure sign-in experience** pane,  select the **Email** checkbox under the **Cognito user pool sign-in options** section. Click **Next**.
3. In the **Configure security requirements** pane, select **No MFA** under the **Multi-factor authentication** section. Click **Next**. 
4. In the **Configure sign-up experience** pane, keep the default configuration and click **Next**.
5. In the **Configure message delivery** pane, you can choose one of the email providers - **Send email with Amazon SES** or **Send email with Cognito**. For this setup, select **Send email with Cognito**. Click **Next**.
6.  In the **Integrate your app** pane:
    1. In the **User pool name** box, enter a name for your user pool.
    2. Under the *Initial app client* section, in the **App client name** box, enter a name for your app client.
    3. Under the **Client secret** section, select **Generate a client secret** option.
    4. Click **Next**.

    ![](/img/AWS-cognito_App_client.png)

7. In the **Review and create** pane, review the configurations and click **Create user pool**.
8. In the **User pools** pane, select the user pool you created in the preceding steps. Click the **App Integration** tab and follow the steps below:
    1. In the **Domains** section, click the **Actions** list and select **Create a Cognito domain**. You can also select **Create a custom domain** to add a domain that you own.

    ![](/img/AWS-cognito_create-cognito-domain.png)

    2. On the **Create Cognito domain** screen, enter a domain prefix in the **Cognito domain** box. Click **Create Cognito domain**.

        ![](/img/AWS-cognito_create_domain.png)

9. On the **App Integration** tab, scroll down to the **App client list** section and click the name of the app client you created in the preceding steps.
    1. Copy the **Client ID** and **Client Secret**.

    ![](/img/AWS-cognito_client-creds.png)

    2. Scroll down to the **Hosted UI** section and click **Edit**. Fill the following fields:
        1. Click the **Add Callback URL** button and enter **Redirect URL** copied from [OIDC window in Appsmith’s Admin Settings](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc#capture-redirect-url-for-oidc-configuration).

        ![](/img/AWS-cognito_callback-url.png)

        2. Select **Cognito user pool** in the **Identity providers**.
        3. Select **Authorization code grant** in the  **OAuth 2.0 grant types**.
        4. Select **OpenID**, **Email**, **Profile** in the **OpenID Connect scopes**.


## Configure Appsmith for Amazon Cognito

On your Appsmith instance, go to *Admin Settings> Authentication> OIDC*, click Enable and follow the steps below:

![](/img/Appsmith_OIDC_creds.png)

1. Refer to the table below when entering data in the input boxes to configure the instance:

    | OIDC configuration field in Appsmith | AWS Cognito URL |
    | ------------------------------------| -----------------|
    | Client ID | Add the Client ID copied from the App Client in your user pool |
    | Client Secret |Add the Client Secret key copied from the App Client in your user pool|
    | Authorization URL                    | Format - `https://<your_user-pool_domain>/oauth2/authorize`<br/> **your_user-pool_domain** - The Cognito domain you created in the above step. |
    | Token URL                            | Format - `https://<your_user-pool_domain>/oauth2/token`<br/>**your_user-pool_domain** - The Cognito domain you created in the above step. |
    | User Info URL                        | Format - `https://<your_user-pool_domain>/oauth2/userInfo`<br/> **your_user-pool_domain** - The Cognito domain you created in the above step |
    | JWK Set URL                          | Format - `https://cognito-idp.<region>.amazonaws.com/<user-pool-Id>/.well-known/jwks.json`<br/>**Region** - The region's code where your AWS Cognito is set up.<br/>**user-pool-Id** -  The unique ID of the user pool you've created.  | 

   
    ![](/img/AWS_Urls.png)

2. Save the changes and restart your application by clicking `SAVE & RESTART` button and you’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

