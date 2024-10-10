---
description: This page provides detailed information on workflow triggers available in Appsmith.
title: Workflow Triggers  
hide_title: true  
toc_min_heading_level: 2  
toc_max_heading_level: 3  
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Workflow Triggers</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Workflow triggers start workflow runs based on specific conditions or events. This page provides information about the workflow triggers available in Appsmith, including their configurations, parameters, and usage examples.

## Webhook trigger

A webhook trigger allows external services to start a workflow by sending an HTTP request to a specific URL. This trigger is useful for integrating with applications and services that can send HTTP requests when certain events occur. For example, you can set up a webhook trigger to automatically start a workflow whenever a user signs up on your website, allowing you to send a welcome email or update a database in real time.

### Enable webhook trigger

Toggle the switch to enable the webhook trigger. Once enabled, Appsmith generates a unique identifier URL for the workflow.

### URL

Copy the provided endpoint URL to configure the webhook in your external service. This unique URL includes an API key for authentication and is not shown again for security reasons, so be sure to save it for future reference. If you forget to note the URL, you can regenerate it and must update all applications or services to use the new URL. To configure the workflow, use the HTTP POST method along with the webhook URL. For more information, see [Create Basic Workflow](/workflows/tutorials/create-workflow) using the webhook trigger.

## Scheduled trigger

A scheduled trigger starts a workflow at specific times or regular intervals, making it useful for automating tasks that need to run on a fixed schedule. For example, you can set up a scheduled trigger to automatically send a daily report summarizing sales performance to the sales team. 

### Timezone

Select the appropriate timezone from the dropdown menu. The default value is the system's timezone, such as `UTC+05:30 - Asia/Kolkata`. Ensure that the selected timezone aligns with when the workflow runs.

### Set schedule

The workflow schedule uses a standard 5-field cron expression to define when the workflow runs. To schedule a workflow, configure the fields—**Minute**, **Hour**, **Day of Month**, **Month**, and **Day of Week**.

You can use the following syntax in each field to configure the schedule:

- **Asterisk (`*`)**: Allows you to include a wildcard that represents all possible values in a field. For example, when set for all fields, the expression (`* * * * *`) means the workflow runs every minute of every hour, on every day, in every month, and on every day of the week.

- **Comma (`,`)**: Allows you to set more than one value in a field. For example, when set to `0,30` in **Minute** and an asterisk for the others, the expression (`0,30 * * * *`) means the workflow runs at minute `0` and `30` of every hour.

- **Hyphen (`-`)**: Allows you to define a range of values in a field. For example, when set to `0` in **Minute**, `1-5` in **Hour**, and an asterisk for the others, the expression (`0 1-5 * * *`) means the workflow runs every hour from `1 AM` to `5 AM`.

- **Slash (`/`)**: Used to specify intervals for a field. For example, when set to `*/5` in **Minute** and an asterisk for the others, the expression (`*/5 * * * *`) means the workflow runs every 5 minutes, starting from minute `0` and running at 5, 10, 15, and so on.

#### Popular cron expressions

| Schedule  | Cron expression  | Minute | Hour | Day of Month | Month | Day of Week |
|-----------|------------------|--------|------|--------------|-------|-------------|
| Every minute | `* * * * *`      | `*`    | `*`  | `*`          | `*`   | `*`         |
| Every hour at minute 0  | `0 * * * *`      | `0`    | `*`  | `*`          | `*`   | `*`         |
| Every day at noon | `0 12 * * *`     | `0`    | `12` | `*`          | `*`   | `*`         |
| Every Sunday at midnight | `0 0 * * 0`      | `0`    | `0`  | `*`          | `*`   | `0`         |

For more help with generating cron expressions, you can use the [Appsmith Cron App](https://app.appsmith.com/app/cron/home-66fac6586931e9259851a137) or online tools like [Crontab Guru](https://crontab.guru/) and [CronMaker](http://www.cronmaker.com/).

### Save schedule 

After configuring the schedule, click the **Save Schedule** button to confirm your changes.

### Enable scheduled trigger

Once you have saved the schedule, toggle the **Schedule Trigger** switch to enable it. This ensures that your workflow runs at the specified times or intervals.

## See also

- [Debug workflow](/workflows/how-to-guides/debug-workflow) - Learn to debug workflows during development.
- [Workflow queries](/workflows/reference/workflow-queries) - Understand available queries within your workflows.