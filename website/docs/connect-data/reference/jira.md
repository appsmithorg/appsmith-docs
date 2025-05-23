```markdown
# JIRA Integration

This page provides information on how to connect to JIRA. It enables users to perform actions such as creating issues, updating existing issues, retrieving project details, and filtering issues based on specific criteria.

## Connect JIRA

To securely authenticate and connect to JIRA, users must use OAuth 2.0 authentication. This ensures that all interactions with JIRA are secure and authorized. Users will need to provide their JIRA credentials and grant necessary permissions to the application to access their JIRA data.

## Query JIRA

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

This command allows users to create a new issue in JIRA.

#### Summary `string`

<dd>
The summary is a brief one-line description of the issue. It provides a quick overview of the issue's purpose or problem. This field is required and should be concise yet descriptive. If omitted, the issue creation will fail.

*example*:
```
"Enter Summary"
```

#### Project `string`

<dd>
The project specifies which JIRA project the issue belongs to. If not provided, it defaults to the user’s first project. Users can select a project using the Connect Portal Workflow Settings.

*example*:
```
"Enter Project"
```

#### Issue Type `string`

<dd>
The issue type defines the nature of the issue, such as Bug, Task, or Story. If not specified, it defaults to Task. Users can select an issue type using the Connect Portal Workflow Settings.

*example*:
```
"Enter Issue Type"
```

#### Jira Issue Status `string`

<dd>
This property sets the initial status of the issue. If not provided, it defaults to the project’s first status. Users can select a status using the Connect Portal Workflow Settings.

*example*:
```
"Enter Jira Issue Status"
```

#### Assignee `string`

<dd>
The assignee is the user responsible for the issue. If not specified, it defaults to the authenticated user. Users can select an assignee using the Connect Portal Workflow Settings.

*example*:
```
"Enter Assignee"
```

#### Description Type `string`

<dd>
This specifies the format or type of the description, such as text or HTML. It is optional and can be set according to user preference.

*example*:
```
"Enter Description Type"
```

#### Description JSON `object`

<dd>
The description JSON allows for a structured description of the issue using JSON format. This is optional and can be used for more complex descriptions.

*example*:
```
"Enter Description J S O N"
```

#### Description `string`

<dd>
A detailed description of the issue, providing more context and information. This field is optional but recommended for clarity.

*example*:
```
"Enter Description"
```

#### Additional Fields `object`

<dd>
Specify any other fields that should be included in JSON format. Users can select which issue fields to update using the Connect Portal Workflow Settings.

*example*:
```
"Enter Additional Fields"
```

---

### Update Issue

This command updates an existing issue in JIRA.

#### Issue Key `string`

<dd>
The issue key uniquely identifies the issue within JIRA. It is required for updating an issue and follows a format like `PROJ-123`.

*example*:
```
"Enter Issue Key"
```

#### Summary `string`

<dd>
A brief one-line summary of the issue. This field is optional and can be updated to reflect changes in the issue's purpose.

*example*:
```
"Enter Summary"
```

#### Issue Type `string`

<dd>
Defines the nature of the issue, such as Bug, Task, or Story. Users can select an issue type using the Connect Portal Workflow Settings.

*example*:
```
"Enter Issue Type"
```

#### Jira Issue Status `string`

<dd>
Sets the status of the issue. Users can select a status using the Connect Portal Workflow Settings.

*example*:
```
"Enter Jira Issue Status"
```

#### Assignee `string`

<dd>
The user responsible for the issue. Users can select an assignee using the Connect Portal Workflow Settings.

*example*:
```
"Enter Assignee"
```

#### Description Type `string`

<dd>
Specifies the format or type of the description, such as text or HTML. This is optional and can be updated as needed.

*example*:
```
"Enter Description Type"
```

#### Description JSON `object`

<dd>
Allows for a structured description of the issue using JSON format. This is optional and can be used for more complex descriptions.

*example*:
```
"Enter Description J S O N"
```

#### Description `string`

<dd>
A detailed description of the issue, providing more context and information. This field is optional but recommended for clarity.

*example*:
```
"Enter Description"
```

#### Additional Fields `object`

<dd>
Specify any other fields that should be included in JSON format. Users can select which issue fields to update using the Connect Portal Workflow Settings.

*example*:
```
"Enter Additional Fields"
```

---

### Get Issue By Key

This command retrieves an issue from JIRA using its unique key.

#### Issue Key `string`

<dd>
The issue key uniquely identifies the issue within JIRA. It follows a format like `PROJ-123` and is required to retrieve the issue.

*example*:
```
"Enter Issue Key"
```

---

### Filter Issues

This command filters issues in JIRA based on specified criteria.

#### Jql Query `string`

<dd>
The JQL (JIRA Query Language) query to search for issues that match specified filters. This is required to perform a search.

*example*:
```
"Enter Jql Query"
```

#### Limit `integer`

<dd>
Limits the maximum number of issues to return. Defaults to 10 if left blank. This is optional and can be set to any positive integer.

*example*:
```
"Enter Limit"
```

---

### Search By Jql

This command searches for issues in JIRA using a JQL query.

#### Jql Query `string`

<dd>
The JQL query to search for issues. This is required to perform a search.

*example*:
```
"Enter Jql Query"
```

#### Pagination Parameters `object`

<dd>
Parameters for paginated results, allowing users to navigate through large sets of data. This is optional and can include fields like `startAt` and `maxResults`.

*example*:
```
"Enter Pagination Parameters"
```

---

### Get Projects

This command retrieves all projects from JIRA.

#### Pagination Parameters `object`

<dd>
Parameters for paginated results, allowing users to navigate through large sets of data. This is optional and can include fields like `startAt` and `maxResults`.

*example*:
```
"Enter Pagination Parameters"
```

---

### Get Issue Types By Project

This command retrieves issue types for a specific project in JIRA.

#### Project `string`

<dd>
The project key uniquely identifies the project within JIRA. It is required to retrieve issue types for the specified project.

*example*:
```
"Enter Project"
```

---

### Get Issue Types

This command retrieves all issue types available in JIRA.

No properties available.

---

### Describe Action Schema

This command describes the schema for a specific action in JIRA.

#### Issue Type Id `string`

<dd>
The issue type ID uniquely identifies the type of issue. It is required to describe the action schema and follows a format like `10001`.

*example*:
```
"Enter Issue Type Id"
```

#### Project Key `string`

<dd>
The project key uniquely identifies the project within JIRA. It is required to describe the action schema.

*example*:
```
"Enter Project Key"
```

#### Operation `string`

<dd>
The operation type, such as `CREATE_ISSUE` or `UPDATE_ISSUE`, specifies the action to be described. This is required to define the schema.

*example*:
```
"Enter Operation"
```

---

### Get Issue Status By Project

This command retrieves issue statuses for a specific project in JIRA.

#### Project `string`

<dd>
The project key uniquely identifies the project within JIRA. It is required to retrieve issue statuses for the specified project.

*example*:
```
"Enter Project"
```

---

### Get All Assignees By Project

This command retrieves all possible assignees for a specific project in JIRA.

#### Project `string`

<dd>
The project key uniquely identifies the project within JIRA. It is required to retrieve all assignees for the specified project.

*example*:
```
"Enter Project"
```

---

### Custom Action

This command allows for custom actions to be performed in JIRA.

No properties available.
```

