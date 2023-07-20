---
description: Configure Amazon SES to invite users to your Appsmith installation
sidebar_position: 2.2
---

# Amazon SES
This page guides you through configuring Amazon SES as an email service provider on your self-hosted Appsmith instance.

## Prerequisites

Before you begin, ensure that you have the following:

- A self-hosted Appsmith instance. If you don't have one, see the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.
- An Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
- Amazon SES is configured to send emails. If you haven't set up SES yet, make sure you have:
    - Created an identity using an email address or a domain, and the identity status is verified. See [Creating and verifying identities in Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).
    - Created SMTP credentials for your account. See [Obtaining Amazon SES SMTP credentials](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html).

## Configure Amazon SES on Appsmith

You can configure the email service provider on your Appsmith instance by choosing one of the following ways:

* [Admin Settings](#admin-settings)
* [Environment Variables](#environment-variables)

### Admin Settings
:::caution
If you have already configured email using [environment variables](#environment-variables) for your instance, those settings take precedence over the configuration provided through the Admin Settings UI.
:::

Follow these steps to configure Amazon SES using Admin Settings:

1. Log into your Appsmith instance as a superuser.
2. Go to the Admin Settings screen.
3. Select **Email** from the left navigation bar.

<figure>
<img src="/img/admin-settings-configure-email.png" style={{width: "100%", height: "auto"}} alt="Email service provider" />
<figcaption align="center"><i>Configure Amazon SES as an email service provider</i></figcaption>
</figure>

4. Configure the parameters as shown below:
    <dl>
        <dt><strong>SMTP Host and SMTP Port</strong></dt>
        <dd>Add the Simple Mail Transfer Protocol (SMTP) host and port to configure Amazon SES. These settings allow Appsmith to establish a connection with Amazon SES to send emails. To find the SMTP Host and SMTP Port, follow these steps:
            <ul>
                <li>Log into your Amazon management console.</li>
                <li>Go to Amazon Simple Email Service (SES).</li>
                <li>Select <strong>SMTP Settings</strong> from the left navigation bar.</li>
                <li>Add the <em>SMTP endpoint</em> from Amazon SES to the SMTP Host field in Appsmith.</li>
                <li>Add the <em>SMTP Port</em> from Amazon SES to the SMTP Port field in Appsmith.</li>
            </ul>
        </dd><br/>
        
        <dt><strong>From Address</strong></dt>
        <dd>Add a verified email address to be shown in the <em>From</em> field when users receive an email. This email address is displayed in the <em>From</em> field when users receive an email from your application.</dd><br/>
        
        <dt><strong>Reply To Address</strong></dt>
        <dd>Add a verified email address where users can contact you. When recipients reply to emails sent from your application, their replies are directed to this address.</dd><br/>
        
        <dt><strong>TLS Protected Connection</strong></dt>
        <dd>Amazon SES configuration uses TLS for securely sending emails. Toggle it to use Transport Layer Security (TLS) protocol for securely sending emails through Amazon SES. Enabling TLS ensures that email communications between Appsmith and Amazon SES are encrypted for enhanced security.</dd><br/>
        
        <dt><strong>SMTP Username</strong></dt>
        <dd>Add the <strong>SMTP username</strong> from the SMTP credentials available on Amazon SES. The SMTP username is used for authentication when sending emails through the SMTP server.</dd><br/>
        
        <dt><strong>SMTP Password</strong></dt>
        <dd>Add the <strong>SMTP password</strong> from the SMTP credentials available on Amazon SES. The SMTP password is used for authentication when sending emails through the SMTP server.</dd>
    </dl>


5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.
6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.

## Environment variables
Follow these steps to configure Amazon SES using environment variables:

1. Go to your Appsmith instance configuration file, such as the `docker.env` file for Docker and the `values.yaml` file for Kubernetes.
2. Update the values of the following environment variables:

    <dl>
        <dt><strong>APPSMITH_MAIL_ENABLED</strong></dt>
        <dd>Set it to <code>true</code> to enable the email service. When set to <code>true</code>, Amazon SES integration is activated, allowing Appsmith to send emails on your behalf.</dd><br/>
        <dt><strong>APPSMITH_MAIL_FROM</strong></dt>
        <dd>Set it to the verified email of the sender. This email address is displayed in the <em>From</em> field when users receive an email from your application.</dd><br/>
        <dt><strong>APPSMITH_REPLY_TO</strong></dt>
        <dd>Set it to the email that should receive replies by default. When users respond to emails sent from your application, the replies are directed to this email address.</dd><br/>
        <dt><strong>APPSMITH_MAIL_HOST and APPSMITH_MAIL_PORT</strong></dt>
        <dd>Set these variables to configure the Simple Mail Transfer Protocol (SMTP) host and port for Amazon SES. These settings allow Appsmith to establish a connection with Amazon SES to send emails. To find the SMTP Host and SMTP Port, follow these steps:
        <ul>
            <li>Log into your Amazon management console.</li>
            <li>Go to Amazon Simple Email Service (SES).</li>
            <li>Select <strong>SMTP Settings</strong> from the left navigation bar.</li>
            <li>Add the <em>SMTP endpoint</em> from Amazon SES to the <code>APPSMITH_MAIL_HOST</code> variable in Appsmith.</li>
            <li>Add the <em>SMTP Port</em> from Amazon SES to the <code>APPSMITH_MAIL_PORT</code> variable in Appsmith.</li>
        </ul>
        </dd><br/>
        <dt><strong>APPSMITH_MAIL_SMTP_TLS_ENABLED</strong></dt>
        <dd>Set it to <code>true</code> to enable Transport Layer Security (TLS) for securely sending emails through Amazon SES. Enabling TLS ensures that email communications between Appsmith and Amazon SES are encrypted, providing an additional layer of security.</dd><br/>
        <dt><strong>APPSMITH_MAIL_SMTP_AUTH</strong></dt>
        <dd>Set it to <code>true</code> to share the <code>APPSMITH_MAIL_USERNAME</code> and <code>APPSMITH_MAIL_PASSWORD</code> with Amazon SES SMTP server. Enabling SMTP authentication allows Appsmith to authenticate with Amazon SES using the provided username and password to send emails.</dd><br/>
        <dt><strong>APPSMITH_MAIL_USERNAME</strong></dt>
        <dd>Set it to the SMTP username from the SMTP credentials available on Amazon SES. This username is used for authentication when sending emails through the SMTP server.</dd><br/>
        <dt><strong>APPSMITH_MAIL_PASSWORD</strong></dt>
        <dd>Set it to the SMTP password from the SMTP credentials available on Amazon SES. This password is used for authentication when sending emails through the SMTP server.</dd>
    </dl>

3. Save the changes and restart the Appsmith instance.

## Troubleshooting

You may encounter some common errors after configuring Amazon SES:

* [Unable to send emails](help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.
