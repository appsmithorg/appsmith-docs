---
description: Guide on configuring environment variables for Appsmith developers and DevOps engineers.
toc_max_heading_level: 3
---

# Environment Variables

Environment variables play a crucial role in configuring different aspects of your Appsmith instance, such as authentication, logging levels, email settings, and more. These variables are available in a configuration file located in your Appsmith installation directory. For example, if you’ve installed Appsmith using Docker, you’ll find the `docker.env` file under `<Appsmith_Installation_Directory>/stacks/configuration`. This page provides a detailed description of each environment variable, along with its purpose and usage.

:::caution important
Settings configured using Environment Variables take precedence over those set through the [Admin Settings](/getting-started/setup/instance-configuration/admin-settings) UI.
:::

### Admin email

The following environment variable is used to set up instance administrator for your Appsmith instance.

##### `APPSMITH_ADMIN_EMAILS`

<dd>
    Specify the email addresses of users who will have Instance Administrator privileges. These administrators have full control over all instance settings. To assign more than one user as Instance Administrator, separate their email addresses with commas. For example: `admin@techcorp.com, supportadmin@techcorp.com`. This grants Instance Administrator access to both users. For more information about Instance Administrator permissions, see the [Instance Administrator](/advanced-concepts/granular-access-control/reference/default-roles#instance-administrator-role) Role.
</dd>

<!-- vale off -->
<br/>
<div className="tag-wrapper">

### OIDC OAuth

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>
</div>

<!-- vale on -->

The following environment variables help in configuring OAuth 2.0 authentication with your OIDC provider, enabling seamless login experiences and allowing Appsmith applications to authenticate users with their existing OIDC credentials.

##### `APPSMITH_OAUTH2_OIDC_CLIENT_ID`

<dd>
    This variable represents your OIDC OAuth 2.0 Client ID used for authenticating users via the OIDC provider. It's a public identifier for your application. Get your OIDC OAuth 2.0 Client ID by registering your Appsmith instance with your provider and setting it as the variable's value.
</dd>

##### `APPSMITH_OAUTH2_OIDC_CLIENT_SECRET`

<dd>
    This variable, in conjunction with the OIDC Client ID, holds the secret key provided by your OIDC provider to authenticate your application's requests securely. Set this variable with the Client Secret provided by your provider upon creating your OIDC application. Ensure that you store it securely and do not expose it publicly.
</dd>


### Google OAuth

The following environment variables help in configuring OAuth 2.0 authentication with Google, enabling seamless login experiences and allowing Appsmith applications to authenticate users with their existing Google credentials.

##### `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID`

<dd>
    This variable stores the Client ID provided by Google during OAuth 2.0 configuration. It's unique to your application, identifying you during the authentication process with Google's servers. Set this variable to the Google OAuth 2.0 Client ID available in your Google Cloud Platform console under the credentials section for your project.
</dd>

##### `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET`

<dd>
    This variable holds the Client Secret provided by Google for OAuth 2.0. The secret is confidential and used in server-to-server communications. Assign this variable with the Google OAuth 2.0 Client Secret obtained from the Google Cloud Platform console where you configured your OAuth credentials.
</dd>

### GitHub OAuth

The following environment variables help in configuring OAuth 2.0 authentication with GitHub, enabling seamless login experiences and allowing Appsmith applications to authenticate users with their existing GitHub credentials.

##### `APPSMITH_OAUTH2_GITHUB_CLIENT_ID`

<dd>
    This variable represents the GitHub OAuth 2.0 Client ID used for authenticating users via GitHub. It's a public identifier for your application. Get your GitHub OAuth 2.0 Client ID by registering your Appsmith instance as a GitHub OAuth application and setting it as the variable's value.
</dd>

##### `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET`

<dd>
    This variable, in conjunction with the Client ID, holds the secret key provided by GitHub OAuth 2.0 to authenticate your application's requests securely. Set this variable with the Client Secret provided by GitHub upon creating your OAuth application. Ensure that you store it securely and do not expose it publicly.
</dd>

### Signup
With Appsmith, you can manage and control who can create accounts on the platform.


##### `APPSMITH_SIGNUP_DISABLED`

<dd>

Set to `true` to disable signup and prevent new user account creation. This is useful when you want to restrict access to your Appsmith instance, allowing only users who have been specifically invited to join. The signup page continues to show up but throws an error when a user tries to sign up. This environment variable's value does not affect the login behavior of existing users. When set:
* New, uninvited users cannot sign up using the signup form or the OAuth buttons. Both modes of signing up are not allowed.
* New, invited users can still signup using either the form or the OAuth buttons.

This configuration doesn't impact the sign-up of instance administrators, set using [`APPSMITH_ADMIN_EMAILS`](#appsmith_admin_emails) environment variables.
</dd>

##### `APPSMITH_SIGNUP_ALLOWED_DOMAINS`

<dd>

Set to restrict signups to emails belonging to only a specific set of domains. This field takes a comma-separated set of values. For example, setting `appsmith.com,gmail.com` in the variable allows users belonging to `appsmith.com` and `gmail.com` domains only to Sign up on Appsmith, restricting all other domains.

```yaml
 APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com,gmail.com
```

This environment variable's value does not affect the login behavior of existing users. When set to one or more domains:

* New, uninvited users cannot sign up using the signup form or the OAuth buttons unless the email they use has a domain that's present in this environment variable.
* New, but invited users can still signup using the signup form or the OAuth buttons, even if their email **does not** have a domain in the environment variable.

This configuration doesn't impact the sign-up of instance administrators, set using [`APPSMITH_ADMIN_EMAILS`](#appsmith_admin_emails) environment variables.
</dd>

### Form Login

With Appsmith, you can manage user access and authentication methods in your instance. This helps streamline logins.

##### `APPSMITH_FORM_LOGIN_DISABLED`

<dd>

Set to `true` to turn off the default username and password login. Useful for administrators who want to enforce Single Sign-On (SSO) or limit authentication methods for added security and control.
</dd>


### Email server

Configure your email server in Appsmith to handle application emailing needs. The following environment variables enable you to set up and manage these email-related capabilities for your Appsmith instance.

##### `APPSMITH_EMAIL_ENABLED`

<dd>

Controls whether Appsmith can send emails. Use `true` to enable email capabilities or `false` to disable it.

</dd>

##### `APPSMITH_EMAIL_SERVER_HOST`

<dd>

Specifies the host address of the email server that Appsmith will use to send emails. This is part of the SMTP server configuration necessary for email delivery. Set this variable to the fully qualified domain name or IP address of your email server.

</dd>

##### `APPSMITH_EMAIL_SERVER_PORT`

<dd>

Indicates the port number on which the email server is listening. Different services use different ports; for example, port 25 for non-encrypted transport, 587 for submission with StartTLS, and 465 for SMTPS (deprecated). Select the appropriate port that corresponds to your email server's setup and protocols.

</dd>

##### `APPSMITH_EMAIL_SERVER_USERNAME`

<dd>

Used to authenticate with the email server and allows logging into your SMTP server. Provide the username configured at your email server for sending emails.

</dd>

##### `APPSMITH_EMAIL_SERVER_PASSWORD`

<dd>

The password corresponds to the username for the SMTP server. You must protect the secret as it grants access to your email-sending capabilities. Enter the password associated with your `APPSMITH_EMAIL_SERVER_USERNAME` to authenticate with the email server.
</dd>

##### `APPSMITH_EMAIL_FROM_ADDRESS`

<dd>

This is the email address displayed in the **From** field of the emails sent through Appsmith, essentially representing who the email is from. Set this to a valid email address that recipients of your emails can recognize and associate with.
</dd>

##### `APPSMITH_EMAIL_REPLY_TO_ADDRESS`

<dd>

The **ReplyTo** address is the email displayed in the response field of Appsmith emails, indicating where replies will be sent. Set this to a valid email address that recipients can recognize and associate with the response destination.

</dd>

##### `APPSMITH_SMTP_AUTH_ENABLED`

<dd>
Defines to use of SMTP authentication when sending emails. Set it to `true` to authenticate your emails by the server, reducing the likelihood of them being marked as spam.
</dd>

##### `APPSMITH_MAIL_SMTP_TLS_ENABLED`

<dd>
   
Determines whether the email server connection uses Transport Layer Security (TLS) for enhanced security, protecting email contents and credentials. Set to `true` to enable TLS.

</dd>

### External Database

Appsmith can connect to external providers for MongoDB and Redis. The associated environment variables ensure that Appsmith establishes a connection to external hosting rather than using the embedded MongoDB or Redis servers.

##### `APPSMITH_DB_URL`

<dd>

Appsmith uses this variable to connect to an external MongoDB instance. Set it to the full MongoDB URI supplied by the hosting service. This enables Appsmith to store data in your MongoDB database, ensuring control and ownership of the application data.

```js
APPSMITH_DB_URL=mongodb+srv://<USERNAME>:<PASSWORD>@<MONGO.HOST.NAME>/<DATABASENAME>
```

If your password or username contains special characters, URL encode them. For example, the password `Something@123` is URL encoded as `Something%40123`, as shown below:

```js
APPSMITH_DB_URL=mongodb://appsmithadmin:Something%40123@1.3.4.5:27017/appsmith?retryWrites=true
```

For more information about how to URL encode your username and password, see [Encode to URL-encoded format](https://www.urlencoder.org/).

</dd>

##### `APPSMITH_ENCRYPTION_PASSWORD`

<dd>
    The encryption password is critical for safeguarding your datasource credentials through encryption. Select a strong password that exhibits a good level of entropy to prevent easy decryption.
 </dd>

##### `APPSMITH_ENCRYPTION_SALT`

<dd>
    The encryption salt contributes to the security strategy by adding a layer of complexity during the encryption process. This long, unique string enhances encryption strength, making it more resistant to attacks such as brute-force attempts.
</dd>

##### `APPSMITH_KEYCLOAK_DB_URL`

<dd>
Specifies the URL for the external PostgreSQL database (RDS instance) to be used by Keycloak. This URL is critical for establishing a secure connection to the database and must be in the format: `jdbc:postgresql://<hostname>:<port>/<database_name>`. 
</dd>

##### `APPSMITH_KEYCLOAK_DB_DRIVER`

<dd>
Defines the database driver that Keycloak will use to interact with the external PostgreSQL database. For PostgreSQL databases, this value must be set to `postgresql`. The driver acts as an intermediary, facilitating smooth and efficient communication between Keycloak and the database.
</dd>

##### `APPSMITH_KEYCLOAK_DB_USERNAME`

<dd>
Sets the username required for authenticating with the external PostgreSQL database. This credential ensures secure access and grants Keycloak the necessary permissions to manage its database operations.
</dd>

##### `APPSMITH_KEYCLOAK_DB_PASSWORD`

<dd>
Specifies the password associated with the database username. This sensitive information is used to authenticate Keycloak's connection to the PostgreSQL database and must be kept secure to prevent unauthorized access.
</dd>

##### `APPSMITH_REDIS_URL`

<dd>
    Appsmith uses this variable to establish a link to an external Redis server, which Appsmith uses for session handling and caching operations. This connection string typically includes the Redis host, port number, and optionally, authentication credentials.
</dd>

### Custom domain

If you prefer to host your Appsmith instance on a personalized domain, you can do so by setting up a custom domain. Appsmith also provisions an SSL certificate through Let’s Encrypt, securing your application with HTTPS.

##### `APPSMITH_CUSTOM_DOMAIN`

<dd>
    Set this variable with your custom domain to access Appsmith. For more information about how to set up Custom domain and SSL Certificate, see [Custom Domain and SSL](/getting-started/setup/instance-configuration/custom-domain) guide.
</dd>


### Telemetry

Monitoring the performance of your Appsmith instance is crucial for making informed decisions about feature improvements and resource allocation.

##### `APPSMITH_DISABLE_TELEMETRY`

<dd>

Telemetry allows Appsmith to collect anonymous usage data to improve the product and provide a better user experience.

You can configure this environment variable to enable or disable anonymous usage data collection. By default, telemetry is `enabled`. To disable it, set this variable to `true`.  For more details, see [Appsmith Telemetry](/product/telemetry).




```js
//To ENABLE telemetry (default behavior)
APPSMITH_DISABLE_TELEMETRY=false

//To DISABLE telemetry 
APPSMITH_DISABLE_TELEMETRY=true
```

</dd>

### Embed Appsmith

Embedding your Appsmith apps on external websites can expose them to clickjacking attacks. To mitigate this, Appsmith uses the `Content-Security-Policy` header with the `frame-ancestors` directive. For more details, refer to the [frame-ancestors documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors).

Starting from Appsmith `v1.7.10`, apps are restricted from being loaded in a frame or iframe on domains other than the app's own domain. For instance, if your Appsmith instance is hosted at `http://mydomain.com`, only pages on `http://mydomain.com` can embed its apps.

You can configure or customize this behavior by using below environment variable:

##### `APPSMITH_ALLOWED_FRAME_ANCESTORS`

<dd>
This variable allows you to specify which domains can embed your Appsmith apps in a frame or iframe. Below are some examples:

- **Specific domain**: To allow a specific domain, such as `http://trusted-other.com`, use:

  ```yaml
  APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://trusted-other.com"
  ```

- **Multiple domains**: To allow multiple domains, separate them with spaces:

  ```yaml
  APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://trusted-other.com http://another-trusted.com"
  ```

- **Subdomains**: To allow all subdomains under `trusted-other.com`, use:

  ```yaml
  APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://*.trusted-other.com"
  ```
</dd>
For more information about embedding Appsmith, see the [Embed Appsmith](/advanced-concepts/embed-appsmith-into-existing-application) guide.

### Git Local File Path

Appsmith clones Git repositories to the local file system, which is attached to the persistent volume within the Docker container. To ensure the repositories are maintained across restarts, you need to specify a file path that points to the volume within the Docker container.

##### `APPSMITH_GIT_ROOT`

<dd>
This environment variable allows you to set a custom Git root path for your Appsmith Git repositories, enabling local repositories to be created and persisted on your machine. To set the custom root path, use the following command:

```bash
APPSMITH_GIT_ROOT=<path-to-repo-directory>
```
If this file path is not configured, repositories will be cloned but will not persist. This can lead to data loss during events like a Docker restart. Appsmith will attempt to re-clone the repositories if they are deleted, but configuring persistent storage is essential to avoid any potential loss of data.
</dd>

### Client logging

Appsmith provides a way to enhance the log levels of your applications, aiding in monitoring client-side operations and troubleshooting issues. The following environment variable helps define the verbosity level of the logs that Appsmith will generate for client-side activities.

##### `APPSMITH_CLIENT_LOG_LEVEL`

<dd> 
This variable determines the level of detail that your client-side logs will capture. Ordered by their severity logging levels can also be adjusted based on the needs of your environment. The available levels are:

* `debug`: Provides informational logs useful for debugging. Set the level to `0` to turn on the `debug` log level.
* `error`: Logs error events that might signify a problem and warrant investigation. Set the level to `1` to turn on the `error` log level.

</dd>

### Google reCAPTCHA  
Ensure the safety of your applications and data by configuring security settings, including reCAPTCHA, to safeguard your instance against automated threats. Use the environment variables below to manage these settings:

##### `APPSMITH_RECAPTCHA_ENABLED`

<dd> 
   
Enables Google reCAPTCHA verification on your Appsmith instance by embedding a reCAPTCHA in the login page, offering protection against spam and abuse by automated bots. Configure this to true after setting up reCAPTCHA with your domain to activate this feature.

</dd>

##### `APPSMITH_RECAPTCHA_SITE_KEY`

<dd>
Public key provided by Google reCAPTCHA for integrating the service into your web application. Set this variable with the site key you received after registering your Appsmith instance as a site under Google reCAPTCHA.
</dd>


##### `APPSMITH_RECAPTCHA_SECRET_KEY`

<dd>
The secret key provided by Google reCAPTCHA that Google uses to verify the user input during communication between your server and the reCAPTCHA server. The secret is confidential and used in server-side code. Set this variable with the secret key provided by reCAPTCHA.
</dd>


### Google Maps API

The following environment variable is used to integrate Google Maps with your Appsmith applications on a self-hosted instance.

#### `APPSMITH_GOOGLE_MAPS_API_KEY`

This variable specifies the Google Maps API key required to enable the Map Widget in your applications. The key allows your Appsmith instance to communicate with the Google Maps API for displaying and interacting with maps.

```yaml
APPSMITH_GOOGLE_MAPS_API_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
```

Replace `<YOUR_GOOGLE_MAPS_API_KEY>` with a valid API key obtained from the [Google Cloud Console](https://console.cloud.google.com/). You may also choose to set the Google Maps API key using the Admin settings UI on your Appsmith instance. For more information about configuring the Google Maps API key through the Admin settings, see the [Google Maps](/getting-started/setup/instance-configuration/google-maps) reference.

### File size limit

The default file size limit in Appsmith is 150 MB. This limit is customizable based on your requirements for larger file uploads in self-hosted instances.

##### `APPSMITH_CODEC_SIZE`
<dd>
Specifies the allowed file size. To change the file size limit, update the `APPSMITH_CODEC_SIZE` parameter in the configuration file specific to your deployment. For example, when installed on Docker, update the `docker.env` file, and when installed on Kubernetes, update the `values.yaml` file. For more information about large file uploads, see [Configure File Size Limit](/getting-started/setup/instance-configuration/file-size-limit).
</dd>

### Supervisord 

Access the Supervisord web interface seamlessly through Appsmith by setting login credentials using environment variables. Securely control your background processes, ensuring reliable application management.

##### `APPSMITH_SUPERVISOR_USER`

<dd>
Specifies the username for authentication within Supervisord. Appsmith uses this credential to interact with Supervisord, facilitating the management and monitoring of background processes and tasks.

</dd>

##### `APPSMITH_SUPERVISOR_PASSWORD`

<dd>

Sets the password associated with the Supervisord user specified in `APPSMITH_SUPERVISOR_USER`. This password is essential for secure authentication, enabling Appsmith to manage and control background processes seamlessly through Supervisord.

</dd>

<!-- vale off -->
<br/>
<div className="tag-wrapper">

### Automatic backups

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>
</div>

<!-- vale on -->

In Appsmith, you have the flexibility to automate backups for your self-hosted instance. You can use the `5-value` cron expression to schedule regular backups. For more details about cron expressions, see [Cron Schedule Expression Editor](https://crontab.guru/).

##### `APPSMITH_BACKUP_CRON_EXPRESSION`

<dd>

Specify a `5-value` cron expression to define the schedule for automatic backups. This allows you to tailor the backup frequency according to your preferences. Set this to `disable` to disable automatic backups. Some examples to schedule the backup are as follows:

        - To schedule backups at 12:00 noon every Sunday:
            ```bash
            #highlight-next-line
            APPSMITH_BACKUP_CRON_EXPRESSION="0 12 * * SUN"
            ```

        - To schedule backups daily at midnight:
            ```bash
            #highlight-next-line
            APPSMITH_BACKUP_CRON_EXPRESSION="0 0 * * *"
            ```

</dd>

<!-- vale off -->
<br/>
<div className="tag-wrapper">

### Sync backup to S3

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>
</div>

<!-- vale on -->

   `APPSMITH_BACKUP_S3_ACCESS_KEY=AWS_ACCESS_KEY`
   `APPSMITH_BACKUP_S3_SECRET_KEY=AWS_SECRET_KEY`
   `APPSMITH_BACKUP_S3_BUCKET_NAME=BUCKET_NAME`
   `APPSMITH_BACKUP_S3_REGION=AWS_BUCKET_REGION`

 For more information about how to sync back up to s3, see [Sync Backup to S3 Bucket](/getting-started/setup/instance-management/backup-and-restore/sync-backup-to-s3) guide.
### Server timeout

Adjust the internal server timeout to optimize performance based on your Appsmith instance's load and expected response times.

##### `APPSMITH_SERVER_TIMEOUT`

<dd>

Specifies the internal Appsmith server timeout in seconds. Defaults to a `60` second timeout. Increase or decrease based on your server's load and expected response times.
</dd>

### Intercom

Appsmith includes an Intercom app for all self-hosted instances. Use the following environment variables to configure or disable it.

##### `APPSMITH_INTERCOM_APP_ID`

<dd>
Set this to the Intercom App ID to enable the Intercom app on your self-hosted instance.
</dd>

##### `APPSMITH_DISABLE_INTERCOM`

<dd>
Set this to `true` to disable the Intercom app on your self-hosted Appsmith instance. To remove the Intercom app, set the `APPSMITH_INTERCOM_APP_ID` key to an empty string and `APPSMITH_DISABLE_INTERCOM` to `true`, as shown below:

```yaml
APPSMITH_INTERCOM_APP_ID=''
APPSMITH_DISABLE_INTERCOM=true
```
</dd>

## See also
* [Configure Appsmith instance using Environment Variables](/getting-started/setup/instance-configuration/configure-using-environment-variables) - Learn more about setting up and managing environment variables in Appsmith.
* [Admin Settings](/getting-started/setup/instance-configuration/admin-settings) - Learn more about setting up and managing Appsmith instance using Admin Settings User Interface.