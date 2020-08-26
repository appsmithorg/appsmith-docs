---
description: >-
  Configure an email provider of your choice to send and receive email
  notifications in appsmith
---

# Email

Email is used to communicate with users on your installation of appsmith. Emails are sent out to

* Verify new user signups
* Invite users to your organisation in appsmith
* Notify admins of important events & approvals requests

## Enabling Email

1. To enable email, open the docker.env file of your appsmith installation and uncomment the following block

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

2. Update the **APPSMITH\_MAIL\_ENABLED** field to true

3. Fetch the remaining configuration fields from your email service. The following is a guide to fetch configurations from a few common email service providers

* [Sendgrid](sendgrid.md)
* [Amazon SES](amazon-ses.md)

{% hint style="info" %}
Having trouble integrating? Reach out to us on [discord](https://discord.com/invite/rBTTVJp) or write to us at support@appsmith.com
{% endhint %}

