---
title: Jira
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Jira</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page provides information for connecting Appsmith to Jira, allowing you to create, update, and retrieve issues directly from your Jira workspace. With this integration, you can automate issue tracking, manage tasks, and interact with Jira projects.

## Connect Jira
  
To connect Appsmith to Jira, you need to authenticate your Appsmith application with Jira. On the authentication page, log in with your Jira credentials and select the Jira app you want to connect.

<ZoomImage
  src="/img/jira-integration.png" 
  alt="Jira datasource."
  caption="Jira datasource"
/>

## Query Jira

The following section is a reference guide that provides a description of the available commands with their parameters to create Jira queries.

### Create Issue

Creates a new issue in Jira. This command allows you to specify details such as project, issue type, and assignee while including a detailed description. Once the issue is successfully created, Jira returns an issue key (e.g., `JIRA-123`) that can be used for further operations like updates or queries.  

#### **Summary** `string`  

<dd>

A brief title describing the issue. This should be a concise and clear statement summarizing the problem or task.  

*Example:* If you want to dynamically set the Summary from an Input widget, use:

```js
{{summaryInput.text}}
``` 

</dd>

#### Project `string`  

<dd>

The Jira project where the issue is created. This is the key or name of the project. If the project is not provided, Jira may use a default project if one is configured. If no default is set or the project key is invalid, the request fails with an error.

*Example:* If you want to dynamically set the project using Select widget:

```js
{{projectSelect.selectedOptionValue}}
```

</dd>

#### Issue Type `string`  

<dd>

Defines the type of issue being created, such as Bug, Task, or Story. If the issue type is not provided, Jira attempts to use the default issue type for the project. If no default is set or the provided issue type is invalid, the request fails with an error.

*Example:* If you want to fetch the issue type dynamically from a select widget:  

```js
{{issueTypeDropdown.selectedOptionValue}}
```

</dd>

#### Jira Issue Status `string`  

<dd>

The initial status of the issue, based on the project's workflow. If the status is not provided, Jira assigns the default status for the selected issue type. If an invalid status is provided, the request fails with an error.

</dd>


#### Assignee `string`  

<dd>

The email or account ID of the person assigned to the issue. If the assignee is not provided, Jira assigns the issue to the project’s default assignee. If an invalid assignee is provided, the request fails with an error.

</dd>


#### Description `string | JSON`  

<dd>

A detailed description of the issue. Users can enter plain text or JSON-formatted content. If no description is provided, the issue is created without one.

*Example (Plain Text):* If you want to capture the description from a text area:

```js
{{ TextArea1.text }}
```

*Example (JSON):* If you want to format the description dynamically:

```js
{ "text": {{ TextArea1.text }} }
```

</dd>

#### Additional Fields `object`  

<dd>

Extra fields that may be required based on your Jira configuration. If additional fields are required by the project but not provided, Jira may return an error.

*Example:* If you want to add labels dynamically:

```js
{ "labels": {{ MultiSelect1.selectedOptionValues }} }
```


</dd>


### Update Issue

Updates an existing issue in Jira. This allows modifying properties such as summary, description, assignee, and additional fields. If the update is successful, Jira returns a confirmation response with the updated issue details. If the issue key is incorrect or required properties are missing, the request may fail with an error.

#### Issue Key `string`

<dd>

The unique identifier of the issue to be updated. This can be found in the Jira UI or retrieved from a query response. If the issue key is not provided, the request fails with an error stating that the issue key is required.

*Example:* If you want to get the issue key from a table selection:

```js
{{ Table1.selectedRow.issueKey }}
```

</dd>

#### Summary `string`

<dd>

A brief title describing the issue. If not provided, the existing summary remains unchanged.

*Example:* If you want to update the summary dynamically based on user input:

```js
{{ Input1.text }}
 ```

</dd>

#### Issue Type `string`

<dd>

Defines the type of issue, such as Bug, Task, or Story. If not provided, the issue type remains unchanged. If an invalid issue type is entered, the request fails with an error.

*Example:* If you want to allow users to change the issue type using a dropdown:

```js
{{ Select1.selectedOptionValue }}
```

</dd>

#### Jira Issue Status `string`

<dd>

Updates the status of the issue, such as "In Progress" or "Done." If the status is not provided, it remains unchanged. If an invalid status is entered, the request fails with an error.


</dd>

#### Assignee `string`

<dd>

The email or account ID of the person assigned to the issue. If not provided, the assignee remains unchanged. If an invalid assignee is entered, the request fails with an error.

</dd>

#### Description `string | JSON`

<dd>

A detailed description of the issue. If not provided, the existing description remains unchanged. Users can enter plain text or JSON-formatted content.

</dd>

#### Additional Fields `object`

<dd>

Extra fields that may be required based on your Jira configuration. If additional fields are required but not provided, Jira may return an error.
Example: If you want to update priority dynamically:

```js
{ "priority": {{ Select2.selectedOptionValue }} }
```

</dd>


### Get Issue by Key

Retrieves detailed information about a specific issue in Jira using its unique issue key. The response includes all issue properties such as summary, status, description, assignee, and additional fields. If the issue key is invalid or does not exist, Jira returns an error stating that the issue was not found.

#### Issue Key `string`

<dd>

The unique identifier for the issue in Jira. The issue key consists of a project key followed by a number (e.g., "PROJ-123"). You can find the issue key:

