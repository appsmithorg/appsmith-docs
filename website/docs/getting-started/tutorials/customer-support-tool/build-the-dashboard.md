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

1. On the *Entity Explorer* to the left of the screen, click on the **Dashboard** page you created in the [Setting up the application](/getting-started/tutorials/customer-support-tool#setting-up-the-application) section.

2. In the **Explorer** tab, click the **+** icon next to **Datasources** to add a new datasource.

3. Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the fields to connect to your PostgreSQL database. 

4. Click the pencil icon next to the default database name on the top left and rename the database to `supportTickets`.

5. Enter the following details in the connection parameter fields:<br/>
  **Host Address**: `db.baasvaubakmoiodgijae.supabase.co` <br/>
  **Port**: `6543`<br/>
  **Database Name**: `postgres`<br/>
  **Username**: `postgres`<br/>
  **Password**: `dgdqbxqHMW4W*e`<br/>

6. Click the **Test** button to test the connection and ensure the database is valid.
7. Click **Save** to create and save the database connection. You'll see the `supportTickets` database page.

## Fetch ticket details

1. Click the **+ New Query** button to the right of the screen.

2. Rename the query to `getTickets`. Click the white space below the query name for a blank query editor.  

3. Write the following SQL query.

  ```sql
  SELECT * FROM tickets;
  ```

4. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

5. Click the **Settings** tab. Switch on the **Run query on page load** option.


## Build the UI

1. Drop two Text widgets on the canvas.
2. To set the title on the first Text widget, on the *Property Pane* to the right of the screen, enter `Dashboard` in the **Text** property.
3. Click the **Style** tab on the *Property Pane*. Select **XL** in the **Font size** property list.
4. For the personalised greeting in the second Text widget, enter the following in the **Text** property:
   ```javascript
   👋 Hey {{appsmith.user.name}}, welcome back!
   ``` 
  For more information about the `appsmith.user` object, see [Context Object](/reference/appsmith-framework/context-object#user).

  The output should look like this: 

<figure>
  <img src="/img/dashboard-titles.png" style= {{width:"800px", height:"auto"}} alt="Dashboard Title and Greeting Message"/>
  <figcaption align = "center"><i>Fig 1. Dashboard Title and Greeting Message</i></figcaption>
</figure>

4. Drop a Stats Box widget on the canvas. Delete the default Icon Button and the Text widget with the value `21% more than last month`. Add an Image widget below the Text widget with value `2.6 M`. 
    The output should look like this: 

<figure>
  <img src="/img/dashboard-stats.png" style= {{width:"800px", height:"auto"}} alt="Stats Box"/>
  <figcaption align = "center"><i>Fig 2. Stats Box widget</i></figcaption>
</figure>

5. Set the following values for the components in the Stat Box widget: 

    - In the Text widget with the default value `Page Views`, set the value in the **Text** property to `Unassigned`.
    - In the Text widget with the default value `2.6 M`, set the value in the **Text** property using JS code to filter all the tickets that have no agents assigned to them.
     ```javascript
      {{getTickets.data.filter(t => t.assignedTo==null).length}}
      ``` 
    - In the Image widget, enter `https://cdn-icons-png.flaticon.com/512/1077/1077012.png` in the **Image** property.
    - Click the **Style** tab. In the **Background color** property, select the lightest shade of green color from the palette.

    The output should look something like this: 

<figure>
  <img src="/img/dashboard-stats-style.png" style= {{width:"800px", height:"auto"}} alt="Stats Box Style"/>
  <figcaption align = "center"><i>Fig 3. Customised Stats Box widget</i></figcaption>
</figure>

9. Similarly, add three more Stats Box widgets as shown in Fig 4 with the following properties:

**Open ticket stats** 

| Property   |Default value      | New value                         |
| ---------- | ----------------- | ---------------------------------- |
| Text      |     Page Views    | `Open` |
| Text       | 2.6 M             | `{{getTickets.data.filter(t =>  t.status==='open').length}}`|
| Image      | -                 | `https://cdn-icons-png.flaticon.com/512/833/833643.png` |

**Critical ticket stats** 

| Property   |Default value      | New value                         |
| --------   | ----------------- | ---------------------------------- |
| Text      |     Page Views    | `Critical` |
| Text       | 2.6 M             | `{{getTickets.data.filter(t => t.priority==='high' && t.status==='open').length}}`|
| Image      | -                 | `https://cdn-icons-png.flaticon.com/512/2797/2797387.png` |

**Overdue ticket stats** 

| Property |Default value      | New value                         |
| -------  | ----------------- | ---------------------------------- |
| Text    |     Page Views    | `Overdue` |
| Text     | 2.6 M             | `{{getTickets.data.filter(t => t.status==='open' && moment(t.createdAt).diff(moment(),'days') <= -30).length}}`|
| Image    | -                 | `https://cdn-icons-png.flaticon.com/512/10755/10755684.png` |
 
<figure>
  <img src="/img/dashboard-stat-boxes.png" style= {{width:"800px", height:"auto"}} alt="Dashboard Issue Stats"/>
  <figcaption align = "center"><i>Fig 4. Dashboard Issue Stats</i></figcaption>
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

7. Repeat steps 2 to 6 to create another query named `openIssuesByPriority` with the following SQL command to fetch the status and priority of open tickets. 
   
   ```sql
  SELECT status, priority as x, COUNT(*) as y from tickets WHERE status = 'open' GROUP BY priority,status ORDER BY y;
  ```

9. Go back to the canvas by clicking on the **Dashboard** page on the *Entity Explorer*.

## Create column and pie chart

1. Drop a Chart widget below the Stats Box widget. BY default, the **Column Chart** option is selected in the **Chart type** property. Set the other properties as shown below:
    - In the **Series title** property, change the default title from **Sales** to `Issues`. 
    - In the **Series data** property, bind the query result by setting the value to `{{issuesByCategory.data}}`.
    - In the **Title** property, enter the value `Issues by Category`. 
   - Under the **Axis** section, in the **x-axis label** property box, enter `Category`. In the y-axis label property, enter `Issue Count`.

2. Drop another Chart widget to the right of the column chart. Set the properties as shown below:
    - Select the **Pie Chart** option in the **Chart type** property.
    - In the **Series title** property, change the default title from **Sales** to `Issues`. 
    - In the **Series data** property, bind the query results by entering the value `{{openIssuesByPriority.data}}`.- In the **Title** property, enter the value `Open Issues By Priority`. 

  The output should look something like this: 

<figure>
  <img src="/img/final-dashboard-page.png" style= {{width:"800px", height:"auto"}} alt="Dashboard"/>
  <figcaption align = "center"><i>Dashboard</i></figcaption>
</figure>

## Next steps
[View Ticket Details](/getting-started/tutorials/customer-support-tool/view-ticket-details)