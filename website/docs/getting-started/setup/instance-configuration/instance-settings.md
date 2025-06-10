# Instance 

The Instance Settings section allows administrators to configure core properties that define the identity and behavior of your Appsmith instance. These settings are applied instance-wide and are commonly used during initial setup or when making environment-level updates such as setting up a custom domain, enabling Git features, or configuring Google Maps integration.

Use this section to personalize the instance, control administrative access, and ensure environment-level configurations are consistent across deployments. These settings are accessible only to users with Instance Administrator privileges.

<ZoomImage
  src="/img/instace-settings.png" 
  alt=""
  caption=""
/>



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

When using Bitbucket, atomic pushes can improve consistency like in complex workflows or when different systems are interacting with the repository. While Bitbucket supports atomic pushes, some other Git providers like Azure Repos may not fully support this feature in the same way.

For more on Git integration and supported features, see the [Version Control with Git](/advanced-concepts/version-control-with-git) guide.

</dd>


### Configuration

This section allows you to configure critical backend services that support the Appsmith platform. These settings are essential for customizing persistence, performance, and deployment-level behavior, particularly in advanced setups such as clustered or self-managed environments.


<dd>

The Appsmith DB URL defines the connection string to the MongoDB instance used by your Appsmith deployment. This database is responsible for storing all persistent data, including user information, application configurations, themes, and audit logs.

By default, Appsmith uses an embedded MongoDB database bundled with the installation. However, for production use—especially in high availability or clustered deployments—it is strongly recommended to connect Appsmith to an external MongoDB instance.

*Syntax*:

```js
APPSMITH_MONGODB_URI=mongodb://username:password@host:port/appsmith
```

For more information on how to set up an external MongoDB, see the [Custom MongoDB Setup](https://docs.appsmith.com/getting-started/setup/instance-configuration/custom-mongodb-redis).

</dd>


#### Redis URL

<dd>

The Redis URL specifies the connection string for the Redis instance used by your Appsmith server. Redis is responsible for handling caching, session management, rate limiting, and real-time collaboration features such as commenting and Git sync status.

By default, Appsmith uses an embedded Redis instance, suitable for local development or small-scale deployments. In production environments or for performance optimization, it is recommended to configure an external Redis service.

*Syntax*:

```js
APPSMITH_REDIS_URL=redis://username:password@host:port
```

For more details on configuring an external Redis instance, see the [Custom Redis Setup](https://docs.appsmith.com/getting-started/setup/instance-configuration/custom-mongodb-redis) guide.

</dd>


#### Connection Pool Size

<dd>

The Connection Pool Size controls how many concurrent database connections Appsmith can open per datasource. This value directly affects how efficiently Appsmith interacts with your databases, especially under high load.

When Appsmith runs queries, it opens connections to your backend databases (e.g., PostgreSQL, MySQL, MongoDB). These connections are managed in a pool. The connection pool ensures that connections are reused efficiently rather than opening and closing them for every query.

- **Range**: 5 to 50 connections

*Recommendations:*

- **Lower values** (e.g., 5–10): Suitable for small teams or development environments. Setting this too low can cause queries to wait or time out if the pool is exhausted.

- **Higher values** (e.g., 30–50): Useful for large teams or production apps with multiple parallel data operations. Setting this too high without sufficient backend resources (e.g., database limits, memory) may result in connection errors or degraded performance.

- Match the pool size to your database's max connections and application concurrency needs.



</dd>



#### Private Embed Settings

<dd>

Private embedding controls how Appsmith applications behave when embedded in external platforms. When enabled, the embedded application requires users to be authenticated before they can access or interact with it.

If a user is not logged in, they will be redirected to the login page. After successful authentication, the user is returned to the embedded view with the appropriate permissions.

Use this option when embedding apps in internal portals or multi-tenant environments to ensure secure access. By default, this setting is disabled. Enabling it helps protect sensitive data and restricts unauthorized users from loading the app inside an iframe.

For more guidance, see the[ Embed Appsmith](/advanced-concepts/embed-appsmith-into-existing-application).

</dd>



#### Embed Settings

<dd>

The Embed Settings section allows you to control how Appsmith applications can be embedded into external platforms, websites, or portals using iframes. These settings are important for enforcing security and content isolation, especially in environments where apps are shared across teams, clients, or external systems.

You can choose from the following options depending on your access control and use case:

1. **Allow embedding everywhere**

This option permits your Appsmith applications to be embedded from any domain, without restriction. This setting is useful in open or development environments where apps need to be accessible universally.

<dd>

:::caution important
Enabling this option may expose your app to clickjacking risks if additional protections are not implemented.
:::

</dd>

2. **Limit embedding to certain URLs**
Restricts embedding only to specific trusted domains. This is the recommended option for production environments where apps are embedded in controlled portals.

*Examples:*

<dd>

**Specific domain:** To allow embedding only on a specific domain, enter:

```pgsql
http://trusted-other.com
```

**Multiple domains:** To allow embedding on more than one domain, separate them with spaces:

```pgsql
http://trusted-other.com http://another-trusted.com
```

**All subdomains:** To allow embedding across all subdomains of a domain, use an asterisk (*):

```cpp
http://*.trusted-other.com
```

These values are enforced via the `X-Frame-Options` and `Content-Security-Policy` headers to control where the application can be embedded.

</dd>

3. **Disabling embedding**

Prevents embedding of your application on any external site. When this option is selected, the app will not render in iframes or third-party web containers. This is ideal for internal tools or highly secure apps that should only be accessed directly.

</dd>


### Version

<dd>

The Version section displays the currently installed version of your Appsmith instance. This information is useful for debugging, support, and verifying compatibility with plugins, features, or deployment tools.

For example:

```nginx
Appsmith v1.76.0-SNAPSHOT
```

</dd>