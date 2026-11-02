# Upgrade and Migration Errors

This page shows how to resolve common errors when upgrading or migrating a self-hosted Appsmith instance. Before any upgrade or migration, always take a backup of your instance so you can roll back. See [Backup instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance) and [Upgrade Appsmith versions](/getting-started/setup/instance-management/update-appsmith).

### Backend down with aborted migration after upgrade

<Message
 messageContainerClassName='error'
messageContent='ABORTED MIGRATION'></Message>

#### Cause

During an upgrade, Appsmith runs one-time database migrations. If a migration does not complete (or is skipped/aborted), the backend can fail to start, and the log shows changeset entries being `PASSED OVER` followed by an aborted migration. The root cause in these cases was the migration script not running to completion during the version change.

#### Solution

- Restore your pre-upgrade backup to return to a working state, then retry the upgrade. See [Restore instance](/getting-started/setup/instance-management/backup-and-restore/restore-instance).
- Update directly to the latest version, since fixes for migration failures are shipped in newer releases. See [Upgrade Appsmith versions](/getting-started/setup/instance-management/update-appsmith).
- If your current version is older than v1.9.2, you must first follow the [Upgrade to Checkpoint Version (v1.9.2)](/getting-started/setup/instance-management/upgrade-to-checkpoint-version) guide, as skipping the mandatory checkpoint can leave migrations in an inconsistent state.
- If your current version is newer than v1.9.2 but older than v1.96, first upgrade to any version from v1.96 through v1.99 (v1.99 is recommended), and then upgrade to 2.0 or newer. See [Upgrade Appsmith versions](/getting-started/setup/instance-management/update-appsmith).
- If the backend still fails after upgrading, gather full server logs and contact support.

### SSO login returns 502 after upgrading to v2.4 or later

<Message
 messageContainerClassName='error'
messageContent='ERROR: permission denied for schema public [Failed SQL: (0) CREATE TABLE public.databasechangelog ...]'></Message>

The login page loads, but selecting the SSO button returns **502 Bad Gateway**. The container shows as `unhealthy`. The Keycloak logs in `/appsmith-stacks/logs/keycloak/` repeat the error above, and the supervisor log shows `exited: keycloak (exit status 1; not expected)` every 30 to 60 seconds.

#### Cause

