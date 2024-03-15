---
description: This page provides detailed steps to integrate and trigger Appsmith workflows from Appsmith app.
title: Trigger Workflow from Appsmith App
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Trigger Workflow from Appsmith App</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith workflows seamlessly integrate with the Appsmith app. This page shows how to integrate and trigger workflow from your Appsmith app.

## Prerequisites

Before you begin, ensure you have:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of creating a workflow in Appsmith. For more information, see [Tutorial - Create Basic Workflow](/workflows/tutorials/create-workflow).

Follow these steps to integrate and trigger your workflow within an Appsmith app:

1. Open your Appsmith app.
2. Create a new query by clicking **Editor** > **Queries** > **New query/API**.
3. In the _Create new query/API_ dialog, select **Workflows Query**, and give it a meaningful and unique name.
4. Configure the workflow query as shown below:
    * **Workflow name**: Choose the desired workflow from the list of available workflows in your workspace.
    * **Request type**: Select **Trigger workflow**.
    * **Trigger Data**: Pass parameters that the workflow needs for processing. For example, the workflow needs an email, you can pass the email parameter as shown below. At runtime, the value added to the field (`inp_Email`), replaces the widget binding `{{inp_Email.text}}`.
        ```javascript
        {
            "email": "{{inp_Email.text}}"
        }
        ```
5. Bind the execution of workflow query from where you want to trigger the workflow in your app. For example, if you want to trigger the workflow on a button click, bind the `onClick` event of the button to execute the workflow query.
6. Test the workflow integration and execution by clicking the button.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
