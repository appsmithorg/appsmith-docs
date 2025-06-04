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
Board Meeting
```

---

#### Start Time `string`

<dd>

Specifies the start time of the event. Accepts either Unix timestamp or ISO 8601 date formats. This field is required to schedule the event.

*example*:
```
2023-05-10T09:00:00Z
```

---

#### End Time `string`

<dd>

Indicates the end time of the event. If left blank, it defaults to one hour after the start time. Accepts Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-05-10T10:00:00Z
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar to add the event to via Connect Portal Workflow Settings. If left blank, the event is added to the user’s primary calendar.

*example*:
```
Work Calendar
```

---

#### Attendees `array`

<dd>

Accepts an array of email addresses or a string of email addresses separated by commas to specify the attendees of the event.

*example*:
```
["jane.doe@example.com", "john.smith@example.com"]
```

---

#### Event Location `string`

<dd>

The location where the event will take place. This can be a physical address or a descriptive location name.

*example*:
```
Conference Room B
```

---

#### Event Description `string`

<dd>

A description of the event, providing additional details to attendees.

*example*:
```
Discuss quarterly sales targets and strategies.
```

---

#### Event Id `string`

<dd>

An identifier from your application to associate with this event. This ID can be used to sync updates to this event later. It is optional and should be unique.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Include Meet Link `boolean`

<dd>

Determines whether to automatically create a Google Meet conference link for the event. This is an optional field.

*example*:
```
true
```

---

### Calendar Update Event

Updates an existing event in the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to be updated. This is a required field to specify which event should be modified.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Event Name `string`

<dd>

The updated name of the event. If provided, it will replace the current event title.

*example*:
```
Annual General Meeting
```

---

#### Start Time `string`

<dd>

Specifies the updated start time of the event. Accepts either Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-06-15T14:00:00Z
```

---

#### End Time `string`

<dd>

Indicates the updated end time of the event. If left blank, it defaults to one hour after the start time. Accepts Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-06-15T15:00:00Z
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar to update the event in via Connect Portal Workflow Settings. If left blank, the event is updated in the user’s primary calendar.

*example*:
```
Personal Calendar
```

---

#### Attendees `array`

<dd>

Accepts an updated array of email addresses or a string of email addresses separated by commas to specify the attendees of the event.

*example*:
```
["jane.doe@example.com", "john.smith@example.com"]
```

---

#### Event Location `string`

<dd>

The updated location where the event will take place.

*example*:
```
Main Auditorium
```

---

#### Event Description `string`

<dd>

The updated description of the event, providing additional details to attendees.

*example*:
```
Review of yearly performance and future roadmap.
```

---

### Calendar List Events

Lists events from the user's Google Calendar within a specified time range.

#### Calendar `string`

<dd>

Allows users to select which calendar to list events from via Connect Portal Workflow Settings. If left blank, events are listed from the user’s primary calendar.

*example*:
```
Family Calendar
```

---

#### After `string`

<dd>

Filters events that start after the provided date. Accepts either Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-07-01T00:00:00Z
```

---

#### Before `string`

<dd>

Filters events that end before the provided date. Accepts either Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-07-31T23:59:59Z
```

---

### Calendar Get Event By Id

Retrieves a specific event from the user's Google Calendar using its unique identifier.

#### Event Id `string`

<dd>

The unique identifier of the event to be retrieved. This is a required field.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar to retrieve the event from via Connect Portal Workflow Settings. If left blank, the event is retrieved from the user’s primary calendar.

*example*:
```
Team Calendar
```

---

### Calendar Delete Event

Deletes a specific event from the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to be deleted. This is a required field.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

Allows users to select which calendar to delete the event from via Connect Portal Workflow Settings. If left blank, the event is deleted from the user’s primary calendar.

*example*:
```
Project Calendar
```

---

### Calendar Get Contacts

Retrieves contacts from the user's Google Calendar with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of contacts. This field is required to navigate through the list of contacts.

*example*:
```
pageToken=nextPageToken&maxResults=50
```

---

### Calendar Search Contacts

Searches for contacts within the user's Google Calendar.

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

Parameters to control the pagination of directory people. This field is required to navigate through the list of people.

*example*:
```
pageToken=nextPageToken&maxResults=50
```

---

### Calendar Search Directory People

Searches for people within the user's directory.

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

Parameters to control the pagination of the search results. This field is required to navigate through the list of search results.

*example*:
```
pageToken=nextPageToken&maxResults=50
```

---

### Calendar List Other Contacts

Lists other contacts from the user's Google Calendar with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of other contacts. This field is required to navigate through the list of contacts.

*example*:
```
pageToken=nextPageToken&maxResults=50
```

---

### Calendar Search Other Contacts

Searches for other contacts within the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find other contacts. This field is required to perform the search.

*example*:
```
Doe Enterprises
```

---

### Calendar Get Availability

Retrieves the availability of calendars and/or groups within a specified time range.

#### Time Min `string`

<dd>

The start of the interval for which to retrieve availability. Must be in ISO 8601 format.

*example*:
```
2023-08-10T09:00:00Z
```

---

#### Time Max `string`

<dd>

The end of the interval for which to retrieve availability. Must be in ISO 8601 format.

*example*:
```
2023-08-10T17:00:00Z
```

---

#### Time Zone `string`

<dd>

The time zone used in the response. If omitted, UTC is used by default. This field is optional.

*example*:
```
America/New_York
```

---

#### Items `array`

<dd>

A list of calendars and/or groups to query for availability. If left blank, the user's default calendar is used.

*example*:
```
["primary", "team@company.com"]
```

---

### Custom Action

Executes a custom action defined by the user.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
