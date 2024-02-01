---
id: work-with-data-in-ui
slug: /getting-started/tutorials/the-basics/work-with-data-in-ui
description:  Interact with Data in UI
---

# Lesson 2 - Work with Data in UI

This tutorial takes you through the process of viewing and editing individual records via forms.

## View details for each record


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/NrxLsXWwZvT7dRLX0ahx?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. On the **UI** tab, click **+ New Widget** and drop a **Form** widget on the canvas to the right of the Table widget. 

2. Click the title **Form**. On the property pane to the right of the screen, in the **Text** property box, change the title from **Form** to `User Details`.

3. Now add widgets on the Form to view user details. 
    * For the user's name, drop an **Input** widget inside the Form. 
    * On the property pane to the right, click on the default name **Input1** and rename it to `nameInput`. 
    * In the **Text** property box, enter `Name`. 
    * In the **Default Value** property box, type `{{usersTable.selectedRow.name}}`. This displays the user's name of the selected row on the **usersTable** Table widget.

4. You also need to view the user's date of birth. 
    * Drop a **Datepicker** widget inside the Form. 
    * Rename the widget to `dobInput`.
    * In the **Text** property box, enter `DOB`.
    * Click the **JS** button next to the **Default Date** property to connect the Datepicker widget to the user's date of birth on the Table. 
    * Type `{{usersTable.selectedRow.dob}}` in the **Default Date** property box.
    * In the **Date format** property, select the **LL** date format.

5. And finally to view the user's photo, drop an **Image** widget inside the Form. 
    * In the **Image** property box, type `{{usersTable.selectedRow.image}}`.

🚩 You've completed binding the data to the widgets on the Form. Select the rows on the Table to view the corresponding user details on the Form.

## Update records

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/0Sf2FlrCzNCX2zapBlPF?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="User Management | Update Query">
  </iframe>
</div>

1. Select the **Queries** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+ New Query / API** button. 

3. Select **usersTutorialDB query** from the list of options. 

3. Rename the query to `updateUsers`. Delete the default fetch query template.  

4. Paste the below SQL update command in the query editor to update the `users` table in the database with the details modified in the Form.

  ```sql
  UPDATE users 
  SET name = {{nameInput.text}},
  dob = {{dobInput.selectedDate}}
  WHERE id = {{usersTable.selectedRow.id}} 
  ```

### Trigger update on button click

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/Is54jOpZXtoGPUCEEFW5?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Go back to the canvas by clicking on the **UI** tab on the *Entity Explorer*.

2. To connect the **updateUsers** query to a button, select the default **Submit** button on the Form.
    * On the property pane to the right of the screen, in the **Label** property box, change the label to `Update`.
    * Click the **+** icon next to the **onClick** event. 
    * In the **Action** list, select **Execute a query > updateUsers** to run the query on button click. 
    * Click the **+** icon next to the **onSuccess** callback. 
    * Select **Execute a query > getUsers**. 
    
    The button is now configured to execute the **updateUsers** query to save any modified user details on the Form and to refresh the Table widget with the updated information. 

3. Select the first row on the Table. Go ahead and modify the user's name on the Form and test the **Update** button to see if the update worked.

  :::caution
  The databases used in tutorials are public and shared by all Appsmith users, so ensure that you don't input confidential information during testing. The databases are automatically reset every day, so any updates made to these databases are temporary.
  :::

## Next steps
- [Lesson 3 - Now Code It](/getting-started/tutorials/the-basics/write-js-code)


