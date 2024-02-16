---
description: This page provides detailed steps to set up an approval Webhook workflow on Appsmith.
---
# Create Approval Workflow

In a human-in-the-loop approval workflow, such as for processing refund requests, you can use workflows in Appsmith. The human intervention can happen through your Appsmith app. This page shows how to set up a human-in-the-loop approval workflow using Appsmith. 

## Prerequisites

Before you start, make sure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a webhook workflow in Appsmith. For more information, see [Tutorial - Create Webhook Workflow](/workflows/tutorials/create-webhook-workflow).
* Configured your datasource that manages your data, and SMTP datasource (to notify users) in your workspace. If not, configure these datasources. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

## Create workflow

Follow these steps to set up a webhook workflow within your workspace. 

1. Create a new workflow (_Refunds_) in your workspace.
2. Configure it as a webhook workflow.
3. Create a query to fetch order details (_getOrderDetails_) details. For example, the below query fetches the order details for the given `order_id` from the `orders` table.
    ```sql
    -- The order_id is a parameter and replaced by actual value passed by the application
    select * from public. "orders" where order_id = {{this.params.order_id}};
    ``` 
4. Create a query to update the order status, once a refund is processed. For example, once a refund is approved, update the order status in the `order` table to `Refund Processed`. In case of rejection, the order status remains unchanged.
    ```sql
    -- The order_id are parameters and replaced by actual value passed by the application
    -- highlight-next-line
    Update public. "orders" set status = 'Refund Processed' where order_id = {{this.params.order_id}};
    ```
5. Create queries to send emails to inform users of the outcome. For example, you can create two queries:
    *  To notify approval (_notifyUser_):
        * Parameterize the query to include:
            * Customer name (`{{this.params.customer_name}}`) who raised the request.
            * Customer email (`{{this.params.customer_email}}`) to send email notification. 
    * To notify rejection (_notifyRejectionToUser_):
        * Parameterize the query to include:
            * Customer name (`{{this.params.customer_name}}`) who raised the request.
            * Customer email (`{{this.params.customer_email}}`) to send email notification.
            * Rejection reason (`{{this.params.rejection_reason}}`). 
    * Pass these parameters from your app to the workflow.

6. Click the **Publish** button to publish the workflow.

## Set up automatic refunds

When a user submits a refund request through your application, you may want to process automatic refunds based on predefined business rules. For example, you might automatically approve refunds where the refund amount is less than $10. Here's how you can handle this scenario:

1. In your workflow, go to **Main** under _JS Objects_. In the JS code editor, replace the auto-generated code with the following snippet. This code fetches the order details with the given `order_id`. If the order value is less than $10, it initiates a refund and notifies the customer via email.

    ```javascript
    export default {
    async executeWorkflow(order) {
            if (order && order.order_id) {
                console.log('data' + order.order_id);
                // Fetch refund details based on the given refund detail
                const order = await getOrderDetails.run({ "order_id":  order.order_id });
                // Iterate through requests 
                if(order){
                    // Verify the order value
                    if (order.amount < 10) {
                        // Add logic for refund processing if any
                        // Initiate refund for amounts less than $10 
                        await initiateRefund.run({
                            "id": order.order_id,
                            "status": 'Refund Processed'
                        });
                        // Send refund approval email to the customer 
                        await notifyUser.run({
                            "customer_email": refund_req.customer_email ,
                            "customer_name": refund_req.customer_name
                        });
                    }
                }
            }
        }
    }                              
    ```
2. Click the **Publish** button in the top right corner to apply your changes.
3. Execute the workflow whenever a user submits a new refund request.

## Handle approvals or rejections

When managing approvals or rejections, create refund requests and track user actions for further processing. Follow these steps:

1. In your workflow, go to **Main** under _JS Objects_, and add the following function. This function generates a pending request using the `assignRequest` workflow function. For more information, see the [assignRequest](/workflows/reference/workflow-functions#assign-request) function. 
    ```javascript
    // manage refunds for amounts equal to or more than $10 
    async createandManageRequests(order) {
        const resolution = await appsmith.workflows.assignRequest({
            requestName: "getPendingRefundRequests", 
            message: "Refund raised by " + order.customer_name+ " for amount " + order.amount, 
            requestToUsers: [order.approver_email], 
            resolutions: ["Approve", "Reject"],
            metadata: { "order": order } 
        });

        if (resolution && resolution === "Approve") {
            //Add logic for refund processing if any
            // Initiate refund when user approves
            await initiateRefund.run({
                "id": order.order_id,
                "status": 'Refund Processed'
            });
            // Send refund approval email to the customer 
            await notifyUser.run({
                "customer_email": refund_req.customer_email ,
                "customer_name": refund_req.customer_name

            });
        } else if (resolution && resolution === "Reject") {
            // Send refund rejection email to the customer 
            // Supply the rejection reason as a parameter
            await notifyRejectionToUser.run({
                    "customer_email": refund_req.customer_email ,
                    "customer_name": refund_req.customer_name,
                    "rejection_reason": refund_req.rejection_reason
                });
        }
    }          
    ```
2. Call the above function when the order value is equal to or more than $10.
3. In your app, create a workflow query (_getRefundReqs_) to fetch these requests. Configure it as follows:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Get requests**.
    * **Request name** - Add `getPendingRefundRequests` to it. This is the same request name that you've added in your workflow _Main_ JS object in `appsmith.workflows.assignRequest()` in the step 1 of this section.
4. Drag a Table widget, and bind the **getRefundReqs** query to it. You may need to transform data based on your user interface requirements. In which case, use a JS object to execute the query, perform transformations, and bind the transformed data to the Table widget.
5. Create another workflow query (_resolveReqs_) to capture **Approve** or **Reject** actions:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Resolve Requests**.
    * **Request Id** - Add `{{this.params.requestId}}` to it.
    * **Resolution** - Add `{{this.params.resolution}}` to it.
    * **Metadata** - Add `{"rejectionReason" : {{this.params.rejectionReason}}}` to it.
6. Bind the query (_resolveReqs_) to the `onClick` event of **Approve** and **Reject** buttons, and pass appropriate parameters. 
7. Deploy your app to test the workflow.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
