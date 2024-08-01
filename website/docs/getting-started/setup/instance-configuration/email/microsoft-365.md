---
description: Configure Microsoft 365 to invite users to your Appsmith installation
---

# Microsoft 365

This page guides you through configuring Microsoft 365 (Outlook) as an email service provider on your self-hosted instance.

## Prerequisites

- A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) to set up your Appsmith instance.
- A valid [Microsoft 365](https://www.office.com/) subscription with access to Outlook services.

## Configure Microsoft 365 on Appsmith

:::info
Microsoft 365 limits sending messages. For more information, see [Sending limits in Outlook.com](https://support.microsoft.com/en-us/office/sending-limits-in-outlook-com-279ee200-594c-40f0-9ec8-bb6af7735c2e).
:::

On Appsmith, you can configure email by using one of the following ways:

- [Admin settings](#admin-settings)
- [Environment Variables](#environment-variables)

### Admin settings

:::caution Attention
If you have configured email using [environment variables](#environment-variables) for your instance, it takes precedence over the configuration provided through the Admin Settings UI.
:::

Follow these steps to configure your email provider using Admin Settings:

1. Log into your Appsmith instance as a superuser.

2. Go to the **Admin Settings** screen.

3. Select **Email** from the left nav bar.

<ZoomImage src="/img/admin-settings-configure-email.png" alt="Email service provider" caption="Configure Microsoft 365 as an email service provider" />

4. Configure the parameters as shown below:


<dd>

**SMTP host**

The SMTP host is the server address used to send emails. This address allows your self-hosted Appsmith instance to connect to Microsoft's email server and send emails. For Microsoft 365, the SMTP host is:

```
smtp.office365.com
```

This host is the same for both TLS and non-TLS configurations. For more information, see [SMTP settings](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040)



**SMTP port**

The SMTP port is the network port used by the SMTP server to communicate and send emails. Depending on whether you are using Transport Layer Security (TLS) or not, you need to use different port numbers:

* With TLS: `587`

* Without TLS: `25`


**From address**


The From address is the email address that appears in the **From** field of the emails sent from your application. It indicates the sender of the email. Add a verified email address to be shown in the From field when users receive an email. 

To verify...


**Reply-to Address**

The Reply-to address is the email address where replies to your sent emails will be directed. This is useful if you want replies to be sent to a different email address than the one in the From field. Add a verified email address where users can send their replies and contact you.


**Enable TLS protected connection**

When enabled, this property ensures that the communication between your self-hosted Appsmith instance and the Microsoft 365 SMTP server is encrypted and secure. Transport Layer Security (TLS) helps protect the data being transmitted, preventing unauthorized access and eavesdropping.

If you enable or disable TLS, the port configuration changes: use port `587` with STARTTLS for TLS, and port `25` without encryption if TLS is not used.


**SMTP username**

The SMTP username is the credential used to authenticate with the SMTP server to send emails. It typically corresponds to the email address or username associated with your email account.


**SMTP password**

The SMTP password is used along with the SMTP username to authenticate with the SMTP server for sending emails. It is the same password you use to access your email account.

If your email account has two-step verification enabled, you need to generate an app-specific password for SMTP access. For more information, see [Manage app passwords](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9).


</dd>

5. Click the **Send test email** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.

6. Click the **Save & Restart** button to save the configurations and restart the instance with the updated settings.
