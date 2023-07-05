---
description: Configure Gmail to invite users to your Appsmith installation
sidebar_position: 2.3
---

# Gmail
This page guides you through configuring Gmail as an email service provider on your self-hosted instance. By configuring email, you can leverage the below capabilities:

* Invite users to join your Appsmith workspace by sending email invitations.
* Reset password using password reset emails.

## Prerequisites
* A [Google](https://myaccount.google.com) account.

## Configure Gmail

1. Find the Gmail SMTP server host and port. 

    a. **SMTP Server**: smtp.gmail.com
    b. **SMTP Port**: 587 

You can find this information from the official Google documentation. For more information, see Setup Steps available under [Option 2: Send email with the Gmail SMTP server](https://support.google.com/a/answer/176600?hl=en) section. 

2. If you've 2-Step verification enabled for your Google account, you must set up a Google app password. Follow these steps to set up a Google app password:

    a. Go to your [Google Account](https://myaccount.google.com/).

    b. Select **Security** from the sidebar.

    c. Under the **Signing in to Google** section, select **2-Step Verification**.

    d. Scroll down and select **App passwords**.

    e. For **Select app**, choose **Mail**

    f. For **Select device**, choose **Other** and enter a name for your Appsmith instance.

    g. Click **Generate** button to create the app password.

    h. Copy the generated app password in the next screen.

## Configure Appsmith

On Appsmith, you can configure email by using one of the following ways:

* [Admin settings](#admin-settings)
* [Environment Variables](#environment-variables)

### Admin settings

:::caution Attention
If you have configured email using [environment variables](#environment-variables) for your instance, it takes precedence over the configuration provided through the Admin Settings UI.
:::

Follow these steps to configure your email provider using Admin Settings:

1. Log into your Appsmith instance as a superuser.

2. Go to the **Admin Settings** screen.

3. Select **Email** from the left nav bar.

<figure>
<img src="/img/admin-settings-configure-email.png" style={{width: "100%", height: "auto"}} alt="Email service provider" />
<figcaption align="center"><i>Configure your email service provider</i></figcaption>
</figure>

4. Add the configuration details for your email provider as below:   

   | Name	| Description |
   |-----------|--------------|
   | **SMTP Host** |Add the SMTP host you gathered in [configure Gmail](#configure-gmail) section. |
   | **SMTP Port**	| Add the SMTP port you gathered in [configure Gmail](#configure-gmail) section. |
   | **From Address**	| Add a verified email address to be shown in the **From** field when users receive an email. |
   | **Reply To Address**	| Add a verified email address, so that users can reach out to you. |
   |  **TLS Protected Connection**	| Toggle it to enable TLS. |
   | **SMTP Username** |	Your Gmail address. |
   | **SMTP Password**	| The app password that you generated in [configure Gmail](#configure-gmail) section. |

5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.

6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.

### Environment variables

Follow these steps to configure your email provider using environment variables:

1. Go to your Appsmith instance configuration file. For example, the `docker-compose.yml` file for Docker and the `values.yaml` file for Kubernetes.

2. Update the values of the environment variables as shown below:

   |Variable	| Description |
   |-----------|--------------|
   | `APPSMITH_MAIL_ENABLED` | Set it to true to enable the email service. |
   | `APPSMITH_MAIL_FROM`	| Set it to the verified email of the sender. |
   | `APPSMITH_REPLY_TO`	| Set it to the email that should receive replies by default. |
   | `APPSMITH_MAIL_HOST`	| Set it to the SMTP host you gathered in [configure Gmail](#configure-gmail) section.  |
   | `APPSMITH_MAIL_PORT`	| Set it to the SMTP port you gathered in [configure Gmail](#configure-gmail) section.|
   | `APPSMITH_MAIL_SMTP_TLS_ENABLED` |	Set it to `true to enable transport layer security. |
   | `APPSMITH_MAIL_SMTP_AUTH`	| Set it to share the credentials `APPSMITH_MAIL_USERNAME` and `APPSMITH_MAIL_PASSWORD` with the SMTP server. |
   | `APPSMITH_MAIL_USERNAME` |	Set it to your Gmail address.
   | `APPSMITH_MAIL_PASSWORD` |	Set it to the app password that you generated in [configure Gmail](#configure-gmail) section. |

3. Restart the instance.

## Troubleshooting

You may encounter some common errors after configuring Gmail:

- [Unable to send emails](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)
- [Gmail Sending Limits exhausted](https://support.google.com/a/answer/166852#)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

