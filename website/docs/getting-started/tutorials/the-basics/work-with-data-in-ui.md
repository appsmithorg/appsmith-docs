---
id: work-with-data-in-ui
slug: /getting-started/tutorials/the-basics/work-with-data-in-ui
description:  Interact with Data in UI
---

# Lesson 2 - Work with Data in UI

This tutorial take you through the process of viewing and editing individual records via forms.

## View details for each record

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
    * In the **Date format** property, select the **LL** date format.
6. And finally to view the user's photo, drop an Image widget inside the Form. 
    * In the **Image** property box, type `{{usersTable.selectedRow.image}}`.

🚩 You've completed binding the data to the widgets on the Form. Select the rows on the Table to view the corresponding user details on the Form.

<figure>
  <img src="/img/bind-data-to-widgets.gif" style= {{width:"100%", height:"auto"}} alt="Bind data to widgets"/>
  <figcaption align = "center"><i>Bind data to widgets</i></figcaption>
</figure>

## Update records

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **usersTutorialDB query** from the list of options. 

3. Rename the query to `updateUsers`. Delete the default fetch query template.  

4. Paste the below SQL update command in the query editor to update the `users` table in the database with the details modified in the Form.

  ```sql
  UPDATE users 
  SET name = {{nameInput.text}}, 
  email = {{emailInput.text}}, 
  dob = {{dobInput.selectedDate}}
  WHERE id = {{usersTable.selectedRow.id}} 
  ```

## Run query on button click

1. Go back to the canvas by clicking on the **User Information** page on the *Entity Explorer*.

2. To connect the **updateUsers** query to a button, select the default **Submit** button on the Form.
    * On the property pane to the right of the screen, in the **Label** property box, change the label to `Update`.
    * Click the **+** icon next to the **onClick** event. 
    * In the **Action** list, select **Execute a query > updateUsers** to run the query on button click. 
    * Click the **+** icon next to the **onSuccess** callback. 
    * Select **Execute a query > getUsers**. 
    
    The button is now configured to execute the **updateUsers** query to save any modified user details on the Form and to refresh the Table widget with the updated information. 

<figure>
  <img src="/img/run-query-on-click-event.png" style= {{width:"100%", height:"auto"}} alt="Run query on the button's onClick event"/>
  <figcaption align = "center"><i>Run query on the button's onClick event</i></figcaption>
</figure>

3. Select the first row on the Table. Go ahead and modify the user's name on the Form and test the **Update** button to see if the update worked.

  :::caution
  The databases used in tutorials are public and shared by all Appsmith users, so ensure that you don't input confidential information during testing. The databases are automatically reset every day, so any updates made to these databases are temporary.
  :::

## Next steps
- [Lesson 3 - Now Code It](/getting-started/tutorials/the-basics/write-js-code)


