# DynamoDB

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a DynamoDB instance:

![Click to expand](../.gitbook/assets/dynamodb-datasource-form.png)

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

* **Region\*:** Select the region where your DynamoDB instance exists
* **Host Address / Port\*:** Fill in the database host’s address and port. You only need to fill these fields in case you wish to override the default endpoint chosen by AWS
* **AWS Access Key Id\*:** The identifier for your AWS Access key that is configured to have access to this database
* **AWS Secret Access Key\*:** The secret key for this identifier 

All the above three details can be fetched from your AWS account:
1. [How to get AWS access key ?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)
2. [How to get AWS secret key ?](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/#:~:text=Secret%20access%20keys%20are%E2%80%94as,key%20after%20its%20initial%20creation.)
3. [AWS DynamoDB regions/endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)

## Querying DynamoDB

DynamoDB databases can be queried using any of the operations that are [officially supported](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations_Amazon_DynamoDB.html). The request body expects a JSON object that represents a map of parameters to query the database.

![Click to expand](../.gitbook/assets/dynamodb-query1.png)

## Taking Inputs from Widgets

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.


{% page-ref page="../core-concepts/connecting-to-databases/querying-a-database.md" %}

