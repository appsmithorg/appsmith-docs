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

The name of the event to create. This is a required field and should be a clear and concise title for the event.

*example*:
```
Team Meeting
```

---

#### Start Time `string`

<dd>

The start time for the event, which can be in Unix timestamp or ISO 8601 date formats. If omitted, the event creation will fail as the start time is required.

*example*:
```
2023-07-21T10:00:00Z
```

---

#### End Time `string`

<dd>

The end time for the event. It accepts Unix timestamp or ISO 8601 date formats and defaults to one hour after the start time if left blank. If omitted, a default duration of one hour is assumed.

*example*:
```
2023-07-21T11:00:00Z
```

---

#### Calendar `string`

<dd>

Specifies which calendar the event will be added to. Use Connect Portal Workflow Settings to allow users to select a calendar. If omitted, the event is added to the user's primary calendar.

*example*:
```
primary
```

---

#### Attendees `array|string`

<dd>

A list of attendees to invite to the event. Accepts an array of email addresses or a string of email addresses separated by commas. If omitted, the event will be created without attendees.

*example*:
```
["example1@example.com", "example2@example.com"]
```

---

#### Event Location `string`

<dd>

The location where the event will take place. This field is optional and can be a physical address or a descriptive location.

*example*:
```
Conference Room B1
```

---

#### Event Description `string`

<dd>

A description of the event, providing additional details for the attendees. This field is optional and can include information such as agenda, preparation instructions, or other notes.

*example*:
```
Quarterly planning meeting to discuss project milestones and deliverables.
```

---

#### Event Id `string`

<dd>

An identifier from your application to associate with this event. This ID can be used to sync updates to this event later. It is optional but recommended for application-level tracking.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Include Meet Link `boolean`

<dd>

Determines whether to automatically create a Google Meet conference link for this event. This field is optional and defaults to false if omitted.

*example*:
```
true
```

---

### Calendar Update Event

Updates an existing event in the user's Google Calendar.

(Repeat the same property structure as "Calendar Create Event" for each property, excluding "Include Meet Link")

---

### Calendar List Events

Lists events from the user's Google Calendar within a specified time range.

(Repeat the same property structure as "Calendar Create Event" for "Calendar", "After", and "Before" properties)

---

### Calendar Get Event By Id

Retrieves a specific event by its ID from the user's Google Calendar.

(Repeat the same property structure as "Calendar Create Event" for "Event Id" and "Calendar" properties)

---

### Calendar Delete Event

Deletes an event from the user's Google Calendar.

(Repeat the same property structure as "Calendar Create Event" for "Event Id" and "Calendar" properties)

---

### Calendar Get Contacts

Retrieves contacts from the user's Google Calendar with pagination support.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through contacts. The format and options for pagination parameters should follow the API's documentation. This field is optional.

*example*:
```
pageToken=nextPageToken&maxResults=50
```

---

### Calendar Search Contacts

Searches for contacts in the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find contacts. This should be a string that matches the desired search criteria.

*example*:
```
John Doe
```

---

### Calendar List Directory People

Lists people from the user's directory with pagination support.

(Repeat the same property structure as "Calendar Get Contacts" for "Pagination Parameters")

---

### Calendar Search Directory People

Searches for people in the user's directory.

(Repeat the same property structure as "Calendar Search Contacts" for "Query" and "Pagination Parameters")

---

### Calendar List Other Contacts

Lists other contacts from the user's Google Calendar with pagination support.

(Repeat the same property structure as "Calendar Get Contacts" for "Pagination Parameters")

---

### Calendar Search Other Contacts

Searches for other contacts in the user's Google Calendar.

(Repeat the same property structure as "Calendar Search Contacts" for "Query")

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

The time zone to use for the response. This field is optional and defaults to UTC if omitted.

*example*:
```
America/New_York
```

---

#### Items `array`

<dd>

A list of calendar identifiers and/or group emails to query for availability. If omitted, the user's default calendar is used.

*example*:
```
["primary", "team-group@example.com"]
```

---

### Custom Action

Executes a custom action defined by the user.

#### No properties available.

<dd>

No description available.

---

# Style and Formatting Rules

- Output must be **strict Markdown** — no HTML except `<dd>` tags inside properties.
- Always use proper headings: `#`, `##`, `###`, `####`.
- Use `<dd>` tags only to wrap full property explanations.
- Always provide a fenced `example` block (` ``` `) for each property.
- Write **full instructional sentences** — no bullet points, no fragments.
- Maintain a professional, polished, educational tone.

---

# Special Handling Rules

- **ID fields**:  
  - Always explain what the ID represents.
  - Mention typical ID formats (e.g., `evt_1234abcd5678efgh`).
  - Give clear examples.

- **Date fields**:  
  - Mention the expected format (ISO 8601 or Unix timestamp).
  - Give an example with real-looking date.

- **Search/Filter/Pagination fields**:  
  - If field name implies search, filter, pagination — briefly explain with a usage hint.
  - Give two examples if possible.

---

# Missing Fields Handling

- If tooltip text is missing → Write: `No description available.`
- If placeholder/example text is missing → Write: `No example provided.`

---
