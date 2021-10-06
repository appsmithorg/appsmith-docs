---
description: >-
  Guide on how to use MsSQL as a data source on Appsmith
---

# Use MsSQL as a data source on Appsmith

## MsSQL
MsSQL or Microsoft SQL Server is a relational database management system developed by Microsoft. It is a database server developed by Microsoft which provides all the pimary functionalities of the SQL version you might have used. MsSQL databases can be queried using the standard T-SQL syntax.

In this guide, you will learn how you can use MsSQL as a data source for your Appsmith application. You can check out the full application from this guide [here](https://app.appsmith.com/applications/615cb29fea18372f05103b73/pages/615cb29fea18372f05103b75).

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

Once you write your query, it will be saved in the left hand side menu with the identifier name of your choice and would look something like this:

![Screenshot 2021-10-06 at 1 11 51 PM](https://user-images.githubusercontent.com/41565823/136160638-ec91d65c-0d2e-4dfe-8d09-7743070565c7.png)

## Displaying the data
Now that we have connected our query and our database to our Appsmith application, it's time to actually display the data. Let's start with a very simple way to go on to this.

How is the data stored in MsSQL datbases? Tables.
What would be the easiest way to see that in our application? Yep, using a table.

So let's try displaying our query data in a single table. For that go to the page in Appsmith and drag and drop a Table widget. Now click on the settings icon and all you have to do is replace the table data value with your query data. In this case the identifer of my query is `main_query` so I will just put `main_query.data` inside `{{}}`.

It looks something like this:
![Screenshot 2021-10-06 at 2 12 53 PM](https://user-images.githubusercontent.com/41565823/136169715-a957c2ae-bdad-4031-b9db-16819499a990.png)

And when you reload your page, voila, your query data will be there in a table!!!

Easy, right?

So, let's now try to display the data in a bit more good looking way, like in a List.

For that, first of all let's drag and drop a List widget in our UI. Now that we have the UI, let's setup the data. Again, simple click on the settings icon of the List widget and replace the `Items` value with `{{your_query_identifier.Data}}`, in my case that will be `{{main_query.Data}}`.

But the only thing more that you have to do this time is setup the image and text widgets inside the List widget to the values they are expected to show. So in my case since the image should render `URL` part of each individual item, we set it to `{{currentItem.URL}}` in the settings of the Image1 in the List. Similary, the text widgets will be updated to `{{currentItem.Name}}` and `{{currentItem.Type}}`.

Please note that these are the columns in my database table that I get from the query, they might differ in your case depending on your data. All we want is the List items to show the data that it is getting from the query data that we setup earlier.

Once this is done, after a bit of styling (adding colours to text), you will have something that looks like this:

![Screenshot 2021-10-06 at 2 35 39 PM](https://user-images.githubusercontent.com/41565823/136173371-bcc796ec-32d6-4d28-89e5-92257624286e.png)

Oh, also since this all data is fetched from your database, naturally, adding more data will automatically show more data in your application. Like this:

![Screenshot 2021-10-06 at 2 40 48 PM](https://user-images.githubusercontent.com/41565823/136174231-df373bfc-380e-40ef-a2c7-ef0408060905.png)
