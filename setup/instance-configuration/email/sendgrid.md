---
description: Configure Sendgrid to invite users to your Appsmith installation
---

# Sendgrid

To configure Sendgrid as your SMTP server, [create an account](https://signup.sendgrid.com/) & login to Sendgrid.

**1. Navigate to the** [**Integration Section**](https://app.sendgrid.com/guide/integrate)

![click to expand](../../../.gitbook/assets/sendgrid-welcome.png)

**2. Select the SMTP Relay integration option**

![click to expand](../../../.gitbook/assets/sendgrid-smtp.png)

**3. Create a new API key and copy all the fields**

![](../../../.gitbook/assets/sendgrid-apikey%20%281%29.png)

**4. Navigate to the** [**Sendgrid Senders Section**](https://app.sendgrid.com/settings/sender_auth/senders)

![Click to expand](../../../.gitbook/assets/sendgrid-senders.png)

**5. Create a new sender identity from which emails will be sent**

![Click to expand](../../../.gitbook/assets/sendgrid-create-sender.png)

**6. Update the values in your** [**instance configuration**](../)\*\*\*\*

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

**5.** [**Restart the appsmith instance**](../)\*\*\*\*

{% hint style="success" %}
Once you've verified your sender identity, your email service should be configured correctly
{% endhint %}

