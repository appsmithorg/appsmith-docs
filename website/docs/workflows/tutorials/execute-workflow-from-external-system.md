---
description: This page provides detailed steps to connect and trigger a workflow on Appsmith using HTTPie.
title: Lesson 4 - Connect Workflow with External System
hide_title: true
---

# Lesson 4: Connect Workflow with External System

In this lesson, you will learn how to connect and trigger your Appsmith workflow using an external tool, like HTTPie. 

## What you'll learn

By the end of this lesson, you will be able to:
* Set up a new request in HTTPie.
* Use the webhook URL to trigger the workflow.
* Pass parameters to the workflow from HTTPie.
* Verify the workflow execution through HTTPie.

## What you'll need

Before you start, ensure you have:
* Completed [Lesson 3 - Configure Webhook Trigger](/workflows/tutorials/configure-webhook-trigger).
* Access to the [HTTPie web application](https://httpie.io/app) or any REST client for testing.

## Connect to external system

Connecting your Appsmith workflow to external systems, such as HTTPie, allows you to trigger actions and automate processes from outside the Appsmith environment. This is useful for integrating with other services or testing workflows in different scenarios.

### Set Up new Request in HTTPie

1. **Open HTTPie Web Application**:
   - Visit [https://httpie.io/app](https://httpie.io/app) in your web browser.

2. **Create a New HTTP Request**:
   - In the HTTPie web application, click the **New Request** button to create a new request.

3. **Configure Request Details**:
   - Set the request method to **POST**.
   - In the request URL field, paste the webhook URL you copied from workflow configuration in Lesson 3.

### Pass Parameters to Workflow

1. **Add Parameters to the Request**:
   - In the request body or parameters section of the HTTPie web application, add the necessary parameters for your workflow. For example, you can include the `"email"` parameter with a valid email address.

### Send Request and Trigger Workflow

1. **Send the Request**:
   - Click the **Send** button in the HTTPie web application to execute the request.

2. **View Response**:
   - You should see a response in the HTTPie web application indicating that the workflow has been triggered successfully. The response may include a `workflowRunId` confirming the execution.

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

3. **Verify Email Receipt**:
   - Check your email inbox to confirm that the welcome email has been received. This step verifies that the workflow executed as expected.

🚩 Congratulations. You've successfully connected and triggered your Appsmith workflow using an external system, HTTPie. This capability enables you to integrate workflows with different external services, enabling automated processing across platforms.

## Next steps

You have completed the tutorial series on building and connecting workflows in Appsmith. Here are some additional resources to explore:

* [How-to Guides](/workflows/how-to-guides/create-approval-workflow) - Learn more advanced workflow configurations and integrations.
* [Workflow Queries](/workflows/reference/workflow-queries) - Understand how to use queries within your workflows.
* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the different functions available for your workflows.
