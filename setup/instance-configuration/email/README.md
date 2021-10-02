---
description: >-
  Configure an email provider of your choice to send and receive email
  notifications in Appsmith
---

# Email

Email is used to communicate with users on your installation of Appsmith. Emails are sent out to

* Invite users to your organization in Appsmith
* Notify admins of important events & approvals requests

## Configuration Variables

Configure these variables following the [Instance Configuration Guide](../) for your deployment

```text
# ***** Email **********
APPSMITH_MAIL_ENABLED
APPSMITH_MAIL_FROM
APPSMITH_REPLY_TO
APPSMITH_MAIL_HOST
APPSMITH_MAIL_PORT
***** Set to true if providing a TLS port ******
APPSMITH_MAIL_SMTP_TLS_ENABLED
APPSMITH_MAIL_USERNAME
APPSMITH_MAIL_PASSWORD
APPSMITH_MAIL_SMTP_AUTH
# ******************************
```

1. Set the **APPSMITH\_MAIL\_ENABLED** field to true
2. Set the remaining configuration fields based on your email service. 
3. [Restart the Appsmith instance](../)

The following is a guide to fetch configurations from a few common email service providers

1. [Sendgrid](sendgrid.md)
2. [Amazon SES](amazon-ses.md)

