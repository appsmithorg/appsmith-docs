# JIRA Integration

This page provides information on how to connect to JIRA. It enables users to perform actions such as creating issues, updating issues, retrieving issue information, filtering issues, and managing projects and issue types.

## Connect JIRA

Explain how to authenticate and connect to this service securely.

## Query JIRA

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in JIRA.

#### Summary `string`

<dd>

The Summary property is a concise description of the issue. It is a required field and should be a brief one-liner that encapsulates the main point of the issue. If omitted, the issue creation will fail.

*example*:
```markdown
Enter Summary
```

---

#### Project `string`

<dd>

The Project property specifies the JIRA project to which the issue will be added. If not provided, it defaults to the user's first project. Users can select a project using the Connect Portal Workflow Settings. This field is typically required to ensure the issue is created within the correct project context.

*example*:
```markdown
Enter Project
```

---

#### Issue Type `string`

<dd>

The Issue Type property defines the type of issue to be created, such as Task, Bug, or Story. It defaults to Task if not provided. Users can select an issue type using the Connect Portal Workflow Settings. This field helps categorize the issue appropriately within JIRA.

*example*:
```markdown
Enter Issue Type
```

---

#### Jira Issue Status `string`

<dd>

The Jira Issue Status property sets the initial status of the issue. If not provided, it defaults to the project's first status. This property is important for workflow management and tracking the issue's progress.

*example*:
```markdown
Enter Jira Issue Status
```

---

#### Assignee `string`

<dd>

The Assignee property determines who is responsible for the issue. If not provided, it defaults to the authenticated user. This field is crucial for task allocation and accountability within the team.

*example*:
```markdown
Enter Assignee
```

---

#### Description Type `string`

<dd>

The Description Type property allows the user to select the format of the issue description. This field may dictate how the description is rendered and edited within JIRA.

*example*:
```markdown
Enter Description Type
```

---

#### Description JSON `string`

<dd>

The Description JSON property is used to provide a structured description of the issue when 'descriptionType' is set to 'descriptionJSON'. This allows for more complex descriptions that can include formatting and other elements.

*example*:
```markdown
Enter Description JSON
```

---

#### Description `string`

<dd>

The Description property is a detailed narrative of the issue. It provides more context and information than the summary and is essential for understanding the issue's scope and requirements.

*example*:
```markdown
Enter Description
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows users to specify any other issue fields in JSON format. This is used to include fields that are not covered by the standard properties and can be configured using the Connect Portal Workflow Settings.

*example*:
```markdown
Enter Additional Fields
```

---

### Update Issue

Updates an existing issue in JIRA.

#### Issue Key `string`

<dd>

The Issue Key property is the unique identifier for the issue to be updated. It is a required field and follows a typical format like 'PROJ-123'. Users can find this ID in the issue URL or within the issue details in JIRA.

*example*:
```markdown
Enter Issue Key
```

---

#### Summary `string`

<dd>

The Summary property is a concise description of the issue. It is an optional field for the update command and should be a brief one-liner that encapsulates the main point of the issue.

*example*:
```markdown
Enter Summary
```

---

#### Issue Type `string`

<dd>

The Issue Type property defines the type of issue to be updated, such as Task, Bug, or Story. Users can select an issue type using the Connect Portal Workflow Settings. This field helps categorize the issue appropriately within JIRA.

*example*:
```markdown
Enter Issue Type
```

---

#### Jira Issue Status `string`

<dd>

The Jira Issue Status property sets the status of the issue. Users can select a status using the Connect Portal Workflow Settings. This property is important for workflow management and tracking the issue's progress.

*example*:
```markdown
Enter Jira Issue Status
```

---

#### Assignee `string`

<dd>

The Assignee property determines who is responsible for the issue. Users can select an assignee using the Connect Portal Workflow Settings. This field is crucial for task allocation and accountability within the team.

*example*:
```markdown
Enter Assignee
```

---

#### Description Type `string`

<dd>

The Description Type property allows the user to select the format of the issue description. This field may dictate how the description is rendered and edited within JIRA.

*example*:
```markdown
Enter Description Type
```

---

#### Description JSON `string`

<dd>

The Description JSON property is used to provide a structured description of the issue when 'descriptionType' is set to 'descriptionJSON'. This allows for more complex descriptions that can include formatting and other elements.

*example*:
```markdown
Enter Description JSON
```

---

#### Description `string`

<dd>

The Description property is a detailed narrative of the issue. It provides more context and information than the summary and is essential for understanding the issue's scope and requirements.

*example*:
```markdown
Enter Description
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows users to specify any other issue fields in JSON format. This is used to include fields that are not covered by the standard properties and can be configured using the Connect Portal Workflow Settings.

