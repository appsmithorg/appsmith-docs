---
description: Learn how to create and configure a basic workflow in Appsmith, understand key concepts, and apply them to automate tasks such as sending emails.
title: Create Basic Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Create Basic workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

In Appsmith, workflows help automate specific processes. They respond to triggers like webhooks or user actions and can also interact with different APIs and services.

A workflow has:

- **Main JS function**: This is where you write the core logic within the `executeWorkflow` function.
- **Processes**: Define tasks for the workflow, such as making API calls, processing data, or sending notifications, inside the `executeWorkflow` function.
- **Triggers**: Define conditions or events that initiate the workflow, such as webhooks.

In this tutorial, you’ll create a workflow to send email to a user. This exercise will help you understand workflows.

## What you'll learn

By following this tutorial, you will gain a comprehensive understanding of:

1. What workflows are, how they automate tasks, and their structure.
2. How to create workflows in Appsmith and set up webhook triggers to integrate with external applications.
3. The role of queries in workflows, with an example of writing and executing a query to send emails.
4. Integrating workflows with external applications, using Postman for testing and verification.

## Prerequisites

Before starting, ensure you have:

- A self-hosted Appsmith instance with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) if needed.
- Familiarity with basic Appsmith operations. Check out the [Getting Started Tutorial](/getting-started/tutorials/start-building) if you're new to Appsmith.
- A REST client like Postman for testing workflows.

## Create workflow

In this section, you’ll create a workflow to send email to a user.

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/BzEnldkGHkIJ91SDxubA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div>
<br/><br/>

1. Open your Appsmith workspace. Click **Create New** and choose **Workflow**.
2. In the **Main** JS object code editor, rename your workflow from **Untitled Workflow 1** to *Send_Email*.
3.  The `executeWorkflow` function serves as the entry point for your workflow and must be present in the _Main_ JS object. If this function is not present, the workflow will not be invoked when triggered. Here’s the default structure:

    ```javascript
    export default {
        /**
        * Entry point for Workflow execution. All activities to be executed should be defined here.
        * @param data  This function takes in a JSON object as arguments (data) which can be passed when you trigger the workflow.
        * @returns boolean Shall return true or false.
        */
        async executeWorkflow(data) {
            // start writing your code here.

            return true;
        }
    }
    ```

## Add processing logic

To automate tasks within your workflow, you can add processing logic to your workflow. For example, to enable the workflow to send emails when triggered, create an API query and configure it as shown below:

1. Add a new **Blank API** query to your workflow.
2. Configure the query as shown below:
   - **Name**: Rename the query to *qs_send_email*.
   - **HTTP Method**: Set to `POST`.
   - **URL**: Enter the URL `https://hook.us1.make.com/tg6y1fgjds3ysp3x4snt3tfjgu7s747d`. This is a preconfigured external API that will send an email.
   - **Body**: In the **Body** tab, add the following JSON. Replace `add_your_email_address` with your email for testing.

        ```javascript
        {
            // replace add_your_email_address with your actual email address
            "email": "add_your_email_address"
        }
        ```
3. Click the **Run** button to send the email. Check your inbox for an email from `demo.smtp.send.email@gmail.com`.
4. Update the JSON body in your query to use a dynamic email address supplied as a parameter, allowing you to pass parameters to the workflow at runtime.

    ```javascript
    {
        "email": "{{this.params.email}}"
    }
    ```

   
5. Integrate the query in the workflow by updating the `executeWorkflow` function to call the query and pass the email parameter. The `data` parameter of the `executeWorkflow` function holds all the parameters sent to the workflow in JSON format. Use dot notation to access the parameters.

    ```javascript
    export default {
        async executeWorkflow(data) {
            // Pass the email parameter to the query using dot notation
            const response = await qs_send_email.run({ "email": data.email });
            // Log the response for debugging
            console.log(response);
        
            return true;
        }
    }
    ```

6. Click **Deploy** button to save and publish your workflow.

## Configure Webhook trigger

To trigger your workflow from external applications, you’ll set up a webhook trigger.

<br/>  
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/1LnNGcbCRDlB2AKQpxz3?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Configure webhook trigger">
    </iframe>
</div>
<br/><br/>

1. Click the gear icon (⚙️) in the bottom left corner to open the workflow settings.

2. Toggle the **Webhook trigger** setting to enable it.

3. Copy and save the **URL**. You’ll use the URL to trigger the workflow from external applications.

4. Click **Deploy** button to apply these settings.

Your workflow is now ready to be triggered via webhook.

## Test workflow with Postman

You can use any REST client to test your workflow, such as Postman, and ensure the workflow works as expected.

1. Launch the Postman application on your system.

2. To create a new HTTP request, click **New** and choose **HTTP Request**.

3. Set the Request Method and URL as shown below:
   - **Method**: Set to `POST`.
   - **URL**: Enter the webhook URL you copied earlier in [Configure webhook trigger](#configure-webhook-trigger) section.

4. In the **Body** tab, select **raw** format, and add the following JSON. Replace `add_your_email_address` with your email address:

    ```javascript
    {
        "email": "add_your_email_address"
    }
    ```

5. Click the **Send** button to trigger the workflow.

6. Verify the response generated by the workflow. You will see a similar response as below, indicating the workflow has started successfully. Check your inbox for an email from `demo.smtp.send.email@gmail.com`.

    ```javascript
    {
        "success": true,
        "message": "Workflow instance started running successfully",
        "data": {
            "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

Congratulations. You've successfully built your first workflow.

## Next steps

You have completed the tutorial on building workflows in Appsmith. Here are some additional resources to explore:

* [How-to Guides](/workflows/how-to-guides) - Learn more advanced workflow configurations and integrations.
* [Workflow Queries](/workflows/reference/workflow-queries) - Understand how to use queries within your Appsmith applications and connect workflows to Appsmith apps.
* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the variety of functions available for your workflows.