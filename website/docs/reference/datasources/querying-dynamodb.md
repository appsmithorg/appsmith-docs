---
sidebar_position: 4
---
# DynamoDB

This page describes how to connect your application to your DynamoDB database and use queries to manage its content.

## Connect to DynamoDB

To add a DynamoDB datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **DynamoDB** button. Your datasource is created and you are taken to a screen to configure its settings.

Appsmith needs the following parameters for connecting to a DynamoDB instance. All required fields are suffixed with an asterisk (\*):

* **Region:** Select the region where your DynamoDB instance exists.
* **AWS Access Key ID:** Provide your AWS access key. Be sure to use the access key for your IAM user with the set of privileges you want your Appsmith app to have. Read further to learn how to [find your AWS access key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/).
* **AWS Secret Access Key:** Provide your AWS Secret Access Key. This value is accessible from your AWS security credentials page. Read further to learn how to [find your AWS secret key](https://aws.amazon.com/blogs/security/how-to-find-update-access-keys-password-mfa-aws-management-console/).

## Create queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to DynamoDB by selecting the **+ New Query**  button on the DynamoDB datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your DynamoDB datasource. You'll be brought to a new screen where you can write your query. You can query **DynamoDB** tables using any of the [officially supported operations](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations.html).

### Fetch records

Depending on your use-case, there are several operations that can return records from your tables. In the examples below, there is a table named `users` with primary key `team_id` and a sort key `employee_id`.

* **GetItem:** use this operation when you want one specific record, and you know its partition and sort keys.

    ```json
    // Returns a record with "team_id" = "team_1" and "employee_id" = "emp_1"
    {
        "TableName": "users",
        "Key": {
            "team_id": "team_1",
            "employee_id": "emp_1"
        }
    }
    ```

* **BatchGetItems:** use this operation when you want many specific records, and you know their partition and sort keys.

    ```json
    // Returns 2 specific records
    {
        "RequestItems": {
            "users": {
                "Keys": [
                    {
                        "team_id": {
                            "S": "team_1"
                        },
                        "employee_id": {
                            "S": "emp_1"
                        }
                    },
                    {
                        "team_id": {
                            "S": "team_3"
                        },
                        "employee_id": {
                            "S": "emp_4"
                        }
                    }
                ]
            }
        }
    }
    ```

* **Query:** use this operation when you want to pull records that share a partition key based on a filter condition.

    ```json
    // Returns all records with partition key "team_id" = "team_2"
    {
        "TableName": "users",
        "KeyConditionExpression": "team_id = :val",
        "ExpressionAttributeValues": {
            ":val": {
                "S": "team_2"
            }
        }
    }
    ```

* **Scan:** use this operation carefully when you want to search an entire table and return records based on a filter condition. Scanning a table accesses each of its records, and could result in lengthy response times and increased costs on large datasets.

    ```json
    // Scans table "users" for all records
    {
        "TableName": "users"
    }
    ```

    ```json
    // Scans table "users" for records with name "Anneke"
    {
        "TableName": "users",
        "FilterExpression": "#n = :val",
        "ExpressionAttributeNames": {
            "#n": "name"
        },
        "ExpressionAttributeValues": {
            ":val": {
                "S": "Anneke"
            }
        }
    }
    ```

#### Example

> Fetch records from the date `22-11-9` from a table `Issues`, 10 records at a time, and put them into a Table widget `IssueTable` with columns for `name` (sort key), `opened_date` (primary key), and `days_old`.

**Setup:** create a query called `FetchIssues` based on your DynamoDB datasource. This query should use the **Query** operation. Create a [Table widget](/reference/widgets/table) called `IssueTable`.

* In your `FetchIssues` query, add the JSON snippet:

    ```javascript
    {
        "TableName": "Issues",
        {{FetchIssues.data.LastEvaluatedKey?`\"ExclusiveStartKey\": ${JSON.stringify(FetchIssues.data.LastEvaluatedKey)},`:""}}
        "KeyConditionExpression": "opened_date = :dt",
        "ExpressionAttributeValues": {
            ":dt": {
                "S": "2022-11-9"
            }
        }
    }
    ```


* Set the **Page Size** to 10 to limit the number of records you receive at once. To continue setting up pagination for your data, see [pagination](#pagination).

* In the **Table Data** property of your Table widget, bind the result of your query:

  ```javascript
  // in the Table Data property of UsersTable
  {{
    FetchIssues.data.records.map(record => {
      return {
        name: record.fields.Name,
        opened_date: record.fields["Opened date"],
        days_old: record.fields["Days old"]
      }
    })
  }}
  ```

Your table should fill with data when the query is run.

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

With DynamoDB integration, it's possible to create apps that seamlessly connect with the DynamoDB database and provide additional flexibility for updating and analyzing data.

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
