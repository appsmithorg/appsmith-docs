---
sidebar_position: 8
---
# Admin Settings


The Admin Settings page allows superusers on self-hosted instances to manage various instance configurations, including email, authentication, and Google Maps integration, as well as user settings and permissions.

<figure>
  <img src="/img/super-admin-sidebar.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i>Access admin settings on the left panel under workspaces</i></figcaption>
</figure>

:::note
If you don’t see the “Admin Settings” option on the left sidebar, you’re not a super admin for the Appsmith instance and must be granted admin privileges by an existing super admin.
:::


## Add super admins
Users who are granted super admin privileges are authorized to access and make changes to instance & platform settings. If you are a super admin and want to grant super admin privileges to other users, add their email addresses in the **Admin Email** field on the **General** settings page so they can access and modify instance settings as shown below:




<figure>
  <img src="/img/admin-email-settings.png" style= {{width:"900px", height:"auto"}} alt="Use Admin Settings to configure your instance"/>
  <figcaption align = "center"><i>Configure a super admin</i></figcaption>
</figure>




## Configure admin settings
The Admin settings UI enables configuration of various settings such as user authentication, email notifications, integrations, and more. After updating any setting,  click **SAVE & RESTART** to restart the instance and apply the new settings.

### General

Under General settings, you can configure the instance name, add super admins, and manage other settings listed below:

* **Instance Name:** Instance Name lets you to modify the name to your self-hosted instance.

* **Admin Email:** This setting lets you specify the email addresses of the users to make them super administrators of your instance.

* **Generated Docker Compose File:** You can generate the Docker Compose file which defines services for your Appsmith instance. 

* **Share anonymous usage data**: : This setting lets you choose whether to share [anonymous usage data](/product/telemetry#opt-in-telemetry) with Appsmith to help improve the product.

* **Appsmith Watermark**: You can [upgrade](https://www.appsmith.com/pricing) your plan to remove the Build on Appsmith badge on the app's bottom right corner.

### Email

You can configure email on your Appsmith instance to send users invitation emails to join your workspace, password reset notifications, etc. For more information, see [Email](/getting-started/setup/instance-configuration/email).




### Google maps

 You must configure Google Maps for your instance to enable the Maps widget  For more information, see [Google Maps](/getting-started/setup/instance-configuration/email).




### Authentication
By default, users can sign in to the Appsmith app using their email address and password through the Form Login. Additionally, Appsmith supports [**Google OAuth**](/getting-started/setup/instance-configuration/authentication/google-login), [**GitHub OAuth**](/getting-started/setup/instance-configuration/authentication/github-login), as well as popular single sign-on (SSO) authentication protocols available on the enterprise edition such as [**SAML**](/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml)  and [**OpenID Connect**](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc).


### Advanced settings
The Advanced Settings section allows you to configure additional settings for your Appsmith instance, including external Mongo database, Redis session storage, and custom domain setup.

* **MongoDB URI**: Appsmith utilizes MongoDB as its internal database. If you would like to use an [external MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis) for clustering purposes, you can change the MongoDB URI to point to the external database.

* **Redis URL**: Appsmith uses Redis for session storage. If you want to use an [external Redis](/getting-started/setup/instance-configuration/custom-mongodb-redis) instance for clustering purposes, update the Redis URL to point to the external Redis instance.

* **Custom Domain**: You have the option to [set up a custom domain](/getting-started/setup/instance-configuration/custom-domain) for your Appsmith instance. 



### Branding

Appsmith's custom branding feature is exclusive to self-hosted, [Business Edition](https://www.appsmith.com/pricing) instances. It enables app builders to personalize their workspace and apps with their own logo and color palette for a cohesive experience. This includes the login screen, invite emails, and error pages to match the company's branding for end-users. To customize the appearance of your apps, see [Branding](/advanced-concepts/branding).



### Access control

Access control is a feature exclusive to Appsmith's Business Edition users that implements RBAC by assigning specific permissions to different user roles. The permission mapping for each role determines the actions they can take on the platform. To learn more about this feature, see [Access Control Guide](/advanced-concepts/access-control).

### Audit logs
The audit log feature in Appsmith is only available to Business Edition users and provides a record of all significant activities on the platform. It captures events such as what action was taken, who performed it, and when it occurred. Learn more about [Audit Logs](/advanced-concepts/audit-logs)
