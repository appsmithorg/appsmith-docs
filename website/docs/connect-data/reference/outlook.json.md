# Outlook Integration

This page provides information on how to connect to Outlook. It enables users to perform actions such as creating events, managing contacts, checking availability.

## Connect Outlook

Explain how to authenticate and connect to this service securely.

## Query Outlook

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Event

Creates a new event in the user's calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar the event will be created in. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Subject `string`

<dd>

The text of the event’s subject line. This field is used to set the title of the event and is typically required to give the event a name.

*example*:
```
Team Meeting
```

---

#### Start Time `string`

<dd>

Accepts dates in YYYY-MM-DD[T]HH:MM:SS date format, representing the start time of the event. This field is crucial for scheduling the event and must adhere to the specified format.

*example*:
```
2023-06-01T09:00:00
```

---

#### Time Zone `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select which timezone the event will be added to. If this property is omitted, the event will default to the UTC timezone.

*example*:
```
Eastern Standard Time
```

---

#### End Time `string`

<dd>

Accepts dates in YYYY-MM-DD[T]HH:MM:SS format, representing the end time of the event. If left blank, it defaults to one hour after the start time.

*example*:
```
2023-06-01T10:00:00
```

---

#### Calendar Id `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select which calendar the event will be added to. If omitted, the event is added to the user’s primary calendar.

*example*:
```
AQMkADAwATMwMAItZmYAZS1lN2UxLTAwAi0wMAoARgAAA5GJx
```

---

#### Description `string`

<dd>

The message associated with the event. This property is used to provide additional details or an agenda for the event.

*example*:
```
Discuss project milestones and deadlines.
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

Display name of the event location. This property helps attendees know where the event will take place.

*example*:
```
Conference Room B
```

---

#### Location Url `string`

<dd>

URL representing the location. This can be a link to a map or a virtual meeting room.

*example*:
```
https://zoom.us/j/1234567890
```

---

#### Attendees `array`

<dd>

Accepts an array of email addresses or email addresses separated by commas. This property is used to invite participants to the event.

*example*:
```
["john.doe@example.com", "jane.smith@example.com"]
```

---

### Update Event

Updates an existing event in the user's calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar the event will be updated in. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Event Id `string`

<dd>

The ID of the event to update. This field is required to specify which event is being modified. Event IDs are typically in a unique format provided by Outlook.

*example*:
```
AAMkAGI2TZZAINDU1LWU4ZmEtNDhhMS1iMDA0LTE1M2QxN2ZmYzIzNABGAAAAAAB
```

---

(Repeat the same property documentation for Subject, Start Time, Time Zone, End Time, Calendar Id, Description, Content Type, Location Name, Location Url, and Attendees as in the Create Event command.)

---

### Get Event By Id

Retrieves details of a specific event by its ID.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar to access the event from. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Event Id `string`

<dd>

The ID of the event to get. This field is required to retrieve the specific event details. Event IDs are typically in a unique format provided by Outlook.

*example*:
```
AAMkAGI2TZZAINDU1LWU4ZmEtNDhhMS1iMDA0LTE1M2QxN2ZmYzIzNABGAAAAAAB
```

---

#### Calendar Id `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select calendar. If omitted, the event is retrieved from the user’s primary calendar.

*example*:
```
AQMkADAwATMwMAItZmYAZS1lN2UxLTAwAi0wMAoARgAAA5GJx
```

---

### Get Events

Retrieves a list of events from the user's calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar to access the events from. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Calendar Id `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select which calendar the event will be added to. If omitted, events are retrieved from the user’s primary calendar.

*example*:
```
AQMkADAwATMwMAItZmYAZS1lN2UxLTAwAi0wMAoARgAAA5GJx
```

---

#### Events Filter Formula `string`

<dd>

Filter events based on the outlook filter formula. This property allows users to retrieve a specific subset of events matching the provided criteria.

*example*:
```
"subject eq 'Meeting'"
```

---

### Delete Event

Deletes an event from the user's calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's calendar the event will be deleted from. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Event Id `string`

<dd>

The ID of the event to delete. This field is required to specify which event is being removed. Event IDs are typically in a unique format provided by Outlook.

*example*:
```
AAMkAGI2TZZAINDU1LWU4ZmEtNDhhMS1iMDA0LTE1M2QxN2ZmYzIzNABGAAAAAAB
```

---

#### Calendar Id `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select which calendar event will be deleted. If omitted, the event is deleted from the user’s primary calendar.

*example*:
```
AQMkADAwATMwMAItZmYAZS1lN2UxLTAwAi0wMAoARgAAA5GJx
```

---

### Get Messages

Retrieves a list of messages from the user's mail folder.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's mail folder to access the messages from. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Mail Folder `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select which mail folder to get messages from. If omitted, messages are retrieved from the user’s primary mail folder.

*example*:
```
Inbox
```

---

#### Messages Filter Formula `string`

<dd>

Filter messages based on the outlook filter formula. This property allows users to retrieve a specific subset of messages matching the provided criteria.

*example*:
```
"subject eq 'Meeting'"
```

---

#### Limit Results `integer`

<dd>

Limit the maximum number of messages to return. If left blank, a default of 10 messages is returned. The maximum number of messages that can be retrieved is 1,000.

*example*:
```
50
```

---

### Send Message

Sends a message from the user's mail account.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. This field is required to identify which user's mail account to send the message from. If omitted, the operation may fail due to lack of user context.

*example*:
```
12345678
```

---

#### Subject `string`

<dd>

The text of the message’s subject line. This field is used to set the subject of the email and is typically required to inform the recipient about the content of the message.

*example*:
```
Project Update
```

---

#### Message Body `string`

<dd>

The main content of the message. This property is used to convey the message to the recipients.

*example*:
```
Please find attached the latest project report for your review.
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

#### Attachments `array`

<dd>

Accepts either a single file object or a JSON array of file objects. This property is used to include attachments with the message.

*example*:
```
[{"name": "report.pdf", "contentBytes": "JVBERi0xLjQKJ..."}]
```

---

#### To Recipients `array`

<dd>

Accepts an array of email addresses or email addresses separated by commas. This property specifies the primary recipients of the message.

*example*:
```
["john.doe@example.com", "jane.smith@example.com"]
```

---

#### Cc Recipients `array`

<dd>

Accepts an array of email addresses or email addresses separated by commas. This property specifies the recipients to be included as carbon copy (CC) on the message.

*example*:
```
["manager@example.com"]
```

---

#### Bcc Recipients `array`

<dd>

Accepts an array of email addresses or email addresses separated by commas. This property specifies the recipients to be included as blind carbon copy (BCC) on the message.

*example*:
```
["audit@example.com"]
```

---

#### Mail Folder `string`

<dd>

Use Connect Portal Workflow Settings to allow users to select which mail folder to send from. If omitted, the message is sent from the user’s primary mail folder.

*example*:
```
Sent Items
```

---

### Custom Action

Executes a custom action within the Outlook integration.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
