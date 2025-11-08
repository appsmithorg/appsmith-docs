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

- When static URLs are enabled for the first time, each page receives a slug and are automatically set in view mode for all existing pages.
- After the initial setup, any changes to page slugs require deployment to reflect in view mode.
- When a new page is created after static URLs are enabled, the page slug is empty by default and automatically syncs with the slug derived from the page name. Renaming the page updates the slug automatically.
- Setting a custom slug locks it in place. Later page renames do not change that slug.
- Page slugs must be unique inside the application. If a slug is already in use, pick a different value.

:::tip
Keep slugs short, descriptive, and lowercase. Hyphenate multiword names (for example, `sales-dashboard`).
:::

## URL behavior after enabling static URLs

- Appsmith updates view mode URLs (`/app/<app-slug>/<page-slug>`) as soon as you enable static URLs.
- Legacy UUID-based URLs remain valid, so existing bookmarks and embeds continue to work.
- Static URLs remain active until you disable the feature.

## Branching considerations

- When you enable static URLs in edit mode for a branch, the changes apply instantly to both edit and view modes of that branch.
- After the initial setup, any subsequent changes to page slugs in edit mode require deployment to reflect in view mode.
- Enabling static URLs on one branch does not automatically apply to other branches. You must enable static URLs separately for each branch, that also includes the main branch.
- Different branches of an application can have different unique app slug URLs. However, it's a best practice to configure the same app slug across all branches to maintain consistency.

## Cross-Instance deployment and Version control

- Exporting, importing, or syncing an application (via JSON or Git sync) preserves the static URL settings. If the application slugs are available on the target instance, the same routes continue to work.
- Importing into the same Appsmith instance automatically appends a short suffix when needed to keep the application slug unique.
- After import, you can rename slugs manually if you prefer a different URL.

:::info
Since static URLs remain constant, you can synchronize your apps across different instances without worrying about broken links. The same static URL structure works consistently across environments.
:::

## Navigate between apps

With static URLs enabled, you can navigate between different apps using the [navigateTo](/reference/appsmith-framework/widget-actions/navigate-to) action. Static URLs provide predictable routes that remain consistent across instances, making cross-app navigation reliable.

To navigate to another app:

1. Use a widget (such as a Button or Icon button) and set its **onClick** property to navigate to another app.
2. Select the **Navigate to** action and choose **URL** as the destination type.
3. Enter the static URL in the following format:

   ```jsx
   {{appsmith.URL.host}}/app/<app-slug>/<page-slug>
   ```

   Replace `<app-slug>` and `<page-slug>` with the actual slugs of the target application and page.

   Example:
   ```jsx
   {{appsmith.URL.host}}/app/sales-dashboard/reports
   ```

## Embed apps with static URLs

You can embed apps that use static URLs in the same way. Static URLs make embedding more reliable by providing consistent routes that don't change when apps are exported and imported or version controlled.

To embed an app with static URLs:

1. Use the static URL format with the `embed=true` parameter:

   ```jsx
   <instance-url>/app/<app-slug>/<page-slug>?embed=true
   ```

   Example:
   ```jsx
   https://app.appsmith.com/app/sales-dashboard/reports?embed=true
   ```

2. For different environments (development, staging, production), you can configure the instance URL dynamically while keeping the app and page slugs constant. This means you only need to update the instance URL when deploying to different environments, and the app path remains the same across all environments.

## Disable static URLs

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

