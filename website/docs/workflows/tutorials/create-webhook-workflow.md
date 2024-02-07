---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Create Webhook Workflow

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your applications. This tutorial takes you through the process of setting up a Webhook workflow, integrating it with your Appsmith app, and triggering the workflow execution from your Appsmith app. 

By the end of this tutorial, you will learn how to:

* Create a workflow and configure it as a webhook
* Test workflow using Postman
* Integrate the workflow into your Appsmith app
* Execute the workflow from your Appsmith app

## Prerequisites

* Ensure you have a self-hosted instance of Appsmith. See the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Ensure you have basic knowledge of creating datasource, queries, and displaying data on Appsmith. For more information, see [Tutorial - Basics](/getting-started/tutorials/start-building).

## Create workflow

Follow these steps to create a webhook workflow within your workspace. The newly created workflow will be accessible across all apps in the same workspace:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/TwBt2bvGNABi1Q0yZLS8?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and choose **New Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor.
2. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1** to _My\_First\_Workflow_.
3. In the JS code editor, delete the auto-generated code and add the below code to it:

    ```javascript
    export default {
        async executeWorkflow(args) {
            console.log(args);
            //Create a send message request that will send a message to the app
            await appsmith.workflows.assignRequest({
                requestName: "SendMessageToApp",
                message: "SendMessage",
                requestToUsers: ["add your appsmith user name"], // add your appsmith username to view messages
                resolutions: ["Read"],
                metadata: { "message_from_workflow": "I'm Webhook Workflow" }
            });
            return true;
        }
    }
    ```
4. Click the gear icon ⚙️ in the bottom left corner to configure the workflow settings.
5. Toggle the **Webhook trigger** property to configure the workflow as a webhook.
6. Copy and save the **URL** and the **Bearer Token**.
7. Click **Publish** in the top right corner to publish your workflow.

You've created your first workflow, and it's available in your workspace for integrating it into your apps.

## Test workflow with Postman

Follow these steps to test the workflow execution:

1. Launch the Postman application on your system.
2. Click the **New** button in Postman to create a new request.
3. Choose the HTTP method as **POST**
4. Enter the workflow URL that you copied in the [Create workflow](#create-workflow) section.
5. Set the below details in the request header:
    * `X-Requested-By` - `Appsmith`
    * `x-appsmith-key` - Add the Bearer token that you have copied in the [Create workflow](#create-workflow) section
7. Click the **Send** button to execute the request.
8. Verify the workflow response. You will see the below response:
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

The workflow is ready for integration in your Appsmith app.

## Trigger workflow from your Appsmith app

Follow the steps below to integrate the workflow with your app:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/BEOHUAssHhLWnNCIQNVB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. In your application, under **Editor** > **Queries**, click **New query/API**.
2. In the _Create new query/API_, click **Workflows Query**, and name it as _triggerWorkflowRun_. This query triggers the workflow run and executes the code written in the JS object (_Main_) in your workflow.
4. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select **My_First_Workflow**
    * **Request type** - Select **Trigger workflow**
    * **Trigger Data** - Add below code: 
        ```javascript
         {{this.params}}
        ```
5. Click the **Run** button to test the workflow. You will see the below response:
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

You've triggered the workflow run from your app.

## Execute workflow from your Appsmith app

To execute the workflow from your app whenever a user performs an action in your app, you will have to integrate workflow execution with the events. Follow the steps below to integrate the workflow with your app:

1. Create a new **Workflows Query** with the below details:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select **My_First_Workflow**
    * **Request type** - Select **Get requests**
    * **Request name** - `readMessageSentByWorkflow`. This is the same request name in the `appsmith.workflows.assignRequest()` method in the [Create Workflow](#create-workflow) section.
    * **Request status** - Set it as `Pending`
2. Create a JS object, name it _Send\_Receive\_Message_, delete the auto-generated code, and add the below code to it:

    ```javascript
    export default {
        //Trigger the workflow and send a message to the workflow
        async sendMessage() {
            //Message is the input widget
            //Check if the user has supplied a message
            if(Message.text){
                await triggerWorkflowRun.run({"message": Message.text});
            }else{
                //prompt the user to add a message
                showAlert("Add Message to send");
            }
        },
        // receive the messages sent from workflow
        async receiveMessage() {
            // read the requests added by workflow runs
            await readMessageSentByWorkflow.run().then((receipt) => {
                if (receipt) {
                    console.log(receipt);
                    //reading the first message
                    const message_received = receipt[0].metadata;
                    console.log(message_received);
                    //store the received message in the Appsmith store with
                    // the given (messageSentByWorkflow) key
                    storeValue("messageSentByWorkflow", message_received.message_from_workflow);
                }
            }).catch((error)=> {
                console.log("Error occured: " + error);
                showAlert('Error');
            })
        }
    }
    ```
    In the above code, there are two functions:
    * `sendMessage` - It reads the message inputted by the user in the Input Widget(_Message_), and then triggers the workflow run.
    * `receiveMessage` - It executes the Get requests (_readMessageReceipt_) workflow query, and reads the message sent by the workflow. Stores this message in the Appsmith store with the given key (`messageSentByWorkflow`).
3. Drag an Input widget onto the canvas, name it _Message_, and set its label as **Message**
4. Drag a Button widget onto the canvas and configure it as shown below:
    * Name it _Send\_message\_to\_Workflow_
    * Set the label as _Send Message_
    * Bind the **onClick** event to the `sendMessage` method of _Send\_Receive\_Message_ JS object
5. Drag a Text widget onto the canvas, name it _showMessage_
6. Drag another Button widget onto the canvas and configure it as shown below:
    * Name it _Read\_message\_from\_Workflow_
    * Set the label as _Read Message_
    * Bind the **onClick** event to the `receiveMessage` method of _Send\_Receive\_Message_ JS object
7. Write a message in the Input widget (_Message_), and click the **Send Message** button. You will see an alert `Message sent`. This marks that the workflow run is successful, and the workflow has received the message.
8. Click the **Read Message** button. You will see the message `I'm Webhook Workflow` in the Text widget.

    You've successfully executed your workflow within your Appsmith app.

🚩 Congratulations. You have built your first webhook workflow and integrated it with your Appsmith app.

In this tutorial, you explored how to create a webhook workflow, tested it using Postman, triggered it from your Appsmith app, passed parameters from app to workflow, and executed the workflow from your Appsmith app. You can use these skills to build your own workflow and integrate it with your apps.

Happy App Building!

