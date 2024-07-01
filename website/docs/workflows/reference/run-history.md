---
description: This page provides comprehensive information on reading and understanding the execution of each workflow run.
title: Run History
hide_title: true
toc_max_heading_level: 2
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
<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/o8pHhnuLhI3GcCoBtcgJ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Debug Workflow">
    </iframe>
</div>
<br/><br/>

## Logs

You can access the Run History by clicking the **Run History** button located at the bottom left corner of the workflow editor. The workflow run logs are categorized into two tabs:

- **All Runs**
  - Lists all workflow executions, including both successful and failed runs, with the most recent run displayed at the top.
  
- **Failed Runs**
  - Displays only the workflow runs that encountered issues and did not complete successfully, also with the most recent run displayed at the top.

## Workflow run details

Each workflow run can be uniquely identified by its timestamp and ID:

### Timestamp
Each workflow run has a timestamp associated with it indicating when the run was triggered. The timestamp format used is `DD/MM/YY | HH:MM:SS`. For example, `28/06/24 | 20:08:17`.

### ID
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
The detailed execution of each workflow run can be viewed by selecting a specific run, which opens up the detailed view in the right pane.

## Log details

The log details provide a comprehensive view of each task’s execution within a workflow run, showing timestamps, unique IDs, and detailed logs in chronological order from initiation to completion.

 <ZoomImage src="/img/workflows-run-history.png" alt="Workflow Log Details" caption="Workflow Log Details" />

	* **Timestamps** -  Each log entry, from the start to the completion of the workflow execution, has an associated timestamp indicating when each activity started and ended. This helps in understanding the duration of each activity and the overall workflow completion time.
	* **Activity** - The logs present the sequence of activities performed during the workflow, including the parameters passed and any errors encountered. Each activity is identified by its name (e.g., query name or JS object name) and includes start and end timestamps for detailed analysis.

## Important considerations

	* **Unique ID** - Use the unique ID to quickly locate and review specific workflow runs.
	* **Timestamps** - Check the timestamps to understand the timeline and duration of each activity.
	* **Expand activities** - Expand activities to verify the details of each processing step.
	* **Failed runs** - Focus on the *Failed Runs* tab to diagnose and resolve issues efficiently.
