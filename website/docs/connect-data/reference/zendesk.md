---
title: Zendesk
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Zendesk</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->


This page provides information for connecting Appsmith to Zendesk, which allows you to interact with support data such as tickets and users within your applications.

<ZoomImage src="/img/zendesk-appsmith.png" alt="" caption="" />

### Connect Zendesk

The following section is a reference guide that provides a complete description of all the parameters to connect to an Zendesk datasource.


#### Subdomain

<dd>

The subdomain is the unique identifier in your Zendesk account URL. It appears as the first part of your Zendesk domain and looks like this:

```js
https://<your-subdomain>.zendesk.com
```
For more details, refer to the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4409381383578-Where-can-I-find-my-Zendesk-subdomain).

</dd>

#### Authentication

<dd>

After adding your subdomain, you are redirected to the authentication page. The page displays the authentication method based on your Zendesk account configuration. You can authenticate using your email address and password.


</dd>


## Query Zendesk

The following section is a reference guide that provides a description of the available commands with their parameters to create Zendesk queries.


### Create Ticket

The create ticket command allows you to generate a new ticket in Zendesk by providing relevant details such as the subject, description, requester information, and optional fields like tags, priority, and due dates. It is used to log new issues or requests in the system for tracking and resolution.



#### Ticket Subject `string`

<dd>

This property defines the title or brief description of the issue or request. It helps to summarize the content of the ticket in a concise manner, allowing for easier identification and prioritization.

*Example:* If you want to dynamically set the subject from an Input widget, use:

```js
{{Title_Input.text}}
// Example: "Broken link on homepage"
```


</dd>


#### Ticket Description `string`

<dd>

This property provides a detailed explanation of the issue or request. It allows the requester to fully describe the problem or inquiry, helping the support team understand the context and provide better assistance. The description must include relevant details, such as steps to reproduce the issue, error messages, or any other information that can aid in resolving the ticket.

*Example:* If you want to dynamically set the subject from an Input widget, use:

```js
{{Info_Input.text}}
```

</dd>


#### Ticket Requester Name `string`

<dd>

This property holds the name of the person submitting the ticket. It identifies the individual who needs assistance or support, allowing for personalized communication and a more effective resolution process. 

*Example:* If you want to dynamically set the Requester Name from an Input widget, use:

```javascript
{{user_name.text}}
// Example: "John Doe"
```

</dd>

#### Ticket Requester Email `string`

<dd>

This property holds the email address of the person submitting the ticket. It ensures the requester can be contacted for updates, resolutions, or clarifications. 

*Example:* If you want to dynamically set the Requester Email from an Input widget, use:

```javascript
{{user_email.text}}
// Example: "john.doe@example.com"
```
</dd>


#### Assignee Id `number`

<dd>

This property defines the Zendesk Agent assigned to handle the ticket. It helps track responsibility for resolving the issue, ensuring that each ticket is directed to the appropriate support representative. If not specified, the ticket remains unassigned.

