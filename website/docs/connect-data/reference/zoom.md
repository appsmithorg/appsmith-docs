# Zoom 

This page provides information on how to connect to Zoom. It enables users to perform actions such as creating meetings, updating meeting details, managing meeting registrants, and accessing meeting recordings.

## Connect Zoom

To connect to Zoom, authenticate using your OAuth credentials or API Key and Secret. Ensure you have the necessary permissions to perform the desired actions, such as creating or updating meetings.

## Query Zoom

The following section provides a **reference guide** describing available commands and their parameters.


### Create Meeting

Generate a new meeting with specific details such as time, duration, and agenda.

#### Topic `string`

<dd>

The topic represents the meeting name. It is a brief, descriptive title that helps participants understand the meeting's purpose. Ensure the topic is clear and concise, as it will appear in invitations and meeting lists.

*Example*:


"Team Sync"

</dd>

#### Start Time `ISO 8601 timestamp`

<dd>

Defines the scheduled start time of the meeting. Use the ISO 8601 format for a precise date and time specification. If omitted, the meeting may not be scheduled properly.

*Example*:


"2020-03-31T12:02:00Z"

</dd>

#### Duration `integer`

<dd>

Specifies the length of the meeting in minutes. Ensure that the duration is a positive integer to effectively schedule the meeting. If not specified, the meeting duration defaults to a standard length.

*Example*:

60

</dd>

#### Timezone `string`

<dd>

Defines the time zone of the meeting, which affects the start time calculation based on the local time. Use the “Area/Location” format (e.g., "America/Los_Angeles"). This ensures attendees join at the correct local time.

*Example*:


"America/Los_Angeles"

</dd>

#### Agenda `string`

<dd>

Outlines the meeting's purpose and topics to be discussed. This description helps participants prepare for the meeting. If left empty, there’s no documented agenda for attendees.

*Example*:


"Discuss quarterly goals and team updates."

</dd>

#### Password `string`

<dd>

A passcode required to join the meeting, including characters [a-z A-Z 0-9 @ - _ *] and a maximum length of 10 characters. It ensures that only authorized participants can join. Leaving this field blank will use system defaults.

*Example*:


"secure123"

</dd>

#### Enable Waiting Room `boolean`

<dd>

Indicates if participants should wait in a waiting room before being admitted. Enhances meeting security by allowing the host to admit attendees. Default is usually false if not configured.

*Example*:


true

</dd>

#### Send Registrant Confirmation `boolean`

<dd>

Determines whether a confirmation email is sent to registrants upon their successful registration to the meeting. Keeps registrants informed and ensures they have details. If not provided, registrants won’t receive automatic emails.

*Example*:


true

</dd>

---

### Update Meeting

Modify details of an existing meeting to reflect changes in schedule or content.

#### Meeting Id `string`

<dd>

The unique identifier of the meeting to update. The ID is provided upon meeting creation and is essential to fetch or modify meeting details. Incorrect IDs will result in no updates.

*Example*:


"123456789"

</dd>

#### Topic `string`

<dd>

Update the meeting's topic, reflecting a new title or agenda context. Ensure accuracy for continuity with meeting participants.

*Example*:


"Project Standup"

</dd>

#### Start Time `ISO 8601 timestamp`

<dd>

Modify the meeting’s start time if necessary. Follow the ISO 8601 format to ensure correct system parsing. It's crucial for maintaining the schedule integrity.

*Example*:


"2023-04-01T09:00:00Z"

</dd>

#### Duration `integer`

<dd>

Update meeting length in minutes. Use a positive integer to allow the system to reserve the proper time slot.

*Example*:


90

</dd>

#### Timezone `string`

<dd>

Change the timezone to recalibrate the meeting’s local start time. It should match the format "Area/Location" to avoid errors.

*Example*:


"Europe/London"

</dd>

#### Agenda `string`

<dd>

Update the meeting’s description with new or adjusted topics. This helps align participant expectations with the adjusted agenda.

*Example*:


"Review action items and project deadlines."

</dd>

---

### Get Meeting

Retrieve the entire list of scheduled meetings associated with your account.

(Properties: None)

---

### Get Meeting By Id

Access complete details of a singular meeting using its unique identifier.

#### Meeting Id `string`

<dd>

This is the identifier of the meeting for which you wish to get details. It is a required field and serves as the key reference to pinpoint the exact meeting in query.

*Example*:


"987654321"

</dd>

---

### Delete Meeting

Permanently remove a scheduled meeting and its details.

#### Meeting Id `string`

<dd>

Indicates the meeting to be deleted. Required to ensure the correct meeting is being removed from your schedule. Deletion is irreversible and carefully secured to prevent accidental loss of meetings.

*Example*:


"8155551245"

</dd>

---

### Add Meeting Registrant

