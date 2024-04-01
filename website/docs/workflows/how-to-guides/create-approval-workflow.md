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

In an approval workflow where human intervention is necessary for decision-making, you can use Appsmith workflows. This page shows how to set up an approval workflow requiring human decision-making using Appsmith workflows and the Appsmith app.

<ZoomImage
  src="/img/appsmith-workflow-overview.png" 
  alt="Human-in-the-Loop Approval Workflow"
  caption="Human-in-the-Loop Approval Workflow"
/> 


## Prerequisites

Before you start, make sure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a basic workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Configured your datasource that manages your data and SMTP datasource (to notify users) in your workspace. If not, configure these datasources. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

## Create workflow

Follow these steps to set up a workflow within your workspace. 

1. Create a new workflow in your workspace to manage approvals.
2. In your workflow, create a query to fetch data needed for decision-making. For example, in case of processing order refund, you may want to fetch the order details (_getOrderDetails_). The below query fetches the order details for the given `order_id` from the `orders` table.
    ```sql
    -- The order_id is a parameter, and replaced by actual value passed by the application
    select * from public. "orders" where order_id = {{this.params.order_id}};
    ``` 
3. Create a query to capture and update the data based on actions taken by users. For example, you may want to update the order status once a user takes action to process refund. The below query updates the order status in the `order` table to `Refund Processed`. In case of rejection, the order status remains unchanged.
    ```sql
    -- The order_id are parameters and replaced by actual value passed by the application
    -- highlight-next-line
    Update public. "orders" set status = 'Refund Processed' where order_id = {{this.params.order_id}};
    ```
4. When you want to notify your users of the outcome, you can create queries to send emails. For example, you can create two queries:
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

Follow these steps to create approval requests which are awaiting user interaction: 

