# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating tasks, managing projects, and organizing teamwork.

## Connect Asana

Explain how to authenticate and connect to this service securely.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

Creates a new comment on a specified task.

#### Task `string`

<dd>

The Task ID is a unique identifier for the task where the comment will be added. The comment will be authored by the currently authenticated user. The Task ID is typically in the format of a numeric string.

*example*:
```
1234567890
```

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. It should be a clear and concise message.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within a workspace or team.

#### Name `string`

<dd>

The Name property specifies the name of the new project. It should be a descriptive title that clearly identifies the project's purpose or scope.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create the project in. If left blank, it defaults to the user’s first Workspace. The Workspace ID is typically a numeric or alphanumeric string.

*example*:
```
"1122334455"
```

#### Team `string`

<dd>

The Team property allows users to select which Team to share the project with. If left blank, it defaults to the user’s first Team. The Team ID is typically a numeric or alphanumeric string.

*example*:
```
"6677889900"
```

#### Notes `string`

<dd>

The Notes property allows you to add additional information or context about the project. This could include objectives, requirements, or any other details relevant to the project.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with options to filter by archived status.

#### Archived `string`

<dd>

The Archived property lets you filter the projects list based on their archival status. Choose 'Yes' to show only archived projects, 'No' to display only active projects, and 'The Default' to show both archived and active projects.

*example*:
```
"Yes"
```

---

### Get Project By Id

Retrieves a specific project by its ID.

#### Project Filter Id `string`

<dd>

The Project Filter ID is the unique identifier for the project you wish to retrieve. The Project ID is typically in the format of a numeric string.

*example*:
```
"1234567890"
```

---

### Create Task

Creates a new task within a workspace or project.

#### Name `string`

<dd>

The Name property specifies the name of the new task. It should be a descriptive title that clearly identifies the task's purpose or scope.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create the task in. If left blank, it defaults to the user’s first Workspace. The Workspace ID is typically a numeric or alphanumeric string.

*example*:
```
"1122334455"
```

#### Project `string`

<dd>

The Project property allows users to select which Project to create the task in. The Project ID is typically a numeric or alphanumeric string.

*example*:
```
"6677889900"
```

#### Notes `string`

<dd>

No description available.

*example*:
```
"Task related notes."
```

#### Due On Date `date`

<dd>

The Due On property specifies the date on which the task is due. It cannot be used together with Due At. The expected format is ISO 8601.

*example*:
```
"2023-07-20"
```

#### Due At Date `datetime`

<dd>

The Due At property specifies the exact date and time at which the task is due. It cannot be used together with Due On. The expected format is an ISO 8601 timestamp.

*example*:
```
"2023-07-20T15:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. The Assignee ID is typically a numeric or alphanumeric string.

*example*:
```
"9988776655"
```

#### Gid `string`

<dd>

The External ID (Gid) is an identifier from your application to associate with this task. This ID can be used to sync updates to this task later.

*example*:
```
"ext_123456"
```

---

### Update Task

Updates an existing task with new information.

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task that will be updated. The Task ID is typically in the format of a numeric string.

*example*:
```
"1234567890"
```

#### Complete Status `boolean`

<dd>

The Completed Status property indicates whether the task is completed or not. Set this to 'true' for completed or 'false' for incomplete.

*example*:
```
true
```

#### Name `string`

<dd>

The Name property specifies the updated name of the task. It should be a descriptive title that clearly identifies the task's purpose or scope.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

No description available.

*example*:
```
"Updated task related notes."
```

#### Due On Date `date`

<dd>

The Due On property specifies the updated date on which the task is due. It cannot be used together with Due At. The expected format is ISO 8601.

*example*:
```
"2023-08-15"
```

#### Due At Date `datetime`

<dd>

The Due At property specifies the updated exact date and time at which the task is due. It cannot be used together with Due On. The expected format is an ISO 8601 timestamp.

*example*:
```
"2023-08-15T17:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be reassigned. The Assignee ID is typically a numeric or alphanumeric string.

*example*:
```
"5566778899"
```

#### Gid `string`

<dd>

The External ID (Gid) is an identifier from your application to associate with this task. This ID can be used to sync updates to this task later.

*example*:
```
"ext_789012"
```

---

### Get Tasks

Retrieves a list of tasks, with options to filter by workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

The Workspace property is the ID of the Workspace to filter tasks on. The Workspace ID is typically a numeric or alphanumeric string.

*example*:
```
"1122334455"
```

#### Project `string`

<dd>

The Project property is the ID of the Project to filter tasks on. The Project ID is typically a numeric or alphanumeric string.

*example*:
```
"6677889900"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. The Assignee ID is typically a numeric or alphanumeric string.

*example*:
```
"9988776655"
```

#### Completed Since `datetime`

<dd>

The Completed Since property filters tasks to only return those that are either incomplete or that have been completed since this time. The expected format can be either ISO or Unix timestamp.

*example*:
```
"2023-01-01T00:00:00Z"
```

---

### Get Tasks By Id

Retrieves a specific task by its ID.

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task you wish to retrieve. The Task ID is typically in the format of a numeric string.

*example*:
```
"1234567890"
```

---

### Get Task By External Id

Retrieves a task associated with a specific external ID.

#### Gid `string`

<dd>

The External ID (Gid) is the identifier that this task is associated or synced with, from your application.

*example*:
```
"ext_123456"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project.

#### Section Id `string`

<dd>

The Section ID is the unique identifier for the section to which the task will be added. The Section ID is typically in the format of a numeric string.

*example*:
```
"2345678901"
```

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task that will be added to the section. The Task ID is typically in the format of a numeric string.

*example*:
```
"3456789012"
```

#### Before Task Id `string`

<dd>

The Before Task ID is the identifier of a task in the section before which the specified task will be inserted. It cannot be used with After Task ID. The Before Task ID is typically in the format of a numeric string.

*example*:
```
"4567890123"
```

#### After Task Id `string`

<dd>

The After Task ID is the identifier of a task in the section after which the specified task will be inserted. It cannot be used with Before Task ID. The After Task ID is typically in the format of a numeric string.

*example*:
```
"5678901234"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace from which to return the teams visible to the authorized user. The Workspace ID is typically a numeric or alphanumeric string.

*example*:
```
"1122334455"
```

---

### Get Workspaces

Retrieves a list of workspaces accessible to the authorized user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.
