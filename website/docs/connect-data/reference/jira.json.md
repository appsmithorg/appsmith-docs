# Asana Integration

This page provides information on how to connect to Asana. It enables users to perform actions such as creating comments, managing projects, tasks, and organizing teams and workspaces.

## Connect Asana

Explain how to authenticate and connect to this service securely.

## Query Asana

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Comment

Creates a new comment on a specified task.

#### Task `string`

<dd>

The Task ID is a unique identifier for the task to which the comment will be added. The comment will be authored by the currently authenticated user. It is required to associate the comment with the correct task.

*example*:
```markdown
"1204619611402340"
```

#### Text `string`

<dd>

The Text property represents the content of the comment to be added to the task. It is required and should be a clear, concise message.

*example*:
```markdown
"This is a comment."
```

---

### Create Project

Creates a new project within the specified workspace and team.

#### Name `string`

<dd>

The Name property is the title of the new project to be created. It is required and should be descriptive of the project's purpose or contents.

*example*:
```markdown
"Stuff to buy"
```

#### Workspace `string`

<dd>

The Workspace property is the identifier for the workspace where the project will be created. It can be set in the Connect Portal Workflow Settings, defaulting to the user’s first workspace if left blank.

*example*:
```markdown
"{{settings.workspace}}"
```

#### Team `string`

<dd>

The Team property is the identifier for the team with which the project will be shared. It can be set in the Connect Portal Workflow Settings, defaulting to the user’s first team if left blank.

*example*:
```markdown
"{{settings.team}}"
```

#### Notes `string`

<dd>

The Notes property allows you to add descriptive text or additional information about the project. This field is optional.

*example*:
```markdown
"These are things we need to purchase."
```

---

### Get Projects

Retrieves a list of projects, with the option to include archived projects.

#### Archived `string`

<dd>

The Archived property lets you filter the projects list based on their archival status. Options include 'Yes' to show only archived projects, 'No' to show only active projects, and 'Default' to show both.

*example*:
```markdown
"Default"
```

---

### Get Project By Id

Retrieves a single project by its unique identifier.

#### Project Filter Id `string`

<dd>

The Project Filter Id is the unique identifier of the project to be retrieved. It is required to specify which project's details are to be fetched.

*example*:
```markdown
"1140939393920399"
```

---

### Create Task

Creates a new task within the specified workspace, project, and with additional details.

#### Name `string`

<dd>

The Name property is the title of the new task to be created. It is required and should be descriptive of the task's purpose.

*example*:
```markdown
"Task Name"
```

#### Workspace `string`

<dd>

The Workspace property is the identifier for the workspace where the task will be created. It can be set in the Connect Portal Workflow Settings, defaulting to the user’s first workspace if left blank.

*example*:
```markdown
"{{settings.workspace}}"
```

#### Project `string`

<dd>

The Project property is the identifier for the project under which the task will be created. It can be set in the Connect Portal Workflow Settings.

*example*:
```markdown
"{{settings.project}}"
```

#### Notes `string`

<dd>

The Notes property allows you to add descriptive text or additional information about the task. This field is optional.

*example*:
```markdown
"Complete the integration documentation."
```

#### Due On Date `string`

<dd>

The Due On property specifies the date by which the task is due, in "YYYY-MM-DD" format. It cannot be used together with Due At.

*example*:
```markdown
"2023-05-10"
```

#### Due At Date `string`

<dd>

The Due At property specifies the exact date and time by which the task is due, in ISO 8601 timestamp format. It cannot be used together with Due On.

*example*:
```markdown
"2023-05-10T17:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the identifier for the Asana user to whom the task will be assigned. It can be set in the Connect Portal Workflow Settings.

*example*:
```markdown
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application to associate with this task. It can be used to sync updates to this task later.

*example*:
```markdown
"ext_7890abcd1234"
```

---

### Update Task

Updates the details of an existing task.

#### Task Id `string`

<dd>

The Task ID is the unique identifier for the task that will be updated. It is required to specify which task's details are to be changed.

*example*:
```markdown
"1204619611402340"
```

