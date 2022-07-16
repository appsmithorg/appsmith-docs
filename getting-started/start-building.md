# Build Your First App

In this Quickstart guide, you will learn to&#x20;

* Create a new application
* Connect to a database
* Build UI by dragging and dropping widgets onto the canvas
* Write queries to fetch data from the database
* Bind data to widgets
* Deploy and share the application

## Prerequisites

Before you begin, you'll need to create an account on [Appsmith Cloud](https://app.appsmith.com/), or you can [self-host Appsmith](setup/) locally or on a hosting platform of your choice.

## **Create a New Application**

* When creating a new [Appsmith account](https://app.appsmith.com/), an application titled '**My first application'** is automatically added under the default **Organization**. You can use this application to build your first app or create a new one by clicking on the **+ New** button under the Organization.
* For this tutorial, we will use the default application. Hover over the '**My first application'** card and click the **Edit** button to open the application.

![Creating a new application on Appsmith](<../.gitbook/assets/Screenshot 2022-07-12 at 23.04.43.png>)

* You'll land on the Appsmith editor. Select the **Build with drag & drop** option to start from scratch and create your custom UI.&#x20;
* **'Page 1'** is the default page on the application. To rename the page, click on the Kebab menu (three vertical dots) and select **Edit Name**. Label the page '**User Information**'.

## **Connect Database**

We'll use the mock PostgreSQL database named '**users'** available on Appsmith.

* On the **Explorer** tab, click the **+** sign next to **DATASOURCES**. Under **Sample Databases,** select **users.**
* The '**users'** database will be added under the **Explorer** tab -> **DATASOURCES**.

![Creating a new datasource](<../.gitbook/assets/Add Datasource.png>)

## **Build UI**

* Navigate to **PAGES** → **User Information**. Drag and drop a [**Table**](../reference/widgets/table.md) widget on the canvas. On the **Property Pane** to the right, rename the table to '**usersTable**'.
* Drag and drop a [**Container**](../reference/widgets/container.md) widget to the right of the Table widget. Let's add a few widgets to display user details from the selected row on the table. Add a label titled '**User Details**'.
* Add [**Input**](../reference/widgets/input.md) widgets for Name **** (nameInput), Email (emailInput) and Phone (phoneInput), a [**Datepicker**](../reference/widgets/datepicker.md) widget for DOB (dobInput), an Image widget for the Image and finally a [**Button**](../reference/widgets/button/) widget labelled '**Update**'.

![Build UI by laying out widgets on the canvas](<../.gitbook/assets/Screenshot 2022-06-28 at 10.50.31 PM.png>)

## **Create Queries and Bind Data to Widgets**

* On the **Explorer** tab, navigate to the database under **DATASOURCES** → **users**&#x20;
* Click on the **New Query +** button next to the datasource.

![Creating a new query on the datasource](<../.gitbook/assets/New Query (1).png>)

* Rename the query to ‘**getUsers**’
* Write the below query to pull ten records from the '**users'** table in the database.&#x20;

```
SELECT * FROM users ORDER BY id LIMIT 10;
```

![Writing query to fetch data in the Query Editor](<../.gitbook/assets/Screenshot 2022-07-12 at 22.38.19.png>)

* Click the **Run** button on the right of the Query Editor to confirm that the query returns data.
* Navigate to **PAGES** → **User Information**. Hover over the table and click on the table name 'usersTable' to open the property pane. On the [**Table Data**](../reference/widgets/table.md#table-data) property write this JS snippet **`{{getUsers.data}}`** to display the results from the 'getUsers**'** query on the table.&#x20;

{% hint style="info" %}
The `{{mustache}}` template is used to write JS inside widgets and queries.
{% endhint %}

![Bind the data from the query to the table widget](<../.gitbook/assets/Screenshot 2022-07-12 at 22.40.59.png>)

* Similarly, to display information from a selected row on the table, refer below to bind the corresponding data to the widgets inside the Container.

| Widget | Name       | Property                                          | Value                              |
| ------ | ---------- | ------------------------------------------------- | ---------------------------------- |
| Image  | -          | Image                                             | `{{usersTable.selectedRow.image}}` |
| Name   | nameInput  | Default Text                                      | `{{usersTable.selectedRow.name}}`  |
| Email  | emailInput | Default Text                                      | `{{usersTable.selectedRow.email}}` |
| DOB    | dobInput   | Default Date<mark style="color:orange;">\*</mark> | `{{usersTable.selectedRow.dob}}`   |
| Phone  | phoneInput | Default Text                                      | `{{usersTable.selectedRow.phone}}` |

_<mark style="color:orange;">\*Turn on the</mark> <mark style="color:orange;"></mark><mark style="color:orange;">**JS**</mark> <mark style="color:orange;"></mark><mark style="color:orange;">toggle to bind data for the</mark> <mark style="color:orange;"></mark><mark style="color:orange;">**Default Date**</mark> <mark style="color:orange;"></mark><mark style="color:orange;">property</mark>_

* Create another query on the '**users'** database and rename it to '**updateUsers**'. Use the below update command to write any modified data on the widgets back to the database.&#x20;

```
UPDATE users SET name = '{{nameInput.text}}', email = '{{emailInput.text}}', dob = '{{dobInput.selectedDate}}', phone = '{{phoneInput.text}}' WHERE id = {{usersTable.selectedRow.id}} 
```

* On the property pane of the **Update** button execute this query on the [**onClick**](../reference/widgets/button/#events) event. On the success of the update query, run the '**getusers'** query to populate the table with updated data.

![](<../.gitbook/assets/Screenshot 2022-06-28 at 11.36.28 PM.png>)

* Test the **'Update'** button by modifying the phone number of the user.

You’ve completed your first app that can display information from the database and update data, all in just a few minutes.

## Deploy and Share

* Click the **Deploy** button on the top right of the Appsmith editor to deploy the app and test it as an **App Viewer.**&#x20;
* Once deployed, you can share your application with users. Click the **Share** button on the top right of the Appsmith editor.
  * Invite specific users using their email ID
    * Select an appropriate role for the user
    * Share the application's URL with the user
  * You can also make the application **public**. In this case, anyone with the application URL can view the application without signing in. You can read more about **access control** [**here**](../advanced-concepts/access-control.md).

Congratulations, you have completed the Appsmith Quickstart tutorial. Now that you have created your first Appsmith application, you may be wondering what to learn next. The Quickstart covered only the basic concepts. There's so much more to explore, so head over to the [**next steps**](../#advanced-users).

