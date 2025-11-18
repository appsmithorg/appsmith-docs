# Mixpanel

This page provides information on how to connect to Mixpanel. It enables users to perform actions such as querying event data, tracking events, managing user profiles, and analyzing insights from your Mixpanel project.

## Connect Mixpanel

To connect to Mixpanel, you need to authenticate using your Mixpanel Service Account credentials.

### Service Account Authentication

To authenticate with Mixpanel, you need to provide your Mixpanel Service Account credentials:

1. Log in to your Mixpanel account
2. Navigate to your project settings to create or access a Service Account
3. Obtain your Service Account credentials:
   - **Mixpanel Service Account Username** - Your service account username
   - **Mixpanel Service Account Password** - Your service account password
4. Enter these credentials in the Appsmith Mixpanel datasource configuration

## Query Mixpanel

The following section is a reference guide that provides a description of the available commands with their parameters to create Mixpanel queries.

### Get Projects

Retrieves a list of Mixpanel projects accessible by the authenticated service account. This command returns project details including project IDs and names, which can be used to identify the correct project for subsequent queries.

### Get Aggregate Event Counts

Get unique, total, or average data for events over N minutes/hours/days/weeks/months. This command allows you to analyze event trends over time with different granularities and analysis types.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query. This is a required field that specifies the target project for the analysis.

To find your project ID:
* Log in to your Mixpanel account
* Navigate to your project settings
* The project ID is typically a numeric value displayed in the project settings or URL

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query within your Mixpanel account. If you have multiple workspaces, you can use this to scope the query to a specific workspace.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Event(s) (JSON array) `string`

<dd>

Specifies the event names to analyze as a JSON-encoded array. You can query one or multiple events in a single request.

*Example for a single event:*

```js
["Signup"]
```

*Example for multiple events:*

```js
["Signup", "Purchase", "Page View"]
```

The events must exist in your Mixpanel project. If an event name doesn't exist, it will be excluded from the results.

</dd>

#### Type `string`

<dd>

Specifies the analysis type to use for aggregating the event data. This determines how events are counted or measured.

Valid values:
* `"general"` - Total count of events
* `"unique"` - Count of unique users who performed the event
* `"average"` - Average value of a numeric property

*Example for unique users:*

```
unique
```

</dd>

#### Unit `string`

<dd>

Specifies the time granularity for the aggregation. This determines how the data is grouped over time.

Valid values:
* `"minute"` - Group data by minute
* `"hour"` - Group data by hour
* `"day"` - Group data by day
* `"week"` - Group data by week
* `"month"` - Group data by month

*Example:*

```
day
```

The unit should match your analysis needs. For daily reports, use `"day"`, and for hourly monitoring, use `"hour"`.

</dd>

#### From Date `string`

<dd>

Specifies the start date for the query in YYYY-MM-DD format. This is a required field that defines the beginning of the time range for analysis.

*Example:*

```
2025-10-01
```

The date is interpreted in UTC timezone.

</dd>

#### To Date `string`

<dd>

Specifies the end date for the query in YYYY-MM-DD format. This is a required field that defines the end of the time range for analysis.

*Example:*

```
2025-11-03
```

The date is interpreted in UTC timezone. The end date should be equal to or later than the start date.

</dd>

#### Format `string`

<dd>

Specifies the response format for the query results. This allows you to choose between JSON and CSV formats based on your needs.

Valid values:
* `"json"` - Returns data in JSON format (default)
* `"csv"` - Returns data in CSV format

*Example:*

```
json
```

CSV format is useful for exporting data to spreadsheets or other tools that require CSV input.

</dd>

### Get Aggregated Event Property Values

Get aggregated counts for a specific event property by time unit. This command allows you to analyze how property values change over time for a given event.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query. This is a required field that specifies the target project for the analysis.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query within your Mixpanel account.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Event `string`

<dd>

Specifies the event name to analyze. This must be a single event name (not an array).

*Example:*

```
Signup
```

The event must exist in your Mixpanel project.

</dd>