#### Complete Status `boolean`

<dd>

The Complete Status property indicates whether the task has been completed. This field is optional.

*example*:
```markdown
true
```

#### Name `string`

<dd>

The Name property is the title of the task to be updated. It is optional and can be used to change the existing task's name.

*example*:
```markdown
"Updated Task Name"
```

#### Notes `string`

<dd>

The Notes property allows you to update the descriptive text or additional information about the task. This field is optional.

*example*:
```markdown
"Updated integration documentation requirements."
```

#### Due On Date `string`

<dd>

The Due On property specifies the updated date by which the task is due, in "YYYY-MM-DD" format. It cannot be used together with Due At.

*example*:
```markdown
"2023-06-01"
```

#### Due At Date `string`

<dd>

The Due At property specifies the updated exact date and time by which the task is due, in ISO 8601 timestamp format. It cannot be used together with Due On.

*example*:
```markdown
"2023-06-01T12:00:00Z"
```

#### Assignee `string`

<dd>

The Assignee property is the identifier for the Asana user to whom the task will be reassigned. It can be set in the Connect Portal Workflow Settings.

*example*:
```markdown
"{{settings.assignee}}"
```

#### Gid `string`

<dd>

The Gid, or External ID, is an identifier from your application to associate with this task. It can be used to sync updates to this task later.

*example*:
```markdown
"ext_5678efgh1234"
```

---

### Get Tasks

Retrieves a list of tasks based on specified criteria such as workspace, project, assignee, and completion status.

#### Workspace `string`

<dd>

The Workspace property is the identifier for the workspace to filter tasks on. It can be set in the Connect Portal Workflow Settings.

*example*:
```markdown
"{{settings.workspace}}"
```

#### Project `string`

<dd>

The Project property is the identifier for the project to filter tasks on. It can be set in the Connect Portal Workflow Settings.

*example*:
```markdown
"{{settings.project}}"
```

#### Assignee `string`

<dd>

The Assignee property is the identifier for the Asana user to filter tasks based on their assignment. It can be set in the Connect Portal Workflow Settings.

*example*:
```markdown
"{{settings.assignee}}"
```

#### Completed Since `string`

<dd>

The Completed Since property filters tasks to only those that are incomplete or have been completed since the specified time, in ISO or Unix timestamp format.

*example*:
```markdown
"2023-04-01T00:00:00Z"
```

---

### Get Tasks By Id

Retrieves a specific task by its unique identifier.

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task to be retrieved. It is required to specify which task's details are to be fetched.

*example*:
```markdown
"1204619611402340"
```

---

### Get Task By External Id

Retrieves a task associated with a specified external identifier.

#### Gid `string`

<dd>

The Gid, or External ID, is the identifier from your application that the task is associated or synced with.

*example*:
```markdown
"ext_7890abcd1234"
```

---

### Add Task To Section

Adds an existing task to a specified section within a project.

#### Section Id `string`

<dd>

The Section ID is the identifier for the section to which the task will be added. It is required to specify the destination within the project.

*example*:
```markdown
"{{settings.section}}"
```

#### Task Id `string`

<dd>

The Task ID is the unique identifier of the task that will be added to the section. It is required to specify which task is being moved.

*example*:
```markdown
"1204619611402340"
```

#### Before Task Id `string`

<dd>

The Before Task ID specifies the task before which the current task will be inserted. It cannot be used with After Task ID.

*example*:
```markdown
"1204619611402341"
```

#### After Task Id `string`

<dd>

The After Task ID specifies the task after which the current task will be inserted. It cannot be used with Before Task ID.

*example*:
```markdown
"1204619611402339"
```

---

### Get Teams

Retrieves a list of teams within a specified workspace.

#### Workspace `string`

<dd>

The Workspace property is the identifier for the workspace whose teams are to be listed. It is required to filter teams by workspace.

*example*:
```markdown
"{{settings.workspace}}"
```

---

### Get Workspaces

Retrieves a list of workspaces visible to the authorized user.

No properties available.

---

### Custom Action

Performs a custom action defined by the user.

No properties available.
