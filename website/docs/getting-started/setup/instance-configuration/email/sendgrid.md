---
description: This page provides steps for configuring SendGrid as an email service provider on your self-hosted Appsmith instance.
---

# SendGrid

This page provides steps for configuring SendGrid as an email service provider on your self-hosted Appsmith instance.

## Prerequisites

- A self-hosted Appsmith instance: If you haven't installed Appsmith yet, follow the [installation guides](/getting-started/setup/installation-guides) to set up your Appsmith instance.
- A SendGrid account: If you don't have a SendGrid account, sign up for one on the [SendGrid](https://sendgrid.com/) Website.
- A sender identity on SendGrid: To send emails via SendGrid, you need to have a sender identity set up. If you don't have one, create a sender identity by following the guide [Adding a Sender](https://docs.sendgrid.com/ui/sending-email/senders) available on SendGrid official documentation.

## Configure SendGrid to use SMTP Relay

- Log into your [SendGrid account](https://app.sendgrid.com/login/).
- Create a new sender identity.
- Go to **Integrations**, select **Integrate using Web API or SMTP Relay**, and click **Start**.
- Select **SMTP Relay** on next screen.
- Click **Choose** button.
- Click the **Create API Key** button.
- Select permissions for the key. The key must have at least the _Mail Send_ permission.
- Click **Save** to create the key. SendGrid generates a new key. Make sure to copy and save it for later use.
- Add the details as shown in the screenshot below:

     <figure>
    <img src="/img/email-configuration-sendgrid-apikey.png" style={{width: "100%", height: "auto"}} alt="Create API key" />
    <figcaption align="center"><i>Create API Key</i></figcaption>
    </figure>
- Click **Next: Verify Integration** button to verify the integration.

## Configure SendGrid on Appsmith

 On Appsmith, you can configure email by using one of the following ways:

* [Admin settings](#admin-settings)
* [Environment Variables](#environment-variables)

### Admin settings

:::caution Attention
If you have configured email using [environment variables](#environment-variables) for your instance, it takes precedence over the configuration provided through the Admin Settings UI.
:::

Follow these steps to configure SendGrid using Admin Settings:

1. Log into your Appsmith instance as a superuser.

2. Go to the **Admin Settings** screen.

3. Select **Email** from the left nav bar.

    <figure>
    <img src="/img/admin-settings-configure-email.png" style={{width: "100%", height: "auto"}} alt="Email service provider" />
    <figcaption align="center"><i>Configure SendGrid as your email service provider</i></figcaption>
    </figure>

4. Add the configuration details for SendGrid as follows:
    <dl>
        <dt><b>SMTP host</b></dt>
        <dd> Add the SMTP host as `smtp.sendgrid.net` for SendGrid. </dd>
        <br/>
        <dt><b>SMTP port</b></dt>
        <dd> Add the SMTP port as `587` for using Transport Layer Security (TLS) protocol and `25` for sending emails without encryption. </dd>
        <br/>
        <dt><b>From address</b></dt>
        <dd>Add a verified email address to be shown in the <b>From</b> field when users receive an email.</dd>
        <br/>
        <dt><b>Reply-to address</b></dt>
        <dd>Add a verified email address so users can contact you.</dd>
        <br/>
        <dt><b>Enable TLS protected connection</b></dt>
        <dd>This option is turned off by default. Toggle it to enable the Transport Layer Security protocol.</dd>
        <br/>
        <dt><b>SMTP username</b></dt>
        <dd>Add the username `apikey` for accessing the SMTP service provider. This is the actual string "apikey" and not the value of the API key that is created. This is only needed when the Transport Layer Security protocol is turned on.</dd>
        <br/>
        <dt><b>SMTP password</b></dt>
        <dd>Add the API Key you created in [Configure SendGrid to use SMTP Relay](#configure-sendgrid-to-use-smtp-relay). This is only needed when the Transport Layer Security protocol is turned on.</dd>
    </dl>

5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.

6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.

### Environment variables

Follow these steps to configure SendGrid using environment variables:

1. Go to your Appsmith instance configuration file, such as the docker.env file for Docker or the values.yaml file for Kubernetes.
2. Update the values of the environment variables as shown below:
    <dl>
    <dt><b>APPSMITH_MAIL_ENABLED</b></dt>
    <dd>Set it to <code>true</code> to enable the email service.</dd> <br/>
    <dt><b>APPSMITH_MAIL_FROM</b></dt>
    <dd>Set it to the verified email of the sender.</dd><br/>
    <dt><b>APPSMITH_REPLY_TO</b></dt>
    <dd>Set it to the email that should receive replies by default.</dd><br/>
    <dt><b>APPSMITH_MAIL_HOST</b></dt>
    <dd>Set it to `smtp.sendgrid.net` for SendGrid.</dd><br/>
    <dt><b>APPSMITH_MAIL_PORT</b></dt>
    <dd>Set it to `587` for using Transport Layer Security (TLS) protocol and `25` for sending emails without encryption.</dd><br/>
    <dt><b>APPSMITH_MAIL_SMTP_TLS_ENABLED</b></dt>
    <dd>Set it to <code>true</code> to enable Transport Layer Security.</dd><br/>
    <dt><b>APPSMITH_MAIL_SMTP_AUTH</b></dt>
    <dd>Set it to <code>true</code> to share the <code>APPSMITH_MAIL_USERNAME</code> and <code>APPSMITH_MAIL_PASSWORD</code> with the SMTP server.</dd><br/>
    <dt><b>APPSMITH_MAIL_USERNAME</b></dt>
    <dd> Set it to the username as `apikey` for accessing the SMTP service provider. This is the actual string "apikey" and not the value of the API key that is created. This is only needed when the Transport Layer Security protocol is turned on. </dd><br/>
    <dt><b>APPSMITH_MAIL_PASSWORD</b></dt>
    <dd>Set it to the API Key you created in [Configure SendGrid to use SMTP Relay](#configure-sendgrid-to-use-smtp-relay). This is only needed when the Transport Layer Security protocol is turned on.</dd>
    </dl>

3. Save the changes and restart the Appsmith instance.

## Troubleshooting

You may encounter some common errors after configuring SendGrid, such as:

* [Unable to send emails](help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

[Invite Users](/advanced-concepts/invite-users)