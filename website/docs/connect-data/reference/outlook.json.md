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

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's calendar the event will be created in.

*example*:
```
user@example.com
```

---

#### Subject `string`

<dd>

The Subject property sets the text of the event’s subject line. This is a required field and will be displayed as the title of the event in the user's calendar.

*example*:
```
Team Meeting
```

---

#### Start Time `datetime`

<dd>

The Start Time specifies when the event begins using the YYYY-MM-DD[T]HH:MM:SS date format, which is compliant with ISO 8601. This property is required to schedule the event at the correct time.

*example*:
```
2023-07-21T09:00:00
```

---

#### Time Zone `string`

<dd>

The Time Zone property allows users to select which timezone the event will be added to, using the Connect Portal Workflow Settings. If this property is omitted, the event defaults to the UTC timezone.

*example*:
```
Pacific/Auckland
```

---

#### End Time `datetime`

<dd>

The End Time indicates when the event ends and accepts a date in the YYYY-MM-DD[T]HH:MM:SS format. If this property is not provided, it defaults to one hour after the start time.

*example*:
```
2023-07-21T10:00:00
```

---

#### Calendar Id `string`

<dd>

The Calendar Id allows users to select which calendar the event will be added to through the Connect Portal Workflow Settings. If left blank, the event is added to the user’s primary calendar. The Calendar Id is typically a unique identifier for a calendar within Outlook.

*example*:
```
AQMkADAwATMwMAItZmYAZS1iNjQ2LTAwAi0wMAoARgAAA5P9
```

---

#### Description `string`

<dd>

The Description property is used to add a message or additional details associated with the event. This field is optional and helps provide context for the event attendees.

