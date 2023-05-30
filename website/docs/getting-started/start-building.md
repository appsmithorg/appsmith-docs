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

1. Create a new application
2. Connect to a database and fetch data 
3. Display the data in a Table widget
4. Edit and submit the data using a Form widget
5. Deploy and share the application

Here's a screenshot of the final result.

<figure>
  <img src="/img/beginner-tutorial-output.png" style= {{width:"100%", height:"auto"}} alt="Simple Database GUI"/>
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure>

Let's get started.

## Prerequisites

* An Appsmith account. If you don’t have one, sign up on [**Appsmith cloud**](https://app.appsmith.com/).

## Create application

1. When you create a new account, Appsmith adds a workspace with a single application titled **My first application** by default. On the **Apps** tab of the homepage, click the **+ New** button to the right of the default workspace. You'll land on the Appsmith editor.

<figure>
  <img src="/img/create-new-app.png" style= {{width:"100%", height:"auto"}} alt="Create new application"/>
  <figcaption align = "center"><i>Create new application</i></figcaption>
</figure>

2. Click the caret-down icon **⌵** on the top left next to the default application name. Select the **Edit Name** option. Rename the app to `User Management`.

3. **Page 1** is the default page on the application. On the entity explorer to the left of the screen, click the three-dots-menu icon **︙** next to the page name and select the **Edit Name** option. Rename the page to `User Information`.

<figure>
  <img src="/img/edit-page-name.png" style= {{width:"100%", height:"auto"}} alt="Edit page name"/>
  <figcaption align = "center"><i>Edit page name</i></figcaption>
</figure>

## Connect sample database

1. On the **Explorer** tab, click the **+** sign next to **Datasources**. 
2. Appsmith provides sample datasets to help learn and test the platform. Under the **Sample Databases** section, select the **users** PostgreSQL database. The database is added under **Explorer > Datasources**.

<figure>
  <img src="/img/Add_Datasource.png" style= {{width:"100%", height:"auto"}} alt="Connect to sample database"/>
  <figcaption align = "center"><i>Connect to sample database</i></figcaption>
</figure>

## Fetch data

1. Click the **+ New Query** button to the right of the query.

<figure>
  <img src="/img/create-new-query.png" style= {{width:"100%", height:"auto"}} alt="Create a new query on the datasource"/>
  <figcaption align = "center"><i>Create a new query on the datasource</i></figcaption>
</figure>

2. Click the **Select** query template from the list of query commands. It populates the query editor with the fetch query to pull ten records from the `users` database table. 

3. Rename the query from **Query1** to `getUsers`.

4. Click the **Run** button on the top right of the screen to confirm that the query returns data.

<figure>
  <img src="/img/fetch-data-query.png" style= {{width:"100%", height:"auto"}} alt="Fetch data from database"/>
  <figcaption align = "center"><i>Fetch data from database</i></figcaption>
</figure>

You've connected to a database and created your first query to fetch the data.

## Display data

1. Navigate to **PAGES > User Information**. 

2. In the entity explorer to the left of the screen, click the **Widgets** tab, drag and drop a Table widget on the canvas leaving half the space on the right for the Form widget. On the property pane to the right of the screen, rename the Table widget from **Table1** to `usersTable`.

3. In the **Table Data** property box, delete the default JSON data. Type in two curly braces `{{}}`. Enter `getUsers.data` between the braces. This code binds the `getUsers` query to the widget.

:::info
The mustache template `{{}}` is used to write JS code inside widgets and queries on Appsmith.
:::

<figure>
  <img src="/img/display-data-in-table.png" style= {{width:"100%", height:"auto"}} alt="Display data in table"/>
  <figcaption align = "center"><i>Display data in table</i></figcaption>
</figure>

You've displayed the results from the fetch data query on the Table widget.

## Edit and submit data

1. Drop a Form widget on the canvas to the right of the Table widget. 
2. Select the default Text widget on the Form. In the **Text** property box, change the title from **Form** to `User Details`.
3. Drop an Input widget inside the Form. 
    * Rename the widget from **Input1** to `nameInput`. 
    * In the **Text** property box, enter `Name`. 
    * In the **Default Value** property box, enter `{{usersTable.selectedRow.name}}`. This displays the name of the user on the Table's selected row.
4. Drop another Input widget inside the Form. 
    * Rename the widget to `emailInput`.
    * Select **Email** from the list of options in the **Data Type** property.
    * In the **Text** property box, enter `Email`.
    * In the **Default Value** property box, enter `{{usersTable.selectedRow.email}}`. This displays the email of the user on the Table's selected row.
5. Drop a Datepicker widget inside the Form. 
    * Rename the widget to `dobInput`.
    * Switch on the **JS** toggle and enter `{{usersTable.selectedRow.dob}}` in the <b>Default Date</b> property.
6. Drop an Image widget inside the Form. 
    * In the **Image** property box, enter `{{usersTable.selectedRow.image}}`. This displays the photo of the user on the Table's selected row.

The output should look something like this:

<figure>
  <img src="/img/bind-data-to-widgets.png" style= {{width:"100%", height:"auto"}} alt="Bind data to widgets"/>
  <figcaption align = "center"><i>Bind data to widgets</i></figcaption>
</figure>

You've completed binding the data to the widgets on the Form. Select the rows on the Table to view the corresponding user details on the Form.

7. On the **Explorer** tab, navigate to **Datasources > users**. 

8. Click the **New Query +** button to the right of the screen.

9. Rename the query to `updateUsers`. Write the below query to update any modified data on the widgets back to the database.

  ```sql
  UPDATE users 
  SET name = {{nameInput.text}}, 
  email = {{emailInput.text}}, 
  dob = {{dobInput.selectedDate}}, 
  WHERE id = {{usersTable.selectedRow.id}} 
  ```
9. Select the default **Submit** button on the Form.
    * In the **Label** property box, enter `Update`.
    * Click the **+** icon next to the **onClick** event, select **Execute a query > updateUsers** to run the query on button click. 
    * Click **No actions** right under the Action selector.  
    * Click the **+** icon next to the **onSuccess** callback. 
    * Select **Execute a query > getUsers** to refresh the Table widget with the updated information in the database. 

<figure>
  <img src="/img/run-query-on-click-event.png" style= {{width:"100%", height:"auto"}} alt="Run query on the button's onClick event"/>
  <figcaption align = "center"><i>Run query on the button's onClick event</i></figcaption>
</figure>

8. Go ahead and modify the user's details on the Form and test the **Update** button to see how things work .

:::caution
The sample databases are public and shared by all users, so ensure that you don't write any confidential information during testing. As data may be added or updated by different users, the databases are automatically reset every day, so any updates made to these databases are temporary.
:::

Congratulations. You have built your first app that can display data from the database, and save the updated data on the form.

## Deploy and share app

1. Click the **Deploy** button on the top right of the Appsmith editor to deploy the app and test it as an end user. 
2. Click the **Share** button on the top right of the Appsmith editor.
    * Enter the email address of the user.
    * Select an appropriate role for the user from the **Select a role** list.
    * Click the **Invite** button.

See [**Invite Users**](/advanced-concepts/invite-users) for more information on sharing applications.

In this tutorial, you learned to create a simple database GUI using Appsmith and PostgreSQL. Happy App Building!

## Next steps

[**Tutorials**](/learning-and-resources/tutorials/)<br />
