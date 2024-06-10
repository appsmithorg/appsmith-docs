---
description: This page provides detailed steps to execute and trigger Appsmith using Postman.
title:  Lesson 4 - Connect Workflow with External System
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 4 - Connect Workflow with External System</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

To simulate the workflow connection from external app, you will use Postman and execute the workflow. Follow these steps to trigger the workflow execution:

1. Launch the Postman application on your system.
2. Click on the **New** button, and choose **HTTP** request in Postman to create a new request.
3. Choose the HTTP method as **POST**.
4. Enter the workflow URL you copied in the [Configure Webhook trigger](#configure-webhook-trigger) section.
5. On the _Body_ tab, select **raw**, and add the below code in the request body. Here you are setting the parameter value for `send_email_to`. Remember to replace `<add_your_email_address>` with your email.
    ```javascript
    {
        "email": "<add_your_email_address>"
    }

    ```
6. Click the **Send** button to execute the request.
7. The below response is generated, and you will receive an email from `demo.smtp.send.email@gmail.com`.
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

You've successfully executed your first workflow externally, and can integrate the workflow in your external or Appsmith app.

🚩 Congratulations. You have built your first workflow, configured it as a webhook and integrated it with an external app (Postman).

In this tutorial, you explored how to create a workflow, configure a webhook trigger, pass parameters to the workflow, and execute workflow from an external app (Postman). You can use these skills to build your own workflow and integrate it with your apps.

Happy Workflow Building!

## See also

* [How-to Guides](/workflows/how-to-guides/create-approval-workflow)
* [Workflow Queries](/workflows/reference/workflow-queries)
* [Workflow Functions](/workflows/reference/workflow-functions)