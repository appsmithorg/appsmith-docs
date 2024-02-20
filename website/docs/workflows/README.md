---
description: This page provides an overview of the workflows feature in Appsmith, detailing its key components and functionality.
---

# Overview 
Appsmith Workflows are specifically designed for Human-in-the-Loop (HITL) interactions, seamlessly integrating human decision-making into automated processes, ensuring control over critical decision points.


The following diagram shows an example of creating a Human-in-the-Loop workflow to enable human interaction:

<ZoomImage
  src="/img/appsmith-human-in-the-loop-workflow-overview.svg" 
  alt="Human-in-the-Loop workflow"
  caption="Human-in-the-Loop workflow"
/> 

## Key components

- **Workflows**: The framework that defines the sequence of steps and actions, and coordinate the execution of different tasks by performing data manipulation, process automation, and user intervention within a process.
- **Workflow Queries**: In the Appsmith application, workflow queries enable users to interact with workflows, allowing them to execute operations within the app and trigger workflow actions. 
- **Workflow Functions**: In workflows, workflow functions make the process dynamic and interactive by allowing human decision-making. 

## Types of Workflows

Appsmith supports following types of workflows that users can configure:

* **Webhook Workflows**: Triggered by external events or HTTP requests for real-time data processing and action execution based on incoming data.

## Getting started

1. Self-host Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions.
2. Learn the basics with a quick tutorial on [Creating Webhook Workflow](/workflows/tutorials/create-webhook-workflow).


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
