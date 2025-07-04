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

* A self-hosted Appsmith instance with a [business subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions if you need to set up your instance. You can also get a trial license by signing up on [customer.appsmith.com](https://customer.appsmith.com/).
* Basic knowledge of creating a basic workflow in Appsmith. If you're new to Workflows, follow the [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow) to learn the workflow basics.
* Basic understanding of writing queries in workflows. For more information, see the [Write Query to Send Email](/workflows/tutorials/create-workflow#write-query-to-send-email) section.
* PostgreSQL must be configured and accessible. Appsmith workflows require PostgreSQL version `13` to `16`. If you're using ECS or Kubernetes, configure an external PostgreSQL database (e.g., AWS RDS). For setup instructions, refer to [Configure External PostgreSQL](/getting-started/setup/instance-configuration/external-postgresql-rds). 

## Configure automated processing

1. Open your workflow and edit the **Main** JS Object under _JS Objects_.

2. Set up SQL queries or APIs to modify data based on automated processing requirements.

3. Replace the code in the **Main** JS Object with custom logic for automatic processing. For instance, the following snippet processes orders based on criteria like order value. If it's below $10, the workflow updates the record, processes a refund, and sends a notification email.

    ```javascript
    export default {
      async executeWorkflow(order) {
        // add custom logic to verify required parameters
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

4. Trigger the workflow to process requests automatically. You can do this in one of the following ways:
    * **From within an Appsmith app -** Create a workflow query with **Trigger Workflow** as the request type. Pass the required parameters for processing, and bind it to the action from where the triggering happens. For more information on triggering a workflow, see [Trigger Workflow from Appsmith App](/workflows/how-to-guides/trigger-workflow-from-appsmith-app) guide.
    * **From an external system -** [Configure the webhook trigger](/workflows/tutorials/create-workflow#enable-webhook-trigger) in the workflow. Call the webhook through a POST request and pass the required parameters in the request body. For more information, see [Trigger Workflow using REST Client](/workflows/tutorials/create-workflow#test-workflow).

6. Click **Deploy** in the top right to apply your changes.
7. Execute the workflow when relevant events occur, like a new order request.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

* [Debug Workflow](/workflows/how-to-guides/debug-workflow) - Learn to debug workflows as you build them.
* [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows) - Learn how to pass parameters to workflows from the Appsmith app or external systems.
* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the variety of functions available for your workflows.