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

<!-- vale off -->

<div className="tag-wrapper">

#### Session Timeout
<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>
</div>

<!-- vale on -->

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



### Provisioning

<dd>

The Provisioning section allows administrators to automate user and group management through external Identity Providers (IdPs) such as Okta or Azure Active Directory. Appsmith currently supports provisioning via SCIM (System for Cross-domain Identity Management).

For more details, see [User Provisioning & Group Sync](/advanced-concepts/user-provisioning-group-sync).


</dd>

### Users

Users are individuals who have access to your Appsmith instance. From the Users page in the Admin UI, administrators can manage access by assigning roles, adding users, grouping users for permission control, or removing users from the instance.

<dd>

Administrators can:

- Invite new users.
- Assign or update user roles (e.g., Viewer, Developer, Admin).
- Add users to specific groups.
- Deactivate or remove users from the instance.

For more information, see [Granular Access Control](/advanced-concepts/granular-access-control#users).

</dd>

### Groups

Groups allow administrators to organize users into logical collections for easier access management. Instead of assigning roles and permissions to individual users, you can assign them to a group and manage access collectively.


<dd>
With the Groups feature, administrators can:

- Create and name groups based on roles (e.g., “Developers”, “Support Team”, “Finance”)
- Add or remove users from specific groups
- Assign roles (such as Viewer, Editor, Administrator) to the entire group

For more information, see [Granular Access Control](/advanced-concepts/granular-access-control).


</dd>


### Roles

Roles define what actions a user or group is allowed to perform within your Appsmith instance. Each role represents a bundle of permissions that govern access to applications, pages, datasources, queries, and administrative features.

<dd>

Roles can be assigned to individual users or to groups, making it easier to manage access consistently and securely across your organization.

Appsmith supports two types of roles:

- [Default Roles](/advanced-concepts/granular-access-control/reference/default-roles)
Predefined roles such as Viewer, App Viewer, Developer, and Administrator provide standardized permission sets that align with common user responsibilities.

- [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles)
Available in the Business Edition, custom roles allow administrators to define precise permission sets tailored to organizational needs, such as restricting deployment access or read-only access to certain environments.

For more information, see [Granular Access Control](/advanced-concepts/granular-access-control).

</dd>