This affects instances that set [`APPSMITH_KEYCLOAK_DB_URL`](/getting-started/setup/environment-variables#appsmith_keycloak_db_url) but not [`APPSMITH_KEYCLOAK_DB_DRIVER`](/getting-started/setup/environment-variables#appsmith_keycloak_db_driver).

Before v2.4, Keycloak ignored `APPSMITH_KEYCLOAK_DB_URL` unless `APPSMITH_KEYCLOAK_DB_DRIVER` was also set. It kept its data, including your SAML configuration, in the embedded H2 database at `/appsmith-stacks/data/keycloak/keycloakdb.mv.db`. From v2.4, Keycloak uses the PostgreSQL database in `APPSMITH_KEYCLOAK_DB_URL` whenever that variable is set.

On the first start after the upgrade, Keycloak connects to the external PostgreSQL database and finds no tables. Your Keycloak data does not move from H2 to PostgreSQL. What happens next depends on the database user:

- **The user cannot create tables.** Keycloak fails with `permission denied for schema public` and restarts in a loop. SSO returns 502.
- **The user can create tables.** Keycloak starts with an empty database, so your SAML configuration is missing.

Rolling back to an older v2.x image does not help, because every version from v2.4 behaves the same way.

#### Solution

Keep Keycloak on the embedded H2 database, where your existing data is:

1. Confirm the H2 database exists. The `/appsmith-stacks/data/keycloak/` directory should contain `keycloakdb.mv.db`.
2. Add this line to your `docker.env` file, or to the `environment` section of your `docker-compose.yml`:

   ```bash
   APPSMITH_KEYCLOAK_DB_DRIVER=h2
   ```

   On Kubernetes, add it under `applicationConfig` in your `values.yaml`.
3. Recreate the container:

   ```bash
   docker-compose up -d --force-recreate
   ```

4. Check that SSO login works.

Keep `APPSMITH_KEYCLOAK_DB_DRIVER=h2` set for all later upgrades. If you remove it, the error returns.

To avoid this problem, add `APPSMITH_KEYCLOAK_DB_DRIVER=h2` **before** you upgrade from a version older than v2.4 to v2.4 or later. Do this on every instance that sets `APPSMITH_KEYCLOAK_DB_URL`.

To move your Keycloak data from H2 to the external PostgreSQL database, contact support via the chat widget.

### Errors or missing plugins after downgrading by changing the image tag

#### Cause

Appsmith migrations are designed to run only once. If you upgrade and then downgrade by simply changing the image tag back to an older version, the database may already contain data that has been migrated to the newer schema, which the older version cannot read. This produces application errors (for example, missing plugins, or reset workspace/organization data) and can break the instance even after returning to the new version.

#### Solution

- Do not downgrade by only changing the image tag. The supported way to roll back is to restore the backup you took before upgrading. See [Restore instance](/getting-started/setup/instance-management/backup-and-restore/restore-instance).
- If you have already downgraded without restoring a backup and are seeing errors, the recommended path is to upgrade back to the latest version and address the original issue there, with support's help. A migration that already ran once will not repeat automatically, so contact support via the chat widget if the instance remains in a broken state.

### "Unable to invoke Cipher due to bad padding" after restoring a backup

<Message
 messageContainerClassName='error'
messageContent='Unable to invoke Cipher due to bad padding'></Message>

#### Cause

This appears after restoring a backup into an instance whose encryption credentials don't match the backup. A common cause during migration between environments is that the target instance is using different `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT` values than the instance the backup was taken from, so the restored data cannot be decrypted.

#### Solution

- When restoring a backup, the target instance's `APPSMITH_ENCRYPTION_PASSWORD` and `APPSMITH_ENCRYPTION_SALT` must match the values from the instance that produced the backup. Update these in `docker.env` to the backed-up values and restart.
- For the full troubleshooting steps and other causes of this error, see [Deployment Errors](/help-and-support/troubleshooting-guide/deployment-errors).
- Be careful when restoring backups across environments: restoring a backup also restores that environment's data and requires that environment's encryption keys.

### Upgrading directly to the latest version vs stepping through releases

#### Cause

Users on very old versions are sometimes unsure whether they must step through intermediate versions, and instances configured with a floating image tag can upgrade unexpectedly.

#### Solution

- You can update directly from an old version to the latest in a single step; you do not need to go through every intermediate version. The exception is the mandatory checkpoint: if you are older than v1.9.2, first follow [Upgrade to Checkpoint Version (v1.9.2)](/getting-started/setup/instance-management/upgrade-to-checkpoint-version). For Docker, there is also a v1.96 to v1.99 checkpoint required before moving to 2.0+, described in [Upgrade Appsmith versions](/getting-started/setup/instance-management/update-appsmith).
- Pin the `image` tag to a specific release (for example `index.docker.io/appsmith/appsmith-ee:<version>`) instead of a floating tag, so restarts don't pull an unexpected version. Find release tags on [GitHub](https://github.com/appsmithorg/appsmith/releases).
- Always take a backup before updating. See [Backup instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance).

### "unauthorized" when pulling the image while upgrading from Community to Commercial

<Message
 messageContainerClassName='error'
messageContent='unauthorized: incorrect username or password'></Message>

#### Cause

This occurs when switching from the Community image (`appsmith-ce`) to the Commercial image (`appsmith-ee`) without following the documented upgrade procedure, for example using an image reference with an empty or invalid tag.

#### Solution

- Follow the documented upgrade-from-Community procedure, which covers signing up for a license and updating the image correctly: [Upgrade from Community Appsmith (Docker)](/getting-started/setup/upgrade-from-community-edition/docker). For Kubernetes, see [Upgrade from Community Appsmith (Kubernetes)](/getting-started/setup/upgrade-from-community-edition/kubernetes).
- Pin the `appsmith-ee` image to a specific release tag rather than leaving the tag empty or set to a floating value. Find release tags on [GitHub](https://github.com/appsmithorg/appsmith/releases).
- Note that you can run the `appsmith-ee` image under the free plan with the same features as the Community edition, which makes future upgrades or downgrades between plans seamless.

### Cannot import an app exported from a newer version into an older instance

#### Cause

Appsmith application exports are not backward compatible. An application JSON exported from a newer Appsmith version cannot be imported into an instance running an older version. This commonly affects air-gapped instances and migrations from Appsmith Cloud (which always runs the latest version) to an older self-hosted instance.

#### Solution

- Import into an instance running the same version or newer than the source, not older. For air-gapped or self-hosted targets, develop the app on an instance at the same version (or older) than the destination.
- To bring an older instance up to date before importing, see [Upgrade Appsmith versions](/getting-started/setup/instance-management/update-appsmith).
