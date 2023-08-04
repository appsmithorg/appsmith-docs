---
sidebar_position: 17
description: Connect Appsmith to an SMTP server and use queries to send emails.
---
# SMTP

This page provides information for connecting the SMTP datasource and for sending emails from your Appsmith app.

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect SMTP.

<figure>
  <img src="/img/smtp-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an SMTP datasource"/>
  <figcaption align = "center"><i>Configuring an SMTP datasource</i></figcaption>
</figure>

<dl>
  <dt><b>Host Address</b></dt>
  <dd>
  
The network location of your SMTP provider. This can be a domain name or an IP address.

  </dd><br/>

  <dt><b>Port</b></dt>
  <dd>
  
The port number to connect to on the server.

  </dd><br/>

  <dt><b>Username</b></dt>
  <dd>
  
The username for your email user.

  </dd><br/>

  <dt><b>Password</b></dt>
  <dd>
  
The password for your email user's account.

  </dd><br/>


</dl>

:::note
Some SMTP providers use a multi-factor authentication flow and may require you to generate a special password specifically to authenticate your Appsmith app. For example, Gmail SMTP requires you to generate an app password to use instead of your usual password. For more details, see [Sign in with app passwords](https://support.google.com/mail/answer/185833?hl=en).
:::

## Create queries

The following section is a reference guide that provides a complete description of all the parameters to for sending emails.

<figure>
  <img src="/img/smtp_query_config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an SMTP query"/>
  <figcaption align = "center"><i>Configuring an SMTP query</i></figcaption>
</figure>

## Send email

This action sends an email through your SMTP server.

<dl>
  <dt><b>From email</b></dt>
  <dd>
  
Sets the email address that appears as the message sender.

  </dd><br/>

  <dt><b>Set Reply To Email</b></dt>
  <dd>

Toggles the **Reply to email** field.

  </dd>

  <dt><b>Reply to email</b></dt>
  <dd>
  
Sets an email address that recieves all replies to your email.

  </dd><br/>

  <dt><b>To email(s)</b></dt>
  <dd>
  
Sets the email addresses that recieves your email. For multiple recipients, separate the addresses with commas.

  </dd><br/>

  <dt><b>CC email(s)</b></dt>
  <dd>
  
Sets the email address that recieves a CC (carbon copy). For multiple CC recipients, separate the addresses with commas.

  </dd><br/>

  <dt><b>BCC email(s)</b></dt>
  <dd>
  
Sets the email address that recieves a BCC (blind carbon copy). For multiple BCC recipients, separate the addresses with commas.

  </dd><br/>

  <dt><b>Subject</b></dt>
  <dd>
  
Sets the email's subject line.

  </dd><br/>

  <dt><b>Body</b></dt>
  <dd>
  
Sets the main body of the email. Supports rich text and HTML.

  </dd><br/>

  <dt><b>Attachment(s)</b></dt>
  <dd>
  
Attaches one or more files to the email. Expects an array of file objects.

  </dd>

</dl>
