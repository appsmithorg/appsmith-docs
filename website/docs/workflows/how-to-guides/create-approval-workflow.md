---
description: This page provides detailed steps to set up an approval Webhook workflow on Appsmith.
---
# Create Approval Workflow

In a human-in-the-loop approval workflow, such as for processing refund requests, you can automate approvals for specific types of requests based on your business guidelines. Additionally, you may require human verification before approving or rejecting certain requests. This human intervention can happen through your Appsmith app. This page shows how to set up a human-in-the-loop approval workflow using Appsmith. 

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* You have basic knowledge of creating a webhook workflow in Appsmith. For more information, see [Tutorial - Create Webhook Workflow](/workflows/tutorials/create-webhook-workflow).
* You've set up a Form in your app that allows users to raise refund requests.

## Set up workflow

Follow these steps to set up a webhook workflow within your workspace. 

1. Create a new workflow in your workspace.
2. Give a meaningful and unique name to it. For example, _Refunds_.
4. Configure it as a webhook workflow.

## Configure datasource

To manage refunds and notify users of the outcome of their refund requests, follow the below steps:

### Send email

To notify the users of the outcome of their refund request, set up an SMTP datasource and connect it with your email service provider. Follow these steps to set up an SMTP datasource and create query for sending email:

1. In your workflow, you can use an existing SMTP datasource if available in your workspace to create queries. If not, create and configure an [SMTP](/connect-data/reference/using-smtp) datasource. Give it a meaningful and unique name. For example, _Send_Email_SMTP_

2. Create a query to send a refund approval email. Give it a meaningful name. For example, _Send\_approval_\_email_. You may choose to configure the email as below:
    - **From Email**: Add your SMTP Username
    - **To Email**: Add this as a parameter (`{{this.params.recipient}}`)
    - **Subject**: Set the Subject
    - **Body**: For example, add the below details:
        ```text
        Dear {{this.params.customer_name}},
        
        We are pleased to inform you that your refund request has been approved. 
        The refunded amount will be processed and credited to your account shortly.
        
        Thank you for your patience and understanding.

        Sincerely,
        The Customer Support Team
        ```
3. Create another query to send a refund rejection email. Give it a meaningful name. For example, _Send\_rejection_\_email_. You may choose to configure the email as below:
    - **From Email**: Add your SMTP Username
    - **To Email**: Add this as a parameter (`{{this.params.recipient}}`).
    - **Subject**: Set the subject
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

### Manage refund

To access refund requests, set up a datasource which hosts your refund data. Follow these steps to create, fetch, and update your refund requests in the workflow:

1. You can use an existing datasource that hosts refund data if available in your workspace to create queries. If not, add your datasource, and give it a meaningful and unique name. For example, _CustomerRefunds_. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

2. Add a select query to fetch the pending refund requests. For example, a table `customer_refunds` that stores the details of refund requests with a column `refund_status` that stores the status of the request like `Approved`, `Rejected` and `Pending` then you can fetch the pending requests as shown below:

    ```sql
    select * from public. "customer_refunds" where refund_status = 'Pending';
    ```
   Give this query a meaningful and unique name. For example, _fetchPendingReqs_.

3. Add another query to update the status of a given refund request. For example, to update the refund request status in the `customer_refunds` table:
    ```sql
    -- {{this.params.id}} is replaced by the parameter value (refund_id). 
    -- highlight-next-line
    Update public. "customer_refunds" set refund_status = {{this.params.status}} where refund_id = {{this.params.id}}
    ```
    Give it a meaningful and unique name. For example, _UpdateRefundStatus_.
4. Click the **Main** under _JS Objects_. In the JS code editor, delete the auto-generated code and add the below code to it. This code sets up a process to retrieve refund requests with a specified status (`Pending`). If the refund amount is less than 10 dollars, approve the refunds automatically, and notify the customer. For requests with a refund amount of 10 dollars or more, generate an approval request for a human to verify and manually approval or reject the request. Based on the user action process the resolution, either by approving or rejecting the request.

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
5. Click **Publish** in the top right corner to publish your latest changes.

## Display pending requests

:::info
 Bind the workflow `Trigger workflow` query whenever a refund request is raised by a user. This will ensure that the refund request can be validated for automatic approvals.
:::

To manually allow users to take action on the pending requests, display the requests in your Appsmith app as shown below:

1. To fetch the pending requests from workflow, create a workflow query and configure `Get requests` as shown below:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request type** - Select **Get requests**
    * **Request name** - Add `getPendingRefundRequests` to it. This is the same request name that you've added in your workflow Main JS object in `appsmith.workflows.assignRequest()` in the [Manage approval](#manage-approval) section.
    * **Request status** - Set it as `Pending`
    Give it a meaningful and unique name. For example, _fetchPendingRefundRequests_
2. Create a JS object, to execute the _manageRefundRequests_ query and transform the `metadta` attribute.
3. Drag a Table widget, give it a meaningful and unique name like _pendingRefunds_, and bind the _fetchPendingRefundRequests_ query to it.
4. Create a **Workflows Query**. Give it a meaningful and unique name. For example, _resolveRequest_.
4. Configure the workflow query as below:
    * **Workflow name** - The workflow name dropdown has all the available workflows in your workspace. Select _Refunds_
    * **Request Id** - `{{this.params.requestId}}`
    * **Resolution** - `{{this.params.status}}`
    * **Metadata** - `{{this.params.metadata}}`
5. Add a new function to capture the user action and apply the resolution to the request in the _manageRefundRequests_ JS object. This code captures the `Approve` or `Reject` action taken by user, and executes workflow query _resolveRefundRequests_ to apply resolution.
    ```javascript
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
    ```
6. Bind the `onClick` **Approve** and **Reject** buttons to the `resolveRefundRequest()` function and supply parameter as `Approved` and `Rejected` respectively.

Once you click Approve or Reject, the workflow executes, updates the refund status as `Approved` or `Rejected`, and intimates the user by sending an email.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.

