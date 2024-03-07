---
description: This page provides detailed steps to set up a workflow on Appsmith.
title:  Lesson 1 - Create Basic Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1> Lesson 1 - Create Basic Workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your applications. This tutorial guides you through the process of setting up a basic workflow, configuring it as a webhook trigger, integrating and triggering the workflow execution from your Appsmith app.  

In this lesson, you'll learn how to:

* Create a workflow 
* Integrate with datasource
* Write query
* Write code in workflow
* Configure workflow as a webhook
* Execute workflow from an external system (Postman)
* Execute workflow from an Appsmith app

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
*  If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).
* A REST client. For example, Postman.

## Create workflow

Follow these steps to create a workflow. The newly created workflow can be accessed in all apps in the same workspace:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/BzEnldkGHkIJ91SDxubA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and choose **Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1** to _Basic\_Workflow_.
2. In the **Main** JS object code editor, you will see the `executeWorkflow` function (as shown below). This function executes whenever a workflow run is triggered. It serves as the main function for writing your logic. You'll update the `executeWorkflow()` function, and add code in the [Write code in workflow](#write-code-in-workflow) section.

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

You've created your first workflow.

## Integrate with datasource and write query

Appsmith workflows can integrate with external systems like databases, REST APIs and more. Follow these steps to connect with a datasource and write queries.

1. Click the **Data** tab. Click the **Bring your data** button in the _Datasources in your workspace_ section to add a datasource.

2. Select **Users** from the _Sample datasources_. You'll see the _Users_ datasource is visible under _Databases_ in the left sidebar. You can also configure your own [datasource](/connect-data/reference).

3. Click the **+ New query** button to create a query. You'll see the below SQL code in the query editor:
    ```SQL
    SELECT * FROM public."users" LIMIT 10;
    ```
4. Give a meaningful and unique name to it _getAllUsers_.

4. Click the **Run** button to test the query, and observe the response. You'll see the user data displayed in the _Response_ tab.

You've successfully integrated a datasource with the workflow and written a query to fetch users.

## Write code in workflow

Follow these steps to add JavaScript code:

1. In your workflow, click the **Main** JS object. In the code editor, remove the existing code and paste the below code snippet in it. The below code executes the _getUsers_ query and prints the user's name to console whenever workflow runs.

    ```javascript
    export default {
        // This function executes whenever workflow runs.
        async executeWorkflow(data) {
            // The below name of the user is printed whenever workflow runs.
            const response = await getUsers.run();
            if(response) {
                response.forEach((user)=> {
                    console.log(user.name);
                })
            }
            return true;
        }
    }
    ```
2. Click the **Run** button in the top right corner to execute the code. You'll see _true_ printed in the Response tab.
3. Click the **Logs** tab, and you'll see the names printed.
4. Now, update the query to add a where clause to retrieve the record for the given name. At run time, in the below query, the parameter value passed to the query replaces `{{this.params.name}}`.
    ```SQL
    SELECT * FROM public."users" where name = {{this.param.name}};
    ```
5. The parameter `data` in the `executeWorkflow()` function holds all the parameters passed to the workflow. You can read the parameter (name) by using `data.name`. Click the **Main** JS object and pass the name parameter to the _getUsers_ query as shown below:

    ```javascript
    export default {
        // This function executes whenever workflow runs.
        async executeWorkflow(data) {
            // The below user data is printed whenever workflow runs.
            const response = await getUsers.run(data.name);
            if(response) {
                response.forEach((user)=> {
                    console.log(user);
                })
            }
            return true;
        }
    }
    ```
6. Click the **Publish** button to publish your latest changes.

You've successfully executed query from the workflow and added parameters to it. 

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

## Execute workflow from external system

To simulate the workflow connection from external system, here you will use Postman, and execute the workflow. Follow these steps to trigger the workflow execution:

1. Launch the Postman application on your system.
2. Click on the **New** button, and choose **HTTP** request in Postman to create a new request.
3. Choose the HTTP method as **POST**.
4. Enter the workflow URL that you copied in the [Configure Webhook trigger](#configure-webhook-trigger) section.
5. Click the _Body_ tab, select **raw**, and add the below code in the request body. Here you are setting the parameter value for `name`.
    ```javascript
    {
        "name": "Terry Hayes"
    }

    ```
6. Click the **Send** button to execute the request.
7. The below response is generated.
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

You've successfully executed your first workflow externally using Postman. The Appsmith workflows can't return the data in the response. Use the Appsmith app to retrieve the data from workflow and display it in the App.

## Execute workflow from Appsmith app

To interact with the workflow from your Appsmith app, Appsmith provides workflow queries. Follow these steps to create a workflow query, pass the parameter to the workflow in the workflow query, and retrieve the data sent by workflow:

 <br/>  
 <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/e6ZQ55iJFE9vZdOHOOe9?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow Query">
    </iframe>
</div>
<br/><br/>

1. In your application, under **Editor** > **Queries**, click **New query/API**.
4. In the _Create new query/API_, click **Workflows Query**, and name it as _getUserData_. 
5. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select **Basic_Workflow**.
    * **Request type** - Select **Trigger workflow**.
    * **Trigger Data** - This is used to pass the parameters to the workflow for processing. Add the below code to pass email parameter to the workflow:

        ```javascript
        {
            "name": "Terry Hayes"
        }
        ```
6. Click the **Run** button to execute the workflow.
    
You've successfully executed your workflow within your Appsmith app.

🚩 Congratulations. You have built your first basic workflow and integrated it with your Appsmith app.

In this lesson, you explored how to create a basic workflow, pass parameters to the workflow, and execute workflow from your Appsmith app.

## Next steps

Learn how to add human-in-the-loop interactions using Appsmith workflow and app.

* [Lesson 2 - Add Human-in-the-Loop interactions](/workflows/tutorials/add-hitl-interactions)