The Assignee ID is a unique numeric identifier for each Zendesk Agent. Users can find it in the Zendesk Admin Center under [Team Members](https://support.zendesk.com/hc/en-us/articles/8357765446554-Get-Assignee-ID-Group-ID-and-Field-ID-Zendesk-Support-Ultimate#:~:text=An%20Assignee%20Id%20is%20the,Admin%20Center%20%3E%20People%20%3E%20Team%20members).


*Example:* To dynamically set the Assignee ID (*Agent ID*) from a Select widget, use:

```js
{{fetch_agent.selectedOptionValue}}
//632345679
```

</dd>

#### Ticket Type `string`

<dd>

This property defines the type of ticket, helping categorize the request for better organization and management. It assists in determining the correct workflow for handling the ticket. If not provided, the default value is usually `question`.

- Problem: For issues or bugs that need to be fixed.
- Incident: For service disruptions or outages.
- Question: For general inquiries or support questions.
- Task: For administrative or procedural tasks.

</dd>

#### Ticket Priority `string`

<dd>

This property defines the urgency of the ticket. It helps support teams prioritize tickets and address the most critical issues first. If not provided, the default value is usually `normal`.

- Low: Non-urgent issues that can be handled later.
- Normal: Standard tickets that need resolution within a reasonable time frame.
- High: Urgent issues requiring quick attention.
- Urgent: Critical issues that need immediate resolution.

</dd>

#### Ticket Status `string`

<dd>

This property specifies the current status of the ticket, indicating its progress in the resolution process. It helps categorize tickets for better management and visibility.

- New: The ticket has been created but not yet assigned or worked on.
- Open: The ticket is currently being worked on.
- Pending: Waiting for more information from the requester.
- Hold: Waiting for a third party or internal process before proceeding.
- Solved: The ticket has been resolved but not yet closed.


</dd>

#### Ticket Due At `string`

<dd>

This property specifies the due date and time for the ticket, applicable only if the ticket type is set to task. The date must be provided in the ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`), which ensures accurate time tracking and scheduling.

*Example:* To dynamically set the due date based on a Datepicker widget:

```js
{{DatePicker.selectedDate}}
```

</dd>

#### Ticket Tags `array<string>`

<dd>

This property allows associating tags with the ticket for categorization or easy search. Tags help to quickly filter tickets by specific topics or issues.

*Example:* For tickets related to a specific feature or campaign, tags such as `homepage`, `bug`, or `marketing` can be applied.

</dd>


#### Ticket External Id `string`

<dd>

This property is used for associating the ticket with an external system or tracking reference. It helps link the ticket to an issue in a different tool or system.

*Example:* If the ticket is related to a bug tracked in an external issue tracker, the external ID could be the reference number from that system.

</dd>

#### Ticket Custom Fields `object`


<dd>

This property is used for associating the ticket with an external system or tracking reference. It helps link the ticket to an issue in a different tool or system.

*Example:* If the ticket is related to a bug tracked in an external issue tracker, the external ID could be the reference number from that system.

</dd>



### Update Ticket

The update ticket command enables you to modify an existing ticket in Zendesk by updating its properties, such as status, description, priority, or due date. This is used to manage and track changes to the ticket as it progresses through the resolution process.

#### Ticket ID

<dd>

This property specifies the unique identifier of the ticket to update. It is a mandatory field used to ensure the correct ticket is being modified. 

*Example:* To dynamically reference the ticket ID from a selected row in a Table widget, use:

```javascript
{{Table1.selectedRow.ticketId}}
// Example: "56690"
```

</dd>

#### Subject

<dd>

This property allows you to update the title or brief description of the ticket. It helps to revise the summary of the issue for clarity or to reflect any changes in the request.

*Example:* To update the subject from an input widget, use:

```javascript
{{Title_Input.text}}
// Example: "Updated: Broken link on homepage"
```

</dd>

#### Description

<dd>

This property provides the ability to update the detailed explanation of the issue. Use it to add more information, clarify the problem, or reflect the current status of the ticket.

*Example:* To update the description dynamically from a text widget, use:

```javascript
{{Info_Input.text}}
// Example: "The broken link is on the 'Contact Us' page and leads to a 404 error."
```

</dd>

#### Requester Name

<dd>

This property allows you to update the name of the person associated with the ticket. It is useful if the requester changes or needs to be corrected.

*Example:* To update the requester name dynamically from the logged-in user’s details, use:

```javascript
{{appsmith.user.username}}
// Example: "Jane Doe"
```

</dd>

#### Requester Email

<dd>

This property updates the email address of the person associated with the ticket. It ensures the requester’s contact details remain accurate for ongoing communication.

*Example:* To update the requester email dynamically, use:

```javascript
{{appsmith.user.email}}
// Example: "jane.doe@example.com"
```

</dd>

#### Assignee Id

<dd>

This property updates the Zendesk Agent assigned to the ticket. Use it to reassign the ticket to another agent or team.

*Example:* To update the assignee ID dynamically from a dropdown selection, use:

```javascript
{{fetch_agent.selectedOptionValue}}
// Example: "23456789" (Agent ID)
```

</dd>

#### Type

<dd>

This property updates the type of the ticket. Use it to change the category of the request to better reflect the nature of the issue.

- `Problem`: Issues or bugs needing fixes.
- `Incident`: Service disruptions or outages.
- `Question`: General inquiries or support questions.
- `Task`: Administrative or procedural tasks.



#### Priority

This property updates the urgency of the ticket. Use it to adjust the priority as circumstances change.

- `Low`: Non-urgent issues.
- `Normal`: Standard tickets needing resolution.
- `High`: Urgent issues requiring quick attention.
- `Urgent`: Critical issues needing immediate resolution.

</dd>

#### Status

<dd>

This property updates the current status of the ticket, indicating its progress. Use it to track and manage the ticket’s resolution.

- `New`: The ticket is created but not yet acted on.
- `Open`: The ticket is being worked on.
- `Pending`: Waiting for more information from the requester.
- `Hold`: Waiting on a third party or process.
- `Solved`: The ticket has been resolved but not yet closed.

</dd>

#### Due At

<dd>

This property updates the due date for the ticket, applicable for tasks only. The date must be in ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`).

