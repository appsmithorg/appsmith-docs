---
sidebar_position: 4
---
# DynamoDB

DynamoDB is a serverless, fully managed, key-value NoSQL database designed to handle high-performance applications of any size

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

On Appsmith, it's pretty straightforward to establish a connection with any datasource, including DynamoDB. With this integration, you can perform different operations using a custom UI built on Appsmith, with minimal configurations.

## Create DynamoDB Datasource

To add an **DynamoDB** datasource, navigate to **Explorer** >> Click plus sign **(+)** next to **Datasources** >> Select **DynamoDB** under **Databases.**

<figure>
  <object data="https://www.youtube.com/embed/LNNhWh30wK4?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Create DynamoDB Datasource</i></figcaption>
</figure>

## Connection Settings

Appsmith needs the following parameters for connecting to a DynamoDB instance:

![How to create DynamoDB Datasource?](</img/Screenshot_2022-07-21_at_3.02.48_PM_(1).png>)

:::tip
All required fields are suffixed with an asterisk (\*).
:::

* **Region:** Select the region where your DynamoDB instance exists
* **AWS Access Key Id:** AWS access key that enables a program, script, or developer to access the resources on my AWS account programmatically.
* **AWS Secret Access Key:** Secret Access keys are like your password. This value is accessible from your AWS security credentials page.

You can get all the above details from your AWS account:

* [How to get the AWS access key?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)
* [How to get the AWS secret key?](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/)
* [AWS DynamoDB regions/endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)

## Key Concepts

When working with DynamoDB, you should be familiar with the following fundamental concepts:

[**Tables**](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html): Tables are a collection of items.

[**Items**](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html): In a table, an item is a single data record. The table's defined primary key serves as a unique identifier for each item in the table.

[**Attributes**](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DeclarativeTagsList.html): Attributes are pieces of data attached to a single item.

[**Partition key**](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html): A simple primary key, composed of one attribute known as the partition key. Attributes in DynamoDB are similar in many ways to fields or columns in other database systems.

[**Composite primary key**](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/):  This is a combination of partition key, and sort key, this type of key is composed of two attributes. The first attribute is the partition key, and the second attribute is the sort key. DynamoDB uses the partition key value as input to an internal hash function.

:::info
No matter what type of primary key you choose, the primary key must be unique for each item in the table. You can [read more](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/) about it.
:::

## Create Queries

You can add queries to **DynamoDB** datasource by selecting the **New API +** button available on the datasource page or by navigating to **Explorer >>** Click plus sign **(+)** next to **Queries/JS >>** Select the **datasource name (DynamoDB)**. You can query **DynamoDB** databases using any of the [officially supported operations](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API\_Operations\_Amazon\_DynamoDB.html).

### Query

You can create queries to fetch, update and delete data from a datasource using the Appsmith query editor. Here we have listed some of the most basic operations to get started with using a DynamoDB API:

| Query Name                                                       | Description                                                                                     |   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | - |
| [**ListTables**](./querying-dynamodb.md#listtables)       | ListTables command gets a list of all the tables that are currently accessible at the endpoint. |   |
| [**DescribeTable**](./querying-dynamodb.md#describetable) | DescribeTable command returns metadata about the table that is queried using the JSON body.     |   |
| [**GetItem**](./querying-dynamodb.md#getitem)              | GetItem command retrieves a single item on the basis of its primary key.                        |   |
| [**PutItem**](./querying-dynamodb.md#putitem)              | PutItem command is used to insert or replace an entire item object.                             |   |
| [**UpdateItem**](./querying-dynamodb.md#updateitem)            | UpdateItem can be used for conditionally updating parts of an item.                             |   |

You can check the [Query Settings Guide](/core-concepts/data-access-and-binding/querying-a-database/query-settings.md) to learn more about queries.

### ListTables

The [ListTables](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API\_ListTables.html) command can be used to retrieve all the tables available at the current endpoint. This request can be carried out even without a body.

* Click on the **+** icon next to the **queries/js** and choose your DynamoDB datasource.
* From the Commands drop-down, Select the method **`List Tables`**.
* Next, add your code in the body section.

A sample request looks like this:

```
{
   "ExclusiveStartTableName": "string",
   "Limit": number
}
```

:::info
The output from `ListTables` is paginated, with each page returning a **maximum of 100 table names.**
:::

### DescribeTable

The [DescribeTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API\_DescribeTable.html) command returns metadata about the table that is queried using the JSON body. It returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.

* Click on the **+** icon next to the **queries/js** and choose your DynamoDB datasource.
* From the Commands drop-down, Select the method **`Describe Tables`**.
* Next, add your code in the body section.

A sample request will look like this:

```javascript
{
    "TableName" : "four"
}
```

### GetItem

The [`GetItem` ](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API\_GetItem.html)operation returns a set of attributes for the item with the given primary key. If there is no matching item, `GetItem` does not return any data, and there will be no `Item` element in the response.

* Click on the **+** icon next to the **queries/js** and choose your DynamoDB datasource.
* From the Commands drop-down, Select the method **`GetItem`**.
* Next, add your code in the body section.

The request would use this specified type in the JSON body. In the following example, the primary key is called _`pkey`_ and has a value of `a`.

```javascript
{
    "TableName" : "four",
    "Key": {
        "pkey" : "a"
    }
}
```

### PutItem

The [PutItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API\_PutItem.html) command is used to insert or replace an entire item object. This request can be configured to return with the inserted/updated item using the `ReturnValues` parameter.

:::info
If an item with the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item.
:::

* Click on the **+** icon next to the **queries/js** and choose your DynamoDB datasource.
* From the Commands drop-down, Select the method **`PutItem`**.
* Next, add your code in the body section.

Here, we use the PutItem command for a simple insert.

```javascript
{
    "TableName" : "four",
    "Item" : {
        "pkey" : {
            "S" : "a"
        },
        "name": {
            "S" : "Irene"
        },
        "friends": {
            "SS" : ["Sherlock"]
        }
    }
}
```

### UpdateItem

The [UpdateItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API\_UpdateItem.html) can be used for conditionally updating parts of an item. Edits an existing item's attributes or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also return the item's attribute values in the same `UpdateItem` operation using the `ReturnValues` parameter.

* Click on the **+** icon next to the **queries/js** and choose your DynamoDB datasource.
* From the Commands drop-down, Select the method **`UpdateItem`**.
* Next, add your code in the body section.

A sample request might have the following body:

```javascript
{
    "TableName" : "four",
    "Key" : {
        "pkey" : {
            "S" : "a"
        }
    },
    "UpdateExpression" : "set friends = :new_friends",
    "ExpressionAttributeValues" : {
        ":new_friends" : {
            "SS" : ["Mycroft", "Watson", "Irene"]
        }
    },
    "ReturnValues" : "ALL_NEW"
}
```

With DynamoDB integration, it is possible to create apps that seamlessly connect with the DynamoDB database and provide additional flexibility for updating and analyzing data.

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
