# Outlook

This page provides information on how to connect to Outlook. This integration enables you to manage calendars and events, such as creating and updating calendar events in a user's Outlook account.

## Connect Outlook

To connect to Outlook, you must authenticate using an OAuth2 connection. After initiating the connection, sign in with your Microsoft account and authorize access to calendar-related permissions. Once connected, you can interact with calendars and events using the available commands. Ensure you select the appropriate user ID and calendar ID for accessing or modifying events.

## Query Outlook

The following section is a reference guide that provides a description of the available commands with their parameters to create Outlook queries.

### Create Event

Creates a new calendar event in Outlook for a specified user. You can define details such as the subject, timing, attendees, and event location.

#### user id `string`

<dd>

Unique identifier of the Outlook user whose calendar the event is created in.

To find the User ID, use Microsoft Graph API’s /users endpoint, or refer to the authenticated user context. In organization accounts, administrators can retrieve this from Azure Active Directory.

</dd>

#### Subject `string`

<dd>

Title or summary of the calendar event. Appears as the event label on the calendar.

</dd>

#### Start Time `string`

<dd>

Start time of the event in ISO 8601 format (e.g., 2025-04-15T10:00:00). Must be used along with Time Zone.

</dd>

#### Time Zone `string`

<dd>

Time zone for both Start Time and End Time. Use standard names like UTC, Pacific Standard Time, Eastern Standard Time, etc.

</dd>

#### End Time `string`

<dd>

End time of the event in ISO 8601 format. Must be after the Start Time and aligned with the same Time Zone.

</dd>

#### Calendar ID `string`

<dd>

ID of the calendar where the event is added.
To retrieve Calendar ID, use the Microsoft Graph API endpoint `/users/{user-id}/calendars`. The default calendar typically has the ID "calendar".

</dd>

#### Description `string`

<dd>

Optional body text describing the event's agenda, context, or any additional notes.

</dd>

#### Content Type `string`

<dd>

Format of the event description. Use "text" for plain text or "html" for rich content.

</dd>

#### Location Name `string`

<dd>

Name of the event's physical or virtual location — such as a conference room or meeting space.

</dd>

#### Location URL `string`

<dd>

Optional URL for a virtual meeting or reference link (e.g., Teams, Zoom, Google Meet).

</dd>

#### Attendees `array`

<dd>

List of attendees for the event. Each attendee should include an email and optionally their role (e.g., required, optional).

</dd>

### Update Event

Updates an existing calendar event in Outlook. Use this to modify subject, timing, location, attendees, and other details.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar event is being updated. Refer to Microsoft Graph API or user context to retrieve this value.

</dd>

#### Event ID `string`

<dd>

Unique identifier of the event to be updated.
Use Microsoft Graph API’s `/users/{user-id}/calendars/{calendar-id}/events` to list events and find their Event ID.

</dd>

#### Subject `string`

<dd>

Updated event title or summary.

</dd>

#### Start Time `string`

<dd>

Updated start time in ISO 8601 format.

</dd>

#### Time Zone `string`

<dd>

Updated time zone for the event time fields.

</dd>

#### End Time `string`

<dd>

Updated end time in ISO 8601 format.

</dd>

#### Calendar ID `string`

<dd>

ID of the calendar containing the event.

</dd>


#### Description `string`

<dd>

Updated event description or body content.

</dd>

#### Content Type `string`

<dd>

Updated format of the description — either "text" or "html".

</dd>

#### Location Name `string`

<dd>

Updated location name for the event.

</dd>

#### Location URL `string`

<dd>

Updated URL for virtual meeting or location reference.

</dd>

#### Attendees `array`

<dd>

Updated list of attendees. Replaces the previous attendee list entirely. Include email and role for each attendee.

</dd>

### Get Event by ID

Retrieves detailed information for a specific calendar event in Outlook using its unique identifier. Use this to fetch full event data including subject, time, attendees, and location.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar contains the event.
To retrieve the User ID, use the Microsoft Graph API endpoint `/users`, or access the authenticated user context. In enterprise environments, administrators can locate this in Azure Active Directory.

</dd>

#### Event ID `string`

<dd>

Unique identifier of the event to retrieve.
To find the Event ID, use the Microsoft Graph API endpoint `/users/{user-id}/calendars/{calendar-id}/events`. Each event object returned includes an id field representing the Event ID.

</dd>

#### Calendar ID `string`

<dd>

Identifier of the calendar that contains the event.
Use Microsoft Graph API’s `/users/{user-id}/calendars` endpoint to list all calendars and locate the appropriate Calendar ID. The default calendar usually has the static ID "calendar".

</dd>

### Delete Event

Deletes a specific event from a user's Outlook calendar. Use this to permanently remove an event based on its identifiers.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar contains the event.
Retrieve the User ID using the Microsoft Graph API `endpoint /users`, or from the authenticated user context. In organizational accounts, administrators can access this via Azure Active Directory.

</dd>

#### Event ID `string`

<dd>

Unique identifier of the event to be deleted.
To locate the Event ID, use the Microsoft Graph API endpoint `/users/{user-id}/calendars/{calendar-id}/events`. The id field in each event object corresponds to the Event ID.

</dd>

#### Calendar ID `string`

<dd>

Identifier of the calendar from which the event should be deleted.
Use the Microsoft Graph API `/users/{user-id}/calendars` to list all calendars associated with the user. The default calendar typically uses the ID "calendar".

</dd>

### Get Messages

