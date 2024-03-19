---
title: Session 1
hide_title: false
---

<!-- vale off -->

## Getting Started

1. Sign up on this instance: [Optum Training Instance](https://training.app.appsmith.com/user/signup) (Ignore if already done)

2. Now you will be guided through the Onboarding. Select your profiency with Appsmith.

##  Datasources
1. **REST API**
<dd>

* Go to Data on the sidebar and Click on the button **Bring your data** and select Datasource **REST API**.
* Enter **https://mock-api.appsmith.com** in the field
* Click **Save it as a datasource** and you will be taken to the Datasource configuration page
* Name the Datasource as **Mock API** and go ahead and click Save.
* Now rename the API as **getUsers** and append the path **/users** to the url 
* Click on Run and see the results below on the page
* Great!! You have successfully created an API Datasource and a Query on top of it

</dd>

2. **PostgreSQL**
<dd>

* Now go back to Data on the sidebar and Click on the **+** symbol on the top, next to **Datasources in your workspace**
* Select **PostgreSQL** and you will be taken to the configuration page
* Now fill in the follow credentials as seen below
    ```jsx
    Host: mockdb.internal.appsmith.com
    Port: 5432
    Database: users
    User: users
    Password: new-users-db-pass
    ```
* Also rename this Datasource as **Postgres** and go ahead and click Save.
* You will be able to see the schema of your table, and also preview of the data on right side inside each table.
* Now click on the button **New Query** on the top right
* There will be a default query already filled in. You can go ahead and click on Run and see the results below on the page
* Great!! You have successfully created a Postgres Datasource and a Query on top of it

</dd>

## Workspaces and Apps

1. In the Editor mode, on the top, you will see your App name as **My First Application**. Click on it and Rename it as **Activity 1**.
2. Now click on the Appsmith Logo on the top left corner of the page, and it will take you back to the Appsmith Workspaces page.
3. You will be able to see your workspaces or what workspaces you have access to. And also see what all Apps are accessible for you.
4. On the rightmost, next to the **Create new** button, you will see a three-dot menu. Click on it and you will see your workspace name.
5. Click on the Edit icon next to it and rename your workspace as **\<Name\>-Training-Workspace**

## Widgets

1. **Table Widget**
<dd>

* Introduce a Table widget
* Connect it to your datasource
* Go to the **Queries** Tab on the left and check out the Appsmith generated CRUD queries
* See how the table supports Server Side Pagination
* Play around with the inline editing and add row to table

</dd>

2. **Button Widget**
<dd>

* Introduce a Button widget on top of the table placed on the right
* Name the button as Refresh, and possibly find an icon from the style to suit the Action
* Connect the onClick of the widget to the Table’s Select Query

</dd>

3. **Select Widget**
<dd>

* Introduce a Select widget
* Enable JS binding, and hardcode inside it to have label and value for male and female
* Update the Table’s Select query to have an additional Where clause to filter based on gender
<details>
  <summary>Show Hint</summary>
  <div>
    ```jsx
    WHERE “name” ilike ‘%{{Table1.searchText}}%’
    AND “gender” ilike '{{Select1.selectedOptionValue}}%'
    ```
  </div>
</details>

* Connect the onChange of the Select Widget to trigger the Table’s Select Query

</dd>

4. **Container Widget**
<dd>

* Place the 3 widgets Table, Button and Select as per your choice
* Click and highlight all the widgets to select them, and you will see a minibar popup
* Select the last option, ie the Container widget to wrap these widgets inside a container
* Now move it around the canvas to align it centrally

</dd>

## Theming

<dd>

* Go to the bottom left Corner and click on the **:gear:** button that will take you to the App Settings
* Click on Theme and explore changing the primary color, app border radius and shadow

</dd>

## Deploy App
Go ahead and click on the Deploy button on the top right and see your App in deployed mode

## Share App

<dd>

- Share to [tom@appsmith.com](mailto:tom@appsmith.com) and [sujoy@appsmith.com](mailto:sujoy@appsmith.com) as App Viewer
- Also try making it a public App by enabling **Make application public** and try opening it in incognito mode 

</dd>