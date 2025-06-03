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

The Task ID is a unique identifier for the task to which the comment will be added. The comment will be authored by the currently authenticated user. Task IDs typically follow a numeric format.

*example*:
```
1234567890
```

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. It should be a clear and concise message. If omitted, the command will not execute as the text content is required.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within a specified workspace and team.

#### Name `string`

<dd>

The Name property specifies the title of the new project. It is a required field and should be unique within the workspace to avoid confusion.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property is used to select the workspace in which to create the project. If left blank, it defaults to the user’s first workspace. Workspace IDs typically follow a numeric or alphanumeric format.

*example*:
```
"112233445566778899"
```

#### Team `string`

<dd>

The Team property allows the selection of a team to share the project with. If left blank, it defaults to the user’s first team. Team IDs typically follow a numeric or alphanumeric format.

*example*:
```
"998877665544332211"
```

#### Notes `string`

<dd>

The Notes property is for adding any additional information or description to the project. This field is optional and can be left blank.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with options to include archived projects.

#### Archived `string`

<dd>

The Archived property filters the projects to be retrieved. Selecting "Yes" shows only archived projects, "No" shows only active projects, and "Default" shows both. This field is optional.

*example*:
```
"Yes"
```

---

### Get Project By Id

Retrieves a specific project by its ID.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier of the project to be retrieved. Project IDs typically follow a numeric or alphanumeric format.

*example*:
```
"1234567890"
```

---

### Create Task

Creates a new task within a specified workspace and project.

#### Name `string`

<dd>

The Name property specifies the title of the new task. It is a required field and should be descriptive to ensure clarity.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property is used to select the workspace in which to create the task. If left blank, it defaults to the user’s first workspace. Workspace IDs typically follow a numeric or alphanumeric format.

*example*:
```
"112233445566778899"
```

#### Project `string`

<dd>

The Project property allows the selection of a project to create the task within. Project IDs typically follow a numeric or alphanumeric format.

*example*:
```
"998877665544332211"
```

#### Notes `string`

<dd>

The Notes property is for adding any additional information or description to the task. This field is optional and can be left blank.

*example*:
```
"Task details and notes."
```

#### Due On Date `date`

<dd>

The Due On Date property specifies the date by which the task is due. It should be in the format "YYYY-MM-DD" and cannot be used together with Due At Date. This field is optional.

*example*:
```
"2023-07-15"
```

#### Due At Date `datetime`

<dd>

The Due At Date property specifies the exact date and time at which the task is due, in ISO 8601 format. It cannot be used together with Due On Date. This field is optional.

*example*:
```
"2023-07-15T14:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. If left blank, the task will not be assigned to any user. User IDs typically follow a numeric or alphanumeric format.

*example*:
```
"123456789012345"
```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application to associate with the task. It is used to sync updates to the task later. This field is optional.

*example*:
```
"external-id-1234"
```

---

### Update Task

Updates an existing task with new information.

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be updated. It is a required field for the update action. Task IDs typically follow a numeric format.

*example*:
```
"1234567890"
```

#### Complete Status `boolean`

<dd>

The Complete Status property indicates whether the task is completed. It is a boolean value where "true" represents a completed task and "false" represents an incomplete task.

*example*:
```
true
```

#### Name `string`

<dd>

The Name property specifies the updated title of the task. It is optional and should be descriptive to ensure clarity.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

The Notes property is for updating any additional information or description of the task. This field is optional and can be left blank.

*example*:
```
"Updated task details and notes."
```

#### Due On Date `date`

<dd>

The Due On Date property specifies the updated date by which the task is due. It should be in the format "YYYY-MM-DD" and cannot be used together with Due At Date. This field is optional.

*example*:
```
"2023-08-20"
```

#### Due At Date `datetime`

<dd>

The Due At Date property specifies the updated exact date and time at which the task is due, in ISO 8601 format. It cannot be used together with Due On Date. This field is optional.

*example*:
```
"2023-08-20T16:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be reassigned. If left blank, the task will remain with the current assignee. User IDs typically follow a numeric or alphanumeric format.

*example*:
```
"987654321098765"
```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application to associate with the task. It is used to sync updates to the task later. This field is optional.

*example*:
```
"external-id-5678"
```

---

### Get Tasks

Retrieves a list of tasks based on workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace to filter tasks on. Workspace IDs typically follow a numeric or alphanumeric format.

*example*:
```
"112233445566778899"
```

#### Project `string`

<dd>

The Project property is the ID of the project to filter tasks on. Project IDs typically follow a numeric or alphanumeric format.

*example*:
```
"998877665544332211"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. User IDs typically follow a numeric or alphanumeric format.

*example*:
```
"123456789012345"
```

#### Completed Since `datetime`

<dd>

The Completed Since property filters tasks to only those that are incomplete or have been completed since the specified time. It should be in ISO 8601 or Unix timestamp format.

*example*:
```
"2023-01-01T00:00:00Z"
```

---

### Get Tasks By Id

Retrieves a specific task by its ID.

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be retrieved. Task IDs typically follow a numeric format.

*example*:
```
"1234567890"
```

---

### Get Task By External Id

Retrieves a task associated with a specific external ID.

#### Gid `string`

<dd>

The Gid, or External ID, is the identifier from your application that the task is associated or synced with. This field is required to retrieve the corresponding task.

*example*:
```
"external-id-1234"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project.

#### Section Id `string`

<dd>

The Section Id is the unique identifier of the section to which the task will be added. Section IDs typically follow a numeric or alphanumeric format.

*example*:
```
"112233445566"
```

#### Task Id `string`

<dd>

The Task Id is the unique identifier of the task to be added to the section. It is a required field. Task IDs typically follow a numeric format.

*example*:
```
"1204619611402340"
```

#### Before Task Id `string`

<dd>

The Before Task Id is the ID of a task in the section before which the specified task will be inserted. It cannot be used with After Task Id. This field is optional.

*example*:
```
"1204619611402341"
```

#### After Task Id `string`

<dd>

The After Task Id is the ID of a task in the section after which the specified task will be inserted. It cannot be used with Before Task Id. This field is optional.

*example*:
```
"1204619611402339"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace for which the teams will be listed. It is required to retrieve the corresponding teams. Workspace IDs typically follow a numeric or alphanumeric format.

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

Executes a custom action defined by the user.

No properties available.
