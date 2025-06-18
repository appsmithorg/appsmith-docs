# Outlook

This page provides information on how to connect to Outlook. This integration enables you to manage calendars and events, such as creating and updating calendar events in a user's Outlook account.

## Connect Outlook

To connect to Outlook, you must authenticate using an OAuth2 connection. After initiating the connection, sign in with your Microsoft account and authorize access to calendar-related permissions. Ensure you select the appropriate user ID and calendar ID for accessing or modifying events.

## Query Outlook

The following section is a reference guide that provides a description of the available commands with their parameters to create Outlook queries.

### Create Event

Creates a new calendar event in Outlook for a specified user. You can define details such as the subject, timing, attendees, and event location.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar the event is created in.

This should be an email address associated with a Microsoft account, such as `user@outlook.com` or a work email from Microsoft 365 (e.g., `user@company.com`).

Gmail or other non-Microsoft domains are not supported unless linked to a Microsoft identity.

</dd>

#### Subject `string`

<dd>

Title or summary of the calendar event. This appears prominently on the user’s calendar view, mobile app, and any synced notifications.

</dd>

#### Start Time `string`

<dd>


Defines when the event begins. This must follow ISO 8601 format, such as:

```js
2025-04-15T10:00:00
```

You can also dynamically generate this from a Date widget:

```js
{{ startDatePicker.selectedDate }}
```

</dd>

#### Time Zone `string`

<dd>

The time zone in which the Start and End times are interpreted. 

Providing the correct time zone ensures events display accurately for attendees across regions.
</dd>

#### End Time `string`

<dd>

End time of the event in ISO 8601 format. Must be after the Start Time and aligned with the same Time Zone.

</dd>

#### Calendar ID `string`

<dd>

The unique identifier of the calendar where the event will be created.

For most users, the default calendar has an ID of `calendar`. However, users may have multiple calendars, including shared calendars, delegated calendars, or additional personal calendars they’ve created.

You can use the Custom Action command to make a request to the Microsoft Graph endpoint:
`/users/{user-id}/calendars`

This allows you to fetch all calendar IDs programmatically and use them dynamically in your app.

</dd>

#### Description `string`

<dd>

Optional body text describing the event's agenda, context, or any additional notes.

</dd>

#### Content Type `string`

<dd>

Specifies the formatting of the Description field. Valid values are:

- `text`: plain text only

- `html`: allows rich content formatting like bold text, lists, or hyperlinks

*HTML Example:*

```html
<p><strong>Agenda:</strong></p>
<ul>
  <li>Review Q2 metrics</li>
  <li>Discuss campaign rollout</li>
  <li>Assign next steps</li>
</ul>
```

</dd>

#### Location Name `string`

<dd>

Text label for the meeting location. This can be a room, office, or virtual session name.



</dd>

#### Location URL `string`

<dd>

Link to the virtual meeting location (e.g., Microsoft Teams, Zoom).

*Example:*

```js
https://teams.microsoft.com/l/meetup-join/19%3ameeting... 
```

</dd>

#### Attendees `array`

<dd>

A list of participants to invite. Each attendee should be an object with at least `emailAddress`. You can also include type (e.g., required, optional).

*Example structure:*

```js
[
  { "emailAddress": { "address": "john@example.com" }, "type": "required" },
  { "emailAddress": { "address": "jane@example.com" }, "type": "optional" }
]
```

Use dynamic forms or repeaters in Appsmith to collect attendee emails and roles.

</dd>

### Update Event

Updates an existing calendar event in Outlook. Use this to modify subject, timing, location, attendees, and other details.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar the event is created in.

This should be an email address associated with a Microsoft account, such as `user@outlook.com` or a work email from Microsoft 365 (e.g., `user@company.com`).

Gmail or other non-Microsoft domains are not supported unless linked to a Microsoft identity.

</dd>

#### Event ID `string`

<dd>

The unique identifier of the calendar event to be updated or deleted.

To retrieve an Event ID without using external APIs, you can:

- Use the Custom Action command to call
`/users/{user-id}/calendars/{calendar-id}/events`

  This will return a list of events with their associated id values. You can extract the Event ID from this response and use it in update or delete operations.

