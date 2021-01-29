# DynamoDB

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a DynamoDB instance:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Region\*:** Select the region where your DynamoDB instance exists
* **Host Address / Port\*:** Fill in the database host’s address and port
* **AWS Access Key Id\*:** The identifier for your AWS Access key that is configured to have access to this database
* **AWS Secret Access Key\*:** The secret key for this identifier 

## Querying DynamoDB

DynamoDB databases can be queried using any of the operations that are [officially supported](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations_Amazon_DynamoDB.html). The request body expects a JSON object that represents a map of parameters to query the database.

## Taking Inputs from Widgets

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.


{% page-ref page="../core-concepts/connecting-to-databases/querying-a-database.md" %}

