---
description: This page provides detailed steps to set up an approval Webhook workflow on Appsmith.
title: Create Approval Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Create Approval Workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

In an approval workflow, where human intervention is necessary for decision-making, you can use Appsmith workflows. This page shows how to set up an approval workflow requiring human decision-making using Appsmith workflows and the Appsmith app.

<ZoomImage
  src="/img/appsmith-workflow-overview.png" 
  alt="Human-in-the-Loop Approval Workflow"
  caption="Human Intervention in an Approval Workflow"
/> 


## Prerequisites

Before you start, make sure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a basic workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Configured your datasource that manages data in your workspace. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

## Create workflow

Follow these steps to set up a workflow within your workspace: 

1. Create a new workflow in your workspace to manage approvals. To understand the basics of creating a workflow, see the [Tutorial - Create Basic Workflow - Create Workflow](/workflows/tutorials/create-workflow#create-workflow) section.
2. In your workflow, click the **+** icon under _Queries/JS_ to create a query, and write code to fetch data needed for decision-making. For example, for processing order refunds, you may want to fetch the order details (_getOrderDetails_). The below query fetches the order details for the given `order_id` from the `orders` table.
    ```sql
    -- The order_id is a parameter, and replaced by the actual value passed by the application
    select * from public. "orders" where order_id = {{this.params.order_id}};
    ``` 
3. Create a query to capture and update the data based on actions taken by users. For example, you may want to update the order status once a user takes action to process a refund. The below query updates the order status in the `order` table to `Refund Processed`. In case of rejection, the order status remains unchanged.
    ```sql
    -- The order_id are parameters and replaced by the actual value passed by the application
    -- highlight-next-line
    Update public. "orders" set status = 'Refund Processed' where order_id = {{this.params.order_id}};
    ```
4. You can also add capabilities in workflow to notify your users of the outcome. For this, you need to configure an [SMTP datasource](/connect-data/reference/using-smtp) and write queries to send emails. For example, you can create two queries:
    *  To notify approval (_notifyUser_):
        * Parameterize the query to include:
            * Customer name (`{{this.params.customer_name}}`) who raised the request.
            * Customer email (`{{this.params.customer_email}}`) to send email notification. 
    * To notify rejection (_notifyRejectionToUser_):
        * Parameterize the query to include:
            * Customer name (`{{this.params.customer_name}}`) who raised the request.
            * Customer email (`{{this.params.customer_email}}`) to send email notification.
            * Rejection reason (`{{this.params.rejection_reason}}`).

## Create approval requests

Follow these steps to create approval requests that are awaiting user interaction: 

1. In your workflow, go to **Main** under _JS Objects_. The `executeWorkflow` function is the main function that handles the workflow processing and will have code related to creating approval requests, and managing approvals. For more information, see the [executeWorkflow](/workflows/reference/workflow-functions#executeworkflow) function. 
2. Write the code to create approval requests, and read the response and decision taken by the user. For example, in the below code, create the approval request for refund review and read the response of the decision taken by the user.
    * **STEP 1** - Use the `assignRequest` function to build an approval request. For more information, see the [assignRequest](/workflows/reference/workflow-functions#assign-request) function. 
    * **STEP 2** - Read the response generated which is available as part of the `response` object by reading the `resolution` property. The resolution property gives information about the action taken by the user.
    * **STEP 3** - Write the code logic to handle user action based on `resolution`. For example, in the refund processing, if the resolution value is `Approve`, process the refund and send an approval email to the user notifying the outcome as `Refund processed`. If the resolution value is `Reject`, send a rejection email to the user notifying the outcome as refund rejected.

    ```javascript
    export default {
        //highlight-next-line
        async executeWorkflow(order) {
            //The assignRequest function builds an approval request
            //highlight-next-line
            // STEP 1
            const response = await appsmith.workflows.assignRequest({
                requestName: "getPendingRefundRequests", 
                message: "Refund raised by " + order.customer_name+ " for amount " + order.amount, 
                requestToUsers: [order.approver_email], 
                resolutions: ["Approve", "Reject"],
                metadata: { "order": order } 
            });
             //highlight-next-line
            //STEP 2
            if (response && response.resolution === "Approve") {
                //Add logic for refund processing if any
                // When the user approves, execute the initiateRefund query 
                 //highlight-next-line
                //STEP 3
                await initiateRefund.run({
                    "id": order.order_id,
                    "status": 'Refund Processed'
                });
                // Send refund approval email to the customer 
                await notifyUser.run({
                    "customer_email": refund_req.customer_email ,
                    "customer_name": refund_req.customer_name

                });
            } else if (response && response.resolution === "Reject") {
                // Send refund rejection email to the customer 
                // Supply the rejection reason as a parameter
                await notifyRejectionToUser.run({
                        "customer_email": refund_req.customer_email ,
                        "customer_name": refund_req.customer_name,
                        "rejection_reason": refund_req.rejection_reason
                    });
            }
        }
    }          
    ```
    
3. Click the **Publish** button to publish the workflow.

## Handle approvals or rejections

Follow these steps to retrieve the approval requests, build an interface for user interaction, and resolve requests based on the action taken by the user:

1. In the Appsmith app, create a new query by clicking **Editor** > **Queries** > **New query/API**. Use the `Get requests` workflow query to read the approval requests created in the workflow. For example, to get approval requests for refund processing, create the `Get requests` (_getRefundReqs_). Configure it as shown below:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Get requests**.
    * **Request name** - Add `getPendingRefundRequests` to it. It's the same request name you added in your workflow _Main_ JS object in `appsmith.workflows.assignRequest()` in the _Step 1_ of [Create approval requests](#create-approval-requests) section.
2. Drag a Table widget and bind the approval request query to it. You may need to transform data based on your user interface requirements. In this case, use a JS object to execute the query, perform transformations, and bind the transformed data to the Table widget. For example, bind the **getRefundReqs** query. 
3. Create another workflow query by clicking **Editor** > **Queries** > **New query/API**. For example, to read the action taken by the user for the refund approval requests (_resolveReqs_) when a user clicks the **Approve** or **Reject** buttons in the Table widget. Configure it as shown below:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Resolve Requests**.
    * **Request Id** - Add `{{this.params.requestId}}` to it. Read and pass this value from the Table widget which is available as part of the `Get requests` query.
    * **Resolution** - Add `{{this.params.resolution}}` to it. Read and pass this value from the Table widget when the user clicks on the button to take action, and available as part of the `Get requests` query.
    * **Metadata** - Add any specific data you want to pass to the workflow in this field. You can use the metadata field to send data to your workflow for any specific processing needs. For example, you may want to pass a rejection reason when a user has rejected a refund request. The metadata details are available in the `response` object in your workflow. For more information, see [Payload](/workflows/reference/workflow-functions#payload-json) return type.
4. Bind the query to the `onClick` event of buttons. For example, for refund processing, bind the _resolveReqs_ query to the `onClick` event of **Approve** and **Reject** buttons, and pass appropriate parameters. 
5. Deploy your app to test approvals or rejections.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