#### Property Name `string`

<dd>

Specifies the property name to aggregate. This is the property whose values you want to analyze over time.

*Example:*

```
PlanType
```

*Example for a custom property:*

```
SubscriptionTier
```

The property must be associated with the specified event in your Mixpanel data.

</dd>

#### Type `string`

<dd>

Specifies the analysis type to use for aggregating the property values.

Valid values:
* `"general"` - Total count of events with each property value
* `"unique"` - Count of unique users for each property value
* `"average"` - Average value of the property

*Example:*

```
general
```

</dd>

#### Unit `string`

<dd>

Specifies the time granularity for the aggregation.

Valid values:
* `"minute"` - Group data by minute
* `"hour"` - Group data by hour
* `"day"` - Group data by day
* `"week"` - Group data by week
* `"month"` - Group data by month

*Example:*

```
day
```

</dd>

#### From Date `string`

<dd>

Specifies the start date for the query in YYYY-MM-DD format.

*Example:*

```
2025-10-01
```

The date is interpreted in UTC timezone.

</dd>

#### To Date `string`

<dd>

Specifies the end date for the query in YYYY-MM-DD format.

*Example:*

```
2025-11-03
```

The date is interpreted in UTC timezone.

</dd>

#### Format `string`

<dd>

Specifies the response format for the query results.

Valid values:
* `"json"` - Returns data in JSON format (default)
* `"csv"` - Returns data in CSV format

*Example:*

```
json
```

</dd>

### Get Today's Top Events

Get the most active events for today with counts and percent change vs. yesterday. This command provides a quick overview of your most important events happening today.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Type `string`

<dd>

Specifies the metric type used for ranking events.

Valid values:
* `"general"` - Rank by total event count
* `"unique"` - Rank by unique user count

*Example:*

```
general
```

</dd>

#### Limit `integer`

<dd>

Specifies the maximum number of events to return in the results. This helps limit the response size and focus on the most important events.

*Example:*

```
100
```

*Default value:* `100`

If you want to see more events, increase this value. The maximum recommended value is 255.

</dd>

#### Format `string`

<dd>

Specifies the response format for the query results.

Valid values:
* `"json"` - Returns data in JSON format (default)
* `"csv"` - Returns data in CSV format

*Example:*

```
json
```

</dd>

### Get Top Events (Last 31 Days)

Get most common event names over the last 31 days. This command provides insights into your most frequently occurring events over the past month.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Type `string`

<dd>

Specifies the metric type used for ranking events over the last 31 days.

Valid values:
* `"general"` - Rank by total event count
* `"unique"` - Rank by unique user count

*Example:*

```
general
```

</dd>

#### Limit `integer`

<dd>

Specifies the maximum number of events to return in the results.

*Example:*

```
255
```

*Default value:* `255`

This is useful for getting a comprehensive view of all your top events over the past month.

</dd>

#### Format `string`

<dd>

Specifies the response format for the query results.

Valid values:
* `"json"` - Returns data in JSON format (default)
* `"csv"` - Returns data in CSV format

*Example:*

```
json
```

</dd>

### Get Top Event Properties

Get the most common property names for a given event. This command helps you discover which properties are most frequently used with a specific event.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Event `string`

<dd>

Specifies the event name to analyze. This must be a single event name.

*Example:*

```
Signup
```

The event must exist in your Mixpanel project.

</dd>

#### Limit `integer`

<dd>

Specifies the maximum number of properties to return in the results.

*Example:*

```
10
```

*Default value:* `10`

This helps you focus on the most commonly used properties for the event.

</dd>

#### Format `string`

<dd>

Specifies the response format for the query results.

Valid values:
* `"json"` - Returns data in JSON format (default)
* `"csv"` - Returns data in CSV format

*Example:*

```
json
```

</dd>

### Get Top Event Property Values

Get the most common values for a specific event property. This command helps you understand the distribution of values for a particular property within an event.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>


The workspace ID is an optional parameter that specifies which workspace to query.
*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Event `string`

