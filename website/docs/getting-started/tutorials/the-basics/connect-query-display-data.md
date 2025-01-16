---
id: connect-query-display-data
slug: /getting-started/tutorials/the-basics/connect-query-display-data
description:  Connect a datasource on Appsmith
---

# Connect and Display Data

In this tutorial, you learn how to connect a database, fetch data using SQL queries, and display it in a table widget.

:::tip What will I learn? 📝
By the end of this tutorial, you will learn:

- Connect your app to a PostgreSQL database.
- Fetch data using SQL queries.
- Display data in a Table widget.
:::

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/N0DGhXCaYUFdtc4h8M2b?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Display Data">
  </iframe>
</div>



1. In your application, go to the sidebar and click the **Data** button.

2. Click the **+** icon next to **Datasources in your workspace** to add a new datasource.

3. Select **Sample Users** under the **Databases** section. This opens a page where you can see multiple tables with different datasets.

4. Click **+ New Query** from the top-right corner to open the query editor.

5. Rename the query from `Query1` to `getUsers` by clicking the pencil icon next to the query name.

6. Update the query with the following to fetch records in ascending order of the `id` field:

<dd>

  ```sql
  SELECT * FROM public."users" ORDER BY id LIMIT 10;
  ```

</dd>

7. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

8. Click the **UI** tab on the *Entity Explorer* to the left of the screen.

9. Click **+ New UI element** and drag a **Table** widget and drop it to the left of the canvas.

9. A *Property Pane* appears to the right of the screen, which contains all the properties of the widget. On the top of the property pane, click on the default name **Table1** and rename it to `usersTable`.

10. Connect the Table to the query **getUsers** to display the data. Additionally, you can use JavaScript by clicking on **JS** to write bindings for the table data.
 
:::tip 🎉 Great job!  
You’ve successfully connected to the database, fetched user data, and set up your first query to display the data in your app.
:::


## Next steps

- [Build UI Interactions](/getting-started/tutorials/the-basics/work-with-data-in-ui).
