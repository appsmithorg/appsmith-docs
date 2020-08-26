---
description: >-
  Existing databases can be queried to fetch and update their data directly from
  the Appsmith editor
---

# Connecting to Databases

## Database Connections

Connections to databases can be created in the datasource pane. Contact your database admin for the connection credentials and configure them in the data source section

{% hint style="success" %}
Whitelist the Appsmith **IP address** [18.223.74.85](https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#ElasticIpDetails:PublicIp=18.223.74.85) to connect to your database from our hosted version
{% endhint %}

![Click to expand](../../.gitbook/assets/datasource-connection.png)

## Querying a database

Data can be fetched and updated using queries. Appsmith provides a query interface for each database type. All queries return an array of objects where each object is a row returned by the query and each property in the object is a column. You can read more about querying your specific database below

* [Querying Postgres](querying-postgres.md)
* [Querying MongoDB](querying-mongodb.md)

