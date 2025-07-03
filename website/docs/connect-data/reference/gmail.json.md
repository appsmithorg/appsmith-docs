# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing projects, tasks, and organizing teamwork.

## Connect Asana

Explain how to authenticate and connect to this service securely.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

Creates a new comment on a specified task.

#### Task `string`

<dd>

The Task ID is a unique identifier for the task to which the comment will be added. The comment will be authored by the currently authenticated user. It is required to specify the Task ID to add a comment.

*example*:
```
1204619611402340
```

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. This should be a plain text string. If omitted, no comment will be added.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within Asana.

#### Name `string`

<dd>

The Name property specifies the name of the project to be created. This is a required field and must be a plain text string.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create projects in. If left blank, it defaults to the user’s first Workspace. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.workspace}}"
```

#### Team `string`

<dd>

The Team property allows users to select which Team to share this Project with. If left blank, it defaults to the user’s first Team. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
``"
{{settings.team}}
```

#### Notes `string`

<dd>

The Notes property is used to add additional information or description to the project. This field is optional and should be a plain text string.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with options to filter by archived status.

#### Archived `string`

<dd>

The Archived property allows users to filter the projects list by their archived status. Options include 'Yes' to show only archived projects, 'No' to show only active projects, and 'Default' to show both archived and active projects.

*example*:
```
"Yes"
```

---

### Get Project By Id

Retrieves a specific project by its ID.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier of the project you wish to retrieve. It is required to specify the Project ID to fetch the project details.

*example*:
```
"1147481656382177"
```

---

### Create Task

Creates a new task within Asana.

#### Name `string`

<dd>

The Name property specifies the name of the task to be created. This is a required field and must be a plain text string.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create tasks in. If left blank, it defaults to the user’s first Workspace. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

The Project property allows users to select which Project to create this Task in. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.project}}"
```

#### Notes `string`

<dd>

The Notes property is used to add additional information or description to the task. This field is optional and should be a plain text string.

*example*:
```
"Task related notes."
```

#### Due On Date `string`

<dd>

The Due On property specifies the date on which this task is due. It cannot be used together with Due At. The expected format is YYYY-MM-DD.

*example*:
```
"2023-05-01"
```

#### Due At Date `string`

<dd>

The Due At property specifies the date and time at which this task is due. It cannot be used together with Due On. The expected format is an ISO timestamp.

*example*:
```
"2023-05-01T09:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property specifies the ID of the Asana user this task will be assigned to. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate this task with. This ID can be used to sync updates to this task later.

*example*:
```
"ext_1234567890"
```

---

### Update Task

Updates an existing task within Asana.

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task that will be updated. It is required to specify the Task ID to update the task.

*example*:
```
"1204619611402340"
```

#### Complete Status `string`

<dd>

The Complete Status property indicates the completion status of the task. No description available.

*example*:
```
"Completed"
```

#### Name `string`

<dd>

The Name property specifies the new name of the task to be updated. This field is optional and should be a plain text string.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

The Notes property is used to update the additional information or description of the task. This field is optional and should be a plain text string.

*example*:
```
"Updated task related notes."
```

#### Due On Date `string`

<dd>

The Due On property specifies the updated date on which this task is due. It cannot be used together with Due At. The expected format is YYYY-MM-DD.

*example*:
```
"2023-06-01"
```

#### Due At Date `string`

<dd>

The Due At property specifies the updated date and time at which this task is due. It cannot be used together with Due On. The expected format is an ISO timestamp.

*example*:
```
"2023-06-01T12:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property specifies the ID of the Asana user this task will be reassigned to. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate this task with. This ID can be used to sync updates to this task later.

*example*:
```
"ext_9876543210"
```

---

### Get Tasks

Retrieves a list of tasks, with options to filter by workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

The Workspace property specifies the ID of the Workspace to filter tasks on. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

The Project property specifies the ID of the Project to filter tasks on. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.project}}"
```

#### Assignee `string`

<dd>

The Assignee property specifies the ID of the assignee to filter tasks on. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.assignee}}"
```

#### Completed Since `string`

<dd>

The Completed Since property filters tasks to only return those that are either incomplete or that have been completed since the provided time. The expected format is either ISO or Unix timestamp.

*example*:
```
"2014-04-25T16:15:47-04:00"
```

---

### Get Tasks By Id

Retrieves a specific task by its ID.

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task you wish to retrieve. It is required to specify the Task ID to fetch the task details.

*example*:
```
"1204619611402340"
```

---

### Get Task By External Id

Retrieves a task associated with a specified external ID.

#### Gid `string`

<dd>

The Gid property is the external ID that this task is associated or synced with, from your application.

*example*:
```
"ext_1234567890"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project.

#### Section Id `string`

<dd>

The Section ID is the unique identifier of the section to which the task will be added. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.section}}"
```

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task that will be added to the section.

*example*:
```
"1204619611402340"
```

#### Before Task Id `string`

<dd>

The Before Task ID specifies the ID of a task in this section that the current task will be inserted before. It cannot be used with After Task ID.

*example*:
```
"1204619611402341"
```

#### After Task Id `string`

<dd>

The After Task ID specifies the ID of a task in this section that the current task will be inserted after. It cannot be used with Before Task ID.

*example*:
```
"1204619611402342"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property specifies the ID of the workspace for which the teams will be listed. This field is typically populated using the Connect Portal Workflow Settings.

*example*:
```
"{{settings.workspace}}"
```

---

### Get Workspaces

Retrieves a list of workspaces accessible to the authorized user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.

---