<dd>

Specifies the event name to analyze.

*Example:*

```
Signup
```

The event must exist in your Mixpanel project.

</dd>

#### Property Name `string`

<dd>

Specifies the property name whose values you want to retrieve.

*Example:*

```
PlanType
```

*Example for a custom property:*

```
SubscriptionTier
```

The property must be associated with the specified event in your Mixpanel data.

</dd>

#### Limit `integer`

<dd>

Specifies the maximum number of property values to return in the results.

*Example:*

```
255
```

*Default value:* `255`

This helps you see the most common values for the property.

</dd>

#### Format `string`

<dd>

Specifies the response format for the query results.

Valid values:
* `"json"` - Returns data in JSON format (default)
* `"csv"` - Returns data in CSV format

*Example:*

```
json
```

</dd>

### Download Mixpanel Data

Download raw event data over a specified time period. Returns events in JSON Lines format. This command is useful for exporting large amounts of event data for analysis or backup purposes.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to export data from.

*Example:*

```
1234567
```

</dd>

#### From Date `string`

<dd>

Specifies the start date for the export in YYYY-MM-DD format. The date is interpreted as UTC.

*Example:*

```
2025-10-01
```

</dd>

#### To Date `string`

<dd>

Specifies the end date for the export in YYYY-MM-DD format. The date is interpreted as UTC.

*Example:*

```
2025-11-03
```

</dd>

#### Event(s) (JSON array) `string`

<dd>

Specifies a JSON-encoded array of event names to export. If omitted, all events are returned.

*Example for a single event:*

```js
["Signup"]
```

*Example for multiple events:*

```js
["Signup", "Purchase", "Page View"]
```

If this field is left empty, all events within the date range will be exported.

</dd>

#### Where (Filter Expression) `string`

<dd>

Specifies an expression to filter events. This allows you to export only events that match specific conditions.

*Example:*

```
properties["$os"] == "iOS"
```

*Example for multiple conditions:*

```
properties["PlanType"] == "Premium" && properties["Country"] == "US"
```

The filter expression uses Mixpanel's filter syntax. If this field is left empty, no filtering is applied.

</dd>

#### Limit `integer`

<dd>

Specifies the maximum number of events to return in the export.

*Example:*

```
100
```

If this field is left empty, there is no limit and all matching events will be returned (subject to API limits).

</dd>

### Query Insights Report

Get data from your Insights reports. The Query API has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries. This command allows you to programmatically retrieve data from saved Insights reports in your Mixpanel project.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project contains the Insights report.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace contains the Insights report.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Bookmark ID `string`

<dd>

The bookmark ID of the saved Insights report to query. This is a required field that identifies the specific report to retrieve.

To find the bookmark ID:
* Open the Insights report in Mixpanel
* Look at the URL: `https://mixpanel.com/project/<YOUR_PROJECT_ID>/view/<YOUR_WORKSPACE_ID>/app/boards#id=12345&editor-card-id=%22report-<YOUR_BOOKMARK_ID>%22`
* The bookmark ID is the value after `report-` in the URL

*Example:*

```
67890
```

The bookmark ID corresponds to a saved report that you've created in the Mixpanel UI.

</dd>

### Query Profiles

Query user (or group) profile data and return list of users (or groups) that fit specified parameters. The Query API has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries. API responses return at most page_size records per request. To retrieve additional records, use the session_id from the response and increment the page parameter.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query for profiles.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Form Data (JSON object) `string`

<dd>

A JSON object containing form data parameters for the query. This allows you to specify complex filtering and pagination options.

Available fields:
* `distinct_id` - Filter by a specific user's distinct ID
* `where` - Filter expression using Mixpanel's filter syntax
* `page` - Page number for pagination (starts at 0)
* `filter_by_cohort` - Filter by cohort ID
* `include_all_users` - Include all users (boolean)
* `session_id` - Session ID from previous query for pagination
* `output_properties` - Array of property names to include in response

*Example for querying a specific user:*

