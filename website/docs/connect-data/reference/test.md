```markdown
# JIRA Integration

This page provides information on how to connect to JIRA. It enables users to perform actions such as creating issues, updating issues, retrieving project details, and managing issue types and statuses.

## Connect JIRA

To securely authenticate and connect to JIRA, users need to provide their JIRA account credentials or use OAuth for authorization. Ensure that the necessary permissions are granted to perform actions on projects and issues within JIRA.

## Query JIRA

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in a specified JIRA project.

#### Summary `string`

<dd>

The summary provides a brief one-line description of the issue. This field is essential for identifying the issue at a glance. If omitted, the issue will not have a title, which may affect visibility and tracking.

*example*:
```
"Implement user authentication"
```

#### Project `string`

<dd>

Specifies the project to which the issue belongs. If not provided, it defaults to the user’s first project. Users can select a project using the Connect Portal Workflow Settings.

*example*:
```
"PROJ1"
```

#### Issue Type `string`

<dd>

Defines the type of issue, such as a bug, task, or story. Defaults to "Task" if not specified. Users can select an issue type using the Connect Portal Workflow Settings.

*example*:
```
"Bug"
```

#### Jira Issue Status `string`

<dd>

Indicates the current status of the issue, such as "To Do," "In Progress," or "Done." Defaults to the project’s first status if not specified.

*example*:
```
"In Progress"
```

#### Assignee `string`

<dd>

Assigns the issue to a specific user. If not provided, it defaults to the authenticated user. The assignee must have access to the project.

*example*:
```
"john.doe@example.com"
```

#### Description Type `string`

<dd>

Specifies the format of the description, such as plain text or HTML. This helps in rendering the description appropriately in JIRA.

*example*:
```
"Plain Text"
```

#### Description JSON `JSON object`

<dd>

Contains the detailed description of the issue in JSON format. This allows for structured data input.

*example*:
```
{
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Detailed issue description goes here.",
          "type": "text"
        }
      ]
    }
  ]
}
```

#### Description `string`

<dd>

A detailed textual description of the issue, providing more context and information. This field is crucial for understanding the issue's scope and requirements.

*example*:
```
"This issue involves implementing a login feature for the application."
```

#### Additional Fields `JSON object`

<dd>

Allows users to specify any other fields that should be included in the issue creation. This can be configured through the Connect Portal Workflow Settings.

*example*:
```
{
  "customfield_10010": "Value"
}
```

---

### Update Issue

Updates an existing issue in JIRA with new information or changes.

#### Issue Key `string`

<dd>

The unique identifier for the issue to be updated. This key is required to locate the issue within JIRA.

*example*:
```
"PROJ1-123"
```

#### Summary `string`

<dd>

Updates the brief one-line description of the issue. This field helps in quickly identifying the issue.

*example*:
```
"Update user authentication method"
```

#### Issue Type `string`

<dd>

Changes the type of issue, such as converting a task to a bug. Users can select an issue type using the Connect Portal Workflow Settings.

*example*:
```
"Story"
```

#### Jira Issue Status `string`

<dd>

Updates the current status of the issue, reflecting its progress. Users can select a status using the Connect Portal Workflow Settings.

*example*:
```
"Done"
```

#### Assignee `string`

<dd>

Reassigns the issue to a different user. This can be configured through the Connect Portal Workflow Settings.

*example*:
```
"jane.doe@example.com"
```

#### Description Type `string`

<dd>

Specifies the format of the updated description, ensuring it is displayed correctly in JIRA.

*example*:
```
"HTML"
```

#### Description JSON `JSON object`

<dd>

Provides a structured format for the updated detailed description of the issue.

*example*:
```
{
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Updated issue description with new requirements.",
          "type": "text"
        }
      ]
    }
  ]
}
```

#### Description `string`

<dd>

Updates the detailed textual description of the issue, providing new context or information.

*example*:
```
"The login feature now requires two-factor authentication."
```

#### Additional Fields `JSON object`

<dd>

Allows users to specify any additional fields to be updated in the issue. This can be configured through the Connect Portal Workflow Settings.

*example*:
```
{
  "customfield_10011": "New Value"
}
```

---

### Get Issue By Key

Retrieves detailed information about a specific issue using its unique key.

#### Issue Key `string`

<dd>

The unique identifier for the issue to be retrieved. This key is essential for accessing the issue details in JIRA.

*example*:
```
"PROJ1-456"
```

---

### Filter Issues

Filters issues based on specified criteria using JQL (JIRA Query Language).

#### Jql Query `string`

<dd>

A JQL query string that defines the search criteria for filtering issues. This allows users to find issues that match specific conditions.

*example*:
```
"project = PROJ1 AND status = 'Open'"
```

#### Limit `integer`

<dd>

Limits the maximum number of issues returned by the query. Defaults to 10 if not specified, helping manage the volume of data retrieved.

*example*:
```
50
```

---

### Search By Jql

Searches for issues using a JQL query and returns paginated results.

#### Jql Query `string`

<dd>

The JQL query string used to search for issues. This enables complex searches based on various criteria.

*example*:
```
"assignee = currentUser() AND resolution = Unresolved"
```

#### Pagination Parameters `JSON object`

<dd>

Parameters that control the pagination of results, such as page size and starting index. This helps in managing large sets of data.

*example*:
```
{
  "startAt": 0,
  "maxResults": 20
}
```

---

### Get Projects

Retrieves a list of all projects accessible to the user.

#### Pagination Parameters `JSON object`

<dd>

Parameters that control the pagination of project results, such as page size and starting index.

*example*:
```
{
  "startAt": 0,
  "maxResults": 10
}
```

---

### Get Issue Types By Project

Retrieves all issue types available for a specified project.

#### Project `string`

<dd>

The key of the project for which to retrieve issue types. This is necessary to filter issue types specific to a project.

*example*:
```
"PROJ1"
```

---

### Get Issue Types

Retrieves all issue types available in JIRA.

No properties available.

---

### Describe Action Schema

Describes the schema for actions such as creating or updating issues.

#### Issue Type Id `string`

<dd>

The unique identifier for the issue type. This ID is used to specify which schema to describe.

*example*:
```
"10001"
```

#### Project Key `string`

<dd>

The key of the project for which the action schema is described. This helps in tailoring the schema to project-specific configurations.

*example*:
```
"PROJ1"
```

#### Operation `string`

<dd>

Specifies the type of operation, such as "CREATE_ISSUE" or "UPDATE_ISSUE." This determines the schema details provided.

*example*:
```
"CREATE_ISSUE"
```

---

### Get Issue Status By Project

Retrieves all possible issue statuses for a specified project.

#### Project `string`

<dd>

The key of the project for which to retrieve issue statuses. This is necessary to filter statuses specific to a project.

*example*:
```
"PROJ1"
```

---

### Get All Assignees By Project

Retrieves all users who can be assigned issues within a specified project.

#### Project `string`

<dd>

The key of the project for which to retrieve possible assignees. This helps in identifying users who have access to the project.

*example*:
```
"PROJ1"
```

---

### Custom Action

Performs a custom action defined by the user.

No properties available.

```

