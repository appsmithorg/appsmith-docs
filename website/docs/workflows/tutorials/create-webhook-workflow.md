---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
title:  Create Webhook Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1> Create Webhook Workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your applications. This tutorial guides you through the process of setting up a Webhook workflow, integrating it with your Appsmith app, and triggering the workflow execution from your Appsmith app.  

To learn workflows in Appsmith, you'll build a notification workflow that sends a notification to users. By the end of this tutorial, you will know how to:

* Create a workflow and configure it as a webhook
* Execute the workflow from your Appsmith app

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
*  If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).
* A Postman account. If you don't have one, [Create a Postman Account](https://identity.getpostman.com/signup).

## Create workflow

When you have new users joining your organization, and you want to send them a welcome notification email, you can use workflows to do that. Follow these steps to build a notification workflow:

To send notifications to the users you will create a workflow, and configure it as a webhook. Follow these steps to create a webhook workflow within your workspace. The newly created workflow can be accessed in all apps in the same workspace:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/BzEnldkGHkIJ91SDxubA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create webhook workflow">
  </iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and choose **Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1** to _Send\_Email\_Workflow_.
2. In the **Main** JS object code editor, you will see the `executeWorkflow` function (as shown below). This function executes whenever a workflow run is triggered. It serves as the main function for writing your logic. You'll update the `executeWorkflow()` function, and add code in the [Write code in workflow to trigger email](#write-code-in-workflow-to-trigger-email) section.
    ```javascript
    export default {
    // This is a main file for building your workflows. All activities to be executed should be defined within the executeWorkflow
    // function.
    async executeWorkflow(data) {
        // This function takes in a json object as arguments (data) which can be passed when you trigger the workflow.
        // Complete the following line to set up your first activity. Place the cursor after activities, and select the action you'd like"
        // to execute from the list menu that appears.

        // await Query1.run();
        // await Api1.run();

        return true;
        }
    }
    ```
4. Click the gear icon ⚙️ in the bottom left corner to configure the workflow settings.
5. Toggle the **Webhook trigger** property to configure the workflow as a webhook.
6. Copy and save the **URL** and the **Bearer Token**. If you wish to connect your workflow with an external app then you will need the **URL** and the **Bearer Token**. You'll see this in action in the [Send email using Postman](#send-email-using-postman) section.
7. Click the **Publish** button in the top right corner to publish your workflow.

You've set up your first webhook workflow.

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

1. Add a query to send a welcome email to the user, and configure it as shown below:
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
        If you have any questions or need help as you settle in, feel free to reach out.

        Let's achieve great heights together!

        Best regards,
        Company
        ```
2. Click the **Run** button to send an email. Check your inbox, you must have received an email from `demo.smtp.send.email@gmail.com`. 

## Write code to trigger email

Follow these steps to update the workflow to send an email:

1. Update the _Send\_Welcome\_Email_ query and remove your email from the **To** field, and add `{{this.params.to}}` to it. You'll send the email as a parameter from your workflow to the query and execute it to send email.
2. Go to the JS object _Main_, delete the auto-generated code, and add the below code. In this code, you're executing the _Send\_Welcome\_Email_ by passing the parameter **to**. Remember to replace `<add_your_email_address>` with your email.
    ```javascript
    export default {
        async executeWorkflow(data) {
            // replace <add_your_email_address> with your email
            const to = "<add_your_email_address>";

            //pass email `to` the query to send email
            await Send_Welcome_Email.run({"to": to}).then((response)=> {
                // log the response
                console.log(response);
            })

            return true;
        }
    }
    ```
3. Click the **Run** button to trigger the workflow run. You'll the response as shown below, and will receive an email from `demo.smtp.send.email@gmail.com`.
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```
4. Click the **Publish** button to publish your latest changes.

You've successfully integrated execution of the email query whenever the workflow is triggered. 

## Send email using Postman

