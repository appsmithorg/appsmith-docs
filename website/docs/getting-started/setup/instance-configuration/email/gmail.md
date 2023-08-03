---
description: Configure Gmail to invite users to your Appsmith installation
---

# Gmail
This page guides you through configuring Gmail as an email service provider on your self-hosted instance.

## Prerequisites
* A self-hosted Appsmith instance: If you haven't installed Appsmith yet, follow the [installation guides](/getting-started/setup/installation-guides) to set up your Appsmith instance.
* A [Google Workspace](https://workspace.google.com/intl/en_in/) account.

## Create app password

If you've set up 2-Step Verification for your Google account and want to use Transport Layer Security (TLS) for configuring Gmail, then you must set up a Google app password. 

If not, skip this section and move to the [Configure Gmail on Appsmith](#configure-gmail-on-appsmith) section.

Follow these steps to set up a Google app password:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security** from the sidebar.
3. Under the **How you sign in to Google** section, select **2-Step Verification**.
4. Scroll down and select **App passwords**. 
5. On the App passwords screen, choose the options as shown below:
    * Choose **Mail** for **Select app**. 
    * Choose **Other** for **Select device**, and enter a name for your Appsmith instance.

6. Click the **Generate** button to create the app password.
7. Copy the generated app password on the next screen, and keep it safe. You need it to configure Gmail on Appsmith in the next section.

## Configure Gmail on Appsmith

:::info
Google limits sending messages. For more information, see [Gmail sending limits in Google Workspace](https://support.google.com/a/answer/166852#).
:::

On Appsmith, you can configure email by using one of the following ways:

* [Admin settings](#admin-settings)
* [Environment Variables](#environment-variables)

### Admin settings

:::caution Attention
If you have configured email using [environment variables](#environment-variables) for your instance, it takes precedence over the configuration provided through the Admin Settings UI.
:::

Follow these steps to configure your email provider using Admin Settings:

1. Log into your Appsmith instance as a superuser.

2. Go to the **Admin Settings** screen.

3. Select **Email** from the left nav bar.

<figure>
<img src="/img/admin-settings-configure-email.png" style={{width: "100%", height: "auto"}} alt="Email service provider" />
<figcaption align="center"><i>Configure Gmail as an email service provider</i></figcaption>
</figure>

4. Configure the parameters as shown below: 
<dl>
<dt><b>SMTP host</b></dt>
<dd>
    <ul>
        <li>To connect without using TLS protocol enter <code>aspmx.l.google.com</code>. Ensure that you add your Appsmith self-hosted instance IP address to the allowed lists in your Google workspace. For more information, see <a href="https://support.google.com/a/answer/60751?sjid=7926061352255899566-AP">Add IP addresses to allowlists in Gmail</a> on official Google documentation. </li>
        <li> To connect with TLS protocol enter <code>smtp.gmail.com</code>.</li>
    </ul>
</dd> <br/>
<dt><b>SMTP port</b></dt>
<dd>
   <ul>
      <li>To connect without using TLS protocol enter <code> 25 </code>. Ensure that you add your Appsmith self-hosted instance IP address to the allowed lists in your Google workspace. For more information, see <a href="https://support.google.com/a/answer/60751?sjid=7926061352255899566-AP">Add IP addresses to allowlists in Gmail</a> on official Google documentation.</li>
      <li>To connect with TLS protocol enter <code> 587 </code>.</li>
   </ul>
</dd><br/>
<dt><b>From address</b></dt>
<dd>Add a verified email address to be shown in the <b>From</b> field when users receive an email.
</dd> <br/>
<dt><b>Reply-to Address</b></dt>
<dd>Add a verified email address, so users can contact you.</dd> <br/>
<dt><b>Enable TLS protected connection</b></dt>
<dd>This option is turned off by default. Toggle it to enable the transport layer security protocol.</dd> <br/>
<dt><b>SMTP username</b></dt>
<dd>Your Gmail address. This is only needed when the transport layer security protocol is turned on.</dd> <br/>
<dt><b>SMTP password</b></dt>
<dd>Your Gmail password. Alternatively, if you have 2-Step Verification enabled, set it to the app password you generated in the <a href="#create-app-password">Create app password</a> section. This is only needed when the transport layer security protocol is turned on.</dd> 
</dl>

5. Click the **SEND TEST EMAIL** button to verify the configuration. A toast message appears at the top of the page, indicating the success or failure of the test. Additionally, a test email is sent to your inbox on successful verification.

6. Click the **SAVE & RESTART** button to save the configurations and restart the instance with the updated settings.

### Environment variables

Follow these steps to configure Gmail using environment variables:

1. Go to your Appsmith instance configuration file. For example, the `docker.env` file for Docker and the `values.yaml` file for Kubernetes.

2. Update the values of the environment variables as shown below:

    <dl>
    <dt><b>APPSMITH_MAIL_ENABLED</b></dt>
    <dd>Set it to <code> true </code> to enable the email service.</dd> <br/>
    <dt><b>APPSMITH_MAIL_FROM</b></dt>
    <dd>Set it to the verified email of the sender.
    </dd><br/>
    <dt><b>APPSMITH_REPLY_TO</b></dt>
    <dd>Set it to the email that should receive replies by default.</dd><br/>
    <dt><b>APPSMITH_MAIL_HOST</b></dt>
    <dd>
        <ul> 
        <li>To connect without Transport Layer Security (TLS) protocol enter <code>aspmx.l.google.com</code>. Ensure that you add your Appsmith self-hosted instance IP address to the allowed lists in your Google workspace. For more information, see <a href="https://support.google.com/a/answer/60751?sjid=7926061352255899566-AP">Add IP addresses to allowlists in Gmail</a> on official Google documentation.</li>
        <li>To connect using TLS protocol enter <code>smtp.gmail.com</code>.</li>
    </ul>
    </dd><br/>
    <dt><b>APPSMITH_MAIL_PORT</b></dt>
    <dd>
        <ul><li>To connect without using TLS protocol enter <code>25</code>. Ensure that you add your Appsmith self-hosted instance IP address to the allowed lists in your Google workspace. For more information, see <a href="https://support.google.com/a/answer/60751?sjid=7926061352255899566-AP">Add IP addresses to allowlists in Gmail</a> on official Google documentation. </li>
        <li>To connect using TLS protocol enter <code>587</code>.</li></ul>
    </dd><br/>
    <dt><b>APPSMITH_MAIL_SMTP_TLS_ENABLED</b></dt>
    <dd>
        Set it to <code>true</code> to enable transport layer security.
    </dd><br/>
    <dt><b>APPSMITH_MAIL_SMTP_AUTH</b></dt>
    <dd>Set it to <code>true</code> to share the <code>APPSMITH_MAIL_USERNAME</code> and <code>APPSMITH_MAIL_PASSWORD</code> with Gmail SMTP server.</dd><br/>
    <dt><b>APPSMITH_MAIL_USERNAME</b></dt>
    <dd>Set it to your Gmail address. This is only needed when the transport layer security protocol is turned on.</dd><br/>
    <dt><b>APPSMITH_MAIL_PASSWORD</b></dt>
    <dd>Set it to your password. Alternatively, if you have 2-Step Verification enabled, set it to the app password you generated in the <a href="#create-app-password">Create app password Gmail</a> section. This is only needed when the transport layer security protocol is turned on.</dd>
    </dl>

3. Save the changes and restart the Appsmith instance.

## Troubleshooting

You may encounter some common errors after configuring Gmail:

- [Unable to send emails](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-send-emails)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

[Invite Users](/advanced-concepts/invite-users)