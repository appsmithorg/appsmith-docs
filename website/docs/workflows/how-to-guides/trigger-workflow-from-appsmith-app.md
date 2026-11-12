---
description: This page provides detailed steps to integrate and trigger a workflow from an Appsmith app.
title: Trigger Workflow with Appsmith App
hide_title: true
---
 <!-- vale off -->

<div className="tag-wrapper">
 <h1>Trigger Workflow with Appsmith App</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Connecting your Appsmith workflow to an Appsmith app, allows you to trigger actions and automate processes from inside the Appsmith environment. This page shows how to connect Appsmith workflow with Appsmith app.

## Prerequisites

Before starting, make sure you have:
- A self-hosted Appsmith instance with a [business subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions if you need to set up your instance. You can also get a trial license by signing up on [customer.appsmith.com](https://customer.appsmith.com/).
- Basic familiarity with Appsmith operations. If you're new to Appsmith, follow the [Getting Started Tutorial](/getting-started/tutorials/start-building) to learn the basics.
* Basic knowledge of creating a basic workflow in Appsmith. If you're new to Workflows, follow the [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow) to learn the workflow basics.
* PostgreSQL must be configured and accessible. Appsmith workflows require PostgreSQL version `13` to `16`. If you're using ECS or Kubernetes, configure an external PostgreSQL database (e.g., AWS RDS). For setup instructions, refer to [Configure External PostgreSQL](/getting-started/setup/instance-configuration/external-postgresql-rds). 


## Connect Workflow with Appsmith App

To connect workflows with Appsmith app, you need to create workflow query. Follow these steps to create workflow query and connect your workflow:

 <br/>  
<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/UA07mpIDNfWd8hyKzF2U?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>
<br/><br/>

1. In your Appsmith app, create a _New Workflow Query_ by navigating to the _Queries_ tab and click **+ New query / API**.
2. Choose **Workflow Queries** to create a new workflow query.
3. Configure the Workflow Query as shown below:
   * **Workflow Name**: Select your previously created workflow. Give a meaningful name to it.
   * **Request Type**: Choose `Trigger workflow` from the dropdown menu.
   * **Trigger Data**: Use this field to pass parameters to your workflow. For example, if the workflow needs a `orderid` parameter to initiate processing, pass the parameter in the JSON format. For more information about passing parameters, see [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows).

      ```javascript
      {
            "orderid": "ORD00011345"
      }
      ```

4. Click the **Run** button to trigger the workflow. You will see the below response, where a unique `workflowRunID` is available that indicates the run has successfully started.

    ```javascript
    {
        "workflowRunId": "B5XGV5QZ"
    }
    ```

Now, you can trigger the workflow run whenever an event happens. For example, bind the workflow query to a `onClick` event of a Button widget and pass appropriate parameters needed by the workflow for processing on button's click event.

## Permissions to trigger a workflow

A workflow query always triggers the published version of the workflow. Who can run it depends on where the workflow is:

- **Workflow in the app's workspace**: any user who can run the workflow query in the app can trigger the workflow. They don't need a separate permission on the workflow.
- **Workflow in another workspace**: the query triggers the workflow only for users who have **Execute** permission on that workflow. Other users get a permissions error.

To keep a workflow query working for all app users, keep the workflow in the same workspace as the app. For more information about roles and permissions, see [Granular Access Control](/advanced-concepts/granular-access-control).

## Troubleshooting

#### Workflow query fails with a permissions error

The workflow query fails with an error that says the workflow doesn't exist or "you don't have required permissions" when the workflow is in a different workspace from the app and the user running the query doesn't have **Execute** permission on the workflow. To fix it, do one of the following:

- Move the workflow into the app's workspace.
- Grant the app's users **Execute** permission on the workflow.

If you face other issues, contact the support team using the chat widget at the bottom right of this page.

## See also

* [Debug Workflow](/workflows/how-to-guides/debug-workflow) - Learn to debug workflows as you build them.
* [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows) - Learn how to pass parameters to workflows from the Appsmith app or external systems.
* [Workflow Queries](/workflows/reference/workflow-queries) - Understand how to use queries within your workflows.
* [Workflow Triggers](/workflows/reference/workflow-triggers) - Explore the available triggers to automate the execution of your workflows.