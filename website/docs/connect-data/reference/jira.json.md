# JIRA Integration

This page provides information on how to connect to JIRA. It enables users to perform actions such as creating issues, updating issues, retrieving issue details, filtering issues, and managing projects and issue types.

## Connect JIRA

Explain how to authenticate and connect to this service securely.

## Query JIRA

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in JIRA with the provided details.

#### Summary `string`

<dd>

The Summary property is a concise one-liner that encapsulates the main point of the issue. It is a required field and should be clear and descriptive. If omitted, the issue creation will not proceed.

*example*:
```
Enter Summary
```

---

#### Project `string`

<dd>

The Project property specifies the project to which the issue will be added. If not provided, it defaults to the user's first project. Users can configure the Connect Portal Workflow Settings to select a project. This field is optional but important for issue categorization.

*example*:
```
Enter Project
```

---

#### Issue Type `string`

<dd>

The Issue Type property defines the type of issue to be created, such as 'Task', 'Bug', or 'Story'. It defaults to 'Task' if not provided. This field is optional but helps in classifying the issue correctly.

*example*:
```
Enter Issue Type
```

---

#### Jira Issue Status `string`

<dd>

The Jira Issue Status property sets the initial status of the issue. If not provided, it defaults to the project's first status. This field is optional and can be set according to the project's workflow requirements.

*example*:
```
Enter Jira Issue Status
```

---

#### Assignee `string`

<dd>

The Assignee property specifies the user who is assigned to work on the issue. If not provided, the issue is assigned to the authenticated user by default. This field is optional but crucial for task ownership.

*example*:
```
Enter Assignee
```

---

#### Description Type `string`

<dd>

The Description Type property allows the user to select the format of the issue description. This field is optional and is used to specify how the description should be interpreted, such as plain text or formatted text.

*example*:
```
Enter Description Type
```

---

#### Description JSON `string`

<dd>

The Description JSON property is used when the 'Description Type' is set to 'descriptionJSON'. It allows for a structured description using JSON format. This field is optional and appears only when 'Description Type' is set accordingly.

*example*:
```
Enter Description JSON
```

---

#### Description `string`

<dd>

The Description property provides a detailed explanation of the issue. It is an optional field but is important for understanding the context and requirements of the issue.

*example*:
```
Enter Description
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows users to specify any other fields in JSON format that should be included with the issue. This field is optional and can be configured in the Connect Portal Workflow Settings to update specific issue fields.

*example*:
```
Enter Additional Fields
```

---

### Update Issue

Updates an existing issue in JIRA with the provided details.

#### Issue Key `string`

<dd>

The Issue Key property is the unique identifier for the issue to be updated. It is a required field and should match the format used by JIRA, such as 'PROJ-123'.

*example*:
```
Enter Issue Key
```

---

#### Summary `string`

<dd>

The Summary property allows updating the one-line summary of the issue. It is optional but should be used to keep the issue's description accurate and up-to-date.

*example*:
```
Enter Summary
```

---

#### Issue Type `string`

<dd>

The Issue Type property allows changing the type of the issue. It is optional and can be configured in the Connect Portal Workflow Settings to allow users to select an appropriate issue type.

*example*:
```
Enter Issue Type
```

---

#### Jira Issue Status `string`

<dd>

The Jira Issue Status property allows updating the status of the issue. It is optional and can be set according to the project's workflow requirements, with options configured in the Connect Portal Workflow Settings.

*example*:
```
Enter Jira Issue Status
```

---

#### Assignee `string`

<dd>

The Assignee property allows changing the user assigned to the issue. It is optional and can be configured in the Connect Portal Workflow Settings to allow users to select an assignee.

*example*:
```
Enter Assignee
```

---

#### Description Type `string`

<dd>

The Description Type property allows selecting the format for the issue description when updating. It is optional and determines how the description is interpreted.

*example*:
```
Enter Description Type
```

---

#### Description JSON `string`

<dd>

The Description JSON property is used when updating the issue's description in JSON format. It is optional and only applicable when 'Description Type' is set to 'descriptionJSON'.

*example*:
```
Enter Description JSON
```

---

#### Description `string`

<dd>

The Description property allows providing a detailed description when updating the issue. It is optional but recommended for clarity and completeness.

*example*:
```
Enter Description
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows specifying additional fields in JSON format when updating the issue. It is optional and can include any other fields that need to be updated as per the Connect Portal Workflow Settings.

*example*:
```
Enter Additional Fields
```

---

### Get Issue By Key

Retrieves details of a specific issue by its key.

#### Issue Key `string`

<dd>

The Issue Key property is the unique identifier of the issue to retrieve. It is a required field and must conform to the JIRA issue key format.

*example*:
```
Enter Issue Key
```

---

### Filter Issues

Retrieves a list of issues that match the specified JQL query filters.

#### Jql Query `string`

<dd>

The Jql Query property is used to search for issues that match specified filters using JIRA Query Language (JQL). It is a required field and must be a valid JQL statement.

*example*:
```
Enter Jql Query
```

---

#### Limit `integer`

<dd>

The Limit property restricts the maximum number of issues to return. It is optional and defaults to 10 if left blank. This field is useful for controlling the size of the result set.

*example*:
```
Enter Limit
```

---

### Search By Jql

Performs a search for issues using a JQL query.

#### Jql Query `string`

<dd>

The JQL Query property allows for a detailed search using JIRA Query Language. It is a required field and must be a valid JQL statement to retrieve the desired issues.

*example*:
```
Enter Jql Query
```

---

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to control paginated results. It is optional and allows users to specify parameters such as page number and page size for the search results.

*example*:
```
Enter Pagination Parameters
```

---

### Get Projects

Retrieves a list of projects with pagination support.

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property allows for paginated retrieval of projects. It is optional and can include parameters such as page number and page size to manage the list of projects.

*example*:
```
Enter Pagination Parameters
```

---

### Get Issue Types By Project

Retrieves a list of issue types available for a specific project.

#### Project `string`

<dd>

The Project property is the key of the project for which to retrieve available issue types. It is a required field and must match the project key format used by JIRA.

*example*:
```
Enter Project
```

---

### Get Issue Types

Retrieves a list of all issue types available in JIRA.

(No properties are provided for this command, so no description is available.)

---

### Describe Action Schema

Provides the schema for a specific action type within a project and issue type context.

#### Issue Type Id `string`

<dd>

The Issue Type ID property specifies the identifier of the issue type for which the schema is to be described. It is a required field and should match the format used by JIRA for issue type IDs.

*example*:
```
Enter Issue Type Id
```

---

#### Project Key `string`

<dd>

The Project Key property specifies the key of the project for which the action schema is to be described. It is a required field and must conform to the project key format used by JIRA.

*example*:
```
Enter Project Key
```

---

#### Operation `string`

<dd>

The Operation property defines the type of action for which the schema is requested, such as 'CREATE_ISSUE' or 'UPDATE_ISSUE'. It is a required field and should match one of the predefined operation type values.

*example*:
```
Enter Operation
```

---

### Get Issue Status By Project

Retrieves a list of issue statuses available for a specific project.

#### Project `string`

<dd>

The Project property is the key of the project for which to retrieve available issue statuses. It is a required field and must match the project key format used by JIRA.

*example*:
```
Enter Project
```

---

### Get All Assignees By Project

Retrieves a list of all possible assignees for a specific project.

#### Project `string`

<dd>

The Project property is the key of the project for which to retrieve possible assignees. It is a required field and must conform to the project key format used by JIRA.

*example*:
```
Enter Project
```

---

### Custom Action

Executes a custom action defined by the user.

(No properties are provided for this command, so no description is available.)
