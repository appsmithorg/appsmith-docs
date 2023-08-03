---
description: This page provides steps for configuring SendGrid as an email service provider on your self-hosted Appsmith instance.
---

# SendGrid

This page provides steps for configuring SendGrid as an email service provider on your self-hosted Appsmith instance.

## Prerequisites

- A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) to set up your Appsmith instance.
- A SendGrid account. Sign up on the [SendGrid](https://sendgrid.com/) Website if you don't have one.
- A sender identity on SendGrid. You need this to send emails via SendGrid. See the [Adding a Sender](https://docs.sendgrid.com/ui/sending-email/senders) guide on the SendGrid official documentation.

## Configure SendGrid to use SMTP Relay

1. Log into your [SendGrid account](https://app.sendgrid.com/login/).
2. Select **Email API > Integration Guide** from the left nav bar.
2. Choose **SMTP Relay** on <em>Integrate using our Web API or SMTP Relay</em> screen.
4. Click **Choose** button.
5. On <em>How to send email using the SMTP relay</em> screen:

 <figure>
 <img src="/img/email-configuration-sendgrid-api-key.png" style={{width: "100%", height: "auto"}} alt="SendGrid email configuration" />
 <figcaption align="center"><i>Configure SendGrid as your email service provider</i></figcaption>
 </figure>

 a. Enter a unique name for <b>My First API Key Name</b> field.

 b. Click the **Create Key** button. SendGrid generates a new key. Make sure to copy and save it for later use.

6. The API key generated is also shown in the **Password** field under the <em>Configure your application</em> section. 
7. Keep the SendGrid configuration screen open and proceed to the [Configure SendGrid on Appsmith](#configure-sendgrid-on-appsmith) section.

## Configure SendGrid on Appsmith

 On Appsmith, you can configure SendGrid by using one of the following ways:

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
 <dd> Add the SMTP host as <code>smtp.sendgrid.net</code> for SendGrid. </dd>
 <br/>
 <dt><b>SMTP port</b></dt>
 <dd> Add the SMTP port as <code>587</code> for using Transport Layer Security (TLS) protocol and <code>25</code> for sending emails without encryption. </dd>
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
 <dd>Add the username as <em>apikey</em> for accessing the SMTP service provider. Note that this is the literal string <em>apikey</em> and not the value of the created API key. The username is only needed when the Transport Layer Security protocol is turned on.</dd>
 <br/>
 <dt><b>SMTP password</b></dt>
 <dd>Add the API Key you created in <a href="#configure-sendgrid-to-use-smtp-relay">Configure SendGrid to use SMTP Relay</a>. The password is only needed when the Transport Layer Security protocol is turned on.</dd>
 </dl>

5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.
6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.
7. Proceed to the [Verify SendGrid integration](#verify-sendgrid-integration) section to complete the configuration on SendGrid.

### Environment variables

Follow these steps to configure SendGrid using environment variables:

1. Go to your Appsmith instance configuration file, such as the `docker.env` file for Docker or the `values.yaml` file for Kubernetes.
2. Update the values of the environment variables as shown below:
 <dl>
 <dt><b>APPSMITH_MAIL_ENABLED</b></dt>
 <dd>Set it to <code>true</code> to enable the email service.</dd> <br/>
 <dt><b>APPSMITH_MAIL_FROM</b></dt>
 <dd>Set it to the verified email of the sender.</dd><br/>
 <dt><b>APPSMITH_REPLY_TO</b></dt>
 <dd>Set it to the email that should receive replies by default.</dd><br/>
 <dt><b>APPSMITH_MAIL_HOST</b></dt>
 <dd>Set it to <code>smtp.sendgrid.net</code> for SendGrid.</dd><br/>
 <dt><b>APPSMITH_MAIL_PORT</b></dt>
 <dd>Set it to <code>587</code> for using Transport Layer Security (TLS) protocol and <code>25</code> for sending emails without encryption.</dd><br/>
 <dt><b>APPSMITH_MAIL_SMTP_TLS_ENABLED</b></dt>
 <dd>Set it to <code>true</code> to enable Transport Layer Security.</dd><br/>
 <dt><b>APPSMITH_MAIL_SMTP_AUTH</b></dt>
 <dd>Set it to <code>true</code> to share the <code>APPSMITH_MAIL_USERNAME</code> and <code>APPSMITH_MAIL_PASSWORD</code> with the SMTP server.</dd><br/>
 <dt><b>APPSMITH_MAIL_USERNAME</b></dt>
 <dd> Set it to the username as <em>apikey</em> for accessing the SMTP service provider. Note that this is the literal string <em>apikey</em> and not the value of the created API key. The username is only needed when the Transport Layer Security protocol is turned on. </dd><br/>
 <dt><b>APPSMITH_MAIL_PASSWORD</b></dt>
 <dd>Set it to the API Key you created in <a href="#configure-sendgrid-to-use-smtp-relay">Configure SendGrid to use SMTP Relay</a>. This is only needed when the Transport Layer Security protocol is turned on.</dd>
 </dl>

3. Save the changes and restart the Appsmith instance.
4. Proceed to the [Verify SendGrid integration](#verify-sendgrid-integration) section to complete the configuration on SendGrid.

## Verify SendGrid integration

Follow these steps to verify your SendGrid integration:

1. After triggering a test email, return to the SendGrid screen <em>Integrate using our Web API or SMTP Relay</em>.
 <figure>
 <img src="/img/email-configuration-sendgrid-api-key.png" style={{width: "100%", height: "auto"}} alt="SendGrid email configuration" />
 <figcaption align="center"><i>Configure SendGrid as your email service provider</i></figcaption>
 </figure>

2. Check **I've updated my settings** checkbox, and click the **Next: Verify Integration** button.
3. Click the **Verify Integration** button on the next screen and wait for SendGrid to verify the test email.
4. A screen with the message <em>It worked!</em> is displayed on successful verification.

 <figure>
 <img src="/img/email-configuration-sendgrid-integration-success.png" style={{width: "100%", height: "auto"}} alt="SendGrid integration success message" />
 <figcaption align="center"><i>SendGrid integration success message</i></figcaption>
 </figure>

## Troubleshooting

You may encounter some common errors after configuring SendGrid, such as:

* [Unable to send emails](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

[Invite Users](/advanced-concepts/invite-users)