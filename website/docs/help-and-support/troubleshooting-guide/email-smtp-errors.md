# Email and SMTP Errors

This page shows how to resolve common email and SMTP delivery errors on self-hosted Appsmith.

### Password reset or invite emails not arriving

#### Cause

The SMTP configuration is missing or incorrect, so password reset, invite, and verification emails are never delivered even though the account exists.

#### Solution

- Verify your SMTP settings and use the **SEND TEST EMAIL** button in the admin email settings to confirm the configuration. A toast indicates success or failure, and a test email is sent on success. See [Email configuration](/getting-started/setup/instance-configuration/email).
- For provider-specific setup (Gmail app passwords, SendGrid, Microsoft 365, Amazon SES), follow the [Email setup guides](/getting-started/setup/instance-configuration/email).

### Reset your password when email delivery is not working

#### Cause

You cannot log in and no password reset email is being delivered, so you are locked out even though the account exists in the database.

#### Solution

- Even without working email, initiate the password reset flow in the UI, then check the backend server logs for the generated password reset URL and open it in your browser to reset the password.
- See the community guide: [How to reset an Appsmith account password without email](https://community.appsmith.com/content/guide/how-reset-appsmith-account-password-without-email).

### SMTP authentication or TLS configuration

#### Cause

Emails fail to send or are marked as spam because SMTP authentication or TLS is not enabled for the connection to the mail server.

#### Solution

- Set `APPSMITH_SMTP_AUTH_ENABLED=true` to authenticate with the SMTP server.
- Set `APPSMITH_MAIL_SMTP_TLS_ENABLED=true` to use TLS for the connection. See [Environment variables](/getting-started/setup/environment-variables).
- Choose the correct port for your provider: 587 for submission with StartTLS, 465 for SMTPS, or 25 for non-encrypted transport.
- Optionally set `APPSMITH_EMAIL_REPLY_TO_ADDRESS` for the ReplyTo address.
