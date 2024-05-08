---
description: This page provides detailed steps to set up an automatic processing using Appsmith workflows.
title: Set Up Automatic Processing
hide_title: true
---

 <!-- vale off -->

<div className="tag-wrapper">
 <h1>Set Up Automatic Processing</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Automating processes within your business can boost efficiency and reduce manual workloads. This page shows you how to set up automated processing using Appsmith Workflows.

## Prerequisites

Before you begin, make sure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for instructions.
* Basic knowledge of creating workflows in Appsmith. See [Create Workflow Tutorial](/workflows/tutorials/create-workflow#create-workflow) for guidance.
* Basic understanding of writing queries in workflows. Check out [Write Query to Send Email](/workflows/tutorials/create-workflow#write-query-to-send-email) for details.

## Steps to Configure Automated Processing:

1. Open your workflow and edit the **Main** JS Object under _JS Objects_.

2. Set up SQL queries or APIs to modify data based on automated processing requirements.

3. Replace the code in the **Main** JS Object with custom logic for automatic processing. For instance, the following snippet processes orders based on criteria like order value. If it's below $10, the workflow updates the record, processes a refund, and sends a notification email.

    ```javascript
    export default {
      async executeWorkflow(order) {
        if (order && order.order_id) {
          console.log('Processing order: ' + order.order_id);
          // Fetch order details using the provided order ID
          const orderDetails = await getOrderDetails.run({ "order_id": order.order_id });
          // Check if the order meets processing criteria
          if (orderDetails && orderDetails.amount < 10) {
            // Process refund
            await initiateRefund.run({
              "order_id": order.order_id,
              "status": 'Refund Processed'
            });
            // Notify the customer
            await notifyUser.run({
              "user_email": orderDetails.customer_email,
              "user_name": orderDetails.customer_name
            });
          }
        }
      }
    }
    ```

4. Trigger the workflow to automatically process requests. You can do this in two ways:
    * **Within an Appsmith app:** Create a workflow query with **Trigger Workflow** as the request type. Pass in the parameters for processing, and link it to the triggering action. Learn more in [Trigger Workflow from Appsmith App](/workflows/how-to-guides/trigger-workflow-from-appsmith-app).
    * **From an external system:** Configure the webhook trigger in the workflow, Call the webhook through a POST request and pass the required parameters in the request body. Learn more in [Trigger Workflow using Postman](/workflows/tutorials/create-workflow#send-email-using-postman).

6. Click **Deploy** in the top right to apply your changes.
7. Execute the workflow when relevant events occur, like a new order request.

## Troubleshooting

For assistance, contact support via the chat widget at the bottom right.
