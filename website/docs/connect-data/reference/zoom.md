# Zoom

This page provides information on how to connect to Zoom. It enables users to perform actions such as creating meetings, managing registrants, accessing recordings, and updating meeting details.

## Connect Zoom

To connect to Zoom, you need to authenticate using OAuth 2.0. This authentication provides secure access to your Zoom account and resources.


## Query Zoom

The following section provides a reference guide describing available commands and their parameters for interacting with Zoom.

### Create Meeting

Creates a new meeting in your Zoom account. This command allows you to define meeting details such as topic, start time, duration, and security settings, and returns the created meeting's information including its ID for future reference.

#### Topic `string`
<dd>
The name or subject of the meeting. This appears in the Zoom client, calendar invitations, and meeting lists.

Choose a descriptive topic that clearly communicates the purpose of the meeting to participants.

*Example*:
```
Quarterly Budget Review
```
</dd>

#### Start Time `string`
<dd>
The scheduled start time for the meeting in ISO 8601 format (UTC). This defines when the meeting will begin.

The format should be: `YYYY-MM-DDThh:mm:ssZ`

*Example*:
```
2025-06-15T14:00:00Z
```
</dd>

#### Duration `integer`
<dd>
The scheduled duration of the meeting in minutes. This helps participants plan their schedules and allows Zoom to allocate resources.

For free Zoom accounts, meetings with 3 or more participants are limited to 40 minutes. For paid accounts, meetings can be up to 30 hours (1800 minutes).

*Example for a 1-hour meeting*:
```
60
```

*Example for a 2-hour meeting*:
```
120
```
</dd>

#### Timezone `string`
<dd>
The time zone for the meeting's start time. This ensures the meeting appears correctly in participants' calendars regardless of their location.

Use IANA timezone format (e.g., "America/Los_Angeles", "Europe/London", "Asia/Tokyo").

*Example*:
```
America/New_York
```
</dd>

#### Agenda `string`
<dd>
A description of the meeting's purpose or agenda. This provides additional context for participants and appears in meeting details.

Use this field to outline key discussion points, required preparation, or other relevant information.

*Example*:
```
Review Q2 financial performance and discuss budget allocations for Q3. Please prepare department spending reports.
```
</dd>

#### Password `string`
<dd>
The passcode required to join the meeting. This adds a layer of security to prevent unauthorized access.

By default, passcodes may only contain the following characters: [a-z A-Z 0-9 @ - _ *] and have a maximum of 10 characters.

*Example*:
```
Budget2025
```
</dd>

#### Enable Waiting Room `boolean`
<dd>
Determines whether the waiting room feature is enabled for the meeting. When enabled, participants join a waiting area and must be admitted by the host.

The waiting room provides additional security by allowing the host to screen participants before they join the meeting.

*Example to enable waiting room*:
```
true
```

*Example to disable waiting room*:
```
false
```
</dd>

#### Send Registrant Confirmation `boolean`
<dd>
Determines whether confirmation emails are automatically sent to registrants. When enabled, participants receive an email confirmation after registering for the meeting.

*Example to send confirmation emails*:
```
true
```

*Example to disable confirmation emails*:
```
false
```
</dd>

### Update Meeting

Updates an existing meeting in your Zoom account. This command allows you to modify meeting details such as topic, start time, duration, and description, and returns the updated meeting information.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting to update.

To find a meeting ID:
* In the Zoom web portal, go to Meetings and select the meeting
* The ID appears in the meeting details and in the URL: `https://zoom.us/meeting/[MEETING_ID]`
* In meeting invitations, the ID is included in the join link
* Meeting IDs are typically 9-11 digit numbers (e.g., 123 456 7890)

*Example*:
```
123456789
```
</dd>

#### Topic `string`
<dd>
The updated name or subject of the meeting. This will replace the current meeting topic.

*Example*:
```
Updated: Quarterly Budget Review with Executive Team
```
</dd>

#### Start Time `string`
<dd>
The updated scheduled start time for the meeting in ISO 8601 format (UTC). This will replace the current meeting start time.

*Example*:
```
2025-06-16T15:00:00Z
```
</dd>

#### Duration `integer`
<dd>
The updated scheduled duration of the meeting in minutes. This will replace the current meeting duration.

*Example*:
```
90
```
</dd>

#### Timezone `string`
<dd>
The updated time zone for the meeting's start time. This will replace the current meeting time zone.

*Example*:
```
Europe/London
```
</dd>

#### Agenda `string`
<dd>
The updated description of the meeting's purpose or agenda. This will replace the current meeting agenda.

