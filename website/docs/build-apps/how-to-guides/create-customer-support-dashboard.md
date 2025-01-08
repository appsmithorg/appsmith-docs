---
description: Learn how to create a customer support dashboard using Appsmith's widgets and features.
---

# Create a Customer Support Dashboard

This guide shows you how to build a comprehensive customer support dashboard using Appsmith's widgets and features.

## Prerequisites
- A datasource containing customer support tickets. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).
- Basic understanding of Appsmith's [Table](/reference/widgets/table/README.md), [Chart](/reference/widgets/chart), and [Stats Box](/reference/widgets/stat-box) widgets.

## Dashboard Components

### 1. Key Performance Indicators (KPIs)
- Total tickets
- Open tickets
- Average response time
- Customer satisfaction score

### 2. Ticket Management
- Table with ticket details
- Search and filter capabilities
- Status updates
- Priority management

### 3. Analytics and Visualization
- Ticket volume trends
- Resolution time analysis
- Category distribution
- Agent performance metrics

## Overview

A customer support dashboard helps teams monitor and manage support tickets efficiently. This guide shows you how to build a comprehensive dashboard that includes:
- Real-time KPI monitoring
- Ticket management system
- Analytics and reporting
- Search and filter capabilities
- Detailed ticket views

## Implementation Steps

### 1. Set up KPI Metrics using Stats Box

First, let's create a row of Stats Box widgets to display key performance indicators:

1. Drag and drop four **Stats Box** widgets to the canvas and arrange them in a row
2. Configure each Stats Box with appropriate titles and metrics:

   a. **Total Tickets**
   ```javascript
   // In the first text widget of Stats Box
   "Total Tickets"
   // In the second text widget (value)
   {{queries.getTotalTickets.data[0].count}}
   // In the third text widget (optional trend)
   {{Math.round((queries.getTotalTickets.data[0].count - 
     queries.getLastPeriodTickets.data[0].count) / 
     queries.getLastPeriodTickets.data[0].count * 100)}}% vs last period
   ```

   b. **Open Tickets**
   ```javascript
   // Configure similar to Total Tickets
   {{queries.getOpenTickets.data[0].count}}
   ```

   c. **Avg Response Time**
   ```javascript
   // Format the time in hours
   {{Math.round(queries.getAvgResponseTime.data[0].avg_time)}} hours
   ```

   d. **CSAT Score**
   ```javascript
   // Format as percentage
   {{Math.round(queries.getCustomerSatisfaction.data[0].avg_rating * 100)}}%
   ```

3. Style the Stats Box widgets:
   - Use different colors for different metrics (e.g., red for high response times)
   - Add icons to represent each metric
   - Set appropriate border radius and shadows for visual appeal

### 2. Create Ticket Management Interface

Next, let's set up the main ticket management interface using the Table widget:

1. Add a Table widget below the KPI Stats Boxes:
   ```javascript
   // Configure Table Data property with your query
   {{queries.getAllTickets.data}}
   ```

2. Configure the table columns in the property pane:
   - **ticket_id**: Hidden column for reference
   - **customer**: Text column with customer name/email
   - **subject**: Text column with ticket subject
   - **status**: Select column with options:
     ```javascript
     // Options array for status column
     [{
       "label": "Open",
       "value": "open"
     }, {
       "label": "In Progress",
       "value": "in_progress"
     }, {
       "label": "Resolved",
       "value": "resolved"
     }]
     ```
   - **priority**: Select column with custom colors:
     ```javascript
     // Cell background color based on priority
     {{
       currentRow.priority === "high" ? "#FFE0E0" :
       currentRow.priority === "medium" ? "#FFF3E0" :
       "#E0FFE0"
     }}
     ```
   - **created_at**: Date column with formatting:
     ```javascript
     // Date format
     {{moment(currentRow.created_at).format('MMM DD, YYYY HH:mm')}}
     ```
   - **assigned_to**: Select column with agent list

