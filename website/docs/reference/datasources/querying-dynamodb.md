---
sidebar_position: 4
---
# DynamoDB

This page describes how to connect your application to your DynamoDB database and use queries to manage its content.

## Connect to DynamoDB

<figure>
  <img src="/img/dynamodb_config.png" style={{width: "100%", height: "auto"}} alt="Configuring a DynamoDB datasource." />
  <figcaption align="center"><i>Configuring a DynamoDB datasource.</i></figcaption>
</figure>

To add a DynamoDB datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **DynamoDB** button. Your datasource is created and you are taken to a screen to configure its settings.

Appsmith needs the following parameters for connecting to a DynamoDB instance. All required fields are suffixed with an asterisk (\*):

* **Region:** Select the region where your DynamoDB instance exists.
* **AWS Access Key ID:** Provide your AWS access key. Be sure to use the access key for your IAM user with the set of privileges you want your Appsmith app to have. Read further to learn how to [find your AWS access key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/).
* **AWS Secret Access Key:** Provide your AWS Secret Access Key. This value is accessible from your AWS security credentials page. Read further to learn how to [find your AWS secret key](https://aws.amazon.com/blogs/security/how-to-find-update-access-keys-password-mfa-aws-management-console/).

## Create queries

<figure>
  <img src="/img/dynamodb_query.png" style={{width: "100%", height: "auto"}} alt="Configuring a DynamoDB scan query." />
  <figcaption align="center"><i>Configuring a DynamoDB scan query.</i></figcaption>
</figure>

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
        "ExpressionAttributeNames": { // "name" is a reserved keyword, this key sets an alias
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

> Fetch records with matching `team_id` values from a table `users`, 10 records at a time, and put them into a Table widget `UsersTable`. The table has columns for `team_id` (primary key), `emp_id` (sort key), `name`, and `date_of_birth`.

**Setup:** create a query called `FetchUsers` based on your DynamoDB datasource. This query should use the **Query** operation. Create a [Table widget](/reference/widgets/table) called `UsersTable`. Then create a JS Object called `utils` that contains the following code to handle logic and formatting for paginating your query:

```javascript
export default {
	handlePagination: () => {
		if (Query.data.LastEvaluatedKey && Object.keys(Query.data.LastEvaluatedKey).length > 0) {
			const startKey = {
				"ExclusiveStartKey": {
					"team_id": {
						"S": Query.data.LastEvaluatedKey.team_id
					},
					"employee_id": {
						"S": Query.data.LastEvaluatedKey.employee_id
					}
				}
			}
			return JSON.stringify(startKey).slice(1, -1) + ","
			
		} else {
			return ""
		}
	}
}
```

* Create a [**Select widget**](/reference/widgets/select) called `TeamSelect` with the following value in its **Options** property:

    ```javascript
    // TeamSelect widget's Options property
    [
        { "label": "1", "value": "team_1" },
        { "label": "2", "value": "team_2" },
        { "label": "3", "value": "team_3" },
        { "label": "4", "value": "team_4" }
    ]
    ```
    * Set the Select widget's **onOptionChange** action to execute your `FetchUsers` query to update the table.

* In your `FetchUsers` query, add the JSON snippet:

    ```javascript
    {
        "TableName": "users",
        "LIMIT": {{ UsersTable.pageSize }},
        {{ utils.handlePagination() }}
        "KeyConditionExpression": "team_id = :val",
        "ExpressionAttributeValues": {
            ":val": {
                "S": "{{ TeamSelect.selectedOptionValue }}"
            }
        }
    }
    ```

* Set the **Page Size** to 10 to limit the number of records you receive at once.

* In the **Table Data** property of your Table widget, bind the result of your query:

    ```javascript
    // in the Table Data property of UsersTable
    {{
    FetchUsers.data.Items
    }}
    ```

Your table should fill with data when the query is run.

### PutItem

Use PutItem to insert a new record or replace an existing record. Any existing record is completely replaced with the data that you submit.

```javascript
{
    "TableName" : "users",
    "Item" : {
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

---

#### Example

> Add a new record to a table `users`, with columns for `team_id` (primary key), `emp_id` (sort key), `name`, and `date_of_birth`.

**Setup:** create a query called `CreateUser` based on your DynamoDB datasource. This query should use the **PutItem** operation.

To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewUserForm`. Add **Source Data** to the JSON Form to create input fields:

```json
{{
    {
        team_id: "",
        employee_id: "",
        name: "",
        date_of_birth: "",
    }
}}
```

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

    ```javascript
    // Submit button's onClick event
    {{ CreateUser.run() }}
    ```

* Once these form fields are filled out, you can add their values to your query's body as below:

    ```javascript
    {
        "TableName" : "users",
        "Item" : {
            "team_id" : {
                "S" : "{{ NewUserForm.formData.team_id }}"
            },
            "employee_id": {
                "S" : "{{ NewUserForm.formData.employee_id }}"
            },
            "name": {
                "S" : "{{ NewUserForm.formData.name }}"
            },
            "date_of_birth": {
                "S": "{{ NewUserForm.formData.date_of_birth }}"
            }
        }
    }
    ```

When the Submit button is clicked, your query is executed and the new record is inserted into your table.

### UpdateItem

Use UpdateItem to change specific attributes of an existing record. You only need to supply the partition key and the values for the attributes that are changing.

```javascript
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

### DeleteItem

Use DeleteItem to delete a specific record.

```javascript
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

---

#### Example

> Delete a record from a table `users`.

* Create your query called `DeleteUser` based on your DynamoDB datasource. You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your table data from a previous fetch query `ListUsers`.

* Create a [Button widget](/reference/widgets/button) on the canvas and update its **Label** to "Delete." Set its **onClick** event to execute your `DeleteUser` query:

    ```javascript
    // in the Delete button's onClick event
    {{ DeleteUser.run(() => ListUsers.run(), () => {}) }}
  ```
  * The **onSuccess** callback is used above to refresh your table data after the operation is complete.

* To delete a specific record, reference it with its partition key (the primary and/or sort keys). In your `DeleteUser` query, use the `team_id` and `employee_id` values of the `UserTable`'s selected row:
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
        }
    }
    ```

Now when the button is clicked, the query is run and the corresponding row is deleted from your table.

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
