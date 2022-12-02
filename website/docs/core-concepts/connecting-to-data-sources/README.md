# Connecting to Datasource

## **Outline**

**Introduction** 

**Prerequisites​**

Before you begin, you'll need to create an account on Appsmith Cloud, or you can self-host Appsmith locally or on a hosting platform of your choice.

**How to connect to a datasource**

Explain how to connect to a datasource

**APIs**
* Information about APIs
* List of supported APIs. 
* Sample API​ (Explain how to use sample API)

**Databases**
* Information about databases
* List of supported Database.
* Sample DB​ (Explain how to use sample DB, both movies and users)

**Security**

**Internal database​(LocalDB)**

Explain how to connect with a database running on the same machine, cross-link to self-hosting. 

**Conclusion**

**Cross-link to Datasource Errors**(Troubleshooting)

-------

## Main Draft

Rich applications require real data to build intuitive UI, perform data transformations & write business-correct logic. Appsmith can talk to your data in the following ways

* [Query your database directly](connecting-to-databases)
* [Hit a REST API](authentication/)

:::tip
Before connecting to a data source, you must whitelist the IP address of the Appsmith deployment on your database instance or VPC

**18.223.74.85** and **3.131.104.27** are the IP addresses of the Appsmith cloud instances that need to be whitelisted

This is a guide on how to [whitelist appsmith on AWS.](learning-and-resources/how-to-guides/aws-whitelist)
:::

## Security

Appsmith safely encrypts all your data source credentials and stores them securely. Appsmith also does not store any data returned from your data sources and acts only as a proxy layer to orchestrate the execution of Queries. Since Appsmith is an open-source framework, you can [deploy it on-premise](/getting-started/setup/), and audit it to ensure none of your data leaves your VPC.

Read more about [Security](/product/security)

## Sample Data

If you would like to play around with the platform before connecting your data, we provide mock data sources that you can use.

### Sample DB

You can connect to 2 sample datasets

1. Movies: This is a sample [MongoDB](/reference/datasources/querying-mongodb/) database with a collection called movies
2. Users: This is a sample [PostgreSQL](/reference/datasources/querying-postgres) database with a table called users

:::note
The **data** in the **mock database** gets **reset** every **24 hours** and is **common** for **all users** so it may contain **some unexpected values**.
:::

![](</img/add_mock_db_(3).gif>)

### Sample API

You can import the below CURL commands to execute these [APIs](authentication/)

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