3. Enable key features:
   a. Server-side pagination:
   ```javascript
   // In your getAllTickets query
   SELECT * FROM tickets 
   LIMIT {{Table1.pageSize}} 
   OFFSET {{Table1.pageOffset}}
   ```

   b. Enable search functionality:
   - Turn on "Allow Searching" in properties
   - Configure onSearchTextChanged action:
     ```javascript
     {{
       queries.searchTickets.run({
         searchText: Table1.searchText
       })
     }}
     ```

   c. Enable inline editing:
   - Set "Editable" property to true for status and priority columns
   - Configure onSave action:
     ```javascript
     {{
       queries.updateTicket.run({
         ticketId: currentRow.ticket_id,
         status: currentRow.status,
         priority: currentRow.priority
       })
     }}
     ```

4. Add table customizations:
   - Set appropriate column widths
   - Enable column freezing for important columns
   - Configure row height for better readability
   - Add custom tooltips for status and priority fields

### 3. Add Analytics Visualizations

Now, let's add charts to visualize key metrics and trends:

1. **Ticket Volume Trend** (Line Chart):
   ```javascript
   // Chart Type: Line Chart
   // Series Data:
   {{queries.getTicketTrend.data.map(d => ({
     x: moment(d.date).format('MMM DD'),
     y: d.count
   }))}}
   ```
   - Enable **Adaptive Axis** for better data visibility
   - Add title: "Ticket Volume Over Time"
   - Configure tooltip to show exact counts

2. **Category Distribution** (Pie Chart):
   ```javascript
   // Chart Type: Pie Chart
   // Series Data:
   {{queries.getTicketCategories.data.map(d => ({
     x: d.category,
     y: d.count
   }))}}
   ```
   - Add custom colors for different categories
   - Enable legend display
   - Configure onDataPointClick to filter table:
     ```javascript
     {{
       queries.filterByCategory.run({
         category: Chart1.selectedDataPoint.x
       });
     }}
     ```

3. **Resolution Time by Agent** (Bar Chart):
   ```javascript
   // Chart Type: Bar Chart
   // Series Data:
   {{queries.getResolutionTime.data.map(d => ({
     x: d.agent_name,
     y: Math.round(d.avg_resolution_time)
   }))}}
   ```
   - Sort bars by resolution time
   - Add value labels on bars
   - Use color gradient based on performance

4. Create a dashboard layout:
   - Place charts in a container widget
   - Arrange in a grid layout (2x2)
   - Add refresh button to update all charts:
     ```javascript
     {{
       queries.getTicketTrend.run();
       queries.getTicketCategories.run();
       queries.getResolutionTime.run();
     }}
     ```

### 4. Create Drill-down View

Finally, let's create a detailed view for individual tickets:

1. Add a Modal widget for ticket details:
   ```javascript
   // Configure Modal title
   {{Table1.selectedRow.ticket_id + " - " + Table1.selectedRow.subject}}
   ```

2. Inside the Modal, add:
   - Ticket information section
   - Customer details
   - Communication history
   - Action buttons for status updates

3. Configure the Table widget to open Modal on row click:
   ```javascript
   // In Table onRowSelected action
   {{
     showModal('TicketDetailModal');
     storeValue('selectedTicket', Table1.selectedRow);
     queries.getTicketHistory.run({
       ticketId: Table1.selectedRow.ticket_id
     });
   }}
   ```

4. Add action buttons in Modal:
   - Update Status
   - Assign Agent
   - Add Comment
   - Close Ticket

5. Implement comment functionality:
   ```javascript
   // Add comment action
   {{
     queries.addTicketComment.run({
       ticketId: Table1.selectedRow.ticket_id,
       comment: Input1.text,
       agent: appsmith.user.email
     });
   }}
   ```

## Testing and Deployment

1. Test the dashboard functionality:
   - Verify all KPI metrics update correctly
   - Test table pagination and search
   - Confirm chart interactivity
   - Check drill-down view functionality

