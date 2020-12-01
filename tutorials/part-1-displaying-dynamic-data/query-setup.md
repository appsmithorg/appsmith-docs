# Query setup



The table on your page shows static data. For your Catalogue Dashboard app, you want it to display dynamic product data from the database. The first step is to set up the database query that fetches this data.



1. Click on + next to DB Queries
2. Choose Mock Database
3. Note that the Mock Database is a PostgreSQL database
4. Click on New Query
5. You’ll see a query created with the name Query1
6. Rename the query to ProductsQuery
7. Write the following query in the Query tab:
8. Click on Run
9. Note the pop-up informing that the query ran successfully \[TODO: Figure how to move the query near point 7.\]

```text
SELECT "productId", "productName", "category", "mrp" 
FROM products 
ORDER BY "productId" 
LIMIT 100;
```

{% hint style="info" %}
Mock Database

Your Personal Organization comes with a pre-configured mock PostgreSQL Database called Mock Database. However, when you build your own app, you’ll connect to your own database. If you’re new to Appsmith, read [this](https://docs.appsmith.com/core-concepts/connecting-to-databases) to learn to configure a database of your choice.
{% endhint %}

