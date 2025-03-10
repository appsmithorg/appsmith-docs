# Build Your First App

In this tutorial, you will learn how to connect your app to a database, fetch data, and display it using a Table widget. By following these steps, you’ll gain a solid understanding of Appsmith’s core features, enabling you to build dynamic, data-driven applications.

:::tip ⏳ Estimated Time: 10 minutes
By the end of this tutorial, you will learn to:

- Connect your app to a PostgreSQL database.
- Fetch data using SQL queries.
- Display data in a Table widget.
:::


<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/N0DGhXCaYUFdtc4h8M2b?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>

1. Open the [Appsmith Home](https://app.appsmith.com/applications) to view all workspaces and applications. A workspace is a collection of applications where teams can collaborate on building and managing different apps.

2. To create a new app, click the **Create New** dropdown in the top-right corner of the workspace and select **Application**.


3. In your application and, from the sidebar, click the **Data** button. This section lists all the datasources configured in your app, where you can edit existing ones or add new datasources.

4. Click the **+** icon next to **Datasources in your workspace** to add a new datasource.

5. You’ll now see a list of APIs, databases, and SaaS integrations you can connect to. For this tutorial, select the **Sample Users** database. This is a PostgreSQL database that contains user-related data, such as names, email addresses, and user IDs, which will be used to display data in the app. 

6. After selecting Sample Users, a page opens showing the database schema *(structure of tables and columns)*, tables, and configuration details.

7. Click **+ New Query** from the top-right corner. This opens a query editor where you can write SQL queries.

8. Click on the three dots next to the query name in the left pane and select Rename. Rename the default query name `Query1` to `getUsers`. 

9. Update the query with the following to fetch records in ascending order of the `id` field:

<dd>

  ```sql
  SELECT * FROM public."users" ORDER BY id LIMIT 10;
  ```

</dd>

10. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

11. Click the **UI** tab on the *Entity Explorer* to the left of the screen. The UI tab opens a list of available widgets in Appsmith, which can be used to display data and design the app.

12. Click **+ New UI Element**. This displays a list of available widgets to choose from. Drag a **Table** widget and drop it onto the canvas to display the data in a structured format.

13. When you add the Table widget, a *Property Pane* appears on the right. The Property Pane contains all the configurable settings for the widget, such as its name, datasource, appearance, and behavior. To rename the widget, edit the name at the top of the pane, changing it from `Table1` to `usersTable`.

14. In the Property Pane, click on the [**Table Data**](/reference/widgets/table#table-data-arrayobject) property and select the `getUsers` query to connect the Table to the data fetched by the query. The Table Data property allows you to bind your query or JS data to the Table widget.

15. Click on the **Deploy** button in the top-right corner. This allows you to publish your changes and make your app live, which you can then share with others. 
 
:::tip 🎉 Great job!  
You have successfully created your first app by connecting to a sample PostgreSQL database, fetching user details, and displaying them in a Table widget.

Your app is now live! You can share it with others and continue enhancing it by adding more data-driven features and interactivity. 
:::

### What's next?

Now that you've connected data and built a basic UI, here are some next steps based on what you want to do next:

- [**Work with data:**](/getting-started/tutorials/the-basics/work-with-data-in-ui) Learn how to filter, sort, and manipulate data before displaying it. 
- [**Build more UI interactions:**](/build-apps/how-to-guides) Add buttons, forms, and other widgets to create an interactive experience. 
- [**Integrate APIs & databases:**](/connect-data/reference) Connect your app to external APIs or a custom database. 