1. In your workflow, go to **Main** under _JS Objects_. The `executeWorkflow` function is the main controlling function that handles the workflow processing. For more information, see the [executeWorkflow](/workflows/reference/workflow-functions#executeworkflow) function.
    ```javascript
    export default {
        //highlight-next-line
        async executeWorkflow(order) {
            //The assignRequest function builds an approval request
            // STEP 1
            //highlight-next-line
            const response = await appsmith.workflows.assignRequest({
                requestName: "getPendingRefundRequests", 
                message: "Refund raised by " + order.customer_name+ " for amount " + order.amount, 
                requestToUsers: [order.approver_email], 
                resolutions: ["Approve", "Reject"],
                metadata: { "order": order } 
            });
            //STEP 2
            //highlight-next-line
            if (response && response.resolution === "Approve") {
                //Add logic for refund processing if any
                // When user approves, execute the initiateRefund query 
                await initiateRefund.run({
                    "id": order.order_id,
                    "status": 'Refund Processed'
                });
                // Send refund approval email to the customer 
                await notifyUser.run({
                    "customer_email": refund_req.customer_email ,
                    "customer_name": refund_req.customer_name

                });
            } else if (resolution && response.resolution === "Reject") {
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
    In the above code:
    * **STEP 1** - Use the `assignRequest` function to build an approval request. For more information, see the [assignRequest](/workflows/reference/workflow-functions#assign-request) function. 
    * **STEP 2** - Read the response generated when a user takes action from the `response` object by reading `resolution` property. Write the code logic to handle user action based on `resolution`. For example, in the refund processing, if the resolution value is `Approve`, process the refund and send an approval email to the user notifying the outcome as refund processed. If the resolution value is `Reject`, send a rejection email to the user notifying the outcome as refund rejected.
2. Click the **Publish** button to publish the workflow.

## Handle approvals or rejections

Follow these steps to retrieve the approval requests, build an interface for user interaction, and resolve requests based on user's action:

1. In your app, create a new query by clicking **Editor** > **Queries** > **New query/API**. Use the `Get requests` workflow query to read the approval requests created in the workflow. For example, to get approval requests for refund processing, create the `Get requests` (_getRefundReqs_). Configure it as shown below:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Get requests**.
    * **Request name** - Add `getPendingRefundRequests` to it. It's the same request name you added in your workflow _Main_ JS object in `appsmith.workflows.assignRequest()` in the step 1 of [Create approval requests](#create-approval-requests) section.
2. Drag a Table widget and bind the **getRefundReqs** query to it. You may need to transform data based on your user interface requirements. In which case, use a JS object to execute the query, perform transformations, and bind the transformed data to the Table widget.
3. Create another workflow query by clicking **Editor** > **Queries** > **New query/API**. For example, to read the action taken by user for the refund approval requests (_resolveReqs_) when a user clicks **Approve** or **Reject** buttons in the Table widget. Configure it as shown below:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Resolve Requests**.
    * **Request Id** - Add `{{this.params.requestId}}` to it.
    * **Resolution** - Add `{{this.params.resolution}}` to it.
    * **Metadata** - Add `{"rejectionReason" : {{this.params.rejectionReason}}}` to it.
4. Bind the query (_resolveReqs_) to the `onClick` event of **Approve** and **Reject** buttons, and pass appropriate parameters. 
5. Deploy your app to test approvals or rejections.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.

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
  caption="Human-in-the-Loop Approval Workflow"
/> 


## Prerequisites

Before you start, make sure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a basic workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Configured your datasource that manages data in your workspace. For more information on configuring datasource, see the available [Datasources](/connect-data/reference) in Appsmith.

## Create workflow

Follow these steps to set up a workflow within your workspace: 

1. Create a new workflow in your workspace to manage approvals.
2. In your workflow, create a query to fetch data needed for decision-making. For example, for processing order refunds, you may want to fetch the order details (_getOrderDetails_). The below query fetches the order details for the given `order_id` from the `orders` table.
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
4. You can also add capabilities in workflow to notify your users of the outcome. For which, you need to configure an [SMTP datasource](/connect-data/reference/using-smtp) and write queries to send emails. For example, you can create two queries:
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

1. In your workflow, go to **Main** under _JS Objects_. The `executeWorkflow` function is the main controlling function that handles the workflow processing. For more information, see the [executeWorkflow](/workflows/reference/workflow-functions#executeworkflow) function.

    ```javascript
    export default {
        //highlight-next-line
        async executeWorkflow(order) {
            //The assignRequest function builds an approval request
            // STEP 1
            //highlight-next-line
            const response = await appsmith.workflows.assignRequest({
                requestName: "getPendingRefundRequests", 
                message: "Refund raised by " + order.customer_name+ " for amount " + order.amount, 
                requestToUsers: [order.approver_email], 
                resolutions: ["Approve", "Reject"],
                metadata: { "order": order } 
            });
            //STEP 2
            //highlight-next-line
            if (response && response.resolution === "Approve") {
                //STEP 3
                //Add logic for refund processing if any
                // When user approves, execute the initiateRefund query 
                await initiateRefund.run({
                    "id": order.order_id,
                    "status": 'Refund Processed'
                });
                // Send refund approval email to the customer 
                await notifyUser.run({
                    "customer_email": refund_req.customer_email ,
                    "customer_name": refund_req.customer_name

                });
            } else if (resolution && response.resolution === "Reject") {
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
    In the above code:
    * **STEP 1** - Use the `assignRequest` function to build an approval request. For more information, see the [assignRequest](/workflows/reference/workflow-functions#assign-request) function. 
    * **STEP 2** - Read the response generated which is available as part of the `response` object by reading the `resolution` property. The resolution property gives the information about the action taken by user. * * * **STEP 3** - Write the code logic to handle user action based on `resolution`. For example, in the refund processing, if the resolution value is `Approve`, process the refund and send an approval email to the user notifying the outcome as refund processed. If the resolution value is `Reject`, send a rejection email to the user notifying the outcome as refund rejected.
2. Click the **Publish** button to publish the workflow.

## Handle approvals or rejections

Follow these steps to retrieve the approval requests, build an interface for user interaction, and resolve requests based on user's action:

1. In Appsmith app, create a new query by clicking **Editor** > **Queries** > **New query/API**. Use the `Get requests` workflow query to read the approval requests created in the workflow. For example, to get approval requests for refund processing, create the `Get requests` (_getRefundReqs_). Configure it as shown below:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Get requests**.
    * **Request name** - Add `getPendingRefundRequests` to it. It's the same request name you added in your workflow _Main_ JS object in `appsmith.workflows.assignRequest()` in the step 1 of [Create approval requests](#create-approval-requests) section.
2. Drag a Table widget and bind the **getRefundReqs** query to it. You may need to transform data based on your user interface requirements. In which case, use a JS object to execute the query, perform transformations, and bind the transformed data to the Table widget.
3. Create another workflow query by clicking **Editor** > **Queries** > **New query/API**. For example, to read the action taken by user for the refund approval requests (_resolveReqs_) when a user clicks **Approve** or **Reject** buttons in the Table widget. Configure it as shown below:
    * **Workflow name** - Select **Refunds**.
    * **Request type** - Select **Resolve Requests**.
    * **Request Id** - Add `{{this.params.requestId}}` to it.
    * **Resolution** - Add `{{this.params.resolution}}` to it.
    * **Metadata** - Add `{"rejectionReason" : {{this.params.rejectionReason}}}` to it.
4. Bind the query (_resolveReqs_) to the `onClick` event of **Approve** and **Reject** buttons, and pass appropriate parameters. 
5. Deploy your app to test approvals or rejections.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
