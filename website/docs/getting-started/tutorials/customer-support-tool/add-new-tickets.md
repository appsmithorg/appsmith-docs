---
sidebar_position: 3
---

# Add New Tickets

In this section, you'll learn to:
* Capture data entered in Form.
* Add new tickets to the database.

## Build UI

You need to build a Form to capture details for new tickets.

1. On the **Tickets** page, drop a Modal widget on the canvas. 
    - On the top of the property pane, change the name from **Modal1** to `mdlNewTicket`.
    - Select **Modal Title**. Change the title in the **Text** property to `New Ticket`.
    - Delete the default **Close** and **Confirm** buttons.
    - Increase the width of the Modal using the resize handle.

:::tip
If you accidentally close the Modal, you can open it again by selecting the name of the modal **mdlNewTicket** under the **Explorer** tab in the **Widgets** section.
:::

2. From under the **Widgets** tab, drop a Form widget inside the Modal. Delete the default **Form** title. Increase the width of the Form using the resize handle.

3. Drop two Input and three Select widgets inside the Form and set their properties as follows:

    <b><u>Properties - Input1</u></b>

    - **Widget Name**: `c_user` <br/>
    - **Data type**: `Email`<br/>
    - **Text**: `User Email`<br/>
    - **Required**: `true`

    <br/><b><u>Properties - Input2</u></b>

    - **Widget Name**: `c_description` <br/>
    - **Data type**: `Multi-line text`<br/>
    - **Text**: `Description`<br/>
    - **Required**: `true`

    <br/><b><u>Properties - Select1</u></b>

    - **Widget Name**: `c_category` <br/>
    - **Options**: 

    ```javascript
    [
      {
        "label": "Billing",
        "value": "Billing"
      },
      {
        "label": "Account",
        "value": "Account"
      },
      {
        "label": "Technical",
        "value": "Technical"
      }
    ]
    ```

    - **Default selected value**: empty<br/>
    - **Label**: `Category`

    <br/><b><u>Properties - Select2</u></b>

    - **Widget Name**: `c_assignee` <br/>
    - **Options**: 

    ```javascript
    [
      {
        "label": "John Doe",
        "value": "John Doe"
         },
      {
        "label": "Karmila Fox",
        "value": "Karmila Fox"
      },
      {
        "label": "Sarah Smith",
        "value": "Sarah Smith"
      }
    ]
    ```

    - **Default selected value**: empty<br/>
    - **Label**: `Assignee`

    <br/><b><u>Properties - Select3</u></b>

    - **Widget Name**: `c_priority` <br/>
    - **Options**: 

    ```javascript
    [
      {
        "label": "High",
        "value": "high"
      },
      {
        "label": "Medium",
        "value": "medium"
      },
      {
        "label": "Low",
        "value": "low"
      }
    ]
    ```

    - **Default selected value**: empty<br/>
    - **Label**: `Priority`

    The output should look something like this: 

<ZoomImage src="/img/add-new-ticket-modal.png" alt="New Ticket Modal" caption="Fig 1. New Ticket Modal" />

## Create add ticket query

You have to create an insert query to add the data entered in the Form into the database.

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the query to `createTicket`. Click the white space near the query templates.  

5. Write the following SQL query.
    ```sql
    INSERT INTO support_ticket ("created_at", "user", "description", "status", "priority", "category", "assigned_to")
    VALUES ('{{moment().format("LLL")}}', '{{c_user.text}}', '{{c_description.text}}', 'open', '{{c_priority.selectedOptionValue}}', '{{c_category.selectedOptionValue}}', '{{c_assignee.selectedOptionValue}}');
  ```

6. Go back to the canvas by clicking on the **← Back** button above the query editor.

## Submit new tickets

1. On the *Entity Explorer*, under **JS Objects** section, click on **utils**.

2. You have to write a new function in the **utils** JS Object to call the **createTicket** insert query. Post running the insert query, we want to refresh the List to show the newly added ticket and then close the Modal. At the end of the **getFilteredTickets** function that you wrote earlier, add a comma `,` on line 24 as shown in Fig 2. Write a new function as shown below:

```javascript
createTicket: async () => {
  await createTicket.run()
  .then(()=> this.getFilteredTickets())
  .then(()=> closeModal('mdlNewTicket'))
}
```

<ZoomImage src="/img/code-to-create-new-ticket.png" alt="JS function to submit new ticket" caption="Fig 2. JS function to submit new ticket" />

3. Go back to the canvas by clicking on the **Tickets** page. Drop a Button widget on the canvas to the top right of the screen above the **lstTicketDetails** List.
    - Change the **Label** property to `Add Ticket`.
    - Click the **+** icon next to the **onClick** event.
    - In the **Select an action** list, select **Show Modal**.
    - In the **Modal name** list, select the **mdlNewTicket** modal.
    - Click the **Style** tab, in the **Select icon** list, search `plus` and select the icon.

4. Click the **Add Ticket** button to open the Modal.

5. Select the **Submit** button in the Form.
    - Click the **+** icon next to the **onClick** event.
    - In the **Select an action** list, select **Execute a JS function > utils > createTicket**.

6. Enter test data in the Form and click the **Submit** button to verify that the new ticket details are added in the database and on the List.

## Next steps
[Edit Ticket Details](/getting-started/tutorials/customer-support-tool/edit-ticket-details)