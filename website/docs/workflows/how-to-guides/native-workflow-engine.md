---
description: Starting in Appsmith v2.3, workflows can run on Appsmith's native engine. New runs use the native engine. Runs that already started on Temporal finish there.
title: Native workflow engine
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Native workflow engine</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Before v2.3, Appsmith used **Temporal** to run workflows. Starting in **v2.3**, Appsmith is rolling out a **native workflow engine** to Enterprise customers. Appsmith enables the native engine on your instance. You do not need to turn anything on.

The native engine runs as part of Appsmith. You continue to use the same workflow editor, triggers, run history, and approvals.

## What happens when the native engine is enabled

- **New workflow runs** use the native engine.
- **Runs that already started**, including those waiting for approval, continue on Temporal until they finish.
- **Schedules** continue to trigger as usual. You do not need to recreate them.
- **Run history** still shows all runs in one place.

You do not need to change your workflow code or the way you trigger workflows.

## Check remaining Temporal approval runs

If a workflow run that started on Temporal is waiting for approval, that run must finish or be stopped on Temporal.

To see how many of those runs are still open:

1. Open **Admin Settings**.
2. Under **Instance**, select **Admin central**.

Admin central lists remaining Temporal approval runs and the workflows they belong to. If there are none, no action is required.

For more about the page, see [Admin central](/getting-started/setup/instance-configuration/admin-central).

:::note
Whenever possible, let open approval runs complete normally. Terminate a run only if you intend to stop that work.
:::

## What you should do

Most teams do not need to change anything after Appsmith enables the native engine.

If you use approval workflows, a later Appsmith release will remove Temporal. Wait until Admin central shows no remaining Temporal approval runs before you upgrade to that release.