- In the Jira UI, at the top of the issue page
- In the URL when viewing an issue (https://yourdomain.atlassian.net/browse/PROJ-123)
- From a query response when listing issues
- If the issue key is not provided, the request fails with an error stating that the issue identifier is required.

*Example:* If you want to fetch issue details based on a selected row in a table:

```js
{{ Table1.selectedRow.issueKey }}
```

</dd>





### Filter Issues

Retrieves a list of issues from Jira based on specified filters. This allows users to fetch relevant issues using JQL (Jira Query Language) along with optional pagination parameters. The response includes an array of issues matching the criteria. If no issues match the filters, an empty list is returned.

#### JQL Query `string`

<dd>

Defines the filter criteria using Jira Query Language. This query determines which issues are retrieved based on fields like project, status, assignee, and more. If no query is provided, Jira may return all accessible issues by default.

*Example:* To fetch all issues assigned to the current user:

```js
assignee = currentUser()
```

*Example:* If you want to dynamically filter based on a selected project from a dropdown widget:

```js
project = '" + Select1.selectedOptionValue + "'
```

</dd>

#### Limit `number`

<dd>

Specifies the maximum number of issues to return in a single request. The default limit varies based on Jira's configuration, but it is typically 50. If a limit is not provided, Jira may use its default pagination settings.

*Example:* To fetch only the top 10 issues:

```js
10
```

*Example:* If you want the user to select the number of results using a slider widget:

```js
{{ Slider1.value }}
```

</dd>

### Search by JQL

Retrieves a list of Jira issues based on a JQL (Jira Query Language) query. This allows users to search for issues using specific criteria such as status, assignee, project, and custom fields. The response includes a paginated list of matching issues. If no matching issues are found, an empty list is returned.

#### JQL Query `string`

<dd>

Defines the search criteria using Jira Query Language. If no query is provided, Jira may return all accessible issues by default.

*Example:* To fetch all issues marked as "In Progress":

```js
"status = 'In Progress'"
```

*Example:* To retrieve issues assigned to a specific user dynamically using a selected email from a table widget:

```js
"assignee = '" + Table1.selectedRow.email + "'"
```

*Example:* To fetch all high-priority bugs in a project:

```js
"project = 'CUSTOMER_SUPPORT' AND priority = 'High' AND issuetype = 'Bug'"
```

</dd>

#### Pagination Parameters

<dd>

Controls how many results are returned and allows fetching issues in batches. If not specified, Jira applies default pagination settings.

*Example:* To fetch issues starting from the 20th record:

```js
20
```

*Example:* If the pagination start index is controlled by a text input field:

```js
{{ Input1.text }}
```

</dd>

### Get Projects
Retrieves a list of all Jira projects accessible to the user. This command helps in dynamically fetching project details, which can be used for creating or filtering issues. If the user does not have permission to view certain projects, those projects will not be included in the response.

#### Pagination Parameters `string`

<dd>

Controls the number of projects returned in a single request. If no pagination parameters are specified, Jira applies its default settings.

</dd>

### Get Issues by Project
Retrieves all issues associated with a specific Jira project. This command helps in fetching issues dynamically based on the selected project. If the user does not have permission to access the project, the request may return an authorization error.

#### Project `string`

<dd>

The Jira project key or name used to filter issues. The project key can be found in the Jira URL when viewing a project. 

For example, if the project URL is:

```js
https://your-domain.atlassian.net/browse/CUSTOMER_SUPPORT
```
The project key is `CUSTOMER_SUPPORT`.



</dd>


### Get Issue Types

Retrieves all available issue types in Jira. This command provides a list of issue types such as Bug, Task, Story, and more, along with their descriptions, icons, and scope.

The response includes details such as:

`ID` – The unique identifier for the issue type.
`Name` – The name of the issue type (e.g., Story, Bug, Epic).
`Description` – A brief explanation of the issue type.
`Icon URL` – The URL of the issue type icon.
`Scope` – Indicates whether the issue type applies to a specific project.


### Describe Action Schema

Retrieves the available operations that can be performed on a specific issue type within a given project. This command helps determine what actions (such as transitioning status, assigning users, or adding comments) are allowed for a particular issue type.

#### Issue Type ID `string`

<dd>

The unique identifier for the issue type (e.g., Bug, Task, Story). This is required to fetch the available operations for that issue type.

*Example:* If you want to fetch the issue type ID dynamically from a Select widget:

```js
{{ selectIssueType.selectedOptionValue }}
```

If this property is not provided, Jira may return an error indicating that the issue type is required.

</dd>

#### Project Key `string`

<dd>

The key of the project where the issue type belongs. This ensures the retrieved schema is relevant to the specific project's configuration.

*Example:* If you want to fetch the project key dynamically from an Input widget:

```js
{{ inputProjectKey.text }}
```
If this property is not provided, Jira may return a default schema if applicable, or it may result in an error if the project key is mandatory.

</dd>

#### Operation `string`

<dd>

Specifies the type of action to describe, such as edit, transition, or comment.

*Example:* If you want users to choose an operation from a dropdown:

```js
{{ selectOperation.selectedOptionValue }}
```

If this property is left blank, Jira may return a full schema of all possible operations, or it may return an error if an operation is required.

</dd>

### Get Issue Status by Project

Retrieves all possible issue statuses for a given project. This is useful for understanding the workflow states available for issues in a specific Jira project.

#### Project `string`

<dd>

The key or ID of the Jira project for which you want to fetch issue statuses.

*Example:* If you want to get the project key dynamically from a Select widget:

```js
{{ selectProject.selectedOptionValue }}
```

</dd>


### Get All Assignees by Project

Retrieves a list of all users who can be assigned issues in a specified Jira project. This is useful when dynamically assigning issues based on available team members.

#### Project `string`

<dd>


The key or ID of the Jira project for which you want to fetch assignable users.

Example: If you want to get the project key dynamically from a Select widget:

```js
{{ selectProject.selectedOptionValue }}
```

If this property is not provided, Jira may return an error indicating that a project identifier is required. In some cases, the request may return an empty list if no users are assignable or if the project does not exist.

</dd>