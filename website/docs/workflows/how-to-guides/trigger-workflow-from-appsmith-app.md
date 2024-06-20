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

## What you'll need

Before starting, make sure you have:
* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a basic workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Basic knowledge of Appsmith apps and API integration. If you're new, see [Tutorial - Basics](/getting-started/tutorials/start-building).

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


4. Click the **Run** button to trigger the workflow. You will see the below response, indicating the workflow ran successfully.

    ```javascript
    {
        "workflowRunId": "B5XGV5QZ"
    }
    ```

Now, you can trigger the workflow run whenever an event happens. For example, bind the workflow query to a `onClick` event of a Button widget and pass appropriate parameters needed by the workflow for processing on button's click event.

## See also

* [How-to Guides](/workflows/how-to-guides) - Learn more advanced workflow configurations and integrations.
* [Workflow Queries](/workflows/reference/workflow-queries) - Understand how to use queries within your workflows.
* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the different functions available for your workflows.