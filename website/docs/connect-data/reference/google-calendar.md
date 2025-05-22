# Google Calendar 

This page provides information on how to connect to Google Calendar. It enables users to perform actions such as creating events, updating events, listing events, managing contacts, searching directory people, and checking availability.

## Connect Google Calendar

To connect to Google Calendar, authenticate using OAuth 2.0. During authentication, select the Google account and grant the necessary permissions to access calendar events and contacts. Once connected, you can manage calendars, events, and contacts through the available commands.

## Query Google Calendar

The following section provides a reference guide describing available commands and their parameters for interacting with Google Calendar.

### Calendar Create Event

Creates a new event in a specified calendar. This command allows you to define event details such as name, time, location, and attendees, and returns the created event's details including its ID for future reference.

#### Event Name `string`
<dd>
This property specifies the name of the event. It is used as the event title visible in the calendar view and notifications.

The event name should be descriptive and concise to help users quickly identify the purpose of the meeting or event.

*Example*:
```
Quarterly Budget Review
```
</dd>

#### Start Time `string`
<dd>
The start time of the event. Accepts Unix timestamp or ISO 8601 date formats. This defines when the event begins.

To find the correct format:
* ISO 8601 format: `YYYY-MM-DDThh:mm:ss±hh:mm` (e.g., `2025-06-15T09:00:00-07:00`)
* Unix timestamp: Number of seconds since January 1, 1970 (e.g., `1750003200`)

*Example*:
```
2025-06-15T09:00:00-07:00
```
</dd>

#### End Time `string`
<dd>
The end time of the event. Accepts Unix timestamp or ISO 8601 date formats. If omitted, it defaults to one hour after the start time.

The end time must be after the start time, and for all-day events, should be set to the day after the start date.

*Example*:
```
2025-06-15T10:30:00-07:00
```
</dd>

#### Calendar `string`
<dd>
The calendar in which the event will be created. Use Connect Portal Workflow Settings to allow users to select the calendar. Defaults to the user's primary calendar if left blank.

To locate the calendar ID:
* In Google Calendar web interface, go to Settings > [Calendar name] > Integrate calendar
* Look for the "Calendar ID" field, which typically looks like an email address

*Example*:
```
primary
```

For a secondary calendar:
```
user@example.com
```
</dd>

#### Attendees `string`
<dd>
An array of email addresses or a comma-separated list of email addresses representing event attendees. These users will receive calendar invitations for the event.

*Example for multiple attendees*:
```
["john.doe@example.com", "jane.smith@example.com"]
```

*Example for comma-separated list*:
```
john.doe@example.com, jane.smith@example.com
```
</dd>

#### Event Location `string`
<dd>
The location where the event will take place. This can be a physical address, room name, or virtual meeting location.

For virtual meetings, you can include conference room details or simply indicate "Virtual Meeting" if a conference link will be included.

*Example for physical location*:
```
Conference Room A, Building 5, 123 Main Street
```

*Example for virtual meeting*:
```
Virtual Meeting
```
</dd>

#### Event Description `string`
<dd>
A description or notes about the event. This field supports plain text and can include agenda items, preparation instructions, or other relevant information for attendees.

*Example*:
```
Quarterly budget review for Q2 2025. Please bring your department's expense reports and projections for Q3. Agenda:
1. Q2 performance review
2. Budget adjustments
3. Q3 planning
```
</dd>

#### Event Id `string`
<dd>
An application-specific ID to associate with this event. This ID can be used to sync updates to the event later.

The Event ID is a unique identifier that you can define for your application's tracking purposes. It's different from the Google Calendar's internal event ID that will be returned after creation.

*Example*:
```
budget-review-q2-2025
```
</dd>

#### Include Meet Link `boolean`
<dd>
If set to true, automatically creates a Google Meet conference link for the event. This adds a video conferencing option that attendees can use to join the meeting.

*Example to include a Meet link*:
```
true
```

*Example to exclude a Meet link*:
```
false
```
</dd>

### Calendar Update Event

Updates an existing event identified by its Event ID. This command allows you to modify event details such as name, time, location, and attendees, and returns the updated event information.

#### Event Id `string`
<dd>
The ID of the event to update. This ID identifies the specific event in the calendar.

To find an event's ID:
* In the Google Calendar API response from a previous "Create Event" or "List Events" command
* In the event URL when viewing the event in Google Calendar web interface (the long alphanumeric string after "/eventedit/")

The event ID is a long string that looks like: `_6sp3gd9o6ko3ib9m6ko3aba168o32b9p6ss3eb9p6ko30c1g60s4ac1g60`

*Example*:
```
_6sp3gd9o6ko3ib9m6ko3aba168o32b9p6ss3eb9p6ko30c1g60s4ac1g60
```
</dd>

#### Event Name `string`
<dd>
The updated name of the event. This will replace the current event title in the calendar.

