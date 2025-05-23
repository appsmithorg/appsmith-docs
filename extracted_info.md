Total Commands: 13

Command: Create Comment
Identifier: ASANA_CREATE_COMMENT

Properties:
- Task: Task ID : The ID of the Task the comment will be added to. The comment will be authored by the currently authenticated user. (Example: Enter Task)
- Text: Text (example: "This is a comment.") (Example: Enter Text)

Command: Create Project
Identifier: ASANA_CREATE_PROJECT

Properties:
- Name: Name (example: "Stuff to buy") (Example: Enter Name)
- Workspace: Workspace : Use Connect Portal Workflow Settings to allow users to select which Workspace to create Projects in. Defaults to the user’s first Workspace if left blank. (example: "{{settings.workspace}}") (Example: Enter Workspace)
- Team: Team : Use Connect Portal Workflow Settings to allow users to select which Team to share this Project with. Defaults to the user’s first Team if left blank. (example: "{{settings.team}}") (Example: Enter Team)
- Notes: Notes (example: "These are things we need to purchase.") (Example: Enter Notes)

Command: Get Projects
Identifier: ASANA_GET_PROJECTS

Properties:
- Archived: Archived : Choose Yes to show archived projects. Select No to display only active projects and The Default option will show both archived and active projects. (Example: Enter Archived)

Command: Get Project By Id
Identifier: ASANA_GET_PROJECT_BY_ID

Properties:
- Project Filter Id: Project ID (Example: Enter Project Filter Id)

Command: Create Task
Identifier: ASANA_CREATE_TASK

Properties:
- Name: Name (example: "Task Name") (Example: Enter Name)
- Workspace: Workspace : Use Connect Portal Workflow Settings to allow users to select which Workspace to create Tasks in. Defaults to the user’s first Workspace if left blank. (example: "{{settings.workspace}}") (Example: Enter Workspace)
- Project: Project : Use Connect Portal Workflow Settings to allow users to select which Project to create this Task in. (example: "{{settings.project}}") (Example: Enter Project)
- Notes: Notes (Example: Enter Notes)
- Due On Date: Due On : The date on which this task is due. Cannot be used together with Due At. (example: "YYYY-MM-DD") (Example: Enter Due On Date)
- Due At Date: Due At : The date and time (ISO timestamp) at which this task is due . Cannot be used together with Due On. (example: "2019-09-15T02:06:58.147Z") (Example: Enter Due At Date)
- Assignee: Assignee : The ID of the Asana user this task will be assigned to. Use Connect Portal Workflow Settings to allow users to select an Assignee. (example: "{{settings.assignee}}") (Example: Enter Assignee)
- Gid: External ID : An ID from your application to associate this task with. You can use this ID to sync updates to this task later. (Example: Enter Gid)

Command: Update Task
Identifier: ASANA_UPDATE_TASK

Properties:
- Task Id: Task ID : The ID of the Task that will be updated. (Example: Enter Task Id)
- Complete Status: Completed Status (Example: Enter Complete Status)
- Name: Name (example: "Task Name") (Example: Enter Name)
- Notes: Notes (Example: Enter Notes)
- Due On Date: Due On : The date on which this task is due. Cannot be used together with Due At. (example: "YYYY-MM-DD") (Example: Enter Due On Date)
- Due At Date: Due At : The date and time (ISO timestamp) at which this task is due . Cannot be used together with Due On. (example: "2019-09-15T02:06:58.147Z") (Example: Enter Due At Date)
- Assignee: Assignee : The ID of the Asana user this task will be assigned to. Use Connect Portal Workflow Settings to allow users to select an Assignee. (example: "{{settings.assignee}}") (Example: Enter Assignee)
- Gid: External ID : An ID from your application to associate this task with. You can use this ID to sync updates to this task later. (Example: Enter Gid)

Command: Get Tasks
Identifier: ASANA_GET_TASKS

Properties:
- Workspace: Workspace : The ID of the Workspace to filter tasks on. Use Connect Portal Workflow Settings to allow users to select a Workspace. (example: "{{settings.workspace}}") (Example: Enter Workspace)
- Project: Project : The ID of the Project to filter tasks on. Use Connect Portal Workflow Settings to allow users to select a Project. (example: "{{settings.project}}") (Example: Enter Project)
- Assignee: Assignee : The ID of the assignee to filter tasks on. Use Connect Portal Workflow Settings to allow users to select an Assignee. (example: "{{settings.assignee}}") (Example: Enter Assignee)
- Completed Since: Completed since : Only return tasks that are either incomplete or that have been completed since this time (ISO or Unix timestamp). (example: "2014-04-25T16:15:47-04:00") (Example: Enter Completed Since)

Command: Get Tasks By Id
Identifier: ASANA_GET_TASKS_BY_ID

Properties:
- Task Id: Task ID (Example: Enter Task Id)

Command: Get Task By External Id
Identifier: ASANA_GET_TASK_BY_EXTERNAL_ID

Properties:
- Gid: External ID : The ID that this task is associated or synced with, from your application. (Example: Enter Gid)

Command: Add Task To Section
Identifier: ASANA_ADD_TASK_TO_SECTION

Properties:
- Section Id: Section ID : The ID of the section to add this task to. (example: "{{settings.section}}") (Example: Enter Section Id)
- Task Id: Task ID : The ID of the task. (example: "1204619611402340") (Example: Enter Task Id)
- Before Task Id: Before Task ID : The ID of a task in this section that this task will be inserted before. Cannot be used with After Task ID. (example: "1204619611402340") (Example: Enter Before Task Id)
- After Task Id: After Task ID : The ID of a task in this section that this task will be inserted after. Cannot be used with Before Task ID. (example: "1204619611402340") (Example: Enter After Task Id)

Command: Get Teams
Identifier: ASANA_GET_TEAMS

Properties:
- Workspace: Workspace : Returns the teams in this workspace visible to the authorized user. (example: "{{settings.workspace}}") (Example: Enter Workspace)

Command: Get Workspaces
Identifier: ASANA_GET_WORKSPACES

Properties:
No properties available.

Command: Custom Action
Identifier: CUSTOM_ACTION

Properties:
No properties available.
