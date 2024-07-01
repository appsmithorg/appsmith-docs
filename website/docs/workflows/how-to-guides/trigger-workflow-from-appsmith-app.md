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


## Connect Workflow with Appsmith App

To connect workflows with Appsmith app, you need to create workflow query. Follow these steps to create workflow query and connect your workflow:

 <br/>  
 <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/UA07mpIDNfWd8hyKzF2U?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Workflow with Appsmith App">
    </iframe>
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


4. Click the **Run** button to trigger the workflow. You will see the below response, where a unique `workflowRunID` is available that indicates the run has successfully started.

    ```javascript
    {
        "workflowRunId": "B5XGV5QZ"
    }
    ```

Now, you can trigger the workflow run whenever an event happens. For example, bind the workflow query to a `onClick` event of a Button widget and pass appropriate parameters needed by the workflow for processing on button's click event.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

* [Debug Workflow](/workflows/how-to-guides/debug-workflow) - Learn to debug workflows as you build them.
* [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows) - Learn how to pass parameters to workflows from the Appsmith app or external systems.
* [Workflow Queries](/workflows/reference/workflow-queries) - Understand how to use queries within your workflows.