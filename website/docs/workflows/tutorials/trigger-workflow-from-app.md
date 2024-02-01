---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Lesson 2 - Trigger Workflow from your App

In this lesson, you will create an approval workflow designed to update refund requests according to user actions, either approval or rejection, send an email notification to customer for notifying the outcome, and triggered from your Appsmith app.

By the end of this lesson, you will learn how to:

* Read parameters from the app and pass them to the workflow
* Write workflow logic to read parameters, pass them to queries for approval, and send an email
* Execute the workflow from the app

## Prerequisites
* Ensure you have completed [Lesson 1- Set up Webhook Workflow](/workflows/tutorials/set-up-webhook-workflow) and have a workflow configured in your workspace.
* Ensure you are aware of basic knowledge of creating datasource, queries and displaying data on Appsmith. For more information, see [Tutorial - Basics](/getting-started/tutorials/start-building).

## Bring approval data into app

Follow these steps to display pending refund requests in the app:

1. In your application, go to the sidebar and click the **Data** tab. Click the **+** icon next to _Datasources in your workspace_ to add a new [PostgreSQL](/connect-data/reference/querying-postgres) datasource. Give it a meaningful and unique name, such as _CustomerRefunds_.

2. Enter the following details in the PostgreSQL connection parameter fields:
    * **Host Address**: `mockdb.internal.appsmith.com`
    * **Port**: `5432`
    * **Database Name**: `customer_refunds_approval`
    * **Username**: `customers_refunds`
    * **Password**: `new-customer-refunds-db-pass`

3. Test and save the datasource configuration.

4. Add a new query for fetching pending approval requests from the _CustomerRefunds_ datasource. Give it a meaningful and unique name, for example, _Select\_pending\_refund\_reqs_ and add the SQL code below to it:
    ```sql
    select * from public. "customer_refund_approval" where approval_status = 'Pending';
    ```

5. Click the **Run** button in the top right corner to execute and verify the query result.

6. Click the _UI_ tab on the sidebar, drag a **Table** widget onto the canvas, and connect the query (_Select\_pending\_refund\_reqs_) to display records. Rename the Table widget from _Table1_ to _tbl\_refund\_requests_.

7. Add two new columns to the Table widget.

8. Click the gear icon ⚙️ next to the new columns. Rename them to **Approve** and **Reject** and set them up as buttons.

9. Click the _Queries_ tab on the sidebar, click the **TriggerApproval** query and replace `{}` with `{{this.params}}` in the **Trigger data** property.

10. Click the _JS_ tab on the sidebar and create a new JS object, and rename it to _JS\_Approve\_Or\_Reject\_Refund_. Remove the auto-generated code and add the below code to it:
    ```javascript
    export default {
        async getApproveOrRejectAction(action) {
            if (action) {
                try {
                     // This JS Object calls the workflow query configured in your app
                     // that executes the workflow
                    await TriggerApprovals.run({
                        "id": tbl_refund_requests.triggeredRow.refund_id,
                        "approve_or_reject_status": action,
                        "name": tbl_refund_requests.triggeredRow.customer_name,
					    "email": tbl_refund_requests.triggeredRow.customer_email
                    });
                } catch (error) {
                    console.error("Error:", error.message || error);
                }
            }
        }
    };
    ```

11. Bind the JS object execution to the **Approve** and **Reject** buttons in the Table Widget, setting `action` parameter as `Approved` and `Rejected` for the buttons respectively.


## Manage approvals in workflow

To manage the approvals in the workflow, you will need to configure datasources, create queries and write JavaScript code in the JS object. The process works similar to how you configure datasources, create queries, and JS Objects in your Appsmith apps.

### Set up SMTP datasource and query

Follow these steps to set up datasources, and create query for sending email:

1. Click the **Data** tab. Click the **+** icon next to _Datasources in your workspace_ to add a new [SMTP](/connect-data/reference/using-smtp) datasource.

