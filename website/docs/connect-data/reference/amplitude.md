---
title: Amplitude
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Amplitude</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page provides information for connecting Appsmith to Amplitude, which allows you to query analytics data, export event data, search for users, send events, and retrieve chart results from your Amplitude project.

## Connect Amplitude

To connect to Amplitude, you need to authenticate using your Amplitude API credentials. The Amplitude APIs uses Basic Authentication with your API key and Secret key.

### API Key and Secret Key Authentication

To authenticate with Amplitude, you need to provide your Amplitude API key and secret key:

1. Log in to your [Amplitude account](https://amplitude.com/)
2. Click on **Settings** (gear icon in the left sidebar) - this opens a popup menu
3. In the popup menu, click on **Organization Settings**
4. In the **Organization settings** panel, click on **Projects**
5. Select your project from the list
6. In the project settings page, ensure you're on the **General** tab (default tab)
7. In the **Project Identifiers** section, you'll find:
   - **API Key** - Click the "Show" link to reveal your API key
   - **Secret Key** - Click the "Show" link to reveal your secret key
8. Copy both values and enter them in the Appsmith Amplitude datasource configuration

## Query Amplitude

The following section is a reference guide that provides a description of the available commands with their parameters to create Amplitude queries.

### Active and New User Counts

Get active and new user counts from Amplitude Dashboard REST API. This command retrieves user metrics over a specified date range, allowing you to analyze user growth and engagement patterns.

#### Start Date `string`

<dd>

Specifies the start date for the query in YYYYMMDD format. This defines the beginning of the time range for user count analysis.

*Example:*

```
20250101
```

The date is interpreted in your Amplitude project's time zone.

</dd>

#### End Date `string`

<dd>

Specifies the end date for the query in YYYYMMDD format. This defines the end of the time range for user count analysis.

*Example:*

```
20250131
```

The date is interpreted in your Amplitude project's time zone. The end date should be equal to or later than the start date.

</dd>

#### Metric (m) `string`

<dd>

Specifies the metric type to retrieve. This determines whether you want active users or new users.

Valid values:
* `"active"` - Returns active user counts (default)
* `"new"` - Returns new user counts

*Example:*

```
active
```

If not specified, defaults to `"active"`.

</dd>

#### Interval (i) `string`

<dd>

Specifies the time granularity for the aggregation. This determines how the data is grouped over time.

Valid values:
* `"1"` - Daily aggregation (default)
* `"7"` - Weekly aggregation
* `"30"` - Monthly aggregation

*Example:*

```
1
```

If not specified, defaults to `"1"` (daily).

</dd>

### Event Segmentation

Get event segmentation data from Amplitude Dashboard REST API. This command allows you to analyze event data with various metrics, filters, and grouping options to understand user behavior patterns.

#### Event `string`

<dd>

A full event object in JSON format. This specifies which event(s) to analyze and can include optional property filters or group by configurations.

*Example:*

```js
{"event_type":"Table Click"}
```

*Example with filters:*

```js
{"event_type":"Purchase","filters":[{"subprop_type":"event","subprop_key":"amount","subprop_op":"greater","subprop_value":["100"]}]}
```

The event object follows the [Amplitude event format](https://amplitude.com/docs/apis/analytics/dashboard-rest#event-format) specification.

</dd>

#### Start Date `string`

<dd>

Specifies the start date for the query in YYYYMMDD format. This defines the beginning of the time range for event analysis.

*Example:*

```
20250101
```

The date is interpreted in your Amplitude project's time zone.

</dd>

#### End Date `string`

<dd>

Specifies the end date for the query in YYYYMMDD format. This defines the end of the time range for event analysis.

*Example:*

```
20250131
```

The date is interpreted in your Amplitude project's time zone. The end date should be equal to or later than the start date.

</dd>

#### Metric (m) `string`

<dd>

Specifies the metric type to use for analysis. This determines how events are measured and aggregated.

**Non-property metrics:**
* `"uniques"` - Count of unique users (default)
* `"totals"` - Total event count
* `"pct_dau"` - Percentage of daily active users
* `"average"` - Average value

**Property metrics** (requires group by in parameter e):
* `"histogram"` - Distribution of property values
* `"sums"` - Sum of property values
* `"value_avg"` - Average of property values

**Custom formulas:**
* `"formula"` - Custom formula for calculations (supports up to two events; second event needs e2 parameter)

*Example:*

```
uniques
```

If not specified, defaults to `"uniques"`.

</dd>

#### User Type (n) `string`

<dd>

Specifies the user type to include in the analysis. This determines whether to include all users or only active users.

Valid values:
* `"any"` - Includes all users
* `"active"` - Includes only active users (default)

*Example:*

```
active
```

If not specified, defaults to `"active"`.

</dd>

#### Formula `string`

<dd>

Optional custom formula for calculations. This allows you to perform custom calculations on event data.

*Example:*

```
revenue / users
```

This parameter is only used when the metric type is set to `"formula"`.

</dd>

#### Interval (i) `string`

<dd>

Specifies the time granularity for the aggregation. This determines how the data is grouped over time.

Valid values:
* `"1"` - Daily aggregation (default)
* `"7"` - Weekly aggregation
* `"30"` - Monthly aggregation

*Example:*

```
1
```

If not specified, defaults to `"1"` (daily).

</dd>

#### Group By (g) `string`

<dd>

Specifies the property to group results by. This allows you to segment data by user or event properties.

For built-in Amplitude properties, use values like: `version`, `country`, `city`, `region`, `DMA`, `language`, `platform`, `os`, `device`, `device_type`, `start_version`, or `paying`.

For custom user properties, prefix the property name with `gp:`.

*Example for built-in property:*

```
platform
```

*Example for custom user property:*

```
gp:subscription_tier
```

This parameter is available only when there is a single segment. Limit: two group by properties.

</dd>

#### Limit `string`

<dd>

Specifies the maximum number of results to return. This helps limit the response size and focus on the most important data points.

*Example:*

```
100
```

If not specified, defaults to `100`.

</dd>

### Export Data

Download raw event data using Amplitude Export API. This command allows you to export event data in its raw form for a specified time range, useful for data analysis, backups, or integration with other systems.

#### Start Date `string`

<dd>

First hour included in data series, formatted as YYYYMMDDTHH. This specifies the exact hour when the export should begin.

*Example:*

```
20220201T05
```

This represents February 1, 2022 at 5:00 AM in your Amplitude project's time zone.

</dd>

#### End Date `string`

<dd>

Last hour included in data series, formatted as YYYYMMDDTHH. This specifies the exact hour when the export should end.

*Example:*

```
20220201T23
```

This represents February 1, 2022 at 11:00 PM in your Amplitude project's time zone.

The end date should be equal to or later than the start date.

</dd>

### Behavioral Cohorts

Retrieve behavioral cohorts from Amplitude. This command returns a list of all behavioral cohorts in your Amplitude project, including cohort IDs, names, and metadata. Cohorts are groups of users who share specific behavioral characteristics.

This command does not require any parameters. It returns all cohorts available in your project.

### User Search

Search for users by Amplitude ID, Device ID, User ID, or User ID prefix. This command helps you find specific users in your Amplitude project and retrieve their associated identifiers.

#### User `string`

<dd>

The user identifier to search for. This can be:
* **Amplitude ID** - The unique identifier assigned by Amplitude
* **Device ID** - The device identifier
* **User ID** - Your application's user identifier
* **User ID prefix** - A partial User ID to find multiple matching users

*Example for Amplitude ID:*

```
356893043036
```

*Example for Device ID:*

```
0786zXEdyOX1rS3M-P_m1d
```

*Example for User ID:*

```
user123
```

*Example for User ID prefix:*

```
user
```

The search returns matching users with their Amplitude ID and User ID. If no matches are found, an empty array is returned.

</dd>

### Get Chart Results

Get results from an existing chart in Amplitude Dashboard REST API. This command retrieves data from a previously created chart in your Amplitude dashboard, allowing you to programmatically access chart data.

#### Chart ID `string`

<dd>

The unique identifier of the chart to retrieve data from. This is the chart ID from your Amplitude dashboard.

To find your chart ID:
1. Open the chart in your Amplitude dashboard
2. Check the URL - the chart ID is typically visible in the URL or chart settings
3. Alternatively, use the Amplitude API to list your charts

*Example:*

```
abc123def456
```

</dd>

#### Type `dropdown`

<dd>

The type of result to retrieve. This determines the format of the returned data. Select from the dropdown menu.

Available options:
* **Query** - Returns data in JSON format (default)
* **CSV** - Returns data in CSV format

*Example:*

Select **Query** from the dropdown to retrieve data in JSON format, or select **CSV** to export data in CSV format.

</dd>

### Send Events

Send event data to Amplitude via the HTTP API. This command allows you to track events programmatically by sending event data directly to Amplitude's ingestion endpoint.

#### API Key `string`

<dd>

Your Amplitude API key. This is the same API key used for authentication and is required to identify your project when sending events.

To find your API key:
1. Log in to your Amplitude account
2. Navigate to **Settings** → **Projects** → Select your project
3. Go to **Settings** → **Projects** → **General** tab
4. Find the **API Keys** section
5. Copy your API key

*Example:*

```
abc123def456ghi789
```

</dd>

#### Events (JSON Array) `string`

<dd>

A JSON array of event objects. Each event object contains information about the event, including user identification, event type, and optional event properties.

*Example:*

```js
[{"user_id": "user123", "event_type": "click", "event_properties": {"button": "signup"}}]
```

*Example with multiple events:*

```js
[{"user_id": "user123", "event_type": "page_view", "event_properties": {"page": "home"}}, {"user_id": "user123", "event_type": "click", "event_properties": {"button": "signup"}}]
```

Each event object can include:
* `user_id` - Your application's user identifier
* `device_id` - Device identifier (if no user_id)
* `event_type` - The name of the event
* `event_properties` - Optional object with custom event properties
* `user_properties` - Optional object with user properties
* `time` - Optional timestamp (Unix time in milliseconds)

For more details on the event format, refer to the [Amplitude HTTP API documentation](https://amplitude.com/docs/apis/analytics/http-v2).

</dd>

### Custom Action

Performs a custom Amplitude API request that isn't covered by the predefined commands. This allows for advanced operations and accessing additional Amplitude API endpoints.

<dd>

This command enables you to make custom API calls to Amplitude endpoints not covered by the standard commands. You can specify the endpoint, method, headers, query parameters, and body to access additional Amplitude functionality.

When using Custom Action, you'll need to refer to the [Amplitude Analytics APIs documentation](https://amplitude.com/docs/apis/analytics/) for specific endpoint details and required parameters.

*Example: Get Real-time Active Users*

To retrieve active user numbers with 5-minute granularity for the last two days, you can use the Real-time Active Users API endpoint:

**Endpoint:**
```
GET https://amplitude.com/api/2/realtime
```

This endpoint returns active user data for today and yesterday, with time intervals in 5-minute granularity. The response includes:
* `xValues` - Array of time intervals in "HH:mm" format
* `seriesLabels` - Labels for "Today" and "Yesterday"
* `series` - Active user counts for each time interval

</dd>

