---
sidebar_position: 2
id: start-building
slug: /getting-started/start-building
---
# Build Your First App

In this quickstart guide, learn to:

* Create a new application
* Connect to a database
* Build UI by dragging and dropping widgets onto the canvas
* Write queries to fetch data from the database
* Bind data to widgets
* Deploy and share the application

## Prerequisites

Before you begin, you'll need to create an account on [Appsmith Cloud](https://app.appsmith.com/), or you can [self-host Appsmith](/getting-started/setup) locally or on a hosting platform of your choice.

## Create new application

* When creating a new [Appsmith account](https://app.appsmith.com/), an application titled `My first application` is automatically added on the **Apps** tab under a default workspace on the **Workspaces** pane. You can use this application to build your first app or create a new one by clicking on the **+ New** button under the workspace.
* For this tutorial, use the default application. Hover over the card titled `My first application` and click the **Edit** button to open the application.

<figure>
  <img src="/img/create-new-app.png" style= {{width:"100%", height:"auto"}} alt="Create a new application on Appsmith"/>
  <figcaption align = "center"><i>Create a new application on Appsmith</i></figcaption>
</figure>


* You'll land on the Appsmith editor. Select the **Build with drag & drop** card to start from scratch and create your custom UI.
* **Page 1** is the default page on the application. To rename the page, click on the Kebab menu︙(three vertical dots) to the right of the page name and select **Edit Name** option. Label the page `User Information`.

## Connect database

For this guide, use the mock PostgreSQL database named `users` available on Appsmith.

* On the **Explorer** tab, click the **+** sign next to **Datasources**. Under the **Sample Databases** section, select **users**.
* The '**users**' database gets added under **Explorer** > **Datasources**.

<figure>
  <img src="/img/Add_Datasource.png" style= {{width:"100%", height:"auto"}} alt="Connect to a datasource"/>
  <figcaption align = "center"><i>Connect to a datasource</i></figcaption>
</figure>

## Build UI

* Navigate to **PAGES** > **User Information**. In the entity explorer to the left of the screen, click the **Widgets** tab, and drag and drop a Table widget on the canvas. On the property pane to the right of the screen, rename the table from `Table1` to `usersTable`.
* Drag and drop a Container widget to the right of the Table widget. Let's add a few widgets to display user details from the selected row on the table. Add a label titled **User Details**.
* Add Input widgets for Name (`nameInput`), Email (`emailInput`) and Phone (`phoneInput`), a Datepicker widget for DOB (`dobInput`), an Image widget to display an image and finally, a Button widget labelled **Update**.

<figure>
  <img src="/img/build-ui.png" style= {{width:"100%", height:"auto"}} alt="Build UI by laying out widgets on the canvas"/>
  <figcaption align = "center"><i>Build UI by laying out widgets on the canvas</i></figcaption>
</figure>

## Create queries and bind data to widgets

* On the **Explorer** tab, navigate to the database under **Datasources > users**
* Click the **New Query +** button to the right of the screen.

<figure>
  <img src="/img/create-new-query.png" style= {{width:"100%", height:"auto"}} alt="Create a new query on the datasource"/>
  <figcaption align = "center"><i>Create a new query on the datasource</i></figcaption>
</figure>

* Rename the query to `getUsers`.
* Write the below query to pull ten records from the `users` table in the PostgreSQL database.

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

<figure>
  <img src="/img/write-fetch-data-query.png" style= {{width:"100%", height:"auto"}} alt="Write query to fetch data in the query editor"/>
  <figcaption align = "center"><i>Write query to fetch data in the query editor</i></figcaption>
</figure>


* Click the **Run** button on the top right of the query editor to confirm that the query returns data.
* Navigate to **PAGES > User Information**. Hover over the table and click on the table name `usersTable` to open the property pane. In the **Table Data** box, write the below JS snippet to display the results from the `getUsers` query on the table.

```javascript
{{getUsers.data}}
```

:::info
The mustache template `{{}}` is used to write JS inside widgets and queries.
:::

<figure>
  <img src="/img/bind-data-from-query.png" style= {{width:"100%", height:"auto"}} alt="Bind the data from the query to the Table widget"/>
  <figcaption align = "center"><i>Bind the data from the query to the Table widget</i></figcaption>
</figure>

* Similarly, to display information from a selected row on the table, refer below to bind the corresponding data to the widgets inside the Container.

  | Widget | Name       | Property                                          | Value                              |
  | ------ | ---------- | ------------------------------------------------- | ---------------------------------- |
  | Image  | -          | Image                                             | ```{{usersTable.selectedRow.image}}``` |
  | Name   | `nameInput`  | Default Text                                      | ```{{usersTable.selectedRow.name}}```  |
  | Email  | `emailInput` | Default Text                                      | ```{{usersTable.selectedRow.email}}``` |
  | DOB    | `dobInput`   | Default Date                                      | ```{{usersTable.selectedRow.dob}}``` |
  | Phone  | `phoneInput` | Default Text                                      | ```{{usersTable.selectedRow.phone}}``` |

:::tip
Turn on the **JS** toggle to bind data for the **Default Date** property
:::

* Create another query on the `users` mock database and rename it to `updateUsers`. Use the below update command to write any modified data on the widgets back to the database.

```sql
UPDATE users 
SET name = '{{nameInput.text}}', 
email = '{{emailInput.text}}', 
dob = '{{dobInput.selectedDate}}', 
phone = '{{phoneInput.text}}' 
WHERE id = {{usersTable.selectedRow.id}} 
```

* On the property pane of the **Update** button, execute this query on the **onClick** event. On the success of the update query, run the `getusers` query to populate the table with updated data.

<figure>
  <img src="/img/run-query-on-click-event.png" style= {{width:"100%", height:"auto"}} alt="Run query on the button's onClick event"/>
  <figcaption align = "center"><i>Run query on the button's onClick event</i></figcaption>
</figure>

* Test the **Update** button after modifying the user's phone number.

You’ve completed your first app that can display information from the database and update data, all in just a few minutes.

## Deploy and share app

* Click the **Deploy** button on the top right of the Appsmith editor to deploy the app and test it.
* Once deployed, you can share your application with users. Click the **Share** button on the top right of the Appsmith editor.
  * Invite specific users using their email ID
    * Select an appropriate role for the user
    * Share the application's URL with the user
  * You can also make the application **Public**. In this case, anyone with the application URL can view the application without signing in. See [Access control](/advanced-concepts/access-control) for more information.

Congratulations, you have completed the Appsmith quickstart tutorial.

The quickstart tutorial covered only the basic concepts. There's so much more to explore, so head over to [Core Concepts](/core-concepts/connecting-to-data-sources).

