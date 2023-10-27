---
id: connect-query-display-data
slug: /getting-started/tutorials/the-basics/lesson1
description:  Connect a datasource on Appsmith
---

# Lesson 1 - Bring in Data

This tutorial takes you through the process of connecting a datasource and querying data on Appsmith. 

## Connect datasource

1. On the *Entity Explorer* to the left of the screen, go to the **Explorer** tab.

2. Click the **+** icon next to **Datasources** to add a new datasource.

3. Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the fields to connect to your PostgreSQL database. 

<figure>
  <img src="/img/connect-to-postgreSQL-database.png" style= {{width:"100%", height:"auto"}} alt="Connect to PostgreSQL database"/>
  <figcaption align = "center"><i>Connect to PostgreSQL database</i></figcaption>
</figure>

4. Click the pencil icon next to the default database name on the top left and rename the database to `usersTutorialDB`.

5. Enter the following details in the connection parameter fields:<br/>
  **Host Address**: `mockdb.internal.appsmith.com` <br/>
  **Port**: `5432`<br/>
  **Database Name**: `users`<br/>
  **Username**: `users`<br/>
  **Password**: `new-users-db-pass`<br/>

6. Click the **Test Configuration** button to test the connection and ensure the database is valid.

7. Click **Save** to create and save the database connection. You'll see the `usersTutorialDB` database page.

## Query Data

1. Click the **+ New Query** button to the right of the screen. You will see the query editor with a default fetch query to pull ten records from the `usersTutorialDB` database table.

<figure>
  <img src="/img/create-new-query.png" style= {{width:"100%", height:"auto"}} alt="Create a new query on the datasource"/>
  <figcaption align = "center"><i>Create a new query on the datasource</i></figcaption>
</figure>

2. Click the pencil icon to rename the query from **Query1** to `getUsers`.

3. For this tutorial, modify the query as shown below to fetch the records in the ascdending order of the `id` field.

  ```sql
  SELECT * FROM public."users" ORDER BY id LIMIT 10;
  ```

4. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

5. Click the **Settings** tab. Switch on the **Run query on page load** option.

<figure>
  <img src="/img/fetch-data-query.png" style= {{width:"100%", height:"auto"}} alt="Fetch data from database"/>
  <figcaption align = "center"><i>Fetch data from database</i></figcaption>
</figure>

You've created your first query to fetch the list of records in the database.

## Display data in Table

1. Click the **Widgets** tab on the *Entity Explorer* to the left of the screen.

2. Drag a **Table** widget and drop it to the left of the canvas.

3. A *Property Pane* appears to the right of the screen, which contains all the properties of the widget. On the top of the property pane, click on the default name **Table1** and rename it to `usersTable`.

4. In the **Table Data** property, click the **JS** button next to it. 

5. To display the data from the **getUsers** query, type in `getUsers.data` between the curly braces. This JavaScript expression connects the data from the **getUsers** query to the Table widget.

:::info
The mustache template `{{}}` is used to write JS code inside widgets and queries on Appsmith.
:::

<figure>
  <img src="/img/display-data-in-table.png" style= {{width:"100%", height:"auto"}} alt="Display data in table"/>
  <figcaption align = "center"><i>Display data in table</i></figcaption>
</figure>

You've displayed the results from the **getUsers** query on the Table widget.

## Next steps
- [Lesson 2 - Work with data in UI](/getting-started/tutorials/the-basics/lesson2)