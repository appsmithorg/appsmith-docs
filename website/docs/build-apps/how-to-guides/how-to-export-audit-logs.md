# How to export audit logs 

This guide shows you how to export audit logs to monitoring tools, which allows you to efficiently track and analyze system events.


## Prerequisites

- Appsmith instance with access to Admin settings.
- Access to the MongoDB URI, either embedded with Appsmith or external.


## Connect to MongoDB

Follow these steps to connect your MongoDB to fetch audit logs:


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


## Process and Format Logs

Follow these steps to fetch audit logs and format the data into a format suitable for monitoring tools:


1. Create a new Workflow in the same workspace where the MongoDB datasource was configured. See [Create workflow](/workflows/tutorials/create-workflow#create-workflow).

2. Create a new MongoDB query to fetch logs from the `auditlog` **Collection** and configure the parameters as needed. 

<dd>

*Example:* To fetch the raw logs displaying detailed application usage information, follow these steps:


- Set the **Command** to `Find documents(s)`, the **Collection** to `auditlog`, and configure the query like this:


```js
{
	event: {
		$in: ["page.viewed", "query.executed"]
	},
	"application.name": {
		$not: { $regex: /untitled/i }
	},
	"application.mode": "view",
	"timestamp": {
		$gte: ISODate({{this.params.fromDate}}),
		$lte: ISODate({{this.params.toDate}})			
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

</dd>

3. In the **Main** JSObject of the workflow, add code to run and fetch the raw logs from the MongoDB query:

<dd>

*Example:* This code defines an `executeWorkflow` method that fetches logs from MongoDB for a specified date range using `fromDate` and `toDate` parameters.

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





4. Add JS code in the same workflow function to format the fetched data into a structure acceptable by your monitoring tool or as required.


<dd>

*Example:* Here we will format the logs into a format accepted by the [Segment API](https://segment.com/docs/connections/sources/catalog/libraries/server/http-api/).

```js
 // highlight-start
export default {
  async executeWorkflow(fromDate, toDate) {
    // Code to fetch Raw logs 
     // highlight-end
      const formatLogs = (rawLogs) => {
      const writeKey = "key";

      return {
        batch: rawLogs.map(item => ({
          type: "track",
          userId: item.user.email,
          event: item.event,
          properties: {
            workspace: item.workspace.name,
            appsmithVersion: item.metadata.appsmithVersion,
            application: item.application.name,
            resource: {
              name: item.resource.name,
              type: item.resource.type
            }
          },
          timestamp: item.timestamp
        })),
        writeKey: writeKey,
        context: {
          device: {
            type: "app",
            name: "Appsmith"
          }
        }
      };
    };
    // Assuming `rawLogs` is available here
    const formattedData = formatLogs(rawLogs);
    console.log("Formatted data:", formattedData);
   // highlight-start
  }
};
  // highlight-end
```

</dd>

## Integrate with monitoring tools 

Follow these steps to send your logs to monitoring tools via API:

1. In the same workflow, create a new API query that sends data to the monitoring platform. 

<dd>

*Example*: To send the formatted raw logs to [Segment](https://segment.com/), you can use:

- URL: `POST https://api.segment.io/v1/batch`

- JSON Body: `{{this.params.data}}`


</dd>


2. In the Main JS code, add the logic to execute the query and send the formatted data to the API.


<dd>

*Example:* To send the formatted raw logs to the Segment API, you can include the following code in your workflow:

```js
 // highlight-start
export default {
  async executeWorkflow(fromDate, toDate) {
    // Code to fetch Raw logs 

    // Formatting code
   // highlight-end
      // Send the formatted data to the Segment API
      try {
        const apiResponse = await segment.run({ data: formattedData });
        console.log("Data sent successfully to Segment API:", apiResponse);
        return true;
      } catch (error) {
        console.error("Error sending data to Segment API:", error.message);
        return false;
      }

    } catch (error) {
      console.error("Error fetching raw logs:", error.message);
    }
   // highlight-start
  }
};
  // highlight-end
```

</dd>


3. If you want to automate this process from an external system, set up a webhook trigger to execute the workflow and pass the required parameters. For instance, you can use the webhook URL to initiate a cron job.

See [Enable Webhook trigger](/workflows/tutorials/create-workflow#enable-webhook-trigger)



## See also

- [Workflows](/workflows)
- [Monitor App Usage](/build-apps/how-to-guides/usage-app)
- [Dsownload data](/reference/appsmith-framework/widget-actions/download#format-and-download-data)