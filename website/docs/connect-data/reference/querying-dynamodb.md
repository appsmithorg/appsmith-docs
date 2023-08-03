---
sidebar_position: 4
description: Connect Appsmith to a DynamoDB database and create queries.
---
# DynamoDB

This page provides information for connecting your application to your DynamoDB database and for using queries to manage its content.

## Connect DynamoDB

The following section is a reference guide that provides a complete description of all the parameters to connect to a DynamoDB database.

<figure>
  <img src="/img/dynamodb_config.png" style={{width: "100%", height: "auto"}} alt="Configuring a DynamoDB datasource." />
  <figcaption align="center"><i>Configuring a DynamoDB datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Region</b></dt>
  <dd>
  
The region where your DynamoDB instance is hosted.

  </dd>

  <dt><b>AWS Access Key ID</b></dt>
  <dd>

The AWS access key used to identify your IAM user for DynamoDB. Be sure to use the access key for your IAM user with the set of privileges you want your Appsmith app to have. For more information on usimg an AWS access key, see [Create Access Key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/).

  </dd>

  <dt><b>AWS Secret Access Key</b></dt>
  <dd>

The secret value used to authenticate your queries to DynamoDB. This value is accessible from your AWS security credentials page. To learn more about your AWS Secret Key, see the [AWS Security Blog](https://aws.amazon.com/blogs/security/how-to-find-update-access-keys-password-mfa-aws-management-console/).

  </dd>
</dl>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create DynamoDB queries.

<figure>
  <img src="/img/dynamodb_query.png" style={{width: "100%", height: "auto"}} alt="Configuring a DynamoDB scan query." />
  <figcaption align="center"><i>Configuring a DynamoDB scan query.</i></figcaption>
</figure>

### BatchGetItem

This operation fetches many specific records by their partition and sort keys. For example, the following fetches two specific records by their sort and partition keys:

    ```json
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

For more information, see the AWS docs for [BatchGetItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html).

### BatchWriteItem

This operation creates and deletes multiple items in one or more tables. For example, the following creates a new record and deletes an existing one:

    ```json
    {
        "RequestItems": {
            "users": [
                {
                    "PutRequest": {
                        "Item": {
                            "team_id" : {
                                "S" : "team_1"
                            },
                            "employee_id": {
                                "S" : "emp_1"
                            },
                            "name": {
                                "S" : "Aman"
                            }
                        }
                    }
                },
                {
                    "DeleteRequest": {
                        "Key" : {
                            "team_id" : {
                                "S" : "team_1"
                            },
                            "employee_id" : {
                                "S" : "emp_3"
                            }
                        }
                    }
                }
            ]
        }
    }
    ```

For more information, see the AWS docs for [BatchWriteItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html).

### CreateBackup

This operation creates a backup with a given name of an entire table. For example, the following creates a backup of the table `users` under the name `usersBackup`:

    ```json
    {
        "BackupName": "usersBackup",
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [CreateBackup](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html).

### CreateGlobalTable

This operation creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables that share a name in the specified Regions. For example, the following creates a global replica of the `users` table in the `us-east-1` region:

    ```json
    {
        "GlobalTableName": "users",
        "ReplicationGroup": [ 
            { 
                "RegionName": "us-east-1"
            }
        ]
    }
    ```

For more information, see the AWS docs for [CreateGlobalTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html).

### CreateTable

This operation creats a new DynamoDB table. For example the following creates a table called `users` with three columns, where `team_id` is the partition key and `emp_id` is the sort key:

    ```json
    {
        "AttributeDefinitions": [
            {
                "AttributeName": "name",
                "AttributeType": "S"
            },
            {
                "AttributeName": "emp_id",
                "AttributeType": "S"
            },
            {
                "AttributeName": "team_id",
                "AttributeType": "S"
            }
        ],
        "TableName": "users",
        "KeySchema": [
            {
                "AttributeName": "team_id",
                "KeyType": "HASH" // partition key
            },
            {
                "AttributeName": "emp_id",
                "KeyType": "RANGE" // sort key
            }
        ],
        "ProvisionedThroughput": {
            "ReadCapacityUnits": 5,
            "WriteCapacityUnits": 5
        }
    }
    ```

For more information, see the AWS docs for [CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html).

### DeleteBackup

This operation deletes an existing backup of a table. The backup is identified by its Amazon Resource Name (ARN), which you can find with a ListBackups query.

For example, the following deletes a backup with ARN `arn:aws:dynamodb:us-east-2:123456789012:table/users`:

    ```json
    {
        "BackupArn": "arn:aws:dynamodb:us-east-2:123456789012:table/users"
    }
    ```

For more information, see the AWS docs for [DeleteBackup](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html).

### DeleteItem

This operation deletes an existing record, identified by its primary and sort keys. For example, the following deletes a record with keys `team_id = team_1` and `employee_id = emp_3` from the table `users`:

    ```json
    {
        "TableName" : "users",
        "Key" : {
            "team_id" : {
                "S" : "team_1"
            },
            "employee_id" : {
                "S" : "emp_3"
            }
        }
    }
    ```

For more information, see the AWS docs for [DeleteItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html).

### DeleteTable

This operation deletes an existing table. For example, the following deletes an existing table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [DeleteTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html).

### DescribeBackup

This operation returns metadata about an existing table backup. The backup is identified by its Amazon Resource Name (ARN), which you can find with a ListBackups query. For example, the following returns information about a backup with ARN `arn:aws:dynamodb:us-east-2:123456789012:table/users`:

    ```json
    {
        "BackupArn": "arn:aws:dynamodb:us-east-2:123456789012:table/users"
    }
    ```

For more information, see the AWS docs for [DescribeBackup](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html).

### DescribeContinuousBackups

This operation checks the status of continuous backups and point in time recovery on the specified table. For example, the following checks the status of a table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeContinuousBackups](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html).

### DescribeContributorInsights

This operation returns information about contributor insights for a given table or global secondary index. For example, the following returns contributor insights for a table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeContributorInsights](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html).

