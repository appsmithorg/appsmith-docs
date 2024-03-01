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

Appsmith Workflows offer developers the capability to develop automations for their applications, as well as the ability to integrate human-in-the-loop (HITL) interactions. Developers can use Workflows to specify decision points within a process, enabling users to review and make informed decisions by taking appropriate actions.

## Key interactions

Appsmith workflows combine the strengths of both code-based and node-based integration approaches. They offer seamless integration with external services via webhooks and provide out-of-the-box integration within Appsmith apps. Through a user-friendly interface, users can build human-in-the-loop interactions and leverage Appsmith apps for user interaction. Moreover, developers can write complex logic using JavaScript, enhancing the versatility of workflow.

The diagram below depicts an example of establishing a Human-in-the-Loop workflow for managing a request initiated by an application user. This setup allows for human intervention to review the request and execute necessary actions:

<ZoomImage
  src="/img/appsmith-workflow-overview.png" 
  alt="Human-in-the-Loop workflow"
  caption="Human-in-the-Loop workflow"
/> 

* **Webhook**: Configure the workflow to use a Webhook trigger, allowing you to trigger the workflow execution from an external app. 
* **Integrated with Appsmith Apps**: Appsmith provides an out-of-the-box integration between workflows and applications. Use configurable workflow queries to interact with workflows, allowing you to execute operations within the app and trigger workflow actions.
* **Human-in-the-Loop interactions**: Build human-in-the-loop interactions using workflows, and Appsmith app.
   * In workflows, use the built-in framework functions known as workflow functions to define decision points and incorporate human decision-making. 
   * Write complex logic in workflow using JavaScript to add capabilities for processing.
   * Build interactions using workflow queries for human decision-making in your Appsmith apps.

## Types of triggers

Appsmith supports following types of triggers in workflows that you can use to configure:

* **Webhook Workflows**: Triggered by external events or HTTP requests for real-time data processing and action execution based on incoming data.
* **Integrated Datasource for use in Appsmith Apps**: Seamlessly connect workflows with Appsmith applications using prebuilt integrations. This allows you to execute operations within the app and manage workflows directly from the Appsmith app.
* **Scheduled Jobs (Cron Jobs)**: Scheduled to run at specific times or intervals for automated execution of tasks using Cron expressions. (Coming soon).

## Getting started

1. Self-host Appsmith. For detailed instructions on installing Appsmith, see the [Appsmith installation guides](/getting-started/setup/installation-guides).
2. Learn the basics with a quick tutorial on [Creating Basic Workflow](/workflows/tutorials/create-workflow).


<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      </div> 
      <b><a href="/workflows/how-to-guides/create-approval-workflow">How-to Guides</a></b>
      <div className="containerDescription">
         Guide on how to create approval workflow.
      </div>
   </div>

   <div className="containerColumnSampleApp columnGrid column-two">
   <div className="containerCol">
      </div>
      <b><a href="/workflows/reference/workflow-queries">Reference</a></b>
      <div className="containerDescription"> Technical information about workflow queries and functions.</div>
   </div>
</div>
<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      </div> 
      <b><a href="/workflows/concepts/workflows">Concepts</a></b>
      <div className="containerDescription"> Explanation of Workflows.</div>
   </div>
   <div className="columnGrid column-two" style={{margin: "10px"}}>
   </div>
</div>
