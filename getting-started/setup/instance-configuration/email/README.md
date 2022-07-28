---
description: >-
  Configure an email provider of your choice to send and receive email
  notifications in Appsmith
---

# Email

Email is used to communicate with users on your installation of Appsmith. Emails are sent out to

* Invite users to your workspace in Appsmith
* Notify admins of important events & approvals requests

## Configuration Variables

Appsmith requires the following variables to be configured following the [Instance Configuration Guide](../) for your deployment

1. **APPSMITH\_MAIL\_ENABLED:** This field should be set to true to enable the email service
2. **APPSMITH\_MAIL\_FROM**: This field should be set to the verified email of the sender
3. **APPSMITH\_REPLY\_TO**: This field should be set to the email that should receive replies by default
4. **APPSMITH\_MAIL\_HOST**: This field is the SMTP host of the email service you are configuring
5. **APPSMITH\_MAIL\_PORT**: This field is the SMTP port of the email service you are configuring
6. **APPSMITH\_MAIL\_SMTP\_TLS\_ENABLED**: This field enables transport layer security if set to true
7. **APPSMITH\_MAIL\_USERNAME**: This field is the username of the email service
8. **APPSMITH\_MAIL\_PASSWORD:** This field is the password of the email service and may sometimes be the api key
9. **APPSMITH\_MAIL\_SMTP\_AUTH**:

#### Guides to configure common email service providers:

1. [Sendgrid](sendgrid.md)
2. [Amazon SES](amazon-ses.md)

{% hint style="success" %}
[Restart the Appsmith instance](../) once it your variables are configured
{% endhint %}
