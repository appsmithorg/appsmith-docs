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

Automating processes within your application can improve efficiency and reduce manual workload. This page shows how to set up automatic processing using Appsmith workflows.


## Prerequisites

Before you begin, ensure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).


Follow these steps to configure the workflow to automatically process requests based on your business requirements:

1. Go to your workflow and edit the **Main** JS Object available under _JS Objects_.

2. Configure SQL queries or APIs for your datasources to alter data based on automatic processing.

3. Replace the auto-generated code in the **Main** JS Object with your custom logic for automatic processing. For example, the below snippet demonstrates how to process orders based on specific criteria, such as order amount. When the order value is less than `$10`, the system updates the order record, initiates a refund, and notifies users via email about the outcome.

    ```javascript
    export default {
      async executeWorkflow(order) {
        if (order && order.order_id) {
          console.log('Processing order: ' + order.order_id);
          // Fetch order details based on the given order ID
          const orderDetails = await getOrderDetails.run({ "order_id":  order.order_id });
          // Check if the order meets the processing condition
          if (orderDetails && orderDetails.amount < 10) {
            // Add logic for processing if any
            // initiates a refund
            await initiateRefund.run({
              "order_id": order.order_id,
              "status": 'Refund Processed'
            });
            // Notifies the user about the processing
            await notifyUser.run({
              "user_email": orderDetails.customer_email ,
              "user_name": orderDetails.customer_name
            });
          }
        }
      }
    }                              
    ```

4. Trigger the workflow to automatically process requests. You can trigger the workflow in one of the following ways:
    * If triggering the automated processing from within the Appsmith app, create a workflow query using **Trigger Workflow** as a request type, pass the parameters needed for processing, and bind it to the action from where the triggering happens. For more information, see [Trigger workflow from Appsmith app](/workflows/how-to-guides/trigger-workflow-from-appsmith-app).
    * If triggering the automated processing from an external application, configure the workflow as a webhook trigger, pass the parameters in the body for processing, and use the workflow URL to trigger the workflow. For more information about triggering workflow from an external app, see [Trigger workflow using Postman](/workflows/tutorials/create-workflow#send-email-using-postman).
6. Click the **Publish** button in the top right corner to apply your changes.
7. Execute the workflow whenever a relevant event occurs. For example, a user submits a new request.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
