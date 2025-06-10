import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitor App Usage

This page shows how to build an Appsmith app to monitor other Appsmith applications by fetching audit logs and displaying data.

## Prerequisites

- Appsmith instance with access to [Admin setting](/getting-started/setup/instance-configuration/admin-settings).
- Access to the MongoDB URI, either embedded with Appsmith or external.


## Fetch usage data

Follow these steps to connect your MongoDB and create queries to fetch usage data:


1. Open the **Admin Settings**, click the settings icon in the top-right corner of your workspace. If the icon is not visible, ensure you are signed in with an administrator account.


2. In **Admin Settings**, go to the **Configuration** section and copy the value of `APPSMITH_DB_URL`.

<dd>

If the URI is not visible, open your environment file (`docker.env` for Docker or `values.yaml` for Kubernetes) and copy the value of `APPSMITH_DB_URL`.


```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith
```

<ZoomImage
  src="/img/mongo-db-new-settings.png" 
  alt=""
  caption=""
/>


</dd>


3. Open your Appsmith application and navigate to the **Datasource** section. Click **+ Create New** and select **MongoDB**.


<dd>

- For external MongoDB, use the provided URI or configure it according to your MongoDB setup.

<dd>

```js
mongodb+srv://username:password@cluster.mongodb.net/appsmith
```

</dd>

- For embedded MongoDB (internal), append `?authsource=appsmith` to the end of the URI, like this:

<dd>

```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith?authsource=appsmith
```

</dd>

For more information on how to configure the MongoDB datasource, see [MongoDB](/connect-data/reference/querying-mongodb#connection-parameters).


</dd>

4. Create a new query using the connected MongoDB datasource. Select the `auditlog` collection to retrieve event data from your Appsmith instance.

<dd>

You can configure the query using filters to track specific types of activity such as:

- For application lifecycle events, use ` application.created`, `application.updated`, `application.deleted`, and `application.deployed` to track when applications are created, modified, deleted, or deployed.

- To keep track of user actions, use `user.logged_in`, `user.logged_out`, and `user.signed_up` to log user sign-ins, sign-outs, and new user registrations.

- To track page activities, use `page.created`, `page.viewed`, `page.updated`, and `page.deleted` to monitor new page creation, views, edits, and deletions.


For more information on how logs are stored, see [Log contents](/advanced-concepts/audit-logs#log-contents).



*Example*: To display the number of active end users per month on a Chart widget, set the **Command** as `Aggregate` and configure the query as shown below:




```js
// This query counts the number of unique active users per month and year, excluding anonymous users, and sorts the results by date.
[
  {
    $match: {
      "application.mode": "view", // Only include records where the application is in view mode
      "user.email": {
        "$not": {
          "$regex": "anonymousUser", // Exclude records with anonymous users
          "$options": "i" // Case-insensitive matching
        }
      }
    }
  },
  {
    $group: {
      _id: {
        month: { $month: { $toDate: "$timestamp" } }, // Extract month from timestamp
        year: { $year: { $toDate: "$timestamp" } } // Extract year from timestamp
      },
      uniqueUsers: { $addToSet: "$user.email" } // Group by unique user emails
    }
  },
  {
    $project: {
      _id: 0,
      month: "$_id.month",
      year: "$_id.year",
      count: { $size: "$uniqueUsers" } // Count the number of unique users
    }
  },
  {
    $sort: { year: 1, month: 1 } // Sort results by year and month in ascending order
  }
]
```

</dd>


5. Drag a Chart widget and set its **Series Data** property to display the data, like:

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

- [Usage Overview](https://app.appsmith.com/app/usage-analytics/dashboard-660d304eca635a1aa4a8e909): Get platform activity for the last 30 days.
- [Monthly Usage](https://app.appsmith.com/app/usage-analytics/monthly-trends-660d304eca635a1aa4a8e90a): A page that shows detailed app usage for the month.
- [Raw Logs](https://app.appsmith.com/app/usage-analytics/raw-logs-660d304eca635a1aa4a8e908): A page that displays raw logs in a tabular format.
