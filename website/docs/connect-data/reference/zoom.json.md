# Zoom Integration

This page provides information on how to connect to Zoom. It enables users to perform actions such as creating meetings, updating meeting details, managing registrants, and accessing recordings.

## Connect Zoom

Explain how to authenticate and connect to this service securely.

## Query Zoom

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Meeting

Creates a new Zoom meeting with the specified details.

#### Topic `string`

<dd>

The topic or name of the meeting. This is a short title that will be displayed to participants. It should be descriptive and concise.

*example*:
```Enter Topic```

---

#### Start Time `string`

<dd>

The start time of the meeting, provided in ISO 8601 format. This timestamp should include the date and time when the meeting is scheduled to begin.

*example*:
```2020-03-31T12:02:00Z```

---

#### Duration `integer`

<dd>

The duration of the meeting in minutes. This indicates how long the meeting is planned to last.

*example*:
```60```

---

#### Timezone `string`

<dd>

The timezone for the meeting start time, specified as a string. It should match a valid timezone identifier, such as those from the IANA Time Zone Database.

*example*:
```America/Los_Angeles```

---

#### Agenda `string`

<dd>

A description or agenda for the meeting. This field allows you to provide additional details about the meeting's purpose.

*example*:
```Enter Agenda```

---

#### Password `string`

<dd>

A passcode required for participants to join the meeting. It can contain alphanumeric characters and some special characters with a maximum length of 10 characters.

*example*:
```Enter Password```

---

#### Enable Waiting Room `boolean`

<dd>

Determines whether a waiting room will be enabled for the meeting. When enabled, participants must wait to be admitted by the host.

*example*:
```No example provided.```

---

#### Send Registrant Confirmation `boolean`

<dd>

Indicates whether a confirmation email should be sent to registrants upon registration for the meeting.

*example*:
```No example provided.```

---

### Update Meeting

Updates the details of an existing Zoom meeting.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting you wish to update. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

#### Topic `string`

<dd>

The topic or name of the meeting. This is a short title that will be displayed to participants. It should be descriptive and concise.

*example*:
```Enter Topic```

---

#### Start Time `string`

<dd>

The start time of the meeting, provided in ISO 8601 format. This timestamp should include the date and time when the meeting is scheduled to begin.

*example*:
```2020-03-31T12:02:00Z```

---

#### Duration `integer`

<dd>

The duration of the meeting in minutes. This indicates how long the meeting is planned to last.

*example*:
```60```

---

#### Timezone `string`

<dd>

The timezone for the meeting start time, specified as a string. It should match a valid timezone identifier, such as those from the IANA Time Zone Database.

*example*:
```America/Los_Angeles```

---

#### Agenda `string`

<dd>

A description or agenda for the meeting. This field allows you to provide additional details about the meeting's purpose.

*example*:
```Enter Agenda```

---

### Get Meeting

Retrieves a list of meetings for the user.

No properties available.

---

### Get Meeting By Id

Retrieves details for a specific meeting by its ID.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting you wish to retrieve. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

### Delete Meeting

Deletes a Zoom meeting with the specified ID.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting you wish to delete. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

### Add Meeting Registrant

Adds a registrant to a Zoom meeting.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting to which you want to add registrants. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

#### Email `string`

<dd>

The email address of the registrant. It should be a valid email format as it may be used for sending confirmations and meeting updates.

*example*:
```name@example.com```

---

#### First Name `string`

<dd>

The first name of the registrant. This information may be used for identification during the meeting.

*example*:
```Enter First Name```

---

#### Last Name `string`

<dd>

The last name of the registrant. This information may be used in conjunction with the first name for identification.

*example*:
```Enter Last Name```

---

#### Address `string`

<dd>

The address of the registrant. This can be used for location-based identification or record-keeping.

*example*:
```Enter Address```

---

#### City `string`

<dd>

The city where the registrant is located. This information may be used for demographic analysis or record-keeping.

*example*:
```Enter City```

---

#### Country `string`

<dd>

The country of the registrant. This information is important for international meetings and may affect timezone settings.

*example*:
```Enter Country```

---

#### Zip `string`

<dd>

The postal or zip code for the registrant's location. This can be used for sorting or regional analysis.

*example*:
```Enter Zip```

---

#### State `string`

<dd>

The state or province where the registrant is located. This information may be used for demographic analysis or record-keeping.

*example*:
```Enter State```

---

#### Phone `string`

<dd>

The phone number of the registrant. This may be used for additional contact methods or verification.

*example*:
```Enter Phone```

---

#### Organization `string`

<dd>

The organization that the registrant represents. This can be useful for business meetings or events.

*example*:
```Enter Organization```

---

#### Job Title `string`

<dd>

The job title of the registrant. This can provide context about their role or reason for attending the meeting.

*example*:
```Enter Job Title```

---

### Get Meeting Registrant

Retrieves registrants for a specific meeting by its ID.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting whose registrants you want to retrieve. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

#### Registrant Status `string`

<dd>

The status of the registrants to retrieve. This can be used to filter the list based on their confirmation status.

*example*:
```Enter Registrant Status```

---

### Delete Meeting Registrant

Deletes a registrant from a Zoom meeting.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting from which you want to delete a registrant. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

#### Registrant Id `string`

<dd>

The unique identifier for the registrant you wish to delete. This ID is assigned by Zoom when a registrant is added to a meeting.

*example*:
```Enter Registrant Id```

---

### Get Recording By Meeting Id

Retrieves the recording of a meeting by its ID.

#### Meeting Id `string`

<dd>

The unique identifier for the meeting whose recording you want to retrieve. This ID is provided by Zoom when a meeting is created.

*example*:
```Enter Meeting Id```

---

#### Include Token `boolean`

<dd>

Specifies whether to include the user’s access token in the download URL for the recording. This is used for authenticated access to the recording.

*example*:
```No example provided.```

---

### Search Recording

Searches for Zoom recordings within a specified date range and by meeting ID.

#### Search From `string`

<dd>

The start date for the search range, in 'yyyy-mm-dd' UTC format. This filters the recordings to those created on or after this date.

*example*:
```2022-10-22```

---

#### Search Upto `string`

<dd>

The end date for the search range, in 'yyyy-mm-dd' UTC format. This filters the recordings to those created on or before this date.

*example*:
```2022-11-21```

---

#### Meeting Id `string`

<dd>

The unique identifier for the meeting whose recordings you want to search. This ID is provided by Zoom when a meeting is created.

*example*:
```6840331990```

---

#### Trash `boolean`

<dd>

Indicates whether to search for recordings that are currently in the trash. This allows you to retrieve recordings that have been deleted but not permanently removed.

*example*:
```No example provided.```

---

#### Trash Type `string`

<dd>

Specifies the type of recordings to retrieve from the trash. This can be used to filter the search to specific types of recordings.

*example*:
```Enter Trash Type```

---

#### Include Token `boolean`

<dd>

Specifies whether to include the user’s access token in the download URL for the recording. This is used for authenticated access to the recording.

*example*:
```No example provided.```

---

### Custom Action

Performs a custom action within the Zoom integration.

No properties available.

---