*example*:
```markdown
Enter Additional Fields
```

---

### Get Issue By Key

Retrieves details of a specific issue using its unique key.

#### Issue Key `string`

<dd>

The Issue Key property is the unique identifier for the issue to be retrieved. It is a required field and follows a typical format like 'PROJ-123'. Users can find this ID in the issue URL or within the issue details in JIRA.

*example*:
```markdown
Enter Issue Key
```

---

### Filter Issues

Searches for issues that match specified filters using JIRA Query Language (JQL).

#### Jql Query `string`

<dd>

The Jql Query property allows users to filter issues based on specific criteria defined in JIRA Query Language (JQL). This field is essential for narrowing down search results to relevant issues.

*example*:
```markdown
Enter Jql Query
```

---

#### Limit `integer`

<dd>

The Limit property restricts the maximum number of issues to return. If left blank, it defaults to 10. This field is useful for controlling the size of the result set, especially in cases with potentially large numbers of matching issues.

*example*:
```markdown
Enter Limit
```

---

### Search By Jql

Executes a search in JIRA using a JQL query and returns paginated results.

#### Jql Query `string`

<dd>

The JQL Query property is used to perform a search based on specific criteria defined in JIRA Query Language (JQL). This field is essential for finding issues that meet the defined conditions.

*example*:
```markdown
Enter Jql Query
```

---

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through paginated search results. It typically includes parameters such as page number and page size. This field is crucial for handling large sets of data efficiently.

*example*:
```markdown
Enter Pagination Parameters
```

---

### Get Projects

Retrieves a list of JIRA projects with pagination support.

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through paginated project lists. It typically includes parameters such as page number and page size. This field is crucial for handling large sets of data efficiently.

*example*:
```markdown
Enter Pagination Parameters
```

---

### Get Issue Types By Project

Retrieves a list of issue types available in a specific project.

#### Project `string`

<dd>

The Project property specifies the key of the JIRA project for which issue types are to be retrieved. It is a required field and helps in fetching the relevant types of issues that can be created within the project context.

*example*:
```markdown
Enter Project
```

---

### Get Issue Types

Retrieves a list of all issue types available in JIRA.

(No properties available.)

---

### Describe Action Schema

Provides the schema for a specific action type within a project context.

#### Issue Type Id `string`

<dd>

The Issue Type ID property is the identifier for the issue type related to the action being described. It is a required field and helps in understanding the fields and operations available for that particular issue type.

*example*:
```markdown
Enter Issue Type Id
```

---

#### Project Key `string`

<dd>

The Project Key property specifies the key of the JIRA project related to the action being described. It is a required field and helps in fetching the relevant schema for actions within the project context.

*example*:
```markdown
Enter Project Key
```

---

#### Operation `string`

<dd>

The Operation property indicates the type of action for which the schema is requested, such as CREATE_ISSUE or UPDATE_ISSUE. It is a required field and determines the applicable fields and rules for the specified action.

*example*:
```markdown
Enter Operation
```

---

### Get Issue Status By Project

Retrieves a list of issue statuses available in a specific project.

#### Project `string`

<dd>

The Project property specifies the key of the JIRA project for which issue statuses are to be retrieved. It is a required field and helps in understanding the various stages an issue can go through within the project context.

*example*:
```markdown
Enter Project
```

---

### Get All Assignees By Project

Retrieves a list of all users who can be assigned issues in a specific project.

#### Project `string`

<dd>

The Project property specifies the key of the JIRA project for which potential assignees are to be retrieved. It is a required field and helps in identifying the team members involved in the project.

*example*:
```markdown
Enter Project
```

---

### Custom Action

Performs a custom action defined by the user.

(No properties available.)

---
