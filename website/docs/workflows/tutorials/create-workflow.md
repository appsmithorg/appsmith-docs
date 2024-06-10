---
description: This page provides detailed steps to set up a workflow on Appsmith.
title: Lesson 1 - Create Basic Workflow in Appsmith
hide_title: true
---

# Lesson 1: Create Basic Workflow in Appsmith

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your business. This tutorial guides you through the process of setting up a basic workflow. You'll learn to create, test, and deploy a workflow that sends a welcome notification email when new users join your organization.

## Objectives

By the end of this lesson, you will be able to:
* Create a basic workflow in Appsmith.
* Test and execute the workflow.
* Deploy the workflow for use within your workspace.

## Prerequisites

Before you start, ensure you have the following:
* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). For more information about setup instructions, see the [Appsmith installation guides](/getting-started/setup/installation-guides).
* Familiarity with Appsmith basics. If you're new, see [Tutorial - Basics](/getting-started/tutorials/start-building).
* A REST client, like Postman.

## Create Workflow

Follow these steps to create a new workflow in your Appsmith workspace:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/BzEnldkGHkIJ91SDxubA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div>
<br/><br/>

1. **Create a New Workflow**:
   - In your Appsmith workspace, click the **Create New** button and select **Workflow**. This action opens the workflow creation interface.
   - Rename your workflow from **Untitled Workflow 1** to a more meaningful name, like *Send_Email_Workflow*.

2. **Understand the Main Function**: 
    - In the **Main** JS object code editor, you'll see the `executeWorkflow` function. This function is the entry point for your workflow execution.
    :::danger Caution
    Do not remove the `executeWorkflow()` function. It's essential for your workflow to run without which the workflow will not be executed.
    :::

    ```javascript
    export default {
        /**
        * Entry point for Workflow execution. All activities to be executed should be defined here.
        * @param data  This function takes in a JSON object as arguments (data) which can be passed when you trigger the workflow.
        * @returns boolean Shall return true or false.
        */
        async executeWorkflow(data) {
            // Start writing your code here.

            return true;
        }
    }
    ```

## Test Workflow

Follow these steps to test and publish your workflow:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/37IcEXKwFUXIaf0RZiC3?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Test workflow">
</iframe>
</div>
<br/><br/>

1. **Update the Workflow Code**:
    - Replace the existing code in the **Main** JS object with the following:

        ```javascript
        export default {
            /**
            * Entry point for Workflow execution. All activities to be executed should be defined here.
            * @param data  This function takes in a JSON object as arguments (data) which can be passed when you trigger the workflow.
            * @returns boolean Shall return true or false.
            */
            async executeWorkflow(data) {
                console.log("Hello! I am your first workflow");
                // Read the `param` value passed to the workflow
                console.log("Here's the data you passed: " + data.param);
                return true;
            }
        }
        ```

2. **Set Test Parameters**:
   - Go to the _Response_ tab and under the _Test values for function arguments_ section, add the following JSON:

    ```javascript
    {"param": "Workflow Param"}
    ```

3. **Execute the Workflow**:
   - Click the **Run** button to trigger the workflow. The right pane in the _Response_ tab will display the log messages along with the parameter value you provided.

4. **Deploy the Workflow**:
   - Click the **Deploy** button in the top-right corner to publish your workflow. This action makes the workflow available to connect with other apps in your workspace.

## Next steps

Proceed to [Lesson 2 - Connect Workflow with Appsmith App](/workflows/tutorials/execute-workflow-from-appsmith-app) to learn how to integrate this workflow with an Appsmith app.


