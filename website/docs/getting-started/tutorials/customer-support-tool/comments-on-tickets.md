---
sidebar_position: 5
---

# View and Add Comments

In this section, you'll learn to view and add comments to a ticket.

## Write query to fetch comments

You have to create a query to fetch all the comments entered for the ticket.

1. On the **Tickets** page, select the **Explorer** tab to the left of the screen. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the new query to `getComments`. Click the white space near the query templates.

5. Write the following SQL query.
  ```sql
  SELECT * FROM comments
  WHERE ticket='{{lstTicketDetails.selectedItem.id}}';

## Build UI

1. Click the first item in the **lstTicketDetails** List to open the Modal.

2. Select the **Comments** tab you created in the [Edit Ticket Details](/getting-started/tutorials/customer-support-tool/edit-ticket-details#build-ui) page.

3. Refer to Fig 1 for the placement of widgets inside the Tab. Drop an Input widget. Set the properties as follows:
    - **Widget Name**: `commentsBox` <br/>
    - **Data type**: `Multi-line text`

4. Drop a List widget. In the **Items** property, enter `{{getComments.data}}` to connect the results of the query to the List widget.

6. Delete the default Image widget in the first list item. 

7. You now need to display the data from the query in the two Text widgets. In step 4 above, you already connected the List widget to the **getComments** query. Use the `currentItem` reference property of the List widget to display the data in the Text widgets as shown in the table below: 

  | Property                   |Value                                              |
  | -------------------------- | ------------------------------------------------- | 
  | Text   | `Author: {{currentItem.author}}` |
  | Text   | `{{currentItem.text}}` |

8. Drop a Button widget. In the **Label** property, change the value to `Add Comment`. 

The output should look something like this: 

<figure>
  <img src="/img/add-comments.png" style= {{width:"800px", height:"auto"}} alt="Add Comments"/>
  <figcaption align = "center"><i>Fig 1. Add Comments</i></figcaption>
</figure>


## Write query to add comments

You have to create a query to add the comments entered for the ticket.

1. Select the **Explorer** tab to the left of the screen. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the new query to `createComment`. Click the white space near the query templates.

5. Write the following SQL query 
  ```sql
  INSERT INTO comments ("ticket", "text", "author", "id", "createdAt")
  VALUES ('{{lstTicketDetails.selectedItem.id}}', '{{commentsBox.text}}', '{{appsmith.user.email}}', '{{Math.random().toString(36).substring(7)}}', '{{moment().format('YYYY-MM-DD hh:mm:ss')}}');
  ```
8. Go back to the canvas by clicking the **← Back** button above the query editor.

## Add comments on button click

You have to execute the **createComment** query on button click and refresh the List widget with the new comment by calling the **getComments** query.

1. Click the first item in the **lstTicketDetails** List to open the Modal.

2. In the **Comments** tab, select the **Add Comment** button.
    - In the **Select an action** list, select **Execute a query > createComment** to run the query on button click. 
    - Click **Callbacks** right under the action selector.  
    - Click the **+** icon next to the **On success** callback. 
    - Select **Execute a query > getComments**. 

9. Enter a comment and click the **Add Comment** button to test if the comment is added in the List .

## Next steps
[Application Settings](/getting-started/tutorials/customer-support-tool/application-settings)