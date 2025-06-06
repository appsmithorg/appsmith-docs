# Asana

This page provides information on how to connect to Asana. This integration enables you to automate project and task management operations such as creating tasks, updating task details, commenting on tasks, and fetching workspace, team, and project data.

## Connect Asana

To connect to Asana, you'll need to authenticate using your Asana credentials via OAuth. This allows the integration to securely access your workspaces, tasks, projects, and other data.

## Query Asana

The following section is a reference guide that provides a description of the available commands with their parameters to create Asana queries.

### Create Comment

Adds a comment to a specific task in Asana. This is useful for providing updates, feedback, or collaborating with other task followers directly in the task thread.



#### Task `string`

<dd>

The unique identifier of the task where the comment will be added. You can find the task ID in the Asana URL or retrieve it via another query. This is a required field to associate the comment with the correct task.


</dd>

#### Text `string`

<dd> 

The content of the comment you want to post. This can include plain text, mentions (e.g., `@username`), or links. Make sure the text clearly communicates the update or input relevant to the task.


</dd>

### Create project

Creates a new project in Asana within a specified workspace or team. This is useful for organizing tasks, milestones, and timelines around a specific goal or initiative.


#### Name `string`

<dd> 

The name of the new project. This should clearly reflect the purpose or scope of the project.

</dd>

#### Workspace `string`

<dd> 

The ID of the workspace where the project will be created. This is required if a team is not specified. Workspaces are top-level containers for organizing projects and tasks.

You can find the workspace ID in the URL when you’re viewing a workspace in Asana. It typically appears as a numeric value in the URL, such as:

```js
https://app.asana.com/0/workspace_id/list
```

</dd>

#### Team `string`

<dd> 

The ID of the team under which the project will be created. If provided, the project will be visible to that team. Teams help organize projects within an organization.

You can find the team ID in the URL when you’re viewing a team’s project list in Asana. The ID will appear in the path like:

```js
https://app.asana.com/0/team_id/projects
```

</dd>


#### Notes `string`

<dd>

An optional description or summary of the project. This field is useful for communicating the project’s purpose or providing instructions to collaborators.

</dd>


### Get Projects

Retrieves a list of projects from a specific workspace or team in Asana. This is useful for displaying available projects, filtering by status, or selecting a project for further actions.

#### Archived `string`

<dd> 

Specifies whether to include archived projects in the results. This helps filter the list based on project status.
Accepted values:

