---
description: Learn how to create and configure a basic workflow in Appsmith, understand key concepts, and apply them to automate tasks such as sending emails.
title: Create Basic Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Create Basic Workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Communicating important updates and task completions to your team or management is crucial for keeping projects on track Automating these notifications helps prevent delays and miscommunication. In this tutorial, you’ll learn how to set up automated email notifications using the Appsmith workflow.

:::tip What you'll learn
By following this tutorial, you will gain a comprehensive understanding of:
* The structure of workflows in Appsmith
* How to add processing logic that automatically sends emails
* Configuring a webhook trigger to connect the workflow to external systems
* Triggering the workflow from an external system to send emails
:::

## Before you begin

Before starting, ensure you have:

- A self-hosted Appsmith instance with a [business subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions if you need to set up your instance. You can also get a trial license by signing up on [customer.appsmith.com](https://customer.appsmith.com/).
- Basic familiarity with Appsmith operations. If you're new to Appsmith, follow the [Getting Started Tutorial](/getting-started/tutorials/start-building) to learn the basics.
- A REST client like [HTTPie](https://httpie.io) for testing workflows.

## Create workflow

An Appsmith workflow includes:

- **Main JS Function**: Write the core logic within the `executeWorkflow` function.
- **Processes**: Define tasks such as sending emails, making API calls, or processing data inside the `executeWorkflow` function.
- **Workflow Settings**: Define the trigger that initiates the workflow, like webhooks.

Let's create your first workflow and understand its structure.

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/O23LygPaaUxbmDjPyfsl?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div> 
<br/><br/>

1. On your instance, go to your Appsmith workspace, click the **Create New** button and choose **Workflow**.
2. In the **Main** JS object code editor, rename your workflow from **Untitled Workflow 1** to **Send_Email**. This helps you track different workflows in your workspace, each with a unique name.
3. Examine the `executeWorkflow` function in the JS editor. This function is the entry point for your workflow and must be present in the _Main_ JS object. If it is not present, the workflow won't be invoked when triggered. You'll write the processing logic for the workflow inside this function. Here’s the default structure:

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

Now that you've understood the basic skeleton of a workflow, let's add the processing logic to send emails.

## Add processing logic

To automate tasks within your workflow, you can add processing logic. Here, you will create a query to send an email to a user. Follow these steps:


<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/OtswfVRPQN4BaHjUt76l?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow | Add Processing Logic">
</iframe>
</div> 
<br/><br/>

1. In your workflow, add a new **Blank API** query.

2. Configure the query as follows:
   - **Name**: Rename the query to **qs_send_email**. Giving a meaningful and unique name to your query helps manage and identify its purpose.
   - **HTTP Method**: Set to `POST`.
   - **URL**: Enter the URL `https://hook.us1.make.com/tg6y1fgjds3ysp3x4snt3tfjgu7s747d`. This is a preconfigured external API that takes an email as a parameter and sends an email to it.
   - **Body**: In the **Body** tab, select JSON, and add the following JSON. Replace `add_your_email_address` with your email to see the workflow in action as you will receive an email.

        ```javascript
        {
            "email": "add_your_email_address"
        }
        ```

3. Click the **Run** button to send the email. Check your inbox for an email from `demo.smtp.send.email@gmail.com`.

4. Update the JSON body in your query to accept the email as a parameter, allowing you to pass the email address to the workflow at runtime.

    ```javascript
    {
        "email": {{this.params.email}}
    }
    ```

5. Integrate the query into the workflow by updating the `executeWorkflow` function to call the query and pass the email parameter. The `data` parameter of the `executeWorkflow` function holds all the parameters sent to the workflow in JSON format. Use dot notation to access the parameters.

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

You've successfully configured your workflow to accept `email` as a parameter and call the `qs_send_email` query to send email whenever the workflow is triggered. You can connect the workflow with an external app or system, and trigger it using a webhook.

## Enable Webhook trigger

To trigger the workflow from an external system, like [HTTPie](https://httpie.io), you need to configure a webhook trigger. Follow these steps:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/VnWRWB1N8ez0WqQjVGsw?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Configure webhook trigger">
    </iframe>
</div>
<br/><br/>

1. Navigate to your workflow in the Appsmith interface.

2. Click the gear icon (⚙️) located in the bottom left corner to open the workflow settings.

3. In the workflow settings, toggle the **Webhook trigger** switch. This action enables your workflow to be triggered via a webhook URL and generates a unique Webhook URL.

4. Copy this **Webhook URL**. You will need it to connect the workflow to external systems.

5. Click the **Deploy** button in the top right corner to publish your workflow with the new webhook settings.

Now that you have configured the webhook trigger for the workflow, use it to connect to an external system.

## Test workflow

Appsmith workflows with webhook triggers can be invoked from external systems. Use the REST client [HTTPie](https://httpie.io) to simulate an external system and trigger the workflow. Follow these steps to verify the email:

1. Visit [https://httpie.io/app](https://httpie.io/app) in your web browser.
2. In the HTTPie web application, click the **New Request** button to create a new request.
3. Configure the request as follows:
   - Set the request method to **POST**.
   - In the request URL field, paste the webhook URL you copied from the workflow settings in the [Enable the Webhook Trigger](#enable-the-webhook-trigger) section.
4. Pass `email` parameter needed for processing by adding it in JSON format in the request body. Replace `add_your_email_address` with your email to see the workflow in action as you will receive an email.

    ```javascript
    {
        "email": "add_your_email_address"
    }
    ```

5. Click the **Send** button in the HTTPie web application to execute the request.
6. You should see a response in HTTPie indicating that the workflow has been triggered successfully. The response may include a `workflowRunId` confirming the execution.

    ```javascript
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

🚩 Congratulations. You've successfully built and tested your first workflow. With this knowledge, you can automate different tasks, such as triggering workflows based on events like refund requests or support tickets and passing necessary parameters for processing.

Happy Workflow Building!

## Next steps

You've completed the tutorial on building workflows in Appsmith. Here are some additional resources to explore:

* [How-to Guides](/workflows/how-to-guides) - Learn more advanced workflow configurations and integrations.
* [Workflow Queries](/workflows/reference/workflow-queries) - Understand how to use queries within your Appsmith applications and connect workflows to Appsmith apps.
* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the variety of functions available for your workflows.
* [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows) - Learn how to pass parameters to workflows from the Appsmith app or external systems.