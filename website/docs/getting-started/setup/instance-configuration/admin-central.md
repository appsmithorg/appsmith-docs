---
description: Use Admin central to review Appsmith communications about upcoming release changes that need instance administrator attention.
---

# Admin central

Admin central is where instance administrators review Appsmith communications about upcoming release changes. Use it to see what needs attention on this instance before you upgrade.

The page is informational. It does not save configuration, and it does not change how the instance runs.

Only users with Instance Administrator privileges can open Admin central. The page appears under **Instance** on self-hosted instances. It is not shown on Appsmith Cloud or on deployments where multiple organizations are enabled.

## Open Admin central

1. Sign in as an instance administrator.
2. Open **Admin Settings**.
3. Under **Instance**, select **Admin central**.

<ZoomImage
  src="/img/admin-central-location.png"
  alt="Admin central in the Instance section of Admin Settings"
  caption=""
/>

The page title is **Admin central**. The subtitle is **Important information about this Appsmith instance.**

## What you see

<ZoomImage
  src="/img/admin-central-entries.png"
  alt="Admin central notices with summary details and affected items"
  caption=""
/>

Appsmith adds a notice when a change in an upcoming or current release requires administrator attention. Each notice can include:

- A title and short description of the change
- A severity indicator so you can tell informational updates from items that need action
- Summary details, such as counts or status for the current instance
- An expandable list of affected items when more context is available
- A **Learn more** link to the documentation for that change

If a notice says you must finish work on this instance before you upgrade, follow that notice’s documentation first. For workflow notices, see [Native workflow engine](/workflows/how-to-guides/native-workflow-engine).

## When no action is required

If there is nothing that needs attention, Admin central shows:

> There is no action required for this instance.

This is the expected state when no release communications apply to the instance. Notices appear when a change needs attention and disappear when that work is complete.

## If the page does not load

If Appsmith cannot load instance information, refresh the page and try again. You must stay signed in as an instance administrator.

## Related

- [Admin Settings](/getting-started/setup/instance-configuration/admin-settings)
- [Instance Settings](/getting-started/setup/instance-configuration/instance-settings)
- [Native workflow engine](/workflows/how-to-guides/native-workflow-engine)
- [Update Appsmith](/getting-started/setup/instance-management/update-appsmith)
