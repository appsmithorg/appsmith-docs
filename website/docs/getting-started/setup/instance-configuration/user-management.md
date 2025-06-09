# User Management

This page provides information on configuring user-related settings for your Appsmith instance. These settings allow administrators to manage how users interact with the platform, including session behavior, role-based access, and authentication provisioning.

### User Settings

The User Settings section includes controls that define how user sessions are handled across devices and how user data can be accessed within applications. These settings help administrators enforce security policies and implement role-based logic programmatically.

#### User Session Limit

<dd>

Limits each user to one active session at a time. When a user logs in from a new browser or device, any existing sessions are automatically terminated.

This setting is useful in scenarios where organizations want to:

- Enforce strict session control for security or licensing reasons
- Prevent account sharing among users
- Ensure that users don’t remain logged in on unattended or shared devices


</dd>

#### Programmatic Access to Users and Groups

<dd>

Allows developers to access user roles, groups, and permission data programmatically within their Appsmith applications. This setting is useful for implementing dynamic, role-based experiences such as:

- Hiding or showing UI elements based on user roles
- Restricting query access to specific groups
- Logging user activity per role or department

*Example:* You can use logic such as `{{appsmith.user.role === "Manager"}}` to conditionally render a button only for managers.

For more details, see [Restrict Query Access](/advanced-concepts/granular-access-control/how-to-guides/restrict-query-access).

</dd>


#### Session Timeout

<dd>

Automatically logs out users after a specified period of inactivity. This helps reduce the risk of unauthorized access if a user leaves their session unattended.

- **Format**: `DD:HH:MM` (Days:Hours:Minutes)

- **Minimum allowed**: `00:00:01` (1 minute)

- **Maximum allowed**: `30:00:00` (30 days)
xs
This setting applies uniformly across all users in the instance and is enforced automatically by the platform.

</dd>

### Authentication

The Authentication section allows you to configure how users authenticate with your Appsmith instance. Appsmith supports multiple sign-in methods including Single Sign-On (SSO) via standard protocols like OIDC and SAML, social providers like Google and GitHub, and the built-in form login.

<dd>

Choose the authentication method that best aligns with your organization's identity and access management strategy:


<div className="auth-provider-grid">

<a href="/getting-started/setup/instance-configuration/authentication/openid-connect-oidc">
  <img src="/img/oidc-logo.svg" alt="OIDC" />
  <span>OIDC (OpenID Connect)</span>
  <p>Sign in using any OIDC-compliant identity provider like Okta or Auth0.</p>
</a>

<a href="/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml">
  <img src="/img/saml-logo.svg" alt="SAML 2.0" />
  <span>SAML 2.0</span>
  <p>Authenticate using enterprise SAML 2.0 providers such as Ping Identity or ADFS.</p>
</a>

<a href="/getting-started/setup/instance-configuration/authentication/google-login">
  <img src="/img/g-logo.png" alt="Google OAuth" />
  <span>Google OAuth</span>
  <p>Allow users to log in with Google accounts via OAuth 2.0.</p>
</a>

<a href="/getting-started/setup/instance-configuration/authentication/github-login">
  <img src="/img/github-logo.png" alt="GitHub OAuth" />
  <span>GitHub OAuth</span>
  <p>Enable sign-in through GitHub using OAuth 2.0.</p>
</a>

<a href="#form-login">
  <img src="/img/form-login.svg" alt="Form Login" />
  <span>Form Login</span>
  <p>Use Appsmith’s default email and password-based login method.</p>
</a>

</div>

</dd>