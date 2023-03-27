# AWS Cognito

[AWS Cognito](https://aws.amazon.com/cognito/) lets you add user sign-up and authentication to your mobile and web apps. To configure OpenID Connect(OIDC) within Appsmith using AWS Cognito as an OIDC provider, follow these steps:

:::info
OpenID Connect is available only in the [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances,** and only the **Superuser** of your **Appsmith Instance** can set up OIDC.
:::

## Create user pool on Cognito

Log in to your [AWS account](https://console.aws.amazon.com/console/home). Go to **Services** > **Security, Identity & Compliance** > **Cognito** and follow the steps below:

1. In the **User Pools** pane, click the **Create user pool** button.
2. In the **Configure sign-in experience** pane,  select the **Email** checkbox under the **Cognito user pool sign-in options** section. Click **Next**.

    ![](/img/Step1-AWS_Cognito.png)

3. In the **Configure security requirements** pane, select **No MFA** under the **Multi-factor authentication** section. Click **Next**. 

    ![](/img/Step2-AWS_Cognito.png)

4. In the **Configure sign-up experience** pane, keep the default configuration and click **Next**.
5. In the **Configure message delivery** pane, you can choose one of the email providers - **Send email with Amazon SES** or **Send email with Cognito**. For this setup, select **Send email with Cognito**. Click **Next**.
6.  In the **Integrate your app** pane:
    1. In the **User pool name** box, enter a name for your user pool.
    2. Under *Initial app client*, add an app client name and select **Generate a client secret** under Client secret section.

    ![](/img/AWS-cognito_App_client.png)

7. **Step 6 - Review Configurations:** review all the selected configurations and proceed once done.
8. Click the user pool you've created, go to the integrations tab and follow the steps below 
    1. In the domains section, click on the actions dropdown and select **Create a Cognito domain**. You can also select **Create a custom domain** to add a domain that you own.

    ![](/img/AWS-cognito_create-cognito-domain.png)

    2. Enter a domain prefix in the **Create Cognito domain** screen and click on **Create Cognito domain** button.

        ![](/img/AWS-cognito_create_domain.png)

9. On the user pool home, scroll down to the **App client list** and open the App Client that you created.
    1. Copy the client ID and client secret that will be added to the OIDC configurations in Appsmith.

    ![](/img/AWS-cognito_client-creds.png)

    2. Scroll down to the Hosted UI section and click Edit. Click the Add Callback URL button and enter Redirect copied from the OIDC window in Appsmith’s Admin Settings.

## Configure AWS Cognito with Appsmith

On your Appsmith instance, go to *Admin Settings> Authentication> OIDC*, click Enable and follow the steps below:

1. Copy the redirect URL and add it as a Callback URL under the Hosted UI section of your AWS Cognito User pool.

![](/img/AWS-cognito_callback-url.png)

2. Add the client ID and client secret key copied from the App Client in your user pool to the respective input boxes.
3. Add the remaining configurations in the format shown below:

    | OIDC configuration field in Appsmith | AWS Cognito URL |
    | -------------------------------------|----------------------- |
    | Authorization URL                    | `https://<your_user-pool_domain>/oauth2/authorize`|
    | Token URL                            | `https://<your_user-pool_domain>/oauth2/token` |
    | User Info URL                        | `https://<your_user-pool_domain>/oauth2/userInfo` |
    | JWK Set URL                          | `https://cognito-idp.<Region>.amazonaws.com/<userPoolId>/.well-known/jwks.json` | 

    **your_user-pool_domain** - The Cognito domain you created in the above step.

    **Region** - The region's code where your AWS Cognito is set up.

    **userPoolId** - The unique ID of the user pool you've created.

    ![](/img/AWS_Urls.png)

### Complete OIDC setup

* Save the changes and restart your application by clicking `SAVE & RESTART` button.

![Click on the "SAVE & RESTART" button to complete the setup](/img/Appsmith-OIDC-Setup-Complete.png)

* You’ll see the **SIGN IN WITH OIDC SSO** on the Appsmith’s login screen.

![SIGN IN WITH OIDC SSO - Available on Login Screen](/img/Appsmith-SSO-OIDC-Available.png)


