---
description: Configure Sendgrid to invite users to your Appsmith installation
sidebar_position: 2.1
---

# Sendgrid

To configure Sendgrid as your SMTP server, [create an account](https://signup.sendgrid.com/) & log in to Sendgrid.

**1. Navigate to the** [**Integration Section**](https://app.sendgrid.com/guide/integrate)

![Click to expand](/img/sendgrid-welcome.png)

**2. Select the SMTP Relay integration option**

![Click to expand](/img/sendgrid-smtp.png)

**3. Create a new API key and copy all the fields**

![](</img/sendgrid-apikey_(1).png>)

**4. Navigate to the** [**Sendgrid Senders Section**](https://app.sendgrid.com/settings/sender\_auth/senders)

![Click to expand](</img/sendgrid_senders.png>)

**5. Create a new sender identity from which emails are sent**

![Click to expand](</img/sendgrid_create_sender.png>)

:::note
You can also configure the email service provider using [Admin settings](/getting-started/setup/instance-configuration#admin-settings).
:::

**6. Update the values in your** [**instance configuration**](/getting-started/setup/instance-configuration)

```bash
# Example docker configuration
# ***** Email **********
APPSMITH_MAIL_ENABLED=true
APPSMITH_MAIL_FROM=YOUR_SENDER_IDENTITY_EMAIL_ID
APPSMITH_REPLY_TO=YOUR_SENDER_IDENTITY_EMAIL_ID
APPSMITH_MAIL_HOST=smtp.sendgrid.net
APPSMITH_MAIL_PORT=587
# ***** Set to true if providing a TLS port ******
APPSMITH_MAIL_SMTP_TLS_ENABLED=true
APPSMITH_MAIL_USERNAME=apikey
APPSMITH_MAIL_PASSWORD=YOUR_SENDGRID_API_KEY
APPSMITH_MAIL_SMTP_AUTH=true
# ******************************
```

**5.** [**Restart the Appsmith instance**](../)

:::tip
Once you've verified your sender identity, your email service should be configured correctly
:::