### DescribeEndpoints

This operation returns information about your regional AWS endpoint. This request must be sent with an empty body.

For more information, see the AWS docs for [DescribeEndpoints](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html).

### DescribeGlobalTable

This operation returns information about a given global table, identified by its name. For example, the following returns information about a global table `users`:

    ```json
    {
        "GlobalTableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeGlobalTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html).

### DescribeGlobalTableSettings

This operation returns information about the region-specific settings of a global table, identified by its name. For example, the following returns settings data about a global table `users`:

    ```json
    {
        "GlobalTableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeGlobalTableSettings](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html).

### DescribeLimits

This operation returns the current provisioned capacity quotas for your AWS account in a region, both for the region as a whole and for any one DynamoDB table in that region. This request must be sent with an empty body.

For more information, see the AWS docs for [DescribeLimits](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html).

### DescribeTable

This operation returns information about a given table, identified by its name. For example, the following returns information about a table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html).

### DescribeTableReplicaAutoScaling

This operation returns information about the auto scaling settings of all replicas of a given global table, identified by its name. For example, the following shows the auto scaling settings for replicas of a global table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeTableReplicaAutoScaling](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html).

### DescribeTimeToLive

This operation returns information about the Time to Live (TTL) status of a given table, identified by its name. For example, the following shows TTL status for a table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [DescribeTimeToLive](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html).

### GetItem

Use this operation when you want one specific record, and you know its partition and sort keys. For example, the following returns a record where `team_id = "team_1"` and `employee_id = "emp_1"`:

    ```json
    {
        "TableName": "users",
        "Key": {
            "team_id": "team_1",
            "employee_id": "emp_1"
        }
    }
    ```

For more information, see the AWS docs for [GetItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html).

### ListBackups

