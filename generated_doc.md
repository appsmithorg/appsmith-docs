```markdown
# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating tasks, managing projects, and retrieving workspace information.

## Connect Asana

To connect with Asana, you need to authenticate using OAuth 2.0. Ensure that you have the necessary permissions to access and manage tasks and projects. Securely store your access tokens and refresh them as needed to maintain a persistent connection.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

This command allows you to add a comment to an existing task in Asana.

#### Task `string`

<dd>

This property represents the ID of the task to which the comment will be added. The comment will be authored by the currently authenticated user. Ensure that the task ID is valid and accessible by the user. If omitted, the command will fail as it is required.

*example*:
```
1204619611402340
```

#### Text `string`

<dd>

This property contains the text of the comment to be added. The text should be a string and can include any valid characters. It is a required field, and if omitted, the comment will not be created.

*example*:
```
"This is a comment."
```

---

### Create Project

This command allows you to create a new project within a specified workspace in Asana.

#### Name `string`

<dd>

This property specifies the name of the project to be created. It should be a descriptive title that reflects the purpose of the project. This field is required, and if omitted, the project will not be created.

*example*:
```
"Stuff to buy"
```

#### Workspace `string`

<dd>

This property indicates the workspace in which the project will be created. If left blank, it defaults to the user’s first workspace. It is recommended to specify this to ensure the project is created in the correct workspace.

*example*:
```
"{{settings.workspace}}"
```

#### Team `string`

<dd>

This property allows you to specify the team with which the project will be shared. If not specified, it defaults to the user’s first team. This helps in organizing projects within team structures.

*example*:
```
"{{settings.team}}"
```

#### Notes `string`

<dd>

This property allows you to add notes or a description to the project. It can include any relevant information or instructions related to the project.

*example*:
```
"These are things we need to purchase."
```

---

### Get Projects

This command retrieves a list of projects from Asana, with options to filter by archived status.

#### Archived `string`

<dd>

This property determines whether to include archived projects in the results. Options are "Yes" to show only archived projects, "No" to show only active projects, or leave blank to show both.

*example*:
```
"Yes"
```

---

### Get Project By Id

This command retrieves details of a specific project by its ID.

#### Project Filter Id `string`

<dd>

This property represents the ID of the project you wish to retrieve. It is required to specify the correct project ID to fetch the desired project details.

*example*:
```
1204619611402340
```

---

### Create Task

This command allows you to create a new task within a specified project and workspace in Asana.

#### Name `string`

<dd>

This property specifies the name of the task to be created. It should be a concise and descriptive title. This field is required.

*example*:
```
"Task Name"
```

#### Workspace `string`

<dd>

This property indicates the workspace where the task will be created. If omitted, it defaults to the user’s first workspace.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

This property specifies the project within which the task will be created. It helps in organizing tasks under relevant projects.

*example*:
```
"{{settings.project}}"
```

#### Notes `string`

<dd>

This property allows you to add notes or a description to the task. It can include any relevant details or instructions.

*example*:
```
"Enter Notes"
```

#### Due On Date `string`

<dd>

This property sets the due date for the task in the format "YYYY-MM-DD". It cannot be used together with "Due At Date".

*example*:
```
"2023-12-31"
```

#### Due At Date `string`

<dd>

This property specifies the exact due date and time for the task in ISO 8601 format. It cannot be used with "Due On Date".

*example*:
```
"2019-09-15T02:06:58.147Z"
```

#### Assignee `string`

<dd>

This property specifies the ID of the Asana user to whom the task will be assigned. It helps in delegating tasks to the appropriate team members.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

This property is an external ID from your application to associate with the task. It can be used to sync updates to this task later.

*example*:
```
"Enter Gid"
```

---

### Update Task

This command updates the details of an existing task in Asana.

#### Task Id `string`

<dd>

This property represents the ID of the task to be updated. It is required to specify the correct task ID to update the desired task.

*example*:
```
1204619611402340
```

#### Complete Status `string`

<dd>

This property allows you to update the completion status of the task. Specify "true" for completed or "false" for incomplete.

*example*:
```
"true"
```

#### Name `string`

<dd>

This property allows you to update the name of the task. It should be a concise and descriptive title.

*example*:
```
"Updated Task Name"
```

#### Notes `string`

<dd>

This property allows you to update the notes or description of the task.

*example*:
```
"Updated Notes"
```

#### Due On Date `string`

<dd>

This property updates the due date for the task in the format "YYYY-MM-DD". It cannot be used together with "Due At Date".

*example*:
```
"2023-12-31"
```

#### Due At Date `string`

<dd>

This property updates the exact due date and time for the task in ISO 8601 format. It cannot be used with "Due On Date".

*example*:
```
"2019-09-15T02:06:58.147Z"
```

#### Assignee `string`

<dd>

This property updates the ID of the Asana user to whom the task will be assigned.

*example*:
```
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

This property updates the external ID from your application associated with the task. It can be used to sync updates to this task later.

*example*:
```
"Updated Gid"
```

---

### Get Tasks

This command retrieves a list of tasks from Asana, with options to filter by workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

This property specifies the workspace ID to filter tasks. It helps in narrowing down tasks to a specific workspace.

*example*:
```
"{{settings.workspace}}"
```

#### Project `string`

<dd>

This property specifies the project ID to filter tasks. It helps in organizing tasks under relevant projects.

*example*:
```
"{{settings.project}}"
```

#### Assignee `string`

<dd>

This property specifies the assignee ID to filter tasks. It helps in retrieving tasks assigned to a specific user.

*example*:
```
"{{settings.assignee}}"
```

#### Completed Since `string`

<dd>

This property filters tasks that are either incomplete or have been completed since a specified time. Use ISO 8601 or Unix timestamp format.

*example*:
```
"2014-04-25T16:15:47-04:00"
```

---

### Get Tasks By Id

This command retrieves details of a specific task by its ID.

#### Task Id `string`

<dd>

This property represents the ID of the task you wish to retrieve. It is required to specify the correct task ID to fetch the desired task details.

*example*:
```
1204619611402340
```

---

### Get Task By External Id

This command retrieves a task associated with a specific external ID from your application.

#### Gid `string`

<dd>

This property represents the external ID associated with the task. It is used to sync tasks with your application.

*example*:
```
"ExternalGid1234"
```

---

### Add Task To Section

This command adds a task to a specified section within a project.

#### Section Id `string`

<dd>

This property specifies the ID of the section to which the task will be added. It is required to ensure the task is placed in the correct section.

*example*:
```
"{{settings.section}}"
```

#### Task Id `string`

<dd>

This property represents the ID of the task to be added to the section. It is required to specify the correct task ID.

*example*:
```
1204619611402340
```

#### Before Task Id `string`

<dd>

This property specifies the ID of a task in the section that the new task will be inserted before. It cannot be used with "After Task Id".

*example*:
```
1204619611402340
```

#### After Task Id `string`

<dd>

This property specifies the ID of a task in the section that the new task will be inserted after. It cannot be used with "Before Task Id".

*example*:
```
1204619611402340
```

---

### Get Teams

This command retrieves a list of teams within a specified workspace visible to the authorized user.

#### Workspace `string`

<dd>

This property specifies the workspace ID to filter teams. It helps in retrieving teams associated with a specific workspace.

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

This command allows for custom actions within Asana.

No properties available.
```

