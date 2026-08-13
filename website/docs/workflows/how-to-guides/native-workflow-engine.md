---
description: Starting in Appsmith v2.3, workflows can run on Appsmith's native engine. New runs use the native engine, while older Temporal runs finish where they started.
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

Until now, Appsmith used **Temporal** to run workflows. Starting in **v2.3**, Appsmith begins rolling out a **native workflow engine** to Enterprise customers. Appsmith enables this for your instance; you do not need to turn anything on.

The native engine runs inside Appsmith. You keep using the same workflow editor, triggers, run history, and approvals.

## What happens when it is enabled

- **New workflow runs** use the native engine.
- **Runs that already started** keep going on Temporal until they finish. This includes runs waiting for an approval.
- **Schedules** continue to fire as usual. You do not need to recreate them.
- **Run history** still shows all runs in one place.

You do not need to change workflow code or how you trigger workflows.

## Check remaining Temporal approval runs

If a workflow is waiting on an approval that started on Temporal, that run must finish (or be stopped) on Temporal.

Instance administrators can see how many of those runs are still open:

1. Open **Admin Settings**.
2. Under **Instance**, select **Admin central**.

Admin central lists remaining Temporal approval runs and the workflows they belong to. If there are none, no action is required.

For how to open the page, see [Admin central](/getting-started/setup/instance-configuration/admin-central).

:::note
Let open approval runs complete in the normal way when you can. Only terminate a run if you intend to stop that work.
:::

## What you should do

Most teams do not need to change anything after Appsmith enables the native engine.

If you use approval workflows, check **Admin central** so you know whether any Temporal approval runs are still in progress. A later Appsmith release will remove Temporal. Wait until Admin central shows no remaining Temporal approval runs before you take that upgrade.
