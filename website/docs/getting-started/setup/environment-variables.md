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

Indicates the port number on which the email server is listening. Different services use different ports; for example, port 25 for non-encrypted transport, 587 for submission with StartTLS, and 465 for SMTPS (SMTP over SSL). Select the appropriate port that corresponds to your email server's setup and protocols.

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

Specifies the URL for the external PostgreSQL database (e.g., an RDS instance) used by Keycloak. The connection string must be in the format: `postgres://<username>:<password>@<hostname>:<port>/<database_name>`

</dd>

##### `APPSMITH_KEYCLOAK_DB_DRIVER`

<dd>
Defines the database driver that Keycloak will use to interact with the external PostgreSQL database. For PostgreSQL databases, this value must be set to `postgresql`. The driver acts as an intermediary, facilitating smooth and efficient communication between Keycloak and the database.
</dd>


##### `APPSMITH_REDIS_URL`

<dd>
    Appsmith uses this variable to establish a link to an external Redis server, which Appsmith uses for session handling and caching operations. This connection string typically includes the Redis host, port number, and optionally, authentication credentials.
</dd>

###