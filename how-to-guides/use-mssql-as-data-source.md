---
description: >-
  Guide on how to use MsSQL as a data source on Appsmith
---

# Use MsSQL as a data source on Appsmith

## MsSQL
MsSQL or Microsoft SQL Server is a relational database management system developed by Microsoft. It is a database server developed by Microsoft which provides all the pimary functionalities of the SQL version you might have used. MsSQL databases can be queried using the standard T-SQL syntax.

In this guide, you will learn how you can use MsSQL as a data source for your Appsmith application.

## What to build
Since everybody likes Pokémons, let's build a simple application which will show you a few Pokémons with their images, names and types. It's simple enough for our tutorial, and should be helpful in exploring all the required things to learn here.

Let's start with setting up an MsSQL server.

## Initial setup
Let's quickly first see how you can integrate MsSQL in Appsmith. There's really not many steps or any complicated ones. Just head to Appsmith, and let's say for the scope of this guide you're building a new application which you want to get data from your MsSQL server.

So, just click on the `New` button to create a new application. Then click on `Generate from a Data table` option. Now you should be prompted with a screen that would ask you to connect the database of your choice. It should look something like this:

![Screenshot 2021-10-06 at 1 49 56 AM](https://user-images.githubusercontent.com/41565823/136096664-acd862fd-a1dd-4e52-be82-620d655108b6.png)

Now you can click on `Connect new Datasource` and find `MsSQL` from all the available database options.

Now you will be greeted with a page to fill your credentials for your MsSQL server. You should fill in the host/port along with your database name and login credentials. The unfilled screen for this would look something like this:

![Screenshot 2021-10-06 at 12 54 20 PM](https://user-images.githubusercontent.com/41565823/136158268-82e5c3a4-9ddb-4f3c-9bac-8a8d179175d9.png)

Once you fill in all the details, you can click `Test` from the options below to test your connection. It will let you know if Appsmith is successfully able to connect to your database or not. If you're have some difficulties here's a good resource to know more.

If you're able to successfully test your connection using the `Test` button, you're ready to hit `Save` and save your connection on Appsmith.

## Querying the database
So, now that you're done with setting up connection to your database server, you should be able to see a screen like this:

![Screenshot 2021-10-06 at 1 03 09 PM](https://user-images.githubusercontent.com/41565823/136159487-facbb3a5-92f0-46de-8d04-ae7373a4e0d3.png)

From here, let's try writing a query for our application. For our database I have already created a table `pokemon` which already has the data that we need to query.

Querying in Appsmith is very simple, just click on the `New Query` button from above and select which kind of query operation you're going to have. For our use case we're just reading from our database so I would go ahead and use `Select`.

Now for your convenience, Appsmith does all the input sanitization and helps you query your database without worrying for any malicious data. In our case, we're just reading from the database so our query will also be very simple and that will be:

```
SELECT * FROM pokemon;
```
You can put your query in the Query box and a screen which should be looking like this:

![Screenshot 2021-10-06 at 1 09 33 PM](https://user-images.githubusercontent.com/41565823/136160322-46f558bc-c1e5-473f-bf00-0e3bcf0ece6c.png)

From here, you can run your query, name your query something to remember and test it. If you need more information regarding querying MsSQL in Appsmith, you can refer this [great piece of article](https://docs.appsmith.com/datasource-reference/querying-mssql#querying-mssql).

Once you write your query, it will be saved in the left hand side menu with the name of your choice and would look something like this:

![Screenshot 2021-10-06 at 1 11 51 PM](https://user-images.githubusercontent.com/41565823/136160638-ec91d65c-0d2e-4dfe-8d09-7743070565c7.png)

