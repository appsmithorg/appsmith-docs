# Google Calendar Integration

This page provides information on how to connect to Google Calendar. It enables users to perform actions such as creating events, managing contacts, checking availability.

## Connect Google Calendar

Explain how to authenticate and connect to this service securely.

## Query Google Calendar

The following section provides a **reference guide** describing available commands and their parameters.

---

### Calendar Create Event

Creates a new event in the user's Google Calendar.

#### Event Name `string`

<dd>

The name of the event to be created. This is a required field and will be displayed as the title of the event in the calendar.

*example*:
```
Team Meeting
```

---

#### Start Time `timestamp/string`

<dd>

Specifies the start time of the event. Accepts either Unix timestamp or ISO 8601 date formats. This field is required to schedule the event.

*example*:
```
2023-07-21T15:00:00Z
```

---

#### End Time `timestamp/string`

<dd>

Indicates the end time of the event. It accepts Unix timestamp or ISO 8601 date formats and defaults to one hour after the start time if left blank.

*example*:
```
2023-07-21T16:00:00Z
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar the event will be added to via Connect Portal Workflow Settings. If omitted, the event is added to the user’s primary calendar.

*example*:
```
Personal Calendar
```

---

#### Attendees `array/string`

<dd>

Accepts an array of email addresses or a string of email addresses separated by commas to specify the attendees of the event.

*example*:
```
["user1@example.com", "user2@example.com"]
```

---

#### Event Location `string`

<dd>

The location where the event will take place. This information is optional but can be helpful for attendees.

*example*:
```
Conference Room B
```

---

#### Event Description `string`

<dd>

A description of the event, providing additional details for the attendees. This field is optional.

*example*:
```
Discussing Q3 marketing strategies.
```

---

#### Event Id `string`

<dd>

An identifier from your application to associate with this event. This ID can be used to synchronize updates to this event later. It is optional but recommended for tracking purposes.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Include Meet Link `boolean`

<dd>

Determines whether to automatically create a Google Meet conference link for this event. It is optional and defaults to false if omitted.

*example*:
```
true
```

---

### Calendar Update Event

Updates an existing event in the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to update. This ID is required to specify which event should be modified.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Event Name `string`

<dd>

The new name for the event. This field is optional and will replace the current event title if provided.

*example*:
```
Updated Team Meeting
```

---

#### Start Time `timestamp/string`

<dd>

The new start time for the event, in Unix timestamp or ISO 8601 date formats. This field is optional and will update the event's start time if provided.

*example*:
```
2023-07-22T15:00:00Z
```

---

#### End Time `timestamp/string`

<dd>

The new end time for the event, in Unix timestamp or ISO 8601 date formats. This field is optional and will update the event's end time if provided.

*example*:
```
2023-07-22T16:00:00Z
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar the event will be updated in via Connect Portal Workflow Settings. If omitted, the event is updated in the user’s primary calendar.

*example*:
```
Work Calendar
```

---

#### Attendees `array/string`

<dd>

The new list of attendees' email addresses for the event. This field is optional and can be provided as an array or a comma-separated string.

*example*:
```
"user1@example.com,user3@example.com"
```

---

#### Event Location `string`

<dd>

The new location for the event. This field is optional and will update the event's location if provided.

*example*:
```
Main Auditorium
```

---

#### Event Description `string`

<dd>

The new description for the event. This field is optional and will update the event's description if provided.

*example*:
```
Discussing updated Q3 marketing strategies.
```

---

### Calendar List Events

Lists events from the user's Google Calendar within a specified time range.

#### Calendar `string`

<dd>

Allows users to select which calendar's events will be listed via Connect Portal Workflow Settings. If omitted, events from the user’s primary calendar are listed.

*example*:
```
Personal Calendar
```

---

#### After `timestamp/string`

<dd>

Filters events that start after the provided date. Accepts Unix or ISO 8601 timestamp formats. This field is optional and can be used to narrow down the list of events.

*example*:
```
2023-07-21T00:00:00Z
```

---

#### Before `timestamp/string`

<dd>

Filters events that end before the provided date. Accepts Unix or ISO 8601 timestamp formats. This field is optional and can be used to narrow down the list of events.

*example*:
```
2023-07-31T23:59:59Z
```

---

### Calendar Get Event By Id

Retrieves a specific event from the user's Google Calendar by its ID.

#### Event Id `string`

<dd>

The unique identifier of the event to retrieve. This ID is required to fetch the specific event.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar the event will be retrieved from via Connect Portal Workflow Settings. If omitted, the event is retrieved from the user’s primary calendar.

*example*:
```
Work Calendar
```

---

### Calendar Delete Event

Deletes a specific event from the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the calendar event to be deleted. This ID is required to specify which event should be removed.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar the event will be deleted from via Connect Portal Workflow Settings. If omitted, the event is deleted from the user’s primary calendar.

*example*:
```
Work Calendar
```

---

### Calendar Get Contacts

Retrieves the user's contacts with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the contacts list. This field is optional and can be used to navigate through large lists of contacts.

*example*:
```
page=2&limit=50
```

---

### Calendar Search Contacts

Searches for contacts in the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find contacts. This field is required to perform the search.

*example*:
```
John Doe
```

---

### Calendar List Directory People

Lists people from the user's directory with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the directory people list. This field is optional and can be used to navigate through large lists of people.

*example*:
```
page=1&limit=100
```

---

### Calendar Search Directory People

Searches for people in the user's directory.

#### Query `string`

<dd>

The search query used to find directory people. This field is required to perform the search.

*example*:
```
Jane Smith
```

---

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the search results. This field is optional and can be used to navigate through large lists of search results.

*example*:
```
offset=10&count=10
```

---

### Calendar List Other Contacts

Lists other contacts in the user's Google Calendar with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the other contacts list. This field is optional and can be used to navigate through large lists of contacts.

*example*:
```
startIndex=20&maxResults=10
```

---

### Calendar Search Other Contacts

Searches for other contacts in the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find other contacts. This field is required to perform the search.

*example*:
```
Project Team
```

---

### Calendar Get Availability

Retrieves the availability of calendars and/or groups within a specified time range.

#### Time Min `string`

<dd>

The start of the interval for which to retrieve availability. The date must be in ISO 8601 format. This field is required.

*example*:
```
2023-07-21T09:00:00Z
```

---

#### Time Max `string`

<dd>

The end of the interval for which to retrieve availability. The date must be in ISO 8601 format. This field is required.

*example*:
```
2023-07-21T17:00:00Z
```

---

#### Time Zone `string`

<dd>

The time zone used in the response. This field is optional, and if omitted, UTC is used by default.

*example*:
```
America/New_York
```

---

#### Items `array/string`

<dd>

A list of calendars and/or groups to query for availability. This field is optional and defaults to the user's default calendar if left blank.

*example*:
```
["user1@example.com", "team-group@example.com"]
```

---

### Custom Action

Performs a custom action defined by the user.

#### No properties available.

<dd>

No description available.

---
