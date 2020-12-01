# Submitting the form

Your form is now both more user-friendly, and less error prone. Let's configure it to add a new product. It will involve two steps:

1. Setting up the query that adds a new product in the table
2. Wiring the Submit button to run the query

Let’s set up the query first:

1. Navigate to **Pages → NewProductPage → DB Queries → +**
2. Navigate to **Mock Database → New Query**
3. Rename the query to **AddProductQuery**
4. Copy the following in the Query tab
5. Run the query
6. You’ll see the notification for a successful query run

```text
INSERT INTO products
	("productName", "category", "mrp")
VALUES
	('{{ProductNameInput.text}}', '{{CategoryDropdown.selectedOptionValue}}', '{{MrpInput.text}}')
```

Let’s see the query. The main query syntax is the same as that of PostgreSQL, following the format:

```text
INSERT INTO table_name
 (col1, col2, col3, … colN)
VALUES
 (val1, val2, val3, … valN)

```

The only difference is that you’re using the mustache template to write JavaScript within the insert query:

* To get the value input by the user in **ProductNameInput**, you called **.text** method on it
* To get the value of the selected option of **CategoryDropdown**, you called **.selectedOptionValue** on it 

Your query is now set up to insert dynamic user input from the form. 

{% hint style="info" %}
Think of widgets as variables. Similar to variables:

* They have a type
* They support a set of methods that are invoked via the widget’s name.
* They are governed by access rules
{% endhint %}



