---
sidebar_position: 17
description: Connect Appsmith to an SMTP server and use queries to send emails.
---
# SMTP

This page provides information for connecting the SMTP datasource and for sending emails from your Appsmith app.

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect SMTP.

<ZoomImage src="/img/smtp-datasource-config.png" alt="Configuring an SMTP datasource" caption="Configuring an SMTP datasource" />

#### Host Address

<dd>

The network location of your SMTP provider. This can be a domain name or an IP address.

</dd>

#### Port

<dd>

The port number to connect to on the server.

</dd>

#### Username

<dd>

The username for your email user.

</dd>

#### Password

<dd>

The password for your email user's account.

</dd>

:::note
Some SMTP providers use a multi-factor authentication flow and may require you to generate a special password specifically to authenticate your Appsmith app. For example, Gmail SMTP requires you to generate an app password to use instead of your usual password. For more details, see [Sign in with app passwords](https://support.google.com/mail/answer/185833?hl=en).
:::

## Create queries

The following section is a reference guide that provides a complete description of all the parameters for sending emails.

<ZoomImage src="/img/smtp_query_config.png" alt="Configuring an SMTP query" caption="Configuring an SMTP query" />

## Send email

This action sends an email through your SMTP server.

#### From email

<dd>

Sets the email address that appears as the message sender.

</dd>

#### Set Reply To Email

<dd>

Toggles the **Reply to email** field.

</dd>

#### Reply to email

<dd>

Sets an email address that receives all replies to your email.

</dd>

#### To email(s)

<dd>

Sets the email addresses that receive your email. For multiple recipients, separate the addresses with commas.

</dd>

#### CC email(s)

<dd>

Sets the email addresses that receive a CC (carbon copy). For multiple CC recipients, separate the addresses with commas.

</dd>

#### BCC email(s)

<dd>

Sets the email addresses that receive a BCC (blind carbon copy). For multiple BCC recipients, separate the addresses with commas.

</dd>

#### Subject

<dd>

Sets the email's subject line.

</dd>

#### Body

<dd>

Sets the main body of the email. Supports rich text and HTML.

</dd>

#### Attachment(s)

<dd>

Attaches one or more files to the email. Expects an array of file objects.

</dd>

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.