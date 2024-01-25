---
description: Tutorial to create an approval workflow.
---

# Create Approval Workflow
This tutorial takes you through the steps to create a single approval workflow.

## Approval workflow overview
**Explanation - TBD**


## Create workflow
To create a workflow in your workspace, follow these steps:
1. Login to your Appsmith account and go to your workspace.
2. In the top right corner, click **Create new**. Select **New workflow**.

## Connect to SMTP datasource
1. In the top left corner of your workflow, click **+** beside **Queries/JS** and select **SMTP**.
2. Enter **Host address** and **Port**.
3. In **Authentication**, enter **Username** and **Password**.
4. To test the connection, click **Test configuration**. Once the connection is successful, click **Save**.
   
## Configure query for SMTP datasource
1. Click **Add query/JS**, and select **[SMTP datasource] query**.
2. In **Commands**, select **Send email** and enter **From email** and **To email(s)**.
   To test the query, click **Run**.
3. In the **Main** JS Object, add the relevant actions and set up the activities within the actions to execute on triggering the workflow.
   Example:

## Set up trigger
## Integrate workflow with the app