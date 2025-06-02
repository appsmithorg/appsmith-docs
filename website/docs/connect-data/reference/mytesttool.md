# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating tasks, managing projects, adding comments, and organizing work within teams and workspaces.

## Connect Asana

Explain how to authenticate and connect to this service securely.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

Creates a new comment on a specified task.

#### Task `string`

<dd>

The Task ID property is used to specify the task to which the comment will be added. The comment will be authored by the currently authenticated user. Task IDs are typically in a numeric format.

*example*:
```
1234567890
```

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. Ensure that the text is properly formatted and does not exceed the character limit imposed by Asana.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within a specified workspace and team.

#### Name `string`

<dd>

The Name property is used to set the title of the new project. Choose a name that clearly identifies the project's purpose or content.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create the project in. If left blank, it defaults to the user's first Workspace. Workspaces are typically identified by a numeric or alphanumeric ID.

*example*:
```
"112233445566778899"
```

#### Team `string`

<dd>

The Team property allows users to select which Team to share the project with. If left blank, it defaults to the user's first Team. Teams are typically identified by a numeric or alphanumeric ID.

*example*:
```
"998877665544332211"
```

#### Notes `string`

<dd>

The Notes property is used to add additional information or context to the project. This can be a description of the project's goals, resources, or any other relevant details.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, optionally including archived projects.

#### Archived `string`

<dd>

The Archived property allows you to filter the projects list based on their archival status. Choose 'Yes' to include archived projects, 'No' to exclude them, or 'Default' to list both active and archived projects.

*example*:
```
"Yes"
```

---

### Get Project By Id

Retrieves a specific project by its ID.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier for the project you wish to retrieve. Project IDs are typically in a numeric format.

*example*:
```
"1234567890"
```

---

### Create Task

Creates a new task within a specified workspace, project, and optionally assigns it to a user.

#### Name `string`

<dd>

The Name property is used to set the title of the new task. Choose a name that clearly identifies the task's purpose or content.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property allows users to select which Workspace to create the task in. If left blank, it defaults to the user's first Workspace. Workspaces are typically identified by a numeric or alphanumeric ID.

*example*:
```
"112233445566778899"
```

#### Project `string`

<dd>

The Project property allows users to select which Project to create the task in. Projects are typically identified by a numeric or alphanumeric ID.

*example*:
```
"998877665544332211"
```

#### Notes `string`

<dd>

No description available.

*example*:
```
"Task related notes."
```

#### Due On Date `string`

<dd>

The Due On property specifies the date on which the task is due. It cannot be used together with Due At. The expected format is YYYY-MM-DD.

*example*:
```
"2023-05-01"
```

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time at which the task is due. It cannot be used together with Due On. The expected format is an ISO timestamp.

*example*:
```
"2023-05-01T09:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. Assignee IDs are typically numeric or alphanumeric.

*example*:
```
"123456789012345678"
```

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate with this task. This ID can be used to sync updates to the task later.

*example*:
```
"ext_987654321"
```

---

### Update Task

Updates an existing task with new information.

#### Task Id `string`

<dd>

The Task Id is the unique identifier for the task that will be updated. Task IDs are typically in a numeric format.

*example*:
```
"1234567890"
```

#### Complete Status `string`

<dd>

The Complete Status property is used to mark the task as completed or not. Provide a boolean value or a status string as accepted by Asana.

*example*:
```
"true"
```

#### Name `string`

<dd>

The Name property is used to update the title of the task. Choose a name that clearly identifies the task's updated purpose or content.

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

#### Due On Date `string`

<dd>

The Due On property specifies the updated date on which the task is due. It cannot be used together with Due At. The expected format is YYYY-MM-DD.

*example*:
```
"2023-06-01"
```

#### Due At Date `string`

<dd>

The Due At property specifies the updated exact date and time at which the task is due. It cannot be used together with Due On. The expected format is an ISO timestamp.

*example*:
```
"2023-06-01T12:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be reassigned. Assignee IDs are typically numeric or alphanumeric.

*example*:
```
"123456789012345678"
```

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate with this task. This ID can be used to sync updates to the task later.

*example*:
```
"ext_987654321"
```

---

### Get Tasks

Retrieves a list of tasks based on specified criteria.

#### Workspace `string`

<dd>

The Workspace property is the ID of the Workspace to filter tasks on. Workspaces are typically identified by a numeric or alphanumeric ID.

*example*:
```
"112233445566778899"
```

#### Project `string`

<dd>

The Project property is the ID of the Project to filter tasks on. Projects are typically identified by a numeric or alphanumeric ID.

*example*:
```
"998877665544332211"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. Assignee IDs are typically numeric or alphanumeric.

*example*:
```
"123456789012345678"
```

#### Completed Since `string`

<dd>

The Completed Since property filters tasks based on their completion status relative to a specified timestamp. Provide an ISO or Unix timestamp format.

*example*:
```
"2023-04-01T00:00:00Z"
```

---

### Get Tasks By Id

Retrieves a specific task by its ID.

#### Task Id `string`

<dd>

The Task Id is the unique identifier for the task you wish to retrieve. Task IDs are typically in a numeric format.

*example*:
```
"1234567890"
```

---

### Get Task By External Id

Retrieves a task associated with a specified external ID.

#### Gid `string`

<dd>

The Gid property is the external ID that this task is associated or synced with, from your application.

*example*:
```
"ext_987654321"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project.

#### Section Id `string`

<dd>

The Section Id is the unique identifier for the section to which the task will be added. Section IDs are typically in a numeric or alphanumeric format.

*example*:
```
"112233445566778899"
```

#### Task Id `string`

<dd>

The Task Id is the unique identifier for the task that will be added to the section. Task IDs are typically in a numeric format.

*example*:
```
"1204619611402340"
```

#### Before Task Id `string`

<dd>

The Before Task Id is the ID of a task in the section before which the specified task will be inserted. It cannot be used with After Task ID. Task IDs are typically in a numeric format.

*example*:
```
"1204619611402341"
```

#### After Task Id `string`

<dd>

The After Task Id is the ID of a task in the section after which the specified task will be inserted. It cannot be used with Before Task ID. Task IDs are typically in a numeric format.

*example*:
```
"1204619611402339"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property is used to specify the workspace for which teams should be listed. The authorized user must have visibility of these teams. Workspaces are typically identified by a numeric or alphanumeric ID.

*example*:
```
"112233445566778899"
```

---

### Get Workspaces

Retrieves a list of workspaces available to the authenticated user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.

---
