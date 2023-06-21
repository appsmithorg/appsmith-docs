---
sidebar_position: 3
---

# Add New Tickets

In this section, you'll learn to:
* Capture data entered in Form.
* Add new tickets to the database.

## Build UI

You need to build a Form to capture details for new tickets.

1. Drop a Modal widget on the canvas. 
    - On the top of the property pane, change the name from **Modal1** to `mdlNewTicket`.
    - Select the **Modal Title** Text widget. Change the title in the **Text** property to`New Ticket`.
    - Delete the default **Close** and **Confirm** buttons.

2. Drop a Form widget inside the Modal. Delete the default **Form** title.

3. Drop two Input and three Select widgets inside the Form and set their properties as follows:

    <b><u>Properties - Input widget 1</u></b>

    <dt><b>Name</b></dt>
    <dd>c_user</dd>

    <dt><b>Data Type</b></dt>
    <dd>Email</dd>

    <dt><b>Text</b></dt>
    <dd>User Email</dd>

    <dt><b>Required</b></dt>
    <dd>true</dd>

    <br/><b><u>Properties - Input widget 2</u></b>

    <dt><b>Name</b></dt>
    <dd>c_description</dd>

    <dt><b>Data Type</b></dt>
    <dd>Multi-line text</dd>

    <dt><b>Text</b></dt>
    <dd>Description</dd>

    <dt><b>Required</b></dt>
    <dd>true</dd>

    <br/><b><u>Properties - Select widget 1</u></b>
    <dt><b>Name</b></dt>
    <dd>c_category</dd>

    <dt><b>Options</b></dt>

    ```javascript
    [
    {
        "label": "Hardware",
        "value": "hardware"
        },
        {
        "label": "Software",
        "value": "software"
        },
        {
      "label": "Other",
        "value": "other"
        }
     ]
    ```
    <dt><b>Default selected value</b></dt>
    <dd>-</dd>

    <dt><b>Label</b></dt>
    <dd>Category</dd>

    <br/><b><u>Properties - Select widget 2</u></b>
    <dt><b>Name</b></dt>
    <dd>c_assignee</dd>

    <dt><b>Options</b></dt>

    ```javascript
    [
        {
        "label": "Kadao",
        "value": "kadao@appsmith.com"
         },
	    {
        "label": "Rishabh",
        "value": "rishabh@appsmith.com"
        },
        {
        "label": "Confidence",
        "value": "confidence@appsmith.com"
        }
    ]
    ```
    <dt><b>Default selected value</b></dt>
    <dd>-</dd>

    <dt><b>Label</b></dt>
    <dd>Assignee</dd>

    <br/><b><u>Properties - Select widget 3</u></b>
    <dt><b>Name</b></dt>
    <dd>c_priority</dd>

    <dt><b>Options</b></dt>

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
    <dt><b>Default selected value</b></dt>
    <dd>-</dd>

    <dt><b>Label</b></dt>
    <dd>Priority</dd>

    The output should look something like this: 

<figure>
  <img src="/img/add-new-ticket-modal.png" style= {{width:"800px", height:"auto"}} alt="New Ticket Modal"/>
  <figcaption align = "center"><i>Fig 1. New Ticket Modal</i></figcaption>
</figure>

## Create add ticket query

You have to create an insert query to add the data entered in the form into the database.

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the query to `createTicket`. Click the white space below the query name for a blank query editor.  

5. Write the following SQL query.
    ```sql
    INSERT INTO tickets ("id", "createdAt", "user", "description", "status", "priority", "category", "assignedTo")
    VALUES ('{{appsmith.store.ticket.id}}', '{{moment().format('YYYY-MM-DD hh:mm:ss')}}', '{{c_user.text}}', '{{c_description.text}}', 'open', '{{c_priority.selectedOptionValue}}', '{{c_category.selectedOptionValue}}', '{{c_assignee.selectedOptionValue}}');
  ```

6. Go back to the canvas by clicking on the **← Back** button above the query editor.

## Submit new tickets

1. On the *Entity Explorer*, under **JS Objects** section, click on **utils**.

2. You have to write a new function in the **utils** JS Object to generate a unique ID for the new record before calling the **createTicket** insert query. Post running the insert query, we want to refresh the List to show the newly added ticket and then close the Modal. Below the **getFilteredTickets** function. Add a comma `,` after the end of the function denoted by `}`. Write the function as follows:

```javascript
createTicket: async () => {
	await storeValue('ticket', {id: Math.random().toString(36).substring(7)})
	.then(() => createTicket.run())
	.then(()=> this.getFilteredTickets())
	.then(()=> closeModal('mdlNewTicket'))
}
```
<figure>
  <img src="/img/code-to-create-new-ticket.png" style= {{width:"800px", height:"auto"}} alt="JS function to submit new ticket"/>
  <figcaption align = "center"><i>Fig 2. JS function to submit new ticket</i></figcaption>
</figure>

3. Drop a Button widget on the canvas.
    - Change the **Label** property to `Add Ticket`.
    - Click the **+** icon next to the **on Click** event.
    - In the **Select an action** list, select **Show Modal**.
    - In the **Modal name** list, select the **mdlNewTicket** modal.
    - Click the **Style** tab, in the **Select icon** list, search `plus` and select the icon.

4. Click the **Add Ticket** button to open the Modal.

5. Select the **Submit** button in the Form.
    - Click the **+** icon next to the **on Click** event.
    - In the **Select an action** list, select **Execute a JS function > utils > createTicket**.

6. Enter test data in the form and click the **Submit** button to verify that the new ticket details are added in the database and on the List.

## Next steps
[Edit Ticket Details](/getting-started/tutorials/customer-support-tool/edit-ticket-details)