- `default` – Returns both archived and active projects (Asana's default behavior).

- `true` – Returns only archived projects.

- `false` – Returns only active (non-archived) projects.

</dd>


### Get Project by ID

Fetches detailed information about a specific project in Asana using its unique project ID. Useful for displaying project metadata, tasks, or configurations in your app.

#### Project ID `string`

<dd> 

The unique identifier of the project you want to retrieve. This ID can be found in the Asana URL when viewing a project, usually appearing as a numeric value:

```js
https://app.asana.com/0/project_id/list
```

</dd>

### create task

Creates a new task in Asana. Tasks can be assigned, scheduled, and added to projects within a workspace or team to support workflow management.

#### Name `string`

<dd> 

The title of the task. This should briefly describe the work to be done.

</dd>

#### Workspace `string`

<dd>

The ID of the workspace where the task will be created. Required if no project is specified. You can find the workspace ID in the URL or from a workspace selector.

</dd>

#### Project `string`

<dd>

The ID of the project to associate the task with. If provided, the task will appear within that project. You can get the project ID from the URL or via a project selection widget.

</dd>

#### Notes `string`

<dd> 

Optional field to provide a detailed description of the task, such as objectives, background context, or steps to complete.

</dd>

#### Due On Date `string (YYYY-MM-DD)`

<dd> 

The specific date when the task is due. Use this field if you only need a due date without time.

</dd>

#### Due At Date `string (YYYY-MM-DDTHH:MM:SSZ)`

<dd> 

The exact timestamp when the task is due. This includes both date and time in ISO 8601 format. Useful when scheduling work precisely.

</dd>


#### Assignee `string`

<dd> 

The ID of the user the task should be assigned to. Assigning tasks helps clarify ownership and responsibility within your team.

Using the "Get Users" query to list members of a workspace or team.


User IDs are typically long numeric strings, such as:

```js
8734567890123456
```

</dd>

#### GID `string`

<dd> 

The globally unique identifier used by Asana for tasks and other objects. This is typically returned in responses and used when updating or referencing tasks. Not required when creating a task, but may appear in related operations. 

</dd>

### Update Task

Updates the details of an existing task in Asana. This allows you to modify task metadata such as name, due date, assignee, and completion status.

#### Task ID `string`

<dd> 

The unique identifier (GID) of the task you want to update. Required for identifying which task to modify.

</dd>

#### Completed `boolean`

<dd> 

Sets the completion status of the task. Use `true` to mark the task as complete, or `false` to keep it open.

</dd>

#### Name `string`

<dd> 

Updates the title of the task. This should reflect the current goal or context of the task.

</dd>

#### Notes `string`

<dd> 

Updates the description or additional information about the task. Useful for giving more context or listing steps.

</dd>

#### Due On Date `string (YYYY-MM-DD)`

<dd> 

Updates the due date (without time) of the task. Use this to shift deadlines or clarify timing expectations.

</dd>

#### Due At Date `string (YYYY-MM-DDTHH:MM:SSZ)`

<dd> 

Updates the due date and time with full timestamp. Ideal when tasks are time-sensitive.

</dd>

#### Assignee `string`

<dd> 

The ID of the user the task should be assigned to. Assigning tasks helps clarify ownership and responsibility within your team.

Using the "Get Users" query to list members of a workspace or team.


User IDs are typically long numeric strings, such as:

```js
8734567890123456
```

</dd>

#### GID `string`

<dd> 

The globally unique identifier used by Asana for tasks and other objects. This is typically returned in responses and used when updating or referencing tasks. Not required when creating a task, but may appear in related operations. 

</dd>

### Get Tasks

Retrieves a list of tasks from Asana based on filters such as workspace, project, assignee, and completion status. This command is useful for displaying task lists, building dashboards, or filtering tasks by user or date.

#### Workspace `string`

<dd> 

The ID of the workspace from which to retrieve tasks. This is a required parameter unless a project ID is provided. Workspaces are top-level containers in Asana used to group teams, projects, and tasks.

You can find the workspace ID in the URL when viewing Asana:

```js
https://app.asana.com/0/workspace_id/list
```

</dd>

#### Project `string`

<dd> 

The ID of the project to filter tasks from. If provided, only tasks within this specific project will be returned.

Project IDs are numeric and can be found in the project URL:

```js
https://app.asana.com/0/project_id/list
```

</dd>

#### Assignee `string`

<dd> 

The ID of the user to whom the tasks are assigned. Use this to fetch tasks for a specific person. This is especially helpful for generating user-specific task views.

User IDs can be obtained via the Asana API or by selecting from a user picker component.

</dd>

#### Completed Since `string (YYYY-MM-DDTHH:MM:SSZ)`

<dd> 

Filters tasks based on when they were last completed. Only tasks completed on or after the specified date-time will be included. Useful for syncing or refreshing task lists with recent updates.

Use ISO 8601 format (e.g., `2023-08-01T00:00:00Z`).

</dd>


### Get Task by ID

Retrieves detailed information about a specific task in Asana using its unique task ID. This is useful for displaying full task metadata, status, assignee, dates, and custom fields.

#### Task ID `string`

<dd> 

The globally unique identifier (GID) of the task to retrieve. 

```js
https://app.asana.com/0/project_id/task_id
```

</dd>

### Get Task by External ID

Retrieves a task in Asana using a custom external ID that was previously set. This is useful for syncing tasks between Asana and external systems (e.g., CRMs, ticketing systems) where you maintain your own identifiers.

#### GID `string`

<dd> 

The externally defined unique identifier associated with a task. This value is set using the `external` field in Asana’s API when the task is created or updated.
Use this when your system maintains its own mapping of tasks and needs to retrieve the corresponding task in Asana.

To find or set the external ID:

- When creating or updating a task via API, pass the external ID under the external object.

- Ensure the external ID is stored and tracked in your system for future reference.

The external ID is a custom string (not the native Asana GID) and may look like:

```js
"crm-task-00123"
```

</dd>

### Add Task to Section

Adds an existing task to a specific section within a project in Asana. Optionally, you can control the task's position relative to other tasks in the section by specifying placement before or after a given task.



#### Section ID `string`

<dd> 

The unique ID of the section where the task will be added. Sections help organize tasks within a project (e.g., “To Do”, “In Progress”, “Done”).

You can find the section ID from the URL in Asana:

- Go to the project in Asana

- Hover over the section name

- Right-click and copy the link to the section

The section ID appears in the link like this:

```js
https://app.asana.com/0/project_id/section_id/f
//1201234567890123
```

</dd>

#### Task ID `string`

<dd> 

The ID of the task you want to move into the section. You can find the task ID by opening the task in Asana — it appears in the URL as:

```js
https://app.asana.com/0/project_id/task_id
```

</dd>

#### Before Task ID `string` 

<dd>

The ID of a task that the current task should be placed **before**. This is helpful when ordering tasks in a specific sequence.

Find this ID by hovering over the task in Asana, right-clicking, and selecting "Copy task link" — the task ID will be at the end of the URL.


</dd>

#### After Task ID `string` 

<dd> 

The ID of a task that the current task should be placed **after**. Use this to insert a task just below another task within the same section.

Find the ID by copying the link of the reference task from the Asana UI.

</dd>

### Get Teams

Retrieves a list of teams within a specified workspace in Asana. This is useful for populating dropdowns, assigning projects to teams, or organizing work by department or function.

#### Workspace `string`

<dd> 

The ID of the workspace from which to fetch teams. In Asana, a workspace is the top-level container where users, teams, projects, and tasks are managed.

To find the workspace ID:

- Open Asana in your browser

- Navigate to any project within the workspace

- The workspace ID will appear in the URL in this format:

```js
https://app.asana.com/0/workspace_id/list
```

</dd>

### Get Workspaces


Retrieves a list of workspaces that the authenticated user has access to in Asana. This is useful for allowing users to select the workspace they want to interact with when creating or managing tasks, projects, or teams.

No parameters are required for this command.

Each workspace returned includes:

- **Name**: The display name of the workspace.

- **GID**: The globally unique identifier used to reference the workspace in other queries.

You can use the GID values from this list to populate dropdowns or reference specific workspaces in other operations like “Get Teams” or “Create Task.”

### Custom Action

Use Custom Action to make direct API requests to Asana endpoints that are not included in the built-in command set. This is helpful when you need to access newer or less common Asana features, update specific fields, or perform actions tailored to your workflow.

You can define the HTTP method, endpoint path, headers, and body to call any Asana API route supported by their [official documentation](https://developers.asana.com/reference/rest-api-reference).

*Example*:

- Get all users in a workspace

<dd>

```bash
GET /v1/users?workspace={{workspaceSelect.selectedOptionValue}}
```

</dd>

- Get stories (comments) for a task

<dd>

```bash
GET /v1/tasks/{{taskSelect.selectedOptionValue}}/stories
```
</dd>


- Update a task’s custom fields

<dd>

```bash
PUT /v1/tasks/{{taskSelect.selectedOptionValue}}
```

With body:

```json
{
  "custom_fields": {
    "1201234567890123": "High"
  }
}
```

</dd>

- Add a follower to a task


<dd>

```bash
POST /v1/tasks/{{taskSelect.selectedOptionValue}}/addFollowers
```

With body:

```json
{
  "followers": ["1234567890123456"]
}
```

</dd>