You can connect your webhook workflow to your external applications. Here you will use Postman to simulate and test workflow execution. Follow these steps to trigger the workflow execution:

1. In your workflow, go to the JS object _Main_, update the `executeworkflow()` function to read the email sent as a parameter.
     ```javascript
    export default {
        async executeWorkflow(data) {
            //pass email `to` the query to send email
            await Send_Welcome_Email.run({"to": data.email}).then((response)=> {
                // log the response
                console.log(response);
            })
            return true;
        }
    }
    ```
2. Click the **Publish** button to publish your latest changes.
3. Launch the Postman application on your system.
4. Click on the **New** button, and choose **HTTP** request in Postman to create a new request.
5. Choose the HTTP method as **POST**.
6. Enter the workflow URL that you copied in the [Create workflow](#create-workflow) section.
7. Set the query parameter as shown below:
    * Key - `api-key`
    * Value - Add the Bearer token that you copied in the [Create workflow](#create-workflow) section.
8. On the _Body_ tab, select **raw**, and add the below code in the request body. Here you are setting the parameter value for `to`. Remember to replace `<add_your_email_address>` with your email.
    ```javascript
    {
        "email": "<add_your_email_address>"
    }

    ```
9. Click the **Send** button to execute the request.
10. The below response is generated, and you will receive an email from `demo.smtp.send.email@gmail.com`.
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

You've successfully executed your first webhook workflow externally, and can integrate the workflow in your external or Appsmith app.

## Trigger workflow using Button widget

To interact with the workflow from your Appsmith app, Appsmith provides workflow queries. In this section, you'll:

* Write a workflow query
* Bind the workflow query to the Button widget
* Pass parameter (_email_) from Appsmith app to workflow
* Trigger the workflow by clicking the Button widget

Follow these steps to send email from your app:

1. In your application, drag an Input widget onto the canvas, name it _inp\_Email_, and set its label as **Email**.
2. Drag a Button widget onto the canvas, configure it as shown below:
    * Name it _btn\_SendEmail_
    * Set the label as _Send Welcome Email_
3. Under **Editor** > **Queries**, click **New query/API**.

   <br/> <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/e6ZQ55iJFE9vZdOHOOe9?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow Query">
    </iframe>
    </div><br/><br/>

4. In the _Create new query/API_, click **Workflows Query**, and name it as _SendEmailQuery_. 
5. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select **Send_Email_Workflow**.
    * **Request type** - Select **Trigger workflow**.
    * **Trigger Data** - Add `{{this.params}}` to pass the parameters to the workflow for processing.
6. To send a message to the specified email, you'll have to read the email added in the Input widget, and send it to the workflow for processing. To achieve this, create a JS object, name it _PassEmailtoWorkflow_, delete the auto-generated code, and add the below code to it. The `sendMessage` function captures the email and triggers the workflow by supplying the email as a parameter.
    ```javascript
    export default {
        //Trigger the workflow and send a message to the workflow
        async sendMessage() {
            //Message is the input widget
            //Check if the user has supplied an email
            if(inp_Email.text){
                //trigger the workflow run with the message, 
                // user's email as parameter
                await SendEmailQuery.run({
                    "email": inp_Email.text
                }).then((response) => {
                    if(response)
                        showAlert('Email sent');
                });
            }else{
                //prompt the user to add a message
                showAlert("Please specify Email.");
            }
        }
    }
    ```
7. Bind the **onClick** event of the **Send Email** button to execute the `sendMessage` function. You'll see an _Email sent_ prompt. Check your inbox, you must have received an email from `demo.smtp.send.email@gmail.com`.
    
    You've successfully executed your workflow within your Appsmith app.

🚩 Congratulations. You have built your first webhook workflow and integrated it with your Appsmith app.

In this tutorial, you explored how to create a webhook workflow, pass parameters to the workflow, and execute workflow from your Appsmith app. You can use these skills to build your own workflow and integrate it with your apps.

Happy App Building!
