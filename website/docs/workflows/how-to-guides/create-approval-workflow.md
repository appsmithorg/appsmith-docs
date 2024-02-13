---
description: This page provides detailed steps to set up an approval Webhook workflow on Appsmith.
---
# Create Approval Workflow

In a human-in-the-loop approval workflow, such as for processing refund requests, you can automate approvals for specific types of requests based on your business guidelines. Additionally, you may require human verification before approving or rejecting certain requests. This human intervention can happen through your Appsmith app. This page shows how to set up a human-in-the-loop approval workflow using Appsmith. 

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* You have basic knowledge of creating a webhook workflow in Appsmith. For more information, see [Tutorial - Create Webhook Workflow](/workflows/tutorials/create-webhook-workflow).
* You have set up a Form in your app that allows users to raise refund requests.
* You have configured your Refund datasource and SMTP datasource in your workspace. If not, configure these datasources. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

## Setup workflow

Follow these steps to set up a webhook workflow within your workspace. 

1. Create a new workflow in your workspace.
2. Give a meaningful and unique name to it. For example, _Refunds_.
3. Configure it as a webhook workflow.
4. Create a query to **Fetch refund** details- To fetch the refund request for the given `order_id` and status as `Pending`. For example, a table `customer_refunds` that stores the details of refund requests. You can create a query as follows:
        ```sql
        -- The order_id is a parameter and replaced by actual value passed by the application
        select * from public. "customer_refunds" where order_id = {{this.params.order_id}} and refund_status = 'Pending';
        ``` 
        Give it a meaningful and unique name. For example, _fetchRefund_.
5. Create a query to **Update refund** - To update the status of refund either by automatic updates or based on user action. For example, to update the refund request status in the `customer_refunds` table:
    ```sql
    -- The refund_id and status are parameters and replaced by actual value passed by the application
    -- highlight-next-line
    Update public. "customer_refunds" set refund_status = {{this.params.status}} where refund_id = {{this.params.refund_id}};
    ```
    Give it a meaningful and unique name. For example, _updateRefundStatus_.
6. Create queries to **Send email** - To intimate users about the outcome of their refund request. For example, you can create two queries - one for intimating approval and other to intimate rejection. You can parameterize the query to read customer name who raised the request. Additionally, in the rejection query, you can add a parameter for rejection reason to the body of the email. 
    ```javascript title="Rejection email >> Body"
    //highlight-next-line
    Dear {{this.params.customer_name}},

    We regret to inform you that your refund request has been denied. 
    After careful consideration, it was determined that the request:
    
    //highlight-next-line
    Rejection reason:  {{this.params.rejection_reason}}
    
    If you have any questions or concerns, please contact our customer support team.
    
    Thank you for your understanding.
    
    Sincerely,
    The Customer Support Team
    ```

7. Click the **Publish** button to publish the workflow.

## Set up automatic refunds
When a user raises a refund request in your application, you may have some business rules that allow automatic refunds. You can achieve this in the workflow. For example, you automatically want to approve the refund requests where the refund amount is less than 10 dollars. To handle this scenario, you can add below code to your workflow. 

1. Click the **Main** under _JS Objects_. In the JS code editor, delete the auto-generated code and add the below code to it. This code sets up a process to retrieve the refund request with the given `order_id`. If the refund amount is less than 10 dollars, update the refund status as approved, and notify the customer by calling the (_sendRefundApprovalEmail_) query. 

    ```javascript
    export default {
        async executeWorkflow(data) {
            //highlight-next-line
            //read the order_id
            const { order_id } = data;

            if (order_id) {
                // Execute a query to fetch the refund request based on the provided order_id
                const refund_req = await fetchRefund.run({ "order_id": order_id });

                if(refund_req) {
                    // Check if refund_amount is less than 10 dollars
                     if (refund_req.refund_amount < 10) {
                        // Update the refund status to 'Approved'
                        //highlight-next-line
                        await updateRefundStatus.run(
                            { 
                                "id": req.refund_id, 
                                "status": 'Approved' 
                            }).then(async (response) => {
                            // Send refund approval email to the customer 
                            // sendRefundApprovalEmail is the query name 
                            //configured to send approval email
                            //highlight-next-line
                            await sendRefundApprovalEmail.run({
                                "recipient": req.customer_email,
                                "customer_name": req.customer_name
                            });
                        });
                    } 
                }
            }
        }
    }                          
    ```
2. Click the **Publish** button in the top right corner to publish your latest changes.
3. Trigger the workflow from your application and pass the `order_id` as a parameter. For more information, see how to trigger workflow explained in the [Send email using Postman](/workflows/tutorials/create-webhook-workflow#send-email-using-postman) section.

## Create pending refund requests

When you want a user to review and take action on the refund requests, create pending requests. Follow these steps to create pending refund requests:

1. Click the **Main** under _JS Objects_, and add the below code. In the below code, when the refund amount is of 10 dollars or more, generate a pending request using `assignRequest` workflow function for a human to verify and manually approval or reject the request. For more information, see the [assignRequest](/workflows/reference/workflow-functions#assign-request) function.
    ```javascript
    export default {
        async executeWorkflow(data) {
            //read the order_id
            const { order_id } = data;

            if (order_id) {
                // Execute a query to fetch the refund request based on the provided order_id
                const refund_req = await fetchRefund.run({ "order_id": order_id });

                if(refund_req) {
                    // Check if refund_amount is less than 10 dollars
                        if (refund_req.refund_amount < 10) {
                        // Update the refund status to 'Approved'
                        await updateRefundStatus.run(
                            { 
                                "id": req.refund_id, 
                                "status": 'Approved' 
                            }).then(async (response) => {
                            // Send refund approval email to the customer 
                            // sendRefundApprovalEmail is the query name 
                            //configured to send approval email
                            await sendRefundApprovalEmail.run({
                                "recipient": req.customer_email,
                                "customer_name": req.customer_name
                            });
                        });
                    } 
                } 
                //add this code to generate pending requests start
                //highlight-next-line
                else {
                    await appsmith.workflows.assignRequest({
                        requestName: "getPendingRefundRequests", 
                        message: refundReq. customer_name + " raised a refund of " + refundReq.refund_amount + for " order id " + refundReq.order_id, 
                        requestToUsers: [refundReq.approver_email], 
                        resolutions: ["Approve", "Reject"],
                        metadata: { "req": refund_req } 
                    });
                //highlight-next-line
                } //generate pending requests end
            }
        }
    }  
    ```
ß
## Display pending requests

- steps to create get pending request workflow query
- display the requests in table

## Capture user action

- steps to create a resolution workflow query
- bind user action to the resolution query
- show how to capture reject reason in case of rejection
- pass rejection reason to the workflow
- send email if this reason

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
