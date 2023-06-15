---
sidebar_position: 1
---


# Build the Dashboard

In this section, you'll learn to:
* Connect to the tickets database
* Fetch the ticket details from the database
* Build a dashboard using the Chart and Stats Box widget
* Display data from queries on the dashboard

## Connect the database

1. On the *Entity Explorer* to the left of the screen, click on the **Dashboard** page you created in [Setting up the application](/getting-started/tutorials/customer-support-tool#setting-up-the-application).

2. In the **Explorer** tab, click the **+** icon next to **Datasources** to add a new datasource.

3. Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the fields to connect to your PostgreSQL database. 

<figure>
  <img src="/img/connect-to-postgreSQL-database.png" style= {{width:"100%", height:"auto"}} alt="Connect to PostgreSQL database"/>
  <figcaption align = "center"><i>Connect to PostgreSQL database</i></figcaption>
</figure>

4. Click the pencil icon next to the default database name on the top left and rename the database to `supportTickets`.

5. Enter the following details in the connection parameter fields:<br/>
  **Host Address**: `db.baasvaubakmoiodgijae.supabase.co` <br/>
  **Port**: `6543`<br/>
  **Database Name**: `postgres`<br/>
  **Username**: `postgres`<br/>
  **Password**: `dgdqbxqHMW4W*e`<br/>

6. Click the **Test** button to test the connection and ensure the database is valid.
7. Click **Save** to create and save the database connection. You'll see the `supportTickets` database page.

## Fetch tickets data

1. Click the **+ New Query** button to the right of the screen.

2. Rename the query to `getTickets`. Click the white space below the query name for a blank query editor.  

3. Write the following SQL query.
    ```sql
      SELECT * FROM tickets;
    ```

4. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

5. Click the **Settings** tab. Switch on the **Run query on page load** option.


## Build the UI

1. Drop two Text widgets on the canvas as shown below.

<figure>
  <img src="/img/dashboard-titles.png" style= {{width:"800px", height:"auto"}} alt="Dashboard Title and Greeting Message"/>
  <figcaption align = "center"><i>Dashboard Title and Greeting Message</i></figcaption>
</figure>

2. To set the title, on the *Property Pane* to the right of the screen, enter `Dashboard` in the **Text** property.
3. Click the **Style** tab on the *Property Pane*. Select **XL** in the **Font size** property list.
3. For the personalised greeting in the second Text widget, enter `👋 Hey {{appsmith.user.name}}, welcome back!` in the **Text** property. For more information about the `appsmith.user` object, see [Context Object](/reference/appsmith-framework/context-object#user).

4. Drop a Stats Box widget on the canvas as shown below. Delete the Icon Button and the Text widget with the value `21% more than last month`. Add an Image widget below the Text widget with value `2.6 M`.

5. On the *Property Pane* to the right of the screen,  
<figure>
  <img src="/img/dashboard-stats.png" style= {{width:"800px", height:"auto"}} alt="Stats Box"/>
  <figcaption align = "center"><i>Stats Box</i></figcaption>
</figure>

6. In the Text widget with the default value `Page Views`, change the value in the **Text** property to `Unassigned`.

7. In the Text widget with the default value `2.6 M`, change the value in the **Text** property to `{{getTickets.data.filter(t => t.assignedTo==null).length}}`  This JS code filters all the tickets that have no agents assigned to them.

8. In the Image widget, enter `https://cdn-icons-png.flaticon.com/512/1077/1077012.png` in the **Image** property.

9. Click the **Style** tab. In the **Background color** property, select the lightest shade of green color.

<figure>
  <img src="/img/dashboard-stats-style.png" style= {{width:"800px", height:"auto"}} alt="Stats Box Style"/>
  <figcaption align = "center"><i>Stats Box Style</i></figcaption>
</figure>

9. Similarly, add three more Stats Box widgets as shown in the image below with the following properties:

  | Widget  | Property                             |Default value                           | New value                         |
  | ------ | ---------- | ------------------------------------------------- | ---------------------------------- |
  | Text  |  Text     |     Page Views                                  | `Open` |
  | Text   | Text  | 2.6 M                                      | `{{getTickets.data.filter(t =>  t.status==='open').length}}`  |
  | Image  | Image | -                                      | `https://cdn-icons-png.flaticon.com/512/833/833643.png` |

  | Widget  | Property                             |Default value                           | New value                         |
  | ------ | ---------- | ------------------------------------------------- | ---------------------------------- |
  | Text  |  Text     |     Page Views                                  | `Critical` |
  | Text   | Text  | 2.6 M                                      | `{{getTickets.data.filter(t => t.priority==='high' && t.status==='open').length}}`  |
  | Image  | Image | -                                      | `https://cdn-icons-png.flaticon.com/512/2797/2797387.png` |

  | Widget  | Property                             |Default value                           | New value                         |
  | ------ | ---------- | ------------------------------------------------- | ---------------------------------- |
  | Text  |  Text     |     Page Views                                  | `Overdue` |
  | Text   | Text  | 2.6 M                                      | `{{getTickets.data.filter(t => t.status==='open' && moment(t.createdAt).diff(moment(),'days') <= -30).length}}`  |
  | Image  | Image | -                                      | `https://cdn-icons-png.flaticon.com/512/10755/10755684.png` |
 
<figure>
  <img src="/img/dashboard-stat-boxes.png" style= {{width:"800px", height:"auto"}} alt="Dashboard Issue Stats"/>
  <figcaption align = "center"><i>Dashboard Issue Stats</i></figcaption>
</figure>


## Fetch data for charts

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

3. Rename the query to `issuesByCategory`. Click the white space below the query name for a blank query editor.  

4. Paste the below SQL command in the query editor to fetch issues for each category. The Chart widget expects data in the structure `{ x: string, y: number }`.  

  ```sql
  SELECT category as x, COUNT (*) AS y FROM tickets GROUP BY category;
  ```

5. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

6. Click the **Settings** tab. Switch on the **Run query on page load** option.


7. Similarly, create another named `openIssuesByPriority` with the following SQL command to fetch the status and priority of open tickets. 
   
   ```sql
  SELECT status, priority as x, COUNT(*) as y from tickets WHERE status = 'open' GROUP BY priority,status ORDER BY y;
  ```
8. Repeat steps 5 and 6.

9. Go back to the canvas by clicking on the **Dashboard** page on the *Entity Explorer*.

## Create column and pie chart

1. Drop a Chart widget below the Stats Box widget. BY default, the **Column Chart** option is selected in the **Chart type** property.
2. In the **Series title** property, change the default title from **Sales** to `Issues`. 
3. In the **Series data** property, bind the query results by entering the value `{{issuesByCategory.data}}`.
4. In the **Title** property, enter the value `Issues by Category`. 
5. Under the **Axis** section, in the **x-axis label** property box, enter `Category`. In the y-axis label property, enter `Issue Count`.
6. Drop another Chart widget to the right of the column chart.
7. Select **Pie Chart** option in the **Chart type** property.
8. In the **Series title** property, change the default title from **Sales** to `Issues`. 
9. In the **Series data** property, bind the query results by entering the value `{{openIssuesByPriority.data}}`.
10. In the **Title** property, enter the value `Open Issues By Priority`. 

<figure>
  <img src="/img/final-dashboard-page.png" style= {{width:"800px", height:"auto"}} alt="Dashboard"/>
  <figcaption align = "center"><i>Dashboard</i></figcaption>
</figure>

## Next steps
[View and Edit Ticket Details](/getting-started/tutorials/customer-support-tool/view-and-edit-ticket-details)