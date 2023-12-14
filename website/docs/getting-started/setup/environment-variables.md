---
description: Guide on configuring environment variables for Appsmith developers and DevOps engineers.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Environment Variables

Environment variables play a crucial role in configuring different aspects of your Appsmith instance, such as authentication, defining logging levels, customizing email settings, and more. This page provides a detailed description of each environment variable along with its purpose and usage.

## OAuth 2.0

The following environment variables assist in configuring OAuth 2.0 authentication, enabling seamless login experiences and allowing Appsmith applications to authenticate users with their existing Google or GitHub credentials.

#### `APPSMITH__OAUTH2_GOOGLE_CLIENT_ID`

<dd>
    This variable stores the Client ID provided by Google during OAuth 2.0 configuration. It is unique to your application, identifying you during the authentication process with Google's servers. Set this variable to the Google OAuth 2.0 Client ID available in your Google Cloud Platform console under the credentials section for your project.
</dd>

#### `APPSMITH__OAUTH2_GOOGLE_CLIENT_SECRET`

<dd>
    This variable holds the Client Secret provided by Google for OAuth 2.0. The secret is confidential and used in server-to-server communications. Assign this variable with the Google OAuth 2.0 Client Secret obtained from the Google Cloud Platform console where you configured your OAuth credentials.
</dd>

#### `APPSMITH__OAUTH2_GITHUB_CLIENT_ID`

<dd>
    This variable represents the GitHub OAuth 2.0 Client ID used for authenticating users via GitHub. It's a public identifier for your application. Obtain your GitHub OAuth 2.0 Client ID by registering your Appsmith instance as a GitHub OAuth application and set it as the variable's value.
</dd>


#### `APPSMITH__OAUTH2_GITHUB_CLIENT_SECRET`

<dd>
    This variable, in conjunction with the Client ID, holds the secret key provided by GitHub OAuth 2.0 to authenticate your application's requests securely. Set this variable with the Client Secret provided by GitHub upon creating your OAuth application. Ensure that you store it securely and do not expose it publicly.
</dd>

## Client logging

Appsmith provides a way to enhance the log levels of your applications, aiding in monitoring client-side operations and troubleshooting issues. The following environment variable helps define the verbosity level of the logs that Appsmith will generate for client-side activities.

#### `APPSMITH__CLIENT_LOG_LEVEL`

<dd> 
This variable determines the level of detail that your client-side logs will capture. Ordered by their severity logging levels can also be adjusted based on the needs of your environment. The available levels are:

* `debug`: Provides informational logs useful for debugging. Set the level to `0` to turn on the `debug` log level.
* `error`: Logs error events that might signify a problem and warrant investigation. Set the level to `1` to turn on the `error` log level.

</dd>

## Email

Configure your email server in Appsmith to handle application emailing needs. The following environment variables enable you to set up and manage these email-related capabilities for your Appsmith instance.

#### `APPSMITH__EMAIL_ENABLED`

<dd>

Controls whether Appsmith can send emails. Use `true` to enable email capabilities or `false` to disable it.

</dd>

#### `APPSMITH__EMAIL_SERVER_HOST`

<dd>

Specifies the host address of the email server that Appsmith will use to send emails. This is part of the SMTP server configuration necessary for email delivery. Set this variable to the fully qualified domain name or IP address of your email server.

</dd>

#### `APPSMITH__EMAIL_SERVER_PORT`

<dd>

Indicates the port number on which the email server is listening. Different services use different ports; for example, port 25 for non-encrypted transport, 587 for submission with StartTLS, and 465 for SMTPS (deprecated). Select the appropriate port that corresponds to your email server's setup and protocols.

</dd>

#### `APPSMITH__EMAIL_SERVER_USERNAME`

<dd>

Used to authenticate with the email server and allows logging into your SMTP server. Provide the username configured at your email server for sending emails.

</dd>

#### `APPSMITH__EMAIL_SERVER_PASSWORD`

<dd>

The password corresponding to the username for the SMTP server. You must protect the secret as it grants access to your email sending capabilities. Enter the password associated with your `APPSMITH_EMAIL_SERVER_USERNAME` to authenticate with the email server.
</dd>

#### `APPSMITH__EMAIL_FROM_ADDRESS`

<dd>

This is the email address displayed in the **From** field of the emails sent through Appsmith, essentially representing who the email is from. Set this to a valid email address that recipients of your emails can recognize and associate with.
</dd>

#### `APPSMITH__EMAIL_REPLY_TO_ADDRESS`

<dd>

