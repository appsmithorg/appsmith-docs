---
id: connect-query-display-data
slug: /getting-started/tutorials/the-basics/connect-query-display-data
description:  Connect a datasource on Appsmith
---

# Lesson 1 - Bring in Data

This tutorial takes you through the process of connecting a datasource and querying data on Appsmith. 

## Connect datasource

1. In your application, go to the sidebar and click the **Data** button.

2. Click the **+** icon next to **Datasources in your workspace** to add a new datasource.

3. Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the fields to connect to your PostgreSQL database. 

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/7U7N3Fhx8NVvn0vgtU1O?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="User Management | Connect Datasource">
  </iframe>
</div>

4. Rename the default database name from **Untitled datasource 1** to `usersTutorialDB`. You may have to click the pencil icon next to the database name if it is not already selected. 

5. Enter the following details in the connection parameter fields:<br/>
  **Host Address**: `mockdb.internal.appsmith.com` <br/>
  **Port**: `5432`<br/>
  **Database Name**: `users`<br/>
  **Username**: `users`<br/>
  **Password**: `new-users-db-pass`<br/>

6. Click the **Test Configuration** button to test the connection and ensure the database is valid.

7. Click **Save** to create and save the database connection. You'll see the `usersTutorialDB` database page.

## Query Data

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/IiJZpgnlcoiV7Be9OVJ4?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="User Management | Query Data">
  </iframe>
</div>

1. Click the **+ New Query** button to the right of the screen. You will see the query editor with a default fetch query to pull ten records from the `usersTutorialDB` database table.

2. Rename the query from **Query1** to `getUsers`. You may have to click the pencil icon if it is not already selected.

3. For this tutorial, modify the query as shown below to fetch the records in the ascdending order of the `id` field.

  ```sql
  SELECT * FROM public."users" ORDER BY id LIMIT 10;
  ```

4. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

5. Click the **Settings** tab. Switch on the **Run query on page load** option.

You've created your first query to fetch the list of records in the database.

## Display data in Table

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/p8UCpX0afOcDKmSKLQFD?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="User Management | Display Data">
  </iframe>
</div>

1. Click the **Widgets** tab on the *Entity Explorer* to the left of the screen.

2. Drag a **Table** widget and drop it to the left of the canvas.

3. A *Property Pane* appears to the right of the screen, which contains all the properties of the widget. On the top of the property pane, click on the default name **Table1** and rename it to `usersTable`.

4. In the **Table Data** property, click the **JS** button next to it. 

5. To display the data from the **getUsers** query, type in `getUsers.data` between the curly braces. This JavaScript expression connects the data from the **getUsers** query to the Table widget.

:::info
The mustache template `{{}}` is used to write JS code inside widgets and queries on Appsmith.
:::

You've displayed the results from the **getUsers** query on the Table widget.

## Next steps
- [Lesson 2 - Work with data in UI](/getting-started/tutorials/the-basics/work-with-data-in-ui)