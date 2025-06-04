# Outlook Integration

This page provides information on how to connect to Outlook. It enables users to perform actions such as creating events, managing contacts, checking availability.

## Connect Outlook

Explain how to authenticate and connect to this service securely.

## Query Outlook

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Event

Creates a new event in the user's Outlook calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar the event will be created in. The typical format for a User ID in Outlook might resemble a GUID or a unique alphanumeric string.

*example*:
```
b1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p
```

---

#### Subject `string`

<dd>

The Subject property defines the text of the event’s subject line. This field is essential for summarizing the event's purpose and is typically a short string of text.

*example*:
```
Team Meeting
```

---

#### Start Time `datetime`

<dd>

The Start Time property accepts dates in the YYYY-MM-DD[T]HH:MM:SS format, following the ISO 8601 standard. This field specifies when the event is set to begin and is required to schedule the event.

*example*:
```
2023-06-01T14:00:00
```

---

#### Time Zone `string`

<dd>

The Time Zone property allows users to select the timezone for the event. If left blank, it defaults to UTC. It's important to set this correctly to ensure the event aligns with the intended time zone of the participants.

*example*:
```
Eastern Standard Time
```

---

#### End Time `datetime`

<dd>

The End Time property accepts dates in the YYYY-MM-DD[T]HH:MM:SS format, following the ISO 8601 standard. If omitted, it defaults to one hour after the start time. This field defines when the event is scheduled to end.

*example*:
```
2023-06-01T15:00:00
```

---

#### Calendar Id `string`

<dd>

The Calendar Id property allows users to select which calendar the event will be added to. If left blank, it defaults to the user’s primary calendar. The Calendar ID typically resembles a GUID or a unique alphanumeric string.

*example*:
```
A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8
```

---

#### Description `string`

<dd>

The Description property contains the message associated with the event. This field allows for a more detailed explanation of the event and can include information such as the agenda or topics to be discussed.

*example*:
```
Quarterly financial review meeting to discuss performance metrics and goals for the next quarter.
```

---

#### Content Type `string`

<dd>

No description available.

*example*:
```
No example provided.
```

---

#### Location Name `string`

<dd>

The Location Name property specifies the display name of the event location. This could be a physical location or a descriptive name for a virtual meeting space.

*example*:
```
Conference Room A
```

---

#### Location Url `string`

<dd>

The Location URL property provides a URL representing the location. This is particularly useful for virtual meetings where a link to the conference platform is required.

*example*:
```
https://meetings.example.com/j/123456789
```

---

#### Attendees `array`

<dd>

The Attendees property accepts an array of email addresses or email addresses separated by commas. It specifies the participants who are to be invited to the event.

*example*:
```
["john.doe@example.com", "jane.smith@example.com"]
```

---

### Update Event

Updates an existing event in the user's Outlook calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar the event will be updated in. The typical format for a User ID in Outlook might resemble a GUID or a unique alphanumeric string.

*example*:
```
b1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p
```

---

#### Event Id `string`

<dd>

The Event ID property is the unique identifier of the event to update. This ID is essential to locate the specific event within the user's calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

(Repeat the same structure for the remaining properties as in the Create Event command)

---

### Get Event By Id

Retrieves details of a specific event by its ID.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar the event details will be retrieved from. The typical format for a User ID in Outlook might resemble a GUID or a unique alphanumeric string.

*example*:
```
b1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p
```

---

#### Event Id `string`

<dd>

The Event ID property is the unique identifier of the event to retrieve. This ID is essential to locate the specific event within the user's calendar.

*example*:
```
evt_1234abcd5678efgh
```

---

#### Calendar Id `string`

<dd>

The Calendar Id property allows users to select which calendar to retrieve the event from. If left blank, it defaults to the user’s primary calendar. The Calendar ID typically resembles a GUID or a unique alphanumeric string.

*example*:
```
A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8
```

---

### Get Events

Retrieves a list of events from the user's Outlook calendar.

(Repeat the same structure for the properties as in the previous commands, and add the following for the new property)

---

#### Events Filter Formula `string`

<dd>

The Events Filter Formula property allows users to apply a filter based on the Outlook filter formula, such as filtering by subject or date. This field helps in retrieving a specific subset of events.

*example*:
```
"subject eq 'Meeting'"
```

---

### Delete Event

Deletes an event from the user's Outlook calendar.

(Repeat the same structure for the properties as in the Get Event By Id command)

---

### Get Messages

Retrieves a list of messages from the user's Outlook mailbox.

(Repeat the same structure for the properties as in the previous commands, and add the following for the new properties)

---

#### Messages Filter Formula `string`

<dd>

The Messages Filter Formula property allows users to apply a filter based on the Outlook filter formula, such as filtering by subject or sender. This field helps in retrieving a specific subset of messages.

*example*:
```
"subject eq 'Meeting'"
```

---

#### Limit Results `integer`

<dd>

The Limit Results property specifies the maximum number of messages to return. If left blank, it defaults to 10, with a maximum allowable value of 1,000. This field helps manage the volume of returned messages.

*example*:
```
25
```

---

### Send Message

Sends a message from the user's Outlook account.

(Repeat the same structure for the properties as in the previous commands, and add the following for the new properties)

---

#### Message Body `string`

<dd>

The Message Body property contains the content of the message to be sent. This field is essential for conveying the message's information to the recipients.

*example*:
```
Dear Team, please find attached the report for this month.
```

---

#### Attachments `array`

<dd>

The Attachments property accepts either a single file object or a JSON array of file objects. This field allows users to include files with their message.

*example*:
```
[{"name": "report.pdf", "contentBytes": "base64encodedstring=="}]
```

---

#### To Recipients `array`

<dd>

The To Recipients property accepts an array of email addresses or email addresses separated by commas. It specifies the primary recipients of the message.

*example*:
```
["john.doe@example.com", "jane.smith@example.com"]
```

---

#### Cc Recipients `array`

<dd>

The CC Recipients property accepts an array of email addresses or email addresses separated by commas. It specifies the secondary recipients who will receive a copy of the message.

*example*:
```
["manager@example.com", "teamlead@example.com"]
```

---

#### Bcc Recipients `array`

<dd>

The BCC Recipients property accepts an array of email addresses or email addresses separated by commas. It specifies recipients who will receive the message without their addresses being visible to other recipients.

*example*:
```
["audit@example.com"]
```

---

#### Mail Folder `string`

<dd>

The Mail Folder property allows users to select which mail folder to send the message from. If left blank, it defaults to the user’s primary mail folder. The Mail Folder typically resembles a name or a unique identifier.

*example*:
```
Sent Items
```

---

### Custom Action

Performs a custom action within the Outlook integration.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