*Example*:
```
Updated agenda: Review Q2 financial performance, discuss budget allocations for Q3, and plan for the annual audit. Executive team members will join for the first 30 minutes.
```
</dd>

### Get Meeting

Retrieves a list of meetings from your Zoom account. This command returns meeting details including their IDs, topics, start times, and durations for all scheduled meetings.

<dd>
This command retrieves a list of meetings for the authenticated user. By default, it returns all scheduled meetings, including upcoming and recurring meetings.

The response includes comprehensive details about each meeting, such as:
* Meeting ID
* Topic
* Start time
* Duration
* Join URL
* Creation time
* Settings (waiting room, registration, etc.)

No parameters are required for this command, as it retrieves all meetings for the authenticated user.
</dd>

### Get Meeting By Id

Retrieves detailed information about a specific meeting using its unique Zoom meeting ID. This command returns comprehensive data about the meeting, including its settings, participants, and join URLs.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting to retrieve.

To find a meeting ID:
* In the Zoom web portal, go to Meetings and select the meeting
* The ID appears in the meeting details and in the URL: `https://zoom.us/meeting/[MEETING_ID]`
* In meeting invitations, the ID is included in the join link
* Meeting IDs are typically 9-11 digit numbers

*Example*:
```
123456789
```
</dd>

### Delete Meeting

Deletes a meeting from your Zoom account. This command permanently removes the specified meeting and cancels it for all participants.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting to delete.

To find a meeting ID:
* In the Zoom web portal, go to Meetings and select the meeting
* The ID appears in the meeting details and in the URL: `https://zoom.us/meeting/[MEETING_ID]`
* In meeting invitations, the ID is included in the join link
* Meeting IDs are typically 9-11 digit numbers

*Example*:
```
123456789
```
</dd>

### Add Meeting Registrant

Adds a registrant to a meeting that requires registration. This command allows you to register a participant for a meeting and returns registration confirmation details including a join URL and registrant ID.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting to add registrants to.

To find a meeting ID:
* In the Zoom web portal, go to Meetings and select the meeting
* The ID appears in the meeting details and in the URL: `https://zoom.us/meeting/[MEETING_ID]`
* In meeting invitations, the ID is included in the join link
* Meeting IDs are typically 9-11 digit numbers

Note: The meeting must have registration enabled for this command to work.

*Example*:
```
123456789
```
</dd>

#### Email `string`
<dd>
The email address of the registrant. This is used for sending confirmation emails and identifying the registrant.

*Example*:
```
john.doe@example.com
```
</dd>

#### First Name `string`
<dd>
The first name of the registrant. This appears in the meeting's participant list and registration records.

*Example*:
```
John
```
</dd>

#### Last Name `string`
<dd>
The last name of the registrant. This appears in the meeting's participant list and registration records.

*Example*:
```
Doe
```
</dd>

#### Address `string`
<dd>
The physical address of the registrant. This is optional and used for registration records.

*Example*:
```
123 Main Street
```
</dd>

#### City `string`
<dd>
The city of the registrant. This is optional and used for registration records.

*Example*:
```
San Francisco
```
</dd>

#### Country `string`
<dd>
The country of the registrant. This is optional and used for registration records.

Use the two-letter country code (ISO 3166-1 alpha-2).

*Example*:
```
US
```
</dd>

#### Zip `string`
<dd>
The ZIP or postal code of the registrant. This is optional and used for registration records.

*Example*:
```
94105
```
</dd>

#### State `string`
<dd>
The state or province of the registrant. This is optional and used for registration records.

*Example*:
```
CA
```
</dd>

#### Phone `string`
<dd>
The phone number of the registrant. This is optional and used for registration records.

*Example*:
```
+14155551234
```
</dd>

#### Organization `string`
<dd>
The organization or company of the registrant. This is optional and used for registration records.

*Example*:
```
Acme Corporation
```
</dd>

#### Job Title `string`
<dd>
The job title of the registrant. This is optional and used for registration records.

*Example*:
```
Product Manager
```
</dd>

### Get Meeting Registrant

Retrieves a list of registrants for a specific meeting. This command returns registrant details including their IDs, names, email addresses, and registration status.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting whose registrants you want to retrieve.

To find a meeting ID:
* In the Zoom web portal, go to Meetings and select the meeting
* The ID appears in the meeting details and in the URL: `https://zoom.us/meeting/[MEETING_ID]`
* In meeting invitations, the ID is included in the join link
* Meeting IDs are typically 9-11 digit numbers

Note: The meeting must have registration enabled for this command to work.

