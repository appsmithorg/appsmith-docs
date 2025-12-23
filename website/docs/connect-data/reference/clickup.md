---
title: ClickUp
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>ClickUp</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Integrate ClickUp with Appsmith to manage tasks, lists, spaces, and folders directly from your app. Create, update, search, and delete tasks, retrieve workspace information, and access custom fields—all without leaving Appsmith.

## Connect ClickUp

To connect to ClickUp, you'll need to authenticate using your ClickUp credentials via OAuth. This allows the integration to securely access your workspaces, tasks, lists, and other data.

1. In Appsmith, create a new ClickUp datasource.
2. To authorize ClickUp, log in to your ClickUp account, review the requested permissions, and click **Allow** to grant Appsmith access to your ClickUp account.
3. Once connected, you can create a new query by clicking the respective button in the upper right.

## Query ClickUp

Use the command selector in the query form to pick the ClickUp operation you need. Each command below lists its parameters along with tips for finding IDs inside ClickUp.

### Find the ClickUp IDs

Many of the commands require you to enter certain ClickUp IDs as parameters. To get those IDs, you can find them in the ClickUp URL when viewing the respective resource.

#### Space ID

The Space ID appears in the URL when viewing a space in ClickUp:

```js
https://app.clickup.com/SPACE_ID/v/li/LIST_ID
```

#### List ID

The List ID appears in the URL when viewing a list:

```js
https://app.clickup.com/SPACE_ID/v/li/LIST_ID
```

#### Task ID

The Task ID appears in the URL when viewing a task:

```js
https://app.clickup.com/t/TASK_ID
```

You can also find these IDs by using the "Get Space" or "Get List" queries, which return the IDs in their response.

### Search Tasks in List

Searches for tasks within a specific ClickUp list with filtering options. This allows you to find tasks that match specific criteria within a particular list.

#### List ID `string`

<dd>

Required. The ID of the ClickUp list to search tasks from. You can find the list ID in the URL when viewing the list in ClickUp, or by using the "Get List" query.

</dd>

#### Include Closed `string`

<dd>

Optional. Include closed tasks in the search results. Set to `true` to include closed tasks, or `false` to exclude them.

*Example:*

```js
true
```

</dd>

#### Status `string`

<dd>

Optional. Filter by status. This allows you to search for tasks with a specific status.

*Example:* To filter by status:

```js
in progress
```

or

```js
to do
```

</dd>

#### Assignee `string`

<dd>

Optional. Filter by assignee user ID. This allows you to search for tasks assigned to a specific user.

*Example:* To filter by assignee:

```js
12345678
```

</dd>

#### Order By `string`

<dd>

Optional. Order tasks by a specific field. Common values include `created`, `updated`, or `due_date`.

*Example:* To order by creation date:

```js
created
```

</dd>

#### Due Date Greater Than `string`

<dd>

Optional. Filter tasks with a due date greater than this value. Provide a Unix timestamp in milliseconds.

*Example:*

```js
1609459200000
```

</dd>

#### Due Date Less Than `string`

<dd>

Optional. Filter tasks with a due date less than this value. Provide a Unix timestamp in milliseconds.

*Example:*

```js
1609545600000
```

</dd>

#### Page `string`

<dd>

Optional. Page number for pagination. Starts at 0.

*Example:*

```js
0
```

</dd>

#### Reverse `string`

<dd>

Optional. Reverse the order of results. Set to `true` to reverse the order, or `false` for normal order.

*Example:*

```js
true
```

</dd>

### Create Task

Creates a new task in a specified list. You can set the task name, description, status, assignees, due date, and additional fields.

#### List Id `string`

<dd>

Required. The ID of the list where the new task will be created. You can find the list ID in the URL when viewing the list in ClickUp.

</dd>

#### Name `string`

<dd>

Required. The title of the task. This should briefly describe the work to be done.

</dd>

#### Description `string`

<dd>

Optional. A detailed description of the task, such as objectives, background context, or steps to complete.

</dd>

#### Status `string`

<dd>

Optional. The status for the task. This should match one of the statuses available in the list.

</dd>

#### Assignees `string | array`

<dd>

Optional. The members (or an array of member IDs) to be assigned to this task. You can provide a single member ID or an array of member IDs.

*Example:* To assign multiple members:

```json
["12345678", "87654321"]
```

</dd>

#### Due Date `string`

<dd>

Optional. Specify a date for this task to be due on. Use ISO 8601 format (e.g., `2025-12-01T17:00:00.000Z`).

</dd>

#### Additional Fields `string (JSON)`

<dd>

Optional. Specify additional fields to include on this task as JSON. This allows you to set custom fields, tags, priorities, and other task properties.

*Example:*

