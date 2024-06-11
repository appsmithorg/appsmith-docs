---
description: This page provides detailed steps to integrate and trigger a workflow from an Appsmith app.
title: Lesson 2 - Connect Workflow with Appsmith App
hide_title: true
---

# Lesson 2: Connect Workflow with Appsmith App

In this lesson, you'll learn how to connect the workflow you created in Lesson 1 with an Appsmith app. You'll use an API call to trigger the workflow and send a welcome email to new users. 

## What you'll learn 

By the end of this lesson, you will be able to:
* Update the workflow to accept parameters.
* Create a workflow query to link the workflow with your app.
* Pass parameters from the app to the workflow and trigger it.

## What you'll need

Before starting, make sure you have:
* Completed [Lesson 1 - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Basic knowledge of Appsmith apps and API integration.

## Update Workflow to accept Parameters

To send a welcome email via the workflow, you need to update the workflow logic to accept parameters and use them in the email.

1. **Add a New API Query**:
   * In your workflow's interface, create a new blank API query that will send a welcome email to a specified user.
   * Rename the query to `_Send_Welcome_Email_`.

2. **Configure the API Query**:
   * **HTTP Method**: Select `POST`.
   * **URL**: Enter `https://hook.us1.make.com/tg6y1fgjds3ysp3x4snt3tfjgu7s747d`.
   * **Body**: Under the **Body** tab, add the following JSON. Replace `<add_your_email_address>` with your email address:
   
    ```json
    {
        "email": "<add_your_email_address>"
    }
    ```

3. **Test the API Query**:
   * Click the **Run** button to send an email. Check your inbox for an email from `demo.smtp.send.email@gmail.com`.

4. **Update the API Query for Dynamic Email**:
   * Update the _Send_Welcome_Email_ query by replacing your email with `{{this.params.send_email_to}}`. In this code the parameter `send_email_to` is dynamically replaced with actual values at runtime.

5. **Update the Workflow Code**:
   * Update the code in the **Main** JS object to the following:

    ```javascript
    export default {
        async executeWorkflow(data) {
            // Pass the `send_email_to` parameter to the query to send the email
            const response = await Send_Welcome_Email.run({"send_email_to": data.email});
            // Log the response for debugging
            console.log(response);
        
            return true;
        }
    }
    ```

6. **Deploy the Workflow**:
   * Click the **Deploy** button to publish these changes. This ensures that your updated workflow is ready to accept and process new data.

## Connect the Workflow to your Appsmith App

Now that your workflow can send emails, connect it to your Appsmith app using a workflow query.

 <br/>  
 <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/UA07mpIDNfWd8hyKzF2U?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Workflow with Appsmith App">
    </iframe>
    </div>
<br/><br/>

1. **Create a New Workflow Query**:
   * In your Appsmith app, navigate to the _Queries_ tab and click **+ New query / API**.
   * Choose **Workflow Queries** to create a new workflow query.

2. **Configure the Workflow Query**:
   * **Workflow Name**: Select your previously created workflow, _Send_Email_Workflow_.
   * **Request Type**: Choose `Trigger workflow` from the dropdown menu.
   * **Trigger Data**: Use this field to pass parameters to your workflow. Add the following JSON and replace `<add_your_email_address>` with your email:

            ```javascript
            {
                "email": "<add_your_email_address>"
            }
            ```

3. **Execute the Workflow**:
   * Click the **Run** button to trigger the workflow. You will see the below response, indicating the workflow ran successfully. Check your inbox for the welcome email:

    ```json
    {
        "workflowRunId": "B5XGV5QZ"
    }
    ```

## Next steps

You've successfully connected your workflow to an Appsmith app! In the next lesson, you will learn how to configure a webhook trigger for your workflow.

Proceed to [Lesson 3 - Configure Webhook Trigger](/workflows/tutorials/configure-webhook-trigger) to continue.

