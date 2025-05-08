---
id: work-with-data-in-ui
slug: /getting-started/tutorials/the-basics/work-with-data-in-ui
description:  Interact with Data in UI
---

# Quickstart

In this tutorial, you’ll learn how to update database records directly from the UI using interactive widgets. You’ll create a form that allows users to modify their details and save the changes seamlessly.


:::tip What will I learn? 📝
By the end of this tutorial, you will learn to:

- Bind widget data to a database.
- Display and edit table data using a form.
- Update user details from the UI and save changes to the database.
- Trigger queries or JavaScript functions based on user actions.
:::


<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/nM2iq5FvdGmm2OHagdbB?embed"
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


1. Open your application and, from the Entity Explorer, click the **UI** tab. The UI tab opens a list of available widgets in Appsmith, which can be used to display data and design the app.

2. Click **+ New UI element** and drop a **Table** widget on the canvas.

3. Click **Connect Data** and select **Users** from the *Choose Datasource to Connect* option.

4. Select `public.users` and set the `name` column as searchable to allow filtering.

5. Click **+ New UI element** and drop a **Form** widget on the canvas to the right of the Table widget. The Form widget allows you to collect details from users, which can then be stored or used to update existing records in the database.

6. Rename the Form title to `User Details`. 

7. To display and edit user details, add an **Input** widget for the user's name, a **Datepicker** widget for the date of birth, and an **Image** widget for the profile photo inside the form.

<dd>

Configure the properties as shown below:


| **Widget**      | **Name**       | **Property**      | **Value**                          | **Description**                                       |
|---------------|---------------|------------------|----------------------------------|---------------------|
| **Input**     | `nameInput`    | Default Value   | `{{usersTable.selectedRow.name}}` | Displays the user's name and allows editing.  |
| **Datepicker** | `dobInput`    | Default Date    | `{{usersTable.selectedRow.dob}}`  | Displays the user's date of birth for selection and modification. |
|               |               | Date Format     | **LL**                           | Formats the date in a user-friendly format. |
| **Image**     | `profile` | Image Source  | `{{usersTable.selectedRow.image}}` | Displays the user's profile photo.            |

With `{{}}` (mustache binding), you can dynamically display and update data from various sources, such as widgets, queries, and APIs, in other components.

- `usersTable`: The name of the Table widget from which we want to fetch the user's data.
- `selectedRow`: The reference property of the Table widget that provides access to the currently selected row's data in `usersTable`.
- The `name`, `dob`, and `image` are the selected user's properties retrieved from `selectedRow`.




</dd>


8. Select the *Queries* tab on the Entity Explorer on the left side of the screen, then click the **+ New Query / API** button to create a new query.

9. Select the Users datasource from the list of options, then rename the query to `updateUsers`.

10. Update the SQL command in the query editor to update the users table with the details edited in the Form.

<dd>

```sql
UPDATE public."users" 
SET name = {{nameInput.text}}, 
    dob = {{dobInput.selectedDate}} 
WHERE id = {{usersTable.selectedRow.id}};
```

In this SQL command, we are dynamically updating the users table with the edited values from the form. The bindings inside `{{ }}` reference the widget properties:

- `{{nameInput.text}}` retrieves the updated name from the Input widget.
- `{{dobInput.selectedDate}}` retrieves the selected date from the Datepicker widget.
- `WHERE id = {{usersTable.selectedRow.id}}` ensures only the selected user’s record is updated.

</dd>

11. Navigate back to the canvas by selecting the **UI** tab in the Entity Explorer.


12. To update the database when the Submit button is clicked:

<dd>

- Select the default Submit button on the form and rename it to Update.
- In the **onClick** event, set the action to Execute the `updateUsers`. This runs the query to update the database with the modified details.
- In the **onSuccess** callback, set the action to Execute a query > `getUsers`. This refreshes the table data to reflect the updated user details.

Now, select a row in the table widget to display the user's details in the form. After making the necessary updates, click Update to save the changes to the database and refresh the table with the updated data.



</dd>






  :::caution
  The databases used in tutorials are public and shared by all Appsmith users, so ensure that you don't input confidential information during testing. The databases are automatically reset every day, so any updates made to these databases are temporary.
  :::