Retrieves email messages from a specific folder in a user's Outlook mailbox. Use this command to fetch messages with optional filters and result limits.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose mailbox is being accessed.
To retrieve the User ID, use Microsoft Graph API's `/users` endpoint. For personal accounts, the authenticated context typically provides the ID automatically. In enterprise accounts, administrators can obtain it from Azure Active Directory.

Example commands to get User ID:

- Use: `GET /users` (for organization-wide listing)

- Use: `GET /me` (for authenticated user)

</dd>

#### Mail Folder `string`

<dd>

The folder within the user's mailbox from which to retrieve messages. Common folders include "Inbox", "SentItems", and "Archive".
Use the Microsoft Graph API endpoint `/users/{user-id}/mailFolders` to list available folders and get their IDs.

</dd>

#### Messages Filter Formula `string`

<dd>

Optional Data filter to narrow down the messages based on specific conditions. Use standard Microsoft Graph filtering syntax.

*Example 1:* If you want to fetch messages from a specific sender:

```plaintext
from/emailAddress/address eq 'alice@example.com'
```

*Example 2:* If you want to get messages received after a specific date:


```plaintext
receivedDateTime ge 2025-04-01T00:00:00Z
```

*Example 3:* If you want to find unread messages with attachments:

```plaintext
isRead eq false and hasAttachments eq true
```

Filters can be combined using logical operators such as and, or, etc.

</dd>

#### Limit Results `number`

<dd>

Specifies the maximum number of messages to return. This helps manage large datasets by retrieving only a subset of records.

*Example 1:* To fetch the 10 most recent messages in the inbox:
Set Limit Results to 10.

*Example 2:* To display a quick preview or summary (e.g., first 5 emails for a dashboard):
Set Limit Results to 5.

This value controls the top parameter in the Graph API request:

```plaintext
?$top=5
```

</dd>


### Send Message
Sends an email message from a specified Outlook user. You can include recipients, content formatting, attachments, and optionally specify a folder to save the sent message.

#### User ID `string`

<dd>

Unique identifier of the Outlook user from whose account the email is sent.
Retrieve the User ID using Microsoft Graph API’s /users endpoint, or refer to the current authenticated session via /me. For organizational accounts, the ID can also be accessed via Azure Active Directory.

</dd>

#### Subject `string`

<dd>
The subject line of the email message. Appears as the main title in the recipient’s inbox.

</dd>

#### Message Body `string`

<dd>

The main content of the email message. Use plain text or HTML depending on the Content Type.

</dd>

#### Content Type `string`

<dd>

Specifies the format of the Message Body. Accepted values are:

- text – for plain text content

- html – for rich text or HTML-formatted emails

</dd>

#### Attachments `array`

<dd>

Optional list of attachments to include with the message. Each attachment object should contain a name, content type, and base64-encoded content string.
Use this to attach documents, images, or files as needed.

</dd>

#### To Recipients `array`

<dd>

List of primary recipients for the email. Each item should include an email address.
These addresses appear in the To field of the message.

</dd>

#### CC Recipients `array`

<dd>

List of recipients to be copied on the email. These addresses appear in the CC field.
Each recipient must be specified with a valid email address.

</dd>

#### BCC Recipients `array`

<dd>

List of recipients to be blind copied on the email. These addresses are hidden from other recipients and appear in the BCC field.

</dd>

#### Mail Folder `string`

<dd>

Optional folder to store the sent message.
Use Microsoft Graph API’s `/users/{user-id}/mailFolders` to list available folders. To save the sent message in a custom or predefined folder (e.g., "SentItems"), provide the folder ID here. If not specified, the message is saved in the default sent folder.

</dd>


### Custom Action

Performs a custom API call to Microsoft Graph, allowing access to Outlook features beyond predefined commands. Use this to interact with endpoints that are not available as built-in commands.

You can define your own request by specifying the HTTP method, endpoint URL, headers, and body parameters. This is useful for advanced use cases or newer Microsoft Graph endpoints that are not yet integrated into the standard command set.

<dd>

Example 1: Mark a Message as Read
 You want to mark a specific email message as read after processing it in your app.

Endpoint:

```http
PATCH /users/{user-id}/messages/{message-id}
```

Headers:

```json
{
  "Content-Type": "application/json"
}
```

Body:

```json
{
  "isRead": true
}
```

*Example 2:* Move a Message to a Different Folder
 Automatically move an incoming email from the inbox to a custom folder after tagging or filtering it.

Endpoint:

```http
POST /users/{user-id}/messages/{message-id}/move
```

Headers:

```json
{
  "Content-Type": "application/json"
}
```

Body:

```json
{
  "destinationId": "AAMkAGVmMDEz..." // The folder ID of the target destination
}
```

*Example 3:* Get Calendar View (Events in a Time Range)

You want to fetch all events for a user within a specific time window — useful for building scheduling dashboards or calendar overviews.

Endpoint:

```http
GET /users/{user-id}/calendarView?startDateTime=2025-04-01T00:00:00Z&endDateTime=2025-04-30T23:59:59Z
```

This returns all events between the provided dates. You can also apply filters or select specific fields using query parameters.

Example 4: Get User’s Mail Tips
 Before sending an email, you want to check if recipients are out of office or if there are automatic replies configured.

Endpoint:

```http
POST /users/{user-id}/getMailTips
```

Body:

```json
{
  "EmailAddresses": ["user@example.com"],
  "MailTipsOptions": "automaticReplies"
}
```

</dd>