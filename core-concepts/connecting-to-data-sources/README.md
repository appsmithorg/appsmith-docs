# Connecting to Data Sources

Rich applications require real data to build intuitive UI, perform data transformations & write business correct logic. Appsmith can talk to your data in the following ways

* [Query your database directly](connecting-to-databases.md)
* [Hit a REST API](querying-a-database/connect-to-apis.md)

{% hint style="warning" %}
Before connecting to a data source, you must whitelist the IP address of the Appsmith deployment on your database instance or VPC

**18.223.74.85** and **3.131.104.27** are the IP addresses of the Appsmith cloud instances that need to be whitelisted

This is a guide on how to [whitelist appsmith on AWS.](../../how-to-guides/aws-whitelist.md)
{% endhint %}

## Security

Appsmith safely encrypts all your data source credentials and stores them securely. Appsmith also does not store any data returned from your data sources and acts only as a proxy layer to orchestrate the execution of Queries. Since Appsmith is an open-source framework, you can [deploy it on-premise](../../setup/), and audit it to ensure none of your data leaves your VPC. Read more about [Security](../../security.md)

## Sample Data

If you would like to play around with the platform before connecting your data, we provide mock data sources that you can use.

### Sample DB

You can connect to 2 sample datasets

1. Movies: This is a sample mongoDb database with a collection called movies
2. Users: This is a sample PostgreSQL database with a table called users

The data in the mock database gets reset every 24 hours and is common for all users so it may contain some unexpected values.

![](../../.gitbook/assets/add-mock-db%20%283%29.gif)

### Sample API

You can import the below CURL commands to execute these APIs

#### Fetch Users

```bash
curl --location --request GET 'https://mock-api.appsmith.com/users?page=1'
```

#### Update Users

```bash
curl --location --request PUT 'https://mock-api.appsmith.com/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "status" : "Approved"
}'
```

