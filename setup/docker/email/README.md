---
description: >-
  Configure an email provider of your choice to send and receive email
  notifications in Appsmith
---

# Email

Email is used to communicate with users on your installation of Appsmith. Emails are sent out to

* Verify new user signups
* Invite users to your organization in Appsmith
* Notify admins of important events & approvals requests

## Enabling Email

Configure the following information in the [docker.env file ](../#configuring-self-hosted-instances)in your installation folder

```text
# ***** Email **********
APPSMITH_MAIL_ENABLED=false
# APPSMITH_MAIL_FROM=YOUR_VERIFIED_EMAIL_ID
# APPSMITH_REPLY_TO=YOUR_VERIFIED_EMAIL_ID
# APPSMITH_MAIL_HOST=
# APPSMITH_MAIL_PORT=
# ***** Set to true if providing a TLS port ******
# APPSMITH_MAIL_SMTP_TLS_ENABLED=
# APPSMITH_MAIL_USERNAME=
# APPSMITH_MAIL_PASSWORD=
# APPSMITH_MAIL_SMTP_AUTH=true
# ******************************
```

1. Update the **APPSMITH\_MAIL\_ENABLED** field to true
2. Fetch the remaining configuration fields from your email service. 
3. [Restart the Appsmith instance](../#configuring-self-hosted-instances)

The following is a guide to fetch configurations from a few common email service providers

1. [Sendgrid](sendgrid.md)
2. [Amazon SES](amazon-ses.md)

{% hint style="info" %}
Having trouble integrating? Reach out to us on [discord](https://discord.com/invite/rBTTVJp) or write to us at support@appsmith.com
{% endhint %}