*Example:* To update the due date dynamically from a date picker widget:

```javascript
{{DatePicker.selectedDate}}
// Example: "2025-01-25T15:00:00Z"
```
</dd>

#### External Id

<dd>

This property is used to associate the ticket with an external system or tracking reference. Update it to reflect changes in external issue trackers or related systems.

*Example:* To set the external ID dynamically:

```javascript
{{ExternalId_Input.text}}
// Example: "BUG-4567"
```

</dd>

### Add Comments to Ticket


The Add Comments to Ticket command allows you to append a new comment to an existing Zendesk ticket. Comments can be public replies visible to the requester or internal notes for private team collaboration.


#### Ticket ID `number`

<dd>

This property specifies the unique identifier of the ticket where the comment is added. It ensures the comment is associated with the correct ticket for tracking and resolution.

*Example:* To dynamically reference the ticket ID from a selected row in a Table widget, use:

```js
{{Table1.selectedRow.ticketId}}
// Example: "56690"
```

</dd>

#### Comment Body `string`

<dd>

This property defines the content of the comment. It can be written in plain text or HTML, allowing for rich formatting if needed. The comment helps provide updates, additional information, or responses to inquiries.

*Example:* If you want to set the comment dynamically using a rich text editor, use:

```js
{{RichTextEditor1.text}}
```

</dd>

#### Is This Internal Note `boolean`

<dd>

This property determines whether the comment is a private internal note or a public reply visible to the requester.

- `true`: The comment is an internal note, only visible to support agents.
- `false` (default): The comment is a public reply, visible to the requester.

</dd>

### Search Tickets

The Search Tickets command allows you to retrieve tickets from Zendesk based on various filter criteria. You can filter results by subject, description, status, type, priority, requester, assignee, tags, external ID, and date ranges. This command helps in finding relevant tickets efficiently for tracking and resolution.

#### Ticket Subject `string`

<dd>

This property filters results by the text in the ticket’s subject. It searches for tickets containing the specified keyword or phrase in their subject line.

*Example:* To dynamically filter tickets by a subject from an Input widget, use:

```js
{{SearchInput.text}}
// Example: "Login issue"
```

</dd>

#### Ticket Description `string`

<dd>

This property filters tickets based on keywords in their description. It searches for tickets where the description contains the specified text, allowing you to find tickets with similar issues.

*Example:* To dynamically filter tickets based on an issue description from an Input widget, use:

```js
{{IssueDescriptionInput.text}}
// Example: "User unable to reset password"
```

</dd>

#### Ticket Status `string`

<dd>

This property filters tickets based on their current status. You can select from the options below. When JavaScript is enabled, you can also dynamically assign values using JS.

