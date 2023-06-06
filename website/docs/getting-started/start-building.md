---
sidebar_position: 2
id: start-building
slug: /getting-started/start-building
description:  Learn the basics of building an app on Appsmith.
---
# Build Your First App

:::info
⭐ **Level** - Beginner <br/>
⏱️ **Time** - 15 minutes
:::

This tutorial guides you through the steps to create a simple database GUI using Appsmith. The application connects to a sample PostgreSQL database, allowing you to read and update user information. You'll learn to:
* Create a new application
* Connect to a database and fetch data 
* Display the data in a Table widget
* Build form to view user details
* Edit and submit the user details
* Deploy the application

Here's a screenshot of the final result:

<figure>
  <img src="/img/beginner-tutorial-output.png" style= {{width:"100%", height:"auto"}} alt="Simple Database GUI"/>
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure>

Let's get started!

## Prerequisites

* An Appsmith account. If you don’t have one, sign up on [**Appsmith cloud**](https://app.appsmith.com/).

## Create a new application

1. When you create a new account, Appsmith adds a workspace with an application titled **My first application** on the homepage by default. You need to create a new empty application for this tutorial. If you are inside an application and need to go to the homepage, click on the Appsmith logo at the top left of the screen to go to the homepage.

2. On the homepage, click the **+ New** button to the right of the screen under the default workspace. You'll land on a new application in the *Edit* mode. 

<figure>
  <img src="/img/create-new-app.png" style= {{width:"100%", height:"auto"}} alt="Create new application"/>
  <figcaption align = "center"><i>Create new application</i></figcaption>
</figure>

3. Click the **⌵** icon on the top left next to the default application name. Select the **Edit Name** option. Rename the app to `User Management`.

4. On the *Entity Explorer* to the left of the screen, you'll see that **Page 1** is the default page on the application. Hover over the page name and click the **︙** icon.  

5. Select the **Edit Name** option. Rename the page to `User Information`.

<figure>
  <img src="/img/edit-page-name.png" style= {{width:"100%", height:"auto"}} alt="Edit page name"/>
  <figcaption align = "center"><i>Edit page name</i></figcaption>
</figure>

## Connect to a database

1. On the *Entity Explorer* to the left of the screen, ensure you are in the **Explorer** tab.

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

6. Click the **Test** button to test the connection and ensure the database is valid.
7. Click **Save** to create and save the database connection. You'll see the `usersTutorialDB` database page.

🚩 You've successfully connected to the PostgreSQL database that contains user information.

## Fetch user data

1. Click the **+ New Query** button to the right of the screen.

<figure>
  <img src="/img/create-new-query.png" style= {{width:"100%", height:"auto"}} alt="Create a new query on the datasource"/>
  <figcaption align = "center"><i>Create a new query on the datasource</i></figcaption>
</figure>

2. Click the **Select** query template from the list of query commands. It loads the query editor with a fetch query to pull ten records from the `usersTutorialDB` database table. 

3. Click the pencil icon to rename the query from **Query1** to `getUsers`.

4. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

5. Click the **Settings** tab. Switch on the **Run query on page load** option.

<figure>
  <img src="/img/fetch-data-query.png" style= {{width:"100%", height:"auto"}} alt="Fetch data from database"/>
  <figcaption align = "center"><i>Fetch data from database</i></figcaption>
</figure>

🚩 You've created your first query to fetch the list of users in the database.

## Display user data on Table

1. Click the **Widgets** tab on the *Entity Explorer* to the left of the screen.

2. Drag a **Table** widget and drop it to the left of the canvas.

3. A *Property Pane* appears to the right of the screen, which contains all the properties of the widget. On the top of the property pane, click on the default name **Table1** and rename it to `usersTable`.

4. In the **Table Data** property box, delete the default JSON data. 

5. To display the data from the **getUsers** query, type in the mustache template `{{}}`. Enter `getUsers.data` between the curly braces. This JavaScript expression connects the data from the **getUsers** query to the Table widget.

:::info
The mustache template `{{}}` is used to write JS code inside widgets and queries on Appsmith.
:::

<figure>
  <img src="/img/display-data-in-table.png" style= {{width:"100%", height:"auto"}} alt="Display data in table"/>
  <figcaption align = "center"><i>Display data in table</i></figcaption>
</figure>

🚩 You've displayed the results from the **getUsers** query on the Table widget.

## Build form to view user details

1. From the **Widgets** tab, drag and drop a **Form** widget on the canvas to the right of the Table widget. 
2. Select the title of the Form. On the property pane to the right of the screen, in the **Text** property box, change the title from **Form** to `User Details`.
3. Now add widgets on the Form to view user details. For the user's name, drop an **Input** widget inside the Form. 
    * On the property pane to the right, click on the default name **Input1** and rename it to `nameInput`. 
    * In the **Text** property box, enter `Name`. 
    * In the **Default Value** property box, type `{{usersTable.selectedRow.name}}`. This displays the user's name of the selected row on the **usersTable** Table widget.
4. Let's do the same for the user's email. Drop another Input widget inside the Form. 
    * Rename the widget to `emailInput`.
    * Select **Email** from the list of options in the **Data Type** property.
    * In the **Text** property box, enter `Email`.
    * In the **Default Value** property box, type `{{usersTable.selectedRow.email}}`.
5. You also need to view the user's date of birth. Drop a Datepicker widget inside the Form. 
    * Rename the widget to `dobInput`.
    * In the **Text** property box, enter `DOB`.
    * Click the **JS** button next to the **Default Date** property to connect the Datepicker widget to the user's date of birth on the Table. 
    * Type `{{usersTable.selectedRow.dob}}` in the **Default Date** property box.
6. And finally to view the user's photo, drop an Image widget inside the Form. 
    * In the **Image** property box, type `{{usersTable.selectedRow.image}}`.

🚩 You've completed binding the data to the widgets on the Form. Select the rows on the Table to view the corresponding user details on the Form.

<figure>
  <img src="/img/bind-data-to-widgets.gif" style= {{width:"100%", height:"auto"}} alt="Bind data to widgets"/>
  <figcaption align = "center"><i>Bind data to widgets</i></figcaption>
</figure>

## Update user details

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **usersTutorialDB query** from the list of options. 

3. Rename the query to `updateUsers`. Click the white space below the query name for a blank query editor.  

4. Paste the below SQL update command in the query editor to save any modified data in the Form for the selected row of the **usersTable** Table back to the database.

  ```sql
  UPDATE users 
  SET name = {{nameInput.text}}, 
  email = {{emailInput.text}}, 
  dob = {{dobInput.selectedDate}}
  WHERE id = {{usersTable.selectedRow.id}} 
  ```
5. Go back to the canvas by clicking on the **User Information** page on the *Entity Explorer*.

6. To connect the **updateUsers** query to a button, select the default **Submit** button on the Form.
    * On the property pane to the right of the screen, in the **Label** property box, change the label to `Update`.
    * Click the **+** icon next to the **onClick** event. 
    * In the **Action** list, select **Execute a query > updateUsers** to run the query on button click. 
    * Click **Callbacks** right under the action selector.  
    * Click the **+** icon next to the **onSuccess** callback. 
    * Select **Execute a query > getUsers**. 
    
    The button is now configured to execute the **updateUsers** query to save any modified user details on the Form and to refresh the Table widget with the updated information. 

<figure>
  <img src="/img/run-query-on-click-event.png" style= {{width:"100%", height:"auto"}} alt="Run query on the button's onClick event"/>
  <figcaption align = "center"><i>Run query on the button's onClick event</i></figcaption>
</figure>

7. Select the first row on the Table. Go ahead and modify the user's name on the Form and test the **Update** button to see how things work .

  :::caution
  The databases used in tutorials are public and shared by all Appsmith users, so ensure that you don't input confidential information during testing. The databases are automatically reset every day, so any updates made to these databases are temporary.
  :::

8. Click the **Deploy** button on the top right of the screen to deploy the application and test it in the *View* mode. 

🚩 Congratulations! You have built your first app that can display data from the database and save the updated data on the Form.

In this tutorial, you explored a few different widgets and created a simple database GUI to view, query, and update data on a sample PostgreSQL database. You can use these skills to build your own app.

Happy App Building.

## Next steps

[**Tutorials**](/learning-and-resources/tutorials/)<br />
