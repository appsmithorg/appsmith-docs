import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Build a Usage Monitoring App for Appsmith Applications

This page shows how to build an Appsmith app to monitor other Appsmith applications by fetching audit logs and displaying data.

## Prerequisites

- Appsmith instance with access to Admin settings.
- Access to the MongoDB URI, either embedded with Appsmith or external.


## Fetch usage data

Follow these steps to connect your MongoDB and create queries to fetch usage data:


<dd>

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/VORqZSvYo0RPYVSq46Li?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


</dd>


1. In Appsmith, open the **Admin settings** page from the top-right corner.

2. Open the Advanced tab, and copy the **MongoDB URI**. If the URI is not available, open the environment variable file (`docker.env` for Docker or `values.yaml` for Kubernetes) and copy the `APPSMITH_DB_URL`. The URI looks like:




<dd>

The URI looks like:

```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith
```


</dd>


2. Create a new MongoDB datasource using the MongoDB URI:

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

3. Create a new query to fetch logs from the `auditlog` **Collection** and configure the parameters as needed. For more information on how logs are stored, see [Log contents](/advanced-concepts/audit-logs#log-contents).


<dd>


*Example*: To display the number of active end users per month on a Chart widget, set the **Command** as `Aggregate` and configure the query as shown below:




```js
//This query counts the number of unique active users per month and year, excluding anonymous users, and sorts the results by date.
[
  {
    $match: {
      "application.mode": "view",
			"user.email": {
				"$not": {
					"$regex": "anonymousUser",
					"$options": "i"
				}
			}
    }
  },
  {
    $group: {
      _id: {
        month: { $month: { $toDate: "$timestamp" } },
        year: { $year: { $toDate: "$timestamp" } }
      },
      uniqueUsers: { $addToSet: "$user.email" }
    }
  },
  {
    $project: {
      _id: 0,
      month: "$_id.month",
      year: "$_id.year",
      count: { $size: "$uniqueUsers" }
    }
  },
  {
    $sort: { year: 1, month: 1 }
  }
]
```

</dd>


4. Drag a Chart widget and set its **Series Data** property to display the data, like:

<dd>

```js
{{getAppViewersByMonth.data.map((item) => ({ x: Utils.formatDate(item), y: item.count }))}}
```

</dd>

<ZoomImage
  src="/img/endusers.png" 
  alt=""
  caption=""
/>





## Sample App

- [Usage Analytics App](https://app.appsmith.com/app/usage-analytics/dashboard-660d304eca635a1aa4a8e909)

