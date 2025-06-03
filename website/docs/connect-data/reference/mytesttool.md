# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing projects, tasks, and organizing them into sections and teams.

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
```Enter Task```

#### Text `string`

<dd>

This property represents the content of the comment to be added to the task. It should be a string of text. If omitted, no comment will be added.

*example*:
```"This is a comment."```

---

### Create Project

Creates a new project within a specified workspace and team.

#### Name `string`

<dd>

The Name property specifies the name of the new project. It is a required field to create a project.

*example*:
```"Stuff to buy"```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create the project in. If left blank, it defaults to the user’s first Workspace. This field is optional.

*example*:
```Enter Workspace```

#### Team `string`

<dd>

The Team property allows users to select which Team to share the new project with. If left blank, it defaults to the user’s first Team. This field is optional.

*example*:
```Enter Team```

#### Notes `string`

<dd>

No description available.

*example*:
```"These are things we need to purchase."```

---

### Get Projects

Retrieves a list of projects, with options to include archived projects.

#### Archived `string`

<dd>

The Archived property allows users to filter projects based on their archival status. Selecting "Yes" shows only archived projects, "No" shows only active projects, and "Default" shows both. This field is optional.

*example*:
```Enter Archived```

---

### Get Project By Id

Retrieves a specific project by its ID.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier of the project to retrieve. It is a required field to fetch a specific project.

*example*:
```Enter Project Filter Id```

---

### Create Task

Creates a new task within a specified workspace, project, and assigns it to a user.

#### Name `string`

<dd>

The Name property specifies the name of the new task. It is a required field to create a task.

*example*:
```"Task Name"```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create the task in. If left blank, it defaults to the user’s first Workspace. This field is optional.

*example*:
```Enter Workspace```

#### Project `string`

<dd>

The Project property allows users to select which Project to create the task in. This field is optional.

*example*:
```Enter Project```

#### Notes `string`

<dd>

No description available.

*example*:
```Enter Notes```

#### Due On Date `date`

<dd>

The Due On property specifies the date on which the task is due. It cannot be used together with Due At. The expected format is ISO 8601. This field is optional.

*example*:
```2023-05-15```

#### Due At Date `datetime`

<dd>

The Due At property specifies the exact date and time at which the task is due. It cannot be used together with Due On. The expected format is an ISO 8601 timestamp. This field is optional.

*example*:
```2023-05-15T10:00:00Z```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. This field is optional.

*example*:
```Enter Assignee```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application to associate with this task. It is used to sync updates to the task later. This field is optional.

*example*:
```Enter Gid```

---

### Update Task

Updates an existing task with new details or status.

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be updated. It is a required field for updating a task.

*example*:
```Enter Task Id```

#### Complete Status `boolean`

<dd>

The Complete Status property indicates whether the task has been completed. It is a required field for updating the task's completion status.

*example*:
```Enter Complete Status```

#### Name `string`

<dd>

The Name property specifies the new name of the task. It is an optional field when updating a task.

*example*:
```"Task Name"```

#### Notes `string`

<dd>

No description available.

*example*:
```Enter Notes```

#### Due On Date `date`

<dd>

The Due On property specifies the new due date for the task. It cannot be used together with Due At. The expected format is ISO 8601. This field is optional.

*example*:
```2023-05-15```

#### Due At Date `datetime`

<dd>

The Due At property specifies the new due date and time for the task. It cannot be used together with Due On. The expected format is an ISO 8601 timestamp. This field is optional.

*example*:
```2023-05-15T10:00:00Z```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be reassigned. This field is optional.

*example*:
```Enter Assignee```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application to associate with this task. It is used to sync updates to the task later. This field is optional.

*example*:
```Enter Gid```

---

### Get Tasks

Retrieves a list of tasks based on workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

The Workspace property is the ID of the Workspace to filter tasks on. This field is optional.

*example*:
```Enter Workspace```

#### Project `string`

<dd>

The Project property is the ID of the Project to filter tasks on. This field is optional.

*example*:
```Enter Project```

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. This field is optional.

*example*:
```Enter Assignee```

#### Completed Since `datetime`

<dd>

The Completed Since property filters tasks to only return those that are either incomplete or have been completed since the specified time. The expected format is ISO 8601 or Unix timestamp. This field is optional.

*example*:
```2023-04-01T00:00:00Z```

---

### Get Tasks By Id

Retrieves a specific task by its ID.

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to retrieve. It is a required field to fetch a specific task.

*example*:
```Enter Task Id```

---

### Get Task By External Id

Retrieves a task associated with an external ID from your application.

#### Gid `string`

<dd>

The Gid, or External ID, is the identifier that the task is associated or synced with, from your application. It is a required field to retrieve a task by external ID.

*example*:
```Enter Gid```

---

### Add Task To Section

Adds a task to a specified section within a project.

#### Section Id `string`

<dd>

The Section Id is the unique identifier of the section to which the task will be added. It is a required field for placing a task in a section.

*example*:
```Enter Section Id```

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be added to the section. It is a required field for this operation.

*example*:
```Enter Task Id```

#### Before Task Id `string`

<dd>

The Before Task Id is the ID of a task in the section before which the new task will be inserted. It cannot be used with After Task ID. This field is optional.

*example*:
```Enter Before Task Id```

#### After Task Id `string`

<dd>

The After Task Id is the ID of a task in the section after which the new task will be inserted. It cannot be used with Before Task ID. This field is optional.

*example*:
```Enter After Task Id```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property specifies the workspace for which to return the teams visible to the authorized user. It is a required field to retrieve teams.

*example*:
```Enter Workspace```

---

### Get Workspaces

Retrieves a list of workspaces available to the authorized user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.
