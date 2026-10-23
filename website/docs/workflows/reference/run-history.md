---
description: This page provides comprehensive information on reading and understanding the execution of each workflow run.
title: Run History
hide_title: true
toc_max_heading_level: 3
---

<!-- vale off -->

<div class="tag-wrapper">
  <h1>Run History</h1>

  <Tags
    tags={[
      { name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
    ]}
  />
</div>

<!-- vale on -->

The **Run History** feature in workflows is essential for monitoring and managing your workflows. This page provides detailed information on how to read and understand the execution of each workflow run.

<br/>

<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/o8pHhnuLhI3GcCoBtcgJ?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>
<br/><br/>

## Workflow runs

You can access the history of all workflow runs of your workflow by clicking the **Run History** button located at the bottom left corner of the workflow editor. The workflow run logs are categorized into two tabs:

- **All Runs**
  - Lists all workflow executions, including both successful and failed runs, with the most recent run displayed at the top.
  
- **Failed Runs**
  - Displays only the workflow runs that encountered issues and did not complete successfully, including [terminated runs](#terminate-a-run), also with the most recent run displayed at the top.

To reload the list for the selected tab, click the refresh icon (**Refresh runs**) next to the tabs.

### Run details

Each workflow run can be uniquely identified by its timestamp and ID:

#### Timestamp
Each workflow run has a timestamp associated with it indicating when the run was triggered. The timestamp format used is `DD/MM/YY | HH:MM:SS`. For example, `28/06/24 | 20:08:17`.

#### ID
Each workflow run has a unique ID generated when the workflow run is triggered and is available in the response that indicates the run has successfully started. Below is an example response generated when a workflow run is triggered:

```javascript
{
  "responseMeta": {
    "status": 200,
    "success": true
  },
  "data": {
  //highlight-next-line
    "workflowRunId": "JV4FA7WS"
  },
  "errorDisplay": ""
}
```
The detailed execution of each workflow run can be viewed by selecting a specific run, which opens up a detailed view on the right side.

#### Detailed view

The run details provide a comprehensive view of each activity's execution within a workflow run, showing timestamps, unique IDs, and detailed logs in chronological order from initiation to completion.

 <ZoomImage src="/img/workflows-run-history.png" alt="Workflow Log Details" caption="Workflow Log Details" />

	* **Timestamps** -  Each log entry, from the start to the completion of the workflow execution, has an associated timestamp indicating when each activity started and ended. This helps in understanding the duration of each activity and the overall workflow completion time.
	* **Activity** - The logs present the sequence of activities performed during the workflow, including the parameters passed and any errors encountered. Each activity is identified by its name (e.g., query name or JS object name) and includes start and end timestamps for detailed analysis.

For runs on the [native workflow engine](/workflows/how-to-guides/native-workflow-engine), the logs show the value of an `Authorization` request header as `****`. Appsmith redacts only the `Authorization` header. Credentials sent in other headers, such as a custom API key header, are not redacted.

## Terminate a run

You can stop a workflow run that is still in progress, including a run that is waiting for an approval. This works for deployed runs and for test runs, whether the run is on the [native workflow engine](/workflows/how-to-guides/native-workflow-engine) or on Temporal.

1. Open the run details. For a deployed run, open **Run History** and select the run. For a test run, the run details appear after you click **Run**, as described in [Debug Workflows](/workflows/how-to-guides/debug-workflow).
2. In the run details, on the **Workflow is executing, fetching logs...** row, click **Terminate run**. The button appears only while the run is in progress.

   <ZoomImage src="/img/workflows-terminate-run-button.png" alt="Terminate run button on an in-progress run" caption="Terminate run button on an in-progress run" />

3. In the **Terminate run** dialog, click **Terminate**. To keep the run going, click **Cancel**.

   <ZoomImage src="/img/workflows-terminate-run-dialog.png" alt="Terminate run confirmation dialog" caption="Terminate run confirmation dialog" />

A terminated run cannot be resumed. After the run stops, Appsmith shows the message **Workflow run terminated**. The run stays in **All Runs** and also appears in **Failed Runs**.

If Appsmith can't stop the run, for example because the run finished before you confirmed, an error message appears with the reason.

### Delete a workflow with active runs

When you delete a workflow, Appsmith first tries to terminate its runs that are still in progress or waiting for an approval, on both the native workflow engine and Temporal. It then removes the workflow's approval requests, both pending and resolved.

If Appsmith can't stop the runs, or stopping them takes longer than about 15 seconds, the workflow is still deleted. Because of this step, deleting a workflow can take up to about 15 seconds longer to finish.

## Important considerations

* **Unique ID** - Use the unique ID to quickly locate and review specific workflow runs.
* **Timestamps** - Check the timestamps to understand the timeline and duration of each activity.
* **Expand activities** - Expand activities to verify the details of each processing step.
* **Failed runs** - Focus on the *Failed Runs* tab to diagnose and resolve issues.
* **Terminate runs** - Terminate a run only if you intend to stop that work. You can't resume a terminated run.