This operation returns a list of DynamoDB backups associated with your AWS account. The results can be filtered to certain tables or time ranges. For example, the following returns a list of all backups of a table `users`:

    ```json
    {
        "BackupType": "ALL",
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [ListBackups](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html).

### ListContributorInsights

This operation returns a list of `ContributorInsightsSummary` entries for a table and all of its global secondary indexes. For example, the following returns a list of `ContributorInsightsSummary` entries for a table `users`:

    ```json
    {
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [ListContributorInsights](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html).

### ListGlobalTables

This operation returns a list of your global tables that have a replica in the specified region. For example, the following returns a list of global tables for the region `us-east-1`:

    ```json
    {
        "RegionName": "us-east-1"
    }
    ```

For more information, see the AWS docs for [ListGlobalTables](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html).

### ListTables

This operation returns an array of table names that are associated with your AWS account and endpoint. This request does not require a body, however there are optional parameters available for pagination.

For more information, see the AWS docs for [ListTables](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html).

### ListTagsOfResource

This operation returns a list of all tags for a given DynamoDB resource, identified by its Amazon Resource Name (ARN). For example, the following returns a list of tags for a resource with ARN `arn:aws:dynamodb:us-east-2:123456789012:table/users`:

    ```json
    {
        "ResourceArn": "arn:aws:dynamodb:us-east-2:123456789012:table/users"
    }
    ```

For more information, see the AWS docs for [ListTagsOfResource](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html).

### PutItem

This operation creates a new item, or replaces an old item with a new one. If an item with the same primary key already exists in the table, the new item completely replaces the existing item. For example, the following creates or replaces an item in a table `users` where the partition key is `team_id = "team_1"` and the sort key is `employee_id = "emp_1"`:

    ```json
    {
        "TableName": "users",
        "Item": {
            "team_id" : {
                "S" : "team_1"
            },
            "employee_id": {
                "S" : "emp_1"
            },
            "name": {
                "S" : "Aman"
            }
        }
    }
    ```

For more information, see the AWS docs for [PutItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html).

### Query

This operation fetches records that share a partition key based on a filter condition. For example, the following returns all records with partition key `team_id = "team_2"`:

    ```json
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

For more information, see the AWS docs for [Query](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html).

### RestoreTableFromBackup

This operation creates a new table from an existing backup, identified by its Amazon Resource Name (ARN). For example, the following creates a new table `usersRestored` from a backup with ARN `arn:aws:dynamodb:us-east-2:123456789012:table/users`:

    ```json
    {
        "BackupArn": "arn:aws:dynamodb:us-east-2:123456789012:table/users",
        "TargetTableName": ""
    }
    ```

For more information, see the AWS docs for [RestoreTableFromBackup](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html).

### RestoreTableToPointInTime

This operation creates a new table that is a restoration of a given table from a given point in time. The point in time is a timestamp that must be between 5 minutes and 35 days prior to the time of the request. For example, the following creates a new table `usersRestored` from the state of an original table `users` at a specific time:

    ```json
    {
        "RestoreDateTime": 1691100258,
        "SourceTableName": "users",
        "TargetTableName": "usersRestored"
    }
    ```

For more information, see the AWS docs for [RestoreTableToPointInTime](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html).

### Scan

This operation searches an entire table and return records based on a filter condition. Scanning a table accesses every one of its records, and could result in lengthy response times and increased costs on large datasets. For example, the following query returns every record in the `users` table:

    ```json
    {
        "TableName": "users"
    }
    ```

The following query checks every record in the `users` table and returns records where its `name` is `Anneke`:

    ```json
    {
        "TableName": "users",
        "FilterExpression": "#n = :val",
        "ExpressionAttributeNames": { // "name" is a reserved keyword, so this key sets an alias
            "#n": "name"
        },
        "ExpressionAttributeValues": {
            ":val": {
                "S": "Anneke"
            }
        }
    }
    ```

For more information, see the AWS docs for [Scan](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html).

### TagResource

This operation associates a set of tags with a DynamoDB resource, identified by its Amazon Resource Name (ARN). For example, the following associates a `department` key-value pair as a tag on a table `users`:

    ```json
    {
   "ResourceArn": "arn:aws:dynamodb:us-east-2:123456789012:table/users",
   "Tags": [ 
      { 
         "Key": "department",
         "Value": "marketing"
      }
   ]
}
    ```

For more information, see the AWS docs for [TagResource](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html).

### TransactGetItems

This operation retrieves multiple items from one or more tables in a single account and region. The request contains a `TransactItems` array, where each element describes a single `Get` operation. If any of the operations within the transaction fail, then the entire query is rejected and no data is returned. For example, the following fetches an item from a table `users` and another item from a table `locations`:

    ```json
    {
        "TransactItems": [ 
            { 
                "Get": {
                    "TableName": "users",
                    "Key" : {
                        "team_id" : {
                            "S" : "team_1"
                        },
                        "employee_id" : {
                            "S" : "emp_1"
                        }
                    },
                }
            },
            { 
                "Get": {
                    "TableName": "locations",
                    "Key" : {
                        "name" : {
                            "S" : "Main Office"
                        },
                        "address" : {
                            "S" : "123 Maple St."
                        }
                    },
                }
            }
        ]
    }
    ```

For more information, see the AWS docs for [TransactGetItems](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html).

### TransactWriteItems

This operation retrieves multiple items from one or more tables in a single account and region. The request contains a `TransactItems` array, where each element describes a single `Get` operation. If any of the operations within the transaction fail, then the entire query is rejected and no data is returned. For example, the following fetches an item from a table `users` and another item from a table `locations`:

    ```json
    {
        "TransactItems": [ 
            { 
                "Put": { 
                    "TableName": "string",
                    "Item": { 
                        "string" : { 
                            "S": "string",
                        }
                    },
                }
            },
            { 
                "Delete": { 
                    "TableName": "string",
                    "Key": { 
                        "team_id" : { 
                            "S": "team_2",
                        },
                        "employee_id": {
                            "S": "emp_2"
                        }
                    },
                }
            },
        ]
    }
    ```

For more information, see the AWS docs for [TransactWriteItems](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html).

### UntagResource

This operation removes a set of tags from a DynamoDB resource, identified by its Amazon Resource Name (ARN). For example, the following removes a `{ "department": "billing" }` tag from a table `users`:

    ```json
    {
        "ResourceArn": "arn:aws:dynamodb:us-east-2:123456789012:table/users",
        "TagKeys": ["department"]
    }
    ```

For more information, see the AWS docs for [UntagResource](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html).

### UpdateContinuousBackups

This operation turns point in time recovery on or off for the specified table. For example, the following turns continuous backups off for a table `users`:

    ```json
    {
        "PointInTimeRecoverySpecification": { 
            "PointInTimeRecoveryEnabled": false
        },
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [UpdateContinuousBackups](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html).

### UpdateContributorInsights

This operation updates the status for contributor insights for a given table or index. This query requires the name of the table to update and an `"ENABLE"` or `"DISABLE"` value that turns `ContributorInsightsAction` on or off. For example, the following turns contributor insights off for a table `users`:

    ```json
    {
        "ContributorInsightsAction": "DISABLE",
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [UpdateContributorInsights](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html).

### UpdateGlobalTable

This operation updates the status for contributor insights for a given table or index. This query requires the name of the table to update and an `"ENABLE"` or `"DISABLE"` value that turns `ContributorInsightsAction` on or off. For example, the following turns contributor insights off for a table `users`:

    ```json
    {
        "ContributorInsightsAction": "DISABLE",
        "TableName": "users"
    }
    ```

For more information, see the AWS docs for [UpdateGlobalTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html).

### UpdateItem

Use UpdateItem to change specific attributes of an existing record. You only need to supply the partition key and the values for the attributes that are changing.

```json
{
    "TableName" : "users",
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
    }
}
```

---

#### Example

> Modify an existing record in a table `users`, with columns for `team_id` (primary key), `emp_id` (sort key), `name`, and `date_of_birth`.

* Create your query called `UpdateUser` based on your DynamoDB datasource. You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your users data from another query `ListUsers` that fetches your records.

* Create a [JSON Form widget](/reference/widgets/json-form) `UpdateUserForm` to use for submitting your updated values. Add **Source Data** to the JSON Form to create input fields. Reference the `selectedRow` of `UsersTable` to pre-fill the form fields:

    ```json
    {{
    {
        team_id: UsersTable.selectedRow.team_id,
        employee_id: UsersTable.selectedRow.employee_id,
        name: UsersTable.selectedRow.name,
        date_of_birth: UsersTable.selectedRow.date_of_birth
    }
    }}
    ```
    * For fields that are primary or sort keys, you may want to set their inputs to **Disabled**, as they can't be updated with this query.

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

    ```javascript
    // Submit button's onClick event
    {{ UpdateUser.run(() => ListUsers.run(), () => {}) }}
  ```
  * The **onSuccess** callback is used above to refresh your table data after the operation is complete.

* To add your modified row data to your query, reference them in your UpdateItem query:

    ```javascript
    {
        "TableName" : "users",
        "Key" : {
            "team_id" : {
                "S" : "{{ UsersTable.selectedRow.team_id }}"
            },
            "employee_id" : {
                "S" : "{{ UsersTable.selectedRow.employee_id }}"
            }
        },
        "UpdateExpression" : "SET #n = :new_name, date_of_birth = :new_dob",
        "ExpressionAttributeNames": { // "name" is a reserved keyword, this key sets an alias
            "#n": "name"
        },
        "ExpressionAttributeValues" : {
            ":new_name" : {
                "S" : "{{ UpdateUserForm.formData.name }}"
            },
            ":new_dob": {
                "S": " {{ UpdateUserForm.formData.date_of_birth }}"
            }
        }
    }
    ```

When the Submit button is clicked, your query is executed and the record is updated in your table.


## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