- Alternatively, if you are viewing an event in Outlook Web, the Event ID appears in the URL when you open the event details.

<dd>

```js
https://outlook.office.com/calendar/item/AAkALgAAAAAAHYQDEap...
```
</dd>


</dd>

#### Subject `string`

<dd>

Updated event title or summary.

</dd>

#### Start Time `string`

<dd>

Defines when the event begins. This must follow ISO 8601 format, such as:

```js
2025-04-15T10:00:00
```

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

ID of the calendar where the event will be created. Most users have a default calendar with ID calendar, but users may have additional shared or personal calendars.

</dd>


#### Description `string`

<dd>

Updated event description or body content.

</dd>

#### Content Type `string`

<dd>

Specifies the formatting of the Description field. Valid values are:

- `text`: plain text only

- `html`: allows rich content formatting like bold text, lists, or hyperlinks

</dd>

#### Location Name `string`

<dd>

Updated location name for the event.

</dd>

#### Location URL `string`

<dd>

Link to the virtual meeting location (e.g., Microsoft Teams, Zoom).

</dd>

#### Attendees `array`

<dd>

Updated list of attendees. Replaces the previous attendee list entirely. Include email and role for each attendee.

</dd>

### Get Event by ID

Retrieves detailed information for a specific calendar event in Outlook using its unique identifier. Use this to fetch full event data including subject, time, attendees, and location.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar the event is created in.
This should be an email address associated with a Microsoft account, such as user@outlook.com or a work email from Microsoft 365 (e.g.,` user@company.com`).

Gmail or other non-Microsoft domains are not supported unless linked to a Microsoft identity.

</dd>

#### Event ID `string`

<dd>

The unique identifier of the calendar event to be updated or deleted.

To retrieve an Event ID without using external APIs, you can:

- Use the Custom Action command to call
`/users/{user-id}/calendars/{calendar-id}/events`

  This will return a list of events with their associated id values. You can extract the Event ID from this response and use it in update or delete operations.

- Alternatively, if you are viewing an event in Outlook Web, the Event ID appears in the URL when you open the event details.

<dd>

```js
https://outlook.office.com/calendar/item/AAkALgAAAAAAHYQDEap...
```
</dd>

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

Unique identifier of the Outlook user whose calendar the event is created in.

This should be an email address associated with a Microsoft account, such as `user@outlook.com` or a work email from Microsoft 365 (e.g., `user@company.com`).

Gmail or other non-Microsoft domains are not supported unless linked to a Microsoft identity.


</dd>

#### Event ID `string`

<dd>

The unique identifier of the calendar event to be updated or deleted.

To retrieve an Event ID without using external APIs, you can:

- Use the Custom Action command to call
`/users/{user-id}/calendars/{calendar-id}/events`

  This will return a list of events with their associated id values. You can extract the Event ID from this response and use it in update or delete operations.

- Alternatively, if you are viewing an event in Outlook Web, the Event ID appears in the URL when you open the event details.

<dd>

```js
https://outlook.office.com/calendar/item/AAkALgAAAAAAHYQDEap...
```
</dd>

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

Unique identifier of the Outlook user whose calendar the event is created in.

This should be an email address associated with a Microsoft account, such as `user@outlook.com` or a work email from Microsoft 365 (e.g., `user@company.com`).

Gmail or other non-Microsoft domains are not supported unless linked to a Microsoft identity.

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

*Example:* To fetch the 10 most recent messages in the inbox:
Set Limit Results to 10.



</dd>


### Send Message
Sends an email message from a specified Outlook user. You can include recipients, content formatting, attachments, and optionally specify a folder to save the sent message.

#### User ID `string`

<dd>

Unique identifier of the Outlook user whose calendar the event is created in.

This should be an email address associated with a Microsoft account, such as `user@outlook.com` or a work email from Microsoft 365 (e.g., `user@company.com`).

Gmail or other non-Microsoft domains are not supported unless linked to a Microsoft identity.


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

- `text` – for plain text content

- `html` – for rich text or HTML-formatted emails

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


</dd>