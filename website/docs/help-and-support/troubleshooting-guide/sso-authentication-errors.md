# SSO and Authentication Errors

This page shows how to resolve common Single Sign-On (SSO) and authentication errors on self-hosted Appsmith instances using OIDC, SAML, or Google OAuth. SSO (OIDC and SAML) is available on the Enterprise Edition. For setup guides, see [Authentication](/getting-started/setup/instance-configuration/authentication).

### Locked out after misconfiguring or disconnecting SSO

#### Cause

When SSO is the only enabled login method and the provider is misconfigured, disabled, disconnected, or has an expired client secret, all users—including admins—can be unable to sign in because there is no working fallback to form login.

#### Solution

To regain admin access, re-enable form login and sign up with a new admin account:

- Re-enable form login on the running instance with `appsmithctl enable-form-login`, or toggle **Form Login** under **Admin Settings → User Management** if you still have admin access. See [User Management](/getting-started/setup/instance-configuration/user-management#authentication).
- Ensure signup is not restricted (check [`APPSMITH_SIGNUP_DISABLED`](/getting-started/setup/environment-variables#appsmith_signup_disabled)).
- Add a new email to the [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails) line of your `docker.env` file (or `values.yaml` for Kubernetes).
- Restart the server and sign up with the new email.
- Once logged in, open **Admin Settings** to reconfigure SSO or update the provider's client secret.

### Users locked out after disconnecting OIDC SSO

#### Cause

Disconnecting OIDC SSO does not automatically restore password access for users who were created through SSO. Those users have no password set, so they cannot log in once SSO is removed.

#### Solution

- Before disconnecting SSO, ensure a working email setup is configured on your instance and that email verification is enabled with all users email-verified.
- After disconnecting SSO, affected users must trigger the forgot-password flow to regain access to their accounts.
- An instance admin can re-enable form login from **Admin Settings** to expose the password login form.

### SSO configuration lost after restart

<Message
 messageContainerClassName='error'
messageContent='OIDC/SAML configuration reset and the SSO login button missing after a pod or container restart'></Message>

#### Cause

For SAML (Keycloak), the configuration is written to an H2 database under the `/appsmith-stacks/data` directory. Without a persistent volume mounted there, this data is lost on restart. OIDC configuration is stored in the MongoDB database, so a missing MongoDB persistent volume causes OIDC settings and the SSO button to disappear after restart.

#### Solution

- Confirm a persistent volume is configured for the relevant data directories so configuration survives restarts.
- For SAML/Keycloak, connect Appsmith to an external PostgreSQL instead of the bundled H2 database using [`APPSMITH_KEYCLOAK_DB_URL`](/getting-started/setup/environment-variables#appsmith_keycloak_db_url). The connection string format is `postgres://<username>:<password>@<hostname>:<port>/<database_name>`.

### Unregistered redirect URI (OIDC)

<Message
 messageContainerClassName='error'
messageContent='Unregistered redirect_uri'></Message>

#### Cause

The redirect (callback) URL that Appsmith sends to the identity provider does not exactly match the one registered with the provider. This commonly happens after the instance host or domain changes.

#### Solution

- Copy the **Redirect URL** shown on the Appsmith OIDC configuration page (**Admin Settings → Authentication → OIDC**) and register that exact value with your identity provider. See [OpenID Connect (OIDC)](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/okta).
- Ensure the host in the redirect URI matches your current Appsmith base URL.
- If the mismatch persists, remove the OIDC configuration entirely and configure it again.

### Redirect URI mismatch (SAML / Entra ID)

#### Cause

The redirect URI sent by Appsmith does not match the value configured for the registered application in the identity provider (for example Azure AD / Entra ID), often due to an `http` vs `https` protocol mismatch.

#### Solution

- Ensure both Appsmith and the identity provider use the same protocol (use `https`, not `http`).
- Add the **Redirect URL** from the Appsmith SAML 2.0 configuration page to the **Reply URL (Assertion Consumer Service URL)** in Entra ID. See [Configure SAML with Microsoft Entra ID](/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/entra-id).

### Invalid client ID breaks OIDC and Google login

<Message
 messageContainerClassName='error'
messageContent='Audience is not a valid client ID'></Message>

#### Cause

An incorrect value entered in the OIDC authentication configuration (for example a wrong audience) can break OIDC login, and may also cause Google SSO to fail. If form login is disabled, this can lock everyone out.

#### Solution

- Regain admin access by enabling form login and signing up with a new [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails) account (see the lockout recovery steps above).
- In **Admin Settings**, correct the OIDC configuration value, or remove and reconfigure OIDC.

### SSO button missing or SSO unavailable

<Message
 messageContainerClassName='error'
messageContent='SSO login button is gone and no one can log in'></Message>

#### Cause

The SSO login button can disappear if the SSO configuration was lost (see the restart issue above) or if the license is not being recognized, causing SSO to show as unavailable.

#### Solution

- Regain access by adding a new email to [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails), restarting the server, and signing up with that email.
- In **Admin Settings**, if SSO shows unavailable, click the **Refresh** button next to your license key.
- Confirm you are running the Enterprise Edition image (`appsmith/appsmith-ee`), since SSO (OIDC and SAML) is an Enterprise feature.

### Account already exists at SSO signup

<Message
 messageContainerClassName='error'
messageContent='Account already exists'></Message>

#### Cause

When a user signs up via SSO with an incorrect email, the record is retained in Keycloak, preventing them from re-registering with the correct email.

#### Solution

Delete the affected user from Keycloak so they can register again:

- Visit `<Appsmith-Deployment-URL>/auth`.
- Log in with the `KEYCLOAK_ADMIN_USERNAME` and `KEYCLOAK_ADMIN_PASSWORD` credentials from your `docker.env` file.
- Open the **Appsmith** realm.
- Go to the **Users** tab and delete the affected user.

### SAML stops redirecting correctly

#### Cause

SAML authentication can intermittently stop redirecting correctly so that users requiring fresh authentication cannot log in, while users with active cached sessions are unaffected.

#### Solution

- Restart the Appsmith deployment (containers/pods); this has resolved the symptom in reported cases.
- If a restart does not help, remove the SAML configuration and configure it again.
