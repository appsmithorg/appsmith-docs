---
description: Configure Gmail to invite users to your Appsmith installation
sidebar_position: 2.3
---

# Gmail
This page guides you through configuring Gmail as an email service provider on your self-hosted instance.

## Prerequisites
* A [Google](https://myaccount.google.com) account.

## Gather Gmail server configuration

Gmail provides different SMTP configurations depending on whether you want to connect with or without TLS. Use the below settings based on your preferred option:

* If you want to connect without using TLS:
    * SMTP Server - `aspmx.l.google.com`.
    * SMTP Port - `25`.

For more information, see **Setup Steps** under [Option 3: Send email with the restricted Gmail SMTP server](https://support.google.com/a/answer/176600?hl=en#:~:text=device%20or%20app.-,Option%203%3A%20Send%20email%20with%20the%20restricted%20Gmail%20SMTP%20server,.l.google.com) section on official Google documentation. 

* If you want to connect using TLS:

    * SMTP Server - `smtp.gmail.com`.
    * SMTP Port - `587`.

For more information, see **Setup Steps** under [Option 2: Send email with the Gmail SMTP server](https://support.google.com/a/answer/176600?hl=en#:~:text=device%20or%20app.-,Option%203%3A%20Send%20email%20with%20the%20restricted%20Gmail%20SMTP%20server,.l.google.com) section on official Google documentation. 


## Create app password (Optional)

If you've set up 2-Step Verification for your Google account, and want to use TLS for configuring Gmail then you must set up a Google app password. If not, then you can skip this section and move to [Configure Gmail on Appsmith](#configure-gmail-on-appsmith) section.

Follow these steps to set up a Google app password:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security** from the sidebar.
3. Under the **How you sign in to Google** section, select **2-Step Verification**.
4. Scroll down and select **App passwords**. 
5. On the App passwords screen, choose options as shown below:

    * Choose **Mail** for **Select app**. 
    * Choose **Other** for **Select device**, and enter a name for your Appsmith instance.

6. Click **Generate** button to create the app password.
7. Copy the generated app password in the next screen, and keep it safe. You need it to configure Gmail on Appsmith in next section.

## Configure Gmail on Appsmith

:::info
Google limits the number of messages you can send per day, and the number of recipients per message. For more information, see [Gmail sending limits Google Workspace](https://support.google.com/a/answer/166852#).
:::

On Appsmith, you can configure email by using one of the following ways:

* [Admin settings](#admin-settings)
* [Environment Variables](#environment-variables)

### Admin settings

:::caution Attention
If you have configured email using [environment variables](#environment-variables) for your instance, it takes precedence over the configuration provided through the Admin Settings UI.
:::

Follow these steps to configure your email provider using Admin Settings:

1.  Log into your Appsmith instance as a superuser.

2. Go to the **Admin Settings** screen.

3. Select **Email** from the left nav bar.

<figure>
<img src="/img/admin-settings-configure-email.png" style={{width: "100%", height: "auto"}} alt="Email service provider" />
<figcaption align="center"><i>Configure Gmail as an email service provider</i></figcaption>
</figure>

4. Add Gmail configuration details as below:   

   | Name	| Description |
   |-----------|--------------|
   | **SMTP Host** |Add the SMTP host. See [Gather Gmail server configuration](#gather-gmail-server-configuration)|
   | **SMTP Port**	| Add the SMTP port. See [Gather Gmail server configuration](#gather-gmail-server-configuration)|
   | **From Address**	| Add a verified email address to be shown in the **From** field when users receive an email. |
   | **Reply To Address**	| Add a verified email address, so that users can reach out to you. |
   |  **TLS Protected Connection**	| Toggle it to enable TLS. |
   | **SMTP Username** |	Your Gmail address. |
   | **SMTP Password**	| The app password that you generated in [configure Gmail](#configure-gmail) section. |

5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.

6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.

### Environment variables

Follow these steps to configure Gmail using environment variables:

1. Go to your Appsmith instance configuration file. For example, the `docker-compose.yml` file for Docker and the `values.yaml` file for Kubernetes.

2. Update the values of the environment variables as shown below:

   |Variable	| Description |
   |-----------|--------------|
   | `APPSMITH_MAIL_ENABLED` | Set it to true to enable the email service. |
   | `APPSMITH_MAIL_FROM`	| Set it to the verified email of the sender. |
   | `APPSMITH_REPLY_TO`	| Set it to the email that should receive replies by default. |
   | `APPSMITH_MAIL_HOST`	| Set it to the SMTP host. See [Gather Gmail server configuration](#gather-gmail-server-configuration)|
   | `APPSMITH_MAIL_PORT`	| Set it to the SMTP port. See [Gather Gmail server configuration](#gather-gmail-server-configuration).|
   | `APPSMITH_MAIL_SMTP_TLS_ENABLED` |	Set it to `true` to enable transport layer security. |
   | `APPSMITH_MAIL_SMTP_AUTH`	| Set it to share the credentials `APPSMITH_MAIL_USERNAME` and `APPSMITH_MAIL_PASSWORD` with the SMTP server. |
   | `APPSMITH_MAIL_USERNAME` |	Set it to your Gmail address.
   | `APPSMITH_MAIL_PASSWORD` |	Set it to the app password that you generated in [configure Gmail](#configure-gmail) section. |

3. Restart the instance.

## Troubleshooting

You may encounter some common errors after configuring Gmail:

- [Unable to send emails](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

