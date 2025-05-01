# Google Calendar Integration

This page provides information on how to connect to Google Calendar. It enables users to perform actions such as creating events, updating events, listing events, managing contacts, searching directory people, and checking availability.

## Connect Google Calendar

To connect to Google Calendar, authenticate using OAuth 2.0. During authentication, select the Google account and grant the necessary permissions to access calendar events and contacts. Once connected, you can manage calendars, events, and contacts through the available commands.

## Query Google Calendar

The following section provides a **reference guide** describing available commands and their parameters.



### Calendar Create Event

Creates a new event in a specified calendar.

#### Event Name `string`
<dd>
This property specifies the name of the event. It is used as the event title visible in the calendar.

*Example*:
```
Enter Event Name
```
</dd>

#### Start Time `string`
<dd>
The start time of the event. Accepts Unix timestamp or ISO 8601 date formats. This defines when the event begins.

*Example*:
```
Enter Start Time
```
</dd>

#### End Time `string`
<dd>
The end time of the event. Accepts Unix timestamp or ISO 8601 date formats. If omitted, it defaults to one hour after the start time.

*Example*:
```
Enter End Time
```
</dd>

#### Calendar `string`
<dd>
The calendar in which the event will be created. Use Connect Portal Workflow Settings to allow users to select the calendar. Defaults to the user’s primary calendar if left blank.

*Example*:
```
Enter Calendar
```
</dd>

#### Attendees `string`
<dd>
An array of email addresses or a comma-separated list of email addresses representing event attendees.

*Example*:
```
Enter Attendees
```
</dd>

#### Event Location `string`
<dd>
The location where the event will take place.

*Example*:
```
Enter Event Location
```
</dd>

#### Event Description `string`
<dd>
A description or notes about the event.

*Example*:
```
Enter Event Description
```
</dd>

#### Event Id `string`
<dd>
An application-specific ID to associate with this event. This ID can be used to sync updates to the event later.

*Example*:
```
Enter Event Id
```
</dd>

#### Include Meet Link `boolean`
<dd>
If set to true, automatically creates a Google Meet conference link for the event.

*Example*:
```
Enter Include Meet Link
```
</dd>



### Calendar Update Event

Updates an existing event identified by its Event ID.

#### Event Id `string`
<dd>
The ID of the event to update. This ID identifies the specific event in the calendar.

*Example*:
```
Enter Event Id
```
</dd>

#### Event Name `string`
<dd>
The updated name of the event.

*Example*:
```
Enter Event Name
```
</dd>

#### Start Time `string`
<dd>
The updated start time of the event. Accepts Unix timestamp or ISO 8601 date formats.

*Example*:
```
Enter Start Time
```
</dd>

#### End Time `string`
<dd>
The updated end time of the event. Defaults to one hour after the start time if left blank.

*Example*:
```
Enter End Time
```
</dd>

#### Calendar `string`
<dd>
The calendar where the event exists or will be updated. Defaults to the user’s primary calendar if left blank.

*Example*:
```
Enter Calendar
```
</dd>

#### Attendees `string`
<dd>
An array or comma-separated list of email addresses representing the updated attendees.

*Example*:
```
Enter Attendees
```
</dd>

#### Event Location `string`
<dd>
The updated location of the event.

*Example*:
```
Enter Event Location
```
</dd>

#### Event Description `string`
<dd>
The updated description of the event.

*Example*:
```
Enter Event Description
```
</dd>



### Calendar List Events

Retrieves a list of events from a specified calendar within a date range.

#### Calendar `string`
<dd>
The calendar from which to list events. Defaults to the user’s primary calendar if left blank.

*Example*:
```
Enter Calendar
```
</dd>

#### After `string`
<dd>
Filters events that start after this date. Accepts Unix timestamp or ISO 8601 date formats.

*Example*:
```
Enter After
```
</dd>

#### Before `string`
<dd>
Filters events that end before this date. Accepts Unix timestamp or ISO 8601 date formats.

*Example*:
```
Enter Before
```
</dd>



### Calendar Get Event By Id

Retrieves details of a specific event by its Event ID.

#### Event Id `string`
<dd>
The ID of the event to retrieve.

*Example*:
```
Enter Event Id
```
</dd>

#### Calendar `string`
<dd>
The calendar containing the event. Defaults to the user’s primary calendar if left blank.

*Example*:
```
Enter Calendar
```
</dd>



### Calendar Delete Event

Deletes a calendar event identified by its Event ID.

#### Event Id `string`
<dd>
The ID of the calendar event to delete.

*Example*:
```
Enter Event Id
```
</dd>

#### Calendar `string`
<dd>
The calendar from which to delete the event. Defaults to the user’s primary calendar if left blank.

*Example*:
```
Enter Calendar
```
</dd>



### Calendar Get Contacts

Retrieves contacts associated with the calendar.

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the contacts list. This allows fetching contacts in batches.

*Example*:
```
Enter Pagination Parameters
```
</dd>



### Calendar Search Contacts

Searches contacts based on a query string.

#### Query `string`
<dd>
The search query string used to find matching contacts.

*Example*:
```
Enter Query
```
</dd>



### Calendar List Directory People

Lists people from the directory associated with the calendar.

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the directory people list.

*Example*:
```
Enter Pagination Parameters
```
</dd>



### Calendar Search Directory People

Searches people in the directory based on a query string.

#### Query `string`
<dd>
The search query string to find matching people in the directory.

*Example*:
```
Enter Query
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the search results.

*Example*:
```
Enter Pagination Parameters
```
</dd>



### Calendar List Other Contacts

Lists other contacts associated with the calendar.

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the contacts list.

*Example*:
```
Enter Pagination Parameters
```
</dd>



### Calendar Search Other Contacts

Searches other contacts based on a query string.

#### Query `string`
<dd>
The search query string used to find matching other contacts.

*Example*:
```
Enter Query
```
</dd>



### Calendar Get Availability

Retrieves availability information for calendars or groups within a specified time interval.

#### Time Min `string`
<dd>
The start of the availability interval in ISO 8601 format.

*Example*:
```
Enter Time Min
```
</dd>

#### Time Max `string`
<dd>
The end of the availability interval in ISO 8601 format.

*Example*:
```
Enter Time Max
```
</dd>

#### Time Zone `string`
<dd>
The time zone used in the response. This is optional and defaults to UTC if omitted.

*Example*:
```
Enter Time Zone
```
</dd>

#### Items `array`

<dd>

A list of calendars and/or groups to query for availability. Defaults to the user’s default calendar if omitted.

*Example*:
```
Enter Items
```
</dd>



### Custom Action

Executes a custom action. This command does not have any predefined properties.

