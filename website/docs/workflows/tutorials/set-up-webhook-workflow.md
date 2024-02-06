---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Create Approval Workflow

Appsmith Workflows empower you to automate processes, bringing efficiency to your applications. In this tutorial, you'll set up a Webhook approval workflow using Appsmith. This workflow seamlessly integrates automated approvals and allows human intervention through your Appsmith app.

By the end of this lesson, you will learn how to:

- Create a workflow
- Configure the workflow as a webhook
- Craft workflow logic for approving or rejecting refund requests, including:
  - Configuring datasources and queries for sending emails
  - Setting up datasources and queries to fetch pending requests
  - Conditionally automating the workflow to approve records
  - Generating approval requests
- Test the workflow using Postman
- Integrate the workflow with the Appsmith app
- Execute the workflow from the app for manual approval


## Prerequisites

Before you start, make sure you have the following:

- A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
- Familiarity with basic Appsmith concepts. If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).

## Create workflow

Follow these steps to create a new workflow within your workspace. This newly created workflow will be accessible across all apps in the same workspace:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/TwBt2bvGNABi1Q0yZLS8?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. In the top right corner of your workspace, Click **Create New** and select **New Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor.
2. Give a meaningful and unique name by editing the name **Untitled Workflow 1** to _Refunds_.
4. Click the gear icon ⚙️ in the bottom left corner to configure the workflow settings.
5. Toggle the **Webhook trigger** property to configure the workflow as a webhook.
6. Copy and save the **URL** and the **Bearer Token**.
7. Click the **Run** button to test the workflow. You will see the response as shown below:
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

## Configure datasource

To manage refunds and notify users, you'll configure datasources, create queries, and write JavaScript code in the JS object. This process is similar to configuring datasources, creating queries, and JS Objects in your Appsmith apps. 

### Set up SMTP datasource and query

Follow these steps to set up datasources and create query for sending email:

1. Click the **Data** tab. Click the **+** icon next to _Datasources in your workspace_ to add a new [SMTP](/connect-data/reference/using-smtp) datasource.

2. Enter the following details in the SMTP connection parameter fields:
    * **Host Address**: Add your SMTP host address
    * **Port**: Add your SMTP port. For example, 587
    * **Username**: Add your SMTP Username
    * **Password**: Add your SMTP password

3. Test and save the datasource configuration.

4. Create queries with below configuration for sending emails:
    * Create a query and name it- _Send\_refund\_approval_\_email_
        - **From Email**: Add your SMTP Username
        - **To Email**: Add this as a parameter (`{{this.params.recipient}}`)
        - **Subject**: Refund Request Approved
        - **Body**: Add the below details:
            ```text
            Dear {{this.params.customer_name}},
            
            We are pleased to inform you that your refund request has been approved. 
            The refunded amount will be processed and credited to your account shortly.
            
            Thank you for your patience and understanding.

            Sincerely,
            The Customer Support Team
            ```
    * Create a query and name it- _Send\_refund\_rejection_\_email_
        - **From Email**: Add your SMTP Username
        - **To Email**: Add this as a parameter (`{{this.params.recipient}}`).
        - **Subject**: Refund Request Rejected.
        - **Body**: Add the below details:
            ```text
            Dear {{this.params.customer_name}},

            We regret to inform you that your refund request has been denied. 
            After careful consideration, it was determined that the request does not meet our refund criteria.
            
            If you have any questions or concerns, please contact our customer support team.
            
            Thank you for your understanding.
            
            Sincerely,
            The Customer Support Team
            ```

    You've set up an SMTP datasource, and created a query to send email.

### Set up datasource to manage data

Follow these steps to display your refund requests data in the app:

1. Go to your application and click the **Data** tab in the sidebar. Click the **+** icon next to _Datasources in your workspace_ to add a new [PostgreSQL](/connect-data/reference/querying-postgres) datasource, and name it as _CustomerRefunds_.

2. Enter the following details in the PostgreSQL connection parameter fields:
    * **Host Address**: `mockdb.internal.appsmith.com`
    * **Port**: `5432`
    * **Database Name**: `users`
    * **Username**: `users`
    * **Password**: `new-users-db-pass`

