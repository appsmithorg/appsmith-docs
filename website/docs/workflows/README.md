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

Appsmith Workflows are essential for automating tasks and orchestrating processes within applications. They provide a practical solution for automating tasks, managing workflows, enabling human interactions, and integrating with external services or Appsmith apps.

## Workflow capabilities

Appsmith Workflows are versatile and designed to handle a wide range of scenarios:

### Automate business-critical processes

Using app-building capabilities of Appsmith in workflows, developers can automate critical tasks based on business rules and requirements. From ticket assignments in customer support workflows to complex data processing operations, Workflows streamline processes efficiently.

### Enable Human-in-the-Loop interactions

Appsmith Workflows allow for human interventions when necessary. Developers use the Appsmith app to access workflows and create interfaces for users to interact with and take actions based on decision points. This integration between workflows and the Appsmith app enhances the efficiency and effectiveness of workflows.

## Explore trigger types

Appsmith supports different trigger types to configure actions and processes within workflows:

- **Webhook**- Triggered by external events or HTTP requests, Webhook triggers enable real-time data processing and action execution based on incoming data. Use this trigger type to integrate Appsmith workflow with external system or app. Learn how to use the Webhook triggers in the [Getting started with workflows](/workflows/tutorials/create-workflow) tutorial.
  
- **Integrated Datasource for use in Appsmith Apps**- Connect workflows with Appsmith applications using prebuilt workflow queries. Use this trigger type to define decision points in workflows, build interface for decision-making and users to take action using Appsmith app, and process user actions when user verifies and takes action on the Appsmith app. Delve deeper into integrated datasource using Appsmith app in the [Trigger workflow from Appsmith App](/workflows/how-to-guides/trigger-workflow-from-appsmith-app) guide.

- **Scheduled Jobs (Cron Jobs)**- Scheduled to run at specific times or intervals, Scheduled Jobs automate tasks using Cron expressions. Stay tuned for updates on the availability and usage of Scheduled Jobs within Appsmith. (**Coming Soon**)

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
