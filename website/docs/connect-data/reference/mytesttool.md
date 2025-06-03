# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing tasks, organizing projects, and collaborating with teams.

## Connect Asana

Explain how to authenticate and connect to this service securely.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

Creates a new comment on a specified task.

#### Task `string`

<dd>

The Task ID represents the unique identifier of the task where the comment will be added. The comment will be authored by the currently authenticated user. It is required to specify the Task ID to add a comment. Users can find this ID in the task's details in Asana.

*example*:
```
1204619611402340
```

#### Text `string`

<dd>

This property represents the content of the comment to be added to the task. It is required to provide the text for the comment. There is no specific format for the text, but it should be a string.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within Asana.

#### Name `string`

<dd>

The Name property is used to specify the name of the new project. It is a required field and should be a string representing the project title.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select the workspace in which to create the project. If left blank, it defaults to the user's first workspace. The expected format is a workspace ID or a placeholder that references a workspace setting.

*example*:
```
"112233445566778899"
```

#### Team `string`

<dd>

The Team property allows users to select the team with whom to share the project. If left blank, it defaults to the user's first team. The expected format is a team ID or a placeholder that references a team setting.

*example*:
```
"998877665544332211"
```

#### Notes `string`

<dd>

The Notes property is used to add additional information or description to the project. It is an optional field and should be a string.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with options to filter by archived status.

#### Archived `string`

<dd>

The Archived property allows users to filter projects based on their archived status. Users can choose 'Yes' to show only archived projects, 'No' to display only active projects, or 'Default' to show both. It is an optional field.

*example*:
```
"Default"
```

---

### Get Project By Id

Retrieves a specific project by its unique identifier.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier of the project to be retrieved. It is a required field and users can find this ID in the project's details in Asana.

*example*:
```
"210987654321098765"
```

---

### Create Task

Creates a new task within Asana.

#### Name `string`

<dd>

The Name property is used to specify the name of the new task. It is a required field and should be a string representing the task title.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select the workspace in which to create the task. If left blank, it defaults to the user's first workspace. The expected format is a workspace ID or a placeholder that references a workspace setting.

*example*:
```
"112233445566778899"
```

#### Project `string`

<dd>

The Project property allows users to select the project in which to create the task. The expected format is a project ID or a placeholder that references a project setting.

*example*:
```
"210987654321098765"
```

#### Notes `string`

<dd>

No description available.

*example*:
```
"Task related notes here."
```

#### Due On Date `string`

<dd>

The Due On property specifies the date on which the task is due. It should be in the format "YYYY-MM-DD" and cannot be used together with Due At. It is an optional field.

*example*:
```
"2023-12-25"
```

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time at which the task is due, using an ISO timestamp format. It cannot be used together with Due On. It is an optional field.

*example*:
```
"2023-12-25T17:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. The expected format is a user ID or a placeholder that references an assignee setting.

*example*:
```
"1234567890123456"
```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application that you can associate with this task for syncing updates later. It is an optional field and can be any string that uniquely identifies the task in your system.

*example*:
```
"ext_task_001"
```

---

### Update Task

Updates an existing task within Asana.

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task that will be updated. It is a required field and users can find this ID in the task's details in Asana.

*example*:
```
"1204619611402340"
```

#### Complete Status `string`

<dd>

The Complete Status property is used to mark the task as completed or not. It is an optional field and should be a string representing the completion status.

*example*:
```
"Completed"
```

#### Name `string`

<dd>

The Name property is used to update the name of the task. It is an optional field and should be a string representing the task title.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

No description available.

*example*:
```
"Updated task notes."
```

#### Due On Date `string`

<dd>

The Due On property specifies the date on which the task is due. It should be in the format "YYYY-MM-DD" and cannot be used together with Due At. It is an optional field.

*example*:
```
"2023-12-25"
```

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time at which the task is due, using an ISO timestamp format. It cannot be used together with Due On. It is an optional field.

*example*:
```
"2023-12-25T17:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. The expected format is a user ID or a placeholder that references an assignee setting.

*example*:
```
"1234567890123456"
```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application that you can associate with this task for syncing updates later. It is an optional field and can be any string that uniquely identifies the task in your system.

*example*:
```
"ext_task_002"
```

---

### Get Tasks

Retrieves a list of tasks, with options to filter by workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace to filter tasks on. The expected format is a workspace ID or a placeholder that references a workspace setting.

*example*:
```
"112233445566778899"
```

#### Project `string`

<dd>

The Project property is the ID of the project to filter tasks on. The expected format is a project ID or a placeholder that references a project setting.

*example*:
```
"210987654321098765"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. The expected format is a user ID or a placeholder that references an assignee setting.

*example*:
```
"1234567890123456"
```

#### Completed Since `string`

<dd>

The Completed Since property is used to filter tasks that are either incomplete or have been completed since the specified time. The expected format is an ISO or Unix timestamp.

*example*:
```
"2023-01-01T00:00:00Z"
```

---

### Get Tasks By Id

Retrieves a specific task by its unique identifier.

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task to be retrieved. It is a required field and users can find this ID in the task's details in Asana.

*example*:
```
"1204619611402340"
```

---

### Get Task By External Id

Retrieves a task associated with a specified external ID.

#### Gid `string`

<dd>

The Gid, or External ID, is the identifier that this task is associated or synced with, from your application. It is a required field and can be any string that uniquely identifies the task in your system.

*example*:
```
"ext_task_003"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project.

#### Section Id `string`

<dd>

The Section ID is the unique identifier of the section to which the task will be added. The expected format is a section ID or a placeholder that references a section setting.

*example*:
```
"1234567890987654"
```

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task to be added to the section. It is a required field and users can find this ID in the task's details in Asana.

*example*:
```
"1204619611402340"
```

#### Before Task Id `string`

<dd>

The Before Task ID is the identifier of a task in the section before which the specified task will be inserted. It cannot be used with After Task ID. It is an optional field.

*example*:
```
"1204619611402341"
```

#### After Task Id `string`

<dd>

The After Task ID is the identifier of a task in the section after which the specified task will be inserted. It cannot be used with Before Task ID. It is an optional field.

*example*:
```
"1204619611402342"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property is used to specify the workspace from which to retrieve the list of teams visible to the authorized user. The expected format is a workspace ID or a placeholder that references a workspace setting.

*example*:
```
"112233445566778899"
```

---

### Get Workspaces

Retrieves a list of workspaces accessible to the authorized user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.