*Example*:
```
123456789
```
</dd>

#### Registrant Status `string`
<dd>
Filters registrants based on their status. This helps you find registrants in a specific state.

Valid status values:
* `pending` - Registrants who have registered but not been approved
* `approved` - Registrants who have been approved
* `denied` - Registrants who have been denied

*Example to get approved registrants*:
```
approved
```
</dd>

### Delete Meeting Registrant

Removes a registrant from a meeting. This command cancels the registration for the specified participant.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting from which to delete a registrant.

To find a meeting ID:
* In the Zoom web portal, go to Meetings and select the meeting
* The ID appears in the meeting details and in the URL: `https://zoom.us/meeting/[MEETING_ID]`
* In meeting invitations, the ID is included in the join link
* Meeting IDs are typically 9-11 digit numbers

*Example*:
```
123456789
```
</dd>

#### Registrant Id `string`
<dd>
The unique identifier of the registrant to delete.

To find a registrant ID:
* Use the "Get Meeting Registrant" command to list all registrants
* The registrant ID is included in the response as `id`
* Registrant IDs are alphanumeric strings (e.g., `abcdef123456`)

*Example*:
```
abcdef123456
```
</dd>

### Get Recording By Meeting Id

Retrieves recording information for a specific meeting. This command returns details about all recordings associated with the meeting, including download URLs, recording types, and file sizes.

#### Meeting Id `string`
<dd>
The unique identifier of the meeting whose recordings you want to retrieve.

To find a meeting ID:
* In the Zoom web portal, go to Recordings and select the recording
* The ID appears in the recording details and in the URL
* In past meeting information, the ID is associated with the meeting
* Meeting IDs are typically 9-11 digit numbers

Note: Recordings are only available for meetings that have ended and had recording enabled.

*Example*:
```
123456789
```
</dd>

#### Include Token `boolean`
<dd>
Determines whether to include the access token in download URLs. When set to true, all download_url properties will include the user's access token, making the URLs directly accessible without additional authentication.

This is useful when sharing recording links with systems that cannot handle authentication separately.

*Example to include token*:
```
true
```

*Example to exclude token*:
```
false
```
</dd>

### Search Recording

Searches for recordings based on specified criteria. This command returns recording details for all recordings matching the search parameters.

#### Search From `string`
<dd>
The start date for the search range in 'yyyy-mm-dd' UTC format. This filters recordings created on or after this date.

*Example*:
```
2025-01-01
```
</dd>

#### Search Upto `string`
<dd>
The end date for the search range in 'yyyy-mm-dd' UTC format. This filters recordings created on or before this date.

*Example*:
```
2025-01-31
```
</dd>

#### Meeting Id `string`
<dd>
The unique identifier of a specific meeting whose recordings you want to retrieve. This allows you to search for recordings from a particular meeting.

Meeting IDs are typically 9-11 digit numbers.

*Example*:
```
123456789
```
</dd>

#### Trash `boolean`
<dd>
Determines whether to search for recordings in the trash. When set to true, the command retrieves recordings that have been moved to trash but not permanently deleted.

Use this parameter in combination with Trash Type to specify the type of deleted recordings to retrieve.

*Example to search trash*:
```
true
```

*Example to search active recordings*:
```
false
```
</dd>

#### Trash Type `string`
<dd>
The type of cloud recording to retrieve from the trash. This parameter is only used when Trash is set to true.

Valid values:
* `meeting_recordings` - Recordings from regular meetings
* `recording_file` - Individual recording files

*Example*:
```
meeting_recordings
```
</dd>

#### Include Token `boolean`
<dd>
Determines whether to include the access token in download URLs. When set to true, all download_url properties will include the user's access token.

*Example*:
```
true
```
</dd>

### Custom Action

Executes a custom action against the Zoom API. This command allows for advanced operations not covered by the standard commands.

<dd>
This command enables you to make custom API calls to Zoom endpoints not covered by the standard commands. You can specify the endpoint, method, and parameters to access additional Zoom functionality.

When using Custom Action, you'll need to refer to the [Zoom API documentation](https://marketplace.zoom.us/docs/api-reference/zoom-api) for specific endpoint details and required parameters.

*Example for a custom query to get user information*:
```
GET /users/{userId}
```

*Example for a custom query to create a webinar*:
```
POST /users/{userId}/webinars
{
  "topic": "Quarterly Product Update",
  "type": 5,
  "start_time": "2025-06-15T14:00:00Z",
  "duration": 60
}
```

Custom actions require appropriate authentication and permissions for the endpoints being accessed.
</dd>
