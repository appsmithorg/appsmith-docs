---
sidebar_position: 8
---
# Super Admin


The Appsmith Admin Settings page allows superusers on self-hosted instances to manage various instance configurations, including [email](email/), [custom authentication](authentication/), and [google maps](google-maps/) integration, as well as settings for users and permissions.


<figure>
  <img src="/img/admin-super.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i>Admin Settings option is available in the left sidebar</i></figcaption>
</figure>

:::note
If you don’t see the “Admin Settings” option in the left sidebar, you’re likely not the super admin of this instance. 
:::
## Using the Admin settings UI

Once you log in as a superuser, you can find the Admin Settings option in the left sidebar.





You can update all the instance configurations listed [here](./) in the Admin Settings, including [email](email/), [custom authentication](authentication/), [google maps](google-maps/).



The Admin Settings are segregated based on the area they affect. Pick the desired category from the left panel. You can update any setting and click `save & restart` (the UI shows a restart 
modal while the instance restarts). Once it restarts, your instance has the new settings.


### General

In general settings of an admin panel, you can typically configure basic settings such as instance name, emails, and other similar global settings.


<figure>
  <img src="/img/super-admin-1.png" style= {{width:"700px", height:"auto"}} alt="Use Admin Settings to configure your instance"/>
  <figcaption align = "center"><i>Use Admin Settings to configure your instance</i></figcaption>
</figure>

* **Instance Name:** Instance Name lets you to modify the name to your self-hosted instance.

* **Admin Email:** This setting lets you specify the email address of the administrator of your instance, which is used for important notifications and administrative tasks. You can also add emails of users who can modify instance settings (Comma Separated). For example:

```sql
user1@mydomain.com, user2@mydomain.com
```


* **Generated Docker Compose File:** By clicking on the download button you can generate the Docker Compose file. 

* **Share anonymous usage data**: : This setting lets you choose whether to share anonymous usage data with Appsmith. If you enable this feature, Appsmith collects anonymous usage data to help improve the product.

* **Appsmith Watermark**: This refers to a watermark that appears on the bottom right corner of the Appsmith editor. You can upgrade your plan to remove the watermark.

### Email

Email is a popular means of communication with users, and integrating it into your Appsmith instance offers several benefits. These include the ability to invite users to your workspace, notify admins of important events and approval requests, and manage user-related emails such as invites and password resets.

* **SMTP Host** - Refers to the SMTP host of your email service provider.
* **SMTP Port** - Refers to the SMTP port of your email service provider.
* **From Address** - Refers to a verified email address to be shown in the "from" field when users receive an email. You must verify your from email address before sending emails.
* **Reply-To Address** - Refers to the email address to which replies are sent when users respond to your emails. You must verify your to email address to begin receiving emails.
* **TLS Protected** This setting enables or disables TLS protection for your email connection. It's enabled by default.
* **SMTP Username** - This field requires you to add the username for your email service provider.
* **SMTP Password** - This field requires you to add the password for your email service provider.

You can click the `Send Test Email` button to send a test email and verify their email settings. For more information, please refer to the Email Configuration guide.




### Google maps

Appsmith provides integration with the Google Maps API, which enables users to incorporate Google Maps capability into their applications. To learn more about Google Maps API key, please refer to this [guide](/getting-started/setup/instance-configuration/google-maps).



### Authentication
You have the option to select a protocol for authenticating users. Simply choose the method that best suits your needs.

By default, users can sign in to the Appsmith app using their email address and password through the form login. Additionally, Appsmith supports authorization via **Google OAuth**, **GitHub OAuth**, as well as popular single sign-on (SSO) authentication protocols like **SAML** (in the enterprise version) and **OpenID** Connect (in the enterprise version).


### Advanced settings
The Advanced Settings section allows you to configure additional settings for your Appsmith instance, including external database and session storage, as well as custom domain setup.

* **MongoDB URI**: Appsmith utilizes MongoDB as its internal database. If you would like to use an external MongoDB for clustering purposes, you can change the MongoDB URI to point to the external database.

* **Redis URL**: Appsmith uses Redis for session storage. If you want to use an external Redis instance for clustering purposes, update the Redis URL to point to the external Redis instance.

* **Custom Domain**: You have the option to set up a custom domain for your Appsmith instance. This can be useful for branding and ensuring that your Appsmith instance is identifiable.

### Version
The Version section provides information on the current version of your Appsmith instance. This information can be helpful for ensuring that you have the latest features and bug fixes.

## Configuring a super admin

If you don’t see the “**Admin Settings**” option in the left sidebar, you’re likely not the super admin of this instance. You can give super admin privileges to any user signed up in your instance by configuring the environment variable `APPSMITH_ADMIN_EMAILS` with comma-separated email ids of the users.

```bash
# Example Docker Configuration
APPSMITH_ADMIN_EMAILS=user1@mydomain.com,user2@mydomain.com
```
