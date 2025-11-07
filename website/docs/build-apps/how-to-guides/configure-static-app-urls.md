---
description: Learn how to enable static app URLs in Appsmith, manage application and page slugs, and keep routes predictable across environments.
---

# Configure Static App URLs

Static app URLs give every application and page a stable, readable route. Use this guide to enable the feature, customize slugs, and understand how static URLs behave across edits, deployments, branches, and imports.

## Prerequisites

- You need edit access to the application.
- Open the app in Appsmith and go to **Settings → General** to find the Static URL toggle.

## Enable Static URLs for an app

1. Open the application settings and navigate to **General → Static URL**.
2. Turn on **Enable Static URLs**. Appsmith generates an application slug and page slugs based on existing names.
3. Review the preview URL and the list of generated slugs.
4. Click **Apply** to confirm. Static URLs become active immediately in both edit and view modes.

:::info
When static URLs are enabled, the new routes work right away. Anyone with the old UUID-based URLs can continue using them as aliases.
:::

## Manage the application URL slug

- The application slug is derived from the app name when the feature is enabled. You can edit it in the **Static URL** section.
- Use the inline availability check to confirm that the slug is unique across the entire Appsmith instance.
- If a slug is already taken, enter a different value. Appsmith rejects duplicates to prevent routing conflicts.
- Application slug changes update the app URL immediately. In Git-connected apps, each branch reflects the slug that is committed on that branch.

## Manage page URL slugs

- Each page receives a slug when static URLs are enabled. Existing pages get a slug based on the page name; new pages inherit the same pattern.
- Leaving a page slug empty keeps it synced with the page name, so slug values update automatically when you rename the page.
- Setting a custom slug locks it in place. Later page renames do not change that slug.
- Page slugs must be unique inside the application. If a slug is already in use, pick a different value.
- Deploy the application for page slug changes to appear in view mode.

:::tip
Keep slugs short, descriptive, and lowercase. Hyphenate multiword names (for example, `sales-dashboard`).
:::

## URL behavior after enabling static URLs

- Appsmith updates view mode URLs (`/app/<app-slug>/<page-slug>`) as soon as you enable static URLs.
- Legacy UUID-based URLs remain valid, so existing bookmarks and embeds continue to work.
- Static URLs remain active until you disable the feature.

## Import and export scenarios

- Exporting or importing an application (via JSON or Git) preserves the static URL settings. If the application slugs are available on the target instance, the same routes continue to work.
- Importing into the same Appsmith instance automatically appends a short suffix when needed to keep the application slug unique.
- After import, you can rename slugs manually if you prefer a different URL.

## Disable or re-enable static URLs

1. Go to **Settings → General → Static URL** and turn the toggle off.
2. Confirm the change to remove the static routes. The app remains accessible through the original UUID-based URLs.
3. When you turn the toggle back on, Appsmith regenerates slugs from the current application and page names; earlier custom slug values are not restored automatically.

## Troubleshooting and best practices

- If a slug shows as unavailable, choose another value that does not conflict with existing applications or pages.
- Slugs can contain lowercase letters, numbers, and hyphens. Avoid special characters and spaces.
- Deploy changes after editing page slugs so end users in view mode see the updated URLs.
- Leave page slugs empty if you want them to follow page name changes automatically.

## Next steps

- Learn how to [navigate between pages](./navigate-between-pages.md).
- Explore best practices for [reusing application entities](./import-export-app-entities.md).

