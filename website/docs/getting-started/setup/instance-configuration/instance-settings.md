# Instance Settings

The Instance Settings section allows administrators to configure core properties that define the identity and behavior of your Appsmith instance. These settings are applied instance-wide and are commonly used during initial setup or when making environment-level updates such as setting up a custom domain, enabling Git features, or configuring Google Maps integration.

Use this section to personalize the instance, control administrative access, and ensure environment-level configurations are consistent across deployments. These settings are accessible only to users with Instance Administrator privileges.

## Instance Settings

#### Instance Name

<dd>

The Instance name is the display name of your Appsmith deployment and appears in various places across the UI, including the login page and application headers.
This helps users recognize which environment they’re working in—especially helpful when managing multiple deployments (e.g., staging vs production).

</dd>

#### Admin Email

<dd>

Specify one or more Administrator email addresses that will receive elevated privileges for managing the instance. These users can configure all Admin Settings, including authentication, access control, environment configuration, and more.

- **Format**: Comma-separated list of valid email addresses
`admin@techcorp.com`, `securitylead@techcorp.com`

Only users added here can access the Admin Settings UI.

</dd>

#### Google Maps API Key

<dd>

Configure your Appsmith instance to use Google Maps by providing a valid API key. This enables the Maps widget, which allows developers to visually display location-based data within their applications.

You’ll need to obtain an API key from your Google Cloud Console and enable the required services (such as Maps JavaScript API and Geocoding API) to ensure full widget functionality.

For setup instructions, refer to the [Google Maps Setup](/getting-started/setup/instance-configuration/google-maps) guide.

</dd>


#### Custom Domain

<dd>

Use the Custom Domain setting to configure a personalized URL for your self-hosted Appsmith instance. This replaces the default Appsmith-generated domain (e.g., `app.appsmith.com`) with a branded domain of your choice (e.g., `internal.techcorp.com`).

Configuring a custom domain improves trust, ensures a consistent user experience, and is especially important in enterprise environments where teams access internal tools via known URLs.

You can point your domain to Appsmith by updating DNS settings and configuring SSL (manually or via Let's Encrypt).

For complete steps and DNS configuration guidance, refer to the [Custom Domain Setup](/getting-started/setup/instance-configuration/custom-domain) guide.

</dd>


#### Atomic Pushes to Git

<dd>

Enable Atomic Pushes to ensure that Git operations from Appsmith are performed as single, all-or-nothing transactions. When enabled, any updates made to your Appsmith application (e.g., changes to queries, UI, or logic) are pushed to the connected Git repository as a unified commit.

This ensures consistency by preventing partial updates—either all changes are applied successfully, or none are. Atomic pushes reduce the risk of broken states, especially in collaborative or automated workflows.

For more on Git integration and supported features, see the [Version Control with Git](/advanced-concepts/version-control-with-git) guide.

</dd>