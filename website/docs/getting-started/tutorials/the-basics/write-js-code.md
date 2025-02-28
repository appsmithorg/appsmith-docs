---
id: write-js-code
slug: /getting-started/tutorials/the-basics/write-js-code
description:  Now Code It
---

# Lesson 3 - Write Code 

This tutorial takes you through the process of writing JavaScript code in Appsmith. In the earlier lessons, you have written JS code inside the mustache syntax `{{}}` which is great for single-line coding. If you want to write more complex code, you have to use JS Objects.

## Write JS functions

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/mp0l5PT6JndQqzxWAk0X?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


Before proceeding, make sure you have completed Lesson 1 and Lesson 2, where you learned how to display, manage, and update data.



1. Open your application and, from the Entity Explorer, click the JS tab, which allows you to create and manage JavaScript functions.

2. Click the **+ New JS Object** to create a new `JSObject1`, where you can define variables, write functions, and reuse logic across your application.


3. Delete the existing code inside `export default {}` and replace it with the following function, which returns a color code based on gender. This function will be used to dynamically change the background color of table cells in the next steps.

  ```javascript
  getBackground: (gender) => {
    if (gender == 'male') return "#42f587";
    else if (gender == 'female') return "#f5e942";
    else return "#f57b42";
  }
  ```
  This function returns a different hex color code based on gender. 

4. Navigate back to the canvas by selecting the **UI** tab in the Entity Explorer.

5. Select the `usersTable` Table. 

6. Open the column settings by clicking the **⚙️** (gear icon) next to the gender column, then navigate to the **Style** tab.

7. In the **Cell Background** property, click the **JS** button to enable JavaScript execution, then paste the following code snippet. This will dynamically set the background color of each row based on the user’s gender.

<dd>

The function inside `JSObject1` takes the gender value from each row and returns a corresponding color code, which is applied to the background.

  ```js
  {{JSObject1.getBackground(currentRow.gender)}}
  ```

  You will see the cell color change based on the value in the gender column.


</dd>


## Use built-in objects and functions

Appsmith provides global objects and functions within its framework to help build your apps. 

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/5lOBkGnAvnfbBFsKpC4h?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Let's show an alert message after the update query runs. Click the **Update** button in the Form widget. In the **onClick** event, click the **JS** button to the right. Modify the code as shown below.
  ```javascript
  {{
    updateUsers.run().then(() => {
    showAlert('Record updated');
    getUsers.run();
    });
  }}
  ```
  Test by editing any record and click the **Update** button to see the alert message pop up on the top of the screen.

2. Create a new blank page by clicking on the **+** next to **Pages** on the Entity Explorer to the left of the screen. Rename the page to `Account Details`.  


3. Let's display the name of the currently logged-in user. Drop a Text widget at the top of this page. You will see your name or email id by default. Take a look at the **Text** property on the right. It contains the following code snippet.

  ```javascript
  Hello {{appsmith.user.name || appsmith.user.email}}
  ```
  Here you are using the `appsmith` global object to extract information about the currently logged-in user and append it to the text `Hello`. For more information, refer to [appsmith](/reference/appsmith-framework/context-object) global object.

### Navigate to another page  

1. You can also navigate from one page to another. Go back to the **User Information** page. Drop a button widget anywhere on the canvas. Change its **Label** property to `Next Page`.

2. In the **onClick** property, click the **JS** button. 

3. Between the curly braces `{{}}` enter the following code snippet

  ```javascript
  navigateTo('Account Details')
  ```

4. Click the **Next Page** button to test if it redirects you to the **Account Details** page. 

For more information on all the global functions available in the Appsmith framework, see [Global Functions](/reference/appsmith-framework/widget-actions).


5. Click the **Deploy** button on the top right of the screen to deploy the application and test it in the *View* mode.

---

🚩 Congratulations! You have built your first app that can display data from the database and save the updated data using a form.

In this tutorial, you explored a few different widgets and created a simple database GUI to view, query, and update data on a sample PostgreSQL database. You can use these skills to build your own app.

Happy App Building!