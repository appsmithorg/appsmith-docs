---
sidebar_position: 5
---

# Add Comments on Tickets


## Create add comments query

You have to create an query to add the comments entered by the agent for the ticket.

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the query to `createComment`. Click the white space below the query name for a blank query editor.  

5. Write the following SQL query.
  ```sql
  INSERT INTO comments ("ticket", "text", "author", "id", "createdAt")
  VALUES ('{{lstTicketDetails.selectedItem.id}}', '{{commentsBox.text}}', '{{appsmith.user.email}}', '{{Math.random().toString(36).substring(7)}}', '{{moment().format('YYYY-MM-DD hh:mm:ss')}}');
  ```
  
6. Go back to the canvas by clicking on the **← Back** button above the query editor.

## Build UI

1. On the **Tickets** page, click the first list item to open the Modal.

2. Select the **Comments** tab you created in the [Edit Ticket Details](/getting-started/tutorials/customer-support-tool/edit-ticket-details#build-ui) page.

3. Refer to Fig 1 for the placement of widgets inside the Tab. Drop an Input widget. Set the properties as follows:
    - **Name**: `commentsBox` <br/>
    - **Data type**: `Multi-line text`

4. Drop a List widget. 

5. In the **Items** property, enter `{{getComments.data}}` to connect the results of the query to the List widget.

6. Delete the default Image widget in the first list item. 

7. You now need to display the data from the query in the two Text widgets. In step 4 above, you already connected the List widget to the **getComments** query. Use the `currentItem` reference property of the List widget to display the data in the list items as shown in the table below: 

  | Property                   |Value                                              |
  | -------------------------- | ------------------------------------------------- | 
  | Text   | `Author: {{currentItem.author}}` |
  | Text   | `{{currentItem.text}}` |

8. Drop a Button widget. In the **Label** property, change the value to `Add Comment`.

9. You have to execute the **getComments** query and refresh the List widget.
        - In the **Select an action** list, select **Execute a query > createComment** to run the query on button click. 
        - Click **Callbacks** right under the action selector.  
        - Click the **+** icon next to the **On success** callback. 
        - Select **Execute a query > getComments**. 

4. Enter a comment and click the **Add Comment** button to test if the comment is added in the List .


## Next steps
[Application Settings](/getting-started/tutorials/customer-support-tool/edit-ticket-details)