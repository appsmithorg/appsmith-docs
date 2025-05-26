```markdown
# Jira Integration

This page provides information on how to connect to Jira. It enables users to perform actions such as creating issues, updating issues, retrieving project details, and managing issue types and statuses.

## Connect Jira

To connect to Jira, you need to authenticate using your Jira account credentials. Ensure that you have the necessary permissions to access and modify issues within the projects you intend to work with. Use OAuth or API tokens for secure authentication.

## Query Jira

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in a specified project.

#### Summary `string`

<dd>

This property represents a brief one-line summary of the issue. It is a required field that provides a quick overview of the issue's purpose or problem. If omitted, the issue will not have a summary, which is essential for identification.

*example*:
```
"Fix login bug"
```

#### Project `string`

<dd>

This property specifies the project to which the issue belongs. If not provided, it defaults to the user’s first project. Users can select a project through the Connect Portal Workflow Settings.

*example*:
```
"PROJ123"
```

#### Issue Type `string`

<dd>

This property indicates the type of issue being created, such as a bug, task, or story. It defaults to "Task" if not specified.

*example*:
```
"Bug"
```

#### Jira Issue Status `string`

<dd>

This property sets the initial status of the issue. If not provided, it defaults to the project’s first status.

*example*:
```
"Open"
```

#### Assignee `string`

<dd>

This property assigns the issue to a user. If not specified, it defaults to the authenticated user.

*example*:
```
"john.doe@example.com"
```

#### Description Type `string`

<dd>

This property allows selection of the description type, which could be plain text or another format.

*example*:
```
"Plain Text"
```

#### Description JSON `object`

<dd>

This property provides a JSON object for the issue description, allowing for complex formatting and structure.

*example*:
```
{
  "type": "doc",
  "content": [...]
}
```

#### Description `string`

<dd>

This property contains a detailed description of the issue, providing more context and information.

*example*:
```
"The login button does not respond on click."
```

#### Additional Fields `object`

<dd>

This property allows users to specify any other fields that should be included in the issue creation JSON. Users can select which fields to update through the Connect Portal Workflow Settings.

*example*:
```
{
  "priority": "High",
  "labels": ["bug", "urgent"]
}
```

---

### Update Issue

Updates an existing issue with new information or changes.

#### Issue Key `string`

<dd>

This property identifies the specific issue to update. The issue key is a unique identifier in the format `PROJ-123`.

*example*:
```
"PROJ-456"
```

#### Summary `string`

<dd>

This property updates the brief one-line summary of the issue. It is optional but recommended for clarity.

*example*:
```
"Update login error message"
```

#### Issue Type `string`

<dd>

This property updates the type of the issue. Users can select an issue type through the Connect Portal Workflow Settings.

*example*:
```
"Task"
```

#### Jira Issue Status `string`

<dd>

This property updates the status of the issue. Users can select a status through the Connect Portal Workflow Settings.

*example*:
```
"In Progress"
```

#### Assignee `string`

<dd>

This property updates the assignee of the issue. Users can select an assignee through the Connect Portal Workflow Settings.

*example*:
```
"jane.doe@example.com"
```

#### Description Type `string`

<dd>

This property updates the description type of the issue.

*example*:
```
"HTML"
```

#### Description JSON `object`

<dd>

This property updates the JSON object for the issue description.

*example*:
```
{
  "type": "doc",
  "content": [...]
}
```

#### Description `string`

<dd>

This property updates the detailed description of the issue.

*example*:
```
"Revised error handling for login failures."
```

#### Additional Fields `object`

<dd>

This property allows users to specify additional fields to update in the issue JSON.

*example*:
```
{
  "priority": "Medium",
  "labels": ["enhancement"]
}
```

---

### Get Issue By Key

Retrieves detailed information about a specific issue using its unique key.

#### Issue Key `string`

<dd>

This property specifies the unique key of the issue to retrieve, formatted as `PROJ-123`.

*example*:
```
"PROJ-789"
```

---

### Filter Issues

Filters and retrieves issues based on specified criteria.

#### Jql Query `string`

<dd>

This property allows users to search for issues that match specified filters using JQL (Jira Query Language).

*example*:
```
"project = PROJ AND status = 'Open'"
```

#### Limit `integer`

<dd>

This property limits the maximum number of issues to return. It defaults to 10 if left blank.

*example*:
```
25
```

---

### Search By Jql

Performs a search for issues using JQL and returns paginated results.

#### Jql Query `string`

<dd>

This property specifies the JQL query to execute for searching issues.

*example*:
```
"assignee = currentUser() AND resolution = Unresolved"
```

#### Pagination Parameters `object`

<dd>

This property defines the parameters for paginating the search results.

*example*:
```
{
  "startAt": 0,
  "maxResults": 50
}
```

---

### Get Projects

Retrieves a list of all projects accessible to the user.

#### Pagination Parameters `object`

<dd>

This property specifies the parameters for paginating the list of projects.

*example*:
```
{
  "startAt": 0,
  "maxResults": 100
}
```

---

### Get Issue Types By Project

Retrieves issue types available within a specified project.

#### Project `string`

<dd>

This property specifies the project key to retrieve issue types for.

*example*:
```
"PROJ123"
```

---

### Get Issue Types

Retrieves all issue types available in Jira.

No properties available.

---

### Describe Action Schema

Provides a schema description for a specified action type.

#### Issue Type Id `string`

<dd>

This property specifies the ID of the issue type for which the schema is described.

*example*:
```
"10001"
```

#### Project Key `string`

<dd>

This property specifies the project key related to the action schema.

*example*:
```
"PROJ123"
```

#### Operation `string`

<dd>

This property specifies the operation type, such as `CREATE_ISSUE` or `UPDATE_ISSUE`.

*example*:
```
"CREATE_ISSUE"
```

---

### Get Issue Status By Project

Retrieves all possible issue statuses for a specified project.

#### Project `string`

<dd>

This property specifies the project key to retrieve issue statuses for.

*example*:
```
"PROJ123"
```

---

### Get All Assignees By Project

Retrieves all possible assignees for issues within a specified project.

#### Project `string`

<dd>

This property specifies the project key to retrieve assignees for.

*example*:
```
"PROJ123"
```

---

### Custom Action

Executes a custom action in Jira.

No properties available.

```

