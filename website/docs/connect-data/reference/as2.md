```markdown
# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing projects, checking task availability, and more.

## Connect Asana

To securely connect to Asana, you must authenticate using OAuth. This process involves redirecting users to Asana's authorization page, where they can grant your application access to their Asana account. Upon successful authorization, Asana will redirect back to your application with an authorization code, which you can exchange for an access token. This token should be securely stored and used for subsequent API requests.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

This command adds a comment to a specified task in Asana.

#### Task `string`

<dd>

This property specifies the ID of the task to which the comment will be added. The comment will be authored by the currently authenticated user. Task IDs are unique identifiers in Asana, typically in the format of a long integer string. If omitted, the command will fail as this is a required field.

*example*:
```
1204619611402340
```

#### Text `string`

<dd>

This property contains the text of the comment to be added. It should be a string of characters representing the content of the comment. If omitted, the comment will not be created as this is a required field.

*example*:
```
"This is a comment."
```

---

### Create Project

This command creates a new project within a specified workspace in Asana.

#### Name `string`

<dd>

This property specifies the name of the project to be created. It should be a descriptive string that identifies the project. If omitted, the project will not be created as this is a required field.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

This property determines the workspace in which the project will be created. If left blank, it defaults to the user's first workspace. Workspaces are identified by unique IDs, which can be found in the Asana interface or via API calls.

*example*:
```
"{{settings.workspace}}"
```

#### Team `string`

<dd>

This property specifies the team with which the project will be shared. If left blank, it defaults to the user's first team. Teams are identified by unique IDs, and users can select a team through the Connect Portal Workflow Settings.

*example*:
```
"{{settings.team}}"
```

#### Notes `string`

<dd>

This property allows you to add additional notes or a description to the project. It is optional and can be used to provide more context or details about the project.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

This command retrieves a list of projects, optionally including archived ones.

#### Archived `string`

<dd>

This property determines whether to include archived projects in the results. Options include "Yes" to show only archived projects, "No" to show only active projects, and "Default" to show both. If omitted, the default behavior is applied.

*example*:
```
"Yes"
```

---

### Get Project By Id

This command retrieves details of a specific project by its ID.

#### Project Filter Id `string`

<dd>

This property specifies the ID of the project to retrieve. Project IDs are unique identifiers in Asana. If omitted, the command will fail as this is a required field.

*example*:
```
1204619611402340
```

---

### Create Task

This command creates a new task within a specified project and workspace in Asana.

#### Name `string`

<dd>

This property specifies the name of the task to be created. It should be a descriptive string that identifies the task. If omitted, the task will not be created as this is a required field.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

This property determines the workspace in which the task will be created. If left blank, it defaults to the user's first workspace. Workspaces are identified by unique IDs.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

This property specifies the project in which the task will be created. Projects are identified by unique IDs, and users can select a project through the Connect Portal Workflow Settings.

*example*:
```
"{{settings.project}}"
```

#### Notes `string`

<dd>

This property allows you to add additional notes or a description to the task. It is optional and can be used to provide more context or details about the task.

*example*:
```
"Enter Notes"
```

#### Due On Date `date`

<dd>

This property specifies the due date for the task in the format "YYYY-MM-DD". It cannot be used together with the Due At property. If omitted, the task will not have a due date.

*example*:
```
"2023-12-31"
```

#### Due At Date `datetime`

<dd>

This property specifies the due date and time for the task in ISO 8601 format. It cannot be used together with the Due On property. If omitted, the task will not have a due date and time.

*example*:
```
"2023-12-31T23:59:59Z"
```

#### Assignee `string`

<dd>

This property specifies the ID of the Asana user to whom the task will be assigned. User IDs are unique identifiers in Asana. If omitted, the task will not be assigned to anyone.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

This property allows you to associate an external ID from your application with the task. It can be used to sync updates to this task later. If omitted, no external ID will be associated.

*example*:
```
"external_123456"
```

---

### Update Task

This command updates the details of an existing task in Asana.

#### Task Id `string`

<dd>

This property specifies the ID of the task to be updated. Task IDs are unique identifiers in Asana. If omitted, the command will fail as this is a required field.

*example*:
```
1204619611402340
```

#### Complete Status `string`

<dd>

This property indicates whether the task is completed. It can be set to "true" or "false". If omitted, the task's completion status will remain unchanged.

*example*:
```
"true"
```

#### Name `string`

<dd>

This property specifies the new name of the task. It should be a descriptive string that identifies the task. If omitted, the task's name will remain unchanged.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

This property allows you to update the notes or description of the task. If omitted, the task's notes will remain unchanged.

*example*:
```
"Updated notes for the task."
```

#### Due On Date `date`

<dd>

This property specifies the new due date for the task in the format "YYYY-MM-DD". It cannot be used together with the Due At property. If omitted, the task's due date will remain unchanged.

*example*:
```
"2023-12-31"
```

#### Due At Date `datetime`

<dd>

This property specifies the new due date and time for the task in ISO 8601 format. It cannot be used together with the Due On property. If omitted, the task's due date and time will remain unchanged.

*example*:
```
"2023-12-31T23:59:59Z"
```

#### Assignee `string`

<dd>

This property specifies the new ID of the Asana user to whom the task will be assigned. If omitted, the task's assignee will remain unchanged.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

This property allows you to update the external ID associated with the task. If omitted, the task's external ID will remain unchanged.

*example*:
```
"external_123456"
```

---

### Get Tasks

This command retrieves a list of tasks based on specified filters such as workspace, project, and assignee.

#### Workspace `string`

<dd>

This property specifies the ID of the workspace to filter tasks on. If omitted, tasks from all workspaces accessible to the user will be returned.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

This property specifies the ID of the project to filter tasks on. If omitted, tasks from all projects accessible to the user will be returned.

*example*:
```
"{{settings.project}}"
```

#### Assignee `string`

<dd>

This property specifies the ID of the assignee to filter tasks on. If omitted, tasks assigned to all users will be returned.

*example*:
```
"{{settings.assignee}}"
```

#### Completed Since `datetime`

<dd>

This property filters tasks that are either incomplete or have been completed since the specified time. It accepts ISO 8601 or Unix timestamp formats. If omitted, all tasks will be returned regardless of completion status.

*example*:
```
"2014-04-25T16:15:47-04:00"
```

---

### Get Tasks By Id

This command retrieves details of a specific task by its ID.

#### Task Id `string`

<dd>

This property specifies the ID of the task to retrieve. Task IDs are unique identifiers in Asana. If omitted, the command will fail as this is a required field.

*example*:
```
1204619611402340
```

---

### Get Task By External Id

This command retrieves a task using an external ID associated with it.

#### Gid `string`

<dd>

This property specifies the external ID that the task is associated with. It is used to sync tasks between Asana and your application. If omitted, the command will fail as this is a required field.

*example*:
```
"external_123456"
```

---

### Add Task To Section

This command adds a task to a specified section within a project.

#### Section Id `string`

<dd>

This property specifies the ID of the section to which the task will be added. Section IDs are unique identifiers in Asana. If omitted, the command will fail as this is a required field.

*example*:
```
"{{settings.section}}"
```

#### Task Id `string`

<dd>

This property specifies the ID of the task to be added to the section. Task IDs are unique identifiers in Asana. If omitted, the command will fail as this is a required field.

*example*:
```
1204619611402340
```

#### Before Task Id `string`

<dd>

This property specifies the ID of a task in the section that the new task will be inserted before. It cannot be used together with After Task ID. If omitted, the task will be added to the end of the section.

*example*:
```
1204619611402340
```

#### After Task Id `string`

<dd>

This property specifies the ID of a task in the section that the new task will be inserted after. It cannot be used together with Before Task ID. If omitted, the task will be added to the beginning of the section.

*example*:
```
1204619611402340
```

---

### Get Teams

This command retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

This property specifies the workspace from which to retrieve teams. If omitted, teams from all workspaces accessible to the user will be returned.

*example*:
```
"{{settings.workspace}}"
```

---

### Get Workspaces

This command retrieves a list of workspaces accessible to the authorized user.

No properties available.

---

### Custom Action

This command allows for executing a custom action within Asana.

No properties available.
```