Register participants to a specified meeting, including their personal and contact details.

#### Meeting Id `string`

<dd>

Denotes the meeting to which you want attendees to be added. Must be provided to allocate registrants to the correct session.

*Example*:


"927462839"

</dd>

#### Email `string`

<dd>

The email address of the registrant, used for communications. It should be valid and unique to ensure proper registration notifications.

*Example*:


"attendee@example.com"

</dd>

#### First Name `string`

<dd>

Represents the first name of the registrant. Used in communications to personalize invitations and updates.

*Example*:


"John"

</dd>

#### Last Name `string`

<dd>

Shows the last name of the registrant. Completes the attendee's identity within the system's records for formal acknowledgment.

*Example*:


"Doe"

</dd>

#### Address `string`

<dd>

The registrant's address, often used for billing or local information. Make sure it is complete and current.

*Example*:


"123 Main St, Suite 100"

</dd>

#### City `string`

<dd>

Indicates the city portion of the registrant’s address, relevant for local time and logistics purposes.

*Example*:


"San Francisco"

</dd>

#### Country `string`

<dd>

Registrant’s country of residence. Important for regional timezone settings and certain regulatory requirements.

*Example*:


"USA"

</dd>

#### Zip `string`

<dd>

Defines the postal code; used as part of the registrant’s address. Must match regional postal standards for specificity.

*Example*:


"94105"

</dd>

#### State `string`

<dd>

Refers to the administrative division (state/province) in the registrant's address, fulfilling regional postal norms.

*Example*:


"CA"

</dd>

#### Phone `string`

<dd>

Telephone contact for the registrant, offering an alternative for last-minute updates or confirmations.

*Example*:


"+14155552671"

</dd>

#### Organization `string`

<dd>

Registrant’s affiliated company or organization. Helps contextualize their role within the meeting's framework.

*Example*:


"Tech Co."

</dd>

#### Job Title `string`

<dd>

Registrant’s professional designation or role. Could influence meeting dynamics based on level of authority or expertise.

*Example*:


"Software Engineer"

</dd>

---

### Get Meeting Registrant

Fetches the list of registrants of a particular meeting, showcasing their statuses and information.

#### Meeting Id `string`

<dd>

A necessary identifier to determine which meeting’s registrants you’re interested in querying.

*Example*:


"1122334455"

</dd>

#### Registrant Status `string`

<dd>

Dictates the type of registrants' status to be retrieved. It could reflect those registered, awaiting approval, or declined.

*Example*:


"approved"

</dd>

---

### Delete Meeting Registrant

Remove an existing registrant from a meeting, effectively cancelling their participation.

#### Meeting Id `string`

<dd>

The identifier of the meeting from which a registrant will be removed. Key to pinpoint accurately among potentially hundreds of sessions.

*Example*:


"6677889900"

</dd>

#### Registrant Id `string`

<dd>

Denotes the unique ID of the registrant to be deleted, ensuring the correct participant is removed.

*Example*:


"r123456"

</dd>

---

### Get Recording By Meeting Id

Retrieve all available recordings associated with a specific meeting, including optional tokenized download URLs.

#### Meeting Id `string`

<dd>

Used to specify the meeting whose recordings you wish to access. Critical for indexing the correct data set.

*Example*:


"4455667788"

</dd>

#### Include Token `boolean`

<dd>

Decide if download URLs should be appended with an access token for secure retrieval. True or false options must be chosen.

*Example*:


true

</dd>

---

### Search Recording

Conduct a systematic search for recordings within specific parameters such as date range, meeting ID, and optionally, trash retrieval.

#### Search From `date`

<dd>

Designates the start date for the recording search. Entered in 'yyyy-mm-dd' format to maintain precision.

*Example*:


"2023-01-01"

</dd>

#### Search Upto `date`

<dd>

Marks the end date for the search phasing. Use 'yyyy-mm-dd' format consistent with standard practices.

*Example*:


"2023-01-31"

</dd>

#### Meeting Id `string`

<dd>

Facilitates the precise search for recordings related to a particular meeting ID, enhancing specificity.

*Example*:


"9988776655"

</dd>

#### Trash `boolean`

<dd>

Indicates whether the search should extend to deleted recordings found in the trash, combined with Trash Type conditions for filtered results.

*Example*:


true

</dd>

#### Trash Type `string`

<dd>

Specifies which type of recordings to retrieve from the trash, such as cloud or local recordings, aligning with system-defined categories.

*Example*:


"cloud"

</dd>

#### Include Token `boolean`

<dd>

Determines if the recorded data’s download URLs must include a token, enhancing security protocol.

*Example*:


false

</dd>

---

### Custom Action

Perform unspecified actions that may fit unique, non-standard tasks within the system.

(Properties: None)
