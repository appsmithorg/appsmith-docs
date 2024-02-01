---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Lesson 1 - Set up Webhook Workflow

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your applications. This tutorial takes you through the process of setting up a Webhook workflow, integrating it with your Appsmith app, and triggering the workflow execution from your Appsmith app.

By the end of this lesson, you will learn how to:

* Create a workflow
* Configure the workflow as a webhook
* Integrate the workflow in your app
* Execute the workflow from the app

## Prerequisites

* Ensure you have a self-hosted instance of Appsmith. See the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Ensure you are on a paid plan. For more information, see [Pricing](https://www.appsmith.com/pricing).
* Ensure you are aware of basic knowledge of creating datasource, queries and displaying data on Appsmith. For more information, see [Tutorial - Basics](/getting-started/tutorials/start-building).

## Create workflow

Follow these steps to create a new workflow within your workspace. The newly created workflow will be accessible across all apps in the same workspace:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/TwBt2bvGNABi1Q0yZLS8?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and from the available options, choose **New Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor.
2. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1**. For example, _Approve Refund Requests and Notify Customers_.
3. In the JS code editor, delete the boilerplate code and add the below code snippet:

```javascript
export default {
    async executeWorkflow(data) {
        console.log("Workflow triggered");
    }
}
```
4. Click the gear icon ⚙️ in the bottom left corner to configure the workflow settings.
5. Toggle the **Webhook trigger** property to configure the workflow as a webhook.
6. Copy and save the **URL** and the **Bearer Token**.
7. Click **Publish** in the top right corner to publish your workflow.

You've created your first workflow, and it's available in your workspace for integration with your apps.

## Integrate workflow with app

Follow the steps below to integrate the workflow with your app:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/BEOHUAssHhLWnNCIQNVB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. In your application, under **Editor** > **Queries**, click **New query/API**.
2. In the _Create new query/API_, click **Workflows Query**.
3. Give a meaningful and unique name to the query. For example, _TriggerApprovals_.
4. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select **Approve Refund Requests and Notify Customers**
    * **Request type** - Select **Trigger workflow**
    * **Trigger Data** - Add an empty JSON `{}`
5. Click the **Run** button to test the workflow. You will see the below response:
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running succesfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```
You've integrated your workflow with the app.


## Next steps

* [Lesson 2 - Create Single Approval Workflow](/workflows/tutorials/trigger-workflow-from-app)