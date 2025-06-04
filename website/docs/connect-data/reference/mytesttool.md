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

#### Start Time `string`

<dd>

The start time for the event, accepted in Unix timestamp or ISO 8601 date formats. This field is required to schedule the event.

*example*:
```
2023-06-21T15:00:00Z
```

---

#### End Time `string`

<dd>

The end time for the event. If omitted, it defaults to one hour after the start time. Accepted in Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-06-21T16:00:00Z
```

---

#### Calendar `string`

<dd>

Identifies which calendar to add the event to. It uses Connect Portal Workflow Settings for selection and defaults to the user’s primary calendar if left blank.

*example*:
```
primary
```

---

#### Attendees `array|string`

<dd>

A list of attendees to invite to the event. Accepts an array of email addresses or email addresses separated by commas.

*example*:
```
["example1@email.com", "example2@email.com"]
```

---

#### Event Location `string`

<dd>

The location where the event will take place. This information will be visible to all attendees.

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
Quarterly team strategy meeting.
```

---

#### Event Id `string`

<dd>

A unique identifier from your application to associate with this event. This ID can be used to sync updates to this event later.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Include Meet Link `boolean`

<dd>

Determines whether to automatically create a Google Meet conference link for this event. If omitted, no Meet link will be included.

*example*:
```
true
```

---

### Calendar Update Event

Updates an existing event in the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to update. This ID is required to locate the event within the calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Event Name `string`

<dd>

The new name for the event. If provided, it will replace the current event title.

*example*:
```
Updated Team Meeting
```

---

#### Start Time `string`

<dd>

The new start time for the event, accepted in Unix timestamp or ISO 8601 date formats. If provided, it will replace the current start time.

*example*:
```
2023-06-21T15:30:00Z
```

---

#### End Time `string`

<dd>

The new end time for the event. If omitted, it defaults to one hour after the new start time. Accepted in Unix timestamp or ISO 8601 date formats.

*example*:
```
2023-06-21T16:30:00Z
```

---

#### Calendar `string`

<dd>

Identifies which calendar the event is associated with. It uses Connect Portal Workflow Settings for selection and defaults to the user’s primary calendar if left blank.

*example*:
```
primary
```

---

#### Attendees `array|string`

<dd>

The updated list of attendees for the event. Accepts an array of email addresses or email addresses separated by commas.

*example*:
```
["example3@email.com", "example4@email.com"]
```

---

#### Event Location `string`

<dd>

The updated location for the event. If provided, it will replace the current event location.

*example*:
```
Conference Room A
```

---

#### Event Description `string`

<dd>

The updated description of the event. If provided, it will replace the current event description.

*example*:
```
Annual team strategy meeting.
```

---

### Calendar List Events

Lists events from the user's Google Calendar within a specified time range.

#### Calendar `string`

<dd>

Identifies which calendar to list the events from. It uses Connect Portal Workflow Settings for selection and defaults to the user’s primary calendar if left blank.

*example*:
```
primary
```

---

#### After `string`

<dd>

Filters events that start after the provided date, which can be in Unix or ISO 8601 timestamp format.

*example*:
```
2023-06-21T00:00:00Z
```

---

#### Before `string`

<dd>

Filters events that end before the provided date, which can be in Unix or ISO 8601 timestamp format.

*example*:
```
2023-06-30T23:59:59Z
```

---

### Calendar Get Event By Id

Retrieves a specific event from the user's Google Calendar using the event's ID.

#### Event Id `string`

<dd>

The unique identifier of the event to retrieve. This ID is required to locate the event within the calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

Identifies which calendar the event is associated with. It uses Connect Portal Workflow Settings for selection and defaults to the user’s primary calendar if left blank.

*example*:
```
primary
```

---

### Calendar Delete Event

Deletes a specific event from the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the calendar event to be deleted. This ID is required to locate and remove the event.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

Identifies which calendar the event is associated with for deletion. It uses Connect Portal Workflow Settings for selection and defaults to the user’s primary calendar if left blank.

*example*:
```
primary
```

---

### Calendar Get Contacts

Retrieves a list of contacts from the user's Google Calendar.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through the list of contacts. The format and usage details are not provided.

*example*:
```
No example provided.
```

---

### Calendar Search Contacts

Searches for contacts within the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find contacts within the calendar. This could be a name, email address, or other identifiable information.

*example*:
```
John Doe
```

---

### Calendar List Directory People

Lists people from the user's directory in Google Calendar.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through the list of people in the directory. The format and usage details are not provided.

*example*:
```
No example provided.
```

---

### Calendar Search Directory People

Searches for people within the user's directory in Google Calendar.

#### Query `string`

<dd>

The search query used to find people within the directory. This could be a name, email address, or other identifiable information.

*example*:
```
Jane Smith
```

---

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through the search results in the directory. The format and usage details are not provided.

*example*:
```
No example provided.
```

---

### Calendar List Other Contacts

Lists other contacts associated with the user's Google Calendar.

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through the list of other contacts. The format and usage details are not provided.

*example*:
```
No example provided.
```

---

### Calendar Search Other Contacts

Searches for other contacts associated with the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find other contacts. This could be a name, email address, or other identifiable information.

*example*:
```
Doe Enterprises
```

---

### Calendar Get Availability

Retrieves the availability of calendars and/or groups within a specified time range.

#### Time Min `string`

<dd>

The start of the interval for which availability is requested, in ISO 8601 format.

*example*:
```
2023-06-21T09:00:00Z
```

---

#### Time Max `string`

<dd>

The end of the interval for which availability is requested, in ISO 8601 format.

*example*:
```
2023-06-21T17:00:00Z
```

---

#### Time Zone `string`

<dd>

The time zone used in the response. If omitted, the default is UTC.

*example*:
```
America/New_York
```

---

#### Items `array`

<dd>

A list of calendars and/or groups to query for availability. If omitted, the user's default calendar is used.

*example*:
```
["primary", "team@company.com"]
```

---

### Custom Action

Performs a custom action within the Google Calendar integration.

No properties available.

---
