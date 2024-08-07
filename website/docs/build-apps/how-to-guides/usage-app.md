# Build a Usage Monitoring App for Appsmith Applications

This page shows you how to build an Appsmith app to monitor other Appsmith applications, allowing you to display data such as the number of applications created, user interactions with the apps, active applications based on monthly usage, and more.

## Prerequisites

- Appsmith instance with admin access.
- Access to the MongoDB URI, either embedded with Appsmith or external.


## Connect to MongoDB

Follow these steps to connect your app to MongoDB to fetch the usage data:


<dd>

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/VORqZSvYo0RPYVSq46Li?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


</dd>


1. In Appsmith, open the admin settings page from the top-right corner.

2. Open the Advanced tab, and copy the **MongoDB URI**. If the URI is not available, open the environment variable file and copy the `APPSMITH_DB_URL`. The URI looks like:

<dd>

```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith
```



If MongoDB is external, retrieve the URI from your external MongoDB setup or configuration file.


</dd>

3. Create a new MongoDB datasource using the MongoDB URI with the following configurations:

<dd>

- Set the **Use Mongo Connection String URI** parameter to **Yes**.

- Configure the URI by adding `?authsource=appsmith` at the end of the URI, like this:


```js
mongodb://appsmith:Oabc123@localhost:27017/appsmith?authsource=appsmith

// Breakdown:
// mongodb://       - MongoDB scheme
// appsmith         - Username
// Oabc123          - Password
// localhost:27017  - Server address and port
// /appsmith        - Database name
// ?authsource=appsmith - Authentication database
```



</dd>

4. Test and save the datasource. If the URI method does not work, you can manually add all the details by selecting No in the **Use Mongo Connection String URI** setting property.





## Configure the query

Follow this section to configure your MongoDB query:

1. Create a new query, set the **Command** based on your use case, and select `auditlog` as the **Collection**.


2. Configure the query parameters based on your use case:

<dd>

*Example 1:* To Get New Applications Created in the Last Month

```json
{
  event: "application.created",
  "resource.type": "Application",
  "timestamp": {
    $gte: ISODate('{{moment().subtract(1, 'month')}}')
  }
}
```

*Example 2:* To Get Apps Viewed by Month


```json
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


Format 2

### Example