- new: The ticket has been created but not yet assigned or worked on.
- open: The ticket is currently being worked on.
- pending: Waiting for more information from the requester.
- hold: Waiting for a third party or internal process before proceeding.
- solved: The ticket has been resolved but not yet closed.

*Example:* To filter tickets by status from a Select widget, use:

```js
{{StatusDropdown.selectedOptionValue}}
// Example: "open"
```

</dd>

#### Ticket Type `string`

<dd>

This property filters tickets based on their type, helping categorize them for better organization.

- problem: For issues or bugs that need to be fixed.
- incident: For service disruptions or outages.
- question: For general inquiries or support questions.
- task: For administrative or procedural tasks.

*Example:* To dynamically set the ticket type filter from a Select widget, use:

```js
{{TypeDropdown.selectedOptionValue}}
// Example: "incident"
```

</dd>

#### Requester ID `number`

<dd>

This property filters tickets by the ID of the person who created the ticket. It is useful when searching for tickets submitted by a specific user.

*Example:* To filter tickets by a requester’s ID from a Table widget selection, use:

```js
{{UserTable.selectedRow.requesterId}}
// Example: 456789
```

</dd>

#### Assignee ID `number`

<dd>

This property filters tickets by the agent assigned to handle them. It helps track tickets by specific support representatives.

*Example:* To dynamically filter tickets assigned to a selected agent from a dropdown:

```js
{{AgentDropdown.selectedOptionValue}}
// Example: 512345
```

</dd>

#### Ticket Priority `string`

<dd>

This property filters tickets by their urgency level. You can select from the options below or dynamically assign values using JavaScript.

- low: Non-urgent issues that can be handled later.
- normal: Standard tickets that need resolution within a reasonable time frame.
- high: Urgent issues requiring quick attention.
- urgent: Critical issues that need immediate resolution.

*Example*: To filter tickets by priority from a Select widget, use:

```js
{{PriorityDropdown.selectedOptionValue}}
// Example: "high"ß
```

</dd>

#### Ticket Tags `array<string>`

<dd>

This property filters tickets based on their tags. Tags help categorize and quickly identify tickets related to a specific feature, campaign, or issue.

*Example:* To filter tickets by a selected tag from a MultiSelect widget, use:

```js
{{TagMultiSelect.selectedOptionValues}}
// Example: ["billing", "refund"]
```

</dd>

#### External ID `string`

<dd>

This property filters tickets by an external tracking identifier. It helps link tickets with an issue in an external system such as a bug tracker or CRM.

*Example:* To search tickets by an external system ID entered in an Input widget, use:

```js
{{ExternalIdInput.text}}
// Example: "BUG-4567"
```

</dd>

#### Due Date - Left `string` (ISO 8601)

<dd>