3. Test and save the datasource configuration.

### Create queries to manage data

First, add the query to retrieve the pending records:

1. Add a new query for fetching pending approval requests from the _CustomerRefunds_ datasource. Give it a meaningful and unique name, for example, _Select\_pending\_refund\_reqs_ and add the SQL code below to it:
    ```sql
    select * from public. "customer_refunds" where refund_status = 'Pending';
    ```
2. Click the **Run** button in the top right corner to execute and verify the query result.

Second, create a query to update the given record:

1. Add a new query for updating the status of a given refund request. Give it a meaningful and unique name, for example, _Update\_refund\_status_.

2. Add the SQL code below to it:
    ```sql
    -- {{this.params.id}} is replaced by the parameter value (refund_id). 
    -- highlight-next-line
    Update public. "customer_refunds" set refund_status = {{this.params.status}} where refund_id = {{this.params.id}}
    ```
    You've set up a query to update the status of the given refund request.

### Write code to manage workflow

Follow these steps to manage the query execution, and pass parameters to appropriate queries, write code in the Main JS object:

1. Click the **Main** under _JS Objects_.

2. In the JS code editor, delete the auto-generated code and add the below code to it:

    ```javascript
    export default {
        async executeWorkflow(data) {
            const { req_status } = data;

            if (req_status) {
                // Execute a query to retrieve refund requests based on the provided status
                const refund_reqs = await get_refund_requests.run({ "status": req_status });

                // Initialize an array to store refund requests with refund_amount >= 10
                let sendReqs = [];

                refund_reqs.forEach(async (req) => {
                    // Check if refund_amount is less than 10
                    if (req.refund_amount < 10) {
                        // Update the refund status to 'Approved'
                        await Update_refund_status.run({ "id": req.refund_id, "status": 'Approved' }).then(async (response) => {
                            // Send refund approval email to the customer
                            await Send_refund_approval_email.run({
                                "recipient": req.customer_email,
                                "customer_name": req.customer_name
                            });
                        });
                    } else {
                        // Add the entire refund request to the sendReqs array
                        sendReqs.push(req);
                    }
                });

                // Execute a workflow to assign pending refund requests
                const resolution = await appsmith.workflows.assignRequest({
                    requestName: "getPendingRefundRequests",
                    message: "Pending Refund Requests",
                    //ensure to replace your email here
                    requestToUsers: ["addyouremail@domain.com"], 
                    allowedResolutions: ["Approve", "Reject"],
                    metadata: { "reqs": sendReqs }
                });

                // Check if resolution 
                if (resolution) {
                    const { reqStatus, req } = resolution;

                    // Check the resolution status
                    if (reqStatus && reqStatus === 'Approved') {
                        // Update the refund status to 'Approved'
                        await Update_refund_status.run({ "id": req.refund_id, "status": 'Approved' }).then(async (response) => {
                            // Send refund approval email to the customer
                            await Send_refund_approval_email.run({
                                "recipient": req.customer_email,
                                "customer_name": req.customer_name
                            });
                        });
                    } else if (reqStatus && reqStatus === 'Rejected') {
                        // Update the refund status to 'Rejected'
                        await Update_refund_status.run({ "id": req.refund_id, "status": 'Rejected' }).then(async (response) => {
                            // Send refund rejection email to the customer
                            await Send_refund_rejected_email.run({
                                "recipient": req.customer_email,
                                "customer_name": req.customer_name
                            });
                        });
                    }
                }
            }
        }
    };
    ```
    This code sets up a process to retrieve refund requests with a specified status. If the refund amount is less than 10, the refunds are automatically approved, and a notification is sent to the customer. For requests with a refund amount of 10 or more, a manual approval request is generated. The resolution is processed based on user action, either approving or rejecting the request.

3. Click **Publish** in the top right corner to publish your workflow.

You've created your first workflow, and it's available in your workspace for integrating it into your apps.

## Test workflow with postman

Follow these steps to test the workflow execution:

