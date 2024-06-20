---
description: This page provides detailed steps to connect and trigger a workflow on Appsmith using HTTPie.
title: Trigger Workflow from External System
hide_title: true
---

# Trigger Workflow from External System

Connecting your Appsmith workflow to external systems allows you to trigger actions and automate processes from outside the Appsmith environment. This page shows how to connect Appsmith workflow with external system by using a REST client HTTPie.

## What you'll need

Before starting, make sure you have:
* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a basic workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Basic knowledge of Appsmith apps and API integration. If you're new, see [Tutorial - Basics](/getting-started/tutorials/start-building).
* - A REST client like HTTPie for testing workflows.

### Enable Webhook trigger

Follow these steps to configure webhook trigger: 

 <br/>  
 <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/VnWRWB1N8ez0WqQjVGsw?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Configure webhook trigger">
    </iframe>
    </div>
<br/><br/>

1.  Navigate to your workflow in the Appsmith interface.

2. Click the gear icon (⚙️) located in the bottom left corner to open the workflow settings.

3. In the workflow settings, toggle the **Webhook trigger** switch. This action enables your workflow to be triggered via a webhook URL, and generates a Webhook URL.

4. Once the webhook trigger is enabled, a unique URL will be generated for your workflow.

5. Copy this **Webhook URL**. You will need it to connect the workflow with external systems.

6. Click the **Deploy** button in the top right corner to publish your workflow with the new webhook settings.

## Connect to external system

Follow these steps to connect workflow to external system (HTTPie):

1. Visit [https://httpie.io/app](https://httpie.io/app) in your web browser.

2. In the HTTPie web application, click the **New Request** button to create a new request.

3. Configure the request as shown below:
   - Set the request method to **POST**.
   - In the request URL field, paste the webhook URL you copied from workflow settings in [Enable Webhook trigger](#enable-webhook-trigger) section.

4. Pass parameters if the workflow needs for processing by adding the parameters in the request body. For example, if the workflow needs a `orderid` parameter to initiate processing, pass the parameter in the JSON format in the request body. For more information about passing parameters, see [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows).

      ```javascript
      {
            "orderid": "ORD00011345"
      }

5. Click the **Send** button in the HTTPie web application to execute the request.

6. You should see a response in the HTTPie web application indicating that the workflow has been triggered successfully. The response may include a `workflowRunId` confirming the execution.

    ```json
    {
        "responseMeta": {
            "status": 200,
            "success": true
        },
        "data": {
            "workflowRunId": "XMXWTMOS"
        },
        "errorDisplay": ""
    }
    ```

You can now trigger the workflow execution by binding it to an event, such as whenever a refund request is raised, and pass appropriate parameters needed by the workflow for processing.

## See also

* [How-to Guides](/workflows/how-to-guides) - Learn more advanced workflow configurations and integrations.
* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the different functions available for your workflows.