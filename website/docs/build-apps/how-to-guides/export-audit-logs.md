# Export Audit Logs


This guide shows you how to export audit logs, which allows you to share system events with monitoring tools for better tracking and analysis.




## Prerequisites

- Appsmith instance with access to [Admin setting](/getting-started/setup/instance-configuration/admin-settings).
- Access to the MongoDB URI, either embedded with Appsmith or external.


## Connect to MongoDB

Follow these steps to connect your MongoDB to fetch audit logs:




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

## Process and format logs

Follow these steps to fetch audit logs and format the data into a format suitable for monitoring tools:


1. Create a new Workflow in the same workspace where the MongoDB datasource was configured. See [Create workflow](/workflows/tutorials/create-workflow#create-workflow).

2. Create a new MongoDB query to fetch logs from the `auditlog` **Collection** and configure the parameters as needed. 

<dd>

*Example:* To fetch the raw logs displaying detailed application usage information, follow these steps:


- Set the **Command** to `Find documents(s)`, the **Collection** to `auditlog`, and configure the query like this:


```js
{
  "event": {
    "$in": ["page.viewed", "query.executed"]
  },
  "application.name": {
    "$not": { "$regex": /untitled/i }
  },
  "application.mode": "view",
  "timestamp": {
    "$gte": ISODate("{{this.params.fromDate}}"),
    "$lte": ISODate("{{this.params.toDate}}")
  }
}
```

- Set the **Sort** property to `{"timestamp": -1}` to display the most recent logs first.

- Configure the **Projection** property to include only the necessary fields:


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

`{{this.params.data}}` allows you to pass data between the workflow and queries. For more information, see [Pass Parameters to Workflows](/workflows/reference/pass-parameters-to-workflows).



</dd>

3. In the **Main** JSObject of the workflow, add code to run and fetch the raw logs from the MongoDB query:

<dd>

*Example -* This code shows how to use the existing `executeWorkflow` method to fetch logs from MongoDB for a specified date range using `fromDate` and `toDate` parameters.

```js
export default {
  async executeWorkflow(fromDate, toDate) {
    try {
      // Execute the query and get the response
      const response = await rawlogs.run({
        fromDate: fromDate,
        toDate: toDate
      });

      console.log("Response from rawlogs:", response);

      // Extract data from the response
      const rawLogs = response.data;
    } catch (error) {
      console.error("Error fetching raw logs:", error.message);
    }
  }
};
```

</dd>





4. Update the JS code to format the fetched data into the required structure if needed.



## Send data to monitoring tool

Follow these steps to send your logs to monitoring tools via API. This section uses the [Segment API](https://segment.com/docs/connections/sources/catalog/libraries/server/http-api/) as an example.



1. In the same workflow, create a new API query that sends data to the monitoring platform. 

<dd>

*Example*: To send the formatted raw logs to [Segment](https://segment.com/), you can use:

- URL: `POST https://api.segment.io/v1/batch`

- In the body, select JSON and set it to: `{{this.params.data}}`


</dd>


2. In the Main JS code, add the logic to execute the query and send the formatted data to the API.


<dd>

*Example -* To send the formatted raw logs to the Segment API, you can include the following code in your workflow:

```js
export default {
  async executeWorkflow(fromDate, toDate) {
    try {
      // Execute the query and get the response
      const response = await rawlogs.run({
        fromDate: fromDate,
        toDate: toDate
      });

      console.log("Response from rawlogs:", response);

      // Extract data from the response
      const rawLogs = response.data;

      // Send the raw logs data to the Segment API
      try {
        const apiResponse = await segment.run({ data: rawLogs });
        console.log("Data sent successfully to Segment API:", apiResponse);
        return true;
      } catch (error) {
        console.error("Error sending data to Segment API:", error.message);
        return false;
      }
      
    } catch (error) {
      console.error("Error fetching raw logs:", error.message);
    }
  }
};
```

</dd>


3. If you want to automate this process from an external system, set up a webhook trigger to execute the workflow and pass the required parameters. For instance, you can use the webhook URL to initiate a cron job. See [Enable Webhook trigger](/workflows/tutorials/create-workflow#enable-webhook-trigger).



## See also

- [Workflows](/workflows)
- [Monitor App Usage](/build-apps/how-to-guides/usage-app)
- [Download data](/reference/appsmith-framework/widget-actions/download#format-and-download-data)