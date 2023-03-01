---
sidebar_position: 8
---
# Super Admin


The Appsmith Admin Settings page allows superusers on self-hosted instances to manage various instance configurations, including email, custom authentication, and google maps integration, as well as settings for users and permissions.


<figure>
  <img src="/img/admin-super.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i>Admin Settings option is available in the left sidebar</i></figcaption>
</figure>

:::note
If you don’t see the “Admin Settings” option in the left sidebar, you’re likely not the super admin of this instance. 
:::


## Configuring a super admin

To grant super admin privileges to another user, you can add the email addresses of users who are authorized to modify instance settings by separating them with commas, like this:

```sql
user1@mydomain.com, user2@mydomain.com
```


<figure>
  <img src="/img/super-admin.gif" style= {{width:"700px", height:"auto"}} alt="Use Admin Settings to configure your instance"/>
  <figcaption align = "center"><i>Configuring a admin</i></figcaption>
</figure>




## Using the Admin settings UI

The settings are categorized based on the area they impact, and you can select the appropriate category from the left panel. After updating any setting, simply click `save & restart`, and the UI displays a restart modal as the instance restarts. Once the restart is complete, the new settings would be implemented on your instance.


### General

In general settings of an admin panel, you can typically configure basic settings such as instance name, emails, and other similar global settings.


* **Instance Name:** Instance Name lets you to modify the name to your self-hosted instance.

* **Admin Email:** This setting lets you specify the email address of the administrator of your instance, which is used for important notifications and administrative tasks. You can also add emails of users who can modify instance settings (Comma Separated). 

* **Generated Docker Compose File:** By clicking on the download button you can generate the Docker Compose file. 

* **Share anonymous usage data**: : This setting lets you choose whether to share anonymous usage data with Appsmith. If you enable this feature, Appsmith collects anonymous usage data to help improve the product.

* **Appsmith Watermark**: This refers to a watermark that appears on the bottom right corner of the Appsmith editor. You can upgrade your plan to remove the watermark.

### Email

With the integration of email capability into your Appsmith instance, you gain the ability to effectively manage user-related emails. This includes sending out invitations and password reset notifications, inviting users to join your workspace, and notifying admins about important events and approval requests.

For more information, please refer to the [Email Configuration guide](/getting-started/setup/instance-configuration/email).




### Google maps

Appsmith provides integration with the Google Maps API, which enables users to incorporate Google Maps capability into their applications. For more information, please refer to the [Google Maps API guide](/getting-started/setup/instance-configuration/email).




### Authentication
By default, users can sign in to the Appsmith app using their email address and password through the form login. Additionally, Appsmith supports authorization via [**Google OAuth**](/getting-started/setup/instance-configuration/authentication/google-login), [**GitHub OAuth**](/getting-started/setup/instance-configuration/authentication/github-login), as well as popular single sign-on (SSO) authentication protocols like [**SAML**](/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml) (in the enterprise version) and [**OpenID**](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc) Connect (in the enterprise version).


### Advanced settings
The Advanced Settings section allows you to configure additional settings for your Appsmith instance, including external database and session storage, as well as custom domain setup.

* **MongoDB URI**: Appsmith utilizes MongoDB as its internal database. If you would like to use an [external MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis) for clustering purposes, you can change the MongoDB URI to point to the external database.

* **Redis URL**: Appsmith uses Redis for session storage. If you want to use an [external Redis](/getting-started/setup/instance-configuration/custom-mongodb-redis) instance for clustering purposes, update the Redis URL to point to the external Redis instance.

* **Custom Domain**: You have the option to [set up a custom domain](/getting-started/setup/instance-configuration/custom-domain) for your Appsmith instance. This can be useful for branding and ensuring that your Appsmith instance is identifiable.