The **ReplyTo** address is the email displayed in the response field of Appsmith emails, indicating where replies will be sent. Set this to a valid email address that recipients can recognize and associate with the response destination.

</dd>



#### `APPSMITH__SMTP_AUTH_ENABLED`

<dd>
Defines to use SMTP authentication when sending emails. Set it to `true` to authenticate your emails by the server, reducing the likelihood of them being marked as spam.
</dd>

#### `APPSMITH__TLS_ENABLED`

<dd>
   
Determines whether the email server connection uses Transport Layer Security (TLS) for enhanced security, protecting email contents and credentials. Set to `true` to enable TLS.

</dd>


## Telemetry

Monitoring the performance of your Appsmith instance is crucial for making informed decisions about feature improvements and resource allocation.

#### `APPSMITH__TELEMETRY_ENABLED`

<dd>

Controls whether Appsmith sends telemetry data to its servers. You may choose to turn off the setting if it conflicts with your privacy policies or preferences. Set to `true` to allow Appsmith to collect anonymous telemetry data or `false` to opt-out.

</dd>

## Security 
Ensure the safety of your applications and data by configuring security settings, including reCAPTCHA, to safeguard your instance against automated threats. Use the environment variables below to manage these settings:

#### `APPSMITH__RECAPTCHA_ENABLED`

<dd> 
   
Enables Google reCAPTCHA verification on your Appsmith instance by embedding a reCAPTCHA in the login page, offering protection against spam and abuse by automated bots. Configure this to true after setting up reCAPTCHA with your domain to activate this feature.

</dd>

#### `APPSMITH__RECAPTCHA_SITE_KEY`

<dd>
Public key provided by Google reCAPTCHA for integrating the service into your web application. Set this variable with the site key you received after registering your Appsmith instance as a site under Google reCAPTCHA.
</dd>


#### `APPSMITH__RECAPTCHA_SECRET_KEY`

<dd>
Secret key provided by Google reCAPTCHA that Google uses to verify the user input during a communication between your server and the reCAPTCHA server. The secret is confidential and used in server-side code. Set this variable with the secret key provided by reCAPTCHA.
</dd>


## Database and session management

Appsmith can connect to external providers for MongoDB and Redis. The associated environment variables ensure that Appsmith establishes a connection to external hosting rather than using the embedded MongoDB or Redis servers.

#### `APPSMITH__MONGODB_URI`

<dd>
    Appsmith uses this variable to connect to an external MongoDB instance. Set it to the full MongoDB URI supplied by the hosting service. This enables Appsmith to store data in your MongoDB database, ensuring control and ownership of the application data.
</dd>

#### `APPSMITH__REDIS_URL`

<dd>
    Appsmith uses this variable to establish a link to an external Redis server, which Appsmith uses for session handling and caching operations. This connection string typically includes the Redis host, port number, and optionally, authentication credentials.
</dd>

#### `APPSMITH__ENCRYPTION_PASSWORD`

<dd>
    The encryption password is critical for safeguarding your datasource credentials through encryption. Select a strong password that exhibits a good level of entropy to prevent easy decryption.
 </dd>

#### `APPSMITH__ENCRYPTION_SALT`

<dd>
    The encryption salt contributes to the security strategy by adding a layer of complexity during the encryption process. This long, unique string enhances encryption strength, making it more resistant to attacks such as brute force attempts.
</dd>

## Custom Domain

If you prefer to host your Appsmith instance on a personalized domain, you can do so by setting up a custom domain. Appsmith also provisions an SSL certificate through Let’s Encrypt, securing your application with HTTPS.

#### `APPSMITH__CUSTOM_DOMAIN`

<dd>
    Set this variable with your custom domain to access Appsmith.
</dd>

## Signup and login

With Appsmith, you have the ability to manage user access and authentication methods in your instance. This helps streamline logins and control who can create accounts on the platform.

#### `APPSMITH__FORM_LOGIN_DISABLED`

<dd>

Set to `true` to turn off the default username and password login. Useful for administrators who want to enforce Single Sign-On (SSO) or limit authentication methods for added security and control.
</dd>

#### `APPSMITH__SIGNUP_DISABLED`

<dd>

Set to `true` to stop new user account creation. Useful when you want to restrict access to your Appsmith instance, allowing only users who have been specifically invited to join.
</dd>

## Server timeout

Adjust the internal server timeout to optimize performance based on your Appsmith instance's load and expected response times.

#### `APPSMITH__SERVER_TIMEOUT`

<dd>Specifies the internal Appsmith server timeout in seconds. Defaults to a `60` seconds timeout. Increase or decrease based on your server's load and expected response times.</dd>
