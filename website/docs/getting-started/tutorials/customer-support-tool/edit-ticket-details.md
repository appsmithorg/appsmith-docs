---
sidebar_position: 4
---

# Edit Ticket Details

In this section, you'll learn to:
* Create a form to edit ticket details
* Update and save ticket details.

## Build UI

When you click a list item, you need to open a modal to edit the ticket details in a form.

1. Drop a Modal widget on the canvas. 
    - On the top of the property pane, change the name from **Modal1** to `mdlEditTicket`.
    - Select the **Modal Title** Text widget. Change the title in the **Text** property to `Ticket Details`.
    - Delete the default **Close** and **Confirm** buttons.

2. Drop a Tabs widget inside the Modal.
    - In the **Tabs** property, rename the default tab names to `Details` and `Comments`.

2. Drop a Form widget inside the **Details** tab. 
    - Delete the default **Form** title. 
    - Delete the **Reset** button.
    - Click the **Submit** button. Change the **Label** property to `Save`.

3. You need to display the details of the currently selected item in the List. Refer to Fig 1 for placement of widgets. Drop 3 Input and four Select widgets inside the Form and set their properties as follows:
    
    <b><u>Properties - Input widget 1</u></b>

    **Name**: `tktId` <br/>
    **Default value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.id}}
    ```
    **Text**: `ID`<br/>
    **Disabled**: `true`

  <b><u>Properties - Input widget 2</u></b>

    **Name**: `userEmail` <br/>
    **Default value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.user}}
    ```
    **Text**: `User Email`<br/>
    **Disabled**: `true`

  :::info
  The **Disabled** property is turned on for the ID and User Email fields to prevent users from editing them.
  :::

    <br/><b><u>Properties - Input widget 3</u></b>

    **Name**: `tktDescription` <br/>
    **Data type**: `Multi-line text` <br/>
    **Default value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.description}}
    ```
    **Text**: `Description`

    <br/><b><u>Properties - Select widget 1</u></b>

    **Name**: `tktStatus` <br/>
    **Options**: 

    ```javascript
    [
      {
        "label": "Open",
        "value": "open"
      },
	    {
        "label": "In Progress",
        "value": "in-progress"
      },
      {
        "label": "Closed",
        "value": "closed"
      }
    ]
    ```
    **Default selected value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.status}}
    ```
    **Text**: `Status`

    <br/><b><u>Properties - Select widget 2</u></b>

    **Name**: `tktCategory` <br/>
    **Options**: 

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
    **Default selected value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.category}}
    ```
    **Text**: `Category`

    <br/><b><u>Properties - Select widget 3</u></b>

    **Name**: `tktAssignee` <br/>
    **Options**: 

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
    **Default selected value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.assignedTo}}
    ```
    **Text**: `Assignee`

    <br/><b><u>Properties - Select widget 4</u></b>

    **Name**: `tktPriority` <br/>
    **Options**: 

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
    **Default selected value**: 

    ```javascript
    {{lstTicketDetails.selectedItem.priority}}
    ```
    **Text**: `Priority`

    The output should look something like this: 

<figure>
  <img src="/img/edit-ticket-modal.png" style= {{width:"800px", height:"auto"}} alt="Edit Ticket Details"/>
  <figcaption align = "center"><i>Fig 1. Edit Ticket Details</i></figcaption>
</figure>

## Create update ticket query

You have to create an update query to save the modified tickets details to the database.

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the query to `updateTicket`. Click the white space below the query name for a blank query editor.  

5. Write the following SQL query.
  ```sql
  UPDATE tickets SET
	"updatedAt" = '{{moment().format('YYYY-MM-DD hh:mm:ss')}}',
  "description" = '{{editDescription.text}}',   
  "status" = '{{editStatus.selectedOptionValue}}',
  "priority" = '{{editPriority.selectedOptionValue}}',
  "category" = '{{editCategory.selectedOptionValue}}',
  "assignedTo" = '{{editAssignee.selectedOptionValue}}'
  WHERE "id" = '{{lstTicketDetails.selectedItem.id}}';
  ```

6. Go back to the canvas by clicking on the **← Back** button above the query editor.

## Save edited tickets

1. Click the first list item to open the Modal.

2. Click the **Save** button. Click the **JS** button next to the **onClick** event in the *property pane*. 

3. You have write code to call the update query, refresh the List widget, show a message and then close the modal. Write the JS code as shown below in the **onClick** event property:

```javascript
{{
  updateTicket.run().then(() => {
  utils.getFilteredTickets();
  showAlert('Ticket Updated', 'success');
  closeModal('mdlEditTicket');
  });
}}
```

4. Modify any field click the **Save** button to test that the ticket details are updated in the database and in the List.

## Next steps
[Add Comments on Tickets](/getting-started/tutorials/customer-support-tool/edit-ticket-details)