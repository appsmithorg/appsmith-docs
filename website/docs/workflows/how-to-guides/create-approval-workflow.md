---
description: This page provides detailed steps to set up an approval Webhook workflow on Appsmith.
---
# Create Approval Workflow

In a human-in-the-loop approval workflow, such as for processing refund requests, you can automate approvals for specific types of requests based on your business guidelines. Additionally, you may require human verification before approving or rejecting certain requests. This human intervention can happen through your Appsmith app. This page shows how to set up human-in-the-loop approval workflow using Appsmith. 

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* You have basic knowledge of creating a webhook workflow in Appsmith. For more information, see [Tutorial - Create Webhook Workflow](/workflows/tutorials/create-webhook-workflow).
* You've set up a Form in your app that allows users to raise refund requests.

## Set up Webhook workflow

Follow these steps to set up a webhook workflow within your workspace. 

1. Create a new workflow in your workspace.
2. Give a meaningful and unique name to it. For example, _Refunds_.
4. Click the gear icon ⚙️ in the bottom left corner to configure it as a webhook workflow.
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

## Configure datasource

To manage refunds and notify users of the outcome of their refund requests, you'll configure datasources, create queries, and write JavaScript code in the JS object. This process is similar to configuring datasources, creating queries, and JS Objects in your Appsmith apps.

### Set up SMTP datasource and query

To notify the users of the outcome of their refund request, set up an SMTP datasource and connect it with your email service provider. Follow these steps to set up datasources and create query for sending email:

1. Click the **Data** tab. Click the **+** icon next to _Datasources in your workspace_ to add a new [SMTP](/connect-data/reference/using-smtp) datasource.

2. Give it a meaningful and unique name. For example, _Send_Email_SMTP_

3. Enter the following details in the SMTP connection parameter fields:
    * **Host Address**: Add your SMTP host address
    * **Port**: Add your SMTP port. For example, 587
    * **Username**: Add your SMTP Username
    * **Password**: Add your SMTP password

3. Test and save the datasource configuration.

4. Create queries to send approval and rejection email to the user. You can set up the queries with the below configuration:
    * Create a _Send_Email_SMTP_ query and name it- _Send\_approval_\_email_
        - **From Email**: Add your SMTP Username
        - **To Email**: Add this as a parameter (`{{this.params.recipient}}`)
        - **Subject**: Refund Request Approved
        - **Body**: For example, add the below details:
            ```text
            Dear {{this.params.customer_name}},
            
            We are pleased to inform you that your refund request has been approved. 
            The refunded amount will be processed and credited to your account shortly.
            
            Thank you for your patience and understanding.

            Sincerely,
            The Customer Support Team
            ```
    * Create another _Send_Email_SMTP_ query and name it- _Send\_rejection_\_email_
        - **From Email**: Add your SMTP Username
        - **To Email**: Add this as a parameter (`{{this.params.recipient}}`).
        - **Subject**: Refund Request Rejected.
        - **Body**: For example, add the below details:
            ```text
            Dear {{this.params.customer_name}},

            We regret to inform you that your refund request has been denied. 
            After careful consideration, it was determined that the request does not meet our refund criteria.
            
            If you have any questions or concerns, please contact our customer support team.
            
            Thank you for your understanding.
            
            Sincerely,
            The Customer Support Team
            ```

### Set up datasource to manage data

To access refund request data, set up a datasource which hosts your refund data. Follow these steps to fetch and update your refund requests data in the workflow:

1. If the datasource is already available in your workspace, use it to create queries. If not, click the **Data** tab in the sidebar, add your datasource, and give it a meaningful and unique name. For example, _CustomerRefunds_. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

2. Test and save the datasource configuration.

3. Add a select query to retrieve the pending records. For example, you've a table `customer_refunds` that stores the details of refund requests raised by user, and has a column `refund_status` that stores the status of the request like `Approved`, `Rejected` and `Pending` then use the below query to retrieve the pending requests:

    ```sql
    select * from public. "customer_refunds" where refund_status = 'Pending';
    ```
   Give this query a meaningful and unique name. For example, _Select\_pending\_refund\_reqs_.

4. Click the **Run** button in the top right corner to execute and verify the query result.

5. Add a new query for updating the status of a given refund request. For example, create a query to update the status of refund request available in the `customer_refunds` table as shown below:
    ```sql
    -- {{this.params.id}} is replaced by the parameter value (refund_id). 
    -- highlight-next-line
    Update public. "customer_refunds" set refund_status = {{this.params.status}} where refund_id = {{this.params.id}}
    ```
    Give it a meaningful and unique name, for example, _Update\_refund\_status_.

## Manage approval

To manage automatic as well as manual approval, write the JavaScript code in the _Main_ JS object as shown below:

1. Click the **Main** under _JS Objects_.

2. In the JS code editor, delete the auto-generated code and add the below code to it. This code sets up a process to retrieve refund requests with a specified status. If the refund amount is less than 10, approve the refunds automatically, and notify the customer. For requests with a refund amount of 10 or more, generate an approval request for a human to verify and manually approval or reject the request. Based on the user action process the resolution, either by approving or rejecting the request.

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
3. Click **Publish** in the top right corner to publish your workflow.

## Get requests in Appsmith app

To manually allow users to take action on the pending requests, display the requests in your Appsmith app as shown below:

1. Initialize the workflow, create a workflow query and configure the `Trigger workflow` request as shown below:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request type** - Select **Trigger workflow**
    * **Trigger Data** - Add the below JSON
    ```javascript
    {
        "req_status" : "Pending"
    }
    ```
    Give it a meaningful and unique name. For example, _initializeApprovalWorkflow_.
2. Click the **Run** button to initialize the workflow. You will see the response as shown below:
    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```
3. To fetch the pending requests from workflow, create a workflow query and configure `Get requests` as shown below:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request type** - Select **Get requests**
    * **Request name** - Add `getPendingRefundRequests` to it. This is the same request name that you've added in your workflow Main JS object in `appsmith.workflows.assignRequest()` in the [Manage approval](#manage-approval) section.
    * **Request status** - Set it as `Pending`
    Give it a meaningful and unique name. For example, _fetchPendingRefundRequests_
4. Click the **Run** button to test the request. The requests awaiting action are available as part of response in the `metadata` attribute. You will see the response as shown below:
    ```javascript
    // TO-DO
    ```
5. Create a JS object, to execute the _fetchPendingRefundRequests_ query and transform the `metadta` attribute.
5. Drag a Table widget, give it a meaningful and unique name like _pendingRefunds_, and bind the _fetchPendingRefundRequests_ query to it.

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

