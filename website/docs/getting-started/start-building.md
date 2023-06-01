---
sidebar_position: 2
id: start-building
slug: /getting-started/start-building
description:  Learn the basics of building an app on Appsmith.
---
# Build Your First App

:::info
⭐ **Level** - Beginner <br/>
⏱️ **Time** - 10 minutes
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

🚩 Let's get started.

## Prerequisites

* An Appsmith account. If you don’t have one, sign up on [**Appsmith cloud**](https://app.appsmith.com/).

## Create new application

1. When you create a new account, Appsmith adds a workspace with a single application titled **My first application** by default. You need a new empty application for this tutorial. If you are already inside an application, click on the Appsmith logo on the top left of the screen to go to the homepage.

2. On the homepage, click the **+ New** button to the right of the default workspace. You'll land on a new application in the *Edit* mode.

<figure>
  <img src="/img/create-new-app.png" style= {{width:"100%", height:"auto"}} alt="Create new application"/>
  <figcaption align = "center"><i>Create new application</i></figcaption>
</figure>

3. Click the **⌵** icon on the top left next to the default application name. Select the **Edit Name** option. Rename the app to `User Management`.

4. **Page 1** is the default page on the application. On the entity explorer to the left of the screen, click the **︙** icon next to the page name and select the **Edit Name** option. Rename the page to `User Information`.

<figure>
  <img src="/img/edit-page-name.png" style= {{width:"100%", height:"auto"}} alt="Edit page name"/>
  <figcaption align = "center"><i>Edit page name</i></figcaption>
</figure>

## Connect to database

1. Click the **Explorer** tab on the entity explorer to the screen's left. Click the **+** icon next to **Datasources.** 

2. Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the fields to connect to your PostgreSQL database. 

3. Click the pencil icon next to the default database name on the top left and rename the database to `usersTutorialDB`.

3. Enter the following details in the connection parameter fields:<br/>
  **Host Address**: `mockdb.internal.appsmith.com` <br/>
  **Port**: `5432`<br/>
  **Database Name**: `users`<br/>
  **Username**: `users`<br/>
  **Password**: <br/>

4. Click the **Test** button to test the connection and ensure the database is valid.

5. Click **Save** to create and save the database connection. You'll see the `usersTutorialDB` database page.

<figure>
  <img src="/img/Add_Datasource.png" style= {{width:"100%", height:"auto"}} alt="Connect to sample database"/>
  <figcaption align = "center"><i>Connect to sample database</i></figcaption>
</figure>

🚩 You've successfully connected to the PostgreSQL database that contains user information.

## Fetch user data

1. Click the **+ New Query** button to the right of the query.

<figure>
  <img src="/img/create-new-query.png" style= {{width:"100%", height:"auto"}} alt="Create a new query on the datasource"/>
  <figcaption align = "center"><i>Create a new query on the datasource</i></figcaption>
</figure>

2. Click the **Select** query template from the list of query commands. It populates the query editor with a fetch query to pull ten records from the `usersTutorialDB` database table. 

3. Click the pencil icon to rename the query from **Query1** to `getUsers`.

4. Click the **Run** button on the top right of the screen or `CMD + Enter` to execute the query and confirm that it returns data.

<figure>
  <img src="/img/fetch-data-query.png" style= {{width:"100%", height:"auto"}} alt="Fetch data from database"/>
  <figcaption align = "center"><i>Fetch data from database</i></figcaption>
</figure>

🚩 You've created your first query to fetch the list of users in the database.

## Display user data on Table

1. To go back to the canvas, select the **User Information** page in the entity explorer to the left of the screen. 

2. Click the **Widgets** tab. Drag and drop a Table widget to the left of the canvas.

3. The properties of the Table are available on the right of the screen. On the top of property pane, rename the Table widget from **Table1** to `usersTable`.

4. In the **Table Data** property box, delete the default static JSON data. 

5. To display the data from the **getUsers** query, type in the mustache template `{{}}`. Enter `getUsers.data` between the curly braces. This JavaScript expression connects the data from the **getUsers** query to the Table widget.

:::info
The mustache template `{{}}` is used to write JS code inside widgets and queries on Appsmith.
:::

<figure>
  <img src="/img/display-data-in-table.png" style= {{width:"100%", height:"auto"}} alt="Display data in table"/>
  <figcaption align = "center"><i>Display data in table</i></figcaption>
</figure>

🚩 You've displayed the results from the query on the Table widget.

## Build form to view user details

1. Drop a Form widget on the canvas to the right of the Table widget. 
2. Select the default Text widget on the Form. In the **Text** property box, change the title from **Form** to `User Details`.
3. For the user's name, drop an Input widget inside the Form. 
    * Rename the widget from **Input1** to `nameInput`. 
    * In the **Text** property box, enter `Name`. 
    * In the **Default Value** property box, type `{{usersTable.selectedRow.name}}`. This displays the user's name of the selected row on the **usersTable** Table widget.
4. Let's do the same for the user's email. Drop another Input widget inside the Form. 
    * Rename the widget to `emailInput`.
    * Select **Email** from the list of options in the **Data Type** property.
    * In the **Text** property box, enter `Email`.
    * In the **Default Value** property box, type `{{usersTable.selectedRow.email}}`.
5. You also need to view the user's date of birth. Drop a Datepicker widget inside the Form. 
    * Rename the widget to `dobInput`.
    * Click the **JS** button next to the **Default Date** property to connect the Datepicker widget to the user's date of birth on the Table. 
    * Type `{{usersTable.selectedRow.dob}}` in the **Default Date** property box.
6. And finally to view the user's photo, drop an Image widget inside the Form. 
    * In the **Image** property box, type `{{usersTable.selectedRow.image}}`.

🚩 You've completed binding the data to the widgets on the Form. Select the rows on the Table to view the corresponding user details on the Form.

<figure>
  <img src="/img/bind-data-to-widgets.gif" style= {{width:"100%", height:"auto"}} alt="Bind data to widgets"/>
  <figcaption align = "center"><i>Bind data to widgets</i></figcaption>
</figure>

## Edit user details

1. On the entity explorer's **Explorer** tab, click **Queries/JS**. 

2. Select the **usersTutorialDB** from the list of options. 

3. Rename the query to `updateUsers`. Click the white space below the query name to get a blank editor.  

4. Paste the below update command in the query editor to save any modified data in the Form on the selected row of the **usersTable** Table back to the database.

  ```sql
  UPDATE users 
  SET name = {{nameInput.text}}, 
  email = {{emailInput.text}}, 
  dob = {{dobInput.selectedDate}}, 
  WHERE id = {{usersTable.selectedRow.id}} 
  ```
4. Go back to the canvas by clicking the **‹ Back** button above the query name.

5. To bind the **updateUsers** query, select the default **Submit** button on the Form.
    * In the **Label** property box, change the label to `Update`.
    * Click the **+** icon next to the **onClick** event. In the **Select an action** list, select **Execute a query > updateUsers** to run the query on button click. 
    * Click **Callbacks** right under the action selector.  
    * Click the **+** icon next to the **onSuccess** callback. 
    * Select **Execute a query > getUsers**. 
    
    The button is now configured to execute the **updateUsers** query to save any modified user details on the form and to refresh the Table widget with the updated information. 

<figure>
  <img src="/img/run-query-on-click-event.png" style= {{width:"100%", height:"auto"}} alt="Run query on the button's onClick event"/>
  <figcaption align = "center"><i>Run query on the button's onClick event</i></figcaption>
</figure>

5. Select the first row in the Table. Go ahead and modify the user's name on the Form and test the **Update** button to see how things work .

  :::caution
  The databases used in tutorials are public and shared by all Appsmith users, so ensure that you don't input any confidential information during testing. The databases are automatically reset every day, so any updates made to these databases are temporary.
  :::

6. Click the **Deploy** button on the top right of the screen to deploy the application and test it in the *View* mode. 

🚩 Congratulations. You have built your first app that can display data from the database, and save the updated data on the form.

In this tutorial, you explored a few different widgets and created a simple database GUI to view, query, and update data on a sample PostgreSQL database. You can use these skills to build your own app.

Happy App Building.

## Next steps

[**Tutorials**](/learning-and-resources/tutorials/)<br />
