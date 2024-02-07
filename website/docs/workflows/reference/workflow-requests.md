# Workflow Requests

Workflow requests are queries used in an Appsmith application to interact with workflow processes. This page provides information on workflow requests, allowing you to create these requests and use them in your apps.

## Workflow name
<dd>
The workflow with which you want the Appsmith application to interact and execute operation. Select the name of the workflow from the dropdown.
</dd>

## Request type
<dd>
It defines the operation to execute on the workflow. The available types are:

- **Get Requests:** Retrieve information about the requests created as part of the workflow.
  
- **Trigger Workflow:** Triggers the workflow run, and execute the workflow based on predefined conditions or events, and the parameters supplied.
  
- **Resolve Requests:** Handle and conclude existing workflow requests.
</dd>

### Trigger Workflow
<dd>
A trigger workflow request initiates a workflow run with the given parameters so that the workflow executes with the given parameters and the predefined set of operations.
</dd>

#### Trigger data
<dd>
Sends the parameters if needed for running the workflow like parameters. The expected format is JSON.
</dd>

### Get requests
<dd>
Retrieve the requests created as part of the workflow. These requests needs human intervention so that user can verify and take action on them.
</dd>

#### Request names
<dd>
Add filters to the request based on the given request names.
</dd>

#### Request name
<dd>
Specify the name of the request you want to fetch as part of this request type. You must use the same name provided in the workflow.
**Example:**
```javascript
Request Name: ApprovalWorkflow
```
</dd>

#### Request status

<dd>
Add a filter based on the status of the request.
**Example:**
```javascript
Request Status: Pending
```
</dd>

#### Limit

<dd>
Specify the limit for the number of requests to be retrieved.
**Example:**
```javascript
Limit: 10
```
</dd>

#### Skip

<dd>
Specify the number of requests to skip before starting to return data.
**Example:**
```javascript
Skip: 5
```
</dd>

### Resolve requests
<dd>
The request that is used to apply the resolution like based on the action; the request will be resolved. For example, in a refund flow, if you want to resolve the request as approval based on user request, then use this request to apply the approval resolution to it.
</dd>

#### Request Id

<dd>
The request id for which the resolution is needed.
</dd>

#### Resolution

<dd>
Add the resolution from the available resolutions. For example, if a user has selected to Approve from the given resolutions, then supply that value to this property.
</dd>

#### Metadata

<dd>
The metadata needed for resolution, like parameters that the workflow will need to apply the resolution.
</dd>

## Assign requests

In your workflow, to create requests that need human intervention, use `assignRequests`. These requests are generated for every workflow run, and eligible requests are added to the stack. The `assignRequests` needs below parameters:

### Signature

```javascript
appsmith.workflows.assignRequest({
  "requestName": "String", //mandatory
  "message": "String", // Optional
  "resolutions": ["Strings"], // non-empty array
  "metadata": {"any": "json"}, // Optional
  "requestToUsers": ["emails in Strings"], // Optional if requestToGroups is present
  "requestToGroups": ["user group names in Strings"] // Optional if requestToUsers is present
});
```

* `requestName` mandatory 
    <dd>
    The name of the request, and identifies the request within the workflow. This request name can be used to filter the requests as part of [Get requests](#get-requests) by adding the [Request name](#request-name).
    </dd>
* `message` optional String
    <dd>
      Add the infromation that you may want to share with user. For example, a Refund request raised by User 1 for $ 15. 
    </dd>

* `resolutions` mandatory Array of Strings
    <dd>
    An array of strings representing the possible resolutions/actions that can be taken for the request. For example, `['Approve', 'Reject']`
    </dd>
* `metadata` Optional JSON
    <dd>
    Additional data that you may need to process the request. For example, you may want the unique identifier of the record, so that in Appsmith app you can query the data and fetch the details. Bind this to the view button in a Table widget and open a modal to show the detailed view to users.
    </dd>
* `requestToUsers` Optional. Array
   <dd>
   An array of email addresses specifying the users to whom the request is assigned. The request will be available for these users to take action. This is mandatory if you are not supplying `requestToGroups`.
   </dd>
* `requestToGroups` Optional. Array 
    <dd>
    An array of user group names specifying the groups of users to whom the request is assigned. If supplied, the request will be available for users belonging to these groups to take action. This is mandatory if you are not supplying `requestToUsers`.
    </dd>