This property filters tickets with a due date on or after the specified date. The date must be in ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`).

*Example:* To filter tickets due after a selected date:

```js
{{DueDatePicker.selectedDate}}
// Example: "2024-02-01T00:00:00Z"
```

</dd>

#### Due Date - Right `string` (ISO 8601)

<dd>

This property filters tickets with a due date on or before the specified date.

*Example:* To filter tickets due before a selected date:

```js
{{DueDatePicker.selectedDate}}
// Example: "2024-02-28T23:59:59Z"
```

</dd>

#### Created Date - Left `string` (ISO 8601)

<dd>

This property filters tickets created on or after the specified date.

Example: To search for tickets created from a selected start date:

```js
{{CreatedDatePicker.selectedDate}}
// Example: "2024-01-01T00:00:00Z"
```

</dd>

#### Created Date - Right `string` (ISO 8601)

<dd>

This property filters tickets created on or before the specified date.

Example: To search for tickets created before a selected end date:

```js
{{CreatedDatePicker.selectedDate}}
// Example: "2024-01-31T23:59:59Z"
```

</dd>

#### Updated Date - Left `string` (ISO 8601)

<dd>

This property filters tickets last updated on or after the specified date.

Example: To filter tickets updated from a given date:

```js
{{UpdatedDatePicker.selectedDate}}
// Example: "2024-02-01T00:00:00Z"
```

</dd>

#### Updated Date - Right `string` (ISO 8601)

<dd>

This property filters tickets last updated on or before the specified date.

Example: To filter tickets updated before a selected date:

```js
{{UpdatedDatePicker.selectedDate}}
// Example: "2024-02-28T23:59:59Z"
```

</dd>

### Get Ticket by ID

The Get Ticket by ID command retrieves details of a specific ticket using its unique identifier. This is useful for fetching ticket information such as its status, priority, requester details, and comments. It helps support teams quickly access ticket data without searching manually.

#### Ticket ID `number`

<dd>

This property specifies the unique identifier of the ticket to be retrieved. The Ticket ID is assigned when a ticket is created and remains unchanged throughout its lifecycle. Fetching a ticket by ID ensures you retrieve the correct ticket details.

*Example:* To dynamically reference the ticket ID from a selected row in a Table widget, use:

```js
{{Table1.selectedRow.ticketId}}
// Example: 45678
```

</dd>

### Create User
This command allows you to create a new user in Zendesk by providing essential details such as name, email, phone number, role, and additional information. It is useful for onboarding new users, assigning roles, and tracking users within the system.

#### Name `string`

<dd>

This property defines the full name of the user being created. It helps identify the user in Zendesk and is used in communication.

Example: To dynamically set the name from an Input widget:

```js
{{UserNameInput.text}}
// Example: "Alice Johnson"
```

</dd>

#### Email `string`

<dd>

This property specifies the email address of the user. It is used for communication, notifications, and authentication.

Example: To dynamically set the email from an Input widget:

```js
{{UserEmailInput.text}}
// Example: "alice.johnson@example.com"
```

</dd>

#### Phone `string`

<dd>

This property holds the phone number of the user. It can be used for contact purposes if phone support is enabled.

Example: To dynamically set the phone number from an Input widget:

```js
{{UserPhoneInput.text}}
// Example: "+1-202-555-0173"
```

</dd>

#### Role `string`

<dd>

This property defines the user's role in Zendesk. It determines their access level and permissions. You can select from the following options:

- admin: Full access to manage settings, users, and tickets.
- agent: Can manage and respond to tickets but has limited administrative control.
- end user: Can submit and view their own tickets but cannot manage others.

Example: To dynamically assign a role from a Dropdown widget:

```js
{{UserRoleDropdown.selectedOptionValue}}
// Example: "agent"
```

</dd>

#### External ID `string`

<dd>

This property allows linking the user with an external system or reference ID from another application. It is useful for tracking users across multiple platforms.

Example: To dynamically set an external ID from an Input widget:

```js
{{ExternalIDInput.text}}
// Example: "CRM-987654"
```

</dd>

#### Details `string`

<dd>

This property provides additional details about the user, such as their department, location, or background.

Example: To dynamically set details from a Text Area widget:

```js
{{UserDetailsInput.text}}
// Example: "Customer from the enterprise plan, prefers email communication."
```

</dd>

#### Note `string`

<dd>

This property allows adding internal notes about the user that are only visible to agents and administrators. Notes help keep track of user-specific preferences or history.

Example: To dynamically set a note from a Text Area widget:

```js
{{UserNoteInput.text}}
// Example: "VIP customer with priority support."
```

</dd>


### Update User
This command allows you to update an existing user's details in Zendesk. It is useful for modifying user information such as their name, email, phone number, role, or additional details. Updating a user ensures that their profile remains accurate and up to date.

#### User ID `number`

<dd>

This property specifies the unique identifier of the user whose details are being updated. It ensures that the correct user's information is modified. The User ID can be retrieved from a table or a previous API response.

Example: To update the selected user from a Table widget:

```js
{{UsersTable.selectedRow.id}}
// **Example:** "2123456"
```

</dd>

#### Name `string`

<dd>

This property updates the full name of the user. Changing this value replaces the existing name associated with the user account.

*Example:* If an input field is used to enter the updated name:

```js
{{UserNameInput.text}}
// **Example:** "Alice Johnson"
```

</dd>

#### Email `string`

<dd>

This property updates the email address associated with a specific User ID. The email is used for communication and authentication purposes. Updating this field ensures that the user receives notifications and can log in with the correct credentials.

*Example:* If an input field is used to update the email:

```js
{{UserEmailInput.text}}
// **Example:** "alice.johnson@example.com"
```

</dd>

#### Phone `string`

<dd>

This property updates the contact number associated with the user. The phone number can be used for customer support interactions or multi-factor authentication.

*Example:* If an input field is used to update the phone number:

```js
{{UserPhoneInput.text}}
// **Example:** "+1-555-789-1234"
```

</dd>

#### Role `string`

<dd>

This property defines the user's role in the system. Roles determine access levels and permissions within Zendesk.

Available options:

- admin: Full access to manage settings and users
- agent: Can respond to tickets and assist users
- end-user: Can submit and view their own tickets

*Example:* If a dropdown is used to select the role:

```js
{{UserRoleDropdown.selectedOptionValue}}
// **Example:** "agent"
```

</dd>

#### External ID `string`

<dd>

This property updates the external system identifier associated with the user. External IDs are used when integrating Zendesk with other platforms or databases.

*Example:* If an input field is used to enter an external ID:

```js
{{UserExternalIDInput.text}}
// **Example:** "EXT-98765"
```

</dd>

#### Details `string`

<dd>

This property updates additional details about the user, such as job title, company, or location.

*Example:* If a text area is used to enter details:

```js
{{UserDetailsInput.text}}
// **Example:** "Senior Support Engineer at Acme Corp."
```

</dd>

#### Notes `string`

<dd>

This property updates internal notes about the user. Notes are visible to agents and administrators but not to the user.

*Example:* If a text area is used to enter a note:

```js
{{UserNotesInput.text}}
// **Example:** "VIP customer, prefers email communication."
```

</dd>

### Search Users

The Search Users command allows you to find users based on specific criteria such as name, email, role, or external ID. This command is useful for retrieving user details, managing accounts, and filtering users based on their attributes. The search query can match multiple users, returning a list of results.

#### Name `string`

<dd>

This property filters the search results by the user's full name. It allows partial or full matches, making it easier to locate users even if only part of their name is known.

*Example:* To search for a user by name from an input field:

```js
{{UserNameInput.text}}
// *Example:* "John Doe"
```

</dd>

#### Email `string`

<dd>

This property filters users by their email address. Searching by email is useful for locating a specific user when the exact email is known.

*Example:* If an input field is used to search by email:

```js
{{UserEmailInput.text}}
// *Example:* "john.doe@example.com"
```

</dd>

#### Role `string`

<dd>

This property filters users based on their assigned role in Zendesk. Roles determine a user's permissions and access within the system.

- admin: Full access to manage settings and users
- agent: Can respond to tickets and assist users
- end-user: Can submit and view their own tickets

*Example:* If a dropdown is used to select a role:

```js
{{UserRoleDropdown.selectedOptionValue}}
// *Example:* "agent"
```

</dd>

#### External ID `string`

<dd>

This property filters users by their external system identifier. External IDs are used for integrations with third-party systems or databases.

*Example:* If an input field is used to search by external ID:

```js
{{UserExternalIDInput.text}}
// *Example:* "EXT-12345"
```

</dd>

### Get Users by ID

The Get Users by ID command allows you to retrieve specific user details using their unique identifier (User ID). This command is useful when you want to fetch information about a user after creating or updating their account, or to view specific details for a given user.

#### User ID `number`

<dd>

This property specifies the unique identifier of the user whose details are being retrieved. The User ID is typically assigned when the user is created, and can be fetched from a table, list, or previous API response.

*Example:* To get the details of a user based on a selected row from a table:

```js
{{UserTable.selectedRow.id}}
// Example: "2123456"
```

</dd>