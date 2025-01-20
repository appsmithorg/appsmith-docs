---
description: This page provides detailed steps to debug workflows effectively using test values and logs.
title: Debug Workflows
hide_title: true
---

<!-- vale off -->

<div class="tag-wrapper">
 <h1>Debug Workflows</h1>

<Tags
tags={[
  { name: "Business", link: "https://www.appsmith.com/docs", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Debugging workflows is crucial for identifying and resolving issues while building workflows. This page shows how to set up test values and run your workflow from the workflow editor.

## Prerequisites

Before you begin, make sure you have:

- A self-hosted Appsmith instance with a [business subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions if you need to set up your instance. You can also get a trial license by signing up on [customer.appsmith.com](https://customer.appsmith.com/).

## Set up and run workflow with test values

While developing the workflows, you can debug the workflows by passing test values and fix issues in your workflow for accuracy. The debug runs are not included in the [Run History](/workflows/reference/run-history).

Follow these steps to set up test values and debug the workflow:

<br/>
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/rCIbiKPeSjXvc5O3cSF5?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Debug Workflow">
    </iframe>
</div>
<br/><br/>

1. In your workflow, go to the *Response* tab and click the **Run** button.
2. Under the *Test values for function arguments* section, in the *Define test values for function arguments* field, enter your data in JSON format. For example, your workflow requires a `order_id`, and `status` as parameters:

    ```javascript
    {
      "order_id": "12345",
      "status": "pending"
    }
    ```

3. Insert `console.log` statements at relevant points in your code to print results based on the workflow's processing logic. For example, to verify the parameters passed to the workflow, add the following log statement:

    ```javascript
    console.log("Parameters: Order ID - ", data.order_id, " Status - ", data.status);
    ```
4. Click the **Run** button in the *Test values for function arguments* section to execute the workflow with the provided test data.

5. After running the workflow, review the run details to understand its behavior and identify any issues in the run details available on the right side. A sample workflow log details are as follows:

   <ZoomImage src=" /img/workflows-log-details.png" alt="Workflow Log Details" caption="Workflow Log Details" />

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

* [Workflow Functions](/workflows/reference/workflow-functions) - Explore the variety of functions available for your workflows.
* [Run History](/workflows/reference/run-history) - Understand how to interpret and analyze the history of workflow runs.