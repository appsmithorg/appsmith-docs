---
description: Configure Microsoft 365 to invite users to your Appsmith installation
---

# Microsoft 365

This page shows you how to configure Microsoft 365 (Outlook) as an email service provider on your self-hosted instance.

## Prerequisites

- A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) to set up your Appsmith instance.
- Your email address must be verified. For more information, visit how to verify your [Outlook account](https://support.microsoft.com/en-au/office/how-to-verify-your-outlook-com-account-0b493d5c-9390-45ca-81b6-1bb1314caba9).
- Access to the Admin Settings page on your Appsmith instance. If you need access, contact your Instance Administrator.


:::info
Microsoft 365 limits sending messages. For more information, see [Sending limits in Outlook](https://support.microsoft.com/en-us/office/sending-limits-in-outlook-com-279ee200-594c-40f0-9ec8-bb6af7735c2e).
:::

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/t9NdlricNFdK0ZRAp0Jd?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div> 


## Configure Microsoft 365 on Appsmith

Follow these steps to configure your email provider using Admin Settings:


1. Log into your Appsmith instance.

2. Go to the **Admin Settings** screen.

3. Select **Email** from the left nav bar.

4. Configure the parameters as shown below:


<dd>

* **SMTP host**: Add the Microsoft 365 server address to send emails, as shown below:

<dd>

```
smtp.office365.com
```

This host is the same for both TLS and non-TLS configurations. For more information, see [SMTP settings](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040).


</dd>


* **SMTP port**: Set the network port based on your configuration:


<dd>

* If TLS is enabled, set it to `587`.

* If TLS is disabled, set it to `25`.

</dd>

* **From address**: Add the verified email address that you want to appear as the sender in the **From** field of outgoing emails. For example, use `support@yourcompany.com` .

* **Reply-to Address**: Add the verified email address where replies to your emails should be sent. This is useful if you want replies to be sent to a different email address than the one in the From field. 


* **Enable TLS protected connection**: Enable this property if you want to ensure that the communication between your self-hosted Appsmith instance and the Microsoft 365 SMTP server is encrypted and secure.

<dd>

Use port `587` with STARTTLS for TLS, and port `25` without encryption if TLS is not used.


</dd>



* **SMTP username**: Add the SMTP username, which is used to authenticate with the SMTP server. This is usually the email address or username associated with your email account.


* **SMTP password**: Add the SMTP password, which is used with the SMTP username to authenticate with the SMTP server. This is the same password you use to access your email account.

<dd>

If your email account has two-step verification enabled, you need to generate an app-specific password for SMTP access. For more information, see [Manage app passwords](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9).


</dd>

</dd>

5. Click the ****Send test email**** button to verify the configuration. If verification is successful, a test email will be sent to your inbox, and a toast message will appear at the top of the page indicating the result.

6. Click the **Save & Restart** button to save the configurations and restart the instance with the updated settings.


