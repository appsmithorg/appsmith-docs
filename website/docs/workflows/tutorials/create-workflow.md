---
description: This page provides detailed steps to set up a workflow on Appsmith.
title:  Lesson 1 - Create Workflow
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 1 - Create Workflow</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows allow you to automate processes, bringing efficiency and connectivity to your business. This tutorial guides you through the process of setting up a basic workflow, configuring it as a webhook trigger, integrating and triggering the workflow execution from your Appsmith app.  

To learn workflows in Appsmith, you'll build workflow that sends a welcome notification email when new users join your organization. By the end of this tutorial, you will know how to:

* Create a workflow and configure it as a webhook
* Trigger the workflow from an external app (Postman)

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
*  If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).
* A REST client. For example, Postman.

## Create workflow

Follow these steps to build a notification workflow:

To send notifications to the users you will create a workflow, and configure it as a webhook. Follow these steps to create a webhook workflow within your workspace. All apps in the same workspace can now access the newly created workflow:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
<iframe src="https://demo.arcade.software/BzEnldkGHkIJ91SDxubA?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Create workflow">
</iframe>
</div>
<br/><br/>

1. Click the **Create New** button in your workspace, and choose **Workflow**. This action creates a new workflow in your workspace and takes you to the **Main** JS object code editor. Give a meaningful and unique name to your workflow by editing the name **Untitled Workflow 1** to _Send\_Email\_Workflow_.
2. In the **Main** JS object code editor, you will see the `executeWorkflow` function (as shown below). This function executes whenever a workflow run is triggered. It serves as the main function for writing your logic. You'll update the `executeWorkflow()` function and add code in the [Write query to send email](#write-query-to-send-email) section.

    :::danger Caution
        The `executeWorkflow()` function serves as the main function for workflows, and must not be removed from the **Main** JS object.
    :::

    ```javascript
    export default {
        /**
        * Entry point for Workflow execution. All activities to be executed should be defined here.
        * @param data  This function takes in a json object as arguments (data) which can be passed when you trigger the workflow.
        * @returns boolean Shall return true or false.
        */
        async executeWorkflow(data) {
            // start writing your code here.

            return true;
        }
    }
    ```

You've created your first workflow.

### Test workflow using Run button


You've successfully integrated the email query in workflow. 

