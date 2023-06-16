---
sidebar_position: 2
---


# View and Edit Ticket Details

In this section, you'll learn to:
* Use the List widget to display tickets.
* Use the Select widget to filter data in the List.
* Create and edit ticket details in a Modal.
* Write code using JS Objects.

Here's a screenshot of the final result:

<figure>
  <img src="/img/customer-support-tool-tickets.png" style= {{width:"100%", height:"auto"}} alt="Customer Support Tickets"/>
  <figcaption align = "center"><i>Customer Support Tickets</i></figcaption>
</figure>

## Fetch tickets data

1. Select the **Explorer** tab on the *Entity Explorer* to the screen's left. 

2. Click the **+** icon next to **Queries/JS**. 

3. Select **supportTickets query** from the list of options. 

4. Rename the query to `getTickets`. Click the white space below the query name for a blank query editor.  

5. Write the following SQL query.
    ```sql
      SELECT * FROM tickets;
    ```

6. Click the **Run** button on the top right of the screen to execute the query and confirm that it returns data.

7. Click the **Settings** tab. Switch on the **Run query on page load** option.

## Build UI

1. Drop a Text widget, two Select widgets and a Button widget on the canvas.
2. Change the default title on the Text widget from `Label` to `Tickets`.
3. For the first Select widget, in the **Options** property, add the below JSON array object, to populate the status options.
    ```javascript
    [
        {
         "label": "Open",
         "value": "Open"
        },
	    {
         "label": "In Progress",
         "value": "In Progress"
        },
        {
         "label": "Closed",
         "value": "Closed"
        }
    ]
    ```
4. In the **Text** property, enter `Status`.
5. Similarly for the second Select widget, in the **Options** property, add the below JSON array object, to populate the priority options.
```javascript
    [
        {
        "label": "High",
        "value": "High"
        },
	    {
        "label": "Medium",
        "value": "Medium"
        },
        {
         "label": "Low",
        "value": "Low"
        }
    ]
    ```
6. In the **Text** property, enter `Priority`.
7. In the Button widget, change the text in the **Label** property to `Add Ticket`. 
    - In the **Style** tab, select **+** in the **Select icon** list.


<figure>
  <img src="/img/tickets-title-filters-button.png" style= {{width:"800px", height:"auto"}} alt="Tickets Title and Filters"/>
  <figcaption align = "center"><i>Tickets Title and Filters</i></figcaption>
</figure>

## Display tickets in list
1. Drop a List widget on the canvas.
2. In the **Items** property, enter `{{getTickets.data}}`.
3. 
