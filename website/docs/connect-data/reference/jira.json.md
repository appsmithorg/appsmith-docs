# JIRA Integration

This page provides information on how to connect to JIRA. It enables users to perform actions such as creating issues, updating issues, retrieving issues by key, filtering issues, searching by JQL, managing projects, and handling issue types and statuses.

## Connect JIRA

Explain how to authenticate and connect to this service securely.

## Query JIRA

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in JIRA with the specified details.

#### Summary `string`

<dd>

The Summary property is a brief one-liner that describes the issue. It is a required field and should be clear and concise. The format is a simple text string.

*example*:
```plaintext
The printer stopped working
```

---

#### Project `string`

<dd>

The Project property specifies the JIRA project to which the issue will be added. If omitted, it defaults to the user’s first project. The format is typically a project key or name. Users can configure the default project in the Connect Portal Workflow Settings.

*example*:
```plaintext
{{settings.project}}
```

---

#### Issue Type `string`

<dd>

The Issue Type property defines the type of the issue being created, such as 'Task', 'Bug', or 'Story'. If not provided, it defaults to 'Task'. Users can configure the default issue type in the Connect Portal Workflow Settings.

*example*:
```plaintext
{{settings.issueType}}
```

---

#### Jira Issue Status `string`

<dd>

The Jira Issue Status property sets the initial status of the new issue. If not provided, it defaults to the first status in the project. The format is typically a status name or identifier.

*example*:
```plaintext
{{settings.status}}
```

---

#### Assignee `string`

<dd>

The Assignee property specifies the user who is assigned to the issue. If omitted, the authenticated user creating the issue is assigned by default. Users can select an assignee in the Connect Portal Workflow Settings.

*example*:
```plaintext
{{settings.assignee}}
```

---

#### Description Type `string`

<dd>

The Description Type property allows users to select the format in which the issue description will be provided. This is typically a choice between plain text and a structured format like JSON.

*example*:
```plaintext
Enter Description Type
```

---

#### Description JSON `JSON`

<dd>

The Description JSON property is used when the 'Description Type' is set to 'descriptionJSON'. It allows for a structured, rich-text description using JIRA's document format. This property is only visible when the appropriate description type is selected.

*example*:
```json
{
  "version": 1,
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Hello",
          "marks": [
            {
              "type": "strong"
            }
          ]
        }
      ]
    }
  ]
}
```

---

#### Description `string`

<dd>

The Description property is used for a detailed description of the issue. This field allows for a more extensive explanation of the problem or request.

*example*:
```plaintext
Enter Description
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows users to specify other fields that should be included when creating the issue. This is provided in JSON format and can be configured in the Connect Portal Workflow Settings to include custom fields.

*example*:
```json
{
    "{{settings.ExternalID}}": "..."
}
```

---

### Update Issue

Updates an existing issue in JIRA with the specified details.

#### Issue Key `string`

<dd>

The Issue Key property is the unique identifier for the issue to be updated in JIRA. It is a required field and typically follows a format like 'PROJ-123'.

*example*:
```plaintext
TEST-1234
```

---

#### Summary `string`

<dd>

The Summary property is a brief one-liner that describes the issue. It is used to update the existing summary of the issue. The format is a simple text string.

*example*:
```plaintext
The printer stopped working
```

---

#### Issue Type `string`

<dd>

The Issue Type property defines the type of the issue being updated. Users can select an issue type in the Connect Portal Workflow Settings.

*example*:
```plaintext
{{settings.issueType}}
```

---

#### Jira Issue Status `string`

<dd>

The Jira Issue Status property updates the status of the issue. Users can select a new status in the Connect Portal Workflow Settings.

*example*:
```plaintext
{{settings.status}}
```

---

#### Assignee `string`

<dd>

The Assignee property specifies the user who is assigned to the issue. Users can select a new assignee in the Connect Portal Workflow Settings.

*example*:
```plaintext
{{settings.assignee}}
```

---

#### Description Type `string`

<dd>

The Description Type property allows users to select the format for updating the issue description. This is typically a choice between plain text and a structured format like JSON.

*example*:
```plaintext
Enter Description Type
```

---

#### Description JSON `JSON`

<dd>

The Description JSON property is used when the 'Description Type' is set to 'descriptionJSON'. It allows for a structured, rich-text description update using JIRA's document format. This property is only visible when the appropriate description type is selected.

*example*:
```json
{
  "version": 1,
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Hello",
          "marks": [
            {
              "type": "strong"
            }
          ]
        }
      ]
    }
  ]
}
```

---

#### Description `string`

<dd>

The Description property is used for updating the detailed description of the issue. This field allows for a more extensive explanation of the problem or request.

*example*:
```plaintext
Enter Description
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows users to specify other fields that should be included when updating the issue. This is provided in JSON format and can be configured in the Connect Portal Workflow Settings to include custom fields.