*Example*:
```
Quarterly Budget Review - Updated Agenda
```
</dd>

#### Start Time `string`
<dd>
The updated start time of the event. Accepts Unix timestamp or ISO 8601 date formats.

*Example*:
```
2025-06-16T10:00:00-07:00
```
</dd>

#### End Time `string`
<dd>
The updated end time of the event. Defaults to one hour after the start time if left blank.

*Example*:
```
2025-06-16T11:30:00-07:00
```
</dd>

#### Calendar `string`
<dd>
The calendar where the event exists or will be updated. Defaults to the user's primary calendar if left blank.

*Example*:
```
primary
```

For a secondary calendar:
```
finance@example.com
```
</dd>

#### Attendees `string`
<dd>
An array or comma-separated list of email addresses representing the updated attendees. This will replace the current list of attendees.

*Example*:
```
["john.doe@example.com", "jane.smith@example.com", "finance.team@example.com"]
```
</dd>

#### Event Location `string`
<dd>
The updated location of the event. This will replace the current event location.

*Example*:
```
Executive Conference Room, 4th Floor
```
</dd>

#### Event Description `string`
<dd>
The updated description of the event. This will replace the current event description.

*Example*:
```
Updated agenda for Q2 budget review. We'll now include preliminary Q3 forecasts. Please prepare accordingly.
```
</dd>

### Calendar List Events

Retrieves a list of events from a specified calendar within a date range. This command returns event details including IDs, names, times, locations, and attendees for all events matching the specified criteria.

#### Calendar `string`
<dd>
The calendar from which to list events. Defaults to the user's primary calendar if left blank.

To locate the calendar ID:
* In Google Calendar web interface, go to Settings > [Calendar name] > Integrate calendar
* Look for the "Calendar ID" field, which typically looks like an email address

*Example*:
```
primary
```

For a shared calendar:
```
team-calendar@group.calendar.google.com
```
</dd>

#### After `string`
<dd>
Filters events that start after this date. Accepts Unix timestamp or ISO 8601 date formats.

This parameter sets the beginning of the time range for which you want to retrieve events.

*Example for a specific date and time*:
```
2025-06-01T00:00:00Z
```

*Example for "now"*:
```
2025-05-22T18:30:00Z
```
</dd>

#### Before `string`
<dd>
Filters events that end before this date. Accepts Unix timestamp or ISO 8601 date formats.

This parameter sets the end of the time range for which you want to retrieve events.

*Example for a specific date and time*:
```
2025-07-01T00:00:00Z
```

*Example for one week from now*:
```
2025-05-29T18:30:00Z
```
</dd>

### Calendar Get Event By Id

Retrieves details of a specific event by its Event ID. This command returns comprehensive information about the event, including its name, time, location, description, attendees, and status.

#### Event Id `string`
<dd>
The ID of the event to retrieve.

To find an event's ID:
* In the Google Calendar API response from a previous "Create Event" or "List Events" command
* In the event URL when viewing the event in Google Calendar web interface (the long alphanumeric string after "/eventedit/")

*Example*:
```
_6sp3gd9o6ko3ib9m6ko3aba168o32b9p6ss3eb9p6ko30c1g60s4ac1g60
```
</dd>

#### Calendar `string`
<dd>
The calendar containing the event. Defaults to the user's primary calendar if left blank.

*Example*:
```
primary
```

For a secondary calendar:
```
project-team@group.calendar.google.com
```
</dd>

### Calendar Delete Event

Deletes a calendar event identified by its Event ID. This command permanently removes the event from the specified calendar and sends cancellation notices to attendees if applicable.

#### Event Id `string`
<dd>
The ID of the calendar event to delete.

To find an event's ID:
* In the Google Calendar API response from a previous "Create Event" or "List Events" command
* In the event URL when viewing the event in Google Calendar web interface (the long alphanumeric string after "/eventedit/")

*Example*:
```
_6sp3gd9o6ko3ib9m6ko3aba168o32b9p6ss3eb9p6ko30c1g60s4ac1g60
```
</dd>

#### Calendar `string`
<dd>
The calendar from which to delete the event. Defaults to the user's primary calendar if left blank.

*Example*:
```
primary
```

For a secondary calendar:
```
marketing@example.com
```
</dd>

### Calendar Get Contacts

Retrieves contacts associated with the calendar. This command returns contact information including names, email addresses, phone numbers, and other details for contacts accessible to the authenticated user.

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the contacts list. This allows fetching contacts in batches.

The pagination parameters typically include:
* `pageSize`: Number of contacts to return per page (integer)
* `pageToken`: Token for the page to retrieve (string, obtained from previous response)

*Example*:
```
{
  "pageSize": 50,
  "pageToken": "CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA"
}
```

For initial request without a page token:
```
{
  "pageSize": 50
}
```
</dd>

### Calendar Search Contacts

