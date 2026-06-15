# Monitoring and Audit Log Errors

This page shows how to resolve common monitoring, audit log, and observability issues on self-hosted Appsmith instances, including accessing and exporting audit logs, controlling audit log size, retrieving logs, health checks, and exposing metrics to external monitoring tools.

### Querying audit logs programmatically

#### Cause

There is no dedicated API endpoint or built-in function to query audit logs from within an app. Teams often want to build custom dashboards or per-component change views without using the built-in Audit logs screen.

#### Solution

- Audit logs are stored in the instance database (MongoDB), and you can query that collection directly to build your own usage views. Connect to the instance MongoDB using the `APPSMITH_DB_URL` value and query the audit log collection. See [Monitor App Usage](/build-apps/how-to-guides/usage-app) and [Export Audit Logs](/build-apps/how-to-guides/export-audit-logs).
- You can derive usage metrics (for example, monthly active users) by pulling raw events such as `page.viewed` or `user.logged_in` and aggregating them by user over a date window. See the event reference in [Audit Logs](/advanced-concepts/audit-logs).
- Note that some events are not recorded in audit logs. Only configuration and administrative events (create, update, delete, deploy, permission and settings changes) are logged; for events that aren't captured, use your SSO provider logs as a secondary source.

### Audit log collection growing too large

#### Cause

The audit log collection can grow very large over time (in some cases hundreds of GB and hundreds of millions of records), consuming more space than the apps themselves.

#### Solution

- Before deleting, export your old audit logs so you can reference them later. See [Export Audit Logs](/build-apps/how-to-guides/export-audit-logs). Clearing old records has no impact on the system.
- To make cleanup automatic, change the TTL (time-to-live) on the audit log collection so records expire after a set period:
  1. Connect to MongoDB: `docker exec -it appsmith mongo <APPSMITH_DB_URL>`
  2. Select the configured database: `use <database_name>`
  3. Set the new TTL expiry:
     ```js
     db.runCommand({"collMod":"auditLog","index":{"keyPattern":{"createdAt":1},"expireAfterSeconds":<time_in_secs>}})
     ```

### Granting audit log access to non-admin users

#### Cause

By default, only the Organization Administrator role can view audit logs. Workspace Administrators and Application Developers cannot. Teams often need to give audit or operations users read access without granting full admin rights.

#### Solution

- Create a custom role with **View** permission on **Audit logs**, then assign it to the desired user or group. The View permission allows viewing the instance audit logs without granting other admin capabilities. See [Roles](/advanced-concepts/granular-access-control/roles) and the [Permissions reference](/advanced-concepts/granular-access-control/reference/permissions).

### Load balancer health check returns 401

<Message
 messageContainerClassName='error'
messageContent='401 Unauthorized'></Message>

#### Cause

Appsmith always serves its unauthenticated health endpoint at `GET /api/v1/health`. A 401 on the health check usually means something in front of Appsmith, such as load balancer authentication, a WAF, or another security layer, is intercepting the request, not Appsmith itself.

#### Solution

- Configure your load balancer target group to probe the correct port and path: HTTP on port 80 or 8080, path `/api/v1/health`.
- Ensure the health-check path is not behind any authentication or custom listener rules that return 401.
- Confirm from inside the host/container that the endpoint returns 200, for example `curl -I http://localhost:8080/api/v1/health`.
- For monitoring endpoints, see the [API Reference](/getting-started/setup/instance-management/api-reference). Load balancer and cloud networking configuration is outside the scope of Appsmith product support.

### Container marked unhealthy / health check timeout

#### Cause

The internal Appsmith server health check uses a timeout that defaults to 60 seconds. Under heavy load or slow responses, the container may be marked unhealthy and restarted.

#### Solution

- Adjust the internal server timeout using the [`APPSMITH_SERVER_TIMEOUT`](/getting-started/setup/environment-variables#appsmith_server_timeout) environment variable, which defaults to `60` seconds.
- If the container is repeatedly marked unhealthy, collect the backend logs and check machine specifications (OS, CPU, memory), as resource exhaustion is a common cause. See [How to Get Container Logs](/getting-started/setup/instance-management/how-to-get-container-logs).

### Retrieving application and server logs

#### Cause

When debugging an instance issue, support needs backend/server logs, and you need to know where they live and how to collect them.

#### Solution

- Self-hosted logs are stored under `/appsmith-stacks/logs/`, with a sub-directory per service (`appsmithctl`, `backend`, `cron`, `editor`, `mongodb`, `redis`, `rts`). Backend logs are the most useful for server errors (`/appsmith-stacks/logs/backend/*-stdout.log` and `*-stderr.log`). See [How to Get Container Logs](/getting-started/setup/instance-management/how-to-get-container-logs).
- Always check your version first by appending `/info` to your instance URL in the browser, since many issues are resolved by upgrading.
