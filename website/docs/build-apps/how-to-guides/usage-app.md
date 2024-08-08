import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Build a Usage Monitoring App for Appsmith Applications

This page shows how to build an Appsmith app to monitor other Appsmith applications by fetching audit logs and displaying data.

## Prerequisites

- Appsmith instance with access to Admin settings.
- Access to the MongoDB URI, either embedded with Appsmith or external.


## Connect to MongoDB

Follow these steps to connect your app to MongoDB to fetch the usage data:


<dd>

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/VORqZSvYo0RPYVSq46Li?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


</dd>


1. In Appsmith, open the **Admin settings** page from the top-right corner.

2. Open the Advanced tab, and copy the **MongoDB URI**. If the URI is not available, open the environment variable file (`docker.env` for Docker or `values.yaml` for Kubernetes) and copy the `APPSMITH_DB_URL`. The URI looks like:








<dd>

```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith
```



</dd>

3. Create a new MongoDB datasource using the MongoDB URI:

<dd>

- For external MongoDB, use the provided URI or configure it according to your MongoDB setup.

- For embedded MongoDB (internal), append `?authsource=appsmith` to the end of the URI, like this:

<dd>

```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith?authsource=appsmith
```

</dd>

For more information on how to configure the MongoDB datasource, see [MongoDB](/connect-data/reference/querying-mongodb#connection-parameters).


</dd>

4. *Test* and *Save* the datasource. 




## Configure the query

Follow this section to configure your [MongoDB query](/connect-data/reference/querying-mongodb#query-mongodb):


1. Create a new query using `auditlog` as the **Collection** and configure other parameters as needed. For more information on how logs are stored, see [Log contents](/advanced-concepts/audit-logs#log-contents).

<dd>


*Examples*

<Tabs>
  <TabItem value="apple" label="Number of New Apps Created" default>
 To get the number of new applications created in the last month:


1. Set `distinct` as the **Command** , `auditlog` as the **Collection**, and configure the query like this:


<dd>

```js
//This query retrieves a list of applications created in the last month.
{
  event: "application.created",
  "resource.type": "Application",
  "timestamp": {
    $gte: ISODate('{{moment().subtract(1, 'month')}}')
  }
}
```

</dd>

2. Set the **Key** to `resource._id` to identify each unique application by its resource ID.

3. To display the number of applications created, set the **Text** property of the Text widget to:


<dd>

```js
{{getNewApplicationsCreated.data.values.length}}
```

</dd>


  </TabItem>
  <TabItem value="orange" label="Monthly Active Apps">

To display the number of active apps by month on a Chart widget, follow these steps:


<ZoomImage
  src="/img/getAppsViewedByMonth.png" 
  alt=""
  caption=""
/>

1. Set `Aggregate` as the **Command** , `auditlog` as the **Collection**, and configure the query like this:

<dd>

```js
//This query aggregates data to count the number of applications viewed each month, grouping by month and year.
[
  {
    $match: {
      "application.mode": "view",
      "resource.type": "Page"
    }
  },
  {
    $group: {
      _id: {
        month: { $month: { $toDate: "$timestamp" } },
        year: { $year: { $toDate: "$timestamp" } }
      },
      uniqueApplications: { $addToSet: "$application._id" }
    }
  },
  {
    $project: {
      _id: 0,
      month: "$_id.month",
      year: "$_id.year",
      count: { $size: "$uniqueApplications" }
    }
  },
  {
    $sort: { year: 1, month: 1 }
  }
]
```
</dd>

2. Create a new JSObject to format dates using `moment`, converting `{ month: 6, year: 2024 }` to `Jul 2024`.

<dd>

```JS
export default {
	formatDate: (item = { month: 6, year: 2024 }) => {
		return moment(`${item.month}/01/${item.year}`)
			.format('MMM\'YY');
	}
}
```
</dd>

3. Drag a Chart widget and set its **Series Data** property to display the data, like:

<dd>

```js
{{getAppsViewedByMonth.data.map((item) => ({ x: Utils.formatDate(item), y: item.count }))}}
```

</dd>


  </TabItem>
  <TabItem value="banana" label="Raw Logs">
To access the raw logs displaying detailed application usage information, follow these steps:


<ZoomImage
  src="/img/rawlogs.png" 
  alt=""
  caption=""
/>


1. Set `Find documents(s)` as the **Command**, `auditlog` as the **Collection**, and configure the query like this:

<dd>

```js
{
// This query retrieves logs for "page.viewed" or "query.executed" events, excluding untitled applications, within a selected date range and application mode.
    event: {
        $in: ["page.viewed", "query.executed"]
    },
    // Exclude documents where the application name contains "untitled" (case-insensitive)
    "application.name": {
        $not: { $regex: /untitled/i }
    },
    // Match documents where the application mode is the selected option from RadioGroup1
    "application.mode": "{{RadioGroup1.selectedOptionValue}}",
    // Filter documents where the timestamp is within the selected date range
    "timestamp": {
        $gte: ISODate('{{FromDate.selectedDate}}'),
        $lte: ISODate('{{ToDate.selectedDate}}')			
    }
}
```


</dd>

2. Set the **Sort** property to `{"timestamp": -1}` to display the most recent logs first.

3. Configure the **Projection** property to include only the necessary fields:

<dd>

```js
{ 
  event: 1, 
  "workspace.name": 1, 
  "resource.name": 1, 
  "resource.type": 1, 
  "application.mode": 1, 
  "application.name": 1, 
  "user.name": 1, 
  "user.email": 1, 
  timestamp: 1, 
  metadata: 1 
}
```

</dd>

4. Create a new JSObject to format and stringify unique audit logs by generating a unique key and converting the data to JSON.


<dd>

```js
export default {
    // Function to get unique audit logs
	getUniqueAuditLogs: () => _.uniqBy(getAuditLogs.data, this.generateUniqueKey),
    
    // Helper function to generate a unique key for each log entry
	generateUniqueKey: (item) => `${item.event}_${item.workspace.name}_${item.application.name}_${item.user.email}_${moment(item.timestamp * 1000).format("DD/MM/YYYY HH:mm")}`,
    
    // Function to get a stringified JSON representation of the unique audit logs
	getStringifiedJSON: () => JSON.stringify(logsUtils.getUniqueAuditLogs().map(item => ({
		timestamp: item.timestamp,
		workspace: item.workspace?.name,
		user: item.user?.email,
		application: item.application?.name,
		resource: item.resource?.page
	})))
}
```

</dd>

5. Drag a Table widget and set its **Table Data** property to display the data, like:

<dd>

```js
{{logsUtils.getUniqueAuditLogs()}}
```

</dd>

  </TabItem>
</Tabs>

</dd>

## Sample App

- [Usage Analytics App](https://app.appsmith.com/app/usage-analytics/dashboard-660d304eca635a1aa4a8e909)