```json
{
  "priority": 2,
  "tags": ["urgent", "important"],
  "custom_fields": [
    {
      "id": "custom_field_id",
      "value": "custom_value"
    }
  ]
}
```

</dd>

### Update Task

Updates the details of an existing task in ClickUp. This allows you to modify task metadata such as name, description, status, assignees, due date, and additional fields.

#### Task Id `string`

<dd>

Required. The ID of the task to update. You can find the task ID in the URL when viewing the task in ClickUp (e.g., `https://app.clickup.com/t/TASK_ID`).

</dd>

#### List Id `string`

<dd>

Required. The ID of the list where the task resides. This is required for routing the update request correctly.

</dd>

#### Name `string`

<dd>

Optional. Updates the title of the task. This should reflect the current goal or context of the task.

</dd>

#### Description `string`

<dd>

Optional. Updates the description or additional information about the task. Useful for giving more context or listing steps.

</dd>

#### Status `string`

<dd>

Optional. Updates the status of the task. This should match one of the statuses available in the list.

</dd>

#### Assignees `string | array`

<dd>

Optional. Updates the members assigned to the task. You can provide a single member ID or an array of member IDs.

*Example:*

```json
["12345678", "87654321"]
```

</dd>

#### Due Date `string`

<dd>

Optional. Updates the due date of the task. Use ISO 8601 format (e.g., `2025-12-01T17:00:00.000Z`).

</dd>

#### Additional Fields `string (JSON)`

<dd>

Optional. Updates additional fields on the task as JSON. Supply only the fields you want to change.

*Example:*

```json
{
  "priority": 1,
  "tags": ["completed"]
}
```

</dd>

### Delete Task

Permanently removes a task from ClickUp. Note that this action cannot be undone.

#### Task Id `string`

<dd>

Required. The ID of the task you want to permanently delete. You can find the task ID in the URL when viewing the task in ClickUp.

</dd>

### Get List

Retrieves lists from a specific space in ClickUp. This is useful for populating dropdowns or mapping list IDs to human-readable names.

#### Space Id `string`

<dd>

Required. The ID of the space from which to retrieve lists. You can find the space ID in the URL when viewing the space in ClickUp.

</dd>

### Get Custom Fields In List

Retrieves the custom fields available in a specific list. This is useful for understanding what custom fields you can set when creating or updating tasks.

#### List Id `string`

<dd>

Required. The ID of the list for which you want to retrieve custom fields. You can find the list ID in the URL when viewing the list in ClickUp.

</dd>

### Get All Fields In List

Retrieves all fields (both standard and custom) available in a specific list. This provides comprehensive information about the fields you can use when creating or updating tasks.

#### List Id `string`

<dd>

Required. The ID of the list for which you want to retrieve all fields. You can find the list ID in the URL when viewing the list in ClickUp.

</dd>

### Get Space

Retrieves information about a specific space in ClickUp, or all spaces if no space ID is provided.

#### Space Id `string`

<dd>

Optional. The ID of the space to retrieve. If not provided, returns information about all spaces accessible to the authenticated user. You can find the space ID in the URL when viewing the space in ClickUp.

</dd>

### Get Folders

Retrieves folders from a specific space in ClickUp. Folders help organize lists within a space.

#### Space Id `string`

<dd>

Required. The ID of the space from which to retrieve folders. You can find the space ID in the URL when viewing the space in ClickUp.

</dd>

### Get Member

Retrieves information about the authenticated ClickUp member. This is useful for getting your own user ID or member details.

No parameters are required for this command.

### Custom Action

Use **Custom Action** when you need a ClickUp REST endpoint that is not modeled above. The form lets you supply the HTTP method, path (for example, `https://api.clickup.com/api/v2/list/{listId}/task`), query parameters, and body. Appsmith automatically injects the OAuth token from your datasource, so you only have to reference [ClickUp's API docs](https://clickup.com/api) for the payload structure.

*Example:*

- Get all tasks in a list with specific fields

<dd>

```bash
GET /api/v2/list/{{listId}}/task?archived=false&include_closed=true
```

</dd>

- Create a task with custom fields

<dd>

```bash
POST /api/v2/list/{{listId}}/task
```

With body:

```json
{
  "name": "New Task",
  "description": "Task description",
  "status": "to do",
  "priority": 2,
  "assignees": ["12345678"],
  "tags": ["urgent"],
  "due_date": 1733011200000,
  "custom_fields": [
    {
      "id": "custom_field_id",
      "value": "custom_value"
    }
  ]
}
```

</dd>

- Update a task's custom field

<dd>

```bash
PUT /api/v2/task/{{taskId}}/field/{{fieldId}}
```

With body:

```json
{
  "value": "updated_value"
}
```

</dd>