1. Launch the Postman application on your system.
2. Click the **New** button in Postman to create a new request.
3. Choose the HTTP method as **POST**
4. Enter the workflow URL that you copied in the [Create workflow](#create-workflow) section.
5. Set the below details in the request header:
    * `X-Requested-By` - `Appsmith`
    * `x-appsmith-key` - Add the Bearer token that you in the [Create workflow](#create-workflow) section
6. Add the below code the request body that sets the parameter values:
    ```javascript
    {
        "id": 12,
        "refund_status": "Approved",
        "name": "John Doe",
        "email": "Add your email address to verify the email receipt"
    }

    ```
7. Click the **Send** button to execute the request.
8. Verify the workflow response and the email you received. 

The workflow is ready for integration in your Appsmith app.

## Integrate workflow with app

To integrate a workflow into your app, you will create workflow queries. Follow the steps below to create workflow queries:

### Initialize workflow
To initialize a workflow from an app, you'll create a trigger workflow query as shown below:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/BEOHUAssHhLWnNCIQNVB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>
<br/><br/>

1. In your application, under **Editor** > **Queries**, click **New query/API**.
2. In the _Create new query/API_, click **Workflows Query**.
3. Name it _initializeApprovals_.
4. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request type** - Select **Trigger workflow**
    * **Trigger Data** - Add an empty JSON `{}`
5. Click the **Run** button to test the workflow. You will see the response as shown below:
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```
You've integrated your workflow with the app, and is ready to process requests.

### Get pending requests
To fetch the refund requests awaiting verification, you will create an approval request as shown below:

1. In your application, under **Editor** > **Queries**, click **New query/API**.
2. In the _Create new query/API_, click **Workflows Query**.
3. Name it as _fetchPendingRefundRequests_.
4. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request type** - Select **Get requests**
    * **Request name** - Add `getPendingRefundRequests` to it
    * **Request status** - Set it as `Pending`
4. Click the **Run** button to test the request. You'll see that the requests awaiting action are available as part of response. You will see the response as shown below:
    ```javascript
    // TO-DO
    ```
5. Drag a Table widget, rename it as _pendingRefunds_, and bind the _fetchPendingRefundRequests_ query to it.

You've successfully bind the workflow query response to your Table widget. 

### Capture user action
To capture the user action, when a user clicks Approve or Reject and accordingly call the workflow to update the refund request, you will create a resolve request as shown below:

1. In your application, under **Editor** > **Queries**, click **New query/API**.
2. In the _Create new query/API_, click **Workflows Query**.
3. Name it as _resolveRefundRequests_.
4. Add the below details to configure the workflow query:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request Id** - `{{this.params.requestId}}`
    * **Resolution** - `{{this.params.status}}`
    * **Metadata** - `{{this.params.metadata}}`
5. Create a JS object, name it _refundRequestResolver_, delete the auto-generated code, and add the below code to it:
    ```javascript
    export default {
        async resolveRefundRequest (action) {
            if (action){
                //build a metadata for refund request
                const customer = {
                    "refund_id": pendingRefunds.triggeredRow.refund_id, 
                    "customer_name": pendingRefunds.triggeredRow.customer_name,
                    "customer_email": pendingRefunds.triggeredRow.customer_email
                }
                // call the workflow query to set the refund req status
                await resolveRefundRequests.run(
                    {
                        "requestId": pendingRefunds.triggeredRow.requestId,
                        "status": action,
                        "metadata": customer
                    });
            }
        }
    }
    ```
    This code captures the `Approve` or `Reject` action taken by user, and executes the request resolution by executing workflow query _resolveRefundRequests_
6. Bind the execution of _refundRequestResolver_ with `onClick` event for **Approve** and **Reject** buttons as shown below:
    ```javascript
    // onClick of Approve Button
    refundRequestResolver.resolveRefundRequest('Approved');

    //onClick of Reject Button
    refundRequestResolver.resolveRefundRequest('Rejected');
    ```

Once you click Approve or Reject, the workflow executes, updates the refund status as `Approved` or `Rejected`, and intimates the user by sending an email.

🚩 Congratulations. You have built your first approval workflow, and integrated it with your Appsmith app.

In this tutorial, you explored how to create an approval workflow, integrated it with your app, pass parameters from app to workflow and to the queries. You can use these skills to build your own workflow and integrate it with your apps.

Happy App Building!