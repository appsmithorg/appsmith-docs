---
id: work-with-data-in-ui
slug: /getting-started/tutorials/the-basics/work-with-data-in-ui
description:  Interact with Data in UI
---

# Work with Data in UI

In this lesson, you will learn how to display, update, and manage data. You will connect a table to a database, display user details in a form, and use the form to update user details directly from the UI.

:::tip What will I learn? 📝
By the end of this tutorial, you will learn to:

- Connect UI widgets to a database.
- Display and edit user details using a form.
- Update user details from the UI and save changes to the database.
- Trigger queries or JavaScript functions based on user actions.
:::


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/nM2iq5FvdGmm2OHagdbB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

Before proceeding, ensure that you have completed [Lesson 1: Connect and Display Data](/getting-started/tutorials/the-basics/connect-query-display-data), where you will learn how to connect your app to a database, fetch data, and display it using a Table widget.

1. Open your application and, from the Entity Explorer, click the **UI** tab. The UI tab opens a list of available widgets in Appsmith, which can be used to display data and design the app.

2. Click **+ New UI element** and drop a **Form** widget on the canvas to the right of the Table widget. The Form widget allows you to collect details from users, which can then be stored or used to update existing records in the database.

3. Rename the Form title to `User Details`. 

4. Now, let's add different widgets inside the form to display and edit user details, including the user's name, date of birth, and photo.

<dd>

By doing this, whenever a row in the usersTable is selected, the corresponding user details will be displayed in the form. This allows you to view and update user information directly.

#### User's Name

To display and edit the user's name:

* Drop an **Input** widget inside the form and rename it to `nameInput`.
* In the **Text** property box, enter `Name`. This serves as a label for the input field.
* In the **Default Value** property box, type `{{usersTable.selectedRow.name}}`. This displays the user's name of the selected row on the **usersTable** Table widget.

#### User's Date of Birth

* Drop an **Datepicker** widget inside the form and rename it to `dobInput`.
* In the **Text** property box, enter `DOB`.
* Click the **JS** button next to the **Default Date** property to connect the Datepicker widget to the user's date of birth on the Table. 
* Add `{{usersTable.selectedRow.dob}}` in the **Default Date** property box.
* In the **Date format** property, select the **LL** date format.

#### User's Photo

* Drop an **Image** widget inside the form.
* In the **Image** property box, add `{{usersTable.selectedRow.image}}`.

You've completed binding the data to the widgets on the Form. Select the rows on the Table to view the corresponding user details on the Form.

</dd>


5. Select the *Queries* tab on the Entity Explorer on the left side of the screen, then click the **+ New Query / API** button to create a new query.

6. Select the Users datasource from the list of options, then rename the query to `updateUsers`.

7. Update the SQL command in the query editor to update the users table with the details edited in the Form.

<dd>

```sql
UPDATE public."users" 
SET name = {{nameInput.text}}, 
    dob = {{dobInput.selectedDate}} 
WHERE id = {{usersTable.selectedRow.id}};
```

</dd>

8. Navigate back to the canvas by selecting the **UI** tab in the Entity Explorer.


9. To update the database when the Submit button is clicked:

<dd>

- Select the default Submit button on the form and rename it to Update.
- In the **onClick** event, set the action to Execute the `updateUsers`. This runs the query to update the database with the modified details.
- In the onSuccess callback, set the action to Execute a query > getUsers. This refreshes the table data to reflect the updated user details.

Now, select a row in the table widget to display the user's details in the form. After making the necessary updates, click Update to save the changes to the database and refresh the table with the updated data.









</dd>






  :::caution
  The databases used in tutorials are public and shared by all Appsmith users, so ensure that you don't input confidential information during testing. The databases are automatically reset every day, so any updates made to these databases are temporary.
  :::

## Next steps
- [Lesson 3 - Now Code It](/getting-started/tutorials/the-basics/write-js-code)