Searches contacts based on a query string. This command returns contact information for contacts matching the search criteria, including names, email addresses, phone numbers, and other details.

#### Query `string`
<dd>
The search query string used to find matching contacts.

The query can include names, email addresses, or other contact information. Partial matches are supported.

*Example to search by name*:
```
John Smith
```

*Example to search by email domain*:
```
@example.com
```

*Example to search by company*:
```
Acme Corporation
```
</dd>

### Calendar List Directory People

Lists people from the directory associated with the calendar. This command returns information about users in the organization's directory, including names, email addresses, departments, and other details.

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the directory people list.

The pagination parameters typically include:
* `pageSize`: Number of directory entries to return per page (integer)
* `pageToken`: Token for the page to retrieve (string, obtained from previous response)

*Example*:
```
{
  "pageSize": 100,
  "pageToken": "CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA"
}
```

For initial request without a page token:
```
{
  "pageSize": 100
}
```
</dd>

### Calendar Search Directory People

Searches people in the directory based on a query string. This command returns information about users in the organization's directory who match the search criteria, including names, email addresses, departments, and other details.

#### Query `string`
<dd>
The search query string to find matching people in the directory.

The query can include names, email addresses, departments, or other directory information. Partial matches are supported.

*Example to search by name*:
```
Sarah Johnson
```

*Example to search by department*:
```
Engineering
```

*Example to search by location*:
```
New York Office
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the search results.

The pagination parameters typically include:
* `pageSize`: Number of search results to return per page (integer)
* `pageToken`: Token for the page to retrieve (string, obtained from previous response)

*Example*:
```
{
  "pageSize": 25,
  "pageToken": "CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA"
}
```

For initial request without a page token:
```
{
  "pageSize": 25
}
```
</dd>

### Calendar List Other Contacts

Lists other contacts associated with the calendar. This command returns information about contacts that are not in the user's primary contacts or the organization's directory, but have been interacted with previously.

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the contacts list.

The pagination parameters typically include:
* `pageSize`: Number of contacts to return per page (integer)
* `pageToken`: Token for the page to retrieve (string, obtained from previous response)

*Example*:
```
{
  "pageSize": 50,
  "pageToken": "CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA"
}
```

For initial request without a page token:
```
{
  "pageSize": 50
}
```
</dd>

### Calendar Search Other Contacts

Searches other contacts based on a query string. This command returns information about contacts that are not in the user's primary contacts or the organization's directory, but match the search criteria.

#### Query `string`
<dd>
The search query string used to find matching other contacts.

The query can include names, email addresses, or other contact information. Partial matches are supported.

*Example to search by name*:
```
Alex External
```

*Example to search by email domain*:
```
@partner-company.com
```

*Example to search by recent interaction*:
```
recent meeting
```
</dd>

### Calendar Get Availability

Retrieves availability information for calendars or groups within a specified time interval. This command returns free/busy information for the specified calendars, helping to identify available time slots for scheduling meetings.

#### Time Min `string`
<dd>
The start of the availability interval in ISO 8601 format.

This parameter defines the beginning of the time range for which you want to check availability.

*Example*:
```
2025-06-01T09:00:00-07:00
```
</dd>

#### Time Max `string`
<dd>
The end of the availability interval in ISO 8601 format.

This parameter defines the end of the time range for which you want to check availability.

*Example*:
```
2025-06-01T17:00:00-07:00
```
</dd>

#### Time Zone `string`
<dd>
The time zone used in the response. This is optional and defaults to UTC if omitted.

The time zone should be specified using IANA Time Zone Database names.

*Example*:
```
America/Los_Angeles
```

*Example*:
```
Europe/London
```
</dd>

#### Items `array`
<dd>
A list of calendars and/or groups to query for availability. Defaults to the user's default calendar if omitted.

Each item in the array should be an object with an `id` property specifying the calendar ID.

*Example for checking availability of multiple calendars*:
```
[
  {"id": "primary"},
  {"id": "team@example.com"},
  {"id": "conference-room-a@resource.calendar.google.com"}
]
```

*Example for checking availability of a single calendar*:
```
[{"id": "primary"}]
```
</dd>

### Custom Action

Executes a custom action against the Google Calendar API. This command allows for advanced operations not covered by the standard commands.

<dd>
This command enables you to make custom API calls to Google Calendar endpoints not covered by the standard commands. You can specify the endpoint, method, and parameters to access additional Google Calendar functionality.

When using Custom Action, you'll need to refer to the [Google Calendar API documentation](https://developers.google.com/calendar/api/v3/reference) for specific endpoint details and required parameters.

*Example for a custom query to get calendar colors*:
```
GET /colors
```

*Example for a custom query to clear a calendar*:
```
POST /calendars/{calendarId}/clear
```

Custom actions require appropriate authentication and permissions for the endpoints being accessed.
</dd>
