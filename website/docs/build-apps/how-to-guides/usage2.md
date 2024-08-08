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


1. In Appsmith, copy the **MongoDB URI** from the [Admin settings](/getting-started/setup/instance-configuration/custom-mongodb-redis#admin-settings) page. If you don't have access, ask your administrator to provide the MongoDB URI.


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


*Example*: To display the number of active apps by month on a Chart widget, set the **Command** as `Aggregate`, and configure the query as shown below:


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

4. Create a new JSObject to format dates using `moment`, converting `{ month: 6, year: 2024 }` to `Jul 2024`.

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

5. Drag a Chart widget and set its **Series Data** property to display the data, like:

<dd>

```js
{{getAppsViewedByMonth.data.map((item) => ({ x: Utils.formatDate(item), y: item.count }))}}
```

</dd>

<ZoomImage
  src="/img/getAppsViewedByMonth.png" 
  alt=""
  caption=""
/>





## Sample App

- [Usage Analytics App](https://app.appsmith.com/app/usage-analytics/dashboard-660d304eca635a1aa4a8e909)

