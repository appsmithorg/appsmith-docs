---
sidebar_position: 2
id: start-building
slug: /getting-started/start-building
description:  Learn the basics of building an app on Appsmith.
---
# Build Your First App

In this quickstart tutorial, you'll:

* Create a new application
* Connect a datasource and fetch data 
* Display data in a table
* Edit and submit data using a form
* Deploy and share the application

## Prerequisites

Before you begin, create an account on [Appsmith Cloud](https://app.appsmith.com/).

## Create new application

1. When you create an Appsmith account, an application titled `My first application` is added by default. You can use this application to build your first app or create a new one by clicking the **+ New** button to the right of the workspace.
2. For this tutorial, use the default application. Hover over the card titled `My first application` and click the **Edit** button to open the application.

<figure>
  <img src="/img/create-new-app.png" style= {{width:"100%", height:"auto"}} alt="Create a new application on Appsmith"/>
  <figcaption align = "center"><i>Create a new application on Appsmith</i></figcaption>
</figure>

3. You'll land on the Appsmith editor. *Page 1* is the default page on the application. To rename the page, click on the three dots menu︙ to the right of the page name and select the **Edit Name** option. Label the page `User Information`.

## Connect database

For this tutorial, use the mock PostgreSQL database named `users` available on Appsmith.

On the **Explorer** tab, click the **+** sign next to **Datasources**. Under the **Sample Databases** section, select **users**. The `users` database gets added under **Explorer** > **Datasources**.

<figure>
  <img src="/img/Add_Datasource.png" style= {{width:"100%", height:"auto"}} alt="Connect to a datasource"/>
  <figcaption align = "center"><i>Connect to a datasource</i></figcaption>
</figure>

## Fetch data

1. Click the **New Query +** button to the right of the screen.

<figure>
  <img src="/img/create-new-query.png" style= {{width:"100%", height:"auto"}} alt="Create a new query on the datasource"/>
  <figcaption align = "center"><i>Create a new query on the datasource</i></figcaption>
</figure>

2. Click the **Select** query template from the list of query commands. It populates the query editor with the fetch query to pull ten records from the `users` table. Rename the query to `getUsers`.

<figure>
  <img src="/img/fetch-data-query.png" style= {{width:"100%", height:"auto"}} alt="Fetch data from database"/>
  <figcaption align = "center"><i>Fetch data from database</i></figcaption>
</figure>

3. Click the **Run** button on the top right of the query editor to confirm that the query returns data.

## Display data

1. Navigate to **PAGES** > **User Information**. In the entity explorer to the left of the screen, click the **Widgets** tab, and drag and drop a Table widget on the canvas. On the property pane to the right of the screen, rename the table from *Table1* to `usersTable`.

2. Navigate to **PAGES > User Information**. Hover over the table and click on the table name `usersTable` to open the property pane. In the **Table Data** box, paste the below JS code to display the results from the `getUsers` query on the table.

  ```javascript
  {{getUsers.data}}
  ```

<figure>
  <img src="/img/display-data-in-table.png" style= {{width:"100%", height:"auto"}} alt="Display data in table"/>
  <figcaption align = "center"><i>Display data in table</i></figcaption>
</figure>


:::info
The mustache template `{{}}` is used to write JS code inside widgets and queries in Appsmith.
:::

## Edit and submit data

1. Drag and drop a Form widget to the right of the Table widget. Change the title from *Form* to `User Details`.
2. Add an Input widget inside the form. Rename the widget to `nameInput`. In the **Text** property box, enter `Name`. Similarly, add Input widgets for email and phone named `emailInput`, and `phoneInput`, respectively. Add a Datepicker widget for date of birth named `dobInput` and an Image widget to display the user's photo. The output should look something like this:

<figure>
  <img src="/img/form-to-edit-details.png" style= {{width:"100%", height:"auto"}} alt="Create a form to view and edit details"/>
  <figcaption align = "center"><i>Create a form to view and edit details</i></figcaption>
</figure>

3. To display details on the form when you select a table row, bind the query response to the widgets. Refer to the table below to see the widget properties and the values to enter.

  | Widget | Name       | Property                                          | Value                              |
  | ------ | ---------- | ------------------------------------------------- | ---------------------------------- |
  | Image  | -          | Image                                             | ```{{usersTable.selectedRow.image}}``` |
  | Name   | `nameInput`  | Default Text                                      | ```{{usersTable.selectedRow.name}}```  |
  | Email  | `emailInput` | Default Text                                      | ```{{usersTable.selectedRow.email}}``` |
  | Phone  | `phoneInput` | Default Text                                      | ```{{usersTable.selectedRow.phone}}``` |
  | Date of Birth    | `dobInput`   | Default Date *                                    | ```{{usersTable.selectedRow.dob}}``` |

  \* <i>Turn on the <b>JS</b> toggle to bind data for the <b>Default Date</b> property.</i>

<figure>
  <img src="/img/bind-data-to-widgets.png" style= {{width:"100%", height:"auto"}} alt="Bind data to widgets"/>
  <figcaption align = "center"><i>Bind data to widgets</i></figcaption>
</figure>

4. On the **Explorer** tab, navigate to **Datasources > users**. Click the **New Query +** button to the right of the screen.

5. Rename the query to `updateUsers`. Write the below update query to update any modified data on the widgets back to the database.

  ```sql
  UPDATE users 
  SET name = '{{nameInput.text}}', 
  email = '{{emailInput.text}}', 
  dob = '{{dobInput.selectedDate}}', 
  phone = '{{phoneInput.text}}' 
  WHERE id = {{usersTable.selectedRow.id}} 
  ```

6. On the property pane of the **Submit** button on the form, in the **onClick** event list, select **Execute a query > updateUsers** to run the query on button click. 

7. In the **onSuccess** list, select **Execute a query > getUsers** to repopulate the table with updated data.

<figure>
  <img src="/img/run-query-on-click-event.png" style= {{width:"100%", height:"auto"}} alt="Run query on the button's onClick event"/>
  <figcaption align = "center"><i>Run query on the button's onClick event</i></figcaption>
</figure>

8. Test the **Update** button after modifying the user's phone number.

You have built your first app that can read and display data from the database and save the updated data.

## Deploy and share app

* Click the **Deploy** button on the top right of the Appsmith editor to deploy the app and test it.
* Once deployed, you can share your application with users. Click the **Share** button on the top right of the Appsmith editor.
  * Invite specific users using their email ID
    * Select an appropriate role for the user
    * Share the application's URL with the user
  * You can also make the application **Public**. In this case, anyone with the application URL can view the application without signing in. See [Share Application](/advanced-concepts/share-application) for more information.

You have completed the quickstart tutorial.

## Further reading

[Tutorials](/learning-and-resources/tutorials)<br />
[Core Concepts](/core-concepts/connecting-to-data-sources)

