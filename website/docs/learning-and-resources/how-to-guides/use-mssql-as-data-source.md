---
description: Guide on how to use MsSQL as a data source on Appsmith
sidebar_position: 11
---

# How to use MS SQL as a data source on Appsmith

This guide assumes you have basic familiarity with [Appsmith](https://www.appsmith.com/). If you don't have much understanding, I would suggest creating an account and trying it out. I assure you that it is straightforward to get acquainted with quickly.

## MS SQL

MS SQL or Microsoft SQL Server is a relational database management system developed by Microsoft. It is a database server developed by Microsoft which provides all the primary functionalities of the SQL version you might have used. MsSQL databases can be queried using the standard T-SQL syntax.

In this guide, you will learn how you can use MsSQL as a data source for your Appsmith application.

## What to build

Since everybody likes Pokémons, let's build a simple application that will show you a few Pokémons with their images, names, and types. It's simple enough for our tutorial and should help explore all the essential things to learn here. You can check out the complete application from this guide [here](https://app.appsmith.com/applications/615cb29fea18372f05103b73/pages/615cb29fea18372f05103b75).

Let's start with setting up an MsSQL server.

## Initial setup

Let's quickly first see how you can integrate MsSQL in Appsmith. There are not many steps or any complicated ones. Just head to Appsmith, and let's say for the scope of this guide, you're building a new application which you want to get data from your MsSQL server.

So, click on the `New` button to create a new application. Then click on `Generate from a Data table` option. You should be prompted with a screen that would ask you to connect the database of your choice. It should look something like this:

![Screenshot 2021-10-06 at 1 49 56 AM](/img/mssql-appsmith-1.png)

Now you can click on `Connect new Datasource` and find `MsSQL` from all the available database options.

Now you will be greeted with a page to fill in your credentials for your MsSQL server. You should fill in the host/port along with your database name and login credentials. The unfilled screen for this would look something like this:

![Screenshot 2021-10-06 at 12 54 20 PM](/img/mssql-appsmith-2.png)

Once you fill in all the details, you can click `Test` from the options below to test your connection. It will let you know if Appsmith is successfully able to connect to your database or not.

If you're able to test your connection successfully using the `Test` button, you're ready to hit `Save` and save your connection on Appsmith.

## Querying the database

So, now that you're done with setting up a connection to your database server, you should be able to see a screen like this:

![Screenshot 2021-10-06 at 1 03 09 PM](/img/mssql-appsmith-3.png)

From here, let's try writing a query for our application. For our database, I have already created a table `pokemon` which already has the data that we need to query.

Querying in Appsmith is very simple; click on the `New Query` button from above and select which kind of query operation you're going to have. For our use case, we're just reading from our database, so I would go ahead and use `Select`.

Now for your convenience, Appsmith does all the input sanitization and helps you query your database without worrying about any malicious data. In our case, we're just reading from the database, so our query will also be very simple, and that will be:

```
SELECT * FROM pokemon;
```

You can put your query in the Query box and the screen should look like this:

![Screenshot 2021-10-06 at 1 09 33 PM](/img/mssql-appsmith-4.png)

From here, you can run your query, name your query something to remember and test it. If you need more information regarding querying MsSQL in Appsmith, you can refer to this [great piece of article](../../reference/datasources/querying-mssql.md#querying-mssql).

Once you write your query, it will be saved in the left-hand side menu with the identifier name of your choice and would look something like this:

![Screenshot 2021-10-06 at 1 11 51 PM](/img/mssql-appsmith-5.png)

## Displaying the data

Now that we have connected our query and database to our Appsmith application, it's time to display the data. Let's start with a simple way to go on to this.

How is the data stored in MsSQL databases? Tables. What would be the easiest way to see that in our application? Yep, using a table.

So let's try displaying our query data in a single table. For that, go to the page in Appsmith and drag and drop a Table widget. Now click on the settings icon and all you have to do is replace the table data value with your query data. In this case, the identifier of my query is `main_query` so I will just put `main_query.data` inside `{{}}`.

It looks something like this: ![Screenshot 2021-10-06 at 2 12 53 PM](/img/mssql-appsmith-6.png)

And when you reload your page, voila, your query data will be there in a table!!!

Easy, right?

So, let's now try to display the data in a more good-looking way, like in a List.

For that, first of all, let's drag and drop a List widget in our UI. Now that we have the UI, let's set up the data. Again, simple click on the settings icon of the List widget and replace the `Items` value with `{{your_query_identifier.Data}}`, in my case, that will be `{{main_query.Data}}`.

But the only thing more that you have to do this time is set up the image and text widgets inside the List widget to the values they are expected to show. Since the image should render `URL` part of each item, we set it to `{{currentItem.URL}}` in the settings of Image1 in the List. Similarly, the text widgets will be updated to `{{currentItem.Name}}` and `{{currentItem.Type}}`.

Please note that these are the columns in my database table that I get from the query; they might differ depending on your data. All we want is the List items to show the data that it is getting from the query data that we set up earlier.

Once this is done, after a bit of styling (adding colors to text), you will have something that looks like this:

![Screenshot 2021-10-06 at 2 35 39 PM](/img/mssql-appsmith-7.png)

Oh, also, since all data is fetched from your database, naturally, adding more data will automatically show more data in your application. Like this:

![Screenshot 2021-10-06 at 2 40 48 PM](/img/mssql-appsmith-8.png)

## Writing data

Now that you know how to read data from your MsSQL database and display relevant data in your Appsmith application, let's now focus on writing to your database. First of all, if you have chosen `Read only` for your database connection in Appsmith, as you can see in one of the images below, you should choose `Read/Write`.

For this, let's update our application by adding two new buttons which update a new `boolean` column named `Valid` in our database.

This allows the user to tell if the data is correct and send this information to the database. This is a bit straightforward thing to demonstrate how you can write/update data in your database from your Appsmith application.

So, first let's drag and drop two buttons for sending `true` and `false` to our database. Our app now looks like this:

![Screenshot 2021-10-06 at 3 53 54 PM](/img/mssql-appsmith-9.png)

Now, let's write queries for actually updating the stuff. Go to `Datasources` from your left-hand side menu and click on `New Query` like before. This time we would be choosing `Update` in the next step.

Now our updating queries will be this in our case: For `true`:

```
UPDATE pokemon
  SET Valid = 'TRUE'
  WHERE Name = {{ List1.selectedItem.Name }};
```

For `false`:

```
UPDATE pokemon
  SET Valid = 'FALSE'
  WHERE Name = {{ List1.selectedItem.Name }};
```

Please note that I am using `Name` as a primary key in my database. The `List1` is the List widget in our application. `List1.selectedItem.Name` refers to the `Name` of `selectedItem` from the List widget.

I named these queries `update_true` and `update_false` respectively in our case here.

Now head back to your page and click on the settings icon of the buttons you added. Click on `onClick` and choose `Run Query` option and choose the query that you want to run when the button is clicked.

In our case here, I am running `update_true` from the green button, click and `update_false` from the red button click.

![Screenshot 2021-10-06 at 4 00 36 PM](/img/mssql-appsmith-10.png)

To display the value of `Valid` column, I also have added a switch to be `on` if `Valid` is `true` otherwise `false`. And the complete application now looks like this:

![Screenshot 2021-10-06 at 4 05 11 PM](/img/mssql-appsmith-11.png)

Now, if you click the green confirm button, the switch will be set to on, and on clicking the red button, the switch will be set to off. You can go ahead and check out the entire application [here](https://app.appsmith.com/applications/615cb29fea18372f05103b73/pages/615cb29fea18372f05103b75).

And, now you know how to use MsSQL as a data source for your Appsmith application :)