*example*:
```
Discussing the upcoming project deliverables.
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

The Location Name is the display name of the event location. This property is optional but can be useful for attendees to know the physical or virtual location of the event.

*example*:
```
Conference Room B
```

---

#### Location Url `string`

<dd>

The Location URL is an optional property that represents the location of the event with a URL. This is particularly useful for virtual meetings where a link to the meeting platform can be provided.

*example*:
```
https://meet.example.com/join/123456789
```

---

#### Attendees `array`

<dd>

The Attendees property accepts an array of email addresses or email addresses separated by commas. It specifies the participants that are to be invited to the event.

*example*:
```
["attendee1@example.com", "attendee2@example.com"]
```

---

### Update Event

Updates an existing event in the user's Outlook calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's calendar the event will be updated in.

*example*:
```
user@example.com
```

---

#### Event Id `string`

<dd>

The Event ID is the unique identifier of the event to update. It is required to locate the specific event within the user's calendar that needs modification.

*example*:
```
AAMkAGI2TZZAIND1xAAA=
```

---

#### Subject `string`

<dd>

The Subject property sets the text of the event’s subject line. This is a required field and will be displayed as the title of the event in the user's calendar.

*example*:
```
Updated Team Meeting
```

---

(Repeat the same property explanations as in "Create Event" for Start Time, Time Zone, End Time, Calendar Id, Description, Content Type, Location Name, Location Url, Attendees)

---

### Get Event By Id

Retrieves the details of a specific event by its ID.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's calendar the event will be retrieved from.

*example*:
```
user@example.com
```

---

#### Event Id `string`

<dd>

The Event ID is the unique identifier of the event to get. It is required to locate the specific event within the user's calendar.

*example*:
```
AAMkAGI2TZZAIND1xAAA=
```

---

#### Calendar Id `string`

<dd>

The Calendar Id allows users to select which calendar to retrieve the event from through the Connect Portal Workflow Settings. If left blank, the event is retrieved from the user’s primary calendar. The Calendar Id is typically a unique identifier for a calendar within Outlook.

*example*:
```
AQMkADAwATMwMAItZmYAZS1iNjQ2LTAwAi0wMAoARgAAA5P9
```

---

### Get Events

Retrieves a list of events from the user's Outlook calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's calendar the events will be retrieved from.

*example*:
```
user@example.com
```

---

#### Calendar Id `string`

<dd>

The Calendar Id allows users to select which calendar to retrieve events from through the Connect Portal Workflow Settings. If left blank, events are retrieved from the user’s primary calendar. The Calendar Id is typically a unique identifier for a calendar within Outlook.

*example*:
```
AQMkADAwATMwMAItZmYAZS1iNjQ2LTAwAi0wMAoARgAAA5P9
```

---

#### Events Filter Formula `string`

<dd>

The Events Filter Formula allows users to filter events based on the Outlook filter formula. This field is optional and can be used to retrieve specific events that match the criteria provided.

*example*:
```
"subject eq 'Meeting'"
```

---

### Delete Event

Deletes a specific event from the user's Outlook calendar.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's calendar the event will be deleted from.

*example*:
```
user@example.com
```

---

#### Event Id `string`

<dd>

The Event ID is the unique identifier of the event to delete. It is required to locate and remove the specific event within the user's calendar.

*example*:
```
AAMkAGI2TZZAIND1xAAA=
```

---

#### Calendar Id `string`

<dd>

The Calendar Id allows users to select which calendar the event will be deleted from through the Connect Portal Workflow Settings. If left blank, the event is deleted from the user’s primary calendar. The Calendar Id is typically a unique identifier for a calendar within Outlook.

*example*:
```
AQMkADAwATMwMAItZmYAZS1iNjQ2LTAwAi0wMAoARgAAA5P9
```

---

### Get Messages

Retrieves a list of messages from the user's Outlook mail folders.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's mail folder the messages will be retrieved from.

*example*:
```
user@example.com
```

---

#### Mail Folder `string`

<dd>

The Mail Folder property allows users to select which mail folder to get messages from using the Connect Portal Workflow Settings. If left blank, messages are retrieved from the user’s primary mail folder.

*example*:
```
Inbox
```

---

#### Messages Filter Formula `string`

<dd>

The Messages Filter Formula allows users to filter messages based on the Outlook filter formula. This field is optional and can be used to retrieve specific messages that match the criteria provided.

*example*:
```
"subject eq 'Meeting'"
```

---

#### Limit Results `integer`

<dd>

The Limit Results property sets the maximum number of messages to return. If left blank, it defaults to 10. The maximum number of messages that can be returned is 1,000.

*example*:
```
50
```

---

### Send Message

Sends a message from the user's Outlook account.

#### User Id `string`

<dd>

Specify a user ID to perform this action if you are working with an application token. The User ID is typically in the format of an email address or a unique identifier assigned to a user within the Outlook service. It is required to specify which user's mail folder the message will be sent from.

*example*:
```
user@example.com
```

---

#### Subject `string`

<dd>

The Subject property sets the text of the message’s subject line. This is a required field and will be displayed as the title of the message in the recipient's inbox.

*example*:
```
Project Update
```

---

#### Message Body `string`

<dd>

No description available.

*example*:
```
No example provided.
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

The Attachments property accepts either a single file object or a JSON array of file objects. This allows users to attach files to the message being sent.

*example*:
```
[{"name":"attachment.pdf", "contentBytes":"<base64-encoded-content>"}]
```

---

#### To Recipients `array`

<dd>

The To Recipients property accepts an array of email addresses or email addresses separated by commas. It specifies the primary recipients of the message.

*example*:
```
["recipient1@example.com", "recipient2@example.com"]
```

---

#### Cc Recipients `array`

<dd>

The Cc Recipients property accepts an array of email addresses or email addresses separated by commas. It specifies the recipients who will receive a copy of the message.

*example*:
```
["cc1@example.com", "cc2@example.com"]
```

---

#### Bcc Recipients `array`

<dd>

The Bcc Recipients property accepts an array of email addresses or email addresses separated by commas. It specifies the recipients who will receive a blind copy of the message, meaning other recipients will not see these addresses.

*example*:
```
["bcc1@example.com", "bcc2@example.com"]
```

---

#### Mail Folder `string`

<dd>

The Mail Folder property allows users to select which mail folder to send the message from using the Connect Portal Workflow Settings. If left blank, the message is sent from the user’s primary mail folder.

*example*:
```
Sent Items
```

---

### Custom Action

Performs a custom action within the Outlook service.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
