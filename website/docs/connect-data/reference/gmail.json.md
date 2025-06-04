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

---

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. This field is required to create a comment.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within the specified workspace and team.

#### Name `string`

<dd>

The Name property specifies the name of the new project. This field is required to create a project.

*example*:
```
"Stuff to buy"
```

---

#### Workspace `string`

<dd>

The Workspace property allows users to select the workspace in which to create the project. If left blank, it defaults to the user's first workspace. This field is optional.

*example*:
```
"{{settings.workspace}}"
```

---

#### Team `string`

<dd>

The Team property allows users to select the team with which to share the project. If left blank, it defaults to the user's first team. This field is optional.

*example*:
```
"{{settings.team}}"
```

---

#### Notes `string`

<dd>

The Notes property is used to add additional information or description to the project. This field is optional.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with options to include archived projects.

#### Archived `string`

<dd>

The Archived property allows users to filter the projects list based on their archived status. Options are Yes for archived projects, No for active projects, and Default for both. This field is optional.

*example*:
```
"Yes"
```

---

### Get Project By Id

Retrieves a specific project by its ID.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier of the project to be retrieved. This field is required to fetch a specific project.

*example*:
```
"114748165638217"
```

---

### Create Task

Creates a new task within the specified workspace, project, and assigns it to a user.

#### Name `string`

<dd>

The Name property specifies the name of the new task. This field is required to create a task.

*example*:
```
"Task Name"
```

---

#### Workspace `string`

<dd>

The Workspace property allows users to select the workspace in which to create the task. If left blank, it defaults to the user's first workspace. This field is optional.

*example*:
```
"{{settings.workspace}}"
```

---

#### Project `string`

<dd>

The Project property allows users to select the project within which to create the task. This field is optional.

*example*:
```
"{{settings.project}}"
```

---

#### Notes `string`

<dd>

No description available.

*example*:
```
"Task related notes."
```

---

#### Due On Date `string`

<dd>

The Due On property specifies the date on which the task is due. It should be in the format "YYYY-MM-DD" and cannot be used together with Due At. This field is optional.

*example*:
```
"2023-05-10"
```

---

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time at which the task is due, following the ISO timestamp format. It cannot be used together with Due On. This field is optional.

*example*:
```
"2023-05-10T17:00:00Z"
```

---

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. This field is optional.

*example*:
```
"{{settings.assignee}}"
```

---

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate with the task. This allows for syncing updates to the task later. This field is optional.

*example*:
```
"ext_6789abcd1234"
```

---

### Update Task

Updates an existing task with new details.

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be updated. This field is required to update a task.

*example*:
```
"1204619611402340"
```

---

#### Complete Status `boolean`

<dd>

The Complete Status property indicates whether the task has been completed. This field is optional.

*example*:
```
true
```

---

#### Name `string`

<dd>

The Name property specifies the new name of the task. This field is optional.

*example*:
```
"Updated Task Name"
```

---

#### Notes `string`

<dd>

No description available.

*example*:
```
"Updated task notes."
```

---

#### Due On Date `string`

<dd>

The Due On property specifies the date on which the task is due. It should be in the format "YYYY-MM-DD" and cannot be used together with Due At. This field is optional.

*example*:
```
"2023-06-15"
```

---

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time at which the task is due, following the ISO timestamp format. It cannot be used together with Due On. This field is optional.

*example*:
```
"2023-06-15T14:30:00Z"
```

---

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. This field is optional.

*example*:
```
"{{settings.assignee}}"
```

---

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate with the task. This allows for syncing updates to the task later. This field is optional.

*example*:
```
"ext_6789abcd1234"
```

---

### Get Tasks

Retrieves a list of tasks based on the specified filters.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace to filter tasks on. This field is optional.

*example*:
```
"{{settings.workspace}}"
```

---

#### Project `string`

<dd>

The Project property is the ID of the project to filter tasks on. This field is optional.

*example*:
```
"{{settings.project}}"
```

---

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. This field is optional.

*example*:
```
"{{settings.assignee}}"
```

---

#### Completed Since `string`

<dd>

The Completed Since property filters tasks to only return those that are either incomplete or have been completed since the specified time. The time can be an ISO or Unix timestamp. This field is optional.

*example*:
```
"2014-04-25T16:15:47-04:00"
```

---

### Get Tasks By Id

Retrieves a specific task by its ID.

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be retrieved. This field is required to fetch a specific task.

*example*:
```
"1204619611402340"
```

---

### Get Task By External Id

Retrieves a task associated with a given external ID.

#### Gid `string`

<dd>

The Gid is the external ID that the task is associated or synced with, from your application. This field is required to fetch a task by external ID.

*example*:
```
"ext_6789abcd1234"
```

---

### Add Task To Section

Adds a task to a specified section within a project.

#### Section Id `string`

<dd>

The Section Id is the unique identifier of the section to which the task will be added. This field is required.

*example*:
```
"{{settings.section}}"
```

---

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be added to the section. This field is required.

*example*:
```
"1204619611402340"
```

---

#### Before Task Id `string`

<dd>

The Before Task Id specifies a task in the section before which the new task will be inserted. It cannot be used with After Task Id. This field is optional.

*example*:
```
"1204619611402341"
```

---

#### After Task Id `string`

<dd>

The After Task Id specifies a task in the section after which the new task will be inserted. It cannot be used with Before Task Id. This field is optional.

*example*:
```
"1204619611402339"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace for which to return the visible teams to the authorized user. This field is required.

*example*:
```
"{{settings.workspace}}"
```

---

### Get Workspaces

Retrieves a list of workspaces available to the authorized user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.

---
