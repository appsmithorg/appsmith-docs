# User Management and Permissions Errors

This page shows how to resolve common user management, role, and provisioning errors on self-hosted Appsmith Enterprise.

### Can't access Users or Roles pages after CE to EE upgrade

<Message
 messageContainerClassName='error'
messageContent='Unauthorized access'></Message>

#### Cause

After upgrading from Community Edition to Business/Enterprise, the user attempting to reach the Users and Roles pages is not recognized as an instance administrator, so the User Management settings are not available to them.

#### Solution

- Add the administrator's email to the [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails) environment variable in your `docker.env` file (Docker) or `values.yaml` file (Kubernetes).
- Restart the instance for the change to take effect.
- Verify your running version by appending `/info` to your instance URL in the browser.

### Custom role not restricting page or app access

#### Cause

The user still has a default role (such as **App Viewer**) assigned in addition to the custom role. Default roles like App Viewer grant access to all pages in an app, which overrides the narrower access defined in your custom role. Restricting a custom role to one page does not remove access granted by another assigned role.

#### Solution

- Go to **Admin Settings > Users** and review every role assigned to the user, not just the custom role.
- Remove the broad default role (for example, App Viewer) from the user, and rely on the custom role with **View** permission for only the intended pages.
- Ensure the **View** permission is also enabled at the application level, not only at the page level.
- For more details on building roles, see [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles) and [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

### User can log in but sees no apps or workspaces

#### Cause

After accepting an invite and logging in, the user lands on an empty home screen with no application or workspace visible, even though a role and group appear to be assigned. This points to a misconfiguration in the user's current role/group assignment that needs to be inspected per user.

#### Solution

- Ask an instance administrator to review the user's current configuration under **Admin Settings > Users**.
- Confirm the role granting access is actually assigned and that **View** is enabled at the application level.
- If the issue persists, collect the backend server logs covering the time range when the access was configured (`docker logs <container>` for Docker, or `kubectl logs <pod>` for Kubernetes) and share them with support for further investigation.

### Permission denied on query execute despite a working role

<Message
 messageContainerClassName='error'
messageContent='You do not have access to this environment. Please contact your workspace administrator to gain access'></Message>

#### Cause

The user can view the application but fails on the `execute` endpoint. This error indicates the user lacks access to the environment the query runs against, even when the same role works for other users.

#### Solution

- Have the workspace administrator grant the user access to the affected environment.
- If the role is expected to already allow execution, collect the full server logs (`docker logs <container>` or `kubectl logs <pod>`) and share them with support to identify the missing grant.

### Users can create workspaces when they shouldn't

#### Cause

The **Default Role for All Users** initially includes permission to create new workspaces, and this role applies to every user across the instance. As a result, ordinary app users may unexpectedly be able to create workspaces, and a new workspace plus a default app can be auto-created when a user signs up.

#### Solution

- Go to **Admin Settings > Roles** and toggle **Default Roles** to show the default roles.
- Open the **Default Role for All Users** and remove the workspace-creation permission (under the workspace/Others permissions).
- Any workspaces already auto-created for existing users must be deleted manually.
- For step-by-step guidance, see [Configure default permissions](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) and [Default Roles for All Users](/advanced-concepts/granular-access-control/reference/default-roles#default-role-for-all-users).

### Cannot edit or delete a default role

#### Cause

Default roles such as **App Viewer**, **Developer**, and **Workspace Administrator** are pre-defined permission sets that cannot be altered or deleted. Attempting to delete them from the Roles menu has no effect.

#### Solution

- To enforce tighter restrictions (for example, preventing App Viewers from sharing an app), create a [custom role](/advanced-concepts/granular-access-control/reference/custom-roles) with only the permissions you want and assign it instead of the default role.
- To remove a user's access to a specific app that was granted by a default role, open the app in edit mode, click **Share**, choose **Manage users**, and remove the user from that app's list.
- See [Roles](/advanced-concepts/granular-access-control/roles) for the difference between default and custom roles.

### SCIM provisioning test connection fails

#### Cause

SCIM requires the Identity Provider to reach your instance over HTTPS on the same endpoint as the rest of Appsmith (typically port 443). If the instance is only reachable over a VPN or an internal network the IdP can't reach, the connection test fails. A separate cause is a SCIM API key that no longer works after the encryption salt/password changed.

#### Solution

- Ensure the Appsmith instance is reachable by your IdP over HTTPS. SCIM is served on the same HTTPS endpoint as Appsmith, not a separate port. See [Setup SCIM Provisioning](/advanced-concepts/user-provisioning-group-sync).
- You do not need to configure SAML to use SCIM; the two are independent. Configure SCIM on its own if you only need provisioning.
- If the SCIM API key stops working, set [`APPSMITH_ENCRYPTION_PASSWORD`](/getting-started/setup/environment-variables#appsmith_encryption_password) and [`APPSMITH_ENCRYPTION_SALT`](/getting-started/setup/environment-variables#appsmith_encryption_salt) explicitly and keep them stable across upgrades. If left unset, Appsmith auto-generates them and they can change during upgrades, causing a salt/password mismatch that breaks encrypted credentials such as the SCIM key.
- To validate the SCIM endpoint directly, call `GET https://<your-instance-url>/scim/Users` with the header `Authorization: Bearer <GENERATED_SCIM_API_KEY>`.
- You can use an attribute other than `userName` (for example, `email`) as the unique identifier field when configuring SCIM in your IdP.

### SAML or SCIM configuration lost after restart

#### Cause

On self-hosted instances, the Keycloak (authentication) data is written to the H2 database under the `/appsmith-stacks/data` directory. Without a persistent volume on that path, the SAML/SSO configuration is lost on every restart.

#### Solution

- Configure a persistent volume for the Appsmith stacks data so the Keycloak database survives restarts.
- Alternatively, back Keycloak with an external PostgreSQL database by setting [`APPSMITH_KEYCLOAK_DB_URL`](/getting-started/setup/environment-variables#appsmith_keycloak_db_url). The connection string format is `postgres://<username>:<password>@<hostname>:<port>/<database_name>`.

### Restoring admin access when the last admin has left

#### Cause

When the only user with instance-admin access leaves, no one can reach Admin Settings to grant a replacement admin from the UI.

#### Solution

- Add the new administrator's email to the [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails) environment variable in your `docker.env` (Docker) or `values.yaml` (Kubernetes) file.
- Restart the instance. The new admin can then log in and access Admin Settings.
