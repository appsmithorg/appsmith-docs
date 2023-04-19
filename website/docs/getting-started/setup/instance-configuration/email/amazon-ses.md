---
description: Configure Amazon SES to invite users to your Appsmith installation
sidebar_position: 2.2
---

# Amazon SES

To configure Amazon SES as your SMTP server, [create an account](https://aws.amazon.com/console/) & login to the AWS console.

**1. Navigate to the SES section & SMTP setting page**

![Click to expand](</img/AWS_SES.png>)

**2. Copy the SMTP configuration & Create new SMTP Credentials**

![Click to expand](</img/AWS_SMTP_Config.png>)

**3. Create an IAM user**

![Click to expand](</img/AWS_SES_IAM.png>)

**4. Copy the generated username & password**

![Click to expand](</img/AWS_SMTP_CREDS.png>)

**5. Verify the email address via which Appsmith should send and receive emails**

:::note
Follow the guide to [configure SPF for SMTP/emails to prevent emails from being flagged as Spam](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-spf.html).
:::

![Verify Email Address](</img/aws_verify_email.png>)

:::note
You can also configure the email service provider using [Admin settings](./#configure-using-admin-settings).
:::

**6. Update the values in your** [**Instance Configuration**](../)

:::danger
Do not use **port** **465** listed on the SES page because it is TLS enabled by default
:::

```bash
# Example docker configuration
# ***** Email **********
APPSMITH_MAIL_ENABLED=true
APPSMITH_MAIL_FROM=YOUR_VERIFIED_EMAIL_ID
APPSMITH_REPLY_TO=YOUR_VERIFIED_EMAIL_ID
APPSMITH_MAIL_HOST=email-smtp.us-east-2.amazonaws.com
APPSMITH_MAIL_PORT=587
# ***** Set to true if providing a TLS port ******
APPSMITH_MAIL_SMTP_TLS_ENABLED=true
APPSMITH_MAIL_USERNAME=YOUR_SES_USER_NAME
APPSMITH_MAIL_PASSWORD=YOUR_SES_PASSWORD
APPSMITH_MAIL_SMTP_AUTH=true
# ******************************
```

:::info
Your email service should now be configured correctly. Read more about [setting up email with SES.](https://docs.aws.amazon.com/ses/latest/dg/setting-up.html)
:::

**7.** [**Restart the Appsmith Instance**](../)

:::note
If you have created a new Amazon SES account, your account is sandboxed and is unable to send emails to unverified email Ids. Read more on how to [request production access](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html).
:::
