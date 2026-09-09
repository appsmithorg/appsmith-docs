# MCP Server (BETA)

:::caution Beta feature
MCP Server is in beta. Its behavior, available tools, and client configuration may change. If you find an issue or have a suggestion, [submit a support ticket](https://support.appsmith.com) and identify the feature as **MCP Server (BETA)**. Never include an MCP key in a support ticket.
:::

Appsmith's Model Context Protocol (MCP) server lets compatible AI clients connect to Appsmith through a structured API. An MCP client can use the Appsmith capabilities available to the user who created its key, including working with apps and their resources.

An MCP key authenticates the client **as you**. It does not grant the client additional Appsmith permissions. Any request made with your key is limited to the same organizations, workspaces, apps, and actions that your Appsmith account can access.This guide covers MCP setup for all self-hosted deployments and eligible Appsmith Cloud organizations.

## Before you begin- An Appsmith administrator must enable MCP Server under **Organizations** on BE Cloud or under **Instances** on self-hosted deployments.
- Each user must create their own MCP key. Do not share a key between users.
- Your AI client must support a remote MCP server and allow an `Authorization` header in its server configuration.

## Enable MCP ServerMCP Server is off by default. On BE Cloud, the setting is under **Organizations**. On all self-hosted deployments, it is under **Instances**.### Appsmith Cloud:::note Appsmith Cloud availability
MCP Server is available only for Business Edition (BE) Cloud accounts with a custom organization name. It is not available on legacy `app.appsmith.com` Cloud accounts that do not have a custom organization name.
:::


To enable MCP Server for an eligible Appsmith Cloud organization:

1. Open **Admin Settings**.2. Under **Organizations**, select **MCP Server (BETA)**.
3. Turn on **Enable MCP server**, and save the setting.

<ZoomImage
  src="/img/mcp-enable-business-cloud.png"
  alt="MCP Server beta setting under Organizations in BE Cloud"
  caption="Enable MCP Server for an eligible Appsmith Cloud organization"
/>### Self-hostedTo enable MCP Server for any self-hosted deployment:

1. Open **Admin Settings**.2. Under **Instances**, select **MCP Server (BETA)**.
3. Turn on **Enable MCP server**.
4. Click **Save & Restart** to apply the setting.

<ZoomImage
  src="/img/mcp-enable-self-hosted.png"
  alt="MCP Server beta setting under Instances on a self-hosted deployment"
  caption="Enable MCP Server for a self-hosted deployment"
/>

When MCP Server is disabled, Appsmith removes access to the `/mcp` endpoint, prevents users from creating or rotating keys, and rejects requests made with existing keys. Disabling the server does not revoke the keys. Revoke a key separately if you want to invalidate it permanently.

## Create an MCP key

After an administrator enables MCP Server, each user can create and manage keys from their own profile:

<ZoomImage
  src="/img/mcp-keys-page.png"
  alt="MCP keys page with How to connect and Create Key buttons"
  caption="Create and manage personal MCP keys from Profile settings"
/>

1. Open **Admin Settings**.
2. Under **Profile**, select **MCP keys**.
3. Click **Create Key**.
4. Enter a descriptive name, up to 50 characters, that identifies the client or purpose of the key.
5. Select how long the key should remain valid: 30, 60, 90, 180, or 365 days. The default is 30 days.
6. Click **Create**.

<ZoomImage
  src="/img/mcp-create-key.png"
  alt="Create Key window with fields for the MCP key name and validity in days"
  caption="Name the key and choose how long it remains valid"
/>

You can have up to 10 MCP keys that have not been revoked. Expired keys count toward this limit, so revoke an unused or expired key before creating another one.

## Copy the key and connect your client

Appsmith shows the key only once, immediately after you create or rotate it. Before closing the confirmation window, copy either the MCP token or the complete client configuration and store it securely.

<ZoomImage
  src="/img/mcp-token-created.png"
  alt="MCP token created window with one-time token, server URL, client configuration, and expiration date"
  caption="Copy the token or client configuration before closing this window"
/>

The generated configuration follows this structure:

```json
{
  "mcpServers": {
    "appsmith": {
      "url": "https://YOUR_APPSMITH_DOMAIN/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_MCP_KEY"
      }
    }
  }
}
```

Replace the placeholders with the MCP server URL and key displayed by Appsmith. The exact file or settings screen where you add this configuration depends on your AI client. You can return to **Profile > MCP keys** and click **How to connect** to copy the server URL and a configuration template, but Appsmith cannot display an existing key again.

:::warning Protect your key
An MCP key grants the client access as your Appsmith user. Do not commit it to source control, include it in logs, paste it into a support ticket, or share it with another person. Use a separate key for each client, choose the shortest practical validity period, and revoke a key immediately if it might have been exposed.
:::

## Manage MCP keys

On the **MCP keys** page, you can review a key's name, status, creation date, and expiration date. You can also search for keys and filter them by status.

- **Rotate a key** to replace its current secret. The old secret stops working immediately, and Appsmith displays the replacement only once. Update the client configuration with the new key.
- **Revoke a key** to permanently prevent clients from using it.
- **Expired keys** no longer authenticate. Create a new key or rotate the expired key, and update your client configuration.

Creating, rotating, and revoking MCP keys requires your normal signed-in Appsmith session. An MCP key itself cannot be used to manage keys.

If an administrator disables a user's Appsmith account, requests made with that user's MCP keys are rejected. Administrators should therefore apply the same least-privilege access practices to MCP users that they use elsewhere in Appsmith.

## Troubleshoot a connection

| Problem | What to check |
| --- | --- |
| **MCP Server (BETA)** is not visible in Admin Settings | On BE Cloud, look under **Organizations** and confirm that the account has a custom organization name. The feature is not available on legacy `app.appsmith.com` Cloud accounts without one. On self-hosted deployments, look under **Instances**. |
| **MCP keys** is not visible under Profile | Ask an administrator to confirm that MCP Server is enabled, then refresh Appsmith. |
| The client cannot find the server | Confirm that the URL uses your Appsmith domain and ends in `/mcp`. On a self-hosted deployment, confirm that the administrator clicked **Save & Restart** after enabling the server. |
| The client receives an authentication error | Confirm that the header is `Authorization: Bearer YOUR_MCP_KEY` and that the key has not expired, been rotated, or been revoked. Also confirm that MCP Server and your Appsmith user account are enabled. |
| The client connects but cannot perform an action | The client has the permissions of the key owner. Confirm that your Appsmith user has access to the relevant organization, workspace, app, and action. |
| The configuration is rejected by the client | Use **How to connect** for the current Appsmith configuration template, and consult the client's documentation for its required configuration location and format. |

Because MCP Server is in beta, please [open a ticket in the Appsmith Support Portal](https://support.appsmith.com) for connection problems, unexpected behavior, or feature suggestions. Include your Appsmith version, deployment type, AI client name and version, and steps to reproduce the issue. Redact keys and other secrets from screenshots, logs, and configuration files. For more information, see [Support at Appsmith](/product/support).
