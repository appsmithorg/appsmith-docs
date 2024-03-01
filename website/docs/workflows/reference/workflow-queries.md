---
description: This page provides detailed information on workflow queries available in Appsmith.
title: Workflow Queries
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Workflow Queries</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Workflow queries in Appsmith applications enable interaction with workflows, allowing users to execute operations within their apps. This page provides detailed information on workflow queries and their parameters.

## Workflow name
<dd>
Specifies the workflow with which the Appsmith application will interact and execute operations. It allows users to select a specific workflow from all the workflows available in the workspace for interaction and execution.
</dd>

## Request type
<dd>
Request type defines the operation to execute on the workflow. The available types are:

* **Trigger Workflow:** Triggers the workflow and executes it based on predefined conditions or events, along with the supplied parameters.
* **Get Requests:** Retrieve information about the requests generated as part of the workflow.
* **Resolve Requests:** Handles and concludes existing workflow requests raised as part of the `Get Requests` operation.
</dd>

### Trigger Workflow
<dd>
A `Trigger Workflow` request initiates a workflow run with supplied parameters, and executes the predefined operations within the workflow.
</dd>

#### Trigger data
<dd>
Trigger data supplies the parameters needed by the workflow to execute. The parameters are supplied in a JSON object. For example:
```javascript
{
  "parameter1": "value1",
  "parameter2": "value2"
}
```
</dd>

### Get requests
<dd>
A `Get Requests` request retrieves the requests created as part of the workflow, specific to the logged-in user. These requests require human intervention for the user to verify and take action.
</dd>

#### Request names
<dd>
Filters the requests based on their name. One or more request names can be added to retrieve requests.
</dd>

#### Request name
<dd>
Specifies the name of the request to fetch, as defined while creating request using the `assignRequests` workflow function. For more information, see [assignRequests](/workflows/reference/workflow-functions#assignrequest).
</dd>

#### Request status

<dd>
Filters requests based on their status. The available statuses are: `Pending` and `Resolved`.
</dd>

#### Limit

<dd>
Specifies the maximum number of requests to retrieve. The default value is set to `10`.
</dd>

#### Skip

<dd>
Specifies the number of requests to skip before returning data. The default value is set to `0`.
</dd>

### Resolve requests
<dd>
The `Resolve requests` request applies resolutions to existing workflow requests based on user actions.
</dd>

#### Request Id

<dd>
Specifies the ID of the request for which resolution is needed.
</dd>

#### Resolution

<dd>
Applies a resolution to the request based on the action taken. The resolution must match those specified while creating the request using the `assignRequests` workflow function. For example, during request creation, if you defined available resolutions as `Approve` and `Reject`, only these resolutions can be applied to the request when a user takes action. Therefore, when passing resolutions to this attribute, ensure they match the predefined options.
</dd>

#### Metadata

<dd>
Add data that may be needed to process the request or perform additional operation in the workflow. For example, you can include a unique identifier for the record associated with the request. Use the identifier in your workflow to fetch details and perform additional operation.
</dd>