*example*:
```json
{
    "{{settings.ExternalID}}": "..."
}
```

---

### Get Issue By Key

Retrieves a specific issue from JIRA using its unique key.

#### Issue Key `string`

<dd>

The Issue Key property is the unique identifier for the issue to be retrieved from JIRA. It is a required field and typically follows a format like 'PROJ-123'.

*example*:
```plaintext
TEST-1234
```

---

### Filter Issues

Searches for issues in JIRA that match specified filters using JQL.

#### Jql Query `string`

<dd>

The Jql Query property allows users to filter and search for issues using JIRA Query Language (JQL). It is a powerful way to specify criteria for filtering issues.

*example*:
```plaintext
field
```

---

#### Limit `integer`

<dd>

The Limit property sets the maximum number of issues to return. If left blank, it defaults to 10. This is useful for controlling the size of the result set.

*example*:
```plaintext
Enter Limit
```

---

### Search By Jql

Performs a search in JIRA using a JQL query.

#### Jql Query `string`

<dd>

The JQL Query property is used to perform searches in JIRA using JIRA Query Language. It allows for complex search criteria to be defined.

*example*:
```plaintext
project = PROJECT
```

---

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to specify pagination details for paginated results. This helps in managing the retrieval of large sets of data.

*example*:
```plaintext
Enter Pagination Parameters
```

---

### Get Projects

Retrieves a list of projects from JIRA.

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property allows users to specify pagination details for retrieving a list of projects. This is useful when dealing with a large number of projects.

*example*:
```plaintext
Enter Pagination Parameters
```

---

### Get Issue Types By Project

Retrieves a list of issue types available for a given project in JIRA.

#### Project `string`

<dd>

The Project property is the key of the project for which to retrieve available issue types. It is a required field and typically follows a format like 'PROJ'.

*example*:
```plaintext
Enter Project
```

---

### Get Issue Types

Retrieves a list of all issue types in JIRA.

No properties available.

---

### Describe Action Schema

Provides the schema for a given action type within a project in JIRA.

#### Issue Type Id `string`

<dd>

The Issue Type ID property is the identifier for the issue type for which the action schema is being described. It is typically a numeric or alphanumeric identifier.

*example*:
```plaintext
Enter Issue Type Id
```

---

#### Project Key `string`

<dd>

The Project Key property is the key of the project for which the action schema is being described. It is a required field and typically follows a format like 'PROJ'.

*example*:
```plaintext
Enter Project Key
```

---

#### Operation `string`

<dd>

The Operation property specifies the type of operation for which the schema is being described, such as 'CREATE_ISSUE' or 'UPDATE_ISSUE'. It helps in understanding the required fields and data structure for different actions.

*example*:
```plaintext
Enter Operation
```

---

### Get Issue Status By Project

Retrieves a list of issue statuses available for a given project in JIRA.

#### Project `string`

<dd>

The Project property is the key of the project for which to retrieve available issue statuses. It is a required field and typically follows a format like 'PROJ'.

*example*:
```plaintext
Enter Project
```

---

### Get All Assignees By Project

Retrieves a list of all possible assignees for a given project in JIRA.

#### Project `string`

<dd>

The Project property is the key of the project for which to retrieve a list of possible assignees. It is a required field and typically follows a format like 'PROJ'.

*example*:
```plaintext
Enter Project
```

---

### Custom Action

Executes a custom action defined by the user in JIRA.

No properties available.

---
