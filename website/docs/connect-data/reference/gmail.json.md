# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing projects, tasks, and organizing teamwork.

## Connect Asana

Explain how to authenticate and connect to this service securely.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

Creates a new comment on a specified task within Asana.

#### Task `string`

<dd>

The Task ID is a unique identifier for the task to which the comment will be added. The comment will be authored by the currently authenticated user. Task IDs typically follow a numeric format.

*example*:
```
1204619611402340
```

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. It should be a clear and concise message. If omitted, no comment will be added.

*example*:
```
"This is a comment."
```

---

### Create Project

Creates a new project within a specified workspace and team in Asana.

#### Name `string`

<dd>

The Name property specifies the name of the new project. It is a required field and should be a unique and descriptive title for the project.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property is used to select the workspace in which to create the project. If left blank, it defaults to the user's first workspace. Workspace IDs typically follow a numeric format.

*example*:
```
"1123581321345589"
```

#### Team `string`

<dd>

The Team property allows users to select which team to share the project with. If left blank, it defaults to the user's first team. Team IDs typically follow a numeric format.

*example*:
```
"9988776655443322"
```

#### Notes `string`

<dd>

The Notes property is used to add additional information or a description to the project. This field is optional and can include details relevant to the project's purpose or scope.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with the option to include archived projects.

#### Archived `string`

<dd>

The Archived property allows users to filter the project list based on their archival status. Options are 'Yes' to show only archived projects, 'No' to show only active projects, and 'Default' to show both. This field is optional.

*example*:
```
"No"
```

---

### Get Project By Id

Retrieves a specific project by its unique identifier in Asana.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier for the project to retrieve. Project IDs typically follow a numeric format.

*example*:
```
"2156789412345678"
```

---

### Create Task

Creates a new task within a specified workspace, project, and assigns it to a user in Asana.

#### Name `string`

<dd>

The Name property specifies the name of the new task. It is a required field and should be a clear and descriptive title for the task.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property is used to select the workspace in which to create the task. If left blank, it defaults to the user's first workspace. Workspace IDs typically follow a numeric format.

*example*:
```
"1123581321345589"
```

#### Project `string`

<dd>

The Project property allows users to select which project to create the task in. Project IDs typically follow a numeric format.

*example*:
```
"2156789412345678"
```

#### Notes `string`

<dd>

The Notes property is used to add additional information or a description to the task. This field is optional and can include details relevant to the task's purpose or scope.

*example*:
```
"Complete the quarterly report."
```

#### Due On Date `string`

<dd>

The Due On property specifies the date on which the task is due. It should be in the format "YYYY-MM-DD". This field cannot be used together with Due At.

*example*:
```
"2023-12-31"
```

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time at which the task is due. It should be an ISO timestamp. This field cannot be used together with Due On.

*example*:
```
"2023-12-31T23:59:59Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be assigned. Assignee IDs typically follow a numeric format.

*example*:
```
"9876543210123456"
```

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate with this task. This ID can be used to sync updates to the task later. The format for this ID can vary based on your application's requirements.

*example*:
```
"ext_987654321"
```

---

### Update Task

Updates the details of an existing task in Asana.

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task that will be updated. Task IDs typically follow a numeric format.

*example*:
```
"1204619611402340"
```

#### Complete Status `string`

<dd>

The Complete Status property indicates the completion status of the task. This field is optional and can be used to mark a task as complete or incomplete.

*example*:
```
"Complete"
```

#### Name `string`

<dd>

The Name property specifies the new name of the task. It is an optional field and should be a clear and descriptive title for the task.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

The Notes property is used to update the additional information or description of the task. This field is optional and can include updated details relevant to the task's purpose or scope.

*example*:
```
"Update the quarterly report with recent figures."
```

#### Due On Date `string`

<dd>

The Due On property specifies the updated date on which the task is due. It should be in the format "YYYY-MM-DD". This field cannot be used together with Due At.

*example*:
```
"2023-12-31"
```

#### Due At Date `string`

<dd>

The Due At property specifies the updated exact date and time at which the task is due. It should be an ISO timestamp. This field cannot be used together with Due On.

*example*:
```
"2023-12-31T23:59:59Z"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the Asana user to whom the task will be reassigned. Assignee IDs typically follow a numeric format.

*example*:
```
"9876543210123456"
```

#### Gid `string`

<dd>

The Gid property is an external ID from your application to associate with this task. This ID can be used to sync updates to the task later. The format for this ID can vary based on your application's requirements.

*example*:
```
"ext_987654321"
```

---

### Get Tasks

Retrieves a list of tasks based on workspace, project, assignee, and completion status in Asana.

#### Workspace `string`

<dd>

The Workspace property is the ID of the workspace to filter tasks on. Workspace IDs typically follow a numeric format.

*example*:
```
"1123581321345589"
```

#### Project `string`

<dd>

The Project property is the ID of the project to filter tasks on. Project IDs typically follow a numeric format.

*example*:
```
"2156789412345678"
```

#### Assignee `string`

<dd>

The Assignee property is the ID of the assignee to filter tasks on. Assignee IDs typically follow a numeric format.

*example*:
```
"9876543210123456"
```

#### Completed Since `string`

<dd>

The Completed Since property filters tasks based on their completion status relative to the specified time. It accepts both ISO and Unix timestamp formats.

*example*:
```
"2023-01-01T00:00:00Z"
```

---

### Get Tasks By Id

Retrieves a specific task by its unique identifier in Asana.

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task to retrieve. Task IDs typically follow a numeric format.

*example*:
```
"1204619611402340"
```

---

### Get Task By External Id

Retrieves a task associated with a specified external ID in Asana.

#### Gid `string`

<dd>

The Gid property is the external ID associated with the task in your application. This ID can be used to retrieve the task from Asana. The format for this ID can vary based on your application's requirements.

*example*:
```
"ext_987654321"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project in Asana.

#### Section Id `string`

<dd>

The Section ID is the unique identifier for the section to which the task will be added. Section IDs typically follow a numeric format.

*example*:
```
"1122334455667788"
```

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task to be added to the section. Task IDs typically follow a numeric format.

*example*:
```
"1204619611402340"
```

#### Before Task Id `string`

<dd>

The Before Task ID specifies the ID of a task in the section before which the task will be inserted. It cannot be used with After Task ID. Task IDs typically follow a numeric format.

*example*:
```
"1204619611402341"
```

#### After Task Id `string`

<dd>

The After Task ID specifies the ID of a task in the section after which the task will be inserted. It cannot be used with Before Task ID. Task IDs typically follow a numeric format.

*example*:
```
"1204619611402339"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace in Asana.

#### Workspace `string`

<dd>

The Workspace property specifies the ID of the workspace for which to return the teams visible to the authorized user. Workspace IDs typically follow a numeric format.

*example*:
```
"1123581321345589"
```

---

### Get Workspaces

Retrieves a list of workspaces accessible to the authorized user in Asana.

No properties available.

---

### Custom Action

Performs a custom action within Asana.

No properties available.
