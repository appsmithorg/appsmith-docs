---
description: Collect diagnostic details about your Appsmith instance and download them as a ZIP to attach to a support ticket.
---

# Support

Use the **Support** page to collect diagnostic details about your Appsmith instance and download them as a ZIP file that you attach to a support ticket. You can review everything on the page before you download it and choose which sections to include. Nothing is sent to Appsmith automatically.

Only users with Instance Administrator privileges can access the Support page. It appears under **Instance** in **Admin Settings**.

## Why it helps

When you open a support ticket, the first questions are usually about your setup: which version you run, how Appsmith is deployed, which features are enabled, and whether core services are healthy. A support bundle answers those questions up front, so the support team can start on the actual problem sooner.

## Open the Support page

1. Sign in as an instance administrator.
2. Open **Admin Settings**.
3. Under **Instance**, select **Support**.

<ZoomImage
  src="/img/support-bundle-location.png"
  alt="Support in the Instance section of Admin Settings"
  caption=""
/>

Appsmith starts collecting details when the page opens. When it finishes, the page shows **All sections collected.**

<ZoomImage
  src="/img/support-bundle-page.png"
  alt="The Support page with all sections collected"
  caption=""
/>

## Review what is collected

Every section is shown on the page before anything is downloaded, so you can check exactly what the bundle contains and confirm that it includes nothing you consider sensitive. Select a section's name to expand it and see each value.

<ZoomImage
  src="/img/support-bundle-section-details.png"
  alt="An expanded section showing the values included in the bundle"
  caption=""
/>

The bundle has nine sections:

| Section | What it contains |
| --- | --- |
| Instance and runtime | Edition, version, commit SHA, instance ID, instance URL, uptime, Java version, OS, and architecture |
| Deployment and infrastructure | Deployment tool (for example, Kubernetes), cloud provider, CPU count, memory limit, and replicas |
| Feature flags and entitlements | The feature flags and license entitlements in effect, each shown as Yes, No, or Unknown |
| Applications and pages | Counts of workspaces, applications, pages, actions, JS objects, packages, and modules |
| Datasources and integrations | Counts of datasources by plugin type, and counts of environments |
| Workflows and automation | Counts of workflows and deployed workflows, and the workflow engine state |
| Identity, access and governance | Which login methods are enabled, whether SSO (OIDC, SAML) and SCIM are configured, and counts of users, groups, and custom roles |
| AI and MCP | Whether the AI Assistant and MCP server are enabled, the AI provider, and counts of AI datasources and MCP keys |
| Platform health | Status of MongoDB, Redis, RTS, and MCP, and license plan, status, and expiry |

The bundle contains counts, versions, status values, and configuration flags. It does not include application data, query results, or datasource contents. Where a credential is relevant to troubleshooting, such as the AI Assistant key or the MCP secret, the bundle records only whether it is present, not its value.

## Choose which sections to include

Each section has an **Include in ZIP** checkbox, and all sections are selected by default. Clear the checkbox for any section you do not want to share. Use **Select all** or **Clear all** to change every section at once.

Sections you leave out still appear on the page but are not added to the ZIP. The download button shows how many sections are included, for example **Download ZIP (8 sections)**.

<ZoomImage
  src="/img/support-bundle-exclude-section.png"
  alt="A section with Include in ZIP cleared"
  caption=""
/>

:::tip
Every section is optional, but we recommend including all of them. Each section helps the support team understand your setup without follow-up questions, and issues often turn out to involve an area that looked unrelated at first. A complete bundle usually leads to a faster resolution.
:::

## Refresh a section

Each section shows when it was collected, for example **Collected 2 minutes ago**. If you change something after the page loads, such as restarting a service or updating a setting, select **Refresh** on that section to collect it again before you download.

## Protect the ZIP with a password

At the bottom of the page, you can optionally enter a password to encrypt the ZIP.

- The password must be 12 to 128 characters. Use a random password.
- The password stays in your browser and is not sent anywhere.
- Send the password to support separately from the ZIP, not in the same message or ticket.
- Password-protected ZIPs need a tool such as 7-Zip, Keka, or WinZip to open. The built-in unzip tools on Windows and macOS may not open them.

## Download and attach to your ticket

1. Select **Download ZIP**. The button shows how many sections are included.
2. Attach the ZIP to your support ticket.
3. If you set a password, share it with support through a separate channel.

<ZoomImage
  src="/img/support-bundle-download.png"
  alt="The optional password field and the Download ZIP button"
  caption=""
/>

## FAQ

**Does Appsmith collect this information automatically?**

No. Nothing is sent to Appsmith from this page. The ZIP is shared only if you download it and attach it to a ticket yourself.

**I don't see the Support page in Admin Settings.**

The page is available only to instance administrators. Ask an instance administrator on your team to generate the bundle.

**Can I leave out a section and still get help?**

Yes. Every section is optional. The support team may ask follow-up questions about anything that is missing, so including all sections is the fastest path to a fix.

## Related

- [Admin Settings](/getting-started/setup/instance-configuration/admin-settings)
- [Admin central](/getting-started/setup/instance-configuration/admin-central)
- [Instance Settings](/getting-started/setup/instance-configuration/instance-settings)
