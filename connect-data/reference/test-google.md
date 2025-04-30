```markdown
# Google Calendar Integration

This page provides information on how to connect to Google Calendar. It enables users to perform actions such as creating and updating events, managing contacts, and checking availability.

## Connect Google Calendar

To authenticate and connect to Google Calendar, you need to obtain the necessary OAuth credentials via your Google Cloud Console. These credentials allow your application to interact with the Google Calendar API securely.

## Query Google Calendar

The following section provides a **reference guide** describing available commands and their parameters.

---

### Calendar Create Event

Creates a new event in the user's calendar with the specified details.

#### Event Name `string`

<dd>

The name of the event to be created. This field is required and should succinctly describe the purpose of the event.

*example*:
```
Team Meeting
```

</dd>

#### Start Time `string`

<dd>

The starting time of the event. Accepts Unix timestamps or ISO8601 date formats. This is a required field to schedule the event accurately.

*example*:
```
2023-11-15T09:00:00Z
```

</dd>

#### End Time `string`

<dd>

The ending time of the event. If omitted, defaults to one hour after the start time. Accepts Unix timestamps or ISO8601 date formats.

*example*:
```
2023-11-15T10:00:00Z
```

</dd>

#### Calendar `string`

<dd>

Allows the selection of a specific calendar where the event will be added. It uses Connect Portal Workflow Settings. Defaults to the user's primary calendar if left blank.

*example*:
```
Work Calendar
```

</dd>

#### Attendees `array`

<dd>

List of email addresses of the attendees. Can be provided as an array or a comma-separated string.

*example*:
```
["attendee1@example.com", "attendee2@example.com"]
```

</dd>

#### Event Location `string`

<dd>

The location where the event will occur. Useful for physical meetings and gatherings.

*example*:
```
Conference Room A
```

</dd>

#### Event Description `string`

<dd>

A detailed description of the event. This helps provide context and additional information to attendees.

*example*:
```
Discuss quarterly performance and objectives.
```

</dd>

#### Event Id `string`

<dd>

A unique identifier for linking this event to your application. This ID is useful for syncing updates to the event. It can be any string format your application uses.

*example*:
```
evt_1234abcd5678efgh
```

</dd>

#### Include Meet Link `boolean`

<dd>

Indicates whether a Google Meet link should be automatically generated for the event. A boolean value where true generates a link.

*example*:
```
true
```

</dd>

---

### Calendar Update Event

Updates an existing event with new details.

#### Event Id `string`

<dd>

The ID of the event to update. This serves as the unique identifier and is required to locate the event to be updated. It follows the string format your application uses.

*example*:
```
evt_1234abcd5678ijkl
```

</dd>

#### Event Name `string`

<dd>

The updated name for the event. This field is optional and can be used to modify the description of the event.

*example*:
```
Updated Team Meeting
```

</dd>

#### Start Time, End Time, Calendar, Attendees, Event Location, Event Description

<dd>

Please refer to the "Calendar Create Event" section for descriptions of these properties, as they share the same functionalities.

</dd>

---

### Calendar List Events

Lists events from the specified calendar within the given time range.

#### Calendar `string`

<dd>

Selects which calendar's events to list. Defaults to the primary calendar if left blank.

*example*:
```
Work Calendar
```

</dd>

#### After `string`

<dd>

Filters events that start after the provided date. Accepts Unix timestamps or ISO8601 date formats.

*example*:
```
2023-11-01T00:00:00Z
```

</dd>

#### Before `string`

<dd>

Filters events that end before the provided date. Accepts Unix timestamps or ISO8601 date formats.

*example*:
```
2023-11-30T23:59:59Z
```

</dd>

---

### Calendar Get Event By Id

Retrieves details of a specific event using its ID.

#### Event Id `string`

<dd>

The ID of the event to retrieve. It uniquely identifies the event. Obtainable from your application when the event is created or listed.

*example*:
```
evt_5678ijkl1234abcd
```

</dd>

#### Calendar `string`

<dd>

Defines which calendar's event is to be retrieved. Defaults to the primary calendar if omitted.

*example*:
```
Work Calendar
```

</dd>

---

### Calendar Delete Event

Removes an event from the calendar.

#### Event Id `string`

<dd>

The identifier for the event you wish to delete. This ID should be available from your application context or event listing.

*example*:
```
evt_8765dcba4321hgfe
```

</dd>

#### Calendar `string`

<dd>

Specifies the calendar from which to delete the event. Defaults to the primary calendar if left unspecified.

*example*:
```
Work Calendar
```

</dd>

---

### Calendar Get Contacts

Retrieves a list of contacts.

#### Pagination Parameters `string`

<dd>

Controls the pagination of the retrieved contact list to manage large volumes of data.

*example*:
```
pageToken=token123&maxResults=50
```

</dd>

---

### Calendar Search Contacts

Searches for contacts based on a specified query.

#### Query `string`

<dd>

The term used to search for specific contacts.

*example*:
```
John Doe
```

</dd>

---

### Calendar List Directory People

Lists people in the directory.

#### Pagination Parameters `string`

<dd>

Manages pagination for longer lists of directory people.

*example*:
```
pageToken=token456&maxResults=50
```

</dd>

---

### Calendar Search Directory People

Searches directory people using specified criteria.

#### Query `string`

<dd>

The search term for finding specific directory people.

*example*:
```
Project Manager
```

</dd>

#### Pagination Parameters `string`

<dd>

Controls pagination to improve navigation through results.

*example*:
```
pageToken=token789&maxResults=50
```

</dd>

---

### Calendar List Other Contacts

Lists contacts not in the regular contacts list.

#### Pagination Parameters `string`

<dd>

Sets pagination to handle extensive lists of other, unlisted contacts.

*example*:
```
pageToken=token987&maxResults=50
```

</dd>

---

### Calendar Search Other Contacts

Searches through other contacts using specified parameters.

#### Query `string`

<dd>

The search keyword used in queries to find other, unlisted contacts.

*example*:
```
Freelancer
```

</dd>

---

### Calendar Get Availability

Retrieves the availability status within a specified time frame.

#### Time Min `string`

<dd>

The minimum start time for the availability check. It must be in ISO8601 date format.

*example*:
```
2023-11-20T09:00:00Z
```

</dd>

#### Time Max `string`

<dd>

The maximum end time for the availability check. This is also in ISO8601 date format.

*example*:
```
2023-11-20T17:00:00Z
```

</dd>

#### Time Zone `string`

<dd>

Specifies the time zone for the response. Default is UTC if not provided.

*example*:
```
America/New_York
```

</dd>

#### Items `array`

<dd>

Lists the calendars or groups to query for availability. Defaults to the user's default calendar.

*example*:
```
["primary", "team_calendar"]
```

</dd>

---

### Custom Action

Performs a bespoke action specified by the user.

#### CUSTOM_ACTION `string`

<dd>

Defines the custom action to be executed. Details depend on the user's specific requirements and system configuration.

*example*:
```
{"action_type": "custom", "parameters": {"key": "value"}}
```

</dd>

```
```