```js
{
  "distinct_id": "user123",
  "output_properties": ["$last_name", "$email", "Total Spent"]
}
```

*Example for filtering by email:*

```js
{
  "where": "properties[\"$email\"] == \"user@example.com\"",
  "page": 0,
  "output_properties": ["$name", "$email", "SubscriptionTier"]
}
```

*Example for pagination:*

```js
{
  "session_id": "abc123",
  "page": 1,
  "output_properties": ["$name", "$email"]
}
```

If this field is left empty, the query will return all users with default properties.

</dd>

### Get Profile Event Activity

Returns the activity feed for specified users. The Query API has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries. This command provides a timeline of events for specific users, useful for understanding user behavior and debugging.

#### Project ID `string`

<dd>

The Mixpanel project ID identifies which project to query for user activity.

*Example:*

```
1234567
```

</dd>

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

#### Distinct IDs (JSON array) `string`

<dd>

A JSON-encoded array of distinct IDs to get activity for. Each distinct ID represents a unique user in your Mixpanel project.

*Example for a single user:*

```js
["user1"]
```

*Example for multiple users:*

```js
["user1", "user2", "user3"]
```

The distinct IDs must exist in your Mixpanel project. If a distinct ID doesn't exist, it will be excluded from the results.

</dd>

#### From Date `string`

<dd>

Specifies the start date for the activity feed in YYYY-MM-DD format.

*Example:*

```
2025-10-01
```

The date is interpreted in UTC timezone.

</dd>

#### To Date `string`

<dd>

Specifies the end date for the activity feed in YYYY-MM-DD format.

*Example:*

```
2025-11-03
```

The date is interpreted in UTC timezone.

</dd>

### Track Events

Tracks one or more events in Mixpanel with associated properties using the Mixpanel API via a proxy. This command allows you to send event data to Mixpanel programmatically from your Appsmith application.

#### Events (Array of Objects) `string`

<dd>

An array of event objects to track. Each object must include an `event` name and a `properties` object. The properties object must include a `token` (your Mixpanel project token) and can include additional properties like `distinct_id` and custom properties.

*Example for tracking a single event:*

```js
[
  {
    "event": "Button Clicked",
    "properties": {
      "token": "abc123xyz456token789",
      "distinct_id": "user@example.com",
      "action": "Clicked Start Button"
    }
  }
]
```

*Example for tracking multiple events:*

```js
[
  {
    "event": "Page View",
    "properties": {
      "token": "abc123xyz456token789",
      "distinct_id": "user@example.com",
      "page": "Dashboard"
    }
  },
  {
    "event": "Button Clicked",
    "properties": {
      "token": "abc123xyz456token789",
      "distinct_id": "user@example.com",
      "button": "Submit"
    }
  }
]
```

Required properties:
* `token` - Your Mixpanel project token (required)
* `distinct_id` - Unique identifier for the user (recommended)

Optional properties can include any custom properties relevant to your event tracking.

</dd>

### List Saved Cohorts

Returns all cohorts in a given project. The JSON formatted return contains the cohort name, id, count, description, creation date, and visibility for every cohort in the project. This command is useful for discovering available cohorts that can be used in other queries.

#### Workspace ID `string`

<dd>

The workspace ID is an optional parameter that specifies which workspace to query for cohorts.

*Example:*

```
9876543
```

If this field is left empty, the query will use the default workspace.

</dd>

### Custom Action

Performs a custom Mixpanel API request that isn't covered by the predefined commands. This allows for advanced operations and accessing additional Mixpanel API endpoints.

<dd>

*Example: Query a Saved Funnel Report*

To query data from a saved funnel report, you can use the Funnels Query API endpoint:

**Endpoint (with query parameters):**
```
GET https://mixpanel.com/api/query/funnels?project_id=1234567&funnel_id=67890&from_date=2025-10-01&to_date=2025-11-03
```

This example retrieves funnel data for a specific saved funnel report within a date range. The funnel_id corresponds to a saved funnel that you've created in the Mixpanel UI.

</dd>