2. Add error handling:
   ```javascript
   // Example error handling in updateTicket action
   {{
     queries.updateTicket.run()
       .then(() => {
         showAlert('Ticket updated successfully', 'success');
         closeModal('TicketDetailModal');
       })
       .catch((error) => {
         showAlert('Failed to update ticket: ' + error.message, 'error');
       });
   }}
   ```

3. Optimize performance:
   - Enable caching for queries where appropriate
   - Use server-side pagination for large datasets
   - Implement efficient search indexing

4. Deploy the dashboard:
   - Test in different environments
   - Set up appropriate access controls
   - Configure automated refresh intervals
- Configure Stats Box widgets for key metrics:
  ```javascript
  // Total tickets
  {{queries.getTotalTickets.data[0].count}}
  // Open tickets
  {{queries.getOpenTickets.data[0].count}}
  // Average response time (in hours)
  {{queries.getAvgResponseTime.data[0].avg_time}}
  // Customer satisfaction
  {{queries.getCustomerSatisfaction.data[0].avg_rating}}
  ```

### 2. Create Ticket Management Interface
- Configure Table widget with the following structure:
  ```javascript
  {
    "ticket_id": "string",
    "customer": "string",
    "subject": "string",
    "status": "enum(open, in_progress, resolved)",
    "priority": "enum(low, medium, high)",
    "created_at": "datetime",
    "assigned_to": "string"
  }
  ```
- Enable features:
  - Server-side pagination for large datasets
  - Column sorting and filtering
  - Inline editing for status updates
  - Custom column types for priority levels

### 3. Add Analytics Visualizations
- Configure Chart widgets for:
  - Ticket Volume Trend (Line Chart)
    ```javascript
    {{queries.getTicketTrend.data.map(d => ({
      x: d.date,
      y: d.count
    }))}}
    ```
  - Category Distribution (Pie Chart)
    ```javascript
    {{queries.getTicketCategories.data.map(d => ({
      x: d.category,
      y: d.count
    }))}}
    ```
  - Resolution Time Analysis (Bar Chart)
    ```javascript
    {{queries.getResolutionTime.data.map(d => ({
      x: d.agent,
      y: d.avg_time
    }))}}
    ```

### 4. Implement Search and Filtering
- Add search functionality:
  ```javascript
  // Table search configuration
  {{Table1.searchText ? 
    queries.searchTickets.data :
    queries.getAllTickets.data
  }}
  ```
- Configure filters for:
  - Status
  - Priority
  - Date range
  - Assigned agent

### 5. Create Drill-down Views
- Set up Modal widget for detailed ticket view
- Configure onClick event for table rows:
  ```javascript
  {{
    showModal('TicketDetailModal');
    storeValue('selectedTicket', Table1.selectedRow);
  }}
  ```
- Display ticket history and customer interactions
- Add action buttons for ticket updates

## Data Requirements

### Required Queries
1. Ticket Management:
   - `getAllTickets`: Fetch paginated list of tickets
   - `searchTickets`: Search tickets by keyword
   - `updateTicketStatus`: Update ticket status
   - `updateTicketPriority`: Update ticket priority

2. Analytics:
   - `getTicketTrend`: Get ticket count by date
   - `getTicketCategories`: Get ticket distribution by category
   - `getResolutionTime`: Get average resolution time by agent

3. KPI Metrics:
   - `getTotalTickets`: Count total tickets
   - `getOpenTickets`: Count open tickets
   - `getAvgResponseTime`: Calculate average response time
   - `getCustomerSatisfaction`: Calculate average satisfaction rating

## Layout Recommendations
1. Top Section:
   - Four Stats Box widgets in a row for KPIs
2. Middle Section:
   - Table widget for ticket management (60% width)
   - Chart widgets for analytics (40% width)
3. Bottom Section:
   - Detailed analytics charts in a grid layout
4. Modal:
   - Ticket details view with full history

## Next Steps
After implementing the basic dashboard:
1. Add real-time updates using websockets
2. Implement export functionality for reports
3. Add user role-based access control
4. Set up email notifications for ticket updates
