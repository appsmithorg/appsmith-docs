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

Appsmith Workflows blend the best of both code-based and node-based approaches. They simplify external service integration with an intuitive interface, letting developers focus on logic while handling APIs and authentication. By using JavaScript, they offer flexibility for complex processes without visual clutter, making them ideal for efficient and sophisticated workflow automation.

## Workflow capabilities

Appsmith Workflows are versatile and designed to handle a wide range of scenarios:

### Automate business-critical processes

Appsmith Workflows can automate business-critical processes by seamlessly connecting databases and external services. For example, they can streamline lead management by automatically syncing new leads from CRM to marketing tools. They also simplify inventory management by automating stock alerts and supplier orders. With flexible JavaScript logic, you can automate complex tasks efficiently, reduce errors, and enhance consistency in managing intricate business operations.

### Enable Human-in-the-Loop interactions

Appsmith Workflows empower you to automate human-in-the-loop (HITL) flows by combining intuitive interfaces and powerful automation. They allow seamless integration of automated tasks with manual checkpoints, ensuring that critical human decisions are incorporated when needed. Developers can easily design workflows where data validation, approvals, or feedback are required before proceeding, enabling efficient collaboration and reducing errors while maintaining oversight and control in crucial processes.

## Explore Trigger Types

Appsmith provides various trigger types to configure actions and processes within workflows:

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
