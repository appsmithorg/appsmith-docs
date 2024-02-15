---
description: This page provides detailed steps to set up an approval Webhook workflow on Appsmith.
---
# Create Refund Approval Workflow

In a human-in-the-loop refund approval workflow, such as for processing refund requests, you can automate approvals for specific types of requests based on your business guidelines. Additionally, you may require human verification before approving or rejecting certain requests. This human intervention can happen through your Appsmith app. This page shows how to set up a human-in-the-loop approval workflow using Appsmith. 

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* You have basic knowledge of creating a webhook workflow in Appsmith. For more information, see [Tutorial - Create Webhook Workflow](/workflows/tutorials/create-webhook-workflow).
* You have set up a Form in your app that allows users to raise refund requests.
* You have configured your Refund datasource and SMTP datasource in your workspace. If not, configure these datasources. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

## Setup workflow

Follow these steps to set up a webhook workflow within your workspace. 

1. Create a new workflow (_Refunds_) in your workspace.
2. Configure it as a webhook workflow.
3. Create a query to Fetch refund (_getRefundDetails_) details. For example, the below query fetches pending refund requests for the given `order-id` from the `customer_refunds`table.
        ```sql
        -- The order_id is a parameter and replaced by actual value passed by the application
        select * from public. "customer_refunds" where order_id = {{this.params.order_id}} and refund_status = 'Pending';
        ``` 
4. Create a query to update the refund status (_initiateRefund_). For example, once a refund is approved or rejected, you will have to update the refund status in the `customer_refunds` table:
    ```sql
    -- The refund_id and status are parameters and replaced by actual value passed by the application
    -- highlight-next-line
    Update public. "customer_refunds" set refund_status = {{this.params.status}} where refund_id = {{this.params.refund_id}};
    ```
5. Create queries to send emails for intimating the users of the outcome. For example, you can create two queries - one for intimating approval and other to intimate rejection. You can parameterize the query to read customer name by using `{{this.params.customer_name}}` who raised the request. Additionally, in the rejection query, you can also add a parameter for the rejection reason by using `{{this.params.rejection_reason}}`. You can pass these parameters from your app to the workflow.

6. Click the **Publish** button to publish the workflow.

## Set up automatic refunds
When a user raises a refund request in your application, you may have some business rules that allow automatic refunds. You can achieve this in the workflow. For example, you automatically want to approve the refund requests where the refund amount is less than 10 dollars. To handle this scenario, you can add below code to your workflow. 

1. Click the **Main** under _JS Objects_. In the JS code editor, delete the auto-generated code and add the below code to it. This code sets up a process to retrieve the refund request with the given `order_id`. If the refund amount is less than 10 dollars, initiate a refund, and notify the customer through an email. 

    ```javascript
    export default {
       async executeWorkflow(order) {
            if (order && order.order_id) {
                console.log('data' + order.order_id);

                //fetch the refund details based on the given refund detail
                const refund_reqs = await getRefundDetails.run({ "order_id":  order.order_id });
                // get refund reqs
                if(refund_reqs){
                    //iterate through reqs 
                    refund_reqs.forEach(async (refund_req) => {
                        console.log(refund_req);
                        //Verify the refund amount
                        if (refund_req.refund_amount < 10) {
                            // for refund amount less than 10 dollars 
                            //initiate refund.
                            await initiateRefund.run({
                                "id": refund_req.refund_id,
                                "status": 'Approved'
                            }).then(async() => {
                                // Send refund approval email to the customer 
                                // sendRefundApprovalEmail is the query name 
                                //configured to send approval email
                                await notifyUser.run({
                                    "customer_email": refund_req.customer_email ,
                                    "customer_name": refund_req.customer_name
                                });
                            });
                        }
                    });
                }
            }
	    }
	}                       
    ```
2. Click the **Publish** button in the top right corner to publish your latest changes.
3. Execute the workflow whenever a user raises a new refund request.

## Handle approvals or rejections

When you want a user to review and take action on the refund requests, you will create pending requests. Follow these steps to create pending refund requests:

1. In your workflow, click the **Main** under _JS Objects_, and add the below function to it. In the below code, you are generating a pending request using `assignRequest` workflow function. For more information, see the [assignRequest](/workflows/reference/workflow-functions#assign-request) function. 
    ```javascript
    async createandManageRequests(refundReq) {
        const resolution = await appsmith.workflows.assignRequest({
            requestName: "getPendingRefundRequests", 
            message: "Refund raised by " + refundReq.customer_name+ " for amount " + refundReq.refund_amount, 
            requestToUsers: [refundReq.approver_email], 
            resolutions: ["Approve", "Reject"],
            metadata: { "req": refund_req } 
        });

        if (resolution && resolution === "Approve") {
            // for refund amount less than 10 dollars 
            //initiate refund.
            await initiateRefund.run({
                "id": refund_req.refund_id,
                "status": 'Approved'
            }).then(async() => {
                // Send refund approval email to the customer 
                // sendRefundApprovalEmail is the query name 
                //configured to send approval email
                await notifyUser.run({
                    "customer_email": refund_req.customer_email ,
                    "customer_name": refund_req.customer_name
                });
            });
        } else if (resolution && resolution === "Reject") {
            // Send refund rejection email to the customer 
            // supply the rejection reason as parameter
            await notifyRejectionToUser.run({
                    "customer_email": refund_req.customer_email ,
                    "customer_name": refund_req.customer_name,
                    "rejection_reason": refund_req.rejection_reason
                });
        }

    } 
                
    ```
2. Call the above function when the refund amount is equal or more than 10 dollars. 
3. In your app, to fetch these requests, create a workflow query (_getRefunds_) and configure it as follows:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Get requests**.
    * **Request name** - Add `getPendingRefundRequests` to it. This is the same request name that you've added in your workflow _Main_ JS object in `appsmith.workflows.assignRequest()` in the above step.
4. Drag a Table widget, and bind the **getRefunds** query to it. You may have to transform data based on the type of user interface you are building. In which case, you can use JS object to execute the query, do transformations and bind the transformed data to the Table widget.
5. Create another workflow query (_resolveReqs_) to capture **Approve** or **Reject** action:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Resolve Requests**.
    * **Request Id** - Add `{{this.params.requestId}}` to it.
    * **Resolution** - Add `{{this.params.resolution}}` to it.
    * **Metadata** - Add `{"rejectionReason" : {{this.params.rejectionReason}}}` to it.
6. Bind the query (_resolveReqs_) to the `onClick` event of **Approve** and **Reject** buttons, and pass appropriate parameters. 
7. Deploy your app, and approve or reject the requests to test the workflow.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
