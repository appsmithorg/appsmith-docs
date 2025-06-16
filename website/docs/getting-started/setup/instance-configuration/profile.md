# Profile and Organisation

This page describes the settings available under the Profile and Organisation sections in the Appsmith Admin UI. These settings allow users to manage their individual profile and configure organization-level preferences such as branding, email notifications, and data sharing.


## Account

The Account section includes personal account-level settings such as your name, image, email address. These settings apply only to your user account and do not affect other users in the instance.

<ZoomImage
  src="/img/profile-settings.png" 
  alt=""
  caption=""
/>

### Display Picture

<dd>

Upload a profile image that will be displayed on your account.

- **Maximum file size**: `3 MB`  
- **Supported formats**: `.jpg`, `.png`, `.svg`

</dd>

### Display Name

<dd>

Your display name appears across the Appsmith platform where your activity is visible—such as when editing apps, pushing changes to version control. For Example, `Jane Doe`

</dd>

### Email

<dd>

This is the email address registered to your Appsmith account. It is used for login, notifications, and password recovery.


</dd>

### Reset Password

<dd>

Click this option to initiate a password reset. A password recovery email will be sent to your registered email address.

</dd>

### Git Author

<dd>

This section is visible only when your application is connected to a Git repository. Appsmith uses the configured author details when committing changes to version control.

- **Author Name**: Name shown as the commit author (e.g., `Jane Doe`)
- **Author Email**: Email used in Git commits (e.g., `jane.doe@appsmith.com`)

For steps to connect your app to a Git repository, see the [Version Control](/advanced-concepts/version-control-with-git) with Git.

</dd>

## Organisation

The Organisation section contains settings that apply across your entire Appsmith instance. These settings are configured by administrators and impact how the instance behaves for all users within the organization.

This section includes general preferences like telemetry sharing, branding options, SMTP email configuration, and licensing. These controls allow your team to align the Appsmith environment with your internal policies and company identity.

### General 

The General section under Organisation settings allows administrators to configure global instance-level preferences that affect all users. These settings control how the instance is presented and how it behaves in terms of telemetry and branding.
#### Share Anonymous Usage Data

<dd>

Enable this setting to allow Appsmith to collect anonymized usage data from your instance. This data includes high-level metrics about feature usage, application performance, and error reporting.

No sensitive or user-specific data is collected.

The data helps Appsmith improve product stability, prioritize new features, and fix issues proactively.

You can disable this setting at any time if your organization’s policy restricts external data sharing. For more details, see [Appsmith Telemetry](/product/telemetry).

</dd>

#### Appsmith Watermark

<dd>

This toggle controls the visibility of the Built on Appsmith watermark on your applications. To remove this watermark, upgrade to the [Business Edition](https://www.appsmith.com/pricing).


</dd>


### Email Configuration

<dd>

The Email section allows you to configure an SMTP email service for your Appsmith instance. A properly configured email service is required to send system emails for key actions such as:

- User invitations
- Password reset links
- Email verification messages

You can configure properties such as the `SMTP server`, `port`, from `address`, and `authentication` credentials directly in the Admin Settings UI. 

Appsmith supports integration with popular email providers, including:

<div className="email-provider-grid"> <a href="/getting-started/setup/instance-configuration/email/gmail"> <img src="/img/gmail-logo.webp" alt="Gmail" /> <span>Gmail</span> </a> <a href="/getting-started/setup/instance-configuration/email/amazon-ses"> <img src="/img/aws-ses.png" alt="Amazon SES" /> <span>Amazon SES</span> </a> <a href="/getting-started/setup/instance-configuration/email/microsoft-365"> <img src="/img/Microsoft-365.webp" alt="Microsoft 365" /> <span>Microsoft 365</span> </a> <a href="/getting-started/setup/instance-configuration/email/sendgrid"> <img src="/img/SendGrid-.png" alt="SendGrid" /> <span>SendGrid</span> </a> </div>


For integrating with other email service providers, see the [Email Setup guide](/getting-started/setup/instance-configuration/email).



</dd>

### Branding


The Branding section allows you to customize the visual identity of your Appsmith instance to align with your organization’s brand. These options are available only with the Commercial Edition.

Brand customization helps create a familiar and consistent user experience for internal teams and external users accessing your apps.

<ZoomImage
  src="/img/branding-ss.png" 
  alt=""
  caption=""
/>

#### Logo

<dd>

Upload a custom logo that will be displayed on the Appsmith login screen and throughout the application dashboard. This is useful for organizations that want to reflect their own branding across all user-facing areas.

- Accepted formats: `.SVG`, `.PNG`, `.JPG`

- Maximum file size: `2 MB`

The uploaded logo will appear in the top navigation bar, login screen, and app headers.

</dd>

#### Favicon

<dd>

Set a custom favicon that appears in the browser tab for your Appsmith instance. This helps users visually identify the tab when switching between browser windows.

- Accepted formats: `.ICO`, `.PNG`, `.JPG`

- Recommended size: `32x32` pixels

</dd>

#### Color

<dd>

Define your instance’s primary brand color. This setting updates key UI elements such as buttons and links to reflect your organization’s design system. 

- Format: Hex code (e.g., `#5215e0`)


</dd>

For setup instructions, see the [Branding Configuration Guide](/advanced-concepts/branding).



### Audit Logs


The Audit Logs feature allows administrators to monitor and review all significant user activities within the Appsmith instance. It provides a detailed record of actions such as app creation, edits, login events, permission changes, and data source updates. This feature is available only in the [Business Edition](https://www.appsmith.com/pricing) of Appsmith.


<dd>

You can filter audit logs to find specific actions or events using the following parameters:

- **Events**: Filter by event type such as login, create, update, delete

- **Users**: View actions performed by specific users

- **Resource ID**: Enter a resource ID to locate logs related to a particular app, query, or datasource

- **Date Range**: Narrow results to a specific time period

To download logs, click Download from the top-right corner of the Audit Logs page.




</dd>


### License & Plans

The License & Plans section provides information about your current Appsmith subscription, including plan type, registered email address, and license key. These settings are relevant for administrators managing access to features available in the Appsmith Business Edition.

#### Current Plan

<dd>

Displays the type of subscription your instance is currently using—such as `Free`, `Business`, or `Enterprise`.
Your plan determines which features are available in your Appsmith instance.

For a detailed comparison, refer to the [Appsmith Commercial Edition Plans](https://www.appsmith.com/pricing).

</dd>

#### Registered Email ID

<dd>

Shows the email address associated with your active Appsmith license. This address is used to manage billing, renewals, and license activity in the [Customer Portal](https://customer.appsmith.com/).

</dd>

#### Manage Plans

<dd>

To manage your subscription, visit the [Customer Portal](https://customer.appsmith.com/). You can view your current plan, usage limits, and renewal date under the Billing and Usage tab.

</dd>

#### License Key

<dd>

Displays the encrypted license key used to activate Commercial Edition features on your instance.

- To upgrade to a paid plan, follow the steps in the [Upgrade to Paid Plan](/getting-started/setup/manage-plans/upgrade-plan) guide.

- To update an existing license key, refer to the [Update License Key](/getting-started/setup/manage-plans/upgrade-plan?current-license-mode=update-license-key#add-or-update-license-key) guide.

</dd>