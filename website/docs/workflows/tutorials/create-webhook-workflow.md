---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Create Webhook Workflow

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your applications. This tutorial takes you through the process of setting up a Webhook workflow, integrating it with your Appsmith app, and triggering the workflow execution from your Appsmith app.  

To learn workflows in Appsmith, you'll build a notification workflow that sends notification to users. By the end of this tutorial, you will learn how to:

* Create a workflow and configure it as a webhook
* Integrate the workflow into your Appsmith app
* Execute the workflow from your Appsmith app

## Prerequisites

* Ensure you have a self-hosted instance of Appsmith. See the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Ensure you have basic knowledge of creating datasource, queries, and displaying data on Appsmith. For more information, see [Tutorial - Basics](/getting-started/tutorials/start-building).

## Create workflow
 
Follow these steps to create a webhook workflow within your workspace. The newly created workflow will be accessible across all apps in the same workspace:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/CDohmujScwyw005Q7Wjo?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and choose **New Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor.
2. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1** to _My\_First\_Workflow_.
3. In the JS code editor, delete the auto-generated code and add the code provided below:
    ```javascript
    export default {
        async executeWorkflow(args) {
            console.log(args);
            return true;
        }
    }
    ```
4. Click the gear icon ⚙️ in the bottom left corner to configure the workflow settings.
5. Toggle the **Webhook trigger** property to configure the workflow as a webhook.
6. Copy and save the **URL** and the **Bearer Token**.
7. Click **Publish** in the top right corner to publish your workflow.

You've created your first workflow, and it's available in your workspace for integrating it into your apps.

## Trigger workflow from your Appsmith app

To execute workflow, you will have to trigger the workflow run. Follow the steps below to trigger the workflow from your app:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/ZPYyhcNQL9EhIOmCvatB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
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

To execute the workflow from your app whenever a user performs an action to send notification in your app, you will have to integrate workflow execution with the events. Follow the steps below to integrate the workflow with your app:

1. Drag an Input widget onto the canvas, name it _Message_, and set its label as **Message**.
2. Drag a Select widget onto the canvas, name it _Users_, and set its source data as below:
    ```javascript
    [
        {
            "name": "John Doe",
            "email": "john.doe@test.com"
        },
        {
            "name": "Bob Anderson",
            "email": "bob.anderson@test.com"
        },
        {
            "name": "Eva Williams",
            "email": "eva.williams@test.com"
        }
    ]
    ```
2. Drag a Button widget onto the canvas, name it _SendNotification_, and set the label as _Send Notification_
3. To capture the message, create a JS object, name it _Send\_Receive\_Message_, delete the auto-generated code, and add the below code to it:
    ```javascript
    export default {
        //Trigger the workflow and send a message to the workflow
        async sendMessage() {
            //Message is the input widget
            //Check if the user has supplied a message and selected the user
            if(Message.text && Users.selectedOptionValue){
                //trigger the workflow run with the message, 
                // user's email and name as parameters
                await triggerWorkflowRun.run({
					"message": Message.text,
					"notify": Users.selectedOptionValue, 
					"name": Users.selectedOptionLabel
				}).then((response) => {
                    if(response)
                        showAlert('Message sent');
                });
            }else{
                //prompt the user to add a message
                showAlert("Add Message to send");
            }
        }
    }
    ```
    In the above code, the `sendMessage` function captures the message, selected user's name and email, and then triggers the workflow by supplying them as parameters.

 4. Bind the **onClick** event to the `sendMessage` method of _Send\_Receive\_Message_ JS object
 5. In your workflow, update the JS object _Main_ and add `assignRequest()` function. In the below code, the `assignRequest()` function assigns a request to specified users (`requestToUsers`) within the Appsmith app. This assignment ensures that the request and its data is accessible only to the specified user or users. Add your Appsmith username to `requestToUsers` attribute. 

    ```javascript
    export default {
        async executeWorkflow(args) {
            console.log(args);
            //Create a send message request that will send a message to the app
            await appsmith.workflows.assignRequest({
                requestName: "sendNotifications",
                message: "Notify users",
                requestToUsers: ["add your appsmith user name"], 
                resolutions: ["Read"],
                metadata: { "name": args.name, "message": args.message }
            });

            return true;
        }
    }
    ```
6. Click the **Publish** button to publish your latest changes to the workflow.
7. In your application, drag an Icon button widget onto the canvas, name it _notification_, set the icon as notifications, and set the **onClick** event to show modal. Select **+New Modal** and configure the modal as below:
    * Name the modal as _ShowNotification_ 
    * Name the title Text as _messageFrom_, and delete the content of the **Text** property
    * Drag another Text widget, name it _messageReceived_, and delete the content of the **Text** property
8. Create a new **Workflows Query**, name it _receiveNotification_ with the below details:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select **My_First_Workflow**
    * **Request type** - Select **Get requests**
    * **Request name** - `sendNotifications`. This is the same request name in the `appsmith.workflows.assignRequest()` method in the [Create Workflow](#create-workflow) section.
    * **Request status** - Set it as `Pending`
    The `Get requests` query retrieves the data or information generated for the logged-in user by the workflow.
9. Update the JS Object (_Send\_Receive\_Message_), and add the `receiveMessage()` code to it. The `receiveMessage` function executes the `receiveNotification` query to retrieve messages sent by the webhook workflow, and reads the first notification, and displays the user's name and the received message in a modal.

    ```javascript
    export default {
        //Trigger the workflow and send a message to the workflow
        async sendMessage() {
            //Message is the input widget
            //Check if the user has supplied a message and selected the user
            if(Message.text && Users.selectedOptionValue){
                //trigger the workflow run with the message, 
                // user's email and name as parameters
                await triggerWorkflowRun.run({
					"message": Message.text,
					"notify": Users.selectedOptionValue, 
					"name": Users.selectedOptionLabel
				}).then((response) => {
                    if(response)
                        showAlert('Message sent');
                });
            }else{
                //prompt the user to add a message
                showAlert("Add Message to send");
            }
        },
        // receive the messages sent from workflow
        async receiveMessage() {
            // read the requests added by workflow runs
            await receiveNotification.run().then((notification) => {
                if (notification) {
                    console.log(notification);
                    //reading the first message
                    const userInfo = notification[0].metadata;
                    console.log(userInfo.name);
                    //verify if userInfo is available
                    if (userInfo){
                        // set the value of the Message from field in the modal
                        messageFrom.setText(userinfo.name);
                        // set the value of the Message received field in the modal
					    messageReceived.setText(userinfo.message);
                        showModal('ShowNotification');
                    }
                }
            }).catch((error)=> {
                console.log("Error occured: " + error);
                showAlert('Error');
            })
        }
    }
    ```
   
10. Write a message in the Input widget (_Message_), and click the **Send Message** button. You will see an alert `Message sent`. This marks that the workflow run is successful, and the workflow has received the message.
11. Click the **notification** button. You will see the _ShowNotification_ Modal as below:

    <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/j8Uzw0upc5PAXJkVxVx3?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
    </iframe>
    </div>
    <br/><br/>

    You've successfully executed your workflow within your Appsmith app.

🚩 Congratulations. You have built your first webhook workflow and integrated it with your Appsmith app.

In this tutorial, you explored how to create a webhook workflow, triggered it from your Appsmith app, passed parameters from app to workflow, and executed the workflow from your Appsmith app. You can use these skills to build your own workflow and integrate it with your apps.

Happy App Building!

