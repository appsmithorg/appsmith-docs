```markdown
# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing projects, and handling tasks.

## Connect Asana

To securely authenticate and connect to Asana, users must use OAuth 2.0. This ensures that all interactions with Asana are authorized and secure. Users will need to grant permissions to access their Asana data, which will allow them to perform various actions within their Asana account through this integration.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

This command allows users to add a comment to a specific task in Asana.

#### Task `string`

<dd>

This property specifies the ID of the task to which the comment will be added. The comment will be authored by the currently authenticated user. The Task ID is a unique identifier in Asana, typically formatted as a string of numbers. If omitted, the comment cannot be associated with any task.

*example*:
```
1204619611402340
```

#### Text `string`

<dd>

This property contains the content of the comment to be added to the task. It should be a string that represents the comment text. If omitted, no comment will be created.

*example*:
```
"This is a comment."
```

---

### Create Project

This command creates a new project in Asana.

#### Name `string`

<dd>

This property represents the name of the project to be created. It should be a descriptive string that identifies the project. If omitted, the project will not have a name, which is typically required.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

This property specifies the workspace in which the project will be created. If left blank, it defaults to the user’s first workspace. Workspaces are organizational units in Asana, and users can select them via Connect Portal Workflow Settings.

*example*:
```
"{{settings.workspace}}"
```

#### Team `string`

<dd>

This property determines the team with which the project will be shared. If left blank, it defaults to the user’s first team. Teams in Asana are groups of users working together on projects.

*example*:
```
"{{settings.team}}"
```

#### Notes `string`

<dd>

This property contains additional notes or descriptions for the project. It can be used to provide context or details about the project’s purpose.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

This command retrieves a list of projects from Asana.

#### Archived `string`

<dd>

This property specifies whether to include archived projects in the results. Options include "Yes" for archived projects, "No" for active projects only, and "Default" for both. If omitted, both archived and active projects are shown.

*example*:
```
"Yes"
```

---

### Get Project By Id

This command retrieves details of a specific project by its ID.

#### Project Filter Id `string`

<dd>

This property is the unique identifier of the project to retrieve. The Project ID is typically a numeric string. If omitted, no project will be retrieved.

*example*:
```
1204619611402340
```

---

### Create Task

This command creates a new task in Asana.

#### Name `string`

<dd>

This property specifies the name of the task to be created. It should be a descriptive string that identifies the task. If omitted, the task will not have a name, which is typically required.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

This property specifies the workspace in which the task will be created. Defaults to the user’s first workspace if left blank. Workspaces are organizational units in Asana.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

This property specifies the project in which the task will be created. Projects organize tasks within a workspace.

*example*:
```
"{{settings.project}}"
```

#### Notes `string`

<dd>

This property contains additional notes or descriptions for the task. It can be used to provide context or details about the task’s purpose.

*example*:
```
"Complete the initial draft."
```

#### Due On Date `date`

<dd>

This property specifies the date on which the task is due. It must be in the format "YYYY-MM-DD". Cannot be used together with Due At.

*example*:
```
"2023-12-31"
```

#### Due At Date `datetime`

<dd>

This property specifies the exact date and time the task is due, using an ISO 8601 timestamp. Cannot be used together with Due On.

*example*:
```
"2023-12-31T23:59:59Z"
```

#### Assignee `string`

<dd>

This property is the ID of the Asana user to whom the task will be assigned. The Assignee ID is a unique identifier in Asana.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

This property is an external ID from your application to associate with the task. It can be used to sync updates to this task later.

*example*:
```
"external_123456"
```

---

### Update Task

This command updates an existing task in Asana.

#### Task Id `string`

<dd>

This property specifies the ID of the task to be updated. The Task ID is a unique identifier in Asana.

*example*:
```
1204619611402340
```

#### Complete Status `string`

<dd>

This property indicates whether the task is completed. It can be set to "true" or "false".

*example*:
```
"true"
```

#### Name `string`

<dd>

This property updates the name of the task. It should be a descriptive string that identifies the task.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

This property updates the notes or descriptions for the task. It can be used to provide additional context or details about the task’s purpose.

*example*:
```
"Updated notes for the task."
```

#### Due On Date `date`

<dd>

This property updates the date on which the task is due. It must be in the format "YYYY-MM-DD". Cannot be used together with Due At.

*example*:
```
"2023-12-31"
```

#### Due At Date `datetime`

<dd>

This property updates the exact date and time the task is due, using an ISO 8601 timestamp. Cannot be used together with Due On.

*example*:
```
"2023-12-31T23:59:59Z"
```

#### Assignee `string`

<dd>

This property updates the ID of the Asana user to whom the task is assigned. The Assignee ID is a unique identifier in Asana.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

This property updates the external ID from your application associated with the task. It can be used to sync updates to this task later.

*example*:
```
"external_123456"
```

---

### Get Tasks

This command retrieves a list of tasks from Asana.

#### Workspace `string`

<dd>

This property specifies the ID of the workspace to filter tasks on. Workspaces are organizational units in Asana.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

This property specifies the ID of the project to filter tasks on. Projects organize tasks within a workspace.

*example*:
```
"{{settings.project}}"
```

#### Assignee `string`

<dd>

This property specifies the ID of the assignee to filter tasks on. The Assignee ID is a unique identifier in Asana.

*example*:
```
"{{settings.assignee}}"
```

#### Completed Since `datetime`

<dd>

This property specifies a date and time (ISO or Unix timestamp) to filter tasks that are either incomplete or have been completed since this time.

*example*:
```
"2023-01-01T00:00:00Z"
```

---

### Get Tasks By Id

This command retrieves details of a specific task by its ID.

#### Task Id `string`

<dd>

This property is the unique identifier of the task to retrieve. The Task ID is typically a numeric string. If omitted, no task will be retrieved.

*example*:
```
1204619611402340
```

---

### Get Task By External Id

This command retrieves a task by its external ID.

#### Gid `string`

<dd>

This property is the external ID associated with the task from your application. It allows for syncing and retrieval of tasks based on external identifiers.

*example*:
```
"external_123456"
```

---

### Add Task To Section

This command adds a task to a specific section within a project.

#### Section Id `string`

<dd>

This property specifies the ID of the section to which the task will be added. Sections help organize tasks within a project.

*example*:
```
"{{settings.section}}"
```

#### Task Id `string`

<dd>

This property specifies the ID of the task to be added to the section. The Task ID is a unique identifier in Asana.

*example*:
```
1204619611402340
```

#### Before Task Id `string`

<dd>

This property specifies the ID of a task in the section that the new task will be inserted before. Cannot be used with After Task ID.

*example*:
```
1204619611402340
```

#### After Task Id `string`

<dd>

This property specifies the ID of a task in the section that the new task will be inserted after. Cannot be used with Before Task ID.

*example*:
```
1204619611402340
```

---

### Get Teams

This command retrieves a list of teams within a workspace.

#### Workspace `string`

<dd>

This property specifies the workspace from which to retrieve teams. Workspaces are organizational units in Asana.

*example*:
```
"{{settings.workspace}}"
```

---

### Get Workspaces

This command retrieves a list of workspaces available to the authenticated user.

No properties available.

---

### Custom Action

This command allows for the execution of a custom action within Asana.

No properties available.
```

