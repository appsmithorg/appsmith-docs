<!-- DOC-BOT-START:section-id -->

### Email server

Configure your email server in Appsmith to handle application emailing needs. The following environment variables enable you to set up and manage these email-related capabilities for your Appsmith instance.

##### `APPSMITH_EMAIL_ENABLED`

<dd>

Controls whether Appsmith can send emails. Use `true` to enable email capabilities or `false` to disable it.

</dd>

##### `APPSMITH_EMAIL_SERVER_HOST`

<dd>

Specifies the host address of the email server that Appsmith will use to send emails. This is part of the SMTP server configuration necessary for email delivery. Set this variable to the fully qualified domain name or IP address of your email server.

</dd>

##### `APPSMITH_EMAIL_SERVER_PORT`

<dd>

Indicates the port number on which the email server is listening. Different services use different ports; for example, port 25 for non-encrypted transport, 587 for submission with StartTLS, and 465 for SMTPS. Port 465 is commonly used for Gmail with SSL. Select the appropriate port that corresponds to your email server's setup and protocols.

</dd>

##### `APPSMITH_EMAIL_SERVER_USERNAME`

<dd>

Used to authenticate with the email server and allows logging into your SMTP server. Provide the username configured at your email server for sending emails.

</dd>

##### `APPSMITH_EMAIL_SERVER_PASSWORD`

<dd>

The password corresponds to the username for the SMTP server. You must protect the secret as it grants access to your email-sending capabilities. Enter the password associated with your `APPSMITH_EMAIL_SERVER_USERNAME` to authenticate with the email server.
</dd>

##### `APPSMITH_EMAIL_FROM_ADDRESS`

<dd>

This is the email address displayed in the **From** field of the emails sent through Appsmith, essentially representing who the email is from. Set this to a valid email address that recipients of your emails can recognize and associate with.
</dd>

##### `APPSMITH_EMAIL_REPLY_TO_ADDRESS`

<dd>

The **ReplyTo** address is the email displayed in the response field of Appsmith emails, indicating where replies will be sent. Set this to a valid email address that recipients can recognize and associate with the response destination.

</dd>

##### `APPSMITH_SMTP_AUTH_ENABLED`

<dd>
Defines to use of SMTP authentication when sending emails. Set it to `true` to authenticate your emails by the server, reducing the likelihood of them being marked as spam.
</dd>

##### `APPSMITH_MAIL_SMTP_TLS_ENABLED`

<dd>
   
Determines whether the email server connection uses Transport Layer Security (TLS) for enhanced security, protecting email contents and credentials. Set to `true` to enable TLS.

</dd>

<!-- DOC-BOT-END:section-id -->