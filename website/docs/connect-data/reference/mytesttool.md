# Google Calendar Integration

This page provides information on how to connect to Google Calendar. It enables users to perform actions such as creating events, managing contacts, checking availability.

## Connect Google Calendar

Explain how to authenticate and connect to this service securely.

## Query Google Calendar

The following section provides a **reference guide** describing available commands and their parameters.

---

### Calendar Create Event

Creates a new event in the user's calendar.

#### Event Name `string`

<dd>

The name of the event to be created. This is a required field and will be displayed as the title of the event in the calendar.

*example*:
```markdown
Team Meeting
```

---

#### Start Time `timestamp or ISO8601`

<dd>

The starting time of the event. This property accepts either Unix timestamp or ISO 8601 date formats. If omitted, the event will not be created as the start time is required.

*example*:
```markdown
2023-07-21T10:00:00Z
```

---

#### End Time `timestamp or ISO8601`

<dd>

The ending time of the event. Similar to the start time, this property accepts Unix timestamp or ISO 8601 date formats. If left blank, the event duration defaults to one hour after the start time.

*example*:
```markdown
2023-07-21T11:00:00Z
```

---

#### Calendar `string`

<dd>

The identifier of the calendar where the event will be added. Users can select which calendar to use through Connect Portal Workflow Settings. If left blank, the event is added to the user’s primary calendar by default.

*example*:
```markdown
primary
```

---

#### Attendees `array of strings or comma-separated string`

<dd>

A list of attendees to be invited to the event. This property accepts an array of email addresses or a single string of email addresses separated by commas.

*example*:
```markdown
["example1@example.com", "example2@example.com"]
```

---

#### Event Location `string`

<dd>

The location where the event will take place. This is an optional field and can be used to specify a physical location or an online meeting link.

*example*:
```markdown
Conference Room B
```

---

#### Event Description `string`

<dd>

A description of the event. This field can contain details about the event, such as an agenda or other important information.

*example*:
```markdown
Quarterly business review meeting.
```

---

#### Event Id `string`

<dd>

A unique identifier from your application to associate with this event. This ID can be used later to sync updates to this event. It is an optional field but recommended for application-level tracking.

*example*:
```markdown
evt_1234abcd5678efgh
```

---

#### Include Meet Link `boolean`

<dd>

Determines whether to automatically create a Google Meet conference link for the event. This is an optional field.

*example*:
```markdown
true
```

---

### Calendar Update Event

Updates an existing event in the user's calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to be updated. This ID is required to specify which event will be modified.

*example*:
```markdown
evt_1234abcd5678efgh
```

---

#### Event Name `string`

<dd>

The new name for the event. If provided, it will replace the existing event name.

*example*:
```markdown
Updated Team Meeting
```

---

#### Start Time `timestamp or ISO8601`

<dd>

The new start time for the event. Accepts Unix timestamp or ISO 8601 date formats. If provided, it will replace the existing start time.

*example*:
```markdown
2023-07-21T10:30:00Z
```

---

#### End Time `timestamp or ISO8601`

<dd>

The new end time for the event. If provided, it will replace the existing end time or default to one hour after the new start time if left blank.

*example*:
```markdown
2023-07-21T11:30:00Z
```

---

#### Calendar `string`

<dd>

The identifier of the calendar where the event is located. If provided, it allows specifying a different calendar than the one where the event currently resides.

*example*:
```markdown
secondary
```

---

#### Attendees `array of strings or comma-separated string`

<dd>

The new list of attendees for the event. If provided, it will replace the existing list of attendees.

*example*:
```markdown
["example3@example.com", "example4@example.com"]
```

---

#### Event Location `string`

<dd>

The new location for the event. If provided, it will replace the existing event location.

*example*:
```markdown
Main Auditorium
```

---

#### Event Description `string`

<dd>

The new description for the event. If provided, it will replace the existing event description.

*example*:
```markdown
Updated agenda for the quarterly business review meeting.
```

---

### Calendar List Events

Lists events from the user's calendar within a specified time range.

#### Calendar `string`

<dd>

The identifier of the calendar from which to list events. If left blank, events from the user’s primary calendar are listed.

*example*:
```markdown
primary
```

---

#### After `timestamp or ISO8601`

<dd>

Filters events to only include those that start after the provided date. Accepts Unix timestamp or ISO 8601 date formats.

*example*:
```markdown
2023-07-21T00:00:00Z
```

---

#### Before `timestamp or ISO8601`

<dd>

Filters events to only include those that end before the provided date. Accepts Unix timestamp or ISO 8601 date formats.

*example*:
```markdown
2023-07-31T23:59:59Z
```

---

### Calendar Get Event By Id

Retrieves a specific event by its ID from the user's calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to retrieve. This ID is required to specify which event to fetch.

*example*:
```markdown
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

The identifier of the calendar from which to retrieve the event. If left blank, the event is retrieved from the user’s primary calendar.

*example*:
```markdown
primary
```

---

### Calendar Delete Event

Deletes a specific event from the user's calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to be deleted. This ID is required to specify which event to remove.

*example*:
```markdown
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

The identifier of the calendar from which to delete the event. If left blank, the event is deleted from the user’s primary calendar.

*example*:
```markdown
primary
```

---

### Calendar Get Contacts

Retrieves a list of contacts with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through contacts. This field may include page tokens or other pagination-related data.

*example*:
```markdown
pageToken=nextPage123
```

---

### Calendar Search Contacts

Searches for contacts based on a query.

#### Query `string`

<dd>

The search query used to find contacts. This field is required to perform the search.

*example*:
```markdown
John Doe
```

---

### Calendar List Directory People

Lists people from the user's directory with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through directory people. This field may include page tokens or other pagination-related data.

*example*:
```markdown
pageToken=nextPage123
```

---

### Calendar Search Directory People

Searches for people in the user's directory based on a query.

#### Query `string`

<dd>

The search query used to find people in the directory. This field is required to perform the search.

*example*:
```markdown
Jane Smith
```

---

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through the search results in the directory. This field may include page tokens or other pagination-related data.

*example*:
```markdown
pageToken=nextPage456
```

---

### Calendar List Other Contacts

Lists other contacts with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through other contacts. This field may include page tokens or other pagination-related data.

*example*:
```markdown
pageToken=nextPage789
```

---

### Calendar Search Other Contacts

Searches for other contacts based on a query.

#### Query `string`

<dd>

The search query used to find other contacts. This field is required to perform the search.

*example*:
```markdown
Acme Corporation
```

---

### Calendar Get Availability

Retrieves the availability of calendars and/or groups within a specified time interval.

#### Time Min `ISO8601`

<dd>

The start of the interval for which to get availability. This field must be in ISO 8601 format and is required.

*example*:
```markdown
2023-07-21T09:00:00Z
```

---

#### Time Max `ISO8601`

<dd>

The end of the interval for which to get availability. This field must be in ISO 8601 format and is required.

*example*:
```markdown
2023-07-21T17:00:00Z
```

---

#### Time Zone `string`

<dd>

The time zone to use for the availability response. This field is optional, with UTC being the default if not specified.

*example*:
```markdown
America/New_York
```

---

#### Items `array of strings`

<dd>

A list of calendar identifiers and/or group emails to query for availability. If left blank, the user's default calendar is queried.

*example*:
```markdown
["primary", "team-group@example.com"]
```

---

### Custom Action

Executes a custom action within the integration.

#### No properties available.

<dd>

No description available.

*example*:
```markdown
No example provided.
```

---
