---
description: Configure Gmail to invite users to your Appsmith installation
---

# Gmail
This page guides you through configuring Gmail as an email service provider on your self-hosted instance.

## Prerequisites
* A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
* A [Google Workspace](https://workspace.google.com/intl/en_in/) account.

## Create app password

If you've set up 2-Step Verification for your Google account and want to use Transport Layer Security (TLS) for configuring Gmail, then you must set up a Google app password. 

If not, skip this section and move to the [Configure Gmail on Appsmith](#configure-gmail-on-appsmith) section.

Follow these steps to set up a Google app password:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security** from the sidebar.
3. Under the **How you sign in to Google** section, select **2-Step Verification**.
4. Scroll down and select **App passwords**. 
5. On the App passwords screen, choose the options as shown below:

 * Choose **Mail** for **Select app**. 
 * Choose **Other** for **Select device**, and enter a name for your Appsmith instance.

6. Click the **Generate** button to create the app password.
7. Copy the generated app password on the next screen, and keep it safe. You need it to configure Gmail on Appsmith in the next section.

## Configure Gmail on Appsmith

:::info
Google limits sending messages. For more information, see [Gmail sending limits in Google Workspace](https://support.google.com/a/answer/166852#).
:::

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
<figcaption align="center"><i>Configure Gmail as an email service provider</i></figcaption>
</figure>

4. Add Gmail configuration details as below: 

 | Name | Description |
 |-----------|--------------|
 | **SMTP Host** | Add the SMTP host. <br/> a. If you want to connect without using Transport Layer Security (TLS): <br/> - SMTP Server - `aspmx.l.google.com`. <br/> b. If you want to connect using TLS protocol: <br/> - SMTP Server - `smtp.gmail.com`.|
 | **SMTP Port** | Add the SMTP port. <br/> a. If you want to connect without using TLS: <br/> - SMTP Port - `25`. <br/> b. If you want to connect using TLS: <br/> - SMTP Port - `587`.|
 | **From Address** | Add a verified email address to be shown in the **From** field when users receive an email. |
 | **Reply To Address** | Add a verified email address, so users can contact you. |
 | **TLS Protected Connection** | This option is turned off by default. Toggle it to enable the transport layer security protocol. |
 | **SMTP Username** | Your Gmail address. This is only needed when the transport layer security protocol is turned on.|
 | **SMTP Password** | The app password you generated in the [Create app password](#create-app-password) section. This is only needed when the transport layer security protocol is turned on. |

5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.

6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.

### Environment variables

Follow these steps to configure Gmail using environment variables:

1. Go to your Appsmith instance configuration file. For example, the `docker.env` file for Docker and the `values.yaml` file for Kubernetes.

2. Update the values of the environment variables as shown below:

 |Variable | Description |
 |-----------|--------------|
 | `APPSMITH_MAIL_ENABLED` | Set it to true to enable the email service. |
 | `APPSMITH_MAIL_FROM` | Set it to the verified email of the sender. |
 | `APPSMITH_REPLY_TO` | Set it to the email that should receive replies by default. |
 | `APPSMITH_MAIL_HOST` | Set it to the SMTP host. <br/> a. If you want to connect without using Transport Layer Security (TLS) protocol: <br/> - SMTP Server - `aspmx.l.google.com`. <br/> b. If you want to connect using TLS: <br/> - SMTP Server - `smtp.gmail.com`.|
 | `APPSMITH_MAIL_PORT` | Set it to the SMTP port. <br/> a. If you want to connect without using TLS: <br/> - SMTP Port - `25`. <br/> b. If you want to connect using TLS: <br/> - SMTP Port - `587`.|
 | `APPSMITH_MAIL_SMTP_TLS_ENABLED` | Set it to `true` to enable transport layer security. |
 | `APPSMITH_MAIL_SMTP_AUTH` | Set it to share the credentials `APPSMITH_MAIL_USERNAME` and `APPSMITH_MAIL_PASSWORD` with the SMTP server. |
 | `APPSMITH_MAIL_USERNAME` | Set it to your Gmail address. This is only needed when the transport layer security protocol is turned on.
 | `APPSMITH_MAIL_PASSWORD` | Set it to your password. Alternatively, if you have 2-Step Verification enabled, set it to the app password you generated in the [Create app password Gmail](#create-app-password) section. This is only needed when the transport layer security protocol is turned on. |

3. Restart the instance.

## Troubleshooting

You may encounter some common errors after configuring Gmail:

- [Unable to send emails](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.
