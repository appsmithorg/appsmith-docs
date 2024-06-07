---
description: This page provides an overview of the workflows feature in Appsmith, detailing its key components and functionality.
title: Overview
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Overview </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows combines code-based and node-based approaches, giving developers an intuitive interface to connect with external services. This lets developers focus on their app's logic while handling APIs and authentication. Appsmith Workflows use JavaScript to simplify the management of complex tasks, making them perfect for efficient and advanced workflow automation.

## Workflow capabilities

Appsmith Workflows are versatile and designed to handle a wide range of scenarios:

### Automate business-critical processes

Appsmith Workflows enable you to automate key business processes by linking databases and external services. For instance, you can automatically sync new leads from your CRM to marketing tools or handle inventory management by setting up stock alerts and supplier orders. With JavaScript logic, complex tasks can be automated to minimize errors and maintain consistency in managing business operations.

### Enable Human-in-the-Loop interactions

Appsmith Workflows allow you to automate human-in-the-loop (HITL) flows by combining user-friendly interfaces with server-side automation. They integrate automated tasks with manual checkpoints, ensuring that essential human decisions are included as needed. Developers can design workflows that require data validation, approvals, or feedback before continuing, improving collaboration and reducing errors while maintaining oversight in critical processes.

## Explore trigger types

Appsmith provides different trigger types to configure actions and processes within workflows:

- **Webhook:** Triggered by external events or HTTP requests, webhooks enable real-time data processing and action execution based on incoming data. Use them to integrate Appsmith workflows with external systems. Learn how to use webhooks in the [Getting started with workflows](/workflows/tutorials/create-workflow) tutorial.

- **Integrated Datasource for Appsmith Apps:** [Trigger workflows sealmessly from your Appsmith apps](/workflows/how-to-guides/trigger-workflow-from-appsmith-app) within the same workspace by creating workflow queries.

- **Scheduled Jobs (Cron Jobs):** Run tasks at specific times or intervals using Cron expressions. Stay tuned for updates on Scheduled Jobs availability in Appsmith. (**Coming Soon**)

## Getting started with workflows

Begin exploring Appsmith Workflows with the comprehensive getting started tutorial. 

<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      </div> 
      <b><a href="/workflows/tutorials/create-workflow">Create Basic Workflow</a></b>
      <div className="containerDescription">
        Learn how to create your first workflow, configure webhook trigger to connect with external system, and integrate workflow natively with Appsmith app.
      </div>
   </div>
   <div className="columnGrid column-two" style={{margin: "10px"}}>
   </div>
</div>
