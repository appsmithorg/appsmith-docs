---
description: This page provides detailed steps to set up a workflow on Appsmith.
title:  Create Basic Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1> Create Basic Workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your applications. This tutorial guides you through the process of setting up a basic workflow, configuring it as a webhook trigger, integrating and triggering the workflow execution from your Appsmith app.  

To learn workflows in Appsmith, you'll build workflow that sends a welcome notification email when new users join your organization. By the end of this tutorial, you will know how to:

* Create a workflow and configure it as a webhook
* Trigger the workflow from an external app (Postman)

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
*  If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).
* A REST client. For example, Postman.

## Create workflow

Follow these steps to build a notification workflow:

To send notifications to the users you will create a workflow, and configure it as a webhook. Follow these steps to create a webhook workflow within your workspace. The newly created workflow can be accessed in all apps in the same workspace:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/BzEnldkGHkIJ91SDxubA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and choose **Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1** to _Send\_Email\_Workflow_.
2. In the **Main** JS object code editor, you will see the `executeWorkflow` function (as shown below). This function executes whenever a workflow run is triggered. It serves as the main function for writing your logic. You'll update the `executeWorkflow()` function and add code in the [Write code in workflow to trigger email](#write-code-in-workflow-to-trigger-email) section.

    ```javascript
    export default {
        /**
        * Entry point for Workflow execution. All activities to be executed should be defined here.
        * @param data  This function takes in a json object as arguments (data) which can be passed when you trigger the workflow.
        * @returns boolean Shall return true or false.
        */
        async executeWorkflow(data) {
            // start writing your code here.

            return true;
        }
    }
    ```

You've created your first workflow.

## Configure SMTP datasource 

To send notifications from the workflow, you will need to set up an SMTP datasource and connect it with an email service provider. Follow these steps to set up an SMTP datasource:

1. Click the **Data** tab. Click the **+** icon next to _Datasources in your workspace_ to add a new [SMTP](/connect-data/reference/using-smtp) datasource.

2. Give it a meaningful and unique name. For example, _Send\_Email\_SMTP_

3. Enter the following details in the SMTP connection parameter fields:
    * **Host Address**: Add `smtp-relay.brevo.com` in the SMTP host address field.
    * **Port**: Add `587` in the SMTP port field.
    * **Username**: Add `demo.smtp.send.email@gmail.com` in the Username field.
    * **Password**: Add the below key in the SMTP password field.
        ```bash
        xsmtpsib-b80d2e2a0c90517b7fc8f831270473d56621b3fa7b574f340f2f1687dbd904c4-zkJC7SarXVE3YPhg
        ```

4. Test and save the datasource configuration.

## Write query to send email

Follow these steps to write a query for sending email:

1. Add a query to send a welcome email to the user and configure it as shown below:
    * Rename the query to _Send\_Welcome\_Email_
    * **Commands** - Select `Send email`.
    * **From Email** - Add `demo.smtp.send.email@gmail.com`.
    * **To Email** - Add your email address in this field.
    * **Subject** - Add `Welcome to the Team!`.
    * **Body** - Add the below text:
        ```text
        Dear Employee,
        
        Welcome to the team!

        We're thrilled to have you on board and look forward to working together. 
        Feel free to reach out if you have any questions or need help. 

        Let's achieve great heights together!

        Best regards,
        Company
        ```
2. Click the **Run** button to send an email. Check your inbox, you must have received an email from `demo.smtp.send.email@gmail.com`. 
3. Update the _Send\_Welcome\_Email_ query and remove your email from the **To** field, and add `{{this.params.send_email_to}}` to it. Adding `{{this.params.send_email_to}}` replaces the parameter `send_email_to` with the actual value at run time.
4. Go to the _Main_ JS object and update the `executeworkflow()` function to read the email sent as a parameter.

     ```javascript
    export default {
        async executeWorkflow(data) {
            //pass email `send_email_to` the query to send email
           const response = await Send_Welcome_Email.run({"send_email_to": data.email});
            // log the response
            console.log(response);
        
            return true;
        }
    }
    ```
5. Click the **Publish** button to publish your latest changes.

You've successfully integrated the email query in workflow. 

## Configure Webhook trigger

Follow these steps to configure a webhook trigger for the workflow:

 <br/>  
 <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/1LnNGcbCRDlB2AKQpxz3?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Configure webhook trigger">
    </iframe>
    </div>
<br/><br/>
 
1. Click the gear icon ⚙️ in the bottom left corner to configure the workflow settings.
2. Toggle the **Webhook trigger** property to configure the workflow as a webhook.
3. Copy and save the **URL** and the **Bearer Token**. If you wish to connect your workflow with an external app then you will need the **URL** and the **Bearer Token**. You'll see this in action in the [Send email using Postman](#send-email-using-postman) section.
4. Click the **Publish** button in the top right corner to publish your workflow.

You've configured the webhook trigger for the workflow, and it can be integrated and triggered from external apps.

## Send email using Postman

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

In this tutorial, you explored how to create a workflow, pass parameters to the workflow, configure a webhook trigger for it, and execute workflow from an external app (Postman). You can use these skills to build your own workflow and integrate it with your apps.

Happy Workflow Building!

## See also

* [How-to Guides](/workflows/how-to-guides/create-approval-workflow)
* [Workflow Queries](/workflows/reference/workflow-queries)
* [Workflow Functions](/workflows/reference/workflow-functions)