2. Enter the following details in the SMTP connection parameter fields:
    * **Host Address**: Add your SMTP host address
    * **Port**: Add your SMTP port. For example, 587
    * **Username**: Add your SMTP Username
    * **Password**: Add your SMTP password

3. Test and save the datasource configuration.

4. Create a new query with below configuration for sending email:
    * Rename the query - _Send\_refund\_status\_email_
    - **From Email**: Your SMTP username or a `no-reply` email.
    - **To Email**: Add this as a parameter (`{{this.params.recipient}}`).
    - **Subject**: Partially dynamic subject - `Refund Request {{this.params.status}}`.
    - **Body**: Add this as a parameter (`{{this.params.emailcontent}}`).

    You've set up an SMTP datasource, and created a query to send email.

### Create approval query

Both the Appsmith app and workflow will use the same datasource _CustomerRefunds_ to read and update the refund requests. You'll see that the _CustomerRefunds_ datasource is available under the **Data** tab. Follow these steps to create a query to update the status of the refund request:

1. Add a new query for updating the status of a given refund request. Give it a meaningful and unique name, for example, _Update\approve\_reject\_refund\_req_.

2. Add the SQL code below to it:
    ```sql
    -- {{this.params.id}} is replaced by the parameter value (refund_id). 
    -- highlight-next-line
    Update public. "customer_refund_approval" set approval_status = 'Pending' where refund_id = {{this.params.id}}
    ```
    You've set up a query to update the status of refund request.

### Write code to manage workflow

Follow these steps to manage the query execution and pass parameters to appropriate queries, write code in the Main JS object:

1. Click the **Main** under _JS Objects_.

2. Remove the code and add the below code:

    ```javascript
    export default {
        async executeWorkflow(data) {
            const { id, approve_or_reject_status, name, email } = data;
            if (approve_or_reject_status) {
                //call the query to update the refund status
                await Update_approve_reject_refund_req.run({ "id": id, "status": approve_or_reject_status }).then(async (response) => {
                    //call the query to send an email to notify the customer
                    await Send_refund_status_email.run({
                        "approve_or_reject_status" : approve_or_reject_status,
                        "recipient": email,
                        "emailContent": this.getEmailBody(approve_or_reject_status, name)
                    });
                });
            } 
            return true;
        }
        , 
         // Email content generation logic based on approval or rejection action
        getEmailBody(approve_or_reject_status, customer_name){
            if (approve_or_reject_status === 'Approved') {
                return 'Dear ' +  customer_name + ',\n\nWe are pleased to inform you that your refund request has been approved. The refunded amount will be processed and credited to your account shortly.\n\nThank you for your patience and understanding.\n\nSincerely,\nThe Customer Support Team'

            }else if (approve_or_reject_status === 'Rejected') {
                return 'Dear ' +  customer_name + ',\n\nWe regret to inform you that your refund request has been denied. If you have any questions or concerns, please contact our customer support team.\n\nThank you for your understanding.\n\nSincerely,\nThe Customer Support Team'
            }
        }
    }
    ```
    This code sets up the workflow to execute the query for updating the refund status and sends a notification to the customer intimating the status of refund upon a successful update.

## Test workflow 

Follow these steps to test the workflow execution:

* Publish the workflow by clicking the **Publish** button in the top right corner.
* Go to your app and deploy the app by clicking the **Deploy** button in the top right corner.
* Access the deployed version of your app, and click **Approve** or **Reject** button in the Table widget to approve or reject the refund request.

Once you click Approve or Reject, the refund request status is updated, and the customer receives an email notifying the status of the refund request.

🚩 Congratulations. You have built your first single approval workflow and integrated it with your Appsmith app.

In this tutorial, you explored a way to create workflow, integrate it with your app, pass parameters from app to workflow and to queries. You can use these skills to build your own workflow and integrate it with your apps.

Happy App Building!