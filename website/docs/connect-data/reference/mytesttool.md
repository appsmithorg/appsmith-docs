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

The name of the event to be created. This is a required field and should be a clear, descriptive title for the event.

*example*:
```
Team Meeting
```

---

#### Start Time `Unix timestamp or ISO8601`

<dd>

The starting time of the event. This property accepts either a Unix timestamp or a date in ISO 8601 format. It is required to schedule the event.

*example*:
```
2023-07-21T15:00:00Z
```

---

#### End Time `Unix timestamp or ISO8601`

<dd>

The ending time of the event. If left blank, it defaults to one hour after the start time. This property accepts either a Unix timestamp or a date in ISO 8601 format.

*example*:
```
2023-07-21T16:00:00Z
```

---

#### Calendar `string`

<dd>

The identifier of the calendar where the event will be added. If left blank, the event is added to the user's primary calendar. Use Connect Portal Workflow Settings to allow users to select which calendar to use.

*example*:
```
primary
```

---

#### Attendees `array of strings`

<dd>

A list of email addresses for the event's attendees. Accepts an array of email addresses or a single string with email addresses separated by commas.

*example*:
```
["user1@example.com", "user2@example.com"]
```

---

#### Event Location `string`

<dd>

The location where the event will take place. This field is optional and can be a physical address or a descriptive location name.

*example*:
```
Conference Room A
```

---

#### Event Description `string`

<dd>

A description of the event. This field is optional and can include details about the event's agenda, objectives, or any other relevant information.

*example*:
```
Quarterly team strategy meeting to discuss project milestones and objectives.
```

---

#### Event Id `string`

<dd>

A unique identifier from your application to associate with this event. This ID can be used to sync updates to this event later. It is optional but recommended for application integration.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Include Meet Link `boolean`

<dd>

Determines whether to automatically create a Google Meet conference link for this event. This field is optional.

*example*:
```
true
```

---

### Calendar Update Event

Updates an existing event in the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the event to update. This is a required field and should match the ID of an existing event in the calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

(Repeat the properties from Calendar Create Event here, excluding Event Id and Include Meet Link)

---

### Calendar List Events

Lists events from the user's Google Calendar within a specified time range.

#### Calendar `string`

<dd>

The identifier of the calendar to list events from. If left blank, events are listed from the user's primary calendar. Use Connect Portal Workflow Settings to allow users to select which calendar to use.

*example*:
```
primary
```

---

#### After `Unix timestamp or ISO8601`

<dd>

Filters events that start after the provided date. Accepts either a Unix timestamp or a date in ISO 8601 format. This field is optional.

*example*:
```
2023-07-21T00:00:00Z
```

---

#### Before `Unix timestamp or ISO8601`

<dd>

Filters events that end before the provided date. Accepts either a Unix timestamp or a date in ISO 8601 format. This field is optional.

*example*:
```
2023-07-28T23:59:59Z
```

---

### Calendar Get Event By Id

Retrieves a specific event from the user's Google Calendar using the event's ID.

#### Event Id `string`

<dd>

The unique identifier of the event to retrieve. This is a required field and should match the ID of an existing event in the calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

The identifier of the calendar from which to retrieve the event. If left blank, the event is retrieved from the user's primary calendar. Use Connect Portal Workflow Settings to allow users to select which calendar to use.

*example*:
```
primary
```

---

### Calendar Delete Event

Deletes a specific event from the user's Google Calendar.

#### Event Id `string`

<dd>

The unique identifier of the calendar event to be deleted. This is a required field and should match the ID of an existing event in the calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar `string`

<dd>

The identifier of the calendar from which to delete the event. If left blank, the event is deleted from the user's primary calendar. Use Connect Portal Workflow Settings to allow users to select which calendar to use.

*example*:
```
primary
```

---

### Calendar Get Contacts

Retrieves contacts from the user's Google Calendar.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the contacts list. This field is optional and can include parameters such as page size and page token.

*example*:
```
pageSize=50&pageToken=Cg0IABIAGAAgADAoAQ
```

---

### Calendar Search Contacts

Searches for contacts within the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find contacts. This field is required and can include names, email addresses, or other contact information.

*example*:
```
John Doe
```

---

### Calendar List Directory People

Lists people in the user's directory.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the directory people list. This field is optional and can include parameters such as page size and page token.

*example*:
```
pageSize=50&pageToken=Cg0IABIAGAAgADAoAQ
```

---

### Calendar Search Directory People

Searches for people within the user's directory.

#### Query `string`

<dd>

The search query used to find directory people. This field is required and can include names, email addresses, or other contact information.

*example*:
```
Jane Smith
```

---

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the search results. This field is optional and can include parameters such as page size and page token.

*example*:
```
pageSize=50&pageToken=Cg0IABIAGAAgADAoAQ
```

---

### Calendar List Other Contacts

Lists other contacts associated with the user's Google Calendar.

#### Pagination Parameters `string`

<dd>

Parameters to control the pagination of the other contacts list. This field is optional and can include parameters such as page size and page token.

*example*:
```
pageSize=50&pageToken=Cg0IABIAGAAgADAoAQ
```

---

### Calendar Search Other Contacts

Searches for other contacts associated with the user's Google Calendar.

#### Query `string`

<dd>

The search query used to find other contacts. This field is required and can include names, email addresses, or other contact information.

*example*:
```
Alex Johnson
```

---

### Calendar Get Availability

Retrieves the availability of calendars and/or groups within a specified time range.

#### Time Min `ISO8601`

<dd>

The start of the interval for which to retrieve availability. This field is required and must be in ISO 8601 format.

*example*:
```
2023-07-21T09:00:00Z
```

---

#### Time Max `ISO8601`

<dd>

The end of the interval for which to retrieve availability. This field is required and must be in ISO 8601 format.

*example*:
```
2023-07-21T17:00:00Z
```

---

#### Time Zone `string`

<dd>

The time zone to use for the response. This field is optional, and if left blank, UTC is used as the default.

*example*:
```
America/New_York
```

---

#### Items `array of strings`

<dd>

A list of calendar identifiers and/or group email addresses to query for availability. If left blank, the user's default calendar is queried.

*example*:
```
["primary", "team-group@example.com"]
```

---

### Custom Action

Performs a custom action within the integration.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
